import { Node, LinkedList } from "./linkedLists/app.js";

export class HashMap {
    constructor(initialCapacity = 16) {
        this.buckets = Array(initialCapacity).fill(null).map(() => new LinkedList());
        this.loadFactor = .75;
        this.sizeCounter = 0;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % this.buckets.length;
    }
}

let hash = new HashMap()
console.log(hash.hash("Tyler"));
console.log(hash.hash("Kaitlyn"));
