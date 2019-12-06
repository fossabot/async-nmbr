const fetch = require('node-fetch');

const createCallPromise = (operator, a, b) => {
	return new Promise((resolve, reject) => {
		fetch(`https://nmbr.dev/${operator}/${a}/${b}`)
			.then(res => res.json())
			.then(({ result, error }) => {
				if (error) return reject(new Error(error));
				resolve(result);
			});
	});
};

module.exports = Nmbr => {
	Nmbr.prototype[Symbol.for('+')] = function(b) {
		const a = this.valueOf();
		return createCallPromise('add', a, b);
	};

	Nmbr.prototype[Symbol.for('-')] = function(b) {
		const a = this.valueOf();
		return createCallPromise('substract', a, b);
	};

	Nmbr.prototype[Symbol.for('*')] = function(b) {
		const a = this.valueOf();
		return createCallPromise('multiply', a, b);
	};

	Nmbr.prototype[Symbol.for('/')] = function(b) {
		const a = this.valueOf();
		return createCallPromise('divide', a, b);
	};
};
