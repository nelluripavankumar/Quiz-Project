import React from "react";
import './Coding.css';

// List of DSA topics and their respective questions with difficulty levels
const questionTopics = [
  { topic: "Arrays",
    questions: [
      { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
      { title: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
      { title: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", difficulty: "Medium" },
      { title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Easy" },
      { title: "Search Insert Position", link: "https://leetcode.com/problems/search-insert-position/", difficulty: "Easy" },
      { title: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/", difficulty: "Easy" },
      { title: "Merge Sorted Arrays", link: "https://leetcode.com/problems/merge-sorted-array/", difficulty: "Easy" },
      { title: "Minimum Size Subarray Sum", link: "https://leetcode.com/problems/minimum-size-subarray-sum/", difficulty: "Medium" },
      { title: "Find the Duplicate Number", link: "https://leetcode.com/problems/find-the-duplicate-number/", difficulty: "Medium" },
      { title: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/", difficulty: "Medium" },
      { title: "Squares of a Sorted Array", link: "https://leetcode.com/problems/squares-of-a-sorted-array/", difficulty: "Easy" },
      { title: "Move Zeroes", link: "https://leetcode.com/problems/move-zeroes/", difficulty: "Easy" },
      { title: "Sort Colors", link: "https://leetcode.com/problems/sort-colors/", difficulty: "Medium" },
      { title: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium" },
      { title: "Rotate Array", link: "https://leetcode.com/problems/rotate-array/", difficulty: "Medium" },
      { title: "Insert Interval", link: "https://leetcode.com/problems/insert-interval/", difficulty: "Medium" },
      { title: "Search 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/", difficulty: "Medium" },
      { title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" },
      { title: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium" },
      { title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard" },
      { title: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/", difficulty: "Medium" },
      { title: "Next Permutation", link: "https://leetcode.com/problems/next-permutation/", difficulty: "Medium" },
      { title: "Maximum Gap", link: "https://leetcode.com/problems/maximum-gap/", difficulty: "Hard" },
      { title: "Partition Labels", link: "https://leetcode.com/problems/partition-labels/", difficulty: "Medium" },
      { title: "Array Nesting", link: "https://leetcode.com/problems/array-nesting/", difficulty: "Medium" },
    ],
  },
  {
    topic: "Strings",
    questions: [
      { title: "Valid Palindromes", link: "https://leetcode.com/problems/valid-palindrome/", difficulty: "Easy" },
      { title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium" },
      { title: "Implement strStr()", link: "https://leetcode.com/problems/implement-strstr/", difficulty: "Easy" },
      { title: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: "Medium" },
      { title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium" },
      { title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" },
      { title: "Palindrome Permutation", link: "https://leetcode.com/problems/palindrome-permutation/", difficulty: "Easy" },
      { title: "Reverse Words in a String", link: "https://leetcode.com/problems/reverse-words-in-a-string/", difficulty: "Medium" },
      { title: "String to Integer (atoi)", link: "https://leetcode.com/problems/string-to-integer-atoi/", difficulty: "Medium" },
      { title: "Count and Say", link: "https://leetcode.com/problems/count-and-say/", difficulty: "Medium" },
      { title: "Longest Repeating Substring", link: "https://leetcode.com/problems/longest-repeating-substring/", difficulty: "Hard" },
      { title: "String Compression", link: "https://leetcode.com/problems/string-compression/", difficulty: "Easy" },
      { title: "Add Binary", link: "https://leetcode.com/problems/add-binary/", difficulty: "Easy" },
      { title: "Escape Special Characters", link: "https://leetcode.com/problems/escape-special-characters/", difficulty: "Medium" },
    ],
  },
  {
    topic: "HashMaps",
    questions: [
      { title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" },
      { title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
      { title: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium" },
      { title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium" },
    ],
  },
  {
    topic: "Two Pointers",
    questions: [
      { title: "Container with Most Water", link: "https://leetcode.com/problems/container-with-most-water/", difficulty: "Medium" },
      { title: "3Sum", link: "https://leetcode.com/problems/3sum/", difficulty: "Medium" },
      { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
      { title: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", difficulty: "Easy" },
      { title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" },
    ],
  },
    {
    topic: "Stacks",
    questions: [
      { title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
      { title: "Min Stack", link: "https://leetcode.com/problems/min-stack/", difficulty: "Medium" },
      { title: "Evaluate Reverse Polish Notation", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", difficulty: "Medium" },
      { title: "Next Greater Element I", link: "https://leetcode.com/problems/next-greater-element-i/", difficulty: "Easy" },
      { title: "Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium" },
      { title: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard" },
    ],
  },
  {
    topic: "Queues",
    questions: [
      { title: "Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/", difficulty: "Easy" },
      { title: "Implement Circular Queue", link: "https://leetcode.com/problems/circular-queue/", difficulty: "Medium" },
      { title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" },
    ],
  },
  {
    topic: "Binary Search",
    questions: [
      { title: "Binary Search", link: "https://leetcode.com/problems/binary-search/", difficulty: "Easy" },
      { title: "First Bad Version", link: "https://leetcode.com/problems/first-bad-version/", difficulty: "Easy" },
      { title: "Search Insert Position", link: "https://leetcode.com/problems/search-insert-position/", difficulty: "Easy" },
      { title: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/", difficulty: "Medium" },
      { title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
    ],
  },
  {
    topic: "Trees",
    questions: [
      { title: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
      { title: "Same Tree", link: "https://leetcode.com/problems/same-tree/", difficulty: "Easy" },
      { title: "Invert Binary Tree", link: "https://leetcode.com/problems/invert-binary-tree/", difficulty: "Easy" },
      { title: "Validate Binary Search Tree", link: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium" },
      { title: "Binary Tree Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" },
    ],
  },{
    topic: "Linked List",
    questions: [
      { title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
      { title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
      { title: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" },
      { title: "Remove Nth Node from End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium" },
    ],
  },{
    topic: "HashMaps",
    questions: [
      { title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" },
      { title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
      { title: "Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium" },
      { title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", difficulty: "Medium" },
    ],
  }
];

function getDifficultyClass(difficulty) {
  switch (difficulty) {
    case "Easy":
      return "green";
    case "Medium":
      return "yellow";
    case "Hard":
      return "red";
    default:
      return "";
  }
}
function Coding() {
  return (
    <div className="container">
      <header className="header">
        <h1>Data Structures & Algorithms Topics</h1>
        <p>Explore problems by categories and improve your problem-solving skills!</p>
      </header>
      {questionTopics.map((topicGroup, index) => (
        <div className="topic-section" key={index}>
          <div className="topic-header">
            <h2>{topicGroup.topic}</h2>
          </div>
          <div className="questions-container">
            {topicGroup.questions.map((q) => (
              <div className={`question-card ${getDifficultyClass(q.difficulty)}`} key={q.link}>
                <a href={q.link} target="_blank" rel="noopener noreferrer" className="question-link">
                  {q.title}
                </a>
                <span className="difficulty">{q.difficulty}</span>
              </div>
            ))}
          </div>
          <div className="separator"></div>
        </div>
      ))}
    </div>
  );
}

export default Coding;