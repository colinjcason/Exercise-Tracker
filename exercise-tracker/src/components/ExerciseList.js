import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { TableBody } from '@material-ui/core';

const Exercise = props => (
    <TableRow>
        <TableCell>{props.exercise.username}</TableCell>
        <TableCell>{props.exercise.description}</TableCell>
        <TableCell>{props.exercise.duration}</TableCell>
        <TableCell>{props.exercise.date.substring(0,10)}</TableCell>
        <TableCell>
            <Link to={'/edit/' + props.exercise._id}></Link> | <a href='#' onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
        </TableCell>
    </TableRow>
)


function ExerciseList() {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
        .then(res => {
            setExercises({exercises: res.data})
        })
        .catch(err => {
            console.log(err)
        })
    })

    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/' + id)
        .then(res => console.log(res.data));

        setExercises({exercises: setExercises.filter(ex => ex._id !== id)});
    }

    const exerciseList = () => {
        return exercises.map(currentExercise => {
            return <Exercise exercise={currentExercise} deleteExercise={deleteExercise} key={currentExercise._id}/>;
        })
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            {exerciseList}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ExerciseList;