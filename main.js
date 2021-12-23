
const curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");

const tempSataus = "{%tempstatus%}";

if(tempSataus == "Sunny"){
    weathercon.innerHTML = 
    "<i class='fa fa-sun' style='color: rgb(139, 63, 0);'></i>";
}
else if(tempSataus == "Clouds"){
    weathercon.innerHTML = 
    "<i class='fa fa-clouds' style='color: rgb(139, 63, 0);'></i>";
}
else if(tempSataus == "Rainy"){
    weathercon.innerHTML = 
    "<i class='fa fa-rain' style='color: rgb(139, 63, 0);'></i>";
}
else{
    weathercon.innerHTML = 
    "<i class='fa fa-clouds' style='color: rgb(139, 63, 0);'></i>";
}
const getCurrentDay = ()=>{
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let currentTime= new Date();
    var today = (weekday[currentTime.getDay()]);
    return today;
};

getCurrentDay();

const getCurrentTime = () => {
    
    var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    const d = new Date();
    var month = months[d.getMonth()];
    var day = d.getDate();
    // var yeat = d.getFullYear();
    let hours = d.getHours();
    let mins = d.getMinutes();

    let periods = "AM";
    if(hours>11){
        periods = "PM";
        if(hours > 12) hours -= 12;
    }
    if(mins <10){
        mins = "0"+mins;
    }
    // console.log(months[month] + "/" + day);
     return `${month} ${day} | ${hours}:${mins}${periods} `;
};
curDate.innerHTML = getCurrentDay()+ " | " + getCurrentTime();

