// an exercise to convert normal time (00:00:00:PM) to military time (00:00:00)
$(document).ready(function() {
    // set up a variable, time, with a random time of day, as a string
    var time = "05:02:10:PM";

    console.log("time = " + time);
    // first split the time string along the colon into array of strings
    timeArray = time.split(":");

    console.log("the split up time = " + timeArray);
    // test to see if the 3rd index is AM or PM.  If PM, add 12 to the 0 Index
    if (timeArray[3] === "PM") {
        timeArray[0] = parseInt(timeArray[0]) + 12;
       // timeArray[0] = timeArray[0].toString();
    } 
    console.log("after checking for AM or PM, timeArray = " + timeArray);
    // join the strings back together and
    // slice off the 3rd index
    

    var premilitaryTime = timeArray.join(":");
    console.log("premilitaryTime = " + premilitaryTime);
    var militaryTime = premilitaryTime.slice(0,8);
    console.log(militaryTime);


});