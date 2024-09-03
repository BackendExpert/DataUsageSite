// src/routesConfig.js

import SignIn from "./components/LoginSignUpTW/SignIn";
import SignUp from "./components/LoginSignUpTW/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import PeoTv from "./components/Dashboard/PeoTv";
import DailyUse from "./components/Dashboard/DailyUse";
import SummaryData from "./components/Dashboard/SummaryData";
import PackageUpgrade from "./components/Dashboard/PackageUpgrade";
import ExtraGB from "./components/Dashboard/ExtraGB";
import DataAddons from "./components/Dashboard/DataAddons";
import DashHome from "./components/Dashboard/Admin/DashHome";
import UserAccounts from "./components/Accounts/UserAccounts";
import NewAccount from "./components/Accounts/NewAccount";
import AccountData from "./components/Accounts/AccountData";
import AddPackage from "./components/Packages/AddPackage";
import ManagePackages from "./components/Packages/ManagePackages";
import PackageView from "./components/Packages/PackageView";
import PackageUsage from "./components/Packages/PackageUsage";
import RouteAssign from "./components/Accounts/RouteAssign";

// Define available roles
export const roles = ["superadmin", "admin", "teacher", "staff", "student"];

// Define routes configuration
export const routesConfig = [
  {
    path: "/",
    element: <SignIn />,
    name: "Sign In",
    protected: false,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
    name: "Sign Up",
    protected: false,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
    name: "Dashboard",
    protected: true,
    children: [
      {
        path: "Home",
        element: <DashHome />,
        name: "Dashboard Home",
      },
      {
        path: "Summary",
        element: <SummaryData />,
        name: "Summary Data",
      },
      {
        path: "PackageUpgrade",
        element: <PackageUpgrade />,
        name: "Package Upgrade",
      },
      {
        path: "ExtraGB",
        element: <ExtraGB />,
        name: "Extra GB",
      },
      {
        path: "DataAddons",
        element: <DataAddons />,
        name: "Data Addons",
      },
      {
        path: "DailyUse",
        element: <DailyUse />,
        name: "Daily Use",
      },
      {
        path: "PeoTv",
        element: <PeoTv />,
        name: "Peo TV",
      },
      {
        path: "UserAccounts",
        element: <UserAccounts />,
        name: "User Accounts",
      },
      {
        path: "NewAccount",
        element: <NewAccount />,
        name: "New Account",
      },
      {
        path: "AccountData/:id",
        element: <AccountData />,
        name: "Account Data",
      },
      {
        path: "NewPackage",
        element: <AddPackage />,
        name: "Add New Package",
      },
      {
        path: "ManagePackages",
        element: <ManagePackages />,
        name: "Manage Packages",
      },
      {
        path: "PackageView/:id",
        element: <PackageView />,
        name: "Package View",
      },
      {
        path: "PackageUsage",
        element: <PackageUsage />,
        name: "Package Usage",
      },
      {
        path: "RouteAssign",
        element: <RouteAssign />,
        name: "Route Assign",
      },
    ],
  },
];
