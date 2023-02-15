import myServer from "@services/server"

describe("Should create a server without an error", () => {
  const defaultPort = 3080;

  it(`Create a server in port ${defaultPort}`, () => {
    myServer.listen(defaultPort, () => { }).close(() => {})
  })

})