class Filters {
  //ref
  ref(val) {
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
          if (found) {
            cy.log("Verified in the table: " + val);
          } else {
            cy.log("Not Matched: " + val);
          }
        });
      });
    cy.get(".chip-value").should("contain", val);
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
    cy.get(".chip-value").should("contain", val);
  }
  //email
  email(val) {
    cy.visit(
      "https://prelivev2-vas-uae-affiliates.jarvisempg.com/admin/crm/clients"
    );
    cy.wait(3000);
    cy.contains("More Filters").click();
    cy.get('[placeholder="Search by Email"]').type(val);
    cy.contains("button", "Apply Filters").click();
    cy.get("tbody")
      .should("be.visible")
      .within(() => {
        cy.get("td").then((cells) => {
          const found = [...cells].some((cell) => cell.innerText.includes(val));
        });
      });
    cy.get(".chip-value").should("contain", val);
  }

  //area
  area(...val) {
    cy.visit(
      "https://prelivev2-vas-uae-affiliates.jarvisempg.com/admin/crm/clients"
    );
    cy.wait(3000);

    cy.contains("More Filters").click();

    cy.contains("span.ant-select-selection-placeholder", "Search by Area")
      .parents(".ant-select")
      .click();

    val.forEach((areaName) => {
      cy.get(".ant-select-tree-list-holder-inner")
        .find(".ant-select-tree-treenode")
        .contains(areaName)
        .click({ force: true });
    });

    cy.contains("button", "Apply Filters").click();
  }
}

export default Filters;
