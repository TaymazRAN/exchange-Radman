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
import Vision from "./about/Vision";
import Account from "./contact/Account";
import Branch from "./contact/Branch";
import Contact from "./contact/Contact";
import Support from "./contact/Support";
import PlatformA1 from "./platform/PlatformA1";
import PlatformA2 from "./platform/PlatformA2";
import PlatformA3 from "./platform/PlatformA3";
import PlatformA4 from "./platform/PlatformA4";
import PlatformA5 from "./platform/PlatformA5";
import PlatformA6 from "./platform/PlatformA6";
import PlatformA7 from "./platform/PlatformA7";
import ServicesA1 from "./services/ServicesA1";
import ServicesA2 from "./services/ServicesA2";
import ServicesA3 from "./services/ServicesA3";
import ServicesA4 from "./services/ServicesA4";
import ServicesB1 from "./services/ServicesB1";
import ServicesB2 from "./services/ServicesB2";
import ServicesB4 from "./services/ServicesB4";
import ServicesB3 from "./services/ServicesB3";
import ServicesB5 from "./services/ServicesB5";
import ServicesC1 from "./services/ServicesC1";
import ServicesC2 from "./services/ServicesC2";
import ServicesC3 from "./services/ServicesC3";
import ServicesC4 from "./services/ServicesC4";
import ServicesC5 from "./services/ServicesC5";
import ServicesC6 from "./services/ServicesC6";
import ServicesC7 from "./services/ServicesC7";
import ServicesD1 from "./services/ServicesD1";
import ServicesD2 from "./services/ServicesD2";
import ServicesD3 from "./services/ServicesD3";
import ServicesD4 from "./services/ServicesD4";
import ServicesD5 from "./services/ServicesD5";
import ServicesD6 from "./services/ServicesD6";

import ServicesC8 from "./services/ServicesC8";
import Paziresh from "./services/Paziresh";
import Darkhast from "./services/Darkhast";

const Static = () => {
  return (
		<>
			<Header dark />
			<div className="widthFix small">
				<Routes>
					<Route path="/contact" element={<Contact />} />
					<Route path="/branch" element={<Branch />} />
					<Route path="/paziresh" element={<Paziresh />} />
					<Route path="/darkhast" element={<Darkhast />} />
					<Route path="/ServicesA1" element={<ServicesA1 />} />
					<Route path="/ServicesA2" element={<ServicesA2 />} />
					<Route path="/ServicesA3" element={<ServicesA3 />} />
					<Route path="/servicesA4" element={<ServicesA4 />} />
					<Route path="/ServicesB1" element={<ServicesB1 />} />
					<Route path="/ServicesB2" element={<ServicesB2 />} />
					<Route path="/ServicesB4" element={<ServicesB4 />} />
					<Route path="/ServicesB3" element={<ServicesB3 />} />
					<Route path="/ServicesB5" element={<ServicesB5 />} />
					<Route path="/ServicesC1" element={<ServicesC1 />} />
					<Route path="/ServicesC2" element={<ServicesC2 />} />
					<Route path="/ServicesC3" element={<ServicesC3 />} />
					<Route path="/ServicesC4" element={<ServicesC4 />} />
					<Route path="/ServicesC5" element={<ServicesC5 />} />
					<Route path="/ServicesC6" element={<ServicesC6 />} />
					<Route path="/ServicesC7" element={<ServicesC7 />} />
					<Route path="/ServicesD1" element={<ServicesD1 />} />
					<Route path="/ServicesD2" element={<ServicesD2 />} />
					<Route path="/ServicesD3" element={<ServicesD3 />} />
					<Route path="/ServicesD3" element={<ServicesD3 />} />
					<Route path="/ServicesD4" element={<ServicesD4 />} />
					<Route path="/ServicesD5" element={<ServicesD5 />} />
					<Route path="/ServicesD6" element={<ServicesD6 />} />
					<Route path="/ServicesC8" element={<ServicesC8 />} />
					<Route path="/BoardMembers" element={<BoardMembers />} />
					<Route path="/MessageOfHead" element={<MessageOfHead />} />
					<Route path="/Permissions" element={<Permissions />} />
					<Route path="/Presentation" element={<Presentation />} />
					<Route path="/Responsibility" element={<Responsibility />} />
					<Route path="/Support" element={<Support />} />
					<Route path="/Account" element={<Account />} />
					<Route path="/Vision" element={<Vision />} />
					<Route path="/PlatformA1" element={<PlatformA1 />} />
					<Route path="/PlatformA2" element={<PlatformA2 />} />
					<Route path="/PlatformA3" element={<PlatformA3 />} />
					<Route path="/PlatformA4" element={<PlatformA4 />} />
					<Route path="/PlatformA5" element={<PlatformA5 />} />
					<Route path="/PlatformA6" element={<PlatformA6 />} />
					<Route path="/PlatformA7" element={<PlatformA7 />} />
					<Route path="/Vision" element={<Vision />} />
					<Route path="/Vision" element={<Vision />} />
					<Route path="/Vision" element={<Vision />} />
					<Route path="/Vision" element={<Vision />} />
					<Route path="/Vision" element={<Vision />} />
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
