/**
 * Displays a list of elements after sorting the input array
 * @param {Array} arr
 */
function generateSortedList(arr) {
  let list = document.getElementById("sorted-list");
  arr.sort((a, b) => a - b);
  arr.map((ele) => {
    let element = document.createElement("li");
    element.textContent = ele;
    list.append(element);
  });
}

generateSortedList([2, 1, 4, 3]); // Displays a list with 1, 2, 3, 4 on screen
// generateSortedList([1, 2, 3]);
// generateSortedList([]);
