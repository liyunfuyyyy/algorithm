/**
 * 冒泡排序
 */

function bubbleSort(arr: number[]): void {
  if (arr == null || arr.length < 2) {
    return
  }
  let N: number = arr.length
  for (let end = N - 1; end >= 0; end--) {
    for (let second = 1; second <= end; second++) {
      if (arr[second - 1] > arr[second]) {
        [arr[second - 1], arr[second]] = [arr[second], arr[second - 1]]
      }
    }
  }
}

(() => {
  let arr: number[] = [2, 3, 5, 1, 4, 7, 1, 4, 6]
  bubbleSort(arr)
  console.info(arr)
})()