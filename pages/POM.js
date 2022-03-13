class selectors {

    Elem() {
        return cy.get(".category-cards > :nth-child(1)")
    }

    WebEl() {
        return cy.contains("Web Tables")
    }

    Add() {
        return cy.get("#addNewRecordButton")
    }

    First() {
        return cy.get("#firstName")
    }

    Last() {
        return cy.get("#lastName")
    }

    Mail() {
        return cy.get("#userEmail")
    }

    Sal() {
        return cy.get("#salary")
    }

    Dep() {
        return cy.get("#department")

    }

    Sub() {
        return cy.get("#submit")
    }

    DeleteUserByName(Srting) {
        cy.get(":nth-child(4) > .rt-tr > :nth-child(1)").contains(Srting)
        cy.get("#delete-record-4").click()

    }

}


export default selectors