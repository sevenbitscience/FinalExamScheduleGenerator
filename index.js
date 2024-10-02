// URL to fetch to the JSON CRN exam-time pairs
const examsJsonUrl = "https://raw.githubusercontent.com/vincentdinic/FinalExamScheduleGenerator/refs/heads/main/CRNsAndExams.json";
// Initiallize the var to hold the JSON data
//
// Potentially problematic if user tries to search json
// before it is downloaded and parsed, for now we 
// assume that is impossible
var CRNsAndExams = '';
// Fetch the data and store it in the above variable
fetch(examsJsonUrl)
	.then((response) => response.json())
	.then((examTimes) => {
		CRNsAndExams= examTimes
	});

function generate() {
	console.log("Finding course " + 0);
	// takes in CRN from text box,
	let CRN = document.getElementById("crn"+0).value;
	console.log("Finding for CRN");
	console.log(CRN);
	console.log(CRNsAndExams[CRN]);
	display(CRNsAndExams[CRN], 0);
}

function display(examDateTime, courseNumber) {
	let textElement = document.getElementById("examTime"+courseNumber);
	textElement.textContent = examDateTime;
}
