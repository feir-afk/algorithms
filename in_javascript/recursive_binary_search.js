const recursiveBinarySearch = (list, target) => {
  if (list.length === 0) {
    return false;
  } else {
    let midpoint = Math.floor(list.length / 2);

    if (list[midpoint] === target) {
      return true;
    } else {
      if (list[midpoint] < target) {
        return recursiveBinarySearch(list.slice(midpoint + 1), target);
      } else {
        return recursiveBinarySearch(list.slice(midpoint - 1), target);
      }
    }
  }
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const verify = (result) => {
  console.log("Target found", result);
};

let result = recursiveBinarySearch(nums, 7);
verify(result);

let result_ = recursiveBinarySearch(nums, 12);
verify(result_);
