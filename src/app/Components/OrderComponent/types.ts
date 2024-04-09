
export interface Iorder {
  [x: string]: any;
  id: number;
  name: string;
  drug: name;
  phone: string;
  location: string;
  time: string;
  status: string;
}

export interface OrderComponentProps {
  orders: Iorder;
}


export interface name{
  name:string;
}