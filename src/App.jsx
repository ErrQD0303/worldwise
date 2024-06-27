import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./context/CitiesContext";
import { AuthProvider } from "./context/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

// import Homepage from "./pages/Homepage";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";

// Lazy loading by using react lazy function
// The component will suspended until them being rendered by React
const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// dist/assets/index-b72c3826.css   29.96 kB │ gzip:   5.07 kB
// dist/assets/index-2ff10f8a.js   508.42 kB │ gzip: 148.52 kB

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";
function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          {/* The fallback will be the element should be render when it first change to the lazy loading page (Just display the Spinner) */}
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              {/* We can use both index Route and path="/" to set default Route for the Website */}
              {/* <Route path="/" element={<Homepage />} /> */}
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              {/* We must put the Outlet Component inside the element which is inside this Route's element attribute */}
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                {/* In order to use those nested route below, we need to use Outlet Component */}
                {/* Only 1 nested route in the same level is print to the Outlet Component place at a time */}
                {/* index Route set the Route to the default nested route of an outer Route */}
                <Route index element={<Navigate to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
