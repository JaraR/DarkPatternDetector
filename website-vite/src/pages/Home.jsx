import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";

import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import PatternCard from "../components/PatternCard";
import TeamList from "../components/TeamList";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HomeIcon from "@mui/icons-material/Home";
import Project from "../components/Project";
const NAVIGATION = [
  {
    segment: "dark-patterns",
    title: "Dark Patterns On Social Media",
    icon: <HomeIcon />,
  },
  {
    segment: "project",
    title: "Project and Report",
    icon: <EditNoteIcon />,
  },
  {
    segment: "team",
    title: "Our Team",
    icon: <GroupWorkIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexWrap: "wrap",

        alignItems: "center",
        textAlign: "center",
        gap: 2,
        mt: 2,
      }}
    >
      {/* <Typography>Dashboard content for {pathname}</Typography> */}
      {/* {pathname === "/home" && <Header />} */}
      {pathname === "/dark-patterns" && <PatternCard />}
      {pathname === "/team" && <TeamList />}
      {pathname === "/project" && <Project />}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
  activeSegment: PropTypes.string.isRequired,
};

function Home(props) {
  const { window } = props;

  const router = useDemoRouter("/dark-patterns");

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION.map((nav) => ({
        ...nav,
      }))}
      branding={{
        title: "X-Factors",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Home;
