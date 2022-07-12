import React from "react";
import Counter from "./assets/Counter";
import IMG1 from "./assets/img1.jpg";
import IMG2 from "./assets/img2.jpeg";
import IMG3 from "./assets/img3.jpg";
import "./css/BarangJual.css";
const BarangJual = (props) => {
  const dataCekOut = [
    {
      id: 1,
      Image: IMG1,
      Description: "nama barang 1",
      TypeItem: "tipe barang 1",
      Colour: "White",
      Size: "16",
      Price: "$30",
    },
    {
      id: 2,
      Image: IMG2,
      Description: "nama barang 2",
      TypeItem: "tipe barang 1",
      Colour: "White",
      Size: "16",
      Price: "$20",
    },
    {
      id: 3,
      Image: IMG3,
      Description: "nama barang 3",
      TypeItem: "tipe barang 1",
      Colour: "White",
      Size: "16",
      Price: "10$",
    },
  ];

  return (
    <>
      <div className="outer">
        <h1>Cart {dataCekOut.length}</h1>
        {dataCekOut.map(
          ({ id, Image, Description, TypeItem, Colour, Size, Price }) => {
            return (
              <article key={id} className="container">
                <div className="row">
                  <div className="col-image">
                    <img className="img-fluid float-start" src={Image} alt="" />
                  </div>
                  <div className="col-desc">
                    <h5>{Description}</h5>
                    <h5>{TypeItem}</h5>
                    <h5>{Colour}</h5>
                    <h5>{Size}</h5>
                    <div className="col2">
                      <h5>Remove Item</h5>
                      <h5>Move To Wishlist</h5>
                    </div>
                  </div>
                  <Counter props={props.Price} />
                </div>
              </article>
            );
          }
        )}
        <div>
          {/* counternya */}
          <h1></h1>
          <h4></h4>
          <h2></h2>
        </div>
      </div>
    </>
  );
};

export default BarangJual;
