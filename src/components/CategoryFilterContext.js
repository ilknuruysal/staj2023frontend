import React, { createContext, useContext, useState } from "react";

const CategoryFilterContext = createContext();

export const useCategoryFilter = () => {
  return useContext(CategoryFilterContext);
};

export const CategoryFilterProvider = ({ children }) => {
  const [categoryFilter, setCategoryFilter] = useState(0);

  return (
    <CategoryFilterContext.Provider
      value={{ categoryFilter, setCategoryFilter }}
    >
      {children}
    </CategoryFilterContext.Provider>
  );
};
