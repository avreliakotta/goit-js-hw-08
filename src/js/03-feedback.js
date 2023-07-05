import throttle from "lodash.throttle";

const formEl=document.querySelector('.feedback-form');
const throttleHandler=throttle(onInput,500);
formEl.addEventListener('input',throttleHandler);
formEl.addEventListener('submit',onFormSubmit);

getData();
const formData={};
function onInput(event){
    const target=event.target;
    formData[target.name]=target.value;
    // console.log('formData',formData);
    
   
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    }
    function onFormSubmit(event){
    event.preventDefault();
    if(formData){
    console.log('formData',formData);
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    }
}
function getData(){
    const savedData=localStorage.getItem("feedback-form-state");
    if(savedData){
    const parsedData=JSON.parse(savedData);
    formEl.elements.email.value=parsedData.email;
    formEl.elements.message.value=parsedData.message;
  
    }
    
}
