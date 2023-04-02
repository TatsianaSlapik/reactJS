describe("My First Test", () => {
  it("component GenreSelect", () => {
    cy.visit("http://localhost:3000");

    cy.contains("All").click();
    cy.get("ul button:first").should("have.class", "active");

    cy.contains("Comedy").click();
    cy.get("ul button:first").should("not.have.class", "active");

    cy.contains("Horror").click();
  });

  it("component Search", () => {
    cy.visit("http://localhost:3000");

    cy.get(".search > h1");

    cy.get("input").should("have.value", "What do you want to watch?");

    cy.contains("SEARCH").click();
  });
});
