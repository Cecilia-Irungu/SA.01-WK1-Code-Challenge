const speedLimit = 70;
const kmPerDemerit = 5;

let speed = parseInt(prompt("Enter Speed Of Driver:"));

    if (isNaN(speed)) {
        alert("Invalid Input! Not A Number!");

    } else {

        let message;
        let demeritPoints = 0;

        if (speed <= speedLimit) {
            message = "OK";
            alert(message);

        } else {
            demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);

            if (demeritPoints > 12) {
                message = "License suspended";
                alert(message);

            } else {
                message = "The Demerit points are: " + demeritPoints;
            }
        }
        alert("Your Demerit Points are:" + demeritPoints);
    }