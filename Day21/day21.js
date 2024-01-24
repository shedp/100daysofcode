const validateBattlefield = (field) => {
  let battleShips = checkRows(field,4) + checkColumns(field,4);
  let cruisers = checkRows(field,3) + checkColumns(field,3) - battleShips;
  let destroyers = checkRows(field,2) + checkColumns(field,2) - battleShips - cruisers;
  let submarines = field.flat().reduce((a,b)=>a+b,0)-battleShips*4-cruisers*3-destroyers*2;

  console.log(battleShips)
  console.log(cruisers)
  console.log(destroyers)
  console.log(submarines)

  if(battleShips == 1 && cruisers == 3 && destroyers == 2 && submarines == 4) {
    return true
  }
  return false
}

const checkRows = (field, size) => {
const shipsrow=[];
 field.forEach(row => {
  let count=0;
   for (let x=0; x < row.length; x++) {
    if (row[x] === 1) {
      count ++
      if (count===size) {
      shipsrow.push(true)
    }
    } else {
      count = 0
    }
   }
 })
 return shipsrow.length
}

const checkColumns = (field,size) => {
  let reverseField=[];
    for (let x = 0; x <10; x++) {
        let column = [];
        field.forEach(row => {
            column.push(row[x])
        })
      reverseField.push(column)
    }
    return checkRows(reverseField,size)
}



const field = [
[1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
[1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
[0, 0, 1, 1, 1, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

console.log(validateBattlefield(field));
