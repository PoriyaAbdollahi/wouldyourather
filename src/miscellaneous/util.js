export const numberToPrecentage = (number1,number2) => { 
const total =  number1 + number2
const prec1 = Math.round((number1 * 100) / total)
    const prec2 = Math.round( (number2 * 100) / total)
return [prec1,prec2]    
}
export const generateRandomInteger =(max) => {
 let num = Math.floor(Math.random() * max) + 1;
    num *= Math.round(Math.random()) ? 1 : -1;
    return num
}
