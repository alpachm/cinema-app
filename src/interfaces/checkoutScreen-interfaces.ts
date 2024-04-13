export interface IData {
    id: number;
    isOccupied: boolean;
}

export interface IStatusLeftSeatsColumns {
  a: IData[];
  b: IData[];
  c: IData[];
  d: IData[];
}

export interface IStatusRightSeatsColumns {
  e: IData[];
  f: IData[];
  g: IData[];
  h: IData[];
}

export interface IDay {
  id: number;
  dayNumber: number;
  day: string
}

export interface IHour{
  id: number;
  hour: string;
}