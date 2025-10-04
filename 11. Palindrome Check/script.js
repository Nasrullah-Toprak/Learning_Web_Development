const input = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
  // Clean string: only letters/numbers, lowercase
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

checkBtn.addEventListener("click", () => {
  const text = input.value;
  if (text.trim() === "") {
    alert("Please input a value");
    return;
  }
  if (isPalindrome(text)) {
    result.textContent = `${text} is a palindrome`;
  } else {
    result.textContent = `${text} is not a palindrome`;
  }
});
