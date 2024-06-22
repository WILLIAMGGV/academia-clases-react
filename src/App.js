import FormsFirebase from "./page/FormsFirebase";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <FormsFirebase />
      </AuthProvider>
    </div>
  );
}

export default App;
