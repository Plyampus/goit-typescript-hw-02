export interface ImageItem {
  id: string;
  urls: {
    small: string;
  };
  slug: string;
}

export interface ImageGalleryProps {
  items: ImageItem[];
  onImageClick: (id: string) => void;
}

