/*
  1. 성적을 입력 받아 학점 출력하기
  0 ~ 100점 사이가 아니면 입력 오류 출력
  90점 이상 A, 80점 이상 B, 70점 이상 C, 60점 이상 D, 나머지 F 처리
*/

let score = prompt("성적을 입력하세요 : ", "");
if (score >= 0 && score <= 100) {
    if(score >= 90) {
        document.write("당신의 성적은 : A 입니다.");
    } else if(score >= 80) {
        document.write("당신의 성적은 : B 입니다.");
    } else if(score >= 70) {
        document.write("당신의 성적은 : C 입니다.");
    } else if(score >= 60) {
        document.write("당신의 성적은 : D 입니다.");
    } else if(score >= 0) {
        document.write("당신의 성적은 : F 입니다.");
    } else {
        document.write("다시 입력해 주세요.")
    }
} 
