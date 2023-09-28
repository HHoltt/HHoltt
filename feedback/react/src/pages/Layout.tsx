import { FC, ReactNode, useContext } from 'react';

import {
    Container
} from '@mui/material';

import { MediaQueryContext } from '../contexts';

import Nav from '../components/Nav';

const Layout: FC<{
    children: ReactNode | ReactNode[]
}> = ({ children }) => {
    
    const mediaQuery = useContext(MediaQueryContext);

    return (
        <>
            { mediaQuery === "mobile" && <Nav />}
            <Container sx={{ pt: 2 }}>
                { children }
            </Container>
        </>
    );
}

export default Layout;
