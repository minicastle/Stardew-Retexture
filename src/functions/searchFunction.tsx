import { data } from "./Data";
import { ContentsData } from "./types";
interface Props {
  searchType: "Title" | "Author";
  searchText: string;
  handleSearchData: (e: ContentsData[]) => void;
  handleSetLoad: (e: boolean) => void;
}
export const searchFunction = ({
  searchType,
  searchText,
  handleSearchData,
  handleSetLoad,
}: Props) => {
  handleSetLoad(true);
  const searchContents = [];
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
export const searchFilter = () => {};
