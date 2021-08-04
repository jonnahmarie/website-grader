import React from 'react';
import Grid from '@material-ui/core/Grid';

import SpeedChecks from '../speedChecks';
import Form from '../requestForm';
import AboutSpeed from '../aboutSpeed';
import SpeedReport from '../speedReport';

const Content = () => {
    return (
        <div>
            <div>
                <Grid container justifyContent='center' alignItems='center' spacing={0}>
                    <Grid item md={7} xs={12}>
                        <AboutSpeed />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <SpeedReport />
                    </Grid>
                    <Grid item md={1} />
                </Grid>
            </div>
            <div className='speed-text'>
                <Grid container spacing={4} direction='row' justifyContent='center' alignItems='center'>
                    <Grid item md={1} />
                    <Grid item md={5} xs={12}>
                        <Form />
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <SpeedChecks />
                    </Grid>
                    <Grid item md={1} />
                </Grid>
            </div>
        </div>
    )
};

export default Content;