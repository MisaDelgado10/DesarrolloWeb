$(document).ready(function() {

let temas = ['dog','movies','cat','carrot','pig','videogames','books']

temas.forEach(element => {
    $("#animal-buttons").append 
    (
        `
        <div class="gifs_categories">
            <button class="animal-item">${element}</button>
        </div>
        `
    );
}); 

$("#add-animal").on('click',function(add_button_gif){
    add_button_gif.preventDefault();
    let input_gif_category = $("#animal-input").val();
    if(input_gif_category!=""){
        temas.push(input_gif_category);
        $("#animal-buttons").append 
        (
            `
            <div class="gifs_categories">
                <button class="animal-item">${input_gif_category}</button>
            </div>
            `
        );
    }
})

$("#animal-buttons").on('click','.animal-item',function(add_gif){
    add_gif.preventDefault();
    $('#animals').children().remove();
    let btn_gif_category= $(this).text();
     
    let peticion = {
        url:`https://api.giphy.com/v1/gifs/search?q=${btn_gif_category}&api_key=Uw8COIcgOxsJm9q69SqVkuE0WuHMuWO0&limit=10`,
        success: function (respuesta) {
        console.log(respuesta)
          let animals = $("#animals")
          
          respuesta.data.forEach(element => {
            animals.append
            (
                ` 
                <div class='animal-item'>  
                    <p>Rating: ${element.rating}</p>
                    <img src='${element.images.fixed_height_still.url}' 
                    data-still='${element.images.fixed_height_still.url}' 
                    data-animate='${element.images.fixed_height.url}' 
                    data-state='still' class='animal-image'/> 
                </div>`  
            )
          })
          
          
        } ,
        error: function () {
         console.log("No se ha podido obtener la información")   
        }
      }
      $.ajax(peticion)
      
})

$("#animals").on('click','img',function(gif_state){
    gif_state.preventDefault();
    let state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      }
      else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
})
});
