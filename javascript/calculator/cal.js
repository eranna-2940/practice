let runningtotal = 0;
let buffer = '0';
let previousoperator = null;
const screen = document.querySelector(".cal-screen");

document.querySelector('.cal-btn').addEventListener('click', function (event) {
    buttonClick(event.target.innerText);
});

function buttonClick(value) {

    if (isNaN(parseInt(value))) {
        handleSymbol(value)
    } else {
        handleNumber(value)
    }
    rerender();
}

function handleNumber(value) {
    if (buffer === '0') {
        buffer = value;
    } else {
        buffer += value;
    }
}
function handleSymbol(value) {
    switch (value) {
        case 'C':
            buffer = '0';
            runningtotal = 0;
            previousoperator = null;
            break;
        case "=":
            if (previousoperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousoperator = null
            buffer = "" + runningtotal;
            runningtotal = 0;
            break;
        case "←":

            if (buffer.length === 1) {
                buffer = "0";

            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        default:
            handleMath(value);
            break;
    }
}
function rerender() {
    screen.innerText = buffer;
}

function handleMath(value) {
    const intbuffer = parseInt(buffer);
    if (runningtotal === 0) {
        runningtotal = intbuffer;
    } else {
        flushOperation(intbuffer);
    }
    previousoperator = value;
    buffer = "0";
}
function flushOperation(intbuffer) {
    if (previousoperator === "+") {
        runningtotal += intbuffer;
    } else if (previousoperator === "-") {
        runningtotal -= intbuffer;
    } else if (previousoperator === "*") {
        runningtotal *= intbuffer;
    } else {
        runningtotal /= intbuffer
    }
}


