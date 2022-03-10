const numbers = [100, 70, 10, 20, 50];

let text = "";
numbers.forEach(myFunction);
document.getElementById("js-arrayiteration").innerHTML = text;

function myFunction( value)
{
    text += value + "<br>";
}