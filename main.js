"use strict";
var GradeUtils;
(function (GradeUtils) {
    // Összes jegyek átlaga
    function totalOfGrades(grades) {
        return grades.reduce((sum, grade) => sum + grade.grade, 0);
    }
    // Jegyek átlaga
    function getAvarageOfGrades(grades) {
        if (grades.length == 0)
            return "0";
        return (totalOfGrades(grades) / grades.length).toFixed(2);
    }
    GradeUtils.getAvarageOfGrades = getAvarageOfGrades;
    // Átmenő tanulók száma
    function getNumberOfPassingGrades(grades) {
        return grades.filter(grade => grade.grade > 1).length;
    }
    GradeUtils.getNumberOfPassingGrades = getNumberOfPassingGrades;
    // Átmenő tanulók százaléke
    function getPercentageOfPassingGrades(grades) {
        if (grades.length == 0)
            return 0;
        return Math.round((getNumberOfPassingGrades(grades) / grades.length) * 100);
    }
    GradeUtils.getPercentageOfPassingGrades = getPercentageOfPassingGrades;
    //Űrlap validálás
    function validateGrade(student, grade) {
        if (!student || student.length < 3)
            return false;
        if (grade < 1 || grade > 5)
            return false;
        return true;
    }
    GradeUtils.validateGrade = validateGrade;
    // Alapértelmezett adatok betöltése
    function getInitialGrades() {
        return [
            {
                id: 1,
                student: "Példa Tanuló",
                grade: 5,
                note: "Ügyes voltál",
                canRetake: false
            },
            {
                id: 2,
                student: "Buta Tanuló",
                grade: 2,
                note: "Lehetne jobb is újra megteheted",
                canRetake: true
            },
            {
                id: 3,
                student: "Rossz Tanuló",
                grade: 1,
                note: "Ez már a harmadik próbád volt, nincs több esély.",
                canRetake: false
            },
            {
                id: 4,
                student: "Átlagos Tanuló",
                grade: 3,
                note: "Ez egy elfogadható jegy de mivel az első alkalom még újra próbálhatpd.",
                canRetake: true
            }
        ];
    }
    GradeUtils.getInitialGrades = getInitialGrades;
})(GradeUtils || (GradeUtils = {}));
