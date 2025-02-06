import React from "react";
import Footer from "../layout/footer";

const career = () => {
  return (
    <div className="mt-28">
      <div className="mt-28">
        <video src="Source/assets career/mp4/Kopi Kenangan_ Persiapan Terbaik Untukmu.mp4" autoPlay className="-mt-8"></video>

        <div className="flex justify-center -mt-96">
          <div className="flex space-x-2">
            <select className="px-4 py-2 border border-gray-400">
              <option value="1" hidden>
                LOCATION
              </option>
              <option value="2">All</option>
              <option value="3">Indonesia</option>
            </select>
            <input type="text" placeholder="Search for jobs by keyword" className="w-64 px-4 py-2 border border-gray-400" />
            <button type="button" className="px-4 py-2 font-bold text-white bg-black">
              FIND JOBS
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="container flex flex-col items-center mx-auto md:flex-row mt-[50px]">
          <div className="h-auto -mb-56 text-left m-20">
            <h1 className="text-4xl font-semibold">About Us</h1>
            <p className="mt-4 text-lg font-medium">Thoughts From Our Team</p>
            <p className="my-4">“The collaboration and teamwork I experienced; opportunities given to me so that I can push myself; and the trust given to me by the management team; excites me everyday.</p>
            <p className="my-4">The sense of achievement is constant; and I am challenged all the time to bring a simple idea into fruition, be it product development or building a new brand for the company.”</p>
            <p className="text-sm">- Veronica Sarah, Business Projects and R&D Manager</p>
          </div>
          <div className="md:mt-0 m-20">
            <img src="Source/assets career/kak-vero-2 (1).jpeg" alt="Team Photo" className="w-auto h-auto mt-80" />
          </div>
        </div>
      </div>

      <div className="py-20 text-center">
        <div className="container flex flex-col items-center mx-auto md:flex-row md:space-x-10">
          <div className="-mt-14 m-20">
            <img src="Source/assets career/MURI.jpg" alt="Mission Image" className="w-auto h-auto" />
          </div>
          <div className="-mt-14 text-left-0 md:pl-10 ">
            <div id="our" className="mr-28 -mt-[200px] w-96 text-left">
              <h2 className="mb-4 text-2xl font-semibold">OUR MISSION</h2>
              <p className="my-4 text-lg font-medium">Thoughts From Our Team</p>
              <p className="my-4 w-96">
                <span className="font-medium">Kopi Kenangan</span> is defined by our culture - one that embraces collaboration, agility, flexibility, constant improvement as well as tolerance to mistake. Our people are result-oriented and
                customer centric. We work in teams and move fast to respond to market and consumer needs. Together, we bring joy to our consumers by serving quality coffee and delivering better service standards to communities - and we're
                just getting started.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 text-center bg-gray-300 team">
        <h2 className="pl-16 -mt-5 text-2xl text-left font-semibold">OUR TEAM</h2>
        <div className="flex px-16 mt-8 ">
          <div>
            <div className="flex mb-8 member">
              <div className="image">
                <img src="Source/assets career/Our Team/accounting.jpg" alt="Image 1" className="w-[50em] h-[150px]" />
              </div>
              <div className="px-8 ml-4 text-sm content">
                <p className="font-bold text-left">Accounting, Control, Tax and Treasury</p>
                <p className="text-left">It’s more than numbers, we are trusted to ensure our leaders have the most up to date and reliable information to help make the best possible decisions.</p>
              </div>
            </div>

            <div className="flex mt-14 member">
              <div className="image">
                <img src="Source/assets career/Our Team/creative.jpg" alt="Image 2" className="w-[70em] h-[150px]" />
              </div>
              <div className="px-8 ml-2 text-sm content">
                <p className="font-bold text-left">Creative</p>
                <p className="text-left">
                  We are a visual powerhouse. We are all about nurturing imagination and turning thoughts into the ideas that give our brands the edge. We connect with our customers through visual storytelling in-store and/or online
                  experience.
                </p>
              </div>
            </div>

            <div className="flex mt-14 member">
              <div className="image">
                <img src="Source/assets career/Our Team/growth.jpg" alt="Image 3" className="w-[57em] h-[150px] -mt-8" />
              </div>
              <div className="px-8 ml-1 -mt-8 text-sm content">
                <p className="font-bold text-left">Growth and Product</p>
                <p className="text-left">Our team is tasked to think BIG; through analysis of market trends, consumer behavior and we innovate and build digital products to improve consumer experience online.</p>
              </div>
            </div>

            <div className="flex mt-14 member">
              <div className="image">
                <img src="Source/assets career/Our Team/legal.jpg" alt="Image 4" className="w-[65em] h-[150px] -mt-8" />
              </div>
              <div className="px-8 ml-4 -mt-8 text-sm content">
                <p className="font-bold text-left">Legal</p>
                <p className="text-left">Our legal team is deeply involved in every aspect of Kopi Kenangan’s businesses and operations. We provide support from contracting to compliance for existing to new projects and expansion plans.</p>
              </div>
            </div>

            <div className="flex  mt-14 member">
              <div className="image">
                <img src="Source/assets career/Our Team/operation.jpg" alt="Image 5" className="w-[65em] h-[150px]" />
              </div>
              <div className="px-8 text-sm ml-2 content">
                <p className="font-bold text-left">Operations</p>
                <p className="text-left">We constantly push boundaries to improve our consumer experience at our retail outlets. We ensure our team follow standard operating procedures to drive a high standard of service quality.</p>
              </div>
            </div>

            <div className="flex mt-10 member">
              <div className="image">
                <img src="Source/assets career/Our Team/supply chain.jpg" alt="Image 6" className="w-[580px] h-[150px]" />
              </div>
              <div className="text-sm ml-10 content">
                <p className="font-bold text-left">Supply Chain Management</p>
                <p className="text-left">Our team ensures all Kopi Kenangan stores across Indonesia has fresh and quality inventory through seamless distribution network.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex mb-8 member">
              <div className="image">
                <img src="Source/assets career/Our Team/business.jpg" alt="Image 7" className="w-[60em] h-[150px]" />
              </div>
              <div className="px-8 ml-2 text-sm content">
                <p className="font-bold text-left">Business Development</p>
                <p className="text-left">We are the driving engine that charter new area of growth in Kopi Kenangan; be it retail development, retail experience, product development, or championing new brands.</p>
              </div>
            </div>

            <div className="flex mt-8 member">
              <div className="image">
                <img src="Source/assets career/Our Team/founders.jpg" alt="Image 8" className="w-[90em] h-[150px]" />
              </div>
              <div className="px-8 ml-2 text-sm content">
                <p className="font-bold text-left">Founders’ Office</p>
                <p className="text-left">
                  We work closely with the founders and senior management of the company. We are responsible for formulating and executing the long-term strategy of the company performing Corporate Finance function, as well as leading
                  initiatives that shape the future of Kopi Kenangan.
                </p>
              </div>
            </div>

            <div className="flex mt-8 member">
              <div className="image">
                <img src="Source/assets career/Our Team/human.jpg" alt="Image 9" className="w-[55em] h-[150px]" />
              </div>
              <div className="px-8 ml-1 text-sm content">
                <p className="font-bold text-left">Human Resource</p>
                <p className="text-left">People are our top of mind and we see everyone in Kopi Kenangan as one big family. We therefore are constantly innovating to better our employee experience.</p>
              </div>
            </div>

            <div className="flex mt-8 member">
              <div className="image">
                <img src="Source/assets career/Our Team/marketing.jpg" alt="Image 10" className="w-auto h-auto" />
              </div>
              <div className="px-8 ml-4 text-sm content">
                <p className="font-bold text-left">Marketing</p>
                <p className="text-left">We connect our customers through compelling stories, campaigns, and relevant media strategy. Together, we build our brand and shift customers' perception to favour us as their first choice.</p>
              </div>
            </div>

            <div className="flex mt-8 member">
              <div className="image">
                <img src="Source/assets career/Our Team/quality.jpg" alt="Image 11" className="w-[65em] h-[150px]" />
              </div>
              <div className="px-8 ml-1 text-sm content">
                <p className="font-bold text-left">Quality Assurance</p>
                <p className="text-left">Our team conduct frequent vendors' audit to ensure Kopi Kenangan’s expectations are met. We conduct internal audit on hygiene, safety and consistency for the best coffee quality.</p>
              </div>
            </div>

            <div className="flex mt-12 member">
              <div className="image">
                <img src="Source/assets career/Our Team/tehcnology.jpg" alt="Image 12" className="w-[50em] h-[150px]" />
              </div>
              <div className="px-8 ml-2 text-sm content">
                <p className="font-bold text-left">Technology and Business Intelligence</p>
                <p className="text-left">We are the technical engines; we build software solution, digital products and tools; as well as train data models to support business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default career;
