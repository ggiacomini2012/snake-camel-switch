const toCamel = (param = {}) => {
  const result = Object.entries(param)
    .map(([key, element]) => {
      const splited = key.split``;
      while (splited.includes('_')) {
        const getLetterAfterUnderline = splited.indexOf('_') + 1;
        const getUnderline = splited.indexOf('_');
        const turnLetterToUpperCase =
          splited[getLetterAfterUnderline].toUpperCase();
        splited[getLetterAfterUnderline] = turnLetterToUpperCase;
        splited.splice(getUnderline, 1);
      }
      return [splited.join``, element];
    })
    .reduce((acc, [key, element]) => {
      acc[key] = element;
      return acc;
    }, {});
 return result 
}

const toSnake = (param = {}) => {
  const result = Object.entries(param)
    .map(([key, element]) => {
      let copyOfKey = key;
      let resultChangedKey = 'camelCase';
      while (/[A-Z]/.test(resultChangedKey)) {
        const getUpperCaseLetter = /[A-Z]/.exec(copyOfKey);
        const turnUpperInLowerCase = getUpperCaseLetter[0].toLowerCase();
        resultChangedKey = copyOfKey.replace(
          getUpperCaseLetter[0],
          `_${turnUpperInLowerCase}`
        );
        copyOfKey = resultChangedKey;
        console.log(resultChangedKey);
      }
      return [resultChangedKey, element];
    })
    .reduce((acc, [key, element]) => {
      acc[key] = element;
      return acc;
    }, {});
  return result;
};

module.exports = {
  toCamel,
  toSnake
}
