import chai from "chai";
import chaiHttp from "chai-http";
import {app} from "../src/index.js";

chai.use(chaiHttp);

const expect = chai.expect;


describe("GET /status", () => {
    it("should return 200 OK", () => {
        return chai
        .request(app)
        .get("/status")
        .then((res) => {
            // check status and text
            expect(res).to.have.status(200);
        });
    });

    it("should return OK status", () => {
        return chai
        .request(app)
        .get("/status")
        .then((res) => {
            // check status and text
            expect(res.text).to.equal("OK");
        });
    })
    });