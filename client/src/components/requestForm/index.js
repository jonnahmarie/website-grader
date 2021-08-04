import React, {createRef, Fragment, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const Form = () => {
    const recaptchaRef = createRef();
    const [sent, setSent] = useState(false);
    const [mess, setMess] = useState('');
    const [error, setError] = useState(false);
    const [warning, setWarn] = useState(false);
    const [errs, setErrs] = useState();
    const [formData, setFormdata] = useState({
        fullName: '',
        phoneNumber: '',
        companyName: '',
        websiteUrl: '',
        emailAddress: '',
    });

    const { fullName, phoneNumber, companyName, websiteUrl, emailAddress } = formData;

    const onChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const recaptchaValue = recaptchaRef.current.getValue();
        await axios
            .post('api/emails', formData)
            .then((res) => {
                if (!recaptchaValue) {
                    setWarn(true);
                } else if (res.data.msg === 'success') {
                    setError(false);
                    setWarn(false);
                    setSent(true);
                    setMess('The form has been sent successfully!');
                    setFormdata({
                        fullName: '',
                        phoneNumber: '',
                        companyName: '',
                        websiteUrl: '',
                        emailAddress: '',
                    });
                    recaptchaValue.current.reset();
                } else if (res.data.msg === 'fail') {
                    setError(true);
                    setSent(false);
                    alert('Something went wrong, try again');
                }
            })
            .catch((err) => {
                const errors = err.response.data.errors;
                setError(true);
                if (errors) {
                    setErrs(errors);
                }
            });
    };

    return (
        <div className='contact'>
            <h3>Request your FREE Website Speed Grade</h3>
            <form noValidate autoComplete='off' onSubmit={(e) => onSubmit(e)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id='standard-required'
                            label='Full Name'
                            id='name'
                            name='fullName'
                            value={fullName}
                            fullWidth
                            onChange={(e) => onChange(e)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id='standard-required'
                            label='Phone Number'
                            id='number'
                            name='phoneNumber'
                            value={phoneNumber}
                            fullWidth
                            onChange={(e) => onChange(e)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            id='standard-required'
                            label='Company Name'
                            id='company'
                            name='companyName'
                            value={companyName}
                            fullWidth
                            onChange={(e) => onChange(e)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id='standard-required'
                            label='Website URL'
                            id='website'
                            name='websiteUrl'
                            value={websiteUrl}
                            fullWidth
                            onChange={(e) => onChange(e)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id='standard-required'
                            label='Email'
                            id='email'
                            name='emailAddress'
                            value={emailAddress}
                            fullWidth
                            onChange={(e) => onChange(e)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {warning && (
                            <Fragment>
                                <Alert severity='warning'>
                                    <AlertTitle>Warning</AlertTitle>
                                    Check the box to prove you are not a robot
                                </Alert>
                            </Fragment>
                        )}
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey='6LdLVdsbAAAAABQP-iVUZt3vo7JkRn4B2FZ1kMae'
                            onChange={onChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {sent && (
                            <Fragment>
                                <Alert severity='success'>
                                    <AlertTitle>Success</AlertTitle>
                                    {mess}
                                </Alert>
                            </Fragment>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        {error && (
                            <Fragment>
                                <Alert severity='error'>
                                    <AlertTitle>Error</AlertTitle>
                                    There was an error sending the form
                                    <ul>
                                        {errs &&
                                            errs.length > 0 &&
                                            errs.map((r, index) => (
                                                <li key={index}>{r.msg}</li>
                                            ))}
                                    </ul>
                                </Alert>
                            </Fragment>
                        )}
                    </Grid>
                </Grid>
                <Button variant='contained' color='secondary' type='submit'>GET MY REPORT</Button>
            </form>
        </div>
    )
};

export default Form;