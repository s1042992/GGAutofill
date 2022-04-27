javascript: 
function agreefunc() {
    document.getElementById("66405067_542650090_label").click();
}

function employeeID() {
    document.getElementById("66405064").setAttribute('value', 'XXXXXX');
}

function temperature() {
    document.getElementById("66405069_542650092").click();
    document.getElementById("66405065").setAttribute('value', (Math.random() * (36.8 - 35.8) + 35.8).toFixed(1));
}

function symptoms() {
    document.getElementById("66405075_542650132").click();
    document.getElementById("66405075_542650132").checked = true;
}

function rapidtest() {
    document.getElementById("66405078_542650167").click();
}

function footprint() {
    document.getElementById("66405074_542650161").click();
}

function injection() {
    document.getElementById("66405076_542650157").click();
}

function plunge() {
    document.getElementById("66405066_542650082").click();
}
symptoms();
agreefunc();
employeeID();
temperature();
rapidtest();
footprint();
injection();
plunge();
document.forms['surveyForm'].submit();
