// Without Repetition

function getPermutations(options) {
    const permutations = []
    console.log('FN START')
    console.log(options)

    if(options.length === 1) {
        return [options]
    }
    const partialPermutations = getPermutations(options.slice(1))
    console.log('AFTER RECURSIVE STEP')
    console.log(partialPermutations)

    const firstOption = options[0]

    console.log('FIRST OPTION')
    console.log(firstOption)

    for(let i = 0; i < partialPermutations.length; i++) {
        const partialPermutation = partialPermutations[i]
        console.log('OUTERLOOP')
        console.log(partialPermutation)

        for(let j = 0; j <= partialPermutation.length; j++) {
            const permutationInFront = partialPermutation.slice(0, j)
            const permutationAfter = partialPermutation.slice(j)
            permutations.push(permutationInFront.concat([firstOption], permutationAfter))
        }
    }

    return permutations
}

const todoListItems = [
    'Walk the dog',
    'clean the toilet',
    'buy groceries',
    'order food'
]

// console.log(getPermutations(todoListItems))


// With Repetitions 

function getPermutationsNoRep(options, length) {
    const permutations = []

    if(length === 1) {
        return options.map(option => [option])
    }

    const partialPermutations = getPermutationsNoRep(options, length - 1)

    for(const option of options) {
        for(const existingPermutation of partialPermutations) {
            permutations.push([option].concat(existingPermutation))
        }
    }

    return permutations
}


const digits = [1, 2, 3, 4, 5, 6]
const resultLength = 6

console.log(getPermutationsNoRep(digits, resultLength))