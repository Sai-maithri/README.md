// Get matrix values
function getMatrixA() {
    return {
        a11: parseFloat(document.getElementById('num_1').value) || 0,
        a12: parseFloat(document.getElementById('num_2').value) || 0,
        a21: parseFloat(document.getElementById('num_3').value) || 0,
        a22: parseFloat(document.getElementById('num_4').value) || 0
    };
}

function getMatrixB() {
    return {
        b11: parseFloat(document.getElementById('num_5').value) || 0,
        b12: parseFloat(document.getElementById('num_6').value) || 0,
        b21: parseFloat(document.getElementById('num_7').value) || 0,
        b22: parseFloat(document.getElementById('num_8').value) || 0
    };
}

function setResults(c11, c12, c21, c22) {
    document.getElementById('result1').value = c11;
    document.getElementById('result2').value = c12;
    document.getElementById('result3').value = c21;
    document.getElementById('result4').value = c22;
}

function add() {
    const A = getMatrixA();
    const B = getMatrixB();
    setResults(
        A.a11 + B.b11,
        A.a12 + B.b12,
        A.a21 + B.b21,
        A.a22 + B.b22
    );
}

function sub() {
    const A = getMatrixA();
    const B = getMatrixB();
    setResults(
        A.a11 - B.b11,
        A.a12 - B.b12,
        A.a21 - B.b21,
        A.a22 - B.b22
    );
}

function mul() {
    const A = getMatrixA();
    const B = getMatrixB();
    // Matrix multiplication: C = A × B
    // c11 = a11*b11 + a12*b21
    // c12 = a11*b12 + a12*b22
    // c21 = a21*b11 + a22*b21
    // c22 = a21*b12 + a22*b22
    setResults(
        A.a11 * B.b11 + A.a12 * B.b21,
        A.a11 * B.b12 + A.a12 * B.b22,
        A.a21 * B.b11 + A.a22 * B.b21,
        A.a21 * B.b12 + A.a22 * B.b22
    );
}

function calculate() {
    const opr = document.getElementById('operation').value;
    if (opr === '+') {
        add();
    } else if (opr === '-') {
        sub();
    } else if (opr === '*') {
        mul();
    }
    // Also update the custom result fields
    const A = getMatrixA();
    const B = getMatrixB();
    let c11, c12, c21, c22;
    if (opr === '+') {
        c11 = A.a11 + B.b11; c12 = A.a12 + B.b12;
        c21 = A.a21 + B.b21; c22 = A.a22 + B.b22;
    } else if (opr === '-') {
        c11 = A.a11 - B.b11; c12 = A.a12 - B.b12;
        c21 = A.a21 - B.b21; c22 = A.a22 - B.b22;
    } else {
        c11 = A.a11 * B.b11 + A.a12 * B.b21;
        c12 = A.a11 * B.b12 + A.a12 * B.b22;
        c21 = A.a21 * B.b11 + A.a22 * B.b21;
        c22 = A.a21 * B.b12 + A.a22 * B.b22;
    }
    document.getElementById('result_c11').value = c11;
    document.getElementById('result_c12').value = c12;
    document.getElementById('result_c21').value = c21;
    document.getElementById('result_c22').value = c22;
}
