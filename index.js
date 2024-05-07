const mergeSortIterative = (arr) => {
  const merge = (left, right) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };
  const mergeSize = 2;
  for (let i = 0; i < arr.length; i += mergeSize) {
    for (let j = i; j < arr.length; j += mergeSize) {
      const left = arr.slice(j, j + mergeSize / 2);
      const right = arr.slice(j + mergeSize / 2, j + mergeSize);
      arr.splice(j, mergeSize, ...merge(left, right));
    }
  }
  return arr;
};
