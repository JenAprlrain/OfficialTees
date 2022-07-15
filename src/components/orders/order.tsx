import React, { useContext, useEffect, useState, Component } from 'react';
import emailjs from 'emailjs-com';
import { Form, Input } from 'semantic-ui-react';
import Button from "../../components/layout/button"
import ReactModal from 'react-modal'
import Select from 'react-select'
import Swal from 'sweetalert2';
import './order.scss';
import { Link } from 'gatsby';
import { Web3Context } from '../../context/WalletContext';
const SERVICE_ID = "service_6sbydyq";
const TEMPLATE_ID = "template_10odtel";
const USER_ID = "QBqLKhni2xQLeZM43";
const customStyles = {
  content: {
    top: '55vh',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px',
    border: '8px solid black',
  },
};

  const Order: React.FC<{TEEID: string, TOKENID:string}> = ({TEEID, TOKENID}) => {
    const { buyPhysical } = useContext(Web3Context);
    console.log(TOKENID+" - "+TEEID)
    const [unique_id, setUniqueID] = useState(Math.floor(Math.random() * 10000000000))
    const [loading, setLoad] = useState(false);
    const [open, setOpen] = React.useState(false)
    const [size, setSize] = useState({ value: '', label: '' });

    console.log(unique_id)
    const buy = async () => {
      return await buyPhysical(TOKENID, unique_id.toString());
    }
    const options = [
      { value: 'Small', label: 'Small' },
      { value: 'medium', label: 'Medium' },
      { value: 'Large', label: 'Large' },
      { value: 'X-Large', label: 'X-Large' },
      { value: 'XX-Large', label: 'XX-Large' }
    ]
    const MyComponent = () => (
      <Select 
        options={options}
        onChange={(e) => {console.log(e); setSize(e);}}
        value={size}
       />
    )
    
    const handleOnSubmit = (e) => {
      e.preventDefault();
      setLoad(true)
      console.log(unique_id); 

          buy().then((succ) => {
            if(succ){

            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
              try{
              succ.wait().then((res) =>{
                if(res){
                  setOpen(false)
                  Swal.fire({
                    icon: 'success',
                    title: 'Order Sent Successfully'
                  })
                }
                else{
                  setLoad(false)
                  Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: "Transaction failed",
                  })
                }
                
              })

            }
            catch{
              setLoad(false)
              Swal.fire({
                icon: 'error',
                title: 'Ooops, something went wrong',
                text: "Transaction failed",
              })
            }
            },
            (error) => {
              console.log(error.text);
              setLoad(false)
              Swal.fire({
                icon: 'error',
                title: 'Ooops, something went wrong',
                text: error.text,
              })
            });
          }else{
            setLoad(false)
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: "Transaction failed",
            })
          }
          })

        
    };


    return (
      <>
      <div style={{marginBottom:"20px"}} onClick={() => setOpen(true)}>
      <Button>
        Order Physical Tee
        (180 ftm)
      </Button>
      </div>

      <ReactModal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      contentLabel="Example Modal In Gatsby"
      style={customStyles}
    >


      {!loading ? (
        <Form onSubmit={handleOnSubmit} style={{width:"40vw", maxHeight: "65vh"}}>
        <Form.Group style={{width:"100%"}}>
        <html>
        <p>We will only communicate regarding orders via email to ensure quality order tracking - discord/twitter handles not accepted.</p>
       </html>
          <Form.Field
            id='form-input-control-email'
            control={Input}
            label='Email'
            name='user_email'
            placeholder='Email...'
            required
            icon='mail'
            iconPosition='left'
            width={12}
          />
          </Form.Group>
          <Form.Group style={{width:"100%"}}>
          <Form.Field
            id='form-input-control-last-name'
            control={MyComponent}
            border= 'solid 2px'
            borderColor='black'
            label='Shirt Size'
            name='size'

            required
          />
          </Form.Group>
          <Form.Group style={{width:"100%"}}>
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='First Name'
            name='user_fname'
            placeholder='First Name…'
            required
            icon='user circle'
            iconPosition='left'
            width={12}
           />
          </Form.Group>
          <Form.Group style={{width:"100%"}}>
          <Form.Field
             id='form-input-control-last-name'
             control={Input}
             label='Last Name'
             name='user_lname'
             placeholder='Last Name…'
             required
             icon='user circle'
             iconPosition='left'
             width={12}
          />
          </Form.Group>
          <Form.Group style={{width:"100%"}}>
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Address'
            name='user_address'
            placeholder='Address…'
            required
            width={12}
          />
          </Form.Group>
          <Form.Group style={{width:"100%"}}>
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Address 2'
            name='user_address2'
            placeholder='Address Line 2(optional)…'
            width={12}
            
          />
          </Form.Group>
          <Form.Group style={{width:"100%"}}>
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='City'
            name='user_city'
            placeholder='City…'
            required
            width={8}
          />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='State/Region'
            name='user_state'
            placeholder='State/Region…'
            required
            width={1}
          />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Zip Code/Postal Code'
            name='user_zip'
            placeholder='Zip Code/Postal Code…'
            required
            width={3}
          />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Country'
            name='user_country'
            placeholder='Country…'
            required
            width={3}
          />


          </Form.Group>
          <Form.Group style={{width:"100%"}}>
          <Form.Field
            style={{display:"none"}}
            id='form-input-control-last-name'
            control={Input}
            name='unique_id'
            defaultValue={unique_id}
            required
            width={3}
          />
          <Form.Field
            style={{display:"none"}}
            id='form-input-control-last-name'
            control={Input}
            name='tee_id'
            defaultValue={TEEID}
            required
            width={3}
          />
          <Form.Field
            style={{display:"none"}}
            id='form-input-control-last-name'
            control={Input}
            name='token_id'
            defaultValue={TOKENID}
            required
            width={3}
          />
          <Form.Field
            style={{display:"none"}}
            id='form-input-control-last-name'
            control={Input}
            name='collection_name'
            defaultValue={"TEESCC"}
            required
            width={3}
          />
          <Form.Field
            id='form-input-control-last-name'
            style={{display:"none"}}
            control={Input}
            border= 'solid 2px'
            borderColor='black'
            name='user_size'
            value={size.value}
            required
          />
          
          </Form.Group>
          
          <br />
          <div style={{textAlign: "center", width: "100%", paddingBottom: "20px"}}>
          <Button>Submit and Pay 180 FTM</Button>
          </div>
        </Form>
      ) : (
        <h1>Loading...</h1>
      )}
    </ReactModal>
    </>
  );
}
export default Order