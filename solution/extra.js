"use strict"
//
function updateTotal() {
    const allListsElem = document.querySelectorAll("ul");
    const data = JSON.parse(localStorage.getItem("tasks"));
    const allLabel = document.querySelectorAll("label");
    let i = 0;
    for (let list of allListsElem) {
        const totalNum = data[list.id].length;
        const totalTasks = allLabel[i];
        totalTasks.textContent = `Total: ${totalNum}`; 
        i++;
    }
}
//clear tasks from DOM and local storage
function clearPage() {
    playLoader();
    cleanDom();
    tasks = {"todo":[], "in-progress":[], "done":[] };
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateTotal();
    stopLoader();
}
//show and hidde opening messege
function openMessage() {
    const splitDate = Date().split(" ");
    const splitTime = splitDate[4].split(":");
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
//
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
//  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}