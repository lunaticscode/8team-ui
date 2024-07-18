import { FC, PropsWithChildren } from "react";
import { useTabsContext } from "./Root";

export interface TabsPannelProps extends PropsWithChildren {
  index?: number;
}
const TabsPannel: FC<TabsPannelProps> = (props) => {
  const { children, index } = props;
  const { currentIndex } = useTabsContext();
  return currentIndex === index ? <>{children}</> : null;
};
export default TabsPannel;
