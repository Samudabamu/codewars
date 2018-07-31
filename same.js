//My version, worked by lagged the system out.

array1 = [58, 48, 91, 62];

array2 = [3364, 2304, 8282, 3844];


function comp(array1, array2) {

    // for each index of a1 square that value then iterate over a2 for a match

    for (let i = 0; i < array1.length; i) {
        for (let y = 0; y < array2.length + 1; y++) {
    // once a match is found move a1 over to the next index, if a match isn't found, return false
            
            if (Math.pow(array1[i], 2) === array2[y]) {

                i++
            }
            if ( y === array2.length + 1  ){
                return false
            }
        }
    }
    return true
}

comp(a1, a2);

//solution 

function comp( array1, array2){
    //If either of the arguments supplied are null
    if(array1 == null || array2 == null) return false;
    //assort the two arrys into ascending order
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b)
    //square each index of array 1 then test if each index is equal to array2 index
    return array1.map(v => v * v).every((v, i ) => v == array2[i]);
}
