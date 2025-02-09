import { dep } from "./dep"

// eslint-disable-next-line @typescript-eslint/require-await
const main = async () => {
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
