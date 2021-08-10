// You got a list of items where every item has a value and a weight. You got a bag 
// that holds a maximum weight of X.

// Write a program that maximizes the value of the items you put into the bag whilst ensuring
// that you don't exceed the maximum weight.

function knapsackFn(items, maxWeight, itemIndex, memo) {

    console.log("RUNNING")
    console.log(itemIndex + 1)
    console.log(memo[maxWeight][itemIndex + 1])

    // Why is itemIndex 1 less than it should be? Why are they all undefined? 
    if(memo[maxWeight][itemIndex]) {
        return memo[maxWeight][itemIndex]
    }
    if(maxWeight === 0 || itemIndex < 0) {
        return {items: [], value: 0, weight: 0}
    }

    if(maxWeight < items[itemIndex].weight) {
        return knapsackFn(items, maxWeight, itemIndex - 1, memo)
    }

    const sackWithItem = knapsackFn(items, maxWeight - items[itemIndex].weight, itemIndex - 1, memo)

    const sackWithoutItem = knapsackFn(items, maxWeight, itemIndex - 1, memo)

    const valueWithItem = sackWithItem.value + items[itemIndex].value
    const valueWithoutItem = sackWithoutItem.value
    let resultSack

    if(valueWithItem > valueWithoutItem) {
        const updatedSack = {
            items: sackWithItem.items.concat(items[itemIndex]),
            value: sackWithItem.value + items[itemIndex].value,
            weight: sackWithItem.weight + items[itemIndex].weight
        }
        resultSack = updatedSack
    } else {
        resultSack = sackWithoutItem
    }

    memo[maxWeight][itemIndex] = resultSack
    // console.log(memo[maxWeight][itemIndex])
    
    
    return resultSack
}

function knapsack(items, maxWeight, index) {
    const mem = Array.from(Array(maxWeight + 1), () => Array(items.length).fill(undefined))
    
    return knapsackFn(items, maxWeight, index, mem)
}

const items = [
    {name: 'a', value: 3, weight: 3},
    {name: 'b', value: 6, weight: 8},
    {name: 'c', value: 10, weight: 3},
    // {name: 'd', value: 8, weight: 2},
]

const maxWeight = 8

const sack = knapsack(items,  maxWeight, items.length - 1)
console.log(sack)

// Not finished!! 