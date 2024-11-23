function product(){
    x=Number(document.getElementById("num1").value);
    y=Number(document.getElementById("num2").value);
    product=x*y; 
    document.getElementById("ans").innerHTML="The answer is "+product;
}