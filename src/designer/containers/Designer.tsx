import {FC, ReactNode} from "react";
import DesignerContext from "@/designer/context/DesignerContext.tsx";
import Layout from "@/designer/containers/Layout.tsx";

type DesignerProps = FC<{
  children: ReactNode
}>

function createDesigner() {
  return {}
}

const Designer: DesignerProps = ({ children }) => {
  const designer = createDesigner()
  return (
    <DesignerContext.Provider value={designer}>
      <Layout>
        {children}
      </Layout>
    </DesignerContext.Provider>
  )
}
export default Designer