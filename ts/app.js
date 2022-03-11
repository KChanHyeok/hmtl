"use strict";
// primitive 타입 string, number, boolean
/* let product_id: number = 123456

let product_name: string = 'VR 글래스'

let is_waterprofing: boolean =  false

console.log('product_id:', product_id)
console.log('product_name', product_name)
console.log('is_waterprofing', is_waterprofing) */
const o = {
    onInit() { console.log('onInit 라이프 사이클'); },
    initialize() { console.log('객체 초기화'); }
};
const j = {
    settings() { console.log('객체 설정'); }
};
function ready(m) {
    m.onInit();
    m.initialize();
}
ready(o);
ready(j); //조건이 충족 하지 않아 오류 발생
