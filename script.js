function compute()
{
    var principal = document.getElementById("principal").value;

    //after obtaining the value of principal, we ask if the value is 0 or less than zero to pop up an alert
    if (principal <= 0) { 
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    //if everything is ok, we obtain the next values
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    p = document.getElementById("principal").value;

    //this mark class=highlight was the only way i found to get the numbers highlighted
    document.getElementById("result").innerHTML="If you deposit"+ `<mark class="highlight"> ${principal}</mark>`+ ",\<br\>at an interest rate of "+`<mark class="highlight"> ${rate}</mark>`+"%\<br\>You will receive an amount of "+`<mark class="highlight"> ${interest}</mark>`+",\<br\>in the year "+`<mark class="highlight"> ${year}</mark>`+"\<br\>";
    

}

var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);

//updateRate is the function we use to show the value of the range input

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

