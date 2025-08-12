import styled from "@emotion/styled";
import SearchBar from "../components/SearchBar";
import Lottie from "lottie-react";
import Loading from "../.Lottie/Loading_car.json";
import { ReactElement, useCallback, useState } from "react";
import { data } from "../functions/Data";
import { ContentsData } from "../functions/types";
import ModelView from "../components/ModelView";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
`;
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 800px;
`;
const ModelList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
function Search() {
  const [searchData, setSearchData] = useState<ContentsData[]>(data);
  const [load, setLoad] = useState<boolean>(false);
  const handleSearchData: (e: ContentsData[]) => void = useCallback((e) => {
    setSearchData(e);
  }, []);
  const handleSetLoad: (e: boolean) => void = useCallback((e) => {
    setLoad(e);
  }, []);
  const handleGenModelView: () => ReactElement[] = useCallback(() => {
    const contents: ReactElement[] = [];
    for (let i = 0; i < searchData.length; i++) {
      contents.push(<ModelView key={`ModelView ${i}`} data={searchData[i]} />);
    }
    return contents;
  }, [searchData]);
  console.log(searchData);
  return (
    <MainContainer>
      <SearchBar
        handleSearchData={handleSearchData}
        handleSetLoad={handleSetLoad}
      />
      {load ? (
        <LoadingContainer>
          <Lottie animationData={Loading} loop autoPlay={true} />
        </LoadingContainer>
      ) : (
        <ModelList>{handleGenModelView()}</ModelList>
      )}
    </MainContainer>
  );
}

export default Search;
