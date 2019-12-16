/* 
    =================
    How do we search?
    =================
    Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.

    =====================
    JavaScript has search
    =====================
    There are many different search methods on arrays in JavaScript:
        - indexOf
        - includes
        - find
        - findIndex

    =============
    Linear Search
    =============
    An algorithm where we begin at the beginning of the array and loop through all of the items in an array until a condition is met. We then return something.

    Time Complexity - O(n)
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

const usernames = [
    "tommy", "monkeygurl", "dinesh123", "dinesh1234", "patrick33", "cats4lyfe", "timothy", "tom", "tommy1", "tomm_y", "tom_my", "i_hate_cats", "pickle_luvr", "pickle_hater", "dog_guy", "q", "juan987"
];

/* 
    ========================
    Linear Search Pseudocode
    ========================
    This function accepts an array and a value
    Loop through the array and check if the current array element is equal to the value
    If it is, return the index at which the element is found
    If the value is never found, return -1
*/

/* 
    ============================
    My solution to linear search
    ============================
*/
function linearSearch(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        };
    };
    return -1;
};

/* 
    =====================
    Instructor's solution
    =====================
    It was essentially the same thing, aside from making the if statement one line and using var instead of let
*/

function linearSearch(arr, val) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === val) return i;
    };
    return -1;
};