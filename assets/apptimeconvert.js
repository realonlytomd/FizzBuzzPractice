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
    var AMPM = 0;
    var firstSplit = [];
    var timeArray = [];
    var militaryTime = "";
    // examples:
   // $("#add-train").on("click", function() {
    //$("#startButton").click(function(){
    
    // adding a button click to make use of this app easier
    $("#get-militaryTime").on("click", function() {
        event.preventDefault();
        //first, split off the space and the am or pm, and set AMPM integer.
        //the original string, time, is not changed
        var firstSplit = time.split(" ");
        
        //the 2nd index is am or pm
        if (firstSplit[1] === "pm") {
            AMPM = 12;
        }
        console.log("AMPM = " + AMPM);
        // then save just the first index as justTime
        var justTime = firstSplit[0];

        //  split the time string along the colon into array of strings

        timeArray = justTime.split(":");

        console.log("the split up time = " + timeArray);
        if (parseInt(timeArray[0]) === 12) {
            AMPM = 0;
        }

        timeArray[0] = parseInt(timeArray[0]) + AMPM;
        console.log("after checking for pm and adding 12, timeArray = " + timeArray);
        // join the strings back together and
        // slice off the 3rd index
    
        var premilitaryTime = timeArray.join(":");
        console.log("premilitaryTime = " + premilitaryTime);
        var militaryTime = premilitaryTime.slice(0,8);
        console.log("Military time is: " + militaryTime);
        $("#milTime").html(militaryTime);
    });

    

});