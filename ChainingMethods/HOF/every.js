console.log(`🔗 EVERY\n`);

const array = [
	{ name: 'iPhone', price: '1999', quantity: 1 },
	{ name: 'Macbook Air', price: '2599', quantity: 1 },
	{ name: 'Apple Watch', price: '599', quantity: 1 },
];

const every = array.every((product) => product.price > 1000);
console.log({ every });

// Should return:
// { every: false }