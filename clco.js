let curentInput  = document.querySelector('.curentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let eresebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
let realTimeScreenValue =[]

clearbtn.addEventListener("click",()=>{
    realTimeScreenValue =[''];
    answerScreen.innerHTML= 0;
    curentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color ="rgba(150,150,150,0.87)";

})
buttons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        if (!btn.id.match('erase')) {
            realTimeScreenValue.push(btn.value)
            console.log(realTimeScreenValue)
            curentInput.innerHTML =realTimeScreenValue.join('');

            if (btn.classList.contains('num_btn')) {
                if ((eval(realTimeScreenValue.join(''))).length>8) {
                    answerScreen.innerHTML = (eval(realTimeScreenValue.join(''))).toFixed(5);
                } else {
                    console.log((eval(realTimeScreenValue.join(''))).toString().length)
                    answerScreen.innerHTML =eval(realTimeScreenValue.join(''));
                }
            }
        }
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            curentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }
        if (btn.id.match('evaluate')) {
            curentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }
        if (typeof eval(realTimeScreenValue.join(''))== 'undefined') {
            answerScreen.innerHTML = 0;
        }
    })
})