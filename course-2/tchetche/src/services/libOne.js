const maFunction1 = () => console.log("Hello")
/* 
SYNTAXE RACCOURCI EQUIVALENTE AU CODE SUIVANT
const maFunction1 = () => {
    return console.log("Hello")
} 
*/
const maFunction2 = () => console.log("World")

export const function1 = maFunction1
export const function2 = maFunction2

export default {
    function1: maFunction1,
    function2: maFunction2
}