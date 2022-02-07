module.exports = {
  //capitalize the first letter of the word/sentence (whatever is in the array)
  capitalize_first: cat => {
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  }
};