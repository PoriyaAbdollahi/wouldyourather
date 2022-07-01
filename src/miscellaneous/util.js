export const numberToPrecentage = (number1,number2) => { 
const total =  number1 + number2
const prec1 = (number1 * 100) / total
const prec2 = (number2 * 100) / total
return [prec1,prec2]    
}

