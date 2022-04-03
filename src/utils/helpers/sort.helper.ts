export class SortHelper {
  public static mergeSort(
    arr: any[],
    sortFunction: (left: any, right: any) => boolean,
  ): any[] {
    const sort = (array: any[]): any[] => {
      if (array.length < 2) return array;
      const divider = Math.floor(array.length / 2);
      const left = array.slice(0, divider);
      const right = array.slice(divider, array.length);
      return merge(sort(left), sort(right));
    };

    const merge = (left: any[], right: any[]): any[] => {
      const mergeArray = [];
      while (left.length && right.length) {
        sortFunction(left[0], right[0])
          ? mergeArray.push(left.shift())
          : mergeArray.push(right.shift());
      }
      return mergeArray.concat(left, right);
    };

    const sortList = sort(arr);
    return sortList;
  }
}
