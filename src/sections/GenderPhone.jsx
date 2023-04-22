import React from 'react'
import { GENDER_PHONE_API } from '../endpoints'
import TableComponent from '../components/Table';
import { Box, Paper, Typography } from '@mui/material';

const GenderPhone = () => {
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
      id: 'gender',
      label: 'Income (in $)'
    },
    {
      id: 'phone_price',
      label: 'Phone Price'
    },
    {
      id: 'car',
      label: 'Car'
    }
  ]

  const reqBody = {
    gender: 'Male',
    phone_price: 10000
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
        2. Male Users which have phone price greater than 10,000.
      </Typography>
      <Paper elevation={3}>
        <TableComponent
          reqBody={reqBody}
          columns={columns}
          endPoint={GENDER_PHONE_API}
        />
      </Paper>
    </Box>
  )
}

export default GenderPhone