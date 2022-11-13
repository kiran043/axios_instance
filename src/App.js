import "./App.css";
import ApiCall from "./ApiCall";
import axios from "axios";
import SecondApi from "./SecondApi";

// axios.defaults.baseURL="https://jsonplaceholder.typicode.com/"
// axios.defaults.headers.common["Authorization"]="Auth Token"

axios.interceptors.request.use((request) => {
  console.log(request);
  request.headers.chanelName="Just Test"
  return request;
});
axios.interceptors.response.use((response) => {
  console.log(response);
  return response;
});

function App() {
  return (
    <div className="App">
      <ApiCall />
      <SecondApi/>
    </div>
  );
}

export default App;
