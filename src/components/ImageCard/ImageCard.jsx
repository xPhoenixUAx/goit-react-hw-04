/* eslint-disable react/prop-types */
import styles from "./ImageCard.module.css";

const ImageCard = ({ item, openModal }) => {
  return (
    <div>
      <img
        className={styles.img}
        onClick={() => openModal(item)}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
};

export default ImageCard;
