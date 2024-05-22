import { Typography, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import me from '../../assets/me.png'
import { ThemeContext } from '../../themeProvider'
import './index.css'
import Divider from '../Divider'
import { palette, primaryCol } from '../theme'

function About() {
  const { lightTheme } = useTheme(ThemeContext)
  const theme = palette(!lightTheme)

  return (
    <div id="about" className={"root"} style={{ backgroundColor: theme.background1Col }}>
      <Grid
        container
        alignItems='center'
        direction='column'
        style={{ backgroundColor: theme.background2Col, width: '100%' }}
      >
        <Typography variant='h4' style={{ color: theme.fontCol }}>About</Typography>
        <Divider color={primaryCol} />
        <img
          src={me}
          alt='me'
          class="responsive-image"
        />
        <Divider color={theme.fontCol} />
        <Typography
          style={{
            padding: '20px',
            width: '50%',
            textAlign: 'center',
          }}
        >
          Hi, I'm <b style={{ color: primaryCol }}>Lee</b>! I am a full
          stack Engineer with a passion for all things IT related!
          These include AI, web & app development.
          Computer hardware with interests in data science and lots more.
        </Typography>
      </Grid>
    </div>
  )
}

export default About