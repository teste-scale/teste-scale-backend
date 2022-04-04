export class SortHelper {
  public static mergeSort(
    arr: any[],
    sortFunction: (left: any, right: any) => boolean,
  ): any[] {
    return this.sort(arr, sortFunction);
  }

  private static sort(
    array: any[],
    sortFunction: (left: any, right: any) => boolean,
  ): any[] {
    if (array.length < 2) return array;
    const divider = Math.floor(array.length / 2);
    const left = array.slice(0, divider);
    const right = array.slice(divider, array.length);
    return this.merge(
      this.sort(left, sortFunction),
      this.sort(right, sortFunction),
      sortFunction,
    );
  }

  private static merge(
    left: any[],
    right: any[],
    sortFunction: (left: any, right: any) => boolean,
  ): any[] {
    const mergeArray = [];
    while (left.length && right.length) {
      sortFunction(left[0], right[0])
        ? mergeArray.push(left.shift())
        : mergeArray.push(right.shift());
    }
    return mergeArray.concat(left, right);
  }
}
