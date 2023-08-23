import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import PageBody from "./PageBody";
import Footer from "./Footer";
import LogoutModal from "./LogoutModal";

const Wrapper = (props) => {
  return (
    <>
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <Sidebar></Sidebar>
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <Navbar></Navbar>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <PageBody>{props.children}</PageBody>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}

          {/* <!-- Footer --> */}
          <Footer></Footer>
          {/* <!-- End of Footer --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      {/* <!-- End of Page Wrapper --> */}

      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/* <!-- Logout Modal--> */}
      <LogoutModal></LogoutModal>
    </>
  );
};

export default Wrapper;
