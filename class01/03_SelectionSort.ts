/**
 * 选择排序
 */


function selectSort(arr: number[]) {
  if (arr == null || arr.length < 2) {
    return
  }
  let N: number = arr.length
  for (let i = 0; i < N; i++) {
    let minValueIndex: number = i
    for (let j = i + 1; j < N; j++) {
      minValueIndex = arr[j] < arr[minValueIndex] ? j : minValueIndex
    }
    [arr[i], arr[minValueIndex]] = [arr[minValueIndex], arr[i]]
  }
}

(() => {
  let arr: number[] = [2, 3, 5, 1, 4, 7, 1, 4, 6]
  selectSort(arr)
  console.info(arr)
})()