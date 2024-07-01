const mergeSortArray = (arr, low, high) => {
    if (low >= high) return; // Base case: if the array is of length 1 or invalid
  
    const mid = Math.floor((low + high) / 2);
  
    mergeSortArray(arr, low, mid); // Recursively sort the left half
    mergeSortArray(arr, mid + 1, high); // Recursively sort the right half
  
    merge(arr, low, mid, high); // Merge the sorted halves
  };
  
  const merge = (arr, low, mid, high) => {
    let temp = [];
    let left = low;
    let right = mid + 1;
  
    while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) {
        temp.push(arr[left]);
        left++;
      } else {
        temp.push(arr[right]);
        right++;
      }
    }
  
    // Copy remaining elements from the left subarray, if any
    while (left <= mid) {
      temp.push(arr[left]);
      left++;
    }
  
    // Copy remaining elements from the right subarray, if any
    while (right <= high) {
      temp.push(arr[right]);
      right++;
    }
  
    // Copy the sorted subarray into the original array
    for (let i = 0; i < temp.length; i++) {
      arr[low + i] = temp[i];
    }
  };
  
  let arr = [1, 4, 1, 2, 4, 5, 6];
  mergeSortArray(arr, 0, arr.length - 1);
  console.log(arr);
  