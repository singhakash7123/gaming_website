
import React from "react";
import Banner from "../../../Banner/page.js";
import { FaStar } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import array from "../../../Data/Shop.js";
import ShopItems from "../../ShopItems/page.js";
import Category from "../../../../Component/Category/page.js";
import Image from "next/image.js";
const page = async ({params,searchParams}) => {
  
   
      const categories = [...new Set(array.map((p) => p.item_type))];
  const { ShopFilter, ItemDetails } = await params;
  const { image } = await searchParams;

  const filtered = array.filter((item) => {
    if (ShopFilter) return item.item_type === ShopFilter;
    else return true;
  });

  const renderItems = filtered.map((item) => (
    <ShopItems
      key={item.id}
      type={item.item_type}
      price={item.price}
      image={item.image}
    />
  ));

  return (
    <>
    <Banner content="SHOP" />
      <div className="w-full bg-black py-20 px-5">
        <div className="max-w-7xl w-full bg-black mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-10 gap-y-20 ">
          <div className="w-full flex items-center gap-x-5 gap-y-10 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
           <div className="w-xl aspect-square bg-red-500 relative">
            <Image src={image} alt="image" fill className="object-cover"/>
           </div>
           <div className="space-y-5">
            <p className="text-xl text-yellow-500 flex items-center">
              <span><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
              <span><FaStar /></span>
            </p>
            <h3 className="uppercase font-extrabold text-lg text-white">{ItemDetails}</h3>
            <p className="font-extrabold text-lg text-purple-500">$50.00</p>
            <p className=" text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magn aliqua. Ut enim ad minim veniam.</p>
            <p className="font-extrabold text-gray-500  text-[17px]">SKU: <span className="text-white">01</span> </p>
            <p className="font-extrabold text-gray-500  text-[17px]">Availability: <span className="text-white">N/A</span> </p>
            <p className="font-extrabold text-gray-500  text-[17px]">Category: <span className="text-purple-500">{ShopFilter}</span> </p>
            <div className=" text-gray-500 font-bold">Tags: <span  className="border-2 rounded-2xl p-1 border-white hover:bg-purple-500 hover:text-white">ESPORTS</span> , <span className="border-2 rounded-2xl p-1 border-white hover:bg-purple-500 hover:text-white">GAMES</span> </div>
           </div>
          </div>
          <aside className=" bg-black w-full max-w-2xl lg:max-w-none mx-auto lg:mx-0 ">
            <div className="  border border-white flex items-center rounded-lg ">
              <input
                type="text"
                placeholder="Search Products"
                className="text-gray-400 p-3 w-full outline-0"
              />
              <button className="bg-purple-500 text-white text-3xl p-3 rounded-lg">
                <IoSearch />
              </button>
            </div>

            <ul className="w-full text-white font-bold mt-6">
              <li className=" mt-4 text-2xl text-white ">Product Categories</li>
              <Category
                basepath={"/Shop"}
                categories={categories}
                containerStyle="flex flex-col items-start gap-4 text-lg mt-8"
              />
            </ul>

            <div className="mt-8">
              <h2 className="text-white font-extrabold text-xl">
                PRODUCTS TAGS
              </h2>
              <div className="flex items-center gap-3 flex-wrap mt-5"></div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

export default page