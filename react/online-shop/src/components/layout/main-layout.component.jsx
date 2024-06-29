import Footer from "./footer/footer.component";

const MainLayoutComponent = ({ children }) => {
  return (
    <div>
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayoutComponent;
