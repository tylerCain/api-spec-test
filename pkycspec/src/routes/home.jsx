import { ButtonGroup, Button, Box, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const chButtons = [
    <Button key="one" onClick={() => navigate('/spec1')}>One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ]
  
  const ldcButtons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];

  return (
    <Container sx={{ display: 'flex', padding: 10 }}>
      <Box
          sx={{
            display: 'flex',
            '& > *': {
              m: 1,
            },
          }}
        >
          <Typography>Companies House</Typography>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
          >
            {chButtons}
          </ButtonGroup>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="contained"
          >
            {ldcButtons}
          </ButtonGroup>
        </Box>
      </Container>
    )
}

export default Home
