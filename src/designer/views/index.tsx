import {FC} from "react";
import Theme from "@/designer/containers/Theme.tsx";
import Designer from "@/designer/containers/Designer.tsx";


const FormDesigner: FC = () => {
  return (
    <Theme>
      <Designer />
    </Theme>
  )
}
export default FormDesigner