/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import Button from "../UI/Button";
import { Menu, Transition, Listbox } from "@headlessui/react";
import { CgMenuRight } from "react-icons/cg";
import { BiChevronDown } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import Image from "../UI/Image";
import profile__image from "../../assets/images/profile/profile.png";
import {
  dropdownNavItems,
  navItems,
  userMenuDropdownLinks,
} from "../../constants/navigation";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import bdLogo from "../../assets/images/background/bdlogo.png";

const ToggleButton = ({ user, handleChangeCategory, selected }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const logout = useLogout();

  const signOut = async () => {
    await logout();
  };

  return (
    <>
      <div className="flex items-center gap-x-2">
        <div className="relative">
          <Listbox
            value={selected?.category}
            onChange={(val) => handleChangeCategory(val)}
          >
            <div className="relative mt-1 capitalize">
              <Listbox.Button className="w-full rounded-md text-brand__font__size__sm text-gray-600 capitalize flex items-center gap-x-1 mt-1.5">
                <div className="w-8 h-8 border rounded-full flex items-center justify-center bg-white">
                  {selected?.category === "regular" || !selected?.category ? (
                    <Image src={bdLogo}/>
                  ) : (
                    <BsGlobe2 size={40} />
                  )}
                </div>
                <BiChevronDown
                  className={`${isHomePage ? "text-white" : "text-primary"}`}
                  size={18}
                />
              </Listbox.Button>

              <Listbox.Options className="absolute -left-[86px] mt-1 max-h-60 w-[150px] overflow-auto rounded-md bg-white py-1 shadow-lg border text-brand__font__size__sm">
                <Listbox.Option value="regular">
                  {({ selected }) => (
                    <Button
                      className={`text-gray-900 flex justify-between w-full items-center px-2 py-2 text-sm capitalize hover:bg-primary hover:text-white`}
                    >
                      <span>Regular</span>
                      {selected && <AiOutlineCheck className="text-primary" />}
                    </Button>
                  )}
                </Listbox.Option>
                <Listbox.Option value="foreigner">
                  {({ selected }) => (
                    <Button
                      className={`text-gray-900 flex justify-between w-full items-center px-2 py-2 text-sm capitalize hover:bg-primary hover:text-white`}
                    >
                      <span>Foreigner</span>
                      {selected && <AiOutlineCheck className="text-primary" />}
                    </Button>
                  )}
                </Listbox.Option>
              </Listbox.Options>
            </div>
          </Listbox>
        </div>
        {user ? (
          <div className="relative">
            <Menu as="div">
              <Menu.Button>
                <div className="flex items-center gap-x-1 mt-2.5">
                  <div className="w-10 h-10 border rounded-full">
                    <Image
                      className="w-full h-full object-cover rounded-full"
                      src={
                        user?.photo?.cloudinaryUrl
                          ? user?.photo?.cloudinaryUrl
                          : profile__image
                      }
                    />
                  </div>
                  <BiChevronDown
                    className={`${isHomePage ? "text-white" : "text-primary"}`}
                    size={18}
                  />
                </div>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg py-1.5 border">
                  {userMenuDropdownLinks.map(({ title, route, Icon }) => (
                    <Menu.Item key={title}>
                      {({ active }) =>
                        title.includes("Sign out") ? (
                          <Button
                            onClick={() => signOut()}
                            className="text-gray-900 flex w-full items-center px-2 py-2 text-sm capitalize border-t hover:bg-primary hover:text-white"
                          >
                            <Icon className="mr-2 h-5 w-5" aria-hidden="true" />
                            {title}
                          </Button>
                        ) : (
                          <HashLink
                            to={route}
                            className={`${
                              active ? "bg-primary text-white" : "text-gray-900"
                            } group flex w-full items-center px-2 py-2 text-sm capitalize`}
                          >
                            <Icon className="mr-2 h-5 w-5" aria-hidden="true" />
                            {title}
                          </HashLink>
                        )
                      }
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          <div className="flex gap-x-2 items-center font-brand__font__semibold text-brand__font__size__sm">
            {/* <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? "bg-primary" : "bg-secondary"}
          relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span
                aria-hidden="true"
                className={`${enabled ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch> */}

            <HashLink
              className={`block border duration-300 py-1.5 lg:py-2 px-3 lg:px-4 rounded-full shadow-md backdrop-blur-lg ${
                isHomePage
                  ? "text-white border-brand__gray__border hover:bg-bg__gray"
                  : "text-primary border-primary hover:bg-primary hover:text-white hover:border-secondary"
              }`}
              to="/sign-in"
            >
              Sign In
            </HashLink>

            {/* <HashLink
              className={`block border border-brand__gray__border bg-primary  duration-300 py-1.5 lg:py-2 px-3 lg:px-4 rounded-full shadow-md ${
                isHomePage ? "hover:bg-bg__gray" : "hover:bg-secondary"
              }`}
              to="/sign-up"
            >
              Sign up
            </HashLink> */}
          </div>
        )}

        <Menu as="div" className="block lg:hidden relative">
          <Menu.Button
            className={`mt-2 ${isHomePage ? "text-white" : "text-primary"}`}
          >
            <CgMenuRight size={35} />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              as="section"
              className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                {/* Main navbar menu */}
                {navItems.map(({ title, route, Icon }) => (
                  <Menu.Item key={title}>
                    {({ active }) =>
                      title.includes("packages") ? (
                        <HashLink
                          onClick={(e) => {
                            e.preventDefault();
                            setSubmenuVisible((prev) => !prev);
                          }}
                          to={route}
                          className={`${
                            active ? "bg-primary text-white" : "text-gray-900"
                          } group flex w-full items-center px-2 py-2 text-brand__font__size__sm capitalize`}
                        >
                          <Icon className="mr-2 h-5 w-5" />
                          {title}
                        </HashLink>
                      ) : (
                        <HashLink
                          to={route}
                          className={`${
                            active ? "bg-primary text-white" : "text-gray-900"
                          } group flex w-full items-center px-2 py-2 text-brand__font__size__sm capitalize`}
                        >
                          <Icon className="mr-2 h-5 w-5" />
                          {title}
                        </HashLink>
                      )
                    }
                  </Menu.Item>
                ))}
              </div>

              {/* This is submenu. It will visible after clicking packages link*/}
              {submenuVisible && (
                <div className="absolute top-20 left-0 w-full bg-white shadow-lg rounded-bl-md rounded-br-md py-1">
                  {dropdownNavItems.map(({ title, route }) => (
                    <Menu.Item key={title}>
                      {({ active }) => (
                        <HashLink
                          to={route}
                          className={`${
                            active ? "bg-primary text-white" : "text-gray-900"
                          } group flex w-full items-center px-4 py-2 text-sm capitalize`}
                        >
                          {title}
                        </HashLink>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              )}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};

export default ToggleButton;
