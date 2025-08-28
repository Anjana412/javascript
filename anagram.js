const arr=["f","r","i","e","d"];
const trr=["f", "d","i","r"];
let l1=arr.length;
let l2=trr.length;
let s1= arr.sort()
let s2= trr.sort();
let flag=true;
if (l1 !== l2){
    console.log("not anagram");
}
else{
for(let i=0;i<l1;i++){

if(s1[i] !== s2[i]){
    flag=false;
    break;
}
}
if(flag){
    console.log("anagram");

}
else{
    console.log("not anagram");

}
}

