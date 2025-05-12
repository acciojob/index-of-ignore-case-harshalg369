function indexOfIgnoreCase(str, subStr) {
  if (!subStr) return 0; // If searching for empty string, return 0
  return str.toLowerCase().indexOf(subStr.toLowerCase());
}

function handleIndexSearch() {
  const str = document.getElementById("mainStr").value;
  const subStr = document.getElementById("subStr").value;

  const index = indexOfIgnoreCase(str, subStr);
  const result = document.getElementById("output");

  if (index !== -1) {
    result.textContent = `Substring found at index: ${index}`;
    result.style.color = "green";
  } else {
    result.textContent = "Substring not found.";
    result.style.color = "red";
  }
}
