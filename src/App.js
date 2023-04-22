import { Box, Typography } from "@mui/material";
import GenderPhone from "./sections/GenderPhone";
import IncomeCar from "./sections/IncomeCar";
import NameEmail from "./sections/NameEmail";
import CarEmail from "./sections/CarEmail";
import Cities from "./sections/Cities";

function App() {
  return (
    <Box>
      <Box
        sx={{
          width: '90%',
          textAlign: 'center',
          margin: '1rem auto'
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
          Mobilicis Assignment - Navendra Agrawal
        </Typography>
        <Typography
          sx= {{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            fontFamily: "'Source Sans 3', sans-serif",
          }}
        >
          "" The App will load for 1-2 minutes for the very first time because the backend is deployed on an UNPAID server so it turns off after avery 15 minutes of inactivity. Once the server starts, then it will fetch the data quickly. ""
        </Typography>
      </Box>
      <IncomeCar />
      <GenderPhone />
      <NameEmail />
      <CarEmail />
      <Cities />
    </Box>
  );
}

export default App;
