/*
상근날드에서 가장 잘 팔리는 메뉴는 세트 메뉴이다. 주문할 때, 자신이 원하는 햄버거와 음료를 하나씩 골라, 세트로 구매하면, 가격의 합계에서 50원을 뺀 가격이 세트 메뉴의 가격이 된다.

햄버거는 총 3종류 상덕버거, 중덕버거, 하덕버거가 있고, 음료는 콜라와 사이다 두 종류가 있다.

햄버거와 음료의 가격이 주어졌을 때, 가장 싼 세트 메뉴의 가격을 출력하는 프로그램을 작성하시오.
*/

// let burger1 = parseFloat(prompt("새우버거 가격 : ", ""));
// let burger2 = parseFloat(prompt("불고기 버거 가격 : ", ""));
// let burger3 = parseFloat(prompt("치즈 버거 가격 : ", ""));
// let drink1 = parseFloat(prompt("사이다 가격 : ", ""));
// let drink2 = parseFloat(prompt("콜라 가격 : ", ""));
// let minberger;
// let mindrink;
// if (burger1 < burger2) {
//     if (burger2 < burger3) {
//         minberger = burger1;
//     } else {
//         document.write("다시 입력하세요.");
//     }
// }
// if (drink1 < drink2) {
//     mindrink = drink1;
// }
// cheapSet = minberger + mindrink - 50;
// document.write("가장 저렴한 세트메뉴 가격은 : " + parseInt(cheapSet));

function getPrice() {
    let menu = [];
    for(let i = 0; i < 5; i++) {
        menu[i] = Number(document.getElementById("menu" + (i+1).valueOf))
    }
}