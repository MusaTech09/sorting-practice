/*
1. If the current value is greater than its neighbor to the right
2. Swap those values
3. If you get to the end of the array and no swaps have occurred, return
4. Otherwise, repeat from the beginning
*/
const swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

const bubbleSort = arr => {
    let swapped = true; //helps track swaps

    while(swapped) { //while swapped is true
        swapped = false; //switch swapped to false

        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                swap(arr, i, i+1) //swap values
                swapped = true; //switch swap back for recursion
            }
        }
    }

    if(!swapped) return arr; //if no swaps, return
    else return bubbleSort(arr); //otherwise, repeat
}

const arr = [93, 36, 22, 98, 37, 96, 73, 87, 34, 10];
console.log(bubbleSort(arr)); //[10, 22, 34, 36, 37, 73, 87, 93, 96, 98]
