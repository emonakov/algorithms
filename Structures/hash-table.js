const hashMeth = Symbol("hash");

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  [hashMeth](key) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = Math.abs(char.charCodeAt(0) - 96);
      total = (total * PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this[hashMeth](key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);

    return this;
  }

  get(key) {
    let value = null;
    const index = this[hashMeth](key);
    if (!this.keyMap[index]) {
      return value;
    }

    const kv = this.keyMap[index].find(el => {
      const [k, v] = el;
      return k === key;
    });
    if (kv) {
      value = kv[1];
    }

    return value;
  }

  values() {
    const values = [];

    this.keyMap.forEach(bucket => {
      if (bucket) {
        for (const kv of bucket) {
          if (!values.includes(kv[1])) {
            values.push(kv[1]);
          }
        }
      }
    });

    return values;
  }

  keys() {
    const keys = [];

    this.keyMap.forEach(bucket => {
      if (bucket) {
        for (const kv of bucket) {
          if (!keys.includes(kv[0])) {
            keys.push(kv[0]);
          }
        }
      }
    });

    return keys;
  }
}

const hashTable = new HashTable(17);
hashTable.set("one", "A");
hashTable.set("two", "B");
hashTable.set("three", "C");
hashTable.set("four", "D");
