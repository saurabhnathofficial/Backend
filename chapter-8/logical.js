const logicalTest = () => {
    console.log("i am in logical error");
    let num = 5;
    if(num = 10) console.log(num);
    else console.log("num is not 10");

    let arr = [1, 2, 3, 4, 5];
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        
    }
}

module.exports = logicalTest;