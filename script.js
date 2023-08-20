let currentText = "";

function appendToDisplay(value) {
    currentText += value;
    document.getElementById("result").value = currentText;
}

function clearDisplay() {
    currentText = "";
    document.getElementById("result").value = "";
}

function calculate() {
    try {
        let result = eval(currentText);
        document.getElementById("result").value = result;
        currentText = result.toString();
    } catch (error) {
        document.getElementById("result").value = "Erro";
        currentText = "";
    }
}