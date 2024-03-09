//mergeSort

/*
1. Check if the input is length 1 or less.
2. If so, it's already sorted: return.
3. Divide the array in half.
4. Recursively sort the left half.
5. Recursively sort the right half.
6. Merge the halves together and return.
*/

//merge helper function

/*
1. Create an empty return array.
2. Point to the first value of each array.
3. While there are still values in each array:
4. Compare the first values of each array.
5. Add the smaller value to the return array.
6. Move the pointer to the next value in that array.
7. Return the return array.
*/
const mergeSort = arr => {
    if(arr.length <= 1) return arr;

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

const merge = (arrA, arrB) => {
    let res = [];
    let idxA = 0;
    let idxB = 0;

    while(idxA < arrA.length || idxB < arrB.length) {
        if(arrA[idxA] < arrB[idxB] || !arrB[idxB]) {
            res.push(arrA[idxA]);
            idxA++;
        } else {
            res.push(arrB[idxB]);
            idxB++;
        }
    }

    return res;
}


const arr = [93, 36, 22, 98, 37, 96, 73, 87, 34, 10];
console.log(mergeSort(arr)); //[10, 22, 34, 36, 37, 73, 87, 93, 96, 98]
