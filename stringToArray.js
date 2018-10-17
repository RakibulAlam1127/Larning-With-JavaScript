var str = 'Hello i am Rakibul';
var temp = 0;
var j;
var longword;
var res = str.split(" ");
for(var i = 0;i < res.length;i++){
    if(temp < res[i].length){
        temp = res[i].length;
       
       longword = res[i];
     
       temp = 0;
    }
    
}
console.log(longword); 

