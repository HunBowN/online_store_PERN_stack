import React, { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import bigStar from '../access/bigStar.jpg'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from '../http/deviceApi'

const DevicePage = () => {

  const[device, setDevice] = useState({info: []})
  const {id} = useParams()

  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [])
  // const device =  {id: 1, name: 'Iphone12 pro', price: 25000, rating: 5, img: 'https://www.apple.com/ru/newsroom/2020/10/apple-introduces-iphone-12-pro-and-iphone-12-pro-max-with-5g/'}
  // const description = [
  //   {id: 1, title: 'Оперативная память', description: '5 гб'},
  //   {id: 2, title: 'Камера', description: '12мп'},
  //   {id: 3, title: 'Процессор', description: 'Пентиум 3'},
  //   {id: 4, title: 'Кол-во ядер', description: '2'},
  //   {id: 5, title: 'Аккумуляирп', description: '4000'}
  // ]
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image height={300} width={300} src={process.env.REACT_APP_API_URL + device.img} />
        </Col>

        <Col md={4}>
          <Row className='d-flex align-items-center flex-column'>
            <h2 className='d-flex align-items-center justify-content-center'>{device.name}</h2>
            <div 
              className='d-flex align-items-center justify-content-center'
              style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
            >
              {device.rating}
            </div>
          </Row>
        </Col>

        <Col md={4}>
          <Card 
            className='d-flex align-items-center flex-column justify-content-around'
            style={{width: 300, height: 300, fontSize: 32, border: "5px solid lightgray"}}
          > 
            <h3>От: {device.price} руб.</h3>
            <Button variant='outline-dark'>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>

      <Row className='d-flex flex-column m-3'>
        <h2>Характеристики</h2>
        {device.info.map( (info, index ) =>
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description} 
          </Row>
          )}
      </Row>

    </Container>
  )
}

export default DevicePage