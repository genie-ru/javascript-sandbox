let a = 'test';
console.log('test');
console.log(a);
let data = new Date();
console.log(data);
console.log(100);
console.log('Hello World');
console.log(20, 'Hello', true);

const x = 100;

console.log(x);
console.log(typeof x);
console.error('Alert');

console.warn('Warning');
console.table({name: 'Brad', email: 'brad@gmail.com'});

console.group('simple');
console.log(x);
console.error('Aleart');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';
console.log('%c Hello World', styles);