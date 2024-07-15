// const tabItems = [
//   { title: "Account", id: "account", icon: <SVG />, iconDirection: "right" },
//   { title: "Password", id: "password" },
// ];
// import { Children } from "react";
import { Tabs } from "./components";

function App() {
  return (
    <>
      <Tabs.Root>
        <Tabs.Item index={0}>1</Tabs.Item>
        <Tabs.Item index={1}>2</Tabs.Item>
        <Tabs.Item index={2}>3</Tabs.Item>
        <Tabs.Pannel index={0}>TabsPannel-1</Tabs.Pannel>
        <Tabs.Pannel index={1}>TabsPannel-2</Tabs.Pannel>
        <Tabs.Pannel index={2}>TabsPannel-3</Tabs.Pannel>
      </Tabs.Root>
    </>
  );
}

export default App;
