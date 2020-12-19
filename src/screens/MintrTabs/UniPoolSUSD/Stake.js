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

import UnipoolActions from '../../UnipoolActionsSUSD';

const TRANSACTION_DETAILS = {
	stake: {
		contractFunction: 'stake',
		gasLimit: 120000,
	},
	claim: {
		contractFunction: 'getReward',
		gasLimit: 200000,
	},
	unstake: {
		contractFunction: 'withdraw',
		gasLimit: 125000,
	},
	exit: {
		contractFunction: 'exit',
		gasLimit: 250000,
	},
	migrate: {
		contractFunction: 'exit',
		gasLimit: 250000,
	},
};

const Stake = ({ t, goBack }) => {
	const [balances, setBalances] = useState(null);
	const [currentScenario, setCurrentScenario] = useState({});
	const [withdrawAmount, setWithdrawAmount] = useState('');
	const [oldBalance, setOldBalance] = useState(0);
	const [isMicro, setisMicro] = useState(false);
	const [isMicroUniv1Held, setisMicroUniv1Held] = useState(false);
	const [isMicroUniv1Staked, setisMicroUniv1Staked] = useState(false);

	const {
		state: {
			wallet: { currentWallet },
		},
		dispatch,
	} = useContext(Store);

	const fetchData = useCallback(async () => {

		if (!snxJSConnector.initialized) return;
		try {

			const { uniswapsusdusdtContract, unipoolsusdusdtContract } = snxJSConnector;
			 
			let [univ1Held, univ1Staked, rewards] = await Promise.all([
				uniswapsusdusdtContract.balanceOf(currentWallet).call({ _isConstant: true }),
				unipoolsusdusdtContract.balanceOf(currentWallet).call(),
				unipoolsusdusdtContract.earned(currentWallet).call(),
			]);

			const threshold = 0.00001
			let parsedUniv1Held = Number(formatUniv1(univ1Held, 18))
			let parsedUniv1Staked = Number(formatUniv1(univ1Staked, 18))

			//console.log(parsedUniv1Held < threshold, parsedUniv1Held)

			if (parsedUniv1Held > 0 && (parsedUniv1Held < threshold)) {
			   console.log("micro balance held")
			   setisMicroUniv1Held(true);
		    } 
		    if (parsedUniv1Staked > 0 && (parsedUniv1Staked < threshold)) {
			   console.log("micro balance staked")
			   setisMicroUniv1Staked(true);
			} 

			setBalances({
				univ1Held: univ1Held,
				univ1HeldBN: univ1Held,
				univ1Staked: univ1Staked,
				univ1StakedBN: univ1Staked,
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

	useEffect(() => {
		if (!currentWallet) return;
		//const {uniswapsusdusdtContract, unipoolsusdusdtContract  } = snxJSConnector;
		(async () => {
			/*const res = await oldunipoolstrxContract.balanceOf(currentWallet).call();
			if (res) {
				//console.error("has balance in old contract")
				setOldBalance(res);
			}*/
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentWallet]);

	const labelHeld = isMicroUniv1Held ? "mSWAP" : "SWAP"
	const labelStaked = isMicroUniv1Staked ? "mSWAP" : "SWAP"

	return (
		<Container>
			<UnipoolActions {...currentScenario} onDestroy={() => setCurrentScenario({})} />
			<Navigation>
				<ButtonTertiary onClick={goBack}>{t('button.navigation.cancel')}</ButtonTertiary>

				<ButtonTertiary
					as="a"
					target="_blank"
					href="https://swap.oikos.cash/#/pool"
				>
					{t('unipool.unlocked.buttonText')}
				</ButtonTertiary>
			</Navigation>
			<PageTitle>{t('unipool.unlocked.title')}</PageTitle>
			<PLarge>{t('unipool.unlocked.subtitle')}</PLarge>
			<BoxRow>
				<DataBox
					heading={t('unipool.unlocked.data.balance')}
					body={`${isMicroUniv1Held ? (balances ? formatMicroUni(balances.univ1Held) : 0) :  (balances ? formatUniv1(balances.univ1Held, 6) : 0) } ` + labelHeld}
				/>
				<DataBox
					heading={t('unipool.unlocked.data.staked')}
					body={`${ isMicroUniv1Staked ? (balances ? formatMicroUni(balances.univ1Staked) : 0) :  (balances ? formatUniv1(balances.univ1Staked, 6) : 0) } ` + labelStaked}
				/>
				<DataBox
					heading={t('unipool.unlocked.data.rewardsAvailable')}
					body={`${balances ? formatCurrency(balances.rewards) : 0} OKS`}
				/>
			</BoxRow>
			<ButtonBlock>
				<ButtonRow>
					<ButtonAction
						disabled={!balances || !(balances.univ1Held > 0)}
						onClick={() =>
							setCurrentScenario({
								action: 'stake',
								label: t('unipool.unlocked.actions.staking'),
								amount: `${isMicroUniv1Held ? (balances ? formatMicroUni(balances.univ1Held) : 0) :  (balances ? formatUniv1(balances.univ1Held, 6) : 0) } ` + labelStaked,
								param: balances && isMicroUniv1Held ? balances.univ1Held : balances.univ1HeldBN ,
								...TRANSACTION_DETAILS['stake'],
							})
						}
					>
						{t('unipool.buttons.stake')}
					</ButtonAction>
					<ButtonAction
						disabled={!balances || !(balances.rewards > 0)}
						onClick={() =>
							setCurrentScenario({
								action: 'claim',
								label: t('unipool.unlocked.actions.claiming'),
								amount: `${balances && formatCurrency(balances.rewards)} OKS`,
								...TRANSACTION_DETAILS['claim'],
							})
						}
					>
						{t('unipool.buttons.claim')}
					</ButtonAction>
				</ButtonRow>
				<ButtonRow>
					<ButtonAction
						disabled={!balances || !(balances.univ1Staked > 0)}
						onClick={() =>
							setCurrentScenario({
								action: 'unstake',
								label: t('unipool.unlocked.actions.unstaking'),
								amount: `${ isMicroUniv1Staked ? (balances ? formatMicroUni(balances.univ1Staked) : 0) :  (balances ? formatUniv1(balances.univ1Staked, 6) : 0) } ` + labelStaked,
								param: balances && balances.univ1StakedBN,
								...TRANSACTION_DETAILS['unstake'],
							})
						}
					>
						{t('unipool.buttons.unstake')}
					</ButtonAction>
					<ButtonAction
						disabled={!balances || !(balances.univ1Staked > 0)}
						onClick={() =>
							setCurrentScenario({
								action: 'exit',
								label: t('unipool.unlocked.actions.exiting'),
								amount: `${ isMicroUniv1Staked ? (balances ? formatMicroUni(balances.univ1Staked) : 0) :  (balances ? formatUniv1(balances.univ1Staked, 6) : 0) } ${labelStaked} & ${balances &&
									formatCurrency(balances.rewards)} OKS`,
								...TRANSACTION_DETAILS['exit'],
							})
						}
					>
						{t('unipool.buttons.exit')}
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

export default withTranslation()(Stake);
