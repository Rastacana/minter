import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { H1, PageTitle } from '../../../components/Typography';

const ManageStake = ({ goBack }) => {
	const { t } = useTranslation();

	return (
		<>
			<PageTitle>{t('staking.staker.manageStake.intro.title')}</PageTitle>
			<ButtonRow margin="0 0 50px 0">
				<Button onClick={() => {}}>
					<ButtonContainer>
						<H1 fontSize={50} lineHeight={1.5}>
							{t(`staking.staker.manageStake.actions.deposit`)}
						</H1>
					</ButtonContainer>
				</Button>
				<Button onClick={() => {}}>
					<ButtonContainer>
						<H1 fontSize={50} lineHeight={1.5}>
							{t(`staking.staker.manageStake.actions.withdraw`)}
						</H1>
					</ButtonContainer>
				</Button>
			</ButtonRow>
			<ExitButton onClick={() => goBack()}>
				<ButtonContainer>
					<H1 margin="0">{t(`staking.staker.manageStake.actions.exit`)}</H1>
				</ButtonContainer>
			</ExitButton>
		</>
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

const ExitButton = styled.button`
	flex: 1;
	cursor: pointer;
	height: 120px;
	max-width: 100%;
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

export default ManageStake;
