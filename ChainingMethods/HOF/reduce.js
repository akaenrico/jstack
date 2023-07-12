console.log(`🔗 REDUCE\n`);

const array = [
	{ name: 'iPhone', price: '1999', quantity: 2 },
	{ name: 'Macbook Air', price: '2599', quantity: 1 },
	{ name: 'Apple Watch', price: '599', quantity: 1 },
];

const reduce = array.reduce((accumulator, product) => {
	return accumulator + (product.price * product.quantity);
}, 0);

console.log({ reduce });

// Should return:
// { reduce: 7196 }

// For each iteration it adds up to the initial value. Consider that reduce did
// this steps:
// Accumulator initial value -> 0
// Array[0] -> price * quantity
// Accumulator new value -> 3998
// Array[1] -> price * quantity
// Accumulator new value -> 6597
// Array[2] -> price * quantity
// Accumulator new value -> 7196