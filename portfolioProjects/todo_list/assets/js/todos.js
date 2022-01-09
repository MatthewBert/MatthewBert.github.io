//Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click X to delete a todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Press enter to add a new todo
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>")

    }
});

//Press on pencil to hide and unhide the input
$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle();
});