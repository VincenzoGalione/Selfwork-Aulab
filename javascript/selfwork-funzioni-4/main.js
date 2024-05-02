function frase(str){ 
    let nstr = str.replace(/\W/g, "").toLowerCase();
    console.log(nstr);
    let reversed = nstr.split('').reverse().join('');
    console.log(reversed);
    if (nstr == reversed) {
       return 'TRUE'
    }else {
     return 'FALSE'
    }
    
}

console.log(frase('I Topi non Avevano nipoti'));
console.log(frase('tutti mangiano la pizza'));



