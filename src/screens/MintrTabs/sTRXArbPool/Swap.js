/* eslint-disable */
import React, { useState, useContext, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import snxJSConnector from '../../../helpers/snxJSConnector';
import { Store } from '../../../store';

import { bigNumberFormatter, formatCurrency, formatUniv1, formatMicroUni } from '../../../helpers/formatters';
import TransactionPriceIndicator from '../../../components/TransactionPriceIndicator';
import { updateGasLimit } from '../../../ducks/network';

import { PageTitle, PLarge } from '../../../components/Typography';
import DataBox from '../../../components/DataBox';
import { ButtonTertiary, ButtonPrimary } from '../../../components/Button';
import Input from '../../../components/Input';
import promiseRetry from 'promise-retry';

import ArbRewardsActionsSTRX from '../../ArbRewardsActionsSTRX';
 


const TRANSACTION_DETAILS = {
	swap: {
		contractFunction: 'arbSynthRate',
		gasLimit: 0,
	}
};

const Swap = ({ t, onDestroy, goBack }) => {
	
	const [balances, setBalances] = useState(null);
	const [currentScenario, setCurrentScenario] = useState({});
	const [isMicroUniv1Held, setisMicroUniv1Held] = useState(false);
	const [trxToArb, settrxToArb] = useState(0);
	const {
		state: {
			wallet: { currentWallet },
		},
		dispatch,
	} = useContext(Store);

	const retry = fn => {
		return promiseRetry(
			async retry => {
				try {
					return await fn();
				} catch (err) {
					retry(err);
				}
			},
			{ retries: 10 }
		);
	};
	
	const fetchData = useCallback(async () => {

		
		if (!snxJSConnector.initialized) return;
		if (!currentWallet) return;

		try {
			const { arbrewarderstrxContract } = snxJSConnector;
			let [strxBalance, rewards, trxWalletBalance, trxBalance] = await Promise.all([
				retry(() => arbrewarderstrxContract.uniswapSynthBalance().call({ _isConstant: true })),
				retry(() => snxJSConnector.snxJS.Synthetix.collateral(arbrewarderstrxContract.address)),
				retry(() => snxJSConnector.provider.getBalance(currentWallet)),
				retry(() => arbrewarderstrxContract.uniswapTRXBalance().call({ _isConstant: true }))
			]);
 
			const ratio = (trxBalance*10**(18-6)) / strxBalance
			const bonusRate = ratio * 100;
			setBalances({
				trxWalletBalance: window.tronWeb.fromSun(window.tronWeb.BigNumber(trxWalletBalance).toString()),
				ratio: ratio,
				bonusRate: bonusRate,
				rewards: bigNumberFormatter(rewards),
			});

			//updateGasLimit(TRANSACTION_DETAILS.stake.gasLimit, dispatch);
		} catch (e) {
			console.log(e);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentWallet, snxJSConnector.initialized]);

	useEffect(() => {
		fetchData();
		const interval = setInterval(() => fetchData(), 1000);
		return () => clearInterval(interval);
	}, [fetchData]);


 
	return (
		<Container>
			<ArbRewardsActionsSTRX {...currentScenario} onDestroy={() => setCurrentScenario({})} />
			<Navigation>
				<ButtonTertiary onClick={goBack}>{t('button.navigation.cancel')}</ButtonTertiary>
 
			</Navigation>
			<PageTitle>{t('ArbRewards.sTRX.title')}</PageTitle>
			<PLarge>{t('ArbRewards.sTRX.subtitle')}</PLarge>
			<BoxRow>
				<DataBox
					heading={t('ArbRewards.general.trxPrice')}
					body={`${balances ? formatCurrency(balances.ratio)  : 0} TRX`}
				/>
				<DataBox
					heading={t('ArbRewards.general.bonusRate')}
					body={`${balances ? formatCurrency(balances.bonusRate)  : 0} %`}
				/>
				<DataBox
					heading={t('unipool.unlocked.data.rewardsAvailable')}
					body={`${balances ? formatCurrency(balances.rewards) : 0} OKS`}
				/>
			</BoxRow>
			<ButtonBlock>
				<ButtonRow>
					<Input
						singleSynth={'TRX'}
						onChange={e =>  { settrxToArb(e.target.value)}}
						placeholder="0.00"
						marginTop="20px"
						/>&nbsp;&nbsp;&nbsp;&nbsp;
					<ButtonAction
						disabled={!balances || !balances.trxWalletBalance}
						onClick={() =>
							setCurrentScenario({
								action: 'swap',
								label: t('ArbRewards.actions.swap'),
								amount: `${trxToArb } TRX` ,
								param: balances && balances.univ1HeldBN,
								...TRANSACTION_DETAILS['swap'],
								value: trxToArb
							})
						}
					>
						{t('ArbRewards.labels.swap')}
					</ButtonAction>
				</ButtonRow>
				
			</ButtonBlock>
		</Container>
	);
};

const Container = styled.div`
	min-height: 850px;
`;

const Navigation = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 40px;
`;

const BoxRow = styled.div`
	margin-top: 42px;
	display: flex;
`;

const ButtonBlock = styled.div`
	margin-top: 58px;
`;

const ButtonRow = styled.div`
	display: flex;
	margin-bottom: 28px;
`;

const ButtonAction = styled(ButtonPrimary)`
	flex: 1;
	width: 10px;
	&:first-child {
		margin-right: 34px;
	}
`;

export default withTranslation()(Swap);
