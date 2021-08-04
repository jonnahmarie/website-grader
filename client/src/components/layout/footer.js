import React from 'react';
import Container from '@material-ui/core/Container';

const Footer = () => {
    return (
        <Container>
            <section>
                <div>
                    <p>
                        &copy; 2021 | 
                        <a href='https://ferociousmedia.com' target='_blank' rel='noreferrer'>Ferocious Media</a>. 
                        All rights reserved. | 
                        <a href='https://ferociousmedia.com/privacy-policy/' target='_blank' rel='noreferrer'>Privacy Policy</a>
                    </p>
                </div>
            </section>
        </Container>
    )
}

export default Footer;