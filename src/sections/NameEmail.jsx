import React from 'react'
import { NAME_EMAIL_API } from '../endpoints'
import TableComponent from '../components/Table';
import { Box, Paper, Typography } from '@mui/material';

const NameEmail = () => {
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
      id: 'quote',
      label: 'Quote'
    }
  ]

  const reqBody = {
    startsWith: 'M',
    quoteLength: 15
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
        3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
      </Typography>
      <Paper elevation={3}>
        <TableComponent
          reqBody={reqBody}
          columns={columns}
          endPoint={NAME_EMAIL_API}
        />
      </Paper>
    </Box>
  )
}

export default NameEmail