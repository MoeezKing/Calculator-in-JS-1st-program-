console.log("go start");

function sub()
{
    var num1=parseInt(document.getElementById("input-1").value);
    var num2=parseFloat(document.getElementById("input-2").value);
    var ans=num1-num2;
    var display=document.getElementById("answer");
    display.innerHTML=ans;
}
function sum()
{
    var num1=parseInt(document.getElementById("input-1").value);
    var num2=parseFloat(document.getElementById("input-2").value);
    var ans=num1+num2;
    var display=document.getElementById("answer");
    display.innerHTML=ans;
}
function mul()
{
    var num1=parseInt(document.getElementById("input-1").value);
    var num2=parseFloat(document.getElementById("input-2").value);
    console.log(num1);
    var ans=num1*num2;
    var display=document.getElementById("answer");
    display.innerHTML=ans;
}
function div()
{
    var num1=parseInt(document.getElementById("input-1").value);
    var num2=parseFloat(document.getElementById("input-2").value);
    console.log(num1);
    var ans=num1/num2;
    var display=document.getElementById("answer");
    display.innerHTML=ans;
}