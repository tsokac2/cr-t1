// main layout componet, use SASS and Chakrea UI to modifi the main wrapre layout
const Layout = (props) => {
  return (
    <div className="test">
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;