const foodListFormatter = (rawData) => {
  const foodList = {};
  rawData.forEach((element)=>{
    const foodName = element.tagName;
    if(!foodList[foodName]){
      foodList[foodName] = 1;
    }else{
      foodList[foodName] += 1;
    }
  });
  return foodList;
}

module.exports = foodListFormatter;