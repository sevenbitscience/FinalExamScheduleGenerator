const exams = "https://raw.githubusercontent.com/vincentdinic/FinalExamScheduleGenerator/refs/heads/main/CRNsAndExams.json";

function generate() {
    // takes in CRN from text box,
    var CRN = document.getElementById("crn").value;
	console.log("Finding for CRN");
	console.log(CRN);

	fetch(exams)
		.then((response) => response.json())
		.then((examTimes) => {
			console.log(examTimes[CRN])
		});
}