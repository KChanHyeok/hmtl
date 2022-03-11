"use strict";
// primitive 타입 string, number, boolean
/* let product_id: number = 123456

let product_name: string = 'VR 글래스'

let is_waterprofing: boolean =  false

console.log('product_id:', product_id)
console.log('product_name', product_name)
console.log('is_waterprofing', is_waterprofing) */
let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;
class LettersOnlyValidator {
    isAcceptable(s) {
        return lettersRegexp.test(s);
    }
}
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
let strings = ['Hello', '98052', '101'];
let validators = {};
validators['ZIP code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();
for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${s}' ${isMatch ? 'matches' : 'does not match'} '${name}'. `);
    }
}
