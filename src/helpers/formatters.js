import numbro from 'numbro';
import snxJSConnector from '../helpers/snxJSConnector';
import { BigNumber } from "bignumber.js";

export const formatCurrency = (value, decimals = 3) => {
	if (!value) return 0;
	if (!Number(value)) return 0;
	return numbro(value).format('0,0.' + '0'.repeat(decimals));
};

export const formatUniv1 = (value, decimals = 6) => {
	
	if (!value) return 0;
	if (!Number(value)) return 0;
	
	console.log("got value " + value, "showing " + Number(value / 10**18 ).toFixed(decimals) )
	return Number(value / 10**18 ).toFixed(decimals) 
};

export const formatMicroUni = (value) => {
	if (!value) return 0;
	if (!Number(value)) return 0;
	return Number((value*1000000) / 10**18 ).toFixed(6) 	
}

export const countZeroes = (n) => {
	const numberAsString = n.toString();
	const decimalsAsString = numberAsString.substr(numberAsString.lastIndexOf('.')+1);
	const leadingZeros = decimalsAsString.substr(0, decimalsAsString.lastIndexOf('0')+1).length;
	return leadingZeros	
}

export const shortenAddress = address => {
	if (!address) return null;
	return address.slice(0, 6) + '...' + address.slice(-4, address.length);
};

export const bytesFormatter = input => snxJSConnector.ethersUtils.formatBytes32String(input);

export const bigNumberFormatter = value => Number(snxJSConnector.utils.formatEther(value));
 
export const getAddress = addr => addr ; //snxJSConnector.ethersUtils.getAddress(addr);
