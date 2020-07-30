import React, { useState, useEffect } from 'react';
import { Box, Button, Text, InvolvedParty } from '..';

function PlusOne() {
  const [count, setCount] = useState(0);
  const message = `You clicked ${count} times.`;

  const plus = () => {
    setCount(count + 1);
    console.log(count);
  };

  useEffect(() => {
    // Update the document title using the browser API
    document.title = message;
  });

  return (
    <Box>
      <Text id="morebox">{message}</Text>
      <Button onClick={plus}>Click me</Button>
    </Box>
  );
}

export default PlusOne;
