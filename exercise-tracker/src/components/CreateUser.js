import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      minWidth: '100%',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    date: {
        padding: theme.spacing(1),
        textAlign: 'center',
    }
  }));

function CreateUser() {
    const classes = useStyles();

    const [username, setUsername] = useState('');

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: username,
        };

        console.log(user);

        axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));

        setUsername('');
    };

    return (
        <div>
            <h1>Create New User</h1>
            <Grid container className={classes.root}>
                <Grid item xs={12} className={classes.paper}>
                    <FormControl required margin='normal'>
                        <TextField className={classes.paper} required label='Username' onChange={onChangeUsername} />
                        <Grid item xs={12} className={classes.paper}></Grid>
                        <Button className={classes.paper} variant='contained' color='primary' onClick={onSubmit}>Create User</Button>
                    </FormControl>
                </Grid>
            </Grid>                
        </div>
    )
}

export default CreateUser;