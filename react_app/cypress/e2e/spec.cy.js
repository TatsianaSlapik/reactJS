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
  });

  it("open MovieDetails", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Pulp Fiction").click();

    cy.visit("http://localhost:3000/1");
    cy.get(".movieDetails");
  });

  it("open MovieDetails and return to Search", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Pulp Fiction").click();

    cy.visit("http://localhost:3000/1");
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
    cy.visit("http://localhost:3000");
    cy.get(".film-description ").find(".film-date");
  });

  it("get movies by search", () => {
    cy.request("GET", `http://localhost:4000/movies?searchBy=&filter=&search=`);
    cy.visit("http://localhost:3000");
    cy.get(".film-description ").find(".film-date");
  });

  it("change genre", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Comedy").click();
    cy.get("ul button:first").should("not.have.class", "active");
    cy.request(
      "GET",
      `http://localhost:4000/movies?searchBy=&filter=Comedy&search=`
    );
    cy.visit("http://localhost:3000/?genre=Comedy");
    cy.get(".film-description ").find(".film-date");
  });

  it("change sortBy", () => {
    cy.visit("http://localhost:3000");

    cy.get(".sort > label").should("have.class", "sortBy");

    cy.get("select").select("Title");
    cy.request(
      "GET",
      `http://localhost:4000/movies?searchBy=title&filter=&search=`
    );
    cy.visit("http://localhost:3000/?sortBy=title");
    cy.get(".film-description ").find(".film-date");
  });

  it("change search", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").type("movie");
    cy.contains("SEARCH").click();

    cy.request(
      "GET",
      `http://localhost:4000/movies?searchBy=&filter=&search=movie`
    );
    cy.visit("http://localhost:3000/?query=movie");

    cy.get(".film-description ").find(".film-date");
  });

  it("add movie", () => {
    cy.visit("http://localhost:3000");

    cy.contains("+ add movie").click();

    cy.visit("http://localhost:3000/new");

    cy.contains("SUBMIT").click();
  });

  it("edit movie", () => {
    cy.visit("http://localhost:3000/1/edit");

    cy.contains("SUBMIT").click();
  });
});
