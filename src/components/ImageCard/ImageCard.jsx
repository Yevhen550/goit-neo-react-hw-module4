import s from "./ImageCard.module.css";

const ImageCard = ({ data }) => {
  return (
    <div>
      <img src={data.urls.small} alt="" />
    </div>
  );
};

export default ImageCard;
