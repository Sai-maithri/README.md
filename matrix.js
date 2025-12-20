function add()
{
    let a11;
    let b11;
    
    a11 = parseFloat(document.getElementById('num_1').value);
    b11 = parseFloat(document.getElementById('num_5').value);
    document.getElementById('c11').value = a11+b11;
    
    let a12;
    let b12;

    a21 = parseFloat(document.getElementById('num_2').value);
    b21 = parseFloat(document.getElementById('num_6').value);
    document.getElementById('c12').value = a12+b12;

    let a21;
    let b21;

    b11 = parseFloat(document.getElementById('num_3').value);
    b12 = parseFloat(document.getElementById('num_7').value);
    document.getElementById('c21').value = a21+b21;

    let a22;
    let b22;
    b21 = parseFloat(document.getElementById('num_4').value);
    b22 = parseFloat(document.getElementById('num_8').value);
    document.getElementById('c22').value = a22+b22;
}

function sub()
{
    let a11;
    let b11;
    
    a11 = parseFloat(document.getElementById('num_1').value);
    b11 = parseFloat(document.getElementById('num_5').value);
    document.getElementById('c11').value = a11-b11;
    
    let a12;
    let b12;

    a21 = parseFloat(document.getElementById('num_2').value);
    b21 = parseFloat(document.getElementById('num_6').value);
    document.getElementById('c12').value = a12-b12;

    let a21;
    let b21;

    b11 = parseFloat(document.getElementById('num_3').value);
    b12 = parseFloat(document.getElementById('num_7').value);
    document.getElementById('c21').value = a21-b21;

    let a22;
    let b22;

    b21 = parseFloat(document.getElementById('num_4').value);
    b22 = parseFloat(document.getElementById('num_8').value);
    document.getElementById('c22').value = a22-b22;
}

function mul()
{
    let a11;
    let b11;
    let a12;
    let b12;
    let a21;
    let b21;
    let a22;
    let b22;
   
    a11 = parseFloat(document.getElementById('num_1').value);
    b11 = parseFloat(document.getElementById('num_5').value);
   
    a12 = parseFloat(document.getElementById('num_2').value);
    b12 = parseFloat(document.getElementById('num_6').value);
    
    a21 = parseFloat(document.getElementById('num_3').value);
    b21 = parseFloat(document.getElementById('num_7').value);
    
    a22 = parseFloat(document.getElementById('num_4').value);
    b22 = parseFloat(document.getElementById('num_8').value);

    document.getElementById('c11').value = a11*b11+a12*b21;
    document.getElementById('c12').value = a11*b12+a12*b22;
    document.getElementById('c21').value = a21*b11+a22*b21;
    document.getElementById('c22').value = a21*b11+a22*b22;
}

function calculate()
{
    let opr = document.getElementById('operation').value;
    if (opr === '+')
        add();
    else if (opr === '-')
        sub();
    else if (opr === '*')
        mul();
}
