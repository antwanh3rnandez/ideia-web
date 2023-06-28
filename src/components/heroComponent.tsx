import {useState, useEffect} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
// import DeleteIcon from '@mui/icons-material/Delete';
import LoginIcon from '@mui/icons-material/Login';

import {
    Box,
    Button,
    Card,
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
                <Box 
                    sx={{   
                            padding: '3px',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            '&:hover': {
                            color: 'var(--primary)',
                            background: 'var(--secondary)',
                            borderRadius: '10px',
                            padding: '3px'
                            },
                        }}
                >
                    <HomeIcon />
                    <Typography 
                        variant='h6' 
                        component="div"
                    >
                    Home
                    </Typography>
                </Box>
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
                <Typography 
                    variant='h6' 
                    component="div" 
                    sx={{
                        padding: '3px',
                        '&:hover': {
                            color: 'var(--primary)',
                            background: 'var(--secondary)',
                            borderRadius: '10px',
                            padding: '3px'
                        },
                        }}
                    >
                Simulador
                </Typography>
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
            style={{ position: 'static', top: '0', left: '0', width: '100%', height: '100%', borderRadius: '15px' }}
          />
        </div>
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', top: '-80px', maxHeight: '450px' }}>
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
                <Card
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: '15px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                    overflow: 'hidden',
                    height: '100%',
                    }}
                >
                    <div
                        style={{
                            maxHeight: '264px', //240,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
                        <Typography
                            fontSize={18}
                            fontWeight={800}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'center',
                            marginBottom: '15px',
                            }}
                        >
                            Sector Inmobiliario
                        </Typography>
                        <Typography
                            fontSize={16}
                            fontWeight={500}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'start',
                            }}
                        >
                        Realizamos estudios de mercado y opiniones de valor, así como la gestión de créditos hipotecarios y marketing para asegurar una estrategia eficaz en el sector inmobiliario.
                        </Typography>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            height: '180px',
                            // borderTopLeftRadius: '15px',
                            // borderTopRightRadius: '15px',
                            backgroundColor: 'black',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={hipotecario}
                            alt="Card Image"
                            style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
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
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: '15px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                    overflow: 'hidden',
                    height: '100%',
                    }}
                >
                    <div
                        style={{
                            maxHeight: '264px', //240,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
                        <Typography
                            fontSize={18}
                            fontWeight={800}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'center',
                            marginBottom: '15px',
                            }}
                        >
                        Sector PyME
                        </Typography>
                        <Typography
                            fontSize={16}
                            fontWeight={500}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'start',
                            }}
                        >
                        Otorgamos créditos simples, revolventes, de arrendamiento para tu empresa y puedas: <br/>
                        &bull; Renovar instalaciones <br/>
                        &bull; Ampliar tecnología <br/>
                        &bull; Adquirir materia prima <br/>
                        &bull; Pagar nóminas <br/>
                        &bull; Arrendar y subarrendar maquinaria <br/>
                        </Typography>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            height: '180px',
                            // borderTopLeftRadius: '15px',
                            // borderTopRightRadius: '15px',
                            backgroundColor: 'black',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={pyme}
                            alt="Card Image"
                            style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
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
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: '15px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                    overflow: 'hidden',
                    height: '100%',
                    }}
                >
                    <div
                        style={{
                            maxHeight: '264px', //240,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
                        <Typography
                            fontSize={18}
                            fontWeight={800}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'center',
                            marginBottom: '15px',
                            }}
                        >
                        Sector Automotriz
                        </Typography>
                        <Typography
                            fontSize={16}
                            fontWeight={500}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'start',
                            }}
                        >
                        Analizamos el flujo vial de modelos de carros por estado y ciudad, qué hacen y quiénes son tus competidores en la exportación e importación de piezas para que así puedas brindar el mejor precio a tus clientes.
                        </Typography>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            height: '180px',
                            // borderTopLeftRadius: '15px',
                            // borderTopRightRadius: '15px',
                            backgroundColor: 'black',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={auto}
                            alt="Card Image"
                            style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
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
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: '15px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                    overflow: 'hidden',
                    height: '100%',
                    }}
                >
                    <div
                        style={{
                            maxHeight: '264px', //240,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
                        <Typography
                            fontSize={18}
                            fontWeight={800}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'center',
                            marginBottom: '15px',
                            }}
                        >
                            Sector Alimenticio
                        </Typography>
                        <Typography
                            fontSize={16}
                            fontWeight={500}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'start',
                            }}
                        >
                        En nuestro servicio de retailing, brindamos a nuestros clientes soluciones efectivas, para mejorar la presentación y promoción de sus productos en el punto de venta. 
                        </Typography>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            height: '180px',
                            // borderTopLeftRadius: '15px',
                            // borderTopRightRadius: '15px',
                            backgroundColor: 'black',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={alimenticio}
                            alt="Card Image"
                            style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
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
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: '15px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                    overflow: 'hidden',
                    height: '100%',
                    }}
                >
                    <div
                        style={{
                            maxHeight: '264px', //240,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
                        <Typography
                            fontSize={18}
                            fontWeight={800}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'center',
                            marginBottom: '15px',
                            }}
                        >
                            Sector farmacéutico
                        </Typography>
                        <Typography
                            fontSize={16}
                            fontWeight={500}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'start',
                            }}
                        >
                        Analizamos a los competidores, ventajas competitivas y precios para proporcionar un enfoque personalizado para cada uno de nuestros clientes.
                        </Typography>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            height: '180px',
                            // borderTopLeftRadius: '15px',
                            // borderTopRightRadius: '15px',
                            backgroundColor: 'black',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={farma}
                            alt="Card Image"
                            style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
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
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: '15px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                    overflow: 'hidden',
                    height: '100%',
                    }}
                >
                    <div
                        style={{
                            maxHeight: '264px', //240,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
                        <Typography
                            fontSize={18}
                            fontWeight={800}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'center',
                            marginBottom: '15px',
                            }}
                        >
                            Sector Vialidad
                        </Typography>
                        <Typography
                            fontSize={16}
                            fontWeight={500}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'start',
                            }}
                        >
                        Nuestro análisis del movimiento vial, DOT, DOE y DOM, es vital para el desarrollo de estrategias de transporte y logística.<br/><br/>
                        </Typography>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            height: '180px',
                            // borderTopLeftRadius: '15px',
                            // borderTopRightRadius: '15px',
                            backgroundColor: 'black',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={auto}
                            alt="Card Image"
                            style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
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
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: '15px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                    overflow: 'hidden',
                    height: '100%',
                    }}
                >
                    <div
                        style={{
                            maxHeight: '264px', //240,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
                        <Typography
                            fontSize={18}
                            fontWeight={800}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'center',
                            marginBottom: '15px',
                            }}
                        >
                            Sector de Logística
                        </Typography>
                        <Typography
                            fontSize={16}
                            fontWeight={500}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'start',
                            }}
                        >
                        Contamos con procesos correctivos para garantizar la efectividad de las entregas y gestión de almacén, creando rutas eficientes, inventarios óptimos y asesoría en comercio exterior.
                        </Typography>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            height: '180px',
                            // borderTopLeftRadius: '15px',
                            // borderTopRightRadius: '15px',
                            backgroundColor: 'black',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={logistica}
                            alt="Card Image"
                            style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
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
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: '15px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                    overflow: 'hidden',
                    height: '100%',
                    }}
                >
                    <div
                        style={{
                            maxHeight: '264px', //240,
                            height: '190px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
                        <Typography
                            fontSize={18}
                            fontWeight={800}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'center',
                            marginBottom: '15px',
                            }}
                        >
                            Sector de Plazas Comerciales
                        </Typography>
                        <Typography
                            fontSize={16}
                            fontWeight={500}
                            sx={{
                            fontFamily: 'Poppins, sans-serif',
                            textAlign: 'start',
                            }}
                        >
                        Medimos el flujo de personas, preferencias de consumo y análisis de compra.
                        </Typography>
                    </div>
                    <div
                        style={{
                            width: '100%',
                            height: '180px',
                            // borderTopLeftRadius: '15px',
                            // borderTopRightRadius: '15px',
                            backgroundColor: 'black',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={logistica}
                            alt="Card Image"
                            style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            padding: '15px',
                        }}
                    >
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
                </Card>
            </SwiperSlide>
        </Swiper>
      </Box>
                
      
    </div>
  );
}

export default HeroSection;
