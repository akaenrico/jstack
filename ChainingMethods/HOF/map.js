console.log(`🔗 MAP\n`);

const array = [
	{ name: 'iPhone', price: '1999', quantity: 2 },
	{ name: 'Macbook Air', price: '2599', quantity: 1 },
	{ name: 'Apple Watch', price: '599', quantity: 1 },
];

const map = array.map((product) => {
	return {
		...product,
		subtotal: product.quantity * product.price,
	};
});

console.log({ map });

// Should return:
// {
//   map: [
//     { name: 'iPhone', price: 1999, quantity: 2, subtotal: 3998 },
//    { name: 'Macbook Air', price: '2599', quantity: 1, subtotal: 2599 },
//    { name: 'Apple Watch', price: '599', quantity: 1, subtotal: 599 }
//   ]
// }