import { HiLockClosed, HiLogin, HiMail, HiUserAdd } from "react-icons/hi";
import LandingAnimation from "../components/landingAnimation";
import SemInput from "../components/semInput";
import SemTitle from "../components/semTitle";
import { Button, HR } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useValidateUser from "../hooks/useValidateUser";
import { toast } from "react-toastify";
import { useStore } from "zustand";
import { useSemStore } from "../zustand/store";

const Login = () => {
  const [forms, setForms] = useState({
    email: "",
    password: "",
  });

  // Hooks
  const { validateUser } = useValidateUser();
  const { currentUser, setCurrentUser } = useSemStore();
  const navigation = useNavigate();

  const handleUpdateForm = (event) => {
    const { name, value } = event.target;
    setForms((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const res = validateUser(forms);
    if (!res) {
      toast.error("Email or Password is incorrect.");
      return;
    }
    setCurrentUser(res);
    navigation("/records");
  };

  return (
    <div className="w-full bg-slate-950 min-h-screen flex flex-row">
      <div className="basis-6/12 hidden lg:flex justify-center items-center flex-col">
        <LandingAnimation />
      </div>
      <div className="basis-full lg:basis-6/12 flex justify-center items-center ">
        <div className="content bg-slate-800 min-h-5/6 w-4/6 rounded-lg">
          <div className="title-wrapper m-10">
            <SemTitle color={"white"} title={"Login"} />
          </div>
          <form className="form-wrapper m-10" onSubmit={handleSubmitForm}>
            <div className="my-3">
              <SemInput
                label={"Email"}
                id={"email"}
                name={"email"}
                placeholder={"Please enter your email"}
                icon={HiMail}
                event={handleUpdateForm}
              />
            </div>
            <div className="my-3">
              <SemInput
                label={"Password"}
                id={"password"}
                name={"password"}
                placeholder={"Please enter your password"}
                icon={HiLockClosed}
                event={handleUpdateForm}
                type={"password"}
              />
            </div>
            <div className="submit-wrapper mt-10">
              <Button
                type="submit"
                gradientMonochrome="info"
                className="w-full "
              >
                <HiLogin className="mr-2 h-5 w-5" />
                Login
              </Button>
              <HR.Text />
              <Link to={"/signup"}>
                <Button gradientMonochrome="success" className="w-full">
                  <HiUserAdd className="mr-2 h-5 w-5" />
                  Create Account
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
