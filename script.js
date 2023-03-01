let firstNum="";
let op="";
let test = false;

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

function equals(){
    displayText.textContent=`${operate(op, parseInt(firstNum), parseInt(displayText.textContent, 10))}`;
    op="";
    firstNum=displayText.textContent;
    test = false;
}

function operate(opp, a, b){
    return window[opp](a,b);
}

function operator(e){
    if(op.length>0){
        equals();
        op=e;
        return;
    }
    firstNum=displayText.textContent;
    op=e;
}



const nums = document.querySelector('.Numbers');
let displayText = document.querySelector('.display');
for(let i = 0; i<=9; i++){
    const btn = document.createElement('button');
    btn.textContent=""+i;
    btn.classList.add('Numbers');
    btn.addEventListener("click", function(){
        if(op.length>0 && test==false){
            displayText.textContent=btn.textContent;
            test=true;
        }
        else if(displayText.textContent=='0') displayText.textContent=btn.textContent;
        else displayText.textContent+=btn.textContent; 
        
    });
    nums.appendChild(btn);
}

const a = document.querySelector('#add');
a.addEventListener("click", function(){
    operator('add');
}) 
const s = document.querySelector('#subtract');
s.addEventListener("click", function(){
    operator('subtract');
}) 
const m = document.querySelector('#multiply');
m.addEventListener("click", function(){
    operator('multiply');
}) 
const d = document.querySelector('#divide');
d.addEventListener("click", function(){
    operator('divide');
})  
const e = document.querySelector('#equals');
e.addEventListener("click", function(){
    equals();
})  
const c = document.querySelector('#clear');
c.addEventListener("click", function(){
    displayText.textContent='0';
    op="";
    firstNum="";
})  



