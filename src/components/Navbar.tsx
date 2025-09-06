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
  ];

  const cyan = "#66eaff";
  const bg = "#212121";

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: bg, color: cyan, boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left side: menu and name */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton edge="start" onClick={toggle} sx={{ color: "inherit" }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ml: 1 }}>
              Keshav Goel
            </Typography>
          </Box>

          {/* Right side: social icons */}
          <Box>
            <IconButton
              component="a"
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "inherit" }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com/in/your-linkedin-id"
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
                  primaryTypographyProps={{ sx: { fontWeight: 500 } }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
