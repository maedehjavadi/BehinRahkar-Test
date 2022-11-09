// import TocIcon from "@mui/icons-material/Toc";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import MoreIcon from "@mui/icons-material/More";

export enum MainMenuEnum {
  Diagrams = "Diagrams",
  Persons = "Person_Table",
  More = "More",
  Items = "Items",
}
export interface PersonType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar?: string;
  status?: boolean;
}
export interface PersonsType {
  persons: PersonType[];
}

export const sideMenuItems = [
  {
    id: "1",
    itemName: "Visualizations",
    type: MainMenuEnum.Diagrams,
    children: null,
  },
  { id: "2", itemName: "Persons", type: MainMenuEnum.Persons, children: null },
  {
    id: "3",
    itemName: "More",
    type: MainMenuEnum.More,
    children: [
      { id: "1", item: "item1" },
      { id: "2", item: "item2" },
    ],
  },
  {
    id: "4",
    itemName: "Items",
    type: MainMenuEnum.Items,
    children: [
      { id: "1", item: "item1" },
      { id: "2", item: "item2" },
    ],
  },
];
