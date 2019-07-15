import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

interface TabContainerProps {
  children?: React.ReactNode;
}

function TabContainer(props: TabContainerProps) {
  return (
    <Typography component="div" style={{ padding: 0 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    }
  })
);

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        xs={12}
        spacing={2}
        className={classes.root}
        style={{
          height: 250,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        <Grid container xs={2} />
        <Grid container xs={6} style={{ padding: 5 }}>
          {[...Array(32).keys()].map(x => (
            <Grid item xs={3} style={{ margin: 0, paddingLeft: 0 }}>
              <Button
                variant="outlined"
                size="small"
                className={classes.margin}
                style={{
                  textTransform: "none",
                  borderRadius: 0,
                  padding: 0,
                  fontSize: 11,
                  margin: 0,
                  height: 25,
                  width: 35
                }}
              >
                {`bit${x}`.toLowerCase()}
              </Button>
              <Checkbox
                checked={false}
                onChange={() => {}}
                style={{ padding: 0, margin: 5 }}
                value="checkedB"
                color="primary"
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container xs={4} alignContent="flex-start">
          <Grid item xs={12}>
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              className={classes.group}
              value={value}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="end"
                control={
                  <Radio
                    color="primary"
                    icon={<RadioButtonUncheckedIcon fontSize="small" />}
                    checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                  />
                }
                label="Symmetric"
                labelPlacement="end"
                style={{ fontSize: 6 }}
              />
              <FormControlLabel
                value="end2"
                control={
                  <Radio
                    color="primary"
                    icon={<RadioButtonUncheckedIcon fontSize="small" />}
                    checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                  />
                }
                label="Asymmetric"
                labelPlacement="end"
              />
            </RadioGroup>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ direction: "flex", flexDirection: "column" }}
          >
            <dir>
              <Button
                variant="outlined"
                size="medium"
                className={classes.margin}
                style={{
                  textTransform: "none",
                  borderRadius: 0
                }}
              >
                Clear
              </Button>
            </dir>
            <dir>
              <Button
                variant="outlined"
                size="medium"
                className={classes.margin}
                style={{
                  textTransform: "none",
                  borderRadius: 0
                }}
              >
                Select all
              </Button>
            </dir>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
