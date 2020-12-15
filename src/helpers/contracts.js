const addresses = require('@oikos/swap/addresses.json');
//OLD contract 4115909315aadea0064b67634d2c9d54805d0b409c
//Last contract 415ea3ad9cfa4b303689cdd78e63cd2be9266d3173
export default {
	unipoolTRXUSDT: {
		//oldAddress: '41e8f14e5566f93c0ea5a137b89692770fc1d15338',
		address: '41e8f14e5566f93c0ea5a137b89692770fc1d15338',
		abi: [
			{
				constant: true,
				inputs: [{ name: 'account', type: 'address' }],
				name: 'earned',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: '', type: 'address' }],
				name: 'rewards',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: '_rewardDistribution', type: 'address' }],
				name: 'setRewardDistribution',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'totalSupply',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'DURATION',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'amount', type: 'uint256' }],
				name: 'withdraw',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'reward', type: 'uint256' }],
				name: 'notifyRewardAmount',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'getReward',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: 'account', type: 'address' }],
				name: 'balanceOf',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'renounceOwnership',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardRate',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'lastTimeRewardApplicable',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: '', type: 'address' }],
				name: 'userRewardPerTokenPaid',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'owner',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'isOwner',
				outputs: [{ name: '', type: 'bool' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'amount', type: 'uint256' }],
				name: 'stake',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'lastUpdateTime',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardPerToken',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardPerTokenStored',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'snx',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'exit',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'periodFinish',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'uni',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'newOwner', type: 'address' }],
				name: 'transferOwnership',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				anonymous: false,
				inputs: [{ indexed: false, name: 'reward', type: 'uint256' }],
				name: 'RewardAdded',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'amount', type: 'uint256' },
				],
				name: 'Staked',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'amount', type: 'uint256' },
				],
				name: 'Withdrawn',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'reward', type: 'uint256' },
				],
				name: 'RewardPaid',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'previousOwner', type: 'address' },
					{ indexed: true, name: 'newOwner', type: 'address' },
				],
				name: 'OwnershipTransferred',
				type: 'event',
			},
		],
	},	
	unipoolSUSDUSDT: {
		//oldAddress: '41e8f14e5566f93c0ea5a137b89692770fc1d15338',
		address: '41c6471669080f19741699f4324f41766c04c488bc',
		abi: [
			{
				constant: true,
				inputs: [{ name: 'account', type: 'address' }],
				name: 'earned',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: '', type: 'address' }],
				name: 'rewards',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: '_rewardDistribution', type: 'address' }],
				name: 'setRewardDistribution',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'totalSupply',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'DURATION',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'amount', type: 'uint256' }],
				name: 'withdraw',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'reward', type: 'uint256' }],
				name: 'notifyRewardAmount',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'getReward',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: 'account', type: 'address' }],
				name: 'balanceOf',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'renounceOwnership',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardRate',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'lastTimeRewardApplicable',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: '', type: 'address' }],
				name: 'userRewardPerTokenPaid',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'owner',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'isOwner',
				outputs: [{ name: '', type: 'bool' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'amount', type: 'uint256' }],
				name: 'stake',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'lastUpdateTime',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardPerToken',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardPerTokenStored',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'snx',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'exit',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'periodFinish',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'uni',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'newOwner', type: 'address' }],
				name: 'transferOwnership',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				anonymous: false,
				inputs: [{ indexed: false, name: 'reward', type: 'uint256' }],
				name: 'RewardAdded',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'amount', type: 'uint256' },
				],
				name: 'Staked',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'amount', type: 'uint256' },
				],
				name: 'Withdrawn',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'reward', type: 'uint256' },
				],
				name: 'RewardPaid',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'previousOwner', type: 'address' },
					{ indexed: true, name: 'newOwner', type: 'address' },
				],
				name: 'OwnershipTransferred',
				type: 'event',
			},
		],
	},		
	unipoolstrx: {
		//oldAddress: '415ea3ad9cfa4b303689cdd78e63cd2be9266d3173',
		address: '41239d6416095bf0310ccdf0da6c7485ff87cd9ef1',
		abi: [
			{
				constant: true,
				inputs: [{ name: 'account', type: 'address' }],
				name: 'earned',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: '', type: 'address' }],
				name: 'rewards',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: '_rewardDistribution', type: 'address' }],
				name: 'setRewardDistribution',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'totalSupply',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'DURATION',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'amount', type: 'uint256' }],
				name: 'withdraw',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'reward', type: 'uint256' }],
				name: 'notifyRewardAmount',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'getReward',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: 'account', type: 'address' }],
				name: 'balanceOf',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'renounceOwnership',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardRate',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'lastTimeRewardApplicable',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: '', type: 'address' }],
				name: 'userRewardPerTokenPaid',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'owner',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'isOwner',
				outputs: [{ name: '', type: 'bool' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'amount', type: 'uint256' }],
				name: 'stake',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'lastUpdateTime',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardPerToken',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardPerTokenStored',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'snx',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'exit',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'periodFinish',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'uni',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'newOwner', type: 'address' }],
				name: 'transferOwnership',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				anonymous: false,
				inputs: [{ indexed: false, name: 'reward', type: 'uint256' }],
				name: 'RewardAdded',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'amount', type: 'uint256' },
				],
				name: 'Staked',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'amount', type: 'uint256' },
				],
				name: 'Withdrawn',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'reward', type: 'uint256' },
				],
				name: 'RewardPaid',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'previousOwner', type: 'address' },
					{ indexed: true, name: 'newOwner', type: 'address' },
				],
				name: 'OwnershipTransferred',
				type: 'event',
			},
		],
	},
	unipoolseth: {
		//oldAddress: '41b14f2fb611e32725e9fb5fe2e285390e9ab60feb',
		address: '41158e29f1a28f7fd873cfb9db760e8a9daf66fcad',
		abi: [
			{
				constant: true,
				inputs: [{ name: 'account', type: 'address' }],
				name: 'earned',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: '', type: 'address' }],
				name: 'rewards',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: '_rewardDistribution', type: 'address' }],
				name: 'setRewardDistribution',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'totalSupply',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'DURATION',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'amount', type: 'uint256' }],
				name: 'withdraw',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'reward', type: 'uint256' }],
				name: 'notifyRewardAmount',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'getReward',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: 'account', type: 'address' }],
				name: 'balanceOf',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'renounceOwnership',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardRate',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'lastTimeRewardApplicable',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [{ name: '', type: 'address' }],
				name: 'userRewardPerTokenPaid',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'owner',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'isOwner',
				outputs: [{ name: '', type: 'bool' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'amount', type: 'uint256' }],
				name: 'stake',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'lastUpdateTime',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardPerToken',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'rewardPerTokenStored',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'snx',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [],
				name: 'exit',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'periodFinish',
				outputs: [{ name: '', type: 'uint256' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: true,
				inputs: [],
				name: 'uni',
				outputs: [{ name: '', type: 'address' }],
				payable: false,
				stateMutability: 'view',
				type: 'function',
			},
			{
				constant: false,
				inputs: [{ name: 'newOwner', type: 'address' }],
				name: 'transferOwnership',
				outputs: [],
				payable: false,
				stateMutability: 'nonpayable',
				type: 'function',
			},
			{
				anonymous: false,
				inputs: [{ indexed: false, name: 'reward', type: 'uint256' }],
				name: 'RewardAdded',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'amount', type: 'uint256' },
				],
				name: 'Staked',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'amount', type: 'uint256' },
				],
				name: 'Withdrawn',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'user', type: 'address' },
					{ indexed: false, name: 'reward', type: 'uint256' },
				],
				name: 'RewardPaid',
				type: 'event',
			},
			{
				anonymous: false,
				inputs: [
					{ indexed: true, name: 'previousOwner', type: 'address' },
					{ indexed: true, name: 'newOwner', type: 'address' },
				],
				name: 'OwnershipTransferred',
				type: 'event',
			},
		],
	},
	uniswapSTRX: {
		address: '416C872684e348EC3a5418Fb1E952556110550c924',
		abi: [
			{
			  "constant": true,
			  "inputs": [],
			  "name": "name",
			  "outputs": [
				{
				  "name": "",
				  "type": "string"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "spender",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "approve",
			  "outputs": [
				{
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "token0",
			  "outputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "totalSupply",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "from",
				  "type": "address"
				},
				{
				  "name": "to",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "transferFrom",
			  "outputs": [
				{
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "PERMIT_TYPEHASH",
			  "outputs": [
				{
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "decimals",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint8"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "DOMAIN_SEPARATOR",
			  "outputs": [
				{
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "price0CumulativeLast",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "price1CumulativeLast",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "name": "balanceOf",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "kLast",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "name": "nonces",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "symbol",
			  "outputs": [
				{
				  "name": "",
				  "type": "string"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "transfer",
			  "outputs": [
				{
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "MINIMUM_LIQUIDITY",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "factory",
			  "outputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "token1",
			  "outputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "owner",
				  "type": "address"
				},
				{
				  "name": "spender",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				},
				{
				  "name": "deadline",
				  "type": "uint256"
				},
				{
				  "name": "v",
				  "type": "uint8"
				},
				{
				  "name": "r",
				  "type": "bytes32"
				},
				{
				  "name": "s",
				  "type": "bytes32"
				}
			  ],
			  "name": "permit",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [
				{
				  "name": "",
				  "type": "address"
				},
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "name": "allowance",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "constructor"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "sender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "amount0",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1",
				  "type": "uint256"
				}
			  ],
			  "name": "Mint",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "sender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "amount0",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1",
				  "type": "uint256"
				},
				{
				  "indexed": true,
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "Burn",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "sender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "amount0In",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1In",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount0Out",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1Out",
				  "type": "uint256"
				},
				{
				  "indexed": true,
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "Swap",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": false,
				  "name": "reserve0",
				  "type": "uint112"
				},
				{
				  "indexed": false,
				  "name": "reserve1",
				  "type": "uint112"
				}
			  ],
			  "name": "Sync",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "owner",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "name": "spender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Approval",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "from",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "name": "to",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Transfer",
			  "type": "event"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "getReserves",
			  "outputs": [
				{
				  "name": "_reserve0",
				  "type": "uint112"
				},
				{
				  "name": "_reserve1",
				  "type": "uint112"
				},
				{
				  "name": "_blockTimestampLast",
				  "type": "uint32"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "_token0",
				  "type": "address"
				},
				{
				  "name": "_token1",
				  "type": "address"
				}
			  ],
			  "name": "initialize",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "mint",
			  "outputs": [
				{
				  "name": "liquidity",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "burn",
			  "outputs": [
				{
				  "name": "amount0",
				  "type": "uint256"
				},
				{
				  "name": "amount1",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "amount0Out",
				  "type": "uint256"
				},
				{
				  "name": "amount1Out",
				  "type": "uint256"
				},
				{
				  "name": "to",
				  "type": "address"
				},
				{
				  "name": "data",
				  "type": "bytes"
				}
			  ],
			  "name": "swap",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "skim",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [],
			  "name": "sync",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			}
		  ]
	},	
	uniswapSETH: {
		address: '4133251ab1103EdFc7Dd5CDa63C10334e2920e80aa',
		abi: [
			{
			  "constant": true,
			  "inputs": [],
			  "name": "name",
			  "outputs": [
				{
				  "name": "",
				  "type": "string"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "spender",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "approve",
			  "outputs": [
				{
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "token0",
			  "outputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "totalSupply",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "from",
				  "type": "address"
				},
				{
				  "name": "to",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "transferFrom",
			  "outputs": [
				{
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "PERMIT_TYPEHASH",
			  "outputs": [
				{
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "decimals",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint8"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "DOMAIN_SEPARATOR",
			  "outputs": [
				{
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "price0CumulativeLast",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "price1CumulativeLast",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "name": "balanceOf",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "kLast",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "name": "nonces",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "symbol",
			  "outputs": [
				{
				  "name": "",
				  "type": "string"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "transfer",
			  "outputs": [
				{
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "MINIMUM_LIQUIDITY",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "factory",
			  "outputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "token1",
			  "outputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "owner",
				  "type": "address"
				},
				{
				  "name": "spender",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				},
				{
				  "name": "deadline",
				  "type": "uint256"
				},
				{
				  "name": "v",
				  "type": "uint8"
				},
				{
				  "name": "r",
				  "type": "bytes32"
				},
				{
				  "name": "s",
				  "type": "bytes32"
				}
			  ],
			  "name": "permit",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [
				{
				  "name": "",
				  "type": "address"
				},
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "name": "allowance",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "constructor"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "sender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "amount0",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1",
				  "type": "uint256"
				}
			  ],
			  "name": "Mint",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "sender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "amount0",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1",
				  "type": "uint256"
				},
				{
				  "indexed": true,
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "Burn",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "sender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "amount0In",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1In",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount0Out",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1Out",
				  "type": "uint256"
				},
				{
				  "indexed": true,
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "Swap",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": false,
				  "name": "reserve0",
				  "type": "uint112"
				},
				{
				  "indexed": false,
				  "name": "reserve1",
				  "type": "uint112"
				}
			  ],
			  "name": "Sync",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "owner",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "name": "spender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Approval",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "from",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "name": "to",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Transfer",
			  "type": "event"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "getReserves",
			  "outputs": [
				{
				  "name": "_reserve0",
				  "type": "uint112"
				},
				{
				  "name": "_reserve1",
				  "type": "uint112"
				},
				{
				  "name": "_blockTimestampLast",
				  "type": "uint32"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "_token0",
				  "type": "address"
				},
				{
				  "name": "_token1",
				  "type": "address"
				}
			  ],
			  "name": "initialize",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "mint",
			  "outputs": [
				{
				  "name": "liquidity",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "burn",
			  "outputs": [
				{
				  "name": "amount0",
				  "type": "uint256"
				},
				{
				  "name": "amount1",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "amount0Out",
				  "type": "uint256"
				},
				{
				  "name": "amount1Out",
				  "type": "uint256"
				},
				{
				  "name": "to",
				  "type": "address"
				},
				{
				  "name": "data",
				  "type": "bytes"
				}
			  ],
			  "name": "swap",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "skim",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [],
			  "name": "sync",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			}
		  ]
	},		
	uniswapTRXUSDT: {
		address: '41c4488fa262236619425e19f6ba4a8639b8ca1973',
		abi: [
			{
			  "constant": true,
			  "inputs": [],
			  "name": "name",
			  "outputs": [
				{
				  "name": "",
				  "type": "string"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "spender",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "approve",
			  "outputs": [
				{
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "token0",
			  "outputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "totalSupply",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "from",
				  "type": "address"
				},
				{
				  "name": "to",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "transferFrom",
			  "outputs": [
				{
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "PERMIT_TYPEHASH",
			  "outputs": [
				{
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "decimals",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint8"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "DOMAIN_SEPARATOR",
			  "outputs": [
				{
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "price0CumulativeLast",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "price1CumulativeLast",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "name": "balanceOf",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "kLast",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "name": "nonces",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "symbol",
			  "outputs": [
				{
				  "name": "",
				  "type": "string"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "transfer",
			  "outputs": [
				{
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "MINIMUM_LIQUIDITY",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "factory",
			  "outputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "token1",
			  "outputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "owner",
				  "type": "address"
				},
				{
				  "name": "spender",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				},
				{
				  "name": "deadline",
				  "type": "uint256"
				},
				{
				  "name": "v",
				  "type": "uint8"
				},
				{
				  "name": "r",
				  "type": "bytes32"
				},
				{
				  "name": "s",
				  "type": "bytes32"
				}
			  ],
			  "name": "permit",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [
				{
				  "name": "",
				  "type": "address"
				},
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "name": "allowance",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "constructor"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "sender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "amount0",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1",
				  "type": "uint256"
				}
			  ],
			  "name": "Mint",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "sender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "amount0",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1",
				  "type": "uint256"
				},
				{
				  "indexed": true,
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "Burn",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "sender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "amount0In",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1In",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount0Out",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1Out",
				  "type": "uint256"
				},
				{
				  "indexed": true,
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "Swap",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": false,
				  "name": "reserve0",
				  "type": "uint112"
				},
				{
				  "indexed": false,
				  "name": "reserve1",
				  "type": "uint112"
				}
			  ],
			  "name": "Sync",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "owner",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "name": "spender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Approval",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "from",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "name": "to",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Transfer",
			  "type": "event"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "getReserves",
			  "outputs": [
				{
				  "name": "_reserve0",
				  "type": "uint112"
				},
				{
				  "name": "_reserve1",
				  "type": "uint112"
				},
				{
				  "name": "_blockTimestampLast",
				  "type": "uint32"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "_token0",
				  "type": "address"
				},
				{
				  "name": "_token1",
				  "type": "address"
				}
			  ],
			  "name": "initialize",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "mint",
			  "outputs": [
				{
				  "name": "liquidity",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "burn",
			  "outputs": [
				{
				  "name": "amount0",
				  "type": "uint256"
				},
				{
				  "name": "amount1",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "amount0Out",
				  "type": "uint256"
				},
				{
				  "name": "amount1Out",
				  "type": "uint256"
				},
				{
				  "name": "to",
				  "type": "address"
				},
				{
				  "name": "data",
				  "type": "bytes"
				}
			  ],
			  "name": "swap",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "skim",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [],
			  "name": "sync",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			}
		  ]
	},	
	uniswapSUSDUSDT: {
		address: '41170ddac94981c839aa67eb019bda4ae63b450809',
		abi: [
			{
			  "constant": true,
			  "inputs": [],
			  "name": "name",
			  "outputs": [
				{
				  "name": "",
				  "type": "string"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "spender",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "approve",
			  "outputs": [
				{
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "token0",
			  "outputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "totalSupply",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "from",
				  "type": "address"
				},
				{
				  "name": "to",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "transferFrom",
			  "outputs": [
				{
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "PERMIT_TYPEHASH",
			  "outputs": [
				{
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "decimals",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint8"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "DOMAIN_SEPARATOR",
			  "outputs": [
				{
				  "name": "",
				  "type": "bytes32"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "price0CumulativeLast",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "price1CumulativeLast",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "name": "balanceOf",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "kLast",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "name": "nonces",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "symbol",
			  "outputs": [
				{
				  "name": "",
				  "type": "string"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "transfer",
			  "outputs": [
				{
				  "name": "",
				  "type": "bool"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "MINIMUM_LIQUIDITY",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "factory",
			  "outputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "token1",
			  "outputs": [
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "owner",
				  "type": "address"
				},
				{
				  "name": "spender",
				  "type": "address"
				},
				{
				  "name": "value",
				  "type": "uint256"
				},
				{
				  "name": "deadline",
				  "type": "uint256"
				},
				{
				  "name": "v",
				  "type": "uint8"
				},
				{
				  "name": "r",
				  "type": "bytes32"
				},
				{
				  "name": "s",
				  "type": "bytes32"
				}
			  ],
			  "name": "permit",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": true,
			  "inputs": [
				{
				  "name": "",
				  "type": "address"
				},
				{
				  "name": "",
				  "type": "address"
				}
			  ],
			  "name": "allowance",
			  "outputs": [
				{
				  "name": "",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "inputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "constructor"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "sender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "amount0",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1",
				  "type": "uint256"
				}
			  ],
			  "name": "Mint",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "sender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "amount0",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1",
				  "type": "uint256"
				},
				{
				  "indexed": true,
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "Burn",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "sender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "amount0In",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1In",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount0Out",
				  "type": "uint256"
				},
				{
				  "indexed": false,
				  "name": "amount1Out",
				  "type": "uint256"
				},
				{
				  "indexed": true,
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "Swap",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": false,
				  "name": "reserve0",
				  "type": "uint112"
				},
				{
				  "indexed": false,
				  "name": "reserve1",
				  "type": "uint112"
				}
			  ],
			  "name": "Sync",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "owner",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "name": "spender",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Approval",
			  "type": "event"
			},
			{
			  "anonymous": false,
			  "inputs": [
				{
				  "indexed": true,
				  "name": "from",
				  "type": "address"
				},
				{
				  "indexed": true,
				  "name": "to",
				  "type": "address"
				},
				{
				  "indexed": false,
				  "name": "value",
				  "type": "uint256"
				}
			  ],
			  "name": "Transfer",
			  "type": "event"
			},
			{
			  "constant": true,
			  "inputs": [],
			  "name": "getReserves",
			  "outputs": [
				{
				  "name": "_reserve0",
				  "type": "uint112"
				},
				{
				  "name": "_reserve1",
				  "type": "uint112"
				},
				{
				  "name": "_blockTimestampLast",
				  "type": "uint32"
				}
			  ],
			  "payable": false,
			  "stateMutability": "view",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "_token0",
				  "type": "address"
				},
				{
				  "name": "_token1",
				  "type": "address"
				}
			  ],
			  "name": "initialize",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "mint",
			  "outputs": [
				{
				  "name": "liquidity",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "burn",
			  "outputs": [
				{
				  "name": "amount0",
				  "type": "uint256"
				},
				{
				  "name": "amount1",
				  "type": "uint256"
				}
			  ],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "amount0Out",
				  "type": "uint256"
				},
				{
				  "name": "amount1Out",
				  "type": "uint256"
				},
				{
				  "name": "to",
				  "type": "address"
				},
				{
				  "name": "data",
				  "type": "bytes"
				}
			  ],
			  "name": "swap",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [
				{
				  "name": "to",
				  "type": "address"
				}
			  ],
			  "name": "skim",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			},
			{
			  "constant": false,
			  "inputs": [],
			  "name": "sync",
			  "outputs": [],
			  "payable": false,
			  "stateMutability": "nonpayable",
			  "type": "function"
			}
		  ]
	},		
};
