import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [produkDiKeranjang, kontrolProdukDiKeranjang] = useState([]);
  const [produkYangDipilih, kontrolProdukYangDipilih] = useState([]);
  const [totalHarga, setTotalHarga] = useState(0);
  const [kartuUcapan, setKartuUcapan] = useState(false); // untuk menampilkan kartu konfirmasi

  useEffect(() => {
    const produkTersimpan = JSON.parse(localStorage.getItem("cart")) || [];
    kontrolProdukDiKeranjang(produkTersimpan);

    // Kosongkan localStorage jika belum ada item di dalamnya saat pertama kali loading
    if (produkTersimpan.length === 0) {
      localStorage.removeItem("cart");
    }
  }, []);

  useEffect(() => {
    // menghitung total harga berdasarkan item yang dicentang
    let total = 0;
    produkYangDipilih.forEach((item) => {
      total += item.quantity * item.price;
    });
    setTotalHarga(total);
  }, [produkYangDipilih]);

  const kontrolPerubahanKuantitas = (id, quantity) => {
    const perbaruiProdukDiKeranjang = produkDiKeranjang.map((item) => (item.id === id ? { ...item, quantity: Math.max(item.quantity + quantity, 1) } : item));
    kontrolProdukDiKeranjang(perbaruiProdukDiKeranjang);
    localStorage.setItem("cart", JSON.stringify(perbaruiProdukDiKeranjang));
  };

  const kontrolPenghapusanProduk = (id) => {
    const perbaruiProdukDiKeranjang = produkDiKeranjang.filter((item) => item.id !== id);
    kontrolProdukDiKeranjang(perbaruiProdukDiKeranjang);
    localStorage.setItem("cart", JSON.stringify(perbaruiProdukDiKeranjang));
    kontrolProdukYangDipilih(produkYangDipilih.filter((item) => item.id !== id));
  };

  const kontrolPenghapusanDariToko = (namaToko) => {
    const perbaruiProdukDiKeranjang = produkDiKeranjang.filter((item) => item.shop.name !== namaToko);
    kontrolProdukDiKeranjang(perbaruiProdukDiKeranjang);
    localStorage.setItem("cart", JSON.stringify(perbaruiProdukDiKeranjang));
    kontrolProdukYangDipilih(produkYangDipilih.filter((item) => item.shop.name !== namaToko));
  };

  const kontrolHapusSemuaProduk = () => {
    kontrolProdukDiKeranjang([]);
    localStorage.removeItem("cart");
    kontrolProdukYangDipilih([]);
  };

  const toggleProdukDipilih = (id) => {
    const produkTerpilih = produkDiKeranjang.find((item) => item.id === id);
    if (produkYangDipilih.some((item) => item.id === id)) {
      kontrolProdukYangDipilih(produkYangDipilih.filter((item) => item.id !== id));
    } else {
      kontrolProdukYangDipilih([...produkYangDipilih, produkTerpilih]);
    }
  };

  const toggleProdukDipilihDariToko = (namaToko) => {
    const produkDariToko = produkDiKeranjang.filter((item) => item.shop.name === namaToko);
    const produkYangDipilihDariToko = produkYangDipilih.filter((item) => item.shop.name === namaToko);
    if (produkYangDipilihDariToko.length === produkDariToko.length) {
      kontrolProdukYangDipilih(produkYangDipilih.filter((item) => item.shop.name !== namaToko));
    } else {
      const produkYangBelumDipilih = produkDariToko.filter((item) => !produkYangDipilih.some((selected) => selected.id === item.id));
      kontrolProdukYangDipilih([...produkYangDipilih, ...produkYangBelumDipilih]);
    }
  };

  const kontrolCatatan = (id, note) => {
    const perbaruiProdukDiKeranjang = produkDiKeranjang.map((item) => (item.id === id ? { ...item, note: note } : item));
    kontrolProdukDiKeranjang(perbaruiProdukDiKeranjang);
    localStorage.setItem("cart", JSON.stringify(perbaruiProdukDiKeranjang));
  };

  // Mengelompokkan produk berdasarkan toko
  const grupProdukProdukToko = () => {
    const grupProduk = {};
    produkDiKeranjang.forEach((item) => {
      if (!grupProduk[item.shop.name]) {
        grupProduk[item.shop.name] = [];
      }
      grupProduk[item.shop.name].push(item);
    });
    return grupProduk;
  };

  // Apakah ada produk di keranjang
  const cekProdukDiKeranjang = produkDiKeranjang.length > 0;

  // Menangani pembelian
  const kontrolPemelian = () => {
    setKartuUcapan(true); // Tampilkan kartu ucapan terima kasih
  };

  return (
    <div className="container mx-auto flex">
      <div className="w-[75%]">
        <h1 className="text-2xl font-bold mb-6 text-center">Keranjang Belanja</h1>
        {cekProdukDiKeranjang && (
          <div className="mb-6">
            <button onClick={kontrolHapusSemuaProduk} className="bg-pink-500 text-white px-2 w-44 ml-[735px] mt-16 rounded-md">
              Hapus Semua Produk
            </button>
          </div>
        )}
        {produkDiKeranjang.length === 0 ? (
          <p className="text-center text-gray-700 mt-20">Upsss keranjang Anda kosong.</p>
        ) : (
          <>
            {Object.keys(grupProdukProdukToko()).map((namaToko) => (
              <div key={namaToko} className="mb-6 m-3">
                <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
                  <div className="flex items-center">
                    <input type="checkbox" checked={grupProdukProdukToko()[namaToko].every((item) => produkYangDipilih.some((selected) => selected.id === item.id))} onChange={() => toggleProdukDipilihDariToko(namaToko)} className="mr-2" />
                    <h2 className="text-lg font-bold">{namaToko}</h2>
                  </div>
                </div>
                {/* Tombol untuk menghapus semua item dari toko ini */}
                {grupProdukProdukToko()[namaToko].every((item) => produkYangDipilih.some((selected) => selected.id === item.id)) && (
                  <div className="mb-2">
                    <span className="text-pink-500 cursor-pointer ml-1" onClick={() => kontrolPenghapusanDariToko(namaToko)}>
                      Hapus semua item dari toko ini
                    </span>
                  </div>
                )}
                {/* Daftar produk dari toko */}
                <div className="bg-white shadow-md rounded p-4 mt-4">
                  {produkDiKeranjang.map((item) =>
                    item.shop.name === namaToko ? (
                      <div key={item.id} className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center">
                          <input type="checkbox" checked={produkYangDipilih.some((selected) => selected.id === item.id)} onChange={() => toggleProdukDipilih(item.id)} className="mr-2" />
                          <img src={item.images[0]} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold">{item.title}</h3>
                          <p className="text-gray-600">Diskon: {item.discount_percentage}%</p>
                          <p className="text-gray-800">Harga: Rp {item.price}</p>
                          <textarea value={item.note || ""} onChange={(e) => kontrolCatatan(item.id, e.target.value)} placeholder="Tambahkan catatan untuk produk ini" className="border rounded p-2 mt-2 w-full" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <button onClick={() => kontrolPerubahanKuantitas(item.id, -1)} className="bg-gray-200 px-2 rounded">
                            -
                          </button>
                          <input type="text" value={item.quantity} readOnly className="w-12 text-center" />
                          <button onClick={() => kontrolPerubahanKuantitas(item.id, 1)} className="bg-gray-200 px-2 rounded">
                            +
                          </button>
                        </div>
                        <button onClick={() => kontrolPenghapusanProduk(item.id)} className="text-red-500">
                          <FaTrashAlt />
                        </button>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      {/* Ringkasan belanja */}
      <div className="w-[23%] mx-4 mt-52 fixed ml-[963px]">
        <div className="bg-pink-100 shadow-md rounded p-4 mb-6">
          <h2 className="text-lg font-bold mb-4">Ringkasan Belanja</h2>
          <div className="flex justify-between items-center">
            <p className="text-gray-800">Total Harga : Rp {totalHarga}</p>
          </div>
          <div>
            <button onClick={kontrolPemelian} className="bg-pink-400 text-white  h-9 mt-4 w-64 rounded-md">
              Beli
            </button>
          </div>
        </div>
        {/* Kartu ucapan terima kasih */}
        {kartuUcapan && (
          <div className="bg-pink-200 p-4 rounded-md mb-6">
            <p className="text-base font-bold">Barang Anda telah berhasil dibeli.</p>
            <p className="text-gray-800">Terima kasih sudah belanja di toko Pretty Pink!🩷🩷</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
