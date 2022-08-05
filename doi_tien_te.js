function Doi()  {
    let Amount = document.getElementById("Amount").value;
    let From = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;


    if (From == "USD" && To == "VND") {
        Result = "Bằng :" + (Amount * 23000) + "Việt Nam đồng";
    }
    else if (From == "VND"&& To =="USD"){
        Result = "Bằng :"+ (Amount / 23000) + "U ét đê";
    }
    else if (From == "VND") {
        Result = "Bằng :" + Amount + "Việt Nam đồng";
    } else {
        Result = "Bằng :" + Amount + "U ét đê";
    }

    document.getElementById("Result").innerHTML = Result;
}