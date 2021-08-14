function findElement(sortedArr, element, offset) {
    let startIndex = 0;
    let endIndex = sortedArr.length - 1;
  
      const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
  
      if(sortedArr.length === 0) {
        return "Not Found"
    }
    // Base Case
      if (element === sortedArr[middleIndex]) {
        return middleIndex + offset;
      }

      
  
      if (sortedArr[middleIndex] < element) {
        startIndex = middleIndex + 1;
        offset = offset + middleIndex + 1
      } else {
        endIndex = middleIndex;
      }
      return findElement(sortedArr.slice(startIndex, endIndex + 1), element, offset)

      
}
  
  const arr = [1, 5, 7, 13, 99, 100];
  
  console.log(findElement(arr, 99, 0));