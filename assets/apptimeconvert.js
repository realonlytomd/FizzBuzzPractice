// an exercise to convert normal time (00:00:00:PM) to military time (00:00:00)
$(document).ready(function() {
    // set up a variable, using moment to get the current time. The Moment library
    // gives military time, of course, but the exercise is to convert in JS.
    
    var timeRightNow = moment();
    console.log("Current time in machine: " + timeRightNow);

    //get current time when button is clicked, and write to DOM
    var time = moment(timeRightNow).format("h:mm:ss a");
    console.log("Current time: " + time);
    $("#timeNow").html(time);

    var militaryTime = "";
   // $("#add-train").on("click", function() {
    //$("#startButton").click(function(){
    
    // adding a button click to make use of this app easier
    $("#get-militaryTime").click (function() {
    // first split the time string along the colon into array of strings
        event.preventDefault();

        timeArray = time.split(":");

        console.log("the split up time = " + timeArray);
    // test to see if the 3rd index is AM or PM.  If PM, add 12 to the 0 Index
        if (timeArray[3] === "pm") {
            timeArray[0] = parseInt(timeArray[0]) + 12;
        } 
        console.log("after checking for pm and adding 12, timeArray = " + timeArray);
        // join the strings back together and
        // slice off the 3rd index
    
        var premilitaryTime = timeArray.join(":");
        console.log("premilitaryTime = " + premilitaryTime);
        var militaryTime = premilitaryTime.slice(0,8);
        console.log(militaryTime);
    });

    $("#milTime").html(militaryTime);

});