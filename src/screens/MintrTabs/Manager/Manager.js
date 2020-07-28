import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { H1, PageTitle } from '../../../components/Typography';

const ACTIONS = [
	[
		{
			name: 'mint',
		},
		{
			name: 'depot',
		},
		{
			name: 'withdraw',
		},
	],
	[
		{
			name: 'swap',
		},
		{
			name: 'trade',
		},
		{
			name: 'manage',
		},
	],
];

const Manager = () => {
	const { t } = useTranslation();

	return (
		<Container>
			<PageTitle>{t('staking.manager.intro.title')}</PageTitle>
			{ACTIONS.map(actionGroup => (
				<ButtonRow key={Math.random()}>
					{actionGroup.map(({ name }) => (
						<Button onClick={() => {}} key={Math.random()}>
							<H1 fontSize={30} lineHeight={1.4} margin={0}>
								{t(`staking.manager.actions.${name}`)}
							</H1>
						</Button>
					))}
				</ButtonRow>
			))}
		</Container>
	);
};

const Container = styled.div``;

const Button = styled.button`
	flex: 1;
	cursor: pointer;
	height: 223px;
	max-width: 223px;
	background-color: ${props => props.theme.colorStyles.panelButton};
	border: 1px solid ${props => props.theme.colorStyles.borders};
	border-radius: 5px;
	box-shadow: 0px 5px 10px 5px ${props => props.theme.colorStyles.shadow1};
	padding: 10px;
	margin-right: 20px;
	transition: transform ease-in 0.2s;
	&:hover {
		background-color: ${props => props.theme.colorStyles.panelButtonHover};
		box-shadow: 0px 5px 10px 8px ${props => props.theme.colorStyles.shadow1};
		transform: translateY(-2px);
	}
	&:last-child {
		margin-right: 0;
	}
`;

const ButtonRow = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
`;

export default Manager;
