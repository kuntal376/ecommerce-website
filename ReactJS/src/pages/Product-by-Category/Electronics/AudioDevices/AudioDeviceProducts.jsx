import React from "react";
import { Link } from "react-router-dom";
import boAtRockerz480  from '../images/boAt Rockerz 480.webp';
import boAtRockerz480_2  from '../images/boAt Rockerz 480_2.webp';
import boAtRockerz480_3  from '../images/boAt Rockerz 480_3.webp';
import boAtRockerz512ANC from '../images/boAt Rockerz 512 ANC.webp';
import boAtRockerz512ANC_2 from '../images/boAt Rockerz 512 ANC_2.webp';
import boAtRockerz512ANC_3 from '../images/boAt Rockerz 512 ANC_3.webp';
import SonyEX15C from '../images/SONY IER-EX15C Type-C Earphones.webp';
import realmeT200 from '../images/realme T200 Hi-Res with 32dB ANC.webp';
import realmeT200_2 from '../images/realme T200 Hi-Res with 32dB ANC_2.webp';
import realmeT200_3 from '../images/realme T200 Hi-Res with 32dB ANC_3.webp';
import SonyWHCH520 from '../images/SONY WH-CH520.webp';
import SonyWHCH520_2 from '../images/SONY WH-CH520_2.webp';
import SonyWHCH520_3 from '../images/SONY WH-CH520_3.webp';
import boAtStone1800 from '../images/boAt Stone 1800 - 90 W speaker.webp';
import boAtStone1800_2 from '../images/boAt Stone 1800 - 90 W speaker_2.webp';


const products = [
  {
    id: 1,
    brand: "boAt",
    name: "boAt Rockerz 480",
    category: "Headphones",
    driverSize: "40 mm",
    connectivity: "Bluetooth",
    bluetoothVersion: "5.3",
    noiseCancellation: "ENC",
    noiseCancellationValue: null,
    playbacktime: "60 hrs",
    price: 2499,
    images: [boAtRockerz480,boAtRockerz480_2,boAtRockerz480_3]
  },
  {
    id: 2,
    brand: "boAt",
    name: "boAt Rockerz 512 ANC",
    category: "Headphones",
    driverSize: "40 mm",
    connectivity: "Bluetooth",
    bluetoothVersion: "5.4",
    noiseCancellation: "ANC",
    noiseCancellationValue: "40 dB",
    playbacktime: "80 hrs",
    price: 3999,
    images: [boAtRockerz512ANC,boAtRockerz512ANC_2,boAtRockerz512ANC_3]
  },
  {
    id: 3,
    brand: "Sony",
    name: "Sony IER-EX15C Type-C Wired Earphones",
    category: "Earphones",
    driverSize: "9 mm",
    connectivity: "Wired",
    bluetoothVersion: null,
    noiseCancellation: "Passive",
    noiseCancellationValue: null,
    playbacktime: null,
    price: 1299,
    images: [SonyEX15C]
  },
  {
    id: 4,
    brand: "Realme",
    name: "realme T200 Hi-Res ANC Bluetooth Earbuds",
    category: "Earbuds",
    driverSize: "12.4 mm",
    connectivity: "Bluetooth",
    bluetoothVersion: "5.4",
    noiseCancellation: "ANC",
    noiseCancellationValue: "32 dB",
    playbacktime: "50 hrs",
    price: 1799,
    images: [realmeT200,realmeT200_2,realmeT200_3]
  },
  {
    id: 5,
    brand: "Sony",
    name: "Sony WH-CH520 Bluetooth Headphones",
    category: "Headphones",
    driverSize: "30 mm",
    connectivity: "Bluetooth",
    bluetoothVersion: "5.2",
    noiseCancellation: "None",
    noiseCancellationValue: null,
    playbacktime: "50 hrs",
    price: 3999,
    images: [SonyWHCH520,SonyWHCH520_2,SonyWHCH520_3]
  },
  {
    id: 6,
    brand: "boAt",
    name: "boAt Stone 1800  90 W Bluetooth Speaker",
    category: "Speaker",
    driverSize: null,
    connectivity: "Bluetooth",
    bluetoothVersion: "5.0",
    noiseCancellation: "None",
    noiseCancellationValue: null,
    playbacktime: "5 hrs",
    price: 6999,
    images: [boAtStone1800,boAtStone1800_2]
  }

];

const AudioDeviceProducts = ({ filters }) => {
  const filteredProducts = products.filter((product) => {

    const categoryMatch =  filters.category.length === 0 ||  filters.category.includes(product.category);
    const connectivityMatch = filters.connectivity.length === 0 || filters.connectivity.includes(product.connectivity);
    const noiseCancellationMatch = filters.noiseCancellation.length === 0 || filters.noiseCancellation.includes(product.noiseCancellation);
    const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand);
    const priceMatch = !filters.price || product.price <= filters.price;

    return (
      categoryMatch && 
      connectivityMatch &&
      brandMatch && 
      noiseCancellationMatch &&
      priceMatch
    );
  })

  .sort((a, b) => {
    if (filters.sort === "price-asc") {
      return a.price - b.price;
    }
    if (filters.sort === "price-desc") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
      <div className="h-min grid grid-cols-3 gap-4 flex-1">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-md p-4 bg-white hover:shadow-lg transition">
            <Link to={product.name}>
            <div className="flex gap-x-8 overflow-auto scrollbar-hide">
              {product.images.map((img,index) => (
                <img key={index} src={img} alt={product.name}
                  className="w-60 h-60 object-contain flex-shrink-0"
                />
              ))}
            </div></Link>

            <h3 className="text-sm font-medium mt-2">{product.name}</h3>

            <p className="text-green-600 font-semibold">₹{product.price.toLocaleString()}</p>

            <div className="text-sm mt-2 grid grid-cols-[140px_1fr] gap-y-2">

              <span className="font-medium">Category:</span><span>{product.category}</span>

              <span className="font-medium">Connectivity:</span><span>{product.connectivity}</span>

              {product.connectivity === "Bluetooth" && product.bluetoothVersion && (
                <>
                  <span className="font-medium">Bluetooth:</span><span>{product.bluetoothVersion}</span>
                </>
              )}

              {product.driverSize && (
                <>
                  <span className="font-medium">Driver Size:</span><span>{product.driverSize}</span>
                </>
              )}

              <span className="font-medium">Noise Cancellation:</span><span>{product.noiseCancellation}</span>

              {product.noiseCancellation === "ANC" && product.noiseCancellationValue && (
                <>
                  <span className="font-medium">ANC Level:</span><span>{product.noiseCancellationValue}</span>
                </>
              )}

              {product.connectivity === "Bluetooth" && product.playbacktime && (
                <>
                  <span className="font-medium">Playback:</span><span>{product.playbacktime}</span>
                </>
              )}

            </div>



          </div>
        ))}
      </div>
    </>
  );
};

export default AudioDeviceProducts;
