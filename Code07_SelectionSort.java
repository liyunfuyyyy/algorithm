/**
 * 选择排序
 */
public class Code07_SelectionSort {
    public static void selectSort(int[] arr) {
        if (arr == null || arr.length < 2) {
            return;
        }
        // 0~n-1
        // 1~n-1
        int N = arr.length;
        for (int i = 0; i < N; i++) {
            int minValueIndex = i;
            for (int j = i + 1; j < N; j++) {
                minValueIndex = arr[j] < arr[minValueIndex] ? j : minValueIndex;
            }
            swap(arr, i, minValueIndex);
        }
    }

    public static void swap(int[] arr, int i, int j) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    public static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int arr[] = {2, 3, 5, 1, 4, 7, 1, 4, 6};
        selectSort(arr);
        printArray(arr);
    }


}
