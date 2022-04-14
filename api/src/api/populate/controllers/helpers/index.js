const eachSeries = require("async/eachSeries");
const moment = require("moment");

/*
 * Helpers functions
 */
async function deleteCollection(collection) {
  await strapi.db.query(collection).deleteMany({});
  return;
}

async function populateCollection(collection, data) {
  await strapi.db.query(collection).create({ data });
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
      });
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while looping through speakers", errLoop);
        return;
      }
      return;
    }
  );
}

async function populateCategories(categories) {
  if (!categories || !categories.length) {
    return;
  }

  await deleteCollection("api::category.category");

  eachSeries(
    categories,
    async (category) => {
      await populateCollection("api::category.category", {
        conferenceHallId: category.id,
        name: category.name || "",
        description: category.description || "",
      });
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while looping through categories", errLoop);
        return;
      }
      return;
    }
  );
}

async function populateFormats(formats) {
  if (!formats || !formats.length) {
    return;
  }

  await deleteCollection("api::format.format");

  eachSeries(
    formats,
    async (format) => {
      await populateCollection("api::format.format", {
        conferenceHallId: format.id,
        name: format.name || "",
        description: format.description || "",
      });
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while looping through categories", errLoop);
        return;
      }
      return;
    }
  );
}

async function populateTalks(talks) {
  if (!talks || !talks.length) {
    return;
  }

  await deleteCollection("api::talk.talk");
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
        });
    },
    (errLoop) => {
      if (errLoop) {
        console.error("Error while looping through talks", errLoop);
        return;
      }
      return;
    }
  );
}

async function populateCompanies(speakers) {
  if (!speakers || !speakers.length) {
    return;
  }

  await deleteCollection("api::company.company");

  const companies = new Set(
    speakers
      .map((speaker) => speaker?.company?.toLowerCase().trim())
      .filter((c) => c)
      .map((c) => `${c.charAt(0).toUpperCase()}${c.slice(1)}`)
  );

  await strapi.db
    .query("api::company.company")
    .createMany({ data: Array.from(companies) });
}

module.exports = {
  populateSpeakers,
  populateCategories,
  populateFormats,
  populateTalks,
  populateCompanies,
};
