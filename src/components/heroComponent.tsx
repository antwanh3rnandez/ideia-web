import {useState, useEffect} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
// import DeleteIcon from '@mui/icons-material/Delete';
import LoginIcon from '@mui/icons-material/Login';

import {
    Box,
    Button,
    // Card,
    Divider,
    Drawer,
    // Grid,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    List, 
    ListItem, 
    ListItemText, 
    useMediaQuery
} from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
SwiperCore.use([Autoplay, Navigation, Pagination]);

import '../index.css'

import logo from '../assets/logo.svg';
import alimenticio from '../assets/alimenticio.jpg';
import auto from '../assets/auto.jpg';
import farma from '../assets/farma.jpg';
import hipotecario from '../assets/hipotecario.webp';
import logistica from '../assets/logistica.jpg';
import pyme from '../assets/pyme.avif';
import { Container } from '@mui/material';

function HeroSection() {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const [slidesPerView, setSlidesPerView] = useState(3);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 750) {
                setSlidesPerView(1);
            } else if (window.innerWidth < 1200) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <div style={{ width: '100%', height: '650px', backgroundColor: 'var(--primary)' }}>
      <AppBar style={{ backgroundColor: 'var(--primary)', padding: '15px' }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ width: '20vh' }} />
          <div style={{ marginLeft: 'auto' }}>
          {isSmallScreen ? (
            <>
                <MenuIcon onClick={toggleMenu}/>
                <Drawer 
                    anchor="right" 
                    open={isMenuOpen} 
                    onClose={toggleMenu}
                    PaperProps={{ style: { backgroundColor: 'var(--primary)', width: '200px' } }}
                    sx={{
                        '& .MuiList-root': {
                        paddingTop: '20px',
                        },
                        '& .MuiListItem-root': {
                        marginBottom: '10px',
                        },
                        '& .MuiTypography-root': {
                        color: 'white',
                        },
                    }}
                >
                    <List>
                    <ListItem >
                        <ListItemText primary="Home" />
                    </ListItem>
                    <Divider style={{ backgroundColor: 'white' }} />
                    <ListItem >
                        <ListItemText primary="Simulador" />
                    </ListItem>
                    <Divider style={{ backgroundColor: 'white' }} />
                    <ListItem >
                        <Button 
                            variant="contained" 
                            startIcon={<LoginIcon />}
                            sx={{ 
                                borderRadius: '20px',
                                background: 'var(--secondary)',
                                color: '#000',
                                '&:hover': {
                                    background: 'var(--dark-blue)',
                                    color: '#FFF'
                                } 
                            }}>
                                Iniciar Sesion
                            </Button>
                    </ListItem>
                    {/* Agrega más ListItems para otros elementos del menú móvil */}
                    </List>
                </Drawer>
            </>
          ) : (
            <>
                <IconButton edge="end" color="inherit" aria-label="menu" style={{marginRight: '5px'}}>
                <HomeIcon />
                <Typography variant='h6' component="div">Home</Typography>
                </IconButton>
                {/* <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    component={`Link`}
                    to="/ruta-del-beneficio"
                    style={{ marginRight: '5px' }}
                    >
                    <Typography variant='h6' component="div">
                        Beneficios
                    </Typography>
                </IconButton> */}
                {/* <IconButton edge="end" color="inherit" aria-label="menu" style={{marginRight: '5px'}}>
                <Typography variant='h6' component="div">Medios</Typography>
                </IconButton>
                <IconButton edge="end" color="inherit" aria-label="menu" style={{marginRight: '5px'}}>
                <Typography variant='h6' component="div">Nosotros</Typography>
                </IconButton>
                <IconButton edge="end" color="inherit" aria-label="menu" style={{marginRight: '5px'}}>
                <Typography variant='h6' component="div">Contacto</Typography>
                </IconButton> */}
                <IconButton edge="end" color="inherit" aria-label="menu" style={{marginRight: '5px'}}>
                <Typography variant='h6' component="div">Simulador</Typography>
                </IconButton>
                {/* <IconButton edge="end" color="inherit" aria-label="menu" style={{marginRight: '5px'}}>
                <Typography variant='h6' component="div">Franquicias</Typography>
                </IconButton>
                <IconButton edge="end" color="inherit" aria-label="menu" style={{marginRight: '5px'}}>
                <Typography variant='h6' component="div">Franquicias</Typography>
                </IconButton> */}
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<LoginIcon />}
                    sx={{
                        borderRadius: '20px',
                        backgroundColor: 'var(--secondary)',
                        color: '#000',
                        '&:hover': {
                        backgroundColor: 'var(--dark-blue)',
                        color: '#FFF'
                        },
                    }}
                    >
                    <Typography variant='h6' component="div">
                        Iniciar Sesión
                    </Typography>
                </Button>
            </>
          )}
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', height: '100%', marginTop: '10vh'}}>
        <div style={{ position: 'relative', width: '70vw', height: '65vh' }}>
          <iframe
            src="https://www.youtube.com/embed/2hR09yxItdc?autoplay=1&loop=1&controls=0&showinfo=0&rel=0&mute=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', borderRadius: '15px' }}
          />
        </div>
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', top: '-100px', maxHeight: '450px' }}>
        <Swiper
            spaceBetween={40}
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            style={{
            maxWidth: '70%',
            paddingTop: '20px'
            }}
        >
            <SwiperSlide>
                <Container className="card" sx={{ borderRadius: '25px', maxWidth: '410px', height: '100%' }}>
                    <div className="card-header" style={{ background: 'white', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', paddingTop: '15px', paddingLeft: '15px', paddingRight: '15px' }}>
                        <Typography variant="h5" component="div" sx={{ color: 'var(--primary)', fontFamily: 'Roboto, sans-serif' }}>
                            Sector Inmobiliario
                        </Typography>
                    </div>
                    <div className="card-body" style={{ background: 'white', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, paddingLeft: '15px', paddingRight: '15px' }}>
                        Realizamos estudios de mercado y opiniones de valor, así como la gestión de créditos hipotecarios y marketing para asegurar una estrategia eficaz en el sector inmobiliario.
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '5px' }}>
                            <img src={hipotecario} alt="image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" sx={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            alignSelf: 'flex-end',
                            borderRadius: '20px',
                            background: 'var(--primary)',
                            color: '#FFF',
                            '&:hover': {
                                background: 'var(--dark-blue)',
                                color: '#FFF'
                            }
                            }}>
                            Botón
                            </Button>
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
            <SwiperSlide>
                <Container className="card" sx={{ borderRadius: '25px', maxWidth: '410px', height: '100%' }}>
                    <div className="card-header" style={{ background: 'white', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', paddingTop: '15px', paddingLeft: '15px', paddingRight: '15px' }}>
                        <Typography variant="h5" component="div" sx={{ color: 'var(--primary)', fontFamily: 'Roboto, sans-serif' }}>
                            Sector PyME
                        </Typography>
                    </div>
                    <div className="card-body" style={{ background: 'white', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, paddingLeft: '15px', paddingRight: '15px' }}>
                        Otorgamos créditos simples, revolventes, de arrendamiento para tu empresa y puedas: <br/>
                        &bull; Renovar instalaciones <br/>
                        &bull; Ampliar tecnología <br/>
                        &bull; Adquirir materia prima <br/>
                        &bull; Pagar nóminas <br/>
                        &bull; Arrendar y subarrendar maquinaria <br/>
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '5px' }}>
                            <img src={pyme} alt="image" style={{ maxWidth: '67%', maxHeight: '100%' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" sx={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            alignSelf: 'flex-end',
                            borderRadius: '20px',
                            background: 'var(--primary)',
                            color: '#FFF',
                            '&:hover': {
                                background: 'var(--dark-blue)',
                                color: '#FFF'
                            }
                            }}>
                            Botón
                            </Button>
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
            <SwiperSlide>
                <Container className="card" sx={{ borderRadius: '25px', maxWidth: '410px', height: '100%' }}>
                    <div className="card-header" style={{ background: 'white', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', paddingTop: '15px', paddingLeft: '15px', paddingRight: '15px' }}>
                        <Typography variant="h5" component="div" sx={{ color: 'var(--primary)', fontFamily: 'Roboto, sans-serif' }}>
                        Sector Automotriz
                        </Typography>
                    </div>
                    <div className="card-body" style={{ background: 'white', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, paddingLeft: '15px', paddingRight: '15px' }}>
                        Analizamos el flujo vial de modelos de carros por estado y ciudad, qué hacen y quiénes son tus competidores en la exportación e importación de piezas para que así puedas brindar el mejor precio a tus clientes.
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '5px' }}>
                            <img src={auto} alt="image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" sx={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            alignSelf: 'flex-end',
                            borderRadius: '20px',
                            background: 'var(--primary)',
                            color: '#FFF',
                            '&:hover': {
                                background: 'var(--dark-blue)',
                                color: '#FFF'
                            }
                            }}>
                            Botón
                            </Button>
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
            <SwiperSlide>
                <Container className="card" sx={{ borderRadius: '25px', maxWidth: '410px', height: '100%' }}>
                    <div className="card-header" style={{ background: 'white', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', paddingTop: '15px', paddingLeft: '15px', paddingRight: '15px' }}>
                        <Typography variant="h5" component="div" sx={{ color: 'var(--primary)', fontFamily: 'Roboto, sans-serif' }}>
                            Sector Alimenticio
                        </Typography>
                    </div>
                    <div className="card-body" style={{ background: 'white', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, paddingLeft: '15px', paddingRight: '15px' }}>
                        En nuestro servicio de retailing, brindamos a nuestros clientes soluciones efectivas, para mejorar la presentación y promoción de sus productos en el punto de venta. 
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '5px' }}>
                            <img src={alimenticio} alt="image" style={{ maxWidth: '92%', maxHeight: '100%' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" sx={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            alignSelf: 'flex-end',
                            borderRadius: '20px',
                            background: 'var(--primary)',
                            color: '#FFF',
                            '&:hover': {
                                background: 'var(--dark-blue)',
                                color: '#FFF'
                            }
                            }}>
                            Botón
                            </Button>
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
            <SwiperSlide>
                <Container className="card" sx={{ borderRadius: '25px', maxWidth: '410px', height: '100%' }}>
                    <div className="card-header" style={{ background: 'white', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', paddingTop: '15px', paddingLeft: '15px', paddingRight: '15px' }}>
                        <Typography variant="h5" component="div" sx={{ color: 'var(--primary)', fontFamily: 'Roboto, sans-serif' }}>
                        Sector farmacéutico
                        </Typography>
                    </div>
                    <div className="card-body" style={{ background: 'white', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, paddingLeft: '15px', paddingRight: '15px' }}>
                        Analizamos a los competidores, ventajas competitivas y precios para proporcionar un enfoque personalizado para cada uno de nuestros clientes.
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '5px' }}>
                            <img src={farma} alt="image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" sx={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            alignSelf: 'flex-end',
                            borderRadius: '20px',
                            background: 'var(--primary)',
                            color: '#FFF',
                            '&:hover': {
                                background: 'var(--dark-blue)',
                                color: '#FFF'
                            }
                            }}>
                            Botón
                            </Button>
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
            <SwiperSlide>
                <Container className="card" sx={{ borderRadius: '25px', maxWidth: '410px', height: '100%' }}>
                    <div className="card-header" style={{ background: 'white', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', paddingTop: '15px', paddingLeft: '15px', paddingRight: '15px' }}>
                        <Typography variant="h5" component="div" sx={{ color: 'var(--primary)', fontFamily: 'Roboto, sans-serif' }}>
                            Sector Vialidad
                        </Typography>
                    </div>
                    <div className="card-body" style={{ background: 'white', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, paddingLeft: '15px', paddingRight: '15px' }}>
                        Nuestro análisis del movimiento vial, DOT, DOE y DOM, es vital para el desarrollo de estrategias de transporte y logística.
                        </Typography>
                        <br/>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '5px' }}>
                            <img src={auto} alt="image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </div>
                        <br/>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" sx={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            alignSelf: 'flex-end',
                            borderRadius: '20px',
                            background: 'var(--primary)',
                            color: '#FFF',
                            '&:hover': {
                                background: 'var(--dark-blue)',
                                color: '#FFF'
                            }
                            }}>
                            Botón
                            </Button>
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
            <SwiperSlide>
                <Container className="card" sx={{ borderRadius: '25px', maxWidth: '410px', height: '100%' }}>
                    <div className="card-header" style={{ background: 'white', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', paddingTop: '15px', paddingLeft: '15px', paddingRight: '15px' }}>
                        <Typography variant="h5" component="div" sx={{ color: 'var(--primary)', fontFamily: 'Roboto, sans-serif' }}>
                        Sector de Logística
                        </Typography>
                    </div>
                    <div className="card-body" style={{ background: 'white', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, paddingLeft: '15px', paddingRight: '15px' }}>
                        Contamos con procesos correctivos para garantizar la efectividad de las entregas y gestión de almacén, creando rutas eficientes, inventarios óptimos y asesoría en comercio exterior.
                        </Typography>
                        <br/>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '5px' }}>
                            <img src={logistica} alt="image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" sx={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            alignSelf: 'flex-end',
                            borderRadius: '20px',
                            background: 'var(--primary)',
                            color: '#FFF',
                            '&:hover': {
                                background: 'var(--dark-blue)',
                                color: '#FFF'
                            }
                            }}>
                            Botón
                            </Button>
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
            <SwiperSlide>
                <Container className="card" sx={{ borderRadius: '25px', maxWidth: '410px', height: '100%' }}>
                    <div className="card-header" style={{ background: 'white', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', paddingTop: '15px', paddingLeft: '15px', paddingRight: '15px' }}>
                        <Typography variant="h5" component="div" sx={{ color: 'var(--primary)', fontFamily: 'Roboto, sans-serif' }}>
                        Sector de Plazas Comerciales
                        </Typography>
                    </div>
                    <div className="card-body" style={{ background: 'white', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, paddingLeft: '15px', paddingRight: '15px' }}>
                        Medimos el flujo de personas, preferencias de consumo y análisis de compra.
                        </Typography>
                        <br/>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', marginBottom: '5px' }}>
                            <img src={logistica} alt="image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </div>
                        <br/>
                        <br/>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained" sx={{
                            marginTop: '10px',
                            marginBottom: '10px',
                            alignSelf: 'flex-end',
                            borderRadius: '20px',
                            background: 'var(--primary)',
                            color: '#FFF',
                            '&:hover': {
                                background: 'var(--dark-blue)',
                                color: '#FFF'
                            }
                            }}>
                            Botón
                            </Button>
                        </div>
                    </div>
                </Container>
            </SwiperSlide>
        </Swiper>
      </Box>
                
      
    </div>
  );
}

export default HeroSection;
