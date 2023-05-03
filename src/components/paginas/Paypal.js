import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const Paypal=()=> {
  return (
    <div >
      
      <PayPalScriptProvider options={{"client-id": "AV_LX1oOE8QAvB-6l2YYNlHvx2pS4GWiqSyIJCJVQU5BlUmWtErPQ6Y-Phn-qjmyPwextLKLHa3sD151&currency=USD"}} >

        <PayPalButtons create order={    function(data, actions){
            return actions.order.create({
               purchase_units:[{
                amount:{
                    value: '1000'
                }
               }]        
            });
         }    } 
        style={{layout: "horizontal", color: "blue"}}/>
        </PayPalScriptProvider>
        </div>
  );
      }
      
export default Paypal