import { ReactNode } from "react";

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

export enum RankEnum {
  XLow = "Very Low ",
  Low = "Low",
  Medium = "Medium",
  High = "High",
}
export enum GenderEnum {
  Men = "Men ",
  Women = "Women",
  Other = "Other",
}

export enum DiagramCardEnum {
  Increase = "INCREAS",
  Decrease = "DECREASE",
  Stable = "STABLE",
  Warning = "WARNING",
}

export type StateType = {
  icon?: ReactNode;
  color: string;
  // actionType?: DiagramCardEnum;
};

export type CardPropType = {
  id: number;
  title: string;
  action: DiagramCardEnum;
  value: string;
};
export type PersonGeneralData = {
  id: number;
  name: string;
  email: string;
  gender: string;
  description: string;
};
