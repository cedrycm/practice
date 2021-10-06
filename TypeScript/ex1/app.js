//Function Return Types 
function add(n1, n2) {
    return n1 + n2;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
function printResult(num) {
    console.log('Result: ' + num);
}
function printResultUndef(num) {
    console.log('Result: ' + num);
    return;
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) { console.log(result); });
