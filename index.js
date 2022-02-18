module.exports = (param = {}) => {
  const result = Object.entries(param).map(([key, element]) => {
      const splited = key.split``;
      while (splited.includes('_')) {
          const getLetterAfterUnderline = splited.indexOf('_') + 1;
          const getUnderline = splited.indexOf('_');
          const turnLetterToUpperCase = splited[getLetterAfterUnderline].toUpperCase();
          splited[getLetterAfterUnderline] = turnLetterToUpperCase;
          splited.splice(getUnderline, 1)
      }
      return [splited.join``, element];
  }).reduce((acc, [key, element]) => {
      acc[key] = element;
      return acc;
  }, {})
  return result;
}