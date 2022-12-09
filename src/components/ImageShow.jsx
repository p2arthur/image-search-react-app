import "../css/ImageShow.css";
import ImageList from "./ImageList";

function ImageShow({ image, alt }) {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
