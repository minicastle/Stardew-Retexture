import styled from "@emotion/styled";
import SearchBar from "../components/SearchBar";
import Lottie from "lottie-react";
import Loading from "../.Lottie/Loading_car.json";
import { ReactElement, useCallback, useState } from "react";
import { data } from "../functions/Data";
import { ContentsData, FilterType } from "../functions/types";
import ModelView from "../components/ModelView";
import Filter from "../components/Filter";
import { filterFunction } from "../functions/searchFunction";
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: fit-content;
`;
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  const [filter, setFilter] = useState<FilterType[]>([]);
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
  const handleFilter: (target: FilterType) => void = (target) => {
    const filterRules: number = filter.findIndex(
      (element) => element === target
    );
    if (filterRules !== -1) {
      setFilter((filter) => {
        return [
          ...filter.slice(0, filterRules),
          ...filter.slice(filterRules + 1),
        ];
      });
      filterFunction({
        filter,
        handleSearchData,
        handleSetLoad,
        filterRules,
        target,
      });
    } else {
      setFilter([...filter, target]);
      filterFunction({
        filter,
        handleSearchData,
        handleSetLoad,
        filterRules,
        target,
      });
    }
  };
  return (
    <MainContainer>
      <Filter handleFilter={handleFilter} />
      <ContentsContainer>
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
      </ContentsContainer>
    </MainContainer>
  );
}

export default Search;
