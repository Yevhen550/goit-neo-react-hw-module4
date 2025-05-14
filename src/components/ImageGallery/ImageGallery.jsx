import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul>
        {images.map((img) => (
          <li key={img.id}>
            <ImageCard data={img} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
