
interface IRoute {
  id: number;
  path: string;
  element: ()=>JSX.Element;
}

export default IRoute;
