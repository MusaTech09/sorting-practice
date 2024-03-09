/*
1. Set MIN to location 0.
2. Search the minimum element in the list.
3. Swap with value at location MIN.
4. Increment MIN to point to next element.
5. Repeat until list is sorted.
*/
const swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

const selectionSort = arr => {
    let minIdx = 0;

    while(minIdx < arr.length) {
        let min = Math.min(...arr.slice(minIdx)); // finds min value to the left of minIdx
        let idx = arr.indexOf(min, minIdx); //finds index excluding minIdx

        swap(arr, minIdx, idx); //swap values
        minIdx++; //increment minIdx
    }
    return arr;
}

const arr = [93, 36, 22, 98, 37, 96, 73, 87, 34, 10];
console.log(selectionSort(arr)); //[10, 22, 34, 36, 37, 73, 87, 93, 96, 98]
