function getpin(){
    const pin = Math.round(Math.random()*10000);
    const pinString=pin+'';
    if(pinString.length==4){
        return pin;       
    }
    else{
        console.log('got 3 digit and calling again',pin);
        return getpin();
    }
}
function generatePin(){
    const pin=getpin();
    document.getElementById('display-pin').value=pin;    
}
document.getElementById('key-pad').addEventListener('click',function(event){
const number=event.target.innerText;
const calcInput=document.getElementById('typed-value');
if(isNaN(number)){
    if(number=='C'){
calcInput.value='';
    }
    
else if(number=="Submit"){
    calcInput.value='';
}
}
// console.log(number);
else{
    const previousCalc= calcInput.value;
const newCalc=previousCalc+number;
calcInput.value=newCalc;
}

});

function varifyPin(){
    // console.log('pin is verifying');
    const pin = document.getElementById('display-pin').value;
    const typedValue=document.getElementById('typed-value').value;

    const successMessage=document.getElementById('notify-success');
    const faliourMessage=document.getElementById('notify-fail');

    if(pin==typedValue){
        successMessage.style.display='block';
        
        faliourMessage.style.display='none';
    }
    else{
        
        faliourMessage.style.display='block';
        successMessage.style.display='none';
    }
}