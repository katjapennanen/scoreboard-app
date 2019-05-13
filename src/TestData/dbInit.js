import loki from "lokijs";

export const db = new loki('loki.json');

export const scores = db.addCollection("scores");

scores.insert({ "username": "John39", "score": 45});
scores.insert({ "username": "MichaelThePalin", "score": 600});
scores.insert({ "username": "Gilliam", "score": 429});
scores.insert({ "username": "Terry the Mute", "score": 77});
scores.insert({ "username": "eric-is-always-idle", "score": 97});
scores.insert({ "username": "ex-graham", "score": 12});
scores.insert({ "username": "xXxdragonGRLxXx", "score": 57});
scores.insert({ "username": "1337lord", "score": 892});
scores.insert({ "username": "Mr. Niceguy", "score": 7});
scores.insert({ "username": "lootmaster76", "score": 97});
scores.insert({ "username": "dovahkiin", "score": 20});
scores.insert({ "username": "XDXD_rawr-owo", "score": 702});
