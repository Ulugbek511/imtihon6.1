import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { backendUrl } from "../Url/backendUrl";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (
      !title ||
      !subTitle ||
      !image ||
      !description ||
      !rate ||
      !price ||
      !size ||
      !color
    ) {
      toast("bosh joylani toldirin pajalsta !");
    }
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: token,
      };
      const data = {
        title: title,
        subtitle: subTitle,
        image: image,
        description: description,
        rate: rate,
        price: price,
        size: size,
        color: color,
      };
      const response = await axios.post(`${backendUrl}/products`, data, {
        headers: headers,
      });
      if (response.data) {
        navigate("/");
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };
  return (
    <div className="forest">
      <div className="w-screen text-gray-300 font-sans h-screen flex items-center justify-center ">
        <div className="backdrop-blur  p-4 shadow-lg hover:shadow-2xl rounded-2xl ">
          <h1 className="text-center  text-xl font-serif pb-3">Create cards</h1>
          <div className="flex items-center gap-4">
            <div>
              <label htmlFor="name" className="text-lg font-serif">
                Cards tite
              </label>
              <br />
              <input
                type="text"
                id="name"
                className="cursor-pointer py-2 border-2 rounded-lg font-serif"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
                placeholder="Enter cards title"
              />
            </div>
            <div>
              <label htmlFor="img" className="text-lg font-serif">
                Cards subtitle
              </label>
              <br />
              <input
                type="text"
                id="img"
                className="cursor-pointer py-2 border-2 rounded-lg font-serif"
                value={subTitle}
                onChange={(ev) => setSubTitle(ev.target.value)}
                placeholder="Enter cards subtitle"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <label htmlFor="img" className="text-lg font-serif">
                Card's image adress
              </label>
              <br />
              <input
                type="text"
                id="img"
                className="cursor-pointer py-2 border-2 rounded-lg font-serif"
                value={image}
                onChange={(ev) => setImage(ev.target.value)}
                placeholder="Enter URL address"
              />
            </div>
            <div>
              <label htmlFor="img" className="text-lg font-serif">
                Cards description
              </label>
              <br />
              <input
                type="text"
                id="img"
                className="cursor-pointer py-2 border-2 rounded-lg font-serif"
                value={description}
                onChange={(ev) => setDescription(ev.target.value)}
                placeholder="Enter description"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <label htmlFor="img" className="text-lg font-serif">
                Cards rate
              </label>
              <br />
              <input
                type="text"
                id="img"
                className="cursor-pointer py-2 border-2 rounded-lg font-serif"
                value={rate}
                onChange={(ev) => setRate(ev.target.value)}
                placeholder="Enter cards Rate"
              />
            </div>
            <div>
              <label htmlFor="img" className="text-lg font-serif">
                Cards price ($)
              </label>
              <br />
              <input
                type="text"
                id="img"
                className="cursor-pointer py-2 border-2 rounded-lg font-serif"
                value={price}
                onChange={(ev) => setPrice(ev.target.value)}
                placeholder="Enter cards price"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <label htmlFor="img" className="text-lg font-serif">
                Cards size (L,XL,XXL){" "}
              </label>
              <br />
              <input
                type="text"
                id="img"
                className="cursor-pointer py-2 border-2 rounded-lg font-serif"
                value={size}
                onChange={(ev) => setSize(ev.target.value)}
                placeholder="Enter cards size"
              />
            </div>
            <div>
              <label htmlFor="img" className="text-lg font-serif">
                Cards color
              </label>
              <br />
              <input
                type="text"
                id="img"
                className=" py-2 border-2 rounded-lg font-serif"
                value={color}
                onChange={(ev) => setColor(ev.target.value)}
                placeholder="Enter cards color"
              />
            </div>
          </div>
          <div>
            <button
              className="bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-36 mt-7 font-serif"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
