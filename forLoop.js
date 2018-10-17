// var colors = ['red','black','green','yellow','orange','pink'];
// for(var i = 0; i < colors.length; i++){
//   console.log(colors[i]);
// }

//simple for loop with number;

// var i;
// var text = " ";
// var textOne = "";
// for(i=1;i<= 20;i++){
//      if(i % 2 == 0){
//          text += 'Even Number : '+ i + '\n';
//      }else{
//          textOne += 'Odd Number :'+ i + '\n';
//      }
     
// }
// console.log(text);
// console.log('Odd Number');
// console.log(textOne);

//for loop with array;
// var colors = ['red','black','yellow','green','orange','darkblue'];
// var i;
// var name = "";
// for(i=0; i < colors.length; i++){
//     name += i+' number index color is : '+ colors[i]+'\n';
// }
// console.log(name);


// var names = ['rakib','limon','hasan','jahid','jamal','kabir'];
// var size = names.length;
// var text = "";
// var i = 0;
// for(;i<size;){
//     text += i+' Index name is '+names[i]+'\n';
//     i++;
// }
// console.log(text);

// var planets = ['mers','jupiter','earth','vanus','saturn'];
// var i = 0; 
// var size = planets.length;
// for(;i <size;){
//     console.log(planets[i]);
//     i++;
// }

//Another example:
var person = {
    fname : "Rakibul",
    lname : 'Alam',
    age   : 21,
    dept  : "CSE",
   address: "Khustia"
};
var text = "";
var x;
for(x in person){
    text += person[x]+' ';
}
   
console.log(text);
