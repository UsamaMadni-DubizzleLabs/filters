class Filters {
  //ref
  refFilter(val) {
    cy.visit(
      "https://prelivev2-vas-uae-affiliates.jarvisempg.com/admin/crm/clients"
    );
    cy.wait(3000);
    cy.get('[placeholder="Search by Ref #"]').type(val);
    cy.contains("button", "Search").click();
    cy.get("tbody")
      .should("be.visible")
      .within(() => {
        cy.get("td").then((cells) => {
          const found = [...cells].some((cell) => cell.innerText.includes(val));
        });
      });
  }
  //contact
  contact(val) {
    cy.visit(
      "https://prelivev2-vas-uae-affiliates.jarvisempg.com/admin/crm/clients"
    );
    cy.wait(3000);
    cy.get('[placeholder="Search by Contact No."]').type(val);
    cy.contains("button", "Search").click();
    cy.get("tbody")
      .should("be.visible")
      .within(() => {
        cy.get("td").then((cells) => {
          const found = [...cells].some((cell) => cell.innerText.includes(val));
        });
      });
  }
  //email
  email(val) {
    cy.visit(
      "https://prelivev2-vas-uae-affiliates.jarvisempg.com/admin/crm/clients"
    );
    cy.wait(3000);
    cy.get('[placeholder="Search by Email""]').type(val);
    cy.contains("button", "Search").click();
    cy.get("tbody")
      .should("be.visible")
      .within(() => {
        cy.get("td").then((cells) => {
          const found = [...cells].some((cell) => cell.innerText.includes(val));
        });
      });
  }
}

export default Filters;
