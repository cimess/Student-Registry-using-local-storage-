// call out all the input tag,the button, the select tag just to get their values and the tbody tag from table to insert the newly created element


let firstName=document.querySelector('#firstName')    ;
let lastName=document.querySelector('#lastName')    ;
let DateOfBirth=document.querySelector('#DateOfBirth')    ;
let AdmissionYear=document.querySelector('#AdmissionYear')    ;
let StudentType=document.querySelector('.form-select')    ;
const Tablebody=document.querySelector('#tbody');

const headID=document.querySelector('#headID');
const button =document.querySelector('#soft');


let studentId=1



const registry=JSON.parse(window.localStorage.getItem("Student Form"))||[];

// create new element to insert the input values into to display in the table form 


function save(){
  let StudentFile={};
 studentId=1+Date.now();

  if((firstName.value==="")||(lastName.value==="")||(DateOfBirth.value==="")||(AdmissionYear.value==="")||(StudentType.value==="Choose...")){return alert( 'pls fill out all input')};

  StudentFile.name=firstName.value+" "+lastName.value;
  StudentFile.date=DateOfBirth.value;
  StudentFile.year=AdmissionYear.value;
  StudentFile.nationality=StudentType.value;
  StudentFile.Id=studentId
  createElement(StudentFile);

  registry.push(StudentFile);

  localStorage.setItem("Student Form",JSON.stringify(registry));
localStorage.getItem("Student Form")!==null?(alert('succesfully saved Student Form')):(alert('no input saved '))

firstName.value="";
lastName.value="";
DateOfBirth.value="";
AdmissionYear.value ="";
StudentType.value="";
}; 
 
 registry.forEach(createElement);

 


function createElement({name,date,year,nationality,Id}){
  const newTbody=document.createElement('tr');
  newTbody.setAttribute('id',`${Id}`);
  Tablebody.appendChild(newTbody) 
  const tid=document.createElement('td');
  tid.innerText=Id
  const td1=document.createElement('td');
  td1.innerText=name; 
  const td2=document.createElement('td');
  td2.innerText=year ;
  const td3=document.createElement('td');
  td3.innerText=date
  const td4=document.createElement('td');
  td4.innerHTML=nationality;
    // <button id="" class="style">delete</delete><button id="edit" class="style">edit</delete>  
  const td5=document.createElement('td');
  td5.innerHTML=`<button class="style edit" id=${Id}>edit</button>`;
  const td6=document.createElement('td');
   td6.innerHTML=`<button class="style delete" id=${Id}>delete</button>` 
  const th=document.createElement('th');
  th.innerHTML='.';
  th.setAttribute('scope', "row")
  
  newTbody.append(th,tid,td1,td2,td3,td4,td5,td6);

}
let deleteTR;
Tablebody.addEventListener('click', function(event){
  if(event.target.classList.contains(`delete`)){
    let deleteTR= event.target.closest('tr')

    if(deleteTR) {deleteTR.remove()}
  }  
 
}
)






Tablebody.addEventListener('click', function(event){
  let TrArray=[]
if(event.target.classList.contains(`edit`)){
  var x= event.target.closest('tr');
  if (!x) return;
  TrArray=x.children
}
let a=TrArray[2];
let b=TrArray[3];
let c=TrArray[4];
let d=TrArray[5];
a=a.innerText
b=b.innerText;
 console.log(c)
c=c.innerText
d=d.innerText

firstName.value=`${a}`;
lastName.value=`${a}`;
AdmissionYear.value=b;
DateOfBirth.value =c;
StudentType.value=`${d}`

x.remove()
    })
    
    button.addEventListener("click",save) 




