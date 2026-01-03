const getAverage = (testScores) => {
  let sum = 0;

  for (const score of testScores) {
    sum += score;
  }

  return sum / testScores.length;
};

const getGrade = (score) => {
  switch (true) {
    case score === 100:
      return "A+";
      break;
    case score < 100 && score >= 90:
      return "A";
      break;
    case score < 90 && score >= 80:
      return "B";
      break;
    case score < 80 && score >= 70:
      return "C";
      break;
    case score < 70 && score >= 60:
      return "D";
      break;
    case score < 60 && score >= 0:
      return "F";
      break;
  }
};

const hasPassingGrade = (score) => (getGrade(score) === "F" ? false : true);

const studentMsg = (arrOfScores, studentScore) =>
  `Class average: ${getAverage(arrOfScores)}. Your grade: ${getGrade(
    studentScore
  )}. You ${hasPassingGrade(studentScore) ? "passed" : "failed"} the course.`;
