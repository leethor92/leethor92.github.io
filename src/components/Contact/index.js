
import React, { useContext } from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { Description } from '@mui/icons-material'
import { ThemeContext } from '../../themeProvider'
import cover from '../../assets/cover.png'
import { primaryCol, palette } from '../theme'
import './index.css'
import Divider from '../Divider'

export default function Contact() {
  const { lightTheme } = useContext(ThemeContext)
  const theme = palette(!lightTheme)

  return (
    <div
      id='contact'
      className="root"
      style={{ backgroundColor: theme.background1Col }}
    >
      <Grid
        container
        direction='column'
        xs={12}
        alignItems='center'
        style={{ width: '100%' }}
      >
        <Typography variant='h4' style={{ color: theme.fontCol }}>
          Contact
        </Typography>

        <Divider color={primaryCol} />
      </Grid>

      <Typography
        style={{
          color: theme.fontCol,
          padding: '20px',
          width: '50%',
          textAlign: 'center',
        }}
      >
        Want to see more or get in touch? Feel free to check out any of the
        below sites!
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={12}
        style={{ padding: '120px', backgroundImage: 'url(' + cover + ')' }}
        className="contactContainer"
      >
        <a
          href='https://www.linkedin.com/in/leethorntonirl/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            width={200}
            height={200}
            src={require('../../assets/linkedin.png')}
            alt={'linkedin'}
          />
        </a>
        <a
          href='https://github.com/leethor92'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            width={200}
            height={200}
            src={require('../../assets/github.png')}
            alt={'github'}
          />
        </a>
        <a
          href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=leethornton1992@hotmail.com&tf=1'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img
            width={200}
            height={200}
            src={require('../../assets/outlook.png')}
            alt={'outlook'}
          />
        </a>
      </Grid>

      <Divider color={theme.fontCol} />

      <div
        style={{
          display: 'flex',
          flex: '1 0 auto',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h5'
          style={{ display: 'flex', color: theme.fontCol }}
        >
          <Description
            fontSize='large'
            style={{
              color: primaryCol,
              paddingRight: '10px',
            }}
          />
          Request A CV
        </Typography>
        <Typography
          style={{
            color: theme.fontCol,
            padding: '20px',
            width: '55%',
            textAlign: 'center',
          }}
        >
          If you'd like a CV, please get in contact with via LinkedIn or Email
          and I will send one upon request!
        </Typography>
        <Button
          variant='outlined'
          href='mailto:leethornton1992@hotmail.com'
          rel='noopener noreferrer'
          target='_blank'
          style={{ color: theme.fontCol }}
          className="contactButton"
        >
          Send an Email
        </Button>
        <br />
        <br />
      </div>
    </div>
  )
}