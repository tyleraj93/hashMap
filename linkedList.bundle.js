"use strict";
(self["webpackChunkhashmap"] = self["webpackChunkhashmap"] || []).push([["linkedList"],{

/***/ "./src/linkedLists/app.js":
/*!********************************!*\
  !*** ./src/linkedLists/app.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkedList: () => (/* binding */ LinkedList),
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
class Node {
    constructor(data, next = null) {
        this.data = data; // Holds the data for the node
        this.next = next; // Pointer to the next node in the list, defaults to null
    }
}

class LinkedList {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/linkedLists/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkTGlzdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0EsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVPO0FBQ1A7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0Msb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhc2htYXAvLi9zcmMvbGlua2VkTGlzdHMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBuZXh0ID0gbnVsbCkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhOyAvLyBIb2xkcyB0aGUgZGF0YSBmb3IgdGhlIG5vZGVcbiAgICAgICAgdGhpcy5uZXh0ID0gbmV4dDsgLy8gUG9pbnRlciB0byB0aGUgbmV4dCBub2RlIGluIHRoZSBsaXN0LCBkZWZhdWx0cyB0byBudWxsXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGlua2VkTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IG51bGw7IC8vIFN0YXJ0IHdpdGggYW4gZW1wdHkgbGlzdCB3aGVyZSBoZWFkIGlzIG51bGxcbiAgICB9XG5cbiAgICAvLyBBZGRzIGEgbmV3IG5vZGUgd2l0aCB0aGUgc3BlY2lmaWVkIHZhbHVlIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICBhcHBlbmQodmFsdWUpIHtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTsgLy8gQ3JlYXRlIGEgbmV3IG5vZGVcbiAgICAgICAgaWYgKCF0aGlzLmhlYWQpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBsaXN0IGlzIGVtcHR5LCBtYWtlIHRoZSBuZXcgbm9kZSB0aGUgaGVhZFxuICAgICAgICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgZmluZCB0aGUgbGFzdCBub2RlIGFuZCBhcHBlbmQgdGhlIG5ldyBub2RlXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50Lm5leHQpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudC5uZXh0ID0gbmV3Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpczsgLy8gQWxsb3dzIG1ldGhvZCBjaGFpbmluZ1xuICAgIH1cblxuICAgIC8vIEFkZHMgYSBuZXcgbm9kZSB3aXRoIHRoZSBzcGVjaWZpZWQgdmFsdWUgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdFxuICAgIHByZXBlbmQodmFsdWUpIHtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlLCB0aGlzLmhlYWQpOyAvLyBDcmVhdGUgYSBuZXcgbm9kZSBwb2ludGluZyB0byB0aGUgY3VycmVudCBoZWFkXG4gICAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7IC8vIE1ha2UgdGhlIG5ldyBub2RlIHRoZSBuZXcgaGVhZFxuICAgICAgICByZXR1cm4gdGhpczsgLy8gQWxsb3dzIG1ldGhvZCBjaGFpbmluZ1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIG51bWJlciBvZiBub2RlcyBpbiB0aGUgbGlzdFxuICAgIHNpemUoKSB7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDsgLy8gQ291bnRlciB0byBrZWVwIHRyYWNrIG9mIHRoZSBudW1iZXIgb2Ygbm9kZXNcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudGVyO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGZpcnN0IG5vZGUgb2YgdGhlIGxpc3RcbiAgICBnZXRIZWFkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGxhc3Qgbm9kZSBvZiB0aGUgbGlzdFxuICAgIGdldFRhaWwoKSB7XG4gICAgICAgIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDsgLy8gUmV0dXJuIG51bGwgaWYgdGhlIGxpc3QgaXMgZW1wdHlcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlIChjdXJyZW50Lm5leHQpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgbm9kZSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LCBvciBudWxsIGlmIHRoZSBpbmRleCBpcyBpbnZhbGlkXG4gICAgYXQoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuc2l6ZSgpIHx8IGluZGV4IDwgMCkgcmV0dXJuIG51bGw7IC8vIENoZWNrIGZvciB2YWxpZCBpbmRleFxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleDsgaSsrKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH1cblxuICAgIC8vIFJlbW92ZXMgdGhlIGxhc3Qgbm9kZSBmcm9tIHRoZSBsaXN0XG4gICAgcG9wKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIG51bGw7IC8vIElmIHRoZSBsaXN0IGlzIGVtcHR5LCByZXR1cm4gbnVsbFxuICAgICAgICBpZiAoIXRoaXMuaGVhZC5uZXh0KSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG9ubHkgb25lIG5vZGUsIG1ha2UgaGVhZCBudWxsXG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICB3aGlsZSAoY3VycmVudC5uZXh0Lm5leHQpIHtcbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIHNlY29uZC10by1sYXN0IG5vZGVcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudC5uZXh0ID0gbnVsbDsgLy8gUmVtb3ZlIHRoZSBsYXN0IG5vZGVcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIGV4aXN0cyBpbiB0aGUgbGlzdCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgY29udGFpbnModmFsdWUpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC5kYXRhID09PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbm9kZSBjb250YWluaW5nIHRoZSB2YWx1ZSwgb3IgbnVsbCBpZiBub3QgZm91bmRcbiAgICBmaW5kKHZhbHVlKSB7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC5kYXRhID09PSB2YWx1ZSkgcmV0dXJuIGNvdW50ZXI7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIGxpc3RcbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhlYWQpIHJldHVybiBcIm51bGxcIjtcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgICAgc3RyICs9IGAoICR7Y3VycmVudC5kYXRhfSApIC0+IGA7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHIgKyBcIm51bGxcIjtcbiAgICB9XG5cbiAgICAvLyBJbnNlcnRzIGEgbmV3IG5vZGUgd2l0aCB0aGUgc3BlY2lmaWVkIHZhbHVlIGF0IHRoZSBnaXZlbiBpbmRleFxuICAgIGluc2VydEF0KHZhbHVlLCBpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gbnVsbDsgLy8gTmVnYXRpdmUgaW5kZXggaXMgaW52YWxpZFxuICAgICAgICBpZiAoIXRoaXMuaGVhZCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSByZXR1cm4gdGhpcy5wcmVwZW5kKHZhbHVlKTtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBuZXdOb2RlLm5leHQgPSB0aGlzLmhlYWQ7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIGxldCBwcmV2aW91c05vZGUgPSBudWxsO1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQgIT0gbnVsbCAmJiBjdXJyZW50SW5kZXggPCBpbmRleCkge1xuICAgICAgICAgICAgcHJldmlvdXNOb2RlID0gY3VycmVudDtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEluZGV4ID09PSBpbmRleCkge1xuICAgICAgICAgICAgcHJldmlvdXNOb2RlLm5leHQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgbmV3Tm9kZS5uZXh0ID0gY3VycmVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZXMgdGhlIG5vZGUgYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuICAgIHJlbW92ZUF0KGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybiBudWxsOyAvLyBOZWdhdGl2ZSBpbmRleCBpcyBpbnZhbGlkXG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICBsZXQgcHJldmlvdXNOb2RlID0gbnVsbDtcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChjdXJyZW50ICE9IG51bGwgJiYgY3VycmVudEluZGV4IDwgaW5kZXgpIHtcbiAgICAgICAgICAgIHByZXZpb3VzTm9kZSA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICAgICAgY3VycmVudEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnQgPT09IG51bGwpIHJldHVybiBudWxsOyAvLyBJbmRleCB3YXMgb3V0IG9mIGJvdW5kc1xuICAgICAgICBpZiAocHJldmlvdXNOb2RlICE9IG51bGwpIHByZXZpb3VzTm9kZS5uZXh0ID0gY3VycmVudC5uZXh0OyAvLyBVbmxpbmsgdGhlIG5vZGVcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9