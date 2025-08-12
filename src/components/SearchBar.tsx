import styled from "@emotion/styled";
import { useState } from "react";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { searchFunction } from "../functions/searchFunction";
import { ContentsData } from "../functions/types";
interface Props {
  handleSearchData: (e: ContentsData[]) => void;
  handleSetLoad: (e: boolean) => void;
}
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: fit-content;
  padding: 20px 0;
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: 300ms;
  position: relative;
  gap: 5px;
`;
const SearchLabel = styled.div<{ mod: boolean }>`
  user-select: none;
  position: absolute;
  left: 110px;
  color: #5a5a5a;
  ${(props) =>
    props.mod ? { animation: "150ms LabelMoveUp linear both" } : ""};

  @keyframes LabelMoveUp {
    to {
      transform: translate(-5px, -40px);
    }
  }
`;
const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  font-size: 18px;
  box-sizing: border-box;
  border: 5px solid #ff9c9c;
  outline: none;
`;
const SearchSubmit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  width: fit-content;
  height: 50px;
  border: 5px solid #ff9c9c;
  background-color: #ffb5b5;
  border-radius: 10px;
  gap: 10px;
  user-select: none;
  :hover {
    scale: 1.05;
  }
  :active {
    scale: 1;
  }
`;
const SearchType = styled.select`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border: 5px solid #ff9c9c;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  color: #5a5a5a;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
`;
function SearchBar({ handleSearchData, handleSetLoad }: Props) {
  const [mod, setMod] = useState<boolean>(false);
  const [searchType, setSearchType] = useState<"Title" | "Author">("Title");
  const [searchText, setSearchText] = useState<string>("");
  return (
    <MainContainer>
      <SearchContainer>
        <SearchType
          onChange={(e) => {
            if (e.target.value === "Title" || e.target.value === "Author")
              setSearchType(e.target.value);
          }}
        >
          <option value={"Title"}>제목</option>
          <option value={"Author"}>제작자</option>
        </SearchType>
        <SearchLabel mod={mod}>Search</SearchLabel>
        <SearchInput
          onChange={(e) => {
            setSearchText(e.target.value);
            e.target.value === "" ? setMod(false) : setMod(true);
          }}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? searchFunction({
                  searchType,
                  searchText,
                  handleSearchData,
                  handleSetLoad,
                })
              : ""
          }
        />
        <SearchSubmit
          onClick={() => {
            searchFunction({
              searchType,
              searchText,
              handleSearchData,
              handleSetLoad,
            });
          }}
        >
          Search
          <BsFillSearchHeartFill size={30} />
        </SearchSubmit>
      </SearchContainer>
    </MainContainer>
  );
}

export default SearchBar;
