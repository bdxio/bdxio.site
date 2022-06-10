const eachSeries = require("async/eachSeries");
const moment = require("moment");

/*
 * Helpers functions
 */
async function deleteCollection(collection) {
  try {
    await strapi.db.query(collection).deleteMany({});
  } catch (error) {
    console.error(`Error while deleting ${collection} table`);
  }
  return;
}

async function populateCollection(collection, data) {
  try {
    await strapi.db.query(collection).create({ data });
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

  await deleteCollection("api::speaker.speaker");

  console.log("table speakers has been deleted");

  eachSeries(
    speakers,
    async (speaker) => {
      await populateCollection("api::speaker.speaker", {
        conferenceHallId: speaker.uid,
        name: speaker.displayName || "",
        bio: speaker.bio && speaker.bio.length ? speaker.bio.trim() : "",
        address: speaker.address || "",
        photoUrl: speaker.photoUrl || "",
        twitter: speaker.twitter || "",
        github: speaker.github || "",
        company: speaker.company || "",
        published_at: new Date(),
      });
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

  await deleteCollection("api::category.category");
  console.log("table categories has been deleted");

  eachSeries(
    categories,
    async (category) => {
      await populateCollection("api::category.category", {
        conferenceHallId: category.id,
        name: category.name || "",
        description: category.description || "",
        published_at: new Date(),
      });
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

  await deleteCollection("api::format.format");
  console.log("table formats has been deleted");

  eachSeries(
    formats,
    async (format) => {
      await populateCollection("api::format.format", {
        conferenceHallId: format.id,
        name: format.name || "",
        description: format.description || "",
        published_at: new Date(),
      });
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
    return;
  }

  await deleteCollection("api::talk.talk");
  console.log("table talks has been deleted");

  eachSeries(
    talks,
    async (talk) => {
      if (talk.createTimestamp)
        await populateCollection("api::talk.talk", {
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

async function populateCompanies(speakers) {
  if (!speakers || !speakers.length) {
    return;
  }

  await deleteCollection("api::company.company");
  console.log("table companies has been deleted");

  const companies = new Set(
    speakers
      .map((speaker) => speaker?.company?.toLowerCase().trim())
      .filter((c) => c)
      .map((c) => `${c.charAt(0).toUpperCase()}${c.slice(1)}`)
  );

  eachSeries(
    Array.from(companies),
    async (company) => {
      await populateCollection("api::company.company", {
        name: company,
        published_at: new Date(),
      });
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
