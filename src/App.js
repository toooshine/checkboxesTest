import React, {useState} from 'react';
import CheckBox from './Checkbox';
import './App.css';

function App() {

  //Case defintions
  const [items, SetItems] = useState([
    ['Select all', false],
    ['Item 1', false],
    ['Item 2', false],
    ['Item 3', false],
    ['Item 4', false]
  ]);

  const checkBoxSelectedFunction = selectedItem => {

    //Handle selection
    const selectedItemIndex = items.findIndex(elmt=> elmt === selectedItem);

    let selectedItemValue = selectedItem[1];
    let tempItems = [...items];
    let counter=0;

    //Case all Selected
    if(selectedItem[0] === 'Select all'){
      items.map(element => element[selectedItem.length-1]=!selectedItemValue);
      SetItems(tempItems);

      // console.log(items); //=> control value

      // Case handle conditional selection

    }else if (selectedItem[0] !== 'Select all'){
      let allItemsSelected = false;
      tempItems[selectedItemIndex][1]= !selectedItemValue;
      tempItems[0][1]= false;
      SetItems(tempItems);

      //console.log(items); //=> control value

      items.map(element=> element[1] ? counter++ : null );

      // Items (items.length-1) => reduce 1 because of select all items option

      if(counter === (items.length-1) && !items[0][1]){
        tempItems.map(element => element[selectedItem.length-1]= !allItemsSelected);
      }
    }
  };

    //Handle UI cases
  const createCheckboxes = items.map((item,i) => {
  return (<CheckBox item={item} key={i} handleClickParent={ () => checkBoxSelectedFunction(item)}  />)
  })
  
  return (
    <div className="App">
      <h1>CheckBox</h1>
      <form>
        {createCheckboxes}
      </form>
    </div>
  );
}

export default App;