import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const HomeScreen = () => {

    return (
        <>
            <Navbar />
            <Container>
                <Banner>
                    <Title>MediaTic Integrales</Title>
                    <SubTitle>Servicios y soluciones</SubTitle>
                </Banner>
                <Information>
                    <Description>
                        <p>
                            MediaTics Es la empresa lider en el sector de la ingenieria y el suministro al por mayor y al detal. Ofrecemos soluciones integrales en el campo de la TIC's, networking, seguridad perimetral (UTM), camaras de seguridad IP, telefonia IP, controles de accesos, cableado estructurado, sistemas de energia solar fotovoltaica, mantenimientos preventivos y correctivos entre otros.
                        </p>
                    </Description>
                    <ImagesDescription>
                        <Image src='https://www.ctvnews.ca/polopoly_fs/1.5213294.1606908219!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg' />
                        <Image src='https://www.ctvnews.ca/polopoly_fs/1.5213294.1606908219!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg' />
                    </ImagesDescription>
                </Information>
            </Container>
            <Footer />
        </>
    )
}

export default HomeScreen

const Container = styled.div`
    background-color: #fafafa;
    color: white;
    display: flex;
    flex-direction: column;
`

const Banner = styled.div`
    border-radius: 8px;
    margin 2rem 2% 1rem 2%;
    padding: 6rem 0;
    background-image: radial-gradient(circle, #00d1b2, #00cdb8, #00cabd, #00c6c1, #00c2c4, #00bec7, #00bac9, #00b6ca, #00b2cc, #00adce, #00a9cf, #00a4cf);
`

const Title = styled.h1`
    text-align: center;
    font-size: 4rem;
    // color: #40444c;
    margin-bottom: 1rem;
`

const SubTitle = styled.h3`
    // color: #40444c;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 400;
`

const Information = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 2rem;
    margin: 3% 3%;
    background-color: white;
    padding: 3rem 2rem;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

const Description = styled.div`
    font-size: 1.25rem;
    line-height: 1.4;
    color: #696c6c;
`

const ImagesDescription = styled.div`
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    width: 40%;
    border-radius: 5px;
    min-width: 300px;
`