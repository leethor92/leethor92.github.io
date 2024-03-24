import { AppBar, Toolbar, Link, IconButton } from '@mui/material'
import { InfoRounded, Home, Email, Engineering } from '@mui/icons-material'
import { styled } from "@mui/system"

const useStyles = styled({
  root: {
    justify: 'center',
    alignItems: 'center',
  }
})

export default function Navbar() {
  const classes = useStyles({})
  return (
    <div>
      <AppBar
        classes={classes.root}
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
