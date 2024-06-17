import { Node, LinkedList } from "./linkedLists/app.js";

class HashMap {
    constructor(initialCapacity = 16) {
        this.buckets = Array(initialCapacity)
            .fill(null)
            .map(() => new LinkedList());
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