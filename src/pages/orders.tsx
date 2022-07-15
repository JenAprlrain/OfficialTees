import "./markets.scss"
import React, { useContext, useEffect, useState } from "react"
import { Web3Context } from "../context/WalletContext";

import Layout from "../components/layout/layout"

import Seo from "../components/seo"

const myTees = () => {

  const { getOrders } = useContext(Web3Context);
  const [orders, setOrders] = useState();
  const fetchOrders = async () => {
    setOrders((await getOrders()).reverse())
  }
  useEffect(() => {
    fetchOrders()
  },[])

  return (
    <Layout>
      <Seo title="Orders" />
      <div style={{width:"900px", margin:"auto", marginTop:"50px", minHeight:"1000px", textAlign: "center"}}>
        <div className="row">
          <div style={{width:"300px", display:"inline-block"}}> Order</div>
          <div style={{width:"300px", display:"inline-block"}}> Unique Id</div>
          <div style={{width:"300px", display:"inline-block"}}> NFTEE Id</div>
        </div>
        {orders && orders.map(element =>{

            return(
              <div className="row">
                <div style={{width:"300px", display:"inline-block"}}> {element.orderId.toString()} </div>
                <div style={{width:"300px", display:"inline-block"}}> {element.uniqueId.toString()} </div>
                <div style={{width:"300px", display:"inline-block"}}> {element.teeId.toString()} </div>
              </div>
            )
        })}
        </div>
      
    </Layout>
  )
}

export default myTees
