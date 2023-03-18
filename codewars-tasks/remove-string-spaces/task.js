function noSpace(x){
let str='';
 for(let i =0;i<x.length;i++){
    if(x[i]!=' '){
        str+=x[i];
    }
 }
 return str;
}

let str ='hello world';  

console.log(noSpace(str));
// Salkyn has 3 family members
