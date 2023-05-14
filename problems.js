function countZeroes(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let midIndex = Math.floor(rightIndex / 2);

    if (arr[leftIndex] === 0) {
        //console.log(arr.length);
        return arr.length;
    }
    else if (arr[rightIndex] === 1) {
        //console.log(0);
        return 0;
    }

    while (leftIndex <= rightIndex) {
        if (arr[midIndex] === 0) {
            rightIndex = midIndex - 1;
        }
        else if (arr[midIndex] === 1) {
            leftIndex = midIndex + 1;
        }
        midIndex = Math.floor((leftIndex + rightIndex) / 2);
    }

    //console.log(arr.length - rightIndex - 1);
    return (arr.length - rightIndex - 1);
}

countZeroes([1, 1, 1, 1, 0, 0]) // 2
countZeroes([1, 0, 0, 0, 0]) // 4
countZeroes([0, 0, 0]) // 3
countZeroes([1, 1, 1, 1]) // 0





function findBound(arr, targetNum, isLower) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let result = -1;

    while (leftIndex <= rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (arr[midIndex] === targetNum) {
            result = midIndex;
            if (isLower) {
                rightIndex = midIndex - 1;
            } else {
                leftIndex = midIndex + 1;
            }
        } else if (arr[midIndex] < targetNum) {
            leftIndex = midIndex + 1;
        } else {
            rightIndex = midIndex - 1;
        }
    }
    return result;
}

function sortedFrequency(arr, targetNum) {
    const firstOccurrence = findBound(arr, targetNum, true);
    const lastOccurrence = findBound(arr, targetNum, false);

    if (firstOccurrence === -1 || lastOccurrence === -1) {
        return -1;
    }
    return lastOccurrence - firstOccurrence + 1;
}

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1) // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) // -1




function findRotatedIndex(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (arr[midIndex] === target) {
            return midIndex;
        }
        if (arr[leftIndex] <= arr[midIndex]) {
            if (arr[leftIndex] <= target && target < arr[midIndex]) {
                rightIndex = midIndex - 1;
            }
            else {
                leftIndex = midIndex + 1;
            }
        }
        else {
            if (arr[midIndex] < target && target <= arr[rightIndex]) {
                leftIndex = midIndex + 1;
            }
            else {
                rightIndex = midIndex - 1;
            }
        }
    }
    return -1;
}


findRotatedIndex([3, 4, 1, 2], 4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37, 44, 66, 102, 10, 22], 14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1



function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        if (arr[left] <= arr[right]) {
            return left;
        }

        const mid = Math.floor((left + right) / 2);
        const next = mid + 1;
        const prev = mid - 1;

        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        }
        if (arr[mid] <= arr[right]) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
}

findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0




function findFloor(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[left] > target) {
            return -1;
        } else if (arr[mid] === target) {
            return arr[mid];
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return arr[right];
}



findFloor([1, 2, 4, 18, 18, 26, 34], 22) // 18
findFloor([1, 2, 8, 10, 10, 12, 19], 9) // 8
findFloor([1, 2, 8, 10, 10, 12, 19], 20) // 19
findFloor([1, 2, 8, 10, 10, 12, 19], 0) // -1