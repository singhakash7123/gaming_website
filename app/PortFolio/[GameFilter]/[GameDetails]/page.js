import React from "react";
import Banner from "../../../Banner/page";
import Image from "next/image";
import image from "../../../Image/GameDetails.jpg"
const page = async({params}) => {
  const{GameFilter,GameDetails} = await params
  const Game = decodeURIComponent(GameDetails)
  return (
    <>
      <Banner content={Game} />
      <div className="bg-black px-5 py-15">
        <div className="mx-auto max-w-6xl h-[70vh] bg-blue-500 relative">
          <Image src={image} alt="image" fill className="object-cover" />
        </div>
        <div className="max-w-6xl py-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] mx-auto space-y-10 ">
          <div>
            <p className="text-gray-500">
              Welcome to the portfolio of Evel. We are passionate creators and
              innovators in the world of gaming, dedicated to delivering
              immersive and unforgettable experiences to players around the
              globe. With a deep commitment to excellence and a love for
              storytelling, our portfolio represents a collection of our
              proudest achievements and creative endeavors. From crafting
              visually stunning and engaging games to our dynamic community
              engagement and esports initiatives, we invite you to explore the
              diverse facets of our gaming universe. Our portfolio reflects not
              only our dedication to pushing the boundaries of what's possible
              in gaming but also our unwavering commitment to the gaming
              community. Join us on this journey through digital realms, where
              every click leads to new adventures and where the excitement of
              gaming knows no bounds.
            </p>

                <h3 className="mt-8 text-white text-lg lg:text-2xl font-bold">Game Reviews and Analysis:</h3>
                <p className="text-gray-500">Gameplay Chronicles" provides in-depth game reviews and analysis, helping you discover new games, understand their mechanics, and make informed decisions about what to play next. From AAA titles to indie gems, we've got you covered.</p>
                <h3 className="mt-8 text-white text-lg lg:text-2xl font-bold">Exclusive Interviews:</h3>
                <p className="text-gray-500 ">Dive into the minds of game developers, designers, and industry professionals through exclusive interviews. Learn about their creative processes, inspirations, and the stories behind your favorite games.</p>
                <h3 className="mt-8 text-white text-lg lg:text-2xl font-bold">Gameplay Guides and Tips:</h3>
                <p className="text-gray-500">Whether you're stuck on a challenging level or looking to improve your skills, our blog offers detailed gameplay guides and tips to help you conquer even the toughest in-game challenges.</p>
                <h3 className="mt-8 text-white text-lg lg:text-2xl font-bold">Gaming Culture and Trends:</h3>
                <p className="text-gray-500">Stay up-to-date with the latest trends, news, and cultural phenomena in the gaming world. We explore the social and cultural impact of gaming, from esports to cosplay and beyond.</p>

          </div>
          <div>
            <div className=" w-full lg:w-fit p-15 border border-white lg:text-center rounded-lg mx-auto">
                <h5 className="text-white text-xl font-bold  ">PROJECT CATEGORY</h5>
                <p className="text-gray-500 uppercase">Online Games</p>
                <h5 className="text-white text-xl font-bold mt-8">RELEASE DATE</h5>
                <p  className="text-gray-500 uppercase">30 October 2023</p>
                <h5 className="text-white text-xl font-bold mt-8">SHARE THE PROJECT</h5>
               
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
