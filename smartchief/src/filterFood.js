const foodConstants = require("./foodConstants");

const filterFood = (rawData) => {
  const trueFood = rawData.filter((element) => {
    if(foodConstants.fruitList.indexOf(element) > -1){
      return element;
    }
  });

  return trueFood;
};

module.exports = filterFood;
