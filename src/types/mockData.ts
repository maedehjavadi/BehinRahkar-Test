import { DiagramCardEnum, MainMenuEnum, RankEnum } from "./main";

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

export const gridHeadTitles = [
  {
    id: 7,
    lable: "id",
    value: "id",
  },
  {
    id: 8,
    lable: "Email",
    value: "Email",
  },
  {
    id: 9,
    lable: "First name",
    value: "First name",
  },
  {
    id: 10,
    lable: "Last name",
    value: "Last name",
  },
  {
    id: 11,
    lable: "Rank",
    value: "Rank",
  },
  {
    id: 12,
    lable: "Status",
    value: "Status",
  },
];

export const Rank_COLORS = [
  {
    type: RankEnum.Low,
    value: "#8884d8",
  },
  { type: RankEnum.High, value: "#82ca9d" },
  { type: RankEnum.Medium, value: "#FFBB28" },
  { type: RankEnum.XLow, value: "#FF8042" },
  { type: RankEnum.Low, value: "#8884d8" },
  { type: RankEnum.XLow, value: "#FF8042" },
];

export const DiagramCardsData = [
  {
    id: 1,
    title: "Currency",
    action: DiagramCardEnum.Increase,
    value: "$3454.45",
  },
  {
    id: 2,
    title: "Percentage",
    action: DiagramCardEnum.Decrease,
    value: "45%",
  },
  {
    id: 3,
    title: "Current",
    action: DiagramCardEnum.Stable,
    value: "345,445",
  },
  {
    id: 4,
    title: "Date",
    action: DiagramCardEnum.Warning,
    value: "10/12/22",
  },
];

export const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];

export const pieData = [
  {
    name: "Apple",
    value: 54.85,
  },
  {
    name: "Samsung",
    value: 47.91,
  },
  {
    name: "Redmi",
    value: 16.85,
  },
  {
    name: "One Plus",
    value: 16.14,
  },
  {
    name: "Others",
    value: 10.25,
  },
];
export const ColumnChartData = [
  { name: "one", students: 400 },
  { name: "two", students: 700 },
  { name: "three", students: 200 },
  { name: "four", students: 100 },
];
