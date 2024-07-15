import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

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
  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
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
