import { Typography, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ThemeContext } from '../../themeProvider'
import Divider from '../Divider'
import {palette, primaryCol } from '../theme'

function About() {
  const { lightTheme } = useTheme(ThemeContext)
  const theme = palette(!lightTheme)

  return (
    <div className="about" style={{ backgroundColor: theme.background1Col }}>
      <Grid
        container
        alignItems='center'
        direction='column'
        style={{ backgroundColor: theme.background2Col, width: '100%' }}
      >
        <Typography variant='h4' style={{ color: theme.fontCol }}>About</Typography>
        <Divider color={primaryCol} />
        <Typography
          style={{
            padding: '20px',
            width: '50%',
            textAlign: 'center',
          }}
        >
          Hi, I'm <b style={{ color: primaryCol }}>Lee</b>! I am a full
          stack Engineer with a passion for all things IT related!
          These include AI, web & app development, computer hardware with
          interests in data science and lots more.
        </Typography>
        <Divider color={primaryCol} />
      </Grid>
    </div>
  )
}

export default About