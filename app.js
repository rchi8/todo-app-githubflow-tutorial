$("#addTodo").on("click", function() {
    const inputTodo = $("#input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("#input").val("");
});

$(document).on("change", "input[type=checkbox]", function() {
    if ($(this).is(":checked")) {
        $(this).parent().css({
            "text-decoration": "line-through",
            "color": "gray"  // ここで色を設定
        });
    } else {
        $(this).parent().css({
            "text-decoration": "none",
            "color": "black"  // 色を元に戻す
        });
    }
});
