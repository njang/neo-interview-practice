/**
 * Converts a Roman Numeral string into its integer value.
 *
 * The following characters are supported:
 * I = 1
 * V = 5
 * X = 10
 * L = 50
 * C = 100
 * D = 500
 * M = 1000
 *
 * @param {String} romanNumeral the given Roman Numeral string
 *
 * @return {Number} the integer value of the string
 */
function fromRoman(romanNumeral) {
    // TODO implement
    // let array = romanNumeral.split('');
    let array = [];
    let units = ['CM', 'CD', 'XC', 'XL', 'IX', 'IV'];
    let substr = romanNumeral;
    for (let i = 0; i < units.length; i++){
		let j = substr.indexOf(units[i]);
    	if (j >= 0) {
    		array = array.concat(substr.slice(0,j).split(''));
    		array.push(units[i]);
    		substr = substr.slice(j+2);
    		// console.log(j);
    		// console.log(substr);
    	}
    }

    // if (array.length == 0) {
    if (substr.length != 0) {
    	array = array.concat(substr.split(''));
    }

    let value = 0;
    for (let k = 0; k < array.length; k++) {
    	switch (array[k]) {
    		case 'M':
    			value += 1000;
    			break;
    		case 'D':
    			value += 500;
    			break;
    		case 'C':
    			value += 100;
    			break;
    		case 'L':
    			value += 50;
    			break;
    		case 'X':
    			value += 10;
    			break;
    		case 'V':
    			value += 5;
    			break;
    		case 'I':
    			value += 1;
    			break;
    		case 'CM':
    			value += 900;
    			break;
    		case 'CD':
    			value += 400;
    			break;
    		case 'XC':
    			value += 90;
    			break;
    		case 'XL':
    			value += 40;
    			break;
    		case 'IX':
    			value += 9;
    			break;
    		case 'IV':
    			value += 4;
    			break;
    		default:
    			console.log('Error: entered non-accepted Roman numeral.')
    			break;
    	}
    }
    console.log(array);
    console.log(romanNumeral + " is " + value);
}

fromRoman('MMXVIII');
// fromRoman('BZX')
