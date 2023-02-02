export function beject<T = any>(data: T[] = []) {
  /**
 *  Create a new object within the array. 
 *  It takes in the existing array and the new object, 
 *  and returns a new array with the newly added object.
 */
  function create(object: T) {
    return [object, ...data];
  }

  /**
 *  Remove an existing object from the array. 
 *  It takes in the existing array and the object to be removed, and returns a new array with the object removed
 */
  function remove(index: number) {
    const newData = [...data];
    newData.splice(index, 1);
    return newData;
  }

  /**
 *  Update an existing object within the array. 
 *  It takes in the existing array, the object to be updated, and the updated object,   
 *  and returns a new array with the updated object
 */
  function update(index: number, object: T) {
    const newData = [...data];
    newData.splice(index, 1, object);
    return newData;
  }

  /**
   *  Alter the value of a key in an object within the array. 
   *  It takes in the existing array, the object to be updated, 
   *  and the key-value pair to be changed, and returns a new array with the updated object.
   */
  function updateByKey(index: number, key: keyof T, value: any) {
    const item = data.find((_, idx) => idx === index);
    if (!item) return;
    item[key] = value;
    return update(index, item);
  }

  return {
    create,
    remove,
    update,
    updateByKey
  };
}
