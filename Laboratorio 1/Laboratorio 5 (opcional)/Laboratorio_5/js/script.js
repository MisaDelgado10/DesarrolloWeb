$(".submitButton").on('click', function(add){
    add.preventDefault();
    let text = $("#todoText").val();

    if(text !=""){
        $("#todoList").append(
            `
            <div class=checkbox_div>
            <input type="checkbox" class="check_item" id="check_text" name="todo">
            <label> ${text}</label>
            </div>
            `
        );
    }
})

$("#ButtonDelete").on('click',function(delete_items){
    $(".checkbox_div input:checked").parent().remove();
})

$("#ButtonClear").on('click',function(clear){
    $(".check_item").prop("checked", false);
})

$("#ButtonMark").on('click',function(clear){
    $(".check_item").prop("checked", true);
})