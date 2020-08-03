import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Staker from '../Staker';
import Manager from '../Manager';

import { H1, PageTitle } from '../../../components/Typography';
import PageContainer from '../../../components/PageContainer';

const ROLES = [
	{
		name: 'staker',
	},
	{
		name: 'manager',
	},
];

const Staking = () => {
	const { t } = useTranslation();
	const [currentRole, setCurrentRole] = useState(null);
	const goBack = () => setCurrentRole(null);

	const getPoolComponent = roleName => {
		switch (roleName) {
			case 'staker':
				return <Staker goBack={goBack} />;
			case 'manager':
				return <Manager goBack={goBack} />;
		}
	};

	return (
		<PageContainer>
			{currentRole ? (
				getPoolComponent(currentRole)
			) : (
				<>
					<PageTitle>{t('staking.intro.title')}</PageTitle>
					<ButtonRow>
						{ROLES.map(({ name }) => {
							let _name;
							if (name === 'staker') {
								_name = 'roleStaker';
							} else if (name === 'manager') {
								_name = 'roleManager';
							}
							return (
								<Button onClick={() => setCurrentRole(name)} key={Math.random()}>
									<ButtonContainer>
										<H1>{t(`staking.actions.${_name}.title`)}</H1>
										<Placeholder>{t(`staking.actions.${_name}.placeholder`)}</Placeholder>
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

const Placeholder = styled.div`
	margin: 40px 0;
	font-size: 32px;
	color: #ffffff;
	letter-spacing: 2px;
	font-family: 'apercu-bold', sans-serif;
`;

export default Staking;
