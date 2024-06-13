export class Node {
    constructor(data, next = null) {
        this.data = data; // Holds the data for the node
        this.next = next; // Pointer to the next node in the list, defaults to null
    }
}

export class LinkedList {
    constructor() {
        this.head = null; // Start with an empty list where head is null
    }

    // Adds a new node with the specified value to the end of the list
    append(value) {
        const newNode = new Node(value); // Create a new node
        if (!this.head) {
            // If the list is empty, make the new node the head
            this.head = newNode;
        } else {
            // Otherwise, find the last node and append the new node
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        return this; // Allows method chaining
    }

    // Adds a new node with the specified value to the beginning of the list
    prepend(value) {
        const newNode = new Node(value, this.head); // Create a new node pointing to the current head
        this.head = newNode; // Make the new node the new head
        return this; // Allows method chaining
    }

    // Returns the number of nodes in the list
    size() {
        let counter = 0; // Counter to keep track of the number of nodes
        let current = this.head;
        while (current) {
            counter++;
            current = current.next;
        }
        return counter;
    }

    // Returns the first node of the list
    getHead() {
        return this.head;
    }

    // Returns the last node of the list
    getTail() {
        if (!this.head) return null; // Return null if the list is empty
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current;
    }

    // Returns the node at the specified index, or null if the index is invalid
    at(index) {
        if (index >= this.size() || index < 0) return null; // Check for valid index
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    // Removes the last node from the list
    pop() {
        if (!this.head) return null; // If the list is empty, return null
        if (!this.head.next) {
            // If there's only one node, make head null
            this.head = null;
            return;
        }
        let current = this.head;
        while (current.next.next) {
            // Find the second-to-last node
            current = current.next;
        }
        current.next = null; // Remove the last node
    }

    // Returns true if the value exists in the list, false otherwise
    contains(value) {
        let current = this.head;
        while (current) {
            if (current.data === value) return true;
            current = current.next;
        }
        return false;
    }

    // Returns the index of the node containing the value, or null if not found
    find(value) {
        let counter = 0;
        let current = this.head;
        while (current) {
            if (current.data === value) return counter;
            current = current.next;
            counter++;
        }
        return null;
    }

    // Returns a string representation of the list
    toString() {
        if (!this.head) return "null";
        let str = "";
        let current = this.head;
        while (current) {
            str += `( ${current.data} ) -> `;
            current = current.next;
        }
        return str + "null";
    }

    // Inserts a new node with the specified value at the given index
    insertAt(value, index) {
        if (index < 0) return null; // Negative index is invalid
        if (!this.head) {
            if (index === 0) return this.prepend(value);
            else return null;
        }
        const newNode = new Node(value);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return this;
        }
        let current = this.head;
        let previousNode = null;
        let currentIndex = 0;
        while (current != null && currentIndex < index) {
            previousNode = current;
            current = current.next;
            currentIndex++;
        }
        if (currentIndex === index) {
            previousNode.next = newNode;
            newNode.next = current;
        } else {
            return null;
        }
        return this;
    }

    // Removes the node at the specified index
    removeAt(index) {
        if (index < 0) return null; // Negative index is invalid
        let current = this.head;
        let previousNode = null;
        let currentIndex = 0;
        if (index == 0) {
            this.head = this.head.next;
            return this;
        }
        while (current != null && currentIndex < index) {
            previousNode = current;
            current = current.next;
            currentIndex++;
        }
        if (current === null) return null; // Index was out of bounds
        if (previousNode != null) previousNode.next = current.next; // Unlink the node
        return this;
    }
}
