/**
 * 求阶乘
 */
public class Code01_SumOfFactorial {
    public static long factorial(int N) {
        long ans = 0;
        long cur = 1;
        for (int i = 1; i <= N; i++) {
            cur = cur * i;
            ans += cur;
        }
        return ans;
    }

    public static void main(String[] args) {
        int N = 3;
        System.out.println(factorial(N));
    }
}
