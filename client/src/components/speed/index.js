import React from 'react';
import Grid from '@material-ui/core/Grid';

import SpeedComponent from '../speedComponent';
import Form from '../requestForm';

const Speed = () => {
    return (
        <div className='speed-text'>
            <Grid container spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6}>
                    <SpeedComponent />
                </Grid>
            </Grid>
        </div>
    )
};

export default Speed;