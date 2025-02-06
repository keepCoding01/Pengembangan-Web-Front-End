import React from "react";
import Footer from "../layout/footer";

const Order = () => {
  return (
    <div>
      <video autoPlay src="./Source/assetsorder/Kenangan Brands - From Indonesia to The World, From Mantan to Unicorn and Beyond 🇮🇩.mp4" className="w-full mt-20"></video>

      <div className="text-center my-32">
        <p className="text-xl font-bold mt-60">
          Kopi Kenangan <span className="font-thin">stands for Coffee Memories.</span>
        </p>
      </div>

      <div className="mx-40">
        <div className="">
          <img src="Source/assetsorder/chef.jpg" alt="chef" className="w-[700px] h-[850] " />
          <div className=" -mt-[600px] ml-[500px] bg-gray-200 p-16 w-[500px] h-auto">
            <p className="text-lg mb-4">“At Kopi Kenangan, our dream is to serve high quality coffee, made with the freshest local ingredients to customers across Indonesia and the rest of the world.”</p>
            <p className="text-sm">— Edward Tirtanata, CEO and Founder</p>
          </div>
        </div>
      </div>

      <div className="mx-24 mt-96">
        <h2 className="text-center my-12 text-3xl font-bold">NEWS</h2>
        <div className="flex justify-between items-center">
          <div className="w-[500px] h-[500px] text-center m-3">
            <img src="./Source/assetsorder/logo1.jpg" alt="halal" className="w-[230px] h-[230px] mx-auto" />
            <h4 className="text-xl mt-4 font-bold">HALAL CERTIFICATION</h4>
            <p className="text-xl mt-4 w-[300px] ml-10">
              Grab-and-go coffee chain Kopi Kenangan strengthens its commitment to serve the best quality product and become the first Kopi Susu Kekinian to obtain Halal Certification from Majelis Ulama Indonesia
            </p>
          </div>
          <div className="w-[500px] h-[500px] text-center m-3">
            <img src="./Source/assetsorder/logo2.png" alt="brand" className="w-[230px] h-[230px] mx-auto" />
            <h4 className="text-xl mt-4 font-bold w-80">WORLD BEST BRAND WINNER 2020</h4>
            <p className="text-xl mt-8 w-[320px] ml-4">Kopi Kenangan has been appointed as the only Brand of The Year winner in the Café Chain category from Indonesia by The World Branding Awards.</p>
          </div>
          <div className="w-[500px] h-[500px] text-center m-3">
            <img src="./Source/assetsorder/logo3.png" alt="espresso" className="w-[230px] h-[230px] mx-auto" />
            <h4 className="text-xl mt-4 font-bold">COFFEE JOURNEY</h4>
            <p className="text-xl mt-4 w-[330px]">
              At Kopi Kenangan, we make sure you have the best coffee experience. We work relentlessly to guarantee we deliver on our promise. From harvest, tasting, roasting and working together with the producers in Indonesia to produce
              the best crop to our customers.
            </p>
          </div>
        </div>
        <p className="text-center bg-black text-white text-xl rounded-full w-44 h-14 mx-auto py-3 mt-16">
          <a href="https://kopikenangan.com/news" className="text-white no-underline">
            Learn More
          </a>
        </p>
      </div>

      <div className="flex mx-24 mt-56">
        <img src="./Source/assetsorder/gifkopi.gif" alt="" className="w-[450px] h-[550px] px-24" />
        <div className="ml-16">
          <h2 className="text-3xl font-bold">KOPI KENANGAN APP</h2>
          <h4 className="text-xl mt-4 font-bold w-[600px]">Find out how to get free vouchers, priority access and extra benefits.</h4>
          <h4 className="text-xl mt-4 font-bold">Here's how:</h4>
          <p className="text-sm -mt-1 w-[500px]">Use the Kopi Kenangan app to order, you may select pickup or delivery to skip the queue</p>
          <div className="flex">
            <span className="text-2xl">•</span>
            <p className="text-sm mt-2 w-[460px] px-3">Collect Kenangan Points cashback through in-app ordering OR scan the QR code at the cashier.</p>
          </div>
          <div className="flex">
            <span className="text-2xl">•</span>
            <p className="text-sm mt-2 w-[460px] px-3">Enjoy exclusive membership deals like free vouchers, birthday drinks, priority access to new products and more!</p>
          </div>
          <h4 className="text-xl mt-4 font-bold">Extra convenience. Extra benefits. Only in Kenangan app.</h4>
          <div className="flex mt-10 space-x-4">
            <a href="https://play.google.com/store/apps/details?gl=US&hl=en&id=com.kopikenangan">
              <img src="./Source/assetsorder/app1.png" alt="" className="w-[150px]" />
            </a>
            <a href="https://apps.apple.com/id/app/kopi-kenangan-indonesia/id1458086649">
              <img src="./Source/assetsorder/app2.png" alt="" className="w-[150px]" />
            </a>
            <a href="https://appgallery.huawei.com/app/C102291381?sharePrepath=ag&channelId=web&detailType=0">
              <img src="./Source/assetsorder/app3.png" alt="" className="w-[150px]" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center mt-32 mb-12 text-4xl font-bold tracking-wider">PROMO OF THE MONTH</h1>
        <div className="flex justify-center space-x-28 mb-12">
          <a href="https://kopikenangan.com/gebyar-kenangan-november">
            <img src="./Source/assetsorder/gebyar.jpg" alt="" className="w-[360px] h-[360px]" />
          </a>
          <a href="https://kopikenangan.com/pesta-cashback">
            <img src="./Source/assetsorder/pesta.png" alt="" className="w-[360px] h-[360px]" />
          </a>
        </div>
        <h2 className="text-center text-3xl font-bold tracking-wider">BELI DISINI</h2>
        <div className="flex justify-center space-x-24 mt-8">
          <a href="https://www.google.com/maps/search/kopi+kenangan/" className="text-white no-underline">
            <h2 className="flex items-center justify-center bg-black text-white h-20 w-[300px] text-2xl font-bold rounded-full">OUTLET TERDEKAT</h2>
          </a>
          <a href="https://kopikenangan.com/download-app/?source_caller=ui&shortlink=tabak&c=Web-Tabak&pid=Web-Tabak&af_xp=custom&af_adset=1" className="text-white no-underline">
            <h2 className="flex items-center justify-center bg-black text-white h-20 font-bold text-2xl text-center w-[300px] rounded-full">
              APLIKASI <br />
              KOPI KENANGAN
            </h2>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 place-items-stretch  mx-[210px] my-40">
        <a href="https://www.instagram.com/p/CRqA6TJMYPg/">
          <img src="./Source/assetsorder/1.jpeg" alt="" className="w-[270px] h-[270px] m-1" />
        </a>
        <a href="https://www.instagram.com/p/CRoIJvEMMsu/">
          <img src="./Source/assetsorder/2.jpeg" alt="" className="w-[270px] h-[270px] m-1" />
        </a>
        <a href="https://www.instagram.com/p/CRnROn7Mj8Y/">
          <img src="./Source/assetsorder/3.jpeg" alt="" className="w-[270px] h-[270px] m-1" />
        </a>
        <a href="https://www.instagram.com/p/CRlZEU-sHlb/">
          <img src="./Source/assetsorder/4.jpeg" alt="" className="w-[270px] h-[270px] m-1" />
        </a>
        <a href="https://www.instagram.com/p/CRk6PhnMo8p/">
          <img src="./Source/assetsorder/5.jpeg" alt="" className="w-[270px] h-[270px] m-1" />
        </a>
        <a href="https://www.instagram.com/p/CRiVY-2sCHD/">
          <img src="./Source/assetsorder/6.jpeg" alt="" className="w-[270px] h-[270px] m-1" />
        </a>
        <a href="https://www.instagram.com/p/CRh6HJWsi3a/">
          <img src="./Source/assetsorder/7.jpeg" alt="" className="w-[270px] h-[270px] m-1" />
        </a>
        <a href="https://www.instagram.com/p/CRfi1aesLmZ/">
          <img src="./Source/assetsorder/8.jpeg" alt="" className="w-[270px] h-[270px] m-1" />
        </a>
        <a href="https://www.instagram.com/p/CRdnPy-soMz/">
          <img src="./Source/assetsorder/9.jpeg" alt="" className="w-[270px] h-[270px] m-1" />
        </a>
      </div>

      <p className="text-center text-lg my-24 font-extralight">
        <b>
          <a href="https://www.instagram.com/kopikenangan.id" className="text-black underline tracking-wider">
            FOLLOW US @KOPIKENANGAN.ID
          </a>
        </b>
      </p>
      <Footer />
    </div>
  );
};

export default Order;
