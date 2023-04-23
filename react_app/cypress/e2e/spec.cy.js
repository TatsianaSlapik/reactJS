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
    cy.get("input").type("What do you want to watch?");
  });

  it("component MovieTitle", () => {
    cy.visit("http://localhost:3000");
    cy.get(".film > img");
    cy.get(".film-description ").find(".film-genre");

    cy.contains("Fifty Shades Freed").click();
    cy.get(".movieDetails");
    cy.get(".movie-header>button").click();
    cy.get(".search");
  });

  it("open MovieDetails", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Fifty Shades Freed" || "Pulp Fiction").click();
    cy.get(".movieDetails");
  });

  it("open MovieDetails and return to Search", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Fifty Shades Freed" || "Pulp Fiction").click();
    cy.get(".movieDetails");
    cy.get(".movie-header>button").click();
    cy.get(".search");
  });

  it("component SortControl", () => {
    cy.visit("http://localhost:3000");
    cy.get(".sort > label").should("have.class", "sortBy");

    cy.get("select").select("Title");
  });

  it("get movies by gender", () => {
    cy.request(
      "GET",
      `http://localhost:4000/movies?searchBy=&filter=Comedy&search=`
    );
    cy.visit("http://localhost:3000");
    cy.get(".film-description > .film-genre").should(
      "not.have.class",
      "active"
    );
    cy.get(".film-description ").find(".film-genre");
  });

  it("get movies by title", () => {
    cy.request(
      "GET",
      `http://localhost:4000/movies?searchBy=title&filter=&search=`
    );
    cy.visit("http://localhost:3000");
    cy.get(".film-description ").find(".film-date");
  });

  it("get movies by search", () => {
    cy.request("GET", `http://localhost:4000/movies?searchBy=&filter=&search=`);
    cy.visit("http://localhost:3000");
    cy.get(".film-description ").find(".film-date");
  });
});
