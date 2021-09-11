import React, { createContext, useState, useContext } from "react";
import { widgetMapping } from "../components/WidgetMap";

export const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
  // list of widgets
  const [widgets, setWidgets] = useState([]);

  const addWidget = ({ key, message, value, title, topic, publishMessage }) => {
    const Component = widgetMapping[key];
    setWidgets((widgets) => [
      ...widgets,
      { key, message, value, title, topic, publishMessage },
    ]);
  };

  const removeWidget = (id) => {
    setWidgets((widgets) => widgets.filter((item, idx) => idx != id));
  };

  const toExport = {
    addWidget,
    removeWidget,
    widgets,
  };

  return (
    <WidgetContext.Provider value={toExport}>{children}</WidgetContext.Provider>
  );
};

export const useWidgets = () => useContext(WidgetContext);
