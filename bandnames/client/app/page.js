"use client";

import AddBAnd from "@/components/AddBAnd";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";
import BandList from "@/components/BAndList";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const connectSocketServer = () => {
  const socket = io.connect("http://localhost:8080", {
    transports: ["websocket"],
  });
  return socket;
};

export default function Home() {
  const [socket] = useState(connectSocketServer());
  const [online, setOnline] = useState(false);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on('connect',() => {
      setOnline(true)
    })
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect',() => {
      setOnline(false)
    })
  }, [socket]);

  return (
    <main className="container">
      <div className="alert">
        <p>
          Service status:
          {online ? (
            <span className="text-success">online</span>
          ) : (
            <span className="text-danger">offline</span>
          )}
        </p>

        <h1>Band Names</h1>
        <hr />
        <div className="row">
          <div className="col-8">
            <BandList />
          </div>
          <div className="col-4">
            <AddBAnd />
          </div>
        </div>
      </div>
    </main>
  );
}
