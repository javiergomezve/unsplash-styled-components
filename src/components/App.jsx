import React, {useState} from 'react';
import styled, {css, ThemeProvider} from 'styled-components';

import {themes} from '../utils/themes';
import {ReactComponent as MoonSVG} from '../assets/logos/moon.svg';
import {ReactComponent as SunSVG} from '../assets/logos/sun.svg';

const ThemeIcon = css`
    width: 2rem;
    height: 2rem;
    margin-left: auto;
    cursor: pointer;
`;

const SunIcon = styled(SunSVG)`
    ${ThemeIcon}
`;

const MoonIcon = styled(MoonSVG)`
    ${ThemeIcon}
`;

const lightTheme = () => ({
    ...themes['common'],
    ...themes['light'],
});

const darkTheme = () => ({
    ...themes['common'],
    ...themes['dark'],
});

const Header = styled.h1`
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
`;

const App = () => {
    const [theme, setTheme] = useState(lightTheme());
    const setDarkTheme = () => setTheme(darkTheme());
    const setLightTheme = () => setTheme(lightTheme());

    return (
        <ThemeProvider theme={theme}>
            <>
                <Header>Hello React</Header>
                {theme.type === 'light' && <MoonIcon onClick={setDarkTheme}/>}

                {theme.type === 'dark' && <SunIcon onClick={setLightTheme}/>}
            </>
        </ThemeProvider>
    );
};

export default App;
