import React from 'react'

const Practice = () => {

  // Find the largest element 
  // const arr = [1552,35,111,54,676,700,3000]
  // var largest = arr[0]
  // for(var i = 0; i < arr.length; i++){
  //   largest = arr[i] > largest ? arr[i] : largest
  // }
  // console.log(largest)


    // reverse an array
    // let originalArray = [1, 2, 3, 4, 5];
    // let reversedArray = []
    // for(let i = originalArray.length - 1; i>=0; i--){
    //     reversedArray.push(originalArray[i])
    // }
    // console.log('reversedArray', reversedArray);

    // // reverse a string
    let originalStr = "Hi i am ayush"
    let splitStr = originalStr.split("")
    let reversedStr = ""
    for(let i = splitStr.length - 1; i >= 0; i--){
        reversedStr += splitStr[i] //
        // reversedStr.push(splitStr[i])

    }
    //ayush am i hi console.log('reversedStr', reversedStr.join(' '));     
    console.log('reversedStr', reversedStr); 

    // find the first repeating element in array
    // let arr = [12,45,32,4,45,12,23]
    // let result = null
    // for(let i=0; i<arr.length; i++){
    //     let match = false;
    //     for(let j=i+1; j<arr.length; j++){
    //         if(arr[i] == arr[j]){
    //             result = arr[i];
    //             match = true
    //             break;
    //         }
    //     }
    //     if(match) {
    //         break;
    //     }
    // }
    // console.log(result)

    // all repeating char in array
    // let arr = [12,45,32,4,45,12,23]
    // let result = [];
    // for(let i=0; i<arr.length; i++){
    //     for(let j=i+1; j<arr.length; j++){
    //         if(arr[i] == arr[j]){
    //             result.push(arr[i])
    //             break;
    //         }
    //     }
    // }
    // console.log('result',result);
    
    let arr = [12,45,32,4,45,12,23]
    const result = arr.filter((value, index) => arr.indexOf(value) !== index)
    console.log('result', result);

    // find the occurence of each element in array
  //   let arr = [
  //     'geeks', 2, 'geeks', 2, 'Javascript', 4,
  //     'Javascript', 5, 'for', 6, 'Javascript', 1,
  //     'for', 5, 7, 8, 'for'
  // ];
  // let counter = {}
    // arr.forEach((val) => {
//   // console.log(val)
//     if (counter[val]) {
//         counter[val] += 1;
//     } else {
//         counter[val] = 1;
//     }
// });

// two sum problem
// const arr = [2, 4, 5, 9, 1, 0, 7, 8];
// const total = 9

// for(let i=0; i<=arr.length; i++){
//   for(let j = i+1; j<=arr.length; j++){
//     if(arr[i] + arr[j] === total){
//       console.log([arr[i],arr[j]])
//     }
//   }
// }

// find missing element in array
// const range = [1, 3, 2, 5];
// const missingElements = [];
// for (let i = 1; i <= 5; i++) {
//     if (!range.includes(i)) {
//         missingElements.push(i);
//     }
// }
// console.log(missingElements);

  return (


    <div>
        This is js practice page
    </div>
  )
}

export default Practice

// himanshu.jain@synechron.com