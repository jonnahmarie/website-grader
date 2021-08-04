import React from 'react';
import Grid from '@material-ui/core/Grid';


const AboutSpeed = () => {
    return (
        <div className='about'>
            <section>
                <Grid container direction='row' spacing={4} >
                    <Grid item md={4} xs={1} />
                    <Grid item md={6} xs={10}>
                        <h3>Free Website Speed Grader</h3>
                        <h4>by Ferocious Media</h4>
                        <p>
                            This Free Website Speed Test will grade your website on a scale of an ‘A’ (Very Fast) to an ‘F’ (Needs help). Along with the grade, comes the steps you’ll need to take to improve your website speed issues.
                        </p>
                        <p>
                            Did you know, that a one second delay in mobile load times can reduce your conversions by 20%?
                        </p>
                        <p>
                            In fact, site and page speed are critical measures of the quality of a user's experience and tie directly to how engaged a user is and how likely they are to convert from a prospective customer into a promising lead.
                        </p>
                    </Grid>
                    <Grid item md={2} xs={1} />
                </Grid>
            </section>
        </div>
    )
};

export default AboutSpeed;