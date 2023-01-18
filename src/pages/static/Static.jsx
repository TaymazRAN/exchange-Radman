import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import BoardMembers from "./about/BoardMembers";
import MessageOfHead from "./about/MessageOfHead";
import OrganizationalChart from "./about/OrganizationalChart";
import Permissions from "./about/Permissions";
import Presentation from "./about/Presentation";
import Responsibility from "./about/Responsibility";
import Account from "./contact/Account";
import Branch from "./contact/Branch";
import Contact from "./contact/Contact";
import Support from "./contact/Support";
import ServicesA1 from "./services/ServicesA1";
import ServicesA2 from "./services/ServicesA2";

const Static = () => {
  return (
    <>
      <Header dark />
      <div className="widthFix small">
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/branch" element={<Branch />} />
          <Route path="/servicesA1" element={<ServicesA1 />} />
          <Route path="/servicesA2" element={<ServicesA2 />} />
          <Route path="/BoardMembers" element={<BoardMembers />} />
          <Route path="/MessageOfHead" element={<MessageOfHead />} />
          <Route path="/Permissions" element={<Permissions />} />
          <Route path="/Presentation" element={<Presentation />} />
          <Route path="/Responsibility" element={<Responsibility />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Account" element={<Account />} />
          <Route
            path="/OrganizationalChart"
            element={<OrganizationalChart />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Static;
