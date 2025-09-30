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
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "../config/navLinks";
import { colors } from "../config/theme";
import { LINKS } from "../config/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" sx={{
  bgcolor: colors.background.navTransparent,
  backdropFilter: "blur(6px)",
  color: colors.cyan,
  boxShadow: `0 0 10px ${colors.cyan}33`,
  borderBottom: `1px solid ${colors.cyan}33`,
}}>

        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left side: menu and name */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Mobile hamburger menu */}
            <IconButton
              edge="start"
              onClick={toggle}
              sx={{
                color: "inherit",
                display: { xs: "block", md: "none" }
              }}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" sx={{ fontFamily: 'Orbitron, sans-serif' }}>
              Keshav Goel
            </Typography>

            {/* Desktop horizontal navigation */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, ml: 2 }}>
              {navLinks.map(({ label, to }) => (
                <Button
                  key={to}
                  component={RouterLink}
                  to={to}
                  sx={{
                    color: location.pathname === to ? colors.primary : colors.text.primary,
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: "0.9rem",
                    position: "relative",
                    textTransform: "none",
                    px: 2,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: location.pathname === to ? "80%" : "0%",
                      height: 2,
                      bgcolor: colors.cyan,
                      transition: "width 0.3s ease",
                    },
                    "&:hover": {
                      bgcolor: "transparent",
                      color: colors.cyan,
                      "&::after": {
                        width: "80%",
                      },
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Right side: social icons */}
          <Box>
            <IconButton
              component="a"
              href={LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              sx={{
                color: "inherit",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)",
                  filter: `drop-shadow(0 0 8px ${colors.cyan})`,
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component="a"
              href={LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              sx={{
                color: "inherit",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)",
                  filter: `drop-shadow(0 0 8px ${colors.cyan})`,
                },
              }}
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
        PaperProps={{ sx: { bgcolor: colors.background.nav, color: colors.cyan } }}
      >
        <Box role="presentation" sx={{ width: 240 }} onClick={toggle}>
          <List disablePadding>
            {navLinks.map(({ label, to }) => (
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
        bgcolor: colors.cyan,
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
