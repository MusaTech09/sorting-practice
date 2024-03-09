const quickSort = arr => {
    if(arr.length <= 1) return arr;

    let pivot = arr[0];
    let left = [];
    let right = [];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    left = quickSort(left);
    right = quickSort(right);

    return [...left, pivot, ...right];
}


const arr = [93, 36, 22, 98, 37, 96, 73, 87, 34, 10];
console.log(quickSort(arr)); //[10, 22, 34, 36, 37, 73, 87, 93, 96, 98]
