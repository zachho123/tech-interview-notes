const LinkedListNode = require('./LinkedListNode');

/** Class representing a singly-linked list. */
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Adds a node to the front of the linked list.
     * @param {*} value - The value of the node to be added.
     * @return {LinkedListNode} - The node which was added.
     */
    addFirst(value) {
        // Set "next" of new node to old head
        const newNode = new LinkedListNode(value, this.head);

        // Set the current head to new node
        this.head = newNode;

        // If tail isn't initialized, set tail
        if (!this.tail) {
            this.tail = newNode;
        }

        return newNode;
    }

    /**
     * Adds a node to the end of the linked list.
     * @param {*} value - The value of the node to be added.
     * @return {LinkedListNode} - The node which was added.
     */
    addLast(value) {
        // Create new node (per implementation, next will be null by default)
        const newNode = new LinkedListNode(value);

        // If the list is empty, set head and tail to new node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Set the "next" of previous tail to the new node
            this.tail.next = newNode;

            // Set tail to new node
            this.tail = newNode;
        }

        return newNode;
    }

    /**
     * Deletes a node from the linked list with the given value.
     * @param {*} value - The value of the node to be deleted.
     * @return {LinkedListNode} The node removed or null if not found.
     */
    remove(value) {
        let toRemove = null;
        let prev = null;
        let curr = this.head;

        // Move through linked list until value is found or hit null
        while (curr && curr.value !== value) {
            prev = curr;
            curr = curr.next;
        }

        if (curr) {
            toRemove = curr;

            // If the node to be removed is the head, set head to next
            if (this.head === curr) {
                this.head = this.head.next;
            } else {
                prev.next = curr.next;
            }
        }

        return toRemove;
    }

    find() {

    }

    removeHead() {

    }

    removeTail() {

    }

    toString() {
        let output = '';
        let currentNode = this.head;

        while (currentNode) {
            output += `${currentNode.value} -> `;
            currentNode = currentNode.next;
        }
        output += 'null';

        return output;
    }
}

module.exports = LinkedList;