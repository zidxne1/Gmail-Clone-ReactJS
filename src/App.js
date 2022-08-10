import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Mail from "./Mail";
import "./App.css";
import EmailList from "./EmailList";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SendMail from "./SendMail";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectSendMesageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMesageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />} />

              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
