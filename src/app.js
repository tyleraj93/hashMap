import { Node, LinkedList } from "./linkedLists/app.js";

export class HashMap {
    constructor(initialCapacity = 16) {
        this.buckets = Array(initialCapacity)
            .fill(null)
            .map(() => new LinkedList());
        this.loadFactor = 0.75;
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
    set(key, value) {
        const index = this.hash(key);
        let current = this.buckets[index].head;
        while (current) {
            if (current.data.key === key) {
                current.data.value = value;
                return;
            }
            current = current.next;
        }

        this.buckets[index].append({ key, value });
        this.sizeCounter++;

        if (this.sizeCounter / this.buckets.length > this.loadFactor) {
            this.resize();
        }
    }

    resize() {
        let newMap = new HashMap(this.buckets.length * 2);
        for (const bucket of this.buckets) {
            let current = bucket.head;
            while (current) {
                newMap.set(current.data.key, current.data.value);
                current = current.next
            }
        }
        this.buckets = newMap.buckets;
    }

    get(key) {
        let current = this.buckets[this.hash(key)].head;
        while (current) {
            if (current.data.key === key) {
                return current.data.value;
            }
            current = current.next;
        }
        return null;
    }

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
}

const map = new HashMap();
map.set("sara", "tyler");
map.set("kaitlyn", "kaitlyn");
map.set("apple", "fruit");
map.set("car", "vehicle");
map.set("book", "reading");
map.set("tree", "nature");
map.set("star", "astronomy");
map.set("phone", "communication");
map.set("glass", "container");
map.set("rasa", "water body");
map.set("asar", "a third value");
map.set("mountain", "geography");
map.set("sara", "urban area");
map.set("cloud", "weather");
map.set("pen", "writing tool");
map.set("shoe", "footwear");
map.set("moon", "celestial");
map.set("sun", "star");
map.set("flower", "plant");
map.set("river", "freshwater");

map.set("key1", "First");
map.set("k1ye", "Second");
map.set("ky1e", "Third");

console.log(`key1 is in ${map.hash("key1")}`);
console.log(`k1ye is in ${map.hash("k1ye")}`);
console.log(`ky1e is in ${map.hash("ky1e")}`);

console.log(`pen was in ${map.hash("pen")}`);
console.log(`rasa was in ${map.hash("rasa")}`);
console.log(`asar is in ${map.hash("asar")}`)
// map.remove("pen");
// map.remove("tricycle");
// map.remove("sara");
map.remove("key1")
console.log(map);