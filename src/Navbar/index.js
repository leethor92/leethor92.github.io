import { AppBar, Toolbar, Link, IconButton } from '@mui/material'
import { InfoRounded, Home, Email, Engineering } from '@mui/icons-material'
import { styled } from "@mui/system"

const StyledAppBar = styled(AppBar)({
  transition: 'background-color 0.5s ease-in-out'
})

export default function Navbar() {
  return (
    <div>
      <StyledAppBar
        elevation={5}
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
        </StyledAppBar>
    </div>
  ) 
}
