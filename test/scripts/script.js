$(document).ready(() => {
    console.log('ready again')

    $.ajax({
      method: "GET",
      url: "https://polar-shelf-42287.herokuapp.com/todos",
      dataType: "json"
    })
    .done(function( msg ) {
        console.log(msg.todos);
        $.each(msg.todos, (i, todo) => {
            console.log(todo);
            $('#todo-items').append(
                `
                    <p>Task: ${todo.text}</p>
                    <p>Completed: ${todo.completed}</p>
                `
            );
        });
    });

})
