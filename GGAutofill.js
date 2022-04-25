javascript:
function agreefunc() {
    document.getElementById("62391608_516129376_label").click();
}
function employeeID() {
    document.getElementById("62391605").setAttribute('value', 'XXXXXX');
}
function temperature() {
    document.getElementById("62391610_516129378_label").click();
    document.getElementById("62391606").setAttribute('value', (Math.random() * (36.8 - 35.8) + 35.8).toFixed(1));
}
function symptoms() {
    document.getElementById("62391616_516129418").click();
}
function rapidtest() {
    document.getElementById("62391993_525542511_label").click();
}
function footprint() {
    document.getElementById("62391615_516129447_label").click();
}
function injection() {
    document.getElementById("62391617_516129442_label").click();
}
function plunge() {
    document.getElementById("62391607_516129368_label").click();
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
