const killers = {
  1: {
    Name: "Luis Garavito",
    aka: "La Bestia",
    dateofBirth: "January 25, 1957",
    yearsActive: "1992 to 1999",
    numberOfVictims: "138",
    Country: "Colombia",
    signatureStyle: "torture",
    Image: "https://upload.wikimedia.org/wikipedia/en/7/75/Luis_Garavito.jpg"
  },

  2: {
    Name: "Pedro López",
    aka: "Monster of the Andes",
    dateofBirth: "8 October 1948",
    yearsActive: "1969 to 1979",
    numberOfVictims: "110",
    Country: "Ecuador",
    signatureStyle: "strangulation",
    Image:
      "https://www.thoughtco.com/thmb/jQyeyOloEiMK95ZHz_UDAWzz0Ok=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Pedro_Lopez-5817d3cf3df78cc2e84791f7.jpg"
  },

  3: {
    Name: "Mikhail Popkov",
    aka: "The Werewolf",
    dateofBirth: "7 March 1964",
    yearsActive: "1992 to 2010",
    numberOfVictims: "78",
    Country: "Russia",
    signatureStyle: "mutilation",
    Image: "(url)"
  },

  4: {
    Name: "Daniel Camargo Barbosa",
    aka: "",
    dateofBirth: "22 January 1930",
    yearsActive: "1974 to 1986",
    numberOfVictims: "72",
    Country: "Colombia",
    signatureStyle: "strangulation",
    Image: `https://vignette.wikia.nocookie.net/criminalminds/"Image"s/4/42/Daniel_Camargo.png/revision/latest?cb=20170211210237`
  },

  5: {
    Name: "Pedro Rodrigues Filho",
    aka: "Pedrinho Matador (Killer Petey)",
    dateofBirth: "June 17, 1954",
    yearsActive: "1967 to 2003",
    numberOfVictims: "71",
    Country: "Brazil",
    signatureStyle: "stabbing of criminals",
    Image: `https://vignette.wikia.nocookie.net/criminalminds/"Image"s/8/84/Pedrinho-matador-joven.jpg/revision/latest?cb=20170210112025`
  },

  6: {
    Name: "Yang Xinhai",
    aka: "The Monster Killer",
    dateofBirth: "29 July 1968",
    yearsActive: "2000 to 2003",
    numberOfVictims: "67",
    Country: "China",
    signatureStyle: "bludgeoning ",
    Image: `https://vignette.wikia.nocookie.net/criminalminds/"Image"s/a/a5/YangX.jpg/revision/latest?cb=20160111062518`
  },

  7: {
    Name: "Andrei Chikatilo",
    aka: "The Rostov Ripper",
    dateofBirth: "16 October 1936",
    yearsActive: "1978 to 1990",
    numberOfVictims: "53",
    Country: "Soviet Union",
    signatureStyle: "mutilation",
    Image: `https://vignette.wikia.nocookie.net/criminalminds/"Image"s/e/e7/Andrei_Chikatilo.jpg/revision/latest?cb=20110204142759`
  },

  8: {
    Name: "Serhiy Tkach",
    aka: "n/a",
    dateofBirth: "September 15, 1952",
    yearsActive: "1984 to 2005",
    numberOfVictims: "36",
    Country: "Ukraine",
    signatureStyle: "Suffocation",
    Image:
      "https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/07/serhiy-tkach-in-court.jpg"
  },

  9: {
    Name: "Gennady Modestovich Mikhasevich",
    aka: "n/a",
    dateofBirth: "April 7, 1947",
    yearsActive: "1971 to 1985",
    numberOfVictims: "36",
    Country: "Soviet Union",
    signatureStyle: "Strangulation",
    Image:
      "https://en.wikipedia.org/wiki/Gennady_Mikhasevich#/media/File:GennadyMikhasevich.png"
  },

  10: {
    Name: "Ted Bundy",
    aka: "n/a",
    dateofBirth: "November 24, 1946",
    yearsActive: "1974 to 1978",
    numberOfVictims: "35",
    Country: "USA",
    signatureStyle: "Death by beating",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Bundy_FLA_8179.jpeg"
  },

  11: {
    Name: "Sam Little",
    aka: "n/a",
    dateofBirth: "June 7, 1940",
    yearsActive: "1970 to 2005",
    numberOfVictims: "34",
    Country: "USA",
    signatureStyle: "Strangulation",
    Image:
      "https://i2-prod.mirror.co.uk/incoming/article13619389.ece/ALTERNATES/s615b/0_10504128-3x2-700x467.jpg"
  },

  12: {
    Name: "John Wayne Gacy",
    aka: "Killer Clown",
    dateofBirth: "March 17, 1942",
    yearsActive: "1972 to 1978",
    numberOfVictims: "33",
    Country: "USA",
    signatureStyle: "Strangulation",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/John_Wayne_Gacy.jpg"
  },

  13: {
    Name: "Ali Asghar Borujerdi",
    aka: "Asghar the Murderer",
    dateofBirth: "1893",
    yearsActive: "1907 to 1934",
    numberOfVictims: "33",
    Country: "Iraq",
    signatureStyle: "unknown",
    Image: `http://murderpedia.org/male.B/"Image"s/borujerdi-ali-asghar/ali-asghar-borujerdi.jpg`
  },

  14: {
    Name: "Vasily Komaroff",
    aka: "n/a",
    dateofBirth: "1871",
    yearsActive: "1921 to 1923",
    numberOfVictims: "33",
    Country: "Moscow",
    signatureStyle: "Beaten with hammer",
    Image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Komarov_VI.jpg"
  },

  15: {
    Name: "Ramadan Abdel Rehim Mansour",
    aka: "al-Tourbini",
    dateofBirth: "1980",
    yearsActive: "1999 to 2006",
    numberOfVictims: "32",
    Country: "Egypt",
    signatureStyle: "Torture",
    Image: "https://upload.wikimedia.org/wikipedia/en/d/de/Al-Tourbini.jpg"
  },

  16: {
    Name: "Anatoly Onoprienko",
    aka: "The Terminator",
    dateofBirth: "July 25, 1959 ",
    yearsActive: "1989 to 1996",
    numberOfVictims: "52",
    Country: "Ukraine",
    signatureStyle: "double-barrel shotgun",
    Image:
      "https://upload.wikimedia.org/wikipedia/en/6/6e/Anatoly_Onoprienko_mugshot.jpg"
  },

  17: {
    Name: "Gary Ridgway",
    aka: "Green River Killer",
    dateofBirth: "February 18, 1949",
    yearsActive: "1982–1998",
    numberOfVictims: "49",
    Country: "United States",
    signatureStyle: "Strangulation",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Gary_Ridgway_Mugshot_11302001.jpg/330px-Gary_Ridgway_Mugshot_11302001.jpg"
  },

  18: {
    Name: "Alexander Pichushkin",
    aka: "The Chessboard Killer",
    dateofBirth: "9 April 1974",
    yearsActive: "1992–14 June 2006",
    numberOfVictims: "45",
    Country: "Russia",
    signatureStyle: "Hammer",
    Image:
      "https://upload.wikimedia.org/wikipedia/en/d/d9/AlexanderPichushkin.jpg"
  },

  19: {
    Name: "Wang Qiang",
    aka: "n/a",
    dateofBirth: "16 January 1975",
    yearsActive: "1995–2003",
    numberOfVictims: "45",
    Country: "China",
    signatureStyle: "n/a",
    Image:
      "https://i.pinimg.com/originals/94/e2/a7/94e2a7531877dc5db90532cae570a6c0.jpg"
  },

  20: {
    Name: "Yves Trudeau",
    aka: "The Mad Bumper",
    dateofBirth: "September 1946",
    yearsActive: "1973 to July 1985",
    numberOfVictims: "43",
    Country: "America",
    signatureStyle: "n/a",
    Image:
      "https://i1.wp.com/www.onepercenterbikers.com/wp-content/uploads/2017/10/Yves-Trudeau-Hells-Angels-Apache-Popeyes-2-218x300.png?resize=218%2C300"
  },

  21: {
    Name: "Ahmad Suradji",
    aka: "n/a",
    dateofBirth: "12 December 1952",
    yearsActive: "1986–1997",
    numberOfVictims: "42",
    Country: "Indonesia",
    signatureStyle: "n/a",
    Image: `https://www.thefamouspeople.com/profiles/"Image"s/ahmad-suradji-1.jpg`
  },

  22: {
    Name: "Tiago Henrique Gomes",
    aka: "n/a",
    dateofBirth: "n/a",
    yearsActive: "2011–2014",
    numberOfVictims: "39",
    Country: "Indonesia",
    signatureStyle: "n/a",
    Image:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/4/4a/Tiago_Henrique_Gomes_da_Rocha.jpg/250px-Tiago_Henrique_Gomes_da_Rocha.jpg"
  }
};

function getKillerByNumber(number) {
  return killers[number];
}

function getKillerByName(name) {
  return killers[name];
}

module.exports = {
  getKillerByNumber
};
