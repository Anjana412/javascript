let y=1900;
if(y%4==0 && y%100!==0 || y%400==0 ){
    console.log(y+" is Leap year");
}
else{
    console.log(y+"is not a Leap year");
    
}