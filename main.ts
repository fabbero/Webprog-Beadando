interface Grade{
    id: number;
    student: string;
    grade: number;
    note: string;
    canRetake: boolean;
}

namespace GradeUtils{
    // Összes jegyek átlaga
    function totalOfGrades(grades: Grade[]): number {
        return grades.reduce((sum, grade) => sum + grade.grade, 0);
    }

    // Jegyek átlaga
    export function getAvarageOfGrades(grades: Grade[]): string {
        if (grades.length == 0)
            return "0";

        return (totalOfGrades(grades) / grades.length).toFixed(2);
    }

    // Átmenő tanulók száma
    export function getNumberOfPassingGrades(grades: Grade[]): number {
        return grades.filter(grade => grade.grade > 1).length;
    }

    // Átmenő tanulók százaléke
    export function getPercentageOfPassingGrades(grades: Grade[]): number {
        if (grades.length == 0)
            return 0;

        return Math.round((getNumberOfPassingGrades(grades) / grades.length) * 100);
    }

    //Űrlap validálás
    export function validateGrade(student: string, grade: number){
        if ( !student || student.length < 3)
            return false;

        if (grade < 1 || grade > 5)
            return false;

        return true;
    }

    // Alapértelmezett adatok betöltése
    export function getInitialGrades(): Grade[] {
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
        ]
    }
}