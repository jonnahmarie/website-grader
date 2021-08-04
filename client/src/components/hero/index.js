import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';

import desktopBG from '../../images/fm-website-grader-background.png';
import mobileBG from '../../images/fm-website-grader-background-mobile.png'

const Hero = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const background = windowWidth >= 650 ? desktopBG : mobileBG;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    return (
        <div className='hero' style={{backgroundImage:`url(${background})`}}>
            <section>
                <Grid container spacing={10}>
                    <Grid item xs={12} sm={6} />
                    <Grid item xs={12} sm={6}>
                        <div className='hero-text'>
                            <h4>Quality is about speed, too!</h4>
                            <h1>
                                Free Website<br /> Speed Grader
                            </h1>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </div>
    )
};

export default Hero;