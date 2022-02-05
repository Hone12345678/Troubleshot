module.exports = {
  //capitalize the first letter of the word/sentence (whatever is in the array)
  capital_category: cat => {
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  }
};