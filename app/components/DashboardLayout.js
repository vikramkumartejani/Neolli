import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
    return (
      <div className="lg:flex w-full min-h-screen ">
        <Sidebar/>
        <div className="flex-1 w-full">
          <Header/>
          <main className="p-4 sm:p-6 bg-gray-100 w-full">{children}</main>
        </div>
      </div>
    );
  };
  
  export default DashboardLayout;
  