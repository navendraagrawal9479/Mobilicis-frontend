import React from 'react'
import { INCOME_CAR_API } from '../endpoints'
import TableComponent from '../components/Table';
import { Box, Paper, Typography } from '@mui/material';

const IncomeCar = () => {
  const columns = [
    {
      id: 'first_name',
      label: 'First Name'
    },
    {
      id: 'last_name',
      label: 'Last Name'
    },
    {
      id: 'email',
      label: 'Email ID'
    },
    {
      id: 'income',
      label: 'Income (in $)'
    },
    {
      id: 'car',
      label: 'Car'
    }
  ]

  const reqBody = {
    income: 5,
    car: ['BMW', 'Mercedes']
  }

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
        1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
      </Typography>
      <Paper elevation={3}>
        <TableComponent
          reqBody={reqBody}
          columns={columns}
          endPoint={INCOME_CAR_API}
        />
      </Paper>
    </Box>
  )
}

export default IncomeCar