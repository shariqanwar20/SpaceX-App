import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useRocketLaunchesQuery } from "../../generated/graphql";
import { Launch } from "../Launch";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "black",
    color: "white",
  },
}));

export default function Launches() {
  const { data, error, loading } = useRocketLaunchesQuery();
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  if (loading) {
    return <div>Loading</div>;
  } else if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className={classes.root}>
      <div className="launches-heading">Launches</div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {data?.launches?.map((launchObj, ind) => {
            return <Tab label={launchObj?.mission_name} {...a11yProps(ind)} />;
          })}
        </Tabs>
      </AppBar>
      {data?.launches?.map((launchObj, ind) => {
        return (
          <TabPanel value={value} index={ind}>
            <Launch
              id={
                launchObj?.flight_number?.toString() !== undefined
                  ? launchObj?.flight_number?.toString()
                  : ""
              }
            />
          </TabPanel>
        );
      })}
    </div>
  );
}
