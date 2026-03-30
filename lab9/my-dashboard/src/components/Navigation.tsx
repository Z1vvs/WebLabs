import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => setOpen(true)}
            color="inherit"
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <Toolbar />
          <List>
            <ListItemButton onClick={() => setOpen(false)}>
              <DashboardIcon sx={{ mr: 1 }} />
              <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton onClick={() => setSettingsOpen(!settingsOpen)}>
              <SettingsIcon sx={{ mr: 1 }} />
              <ListItemText primary="Settings" />
            </ListItemButton>

            <Collapse in={settingsOpen}>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Account" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
