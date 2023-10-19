// 수학 연산을 다루는 Math 객체
/*
`Math.abs(x)`**: x의 절대값을 반환합니다.
`Math.ceil(x)`**: x 이상의 가장 작은 정수를 반환합니다.
`Math.floor(x)`**: x 이하의 가장 큰 정수를 반환합니다.
`Math.round(x)`**: x를 반올림한 정수를 반환합니다.
`Math.max(x1, x2, ..., xn)`**: 주어진 값들 중 가장 큰 값을 반환합니다.
`Math.min(x1, x2, ..., xn)`**: 주어진 값들 중 가장 작은 값을 반환합니다.
`Math.pow(x, y)`**: x의 y제곱을 반환합니다.
`Math.sqrt(x)`**: x의 제곱근을 반환합니다.
`Math.random()`**: 0 이상 1 미만의 난수를 반환합니다.
*/
// console.log(Math.abs(-5)); // 출력: 5
// console.log(Math.ceil(1.1)); // 출력: 2
// console.log(Math.floor(1.9)); // 출력: 1
// console.log(Math.round(1.4)); // 출력: 1
// console.log(Math.max(1, 2, 3)); // 출력: 3
// console.log(Math.min(1, 2, 3)); // 출력: 1
// console.log(Math.pow(2, 3)); // 출력: 8
// console.log(Math.sqrt(9)); // 출력: 3
// console.log(Math.random()); // 출력: 0 이상 1 미만의 임의의 수

// 1 ~ 10 까지의 임의의 수 생성
// for(let i = 0; i < 100; i++) {
//     console.log(Math.floor(Math.random() * 10 + 1));
// }


// - 응모자 수를 입력 받음
// - 랜덤 함수를 통해서 당첨자를 생성해 당첨자 발표 하기

const input = Number(prompt("응모자 수를 입력하세요 : ")) 
document.write(Math.floor(Math.random() * input + 1))