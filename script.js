const userDob = document.querySelector("#date-of-birth");

const userLuckyNumber = document.querySelector("#lucky-Number");

const userbtn = document.querySelector("#btn");

const outputBox = document.querySelector("#output-box");

function checkBirthdayIsLucky(){
  const dob = userDob.value;
  const sum = calculateSum(dob);
  const numberr = userLuckyNumber.value;
  if(dob === ""){
    outputBox.innerText="Please Enter Your Birth Date!";
  }
  else if(numberr === ""){
    outputBox.innerText="Please Enter Your Lucky Number!";
  }else{
    compareValues(sum,numberr);  
  }
}

function calculateSum(dob){
  dob = dob.replaceAll("-","");
  let sum = 0;
  for(let index=0;index<dob.length;index++){
    sum += Number(dob.charAt(index));
  }
  return sum;
}

function compareValues(sum,userLuckyNumber){
  if(sum%userLuckyNumber === 0){
     outputBox.innerText="Your Birthday is Lucky.."; 
  }
  else{
    outputBox.innerText="Your Birthday is not Lucky..";
  }
}

userbtn.addEventListener('click',checkBirthdayIsLucky);