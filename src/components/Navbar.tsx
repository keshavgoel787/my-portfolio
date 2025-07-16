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

  const location = useLocation(); // to highlight current page

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Experience", to: "/experience" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  const cyan = "#66eaff";
  const bg   = "#212121";

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

      {/* Drawer styling */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggle}
        PaperProps={{ sx: { bgcolor: bg, color: cyan } }}   /* <-- colors */
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
                    bgcolor: "#333",          // highlight current page
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
