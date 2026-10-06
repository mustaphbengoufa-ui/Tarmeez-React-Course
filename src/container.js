import * as React from 'react';
import Container from '@mui/material/Container';

export default function SimpleContainer({children}) {
  return (
    <React.Fragment >
      <Container style={{
        color:"white",
        background:"#ffd8be",
        borderRadius:"5px",
        paddingBottom:"20px"
      }} 
      maxWidth="sm">
    {children}
      </Container>
    </React.Fragment>
  );
}
