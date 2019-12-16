/* 
    =============
    Binary Search
    =============
    - Binary search is a much faster form of search.
    - Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
    - Binary search only works on sorted arrays!

    ========================
    Binary Search Pseudocode
    ========================
    - This function accepts a sorted array and a value
    - Create a left pointer at the start of the array, and a right pointer at the end of the array.
    - While the left pointer comes before the right pointer:
        - Create a pointer in the middle
        - If you find the value you want, return the index
        - If the value is too small, move the left pointer up
        - If the valie is too large, move the right pointer down
    - If you never find the value, return -1
*/

const states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Federated States of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
];

/* 
    ===================================
    My first attempt at a binary search
    ===================================
*/

function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    while(left < right) {
        if(arr[middle] === val) {
            return middle;
        }
        else if(arr[middle] < val) {
            left = middle;
        }
        else if(arr[middle] > val) {
            right = middle;
        };

        middle = Math.floor((left + right) / 2);
    };

    return -1;
};

/* 
    =====================
    Instructor's solution
    =====================
*/