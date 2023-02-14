export type CreateKeepRemoveProps<T, K extends keyof T> = {
  /** The existent array of objects. */
  input: T[];

  /** The array of items to be created. */
  items: Array<string | number>;

  /** The key to match the items to the existing objects. */
  matchKey: K;

  /** The new object to be created if the item does not exist. */
  newObject: Omit<T, K>;
}

/**
 * Create, keep and remove objects within the array.
 * It takes in the existing array, the array of items to be created,
 * the key to match the items to the existing objects, and the new object to be created,
 * and returns a new array with the updated objects.
 */
export function createKeepRemove<T>(props: CreateKeepRemoveProps<T, keyof T>) {
  const { input, items, matchKey, newObject } = props;
  
  const keepData: T[] = [];
  const newData: T[] = [];

  items.forEach((item) => {
    const isKeep = input.find(dataItem => dataItem[matchKey] === item);
    if (isKeep) keepData.push(isKeep);
    if (!isKeep) newData.push({ ...newObject, [matchKey]: item } as T);
  })

  const mergedData = [...keepData, ...newData];
  
  return mergedData;
}