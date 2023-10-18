// 함수 선언문 : function 키워드로 생성, 호이스팅에 영향 받음, 호출해야 실행 됨
// console.log(sum(10,20));
// console.log(sum(100,200));


// function sum(p1, p2) {
//     return p1 + p2;
// }

// 함수표현식 : 변수에 함수를 할당해서 사용하는 방식, 호이스팅 적용 되지 않음, 네이밍함수와 익명의 함수로 만들 수 있음



// const gugudan = function(dan) {
//     for(let i = 1; i < 10; i++) {
//         console.log(`${dan} * ${i} = ${dan * i}`);
//     }
// }
// => 화살표 함수 : ES6에서 추가된 새로운 함수 선언 방법, 함수 선언식 보다 간결하고 가독성이 좋아 많이 사용 됨

// const gugudan =(dan) => {
//     for(let i = 1; i < 10; i++) {
//         console.log(`${dan} * ${i} = ${dan * i}`);
//     }
// }
// gugudan(5);
// gugudan(9);

// 기본값할당 : 
// const sum = (num1, num2 = 100) => num1 + num2;
// 자바스크립트에서는 매개변수의 수만큼 전달하지 인수를 전달하지 않아도 오류 발생하지 않음
// console.log(sum(10));

// 스코프란? 변수가 생성되고 소멸되는 영역, 영향을 미치는  범위
// let a = 10; // 전역 스코프

// function sum() {
//     var a = 10;  이 경우에는 함수에서 벗어나 최상단까지는 가지못하고 var a = 10; 함수 내의 최상단까지 만 갈 수 있음.
//     let a = 10; // 지역스코프이자 블록 스코프
//     console.log(`함수 내부 : ${a}`);
// }

// sum();
// console.log(`함수 외부 : ${a}`);

// 1. var 함수는 2015년 까지 쓰였고 var함수밖에 없었음, var은 블랙 내부를 벗어날수가 있음 (안쓰는게 좋음)
// var a = 10;
// {
//     var b = 20;
//     console.log(`코드 블록 내부 a : ${a}`);
//     console.log(`코드 블록 내부 b : ${b}`);
// }
// console.log(`코드 블록 외부 a : ${a}`);
// console.log(`코드 블록 외부 b : ${b}`);

// 2. let 함수는 2015년 이후에 생긴 함수. let은 블랙 내부를 벗어날수가 없음
// let a = 10;
// {
//     let b = 20;
//     console.log(`코드 블록 내부 a : ${a}`);
//     console.log(`코드 블록 내부 b : ${b}`);
// }
// console.log(`코드 블록 외부 a : ${a}`);
// console.log(`코드 블록 외부 b : ${b}`);

// 참조 우선순위 (에러가 아님. java에서는 중복선언으로 에러를 잡음)
// let a = 10;
// const b = 20;
// function sum() {
//     let a = 50;
//     const b = 70;
//     console.log(`함수 내부 a : ${a}`);
//     console.log(`함수 내부 b : ${b}`);
// }
// sum();

// (에러가 아님. java에서는 중복선언으로 에러를 잡음)
// let a = 10;
// let b = 20;
// {
//     let a = 30;
//     let b = 40;
//     console.log(`함수 내부 a : ${a}`);
//     console.log(`함수 내부 b : ${b}`);
// }

// 즉시 실행 함수 : 함수를 정의하자마자 발로 실행되는 함수

(function() {
    init();
})();

function init() {
    console.log("초기화 루틴을 수행합니다.")

}