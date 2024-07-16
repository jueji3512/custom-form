import {FC} from "react";
import DesignerContext from "@/designer/context/DesignerContext.tsx";
import Layout from "@/designer/containers/Layout.tsx";

type DesignerProps = FC

function createDesigner() {
  const formStyle = {}

  return {
    formStyle
  }
}

const Designer: DesignerProps = () => {
  const designer = createDesigner()
  return (
    <DesignerContext.Provider value={designer}>
      <Layout />
    </DesignerContext.Provider>
  )
}
export default Designer