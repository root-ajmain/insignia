import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./auth/RequireAuth";
import ProfileScreen from "./pages/profile";
import { publicRoutes } from "./routes/publicRoutes";
import { privateRoutes } from "./routes/privateRoutes";
import NotFoundScreen from "./pages/not-found";
import ScrollToTop from "./hooks/UseAutoScrollToTop";
import PersistLogin from "./components/PersistLogin";

function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          className: "font-brand__font__semibold",
        }}
      />

      <Routes>
        <Route element={<PersistLogin />}>
          {publicRoutes.map(({ path, name, Component }) => (
            <Route key={name} path={path} element={<Component />} />
          ))}
          <Route element={<RequireAuth />}>
            <Route path="/profile" element={<ProfileScreen />}>
              {privateRoutes.map(({ path, name, Component }) => (
                <Route
                  key={name}
                  path={path}
                  index={name === "personal-info"}
                  element={<Component />}
                />
              ))}
            </Route>
          </Route>
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
