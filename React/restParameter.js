/* Rest parameter:
 * (No, it's not a sleep function.)
 *
 * The rest parameter in a function 
 * is represented by ....
 * and yes, it is the most extra thing
 * you have ever seen. 
 *
 * Take a look:
 * */
function setNumbers(paramA, paramB, ...args) {
    // paramA, paramB, args
    //     = 1,    2,    [3,4,5,6]
    console.log(paramA, paramB, ...args); 

setNumbers(1, 2, 3, 4, 5, 6);
/* The Output: 1, 2, 3, 4, 5, 6 */
