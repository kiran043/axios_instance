import axios from "../src/axiosInstance";
import React, { useState, useEffect } from "react";

export default function SecondApi() {
    const [users, SetUsers] = useState([]);
    useEffect(() => {
      axios
        .get("/posts")
        .then((res) => SetUsers(res.data));
    }, []);
  return (
    <div>
    {users.map((item) => (
      <p>{item.id}={item.title}</p>
    ))}
  </div>
  )
}
