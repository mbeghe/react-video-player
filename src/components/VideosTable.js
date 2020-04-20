import React from 'react';
import {Paper, Table, TableCell, TableRow} from '@material-ui/core';
import VideoContext from '../context/VideosContext';


function VideosTable(){
    return(
        <Paper>
            <Table>
                <VideoContext.Consumer>
                    {context => (
                        context.list.map((video, ix) => {
                            return(
                                <TableRow ix>
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
            </Table>
        </Paper>
    );
}

export default VideosTable;
