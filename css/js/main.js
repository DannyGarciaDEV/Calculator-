document.querySelector('#add').addEventListener('click', addNum)
document.querySelector('#sub').addEventListener('click', subNum)
document.querySelector('#mult').addEventListener('click', multNum)
document.querySelector('#divide').addEventListener('click', divNum)

function addNum(){
    let inputOne= Number(document.querySelector('#numero1').value)
    let inputTwo= Number(document.querySelector('#numero2').value)
    let sum= inputOne + inputTwo;
    document.querySelector('h1').innerText= sum
}

function subNum(){
    let inputOne= Number(document.querySelector('#numero1').value)
    let inputTwo= Number(document.querySelector('#numero2').value)
    let difference= inputOne - inputTwo;
    document.querySelector('h1').innerText= difference
}


function multNum(){
    let inputOne= Number(document.querySelector('#numero1').value)
    let inputTwo= Number(document.querySelector('#numero2').value)
    let product= inputOne * inputTwo;
    document.querySelector('h1').innerText= product
}

function divNum(){
    let inputOne= Number(document.querySelector('#numero1').value)
    let inputTwo= Number(document.querySelector('#numero2').value)
    let quotient= inputOne / inputTwo;
    document.querySelector('h1').innerText= quotient 
}
b