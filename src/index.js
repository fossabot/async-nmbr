const fetch = require('node-fetch');

const API_URL = 'https://nmbr.dev';
const OPERATORS = {
	'+': 'add',
	'-': 'subtract',
	'*': 'multiply',
	'/': 'divide',
	'%': 'remainder',
	'**': 'exponentiation'
};

const createCallPromise = (operator, a, b) => {
	return new Promise((resolve, reject) => {
		fetch(`${API_URL}/${operator}/${a}/${b}`)
			.then(res => res.json())
			.then(({ result, error }) => {
				if (error) return reject(new Error(error));
				resolve(result);
			})
			.catch(err => reject(err));
	});
};

module.exports = Nmbr => {
	for (const [key, value] of Object.entries(OPERATORS)) {
		Nmbr.prototype[Symbol.for(key)] = function(b) {
			const a = this.valueOf();
			return createCallPromise(value, a, b);
		};
	}
};
