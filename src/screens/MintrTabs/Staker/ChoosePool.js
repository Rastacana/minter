import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { H1, H2, PageTitle } from '../../../components/Typography';

const POOLS = [
	{
		name: 'hoo',
		rate: 3.11,
	},
	{
		name: 'biki',
		rate: 7.8,
	},
	{
		name: 'mxc',
		rate: 13.11,
	},
];

const ChoosePool = ({ setCurrentPool }) => {
	const { t } = useTranslation();

	return (
		<>
			<PageTitle>{t('staking.staker.choosePool.intro.title')}</PageTitle>
			<ButtonRow>
				{POOLS.map(pool => {
					const { name, rate } = pool;
					return (
						<Button onClick={() => setCurrentPool(pool)} key={Math.random()}>
							<ButtonContainer>
								<PoolInfo>
									<H1>{t(`staking.staker.choosePool.actions.${name}.title`)}</H1>
									<Info>
										<H1>{rate}%</H1>
										<H1 margin="0">{t(`staking.staker.choosePool.actions.${name}.code`)}</H1>
									</Info>
								</PoolInfo>
								<Logo>Logo</Logo>
							</ButtonContainer>
						</Button>
					);
				})}
			</ButtonRow>
			<H2 fontSize={25} lineHeight={1.5}>
				{t('staking.staker.choosePool.intro.disclaimer')}
			</H2>
		</>
	);
};

const Button = styled.button`
	flex: 1;
	cursor: pointer;
	height: 292px;
	max-width: 224px;
	background-color: ${props => props.theme.colorStyles.panelButton};
	border: 1px solid ${props => props.theme.colorStyles.borders};
	border-radius: 5px;
	box-shadow: 0px 5px 10px 5px ${props => props.theme.colorStyles.shadow1};
	transition: transform ease-in 0.2s;
	margin-right: 20px;
	&:hover {
		background-color: ${props => props.theme.colorStyles.panelButtonHover};
		box-shadow: 0px 5px 10px 8px ${props => props.theme.colorStyles.shadow1};
		transform: translateY(-2px);
	}
	&:last-child {
		margin-right: 0;
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

const PoolInfo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

const Logo = styled.div`
	margin: 32px 0;
	font-size: 32px;
	color: #ffffff;
	letter-spacing: 2px;
	font-family: 'apercu-bold', sans-serif;
`;

export default ChoosePool;
