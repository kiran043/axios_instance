import axios from "../src/axiosInstance";
import React, { useState, useEffect } from "react";

function ApiCall() {
  const [users, SetUsers] = useState([]);
  useEffect(() => {
    axios
      .get("/users")
      .then((res) => SetUsers(res.data));
  }, []);
  return (
    <div>
      {users.map((item) => (
        <p>{item.id}={item.name}</p>
      ))}
    </div>
  );
}

export default ApiCall;
