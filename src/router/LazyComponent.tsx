import {FC, type LazyExoticComponent, Suspense} from "react";

type LazyComponentProps = {
  component: LazyExoticComponent<FC>;
}
const LazyComponent: FC<LazyComponentProps> = ({ component: Component }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  )
}

export default LazyComponent;