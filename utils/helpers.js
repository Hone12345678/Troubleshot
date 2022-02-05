module.exports = {
  capital_category: cat => {
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  }
};