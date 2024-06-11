import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Header from './Header'
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios";

const navigation = [
  { name: "Home", href: "/" },
  { name: "CosCalendar", href: "/calendar" },
  { name: "CosPlan", href: "/cosplan" },
  { name: "Expenses", href: "/expenses" },
]

export default function Navbar() {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  {/* useState swaps between open and close on hamburger menu */ }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      useSetCurrentUser(null)
    } catch (error) {
      console.error("An unexpected error happened:", error);
    }
  }


  const loggedInLinks = <><div className="hidden lg:flex lg:gap-x-12">
    {navigation.map((item) => (
      <a key={item.name} href={item.href} className="links">
        {item.name}
      </a>
    ))}
  </div>
    <div className="flex flex-1 items-center justify-end gap-x-6">
      <a href="/user-profile" className="links">
        Profile
      </a>
      <a href="/" className="links" onClick={handleLogout}>
        Log out
      </a>
    </div></>;

  const mobileLoggedInLinks = <>
    <div className="space-y-2 py-6">

      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-chetwode-blue-50"
        >
          {item.name}
        </a>
      ))}
      <a
        href="/user-profile"
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-chetwode-blue-50"
      >
        Profile
      </a>
      <a
        href="/"
        onClick={handleLogout}
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-chetwode-blue-50"
      >
        Log out
      </a>
    </div>
  </>

  const mobileLoggedOutLinks = <>
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-black">

        <div className="py-6">
          <a
            href="/login"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-chetwode-blue-50"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-chetwode-blue-50"
          >
            Sign up
          </a>

        </div>
      </div>
    </div></>

  const loggedOutLinks = <>
    <div className="flex flex-1 items-center justify-end gap-x-6">
      <a href="/" className="links">Home</a>
      <a href="/login" className="links">
        Log in
      </a>
      <a
        href="/signup"
        className="links"
      >
        Sign up
      </a>
    </div>
  </>

  return (
    <div className="w-full bg-chetwode-blue-800 text-chetwode-blue-50">
      <Header />
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
        {currentUser ? loggedInLinks : loggedOutLinks}
        {/* opens mobile hamburger menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-chetwode-blue-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black">

          {currentUser ? mobileLoggedInLinks : mobileLoggedOutLinks}
          <div className="flex items-center gap-x-6">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  )
}
