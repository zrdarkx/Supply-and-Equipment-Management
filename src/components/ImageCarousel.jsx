import { useState } from "react";

const images = [
  "https://jn31a1.com/wp-content/uploads/elementor/thumbs/Slider006a-q2xs2ru4bhb096z2tts7erw0vxa6icl2jczcty3b4e.jpeg",
  "https://jn31a1.com/wp-content/uploads/elementor/thumbs/Slider007a-q2xrsm6wgxegsvq74xqbyu5pt1cec39hh37h5b5gcu.jpeg",
  "https://jn31a1.com/wp-content/uploads/elementor/thumbs/Imagen001a-q2xq2dbnvw6vyi56m13qujmtmg5clo5e8zxx1ng0em.jpeg",
  "https://jn31a1.com/wp-content/uploads/elementor/thumbs/Slider005b-q2xsxi65rhdhu8c2dm03fipk2ft763l53gtuomixou.jpeg",
  "https://jn31a1.com/wp-content/uploads/elementor/thumbs/Slider003-q2mzdc1dzvccfb83ol3yvgxgdb5tiylpm9ol8sawwe.jpeg",
  "https://jn31a1.com/wp-content/uploads/elementor/thumbs/Slider002-q2mzdc1dzvccfb83ol3yvgxgdb5tiylpm9ol8sawwe.jpeg",
  "https://jn31a1.com/wp-content/uploads/elementor/thumbs/Slider001ba-q2xrw0dx5e1qq6spbejtyzbn14m44qql9w0lja49vy.jpeg",
];

function SimpleImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-64 overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Carousel Image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between w-full mt-4">
        <button
          onClick={prevImage}
          className="bg-gray-500 text-white py-1 px-4 rounded"
        >
          Anterior
        </button>
        <button
          onClick={nextImage}
          className="bg-gray-500 text-white py-1 px-4 rounded"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default SimpleImageCarousel;
