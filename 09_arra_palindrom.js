a=['amma','vetri','malayalam','tamil']
function isPalindrom(str){

    return str===str.split('').reverse().join('');

}
fin =a.filter(e=> isPalindrom(e));
console.log(fin)