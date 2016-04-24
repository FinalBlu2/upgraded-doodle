var names = {};

names.nameList = [
    "H-BOT",
    "H-BOTS Free",
    "HunTer Ytube",
    "Skype:HunTer",
    "Free"
];

names.getRandomName = function() {
    return names.nameList[Math.floor((Math.random() * names.nameList.length))];
};

module.exports = names;
