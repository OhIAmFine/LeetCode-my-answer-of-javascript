/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
  constructor (k, nums) {
    this.minHeap = [null]
    this.last = 0
    this.k = k
    this.nums = nums

    this.initMinHeap()
  }

  initMinHeap () {
    for (let i = 1; i <= this.k && i <= this.nums.length; i++) {
      this.minHeap.push(this.nums[i - 1])
      this.last = i
    }

    if (this.last === this.k) {
      this.order()
      for (let i = this.k; i < this.nums.length; i++) {
        this.add(this.nums[i])
      }
    }
  }

  add (number) {
    if (this.last < this.k) {
      this.minHeap.push(number)
      this.last++
      this.order()
    } else if (number > this.minHeap[1]) {
      this.minHeap[1] = number
      this.sink(1)
    }
    return this.minHeap[1]
  }

  order () {
    for (let i = Math.floor(this.k / 2); i > 0; i--) {
      this.sink(i)
    }
  }

  sink (i) {
    while (2 * i <= this.k) {
      let j = 2 * i
      if (this.minHeap[j] > this.minHeap[j + 1]) {
        j++
      }
      if (this.minHeap[i] > this.minHeap[j]) {
        this.swap(i, j)
        i = j
      } else {
        break
      }
    }
  }

  swap (i, j) {
    const tmp = this.minHeap[i]
    this.minHeap[i] = this.minHeap[j]
    this.minHeap[j] = tmp
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

