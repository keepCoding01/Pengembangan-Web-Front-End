import React from "react";

const Scroll = () => {
  return (
    <footer className="px-10 text-white bg-black h-300 pb-250">
      <div className="flex gap-24 pt-10">
        <div className="flex pl-40 pr-24 mt-10">
          <img className="w-auto h-14" src="Source/assets download/KK-WBA-WHITE.png" alt="Logo 1" />
          <img className="w-auto h-14" src="Source/assets download/KK-Halal-White.png" alt="Logo 2" />
        </div>
        <div className="absolute pl-20 mt-28 left-10">
          <p>
            Hak Cipta ©2020 <b>PT Bumi Berkah Boga</b>
          </p>
        </div>

        <div className="pl-32 text-left">
          <span className="text-lg font-bold underline">OUR LOCATION</span>
          <p>Jl. Pakubuwono VI No. 107 RT 11/RW 2, Gunung, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12120</p>

          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1351619432155!2d106.7842229!3d-6.2387607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f13d8b9beb3d%3A0x245a074cee97d97a!2sJl.%20Pakubuwono%20VI%20No.107%2C%20RT.11%2FRW.2%2C%20Gunung%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012120!5e0!3m2!1sen!2sid!4v1649869199303!5m2!1sen!2sid"
              width="550"
              height="170"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-12 text-lg font-bold">
        <p className="mr-4">Curhat Yuk 031-7075-6865</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi-whatsapp" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
        <p>Whatsapp Chat Only</p>
      </div>

      <div className="mt-8 font-semibold text-center">
        <p>Consumer Complaints Service Contact Information</p>
      </div>

      <div className="mt-1 text-center">
        <p>Directorate General of Consumer Protection and Trade Compliance, Ministry of Trade of the Republic of Indonesia</p>
        <div className="mt-2">
          <p>Whatsapp Diktjen PKTN: 0853-1111-1010</p>
        </div>
        <div class=" flex w-10 h-10 rounded-full cursor-pointer bg-orange-300 bottom-5 right-5 ml-[1100px]">
          <a href="#" class="m-auto text-xl ">
            🔝
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Scroll;
