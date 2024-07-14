import { Header } from "antd/es/layout/layout";
import "./App.css";
import { Button, Space } from "antd";
import AppHeader from "./components/AppHeader/AppHeader";
import SideMenu from "./components/SideMenu/SideMenu";
import PageContent from "./components/PageContent/PageContent";
import AppFooter from "./components/AppFooter/AppFooter";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className='sideMenuAndPageContent'> 
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter />
    </div>
  );
}

export default App;
