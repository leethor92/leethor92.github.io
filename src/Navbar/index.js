import './style.css'
import { AppBar, Toolbar, Link, IconButton } from '@mui/material'
import { InfoRounded, Home, Email, Engineering } from '@mui/icons-material'

export default function Navbar() {

  return (
    <div>
      <AppBar
        classes="nav_bar"
        position="static"
        color="default"
      >
        <Toolbar>
          <Link href="/" underline="none" label="Home">
          <IconButton>
            <Home />
          </IconButton>
          </Link>
          <Link label="About">
            <IconButton>
              <InfoRounded />
            </IconButton>
          </Link>
          <Link label="Skills" icon={<Engineering />}>
            <IconButton>
              <Engineering />
            </IconButton>
          </Link>
          <Link label="Contact" icon={<Email />}>
            <IconButton>
              <Email />
            </IconButton>
          </Link>
        </Toolbar>
        </AppBar>
    </div>
  ) 
}
