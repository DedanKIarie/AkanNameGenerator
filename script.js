function showalert(message, time) {
    const alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.textContent = message;

    const alertContainer = document.getElementById('alert-container');
    alertContainer.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, time);
}



function Clicked() {
    event.preventDefault(); 
    let DD = parseInt(document.getElementById("DD").value);
    let MM = parseInt(document.getElementById("MM").value); 
    let Year = parseInt(document.getElementById("YY").value); 
    let MaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let FemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua" ,"Ama"];
    let Male = document.getElementById("Male");
    let Female = document.getElementById("Female");
  
    let CC = Math.floor(Year /100);
    let YY = Math.ceil(Year%100);

    if (!DD || !MM || !Year) {
        showalert("Please fill in all the fields (day, month, year).", 3000);
        return;
    }

    if (!Male.checked && !Female.checked) {
        showalert("Pls select your Gender", 4000);
        return
    }

    if (Male.checked && Female.checked) {
        showalert("LGBTQ is banned from this site", 3000);
        return;
    }

    if (MM < 1 || MM > 12 || DD < 1 || DD > 31) {
        showalert('Invalid date Please enter a valid day and month.', 3000);
        return;
    }

    let day = Math.ceil((((CC/4)-2*CC-1)+(Math.ceil(5*YY/4))+(Math.ceil(26*(MM+1)/10))+DD)%7);
    
    let akanName = "";
    if (Male.checked) {
        akanName = MaleNames[day];
    } else if (Female.checked) {
        akanName = FemaleNames[day];
    }
    
    document.getElementById("showndata").innerHTML = "Your Akan name is " + akanName


    
}
