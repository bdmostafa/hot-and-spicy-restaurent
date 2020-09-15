import React from 'react';
import FooterTop from './FooterTop';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Box from '@material-ui/core/Box';
import { Link } from '@material-ui/core';

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'gray', maxHeight: '100vh' }}>
            <FooterTop />
                <Box display="flex" p={1} style={{marginLeft: '30px', marginRight: '50px'}} >
                    <Box p={1} width="100%" >
                        Copyright <CopyrightIcon /> 2000. Developed by <Link href="https://github.com/bdmostafa" target="_blank">Mostafa</Link>
                    </Box>
                    <Box p={1} flexShrink={0} >
                        Privacy Policy
                    </Box>
                    <Box p={1} flexShrink={0} >
                        Terms Of Services
                    </Box>
                    <Box p={1} flexShrink={0} >
                        Pricing
                    </Box>
                </Box>
         

        </div>
    );
};

export default Footer;