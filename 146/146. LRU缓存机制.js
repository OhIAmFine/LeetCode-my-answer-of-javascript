let LRUCache = function(capacity) {
  this.cacheSize = capacity;
  // 缓存计数器
  this.cacheIndex = 0;
  this.cacheSet = new Set();
  // 内存头节点
  this.head = null;
  // 缓存尾节点
  this.cacheShift = null;
  this.memory = {};
};

LRUCache.prototype.get = function(key) {
  let val;
  const { cacheSet, memory } = this;
  if (cacheSet.has(key)) {
    val = memory[key].value;
    console.log(memory[key].value)
    // get 最后一个节点
    if (memory[key].next == null) {
      return val;
    }
    if (memory.cacheShift === memory[key] && memory.cacheShift.next) {
      memory.cacheShift = memory.cacheShift.next;
    }
    this.memorySort(key);
  } else {
    val = -1;
    console.log(-1);
  }

  return val;
};

LRUCache.prototype.put = function(key, value) {
  const { cacheSet, memory } = this;

  if (this.cacheIndex < this.cacheSize) {
    !cacheSet.has(key) && this.cacheIndex++;
    cacheSet.add(key)
  } else {
    if (!cacheSet.has(key)) {
      cacheSet.delete(memory.cacheShift.key);
      memory.cacheShift.next && (memory.cacheShift = memory.cacheShift.next);
      cacheSet.add(key);
    }
  }

  // 内存中有值
  if (memory.head) {
    // 内存中不存在该节点
    if (!memory[key]) {
      memory[key] = {
        prev: memory.head,
        next: null
      }
      memory.head.next = memory[key];
      memory.head = memory[key];
    } else { // 内存中存在节点
      if (memory.cacheShift === memory[key] && memory.cacheShift.next) {
        memory.cacheShift = memory[key].next;
      }
      this.memorySort(key);
    }
  } else {  // 内存为空，该节点为第一个节点
    memory[key] = {
      prev: null,
      next: null
    };
    memory.cacheShift = memory.head = memory[key];
  }

  memory[key].key = key;
  memory[key].value = value;
};

LRUCache.prototype.memorySort = function(key) {
  const { memory } = this;
  // get 的不是最后一个节点
  if (memory[key].next != null) {
    if (memory[key].prev != null) {
      memory[key].prev.next = memory[key].next;
    } else {    // 第一个节点
      memory[key].next.prev = null;
    }
    memory[key].next.prev = memory[key].prev;
    memory[key].prev = memory.head;
    memory[key].next = null;
    memory.head.next = memory[key];
    memory.head = memory[key];
  }
}

// 第二种写法，利用 MAP

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
  }

  get(key) {
    let val = this.map.get(key)
    if (typeof val === 'undefined') { return -1 }
    this.map.delete(key)
    this.map.set(key, val)
    return val
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key)
    }

    this.map.set(key, value)
    let keys = this.map.keys()
    while (this.map.size > this.capacity) { this.map.delete(keys.next().value) }
  }
}
