import { data } from "./Data";
import { ContentsData, FilterType } from "./types";
interface searchProps {
  searchType: "Title" | "Author";
  searchText: string;
  handleSearchData: (e: ContentsData[]) => void;
  handleSetLoad: (e: boolean) => void;
}
interface filterProps {
  filter: FilterType[];
  handleSearchData: (e: ContentsData[]) => void;
  handleSetLoad: (e: boolean) => void;
  filterRules: number;
  target: FilterType;
}
export const searchFunction = ({
  searchType,
  searchText,
  handleSearchData,
  handleSetLoad,
}: searchProps) => {
  handleSetLoad(true);
  const searchContents: ContentsData[] = [];
  if (searchType === "Title") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].Title.includes(searchText)) {
        searchContents.push(data[i]);
      }
    }
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].Author.includes(searchText)) {
        searchContents.push(data[i]);
      }
    }
  }
  handleSearchData(searchContents);
  handleSetLoad(false);
};
export const filterFunction = ({
  filter,
  handleSearchData,
  handleSetLoad,
  filterRules,
  target,
}: filterProps) => {
  handleSetLoad(true);
  const filterContents: ContentsData[] = [];
  const filterBuf =
    filterRules !== -1
      ? [...filter.slice(0, filterRules), ...filter.slice(filterRules + 1)]
      : [...filter, target];
  if (filterBuf.length === 0) {
    handleSearchData(data);
    handleSetLoad(false);
    return;
  }
  for (let i = 0; i < filterBuf.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j].tags?.includes(filterBuf[i])) {
        filterContents.push(data[j]);
      }
    }
  }
  handleSearchData([...new Set(filterContents)]);
  handleSetLoad(false);
};
