var arr={"C":"Celsius","F":"Fahrenheit"};
var a="";
var b="";
function handleToggle1()
{
    document.querySelector(".op1").classList.toggle("active");
}
function handleToggle2()
{
    document.querySelector(".op2").classList.toggle("active");
}

function getopt1(c)
{
    a=arr[c];
    document.querySelector(".option1 h3").innerHTML=a;
}
function getopt2(c)
{
    
    b=arr[c];
    document.querySelector(".option2 h3").innerHTML=b;
}

function calc()
{
    if(a==b)
    {
        window.alert("Both parameters cannot be same");
    }
    else if(a==""||b=="")
    {
        window.alert("Please select scale");
    }
    else if(a=="Fahrenheit" && b=="Celsius")
    {
        var inp=document.querySelector(".v1").value;
        console.log(inp);
        var result=(5/9)*(inp-32);
        console.log(result);
        document.querySelector(".v2").innerHTML=result;
    }
    else if(b=="Fahrenheit" && a=="Celsius")
    {
        var inp=document.querySelector(".v1").value;
        console.log(inp);
        var result=(9/5)*inp+32;
        console.log(result);
        document.querySelector(".v2").innerHTML=result;
    }
}