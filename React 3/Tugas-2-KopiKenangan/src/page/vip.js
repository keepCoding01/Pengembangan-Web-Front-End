import React, { useState } from "react";
import Scroll from "../layout/scroll";

const VIP = () => {
  const [faqStatus, setFaqStatus] = useState(Array(5).fill(false));
  const toggleFaq = (index) => {
    const newFaqStatus = [...faqStatus];
    newFaqStatus[index] = !newFaqStatus[index];
    setFaqStatus(newFaqStatus);
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VIP</title>
        <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
      </head>
      <body>
        <div id="scrol" className="bg-red-500 bg-cover bg-center bg-no-repeat flex flex-col justify-end h-[800px]">
          <img src="Source/assetsvip/1.png" className="w-auto object-cover h-[800px]" alt="" />
          <a href="https://apps.apple.com/id/app/kopi-kenangan-indonesia/id1458086649?mt=8" className="text-decoration-none text-black">
            {" "}
          </a>
          <p className="absolute my-12 py-1 ml-[520px] bg-gradient-to-r from-[#ab810f] via-yellow-500 to-[#ab810f] text-center w-52 h-12 rounded-full font-bold text-white text-2xl border-b-[6px] border-yellow-800">JOIN NOW</p>
        </div>

        <div className="section-2 bg-[#bea693] flex justify-between items-center px-24 py-8 h-64">
          <h1 className="loyalty font-semibold text-5xl leading-tight w-[800px]">
            TENTANG LOYALTY <br />
            KENANGAN VIP
          </h1>
          <p className="s2 w-[900px] text-xl">Kenangan VIP merupakan program loyalty dari Kenangan Brands yang dihadirkan khusus untuk teman mantan dimana nantinya akan ada banyak benefit spesial untuk para teman mantan.</p>
        </div>

        <div className="section-3 text-center sm:px-3">
          <h2 className="text-4xl mt-16 font-bold">APA YANG AKAN KAMU DAPATKAN?</h2>
          <p className="text-lg mt-8 w-[800px] ml-56">Setiap Teman Mantan yang berpartisipasi dalam program loyalty Kenangan VIP dapat menikmati beberapa keuntungan menarik yang berbeda setiap tingkatan level loyalty yang mereka miliki.</p>
          <p className="text-lg mt-4">Adapun keuntungan-keuntungan tersebut dapat dilihat seperti berikut:</p>

          <div className="flex justify-center items-center p-1 sm:px-36">
            <div className="card-1 border-4 border-[#ab810f] rounded-lg w-[1600px] h-72 m-5 flex flex-col justify-center items-center text-center text-lg p-5">
              <a href="https://apps.apple.com/id/app/kopi-kenangan-indonesia/id1458086649?mt=8" className="text-decoration-none text-black">
                <img className="gc w-28 h-20 ml-14" src="Source/assetsvip/2.png" alt="Regular" />
                <h3 className="font-bold mt-5">REGULAR CASHBACK</h3>
                <p className="font-semibold">Cashback Kenangan Points untuk setiap transaksi</p>
              </a>
            </div>
            <div className="card-1 border-4 border-[#ab810f] rounded-lg w-[1600px] h-72 m-5 flex flex-col justify-center items-center text-center text-lg p-5">
              <a href="https://apps.apple.com/id/app/kopi-kenangan-indonesia/id1458086649?mt=8" className="text-decoration-none text-black">
                <img className="gc w-20 h-20 ml-16" src="Source/assetsvip/3.png" alt="Regular" />
                <h3 className="font-bold mt-5">BIRTHDAY TREATS</h3>
                <p className="font-semibold">E-Voucher Birthday spesial</p>
              </a>
            </div>
            <div className="card-1 border-4 border-[#ab810f] rounded-lg w-[1600px] h-72 m-5 flex flex-col justify-center items-center text-center text-lg p-5">
              <a href="https://apps.apple.com/id/app/kopi-kenangan-indonesia/id1458086649?mt=8" className="text-decoration-none text-black">
                <img className="gc w-20 h-20 ml-16" src="Source/assetsvip/4.png" alt="Regular" />
                <h3 className="font-bold mt-5">EXCLUSIVE PROMOTION</h3>
                <p className="font-semibold">Promo Eksklusif setiap bulan</p>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center text-center">
            <div className="card-1 border-4 border-[#ab810f] rounded-lg w-[280px] h-72 m-5 flex flex-col justify-center items-center text-center text-lg p-5">
              <a href="https://apps.apple.com/id/app/kopi-kenangan-indonesia/id1458086649?mt=8" className="text-decoration-none text-black">
                <img className="gc w-20 h-20 ml-16" src="Source/assetsvip/5.png" alt="Regular" />
                <h3 className="font-bold mt-5">SPECIAL TREATS</h3>
                <p className="font-semibold">Kesempatan mencoba menu terbaru dengan promo spesial</p>
              </a>
            </div>
            <div className="card-1 border-4 border-[#ab810f] rounded-lg w-[280px] h-72 m-5 flex flex-col justify-center items-center text-center text-lg p-5">
              <a href="https://apps.apple.com/id/app/kopi-kenangan-indonesia/id1458086649?mt=8" className="text-decoration-none text-black">
                <img className="gc w-20 h-20 ml-16" src="Source/assetsvip/6.png" alt="Regular" />
                <h3 className="font-bold mt-5">BLACK REWARD TREATS</h3>
                <p className="font-semibold">Program spesial khusus VIP Black Member</p>
              </a>
            </div>
          </div>
        </div>

        <div className="section-4 bg-[#2e220a] text-white h-[800px]">
          <h2 className="gabung text-center text-3xl py-8 font-bold">HANYA BUTUH BEBERAPA LANGKAH UNTUK BERGABUNG</h2>
          <div className="tombol flex justify-center items-center">
            <p className="button bg-white text-black border-4 border-[#c2ab6a] rounded-3xl text-center text-lg py-2 w-52 h-14 mx-5">
              <strong>via Online</strong>
            </p>
            <p className="button bg-white text-black border-4 border-[#d2c08f] rounded-3xl text-center text-lg py-1 w-40 h-11 mx-5 opacity-50">
              <strong>via Store</strong>
            </p>
          </div>

          <div className="tengah flex my-5 sm:px-24">
            <img className="sister w-[500px] h-[500px] mr-8" src="https://images.squarespace-cdn.com/content/v1/5fa1095912d2fc6dfc63ac9c/6a103f03-7d55-49a1-84bc-552254c260b2/online-07.png" alt="satu" />
            <img className="sister w-[500px] h-[500px] mr-8" src="https://images.squarespace-cdn.com/content/v1/5fa1095912d2fc6dfc63ac9c/154ed26d-56f5-4155-8b42-76b6cb67bab4/online-08.png" alt="satu" />
            <img className="sister w-[500px] h-[500px] mr-8" src="https://images.squarespace-cdn.com/content/v1/5fa1095912d2fc6dfc63ac9c/18cbf692-a0c0-44c1-b5f0-3e08466c3c84/online-09.png" alt="satu" />
          </div>

          <div className="text-center text-xl">
            <p>
              <b>Lihat progress level dan berbagai keuntungan dari Kenangan VIP di aplikasi Kopi Kenangan</b>
            </p>
          </div>
        </div>

        <div class="section-5 bg-[#edbf98] text-white p-12 sm:px-48">
          <h1 class="tinggi text-[#2e220a] text-center text-3xl font-bold py-8">SEMAKIN TINGGI LEVELMU, SEMAKIN BANYAK KEUNTUNGANMU</h1>
          <img class="benefit w-[1000px] h-[800px]" src="Source/assetsvip/10.png" alt="tabel" />
          <p class="menikmati text-center text-[#2e220a] text-lg">
            Untuk dapat menikmati benefit yang lebih menguntungkan, Teman Mantan harus terus bertransaksi dan mengumpulkan akumulasi transaksi dalam waktu 1 tahun terhitung dari awal tahun. Adapun setiap level loyalty Kenangan VIP memiliki
            syarat mininum total transaksi yang berbeda-beda.
          </p>
          <br />
          <p class="menikmati text-center text-[#2e220a] text-lg">Adapun syarat tersebut dapat dilihat seperti dibawah ini:</p>
          <img class="ticket w-[900px] h-[300px] mx-auto" src="Source/assetsvip/11.png" alt="silver-gold-black" />
        </div>

        <div class="flex">
          <h1 class="section6FAQ text-center text-4xl my-24 mx-52 font-semibold">FAQ</h1>
          <div class="faq p-5 my-28">
            <br />
            <div class="faq">
              <div class="question">
                <h3 class="font-semibold cursor-pointer m-5" onClick={() => toggleFaq(0)}>
                  + APA ITU KENANGAN VIP LOYALTY PROGRAM?
                </h3>
              </div>
              {faqStatus[0] && (
                <div class="answer">
                  <p class="p-14 mr-10 text-sm">
                    Kenangan VIP loyalty program adalah program loyalty terbaru dari Kenangan Brands yang akan hadir mulai tanggal 1 Januari 2024 dengan keuntungan & tingkatan yang baru. Selain itu, perhitungan tingkatan didasarkan pada
                    transaksi mulai 1 Januari - 31 Desember 2023. Selanjutnya, perhitungan tingkatan akan mengikuti tahun berjalan.
                  </p>
                </div>
              )}
            </div>
            <div class="faq">
              <div class="question">
                <h3 class="font-semibold cursor-pointer m-5" onClick={() => toggleFaq(1)}>
                  + APAKAH CINTA TETAP ADA PADA KENANGAN VIP LOYALTY PROGRAM?
                </h3>
              </div>
              {faqStatus[1] && (
                <div class="answer">
                  <p class="p-14 text-sm mr-12">
                    Mulai tanggal 1 Januari 2024, cinta sudah tidak berlaku lagi sebagai acuan progress level loyalty. Namun, hal tersebut digantikan dengan total nilai transaksi sebagai alat ukur progress loyalty yang baru. Level
                    membership terbaru pada Kenangan VIP dibagi menjadi 3 yaitu: <strong>Silver, Gold, & Black.</strong>
                  </p>
                </div>
              )}
            </div>
            <div class="faq">
              <div class="question">
                <h3 class="font-semibold cursor-pointer m-5" onClick={() => toggleFaq(2)}>
                  + BAGAIMANA MENENTUKAN LEVEL BARU SAYA DI KENANGAN VIP LOYALTY PROGRAM?
                </h3>
              </div>
              {faqStatus[2] && (
                <div class="answer">
                  <p class="px-14 pt-14 text-sm mr-10">
                    Terhitung 1 Januari 2024, alat ukur penentuan progress level loyalty yang digunakan yaitu nilai total yang dibayarkan untuk setiap kali transaksi yang kamu lakukan dan setiap level memiliki minimum total nilai transaksi
                    untuk naik atau mempertahankan level, berikut detailnya :
                  </p>
                  <p class="pl-14 pt-8 text-sm">
                    <strong>Silver :</strong> Tidak ada minimal jumlah transaksi
                  </p>
                  <p class="pl-14 py-2 text-sm">
                    <strong>Gold :</strong> Jumlah transaksi yang dibutuhkan sebesar Rp700.000
                  </p>
                  <p class="pl-14 pb-8 text-sm">
                    <strong>Black :</strong> Jumlah transaksi yang dibutuhkan sebesar Rp10.000.000
                  </p>
                  <p class="pl-14 py-2 text-sm mr-28 pb-8">
                    Dalam hal ini, transaksi yang dihitung merupakan jumlah pembayaran final setelah diskon & termasuk Delivery Fee ataupun Take Away Charge. Selain itu, transaksi yang dihitung merupakan transaksi yang dilakukan lewat
                    pembelian online via aplikasi Kopi Kenangan, Offline store (input nomor telepon lewat barista), serta QR-Scan.
                  </p>
                  <p class="px-14 pb-14 text-sm mr-10 italic">*Transaksi yang tidak dihitung sebagai progress level yaitu transaksi melalui aplikasi Agregator seperti Grabfood, GoFood, & ShopeeFood</p>
                </div>
              )}
            </div>
            <div class="faq">
              <div class="question">
                <h3 class="font-semibold cursor-pointer m-5" onClick={() => toggleFaq(3)}>
                  + APAKAH YANG DIMAKSUD DENGAN BIRTHDAY TREATS?
                </h3>
              </div>
              {faqStatus[3] && (
                <div class="answer">
                  <p class="pl-14 pt-14 mr-28 text-sm">
                    Birthday Treats merupakan salah satu hadiah yang diberikan khusus untuk level membership level <strong> Gold & Black</strong>. Di mana:
                  </p>
                  <p class="pl-14 pt-3 mr-28 text-sm">
                    - <strong> Gold</strong> membership hanya akan mendapatkan <strong>1 E-voucher ulang tahun</strong> yang akan dibagikan di bulan ulang tahun member & lewat aplikasi Kopi Kenangan.
                  </p>
                  <p class="pl-14 pt-3 mr-28 text-sm">
                    - Sedangkan, untuk <strong>Black </strong>membership mendapatkan <strong>3 E-voucher ulang tahun </strong>yang akan dibagikan di bulan ulang tahun member & lewat aplikasi Kopi Kenangan.
                  </p>
                  <p class="pl-14 pt-3 mr-28 text-sm">*Catatan:</p>
                  <p class="pl-14 pt-3 pb-14 mr-28 text-sm">E-Voucher spesial khusus untuk black member mungkin akan berbeda-beda setiap bulannya dan dapat berubah tanpa pemberitahuan sebelumnya.</p>
                </div>
              )}
            </div>
            <div class="faq">
              <div class="question">
                <h3 class="font-semibold cursor-pointer m-5" onClick={() => toggleFaq(4)}>
                  + APAKAH YANG DIMAKSUD DENGAN EXCLUSIVE PROMOTION?
                </h3>
              </div>
              {faqStatus[4] && (
                <div class="answer">
                  <p class="pl-14 pt-14 mr-28 text-sm">Exclusive Promotion merupakan keuntungan khusus untuk Black Members dimana nantinya akan ada Cashback/Diskon khusus yang diberikan setiap bulannya.</p>
                  <p class="pl-14 pt-3 mr-28 text-sm">*Catatan:</p>
                  <p class="pl-14 pt-3 pb-14 mr-28 text-sm">Keuntungan berupa Cashback/Diskon sepenuhnya diatur oleh Kopi Kenangan & dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.</p>
                </div>
              )}
            </div>
            <div class="faq">
              <div class="question">
                <h3 class="font-semibold cursor-pointer m-5" onClick={() => toggleFaq(5)}>
                  + APAKAH YANG DIMAKSUD DENGAN BLACK REWARD TREATS?
                </h3>
              </div>
              {faqStatus[5] && (
                <div class="answer">
                  <p class="pl-14 pt-14 mr-28 text-sm">
                    <strong>Black Reward Treats</strong> merupakan salah satu keuntungan khusus bagi Black Members dimana nantinya akan ada program spesial di aplikasi Kopi Kenangan setiap bulannya. Nantinya, masing-masing Black Members
                    dapat berpartisipasi dan mendapatkan reward khusus yang berbeda beda setiap bulannya.
                  </p>
                  <p class="pl-14 pt-3 mr-28 text-sm">*Catatan:</p>
                  <p class="pl-14 pt-3 mr-28 text-sm">- Informasi terkait game/quiz khusus berikut akan di informasikan lewat Email ataupun Push Notification setiap bulannya kepada Black Members.</p>
                  <p class="pl-14 pt-3 mr-28 text-sm">- Hadiah sepenuhnya diatur oleh Kopi Kenangan & dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div class="section-7 pb-20 pb px-36 sm:px-64">
          <div class="kartuTerakhir bg-[#edbf98] w-[800px] h-[420px] flex justify-center items-center mx-auto">
            <div class="isi bg-white rounded-lg w-[780px] h-[400px] flex flex-col justify-center items-center text-center">
              <h3 class="text-3xl font-semibold tracking-wider pt-10">More Points & Benefits or Coffee</h3>
              <h3 class="text-3xl font-semibold tracking-wider">FOR FREE?</h3>
              <div class="buttonsambung flex justify-center items-center group:">
                <a href="https://apps.apple.com/id/app/kopi-kenangan-indonesia/id1458086649?mt=8" class="text-decoration-none">
                  <h3 class="join1 bg-[#2e220a] text-white w-[400px] text-4xl pl-5 h-20 mt-10 rounded-full font-semibold flex justify-start items-center">
                    Join{" "}
                    <span class="rounded-full items-center flex justify-center ml-2 w-[320px] h-20 bg-gradient-to-r from-[#ab810f] via-yellow-500 to-[#ab810f]">
                      Kenangan <span class="font-bold"> VIP</span>
                    </span>
                  </h3>
                </a>
              </div>
              <div class="store flex justify-center items-center mt-5">
                <img class="play w-48" src="Source/assetsvip/14.png" alt="Play Store" />
                <img class="play w-48" src="Source/assetsvip/15.png" alt="App Store" />
              </div>
            </div>
          </div>
        </div>

        <Scroll />
      </body>
    </html>
  );
};

export default VIP;
