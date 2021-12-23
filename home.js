const http = require("http");
const fs = require("fs");
const requests = require("requests");


const homefile = fs.readFileSync("index.html","utf-8");

const replaceVal = (tempVal, orgVal)=>{
    let temprature = tempVal.replace("{%tempval%}",(orgVal.main.temp -274.15).toPrecision(4));
    temprature = temprature.replace("{%tempmin%}",(orgVal.main.temp_min - 274.15).toPrecision(4));
    temprature = temprature.replace("{%tempmax%}",(orgVal.main.temp_max -274.15).toPrecision(4));
    temprature = temprature.replace("{%location%}",orgVal.name);
    temprature = temprature.replace("{%country%}",orgVal.sys.country);
    temprature = temprature.replace("{%tempstatus%}",orgVal.weather[0].main);
    return temprature;
};

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
    requests("https://api.openweathermap.org/data/2.5/weather?q=london&appid=099b6bb74a94451cb945cbd9969b6d1c",)
    .on("data", (chunk) =>{
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        // var kelvin =  ((arrData[0].main.temp)-274.15).toPrecision(4);
        // console.log(kelvin);
        const realTimeData = arrData.map((val)=> replaceVal(homefile, val))
        .join("");
        
        res.write(realTimeData);
        console.log(arrData);
        //  console.log(realTimeData)
    })
    .on("end", (err) =>{
    if (err) return console.log("connection closed due to errors", err);
     res.end();
    });
    }
    // res.end();
});

server.listen(8000,"127.0.0.1");