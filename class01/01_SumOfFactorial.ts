/**
 * 求阶乘
 */

function factorial(N: number): number {
  let ans = 0
  let cur = 1
  for (let i = 1; i <= N; i++) {
    cur = cur * i
    ans += cur
  }
  return ans
}

(() => {
  let N: number = 3;
  console.info(factorial(N))
})()