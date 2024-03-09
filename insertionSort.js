/*
1. If it is the first element, it is already sorted; return 1.
2. Pick next element.
3. Compare with all elements in the sorted sub-list.
4. Shift all the elements in the sorted sub-list that is greater than the value
  to be sorted.
5. Insert the value.
6. Repeat until list is sorted.
*/
const swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

const insertionSort = arr => {
    for(let i = 1; i < arr.length; i++) {
        let curr = arr[i];

        for(let j = i - 1; j >= 0; j--) {
            if(arr[j] > curr) swap(arr, j, j + 1)
        }
    }
    return arr;
}

const arr = [93, 36, 22, 98, 37, 96, 73, 87, 34, 10];
console.log(insertionSort(arr)); //[10, 22, 34, 36, 37, 73, 87, 93, 96, 98]
