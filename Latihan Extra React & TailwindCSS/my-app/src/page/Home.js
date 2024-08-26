import React, { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Terjadi kesalahan saat mengambil data produk:", error));
  }, []);

  const tambahBarang = (product) => {
    const produkDiKeranjang = JSON.parse(localStorage.getItem("cart")) || [];
    const produkSudahAda = produkDiKeranjang.find((item) => item.id === product.id);

    if (produkSudahAda) {
      alert("Wah, sepertinya produk ini sudah ada di keranjang!");
      return;
    }

    const pembaruanKeranjang = [...produkDiKeranjang, { ...product, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(pembaruanKeranjang));
    alert("Yeay, berhasil menambahkan produk😍");
  };

  return (
    <div className="container mx-auto pt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-20">
        {products.map((product) => (
          <div key={product.id} className="border-pink-300 p-4 rounded-lg shadow-md bg-white">
            <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-lg font-bold mt-4 text-center text-gray-800">{product.title}</h2>
            <p className="text-gray-600 mt-2 text-center">{product.shop.name}</p>
            <p className="text-red-600 mt-2 text-center">Diskon: {product.discount_percentage}%</p>
            <p className="text-gray-800 mt-2 text-center">Harga: Rp{product.price}</p>
            <button onClick={() => tambahBarang(product)} className="bg-pink-400 text-white px-4 py-2 mt-4 rounded-md block mx-auto">
              Tambahkan ke Keranjang
            </button>
          </div>
        ))}
      </div>
      <div class=" flex w-10 h-10 rounded-full cursor-pointer bg-pink-300 mb-20 -mt-36  right-5 ml-[1100px]">
        <a href="#" class="m-auto text-xl ">
          ↑
        </a>
      </div>
    </div>
  );
};

export default Home;
