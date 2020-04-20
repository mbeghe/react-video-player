import React from 'react';
import {Paper, Table, TableCell, TableRow, TableBody} from '@material-ui/core';
import VideoContext from '../context/VideosContext';


function VideosTable(){
    return(
        <Paper>
            <Table>
                <TableBody>
                    <VideoContext.Consumer>
                        {context => (
                            context.list.map((video, ix) => {
                                return(
                                    <TableRow key={ix} hover={true}>
                                        <TableCell>
                                            {video.title}
                                        </TableCell>
                                        <TableCell>
                                            {video.sources}
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        )}
                    </VideoContext.Consumer>
                </TableBody>

            </Table>
        </Paper>
    );
}

export default VideosTable;
