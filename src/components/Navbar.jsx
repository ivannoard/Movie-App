import { Box, Button, Grid, Input, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <Container maxWidth="xl">
        <Grid container columns={15} sx={{ py: 1 }} justifyContent="space-between" direction="row" alignItems="center">
          <Grid item xs={5}>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
              <Typography variant="h5" gutterBottom component="div">
                MilanTV
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={5}>
            <Input placeholder="Placeholder" sx={{ width: '100%' }} />
          </Grid>
          <Grid item xs={5} sx={{ textAlign: 'right' }}>
            <Button variant="outlined" color='error'>Sign Up</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Navbar