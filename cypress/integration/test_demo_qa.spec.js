import selectors from "../../pages/POM";

let Selectors = new selectors();
describe("Opening web page", () => {

    before(() => {
        cy.visit('https://demoqa.com/')
    })

    it("Visit demo qa web page", () => {
        Selectors.Elem().click()
        cy.location("pathname").should("equal", "/elements")
        Selectors.WebEl().click()
        cy.location("pathname").should("equal", "/webtables")
        Selectors.Add().click()
        Selectors.First().clear().type("Arman")
        Selectors.First().should("be.enabled")
        Selectors.Last().clear().type("Khachartyan")
        Selectors.Last().should("be.enabled")
        Selectors.Mail().clear().type("arman@gmail.com")
        Selectors.Mail().should("be.enabled")
        cy.get("#age").type("23")
        Selectors.Sal().clear()
        Selectors.Sal().type("2000")
        Selectors.Dep().type("Sevan")
        Selectors.Sub().click()
        Selectors.DeleteUserByName("Arman")
    })

})