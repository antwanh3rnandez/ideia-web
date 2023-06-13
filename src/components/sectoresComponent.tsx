import { useEffect, useState } from 'react';
import { Typography, Container, Button } from '@mui/material';

import monito from '../assets/monito.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconBrandTiktok } from '@tabler/icons-react';

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const Sectores = ({ }) => {
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 650) {
                setSlidesPerView(1);
            } else if (window.innerWidth < 960) {
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
        <div style={{  position: 'relative', paddingTop: '50px', paddingBottom: '15px', background: 'white', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container maxWidth="lg" sx={{ width: '100%' }}>
                <Container>
                    <Swiper
                        spaceBetween={15}
                        slidesPerView={slidesPerView}
                        navigation
                        autoplay={{ delay: 2000 }}
                    >
                        <SwiperSlide>
                            <Container className="card" sx={{borderRadius: '25px'}}>
                                    <div className="card-header" style={{background: 'var(--secondary)', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', padding:'10px'}}>
                                        <Typography variant="h5" component="div" sx={{ color: 'var(--primary)' ,fontFamily: 'Roboto, sans-serif'}}>
                                        Sector Alimenticio
                                        </Typography>
                                    </div>
                                    <div className="card-body" style={{background: 'var(--primary)', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px', padding:'15px'}}>
                                        <iframe
                                            width="100%"
                                            height="250px"
                                            src="https://www.youtube.com/embed/Tyhe2kwBPNI"
                                            title="Video"
                                            frameBorder="0"
                                            allowFullScreen
                                            style={{borderRadius: '15px'}}
                                        ></iframe>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Button variant="contained" sx={{ 
                                                alignSelf: 'flex-end',
                                                borderRadius: '20px',
                                                background: 'var(--secondary)',
                                                color: '#000',
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
                            <Container className="card" sx={{borderRadius: '25px'}}>
                                <div className="card-header" style={{background: 'var(--secondary)', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', padding:'10px'}}>
                                    <Typography variant="h5" component="div" sx={{ color: 'var(--primary)' ,fontFamily: 'Roboto, sans-serif'}}>
                                    Sector Automotriz
                                    </Typography>
                                </div>
                                <div className="card-body" style={{background: 'var(--primary)', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px', padding:'15px'}}>
                                    <iframe
                                        width="100%"
                                        height="250px"
                                        src="https://www.youtube.com/embed/vOQA2LRCDlY"
                                        title="Video"
                                        frameBorder="0"
                                        allowFullScreen
                                        style={{borderRadius: '15px'}}
                                    ></iframe>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button variant="contained" sx={{ 
                                            alignSelf: 'flex-end',
                                            borderRadius: '20px',
                                            background: 'var(--secondary)',
                                            color: '#000',
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
                            <Container className="card" sx={{borderRadius: '25px'}}>
                                <div className="card-header" style={{background: 'var(--secondary)', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', padding:'10px'}}>
                                    <Typography variant="h5" component="div" sx={{ color: 'var(--primary)' ,fontFamily: 'Roboto, sans-serif'}}>
                                    Sector Farmaceutico
                                    </Typography>
                                </div>
                                <div className="card-body" style={{background: 'var(--primary)', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px', padding:'15px'}}>
                                    <iframe
                                        width="100%"
                                        height="250px"
                                        src="https://www.youtube.com/embed/w2gL2lErFfw"
                                        title="Video"
                                        frameBorder="0"
                                        allowFullScreen
                                        style={{borderRadius: '15px'}}
                                    ></iframe>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button variant="contained" sx={{ 
                                            alignSelf: 'flex-end',
                                            borderRadius: '20px',
                                            background: 'var(--secondary)',
                                            color: '#000',
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
                            <Container className="card" sx={{borderRadius: '25px'}}>
                                <div className="card-header" style={{background: 'var(--secondary)', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', padding:'10px'}}>
                                    <Typography variant="h5" component="div" sx={{ color: 'var(--primary)' ,fontFamily: 'Roboto, sans-serif'}}>
                                    Sector Logística
                                    </Typography>
                                </div>
                                <div className="card-body" style={{background: 'var(--primary)', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px', padding:'15px'}}>
                                    <iframe
                                        width="100%"
                                        height="250px"
                                        src="https://www.youtube.com/embed/im9lydrvXKQ"
                                        title="Video"
                                        frameBorder="0"
                                        allowFullScreen
                                        style={{borderRadius: '15px'}}
                                    ></iframe>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button variant="contained" sx={{ 
                                            alignSelf: 'flex-end',
                                            borderRadius: '20px',
                                            background: 'var(--secondary)',
                                            color: '#000',
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
                            <Container className="card" sx={{borderRadius: '25px'}}>
                                <div className="card-header" style={{background: 'var(--secondary)', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', padding:'10px'}}>
                                    <Typography variant="h5" component="div" sx={{ color: 'var(--primary)' ,fontFamily: 'Roboto, sans-serif'}}>
                                    Plazas Comerciales
                                    </Typography>
                                </div>
                                <div className="card-body" style={{background: 'var(--primary)', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px', padding:'15px'}}>
                                    <iframe
                                        width="100%"
                                        height="250px"
                                        src="https://www.youtube.com/embed/Lb0FZ2EGtWo"
                                        title="Video"
                                        frameBorder="0"
                                        allowFullScreen
                                        style={{borderRadius: '15px'}}
                                    ></iframe>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button variant="contained" sx={{ 
                                            alignSelf: 'flex-end',
                                            borderRadius: '20px',
                                            background: 'var(--secondary)',
                                            color: '#000',
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
                            <Container className="card" sx={{borderRadius: '25px'}}>
                                <div className="card-header" style={{background: 'var(--secondary)', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', padding:'10px'}}>
                                    <Typography variant="h5" component="div" sx={{ color: 'var(--primary)' ,fontFamily: 'Roboto, sans-serif'}}>
                                    Sector PyME
                                    </Typography>
                                </div>
                                <div className="card-body" style={{background: 'var(--primary)', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px', padding:'15px'}}>
                                    <iframe
                                        width="100%"
                                        height="250px"
                                        src="https://www.youtube.com/embed/kMGFL5Rr8oI"
                                        title="Video"
                                        frameBorder="0"
                                        allowFullScreen
                                        style={{borderRadius: '15px'}}
                                    ></iframe>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button variant="contained" sx={{ 
                                            alignSelf: 'flex-end',
                                            borderRadius: '20px',
                                            background: 'var(--secondary)',
                                            color: '#000',
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
                            <Container className="card" sx={{borderRadius: '25px'}}>
                                <div className="card-header" style={{background: 'var(--secondary)', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', padding:'10px'}}>
                                    <Typography variant="h5" component="div" sx={{ color: 'var(--primary)' ,fontFamily: 'Roboto, sans-serif'}}>
                                    Sector Vialidad
                                    </Typography>
                                </div>
                                <div className="card-body" style={{background: 'var(--primary)', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px', padding:'15px'}}>
                                    <iframe
                                        width="100%"
                                        height="250px"
                                        src="https://www.youtube.com/embed/nKwrha1bXEg"
                                        title="Video"
                                        frameBorder="0"
                                        allowFullScreen
                                        style={{borderRadius: '15px'}}
                                    ></iframe>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button variant="contained" sx={{ 
                                            alignSelf: 'flex-end',
                                            borderRadius: '20px',
                                            background: 'var(--secondary)',
                                            color: '#000',
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
                </Container>
            {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px'}}>
                <img src={monito} alt="Ideio" style={{ width: '25vw', minWidth: '25vh'}} />
            </div> */}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '15px' }}>
                <a href="https://www.facebook.com/profile.php?id=100092549126465" target='_blank'>
                    <FacebookRoundedIcon style={{ fontSize: '4rem', color: 'var(--primary)' }} />
                </a>
                <a href="https://www.instagram.com/yosoyideia/" target='_blank'>
                    <InstagramIcon style={{ fontSize: '4rem', color: 'var(--primary)' }} />
                </a>
                <a href="https://twitter.com/yosoyideia/" target='_blank'>
                    <TwitterIcon style={{ fontSize: '4rem', color: 'var(--primary)' }} />
                </a>
                <a href="https://www.tiktok.com/@yosoyideia" target='_blank'>
                    <IconBrandTiktok width='4rem' height='4rem' style={{ color: 'var(--primary)' }} />
                </a>
            </div>
            </Container>
            
        </div>
    );
};

export default Sectores;
