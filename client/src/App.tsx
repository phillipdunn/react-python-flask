import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EnhancedTable from './components/Table/Table';

export interface Data {
  message_id: number;
  timestamp: string;
  credits_used: number;
  report_name?: string;
}

function App() {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        setData(data.usage)
      });
  }, []);

  console.log(data);
  return (
    <Box><EnhancedTable rows={data} /></Box>
  );
}

export default App;
