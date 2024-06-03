export function dataset() {
  // summing up players points
  function total(arr) {
    let summary = arr.reduce((acc, currVal) => acc + currVal, 0);
    return summary;
  }

  // assign tier level
  function tier(arr) {
    let tier = total(arr);
    if (tier >= 70) {
      return "SS";
    } else if (tier >= 65) {
      return "S";
    } else if (tier >= 60) {
      return "A";
    } else if (tier >= 55) {
      return "B";
    } else if (tier >= 50) {
      return "C";
    }
  }

  // players statistical points
  const max = [10, 8, 10, 9, 9, 9, 9, 7];
  const tema = [7, 7, 7, 7, 8, 7, 8, 8];
  const fedya = [7, 10, 9, 8, 7, 10, 8, 6];
  const barca = [8, 7, 8, 9, 8, 8, 8, 6];
  const jane = [6, 8, 8, 7, 6, 9, 7, 8];
  const nina = [8, 6, 7, 7, 8, 8, 8, 8];
  const sveta = [8, 7, 8, 7, 7, 8, 8, 7];
  const paul = [8, 7, 7, 10, 6, 7, 8, 7];
  const mario = [7, 8, 9, 8, 9, 10, 8, 9];
  const gleb = [9, 8, 9, 8, 10, 8, 10, 8];
  const polly = [6, 6, 7, 6, 7, 7, 8, 7];
  const anya = [8, 6, 6, 5, 7, 7, 7, 7];
  const ox = [6, 7, 7, 8, 7, 9, 7, 7];
  const samu = [7, 8, 8, 8, 8, 9, 10, 8];
  const bd = [8, 8, 6, 7, 6, 7, 7, 8];
  const jenya = [5, 7, 6, 6, 6, 7, 8, 7];
  const vera = [7, 6, 6, 6, 6, 7, 7, 7];
  const dante = [8, 6, 6, 7, 6, 7, 7, 7];
  const max2 = [6, 8, 8, 7, 7, 7, 7, 7];
  const vlad2 = [7, 7, 7, 8, 5, 7, 7, 7];

  // players returning data
  const storage = [
    // max
    {
      max: max,
      tier: tier(max),
      total: total(max),
      id: "ecstvzz",
    },
    // tema
    {
      tema: tema,
      tier: tier(tema),
      total: total(tema),
      id: "temasafonov",
    },
    // fedya
    {
      fedya: fedya,
      tier: tier(fedya),
      total: total(fedya),
      id: "Amblig",
    },
    // barca
    {
      barca: barca,
      tier: tier(barca),
      total: total(barca),
      id: "vladoosssssss",
    },
    // jane
    {
      jane: jane,
      tier: tier(jane),
      total: total(jane),
      id: "JanineErofeeva",
    },
    // nina
    {
      nina: nina,
      tier: tier(nina),
      total: total(nina),
      id: "nbulavina",
    },
    // sveta
    {
      sveta: sveta,
      tier: tier(sveta),
      total: total(sveta),
      id: "antonets_svetlana",
    },
    // paul
    {
      paul: paul,
      tier: tier(paul),
      total: total(paul),
      id: "pavelfedotov99",
    },
    // mario
    {
      mario: mario,
      tier: tier(mario),
      total: total(mario),
      id: "Mincer2412",
    },
    // gleb
    {
      gleb: gleb,
      tier: tier(gleb),
      total: total(gleb),
      id: "Glebporotikov",
    },
    // polly
    {
      polly: polly,
      tier: tier(polly),
      total: total(polly),
      id: "PolinaPorotikova",
    },
    // anya
    {
      anya: anya,
      tier: tier(anya),
      total: total(anya),
      id: "anna_alekseevna2206",
    },
    // ox
    {
      ox: ox,
      tier: "A",
      total: 61,
      id: "oxxana0",
    },
    // samu
    {
      samu: samu,
      tier: tier(samu),
      total: total(samu),
      id: "Evillcola",
    },
    // bd
    {
      bd: bd,
      tier: tier(bd),
      total: total(bd),
      id: "krofly03",
    },
    // jenya Jr
    {
      jenya: jenya,
      tier: tier(jenya),
      total: total(jenya),
      id: "eva_4li",
    },
    // vera
    {
      vera: vera,
      tier: tier(vera),
      total: total(vera),
      id: "V_SV06",
    },
    // dante
    {
      dante: dante,
      tier: tier(dante),
      total: total(dante),
      id: "jdlegendary",
    },
    // max2
    {
      max2: max2,
      tier: tier(max2),
      total: total(max2),
      id: "maximqa",
    },
    // vlad2
    {
      vlad2: vlad2,
      tier: tier(vlad2),
      total: total(vlad2),
      id: "SteshVA",
    },
  ];

  return { storage };
}
