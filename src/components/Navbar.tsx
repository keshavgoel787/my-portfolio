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
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);

  const location = useLocation();

  const cyan = "#66eaff";
  const bg = "#212121";

  // External links
  const externalLinks = {
    experience: "https://www.linkedin.com/in/keshavgoel",
    projects: "https://github.com/keshavgoel",
  };

  const links = [
    { label: "Home", to: "/", external: false },
    { label: "About", to: "/about", external: false },
    { label: "Linkedin", to: externalLinks.experience, external: true },
    { label: "Github", to: externalLinks.projects, external: true },
    { label: "Resume", to: "/resume", external: false },
  ];

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: bg, color: cyan, boxShadow: "none" }}>
        <Toolbar>
          <IconButton edge="start" onClick={toggle} sx={{ color: "inherit" }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 1 }}>
            Keshav Goel
          </Typography>
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
            {links.map(({ label, to, external }) => (
              <ListItemButton
                key={label}
                component={external ? "a" : RouterLink}
                to={external ? undefined : to}
                href={external ? to : undefined}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                selected={!external && location.pathname === to}
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
