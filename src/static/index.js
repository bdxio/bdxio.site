const fs = require('fs');
const all_talks = require("./schedule");

let Speakers = Array.prototype.concat.apply([], all_talks.map(talk => talk.speakers))
    .filter(speaker => !!speaker)
    .filter((speaker, i, speakers) => speakers.findIndex(s => s.name === speaker.name) === i)
    .reduce((prev, curr, i) => {
        prev[i] = {
            "id": i,
            "name": curr.name,
            "company": curr.company,
            "bio": curr.bio,
            "address": curr.address,
            "photoUrl": curr.photoURL
        }
        return prev
    }, {})

const idx = Object.keys(Speakers).length
Speakers[idx] = {
    "id": idx,
    "name": "Keynoteur.euse",
    "company": "",
    "bio": "",
    "address": "",
    "photoUrl": "https://www.bdx.io/favicon/favicon-96x96.png"
}

const speakers_arr = Object.keys(Speakers).map(function (key) { return Speakers[key]; });

let Sessions = all_talks.reduce((prev, talk, i) => {

    if (!talk.speakers && talk.format === "keynote") {
        talk.speakers = [{ "name": "Keynoteur.euse" }]
    }

    if (talk.speakers) {
        const startTime = new Date(2019, 11, 15, talk.startTime.split(":")[0], talk.startTime.split(":")[1], 0);
        const endTime = new Date(startTime.getTime() + talk.duration * 60000);

        prev[i] = {
            "id": i,
            "description": talk.abstract,
            "tags": [talk.category],
            "title": talk.title,
            "startTime": startTime,
            "endTime": endTime,
            "trackTitle": talk.room,
            "speakers": talk.speakers.map(speaker => speakers_arr.findIndex(s => s.name === speaker.name))
        }

    }
    return prev
}, {})

const jsonContent = JSON.stringify({ sessions: Sessions, speakers: Speakers });

if (fs.existsSync("output.json")) fs.unlinkSync("output.json")

fs.writeFile("output.json", jsonContent, 'utf8', (err) => {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
});