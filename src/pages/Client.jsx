import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../Url/backendUrl";

function Client() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    async function getCategory() {
      try {
        const response = await axios.get(`${backendUrl}/products`);
        setCart(response.data);
      } catch (eer) {
        console.log("Xatolik yuz berdi", eer);
      }
    }
    getCategory();
  }, []);
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: token,
      };
      const response = await axios.delete(`${backendUrl}/products/${id}`, {
        headers: headers,
      });
      if (response.data) {
        navigate(0);
      }
    } catch (err) {
      console.log("Xato: ", err);
    }
  };
  return (
    <div className="clientspage">
      {/* <center><h1 className='font-black text-3xl mb-10'>Our Brand New Products</h1></center>   */}
      <div className="container">
        <div className="grid grid-cols-3 justify-between gap-10">
          {cart.map((el) => (
            <div className="w-[250px] shadow-lg p-3 hover:shadow-2xl">
              <img src={el.image} alt="" />
              <div className="p-3">
                <h2 className="text-2xl font-extrabold">{el.title}</h2>
                <h3 className="text-base text-black">{el.subTitle}</h3>
                <p>{el.description}</p>
                <p className="font-normal">{el.rate}</p>
                <p className="font-medium">{el.price}</p>
                <p className="font-medium">{el.size}</p>
                <p className="font-semibold">{el.color}</p>
              </div>
              <button
                onClick={() => handleDelete(el._id)}
                className="bg-gray-400 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Client;
