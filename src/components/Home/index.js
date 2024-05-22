import avatar from '../../assets/avatar.png'
import cover from '../../assets/cover.png'
import { styled } from "@mui/system"
import { Typography, Grid } from '@mui/material'

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundImage: `url(${cover})`, // Use backticks for string interpolation
  backgroundSize: 'cover',
  paddingTop: '60px',
})

const Heading = styled(Typography)({
  fontFamily: 'Raleway',
  color: 'white',
  paddingTop: '20px',
})

const Subtitle = styled(Typography)({
  fontFamily: 'Raleway',
  color: 'white',
  fontSize: '18px',
  textAlign: 'center',
})
export default function Home() {
    return (
      <div id='home'>
        <StyledGrid justify='center' alignItems='center'>
          <img 
            src={avatar}
            alt='avatar'
          />
          <Heading variant='h2'>
            Lee Thornton
          </Heading>
          <Subtitle variant='subtitle1'>
            Full Stack Engineer & Technology Enthusiast
          </Subtitle>
        </StyledGrid>
      </div>
    )
}