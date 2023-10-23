/* 
   File Name: ComplexCode.js

   Description: This code demonstrates a complex and elaborate JavaScript program
   that analyses and manipulates an array of objects representing students' grades.

   Author: John Smith
   Date: September 10, 2021
*/

// Create an array of student objects with their respective grades
let students = [
  {
    name: "Alice",
    grades: [98, 88, 92, 95],
  },
  {
    name: "Bob",
    grades: [75, 86, 79, 81],
  },
  {
    name: "Charlie",
    grades: [91, 93, 88, 89],
  },
  {
    name: "David",
    grades: [82, 84, 87, 91],
  },
];

// Calculate the average grade for each student
students.forEach((student) => {
  const sum = student.grades.reduce((total, grade) => total + grade, 0);
  student.averageGrade = sum / student.grades.length;
});

// Find the student with the highest average grade
let highestGradeStudent = students.reduce((highest, student) => {
  return student.averageGrade > highest.averageGrade ? student : highest;
});

console.log("Student with the highest average grade:");
console.log(highestGradeStudent);

// Calculate the class average grade
const classSum = students.reduce(
  (total, student) => total + student.averageGrade,
  0
);
const classAverage = classSum / students.length;

console.log("Class Average Grade: " + classAverage.toFixed(2));

// Sort the students by their average grade in descending order
students.sort((a, b) => b.averageGrade - a.averageGrade);

console.log("Students Sorted by Average Grade:");
students.forEach((student, index) => {
  console.log(index + 1 + ". " + student.name + " - " + student.averageGrade);
});

// Filter out students with a grade below 85
let excellentStudents = students.filter((student) => student.averageGrade >= 85);

console.log("Excellent Students (Average Grade >= 85):");
excellentStudents.forEach((student) => {
  console.log(student.name);
});

// Check if all students have passed (average grade >= 70)
let allPassed = students.every((student) => student.averageGrade >= 70);

console.log("Did all students pass? " + (allPassed ? "Yes" : "No"));

// Group students by their average grade range
let gradeRangeGroups = {};
students.forEach((student) => {
  const gradeRange = Math.floor(student.averageGrade / 10) * 10;
  if (!gradeRangeGroups[gradeRange]) {
    gradeRangeGroups[gradeRange] = [];
  }
  gradeRangeGroups[gradeRange].push(student.name);
});

console.log("Students Grouped by Average Grade Range:");
for (let gradeRange in gradeRangeGroups) {
  console.log(
    "Grade Range " +
      gradeRange +
      "-" +
      (parseInt(gradeRange) + 9) +
      ": " +
      gradeRangeGroups[gradeRange].join(", ")
  );
}

// Calculate the standard deviation of the class grades
const classGrades = students.flatMap((student) => student.grades);
const classMean = classSum / classGrades.length;
const squaredDifferences = classGrades.map((grade) => (grade - classMean) ** 2);
const classVariance =
  squaredDifferences.reduce((total, difference) => total + difference, 0) /
  squaredDifferences.length;
const classStandardDeviation = Math.sqrt(classVariance);

console.log("Class Standard Deviation: " + classStandardDeviation.toFixed(2));

// Perform additional complex calculations or operations here...

// End of the elaborate JavaScript code.