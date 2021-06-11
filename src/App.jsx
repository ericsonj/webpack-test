import React from 'react'
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import NavBar from "./Navbar"

function App() {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <NavBar />
                </Grid>
                <Grid item xs={6}>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;


