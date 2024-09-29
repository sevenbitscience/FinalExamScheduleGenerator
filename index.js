


// init function:
function init(){
 
}

function generate(){
    // takes in CRN from text box,
    var div = document.getElementById("crn")
    var CRN = div.innerHTML;
    // compares in our JSON file
    // var time = fetchJSON();
    const fetchTime = async() => {
        let time = await fetch("https://raw.githubusercontent.com/vincentdinic/FinalExamScheduleGenerator/refs/heads/main/CRNsAndExams.json");
        return time.json();
    };
    // outputs in some way
    let time = fetchTime();
    console.log(time);
    // for next time, unwrap the promise so we can access individual CRN time.
    console.log(time.CRN);
}


