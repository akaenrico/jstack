console.log(`🔗 INCLUDES\n`);

console.log(`INCLUDES::String`);
const tech = 'Node.js';

// True output
const includesTrue = tech.includes('e.js');
console.log(`🟢 ${includesTrue}`);

// False output
const includesFalse = tech.includes('ejs');
console.log(`🔴 ${includesFalse}`);

console.log(`\nINCLUDES::Array`);
const array = ['Node.js', 'React', 'TypeScript'];

// True output
const includesArrayTrue = array.includes('Node.js');
console.log(`🟢 ${includesArrayTrue}`);

// False output
const includesArrayFalse = array.includes('eact');
console.log(`🔴 ${includesArrayFalse}`);