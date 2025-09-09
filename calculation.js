
function Calculations(num1,num2) {

    document.querySelector('.js-num-choices').innerHTML = `Numbers Chosen: ${num1}  ${num2}`

    const add = num1 + num2;
    const sub = num1 - num2;
    const multi = num1 * num2;
    const divide = num1 / num2;

    const sum = add + sub + multi + divide;

    document.querySelector('.js-sum').innerHTML = sum

    const avg = sum / 4

    document.querySelector('.js-average').innerHTML = avg


}

 Calculations(4,2)
