function binarySearch(target, arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let pivot = Math.round((right + left) / 2);
    if (arr[pivot] === target) {
      return pivot;
    }

    if (arr[pivot] < target) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
  return -1;
}

console.log(binarySearch(10, [1,2,3,4,5,6,7,8,10]));
console.log(binarySearch(46, [1,2,3,4,5,6,7,8,10,22,24,25,26,28,32,34,35,41,46,49,50,55,56,57,58,59,61,63,65,68,70,72,74,75,76,78,82,84,85,91,96,99,100,155]));

let states = ["Alaska",
                  "Alabama",
                  "Arkansas",
                  "American Samoa",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "District of Columbia",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Guam",
                  "Hawaii",
                  "Iowa",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Massachusetts",
                  "Maryland",
                  "Maine",
                  "Michigan",
                  "Minnesota",
                  "Missouri",
                  "Mississippi",
                  "Montana",
                  "North Carolina",
                  " North Dakota",
                  "Nebraska",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "Nevada",
                  "New York",
                  "Ohio",
                  "Oklahoma",
                  "Oregon",
                  "Pennsylvania",
                  "Puerto Rico",
                  "Rhode Island",
                  "South Carolina",
                  "South Dakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Virginia",
                  "Virgin Islands",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
                  "West Virginia",
                  "Wyoming"].sort();

let westVirginia = binarySearch('West Virginia', states);
console.log(westVirginia);
