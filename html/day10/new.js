//== -> Equal to(loose) //only the value
//===  Equal to(strict) // value and data type
//!=   not equal to (loose)  //only the value
//!== not equal to  (strict)  // value and data type
//>  greater than
//<   less than
//>= greater than or equal to
//<= less than or eqaul to


//&& -> AND // both must be correct
//|| -> OR  //either one is true
//!  -> NOT //flips the value

console.log(8=="8");
console.log(8==="8");
console.log(7!=8);
console.log(7!=="7");
console.log(9>10);
console.log(9<10);
console.log(10>=10);
console.log(8<=8);

let name="Thanooja";
let age=20;

console.log(name=="Thanooja" && age==20);
console.log(name=="Sethmi" || age==21);
console.log(!name=="Thanooja");
console.log(!name=="Sethmi");
