export const updateObject = (oldObject, updatedValues) => ({
  ...oldObject,
  ...updatedValues,
});


export const copyWithoutKey = (object, key) => {
  const { [key]: deletedKey, ...otherKeys } = object;
  return otherKeys;
};
