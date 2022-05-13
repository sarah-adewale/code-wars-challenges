/*
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/
// 99, 45, 26, 7, 11, 122, 22

function getGrade(s1, s2, s3){
    avgScore = Math.floor((s1 + s2 + s3)/3)
    if(avgScore < 60){
        return 'F'
    }else if(avgScore < 70){
        return 'D'
    }else if(avgScore < 80){
        return 'C'
    }else if(avgScore < 90){
        return 'B'
    }else{
        return 'A'
    }
}

getGrade(95,90,93) // 'A'
getGrade(70,70,100) // 'B'
getGrade(70,70,70) // 'C'
getGrade(65,70,59)// 'D'
getGrade(44,55,52)// 'F'