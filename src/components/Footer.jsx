import React from 'react'
import { Container } from '@mui/system'
import '../app.css'
import { Box, Grid, Typography } from '@mui/material'
const Footer = () => {
  return (
    <div className='Footer'>
      <Container sx={{ mt: '20px', color: 'white', py: 2 }} maxWidth="xl">
        <Grid container columns={15} sx={{ py: 1 }} justifyContent="space-between" direction="row" spacing={10}>
          <Grid item xs={5}>
            <Typography variant="h5" gutterBottom component="div">
              MilanTV
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod deleniti doloremque praesentium maxime at. Rerum, adipisci aliquam reprehenderit accusantium itaque fuga qui laborum dolorem, quidem harum facere atque expedita corrupti esse incidunt consequatur hic explicabo. Quasi fugit dolores, ipsam suscipit doloremque perferendis, eligendi dicta vel soluta amet nostrum quos rerum.
            </Typography>
          </Grid>
          <Grid item xs={5} sx={{ display: "flex", justifyContent: "end" }}>
            <Box>
              <Typography variant="body1" gutterBottom>
                Tentang Kami
              </Typography>
              <Typography variant="body1" gutterBottom>
                Blog
              </Typography>
              <Typography variant="body1" gutterBottom>
                Layanan
              </Typography>
              <Typography variant="body1" gutterBottom>
                Karir
              </Typography>
              <Typography variant="body1" gutterBottom>
                Pusat Media
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="body1" gutterBottom>
              Download
            </Typography>
            <Grid container colums={10}>
              <Grid item xs={5}>
                Google
              </Grid>
              <Grid item xs={5}>
                IOS
              </Grid>
            </Grid>
            <Typography variant="body1" gutterBottom>
              Social Media
            </Typography>
            <Grid container colums={9}>
              <Grid item xs={3}>
                Facebook
              </Grid>
              <Grid item xs={3}>
                Pinterest
              </Grid>
              <Grid item xs={3}>
                Instagram
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer