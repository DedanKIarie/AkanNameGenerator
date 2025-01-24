function Clicked() {
    event.preventDefault(); 
    let DD = parseInt(document.getElementById("DD").value);
    let MM = parseInt(document.getElementById("MM").value); 
    let Year = parseInt(document.getElementById("YY").value); 
    let MaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let FemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua" ,"Ama"];
    let Male = document.getElementById("Male");
    let Female = document.getElementById("Female");
  
    let CC = (Year /100);
    let YY = Math.ceil(Year%100);


    let day = Math.ceil((((CC/4)-2*CC-1)+(Math.ceil(5*YY/4))+(Math.ceil(26*(MM+1)/10))+DD)%7);

    if (Male.checked) {
        document.getElementById("showndata").innerHTML = "Your Akan Name is " + (MaleNames[day]);
    } else if (Female.checked) {
        document.getElementById("showndata").innerHTML = "Your Akan Name is " + (FemaleNames[day]);
    }
    
}
