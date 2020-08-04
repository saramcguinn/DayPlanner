//Code will run only after document is ready
$(document).ready(function () {

    /******************************************************************************************************
    DEFINE FUNCTIONS
    ******************************************************************************************************/
    
    function checkTime() {
    // Compares current hour with hour (id) of textarea & sets textarea class to past, future, or present, which changes color of textarea via css
        var currentHour = moment().hour();
        $(".description").each(function () {
            var hour = parseInt($(this).attr("id"));
            if (currentHour > hour) {
                $(this).addClass("past");
                $(this).attr("disabled", true);
                $(this).removeClass("future");
                $(this).removeClass("present");
                var saveButton = $(this).siblings(".saveBtn");
                saveButton.addClass("disabled");
                saveButton.attr("disabled", true);
                saveButton.children("i").removeClass("fa-save");
                saveButton.children("i").addClass("fa-calendar-check");
            } else if (currentHour < hour) {
                $(this).addClass("future");
                $(this).attr("disabled", false);
                $(this).removeClass("past");
                $(this).removeClass("present");
                var saveButton = $(this).siblings(".saveBtn");
                saveButton.removeClass("disabled");
                saveButton.attr("disabled", false);
                saveButton.children("i").removeClass("fa-calendar-check");
                saveButton.children("i").addClass("fa-save");
            } else {
                $(this).addClass("present");
                $(this).attr("disabled", false);
                $(this).removeClass("future");
                $(this).removeClass("past");
                var saveButton = $(this).siblings(".saveBtn");
                saveButton.removeClass("disabled");
                saveButton.attr("disabled", false);
                saveButton.children("i").removeClass("fa-calendar-check");
                saveButton.children("i").addClass("fa-save");
            }
        })
    }

    function renderTextfromLocalStorage() {
    // Renders text to the textareas of page, allows content to persist even after page refresh
        $("textarea").each(function () {
            var info = $(this).attr("id");
            var retrievedContent = localStorage.getItem(info);
            $(this).text(retrievedContent);
        })
    }

    /******************************************************************************************************
    INITIALIZE & UPDATE PAGE
    ******************************************************************************************************/

    // Show current date in jumbotron header
    $("#currentDay").text(moment().format("LL"));

    // Render localStorage input to textareas on page
    renderTextfromLocalStorage();

    // Execute checkTime when page loads
    checkTime();

    // Execute checkTime every minute so that the textarea color will change as time passes, even if the user does not refresh page
    var myVar = setInterval(checkTime, 60000);

    /******************************************************************************************************
    ADD EVENT LISTENER TO SAVE BUTTONS
    ******************************************************************************************************/

    // When saveButton is clicked, textarea input saves to local storage
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        var userInput = $(this).siblings("textarea").val();
        key = $(this).siblings("textarea").attr("id");
        localStorage.setItem(key, userInput);
        renderTextfromLocalStorage();
    });

    /******************************************************************************************************
    MAKE STICKY HEADER
    ******************************************************************************************************/
    // Sticky header code sources: https://www.w3schools.com/howto/howto_js_sticky_header.asp & https://stackoverflow.com/questions/19158559/how-to-fix-a-header-on-scroll
    
    // Execute makeSticky function when user scrolls
    $(window).scroll(makeSticky);

    // Get the offset position of the navbar
    var offset = $("header").offset().top;

    // Add .sticky class to the header when user reaches its scroll position & remove .sticky when user leaves the scroll position.
    function makeSticky() {
        if ($(window).scrollTop() > offset) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    }

})