/*const inputBox =document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
function addTask(){
    if (inputBox.value === ""){
        alert("You must add some task")
    }
    else {
        let li =document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
       
        
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
e.target.classList.toggle("checked");
saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask();*/
const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
function addTask(){
    if(inputBox.value === ""){
        alert("You must write something");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.append(span);
    }
    inputBox.value =""
    saveDate();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveDate();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
},false)
function saveDate(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();