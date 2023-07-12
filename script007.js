// SOMA
var box_soma1 = document.getElementById('soma1')
var box_soma2 = document.getElementById('soma2')
var res_soma = document.getElementById('res_soma')    

// SUB
var box_sub1 = document.getElementById('sub1')
var box_sub2 = document.getElementById('sub2')
var res_sub = document.getElementById('res_sub')

// MULT
var box_mult1 = document.getElementById('mult1')
var box_mult2 = document.getElementById('mult2')
var res_mult = document.getElementById('res_mult')

// DIV
var box_div1 = document.getElementById('div1')
var box_div2 = document.getElementById('div2')
var res_div = document.getElementById('res_div')

function somar() {
    var number1 = Number(box_soma1.value)
    var number2 = Number(box_soma2.value)
    var s = number1 + number2
    res_soma.innerHTML = `${number1} + ${number2} = <strong>${s}</strong>`
}

function sub() {
    var number1 = Number(box_sub1.value)
    var number2 = Number(box_sub2.value)
    var s = number1 - number2
    res_sub.innerHTML = `${number1} - ${number2} = <strong>${s}</strong>`
}

function mult() {
    var number1 = Number(box_mult1.value)
    var number2 = Number(box_mult2.value)
    var s = number1 * number2
    res_mult.innerHTML = `${number1} x ${number2} = <strong>${s}</strong>`
}

function div() {
    var number1 = Number(box_div1.value)
    var number2 = Number(box_div2.value)
    if (number2 == 0) {
        res_div.innerHTML = 'IMPOSSIVEL DIVIDIR POR 0'
    } else {
        var s = number1 / number2
        res_div.innerHTML = `${number1} / ${number2} = <strong>${s}</strong>`
    }
}

function reset() {
    res_soma.innerHTML = 'RESULTADO'
    res_sub.innerHTML = 'RESULTADO'
    res_mult.innerHTML = 'RESULTADO'
    res_div.innerHTML = 'RESULTADO'
}