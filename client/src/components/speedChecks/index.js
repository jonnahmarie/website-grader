import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

import Checkmark from '../../images/checkmark.png';

class SpeedChecks extends Component {
    render() {
        return(
            <div className='speed-text'>
            <section>
                <Grid container spacing={10} direction='column'>
                    <Grid item xs={12}>
                        <h3>Do you know where your website stands on speed?</h3>
                    </Grid>
                </Grid>
                <Fade left>
                    <Grid container direction='row' alignItems='center' spacing={7}>
                        <Grid item xs={2} />
                        <Grid item xs={2}>
                            <img src={Checkmark} alt='Checkmark' style={{width:'100%'}} />
                        </Grid>
                        <Grid item xs={6}>
                            <h4>
                                2021 is the year Google is starting to measure Site Speed as a major ranking factor in SEO. All things being equal, if your site is slower than your competitors, you will fall behind on Google search. Reducing your chance of being organically found before your competitors.
                            </h4>
                        </Grid>
                        <Grid item xs={2} />
                    </Grid>
                </Fade>
                <Fade right delay={800}>
                    <Grid container direction='row' alignItems='center' spacing={7}>
                        <Grid item xs={2} />
                        <Grid item xs={2}>
                            <img src={Checkmark} alt='Checkmark' style={{width:'100%'}} />
                        </Grid>
                        <Grid item xs={6}>
                            <h4>
                                A fast site is sign of quality user experience. Your customers will stay on your site longer if the site speed is faster. A slow site will put them right into the hands of your competitors. They will also convert faster and bounce off the page less. Leaving them more time to find what they were looking for in your services.
                            </h4>
                        </Grid>
                        <Grid item xs={2} />
                    </Grid>
                </Fade>
                <Fade left delay={1600}>
                    <Grid container direction='row' alignItems='center' spacing={7}>
                        <Grid item xs={2} />
                        <Grid item xs={2}>
                            <img src={Checkmark} alt='Checkmark' style={{width:'100%'}} />
                        </Grid>
                        <Grid item xs={6}>
                            <h4>
                                Ferocious’ Grademysite.com tool helps you gauge what your current page speed is and also identifies the steps you need to take to fix them. Test your site with GradeMySite.com today!
                            </h4>
                        </Grid>
                        <Grid item xs={2} />
                    </Grid>
                </Fade>
            </section>
        </div>
        );
    }
}

export default SpeedChecks;