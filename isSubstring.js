function isSubstring(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
}

console.log(isSubstring('hello', 'lo')); // true
console.log(isSubstring('hello', 'world')); // false
console.log(isSubstring('test', 'est')); // true
console.log(isSubstring('example', 'ample')); // true
