import PackagesListScreen from "../pages/Packages";
import AboutUsScreen from "../pages/about-us";
import BookingScreen from "../pages/booking";
import ContactUsScreen from "../pages/contact-us";
import ForgetPasswordScreen from "../pages/forget-password";
import GalleryScreen from "../pages/gallery";
import HomeScreen from "../pages/home";
import PackageDetailScreen from "../pages/package-detail";
import ResetPasswordScreen from "../pages/reset-password";
import SignInScreen from "../pages/sign-in";
import SignUpScreen from "../pages/sign-up";

export const publicRoutes = [
  { path: "/", name: "home", Component: HomeScreen },
  {
    path: "/package-detail/:id",
    name: "package-detail",
    Component: PackageDetailScreen,
  },
  {
    path: "/booking",
    name: "booking",
    Component: BookingScreen,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    Component: ContactUsScreen,
  },
  {
    path: "/about-us",
    name: "about-us",
    Component: AboutUsScreen,
  },
  {
    path: "/tour-list",
    name: "tour-list",
    Component: PackagesListScreen,
  },
  {
    path: "/gallery",
    name: "gallery",
    Component: GalleryScreen,
  },
  {
    path: "/forget-password",
    name: "forget-password",
    Component: ForgetPasswordScreen,
  },
  {
    path: "/reset-password/:token",
    name: "reset-password",
    Component: ResetPasswordScreen,
  },
  { path: "/sign-in", name: "sign-in", Component: SignInScreen },
  { path: "/sign-up", name: "sign-up", Component: SignUpScreen },
];
