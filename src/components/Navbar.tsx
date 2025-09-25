import {
  AppBar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);

  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Experiences", to: "/experience"},
    { label: "Projects", to: "/projects"},
  ];

  const cyan = "#66eaff";
  const bg = "#212121";

  return (
    <>
      <AppBar position="fixed" sx={{
  bgcolor: "rgba(33, 33, 33, 0.8)",
  backdropFilter: "blur(6px)",
  color: cyan,
  boxShadow: "0 0 10px #66eaff33",
  borderBottom: "1px solid #66eaff33",
}}>

        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left side: menu and name */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton edge="start" onClick={toggle} sx={{ color: "inherit" }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ml: 1, fontFamily: 'Orbitron, sans-serif' }}>
  Keshav Goel
</Typography>

          </Box>

          {/* Right side: social icons */}
          <Box>
            <IconButton
              component="a"
              href="https://github.com/keshavgoel787"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "inherit" }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com/in/goel-keshav/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "inherit" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggle}
        PaperProps={{ sx: { bgcolor: bg, color: cyan } }}
      >
        <Box role="presentation" sx={{ width: 240 }} onClick={toggle}>
          <List disablePadding>
            {links.map(({ label, to }) => (
              <ListItemButton
                key={to}
                component={RouterLink}
                to={to}
                selected={location.pathname === to}
                sx={{
                  mx: 1,
                  borderRadius: 1,
                  "&.Mui-selected": {
                    bgcolor: "#333",
                  },
                  "&:hover": {
                    bgcolor: "#2a2a2a",
                  },
                }}
              >
<ListItemText
  primary={label}
  primaryTypographyProps={{
    sx: {
      fontFamily: 'Orbitron, sans-serif',
      position: 'relative',
      display: 'inline-block',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 2,
        left: 0,
        width: 0,
        height: 2,
        bgcolor: '#66eaff',
        transition: 'width 0.3s ease-in-out',
      },
      '&:hover::after': {
        width: '100%',
      }
    }
  }}
/>

              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
