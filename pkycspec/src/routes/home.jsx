import { ButtonGroup, Button, Box, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const chButtons = [
    <Button key="one" onClick={() => navigate('/spec1')}>Api-spec-example-ch-1</Button>,
    <Button key="two">Api-spec-example-ch-2</Button>,
    <Button key="three">Api-spec-example-ch-3</Button>,
  ]
  
  const ldcButtons = [
    <Button key="one">Api-spec-example-LDC-1</Button>,
    <Button key="two">Api-spec-example-LDC-2</Button>,
    <Button key="three">Api-spec-example-LDC-3</Button>,
  ];

  const procButtons = [
    <Button key="one">Api-spec-example-proc-1</Button>,
    <Button key="two">Api-spec-example-proc-2</Button>,
    <Button key="three">Api-spec-example-proc-3</Button>,
  ];

  return (
    <Container sx={{ display: 'flex', pt: '50px' }}>
      <Box sx={{pr: '50px', pl: '170px'}}>
        <Typography>Companies House</Typography>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="contained"
        >
          {chButtons}
        </ButtonGroup>
      </Box>
      <Box sx={{pr: '50px'}}>
        <Typography>LDC</Typography>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="contained"
        >
          {ldcButtons}
        </ButtonGroup>
      </Box>
      <Box>
        <Typography>Process</Typography>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="contained"
        >
          {procButtons}
        </ButtonGroup>
      </Box>
    </Container>
    )
}

export default Home
