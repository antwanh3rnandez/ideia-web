import React from 'react';
import { Typography, Container } from '@mui/material';

import { useContext } from "react";
import NextLink from "next/link";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Slider from "@mui/material/Slider";

import { LoanContext } from "../context/LoanContext";
import { formatInputToMoney } from "../helpers/format-input-to-money.helper";
import { formatter } from "../helpers/";

interface Props {
    title: string;
    paragraph: string;
  }

const Simulador = ({ }) => {
    
    const {
        setPropertyValue,
        propertyValue,
        setDownPaymentPercentage,
        setLoanTerm,
        downPaymentPercentage,
        loanTerm,
        monthlyIncome,
        monthlyPayment,
        loanAmount,
        downPayment,
      } = useContext(LoanContext);
    
      const handlePropertyValue = (value: string) => {
        const amount = Number(value.replace(/[^0-9.]/g, ""));
        setPropertyValue(amount);
      };

    return (
        <div style={{ width:'100%', height: '1050px', }}>
            <Container sx={{ width: '100%', mb: '20px' }}>
                <Container sx={{ position: 'absolute', top: '1050px' }}>
                    <Container
                        maxWidth="lg"
                        sx={{
                        mt: 10,
                        }}
                    >
                        <Typography variant="h4" gutterBottom fontWeight="700" sx={{fontFamily: 'Bebas Neue, sans-serif'}}>
                        Descubre cuanto pagarías al mes por vivir en tu casa ideal
                        </Typography>
                        <Typography variant="body1" gutterBottom fontWeight={600} sx={{fontFamily: 'Roboto, sans-serif'}}>
                        Juega con nuestro simulador y descubre al instante las condiciones que
                        necesitarías para conseguir tu mejor crédito hipotecario.
                        </Typography>

                        <Card
                        sx={{
                            my: 3,
                        }}
                        >
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Box>
                                    <Typography
                                    variant="h5"
                                    gutterBottom
                                    fontWeight="700"
                                    p={2}
                                    sx={{
                                        bgcolor: "#000",
                                        color: "#fff",
                                    }}
                                    >
                                    Simulador de Crédito Hipotecario
                                    </Typography>
                                    <Box p={3}>
                                        <Box mb={3}>
                                            <FormControl fullWidth>
                                            <InputLabel htmlFor="standard-adornment-property-value">
                                                Precio del Inmueble
                                            </InputLabel>
                                            <OutlinedInput
                                                id="standard-adornment-property-value"
                                                label="Precio del Inmueble"
                                                endAdornment={
                                                <InputAdornment position="end">MXN</InputAdornment>
                                                }
                                                placeholder="1,000,000"
                                                onChange={(e) => {
                                                handlePropertyValue(e.target.value);
                                                }}
                                                startAdornment={
                                                <InputAdornment position="start">
                                                    <AttachMoneyIcon />
                                                </InputAdornment>
                                                }
                                                value={formatInputToMoney(String(propertyValue))}
                                                fullWidth
                                            />
                                            </FormControl>
                                        </Box>
                                        <Divider />
                                        <Box my={3}>
                                            <Typography variant="body1">Enganche </Typography>
                                            {/* <FormControl fullWidth>
                                            <InputLabel htmlFor="standard-adornment-amount">
                                                Enganche
                                            </InputLabel>
                                            <OutlinedInput
                                                id="standard-adornment-amount"
                                                label="Precio del Inmueble"
                                                endAdornment={
                                                <InputAdornment position="end">MXN</InputAdornment>
                                                }
                                                placeholder="500,000"
                                                onChange={(e) => {
                                                handleDownPaymentChange(e.target.value);
                                                }}
                                                startAdornment={
                                                <InputAdornment position="start">
                                                    <AttachMoneyIcon />
                                                </InputAdornment>
                                                }
                                                value={formatInputToMoney(String(downPayment))}
                                                fullWidth
                                            />
                                            </FormControl> */}
                                            <Slider
                                            aria-label="Enganche"
                                            defaultValue={10}
                                            max={90}
                                            getAriaValueText={(value) => `${value}%`}
                                            min={5}
                                            marks={[
                                                {
                                                value: 5,
                                                label: "5%",
                                                },
                                                {
                                                value: 90,
                                                label: "90%",
                                                },
                                            ]}
                                            valueLabelDisplay="auto"
                                            valueLabelFormat={(value) => `${value}%`}
                                            value={downPaymentPercentage}
                                            onChange={(_, value) => {
                                                const newDownPaymentPercentage =
                                                typeof value === "number" ? value : 5;
                                                setDownPaymentPercentage(newDownPaymentPercentage);
                                            }}
                                            name="downPayment"
                                            sx={{color: '#000'}}
                                            />
                                        </Box>
                                        <Divider />
                                        <Box my={3}>
                                            <Typography variant="body1">Plazo </Typography>
                                            <Slider
                                            aria-label="Plazo"
                                            defaultValue={20}
                                            getAriaValueText={(value) => `${value}%`}
                                            min={5}
                                            max={20}
                                            step={5}
                                            marks={[
                                                {
                                                value: 5,
                                                label: "5",
                                                },
                                                {
                                                value: 10,
                                                label: "10",
                                                },
                                                {
                                                value: 15,
                                                label: "15",
                                                },
                                                {
                                                value: 20,
                                                label: "20%",
                                                },
                                            ]}
                                            valueLabelDisplay="auto"
                                            valueLabelFormat={(value) => `${value}`}
                                            value={loanTerm}
                                            onChange={(_, value) => {
                                                const newLoanTerm =
                                                typeof value === "number" ? value : 5;
                                                setLoanTerm(newLoanTerm);
                                            }}
                                            sx={{color: '#000'}}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box>
                                    <Typography
                                    variant="h5"
                                    gutterBottom
                                    fontWeight="700"
                                    p={2}
                                    sx={{
                                        bgcolor: "#000",
                                        color: "#fff",
                                    }}
                                    >
                                    Condiciones estimadas de crédito
                                    </Typography>{" "}
                                    <Box p={3}>
                                        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                                            <Typography>Enganche: </Typography>
                                            <Typography fontWeight="700">
                                            {formatter.money(downPayment)} MXN
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                                            <Typography>Monto prestado: </Typography>
                                            <Typography fontWeight="700">
                                            {formatter.money(loanAmount)} MXN
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                                            <Typography>Pago mensual: </Typography>
                                            <Typography fontWeight="700">
                                            {formatter.money(monthlyPayment)}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                                            <Typography>Ingresos mensuales: </Typography>
                                            <Typography fontWeight="700">
                                            {formatter.money(monthlyIncome)}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                                            <Typography>Tasa:</Typography>
                                            <Typography fontWeight="700">10%</Typography>
                                        </Box>
                                        <Divider />
                                        <Box sx={{ my: 3 }}>
                                            <Typography>
                                            * Los valores mostrados son estimados y pueden variar.
                                            </Typography>
                                            <Typography>
                                            ** Si tus ingresos son menores, contáctanos y juntos
                                            encontraremos una solución para ti.
                                            </Typography>
                                        </Box>
                                        <NextLink href="/first-step" passHref>
                                            <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            fullWidth
                                            sx={{ mt: 2, background: '#000' }}
                                            >
                                            Quiero iniciar mi proceso
                                            </Button>
                                        </NextLink>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        </Card>
                    </Container>
                </Container>
            </Container>
        </div>
      
    );
  };
  
  

export default Simulador;
