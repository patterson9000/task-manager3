# task-manager3
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
   "
    />
    <link rel="stylesheet" href="./style/mystyle.css" />
    <title>Document</title>
  </head>
  <body>
    
    <h1>Task manager</h1>
    
    <main class="main-container">
      <section class="sec-list">
       
        <h3>list</h3>

        <div id="pendingTasks" class="task-list">
        

        </div>

        <div>
          <button type="button" id="formButton">
            hide
        </button>
        </div>
        
      </section>

      <section class="sec-form">
        <h3>Task information</h3>

        <div class="my-control">
          <label>important</label>
          <i id="iImportant" class="fa-solid fa-exclamation"></i>
        </div>

        <div class="my-control">
          <label>title</label>
          <input id="txtTitle" type="text">
        </div>

        <div class="my-control">
          <label>description</label>
          <textarea id="txtDescription" row="3"></textarea>
        </div>

        <div class="my-control">
          <label>due date</label>
          <input id="txtDueDate" type="datetime-local">
        </div>

        <div class="my-control">
          <label>color</label>
          <input id="txtColor" type="color">
        </div>

        <div class="my-control">
          <label>emoji</label>
          <input id="txtEmoji" type="text">
        </div>

        <div class="my-control">
          <label>location</label>
          <input id="txtLocation" type="text">
        </div>

        <div class="my-control">
          <label>status</label>
          <select id="txtStatus">
            <option>new</option>
            <option>in progress</option>
            <option>blocked</option>
            <option>paused</option>
            <option>removed</option>
            <option>done</option>
          </select>
        </div>

        <div class="my-control">
          <label>notification</label>
          <input id="txtChk" type="checkbox" />
        </div>

        <div class="my-control">
            <button id="btnSave" class="save-button">Save Task</button>
        </div>

      </section>
    </main>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="./script/task.js"></script>
    
    <script src="./script/main.js"></script>
  </body>
</html>

<!--
    important
    title
    dueDate
    description
    color
    emoji
    location
    status
    notification
    reminder
-->
