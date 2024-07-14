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
            <div className="my-2">
              <div className="mb-2 block">
                <Label
                  className="text-white"
                  htmlFor="firstName"
                  value="First Name"
                />
              </div>
              <TextInput
                id="firstName"
                icon={HiUser}
                type="text"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="my-2">
              <div className="mb-2 block">
                <Label
                  className="text-white"
                  htmlFor="middleName"
                  value="Middle Name"
                />
              </div>
              <TextInput
                icon={HiUser}
                id="middleName"
                type="text"
                placeholder="Enter your middle name"
                required
              />
            </div>
            <div className="my-2">
              <div className="mb-2 block">
                <Label
                  className="text-white"
                  htmlFor="lastName"
                  value="Last Name"
                />
              </div>
              <TextInput
                icon={HiUser}
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="my-2">
              <div className="mb-2 block">
                <Label
                  className="text-white"
                  htmlFor="birthDate"
                  value="Birth Date"
                />
              </div>
              <TextInput
                icon={HiCalendar}
                id="birthDate"
                type="date"
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="my-2">
              <div className="mb-2 block">
                <Label
                  className="text-white"
                  htmlFor="contact"
                  value="Contact Number"
                />
              </div>
              <TextInput
                icon={HiPhone}
                addon="+63"
                id="contact"
                type="text"
                placeholder="Enter your contact number"
                required
              />
            </div>
          </div>
          <div className="basis-4/12 mr-5">
            <div className="my-2">
              <div className="mb-2 block">
                <Label className="text-white" htmlFor="gender" value="Gender" />
              </div>
              <Select icon={HiUsers} required id="gender" size={"is-large"}>
                <option>Select your gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Select>
            </div>

            <div className="my-2">
              <div className="mb-2 block">
                <Label className="text-white" htmlFor="email" value="Email" />
              </div>
              <TextInput
                icon={HiMail}
                id="email"
                type="text"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="my-2">
              <div className="mb-2 block">
                <Label
                  className="text-white"
                  htmlFor="address"
                  value="Address"
                />
              </div>
              <TextInput
                icon={HiLocationMarker}
                id="address"
                type="text"
                placeholder="Enter your Address"
                required
              />
            </div>
            <div className="my-2">
              <div className="mb-2 block">
                <Label
                  className="text-white"
                  htmlFor="password"
                  value="Password"
                />
              </div>
              <TextInput
                icon={HiLockClosed}
                id="password"
                type="text"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="my-2">
              <div className="mb-2 block">
                <Label
                  className="text-white"
                  htmlFor="confirmPassword"
                  value="Confirm Password"
                />
              </div>
              <TextInput
                icon={HiLockClosed}
                id="confirmPassword"
                type="text"
                placeholder="Confrim Password"
                required
              />
            </div>
          </div>
          <div className="basis-4/12 mr-5">
            <div className="my-2">
              <div className="mb-2 block">
                <Label
                  className="text-white"
                  htmlFor="role"
                  value="User type"
                />
              </div>
              <Select icon={HiUserGroup} required id="role" size={"is-large"}>
                <option>Select your role</option>
                <option>Admin</option>
                <option>Department Supply Coordinator</option>
              </Select>
            </div>
            <div className="my-2">
              <div className="mb-2 block">
                <Label
                  className="text-white"
                  htmlFor="offices"
                  value="Office"
                />
              </div>
              <Select
                icon={HiOfficeBuilding}
                required
                id="offices"
                size={"is-large"}
              >
                <option>Select your office</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Select>
            </div>
            <Button
              type="submit"
              gradientMonochrome="info"
              className="w-full mt-10"
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
        </form>
      </div>
    </div>
  );
};

export default Signup;
