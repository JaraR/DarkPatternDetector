import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import Installation from "./DashboardPage/InstallationPage";
import TeamList from "./DashboardPage/TeamListPage";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HomeIcon from "@mui/icons-material/Home";
import Project from "./DashboardPage/ProjectPage/ProjectPageBase";
import logo from "../assets/badgeicon-transparrent.png";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import Blog from "./DashboardPage/BlogPage";

const NAVIGATION = [
  {
    segment: "installation",
    title: "Installation Guide",
    icon: <HomeIcon />,
  },
  {
    segment: "project",
    title: "Dark patterns and our project",
    icon: <EditNoteIcon />,
  },
  {
    segment: "blog",
    title: "X-Factors Blog",
    icon: <RssFeedIcon />,
  },
  {
    segment: "team",
    title: "Our Team",
    icon: <GroupWorkIcon />,
  },
];

const customTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: "#f7f7f7",
          paper: "#ffffff",
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: "#292b2d",
          paper: "#3a4047",
        },
      },
    },
  },
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
      {pathname === "/installation" && <Installation />}
      {pathname === "/team" && <TeamList />}
      {pathname === "/blog" && <Blog />}
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
  const router = useDemoRouter("/installation");
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION.map((nav) => ({
        ...nav,
      }))}
      branding={{
        title: "X-Factors",
        logo: <img src={logo} alt="X-Factors Logo" style={{ height: 30 }} />,
      }}
      router={router}
      theme={customTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
