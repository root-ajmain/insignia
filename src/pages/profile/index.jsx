import { Outlet } from "react-router-dom";
import Layout from "../../components/common/Layout";
import Sidebar from "./components/Sidebar";

const ProfileScreen = () => {
  return (
    <Layout title="Profile">
      <section className="h-full">
        <div className="max-w-screen-xl mx-auto p-content__padding h-full py-5">
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <Sidebar />

            <div className="flex-1 w-full bg-white shadow-md rounded-md p-5">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProfileScreen;
