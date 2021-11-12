const isEqualTo = (arr1, arr2) =>
  arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);

export default isEqualTo;
