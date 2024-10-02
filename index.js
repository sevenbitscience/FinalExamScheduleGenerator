const exams = "https://raw.githubusercontent.com/vincentdinic/FinalExamScheduleGenerator/refs/heads/main/CRNsAndExams.json";

let courseCount = 0;

function generate() {
    // takes in CRN from text box,
    var CRN = document.getElementById("crn").value;
	console.log("Finding for CRN");
	console.log(CRN);

	fetch(exams)
		.then((response) => response.json())
		.then((examTimes) => {
			console.log(examTimes[CRN])
            display(examTimes[CRN], 0)
		});
}

function display(examDateTime, courseNumber) {
	textElement = document.getElementById("examTime"+courseNumber);
	textElement.textContent = examDateTime;
}