import React, { useContext, useEffect} from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import star from '../access/star.png'
import {useNavigate} from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'
import ListGroup from "react-bootstrap/ListGroup"
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import {  fetchBrands} from '../http/deviceApi'

const DeviceItem = observer( ({device}) => {
    // const {device} = useContext(Context)
    const navigate = useNavigate()
    useEffect(() => {
    fetchBrands().then((data) => console.log(data.map(obj => obj.name === 'Apple')))
    }, [])

    // console.log('brands  ', device.brands);

    // useEffect(() => {
    //     fetchTypes().then(data => device.setTypes(data))
    //     fetchBrands().then(data => device.setBrands(data))
    //     fetchDevices(null, null, 1, 2).then(data => {
    //       device.setDevices(data.rows)
    //       device.setTotalCount(data.count)
    //     })
    //   }, [])

        


    // device.types.map(type => 
        
    //        console.log( type.name )
    // )
    

  return (
    <Col md={3} className='mt-3' onClick={() => navigate(`${DEVICE_ROUTE}` + '/' + device.id) }>
        <Card
        style={{width: 150, cursor: 'pointer'}} border={'grey'}>
            <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
            <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                <div>{device.brands}</div>
                {/* <div>Samsung..</div> */}
                
                

                <div className='d-flex align-items-center '>
                    <div>{device.rating}</div>
                    <Image width={20} height={20} src={star} />
                </div>
            </div>
            <div>{device.name}</div>
        </Card>
    </Col>
    
  )
})

export default DeviceItem