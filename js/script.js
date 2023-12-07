/*
var myName = "Daniel"
const myBirthday = "03-11-2000"
const age = 23

var aray = [1,2,3,4,5]

for(let i = 1; i < aray.length; i++){
    console.log(aray[i])
}

function hitung (angka1, angka2){
    return angka1 + angka2
}
console.log(hitung(1,2))

*/

//___________________________________
/*
const inputtinggi = document.getElementById("input-tinggi")
const inputalas = document.getElementById("input-alas")

const inputsisi1 = document.getElementById("input-sisi1")
const inputsisi2 = document.getElementById("input-sisi2")
const inputsisi3 = document.getElementById("input-sisi3")

const buttonHitung = document.getElementById("button-hitung")

inputtinggi.addEventListener('input', function(){
    var textInput = inputtinggi.value.trim()
    if(validateInput(textInput)){
        buttonHitung.disabled = false
    } else{
        buttonHitung.disabled = true
    }
})

inputalas.addEventListener('input', function(){
    var textInput = inputalas.value.trim()
    if(validateInput(textInput)){
        buttonHitung.disabled = false
    } else{
        buttonHitung.disabled = true
    }
})

inputsisi1.addEventListener('input', function(){
    var textInput = inputalas.value.trim()
    if(validateInput(textInput)){
        buttonHitung.disabled = false
    } else{
        buttonHitung.disabled = true
    }
})

inputsisi2.addEventListener('input', function(){
    var textInput = inputalas.value.trim()
    if(validateInput(textInput)){
        buttonHitung.disabled = false
    } else{
        buttonHitung.disabled = true
    }
})

inputsisi3.addEventListener('input', function(){
    var textInput = inputalas.value.trim()
    if(validateInput(textInput)){
        buttonHitung.disabled = false
    } else{
        buttonHitung.disabled = true
    }
})

function validateInput(inputValue) {
    const intergerRegex = /^-?\d+$/;
    return intergerRegex.test(inputValue)
}


function hitungluas() {
    var alas = parseFloat(document.getElementById('input-alas').value);
    var tinggi = parseFloat(document.getElementById('input-tinggi').value);

    var luas = 0.5 * alas * tinggi;
    document.getElementById('result').innerHTML = "<strong>Luas:</strong> " + luas;
}

function hitungkeliling() {
    var sisi1 = parseFloat(document.getElementById('input-sisi1').value);
    var sisi2 = parseFloat(document.getElementById('input-sisi2').value);
    var sisi3 = parseFloat(document.getElementById('input-sisi3').value);

    var keliling = sisi1 + sisi2 + sisi3;
    document.getElementById('result2').innerHTML = "<strong>Keliling:</strong> " + keliling;
}
*/

const inputTinggi = document.getElementById("input-tinggi");
const inputAlas = document.getElementById("input-alas");

const inputSisi1 = document.getElementById("input-sisi1");
const inputSisi2 = document.getElementById("input-sisi2");
const inputSisi3 = document.getElementById("input-sisi3");

const buttonHitungLuas = document.getElementById("button-hitung-luas");
const buttonHitungKeliling = document.getElementById("button-hitung-keliling");

const buttonResetLuas = document.getElementById("button-reset-luas");
const buttonResetKeliling = document.getElementById("button-reset-keliling");

inputTinggi.addEventListener('input', validateAndEnableButton);
inputAlas.addEventListener('input', validateAndEnableButton);

inputSisi1.addEventListener('input', validateAndEnableButton);
inputSisi2.addEventListener('input', validateAndEnableButton);
inputSisi3.addEventListener('input', validateAndEnableButton);

buttonHitungLuas.addEventListener('click', hitungLuas);
buttonResetLuas.addEventListener('click', resetLuas);

buttonHitungKeliling.addEventListener('click', hitungKeliling);
buttonResetKeliling.addEventListener('click', resetKeliling);

function validateAndEnableButton() {
    var tinggi = parseFloat(inputTinggi.value.trim()) || 0;
    var alas = parseFloat(inputAlas.value.trim()) || 0;
    var sisi1 = parseFloat(inputSisi1.value.trim()) || 0;
    var sisi2 = parseFloat(inputSisi2.value.trim()) || 0;
    var sisi3 = parseFloat(inputSisi3.value.trim()) || 0;

    buttonHitungLuas.disabled = !(tinggi > 0 && alas > 0);
    buttonResetLuas.disabled = false;

    buttonHitungKeliling.disabled = !(sisi1 > 0 && sisi2 > 0 && sisi3 > 0);
    buttonResetKeliling.disabled = false;
}

function hitungLuas() {
    var alas = parseFloat(inputAlas.value.trim());
    var tinggi = parseFloat(inputTinggi.value.trim());

    var luas = 0.5 * alas * tinggi;
    document.getElementById('result').innerHTML = "<strong>Luas:</strong> " + luas;
}

function resetLuas() {
    inputTinggi.value = "";
    inputAlas.value = "";
    document.getElementById('result').innerHTML = "";
    buttonResetLuas.disabled = true;
}

function hitungKeliling() {
    var sisi1 = parseFloat(inputSisi1.value.trim());
    var sisi2 = parseFloat(inputSisi2.value.trim());
    var sisi3 = parseFloat(inputSisi3.value.trim());

    var keliling = sisi1 + sisi2 + sisi3;
    document.getElementById('result2').innerHTML = "<strong>Keliling:</strong> " + keliling;
}

function resetKeliling() {
    inputSisi1.value = "";
    inputSisi2.value = "";
    inputSisi3.value = "";
    document.getElementById('result2').innerHTML = "";
    buttonResetKeliling.disabled = true;
}