
const students = [
  { name: "이재상", scores: [80, 90] },
  { name: "김준현", scores: [90, 95] },
  { name: "정윤오", scores: [75, 70] }
];

// 여기에 코드를 작성해주세요
// 예상 출력: ["이재상", "김준현"]
function avgScore(s) {
    let total = 0;
    for (i = 0; i < s.length; i++) {
        total += s[i];
    } 
    return total / s.length;
}

function avgStudent(students) {
    let result = [];
    for (i = 0; i < students.length; i++) {
        let avg = avgScore
    }
}

const numbers = [5, 10, 15, 20, 25];
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
// 출력값 : [10, 20, 30]
