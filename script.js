function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, a, b){
    return operator(a,b);
}




const nums = document.querySelector('.Numbers');
let displayText = "";
for(let i = 0; i<=9; i++){
    const btn = document.createElement('button');
    btn.textContent=""+i;
    btn.classList.add('Numbers');
    btn.addEventListener("click", function(){
        displayText+=btn.textContent;
    });
    nums.appendChild(btn);
}

