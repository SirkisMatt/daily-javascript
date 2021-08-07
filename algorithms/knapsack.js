// You got a list of items where every item has a value and a weight. You got a bag 
// that holds a maximum weight of X.

// Write a program that maximizes the value of the items you put into the bag whilst ensuring
// that you don't exceed the maximum weight.

function knapsack(items, maxWeight, itemIndex) {

    if(maxWeight === 0 || itemIndex < 0) {
        return {items: [], value: 0, weight: 0}
    }

    if(maxWeight < items[itemIndex].weight) {
        return knapsack(items, maxWeight, itemIndex - 1)
    }

    const sackWithItem = knapsack(items, maxWeight - items[itemIndex].weight, itemIndex - 1)

    const sackWithoutItem = knapsack(items, maxWeight, itemIndex - 1)

    const valueWithItem = sackWithItem.value + items[itemIndex].value
    const valueWithoutItem = sackWithoutItem.value

    if(valueWithItem > valueWithoutItem) {
        const updatedSack = {
            items: sackWithItem.items.concat(items[itemIndex]),
            value: sackWithItem.value + items[itemIndex].value,
            weight: sackWithItem.weight + items[itemIndex].weight
        }

        return updatedSack
    } else {
        return sackWithoutItem
    }
    
}

const items = [
    {name: 'a', value: 3, weight: 3},
    {name: 'b', value: 6, weight: 8},
    {name: 'c', value: 10, weight: 3},
]

const maxWeight = 8

const sack = knapsack(items,  maxWeight, items.length - 1)
console.log(sack)