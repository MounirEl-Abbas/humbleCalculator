const inputBox = document.querySelector("#input-el")
const btnOne = document.querySelector(".btn-1")
const btnTwo = document.querySelector(".btn-2")
const btnThree = document.querySelector(".btn-3")
const btnFour = document.querySelector(".btn-4")
const btnFive = document.querySelector(".btn-5")
const btnSix = document.querySelector(".btn-6")
const btnSeven = document.querySelector(".btn-7")
const btnEight = document.querySelector(".btn-8")
const btnNine = document.querySelector(".btn-9")
const btnZero = document.querySelector(".btn-0")

const btnDivide = document.querySelector(".btn-div")
const btnMultiply = document.querySelector(".btn-mul")
const btnSubtract = document.querySelector(".btn-sub")
const btnAdd = document.querySelector(".btn-add")

const btnEqual = document.querySelector(".btn-eq")
const btnClear = document.querySelector(".btn-clr")
const btnDot = document.querySelector(".btn-dot")

// Numbers Clicked
let arrFirst = []
let arrSecond = []
let secondNum = false

btnOne.addEventListener("click", function(){
    let num = 1
    inputBox.value += num
    if (!secondNum) {
        arrFirst.push(num)
        firstNumber = Number(arrFirst.join(""))
        console.log(`First Number: ${firstNumber}`)
    }else if (secondNum){
        arrSecond.push(num)
        secondNumber = Number(arrSecond.join(""))
        console.log(`Second Number: ${secondNumber}`)
    }
})
btnTwo.addEventListener("click", function(){
    let num = 2
    inputBox.value += num
    if (!secondNum) {
        arrFirst.push(num)
        firstNumber = Number(arrFirst.join(""))
        console.log(`First Number: ${firstNumber}`)
    }else if (secondNum){
        arrSecond.push(num)
        secondNumber = Number(arrSecond.join(""))
        console.log(`Second Number: ${secondNumber}`)
    }
})
btnThree.addEventListener("click", function(){
    let num = 3
    inputBox.value += num
    if (!secondNum) {
        arrFirst.push(num)
        firstNumber = Number(arrFirst.join(""))
        console.log(`First Number: ${firstNumber}`)
    }else if (secondNum){
        arrSecond.push(num)
        secondNumber = Number(arrSecond.join(""))
        console.log(`Second Number: ${secondNumber}`)
    }
})
btnFour.addEventListener("click", function(){
    let num = 4
    inputBox.value += num
    if (!secondNum) {
        arrFirst.push(num)
        firstNumber = Number(arrFirst.join(""))
        console.log(`First Number: ${firstNumber}`)
    }else if (secondNum){
        arrSecond.push(num)
        secondNumber = Number(arrSecond.join(""))
        console.log(`Second Number: ${secondNumber}`)
    }
})
btnFive.addEventListener("click", function(){
    let num = 5
    inputBox.value += num
    if (!secondNum) {
        arrFirst.push(num)
        firstNumber = Number(arrFirst.join(""))
        console.log(`First Number: ${firstNumber}`)
    }else if (secondNum){
        arrSecond.push(num)
        secondNumber = Number(arrSecond.join(""))
        console.log(`Second Number: ${secondNumber}`)
    }
})
btnSix.addEventListener("click", function(){
    let num = 6
    inputBox.value += num
    if (!secondNum) {
        arrFirst.push(num)
        firstNumber = Number(arrFirst.join(""))
        console.log(`First Number: ${firstNumber}`)
    }else if (secondNum){
        arrSecond.push(num)
        secondNumber = Number(arrSecond.join(""))
        console.log(`Second Number: ${secondNumber}`)
    }
})
btnSeven.addEventListener("click", function(){
    let num = 7
    inputBox.value += num
    if (!secondNum) {
        arrFirst.push(num)
        firstNumber = Number(arrFirst.join(""))
        console.log(`First Number: ${firstNumber}`)
    }else if (secondNum){
        arrSecond.push(num)
        secondNumber = Number(arrSecond.join(""))
        console.log(`Second Number: ${secondNumber}`)
    }
})
btnEight.addEventListener("click", function(){
    let num = 8
    inputBox.value += num
    if (!secondNum) {
        arrFirst.push(num)
        firstNumber = Number(arrFirst.join(""))
        console.log(`First Number: ${firstNumber}`)
    }else if (secondNum){
        arrSecond.push(num)
        secondNumber = Number(arrSecond.join(""))
        console.log(`Second Number: ${secondNumber}`)
    }
})
btnNine.addEventListener("click", function(){
    let num = 9
    inputBox.value += num
    if (!secondNum) {
        arrFirst.push(num)
        firstNumber = Number(arrFirst.join(""))
        console.log(`First Number: ${firstNumber}`)
    }else if (secondNum){
        arrSecond.push(num)
        secondNumber = Number(arrSecond.join(""))
        console.log(`Second Number: ${secondNumber}`)
    }
})
btnZero.addEventListener("click", function(){
    let num = 0
    inputBox.value += num
    if (!secondNum) {
        arrFirst.push(num)
        firstNumber = Number(arrFirst.join(""))
        console.log(`First Number: ${firstNumber}`)
    }else if (secondNum){
        arrSecond.push(num)
        secondNumber = Number(arrSecond.join(""))
        console.log(`Second Number: ${secondNumber}`)
    }
})

// Operator functions
let addOperator = function(){
    inputBox.value = ''
    secondNum = true
    return operator = "+"
}
let subtractOperator = function(){
    inputBox.value= ''
    secondNum = true
    return operator = "-"
}
let multiplyOperator = function(){
    inputBox.value= ''
    secondNum = true
    return operator = "*"
}
let divideOperator = function(){
    inputBox.value= ''
    secondNum = true
    return operator = "/"
}


// Operators Clicked
btnAdd.addEventListener("click", addOperator)
btnSubtract.addEventListener("click", subtractOperator)
btnMultiply.addEventListener("click", multiplyOperator)
btnDivide.addEventListener("click", divideOperator)


// Equal & Clear
function resetAll(){
    firstNumber = 0
    secondNumber = 0
    secondNum = false
    arrFirst = []
    arrSecond = []
}
btnEqual.addEventListener("click", function(){
    if(operator ==="+"){
        console.log(firstNumber + operator + secondNumber)
        inputBox.value = firstNumber + secondNumber
    }else if(operator ==="-"){
        console.log(firstNumber + operator + secondNumber)
        inputBox.value = firstNumber - secondNumber

    }else if(operator ==="*"){
        console.log(firstNumber + operator + secondNumber)
        inputBox.value = firstNumber * secondNumber

    }else if(operator ==="/"){
        console.log(firstNumber + operator + secondNumber)
        inputBox.value = firstNumber / secondNumber
    }else{
        console.log('Nope')
    }
resetAll()
})

btnClear.addEventListener("click", function(){
    resetAll()
    inputBox.value = ''
})