/*3rd Highest Number in Array
Having an array of numbers, write an algorithm that will return the 3rd highest
 number in the array. Your algorithm should do only one iteration of the array 
 (ust one for/while loop).*/
 //Create a function with parametres:arr
 // Create 3 variable the firstM, secondM,thirdM adn set them 0
 //Creat a loop for array
// Compare if the arr[i] is greater than first number,if so set the third to second, second to first
// Else if arr[i] is greater than secon number, set the third number to the second and second number to arr[i]
// Else if arr[i] is greater than third number than =  to third number
// Return the third number

let arr =  [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
function thirdHighest(arr){
    let firstM = 0;
    let secondM = 0;
    let thirdM = 0;
    for(let i =0; i<arr.length ; i++){
        if(arr[i]>firstM){
            thirdM = secondM;
            secondM = firstM;
            firstM = arr[i];
        } else if( arr[i] > secondM){
            thirdM  = secondM;
            secondM = arr[i]
        } else if( arr[i]> thirdM)
        thirdM = arr[i];
    
    }
    return thirdM
}

console.log(thirdHighest(arr));


