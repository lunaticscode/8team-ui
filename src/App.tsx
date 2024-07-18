import { Tabs } from "./components";

function App() {
  return (
    <>
      <Tabs.Root>
        <Tabs.Pannel>TabsPannel-1</Tabs.Pannel>
        <Tabs.Pannel>TabsPannel-2</Tabs.Pannel>
        <Tabs.Pannel>TabsPannel-3</Tabs.Pannel>
        <Tabs.Item>1</Tabs.Item>
        <Tabs.Item>2</Tabs.Item>
        <Tabs.Item>3</Tabs.Item>
      </Tabs.Root>
    </>
  );
}

export default App;
