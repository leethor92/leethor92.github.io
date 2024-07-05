import React, { useContext } from 'react'
import {
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import { primaryCol, palette } from '../theme'
import Divider from '../Divider'
import './index.css'
import { ThemeContext } from '../../themeProvider'

const frontend = [
  'React',
  'Angular',
  'Redux & Recoil',
  'JavaScript',
  'HTML/CSS',
  'Material UI & Semantic UI',
]

const backend = [
  'Ruby On Rails',
  '.Net',
  'C#',
  'Java & Kotlin',
  'NodeJS',
  'MongoDB',
  'MySQL & PostgreSQL',
]

const tech = ['Docker', 'Kubernetes', 'Git', 'Selenium', 'AWS']

export default function Skills() {
  const { lightTheme } = useContext(ThemeContext)
  const theme = palette(lightTheme)

  return (
    <div
      id='skills'
      className="root"
      style={{ backgroundColor: theme.background2Col }}
    >
      <Typography variant='h4' style={{ color: theme.fontCol }}>
        Skills
      </Typography>

      <Divider color={primaryCol} />

      <Typography
        style={{
          color: theme.fontCol,
          padding: '20px',
          width: '50%',
          textAlign: 'center',
        }}
      >
        Here are some of the languages and tools I have picked up along
        the way!
      </Typography>

      <Divider color={theme.fontCol} />

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={6}
        style={{ marginTop: '30px', marginBottom: '10px', width: '100%' }}
      >
        <Grid item>
          <Paper
            elevation={3}
            className="card"
            style={{ backgroundColor: theme.cardCol, color: theme.fontCol }}
          >
            <div style={{ width: '100%', textAlign: 'center' }}>
              <img
                className="img"
                alt='frontend'
                src={require('../../assets/frontEnd.png')}
              />
            </div>
            <Typography variant='h5'>Frontend</Typography>

            <Divider color={theme.fontCol} />

            <List>
              {frontend.map((item, index) => (
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
          </Paper>
        </Grid>

        <Grid item>
          <Paper
            elevation={3}
            className="card"
            style={{ backgroundColor: theme.cardCol, color: theme.fontCol }}
          >
            <div style={{ width: '100%', textAlign: 'center' }}>
              <img
                className="img"
                alt='backend'
                src={require('../../assets/backEnd.png')}
              />
            </div>
            <Typography variant='h5'>Backend</Typography>

            <Divider color={theme.fontCol} />

            <List>
              {backend.map((item, index) => (
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
          </Paper>
        </Grid>

        <Grid item>
          <Paper
            elevation={3}
            className="card"
            style={{ backgroundColor: theme.cardCol, color: theme.fontCol }}
          >
            <div style={{ width: '100%', textAlign: 'center' }}>
              <img
                className="img"
                alt='tech'
                src={require('../../assets/tools.png')}
              />
            </div>
            <Typography variant='h5'>Other Tech</Typography>

            <Divider color={theme.fontCol} />

            <List>
              {tech.map((item, index) => (
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
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}