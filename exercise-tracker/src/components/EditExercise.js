import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
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

function EditExercise() {
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises/' + this.props.match.params.id)
        .then(res => {
            setUsername(res.data.username)
            setDescription(res.data.description)
            setDuration(res.data.duration)
            setDate(new Date(res.data.date))
        })
        .catch(err => console.log(err));

        axios.get('http://localhost:5000/users/')
        .then(res => {
            if(res.data.length > 0) {
                setUsers(res.data.map(user => user.username))
            }
        })
        .catch(err => console.log(err))
    });

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    };

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    };

    const onChangeDuration = (e) => {
        setDuration(e.target.value)
    };

    const onChangeDate = (date) => {
        setDate(date)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date,
        };

        console.log(exercise);

        axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
        .then(res => console.log(res.data));

        // window.location = '/';
    };

    return (
        <div>
            <h1>Edit Exercise Log</h1>
            <Grid container className={classes.root}>
                <Grid item xs={12} className={classes.paper}>
                    <FormControl required margin='normal'>
                        <InputLabel>User</InputLabel>
                        <Select labelId='user' id='user' value={username} onChange={onChangeUsername} >
                            {users.map(user => <MenuItem value={user} >{user}</MenuItem> )}                           
                        </Select>
                        <Grid item xs={12} className={classes.paper}></Grid>
                        <TextField className={classes.paper} required label='Description' onChange={onChangeDescription} />
                        <Grid item xs={12} className={classes.paper}></Grid>
                        <DatePicker className={classes.date} selected={date} onChange={onChangeDate} />
                        <Grid item xs={12} className={classes.paper}></Grid>
                        <TextField className={classes.paper} required label='Duration (in minutes)' onChange={onChangeDuration} />
                        <Grid item xs={12} className={classes.paper}></Grid>
                        <Button className={classes.paper} variant='contained' color='primary' onClick={onSubmit}>Edit Exercise</Button>
                    </FormControl>
                </Grid>
            </Grid>                
        </div>

    )
}

export default EditExercise;