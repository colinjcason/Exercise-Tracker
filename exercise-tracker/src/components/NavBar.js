import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';

function NavBar() {

    return (
    <AppBar color='transparent'>
            <Tabs centered>
                <Link to={'/'}><Tab label='ExerciseTracker'/></Link>
                <Link to='/'><Tab label='Exercises' /></Link>
                <Link to='/create'><Tab label='Create Exercise Log' /></Link>
                <Link to='/user'><Tab label='Create User' /></Link>
            </Tabs>
    </AppBar>
    )
}

export default withRouter(NavBar);