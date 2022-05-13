/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

my process
p: numbers
r: return weight / height raised to the power of 2
e:
console.log(bmi(80, 1.80))
p: calculate the body mass index. create a function
evaluate the value of height^2
create a variable and assign it the eveluation of 
weight / height
creat a conditional if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height){
    height = Math.pow(height, 2)
    let bmiVal = weight / height
    if(bmiVal <= 18.5){
        return 'Underweight'
    }else if(bmiVal <= 25.0){
        return 'Normal'
    }else if(bmiVal <=30){
        return 'Overweight'
    }else{
        return 'Obese'
    }
}

console.log(bmi(80, 1.80),'Normal')