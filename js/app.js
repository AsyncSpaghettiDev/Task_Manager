const importantIcon = 'fas';
const notImportantIcon = 'far';

function saveTask() {
    // get data
    let title = $("#task-name").val();
    let dueDate = $("#due-date").val();
    let description = $("#description").val();
    let tag = $("#tag").val();
    let color = $("#color").val();
    let category = $("#category").val();
    let important = $("#toggleImportance").hasClass(importantIcon);

    let task = new Task(title, dueDate, description, tag, color, category, important);
    // call created function
    displayTask(task);
    clearForm();
}

/**
 * Clear form function
 * and set date to today
 */

function clearForm() {
    $("#task-name").val("");
    let today = new Date();
    $('#due-date').val(today.toISOString().substr(0, 10));
    $("#description").val("");
    $("#tag").val("");
    $("#color").val("#9900ff");
    $("#category").val("work");
    $("#toggleImportance").removeClass(importantIcon);
    $("#toggleImportance").addClass(notImportantIcon);
}

/**
 * Create a display function
 * the fn should accept a task object as a parameter
 * console log the task object
 */

function displayTask(task) {
    console.log(task);

    // create div with class="task"
    // Separate title and description of the task in a div with a class of "task_info"
    // Separate the due date in a div with a class of "task_info"
    // Separate the tag and the category in a div with a class of "task_info"
    // Set the background color of the task to the color of the task using iline css
    // Create all this using string template
    // Do something with isImportant wonder me copilot
    // Add the task to the tasks-list in the DOM

    let html = `
    <div class="task" style="background-color:${task.color}">
        <div class="task_info">
            <h3>${task.title}</h3>
            <p>${task.description}</p>
        </div>
        <div class="task_info">
            <p>Due Date</p>
            <p>${task.dueDate}</p>
        </div>
        <div class="task_info">
            <p>Tag: ${task.tag}</p>
            <p>Category: ${task.category}</p>
        </div>
        <div class="task_info task_actions">
            <i class="task_toggleImportance ${task.isImportant ? importantIcon : notImportantIcon} fa-star"></i> 
            <i class="task_delete fas fa-trash-alt"></i>
            <i class="task_edit fas fa-edit"></i>
        </div>
    </div>
                `;

    $("#tasks-list").append(html);
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
    $("#color").val("#9900ff");
    let today = new Date();
    $('#due-date').val(today.toISOString().substr(0, 10));

    // hook events
    $("#btnSave").click(saveTask);
    $("#toggleImportance").click(toogleImportance);
    $("#toggleForm").click(toggleForm);
}

window.onload = init;