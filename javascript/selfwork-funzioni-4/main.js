function frase(str){ 
    let nstr = str.replace(/\W/g, "")
    console.log(nstr);
    let reversed = str.split('').reverse().join('').replace(/\W/g, "");
    console.log(reversed);
    if (nstr == reversed) {
       return 'TRUE'
    }else {
     return 'FALSE'
    }
    
}

console.log(frase('i topi non avevano nipoti'));
console.log(frase('tutti mangiano la pizza'));



