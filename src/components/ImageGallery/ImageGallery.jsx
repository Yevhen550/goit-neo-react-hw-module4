import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <div className={s.gallery}>
      <ul className={s.galleryList}>
        {images.map((img) => (
          <li key={img.id}>
            <ImageCard image={img} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
