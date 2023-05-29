import logo from '../assets/logo.svg';
import { Grid, Typography, Container } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div style={{ background: 'var(--primary)', color: 'white', padding: '20px 0',  fontFamily: 'Roboto, sans-serif' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <img src={logo} alt="Logo" style={{ width: '90%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Contáctanos
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Navegación
            </Typography>
            <ul>
              <li>Inicio</li>
              <li>Servicios</li>
              <li>Productos</li>
              <li>Contacto</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Breadcrumbs
            </Typography>
            <ul>
              <li>Home</li>
              <li>Categoría</li>
              <li>Subcategoría</li>
              <li>Página Actual</li>
            </ul>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Derechos Reservados 2023 &copy; IDEIA
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
