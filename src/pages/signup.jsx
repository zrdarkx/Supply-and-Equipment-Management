import { Button, HR } from "flowbite-react";
import {
  HiCalendar,
  HiLocationMarker,
  HiLockClosed,
  HiLogin,
  HiMail,
  HiOfficeBuilding,
  HiPhone,
  HiUser,
  HiUserAdd,
  HiUserGroup,
  HiUsers,
} from "react-icons/hi";
import SemInput from "../components/semInput";
import SemSelect from "../components/semSelect";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SemTitle from "../components/semTitle";
import useAddUser from "../hooks/useAddUser";
import { toast } from "react-toastify";
import useGetOffices from "../hooks/useGetOffices";

const Signup = () => {
  const [forms, setForms] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthDate: "",
    contact: "",
    gender: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    role: "",
    office: "",
  });

  const [error, setError] = useState();

  // Hooks
  const { addUser } = useAddUser();
  const { offices } = useGetOffices();
  const navigation = useNavigate();

  const handleUpdateForm = (event) => {
    const { name, value } = event.target;
    const newForms = { ...forms, [name]: value };
    setForms(newForms);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const res = addUser(forms);
    setError(res);
    if (res.error) {
      toast.error(res.message);
    }
    if (!res.error) {
      toast.promise(new Promise((resolve) => setTimeout(resolve, 3000)), {
        pending: "Signing up, please wait...",
        success: res.message,
      });
      setTimeout(() => {
        navigation("/login");
      }, 4000);
    }
  };

  return (
    <div className="w-100 min-h-screen bg-slate-950 flex justify-center items-center">
      <div className="content bg-slate-800 min-h-5/6 w-5/6 rounded-lg p-10 my-5">
        <SemTitle color={"white"} title={"Account Creation"} />
        <form
          className="forms flex flex-row flex-wrap lg:flex-nowrap mt-5"
          onSubmit={handleSubmitForm}
        >
          <div className="basis-full lg:basis-4/12 mr-5">
            <SemInput
              id={"firstName"}
              label={"First Name"}
              placeholder={"Enter your first name"}
              icon={HiUser}
              event={handleUpdateForm}
              name={"firstName"}
            />
            <SemInput
              id={"middleName"}
              label={"Middle Name"}
              placeholder={"Enter your middle name"}
              icon={HiUser}
              event={handleUpdateForm}
              name={"middleName"}
            />
            <SemInput
              id={"lastName"}
              label={"Last Name"}
              placeholder={"Enter your last name"}
              icon={HiUser}
              event={handleUpdateForm}
              name={"lastName"}
            />
            <SemInput
              id={"birthDate"}
              label={"Birth Date"}
              icon={HiCalendar}
              type={"date"}
              event={handleUpdateForm}
              name={"birthDate"}
            />
            <SemInput
              id={"contact"}
              label={"Contact Number"}
              icon={HiPhone}
              addOn="+63"
              placeholder={"Enter your contact number"}
              event={handleUpdateForm}
              name={"contact"}
            />
          </div>
          <div className="basis-full lg:basis-4/12 mr-5">
            <SemSelect
              label={"Gender"}
              icon={HiUsers}
              id={"gender"}
              data={["Please select your gender", "Male", "Female", "Other"]}
              event={handleUpdateForm}
              name="gender"
            />

            <SemInput
              type={"email"}
              id={"email"}
              label={"Email"}
              placeholder={"Enter your email"}
              icon={HiMail}
              event={handleUpdateForm}
              name="email"
            />
            <SemInput
              id={"address"}
              label={"Address"}
              placeholder={"Enter your address"}
              icon={HiLocationMarker}
              event={handleUpdateForm}
              name="address"
            />
            <SemInput
              id={"password"}
              label={"Password"}
              placeholder={"Enter your password"}
              icon={HiLockClosed}
              type={"password"}
              event={handleUpdateForm}
              name="password"
              color={error?.error ? "failure" : "info"}
            />
            <SemInput
              id={"confirmPassword"}
              label={"Confirm Password"}
              placeholder={"Confirm your password"}
              icon={HiLockClosed}
              type={"password"}
              event={handleUpdateForm}
              name="confirmPassword"
              color={error?.error ? "failure" : "info"}
            />
          </div>
          <div className="basis-full lg:basis-4/12 mr-5">
            <SemSelect
              label={"User Type"}
              icon={HiUserGroup}
              id={"role"}
              data={[
                "Please select your role",
                "Department Supply Coordinator",
                "Admin",
              ]}
              event={handleUpdateForm}
              name="role"
            />
            {forms.role == "Department Supply Coordinator" && (
              <SemSelect
                offices={true}
                label={"Offices"}
                icon={HiOfficeBuilding}
                id={"role"}
                data={offices}
                event={handleUpdateForm}
                name="office"
              />
            )}

            <div className="submit-wrapper mt-10">
              <Button
                type="submit"
                gradientMonochrome="info"
                className="w-full "
              >
                <HiUserAdd className="mr-2 h-5 w-5" />
                Create Account
              </Button>
              <HR.Text />
              <Link to={"/login"}>
                <Button gradientMonochrome="success" className="w-full">
                  <HiLogin className="mr-2 h-5 w-5" />
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
