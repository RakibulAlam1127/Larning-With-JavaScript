var day;
switch(new Date().getDay()){
    case 0:
    day = 'sunday';
    break;
    case 1:
    day = 'monday';
    break;
    case 2:
    day = 'tuesday';
    break;
    case 3:
    day = 'wednesday';
    break;
    case 4:
    day = 'thursday';
    break;
    case 5:
    day = 'Friday';
    break;
    case 6:
    day = 'Saturday';
    break;  

}

console.log('Today is :',day);