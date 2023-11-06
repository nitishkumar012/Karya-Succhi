const input=document.getElementById("input-box");
const listvalue=document.getElementById("list-value");

function addTask(){
    if(input.value===''){
        alert("You must writ something"); // input field me agar input nhi hoga to isase alert option ayga 
    }
    else{
        let li=document.createElement("li");//ek li element banaynge aur usko li variable me hi store karenge
        li.innerHTML=input.value;//value ko input karwaynge 
        listvalue.appendChild(li);//is step me usko list variable me store karenge
        let span = document.createElement("span");//store that cross in span tag
        span.innerHTML="\u00d7";   // create cross "*"
        li.appendChild(span);
   }
    input.value=""; // is step me again input field ko empty kar denge
    saveData();
}
// on clicking adding or removing the task
listvalue.addEventListener("click",function(event){
if(event.target.tagName==="LI"){
    event.target.classList.toggle("checked");
    saveData();
}
else if(event.target.tagName==="SPAN"){
    event.target.parentElement.remove();
    saveData();
}
},false);
// For saving the data in browser
function saveData(){
    localStorage.setItem("data",listvalue.innerHTML);
}
// for showing the data after refresh
 function showtask(){
    listvalue.innerHTML=localStorage.getItem("data");
 }
 showtask();