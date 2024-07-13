import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      });
  }, []);

  console.log(data);
  return (
    <Box>App here</Box>
  );
}

export default App;
