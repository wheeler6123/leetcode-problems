// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

// const checkAdjacent = (prev, next) => {
//     return (prev == 0 || prev == undefined) && (next == 0 || next == undefined);
// }

// var canPlaceFlowers = function(flowerbed, n) {
//     let count = 0;
//     let i = 0;
//     let j = 1;
//     if(!flowerbed.length) return false;

//     if(flowerbed.length < 3 && flowerbed.every(index => index == 0)){
//         if(n < 2){
//             return true;
//         } else {
//             return false;
//         }
//     } 

//     while(j <= flowerbed.length && count < n){
//         if(i == 0 && flowerbed[i] == 0){
//             if(flowerbed[j] == 0){
//                 count++;
//                 if(flowerbed[j+1] == 0){
//                     i++;
//                     j++;
//                 } else {
//                     i+=2;
//                     j+=2;
//                 }
//             } else {
//                 i+=2;
//                 j+=2;
//             }
//         }
//         if(flowerbed[j] == 0){
//             if(checkAdjacent(flowerbed[i], flowerbed[j+1])){
//                 count++;
//                 i+=2;
//                 j+=2;
//             } else if (flowerbed[i] == 1){
//                     i++;
//                     j++;
//             } else if (flowerbed[j+1] == 1){
//                     i+=3;
//                     j+=3;
//             }
//         } else {
//             i+=2;
//             j+=2;
//        }    
//     }
//     return count >= n;
// }; 

const canPlaceFlowers = function(flowerbed, n){
    let count = 0;
    for(let i = 0; i < flowerbed.length; i++){
        if(flowerbed[i] == 0){
            let emptyLeft = i == 0 || flowerbed[i-1] == 0;
            let emptyRight = i == flowerbed.length - 1 || flowerbed[i+1] == 0;

            if(emptyLeft && emptyRight){
                flowerbed[i] = 1;
                count++;
                if(count >= n){
                    return true;
                }
            }
        }
    }
    return count >= n;
}