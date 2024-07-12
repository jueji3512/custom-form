import {FC} from "react";
import Theme from "@/designer/containers/Theme.tsx";
import Designer from "@/designer/containers/Designer.tsx";
import ComponentPanel from "@/designer/panels/ComponentPanel.tsx";
import WorkSpacePanel from "@/designer/panels/WorkSpacePanel.tsx";
import SettingPanel from "@/designer/panels/SettingPanel.tsx";


const FormDesigner: FC = () => {
  return (
    <Theme>
      <Designer>
        <ComponentPanel />
        <WorkSpacePanel />
        <SettingPanel />
      </Designer>
    </Theme>
  )
}
export default FormDesigner