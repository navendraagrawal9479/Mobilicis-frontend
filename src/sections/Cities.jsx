import React from 'react'
import { CITIES_API } from '../endpoints'
import TableComponent from '../components/Table';
import { Box, Paper, Typography } from '@mui/material';

const Cities = () => {
  const columns = [
    {
      id: '_id',
      label: 'City'
    },
    {
      id: 'count',
      label: 'Number of Users'
    },
    {
      id: 'avgSalary',
      label: 'Average Salary (in $)'
    }
  ]

  const reqBody = {}

  return (
    <Box
      sx={{
        width: '90%',
        margin: '2rem auto'
      }}
    > 
      <Typography
        sx= {{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          fontFamily: "'Source Sans 3', sans-serif",
          margin: '1rem auto'
        }}
      >
        5. Show the data of top 10 cities which have the highest number of users and their average income.
      </Typography>
      <Paper elevation={3}>
        <TableComponent
          reqBody={reqBody}
          columns={columns}
          endPoint={CITIES_API}
        />
      </Paper>
    </Box>
  )
}

export default Cities