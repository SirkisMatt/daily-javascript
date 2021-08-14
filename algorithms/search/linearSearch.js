function findElement(arr, element, comparatorFn) {
    let index = 0
    for(const item of arr) {
        if(typeof element === 'object' && element !== null && comparatorFn(item, element)) {
            return index
        }
        if(item === element) {
            return index
        }
        index++
    }

    return 'No Match'
}

const arr = [5, 3, 7, 1, 19, 30]

console.log(findElement(arr, 155))

const objects = [
    {
        name: 'Matt',
        age: 25
    },
    {
        name: 'Malia',
        age: 26
    }
]

console.log(findElement(
    objects, 
    {
        name: 'Matt',
        age: 25
    },
    function(el, it) {
        return el.name === it.name
    }
))