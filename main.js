//show current date
$("#currentDay").text(moment().format("LL"));


//create array of all textarea elements
//get the current hour
//compare current hour with hour (id) of textarea
//set textarea class to past, future, or present, which changes color of textarea via css
var textareaArray = document.querySelectorAll("textarea");
var currentHour = moment().hour();

for (var i=0; i<textareaArray.length; i++) {
    thisTextarea = textareaArray[i];
    hour = thisTextarea.getAttribute("id");
    if(currentHour > hour) {
        thisTextarea.classList.add("past");
    }else if (currentHour < hour) {
        thisTextarea.classList.add("future");
    }else {
        thisTextarea.classList.add("present");
    }
}


//when saveButton is clicked, textcontent saves to local storage
var content;
var userInput;

var rowArray = document.querySelectorAll(".row");
// console.log (rowArray);

// function renderContent() {
//     content = localStorage.getItem("content");
//     $(this).text(content);
// }


$(".saveBtn").on("click", function(event){
    event.preventDefault();
    userInput = $("textarea").val();
    localStorage.setItem("content", userInput);
    console.log(localStorage.getItem("content"));
    // renderContent();
})

// $(".row").on("click", function(event){
//     var target = $(event.target);
//     if (target.is("button")) {
//         event.preventDefault();
//         userInput = $(this).val();
//         console.log(userInput);
//         // console.log("save button clicked");
//     }
// });
