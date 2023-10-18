// 주민등록번호를 입력받아 생년월일, 성별,나이 출력하기
const jumin = 961203-1013329
// 961203-1013329
let birthday;
let year;
let month;
let day;
let gender;
let age;



if (jumin.length === 14) {
    birthday = jumin.slice(0, 6);
    year = jumin.slice(0, 1);
    month = jumin.slice(2, 3);
    day = jumin.slice(4, 5);
    gender = jumin.charAt(7);
} else {
    document.write("다시 입력하세요.");
}
if (gender === '1' && gender === '3') {
    document.write("남성");
} else if (gender === '2' && gender === '4') {
    document.write("여성");
}

console.log("생년월일 : " + year + month + year);
console.log("년 : " + year);
console.log("월 : " + day);
console.log("일 : " + month);
console.log("성별 : " + gender);

