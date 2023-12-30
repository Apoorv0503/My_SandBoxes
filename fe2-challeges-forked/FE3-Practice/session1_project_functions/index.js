console.log("module 3 project function");
// just for an idea how these functions are working
// addFilters function created by me for proper flow of the functions
(function addFilters() {
  let list = [
    {
      id: "2447910730",
      name: "Niaboytown",
      costPerHead: 4003,
      currency: "INR",
      image:
        "https://images.pexels.com/photos/837745/pexels-photo-837745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      duration: 6,
      category: "Party",
    },
    {
      id: "1773524915",
      name: "Fort Sionnnn",
      costPerHead: 2686,
      currency: "INR",
      image:
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      duration: 9,
      category: "Cycling",
    },
    {
      id: "0355034513",
      name: "Wooddaux",
      costPerHead: 3715,
      currency: "INR",
      image:
        "https://images.pexels.com/photos/744912/pexels-photo-744912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      duration: 8,
      category: "Beaches",
    },
    {
      id: "2260150453",
      name: "Bageorge With Nonshi Harbour",
      costPerHead: 3184,
      currency: "INR",
      image:
        "https://images.pexels.com/photos/631522/pexels-photo-631522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      duration: 3,
      category: "Cycling",
    },
    {
      id: "1921387712",
      name: "Stonelumhawk",
      costPerHead: 4143,
      currency: "INR",
      image:
        "https://images.pexels.com/photos/2242171/pexels-photo-2242171.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      duration: 17,
      category: "Hillside",
    },
    {
      id: "7938812489",
      name: "La Anrncast",
      costPerHead: 3712,
      currency: "INR",
      image:
        "https://images.pexels.com/photos/3182925/pexels-photo-3182925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      duration: 7,
      category: "Beaches",
    },
    {
      id: "2757195090",
      name: "Fort Shilbluff",
      costPerHead: 795,
      currency: "INR",
      image:
        "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      duration: 19,
      category: "Hillside",
    },
    {
      id: "3727396712",
      name: "Shiwood",
      costPerHead: 1352,
      currency: "INR",
      image:
        "https://images.pexels.com/photos/45987/pexels-photo-45987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      duration: 17,
      category: "Cycling",
    },
    {
      id: "2211420097",
      name: "East Vyfolk",
      costPerHead: 4393,
      currency: "INR",
      image:
        "https://images.pexels.com/photos/2835562/pexels-photo-2835562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      duration: 5,
      category: "Party",
    },
  ];
  let filters = {
    duration: "2-6",
    category: ["Hillside", "Cycling"],
  };

  saveFiltersToLocalStorage(filters);

  filterFunction(list, filters);
})();

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  console.log(list, low, high);
  let filteredList = list.filter(
    (item) => item.duration >= low && item.duration <= high,
  );
  // 1. Filter adventures based on Duration and return filtered list
  console.log(filteredList, "2");
}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  console.log(list, categoryList);
  // 1. Filter adventures based on their Category and return filtered list
  let filteredList = list.filter((ele) => categoryList.includes(ele.category));
  return filteredList;
}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  console.log("filterFunction");
  // TODO: MODULE_FILTERS
  let [low, high] = filters.duration.split("-");
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods
  if (filters.duration !== "" && filters.category.length === 0) {
    filterByDuration(list, low, high);
  } else if (filters.duration === "" && filters.category.length !== 0) {
    filterByCategory(list, filters.category);
  } else {
    let list2 = filterByCategory(list, filters.category);
    filterByDuration(list2, low, high);
  }

  // Place holder for functionality to work in the Stubs
  return list;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage
  localStorage.setItem("filters", JSON.stringify(filters));
  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object
  localStorage.getItem("filters");
  console.log(
    localStorage.getItem("filters"),
    "in saveFiltersToLocalStorage function",
  );

  // Place holder for functionality to work in the Stubs
  return null;
}
getFiltersFromLocalStorage();
