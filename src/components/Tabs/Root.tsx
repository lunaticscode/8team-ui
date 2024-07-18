import {
  Children,
  Dispatch,
  FC,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  cloneElement,
  useState,
  useMemo,
} from "react";
import TabsItem from "./Item";
import TabsPannel from "./Pannel";

export interface TabsRootProps extends PropsWithChildren {}

interface TabsContextProps {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}
const TabsContext = createContext<TabsContextProps>({
  currentIndex: 0,
  setCurrentIndex: () => {},
});

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("(!) Tabs 컨텍스트를 호출할 수 없는 범위 입니다.");
  }
  return context;
};

const TabsRoot: FC<TabsRootProps> = (props) => {
  const { children } = props;

  const [currentIndex, setCurrentIndex] = useState(0);

  const contextValue: TabsContextProps = {
    currentIndex,
    setCurrentIndex,
  };

  const _children = useMemo(
    () => Children.toArray(children),
    [children]
  ) as ReactElement[];
  const [tabItems, tabPannels] = useMemo(
    () => [
      _children.filter((child) => child.type === TabsItem),
      _children.filter((child) => child.type === TabsPannel),
    ],
    [_children]
  );
  return (
    // <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
    <TabsContext.Provider value={contextValue}>
      {tabItems.map((tabItemComp, index) =>
        cloneElement(tabItemComp, { ...tabItemComp.props, index })
      )}
      {tabPannels.map((tabPannelComp, index) =>
        cloneElement(tabPannelComp, { ...tabPannelComp.props, index })
      )}
    </TabsContext.Provider>
  );
};
export default TabsRoot;

/**
 * 
 * 
 * 
    <Tabs.Root>
        <Tabs.Item>1</Tabs.Item>
        <Tabs.Item>2</Tabs.Item>
        <Tabs.Item>3</Tabs.Item>
        <Tabs.Pannel>1</Tabs.Pannel>
        <Tabs.Pannel>2</Tabs.Pannel>
        <Tabs.Pannel>3</Tabs.Pannel>
    </Tabs.Root>
 * 
 * 
 */
