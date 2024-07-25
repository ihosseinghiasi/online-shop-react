import Header from "../layout/header/adminPanelNavbar.component";
import AdminSidebar from "../layout/adminSidebar/sidebar.Component";
const AdminPanelLayoutComponent = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <AdminSidebar />
      {children}
    </div>
  );
};

export default AdminPanelLayoutComponent;
