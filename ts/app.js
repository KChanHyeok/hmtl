"use strict";
// primitive 타입 string, number, boolean
/* let product_id: number = 123456

let product_name: string = 'VR 글래스'

let is_waterprofing: boolean =  false

console.log('product_id:', product_id)
console.log('product_name', product_name)
console.log('is_waterprofing', is_waterprofing) */
function pushPairItem(arr, item) {
    arr.push(item);
    return arr;
}
const data = [];
pushPairItem(data, [false, 'false']);
pushPairItem(data, [2022, '이천이십이년']);
