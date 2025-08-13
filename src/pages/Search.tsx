import styled from "@emotion/styled";
import SearchBar from "../components/SearchBar";
import Lottie from "lottie-react";
import Loading from "../.Lottie/Loading_car.json";
import { ReactElement, useCallback, useState } from "react";
import { data } from "../functions/Data";
import { ContentsData, FilterType } from "../functions/types";
import ModelView from "../components/ModelView";
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100%;
  padding: 10px;
`;
const FilterBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: sticky;
  top: 0;
  width: 200px;
  border: 4px solid #ff9c9c;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
`;
const FilterTitle = styled.p`
  font-weight: bold;
  border-bottom: 1px solid #a3a3a3;
  width: 100%;
`;
const FilterCheckContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  gap: 5px;
`;
const FilterCheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const FilterCheck = styled.input`
  background-color: #5e5e5e;

  scale: 1.3;
`;
const FilterText = styled.span`
  white-space: nowrap;
  text-transform: uppercase;
`;
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  const handleFilter: (e: FilterType) => void = (e) => {
    const buf = filter.findIndex((element) => element === e);
    if (buf !== -1) {
      setFilter((filter) => {
        return [...filter.slice(0, buf), ...filter.slice(buf + 1)];
      });
    } else {
      setFilter([...filter, e]);
    }
    console.log(buf);
  };
  return (
    <MainContainer>
      <FilterContainer>
        <FilterBody>
          <FilterTitle></FilterTitle>
          <FilterCheckContainer>
            <FilterCheckBox>
              <FilterCheck
                type="checkbox"
                value={"character"}
                onChange={() => {
                  handleFilter("character");
                }}
              />
              <FilterText>character</FilterText>
            </FilterCheckBox>
            <FilterCheckBox>
              <FilterCheck
                type="checkbox"
                value={"npc"}
                onChange={() => {
                  handleFilter("npc");
                }}
              />
              <FilterText>NPC</FilterText>
            </FilterCheckBox>
            <FilterCheckBox>
              <FilterCheck
                type="checkbox"
                value={"animal"}
                onChange={() => {
                  handleFilter("animal");
                }}
              />
              <FilterText>Animal</FilterText>
            </FilterCheckBox>
            <FilterCheckBox>
              <FilterCheck
                type="checkbox"
                value={"mob"}
                onChange={() => {
                  handleFilter("mob");
                }}
              />
              <FilterText>Mob</FilterText>
            </FilterCheckBox>
          </FilterCheckContainer>
          <FilterTitle></FilterTitle>
          <FilterCheckContainer>
            <FilterCheckBox>
              <FilterCheck
                type="checkbox"
                value={"structure"}
                onChange={() => {
                  handleFilter("structure");
                }}
              />
              <FilterText>structure</FilterText>
            </FilterCheckBox>
          </FilterCheckContainer>
          <FilterTitle>ETC</FilterTitle>
          <FilterCheckContainer>
            <FilterCheckBox>
              <FilterCheck
                type="checkbox"
                value={"item"}
                onChange={() => {
                  handleFilter("item");
                }}
              />
              <FilterText>Item</FilterText>
            </FilterCheckBox>
            <FilterCheckBox>
              <FilterCheck
                type="checkbox"
                value={"item"}
                onChange={() => {
                  handleFilter("map");
                }}
              />
              <FilterText>Map</FilterText>
            </FilterCheckBox>
          </FilterCheckContainer>
        </FilterBody>
      </FilterContainer>
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
