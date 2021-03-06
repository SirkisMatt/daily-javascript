let str =
  "Delhi is a crowded city. There are very few rich people who travel by their own vehicles. The majority of the people cannot afford to hire a taxi or a three-wheeler. They have to depend on D.T.C. buses, which are the cheapest mode of conveyance. D.T.C. buses are like blood capillaries of our body spreading all over in Delhi. One day I had to go to railway station to receive my uncle. I had to reach there by 9.30 a.m. knowing the irregularity of D.T.C. bus service; I left my home at 7.30 a.m. and reached the bus stop. There was a long queue. Everybody was waiting for the bus but the buses were passing one after another without stopping. I kept waiting for about an hour. I was feeling very restless and I was afraid that I might not be able to reach the station in time. It was 8.45. Luckily a bus stopped just in front of me. It was overcrowded but somehow I managed to get into the bus. Some passengers were hanging on the footboard, so there was no question of getting a seat. It was very uncomfortable. We were feeling suffocated. All of a sudden, an old man declared that his pocket had been picked. He accused the man standing beside him. The young man took a knife out of his pocket and waved it in the air. No body dared to catch him. I thanked God when the bus stopped at the railway station. I reached there just in time.";

const stickyWords = [
  "#",
  "##",
  "a",
  "about",
  "above",
  "after",
  "again",
  "against",
  "all",
  "am",
  "an",
  "and",
  "any",
  "are",
  "aren't",
  "as",
  "at",
  "be",
  "because",
  "been",
  "before",
  "being",
  "below",
  "between",
  "both",
  "but",
  "by",
  "can't",
  "cannot",
  "could",
  "couldn't",
  "did",
  "didn't",
  "do",
  "does",
  "doesn't",
  "doing",
  "don't",
  "down",
  "during",
  "each",
  "few",
  "for",
  "from",
  "further",
  "had",
  "hadn't",
  "has",
  "hasn't",
  "have",
  "haven't",
  "having",
  "he",
  "he'd",
  "he'll",
  "he's",
  "her",
  "here",
  "here's",
  "hers",
  "herself",
  "him",
  "himself",
  "his",
  "how",
  "how's",
  "i",
  "i'd",
  "i'll",
  "i'm",
  "i've",
  "if",
  "in",
  "into",
  "is",
  "isn't",
  "it",
  "it's",
  "its",
  "itself",
  "let's",
  "me",
  "more",
  "most",
  "mustn't",
  "my",
  "myself",
  "no",
  "nor",
  "not",
  "of",
  "off",
  "on",
  "once",
  "only",
  "or",
  "other",
  "ought",
  "our",
  "ours",
  "ourselves",
  "out",
  "over",
  "own",
  "same",
  "shan't",
  "she",
  "she'd",
  "she'll",
  "she's",
  "should",
  "shouldn't",
  "so",
  "some",
  "such",
  "than",
  "that",
  "that's",
  "the",
  "their",
  "theirs",
  "them",
  "themselves",
  "then",
  "there",
  "there's",
  "these",
  "they",
  "they'd",
  "they'll",
  "they're",
  "they've",
  "this",
  "those",
  "through",
  "to",
  "too",
  "under",
  "until",
  "up",
  "very",
  "was",
  "wasn't",
  "we",
  "we'd",
  "we'll",
  "we're",
  "we've",
  "were",
  "weren't",
  "what",
  "what's",
  "when",
  "when's",
  "where",
  "where's",
  "which",
  "while",
  "who",
  "who's",
  "whom",
  "why",
  "why's",
  "with",
  "won't",
  "would",
  "wouldn't",
  "you",
  "you'd",
  "you'll",
  "you're",
  "you've",
  "your",
  "yours",
  "yourself",
  "yourselves",
];

function nthMostCommon(str, amount) {
  str = str.toLowerCase();
  let splitUp = str.split(/\s/);
  const wordsArray = splitUp.filter((x) => {
    return !stickyWords.includes(x);
  });
  let wordOccurrences = {};
  for (let i = 0; i < wordsArray.length; i++) {
    wordOccurrences["_" + wordsArray[i]] =
      (wordOccurrences["_" + wordsArray[i]] || 0) + 1;
  }
  let result = Object.keys(wordOccurrences).reduce((acc, currentKey) => {
    for (let i = 0; i < amount; i++) {
      if (!acc[i]) {
        acc[i] = {
          word: currentKey.slice(1, currentKey.length),
          occurences: wordOccurrences[currentKey],
        };
      } else if (acc[i].occurences < wordOccurrences[currentKey]) {
        acc.splice(i, 0, {
          word: currentKey.slice(1, currentKey.length),
          occurences: wordOccurrences[currentKey],
        });
        if (acc.length > amount) acc.pop();
        break;
      }
    }
    return acc;
  }, []);

  return result;
}

let occur = nthMostCommon(str, 5);

console.log(occur);

// refactored getTopWords

function getTopWords(str, tagCount = 5) {
  let wordCounts = {};

  str.match(/\w+/g).forEach((w) => {
    if (!stopWords.includes(w)) {
      if (wordCounts[w]) wordCounts[w]++;
      else wordCounts[w] = 1;
    }
  });
  let sortable = [];
  for (var w in wordCounts) {
    sortable.push([w, wordCounts[w]]);
  }
  sortable.sort((a, b) => {
    return b[1] - a[1];
  });
  const tags = sortable.slice(0, tagCount).map((e) => e[0]);

  return tags;
}
