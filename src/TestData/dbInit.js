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
scores.insert({ "username": "noob_master", "score": 382});
scores.insert({ "username": "anon", "score": 3});
scores.insert({ "username": "username", "score": 65});
scores.insert({ "username": "yo_momma", "score": 93});
scores.insert({ "username": "postman", "score": 66});
scores.insert({ "username": "miss-sunshine", "score": 114});
scores.insert({ "username": "karjala", "score": 87});
scores.insert({ "username": "liitto-orava", "score": 92});
