// main layout componet, use SASS and Chakrea UI to modifi the main wrapre layout
const Layout = (props) => {
  return (
    <div className="main-layout">
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;