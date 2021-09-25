"use strict"
//clear tasks from DOM and local storage
function clearPage() {
    playLoader();
    cleanDom();
    tasks = {"todo":[], "in-progress":[], "done":[] };
    localStorage.setItem('tasks', JSON.stringify(tasks));
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