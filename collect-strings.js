function collectStrings(obj) {
  let collection = [];
  for (let key in obj) {
      if (obj[key] instanceof Object) {
        collection = collection.concat(collectStrings(obj[key]));
      }

      if (typeof obj[key] === 'string') {
        collection.push(obj[key]);
      }
  }

  return collection;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])
