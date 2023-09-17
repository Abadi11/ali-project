import { useState } from "react";
import logo from "../asset/logo.jpg"
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Link } from "react-router-dom";



import "./Home.css";
import { contents } from "../constants/contents";

const Home = () => {
  const [ tabValue, setTabValue ] = useState(0)

  const tabHandleChange = (event, newValue) => {
    console.log(newValue)
    setTabValue(newValue);
  }
  return (
    <div className="App">
      <TabContext value={tabValue}>
        <header className="App-header">
          <dev className="logo-container">
            <img src={logo} alt="logo" width="50rem" height="50rem" />
            <Link
              className="App-link"
              to="/"
              // target="_blank"
              onClick={() => setTabValue(0)}
            >
              AMS APEX
            </Link>
          </dev>
          {/*  Menu sid bar*/}
          {/* 

        import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { contents } from "../constants/contents";
import { styled, useTheme } from "@mui/material/styles";
        const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
        <dev>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            // edge="start"
            // sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer variant="persistent" anchor="right" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                <ChevronRightIcon />
              </IconButton>
            </DrawerHeader>
            {contents.map((content, index) => (
              <ListItem key={`${content}-${index}`}>
                <ListItemButton>
                  <Link to={content.to} className="App-link">
                    <ListItemText primary={content.name} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </Drawer>
        </dev>
        */}
          <div>
            <div>
              <TabList onChange={tabHandleChange} aria-label="tab-changeable">
                {contents.map((content, index) => (
                  <Tab
                    key={`${content.name}-tab`}
                    label={content.name}
                    value={index}
                  />
                ))}
              </TabList>
            </div>
          </div>
        </header>
        <body className="body">
          <div>
            {contents.map((content, index) => (
              <TabPanel key={`${content.name}-tab-panel`} value={index}>
                {content.component}
              </TabPanel>
            ))}
          </div>
        </body>
      </TabContext>
    </div>
  );
}

export default Home;
