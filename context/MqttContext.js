import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";

export const MqttContext = createContext();

export const MqttProvider = ({ children }) => {
  const [server, setServer] = useState("");
  const [port, setPort] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [data, setData] = useState({});
  const socket = useRef();

  const disconnect = () => {
    socket.current.close();
    setServer("");
    setPort(0);
  };

  useEffect(() => {
    if (server !== "" && port !== 0) {
      socket.current = new WebSocket(`ws://${server}:${port}/mqtt`);

      socket.current.onopen = () => {
        setIsConnected(true);
      };

      socket.current.onclose = () => {
        setIsConnected(false);
      };

      socket.current.onmessage = (e) => {
        console.log(e.data);
        let m = data;
        m[`${e.data.topic}`] = e.data.message;
        setData(message);
      };

      // after creating the socket subscribe each topic
      if (subscriptions.length > 0) {
        subscriptions.forEach((topic) => {
          let message = {
            subscribe: topic,
          };
          socket.current.send(JSON.stringify(message));
        });
      }
    }
  }, [server, port]);

  const subscribe = (topic) => {
    const data = {
      subscribe: topic,
    };
    socket.current.send(JSON.stringify(data));
    setSubscriptions((subs) => [...subs, topic]);
  };

  const unsubscribe = (topic) => {
    const data = {
      unsubscribe: topic,
    };

    socket.current.send(JSON.stringify(data));
    setSubscriptions((subs) => subs.filter((tpc) => tpc !== topic));
  };

  const exports = {
    setServer,
    setPort,
    server,
    port,
    subscribe,
    unsubscribe,
    data,
    setData,
    isConnected,
    disconnect,
  };
  return (
    <MqttContext.Provider value={exports}>{children}</MqttContext.Provider>
  );
};

export const useMqtt = () => useContext(MqttContext);
