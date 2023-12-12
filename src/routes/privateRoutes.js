import EditProfile from "../pages/profile/components/EditProfile";
import MyBookings from "../pages/profile/components/MyBookings";
import PersonalInfo from "../pages/profile/components/PersonalInfo";
import Review from "../pages/profile/components/Review";
import UserSettings from "../pages/profile/components/UserSettings";

export const privateRoutes = [
  { name: "personal-info", Component: PersonalInfo },
  { path: "personal-info", name: "personal-info", Component: PersonalInfo },
  { path: "edit-info", name: "edit-info", Component: EditProfile },
  { path: "my-bookings", name: "my-bookings", Component: MyBookings },
  { path: "review", name: "review", Component: Review },
  { path: "settings", name: "settings", Component: UserSettings },
];
