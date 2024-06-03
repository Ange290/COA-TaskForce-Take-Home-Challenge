function TargetSum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// Example usage:
let arr = [];
for (let i = 1; i <= 100000; i++) {
    arr.push(i);
}
const target = 900000000;
console.log(TargetSum(arr, target));