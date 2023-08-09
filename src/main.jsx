import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import List_2 from "./components/List_2.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="text-primary text-center">Error</h1>,
  },
  {
    path: "list-2",
    element: <List_2 />,
  },
]);

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
  );
}

function Root() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulación de carga
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // Simulación de 2 segundos de carga
  }, []);

  return (
    <React.StrictMode>
      {isLoaded ? (
        <RouterProvider router={router}>
          {/* Renderiza tus componentes una vez que la carga haya terminado */}
        </RouterProvider>
      ) : (
        <LoadingScreen />
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
