"use strict"
//Updates total tasks based on local storage
function updateTotal() {
    const allListsElem = document.querySelectorAll("ul");
    const data = JSON.parse(localStorage.getItem("tasks"));
    const allLabel = document.querySelectorAll("label");
    let i = 0;
    for (let list of allListsElem) {
        const totalNum = data[list.id].length; // data[list.id] = tasks[key]
        const totalTasks = allLabel[i]; //Reaches total according to the selected list
        totalTasks.textContent = `Total: ${totalNum}`; 
        i++;
    }
}
//clear tasks from DOM and local storage
function clearPage() {
    playLoader();
    cleanDom();
    tasks = {"todo":[], "in-progress":[], "done":[] }; 
    localStorage.setItem('tasks', JSON.stringify(tasks)); // delete local storage
    updateTotal();
    stopLoader();
}
//show and hidde opening messege - Depends on the hour 
function openMessage() {
    const splitDate = Date().split(" ");
    const splitTime = splitDate[4].split(":"); //get time and split to hour, min, sec
    const hour = splitTime[0];
    let meseegeElem;
    if (hour > 6 && hour < 12) {
        meseegeElem = document.querySelector(".morning");
    } else if (hour > 12 && hour < 18) {
        meseegeElem = document.querySelector(".afternoon");
    } else {
        meseegeElem = document.querySelector(".night"); 
    }
    meseegeElem.classList.add("display"); //show messege
    setTimeout(() => meseegeElem.classList.remove("display"), 3000); //hidde messege
}
//Show "good job" img and hidde after 2 seconds
function goodJob() {
    const imgElem = document.querySelector("img");
    imgElem.style.display = "flex"; //show img
    setTimeout(() => imgElem.style.display = "none", 2000); //hidde img
}
//Fixed clock
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').textContent =  `${h} : ${m} : ${s}`;
    setTimeout(startTime, 1000);
}
// Add zero in front of numbers < 10
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}