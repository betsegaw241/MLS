  export interface IRoute {
    path: string;
    exact: boolean;
    isProtected?: boolean;
    element: JSX.Element;
    redirect?:string;
    allowedRole:string;
  }
