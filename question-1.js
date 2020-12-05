let A = [-5, 1, -40, 20, 6, 82, 7]
let K = 15

const checkTotal = (currentIndex) => {
    for (let index = 0; index < A.length; index++) {
        if (index !== currentIndex) {
            let total = A[currentIndex] + A[index]
            if ( total === K) {
                console.log([A[currentIndex], A[index]])
                return true
            }
        }
    }
}


const calculate = () => {
    for (let index = 0; index < A.length; index++) {
        let isValid = checkTotal(index)
        if (isValid) {
            break
        }
    }
}

calculate()