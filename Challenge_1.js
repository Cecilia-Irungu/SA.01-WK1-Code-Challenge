let marks = parseInt(prompt("Enter Student Marks:"));

    if(marks < 0 || marks > 100 || isNaN(marks)){
    alert("Invalid Input!Not between 0 and 100");

} else {

let Grade;
    if (marks >= 79 && marks <= 100) {
        Grade = "A";

    } else if (marks >= 60 && marks <79 ){
        Grade = "B";
    
    } else if (marks >= 49 && marks <59 ){
        Grade = "C";

    } else if (marks >= 40 && marks <49 ) {
        Grade = "D";

    } else if (marks >= 0 && marks <40 ){
        Grade = "E";
    }

  alert("The Grade Is:" + Grade);

}
    