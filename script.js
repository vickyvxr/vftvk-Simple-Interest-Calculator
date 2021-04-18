function compute()
{
    // get the amount value
    var principal = document.getElementById("principal").value;
    var principalAmount = parseFloat(principal);
    // validation, not zero or negative number
    if (principalAmount >0){
        // get the rate value
        var rate = document.getElementById("rate").value;
        // get the years number
        var years = document.getElementById("years").value;
        // calculate interest
        var interest = principal * years * rate /100;
        // calculate end year
        var year = new Date().getFullYear()+parseInt(years);
        //calculate the amount
        var amount = principalAmount + interest;

        // write the result in the span
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,"
            + "\<br\>at an interest rate of <mark>"+rate+"%\<mark><br\>"
            + "You will receive an amount of <mark>"+amount+"</mark>,\<br\>"
            +" in the year <mark>"+year+"</mark>\<br\>"

    }else{
        // warn the user bad input
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}
/*
    a function that reads the value of the range slider 
    and displays it the <span>adjacent to the slider.
*/
function updateRate(){
     var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}