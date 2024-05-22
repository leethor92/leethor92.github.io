import { Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { School, ArrowForward } from '@mui/icons-material'
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
    <div id="about" className="root" style={{ backgroundColor: theme.background1Col }}>
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
      <Grid
        container
        direction='column'
        xs={12}
        alignItems='center'
        style={{ width: '70%', marginTop: '20px' }}
      >
        <Typography
          variant='h5'
          style={{ color: theme.fontCol, display: 'flex' }}
        >
          <School
            fontSize='large'
            style={{
              color: primaryCol,
              paddingRight: '10px',
            }}
          />
          Education
        </Typography>
        <Typography
          className="italicHeader"
          style={{
            color: theme.fontCol,
          }}
        >
          <i style={{ fontFamily: 'Raleway' }}>
            South East Technological University, Computer Science
          </i>

          <Divider color={theme.fontCol} />

          <Grid
            container
            direction='row'
            justify='center'
            alignContent='center'
            alignItems='center'
          >
            <Grid item sm={3}>
              <img
                src={require('../../assets/setu.png')}
                alt='setu'
                className="roundImage"
              />
            </Grid>
            <Grid item sm={9}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <ArrowForward
                      fontSize='large'
                      style={{ color: primaryCol }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      'I attended South East Technological University, studying Computer Science (level 8) - where I graduated with first class honors.'
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Typography>
      </Grid>
    </div>
  )
}

export default About