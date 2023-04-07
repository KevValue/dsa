class Heap {
    constructor(...args){
        this.array = [...args]
    }
    insert(value){
        this.array.push(value)
        const lastIndex = this.array.length - 1
        this.maxHeapifyUp(lastIndex)
    }

    maxHeapifyUp(startingSwapIndex){
        while (this.array[parent(startingSwapIndex)] < this.array[startingSwapIndex]){
            this.swap(parent(startingSwapIndex), startingSwapIndex)
            startingSwapIndex = parent(startingSwapIndex)
        }
    }
    swap(i1, i2){
         const s1 = this.array[i1]
         const s2 = this.array[i2]
         this.array[i1] =  s2
         this.array[i2] =  s1
    }
    extract(){
        this.array[0] = this.array[length - 1]

        maxHeapifyDown()
        return this.array[0]
    }
}

function parent(childIndex){
    return (childIndex - 1)/2
}

function leftIndex(parentIndex){
    return (parentIndex * 2) + 1
}

function rightIndex(parentIndex){
    return (parentIndex * 2) + 2 
}

const regularheap = [10, 20, 30]
const heap = new Heap()
for (let i  = 0; i < regularheap.length; i++){
    heap.insert(regularheap[i])
}
console.log(heap.array)