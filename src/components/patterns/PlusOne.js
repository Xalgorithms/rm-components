import React, { useState, useEffect } from 'react';
import {
  Box,
	Button,
  Text,
  InvolvedParty,
} from '../';

function PlusOne() {


  const numbers = [1];
  const [count, setCount] = useState(1);

  const plus = () => {
    setCount(count + 1);
    console.log(count);
  }

  const check = () => {
    numbers.push(count);
    console.log(numbers);
    listComp();
    //console.log(numbers);
  }


  const listComp = () => {
    return numbers.map((index) =>
      <li key={index}>:)</li>
    );
  }

  useEffect(() => {
  // Update the document title using the browser API
    document.title = `You clicked ${listComp()} times.`;
  });



  return(
    <Box>
      <Text id="morebox">
        You clicked {listComp()} times.
      </Text>
      <Button onClick={plus, check}>
       Click me
     </Button>
   </Box>

  );
}

export default PlusOne;
