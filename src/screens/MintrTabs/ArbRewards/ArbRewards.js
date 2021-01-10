import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import UniPoolsTRX from '../UniPoolsTRX';
import UniPoolsETH from '../UniPoolsETH';
import UniPoolTRXUSDT from '../UniPoolUSDT';
import UniPoolSUSD from '../UniPoolSUSD';
import ArbPoolsTRX from '../sTRXArbPool'
import { H1, PageTitle } from '../../../components/Typography';
import PageContainer from '../../../components/PageContainer';

const ROW_1 = [
	{
		title: 'lpRewards.actions.unipoolSETH.title',
		name: 'swapsTRX',
	}
];
const ROW_2 = [
 	
];
const ArbRewards = () => {
	const { t } = useTranslation();
	const [currentPool, setCurrentPool] = useState(null);
	const goBack = () => setCurrentPool(null);

	const getPoolComponent = poolName => {
		switch (poolName) {
			case 'swapsTRX':
				return <ArbPoolsTRX goBack={goBack} />;
			case 'swapSETH':
				return <UniPoolsETH goBack={goBack} />;
			case 'swapTRXUSDT':
				return <UniPoolTRXUSDT goBack={goBack} />;
			case 'swapSUSDUSDT':
					return <UniPoolSUSD goBack={goBack} />;				

		}
	};

	return (
		<PageContainer>
			{currentPool ? (
				getPoolComponent(currentPool)
			) : (
				<>
					<PageTitle>{t('ArbRewards.intro.title')}</PageTitle>
					<ButtonRow>
						{ROW_1.map(({ title, name }) => {
							let _name, _icon;
							if (name === 'swapsTRX') {
								_name = 'unipoolSTRX';
								_icon = 'sTRX';
							} else if (name === 'swapSETH') {
								_name = 'unipoolSETH';
								_icon = 'sETH';
							}
							return (
								<Button onClick={() => setCurrentPool(name)} key={Math.random()}>
									<ButtonContainer>
										<ActionImage src={`/images/${_icon}-icon.svg`} big />
										<H1>{t(`lpRewards.actions.${_name}.title`)}</H1>
									</ButtonContainer>
								</Button>
							);
						})}
					</ButtonRow>
					<br />
					<ButtonRow>
						{ROW_2.map(({ title, name }) => {
							let _name, _icon;
							if (name === 'swapTRXUSDT') {
								_name = 'unipoolUSDTRX';
							} else 	if (name === 'swapSUSDUSDT') {
								_name = 'unipoolSUSDUSDT';
							}  
							return (
								<Button onClick={() => setCurrentPool(name)} key={Math.random()}>
									<ButtonContainer>
										<ActionImage src={`/images/oi-SWAP.svg`} big />
										<H1>{t(`lpRewards.actions.${_name}.title`)}</H1>
									</ButtonContainer>
								</Button>
							);
						})}
					</ButtonRow>					
				</>
			)}
		</PageContainer>
	);
};

const Button = styled.button`
	flex: 1;
	cursor: pointer;
	height: 352px;
	max-width: 352px;
	background-color: ${props => props.theme.colorStyles.panelButton};
	border: 1px solid ${props => props.theme.colorStyles.borders};
	border-radius: 5px;
	box-shadow: 0px 5px 10px 5px ${props => props.theme.colorStyles.shadow1};
	transition: transform ease-in 0.2s;
	&:hover {
		background-color: ${props => props.theme.colorStyles.panelButtonHover};
		box-shadow: 0px 5px 10px 8px ${props => props.theme.colorStyles.shadow1};
		transform: translateY(-2px);
	}
	&:first-child {
		margin-right: 20px;
	}
`;

const ButtonContainer = styled.div`
	padding: 10px;
	margin: 0 auto;
`;

const ButtonRow = styled.div`
	display: flex;
	justify-content: space-between;
	margin: ${props => (props.margin ? props.margin : 0)};
`;

const ActionImage = styled.img`
	height: ${props => (props.big ? '64px' : '48px')};
	width: ${props => (props.big ? '64px' : '48px')};
`;

export default ArbRewards;
