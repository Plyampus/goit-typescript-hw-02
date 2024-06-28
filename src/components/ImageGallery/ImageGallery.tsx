import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => (
    <ul className={css["image-gallery"]}>
        {items.map(
            (
                { id, urls, slug }
            ) => (
                <li key={id}>
                    <ImageCard
                        imgUrl={urls.small}
                        imgDescr={slug}
                        onClick={onImageClick}
                    />
                </li>
            )
        )}
    </ul>
);

export default ImageGallery;