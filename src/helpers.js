export function serializeFormParams(formElement) {
  let formData = [...new FormData(formElement).entries()];
  let paramUrl = formData.map(pair => pair.join("=")).join("&");

  return paramUrl;
}

export function getUrlParams(href) {
  const keyValuePairs = [...new URL(href).searchParams.entries()].map(
    ([key, value]) => ({
      [key]: value
    })
  );

  return Object.assign({}, ...keyValuePairs);
}
