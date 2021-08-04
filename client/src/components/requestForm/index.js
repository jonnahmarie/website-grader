import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import ReCAPTCHA from 'react-google-recaptcha';

const onChange = (value) => {
    console.log('Captcha value:', value)
}

const Form = () => {
    return (
        <div className='contact'>
            <h3>Request your FREE Website Speed Grade</h3>
            <form novalidate autoComplete='off'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <TextField required id='standard-required' label='Full Name' id='name' name='fullName' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField required id='standard-required' label='Phone Number' id='number' name='phoneNumber' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField id='standard-required' label='Company Name' id='company' name='companyName' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField required id='standard-required' label='Website URL' id='website' name='websiteUrl' fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField required id='standard-required' label='Email' id='email' name='emailAddress' fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <ReCAPTCHA sitekey='6LdLVdsbAAAAABWDHQK_0yWBTrOmJeSjYT7QX7SL' onChange={onChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' color='primary'>GET MY REPORT</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
};

export default Form;