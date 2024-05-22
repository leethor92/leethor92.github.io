import { Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { School, ArrowForward, Work } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { styled } from '@mui/system'
import me from '../../assets/me.png'
import { ThemeContext } from '../../themeProvider'
import './index.css'
import Divider from '../Divider'
import { palette, primaryCol } from '../theme'

const kargo = [
  'Creating software to help advertisers scale full-funnel performance marketing campaigns on Facebook, Instagram, Pinterest, SnapChat & TikTok',
  'Working within the creative team, building a Photoshop-like and After Effects tools to allow users to create and publish image & video creatives at large volumes',
  'Full-stack engineer, working with tech such as React, Node, Ruby On Rails, Postgres, Heroku and AWS'
]

const cgm = [
  'x',
  'x',
  'x',
]

const ItalicHeader = styled(Typography)({
  padding: '20px',
  width: '70%',
  textAlign: 'center',
  fontSize: '18px',
})

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
        <ItalicHeader
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
        </ItalicHeader>
        <Typography
          variant='h5'
          style={{ color: theme.fontCol, display: 'flex' }}
        >
          <Work
            fontSize='large'
            style={{
              color: primaryCol,
              paddingRight: '10px',
            }}
          />
          Experience
        </Typography>

        <ItalicHeader
          style={{
            color: theme.fontCol,
          }}
        >
          <i style={{ fontFamily: 'Raleway' }}>
            Kargo, Sofware Engineer - May 2021 to Present
          </i>

          <Divider color={theme.fontCol} />

          <Grid
            container
            direction='row'
            justify='center'
            alignContent='center'
            alignItems='center'
          >
            <Grid item sm={9}>
              <List>
                {kargo.map((item, index) => (
                  <ListItem>
                    <ListItemIcon>
                      <ArrowForward
                        fontSize='small'
                        style={{ color: primaryCol }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item sm={3}>
              <img
                src={require('../../assets/kargo.png')}
                alt='distilled'
                className="roundImage"
              />
            </Grid>
          </Grid>
        </ItalicHeader>

        <ItalicHeader
          style={{
            color: theme.fontCol,
          }}
        >
          <i style={{ fontFamily: 'Raleway' }}>
            CGM, Sofware Engineer - May 2019 to May 2021
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
                src={require('../../assets/cgm.jpeg')}
                alt='reliaquest'
                className="roundImage"
              />
            </Grid>
            <Grid item sm={9}>
              <List>
                {cgm.map((item, index) => (
                  <ListItem>
                    <ListItemIcon>
                      <ArrowForward
                        fontSize='small'
                        style={{ color: primaryCol }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </ItalicHeader>
      </Grid>
    </div>
  )
}

export default About