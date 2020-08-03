import React, { useState } from 'react';

import ChoosePool from './ChoosePool';
import ManageStake from './ManageStake';

const Staker = ({ goBack }) => {
	const [currentPool, setCurrentPool] = useState(null);

	if (currentPool === null) {
		return <ChoosePool setCurrentPool={setCurrentPool} />;
	}
	return <ManageStake goBack={goBack} />;
};

export default Staker;
