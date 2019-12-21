var currentDayEl = $("#currentDay");
currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
var update = function () {
    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(update, 1000);
var currentDayEl = $("#currentDay");
var saveBtnEl = $(".saveBtn");
var textBoxEl = $(".time-block");
currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
var update = function () {
    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    // var currHour = moment().hour();
    var currHour = 24;
    textBoxEl.each(function (index, element) {
        element = $(element);
        if (currHour > element.attr("data-time")) {
            element.addClass("past").removeClass("future");
        } else if (currHour == element.attr("data-time")) {
            element.addClass("present").removeClass("future");
        }
    });
}
setInterval(update, 1000);
var textInput = $(".time-block");
var saveBtn = $(".saveBtn");
// var eventNameSpan = document.querySelector(".text-area");
saveBtn.on("click", function (event) {
    event.preventDefault();
    var btnData = $(this).attr("data-time");
    //console log click on THIS specific button in this class
    console.log(btnData);
    //descriptionTarget locates the specific description element that user filled in text with.
    var descriptionTarget = $(".description");
    console.log(descriptionTarget);
    //we log to ensure we're grabbing the user input.
    console.log(descriptionTarget.val());
    // // create user object from submission
    // var event = {
    //     textInput: textInput.value.trim(),
    // };
    // console.log(event);
    // // validate the fields
    // if (textInput === "") {
    //     displayMessage("error", "Event description cannot be blank");
    // } else {
    //     displayMessage("success", "Event Saved");
    // set new submission
    // localStorage.setItem("event", JSON.stringify(event));
    //this is supposed to set the text area text to that specific textArea and store it.
    //We pick the "id" attribute from the element, descriptionTarget. This id is the key, and the key value is descriptionTarget.val().
    localStorage.setItem(descriptionTarget.attr("id"), JSON.stringify(descriptionTarget.val()));
});
$("#9AM-input").text(localStorage.getItem("9AM-input"));
$("#10AM-input").text(localStorage.getItem("10AM-input"));
$("#11AM-input").text(localStorage.getItem("11AM-input"));
$("#12PM-input").text(localStorage.getItem("12PM-input"));
$("#13PM-input").text(localStorage.getItem("13PM-input"));
$("#14PM-input").text(localStorage.getItem("14PM-input"));
$("#15PM-input").text(localStorage.getItem("15PM-input"));
$("#16PM-input").text(localStorage.getItem("16PM-input"));
$("#17PM-input").text(localStorage.getItem("17PM-input"));
    // // get most recent submission
    // var savedEvent = JSON.parse(localStorage.getItem("event"));
    // textInputEl.textContent = savedEvent.textInput;
// }
// });<!DOCTYPE html>


$("button").on("click", function (event) {
    // alert("Button Clicked!");
    event.preventDefault();
    var input = $("input").val();
    console.log(input);
    localStorage.setItem("input", JSON.stringify(input));
});