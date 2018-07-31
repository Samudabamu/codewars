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

