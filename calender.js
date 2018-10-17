var monthName = 'June';
var days;
var n;
var serial = "";
console.log("\n\n Calender of",monthName," 2018\n"); 
console.log("Sun  Mon  Tue  Wed  Thr  Fri  Sat");
for(var i = 0;i< 4;i++){
    
    for(var j = 1; j <= 7;j++){
         n = 7 * i + j;
         serial += + n + " ";
    }
    console.log(serial);    
}