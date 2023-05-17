import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles.js";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        imgUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
