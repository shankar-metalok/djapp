import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {addfun} from '../redux/addcartaction'




const Home = ({addfun,addcart}) => {

    console.log('reddddddddddddddddddddddddddddddddddddux', addcart)
  const [apidata, setapidata] = useState([]);
  const [orderIncrements, setOrderIncrements] = useState({});

  const YOUR_APP_ID = '82e453da';
  const YOUR_APP_KEY = '3bb5d1a3b992f408b9003effd74c9c22';

  const fetchapi = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=l&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
      const data = await response.json();
      setapidata(data.hits);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchapi();
  }, []);




  
const Homeapi = ({ mapapidata, order_inc, setOrderInc }) => {
    const order_addfun = () => {
        setOrderInc(order_inc + 1);
        console.log('Cart index:', mapapidata.recipe.label, 'Incremented value:', order_inc + 1);

        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',mapapidata.recipe)
        addfun(mapapidata.recipe)


    };
    const noof_incfun = () => {
      setOrderInc(order_inc + 1);
    };
  
    const noof_decfun = () => {
      if (order_inc > 0) {
        setOrderInc(order_inc - 1);
      }
    };
  

    return (
      <div className='cart-parent col-md-2'>
        <img src={mapapidata.recipe.image} alt='img' />
        <div className='cart-btns'>
          {order_inc ? (
            <span onClick={noof_decfun} style={{ border: '1px solid red', width: '33%',textAlign:'center' }}>
              -
            </span>
          ) : (
            ''
          )}
  
          {order_inc ? (
            <span onClick={order_addfun} style={{ border: '1px solid red', width: '33%',textAlign:'center' }}>
              {order_inc}
            </span>
          ) : (
            <span onClick={order_addfun} style={{ border: '1px solid red', width: '100%', textAlign: 'center' }}>
              add
            </span>
          )}
  
          {order_inc ? (
            <span onClick={noof_incfun} style={{ border: '1px solid red', width: '33%',textAlign:'center' }}>
              +
            </span>
          ) : (
            ''
          )}
        </div>
  
        <h6>{mapapidata.recipe.label}</h6>
      </div>
    );
  };
  

  return (
    <div className='container'>
      <div className='row'>
        {apidata.length !== 0 &&
          apidata.map((mapapidata, index) => (
            <Homeapi
              key={index}
              mapapidata={mapapidata}
              order_inc={orderIncrements[index] || 0}
              setOrderInc={(value) => setOrderIncrements((prev) => ({ ...prev, [index]: value }))}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>{return {addcart:state.addcart}}

//    const mapStateToProps = (state) => {return { addcart: state.addcart, }; };

const mapDispatchToProps = {addfun}

export default connect(mapStateToProps,mapDispatchToProps) (Home);
