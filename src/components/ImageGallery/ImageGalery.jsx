/* eslint-disable react/prop-types */

import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ articles, openModal }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {articles.map((item) => (
          <li className={styles.item} key={item.id}>
            <ImageCard openModal={openModal} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
