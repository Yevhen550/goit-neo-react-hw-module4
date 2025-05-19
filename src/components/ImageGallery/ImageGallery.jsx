import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className={s.gallery}>
      <ul className={s.galleryList}>
        {images.map((img) => (
          <li key={img.id}>
            <ImageCard image={img} onClick={() => onImageClick(img)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
