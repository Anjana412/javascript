//pyramid

// let rows = 5;
// let star="";

// for(let i=0;i<=rows;i++){
//     for(let s=1;s<=5-i;s++){
//         star+=" ";
//     }
//     for(let j=1;j<=i;j++){
//         star+=" *";// spcae here is must
//     }
//     star+="\n";
// }
// console.log(star);

// ----------------------------------------------------

// pyramid anotherway

// let rows = 5;
// let star="";

// for(let i=0;i<=rows;i++){
//     for(let s=0;s<=rows-i;s++){
//         star+=" ";
//     }
//     for(let j=0;j<2*i-1;j++){
//         star+="*";
//     }
//     star+="\n";
// }
// console.log(star);
// -------------------------------------------


// inverted pyramid

// let rows = 5;
// let star="";

// for(let i=rows;i>=0;i--){
//     for(let s=1;s<=5-i;s++){
//         star+=" ";
//     }
//     for(let j=1;j<=i;j++){
//         star+=" *";// spcae here is must
//     }
//     star+="\n";
// }
// console.log(star);

// ------------------------------------------------------


// hollow pyramid

// let rows = 5;
// let star="";

// for(let i=1;i<=rows;i++){
//     for(let s=1;s<=5-i;s++){
//         star+=" ";
//     }
//     for(let j=1;j<=2*i-1;j++){  //2*1-1=1
//         if(j==1||i==rows||j==2*i-1){
//         star+="*";// spcae here is must
//         }
//         else{
//             star+=" ";
//         }
//     }
//     star+="\n";
// }
// console.log(star);

// ----------------------------------------------------
// hollow pyramid inverted 

// let rows = 5;
// let star="";

// for(let i=rows;i>=1;i--){
//     for(let s=1;s<=rows-i;s++){
//         star+=" ";
//     }
//     for(let j=1;j<=2*i-1;j++){
//         if(j==1||i==rows||j==2*i-1){
//         star+="*";// spcae here is must
//         }
//         else{
//             star+=" ";
//         }
//     }
//     star+="\n";
// }
// console.log(star);



