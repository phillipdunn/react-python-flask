import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EnhancedTable from './components/Table/Table';
import { BarChart } from '@mui/x-charts';
import { dataCleaner } from './helpers';

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
    < Box sx={{ m: 3 }}>
      <Typography variant="h4" sx={{ pb: 3, }}>Credit Usage Dashboard
      </Typography>
      <Box sx={{ py: 3 }}>
        <BarChart
          xAxis={[{ scaleType: 'band', dataKey: 'timestamp' }]}
          series={[{ label: 'Credit usage', dataKey: 'creditsUsed' }]}
          dataset={dataCleaner(data)}
          width={1800}
          height={400}
          grid={{ horizontal: true }}
          borderRadius={10} />
      </Box>
      <EnhancedTable rows={data} />
    </Box>
  );
}

export default App;
