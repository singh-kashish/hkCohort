/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if(!Array.isArray(transactions) || transactions.length===0)return [];
  let result = [];
  // Map category vs totalSpent by interating over transactions
  const totalByCategory = new Map();
  for(let i=0;i<transactions.length;i++){
    {
      const transaction = transactions[i];
      if(!transaction || transaction.category === undefined || transaction.price === undefined) continue;
      if(typeof transaction.category!== 'string' || typeof transaction.price !== 'number') continue;
      let category = transactions[i].category;
      const price = Number(transactions[i].price);
      if(isFinite(price)===false) continue;
      const currentTotal = totalByCategory.get(category) || 0;
      totalByCategory.set(category,currentTotal + price);
    }}
    for(let [key,value] of totalByCategory.entries()){
      result.push({category:key,totalSpent:value});
    }
  return result;
}

module.exports = calculateTotalSpentByCategory;
