import React, { useContext, useState, useEffect } from 'react';

import snxJSConnector from '../../helpers/snxJSConnector';
import { GWEI_UNIT } from '../../helpers/networkHelper';
import { Store } from '../../store';
import Slider, { SliderContext } from '../../components/ScreenSlider';

import Confirmation from './Confirmation';
import Complete from './Complete';
import { createTransaction } from '../../ducks/transactions';
import errorMapper from '../../helpers/errorMapper';

const SliderController = ({ amount, label, contractFunction, gasLimit, onDestroy, param, value }) => {
	const [transactionInfo, setTransactionInfo] = useState({});
	const { handleNext, hasLoaded } = useContext(SliderContext);
	const {
		state: {
			wallet: { walletType, networkName },
			network: {
				settings: { gasPrice },
			},
		},
		dispatch,
	} = useContext(Store);

	useEffect(() => {
		const { arbrewarderstrxContract } = snxJSConnector;
		const run = async () => {
			if (!hasLoaded) return;
			try {
				const transactionSettings = {
					//gasPrice: gasPrice * GWEI_UNIT,
					//gasLimit,
					callValue:value*1000000
				};
				const transaction = await arbrewarderstrxContract[contractFunction]().send(transactionSettings);

				//console.log(transaction);
				if (transaction) {
					setTransactionInfo({ transactionHash: transaction });
					createTransaction(
						{
							hash: transaction,
							status: 'pending',
							info: label,
							hasNotification: true,
						},
						dispatch
					);
					handleNext(2);
				}
			} catch (e) {
				console.log(e);
				const errorMessage = errorMapper(e, walletType);
				console.log(errorMessage);
				setTransactionInfo({ ...transactionInfo, transactionError: errorMessage });
				handleNext(2);
			}
		};
		run();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hasLoaded]);

	const props = {
		onDestroy,
		walletType,
		amount,
		label,
		...transactionInfo,
		networkName,
	};
	return [Confirmation, Complete].map((SlideContent, i) => <SlideContent key={i} {...props} />);
};

const ArbRewardsActionsSTRX = props => {
	if (!props.action) return null;
	return (
		<Slider>
			<SliderController {...props} />
		</Slider>
	);
};

export default ArbRewardsActionsSTRX;
