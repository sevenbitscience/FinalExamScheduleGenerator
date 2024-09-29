


// init function:
function init(){
 
}

function generate(){
    // takes in CRN from text box,
    var div = document.getElementById("crn")
    var CRN = div.innerHTML
    // compares in our JSON file
    fetchJSON();
    // outputs in some way
}

function fetchJSON(){
    fetch("C:\Users\drago\CS\_personalCS\FinalExamScheduleGenerator\CRNsAndExams.json")
    .then((res) => {
        if (!res.ok){
            throw new Error("HTTP error! Status: ${res.status}");
        }
        return res.json();
    })
    .then((data) => 
    console.log(data).catch((error) =>
        console.error("Unable to fetch data:", error)));
}