/*
task1-inputs: 
let nums = [2,7,11,15]
let target = 9;
*/

/*
task2-inputs: 
let nums = [3,2,4]
let target = 9;
*/

//task3-inputs:
let nums = [3,3]
let target = 6;

function returnIndex(nums,target){
    //Create a empty array for double nums to send 
    let result = [];
    
    //nested for loop target result for first num index and second num index 
    for (let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] == target){
                result.push([i,j]); //Find a double nums index and push the result array
            }else{
                console.log(`Target,Nums don't match and return empty array`)
            } 
        }
    }
    return result; 
}

console.log(returnIndex(nums,target));