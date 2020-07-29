# Linked Lists

## Description

Linear collection of data elements, often referred to as **nodes**. These nodes are typically non-contiguous in memory, and are made up of two parts:
1. A data/value element
2. A reference/pointer to the next node in the sequence

The first node is referred to as the **head**. If the linked list is empty, the value of head is *null*. (Depending on implementation, the head can either be the first node in the list to hold data, or it can be a standalone, empty node which points to the first node that contains actual data.)

The last node of a linked list is called the **tail** and its pointer points to *null*. Note that it's possible for a node to be both the head *and* the tail (ie: if there's only one node in the linked list).

### Pros

- Dynamic size
- Efficient inserts and removes
- More complex variants allow efficient insertion/removal at arbitrary points

### Cons

- Access time is linear - O(n)
- No random access
    - Makes binary search difficult
- Not cache friendly
    - Because Linked Lists are not stored in contiguous memory, there is no locality of reference in regards to caching.
- Extra memory required for pointer for each element

## Time Complexity of Operations

- Access: O(n)
- Search: O(n)
- Insertion: O(1)
- Deletion: O(n)

## Space Complexity

- O(n)

## Common Questions & Tips and Tricks

### Runner Method

