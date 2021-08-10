import React from 'react';

/* application components */
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

/* global styles for app */
import './styles/app.scss';
import { createTheme, ThemeProvider } from '@material-ui/core';

const theme = createTheme();

export const App = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <section>
                <Header />
                <div
                    className="container"
                    style={{ marginTop: 10, paddingBottom: 250 }}
                >
                    {props.children}
                </div>
                <div>
                    <Footer />
                </div>
            </section>
        </ThemeProvider>
    );
}

