const nums1 = [1, 2];
const nums2 = [4, 5];
const join = nums1.concat(nums2, '9');
console.log(join);

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [...a1, ...a2];
console.log(a3);