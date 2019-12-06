require('./')(Number);

(async () => {
	console.log('2 + 1 =');
	console.time('async addition');
	console.log(await (2 + 1));
	console.timeEnd('async addition');

	console.log('\n');

	console.log('2 - 2 =');
	console.time('async substraction');
	console.log(await (2 - 2));
	console.timeEnd('async substraction');

	console.log('\n');

	console.log('2 * 2 =');
	console.time('async multiplication');
	console.log(await (2 * 2));
	console.timeEnd('async multiplication');

	console.log('\n');

	console.log('4 / 2 =');
	console.time('async division');
	console.log(await (4 / 2));
	console.timeEnd('async division');

	console.log('\n');

	console.time('async Pi multiplication');
	console.log(await (Math.PI / 3));
	console.timeEnd('async Pi multiplication');
})();
