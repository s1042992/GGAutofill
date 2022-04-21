var result = [];
var input_list = document.getElementsByTagName('input');

function agreefunc() {
    var agree_radioElements = document.getElementById("62391608_516129376_label");
    agree_radioElements.click();
    agree_radioElements.setAttribute('class', 'answer-label radio-button-label no-touch touch-sensitive clearfix checked');
    input_list[0].setAttribute('aria-checked', 'true');
}

function employeeID() {

    input_list[1].setAttribute('value', 'XXXXXX');
}

function temperature() {
    var temperature_radioElements = document.getElementById("62391610_516129378_label");
    temperature_radioElements.click();
    temperature_radioElements.setAttribute('class', 'answer-label radio-button-label no-touch touch-sensitive clearfix checked');
    input_list[2].setAttribute('aria-checked', 'true');
    input_list[5].setAttribute('value', (Math.random() * (36.8 - 35.8) + 35.8).toFixed(1));
}

function symptoms() {
    var symptoms_checkboxElements = document.querySelector('label[for="62391616_516129418"');
	input_list[6].click();
	input_list[6].checked = true;
    symptoms_checkboxElements.setAttribute('class', 'answer-label checkbox-button-label no-touch touch-sensitive clearfix focus checked');	
	
}

function rapidtest() {
    var rapid_radioElements = document.getElementById("62391993_525542511_label");
    rapid_radioElements.click();
    rapid_radioElements.setAttribute('class', 'answer-label radio-button-label no-touch touch-sensitive clearfix checked');
    input_list[17].setAttribute('aria-checked', 'true');
}

function footprint() {
    var footprint_radioElements = document.getElementById("62391615_516129447_label");
    footprint_radioElements.click();
    footprint_radioElements.setAttribute('class', 'answer-label radio-button-label no-touch touch-sensitive clearfix checked');
    input_list[20].setAttribute('aria-checked', 'true');
}

function injection() {
    var injection_radioElements = document.getElementById("62391617_516129442_label");
    injection_radioElements.click();
    injection_radioElements.setAttribute('class', 'answer-label radio-button-label no-touch touch-sensitive clearfix checked');
    input_list[21].setAttribute('aria-checked', 'true');
}

function plunge() {
    var plunge_radioElements = document.getElementById("62391607_516129368_label");
    plunge_radioElements.click();
    plunge_radioElements.setAttribute('class', 'answer-label radio-button-label no-touch touch-sensitive clearfix checked');
    input_list[22].setAttribute('aria-checked', 'true');
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
completion(result);
