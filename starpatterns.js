//squre

// let rows=5;
// let star="";

// for(let i=0;i<rows;i++){
//     for(let j=0;j<rows;j++){
//         star += "*";
//     }
//     star += "\n";
// }
// console.log(star);

// ------------------------------------


// hollow squre

// let rows=5;
// let star="";

// for(let i=0;i<=rows;i++){
//     for(let j=0;j<=rows;j++){
//         if(i==0||j==0||i==rows||j==rows){
//         star+="*";
//         }
//         else{
//             star+= " ";
//         }
//     }
//     star += "\n";
// }
// console.log(star);
// -------------------------------------------


// triangle-left

// let rows=5;
// let star="";

// for(let i=0;i<rows;i++){
//     for(let j=0;j<=i;j++){  //i=0 then j=0, j<=i means j=0 then it prints one star. when j become 1 it prints 2 star in the 2nd line and so on.
//         star+="*";
//     }
//     star += "\n";
// }
// console.log(star);
// ---------------------------------------------


//triangle right

// let rows=5;
// let star="";

// for(let i=0;i<rows;i++){
//     for(let s=0;s<rows-i;s++){ //rows-i means in 5th position space printed. next 5-1 =4th  space is printed. and so on.
//         star+=" ";
//     }
//     for(let j=0;j<=i;j++){  
//         star+="*";
//     }
//     star += "\n";
// }
// console.log(star);

// -------------------------------------------------
// triangle left inverted

// let rows=5;
// let star="";

// for(let i=rows;i>=1;i--){   
//     for(let j=1;j<=i;j++){
//         star += "*";
//     }
//     star +="\n";
// }
// console.log(star);

// -------------------------------------

// triangle right inverted

// let rows = 5;
// let star="";

// for(let i=0;i<=rows;i++){
//     for(let s=0;s<i;s++){
//         star+=" ";
//     }
//     for(let j=i;j<=rows;j++){
//         star+="*";
//     }
//     star+="\n";
// }
// console.log(star);

// ---------------------------------------------------

// Right paskel triangle

// let rows=4;
// let star="";
// for(let i=0;i<=rows;i++)
// {
//     for(let j=1;j<=i;j++)
//     {
//         star+=" *";
//     }
//     star+="\n";
// }
// for(let i=rows-1;i>=1;i--)
// {
//     for(let j=1;j<=i;j++)
//     {
//         star+=" *";
//     }
//     star+="\n";
// }
// console.log(star);
