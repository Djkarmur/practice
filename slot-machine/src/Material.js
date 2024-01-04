import React from "react";
// import { AppBar, Toolbar, IconButton, Typography,Button} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import 'bootstrap/dist/css/bootstrap.min.css';

const Material = () =>{
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(10),
    },
  }));
  const classes = useStyles();
  
  return(
      <>
      <Button variant="contained" color="textsecondary" >
                 Primary
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
  
      </>
  )
}

export default Material;