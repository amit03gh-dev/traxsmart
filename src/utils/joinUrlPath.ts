const joinUrlPath = (...urlPaths: (string | number)[]): string =>
  urlPaths.map(String).join("/");

export default joinUrlPath;
