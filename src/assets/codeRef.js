import AnagramPalindrome from './seed/algorithms/AnagramPalindrome';
import BubbleSort from './seed/algorithms/BubbleSort';
import HeapSort from './seed/algorithms/HeapSort';
import InsertionSort from './seed/algorithms/InsertionSort';
import Mergesort from './seed/algorithms/Mergesort';
import NoTwoConsecutiveChars from './seed/algorithms/NoTwoConsecutiveChars';
import Quicksort from './seed/algorithms/Quicksort';
import SelectionSort from './seed/algorithms/SelectionSort';
import SortingAlgorithmBenchmarks from './seed/algorithms/SortingBenchmarks';
import SumAllPrimes from './seed/algorithms/SumAllPrimes';

import BinarySearchTree from './seed/data-structures/BinarySearchTree';
import DoublyLinkedList from './seed/data-structures/DoublyLinkedList';
import HashTable from './seed/data-structures/HashTable';
import LinkedList from './seed/data-structures/LinkedList';
import MaxHeap from './seed/data-structures/MaxHeap';
import PriorityQueue from './seed/data-structures/PriorityQueue';
import Queue from './seed/data-structures/Queue';
import Stack from './seed/data-structures/Stack';

// order of arrays determines order of sidebar menu:

export default {
  SORTING_ALGOS: [
    Quicksort,
    Mergesort,
    SelectionSort,
    InsertionSort,
    BubbleSort,
    HeapSort,
    SortingAlgorithmBenchmarks,
  ],
  DATA_STRUCTURES: [
    Stack,
    Queue,
    PriorityQueue,
    LinkedList,
    DoublyLinkedList,
    BinarySearchTree,
    MaxHeap,
    HashTable,
  ],
  EASY_ALGOS: [
    SumAllPrimes,
    // IsPalindrome,
    // FizzBuzz,
  ],
  MODERATE_ALGOS: [
    NoTwoConsecutiveChars,
    AnagramPalindrome,
    // SumPrimeFactors,
    // RotateAnImage,
  ]
};
