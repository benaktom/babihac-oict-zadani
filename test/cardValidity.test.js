import chai from "chai";
import chaiHttp from "chai-http";
import {app} from "../src/index.js";

chai.use(chaiHttp);

const expect = chai.expect;


describe("GET /card/validate/:cardNumber", () => {
    it("should return unauthorized when invalid credentials are given", () => {
        return chai
        .request(app)
        .get("/card/validate/1234")
        .auth("invalid", "invalid")
        .then((res) => {
            // check status and text
            expect(res).to.have.status(401);
        });
    });

    it("should return card data when valid credentials are given", () => {
        return chai
        .request(app)
        .get("/card/validate/1234")
        .auth("admin", "admin")
        .then((res) => {
            // check status and text
            expect(res).to.have.status(200);
            expect(res.body).to.have.property("endDate");
            expect(res.body).to.have.property("state");
        });

    });

    }
);