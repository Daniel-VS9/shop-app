import { Assessment, Looks3, MonetizationOn } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Chart from 'react-apexcharts'

import Footer from '../components/Footer'
import Header from '../components/Header'

const DashboardScreen = () => {

    const series =  [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }]

    const options =  {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      }


      const pie = {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
      }
      

    return (
        <div>
            <Header/>
            <Container>
                <GeneralStatContainer>
                    <GeneralStatBox className='boxOne'>
                        <MonetizationOn />
                        Ventas totales
                    </GeneralStatBox>
                    <GeneralStatBox className='boxTwo'>
                        <Looks3 />
                        Numero de ventas
                    </GeneralStatBox>
                    <GeneralStatBox className='boxThree'>
                        <Assessment />
                        Venta promedio
                    </GeneralStatBox>
                    <GeneralStatBox className='boxFour'>
                        tmp
                    </GeneralStatBox>
                </GeneralStatContainer>

                <ChartContainer className='chartContainer'>
                    <LineChart className='lineChart'>
                        <ChartTitle>Ventas</ChartTitle>
                        <Chart options={options} series={series} type="area" height={350} />
                    </LineChart>
                    <PieChart className='pieChart'>
                        <ChartTitle>Productos mas vendidos</ChartTitle>
                        <Chart options={pie.options} series={pie.series} type='donut' height={350} />
                    </PieChart>
                </ChartContainer>
            </Container>
            <Footer/>
        </div>
    )
}

export default DashboardScreen

const Container = styled.div`
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    padding: 3rem;
    gap: 5rem;

    @media (max-width: 1025px) {
        .chartContainer {
            flex-wrap: wrap;
        }
        .lineChart {
            width: 100%
        }
        .pieChart {
            width: 100%;
        }
    }
`

const GeneralStatContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 2rem;

    .boxOne {
        background-image: linear-gradient(to right top, #c8facd, #bcf5cb, #b0f1ca, #a4ecc9, #98e7c8, #8de2c7, #81dec7, #76d9c7, #69d4c7, #5ccec7, #4fc9c8, #41c3c8);
    }

    .boxThree {
        background-image: linear-gradient(to right top, #59f4ff, #59f3f7, #5af1ef, #5df0e7, #61eedf, #66efda, #6bf0d5, #71f1d0, #79f5cc, #82f8c8, #8cfcc4, #96ffc0);
    }

    .boxTwo {
        background-image: linear-gradient(to right top, #dc92f7, #ce93fa, #bf94fb, #af94fd, #9f95fd, #9195fc, #8296fb, #7296f9, #6096f6, #4c96f3, #3396ef, #0095eb);
    }

    .boxFour {
        background-image: linear-gradient(to right top, #e66e9f, #de6da5, #d66daa, #cd6daf, #c36db4, #ba6eb8, #b06ebb, #a56fbd, #9970bf, #8b71c1, #7e71c1, #6f72c1);
    }
`

const GeneralStatBox = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 8px;
    width: 11rem;
    height: 11rem;
    color: white;
    font-weight: 500;
    font-size: 1.4rem;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

    svg {
        font-size: 2rem;
    }
`

const ChartContainer = styled.div`
    display: flex;
    gap: 2rem;
`

const ChartTitle = styled.div`
    font-size: 1.4rem;
    color: #40444c;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
`

const LineChart = styled.div`
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    width: 60%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`

const PieChart = styled.div`
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    width: 40%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`