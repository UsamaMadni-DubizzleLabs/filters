//imports
import Filters from "../page_objects/filters";

//variables
const email = "admin@jarvisempg.com";
const password = "MASTER";
const filters = new Filters();

//login
beforeEach(() => {
  cy.login(email, password);
});

//test_cases
describe("Filters Testing", () => {
  it("Search by Business Name", () => {
    filters.client_type("Dealership - Sales Agent","Freelancer");
  });
});
