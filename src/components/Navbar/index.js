import { useState } from 'react'
import { AppBar, Toolbar, List, ListItemIcon, ListItem, Grid } from '@mui/material'
import './index.css'
import { Link } from 'react-scroll'
import { InfoRounded, Home, Email, Engineering } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { styled } from '@mui/system'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeContext } from '../../themeProvider'
import { primaryCol } from '../theme'



const history = createBrowserHistory()
const StyledAppBar = styled(AppBar)({
  transition: 'background-color 0.5s ease-in-out'
})

const StyledIcon = styled(ListItemIcon)({
  color: '#f8f9fa',
  '&:hover': {
    color: primaryCol,
  }
})

const StyledList = styled(List)({
  display: 'flex',
  flexDirection: 'row',
  textTransform: 'uppercase',
})

export default function Navbar() {
  const { lightTheme } = useTheme(ThemeContext)
  const [activeLink, setActiveLink] = useState('home')
  const handleState = (to) => {
    if (to === 'home') {
      setActiveLink(true)
      history.push('/')
    } else {
      setActiveLink(false)
      history.push(`/${to}`)
    }
  }

  return (
    <StyledAppBar
      elevation={0}
      style={{
        backgroundColor: activeLink
        ? 'transparent'
        : lightTheme
        ? '#e3e3e3'
        : 'rgba(0,0,0,0.8)',
      }}
    >
      <Grid xs={9} container justify='flex-end' item alignItems='center'>
        <Toolbar>
          <BrowserRouter history={history}>
            <StyledList
              component='nav'
              style={{
                color: 'white',
              }}
            >
              <Link
                spy={true}
                smooth={true}
                activeClass="active-link"
                onSetActive={handleState}
                to='home'
                duration={500}
              >
                <ListItem button style={{ borderRadius: 10 }}>
                  <StyledIcon>
                    <Home />
                </StyledIcon>
                </ListItem>
              </Link>
              <Link
                label="About"
                activeClass="active-link"
                onSetActive={handleState}
                spy={true}
                smooth={true}
                to='about'
                duration={500}
              >
                <ListItem button style={{ borderRadius: 25 }}>
                  <StyledIcon>
                    <InfoRounded />
                  </StyledIcon>
                </ListItem>
              </Link>
              <Link
                activeClass="active-link"
                onSetActive={handleState}
                spy={true}
                smooth={true}
                to='skills'
                duration={500}
              >
                <ListItem button style={{ borderRadius: 25 }}>
                  <StyledIcon>
                    <Engineering />
                  </StyledIcon>
                </ListItem>
              </Link>
              <Link
                activeClass="active-link"
                onSetActive={handleState}
                spy={true}
                smooth={true}
                to='contact'
                duration={500}
              >
                <ListItem button style={{ borderRadius: 25 }}>
                  <StyledIcon>
                    <Email />
                  </StyledIcon>
                </ListItem>
              </Link>
            </StyledList>
          </BrowserRouter>
        </Toolbar>
      </Grid>
    </StyledAppBar>
  ) 
}
