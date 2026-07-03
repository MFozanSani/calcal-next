export default function calculateBMI(weight, height) {
    if (weight>0 && height >0) {
        // throw new Errorr("Weight or Height can not be zero or less.");
        const BMI = weight / (height/100)**2
        return BMI.toFixed(2)
    }
}