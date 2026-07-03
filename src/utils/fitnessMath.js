export function calculateBMI(weight, height) {
    if (weight>0 && height >0) {
        // throw new Errorr("Weight or Height can not be zero or less.");
        const BMI = weight / (height/100)**2
        return BMI.toFixed(2)
    }
}
export function categoryBMI(BMI) {
    if (BMI<18.5) return "Underweight"
    if (BMI>=18.5 && BMI<=24.9) return "Normal"
    if (BMI>=25 && BMI<=29.9) return "Overweight"
    if (BMI>=30) return "Obese"
}
export function calculateBMR(weight, height, age, sex) {
    if (sex == 'male') {
        const BMR = 10 * weight +6.25*height-5*age+5
        return BMR.toFixed(2)
    }
    if (sex == 'female') {
        const BMR = 10 * weight +6.25*height-5*age-161
        return BMR.toFixed(2)
    }
}
export function calculateTDEE(BMR, activitylevel){
    if(activitylevel == 'Sedentary'){ 
        const TDEE = BMR * 1.2  
        return parseFloat(TDEE.toFixed(2));
    }
    if(activitylevel == 'Light'){ 
        const TDEE = BMR * 1.375  
        return parseFloat(TDEE.toFixed(2));
    }
    if(activitylevel == 'Moderate'){ 
        const TDEE = BMR * 1.55
        return parseFloat(TDEE.toFixed(2));
    }
    if(activitylevel == 'Active'){ 
        const TDEE = BMR * 1.725  
        return parseFloat(TDEE.toFixed(2));
    }
    if(activitylevel == 'Very Active'){ 
        const TDEE = BMR * 1.9
        return parseFloat(TDEE.toFixed(2));
    }
}
export function caloriesTarget(TDEE, fitnessgoal){
    if(fitnessgoal == 'Lose weight'){
        const calories = TDEE - 500
        return calories.toFixed(2)
    }
    if(fitnessgoal == 'Maintain weight'){
        const calories = TDEE
        return calories
    }
    if(fitnessgoal == 'Gain weight'){
        const calories = TDEE + 400
        return calories.toFixed(2)
    }
}
export function calculateMacros(calories) {
    const protein = Math.round(calories*0.3/4);
    const carbs = Math.round(calories*0.4/4);
    const fats = Math.round(calories*0.3/9);
    return {protein,carbs,fats}
}