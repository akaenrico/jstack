console.log(`🔗 SOME\n`);

const array = [
	{ name: 'iPhone', price: '1999', quantity: 1 },
	{ name: 'Macbook Air', price: '2599', quantity: 1 },
	{ name: 'Apple Watch', price: '599', quantity: 1 },
];

const some = array.some((product) => product.price > 500);
console.log({ some });

// Should return:
// { some: true }