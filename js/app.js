const importantIcon = 'fas';
const notImportantIcon = 'far';

function saveTask() {
    console.log("Button clicked");
}

function toggleForm() {
    console.log("Form toggled");
    $(".info").slideToggle();

}

function toogleImportance() {
    console.log("Icon clicked");

    $("#toggleImportance").toggleClass(notImportantIcon).toggleClass(importantIcon);
}

function init() {
    console.log("Task Manager");

    // load prev data

    // hook events
    $("#btnSave").click(saveTask);
    $("#toggleImportance").click(toogleImportance);
    $("#toggleForm").click(toggleForm);
}

window.onload = init;