import Link from "next/link";
import ConnectWalletBtn from "./ConnectWallet";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 mb-24">
      <div className="navbar-start">
        <ul className="menu rounded-box menu-horizontal bg-base-100 p-2">
          <li className="mr-3">
            <Link href={"/"}>
              <span>Home</span>
            </Link>
          </li>
          {/* <li tabIndex={0}>
            <span>Parent</span>
            <ul className="rounded-box bg-base-100 p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li>
                <a>Submenu 3</a>
              </li>
            </ul>
          </li> */}
          <li>
            <Link href={"/dashboard"}>
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-center">
        <a className="btn-ghost btn text-xl normal-case">PeepleDAO</a>
      </div>
      <div className="navbar-end">
        {/* <ConnectWalletBtn /> */}
      </div>
    </div>
  );
}
