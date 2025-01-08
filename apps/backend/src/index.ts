import { typedRange } from "@pnpm-boilerplate/helpers"
import { dep } from "./dep"

// eslint-disable-next-line @typescript-eslint/require-await
const main = async () => {
  for (const i of typedRange(0, 3)) {
    console.log(i)
  }

  console.log(dep)
}

main()
  .then(() => {
    console.log("done")
  })
  .catch((err: unknown) => {
    console.error(err)
    process.exit(1)
  })
