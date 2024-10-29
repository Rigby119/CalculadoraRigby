function numWrite(num) {
    const disp = document.querySelector('.display');
    let val = disp.value;

    if (val === "0" || val === "Error" || val.slice(0, 1) === "R") {
        disp.value = num;
    } else {
        disp.value = val + num;
    }
}

function operatorWrite(op) {
    const disp = document.querySelector('.display');
    let val = disp.value;

    if (val === "0" || val === "Error") {
        disp.value = "0";
    } else if (val.slice(0, 1) === "R") {
        disp.value = disp.value.slice(3) + op;
    } else{
        let last = disp.value.slice(-1);
        if (last === "+" || last === "-" || last === "*" || last === "/") {
            disp.value = disp.value.slice(0, -1) + op;
        } else {
            disp.value = val + op;
        }
    }
}

function cls() {
    const disp = document.querySelector('.display');
    disp.value = "0";
}

function del() {
    const disp = document.querySelector('.display');

    if (disp.value === "0" || disp.value.slice(0, 1) === "R") {
        disp.value = "0";
    } else {
        disp.value = disp.value.slice(0, -1);
    }
}

function dot() {
    const disp = document.querySelector('.display');
    let val = disp.value;

    const lastOp = Math.max(
        val.lastIndexOf("+"),
        val.lastIndexOf("-"),
        val.lastIndexOf("*"),
        val.lastIndexOf("/")
    );

    const num = val.substring(lastOp + 1);

    if (!num.includes(".")) {
        disp.value = val + ".";
    }
}

function result() {
    const disp = document.querySelector('.display');
    let val = disp.value;
    let last = val.slice(-1);

    if (last === "+" || last === "-" || last === "*" || last === "/" || last === ".") {
        val = val.slice(0, -1);
    }

    try {
        let res = new Function(`return ${val}`)();
        disp.value = "R: " + res;
    } catch (error) {
        disp.value = "Error";
    }
}