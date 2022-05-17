/**
 * 插入排序
 */

function insertSort(arr: number[]) {
  if (arr == null || arr.length < 2) {
    return
  }
  let N: number = arr.length
  for (let end = 1; end < N; end++) {
    for (let pre = end - 1; pre >= 0 && arr[pre] > arr[pre + 1]; pre--) {
      [arr[pre], arr[pre + 1]] = [arr[pre + 1], arr[pre]]
    }
  }
}

(() => {
  let arr: number[] = [2, 3, 5, 1, 4, 7, 1, 4, 6]
  insertSort(arr)
  console.info(arr)
})()