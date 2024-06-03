export function dataset() {
  function sumArr(arr) {
    let summary = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return summary;
  }
  const max = [10, 8, 10, 9, 9, 9, 9, 7];

  // player's pts
  const storage = [
    {
      max: [10, 8, 10, 9, 9, 9, 9, 7],
      tier: "SS",
      // total: 71,
      total: sumArr(max),
      id: "ecstvzz",
    },
    {
      tema: [7, 7, 7, 7, 8, 7, 8, 8],
      tier: "A",
      total: 61,
      id: "temasafonov",
    },
    {
      fedya: [7, 10, 9, 7, 7, 10, 8, 6],
      tier: "S",
      total: 66,
      id: "Amblig",
    },
    {
      barca: [8, 7, 8, 9, 8, 8, 7, 7],
      tier: "A",
      total: 62,
      id: "vladoosssssss",
    },
    {
      jane: [6, 8, 8, 7, 6, 9, 7, 8],
      tier: "B",
      total: 59,
      id: "JanineErofeeva",
    },
    {
      nina: [8, 6, 7, 7, 8, 8, 8, 8],
      tier: "A",
      total: 60,
      id: "nbulavina",
    },
    {
      sveta: [8, 7, 8, 7, 7, 8, 8, 7],
      tier: "A",
      total: 60,
      id: "antonets_svetlana",
    },
    {
      paul: [8, 7, 7, 10, 6, 7, 8, 7],
      tier: "A",
      total: 61,
      id: "pavelfedotov99",
    },
    {
      mario: [7, 8, 9, 8, 9, 19, 8, 9],
      tier: "A",
      total: 70,
      id: "Mincer2412",
    },
    {
      gleb: [9, 8, 9, 9, 10, 7, 10, 7],
      tier: "S",
      total: 69,
      id: "Glebporotikov",
    },
    {
      polly: [6, 6, 7, 6, 7, 7, 8, 7],
      tier: "C",
      total: 54,
      id: "PolinaPorotikova",
    },
    {
      anya: [8, 6, 6, 5, 7, 7, 7, 7],
      tier: "C",
      total: 53,
      id: "anna_alekseevna2206",
    },
    {
      ox: [6, 8, 8, 8, 7, 9, 7, 8],
      tier: "A",
      total: 61,
      id: "oxxana0",
    },
    {
      samu: [7, 8, 8, 8, 8, 9, 10, 8],
      tier: "S",
      total: 66,
      id: "Evillcola",
    },
    {
      bd: [8, 8, 6, 7, 6, 7, 7, 7],
      tier: "B",
      total: 56,
      id: "krofly03",
    },
    {
      jenya: [5, 7, 6, 6, 6, 7, 8, 7],
      tier: "C",
      total: 52,
      id: "eva_4li",
    },
    {
      vera: [7, 6, 6, 6, 6, 7, 7, 7],
      tier: "C",
      total: 52,
      id: "V_SV06",
    },
    {
      dante: [8, 6, 6, 7, 6, 7, 7, 7],
      tier: "C",
      total: 54,
      id: "jdlegendary",
    },
    {
      max2: [7, 6, 6, 6, 6, 7, 7, 7],
      tier: "B",
      total: 50,
      id: "maximqa",
    },
    { vlad2: [7, 6, 6, 6, 6, 7, 7, 7], tier: "B", total: 50, id: "SteshVA" },
  ];

  console.log(storage[0].total);

  return { storage };
}
