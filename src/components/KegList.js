import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';

function KegList(props){
 
  return (
    <React.Fragment>
      {/* <h2 className="text-center" >Keg list</h2> */}
        <Row >
          {Object.values(props.kegList).map(keg => {
            console.log(keg)
            return <Keg 
              whenKegClicked = {props.onKegSelection}
              sellKeg = {props.onchangeKegQuantity}
              name={keg.name}
              brand={keg.brand} 
              price={keg.price} 
              flavor={keg.flavor} 
              quantity={keg.quantity}
              id= {keg.id}
              key= {keg.id}
              />
          })} 
        </Row>
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onchangeKegQuantity: PropTypes.func
}

export default KegList ; 