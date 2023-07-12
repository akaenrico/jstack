console.log(`🔗 FILTER\n`);

const array = [
	{ name: 'iPhone', price: '1999', quantity: 2 },
	{ name: 'Macbook Air', price: '2599', quantity: 1 },
	{ name: 'Apple Watch', price: '599', quantity: 1 },
];

const filter = array.filter((product) => product.quantity > 1);

console.log({ filter });

// Should return:
// {
//   filter: [
//     { name: 'iPhone', price: '1999', quantity: 2 }
//   ]
// }