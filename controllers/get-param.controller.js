"use strict";

export const getParamByUrl = (parameter) => {
  const valueSearch = window.location.search;
  const urlParams = new URLSearchParams(valueSearch);
  return urlParams.get(parameter);
}
