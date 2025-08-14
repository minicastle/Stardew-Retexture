import styled from "@emotion/styled";
import { ContentsData } from "../functions/types";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { MdDateRange, MdUpdate } from "react-icons/md";
import { ReactElement, useCallback, useEffect, useState } from "react";
interface Props {
  data: ContentsData;
}
const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  border: 2px solid #d5d5d5;
  width: 100%;
  height: 150px;
  max-height: 150px;
  min-height: 150px;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 1200px;
  :hover {
    scale: 1.01;
  }
  :active {
    scale: 1.01;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  gap: 10px;
  width: 250px;
  min-width: 250px;
  height: 100%;
  min-height: 130px;
  overflow-x: hidden;
`;
const Thumbnail = styled.img`
  width: fit-content;
  height: 130px;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;
const MainText = styled.div`
  display: flex;
  gap: 5px;
  font-size: 20px;
  font-weight: bold;
`;
const InfoText = styled.span`
  height: fit-content;
  word-wrap: normal;
  text-align: left;
  text-overflow: clip;
  height: 5em;
  width: 100%;
  min-width: 1;
  overflow-y: scroll;
  padding: 0 5px 0 0;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #f5f5f5;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #555;
  }
`;
const SubInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 30px;
  font-size: 18px;
  gap: 10px;
  color: #a3a3a3;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 100%;
`;
const Text = styled.span`
  white-space: nowrap;
`;
const TagBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: fit-content;
  color: #555555;
`;
const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border-radius: 5px;
  background-color: #d5d5d5;
  font-weight: bold;
  font-size: 15px;
  user-select: none;
`;
function ModelView({ data }: Props) {
  const [imageView, setImageView] = useState<number>(0);
  const handleGenTags: (e: ContentsData) => ReactElement[] = useCallback(
    (e) => {
      const contents: ReactElement[] = [];
      if (e.tags) {
        for (let i = 0; i < e.tags?.length; i++) {
          contents.push(<TagItem key={"tagitem " + i}>{e.tags[i]}</TagItem>);
        }
      }
      return contents;
    },
    []
  );
  const imageCarousel: (e: number) => void = (e) => {
    if (e === data.Images.length - 1) {
      setImageView(0);
    } else {
      setImageView(e + 1);
    }
  };
  useEffect(() => {
    if (data.Images.length > 0) {
      const interval = setInterval(() => {
        imageCarousel(imageView);
      }, 3000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [data, imageCarousel]);
  return (
    <MainContainer
      onClick={() => {
        window.open(data.url, "_blank");
      }}
    >
      <ImageContainer>
        <Thumbnail src={data.Images[imageView]} />
      </ImageContainer>
      <TextContainer>
        <MainText>
          <Text>{data.Title}</Text>
          <Text>By.{data.Author}</Text>
        </MainText>
        <InfoText>{data.Info}</InfoText>
        <SubInfo>
          <SubContainer>
            <BsEmojiHeartEyes size={18} color="#ff4444" />
            <Text>{data.viewer}</Text>
          </SubContainer>
          <SubContainer>
            <MdDateRange size={18} color="#5e5e5e" />
            <Text>{data.loadDate.toDateString()}</Text>
          </SubContainer>
          <SubContainer>
            <MdUpdate size={18} color="#5e5e5e" />
            <Text>
              {data.updateDate
                ? data.updateDate.toDateString()
                : data.loadDate.toDateString()}
            </Text>
          </SubContainer>
          <TagBox>{handleGenTags(data)}</TagBox>
        </SubInfo>
      </TextContainer>
    </MainContainer>
  );
}

export default ModelView;
