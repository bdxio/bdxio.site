const eachSeries = require("async/eachSeries");
const moment = require("moment");

/*
 * Helpers functions
 */
async function deleteCollection(collection) {
  try {
    await strapi.db.query(collection).deleteMany({});
  } catch (error) {
    console.error(`Error while deleting ${collection} table : ${error}`);
  }
  return;
}

async function publishRessource(collection, id) {
  try {
    return await strapi.db.query(collection).update({
      where: { id },
      data: {
        publishedAt: new Date(),
      },
    });
  } catch (error) {
    console.error(
      `Error while updating ${collection} with id ${ressource.id} : ${error}`
    );
  }
}

async function populateCollection(collection, data) {
  try {
    return await strapi.db.query(collection).create({ select: ["id"], data });
  } catch (error) {
    console.error(
      `Error while populating ${collection} with ${data} : ${error}`
    );
  }
  return;
}

/*
 * Populate functions
 */
async function populateSpeakers(speakers) {
  if (!speakers || !speakers.length) {
    return;
  }

  const resource = "api::speaker.speaker";

  await deleteCollection(resource);

  console.log("table speakers has been deleted");

  eachSeries(
    speakers,
    async (speaker) => {
      const s = await populateCollection(resource, {
        conferenceHallId: speaker.uid,
        name: speaker.displayName || "",
        bio: speaker.bio && speaker.bio.length ? speaker.bio.trim() : "",
        address: speaker.address || "",
        photoUrl: speaker.photoUrl || "",
        twitter: speaker.twitter || "",
        github: speaker.github || "",
        company: speaker.company || "",
      });
      if (s && s.id) {
        await publishRessource(resource, s.id);
      }
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while looping through speakers", errLoop);
        return;
      }

      console.log("speakers have been added into database");
      return;
    }
  );
}

async function populateCategories(categories) {
  if (!categories || !categories.length) {
    return;
  }

  const resource = "api::category.category";

  await deleteCollection(resource);
  console.log("table categories has been deleted");

  eachSeries(
    categories,
    async (category) => {
      const c = await populateCollection(resource, {
        conferenceHallId: category.id,
        name: category.name || "",
        description: category.description || "",
        published_at: new Date(),
      });

      if (c && c.id) {
        await publishRessource(resource, c.id);
      }
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while looping through categories", errLoop);
        return;
      }

      console.log("categories have been added into database");
      return;
    }
  );
}

async function populateFormats(formats) {
  if (!formats || !formats.length) {
    return;
  }

  const resource = "api::format.format";

  await deleteCollection(resource);
  console.log("table formats has been deleted");

  eachSeries(
    formats,
    async (format) => {
      const f = await populateCollection(resource, {
        conferenceHallId: format.id,
        name: format.name || "",
        description: format.description || "",
        published_at: new Date(),
      });

      if (f && f.id) {
        await publishRessource(resource, f.id);
      }
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while looping through formats", errLoop);
        return;
      }

      console.log("formats have been added into database");
      return;
    }
  );
}

async function populateTalks(talks) {
  if (!talks || !talks.length) {
    return Promise.resolve();
  }

  const resource = "api::talk.talk";

  await deleteCollection(resource);
  console.log("table talks has been deleted");
  eachSeries(
    talks,
    async (talk) => {
      const t = await populateCollection(resource, {
        conferenceHallId: talk.id,
        title: talk.title,
        state: talk.state,
        level: talk.level,
        abstract: talk.abstract,
        categor: talk.categories,
        format: talk.formats,
        speakers: JSON.stringify(talk.speakers),
        comments: talk.comments,
        language: talk.language,
        creationDate: moment.unix(talk.createTimestamp._seconds).toDate(),
        published_at: new Date(),
      });

      if (t && t.id) {
        await publishRessource(resource, t.id);
      }
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while looping through talks", errLoop);
        return;
      }

      console.log("talks have been added into database");
      return;
    }
  );
}

async function populateCompanies(companies) {
  if (!companies || !companies.length) {
    return;
  }

  const resource = "api::company.company";
  await deleteCollection(resource);
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
      const c = await populateCollection(resource, {
        name: company,
        published_at: new Date(),
      });

      if (c && c.id) {
        await publishRessource(resource, c.id);
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

module.exports = {
  populateSpeakers,
  populateCategories,
  populateFormats,
  populateTalks,
  populateCompanies,
};
