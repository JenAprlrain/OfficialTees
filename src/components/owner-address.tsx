import "./owner-address.scss"
import React from "react"
import { Link } from "gatsby"
import { RiTShirtLine } from "react-icons/ri"

interface OwnerAddressProps {
  address: string
  count: number
}

const OwnerAddress: React.FC<OwnerAddressProps> = ({ address, count }) => {
  return (
    <Link to={`/wardrobe/${address}`} className="owner-address__address-link">
      <RiTShirtLine className="owner-address__svg" />
      <li className="owner-address__address">{address}</li>
      <li className="owner-address__count">{count}</li>
    </Link>
  )
}

export default OwnerAddress
