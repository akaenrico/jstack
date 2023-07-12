console.log(`🔗 FIND\n`);

const array = [
	{ name: 'iPhone', price: '1999', quantity: 1 },
	{ name: 'Macbook Air', price: '2599', quantity: 1 },
	{ name: 'Apple Watch', price: '599', quantity: 1 },
];

const find = array.find((product) => product.name === 'Apple Watch');
console.log({ find });

// Should return:
// Return false
// Return false
// Return true