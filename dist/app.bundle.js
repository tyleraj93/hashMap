"use strict";
(self["webpackChunkhashmap"] = self["webpackChunkhashmap"] || []).push([["app"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linkedLists_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedLists/app.js */ "./src/linkedLists/app.js");


class HashMap {
    constructor(initialCapacity = 16) {
        this.buckets = Array(initialCapacity)
            .fill(null)
            .map(() => new _linkedLists_app_js__WEBPACK_IMPORTED_MODULE_0__.LinkedList());
        this.loadFactor = 0.75;
        this.sizeCounter = 0;
    }

    // Takes a key and produces a hash code with it.
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % this.buckets.length;
    }

    // Takes two arguments, the first is a key and the second is a value that is assigned to this key.
    set(key, value) {
        if (key == null || key == undefined) throw new Error("Key cannot be null or undefined");
        const index = this.hash(key);
        let current = this.buckets[index].head;
        while (current) {
            if (current.data.key === key) {
                current.data.value = value; // If a key already exists, then the old value is overwritten
                return;
            }
            current = current.next;
        }

        this.buckets[index].append({ key, value });
        this.sizeCounter++;

        if (this.sizeCounter / this.buckets.length > this.loadFactor) {
            this.resize(); // Grows bucket size based on loadFactor
        }
    }

    // Doubles the bucket size and reassigns all stored keys and values
    resize() {
        let newMap = new HashMap(this.buckets.length * 2); // Creates a new hash map with double the buckets
        for (const bucket of this.buckets) {
            let current = bucket.head;
            while (current) {
                newMap.set(current.data.key, current.data.value); // Assigns all values from old map to new map
                current = current.next;
            }
        }
        this.buckets = newMap.buckets; // Overwrites old hash map buckets with the new ones
    }

    //  Takes one argument as a key and returns the value that is assigned to this key.
    get(key) {
        let current = this.buckets[this.hash(key)].head;
        while (current) {
            if (current.data.key === key) {
                return current.data.value;
            }
            current = current.next;
        }
        return null; // If a key is not found, return null.
    }

    // Takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
    has(key) {
        let current = this.buckets[this.hash(key)].head;
        while (current) {
            if (current.data.key === key) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Takes a key as an argument. If the given key is in the hash map,
    // it removes the entry with that key and returns true.
    // If the key isn’t in the hash map, it returns false.
    remove(key) {
        let index = this.hash(key);
        let current = this.buckets[index].head;
        let previousNode = null;

        while (current !== null) {
            if (current.data.key === key) {
                if (previousNode == null) {
                    // Node to remove is the head
                    this.buckets[index].head = current.next;
                } else {
                    // Node to remove is not the head
                    previousNode.next = current.next;
                }
                this.sizeCounter--;
                return true;
            }
            previousNode = current;
            current = current.next;
        }
        return false;
    }

    //  Returns the number of stored keys in the hash map.
    length() {
        let counter = 0;
        for (const bucket of this.buckets) {
            let current = bucket.head;
            while (current !== null) {
                counter++;
                current = current.next;
            }
        }
        return counter;
    }

    // Removes all entries in the hash map.
    clear() {
        this.buckets.forEach(bucket => bucket.head = null);
        this.sizeCounter = 0;
    }

    // Returns an array containing all the keys inside the hash map.
    keys() {
        let keys = [];
        for (const bucket of this.buckets) {
            let current = bucket.head;
            while (current !== null) {
                keys.push(current.data.key);
                current = current.next;
            }
        }
        return keys;
    }

    // Returns an array containing all the values.
    values() {
        let values = [];
        for (const bucket of this.buckets) {
            let current = bucket.head;
            while (current !== null) {
                values.push(current.data.value);
                current = current.next;
            }
        }
        return values;
    }

    // Returns an array that contains each key, value pair.
    entries() {
        let entries = [];
        for (const bucket of this.buckets) {
            let current = bucket.head;
            while (current !== null) {
                entries.push([current.data.key, current.data.value]);
                current = current.next;
            }
        }
        return entries;
    }
}

window.HashMap = HashMap;

const map = new HashMap();
map.set("blueberry", "Tyler Justice");
map.set("orange", "Kaitlyn McLaughlin");
console.log(map);

/***/ }),

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYXNobWFwLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9oYXNobWFwLy4vc3JjL2xpbmtlZExpc3RzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb2RlLCBMaW5rZWRMaXN0IH0gZnJvbSBcIi4vbGlua2VkTGlzdHMvYXBwLmpzXCI7XG5cbmNsYXNzIEhhc2hNYXAge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxDYXBhY2l0eSA9IDE2KSB7XG4gICAgICAgIHRoaXMuYnVja2V0cyA9IEFycmF5KGluaXRpYWxDYXBhY2l0eSlcbiAgICAgICAgICAgIC5maWxsKG51bGwpXG4gICAgICAgICAgICAubWFwKCgpID0+IG5ldyBMaW5rZWRMaXN0KCkpO1xuICAgICAgICB0aGlzLmxvYWRGYWN0b3IgPSAwLjc1O1xuICAgICAgICB0aGlzLnNpemVDb3VudGVyID0gMDtcbiAgICB9XG5cbiAgICAvLyBUYWtlcyBhIGtleSBhbmQgcHJvZHVjZXMgYSBoYXNoIGNvZGUgd2l0aCBpdC5cbiAgICBoYXNoKGtleSkge1xuICAgICAgICBsZXQgaGFzaENvZGUgPSAwO1xuXG4gICAgICAgIGNvbnN0IHByaW1lTnVtYmVyID0gMzE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYXNoQ29kZSA9IHByaW1lTnVtYmVyICogaGFzaENvZGUgKyBrZXkuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoYXNoQ29kZSAlIHRoaXMuYnVja2V0cy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gVGFrZXMgdHdvIGFyZ3VtZW50cywgdGhlIGZpcnN0IGlzIGEga2V5IGFuZCB0aGUgc2Vjb25kIGlzIGEgdmFsdWUgdGhhdCBpcyBhc3NpZ25lZCB0byB0aGlzIGtleS5cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoa2V5ID09IG51bGwgfHwga2V5ID09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKFwiS2V5IGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmhhc2goa2V5KTtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmJ1Y2tldHNbaW5kZXhdLmhlYWQ7XG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC5kYXRhLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5kYXRhLnZhbHVlID0gdmFsdWU7IC8vIElmIGEga2V5IGFscmVhZHkgZXhpc3RzLCB0aGVuIHRoZSBvbGQgdmFsdWUgaXMgb3ZlcndyaXR0ZW5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idWNrZXRzW2luZGV4XS5hcHBlbmQoeyBrZXksIHZhbHVlIH0pO1xuICAgICAgICB0aGlzLnNpemVDb3VudGVyKys7XG5cbiAgICAgICAgaWYgKHRoaXMuc2l6ZUNvdW50ZXIgLyB0aGlzLmJ1Y2tldHMubGVuZ3RoID4gdGhpcy5sb2FkRmFjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpOyAvLyBHcm93cyBidWNrZXQgc2l6ZSBiYXNlZCBvbiBsb2FkRmFjdG9yXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEb3VibGVzIHRoZSBidWNrZXQgc2l6ZSBhbmQgcmVhc3NpZ25zIGFsbCBzdG9yZWQga2V5cyBhbmQgdmFsdWVzXG4gICAgcmVzaXplKCkge1xuICAgICAgICBsZXQgbmV3TWFwID0gbmV3IEhhc2hNYXAodGhpcy5idWNrZXRzLmxlbmd0aCAqIDIpOyAvLyBDcmVhdGVzIGEgbmV3IGhhc2ggbWFwIHdpdGggZG91YmxlIHRoZSBidWNrZXRzXG4gICAgICAgIGZvciAoY29uc3QgYnVja2V0IG9mIHRoaXMuYnVja2V0cykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBidWNrZXQuaGVhZDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgbmV3TWFwLnNldChjdXJyZW50LmRhdGEua2V5LCBjdXJyZW50LmRhdGEudmFsdWUpOyAvLyBBc3NpZ25zIGFsbCB2YWx1ZXMgZnJvbSBvbGQgbWFwIHRvIG5ldyBtYXBcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnVja2V0cyA9IG5ld01hcC5idWNrZXRzOyAvLyBPdmVyd3JpdGVzIG9sZCBoYXNoIG1hcCBidWNrZXRzIHdpdGggdGhlIG5ldyBvbmVzXG4gICAgfVxuXG4gICAgLy8gIFRha2VzIG9uZSBhcmd1bWVudCBhcyBhIGtleSBhbmQgcmV0dXJucyB0aGUgdmFsdWUgdGhhdCBpcyBhc3NpZ25lZCB0byB0aGlzIGtleS5cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5idWNrZXRzW3RoaXMuaGFzaChrZXkpXS5oZWFkO1xuICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQuZGF0YS5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50LmRhdGEudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsOyAvLyBJZiBhIGtleSBpcyBub3QgZm91bmQsIHJldHVybiBudWxsLlxuICAgIH1cblxuICAgIC8vIFRha2VzIGEga2V5IGFzIGFuIGFyZ3VtZW50IGFuZCByZXR1cm5zIHRydWUgb3IgZmFsc2UgYmFzZWQgb24gd2hldGhlciBvciBub3QgdGhlIGtleSBpcyBpbiB0aGUgaGFzaCBtYXAuXG4gICAgaGFzKGtleSkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuYnVja2V0c1t0aGlzLmhhc2goa2V5KV0uaGVhZDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmRhdGEua2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFRha2VzIGEga2V5IGFzIGFuIGFyZ3VtZW50LiBJZiB0aGUgZ2l2ZW4ga2V5IGlzIGluIHRoZSBoYXNoIG1hcCxcbiAgICAvLyBpdCByZW1vdmVzIHRoZSBlbnRyeSB3aXRoIHRoYXQga2V5IGFuZCByZXR1cm5zIHRydWUuXG4gICAgLy8gSWYgdGhlIGtleSBpc27igJl0IGluIHRoZSBoYXNoIG1hcCwgaXQgcmV0dXJucyBmYWxzZS5cbiAgICByZW1vdmUoa2V5KSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuaGFzaChrZXkpO1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuYnVja2V0c1tpbmRleF0uaGVhZDtcbiAgICAgICAgbGV0IHByZXZpb3VzTm9kZSA9IG51bGw7XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmRhdGEua2V5ID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNOb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm9kZSB0byByZW1vdmUgaXMgdGhlIGhlYWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWNrZXRzW2luZGV4XS5oZWFkID0gY3VycmVudC5uZXh0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vZGUgdG8gcmVtb3ZlIGlzIG5vdCB0aGUgaGVhZFxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c05vZGUubmV4dCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zaXplQ291bnRlci0tO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldmlvdXNOb2RlID0gY3VycmVudDtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vICBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygc3RvcmVkIGtleXMgaW4gdGhlIGhhc2ggbWFwLlxuICAgIGxlbmd0aCgpIHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGJ1Y2tldCBvZiB0aGlzLmJ1Y2tldHMpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gYnVja2V0LmhlYWQ7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudGVyO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZXMgYWxsIGVudHJpZXMgaW4gdGhlIGhhc2ggbWFwLlxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmJ1Y2tldHMuZm9yRWFjaChidWNrZXQgPT4gYnVja2V0LmhlYWQgPSBudWxsKTtcbiAgICAgICAgdGhpcy5zaXplQ291bnRlciA9IDA7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUga2V5cyBpbnNpZGUgdGhlIGhhc2ggbWFwLlxuICAgIGtleXMoKSB7XG4gICAgICAgIGxldCBrZXlzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgYnVja2V0IG9mIHRoaXMuYnVja2V0cykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBidWNrZXQuaGVhZDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGN1cnJlbnQuZGF0YS5rZXkpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgdmFsdWVzLlxuICAgIHZhbHVlcygpIHtcbiAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGJ1Y2tldCBvZiB0aGlzLmJ1Y2tldHMpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gYnVja2V0LmhlYWQ7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKGN1cnJlbnQuZGF0YS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgYW4gYXJyYXkgdGhhdCBjb250YWlucyBlYWNoIGtleSwgdmFsdWUgcGFpci5cbiAgICBlbnRyaWVzKCkge1xuICAgICAgICBsZXQgZW50cmllcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGJ1Y2tldCBvZiB0aGlzLmJ1Y2tldHMpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gYnVja2V0LmhlYWQ7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGVudHJpZXMucHVzaChbY3VycmVudC5kYXRhLmtleSwgY3VycmVudC5kYXRhLnZhbHVlXSk7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50cmllcztcbiAgICB9XG59XG5cbndpbmRvdy5IYXNoTWFwID0gSGFzaE1hcDtcblxuY29uc3QgbWFwID0gbmV3IEhhc2hNYXAoKTtcbm1hcC5zZXQoXCJibHVlYmVycnlcIiwgXCJUeWxlciBKdXN0aWNlXCIpO1xubWFwLnNldChcIm9yYW5nZVwiLCBcIkthaXRseW4gTWNMYXVnaGxpblwiKTtcbmNvbnNvbGUubG9nKG1hcCk7IiwiZXhwb3J0IGNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIG5leHQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7IC8vIEhvbGRzIHRoZSBkYXRhIGZvciB0aGUgbm9kZVxuICAgICAgICB0aGlzLm5leHQgPSBuZXh0OyAvLyBQb2ludGVyIHRvIHRoZSBuZXh0IG5vZGUgaW4gdGhlIGxpc3QsIGRlZmF1bHRzIHRvIG51bGxcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaW5rZWRMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWFkID0gbnVsbDsgLy8gU3RhcnQgd2l0aCBhbiBlbXB0eSBsaXN0IHdoZXJlIGhlYWQgaXMgbnVsbFxuICAgIH1cblxuICAgIC8vIEFkZHMgYSBuZXcgbm9kZSB3aXRoIHRoZSBzcGVjaWZpZWQgdmFsdWUgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgIGFwcGVuZCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpOyAvLyBDcmVhdGUgYSBuZXcgbm9kZVxuICAgICAgICBpZiAoIXRoaXMuaGVhZCkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGxpc3QgaXMgZW1wdHksIG1ha2UgdGhlIG5ldyBub2RlIHRoZSBoZWFkXG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBmaW5kIHRoZSBsYXN0IG5vZGUgYW5kIGFwcGVuZCB0aGUgbmV3IG5vZGVcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQubmV4dCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50Lm5leHQgPSBuZXdOb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzOyAvLyBBbGxvd3MgbWV0aG9kIGNoYWluaW5nXG4gICAgfVxuXG4gICAgLy8gQWRkcyBhIG5ldyBub2RlIHdpdGggdGhlIHNwZWNpZmllZCB2YWx1ZSB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0XG4gICAgcHJlcGVuZCh2YWx1ZSkge1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUsIHRoaXMuaGVhZCk7IC8vIENyZWF0ZSBhIG5ldyBub2RlIHBvaW50aW5nIHRvIHRoZSBjdXJyZW50IGhlYWRcbiAgICAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTsgLy8gTWFrZSB0aGUgbmV3IG5vZGUgdGhlIG5ldyBoZWFkXG4gICAgICAgIHJldHVybiB0aGlzOyAvLyBBbGxvd3MgbWV0aG9kIGNoYWluaW5nXG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIG5vZGVzIGluIHRoZSBsaXN0XG4gICAgc2l6ZSgpIHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwOyAvLyBDb3VudGVyIHRvIGtlZXAgdHJhY2sgb2YgdGhlIG51bWJlciBvZiBub2Rlc1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50ZXI7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgZmlyc3Qgbm9kZSBvZiB0aGUgbGlzdFxuICAgIGdldEhlYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyB0aGUgbGFzdCBub2RlIG9mIHRoZSBsaXN0XG4gICAgZ2V0VGFpbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhlYWQpIHJldHVybiBudWxsOyAvLyBSZXR1cm4gbnVsbCBpZiB0aGUgbGlzdCBpcyBlbXB0eVxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQubmV4dCkge1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBub2RlIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXgsIG9yIG51bGwgaWYgdGhlIGluZGV4IGlzIGludmFsaWRcbiAgICBhdChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy5zaXplKCkgfHwgaW5kZXggPCAwKSByZXR1cm4gbnVsbDsgLy8gQ2hlY2sgZm9yIHZhbGlkIGluZGV4XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4OyBpKyspIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlcyB0aGUgbGFzdCBub2RlIGZyb20gdGhlIGxpc3RcbiAgICBwb3AoKSB7XG4gICAgICAgIGlmICghdGhpcy5oZWFkKSByZXR1cm4gbnVsbDsgLy8gSWYgdGhlIGxpc3QgaXMgZW1wdHksIHJldHVybiBudWxsXG4gICAgICAgIGlmICghdGhpcy5oZWFkLm5leHQpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgb25seSBvbmUgbm9kZSwgbWFrZSBoZWFkIG51bGxcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlIChjdXJyZW50Lm5leHQubmV4dCkge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgc2Vjb25kLXRvLWxhc3Qgbm9kZVxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50Lm5leHQgPSBudWxsOyAvLyBSZW1vdmUgdGhlIGxhc3Qgbm9kZVxuICAgIH1cblxuICAgIC8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgZXhpc3RzIGluIHRoZSBsaXN0LCBmYWxzZSBvdGhlcndpc2VcbiAgICBjb250YWlucyh2YWx1ZSkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmRhdGEgPT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBub2RlIGNvbnRhaW5pbmcgdGhlIHZhbHVlLCBvciBudWxsIGlmIG5vdCBmb3VuZFxuICAgIGZpbmQodmFsdWUpIHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmRhdGEgPT09IHZhbHVlKSByZXR1cm4gY291bnRlcjtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbGlzdFxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGVhZCkgcmV0dXJuIFwibnVsbFwiO1xuICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICBzdHIgKz0gYCggJHtjdXJyZW50LmRhdGF9ICkgLT4gYDtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0ciArIFwibnVsbFwiO1xuICAgIH1cblxuICAgIC8vIEluc2VydHMgYSBuZXcgbm9kZSB3aXRoIHRoZSBzcGVjaWZpZWQgdmFsdWUgYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgaW5zZXJ0QXQodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybiBudWxsOyAvLyBOZWdhdGl2ZSBpbmRleCBpcyBpbnZhbGlkXG4gICAgICAgIGlmICghdGhpcy5oZWFkKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHJldHVybiB0aGlzLnByZXBlbmQodmFsdWUpO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIG5ld05vZGUubmV4dCA9IHRoaXMuaGVhZDtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgICAgbGV0IHByZXZpb3VzTm9kZSA9IG51bGw7XG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoY3VycmVudCAhPSBudWxsICYmIGN1cnJlbnRJbmRleCA8IGluZGV4KSB7XG4gICAgICAgICAgICBwcmV2aW91c05vZGUgPSBjdXJyZW50O1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50SW5kZXggPT09IGluZGV4KSB7XG4gICAgICAgICAgICBwcmV2aW91c05vZGUubmV4dCA9IG5ld05vZGU7XG4gICAgICAgICAgICBuZXdOb2RlLm5leHQgPSBjdXJyZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlcyB0aGUgbm9kZSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XG4gICAgcmVtb3ZlQXQoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIG51bGw7IC8vIE5lZ2F0aXZlIGluZGV4IGlzIGludmFsaWRcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICAgIGxldCBwcmV2aW91c05vZGUgPSBudWxsO1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGN1cnJlbnQgIT0gbnVsbCAmJiBjdXJyZW50SW5kZXggPCBpbmRleCkge1xuICAgICAgICAgICAgcHJldmlvdXNOb2RlID0gY3VycmVudDtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7IC8vIEluZGV4IHdhcyBvdXQgb2YgYm91bmRzXG4gICAgICAgIGlmIChwcmV2aW91c05vZGUgIT0gbnVsbCkgcHJldmlvdXNOb2RlLm5leHQgPSBjdXJyZW50Lm5leHQ7IC8vIFVubGluayB0aGUgbm9kZVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=