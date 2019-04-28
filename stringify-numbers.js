function stringifyNumbers(obj) {
  const newObj = Object.assign({}, obj);
  for (let key in newObj) {
      const isObject = newObj[key] instanceof Object;
      const isNumber = Number.isFinite(newObj[key]);
      if (isObject && !Array.isArray(newObj[key])) {
        newObj[key] = Object.assign({}, stringifyNumbers(newObj[key]));
      }

      if (isNumber) {
        newObj[key] = String(newObj[key]);
      }
  }

  return newObj;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
