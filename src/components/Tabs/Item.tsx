import { FC, PropsWithChildren } from "react";
import { useTabsContext } from "./Root";

export interface TabsItemProps extends PropsWithChildren {
  index: number;
}
const TabsItem: FC<TabsItemProps> = (props) => {
  const { children, index } = props;
  const { setCurrentIndex } = useTabsContext();
  return <button onClick={() => setCurrentIndex(index)}>{children}</button>;
};
export default TabsItem;
