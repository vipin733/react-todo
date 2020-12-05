let a = [1, 3, 5, 8]
let b = [2, 3, 4, 9]

const bubbleSort = (arr)  => { 
    let n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            let nextindex = j + 1
            if (arr[j] > arr[nextindex]) {
                let t = arr[j]
                arr[j] = arr[nextindex]
                arr[nextindex] = t
            }
        }
    }

    return arr
}

// merging two array
const calculate = () => {
    let mergeArray = []
    for (let index = 0; index < a.length; index++) {
        let element = a[index]
        mergeArray.push(element)
    }
    
    for (let index = 0; index < b.length; index++) {
        let element = b[index]
        mergeArray.push(element)
    }

    // after merging sorting array
    return bubbleSort(mergeArray)
}


console.log(calculate())