let distanceOne;
function distanceFromHqInBlocks(distanceOne) {
    if (distanceOne >= 42) {
        return distanceOne - 42;
    } else {
            return 42 - distanceOne;
        }
}

function distanceFromHqInFeet(distanceOne) {
    return distanceFromHqInBlocks(distanceOne) * 264;
}

function distanceTravelledInFeet(num1, num2) {
    if (num1 > num2) {
        return (num1 - num2) * 264;
    } else {
        return (num2 - num1) * 264;
    }
}

function calculatesFarePrice (num1, num2) { 
    if (distanceTravelledInFeet(num1, num2) <= 400) {
            return 0;
    } else if (distanceTravelledInFeet(num1, num2) > 400 && distanceTravelledInFeet(num1, num2) < 2000) {
        return (distanceTravelledInFeet(num1, num2) - 400) * 0.02;
    } else if (distanceTravelledInFeet(num1, num2) >= 2000 && distanceTravelledInFeet(num1, num2) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet(num1, num2) > 2500) {
        return "cannot travel that far";
    }
}