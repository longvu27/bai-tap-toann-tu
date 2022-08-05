function Cộng() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let Result = Number(number1) + Number(number2);
    document.getElementById('Result').innerHTML= Result;
}

function Trừ() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let Result = Number(number1) - Number(number2);
    document.getElementById('Result').innerHTML= Result;
}
function Nhân() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let Result = Number(number1) * Number(number2);
    document.getElementById('Result').innerHTML= Result;
}

function Chia() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let Result = Number(number1) / Number(number2);
    document.getElementById('Result').innerHTML= Result;
}
