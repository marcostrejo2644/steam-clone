import myServer from "@services/server"
import mongoose from "mongoose"
import request from "supertest"
import { TEST_CONST } from "./const"

describe("Tags Test", () => {

  const tagsApiPath = `${TEST_CONST.api_base}/tags`

  const Tags = {
    id: "test-1234-abc",
    name: "test tag name"
  }

  describe("GET /tags", () => {

    it("should be a JSON format", (done) => {
      request(myServer)
        .get(tagsApiPath)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    xit("should response 404 for non exist id", (done) => {
      const mongModelId = new mongoose.Types.ObjectId()

      request(myServer)
        .get(`${tagsApiPath}/${mongModelId.toString()}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })

  })
})