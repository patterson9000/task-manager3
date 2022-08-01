var regularIcon = "fa-solid fa-exclamation";
var solidIcon = "fa-solid fa-circle-exclamation";
var isImportant = false;

function toggleImportant() {
  console.log("Icon clicked");

  if (!isImportant) {
    $("#iImportant").removeClass(regularIcon);
    $("#iImportant").addClass(solidIcon);
    isImportant = true;
  } else {
    $("#iImportant").removeClass(solidIcon);
    $("#iImportant").addClass(regularIcon);
    isImportant = false;
  }
}
function saveTask() {
  console.log("Saveing task!");

  let isImportant = $("#important").val();
  let title = $("#txtTitle").val();
  let description = $("#txtDescription").val();
  let dueDate = $("#txtDueDate").val();
  let color = $("#txtColor").val();
  let emoji = $("#txtEmoji").val();
  let location = $("#txtLocation").val();
  let status = $("#txtStatus").val();
  let notification = $("#txtChk").prop("checked");

  let task = new Task(isImportant,title,description,dueDate, color,emoji,location,status, notification);
   
  //send the task to server
  $.ajax({
    type: "post",
    url: "https://fsdiapi.azurewebsites.net/api/tasks/",
    data: JSON.stringify(task),
    contentType: "application/json",
    success: function (res) {
      console.log("server says", res);
      displayTask(task);
    },
    error: function (errorDetails) {
      console.log("Error saving tasks", errorDetails);
    }
  });
}

function displayTask(task) {
  let syntax = `<div class="task" style="border:2px solid ${task.color};"> 
<i class="fa-solid fa-exclamation"></i>

<div class="info">
<h5>${task.title}</h5>
<p>${task.description}</p>
</div>


<label class="location">${task.location}</label>

<label class="Date">${task.dueDate}</label>

<label class="status">${task.status}</label>


</div>`;

  $("#pendingTasks").append(syntax);
}
function testRequest() {
  $.ajax({
    type: "GET",
    URL: "https://fsdiapi.azurewebsites.net/api/tasks/",
    success: function(res) {
      
      console.log("Server says", res)
    },
    error: function (errorDetails) {
      console.log("error", errorDetails);
    }
  })
  
}
function fetchTasks() {
  $.ajax({
    type: "GET",
    url: "https://fsdiapi.azurewebsites.net/api/tasks",
    success: function (res) {
      let tasks = JSON.parse(res);

      for (let i=0; i< tasks.length; i++) {
        let task = tasks[i];
        if (task.name == "bret") {
          displayTask(task);
        }
      }

      console.log("server says", res);
    },
    error: function (details) {
      console.log("errors retriving tasks", details);
    }
  });
}
$(document).ready(function () {
  $("#formButton").click(function () {
    $(".sec-form").toggle();
  });
});

function init() {
  console.log("task manager page");

  $("#iImportant").click(toggleImportant);
  $("#btnSave").click(saveTask);

  fetchTasks();
}

window.onload = init;
