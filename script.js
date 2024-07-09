const input = document.getElementById("user-input");
const output = document.getElementById("results-div");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
function telephoneCheck(str) {
  let num1 = /^\d{3}-\d{3}-\d{4}$/; // 555-555-5555
  let num2 = /^\(\d{3}\)\d{3}-\d{4}$/; // (555)555-5555
  let num3 = /^\(\d{3}\)\s{1}\d{3}-\d{4}$/; // (555) 555-5555
  let num4 = /^1{1}\s{1}\d{3}\s{1}\d{3}\s{1}\d{4}$/; //1 555 555 5555
  let num5 = /^\d{10}$/; // 5555555555
  let num6 = /^1{1}\s{1}\d{3}\s{1}\d{8}$/; // 1 555 55555555
  let num7 = /^1{1}\s{1}\(\d{3}\)\d{3}-\d{4}$/; // 1 (555)555-5555
  let num8 = /^1{1}\(\d{3}\)\d{3}-\d{4}$/; //1(555)555-5555
  let num9 = /^1{1}\s{1}\d{3}-\d{3}-\d{4}$/; // 1 555-555-5555
  let num10 = /^1{1}\s{1}\(\d{3}\)\s{1}\d{3}-\d{4}$/; //1 (555) 555-5555
  let nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];
  let numIndex = 0;

  while (numIndex < nums.length) {
    if (nums[numIndex].test(str) === false) {
      numIndex += 1;
    } else {
      return true;
    }
  }
  return false;
}

check.addEventListener("click", () => {
  //   console.log(input.value.length);
  if (input.value.length === 0) {
    alert("Please provide a phone number");
  } else {
    const isValid = telephoneCheck(input.value);
    if (isValid) {
      output.innerHTML = "valid US number: " + input.value;
    } else {
      output.innerHTML = "Invalid US number: " + input.value;
    }
  }
});

clear.addEventListener("click", () => {
  input.value = "";
  output.innerHTML = "";
});
