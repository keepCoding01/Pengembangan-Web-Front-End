import React from "react";
import Footer from "../layout/footer";

const About = () => {
  return (
    <div>
      <div className="section-1 bg-cover bg-center bg-no-repeat w-full h-[800px] mt-8" style={{ backgroundImage: "url('Source/assetsabout/bg.jpg')" }}>
        <h3 className="mission pt-[400px] pl-[100px] font-bold text-1xl">MISSION</h3>
        <p className="mt-8 text-xl font-thinpmission pl-[100px] pr-[60%]">Our mission is to spread our passion for high quality coffee from Indonesia to the rest of Asia.</p>
      </div>
      <div className="section-2 flex px-[100px] py-[100px] flex-row justify-between items-center">
        <img className="imgsec2 w-[500px] h-[300px]" src="Source/assetsabout/1.jpg" alt="Kopi Kenangan" />
        <div className="kanan2 pl-[10px] w-[500px]">
          <h2 className="text-2xl font-bold">FIRST SOUTHEAST ASIAN F&B NEW RETAIL UNICORN</h2>
          <p className="mt-10">
            Kopi Kenangan is one of the fastest growing grab-and-go coffee chain in Indonesia. The idea of Kopi Kenangan started because the founders have the mission to spread their passion for Indonesian coffee as a local brand from
            Indonesia to the rest of the world.
          </p>
        </div>
      </div>
      <div className="section-3 px-[100px] py-[100px]">
        <h3 className="kata3 flex items-center justify-center font-bold text-2xl">We started operation in 2017, and to date:</h3>
        <div className="2-baris">
          <div>
            <div className="baris-atas flex justify-between items-center m-[20px]">
              <div className="card-1">
                <h3 className="pl-[70px] pt-[100px] font-bold text-[20px]">Our Team</h3>
                <p className="mb-[50px] w-[180px] ml-8 text-center">International experience and exposure</p>
                <img className="gc1 w-[250px] h-[180px] pt-[30px]" src="Source/assetsabout/3.jpg" alt="coffee sold" />
              </div>
              <div className="card-2">
                <img className="gc2 w-[270px] h-[230px] py-[30px] -mt-16 ml-4" src="Source/assetsabout/2.jpg" alt="our team" />
                <h3 className="pl-[75px] pt-[40px] font-bold text-[20px]">Coffee Sold</h3>
                <p className="ml-[30px]">30 million cups in year 2020</p>
              </div>
              <img className="one w-[560px] h-[460px] pt-[40px] ml-10 mr-10" src="Source/assetsabout/4.jpg" alt="foto rame" />
            </div>
            <div className="baris-bawah flex justify-between items-center m-[20px]">
              <div className="kiri flex flex-col justify-between items-center">
                <img className="bg w-[550px] h-[420px] pt-[100px] mt-4" src="Source/assetsabout/5.jpg" alt="employees" />
                <h3 className="font-bold text-[20px] mt-10">Employees</h3>
                <p>More than 5000</p>
              </div>
              <div className="kanan flex flex-col justify-between items-center">
                <img className="bg w-[480px] h-[450px] pt-[100px]" src="Source/assetsabout/6.png" alt="Our Footprints" />
                <h3 className="font-bold text-[20px]">Our Footprints</h3>
                <p>More than 800 stores across 45 cities in Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-4 px-[100px] py-[100px]">
        <h1 className="leader flex items-center justify-center mb-[70px] text-4xl font-bold">OUR LEADERSHIP</h1>
        <div className="kartu flex justify-center">
          <div className="kartu-1 flex flex-col m-[40px] w-[120px] text-center items-center">
            <h2 className="text-2xl">EDWARD TIRTANATA</h2>
            <p className="mt-4 text-[12px]">Co-Founder and Chief Executive Officer</p>
          </div>
          <div className="kartu-2 flex flex-col m-[40px] w-[120px] text-center items-center">
            <h2 className="text-2xl">JAMES PRANANTO</h2>
            <p className="mt-4 text-[12px] w-40">Co-Founder and Chief Business Development Officer</p>
          </div>
          <div className="kartu-3 flex flex-col m-[40px] w-[120px] text-center items-center">
            <h2 className="text-2xl">CYNTHIA CHAERUNISSA</h2>
            <p className="mt-4 text-[12px]">Co-Founder and Chief Marketing Officer</p>
          </div>
          <div className="kartu-4 flex flex-col m-[40px] w-[120px] text-center items-center">
            <h2 className="text-2xl">GOH CHIN HOU</h2>
            <p className="mt-4 text-[12px] w-24">
              Chief <br />
              Operating Officer
            </p>
          </div>
          <div className="kartu-5 flex flex-col m-[40px] w-[120px] text-center items-center">
            <h2 className="text-2xl">ZENG FENGPING</h2>
            <p className="mt-4 text-[12px]">
              Chief <br />
              Technology Officer
            </p>
          </div>
        </div>
      </div>
      <div class="section-5 px-[100px] py-[200px] mx-auto">
        <h1 class="office text-center mb-[50px] mt-[-150px] font-bold text-[36px] tracking-wider">KOPI KENANGAN OFFICES</h1>
        <div class="atas flex justify-between items-center mx-28">
          <div class="mx-16">
            <a href="https://kopikenangan.com/kopi-kenangan-office/blog-post-title-one-grhb9">
              <img class="sc5 w-[350px] h-[200px]" src="Source/assetsabout/10.jpg" alt="HEADQUARTERS" />
            </a>
            <h3 class="mt-3 text-[20px]">HEADQUARTERS (INDONESIA)</h3>
            <p class="mt-3 w-80 text-[12px]">Menara Sentraya, Lantai 15, Jl. Iskandarsyah Raya No.1A, RT.3/RW.1, Kel. Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, DKI Jakarta – 12160</p>
          </div>
          <div class="kanan-atas m-auto mr-60">
            <a href="https://kopikenangan.com/kopi-kenangan-office/blog-post-title-two-jbpek">
              <img class="sc5 w-[350px] h-[200px]" src="Source/assetsabout/7.jpg" alt="KENANGAN ACADEMY" />
            </a>
            <h3 class="mt-3 text-[20px]">KENANGAN ACADEMY</h3>
            <p class="mt-3 w-80 text-[12px]">Jl. Pakubuwono VI No.105, RW.2, Gunung, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12120</p>
          </div>
        </div>
        <div class="bawah flex justify-between items-center mx-28 mt-16">
          <div class="kiri-bawah mx-16">
            <a href="https://kopikenangan.com/kopi-kenangan-office/blog-post-title-three-rfx52">
              <img class="sc5 w-[350px] h-[200px] -mt-10" src="Source/assetsabout/8.jpg" alt="SINGAPORE OFFICE" />
            </a>
            <h3 class="mt-3 text-[20px]">SINGAPORE OFFICE</h3>
            <p class="mt-3 w-80 text-[12px]">10 KALLANG AVENUE, #05-13 APERIA, SINGAPORE 339510</p>
          </div>
          <div class="kanan-bawah m-auto mr-60">
            <a href="https://kopikenangan.com/kopi-kenangan-office/blog-post-title-four-bzmfe">
              <img class="sc5 w-[350px] h-[200px]" src="Source/assetsabout/9.jpg" alt="MALAYSIA OFFICE" />
            </a>
            <h3 class="mt-3 text-[20px]">MALAYSIA OFFICE</h3>
            <p class="text-[12px] mt-3">Kopi Kenangan Sdn Bhd</p>
            <p class="mt-3 w-80 text-[12px]">27A & 27B, Jalan SS21/1A, Damansara Utama, 47400 Petaling Jaya, Selangor</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
