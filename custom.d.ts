declare module "*.svg" {
  const ReactComponent: React.ComponentType<React.SVGAttributes<SVGElement>>;
  export default ReactComponent;
}
