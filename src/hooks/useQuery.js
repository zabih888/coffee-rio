import React, { useMemo } from "react";

const { useLocation } = require("react-router-dom");

export function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}
