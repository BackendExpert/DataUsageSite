import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/LoginSignUpTW/SignIn";
import SignUp from "./components/LoginSignUpTW/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
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
import HomePage from "./components/Public/HomePage/HomePage";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp /> } />
        <Route path="/Dashboard/" element={<PrivateRoute ProtectRoute={<Dashboard />} />} >
          <Route path="Home" element={<PrivateRoute ProtectRoute={<DashHome /> } /> } />
          <Route path="Summary" element={<PrivateRoute ProtectRoute={<SummaryData /> } /> } />
          <Route path="PackageUpgrade" element={<PrivateRoute ProtectRoute={<PackageUpgrade /> } /> } />
          <Route path="ExtraGB" element={<PrivateRoute ProtectRoute={<ExtraGB /> } /> } />
          <Route path="DataAddons" element={<PrivateRoute ProtectRoute={<DataAddons /> } /> } />
          <Route path="DailyUse" element={<PrivateRoute ProtectRoute={<DailyUse /> } /> } />
          <Route path="PeoTv" element={<PrivateRoute ProtectRoute={<PeoTv /> } /> } />
          <Route path="UserAccounts" element={<PrivateRoute ProtectRoute={<UserAccounts /> } /> } />
          <Route path="NewAccount" element={<PrivateRoute ProtectRoute={<NewAccount /> } /> } />
          <Route path="AccountData/:id" element={<PrivateRoute ProtectRoute={<AccountData /> } /> } />
          <Route path="NewPackage" element={<PrivateRoute ProtectRoute={<AddPackage /> } /> } />
          <Route path="ManagePackages" element={<PrivateRoute ProtectRoute={<ManagePackages /> } /> } />
          <Route path="PackageView/:id" element={<PrivateRoute ProtectRoute={<PackageView /> } /> } />
          <Route path="PackageUsage" element={<PrivateRoute ProtectRoute={<PackageUsage /> } /> } />
        </Route>
      </Routes> 
    </BrowserRouter>
  )
}