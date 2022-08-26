import type { NextPage } from "next";
import { Fragment, useContext } from "react";

import SignUp from "../components/forms/SignUp";
import Login from "../components/forms/Login";
import DisplayContext from "../store/FormContext";

const Home: NextPage = () => {
  const displayCtx = useContext(DisplayContext);

  return (
    <Fragment>
      {displayCtx?.display && <SignUp />}
      {!displayCtx?.display && <Login />}
    </Fragment>
  );
};

export default Home;
