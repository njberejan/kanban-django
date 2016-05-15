// var $tasks = $('#tasks');

$.get('http://127.0.0.1:8000/api/tasks/', function(tasks)

{
  // tasks.results.forEach(function(task) {
    console.log(tasks)

    var count = tasks['count'];
    var results = tasks['results']
    console.log(count)

    $('<p>').text('Tasks to do: ' + count).appendTo(document.body)
$('<p>').text('~~~~~~~~~~~~~~~~').appendTo(document.body);
    for (var object in results) {
      var title = results[object].title;
      var priority = results[object].priority;
      var status = results[object].status;
      // var time_modified = results[object].time_modified;
      $('<p>').text('Task: ' + title).appendTo(document.body);
      $('<p>').text('Priority: ' + priority).appendTo(document.body);
      $('<p>').text('Status: ' + status).appendTo(document.body);
      // $('<p>').text('Last Modified: ' + time_modified).appendTo(document.body);
      $('<p>').text('~~~~~~~~~~~~~~~~').appendTo(document.body);
    }
    // var $li = $('<li>');
    // $li.text(task.name)
    // $li.appendTo($tasks);
  })
// })

//
// var $task = $('#task');
// var $name = $('input[name="name"]');
// var $status = $('input[name="status"]');
// var $priority = $('input[name="priority"]');
// // var $icon = $('input[name="icon"]');
//
// $task.submit(function() {
//   console.log('you submitted the form');
//
//   $.ajax({
//     method: 'post',
//     url: 'http://localhost:8000/api/tasks/',
//     username: 'nick',
//     password: 'packers45',
//     data: {
//       name: $name.val(),
//       status: $status.val(),
//       priority: $priority.val(),
//       // rarity: $rarity.val()
//     },
//     success: function(newTask) {
//       console.log(newTask)
//       var $li = $('<li>');
//       $li.text(newTask.name)
//       $li.appendTo($tasks);
//     }
//   });
//
//   return false;
// });
