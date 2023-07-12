console.log(`🔗 ENDS WITH\n`);

const tech = 'Node.js';

// True output
const endsWithTrue = tech.startsWith('.js');
console.log(`🟢 ${endsWithTrue}`);

// False output
const endsWithFalse = tech.startsWith('Node');
console.log(`🔴 ${endsWithFalse}`);