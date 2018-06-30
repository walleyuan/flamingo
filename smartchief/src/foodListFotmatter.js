const foodListFormatter = (rawData) => {
  console.log("RAWDATA%%", rawData);
  const foodList = {};
  rawData.forEach((element)=>{
    const foodName = element.tagName;
    if(!foodList[foodName]){
      foodList[foodName] = 1;
    }
    const originalNumb = foodList[foodName];
    foodList[foodName] = originalNumb + 1;
  });
  return foodList;
}

module.exports = foodListFormatter;