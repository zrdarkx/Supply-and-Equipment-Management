import { Button, HR, Label, Select, TextInput } from "flowbite-react";
import {
  HiCalendar,
  HiGlobe,
  HiLocationMarker,
  HiLockClosed,
  HiLogin,
  HiMail,
  HiOfficeBuilding,
  HiPhone,
  HiShoppingCart,
  HiUser,
  HiUserAdd,
  HiUserGroup,
  HiUsers,
} from "react-icons/hi";
import SemInput from "../components/semInput";
import SemSelect from "../components/semSelect";

const Signup = () => {
  return (
    <div className="w-100 min-h-screen bg-slate-950 flex justify-center items-center">
      <div className="content bg-slate-800 min-h-5/6 w-5/6 rounded-lg p-10">
        <div className="title">
          <h1 className="text-white text-4xl font-bold">Account Creation</h1>
        </div>
        <form
          className="forms flex flex-row mt-5"
          onSubmit={() => console.log("test")}
        >
          <div className="basis-4/12 mr-5">
            <SemInput
              id={"firstName"}
              label={"First Name"}
              placeholder={"Enter your first name"}
              icon={HiUser}
            />
            <SemInput
              id={"middleName"}
              label={"Middle Name"}
              placeholder={"Enter your middle name"}
              icon={HiUser}
            />
            <SemInput
              id={"lastName"}
              label={"Last Name"}
              placeholder={"Enter your last name"}
              icon={HiUser}
            />
            <SemInput
              id={"birthDate"}
              label={"Birth Date"}
              icon={HiCalendar}
              type={"date"}
            />
            <SemInput
              id={"contact"}
              label={"Contact Number"}
              icon={HiPhone}
              addOn="+63"
            />
          </div>
          <div className="basis-4/12 mr-5">
            <SemSelect
              label={"Gender"}
              icon={HiUsers}
              id={"gender"}
              data={["Male", "Female", "Other"]}
            />

            <SemInput
              id={"email"}
              label={"Email"}
              placeholder={"Enter your email"}
              icon={HiMail}
            />
            <SemInput
              id={"address"}
              label={"Address"}
              placeholder={"Enter your address"}
              icon={HiLocationMarker}
            />
            <SemInput
              id={"password"}
              label={"Password"}
              placeholder={"Enter your password"}
              icon={HiLockClosed}
              type={"password"}
            />
            <SemInput
              id={"confirmPassword"}
              label={"Confirm Password"}
              placeholder={"Confirm your password"}
              icon={HiLockClosed}
              type={"password"}
            />
          </div>
          <div className="basis-4/12 mr-5">
            <SemSelect
              label={"User Type"}
              icon={HiUserGroup}
              id={"role"}
              data={[
                "Please select your role",
                "Department Supply Coordinator",
                "Admin",
              ]}
            />
            <SemSelect
              label={"Offices"}
              icon={HiOfficeBuilding}
              id={"role"}
              data={[
                "Please select office",
                "Department Supply Coordinator",
                "Admin",
              ]}
            />

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
              <Button gradientMonochrome="success" className="w-full">
                <HiLogin className="mr-2 h-5 w-5" />
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
