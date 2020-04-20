import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import ReactPlayer from 'react-player';

export default function VideoDetails() {
    return(
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item>
                <Paper>
                    <ReactPlayer url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls={true}/>
                </Paper>
            </Grid>   
        </Grid> 
    );
}