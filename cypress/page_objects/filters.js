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
    val.forEach((i) => {
      cy.log(i);
      cy.get(".ant-select-tree-list-holder-inner")
        .find(".ant-select-tree-treenode")
        .contains(i)
        .click();
    });
    cy.contains("button", "Apply Filters").click();
    val.forEach((i) => {
      cy.get(".chip-value").should("contain", i);
    });
  }
  //client_type
  client_type(...val) {
    cy.visit(
      "https://prelivev2-vas-uae-affiliates.jarvisempg.com/admin/crm/clients"
    );
    cy.wait(3000);
    cy.contains("More Filters").click();
    cy.contains(
      "span.ant-select-selection-placeholder",
      "Search by Client Type"
    )
      .parents(".ant-select")
      .find(".ant-select-selector")
      .click();
    val.forEach((i) => {
      cy.get(".rc-virtual-list-holder-inner").contains(i).click();
    });
    cy.contains("button", "Apply Filters").click();
  }

  //client_category
  client_category(...val) {
    cy.visit(
      "https://prelivev2-vas-uae-affiliates.jarvisempg.com/admin/crm/clients"
    );
    cy.wait(3000);
    cy.contains("More Filters").click();
    cy.contains("span.ant-select-selection-placeholder", "Search by Category")
      .parents(".ant-select") // Go up to the full dropdown container
      .find(".ant-select-selector") // Find the clickable wrapper
      .click();
    val.forEach((i) => {
      cy.get(".rc-virtual-list-holder").contains(i).click();
    });

    cy.contains("button", "Apply Filters").click();
    //chips
    val.forEach((i) => {
      cy.get(".chip-value").should("contain", i);
    });
  }
}

export default Filters;
