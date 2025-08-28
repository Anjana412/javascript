const arr = ["m","a","l","a","y","a","l","a","m"];
// const arr = ["m","a","l","a","y","a","l","a"];

let l = arr.length;
let brr = [...arr];
let flag=true;
brr.reverse();
for (let i=0; i<l; i++) {
    if(arr[i] !== brr[i]){
        flag = false;
        break;
    }
}
if(flag){
    console.log("palindrome");
    
}
else{
    console.log("not pallindrome");
    
}
   
