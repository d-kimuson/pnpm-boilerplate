// @ts-check

/** @type {(packageName: string) => (paths: string[]) => string} */
const resolveAndJoinPaths = (packageName) => (paths) => {
  const parsedPaths = paths.map((file) =>
    file.replace(`packages/${packageName}/`, "./")
  );
  return parsedPaths.join(" ");
};

/**@type {(packageName: string) => (relPaths: string[]) => string[]} */
const eslintChecker = (packageName) => (relPaths) => {
  const pathText = resolveAndJoinPaths(packageName)(relPaths);
  return [
    `pnpm -C ./packages/${packageName} run:eslint --cache --fix ${pathText}`,
  ];
};

module.exports = {
  "**/*.{tsx,ts,mts,mcs,mjs,cjs,js,json,md,yml,yaml}": [
    "prettier --write",
    "cspell lint --gitignore --cache",
  ],

  // /**
  //  * @param {string[]} relPaths
  //  * @returns {string[]}
  //  */
  // "packages/backend/**/*.{tsx,ts,mts,mcs}": eslintChecker('backend'),
};
