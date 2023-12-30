/**
 * Displays a list of elements after sorting the input array
 * @param {Array} arr
 */
function generateSortedList(arr) {
  arr.sort((a, b) => a - b);
  let container = document.getElementById("sorted-list");
  for (let i = 0; i < arr.length; i++) {
    let list = document.createElement("li");
    list.innerHTML = arr[i];
    container.append(list);
  }
}

generateSortedList([2, 1, 4, 3]); // Displays a list with 1, 2, 3, 4 on screen
// generateSortedList([1, 2, 3]);
// generateSortedList([]);
