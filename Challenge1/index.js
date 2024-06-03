function hasSubarrayWithTargetSum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        // Add the current element to the currentSum
        currentSum += arr[end];

        // While currentSum is greater than the target, move the start pointer to the right
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        // Check if the currentSum equals the target
        if (currentSum === target) {
            return true;
        }
    }

    // If we reach here, no subarray was found
    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 14;
console.log(hasSubarrayWithTargetSum(arr, target)); // Output: true
