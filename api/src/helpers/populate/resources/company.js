const eachSeries = require("async/eachSeries");
const {
  deleteTable,
  populateItemInTable,
  publishItemInTable,
} = require("../../database");

async function populateCompanyTable(companies) {
  if (!companies || !companies.length) {
    return;
  }

  const resource = "api::company.company";
  await deleteTable(resource);
  console.log("table companies has been deleted");

  const companiesFiltered = new Set(
    companies
      .map((speaker) => speaker?.company?.toLowerCase().trim())
      .filter((c) => c)
      .map((c) => `${c.charAt(0).toUpperCase()}${c.slice(1)}`)
  );

  eachSeries(
    Array.from(companiesFiltered),
    async (company) => {
      const c = await populateItemInTable(resource, {
        name: company,
        published_at: new Date(),
      });

      if (c && c.id) {
        await publishItemInTable(resource, c.id);
      }
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while looping through companies", errLoop);
        return;
      }

      console.log("companies have been added into database");
      return;
    }
  );
}

module.exports = populateCompanyTable;
