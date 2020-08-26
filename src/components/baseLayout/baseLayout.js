import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function BaseLayout(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false}>
                {props.children}
            </Container>
        </React.Fragment>
    );
};


