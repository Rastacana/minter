/* eslint-disable */
import React, { useState, useContext, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';

import snxJSConnector from '../../../helpers/snxJSConnector';
import { Store } from '../../../store';

import { bigNumberFormatter, formatCurrency, formatUniv1 } from '../../../helpers/formatters';
import TransactionPriceIndicator from '../../../components/TransactionPriceIndicator';
import { updateGasLimit } from '../../../ducks/network';

import { PageTitle, PLarge } from '../../../components/Typography';
import DataBox from '../../../components/DataBox';
import { ButtonTertiary, ButtonPrimary } from '../../../components/Button';

import UnipoolActions from '../../UnipoolActionsTRX';

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
	const { unipoolstrxContract, oldunipoolstrxContract } = snxJSConnector;
	const [balances, setBalances] = useState(null);
	const [currentScenario, setCurrentScenario] = useState({});
	const [withdrawAmount, setWithdrawAmount] = useState('');
	const [oldBalance, setOldBalance] = useState(0);

	const {
		state: {
			wallet: { currentWallet },
		},
		dispatch,
	} = useContext(Store);

	const fetchData = useCallback(async () => {
		if (!snxJSConnector.initialized) return;
		try {
			const { uniswapstrxContract, unipoolstrxContract } = snxJSConnector;
			const [univ1Held, univ1Staked, rewards] = await Promise.all([
				uniswapstrxContract.balanceOf(currentWallet).call(),
				unipoolstrxContract.balanceOf(currentWallet).call(),
				unipoolstrxContract.earned(currentWallet).call(),
			]);
			setBalances({
				univ1Held: formatUniv1(univ1Held),
				univ1HeldBN: univ1Held,
				univ1Staked: formatUniv1(univ1Staked),
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
		const { uniswapstrxContract, unipoolstrxContract } = snxJSConnector;
		(async () => {
			/*const res = await oldunipoolstrxContract.balanceOf(currentWallet).call();
			if (res) {
				//console.error("has balance in old contract")
				setOldBalance(res);
			}*/
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentWallet]);

	return (
		<Container>
			<UnipoolActions {...currentScenario} onDestroy={() => setCurrentScenario({})} />
			<Navigation>
				<ButtonTertiary onClick={goBack}>{t('button.navigation.cancel')}</ButtonTertiary>

				<ButtonTertiary
					as="a"
					target="_blank"
					href="https://swap.oikos.cash/#/pools"
				>
					{t('unipoolSTRX.unlocked.buttonText')}
				</ButtonTertiary>
			</Navigation>
			<PageTitle>{t('unipoolSTRX.unlocked.title')}</PageTitle>
			<PLarge>{t('unipoolSTRX.unlocked.subtitle')}</PLarge>
			<BoxRow>
				<DataBox
					heading={t('unipoolSTRX.unlocked.data.balance')}
					body={`${balances ? formatCurrency(balances.univ1Held) : 0} SWAP`}
				/>
				<DataBox
					heading={t('unipoolSTRX.unlocked.data.staked')}
					body={`${balances ? formatCurrency(balances.univ1Staked) : 0} SWAP`}
				/>
				<DataBox
					heading={t('unipoolSTRX.unlocked.data.rewardsAvailable')}
					body={`${balances ? formatCurrency(balances.rewards) : 0} OKS`}
				/>
			</BoxRow>
			<ButtonBlock>
				<ButtonRow>
					<ButtonAction
						disabled={!balances || !balances.univ1Held}
						onClick={() =>
							setCurrentScenario({
								action: 'stake',
								label: t('unipoolSTRX.unlocked.actions.staking'),
								amount: `${balances && formatCurrency(balances.univ1Held)} SWAP`,
								param: balances && balances.univ1HeldBN,
								...TRANSACTION_DETAILS['stake'],
							})
						}
					>
						{t('unipoolSTRX.buttons.stake')}
					</ButtonAction>
					<ButtonAction
						disabled={!balances || !balances.rewards}
						onClick={() =>
							setCurrentScenario({
								action: 'claim',
								label: t('unipoolSTRX.unlocked.actions.claiming'),
								amount: `${balances && formatCurrency(balances.rewards)} OKS`,
								...TRANSACTION_DETAILS['claim'],
							})
						}
					>
						{t('unipoolSTRX.buttons.claim')}
					</ButtonAction>
				</ButtonRow>
				<ButtonRow>
					<ButtonAction
						disabled={!balances || !balances.univ1Staked}
						onClick={() =>
							setCurrentScenario({
								action: 'unstake',
								label: t('unipoolSTRX.unlocked.actions.unstaking'),
								amount: `${balances && formatCurrency(balances.univ1Staked)} SWAP`,
								param: balances && balances.univ1StakedBN,
								...TRANSACTION_DETAILS['unstake'],
							})
						}
					>
						{t('unipoolSTRX.buttons.unstake')}
					</ButtonAction>
					<ButtonAction
						disabled={!balances || (!balances.univ1Staked && !balances.rewards)}
						onClick={() =>
							setCurrentScenario({
								action: 'exit',
								label: t('unipoolSTRX.unlocked.actions.exiting'),
								amount: `${balances && formatCurrency(balances.univ1Staked)} SWAP & ${balances &&
									formatCurrency(balances.rewards)} OKS`,
								...TRANSACTION_DETAILS['exit'],
							})
						}
					>
						{t('unipoolSTRX.buttons.exit')}
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
