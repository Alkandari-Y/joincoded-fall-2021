let operations = ['+', '-', 'x', '÷'];
let operationIndex = null;
let numberOne = [];
let numberTwo = [];
let history = [];

const inputCheck = (input) => {
  if (isNaN(input) === false){
    if (numberOne.length === 0 && operationIndex === null){
    numberOne.push(input)
    printOnConsole(numberOne)
    } else if (numberOne.length > 0 && operationIndex === null){
    numberOne.push(input)
    printOnConsole(joinArray(numberOne))
    } else if (operationIndex >= 0 && numberTwo.length === 0){
      numberTwo.push(input)
    printOnConsole(numberTwo)
    } else if (operationIndex >= 0 && numberTwo.length > 0 ){
      numberTwo.push(input)
      printOnConsole(joinArray(numberTwo))
    }
  } else if (operations.includes(input) && operationIndex === null && numberTwo.length === 0){
    operationIndex = operations.indexOf(input)
  } else if(input === '='){
    calculateTotal(joinArray(numberOne), joinArray(numberTwo), operationIndex)
  }
}

const joinArray = (numberArray) => {
  let num = numberArray.join('')
  return num
}

const resetCalculator = () =>{
  operationIndex = null;
  numberOne = [];
  numberTwo = [];
  printOnConsole(0)
}

let calculations = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  'x': (num1, num2) => num1 * num2,
  '÷': (num1, num2) => num1 / num2,
}

const calculateTotal = (num1, num2, index) => {
  let operation = operations[index]
  let calc = `${num1} ${operation} ${num2} = ${(calculations[operation](parseInt(num1), parseInt(num2))).toFixed(2)}`
  history.unshift(calc)
  updateHistory(history)
  printOnConsole(calculations[operation](parseInt(num1), parseInt(num2)).toFixed(2))
  operationIndex = null;
  numberOne = [];
  numberTwo = [];
}

const buttonClick = (input) => {
  if (input === 'AC'){
    resetCalculator();
  } else {
    inputCheck(input)
  }
}

// function buttonClick(text) {
//   if (parseInt(text) >= 0 && text < 10 && numberOne === null && text !== '=' && text !== 'AC' && operationIndex === null ){
//     numberOne = `${text}`
//     printOnConsole(numberOne)
//   } else if (parseInt(text) >= 0 && text < 10 && text !== '=' && text !== 'AC' && numberTwo === null && operationIndex == null){
//     numberOne = numberOne+`${text}`
//     printOnConsole(numberOne)

//   } else if (numberOne !== null && numberTwo === null && text !== '=' && text !== 'AC' && operations.includes(text)){
//     operationIndex = operations.indexOf(text)

//   } else if (parseInt(text) >= 0 && text < 10 && numberTwo === null && text !== '=' && text !== 'AC'){
//     numberTwo = `${text}`
//     printOnConsole(numberTwo)
//   } else if (parseInt(text) >= 0 && text < 10 && text !== '=' && text !== 'AC'){
//     numberTwo = numberTwo+`${text}`
//     printOnConsole(numberTwo)

//   } else if (text.includes('AC')) {
//     resetCalculator();

//   } else if(text === '='){
//     calculateTotal(numberOne, numberTwo, operationIndex)
//   }
// }

// task link https://github.com/JoinCODED/TASK-calculator-js