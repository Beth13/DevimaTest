export const valueIsObject = obj => {
  return !Array.isArray(obj) && typeof obj === 'object' && obj !== null;
};

export const filterObjectByKey = (query, obj) => {
  const qs = query.toLowerCase().trim();

  if (valueIsObject(obj)) {
    let buffer = {};
    let foundNode = false;

    for (let key in obj) {
      if (key.toLowerCase().includes(qs) || valueIsObject(obj[key])) {
        let filteredValueObject = filterObjectByKey(qs, obj[key]);

        if (key.toLowerCase().includes(qs) || Object.keys(filteredValueObject).length !== 0) {
          buffer[key] = key.toLowerCase().includes(qs) ? obj[key] : filteredValueObject;
          foundNode = true;
        }
      }
    }

    return foundNode ? buffer : {};
  }

  if (Array.isArray(obj)) {
    return obj.map(n => filterObjectByKey(qs, n)).filter(n => Object.keys(n).length > 0);
  }

  return {};
};
