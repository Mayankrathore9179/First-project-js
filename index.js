const countvalue=document.querySelector('.counter');

const increment=()=>{
    //get the value from ui
    let value= parseInt(countvalue.innerText);
    //update the value
    value=value+1;
    //set the value
    countvalue.innerText=value;

}
const decrement=()=>{
    //get the value from ui
    let value= parseInt(countvalue.innerText);
    //update the value
    value=value-1;z
    //set the value
    countvalue.innerText=value;

}