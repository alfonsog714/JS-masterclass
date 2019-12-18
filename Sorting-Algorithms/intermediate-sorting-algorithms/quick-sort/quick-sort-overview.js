/* 
    ==========
    Quick Sort
    ==========
    - Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
    - Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array  
    - Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

    ===========================
    Big O Notation of Quicksort
    ===========================
    - Best & Average time complexity: O(n log n)
    - Worst case time complexity: O(n^2) This case happens when your pivot is always
    - Space Complexity: O(log n)
*/