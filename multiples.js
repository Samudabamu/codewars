
// function solution(number) {

//     let reducer = (accumulator, currentValue) => accumulator + currentValue;
//     let multiples = [];

//     for (i = 0; i < number; i++) {

//         let cm3 = 3 * i
//         let cm5 = 5 * i

//         if (cm3 < number) {

//             multiples.push(cm3)
//         }
//         if (cm5 < number) {

//             multiples.push(cm5)
//         }

//     }

//     let noDuplicates = Array.from(new Set(multiples))
//     return noDuplicates.reduce(reducer)
// }

function solution(number){
    sum = 0

    for (let i = 0; i < number; i++) {
        if ( i % 3 == 0 || i % 5 == 0 ) {
            sum += i
        }
    }
    return sum
}
