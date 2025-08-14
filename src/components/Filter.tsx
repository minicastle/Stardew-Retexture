import styled from "@emotion/styled";
import { FilterType } from "../functions/types";
interface Props {
  handleFilter: (e: FilterType) => void;
}

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
function Filter({ handleFilter }: Props) {
  return (
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
  );
}

export default Filter;
