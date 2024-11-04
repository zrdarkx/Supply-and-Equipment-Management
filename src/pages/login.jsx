import { HiLockClosed, HiLogin, HiMail, HiUserAdd } from "react-icons/hi";
import LandingAnimation from "../components/landingAnimation";
import SemInput from "../components/semInput";
import SemTitle from "../components/semTitle";
import { Button, HR } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useValidateUser from "../hooks/useValidateUser";
import { toast } from "react-toastify";
import { useSemStore } from "../zustand/store";
import ScreenLoading from "../components/screenLoading";

const Login = () => {
  const [forms, setForms] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Hooks
  const { validateUser } = useValidateUser();
  const { setCurrentUser, currentUser, setIsAdmin } = useSemStore();
  const navigation = useNavigate();

  const handleUpdateForm = (event) => {
    const { name, value } = event.target;
    setForms((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    setLoading(true);
    setTimeout(() => {
      const res = validateUser(forms);
      if (!res) {
        toast.error("Email or Password is incorrect.");
        setLoading(false);
        return;
      }
      setCurrentUser(res);
      localStorage.setItem("user", JSON.stringify(res));
      navigation("/master-records");
      setLoading(false);
    }, 2000);
  };

  //If has user in localstorage, set the currentUser to the user save in localstorage

  useEffect(() => {
    const output = localStorage.getItem("user");
    const data = JSON.parse(output);
    setCurrentUser(data);
  }, []);

  return (
    <div className="w-full bg-slate-950 min-h-screen flex flex-row">
      {loading && <ScreenLoading />}
      <>
        <div className="basis-6/12 hidden lg:flex justify-center items-center flex-col">
          <LandingAnimation />
        </div>
        <div className="basis-full lg:basis-6/12 flex justify-center items-center ">
          <div className="content bg-slate-800 min-h-5/6 w-4/6 rounded-lg">
            <div className="title-wrapper m-10">
              <SemTitle color={"white"} title={"Inicio de Sesión"} />
            </div>
            <form className="form-wrapper m-10" onSubmit={handleSubmitForm}>
              <div className="my-3">
                <SemInput
                  label={"Correo Electrónico"}
                  id={"email"}
                  name={"email"}
                  placeholder={"Ingrese su correo electrónico"}
                  icon={HiMail}
                  event={handleUpdateForm}
                />
              </div>
              <div className="my-3">
                <SemInput
                  label={"Contraseña"}
                  id={"password"}
                  name={"password"}
                  placeholder={"Ingrese su contraseña"}
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
                  Iniciar Sesión
                </Button>
                <HR.Text />
                <Link to={"/signup"}>
                  <Button gradientMonochrome="success" className="w-full">
                    <HiUserAdd className="mr-2 h-5 w-5" />
                    Crear Cuenta
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
