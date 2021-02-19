/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function swap(array, a, b) {
    [array[a], array[b]] = [array[b], array[a]]
}

class MinHeap {
    heap = []

    getLeftIndex(index) {
        return (2 * index) + 1
    }

    getRightIndex(index) {
        return (2 * index) + 2
    }

    getParentIndex(index) {
        if (index === 0) {
            return undefined
        }
        return Math.floor((index - 1) / 2)
    }

    size() {
        return this.heap.length
    }

    isEmpty() {
        return this.size() <= 0
    }

    insert(value) {
        if (value != null) {
            const index = this.size()
            this.heap.push(value)
            this.siftUp(index)
            return true
        }
        return false
    }

    siftDown(index) {
        let element = index
        const left = this.getLeftIndex(index)
        const right = this.getRightIndex(index)
        const size = this.size()
        if (left < size && this.heap[element] > this.heap[left]) {
            element = left
        }
        if (right < size && this.heap[element] > this.heap[right]) {
            element = right
        }
        if (index !== element) {
            swap(this.heap, index, element)
            this.siftDown(element)
        }
    }

    siftUp(index) {
        let parent = this.getParentIndex(index)
        while (index > 0 && this.heap[parent] > this.heap[index]) {
            swap(this.heap, parent, index)
            index = parent
            parent = this.getParentIndex(index)
        }
    }
}


var findKthLargest = function (nums, k) {
    var res = new MinHeap()
    for (var i = 0, len = nums.length; i < len; i++) {
        if (i < k) {
            res.insert(nums[i])
        } else {
            if (nums[i] >= res.heap[0]) {
                res.heap[0] = nums[i]
                res.siftDown(0)
            }
        }
    }
    return res.heap[0]
}
