import { Box, Button, Skeleton, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

import { BarChart } from '@mui/x-charts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { copyToClipboard, dataCleaner } from '../../helpers';
import EnhancedTable from '../Table/Table';
export interface Data {
  message_id: number;
  timestamp: string;
  credits_used: number;
  report_name?: string;
}

interface Props { }

const DashBoard: FC<Props> = () => {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    fetch('/usage')
      .then((res) => res.json())
      .then((data) => {
        setData(data.usage)
      });
  }, []);

  const notify = () => toast("Link to dashboard copied to clipboard");
  return (
    < Box sx={{ m: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4" sx={{ pb: 3, }}>Credit Usage Dashboard
        </Typography>
        <Box>
          <Button variant='outlined' onClick={() => copyToClipboard(window.location.href, notify)}>Share Dashboard</Button></Box>
      </Box>
      <ToastContainer />
      {data.length === 0 ?
        <>
          <Skeleton variant="rectangular" width={1800} height={500} />
          <Skeleton variant="rectangular" width={1800} height={400} sx={{ mt: 4 }} />
        </> : <>
          <Box sx={{ py: 3 }}>
            <BarChart
              xAxis={[{ scaleType: 'band', dataKey: 'timestamp' }]}
              series={[{ label: 'Credit usage', dataKey: 'creditsUsed' }]}
              dataset={dataCleaner(data)}
              width={1800}
              height={500}
              grid={{ horizontal: true }}
              borderRadius={8} />
          </Box>
          <EnhancedTable rows={data} /></>
      }
    </Box>
  );
};

export default DashBoard;
