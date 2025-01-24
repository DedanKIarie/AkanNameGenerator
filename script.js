function Clicked() {
    event.preventDefault(); 
    let DD = parseInt(document.getElementById("DD").value, 10);
    let MM = parseInt(document.getElementById("MM").value, 10); 
    let Year = parseInt(document.getElementById("YY").value, 10); 
    let MaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let FemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua" ,"Ama"];
    let Male = document.getElementById("Male");
    let Female = document.getElementById("Female");
  
    let CC = Math.floor(Year /100);
    let YY = Year%100;


    let day = Math.floor(
        (((CC/4)-2*CC-1)+((5*YY)/4)+((26*(MM+1))/10)+DD)%7
    );

    if (Male.checked) {
        console.log(MaleNames[day]);
    } else 
     if (Female.checked) {
        console.log(FemaleNames[day]);
    }
    
}
