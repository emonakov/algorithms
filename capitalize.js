function capitalizeFirst (arr) {
  if (arr.length === 1) {
      const string = arr[0];
      return [string[0].toUpperCase() + string.slice(1)];
  }

  const newArr = [];
  const string = arr[0];
  const capitalized = [string[0].toUpperCase() + string.slice(1)];

  return newArr.concat(capitalized, capitalizeFirst(arr.slice(1)));
}
