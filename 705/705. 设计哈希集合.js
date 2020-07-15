/**
 * Initialize your data structure here.
 */
class MyHashSet {
    constructor() {
        this.list = new Uint8Array(1000000); //创建一个Uint8Array
    }

    add(value) {
        this.list[value] = true;
    }

    contains(value) {
        return this.list[value];
    }

    remove(value) {
        if (this.list[value]) this.list[value] = false;
    }
}
