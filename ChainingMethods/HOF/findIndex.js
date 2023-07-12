console.log(`🔗 FIND INDEX\n`);

const array = [
	{ name: 'iPhone', price: '1999', quantity: 1 },
	{ name: 'Macbook Air', price: '2599', quantity: 1 },
	{ name: 'Apple Watch', price: '599', quantity: 1 },
];

const findIndex = array.findIndex((product) => product.name === 'Apple Watch');
console.log({ findIndex });

// Should return:
// { findIndex: 2 }