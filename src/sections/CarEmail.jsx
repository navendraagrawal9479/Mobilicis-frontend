import React from 'react'
import { CAR_EMAIL_API } from '../endpoints'
import TableComponent from '../components/Table';
import { Box, Paper, Typography } from '@mui/material';

const CarEmail = () => {
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
      label: 'gender'
    },
    {
      id: 'car',
      label: 'Car'
    },
    {
      id: 'income',
      label: 'Income (in $)'
    }
  ]

  const reqBody = {
    car: ['BMW', 'Mercedes', 'Audi']
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
        4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
      </Typography>
      <Paper elevation={3}>
        <TableComponent
          reqBody={reqBody}
          columns={columns}
          endPoint={CAR_EMAIL_API}
        />
      </Paper>
    </Box>
  )
}

export default CarEmail