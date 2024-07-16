import {FC} from "react";
import ThemeSwitch from "@/designer/components/ThemeSwitch.tsx";
import {menuItemMapType, menuItemType} from "@/designer/types";
import Button from "@/only-ui/packages/Button";

interface IMenuProps {
  currentMenuItem: menuItemType
  menuItemMap: menuItemMapType
  onMenuChange: (menu: menuItemType) => void
}

const MenuWidget: FC<IMenuProps> = ({ currentMenuItem, menuItemMap, onMenuChange }) => {
  function handleMenuChange(menu: menuItemType) {
    onMenuChange(menu)
  }

  const menuItems = Object.values(menuItemMap)

  return (
    <div className="w-[50px] flex flex-col py-4 justify-between items-center">
      <div className="mt-4 flex flex-col gap-8 items-center">
        {
          menuItems.map((menuItem: menuItemType) => {
            return (
              <Button
                circle
                background={currentMenuItem.type === menuItem.type}
                key={menuItem.type}
                icon={menuItem.icon}
                onClick={() => handleMenuChange(menuItem)}
              />
            )
          })
        }
      </div>
      <div>
        <ThemeSwitch />
      </div>
    </div>
  )
}
export default MenuWidget