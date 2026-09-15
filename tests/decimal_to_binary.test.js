const app = require("C:/Users/ruben/OneDrive/Área de Trabalho/Pasta Conteúdos Facul Dani/fourth_semester/endpoints_and_middlewares/decimal_to_binary.js");
const request = require("supertest")

describe("Testing app", ()=>{

    it('Should return json({"decimal": 10, "binary": 1010})', async ()=>{

        const response = await request(app).get("/decimal_to_binary/10");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({"decimal": 10,
        "binary": "1010"
    });

    });

    it("Return an error if user enter a string", async ()=>{
        const response = await request(app).get("/decimal_to_binary/a");

        expect(response.status).toBe(400);
        expect(response.body).toEqual({error: "Please, enter a number"})
    })
    
})