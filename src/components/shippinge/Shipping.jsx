import { MdOutlineHighQuality } from "react-icons/md";
import { MdOutlinePriceCheck } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

import "./Shipping.css";
const Shipping = () => {
  return (
    <div className="shipping">
      <div className="shipping-container">
        <div className="Feature">
          <h2>Feature highlights</h2>
        </div>
        <div className="three-Feature">
          <div className="item-container">
            <div className="shipping-icons-container">
              <MdOutlineHighQuality className="icone-quality" />
            </div>
            <h5 className="color">Good Quality</h5>
            <div className="Lorem-one">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit.
            </div>
          </div>
          <div className="item-container">
            <div className="shipping-icons-container">
              <MdOutlinePriceCheck className="icon-price" />
            </div>
            <h5 className="color">Good Price</h5>
            <div className="Lorem-tow">
              Lorem ipsum dolor sit
              <br /> amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="item-container">
            <div className="shipping-icons-container">
              <TbTruckDelivery className="icone-delivery" />
            </div>
            <h5 className="color"> Home Delivery</h5>
            <div className="Lorem-three">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
