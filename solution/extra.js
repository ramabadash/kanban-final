"use strict"
//clear tasks from DOM and local storage
function clearPage() {
    playLoader();
    cleanDom();
    tasks = {"todo":[], "in-progress":[], "done":[] };
    localStorage.setItem('tasks', JSON.stringify(tasks));
    stopLoader();
}
