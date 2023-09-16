// @ts-check

/** @type {(arg: import('plop').NodePlopAPI) => void} */
export default function ({ setGenerator }) {
  setGenerator("ts-package", {
    description: "TypeScriptのパッケージを作成する",
    prompts: [
      {
        type: "input",
        name: "packageName",
        message: "パッケージ名(ex. http-client)を入力してください",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/{{packageName}}/package.json",
        templateFile: "plop-templates/ts-package/package.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{packageName}}/scripts/build.mjs",
        templateFile: "plop-templates/ts-package/scripts/build.mjs",
      },
      {
        type: "add",
        path: "packages/{{packageName}}/.eslintignore",
        templateFile: "plop-templates/ts-package/.eslintignore",
      },
      {
        type: "add",
        path: "packages/{{packageName}}/.eslintrc.cjs",
        templateFile: "plop-templates/ts-package/.eslintrc.cjs",
      },
      {
        type: "add",
        path: "packages/{{packageName}}/tsconfig.json",
        templateFile: "plop-templates/ts-package/tsconfig.json",
      },
      {
        type: "add",
        path: "packages/{{packageName}}/tsconfig.src.json",
        templateFile: "plop-templates/ts-package/tsconfig.src.json",
      },
      {
        type: "add",
        path: "packages/{{packageName}}/tsconfig.test.json",
        templateFile: "plop-templates/ts-package/tsconfig.test.json",
      },
      {
        type: "add",
        path: "packages/{{packageName}}/tsconfig.cli.json",
        templateFile: "plop-templates/ts-package/tsconfig.cli.json",
      },
      {
        type: "add",
        path: "packages/{{packageName}}/src/index.ts",
        templateFile: "plop-templates/ts-package/src/index.ts",
      },
    ],
  })

  setGenerator("node-app", {
    description: "TypeScriptのパッケージを作成する",
    prompts: [
      {
        type: "input",
        name: "appName",
        message: "app名(ex. http-client)を入力してください",
      },
    ],
    actions: [
      {
        type: "add",
        path: "apps/{{appName}}/package.json",
        templateFile: "plop-templates/node-app/package.json.hbs",
      },
      {
        type: "add",
        path: "apps/{{appName}}/scripts/build.mjs",
        templateFile: "plop-templates/node-app/scripts/build.mjs",
      },
      {
        type: "add",
        path: "apps/{{appName}}/.eslintignore",
        templateFile: "plop-templates/node-app/.eslintignore",
      },
      {
        type: "add",
        path: "apps/{{appName}}/.eslintrc.cjs",
        templateFile: "plop-templates/node-app/.eslintrc.cjs",
      },
      {
        type: "add",
        path: "apps/{{appName}}/tsconfig.json",
        templateFile: "plop-templates/node-app/tsconfig.json",
      },
      {
        type: "add",
        path: "apps/{{appName}}/tsconfig.src.json",
        templateFile: "plop-templates/node-app/tsconfig.src.json",
      },
      {
        type: "add",
        path: "apps/{{appName}}/tsconfig.test.json",
        templateFile: "plop-templates/node-app/tsconfig.test.json",
      },
      {
        type: "add",
        path: "apps/{{appName}}/src/index.ts",
        templateFile: "plop-templates/node-app/src/index.ts",
      },
    ],
  })
}
