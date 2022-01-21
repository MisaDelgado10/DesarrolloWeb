$(".agregar").on('click', function(add){
    add.preventDefault();
    let text = $("#newText").val();

    if(text !=""){
        $(".Lista").append(
            `
            <div class="item_list"> 
            <li class="lis">
            <p class="itemShop">${text}</p>
            <button class="checar">Check</button>
            <button class="del">Delete</button>
            </div>
            `
        );
    }
})

$(".Lista").on('click','.checar',function(check){
    check.preventDefault();
    $(this).parent().toggleClass('chec');
})

$(".Lista").on('click','.del',function(del){
    del.preventDefault();
    $(this).parent().parent().remove();
})