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

var courseCount = 1;

function generate() {
	for (var i = 0; i < courseCount; i++) {
		console.log("Finding course " + i);
		// takes in CRN from text box,
		let CRN = document.getElementById("crn"+i).value;
		console.log("Finding for CRN");
		console.log(CRN);
		console.log(CRNsAndExams[CRN]);
		display(CRNsAndExams[CRN], i);
	}
}

function display(examDateTime, courseNumber) {
	let textElement = document.getElementById("examTime"+courseNumber);
	textElement.textContent = examDateTime;
}
