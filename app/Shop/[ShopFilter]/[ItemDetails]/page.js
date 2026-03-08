
import React from "react";
import Banner from "../../../Banner/page.js";

import { IoSearch } from "react-icons/io5";
import array from "../../../Data/Shop.js";
import ShopItems from "../../ShopItems/page.js";
import Category from "../../../../Component/Category/page.js";
const page = async ({params}) => {

      const categories = [...new Set(array.map((p) => p.item_type))];
  const { ShopFilter } = await params;

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
          <ul className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 max-w-2xl lg:max-w-none mx-auto">
           
          </ul>
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