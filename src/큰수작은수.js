// 3개의 수에서 제일 큰수, 제일 작은 수 찾기
// 입력은 promt()
// promt()로 입력 받은 값은 문자열로 반환 되므로
// 화면 출력은 document.write()를 사용하면 되고,


let num1 = Number(prompt)("첫번째 정수를 입력하세요 : ", "");
let num2 = Number(prompt)("두번째 정수를 입력하세요 : ", "");
let num3 = Number(prompt)("세번째 정수를 입력하세요 : ", "");

if (num1 < num2) {
    if(num2 < num3) {
        max = num3
        min = num1
    }
}

document.write("큰 값 : " + max);
document.write("작은 값 : " + min);