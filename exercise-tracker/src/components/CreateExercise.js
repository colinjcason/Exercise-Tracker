import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


function CreateExercise() {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    const componentDidMount = () => {
        setUsername('test user');
        setUsers(['test user'])
    }

     const onChangeUsername = (e) => {
        setUsername(e.target.value)
    };

    const onChangeDescription = (e) => {
        setDescription(e.target.value)
    };

    const onChangeDuration = (e) => {
        setDuration(e.target.value)
    };

    const onChangeDate = () => {
        setDate(date)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username: setUsername(username),
            description: setDescription(description),
            duration: setDuration(duration),
            date: setDate(date),
        };

        console.log(exercise);

        // window.location = '/';
    };

    return (
        <div>
            <h1>Create New Exercise Log</h1>
                <FormControl required margin='normal'>
                    <InputLabel>User</InputLabel>
                    <Select labelId='user' id='user' value={username} onChange={onChangeUsername} >
                        <MenuItem value={'test user'} >test user</MenuItem> 
                        <MenuItem value={'test user'} >test user</MenuItem>
                        <MenuItem value={'test user'} >test user</MenuItem>
                    </Select>
                    <TextField required label='description' onChange={onChangeDescription} />
                    <br />
                    <DatePicker selected={date} onChange={onChangeDate} />
                    <br />
                    <TextField required label='duration' onChange={onChangeDuration} />
                    <Button variant='contained' color='primary' onClick={onSubmit}>Create Exercise</Button>
                </FormControl>
                
        </div>

    )
}

export default CreateExercise;