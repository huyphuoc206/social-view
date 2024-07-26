const HIDDEN_PROPERTY = ["order_id", "swap"];

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

const TRADERS_DATA = [
  {
    name: "Amphibious Robot Min",
    account: 11103957,
    description: "Swing Trade",
    author: "Nawee Tungpaisannugul",
    authorPhoto:
      "/st/media/pim/media/user_photo/d2/d21/d215da1202c58dfb220f23d1732b43cc_a112cbf43d954fafa2db6ffac954c098.jpg",
  },
  {
    name: "MAS Scalping",
    account: 11115674,
    description:
      "Monthly target is around  5%-10%.\n\nMAS Scalping 2:\nhttps://t.ly/dlkr",
    author: "Jemmy Alwiyandu",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee1/ee11d972c7610534b6fca4649f29d126_ec9a448b908d4287bbeffd4f539faffe.png",
  },
  {
    name: "SniperXBO41",
    account: 11166729,
    description: "Scalper and Swing trading (700:1)",
    author: "Watsamon Angbunta",
    authorPhoto:
      "/st/media/user_photo/f1/f15/f1522a1a7dddbedbbcd91628dc8c7732_6d0a5e50c45546f382fb49d37dd71614.PNG",
  },
  {
    name: "Easy And Sure",
    account: 11174545,
    description:
      "https://www.myfxbook.com/members/ANComputer/anan-social-trade/10462254",
    author: "อนันต์ คงเขียว",
    authorPhoto:
      "/st/media/user_photo/9b/9b0/9b0b09903ee662d242e7ff3f052494d2_dda212fbad3b48b38a309ac8f9a4234a.jpg",
  },
  {
    name: "Aboysz Protrader",
    account: 11194812,
    description: "Long Investment",
    author: "Natthavisa Jampa",
    authorPhoto:
      "/st/media/user_photo/45/45b/45b613828fd7ef152e49842993d64089_7a1f1c1bd03c46fb866fc3fef00c268c.jpg",
  },
  {
    name: "Better earnings 4 u",
    account: 11217863,
    description: "wait & watch",
    author: "Victor Pinto",
    authorPhoto:
      "/st/media/user_photo/b9/b92/b92042faad2d62df4e27dbc2db117d66_deccb6df172d4b4a94601b4e69f4ae1d.jpg",
  },
  {
    name: "catch bar profit",
    account: 11218570,
    description:
      "قليل دائم خير من كثير منقطع :)\nA little permanent is better than many suddenly interrupted",
    author: "ahmed ahmed",
    authorPhoto:
      "/st/media/user_photo/87/871/8710f8b571bbd53864a40a8a6473e9e2_6fc27d48b97648eba03773f14281c354.jpg",
  },
  {
    name: "TES_F1_5Deals_CloseA",
    account: 11221125,
    description:
      "Robot F1 Auto1-3 and Manual 4-5 orders\nMake profits all day and night\n\nProfit aroung 10-20% per month\n\nBy TES (Thai Expert School)",
    author: "Arawan Buengmool",
    authorPhoto:
      "/st/media/user_photo/1b/1b7/1b7bf836c951c81e2fb86c8f17d28fee_b811290396894aa9a365e5804ea46506.jpg",
  },
  {
    name: "ProTrade Fund",
    account: 11228791,
    description:
      "Forex index precious metal commodities cryptocurrencies. Have patience copying me. Thx.",
    author: "Hendy Saputra",
    authorPhoto:
      "/st/media/user_photo/64/649/64913a59d338aca107e2d8dad6283424_56db542c39f54d77a1ad367f482d115a.png",
  },
  {
    name: "NO RISK FOREX",
    account: 11231438,
    description:
      "Please copy my strategy and invest over 100$ / Equal to my equity and stay with one year to your better profit 100%. Slowly profit no risk your money",
    author: "Tamanna Paly",
    authorPhoto:
      "/st/media/user_photo/d5/d57/d57503b720baf039b069cadc76c1d98a_0a89fa5da8d5414ba30299cc2d342bcd.jpg",
  },
  {
    name: "Trade Master 90",
    account: 11235262,
    description:
      "Follow my account for swing and scalping trades. My unique strategies, based on TA, EA, and AI, achieve 90% accuracy.",
    author: "Jeevan Basumatary",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5ac/5ac72ec91841df61e0bb84a9a4a6a47d_f484f7d1facf4bfdb3536727d8cda758.jpg",
  },
  {
    name: "Orion strategy",
    account: 11246407,
    description:
      "Orion strategy was designed to perform around from 2,5% per month and 35% per year with stop loss set at 20%. This is a long-term investment.",
    author: "Alexandro de Araujo Baptista",
    authorPhoto:
      "/st/media/user_photo/66/66c/66c0418871ed828faf3cb04e8aa22856_31aa51d266134f539534a16c571f22c2.png",
  },
  {
    name: "Taurus strategy",
    account: 11246413,
    description:
      "Taurus is an automated strategy designed to buy and sell EURUSD pair. The algorithm detects price variations to execute orders making a profit.",
    author: "Alexandro de Araujo Baptista",
    authorPhoto:
      "/st/media/user_photo/66/66c/66c0418871ed828faf3cb04e8aa22856_31aa51d266134f539534a16c571f22c2.png",
  },
  {
    name: "Tiểu Bạch Long IFS",
    account: 11254868,
    description:
      "Intraday Forex Signal \nTelegram Group: https://t.me/IFSgroup",
    author: "Hiền Bùi Thị",
    authorPhoto:
      "/st/media/user_photo/d6/d6f/d6fb6d588eb6c0d887e85c35e06951a7_9039effa85344fc6aa6421bc750e241d.jpg",
  },
  {
    name: "Secret COCHO",
    account: 11255856,
    description:
      "Secret COCHO algorithm and manual trading, managed by real Forex experts in real-time.",
    author: "Vu Duy Nguyen",
    authorPhoto:
      "/st/media/user_photo/46/462/462f4a2a55a3fd8067c658a403b58f24_7dc3bee4786d4269bd89954bf35e8446.png",
  },
  {
    name: "Safety-little risk",
    account: 11265220,
    description:
      "Place order with least size (0.01), one pair of foreign currency...for one account; low leverage (1:10 - 1:20); expected profit 30%/year.",
    author: "Hữu Tình Nguyễn",
    authorPhoto: null,
  },
  {
    name: "T TIN NOI THUONG DE",
    account: 11270922,
    description:
      "CHUYEN GIAO DICH XAU/USD(90% LICH SU LA GD XAU/USD) VA MOT SO CAP NGOAI HOI KHAC.DAM BAO CHO NDT  120 NGAY DAT 100% VON ( AN TOAN TUYET DOI VON).",
    author: "TUAN LE VAN",
    authorPhoto:
      "/st/media/user_photo/df/dfa/dfa5fe903f18e67789e00b1bc6545397_57e3db188e284b77a488b1d7f8b230d9.jpg",
  },
  {
    name: "Surapong94 XAUUSD TH",
    account: 11280343,
    description: "ปลอดภัยไว้ก่อน \nมีสติ ก่อให้เกิดปัญญา นำมาซึ่งความร่ำรวย",
    author: "Surapong Punpiput",
    authorPhoto:
      "/st/media/user_photo/fd/fd1/fd148616f018859fcd4758bc9aa23a96_0e8f7d9ddae74fe69d8a8dcbf3a4f09e.jpg",
  },
  {
    name: "Snake Fish",
    account: 11316274,
    description: "We will be rich together!",
    author: "Panapong Suttheewong",
    authorPhoto:
      "/st/media/user_photo/9d/9da/9dab856608201ba66a540ca420b98a46_9c7cb8e2870c40b19d76ca8fb214e7f9.jpg",
  },
  {
    name: "Tiger King",
    account: 11325915,
    description:
      "Day trading, safety is the most important, RR = 1:2 - 1:5, SL = 1% account",
    author: "THE LOC PHAM",
    authorPhoto:
      "/st/media/user_photo/f9/f97/f97801b9dd72753eceb5ab25910737dc_05a41672d60e4620a292d86885739d01.jpg",
  },
  {
    name: "Superman Trader",
    account: 11327649,
    description:
      "I dont work for money but money works for me\n- Aiming for 10-30% profit monthly\n- High risk investment\n- Copy only when negative or no position",
    author: "Parson Parsuraphun",
    authorPhoto:
      "/st/media/user_photo/73/731/7318764fba3cc63aacaef1d9f884aa1c_6c25510556af438a80292c09defe2ca2.jpeg",
  },
  {
    name: "Forex Trading",
    account: 11345702,
    description: "Forex Trading (Smart Money Concept and Currency Strength)",
    author: "Hong Xuan Nguyen",
    authorPhoto:
      "/st/media/user_photo/b2/b27/b27cd77e14995aa099956d33c5ed2c86_fa4203f030274063ad2548d5c4aca063.png",
  },
  {
    name: "Duplicates",
    account: 11380206,
    description: "Duplicate Capital in some orders",
    author: "salem bafadhl",
    authorPhoto:
      "/st/media/user_photo/2d/2db/2db3caefb68d994190e550fdd06735a1_a765c183c05d4a318e51fac63c2442f5.jpg",
  },
  {
    name: "movingaverage",
    account: 11395772,
    description:
      "i use simple moving average with proper money management and take profit in my trades stop loss is must use for not bigg loss on account",
    author: "sarla devi",
    authorPhoto: null,
  },
  {
    name: "Gold Trader",
    account: 11408693,
    description: "EA by scott",
    author: "Yuthana Klongklaew",
    authorPhoto:
      "/st/media/user_photo/81/81a/81a3149f29ded109a4ade6f8327587c1_c509392b331a411a8fdba04dfaf6cbe5.png",
  },
  {
    name: "Ebb and Flow",
    account: 11413238,
    description:
      "Mean Reversion with Grid Strategy. Has -35% Catastrophic Protective stop loss.",
    author: "KARAN TAENKAM",
    authorPhoto:
      "/st/media/user_photo/9f/9f6/9f6a865cb40acaf6469a13fd883c3c2f_d61e4b3601a44a7caf1d85d5e80256d4.jpg",
  },
  {
    name: "Grid Warrior",
    account: 11415077,
    description:
      "Saving Zone Trading using 2 way Grid trade. We aim the profit in long run. Please allow at least 6 months to see the profit.",
    author: "prakarn prasitwuttisak",
    authorPhoto:
      "/st/media/user_photo/f8/f83/f8393776ef597f17a3f10d41007361ae_260407c26e2e49548b3a4a8c01f87fe5.JPG",
  },
  {
    name: "The Swing FX",
    account: 11418557,
    description:
      "High probability trades with low risk!\nA swing strategy that captures short- to medium-term gains.",
    author: "Nawaf Zainal",
    authorPhoto:
      "/st/media/user_photo/45/45c/45cea78e70c14512603aa3961349ebf1_94b1c10098214883bf59605201946245.jpg",
  },
  {
    name: "LITCOIN1934",
    account: 11419521,
    description:
      "Recomended Deposit +$2000 USD\n\nAverage Monthly Profit 4%\n\nSpecialist At LTCUSD and BTCUSD",
    author: "Yin Jahdo Shum",
    authorPhoto:
      "/st/media/user_photo/27/27b/27bb6e64dbe768de496b894dcd43b7a5_4a30b2b26f2149d9aeb676cec52b88d4.png",
  },
  {
    name: "Gold Breakout",
    account: 11419626,
    description: "Gold Sniper Breakout\n\n* Bot Auto 100%",
    author: "สรายุทธ โพธิ์ขีด",
    authorPhoto:
      "/st/media/user_photo/82/82d/82d6ffe5f99627da8954392007e344c6_2e7362e0e97f4c168b637ee50e64b65c.jpg",
  },
  {
    name: "AI Forex Signals",
    account: 11424193,
    description:
      "We apply Artificial Intelligence in building an 100% Automated Trading System. It helps you to make daily income profits easily.",
    author: "Phạm Quí Giáp Minh",
    authorPhoto:
      "/st/media/user_photo/e8/e84/e847b41b63a7b379d4fb4d06ae24052f_c06ce9d0c6f94968bdb78ca95fccd295.png",
  },
  {
    name: "GIAPHAT No1",
    account: 11426332,
    description:
      "- Low risk, target 5-7%/month.\n- 38 months\nhttps://www.mql5.com/en/signals/898836?source=Site+Signals+My",
    author: "Phạm Thái Doãn",
    authorPhoto:
      "/st/media/user_photo/70/701/7016095d7db40714feb6bd9a47943110_51c947ac19a34be6bf7f9572f4f88f98.jpg",
  },
  {
    name: "ไทยต้องชนะ",
    account: 11435053,
    description:
      "กลยุทธ์ไทยต้องชนะ\nSwing Trade H1-H4 ,สลับ Trend following\nความมุ่งหมาย : เอาชนะตลาดระยะยาว\nความเสี่ยงต่อไม้ไม่เกิน 3 %\nคาดหวังผลตอบแทน : 20% ต่อปี",
    author: "Orawan Promyue",
    authorPhoto:
      "/st/media/user_photo/57/577/577af1c8fe04ce669d4bde6c35410fe1_e192a6506809491990b7cdc5c4f6a9dd.jpg",
  },
  {
    name: "MiningGold",
    account: 11446724,
    description:
      "Full auto trade, No martingel, No scalping and No grid.\n\nMyfxbook https://www.myfxbook.com/members/saknarinc/mininggold-12/2116622",
    author: "Saknarin Chukly",
    authorPhoto:
      "/st/media/user_photo/e9/e93/e934c2c4755fb603094ac98cd09f5a8b_7a5121742cb64983a3078497c39cff10.jpg",
  },
  {
    name: "BikillTradeScalping",
    account: 11458384,
    description: "Trade Scalping",
    author: "Thị Hồng Nhung Phạm",
    authorPhoto:
      "/st/media/user_photo/70/703/703967d1977e7645539a92c0ccd20798_15c1af422a17435d843dbd4fc55c6679.jpeg",
  },
  {
    name: "SSC_BT_Q1_EA",
    account: 11459002,
    description:
      "We do basket trading using an EA our aim is to make small profits consistently over time using a small Lotsize starting at 0.01\n\nWe only trade EURUSD",
    author: "ANTHONY NIKOLAUS BESSINGER",
    authorPhoto:
      "/st/media/user_photo/79/796/79616f4433c5805a024891b4e8226d6a_487d51b152a64694bdb7e74a078eb8ca.jpeg",
  },
  {
    name: "HaiAu Capital",
    account: 11462133,
    description:
      "Link: https://s.net.vn/rAO5\r\nMonthly profit target: 15% or more!\r\nJoin 👉 https://t.me/HaiAuCapital",
    author: "Thi Dang Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/11/11d/11d33466f7321a8ca3a3520f9635d323_4a6cb5c190ca434c82d5511b6d24ffec.jpg",
  },
  {
    name: "landmark 2",
    account: 11475231,
    description: "S&D",
    author: "Qamar Zaman",
    authorPhoto:
      "/st/media/user_photo/fb/fb9/fb95d40ee6700893b8c70aaa4f1f3b19_20cca274dbbf4ddb934b6b787d6e4af7.jpg",
  },
  {
    name: "Super Bot EA",
    account: 11488863,
    description:
      "99% full robot Trade. Try it u will never regret.\nEvery 1 or 2 month the equity will be reset to 5000 USD again. Target 1 year profit up to 160%.",
    author: "CHARLES YUSAP",
    authorPhoto:
      "/st/media/user_photo/72/721/7211f4b33ed080804ebec015c5855cd2_c1d22de9916b40b1a22e66468d614f22.png",
  },
  {
    name: "Micheal Bot",
    account: 11494822,
    description:
      "Auto Mathematical Grid Trading Bot , Proven record since 2019",
    author: "pavan kumar",
    authorPhoto:
      "/st/media/user_photo/c3/c35/c3568adfef6b1720465aea4e812cf87a_6021dc7a2da449e5b407f56cf4b5498c.png",
  },
  {
    name: "Crypto pro account",
    account: 11499295,
    description:
      "Invest in bitcoin & ethereum. Use constant-mix rebalancing strategy due to high volatility.",
    author: "thao nguyen",
    authorPhoto: null,
  },
  {
    name: "Bitcoin Hype",
    account: 11499323,
    description: "Simple and highly profitable strategy for Bitcoin",
    author: "รวิทัศน์ กรุงแก้ว",
    authorPhoto:
      "/st/media/user_photo/b9/b94/b949b230330ecc5ac6f3750e5688f1aa_312dcbf1a0cf4a14868623eaf484f763.jpg",
  },
  {
    name: "Intraday_Patta",
    account: 11506723,
    description: "Everyday profit",
    author: "pattama saejear",
    authorPhoto:
      "/st/media/user_photo/57/57b/57b70db18a47d1f08a0ed23770e709b7_04c56d9f52cd403a9df7b3d18420ce2e.jpg",
  },
  {
    name: "HaiAu Capital 2",
    account: 11511359,
    description:
      "Link: https://s.net.vn/rAO5\nMonthly profit target: 15% or more!\nJoin 👉 https://t.me/HaiAuCapital",
    author: "Thi Dang Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/11/11d/11d33466f7321a8ca3a3520f9635d323_4a6cb5c190ca434c82d5511b6d24ffec.jpg",
  },
  {
    name: "CryptoRobotSOL",
    account: 11515729,
    description:
      "กลยุทธ์กำไรน้อยแต่ได้นาน ดีกว่ากำไรบานแล้วเสียหมด\n\nรบกวนอ่านรายละเอียดใน News Feed\n\nhttps://www.myfxbook.com/members/neo149/cryptorobotplussol/8396740",
    author: "Soon Sornpan",
    authorPhoto:
      "/st/media/user_photo/ca/cac/cac1fb40aab36026307efbd8c90c3845_f09fa924d43a42e087f2e1f5ba31a7e2.jpg",
  },
  {
    name: "Dreams come true",
    account: 11520065,
    description: "Gambling on :)",
    author: "MR POONPITI SALAKIT",
    authorPhoto:
      "/st/media/user_photo/fc/fca/fca9b5a08170be20771b0515cecdf649_190b42b2cd4e483ca88073ca265b6de8.jpg",
  },
  {
    name: "pandawalk",
    account: 11520933,
    description:
      "Keep walking with Grid trading strategic tool that allows you to make a profit.",
    author: "นิธิพงษ์ ชูสมภพ",
    authorPhoto: "",
  },
  {
    name: "Fxmt - InvestGold",
    account: 11522008,
    description:
      "Trade gold with trader pro, average profit 5% safe for your capital",
    author: "Trang Huynh Thi Thien",
    authorPhoto:
      "/st/media/user_photo/5e/5ec/5ecb015a490a3bd6af769a2dc710ceaf_203891fbfc0f4c77a240e9f3d3d00fa6.jpeg",
  },
  {
    name: "Day trading",
    account: 11522591,
    description:
      "After a long time of trading with the market, I have researched my own trading method. Called T-matrix by fellow traders.",
    author: "Duc Thuan Tran",
    authorPhoto:
      "/st/media/pim/media/user_photo/fe/fe3/fe31d03b18caf6f81cfa6ce70cb0ae00_94f488ff56c14785ba53e496911cc53d.jpg",
  },
  {
    name: "INNOTRADE TREND FOLO",
    account: 11523015,
    description: "TRAND FOLOWER",
    author: "MR SATAPORN PANKERD",
    authorPhoto:
      "/st/media/user_photo/de/de2/de282f30164486ee3ea07a75c5dae527_ba9aa6e79f964a2292ce31eb23d6c596.jpg",
  },
  {
    name: "CryptoRobotETH",
    account: 11524039,
    description:
      "กลยุทธ์กำไรน้อยแต่ได้นาน ดีกว่ากำไรบานแล้วเสียหมด\n\nรบกวนอ่านรายละเอียดใน News Feed\n\nhttps://www.myfxbook.com/members/neo149/cryptorobotpluseth/8540256",
    author: "Soon Sornpan",
    authorPhoto:
      "/st/media/user_photo/ca/cac/cac1fb40aab36026307efbd8c90c3845_f09fa924d43a42e087f2e1f5ba31a7e2.jpg",
  },
  {
    name: "Gold Together",
    account: 11529137,
    description: "Gold trading",
    author: "พันวรรษา สุดชานัง",
    authorPhoto:
      "/st/media/user_photo/7f/7f5/7f522973653be668267e353cf37fc3a7_4ec735adc3ad469ea5a67e03130a5040.jpg",
  },
  {
    name: "Cobra Forex",
    account: 11529488,
    description:
      "OBJECTIVES :\n*profitability : 20% in month \n*Net positions with no risks\nJoin us for 🤑🤑on telegrame \nhttps://t.me/marocsignals",
    author: "Redouan Nfissi",
    authorPhoto:
      "/st/media/user_photo/d5/d5a/d5aaeb4ba9da08247195ba897afc29e2_947ecc7a1062402098a6c0455e1911b2.jpg",
  },
  {
    name: "TH WIN WIN 9999 PRO",
    account: 11530118,
    description:
      'Tommy Han \nWhatapps: ++84 902212956\nTelegram: @tommyhanfx\nExperiences: from 2011\n"This is not a game where 160 IQ beats 130 IQ"',
    author: "PHAM THI HUYEN THUONG",
    authorPhoto:
      "/st/media/user_photo/6e/6ec/6eca2da1968102bca4e3ebdd679a7f37_d586aff9585f4d8fb66842a89f3be5ec.jpg",
  },
  {
    name: "GIAPHAT No3",
    account: 11533315,
    description:
      "- Semi-automatic trading\r\n- More than 10 years of experience\r\n- Successful backtest up to 20 years in the past.\r\n- Have real transaction history on MQL5",
    author: "Phạm Thái Doãn",
    authorPhoto:
      "/st/media/user_photo/70/701/7016095d7db40714feb6bd9a47943110_51c947ac19a34be6bf7f9572f4f88f98.jpg",
  },
  {
    name: "Pond Investment",
    account: 11535812,
    description:
      "การลงทุนมีความเสี่ยงควรประเมินความเสี่ยง \nและยอมรับความเสี่ยงกับการมีโอกาสสูญเสียเงินต้นของคุณ 🇹🇭 ความเสี่ยงอยู่ในระดับ 1-4 ❤️ Profit 15% on Month",
    author: "PAKIT KONGPUNVIJIT",
    authorPhoto:
      "/st/media/user_photo/21/21c/21ca532076c1d2ed334a2f4d1f7aa1f5_fc665a710156486281e0c5755101b282.jpg",
  },
  {
    name: "ATULRAJ9161",
    account: 11538485,
    description: "Super Traders",
    author: "ATUL INGALE",
    authorPhoto:
      "/st/media/user_photo/62/62e/62e88d5c762243f34b43cfd6530e2b2f_f18b87053e144b38af188e1baee7f63b.jpg",
  },
  {
    name: "Hermes - 401K",
    account: 11551697,
    description:
      "For 1-3 yrs of investment \nMedium Risk (Return: 30% - 50%  /Year - DD: <40%)\nPlease be aware that we could stop trading in case of some big events",
    author: "VŨ TÀI",
    authorPhoto:
      "/st/media/user_photo/f0/f03/f033eb25318938ccf851c1efd0ac06a9_1cef7cea97fb4398a9f593b45cb0125e.jpg",
  },
  {
    name: "Q Fielder Trader",
    account: 11553152,
    description:
      "focus on ordering support and resistance Planning the order, rejection the price.",
    author: "MR SOMPRAT RATTANASUWAN",
    authorPhoto:
      "/st/media/user_photo/ce/ce2/ce20561d39ffadcc093b1bc1b4a4284d_e2bcac06ca06498b92f0559aa20a3ac3.jpg",
  },
  {
    name: "MR_T ScalpingElliott",
    account: 11556251,
    description:
      "- Phương pháp giao dịch sóng Elliott và Harmonic Pattern làm trung tâm tỷ lệ win hơn 80%.\n- Nói không với gồng lỗ\nhttps://zalo.me/g/oqotid705",
    author: "Thoại Vũ Văn",
    authorPhoto:
      "/st/media/user_photo/68/687/6875a1ff48fb3cba275783c641437aae_a62c01b1aa1748fb990cb966800acc4c.jpeg",
  },
  {
    name: "efficient lasting",
    account: 11564996,
    description:
      "I have experience in fund management, my strategy brings sustainable efficiency to you.\ni will give you a minimum of 300% 1 year.",
    author: "NGUYÈN THIẸN",
    authorPhoto:
      "/st/media/user_photo/ae/aee/aee7e18096df83567ca7f20df074ab21_1e0a793a9e6647bca09729a58bc675a1.jpg",
  },
  {
    name: "XAUUSD Investor",
    account: 11567539,
    description: "สายปั้นพอร์ต เน้นเติบโต (grow up trade)",
    author: "MR TISIT KAEWSUAN",
    authorPhoto: "",
  },
  {
    name: "Man_Son_159",
    account: 11567914,
    description: "Come to me.",
    author: "THI XUAN NGUYEN",
    authorPhoto:
      "/st/media/user_photo/69/693/693af01c2f17daa4473dde99956e4e2f_ff6985d3a2a54407b4bf02bb0812d79a.jpg",
  },
  {
    name: "Perfect FX Expert 3",
    account: 11569728,
    description:
      "Long term swap free strategy, if you want stable income monthly then copy my strategy for long term your funds are safe same like in your bank account",
    author: "Fehmida Bibi",
    authorPhoto:
      "/st/media/user_photo/69/69e/69eda7feec44c1ade384a8914ca9d5c0_4cd3814c16954b478785821fdab2fc34.png",
  },
  {
    name: "Profit Channel",
    account: 11570126,
    description: "Take Profit 100% /Y\nDD 10% /D",
    author: "MR WATCHARAIN PHATHOMKASIKUL",
    authorPhoto:
      "/st/media/user_photo/a5/a5f/a5fb8820c20dd4aa68e6e23a692ce630_fbd99bc4246047169f90d08277cdc1db_ID3lge4.jpeg",
  },
  {
    name: "ใจร่มๆ กำไรจะมาเอง",
    account: 11572207,
    description:
      "Another system by superman trader.\nConservative, Low risk and good for long term investment\nExpected profit 5-10% monthly",
    author: "Parson Parsuraphun",
    authorPhoto:
      "/st/media/user_photo/73/731/7318764fba3cc63aacaef1d9f884aa1c_6c25510556af438a80292c09defe2ca2.jpeg",
  },
  {
    name: "Price Action H4",
    account: 11572259,
    description: "Quản lý vốn 2% tài khoản cho một lệnh Stoplot.",
    author: "hạnh hoàng thị",
    authorPhoto:
      "/st/media/user_photo/37/374/374bad00fe4ed9ab8365fc923c451aa7_7bb4c9228e9f4c58a43a270493cd0676.jpg",
  },
  {
    name: "Cr7 In Trading",
    account: 11573445,
    description:
      "Immortal Strategy - Swing-Day-Scalp-Hedging trading, Acount 2000USD, Target 30%/month. Reset money every month",
    author: "Lê Vũ",
    authorPhoto:
      "/st/media/user_photo/08/086/086e7a7abf9ca824bab0389907fa3312_151908d781a84ea3a73ac65e04353340.png",
  },
  {
    name: "JCo Fund Management",
    account: 11573599,
    description:
      "Protect your Capital\nPrioritas Keamanan Modal\nLow Drawdown\nKemungkinan Kerugian Sangat Kecil",
    author: "I Wayan Adi Putra",
    authorPhoto:
      "/st/media/user_photo/01/01d/01dbabebfb253deea070d9013e81534a_7f9c38aca6344cc3a7b356225dedaecc.jpg",
  },
  {
    name: "CSI Stragegy",
    account: 11574435,
    description:
      "This stragety is concerning an oversold and overbought of the currency pair EURUSD.\nEach trading is operated separately and this can hedge-trade.",
    author: "의훈 정",
    authorPhoto:
      "/st/media/user_photo/6b/6ba/6ba6fe4a531abb22404cc63a47dceb4d_36609c8608fc49a2b4cc6b3902eac8d0.jpg",
  },
  {
    name: "Gold-fx1986",
    account: 11574738,
    description: "Finance",
    author: "Quyet Tran Duc",
    authorPhoto:
      "/st/media/user_photo/0d/0d4/0d4b421d430fc8a71c38a82ac1d175c8_60c7792a296541aeb735f74769fd820b.jpeg",
  },
  {
    name: "Trading Plan",
    account: 11576287,
    description:
      "เทคนิคนี้ รับรอง ไม่เหมือนใคร คนใจร้อนไม่แนะนำครับ เหมาะกับผู้ที่รอได้เท่านั้น แล้วลองดูครับว่าเทคนิคผมคืออะไร",
    author: "MR CHAMNAN PROMCHART",
    authorPhoto:
      "/st/media/user_photo/a7/a70/a70f70423687417e025ffa890df4017f_8433825b00c24534b2277eb645e0630a.jpg",
  },
  {
    name: "Gold-Torpedo",
    account: 11578054,
    description: "Lợi nhuận 0.5-1%/ngày\nKiên nhẫn ,kĩ luật\nZalo: 0989598121",
    author: "Hùng Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6a/c6aea2cd994738eb05dc9914588afab7_55146dbd5b2d40148b3c58ad815671c4.png",
  },
  {
    name: "Gold - The Grail",
    account: 11578057,
    description: "Lợi nhuận 0.5-1%/ngày\nKiên nhẫn ,kĩ luật\nZalo: 0989598121",
    author: "Hùng Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6a/c6aea2cd994738eb05dc9914588afab7_55146dbd5b2d40148b3c58ad815671c4.png",
  },
  {
    name: "Micro Profit",
    account: 11580347,
    description:
      "Small invest, Small income every day.\n*When market panic, Please wait patiently for the trade come to profit*\n*Please don't close trade with loss*",
    author: "ARGINA BHUYAN",
    authorPhoto:
      "/st/media/user_photo/55/553/5531a7f8c986ea5c38c1ad8e975e44e2_75524b9bf68c4db3af1e4b7512c389ff.jpg",
  },
  {
    name: "CryptoRobotADA",
    account: 11582717,
    description:
      "กลยุทธ์กำไรน้อยแต่ได้นาน ดีกว่ากำไรบานแล้วเสียหมด \nรบกวนอ่านรายละเอียดใน News Feed\nhttps://www.myfxbook.com/members/neo149/cryptorobotplusada/9148181",
    author: "Soon Sornpan",
    authorPhoto:
      "/st/media/user_photo/ca/cac/cac1fb40aab36026307efbd8c90c3845_f09fa924d43a42e087f2e1f5ba31a7e2.jpg",
  },
  {
    name: "CryptoRobotDOT",
    account: 11582718,
    description:
      "กลยุทธ์กำไรน้อยแต่ได้นาน ดีกว่ากำไรบานแล้วเสียหมด \nรบกวนอ่านรายละเอียดใน News Feed\nhttps://www.myfxbook.com/members/neo149/cryptorobotplusdot/9214713",
    author: "Soon Sornpan",
    authorPhoto:
      "/st/media/user_photo/ca/cac/cac1fb40aab36026307efbd8c90c3845_f09fa924d43a42e087f2e1f5ba31a7e2.jpg",
  },
  {
    name: "Capitalisara Gold",
    account: 11589147,
    description: "money management and trand following",
    author: "MR ISARA TRASIN",
    authorPhoto:
      "/st/media/user_photo/2b/2bc/2bc0936882c466140495b1cfe4762335_a0e46ffb1e7c4044bd06638e0369ce7d.jpg",
  },
  {
    name: "Forex Exness",
    account: 11590569,
    description:
      "Currency trading pair for scalping trade, Daily trend following. Let make your profit.",
    author: "Khattiya Khamthet",
    authorPhoto:
      "/st/media/pim/media/user_photo/65/653/653d784cad5e10319a4eeaeebb1bdbe0_f25d3f80942241b489b6892b80bafb97.jpeg",
  },
  {
    name: "ScalpingGold",
    account: 11594103,
    description: "Trade gold with trader pro, profit > 5% month",
    author: "Hoa Tran Thi",
    authorPhoto: null,
  },
  {
    name: "Jacky Trading",
    account: 11595382,
    description: "Swing Trade \n\nmin 10$\nCoppy Trade",
    author: "ĐẠO PHAN VAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8ac/8ac714e405d8b0f259894662d1c7648f_f282d844f0654e038c16fbb3d1a565a0_NyeVpGH.jpg",
  },
  {
    name: "Tai Khoan DeMo",
    account: 11598548,
    description:
      "Profit target: 20-30%/month\nZalo: 0937352909\nZalo Group: https://zalo.me/g/bdzqwp607",
    author: "Pham Yen Huynh",
    authorPhoto:
      "/st/media/user_photo/97/97d/97dfaf69d19a0125405fd21b9f196a69_e0a7a404327f454688fc9b24a69b6499.png",
  },
  {
    name: "Stop Strategy",
    account: 11601228,
    description:
      "Be patient to profit every day\nFollow my trading strategy\nStart with >=200$",
    author: "Cương Phạm",
    authorPhoto:
      "/st/media/pim/media/user_photo/93/93a/93a521d4f8148a7e3847293e474fdf74_92afcff192e84ef4a27b167e51762a21.png",
  },
  {
    name: "Blue Ocean",
    account: 11605505,
    description: "We make a profit from open orders by using Sto RSI and MACD.",
    author: "Thawatchai Khumklad",
    authorPhoto:
      "/st/media/pim/media/user_photo/63/63a/63a3ec41dc1c2f379d0146e5ec0b65d8_26070033c14c45c8b4ac9bd8021a33ed.jpg",
  },
  {
    name: "Capitalisara BTC",
    account: 11607140,
    description: "Money management and trade trand following",
    author: "MR ISARA TRASIN",
    authorPhoto:
      "/st/media/user_photo/2b/2bc/2bc0936882c466140495b1cfe4762335_a0e46ffb1e7c4044bd06638e0369ce7d.jpg",
  },
  {
    name: "LuuDacHien",
    account: 11607296,
    description: "3-5% 1 tháng",
    author: "Hiền Lưu Đắc",
    authorPhoto:
      "/st/media/user_photo/5a/5a9/5a99af524f1148a53810de5e78a0579c_312eec79c20d4fcda754fbc475640623.jpg",
  },
  {
    name: "Bikill Scalp BTC XAU",
    account: 11610891,
    description: "1% Profit Every Day",
    author: "Thị Hồng Nhung Phạm",
    authorPhoto:
      "/st/media/user_photo/70/703/703967d1977e7645539a92c0ccd20798_15c1af422a17435d843dbd4fc55c6679.jpeg",
  },
  {
    name: "TRADING MAN 2022",
    account: 11615130,
    description: "DO THE BEST THING FOR INVESTORS",
    author: "THI BAO HIEN NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/d5/d5a/d5aeb1c1a4440284f956abdf590acd8d_f450cd016dba404b987078a20d1870c2.jpg",
  },
  {
    name: "GORD Master-Gold",
    account: 11615988,
    description: "Hedging strategy by EA (trading Gold only)",
    author: "Gord Ruksaphol",
    authorPhoto:
      "/st/media/pim/media/user_photo/3c/3cf/3cf7f0c530cfea8a715c3067796f55ab_1c2c996e95ea4d708bfc511d98803759.jpg",
  },
  {
    name: "Golden Money",
    account: 11616210,
    description: "Fundamental with many personal high growth techniques",
    author: "swapanir kumar",
    authorPhoto: null,
  },
  {
    name: "A8Pig Invest",
    account: 11620786,
    description: "Trade with trader pro Profit > 5% month",
    author: "Phương Loan Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/18/18c/18cd33657131c96d83a5bf4042f9c979_9b6996e80d444b3a9cabf597054c131c.png",
  },
  {
    name: "Trust Trader",
    account: 11626874,
    description: "- Reputation",
    author: "Công Quốc Khánh Hoàng",
    authorPhoto:
      "/st/media/user_photo/83/834/834e489a2cf3d7a40db4a29b58cd2542_6aed411b4d8a465c9197e97c48079b85.png",
  },
  {
    name: "FINANCIAL AUTONOMY",
    account: 11634442,
    description:
      "Chiến lược với kế hoạch rõ ràng giúp bạn tự chủ tài chính trong thời gian ngắn",
    author: "Thuy Tan Thi",
    authorPhoto:
      "/st/media/user_photo/00/008/008efb3dff56353765868898a8106dab_858dfa5a55824553b2be022fd6a323c1.jpg",
  },
  {
    name: "DCA 10-40",
    account: 11637829,
    description: "Cung cầu - kháng cự - hỗ trợ",
    author: "Chiêm Phạm",
    authorPhoto:
      "/st/media/user_photo/c2/c2c/c2c5aae5f3e70a37caf6d5fa8c78bcf7_77aca0c1fbb547d7b888fce56fb62413.png",
  },
  {
    name: "Saito152888",
    account: 11637939,
    description: "วัยรุนสร้างตัว ใจถึงพึ่งได้ มีใจก็ตามมา รวยๆๆๆ",
    author: "SAKANAN WANRUNGROJ",
    authorPhoto:
      "/st/media/user_photo/40/404/40416c71dba42f70647477f4535772b6_fcdc0d753db2404a96bddfa75d553918.jpg",
  },
  {
    name: "DragonFX Pro",
    account: 11637970,
    description:
      "XAUUSD Only / \none day one percent / \nsemoga sukses selalu tradingnya... / Aaamiin...",
    author: "MOCHAMMAD HAMZAH",
    authorPhoto:
      "/st/media/user_photo/f5/f52/f52f3d968eeca4f6c3c511b24812f628_c5bba447326a44c5bfc02d90d73903f7.jpg",
  },
  {
    name: "SCALPER PRO",
    account: 11638227,
    description: "Trade for trade",
    author: "YUNI SALMA DEWI",
    authorPhoto:
      "/st/media/user_photo/7c/7cf/7cfad6d10f060d69f78147c0a27c5923_6a34294346c6494d8e0460f9041dfacd.jpg",
  },
  {
    name: "Growth_100",
    account: 11641594,
    description:
      "we will be doing GOLD mostly. most scalp trades. expect 100% Growth every month.Come lets grow together",
    author: "Raja Arunkumar Mariyappan",
    authorPhoto:
      "/st/media/user_photo/87/87b/87b3386307897e4b53365820885d42e8_4f3cb7d15cfd4b76a9c849326e8bc682.jpg",
  },
  {
    name: "HUDOsignal",
    account: 11642265,
    description:
      "Một tín hiệu tốt sẽ mang lại lợi nhuận, ngay khi vừa mở vị thế",
    author: "Hưng Đỗ",
    authorPhoto:
      "/st/media/user_photo/ac/ac1/ac16bcaa0571a2603bb9049b8e20513d_2b8bc55339cd441c9125fce01dbd2f57.jpeg",
  },
  {
    name: "Gemini8888",
    account: 11643932,
    description: "Gold and Forex",
    author: "IVAN YUDIANTO",
    authorPhoto:
      "/st/media/user_photo/d4/d4a/d4a77108c47b7bf3120ca3a92455fd59_49f3067bdc2e44389ef467884d482689.jpg",
  },
  {
    name: "MHF",
    account: 11644999,
    description:
      "STRATEGY:\nOperations are closed on Positivo (90% to 100% hits).\nMQL5:\nhttps://www.mql5.com/pt/signals/1649287?source=Site+Signals+My",
    author: "MARCOS FENGLER",
    authorPhoto:
      "/st/media/user_photo/81/819/81957daefddb7d01bc0c68bf84c36e71_d36a14244c834a579396a8d1e3cdb841.png",
  },
  {
    name: "GOLD MASTER",
    account: 11645022,
    description: "We can make 10% of profit in 1 week",
    author: "Huu Tai Huynh",
    authorPhoto:
      "/st/media/user_photo/0c/0c8/0c886c5994610510d66844838625e7b0_fdef3ba5b5b043188cdbbc113e42c8c5.jpeg",
  },
  {
    name: "Ngọa hổ tàng long",
    account: 11646289,
    description:
      "Chiến lược của tôi giao dịch các khung từ M15-D1 nhưng chủ yếu M15,H1 và cố gắng đạt mục tiêu tăng trưởng tài khoản 5-30%/ tháng. Yeah!!!",
    author: "Thị Kim Tuyến Phạm",
    authorPhoto:
      "/st/media/pim/media/user_photo/70/70e/70e0c65dd1ef33979dac2d75be5c239f_4fab6f6f166e4794ab5e5b3bdaccd26e.jpg",
  },
  {
    name: "FEV TRADING GROUP",
    account: 11649359,
    description:
      "- No Setup, No Entry\n- Target profit: 5%-20% per month\n- Trading Style: Scalping & Intraday & swing",
    author: "KHAC THANG DAU",
    authorPhoto:
      "/st/media/pim/media/user_photo/5c/5c0/5c0f26977f68439056b9e7720bce1d7f_99f9af8de0a443f68760f5967c34b4b3.JPG",
  },
  {
    name: "Money Lover",
    account: 11650139,
    description: "Gold Trader : M15,M30,H1,H4 Divergent&Sto",
    author: "Mallika Sittajaruwat",
    authorPhoto:
      "/st/media/user_photo/84/84c/84c0d70c9c9f0b5ebc038cb0e06ebf2b_cd766984be454ec2ba0c490136871845.png",
  },
  {
    name: "Edw Scalping",
    account: 11650253,
    description:
      "Profesional Scalper since 1998\nWe make 1% per day or at least 10% per month with Low Drawdown for Good Money Management",
    author: "EDWARD SUHARRY",
    authorPhoto:
      "/st/media/user_photo/cb/cb8/cb8b2cd48f80ff707a243ef01a92dde5_6eaff8418d6e44249b3b95e9d4b93ede.jpg",
  },
  {
    name: "Ha Do",
    account: 11651157,
    description: "Spending strategy - Sustainability",
    author: "HA DO THI",
    authorPhoto:
      "/st/media/user_photo/55/55f/55f4a4cd0c3bfde2b71d17870061f666_f5db30f4c11e411481df161e23dd004d.jpg",
  },
  {
    name: "ER Cryptocurrency",
    account: 11654060,
    description: "BTCUSD Only\nt.me/ercopytrade",
    author: "ERICK RODERICK",
    authorPhoto:
      "/st/media/user_photo/96/966/96672b8130a8ace1cb6a1fb3c6e1f366_9b096ebcec944ecdb293992e98ccc41a.png",
  },
  {
    name: "F5I Gold Safe",
    account: 11654854,
    description: "not over 5 orders, more profit",
    author: "Huyen Pham",
    authorPhoto:
      "/st/media/user_photo/46/465/465bb3b29edc119385ce52966965c191_4b337b3f8a8b465c9f09042e307b07ec.jpg",
  },
  {
    name: "Bigtrustglobal",
    account: 11657129,
    description: "fair n honest",
    author: "DANIEL HENSON",
    authorPhoto: null,
  },
  {
    name: "ZOOM TRADER",
    account: 11661215,
    description:
      "LITON ZOOM,,,,,,,//ZOOM TRADER,,,,,, INDIAS BEST Fully Automated Forex Trading 100% Online,,,//Processhttps://chat.whatsapp.com/B9APxCXcp0d3dngvltGiw2",
    author: "MD WASIM BARI",
    authorPhoto:
      "/st/media/user_photo/f9/f90/f90dd937ae6a03dc0c3dcd9324cc6652_5c349931a79a4800bdb0484119160084.jpg",
  },
  {
    name: "VALuable-LOW RISK",
    account: 11661528,
    description:
      "Day trader of EURUSD\n\nMonthly target: up to 15%\n\nWe can not beat the market but we can always manage risk and reward.",
    author: "VALERIE LOPEZ",
    authorPhoto:
      "/st/media/user_photo/55/559/5597b99511163858523e1e58d39f2980_d73a9b924cfa4a5caa58ee0f5be226f1.jpeg",
  },
  {
    name: "Start sssss",
    account: 11662074,
    description: "Follow trend trading.",
    author: "Kitti Chutipongpairoj",
    authorPhoto:
      "/st/media/user_photo/34/34d/34dc146795bf555b0b0ca722d3566bbb_42116262db3941089bc3c809e6c92730.jpg",
  },
  {
    name: "Trading Pro",
    account: 11665268,
    description:
      "Safe and Effective I have 15 years of experience in Forex trading.Trading style:Scalping,day trading.Target 1% per day; 22% per month; 250% per years.",
    author: "Văn Hùng Phạm",
    authorPhoto:
      "/st/media/user_photo/7a/7af/7af1f77ecd61b73493862098c478ad5e_54c9aa48f4244bdb9ca0d9e0b3b13d13.jpg",
  },
  {
    name: "The Trade Guru",
    account: 11668796,
    description:
      "trading will be on higher time frames and no grid with good rewards",
    author: "majid khan",
    authorPhoto:
      "/st/media/user_photo/58/582/5820b945be09d8cc7cde0d5bf1c07ba5_7a77f61fb8654c3aa4167061661ed523.jpg",
  },
  {
    name: "TH WIN WIN 2222 SCAL",
    account: 11670666,
    description: "SCALPING",
    author: "PHAM THI HUYEN THUONG",
    authorPhoto:
      "/st/media/user_photo/6e/6ec/6eca2da1968102bca4e3ebdd679a7f37_d586aff9585f4d8fb66842a89f3be5ec.jpg",
  },
  {
    name: "M-Trade 99",
    account: 11671399,
    description: "Specialty in XAU",
    author: "NIKE POLO",
    authorPhoto: null,
  },
  {
    name: "Portawan Trader",
    account: 11674002,
    description: "Slow but Sure Trading",
    author: "MR WITTAYA LUMUBOL",
    authorPhoto:
      "/st/media/user_photo/71/710/710c6d21d87643ba5ba20dafa50be267_c7885f4baabf4bee9f01ac2d893b5c41.JPG",
  },
  {
    name: "MM-Trade 89",
    account: 11674834,
    description: "Specialty in XAU",
    author: "NIKE POLO",
    authorPhoto: null,
  },
  {
    name: "WELCOME TO THE 1 olo",
    account: 11675419,
    description:
      "Groww up your investment with EMA, RSI, Pivot point, MACD & Volume with tight S.L & T.P",
    author: "Jaydip Kumbhani",
    authorPhoto:
      "/st/media/user_photo/a4/a49/a491cd92828b832da3eefb82cb57dfe3_2d7729d9339540f0afca369643447f59.jpg",
  },
  {
    name: "gold trader pro",
    account: 11676284,
    description: "Gold pro",
    author: "KHADIJA AKHTER",
    authorPhoto: null,
  },
  {
    name: "SmartHunter",
    account: 11677391,
    description: "SmartHunter",
    author: "Lê Nguyễn Thị Tuyết",
    authorPhoto:
      "/st/media/user_photo/77/77b/77b7dd82065a2eeb4f835a921932fedb_5761cd0322da446c80ee5f8230bb6187.png",
  },
  {
    name: "HuuThangPA",
    account: 11678690,
    description: "Keep it simple stupid",
    author: "Thắng Nguyễn Hữu",
    authorPhoto:
      "/st/media/user_photo/19/19e/19e04e8441d4d9d68aba9711d671dc66_bde70782470a49b0a7300c1ad222d08c.png",
  },
  {
    name: "Day Trading Strategy",
    account: 11681142,
    description:
      "Over Trading is Very Risky. So Over Trading is not done in this Account. Everyday Take 1-5 Entry . Copy My Strategy After 1 Month Get 20%+ Profit .",
    author: "Nazmul Ripon",
    authorPhoto:
      "/st/media/user_photo/ce/ced/ced975e88e0f617b0facb51dff6d4735_a5bc701a9d704174b517a03fd1584feb.png",
  },
  {
    name: "Scalper FX Pro",
    account: 11683181,
    description: "Trading XAUUSD, EURUSD, GBPUSD",
    author: "ARJUN MULYONO",
    authorPhoto:
      "/st/media/user_photo/88/88a/88a89a6812ee072e4dafc56787fbb6c3_09315841e060434b8dfb746e9a47d5b5.jpg",
  },
  {
    name: "Whale Whisperer",
    account: 11683184,
    description:
      "About this strategy:\n- Big timeframe (D1) swing trades, suitable for long-term investors.\n- 3 years of steady profit already.\n- 10-15% / month.",
    author: "Quốc Hùng Phan",
    authorPhoto:
      "/st/media/pim/media/user_photo/b7/b7b/b7bd0e1b1ca66dc5194f92deceb31738_9a3e045bada14b27985b7f4a53360dab.jpg",
  },
  {
    name: "Gogzilla Winner",
    account: 11685576,
    description: "Every day trade",
    author: "Thawatchai Khumklad",
    authorPhoto:
      "/st/media/pim/media/user_photo/63/63a/63a3ec41dc1c2f379d0146e5ec0b65d8_26070033c14c45c8b4ac9bd8021a33ed.jpg",
  },
  {
    name: "Smile again",
    account: 11686516,
    description: "Smile again !",
    author: "Thị Mạnh Lê",
    authorPhoto:
      "/st/media/user_photo/8b/8bf/8bfeba8573aaad70bc48188bf7eec5f5_68d0354f55f0419e8231674a04efce5f.jpg",
  },
  {
    name: "AUTO TRADE",
    account: 11690099,
    description: "GROWTH 5 PERCENT PER MONTH",
    author: "ธิติ ตระกลพัฑฒนะ",
    authorPhoto:
      "/st/media/user_photo/cb/cb2/cb23f0e0116dc1a4e4b3593012f65de2_156ace2ad31d443c8a69895d252ad2b1.jpg",
  },
  {
    name: "wannaphatsorn",
    account: 11691826,
    description: "Time freme m 1 m5 m15",
    author: "WANNAPHATSORN RACHATAWALAIPHAN",
    authorPhoto:
      "/st/media/user_photo/a6/a6c/a6caf34029ac925a7a9b830e9d5ccd90_7da06fb6efe44172b671ebc4646e6d43.jpg",
  },
  {
    name: "The Silk Road",
    account: 11692454,
    description:
      "Target profit monthly 15%\r\nhttps://s.net.vn/RMJb\r\nJoin 👉 https://t.me/HaiAuCapital",
    author: "ANH TUAN NGO",
    authorPhoto:
      "/st/media/pim/media/user_photo/59/59b/59b91012c84e8ffdddb68b12bc8c42df_1b5faab8e7b34c7b8d746a4c31aa3945.jpg",
  },
  {
    name: "Daily Profit 2",
    account: 11693606,
    description:
      "Mainly trade FX. Profit 1%-2%/day.\nSmall money daily for consistent passive income.",
    author: "Xuan Hung Pham",
    authorPhoto:
      "/st/media/user_photo/e7/e75/e752840580e6563843c2425284b8979c_95c1d069b6dc4b8194d59e02fce3597d.jpg",
  },
  {
    name: "Balancer01",
    account: 11694414,
    description: "Balancer",
    author: "DINH GIAP BUI",
    authorPhoto:
      "/st/media/user_photo/cd/cd2/cd2d59253866418c5ee4a4e8aa21d79f_59186cf7a366476e9fc1ec04851c2c52.jpg",
  },
  {
    name: "Gold Trading",
    account: 11696020,
    description:
      "I am doing trade in gold only. I am doing scalping trades with small risk. weekly u can check my results, Hope that will be good profit.",
    author: "jayashree Kumaresh",
    authorPhoto:
      "/st/media/user_photo/fd/fd3/fd343475331b3fd7d80aa0a102b992bf_49343d28518c48db833360e147080f37.png",
  },
  {
    name: "Super Trader",
    account: 11700364,
    description: "profit 1-5% a day with proper stop losses",
    author: "Deepak Subramani J",
    authorPhoto: null,
  },
  {
    name: "Papuda xauusd",
    account: 11701377,
    description: "Vào lệnh an toàn 100% cơ họi cho mọi đối tác tin cậy",
    author: "VAN SY PHAM",
    authorPhoto:
      "/st/media/user_photo/7d/7d9/7d9f8f54884bd20d781d2aab2cf17a1f_9e9e96fb828f4c1199e397ddcc1c929e.jpg",
  },
  {
    name: "Evening Butterfly",
    account: 11701657,
    description: "Looking for Small and Stable Profit.",
    author: "Phạm Thế Quang",
    authorPhoto:
      "/st/media/user_photo/44/44a/44a7edf30aa1308c1a252f613e03aed6_7e65677515d045cd8d1bc6d08d7c4bcb.jpg",
  },
  {
    name: "UpMountain Exness",
    account: 11705230,
    description:
      "Thank you for choosing to profit together with me.\nSeeking around 5% per month operating normally AUDCAD.",
    author: "Daniel Moraes da Silva",
    authorPhoto:
      "/st/media/user_photo/86/864/864a8ad0d79ae47f9d2149eb4add97e1_5348bb47f2f54ece972284d9c8a9071f_BFshpip.png",
  },
  {
    name: "OnePiece2022",
    account: 11705549,
    description:
      "趋势策略，年化保底在50%左右，实现年度收益复利增长，胜率略低，盈亏比高，耐得住寂寞，能长期持有的（周期最少一年起算），可以一起发财。",
    author: "唐 雨生",
    authorPhoto:
      "/st/media/user_photo/3c/3c2/3c265656b5458a508d043e1bdfadeebb_cc0a6eb62d4b41e4b94ef6440e1b412d.jpg",
  },
  {
    name: "Gold Social",
    account: 11706980,
    description: "Gold",
    author: "s.wetayavigromrat เวทยาวิกรมรัตน์",
    authorPhoto:
      "/st/media/user_photo/57/578/57842a3924ed565a09e8fecce60b2ce8_1a0b5c39582140e18294929540a8ea6f.JPG",
  },
  {
    name: "Gold Hedging",
    account: 11707339,
    description:
      "Our trading It is a trading through the Hedging Martingale. low risk can make consistent profits.",
    author: "Surachet Hannoi",
    authorPhoto:
      "/st/media/user_photo/dd/ddb/ddbc3c1e3bcfd8fcfff4ce190982b80a_df310293068a4a5ca0524f9e8807c2b6.png",
  },
  {
    name: "humayun_khan",
    account: 11707440,
    description: "we trade with trends",
    author: "Humayun Yaqub",
    authorPhoto:
      "/st/media/user_photo/3f/3fb/3fb6f214bc819cf81907a295bacc5ae8_ab3af55ffae2436aa91b6e9f7cb57c33.jpg",
  },
  {
    name: "Ali Baba Gold",
    account: 11711034,
    description:
      "Daily 1 % 2% monthly 40% my experience 4 year  technical and fundamental trader Price action trader",
    author: "Irfan ali",
    authorPhoto:
      "/st/media/user_photo/cb/cbb/cbb4634f9e418f0d0fdd8c5899ec3702_286a03b979cf4b9fbc3b2b62dacb5bc4.jpg",
  },
  {
    name: "Gold rush9999",
    account: 11711470,
    description: "wait's happy",
    author: "Pham ngoc Quang",
    authorPhoto:
      "/st/media/user_photo/cd/cdd/cdd612b1454e2a6cd3ca1e372e6e483e_75a24403c2244fc9a8acb306bdc6b61d.jpg",
  },
  {
    name: "FSKV Social Trading",
    account: 11711849,
    description:
      "Berusaha dengan Baik Mencari tambahan Income, semoga jalan baik dan Konsistensi adalah tujuan utama..",
    author: "KIKI GOZALIE",
    authorPhoto:
      "/st/media/user_photo/94/940/940afef968ed46670790dee3d1184023_672c561b0a5443a0aad2b6057af0c436.jpg",
  },
  {
    name: "GORD Master- GJ",
    account: 11712287,
    description: "Hedging strategy by EA (trading GBP&JPY)",
    author: "Gord Ruksaphol",
    authorPhoto:
      "/st/media/pim/media/user_photo/3c/3cf/3cf7f0c530cfea8a715c3067796f55ab_1c2c996e95ea4d708bfc511d98803759.jpg",
  },
  {
    name: "Steady Profit Trader",
    account: 11713583,
    description: "Control equity and drawndown , Collect profit everyday.",
    author: "MR ALONGKORN THONGTAWEEVATANA",
    authorPhoto:
      "/st/media/user_photo/af/af3/af395bebc7503957e6e72fefec8b6eb3_0d14645d42294d549f224abbcf319f37.jpg",
  },
  {
    name: "The Gentleman",
    account: 11714188,
    description:
      "supply and demand trading method is the best for all market. consistency is the key. price action is the king of the market.",
    author: "dixit vekariya",
    authorPhoto: null,
  },
  {
    name: "EAGLE_VIE01",
    account: 11714612,
    description:
      '"Sự kiên trì & bền bỉ là sự khác biệt lớn giữa thành công và thất bại"---Donal Trump',
    author: "Hạnh Nguyễn Thị",
    authorPhoto:
      "/st/media/user_photo/a9/a90/a90a230fc04469a71bc49cd850392100_4c6eef6cf58349bc9e7843e1c7e33868_wKOrKLs.png",
  },
  {
    name: "GOD OF GOLD",
    account: 11715517,
    description: "0.01",
    author: "MR WUTTICHAI MALIPUAK",
    authorPhoto:
      "/st/media/user_photo/a9/a91/a9132147e84dc498c6db74806000afdb_f76aa97797b64998bbf7116ea79415a4_d71CMuH.jpeg",
  },
  {
    name: "Đu Vây Cá Mập",
    account: 11716096,
    description: "Đánh ngắn hạn tổng kết lợi nhuận theo tuần",
    author: "ngân võ",
    authorPhoto:
      "/st/media/user_photo/df/dfc/dfc8ed7aa48ac14d61a4d2878a85aed3_88e183b60c8645699e144aab27b3a9bf.jpg",
  },
  {
    name: "USDJPY Printer",
    account: 11716439,
    description:
      "USDJPY automated program\nplease analyse this account on yearly basis\n\nOur MAIN PRIORITY is to protect our capital",
    author: "ANDY CHANDRA",
    authorPhoto:
      "/st/media/user_photo/b1/b18/b18ed93afaf44c36813d9f8102d9d104_03eda9a4b2e944358a1d38cbf43e61bd.jpg",
  },
  {
    name: "Ioniq one1",
    account: 11717669,
    description:
      "Risk management is priority, stable profit 10-20%/Month, volume 0.01-0.05, stable NAV 1000 USD\nhttps://t.me/+kW4VOHlY0t05OWFl",
    author: "XUAN CHINH NGUYEN",
    authorPhoto:
      "/st/media/user_photo/51/518/518de671ab8615ee20899e574507ee8a_59821fa8f038404eb57bb5be80394183.jpg",
  },
  {
    name: "Slow Life Trader",
    account: 11717936,
    description:
      "**รอให้เป็น เย็นให้พอ**\nแนวทางเทรด ใช้ TF D, H4 ใน trading plan ไมมีการใช้ SL แต่ mm แทน อัตรา mm อยู่ที่ 100USD ต่อ 0.01 ล้อต",
    author: "MR SUKIT VORANUCH",
    authorPhoto:
      "/st/media/user_photo/d3/d3c/d3c9ebf5d93d4bd12d4b764b4b4231e0_9721236e2de04a82ba1485a6140fb304.jpg",
  },
  {
    name: "RecoveryFX",
    account: 11718157,
    description:
      "Strategi ini untuk merecovery segala kegagalan yang telah lalu untuk memamhami extrem nya dunia trading",
    author: "Ihsan",
    authorPhoto:
      "/st/media/user_photo/bf/bf9/bf9cb6cdb57892909f397324e2abff73_f5e676aeb8f6465385da31c6ebca2958.jpg",
  },
  {
    name: "FOREX RENAISSANCE T2",
    account: 11718320,
    description: "A longterm upward trend",
    author: "KYUNGSUN JOO",
    authorPhoto:
      "/st/media/user_photo/84/84a/84a9481a4feb37851365696c7e1ea201_830a27dd878f443cba2132b3980889c8.jpeg",
  },
  {
    name: "Blu D Forex",
    account: 11718705,
    description: "EURUSD PAIR",
    author: "Boikanyo Ratlou",
    authorPhoto:
      "/st/media/user_photo/e9/e91/e9120d31080d365ef9b94e310e0751ae_f0515f0ae657490188474ceba9e0300d.jpeg",
  },
  {
    name: "Indy Golds",
    account: 11721075,
    description: "Short-term trading, only 30 minutes.",
    author: "MR TIRAPHAT SAWANGGOSOL",
    authorPhoto:
      "/st/media/user_photo/d6/d67/d674ef886a489f869b1600a13d91ecc7_8e2a04bd77a44e758f071768b45c8b9f.jpg",
  },
  {
    name: "Lucky Cat Trader",
    account: 11721749,
    description: "Algo trade | High risk | High Drawdown",
    author: "ณัฐวรรธน์ วงศ์เรือง",
    authorPhoto:
      "/st/media/pim/media/user_photo/aa/aaf/aaf2acfe31eaa13307e8caaf66440386_8b34ff7fbaad4b69a096d174dd3eb0ec.jpg",
  },
  {
    name: "You and I win",
    account: 11722775,
    description:
      "I don't trade very often, I focus on good and safe trading points, I aim for long-term and sustainable profits.",
    author: "NGUYỄN BÌNH",
    authorPhoto:
      "/st/media/user_photo/5a/5a4/5a43c90cef36bee4e147a43c933eadcd_e4b97898725a4bd5923b09cbc7a5813e.jpeg",
  },
  {
    name: "Scalping M15",
    account: 11728234,
    description: "Hãy kiên nhẫn và kỹ luật",
    author: "ĐỎ HUY",
    authorPhoto:
      "/st/media/user_photo/f8/f89/f8964c09fc3bde05a31195210235a6d0_ef408f688bb841219140864e3ee855cb.jpg",
  },
  {
    name: "Enigma Engine",
    account: 11729042,
    description:
      "About this strategy:\n\n- Sniper trades with multi-timeframe technique (m30-H4-D1)\n- 5%-10% / month\n- For non-riskers but want steady passive income.",
    author: "Quốc Hùng Phan",
    authorPhoto:
      "/st/media/pim/media/user_photo/b7/b7b/b7bd0e1b1ca66dc5194f92deceb31738_9a3e045bada14b27985b7f4a53360dab.jpg",
  },
  {
    name: "31_s680_sig1_1193",
    account: 11731193,
    description:
      "Use EA245 S680 for long term investment.\nExpert Advisor - Easy Activities",
    author: "PHAM VAN TAN",
    authorPhoto:
      "/st/media/user_photo/ab/ab0/ab02b18c16bfa54d05e40774447557ce_36ecb5300909416686e5939bf8f59ee9.jpg",
  },
  {
    name: "OCTA GOLD",
    account: 11731209,
    description:
      "Gold trading is known for its stability, which has made it one of the most popular investments for storing wealth.",
    author: "Jiffin  P A",
    authorPhoto:
      "/st/media/user_photo/f5/f50/f50b70b43187cf04b5fc5e9a8e9d5de7_09461dea67954064a9fb6847929528f6.jpg",
  },
  {
    name: "FOREX TRADE 01",
    account: 11732489,
    description:
      "FOREX TRADE is the right way to make good profit with very low risk its safe system with human control all time . WHATSAPP GROUP http://chat.5kc.com",
    author: "ABD ALRAHEEM ABD ALRAHEEM",
    authorPhoto:
      "/st/media/user_photo/41/415/415936b9f32d4c3029ad1e5fc12b3397_48f8bd48411a4a4ba017c298fc2f7ee6.jpg",
  },
  {
    name: "FOREX TRADE 02",
    account: 11732578,
    description:
      "FOREX TRADE is the right way to make good profit with very low risk its safe system with human control all time . WHATSAPP GROUP http://chat.5kc.com",
    author: "ABD ALRAHEEM ABD ALRAHEEM",
    authorPhoto:
      "/st/media/user_photo/41/415/415936b9f32d4c3029ad1e5fc12b3397_48f8bd48411a4a4ba017c298fc2f7ee6.jpg",
  },
  {
    name: "Cheetah Cat Trader",
    account: 11732623,
    description: "Algo trade | High risk | High Drawdown",
    author: "ณัฐวรรธน์ วงศ์เรือง",
    authorPhoto:
      "/st/media/pim/media/user_photo/aa/aaf/aaf2acfe31eaa13307e8caaf66440386_8b34ff7fbaad4b69a096d174dd3eb0ec.jpg",
  },
  {
    name: "Gold TRANG NTQ",
    account: 11732962,
    description:
      "Monthly target is around 20-30%\nTake profit every day\nLow risk high return",
    author: "trang nguyen thi quynh",
    authorPhoto:
      "/st/media/user_photo/ed/eda/eda92915b34a85bdc7d45650753a96a6_2e2c4c6362104561ac040044ed3f9030.jpg",
  },
  {
    name: "Final War Project",
    account: 11733797,
    description: "Trade GOLD",
    author: "SOMBOON KLUAYPANAWAN",
    authorPhoto:
      "/st/media/user_photo/b3/b30/b30d6ada3a09150643e4d59c5699bed7_5f326a357a5e4bc9a296a5192ca75254.png",
  },
  {
    name: "Make Passive Income",
    account: 11734298,
    description: "Trading From 2014",
    author: "Nirmla Haresh",
    authorPhoto: "",
  },
  {
    name: "MTA-Day Trading",
    account: 11736640,
    description:
      "Intraday trading strategy. There is a Stoploss for each order. Orders will be closed within the same day.",
    author: "Tran Tuan Anh",
    authorPhoto:
      "/st/media/pim/media/user_photo/04/043/0437db10f41dd909411f34a394385f95_721dd6d851174d0b9a383760beb8a892.jpg",
  },
  {
    name: "AIUTRADELLP",
    account: 11737626,
    description:
      "We Provide best low risk trading strategy.\nMin deposit $1000\nMonthly ROI 10 to 20%\nhttps://wa.me/message/GGXPHH4UGLIWJ1",
    author: "Mohmmed Mehsanuddin Mohmmed Muneeruddin Inamdar",
    authorPhoto:
      "/st/media/user_photo/a8/a85/a855eeac497916b9df3fc2c19d5d77a2_17b8d282ec054671aad632779df65991.jpg",
  },
  {
    name: "ชีวิตคือการลงทุน",
    account: 11739921,
    description:
      "การเทรดคือความน่าจะเป็น ซึ่งมันหมายความว่าอาจจะถูกหรือผิดก็ได้ แต่หัวใจหลักก็คือ คุณต้องทำตามระบบอยู่ตลอดเวลา",
    author: "MR JAMLONG TUNKAEW",
    authorPhoto:
      "/st/media/user_photo/56/568/568aa512633e27afd80cb9ecb94f34ba_1ceede7382e546428bfd786d2d4d20f1.jpg",
  },
  {
    name: "USAHA DAGANG BAROKAH",
    account: 11743484,
    description:
      "Consistent\n\nhttps://t.me/realizemyidea\n\nMinimal Modal: 10 USD\n\nTarget 10% perbulan\n\nhttps://one.exness-track.com/a/ug7no1fe\n\nWww.realize.my.id",
    author: "MUHAMMAD PUTRA",
    authorPhoto:
      "/st/media/pim/media/user_photo/94/94f/94fd2a0893db38afb6fbbad8a6508c9a_3d21e9323ee24b2fa1f35c2052f58281.jpg",
  },
  {
    name: "策略策略策略策略策略",
    account: 11744234,
    description: "策略",
    author: "令省 孔",
    authorPhoto: null,
  },
  {
    name: "Smart_EA_22",
    account: 11744878,
    description: "Stable Profit",
    author: "Lê Nguyễn Thị Tuyết",
    authorPhoto:
      "/st/media/user_photo/77/77b/77b7dd82065a2eeb4f835a921932fedb_5761cd0322da446c80ee5f8230bb6187.png",
  },
  {
    name: "FTCFX FUND",
    account: 11749024,
    description:
      "Treat the trade as a business. Fully Technical Classic & Combined with SMC Strategy.",
    author: "Yohanes Setiawan",
    authorPhoto:
      "/st/media/pim/media/user_photo/3c/3ca/3cada7e727a49f6a8b6a886d1d72832f_609e74d76f784444a2506f1c8ef8d7b7.png",
  },
  {
    name: "LLLL   line",
    account: 11750544,
    description: "Hãy cố gắng hơn mỗi ngày !",
    author: "lien tran",
    authorPhoto:
      "/st/media/user_photo/d4/d43/d433034a867ce83d5cb7bfb028c48f3d_8af73fd6f0d644089d787a3942d2bf2b.jpg",
  },
  {
    name: "Zombie strategy",
    account: 11752214,
    description:
      "If you can't be patient, don't copy with me !\nT.me/Forex_zombie\n\nOur new strategy 🆕\nT.me/Forex_Thief",
    author: "Saleh Mohammed Alshehri",
    authorPhoto:
      "/st/media/user_photo/e1/e13/e1381653ef7658824f24792afd757cce_fcd868a2865c4d259c8c2b57267c9373.jpeg",
  },
  {
    name: "ProTrade Fund",
    account: 11754635,
    description: "Lets profit together. Thanks.",
    author: "Hendy Saputra",
    authorPhoto:
      "/st/media/user_photo/64/649/64913a59d338aca107e2d8dad6283424_56db542c39f54d77a1ad367f482d115a.png",
  },
  {
    name: "Lion King Trader",
    account: 11755834,
    description:
      "Absolute safe trading . Money will be in safe hands. Absolutely no question of stop out. Just keep enough margin",
    author: "Ritajit Seal",
    authorPhoto:
      "/st/media/user_photo/25/251/251fcf3037af349fed6a385bd95b70bf_661074d3d1a8470d94b13c4598d1bdc3.jpg",
  },
  {
    name: "Turtle Viet CN",
    account: 11756719,
    description:
      "Swing trade các cặp tiền tệ chính: AUDUSD, USDYPJ, GPBUSD, EURUSD, EURGPB",
    author: "Công Nguyễn",
    authorPhoto:
      "/st/media/user_photo/cd/cdc/cdc3b346bd94e087aa2d60a55c990bea_96c6e7299a734a22ab13d1a47d1c45e2.jpg",
  },
  {
    name: "Stable1000BiDollars",
    account: 11757199,
    description: "Stable1000BiDollars",
    author: "THI LE KIEU TRAN",
    authorPhoto:
      "/st/media/user_photo/99/99d/99d9bd172b3cbab6aab3b4937632a7ac_383bb6eda49e4ee78786ddcd090b72c7.jpg",
  },
  {
    name: "Stable1000BiDollars",
    account: 11757207,
    description: "Stable1000BiDollars",
    author: "THI LE KIEU TRAN",
    authorPhoto:
      "/st/media/user_photo/99/99d/99d9bd172b3cbab6aab3b4937632a7ac_383bb6eda49e4ee78786ddcd090b72c7.jpg",
  },
  {
    name: "Stable1000BiDollars",
    account: 11757209,
    description: "Stable1000BiDollars",
    author: "THI LE KIEU TRAN",
    authorPhoto:
      "/st/media/user_photo/99/99d/99d9bd172b3cbab6aab3b4937632a7ac_383bb6eda49e4ee78786ddcd090b72c7.jpg",
  },
  {
    name: "Mike and Mina",
    account: 11757901,
    description: "A stable long term trading strategy with low risk!",
    author: "Mai Thi Thuy Dung",
    authorPhoto:
      "/st/media/user_photo/11/111/1110f502e5fbed20b69cc227336b0d43_59a62e52f65843498fb4f5223cd83276.jpg",
  },
  {
    name: "Gold Hedging RX",
    account: 11759133,
    description:
      "Xauusd scalping trading profit 7-20% /month \n-EA Expert advisor swing trade\n-Take profit every day\n-Low risk high return.\n-Warranty back test 10 year",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "A TRADE ID",
    account: 11761435,
    description: "Profesional trader",
    author: "MUH RUSTAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/78/785/7854a073fb754649ac76dcc27c81cb84_9da7fd07519b4612ab738b1d1b9cb5ca.jpeg",
  },
  {
    name: "Akatsuki",
    account: 11763331,
    description: "Pair : EURUSD",
    author: "สุกฤษฏิ์ บุญกาญจน์วนิชา",
    authorPhoto:
      "/st/media/user_photo/a1/a1c/a1cb8bfdfaec7815a8e1b668db480637_ca2b672d38144ee38f57bb7e14fbb91c.png",
  },
  {
    name: "Bear Beo68",
    account: 11764732,
    description: "Trade vàng 100%\nTarget +-2%/ngày \nzalo :0941421216",
    author: "An Pham thi",
    authorPhoto:
      "/st/media/user_photo/5c/5c9/5c92c22808093ffdd14e3d0966ee4e9a_39b94781578f4a52952fecd672232a07.jpeg",
  },
  {
    name: "Gold Extra VI",
    account: 11765681,
    description:
      "Xauusd scalping trading profit 15-30% /month \r\n-EA Expert advisor swing trade\r\n-Take profit every day\r\n-Low risk high return.\r\n-Warranty back test 10 year",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/ac/ace/ace529c85edbea776a06cb904b0eb20f_e2fe8118fbe948429969c3a67592c557.jpg",
  },
  {
    name: "Gold RSIX Master",
    account: 11770566,
    description:
      "Xauusd scalping trading profit 7-15% /month \n-EA Expert advisor swing trade\n-Take profit every day\n-Low risk high return.\n-Warranty back test 10 year",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/df/dfc/dfcc39e6d697fbb1d8529603559279ad_f9fb10bc729a4546945ce831ff3475c5.jpg",
  },
  {
    name: "SIMPLY SAFE FX",
    account: 11771203,
    description:
      "This strategy will focus on 3 fx pairs using multi pair hedging strategy\n\nMonthly goal: 5-10%\nYearly goal: 60-100%\n\nLow risk with consistent gains",
    author: "THI THU TRANG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/ec/ec2/ec2ef8b3944df76f8f2ccccc7af1ef29_adad9f1341c347e08f25700a85060642.jpg",
  },
  {
    name: "Social Trading EA002",
    account: 11773323,
    description: "hello.\nWe use AI in trading.",
    author: "MR SARAYUT INWANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/01/01d/01dbe04934290c8543bdec34f67be89d_f27a5926996046ca89b5647544c49aa0.jpg",
  },
  {
    name: "SAFI ULLAH",
    account: 11775237,
    description: "Monthly Investment Returns Not suitable for day traders",
    author: "Shahid Mehmood",
    authorPhoto:
      "/st/media/user_photo/0e/0e2/0e2269e54c0f1b76e9576fac4512667d_b153575b59ed40b5a219cda665b63673.jpg",
  },
  {
    name: "mmfforex bot",
    account: 11776142,
    description: "0962378888",
    author: "XUAN TAI NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/3f/3fd/3fd640ae53d59eff84e3ad31af5d4050_061c427c57c745f8ad975816884de746.jpeg",
  },
  {
    name: "Blue Dragon",
    account: 11778245,
    description: "Copy trade Gold",
    author: "MR KITTIPHAN PANAPITHAKKUL",
    authorPhoto:
      "/st/media/user_photo/5f/5f0/5f0e3aa57704b56484bf22c1cf24525d_798e674580d14b1db9ce0ba4bcb72882.jpg",
  },
  {
    name: "THE ONE",
    account: 11779709,
    description: "THE ONE  very safe trade with high profit",
    author: "OLA SAID ABD ELGHAFFAR RASLAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/457/457e28ac7f9ebe65a753f2d05f639468_5bb1a82cb25a4f40b473d190c6aefb6d.jpg",
  },
  {
    name: "SAXCOIN PROFIT",
    account: 11779963,
    description: "SAXCOIN PROFIT",
    author: "SAID ABD ELGHAFFAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/33/33c/33c6aaf9975b416db7e9c89fd28cf0ce_29ddb2fc5dd046c1964fb879f87b2265.png",
  },
  {
    name: "WuKong Capital",
    account: 11780036,
    description:
      "This is a strategy that has been researched and tested over the past 4 years, with very good results. Profit target >60% per Year.",
    author: "Hào Hồ Phú",
    authorPhoto:
      "/st/media/user_photo/e5/e53/e53471ab5b1b7ed0e2478fc9707164aa_2436102478be4dc5aeaa12771b79c433.jpg",
  },
  {
    name: "Silver - Whitesun",
    account: 11780230,
    description: "XAUUSD\nRisk: Low Risk\nExpected Return: 1%-2% / week",
    author: "Truong Thanh Tung",
    authorPhoto:
      "/st/media/user_photo/a5/a53/a530698e760c8752cccc5ec92c005bba_af023bb04a3241e4893ffe75def38d60.png",
  },
  {
    name: "WOLF FOREX_VIP",
    account: 11780944,
    description: "WOLF FOREX_VIP",
    author: "HUỲNH PHẠM PHƯỚC THIỆN",
    authorPhoto:
      "/st/media/user_photo/7a/7a9/7a97e75848b86fc5984ad6406d8593bc_fcf7668b29fc40baab87a3f39c905b03.jpg",
  },
  {
    name: "FOREX IN HAND 2",
    account: 11781228,
    description:
      "FOREX IN HAND we trade not like other trader we have very safe strategy",
    author: "ELDEEN ELDEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/603/60360f065d7cb7f6622240dd1855a05d_d915f6c58f5d49728e53aa36f93c9922.jpg",
  },
  {
    name: "FOREX IN HAND 4",
    account: 11781233,
    description:
      "FOREX IN HAND we trade not like other trader we have very safe strategy",
    author: "ELDEEN ELDEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/603/60360f065d7cb7f6622240dd1855a05d_d915f6c58f5d49728e53aa36f93c9922.jpg",
  },
  {
    name: "FOREX IN HAND 1",
    account: 11781241,
    description:
      "FOREX IN HAND we trade not like other trader we have very safe strategy",
    author: "ELDEEN ELDEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/603/60360f065d7cb7f6622240dd1855a05d_d915f6c58f5d49728e53aa36f93c9922.jpg",
  },
  {
    name: "MAN OF STEEL",
    account: 11781324,
    description: "MAN OF STEEL",
    author: "HMED DEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/47/47d/47dff44a6a3d2d356f5dffc97716a8d9_410c9ad3860a47e6a694425301f24fa6.jpg",
  },
  {
    name: "FOREX LOGICAL",
    account: 11781779,
    description:
      "FOREX LOGICAL success in disciplined analysis, risk management, and strategic decision-making, maximizing profit potential with calculated moves",
    author: "Sahar Abd Alrahem Abd Elghaffar",
    authorPhoto:
      "/st/media/pim/media/user_photo/be/be4/be45c5e4b720bdf2942b6cadbe5772cb_fd6f8120565b4fef80a314c0c3d9d2f4.jpg",
  },
  {
    name: "new strategy name",
    account: 11783330,
    description: "new description",
    author: "Roland Clark",
    authorPhoto:
      "/st/media/pim/media/user_photo/21/214/21430f1dd19c446aa43a68248a183005_a9026f9111854477ab86f7d73d85b986_LjPhCwk.jpg",
  },
  {
    name: "TERMINATOR",
    account: 11783511,
    description:
      "TERMINATOR EA   is the simulation of human intelligence processes by machines, especially computer systems.So we get good profit from this system.",
    author: "SAHAR ABDELRAHIM",
    authorPhoto:
      "/st/media/pim/media/user_photo/7e/7ea/7ea028f579200bc3b38be188d7ee270d_dae72a11e7bd4173a67a6c3ad0768b74.jpg",
  },
  {
    name: "All In One Trade",
    account: 11783676,
    description:
      "We trade every pair that matches our trading system. Look for a good opportunity by the 1st EA and place an order by the 2nd EA or myself and MM.",
    author: "Chotiwit Aiem-aksorn",
    authorPhoto:
      "/st/media/user_photo/af/afb/afbf1b1cd8a8e0deb50681b09557a2ec_93314de12e3b4f308db7c1f19f31f46b.jpg",
  },
  {
    name: "Best profit",
    account: 11783814,
    description:
      "Robot trading price action system.\nBest profit long term , if profit >10% stop trading in month.",
    author: "Trinh Trần Thị Tú",
    authorPhoto:
      "/st/media/pim/media/user_photo/ad/adf/adf6a9b2342815af6ee6365b32d7503b_75af9e37763c4d538c021d6fe77e501f.jpg",
  },
  {
    name: "Vip Trade1986",
    account: 11785560,
    description:
      "Attract more investors by adding an exciting description of your strategy (optional). Max. 150 characters",
    author: "MD SALIM",
    authorPhoto:
      "/st/media/user_photo/65/651/6514ad7057d9f741156f09c81f30156d_915f490623244dafaa66a666fa961ccd.jpg",
  },
  {
    name: "XXX FOREX TRADING",
    account: 11786584,
    description: "XXX FOREX",
    author: "HUỲNH PHẠM PHƯỚC THIỆN",
    authorPhoto:
      "/st/media/user_photo/7a/7a9/7a97e75848b86fc5984ad6406d8593bc_fcf7668b29fc40baab87a3f39c905b03.jpg",
  },
  {
    name: "thinhvuong2026",
    account: 11792473,
    description:
      "Vào lệnh kỷ luật, quản lý vốn an toàn mới đi xa và lâu dài. Chiến lược ở tài khoản này là hold vàng, mục tiêu lợi nhuận 10-20%/tháng là an toàn.",
    author: "huy đỗ quốc",
    authorPhoto:
      "/st/media/user_photo/f6/f6b/f6bcd10df7a3c00eb128322789f744f3_79889831fa294eb39f769c6eaa023031.png",
  },
  {
    name: "Small win trade win",
    account: 11792548,
    description: "Small win profits will give us the opportunity to win trades",
    author: "Kwanchai Ruangkarin",
    authorPhoto:
      "/st/media/user_photo/c0/c04/c04c84938d909c9972f3930119844603_e50a32233bb94106b8ef73af4ff254af.jpg",
  },
  {
    name: "FX7 IronShield",
    account: 11792704,
    description: "Expected profit of 3% to 6% per month.",
    author: "Julio Cesar Schlickmann",
    authorPhoto:
      "/st/media/pim/media/user_photo/87/876/87627b4b4b7044a16a6b8c8ab77f602c_ce6de265019a4eb2bf2b7444b7b67a97.jpg",
  },
  {
    name: "Gold 888",
    account: 11793479,
    description:
      "Only entry on safe position pullback strategy \nmonthly target 10%-20%",
    author: "HENDRY",
    authorPhoto:
      "/st/media/user_photo/a3/a32/a3208eb6583e3bb220bb1e4f1e111834_ed08e580204f4beca79e2e35a27ceb91.JPG",
  },
  {
    name: "Profit Consistantly",
    account: 11794421,
    description: "We generate small but consistant profit",
    author: "Muhammad Zeeshan",
    authorPhoto:
      "/st/media/user_photo/af/af4/af4fdef5dfd5f570c9eb13dc8efcd9e1_f54a82211fc34a3b975f4e5c7c4fa292.png",
  },
  {
    name: "Euro Miner Manager",
    account: 11794613,
    description:
      "Auto Trade using Swing Strategy, Hedging, and Scalping.. up to 150% Yearly Growth",
    author: "Willy Wijaya",
    authorPhoto:
      "/st/media/user_photo/ac/ac0/ac04ea06b97fcaa297f755183462b574_50caceb1d69b4a37aeefc5112263b15a.jpg",
  },
  {
    name: "NVIEA_XAUGU",
    account: 11795356,
    description:
      "Target 5-10%/ month.\nDrawdown~30%.\nTelegram : https://t.me/hovanthuc",
    author: "VĂN THỰC HỒ",
    authorPhoto:
      "/st/media/user_photo/9e/9e6/9e61500d11c6749cafb330684affbf5b_ddc9bea2eefa419bbe008b56b217f6bd.jpg",
  },
  {
    name: "daily profit",
    account: 11796119,
    description:
      "Scalping and take 2.5 pips profit each time, and put buystop/ sellstop to cover minimum loss, try to cut all position with profit daily",
    author: "CHERY",
    authorPhoto:
      "/st/media/user_photo/64/647/647d7a5c8a36c7c9721ce1ccbc77f135_1fbf7b85fd2b4c98adf46aa1dddfd69b.jpg",
  },
  {
    name: "GIAPHAT No6",
    account: 11798337,
    description:
      "Semi-Automatic Trading\nBacktest 22 years of success\nThe strict risk management system of large funds",
    author: "Phạm Thái Doãn",
    authorPhoto:
      "/st/media/user_photo/70/701/7016095d7db40714feb6bd9a47943110_51c947ac19a34be6bf7f9572f4f88f98.jpg",
  },
  {
    name: "GOLDM1-TUYEN Đ_T_T",
    account: 11798922,
    description: "Theo phương pháp Gold M1",
    author: "Duc Tuyen Tran",
    authorPhoto:
      "/st/media/user_photo/f5/f5e/f5e3ff15e23461093f8622f588b131af_ce0c64daff0f4933b6502e593ade9f11.jpeg",
  },
  {
    name: "Kintamanian",
    account: 11800005,
    description:
      "This is my retirement account. \nIt isn't a sprint,, it is a marathon. \nTrading System With TP and SL.",
    author: "Ida Bagus Githa Dyatmika",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f5f/f5fb39071fb067111233b813ccf7ad16_79fd71b96a8b4033a14f31f444bbcf2a.jpg",
  },
  {
    name: "Spiderman XV",
    account: 11800504,
    description:
      "Xauusd scalping trading profit 15-30% /month \n-EA Expert advisor swing trade\n-Take profit every day\n-Low risk high return.\n-Warranty back test 10 year",
    author: "MR SANKOM KLONGDEE",
    authorPhoto:
      "/st/media/user_photo/7b/7bd/7bd3292b196ccf1be43375f0d7926550_7d58c16323294fde98d3bc12b254d397.jpg",
  },
  {
    name: "Daily Base One",
    account: 11801181,
    description:
      "Trading with Low Risk Strategy, with Minor Pair + EURUSD with fix SL. you can copy this Strategy from $10 only~ Thank you",
    author: "Fernando Theo Darmawan",
    authorPhoto:
      "/st/media/user_photo/52/52e/52e7db1f41ecbcf0b8daae5789f97801_f900fe4462364a8880843174bfbb3886.jpg",
  },
  {
    name: "noik pande ct 1",
    account: 11801512,
    description: "Ct1",
    author: "NI MARYANI",
    authorPhoto: null,
  },
  {
    name: "RK Forex Trader",
    account: 11805300,
    description: "Grow your equity with stable profits",
    author: "Raj Kumar",
    authorPhoto:
      "/st/media/pim/media/user_photo/9b/9bc/9bc50e9199f2a2095aacae377bb2e052_ef0d16ac92e441359d88c3c3f87d5236.png",
  },
  {
    name: "SwingTrade",
    account: 11805791,
    description: "Swing trade only",
    author: "MR SUKIT VORANUCH",
    authorPhoto:
      "/st/media/user_photo/d3/d3c/d3c9ebf5d93d4bd12d4b764b4b4231e0_9721236e2de04a82ba1485a6140fb304.jpg",
  },
  {
    name: "Trading by Guessing",
    account: 11806449,
    description: "Guess to trade,gogogo..",
    author: "良东 杜",
    authorPhoto: null,
  },
  {
    name: "The Eyes of Eagle UC",
    account: 11807034,
    description:
      "Hedging 📈📉✅\nBACKTESTS 2020 - Current Gain : +800% 📊\n\n📣Follow Me : https://t.me/EAGLEEYETH\n📣 https://beacons.ai/eagleeye_th",
    author: "wiwat mongkuntod",
    authorPhoto:
      "/st/media/user_photo/2c/2c5/2c5e7b4d64fb5869e6aee33f91bf3109_9bde3cdcf5d94cc7b1e6e60ab87fa26c.png",
  },
  {
    name: "32_s680_sig1_7591",
    account: 11807591,
    description:
      "We use fully auto EA with smart grid and follow trend to trade some currencies.",
    author: "TẤN PHẠM VĂN",
    authorPhoto:
      "/st/media/user_photo/d8/d87/d874e7c270df51115765d000c3900cd8_ca6f74fdc87e44de92130b8c0cf07ced.jpg",
  },
  {
    name: "Make money every day",
    account: 11808125,
    description: "Profit 1-3% every day",
    author: "MR MANOCH THONGKAW",
    authorPhoto:
      "/st/media/user_photo/39/39b/39b3d1907546378f03b2643266961b08_c52a6644245a4e0a9f0643c0673dcf6e.jpg",
  },
  {
    name: "HighRiskHighreturn",
    account: 11810005,
    description:
      "this is high risk trade but sametime professinol trade by robot.who want quik money can follow me.",
    author: "วรรณมาศ เหลืองอ่อน",
    authorPhoto:
      "/st/media/user_photo/fd/fda/fda6f89e7a09b60c52a611ba96aef72b_df28220a88a741dea140e388f515494c.jpg",
  },
  {
    name: "FOREX KILLER",
    account: 11810714,
    description:
      "Moderate Risk High Gain\nWe Only Trade When The Chances Of Win Is 90%\nSECOND ACCOUNT FROM FOREX KILLER (Full Fund)",
    author: "DENNIS WIJAYA",
    authorPhoto:
      "/st/media/user_photo/3b/3ba/3ba12b5c427c986fa98100a8d106efda_6e14da0f2d124ad7ab377808f14fed9c.png",
  },
  {
    name: "PullenBack Hard Mode",
    account: 11812330,
    description:
      "Target 5-15% per month, drawdown so far around 5-25% per trade. Maybe someday reach 30-40%. Holding time more than 1 day. Use your funds wisely.",
    author: "SHOFFAN HIDAYAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/68/685/6859e3fdd3c644e8123d875fc36eaee5_e61396fe83ac4130b534fe94cf060117_mWuAweE.png",
  },
  {
    name: "Easy Trade",
    account: 11814219,
    description: "Trade easy but get 50-300%/Month",
    author: "SUPHANAT BURANARUENGSAK",
    authorPhoto:
      "/st/media/user_photo/24/24d/24dd8dbd266c0d932fd03a72aa222ba7_32d191a307ff4836956d3f379be367ac.jpg",
  },
  {
    name: "5 a 10 por cento",
    account: 11815000,
    description:
      "Invista e receba de 5% a 10% ao mês.\n\n‎Grupo do WhatsApp: (55) 65 999747876 \nhttps://chat.whatsapp.com/IFjWLG9B28cFEk7YBcaUrw",
    author: "Sergio Alves Padilha Ribeiro",
    authorPhoto:
      "/st/media/user_photo/20/20f/20fc06e55f9011339a9159d9576ef1a6_b1a7950d62f14007824c32bb01e5f452.jpg",
  },
  {
    name: "Santaganadora",
    account: 11815010,
    description:
      "Estrategia desarrollada con muchos años de análisis del mercado de divisas perfectamente seleccionadas.",
    author: "CRISTIAN HERNAN SANTAFE MONTES",
    authorPhoto:
      "/st/media/user_photo/80/809/8090091403643d420a5f07c5be6f1928_1c272d935fa443a89d63ba064e4e07b4.jpg",
  },
  {
    name: "Jupiter FX",
    account: 11816102,
    description: "Price Action",
    author: "FELIX ANDRIANTO",
    authorPhoto:
      "/st/media/pim/media/user_photo/e3/e3d/e3dd2ef4e33b04e5895a328fb48364cd_66bba2e510c748f2a5cfaf2e7221d804_ygPJYu2.png",
  },
  {
    name: "Dollar Hunter",
    account: 11816832,
    description:
      "Patience & consistency are the key to success in forex industry\n\nInvestor must be patience for the better result\n\nLets growth together 🤑🤑🤑",
    author: "Elisa Gotami",
    authorPhoto:
      "/st/media/pim/media/user_photo/72/72a/72a668c9041b94fcb692be8bb0ab6c45_2aeae803d3424bd08b71fbd3fb560ba5.jpg",
  },
  {
    name: "EAGLE_VIE02",
    account: 11818626,
    description: "Take profit 10-15%/ month.",
    author: "Hạnh Nguyễn Thị",
    authorPhoto:
      "/st/media/user_photo/a9/a90/a90a230fc04469a71bc49cd850392100_4c6eef6cf58349bc9e7843e1c7e33868_wKOrKLs.png",
  },
  {
    name: "GIAPHAT No9",
    account: 11819126,
    description: "At Compound Interest we trust.",
    author: "Phạm Thái Doãn",
    authorPhoto:
      "/st/media/user_photo/70/701/7016095d7db40714feb6bd9a47943110_51c947ac19a34be6bf7f9572f4f88f98.jpg",
  },
  {
    name: "thinhvuong2026pro",
    account: 11819418,
    description:
      "Vào lệnh kỷ luật, quản lý vốn an toàn mới đi xa và lâu dài. Chiến lược ở tài khoản này là hold cặp tiền, mục tiêu lợi nhuận 10-20%/tháng là an toàn.",
    author: "huy đỗ quốc",
    authorPhoto:
      "/st/media/user_photo/f6/f6b/f6bcd10df7a3c00eb128322789f744f3_79889831fa294eb39f769c6eaa023031.png",
  },
  {
    name: "Luxfami668",
    account: 11820140,
    description: "Scalping",
    author: "Thi Binh Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/608/60868b76531aed696ccd2d00d37ed378_fbcc176f7f3e4b5384e1988822807e08.jpeg",
  },
  {
    name: "An Toan Tai Khoan",
    account: 11820660,
    description:
      "Cùng nhà đầu tư phát triển và an toàn tài khoản. Mục tiêu 5-10% lợi nhuận/ tháng",
    author: "Chiến Lê Văn",
    authorPhoto:
      "/st/media/pim/media/user_photo/09/097/0974a00f78eccc052bffcec41dc1096e_b7005d25651d4cafa30002b8e5074968.jpeg",
  },
  {
    name: "Gold HRX Master",
    account: 11824395,
    description:
      "Xauusd scalping trading profit 15-30% /month \n-EA Expert advisor swing trade\n-Take profit every day\n-Low risk high return.\n-Warranty back test 10 year",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "vuongphan",
    account: 11825175,
    description:
      "Giao dịch vàng trong ngày, lợi nhuận ổn định. Tele t_me/vuongphan , zalo_me/g/rohknr112",
    author: "Vuong Phan Hong",
    authorPhoto:
      "/st/media/pim/media/user_photo/36/36e/36ef61a7c235a8231af2cbe367cd8785_65ec0dac187a4877a5fe1054ab191b42_tZl0F0E.png",
  },
  {
    name: "Deep Scalping",
    account: 11826338,
    description:
      "Targeted to 7-9% monthly return. Moderate risk in most of the cases. Investors should set 10% Stop Loss and update it regularly, as investment grows.",
    author: "Leonid Ustenko",
    authorPhoto:
      "/st/media/pim/media/user_photo/a2/a26/a266b83e30757f5bf3a36d4dda054931_83082473e3bc4ac08dc08dc2cadddf9f.png",
  },
  {
    name: "Zalo 0335364962",
    account: 11826385,
    description: "Zalo 0335364962",
    author: "Vui Tran Thi",
    authorPhoto: null,
  },
  {
    name: "LONG TERM",
    account: 11827485,
    description:
      "we are long term profit making stratgy.so dear invester keep in your mind long term profit.because we are secure your hard earning money.",
    author: "kailashben bihola",
    authorPhoto:
      "/st/media/pim/media/user_photo/15/15d/15d8def52b34def243e027604f4ee604_5eb4e7104fd749d8a9a156db4397f203.jpg",
  },
  {
    name: "Fazalrehmani",
    account: 11827583,
    description:
      "Little drops of water make a mighty oceans.Little grains of sand make earth little things make big thingd",
    author: "Muhammad Fazal Rehmani",
    authorPhoto:
      "/st/media/pim/media/user_photo/97/974/974ccb2de2dfab978a0e952e7d8a44e0_efe29665e0284d3a854a7e6fc50f65fa.jpg",
  },
  {
    name: "tuanvietnam92",
    account: 11828012,
    description:
      "I am master in Viet Nam with 7 year experiment trading FOREX.\nZalo 093.678.1699",
    author: "Tuấn Lê Anh",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b97/b974229810c93a6ec7aaf546ca0628c9_3648a3f6255840d79b32af41ba194499.jpg",
  },
  {
    name: "Groundswell",
    account: 11830590,
    description:
      "Waves originate in the deep sea, profits are derived from zero.",
    author: "DINH THU HOANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/30/305/3050009f82b35fd8359b4cc60f66b5a5_02b2ad45be214f1e800fc858583c7a46.jpeg",
  },
  {
    name: "Amit Veerbhan",
    account: 11832414,
    description: "Only Money",
    author: "SINGH ASAWAR",
    authorPhoto: null,
  },
  {
    name: "Gold Swing Trade - L",
    account: 11833995,
    description: "Swing Trade target 3-5% / Month\nFree Commission for IB",
    author: "SARATIT ONPRAPAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/4a/4a5/4a5ea8c502d31cdd52542354f7d1f785_7a3e41d25e584d7bad35662b9442fa4b.jpg",
  },
  {
    name: "Money Printing Robot",
    account: 11834331,
    description:
      "Secondary signals of Gold Trading Robot. Tín hiệu phụ của Gold Trading Robot.",
    author: "Thanh Trà Trần",
    authorPhoto:
      "/st/media/pim/media/user_photo/4b/4bd/4bdb3ea3abf26b4919c5bf411d9f2fad_ef61d434640b4e478d10cabef9b10c81.jpg",
  },
  {
    name: "Dân Chơi Forex",
    account: 11835791,
    description: "Dân Chơi Forex",
    author: "QUANG QUAN DINH",
    authorPhoto:
      "/st/media/pim/media/user_photo/84/84f/84f342fff3a72903d9b4c6fd6153dfad_b9f837b5fcfe49de878a8b197ae8af25.jpeg",
  },
  {
    name: "Forex 1985 By Nicky",
    account: 11836175,
    description:
      "กลยุทธ์นี้เป็นการเทรดของ  EA ทุกออเดอร์\nขอให้นักลงทุนทุกคนช่วยยอมรับความเสี่ยงด้วยน่ะครับ",
    author: "MR SACHOKCHAI SUWANDACH",
    authorPhoto:
      "/st/media/pim/media/user_photo/77/774/774d4dd1ba5a1d46cfb1057ff78fdb99_24053cb640de479897693aa544376e41.jpg",
  },
  {
    name: "gold expert",
    account: 11836281,
    description:
      "0.01 lot , withdrawal capital after 1 month, no high risk, protect capital",
    author: "Muddaser Hasham",
    authorPhoto:
      "/st/media/user_photo/cc/cca/cca1ffd6bc4a695549f522fe7a793844_675b3f6e9b724add8d293f2424dd2507.jpg",
  },
  {
    name: "HFX Quant GoldBTC",
    account: 11836873,
    description: "100% Robot trade\nGold and BTC only",
    author: "Chinawut Wanthong",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/45a/45ac0c361927dba9a1816ed63d834009_87c4768567d24be7bd0a5e28b972ae6a.jpg",
  },
  {
    name: "XAUSD gold trading",
    account: 11837684,
    description: "Welcome to gold trading",
    author: "MUTHUKRISHNAN PALAVESAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/625/62555f917e2d8bc80faaf4409bed222e_ffaa2ff69f7f4caf81a5c59d4da571a7.PNG",
  },
  {
    name: "Gold Sniper ทองคำ",
    account: 11838045,
    description:
      "VERY LOW RISK STRATEGY\n-Technical analysis \n-MM : Money Management\n-Make profit by swing trade.\n-Profit target is 5%per month,40%per year\n-พอตไม่แตก",
    author: "Parichat Nissayan",
    authorPhoto:
      "/st/media/pim/media/user_photo/cf/cf4/cf48b5ddde3934b49a5ec972694ac7cb_08079340a42044569e2560122efdde72.jpg",
  },
  {
    name: "Kimmi13688",
    account: 11838089,
    description: "AUDCAD/XAUUSD trading",
    author: "DAO NGAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/b6/b6f/b6f8873191a0d6b4725c2dc4a220c849_fde5da6b6fd34f5cad19bb90760b2145.jpeg",
  },
  {
    name: "Trade master",
    account: 11838691,
    description: "Simple profits making strategy",
    author: "Azaharuddin Mondal",
    authorPhoto:
      "/st/media/pim/media/user_photo/2c/2ca/2cad985bd187f34a12c7f7bd4a41c509_69a5bba60c914711a105677b8eaf0914.jpg",
  },
  {
    name: "Forex King",
    account: 11838761,
    description: "You won't consistenc Profit, then join me",
    author: "JYOTI PODDAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/3b/3bb/3bb27ddf1d90cf0e73434d63dfff75b7_a1f77b7461434e7eb4c6ef64c6a97a19.jpg",
  },
  {
    name: "Disciplines Routines",
    account: 11838966,
    description: "Discipline",
    author: "PHUC LE CONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/4d/4d7/4d71fae769cc34a67a4cdad7cfa5ee7a_edc4fec730f146f19376a16a7b2052a0.jpg",
  },
  {
    name: "SAFE TRADING",
    account: 11840109,
    description:
      "i have 12 years experience in forex trading Monthly Target is 50% to 100%\nI make my personal trading strategy \n SAFE TRADING with Safe Strategy ❤️❤️❤",
    author: "Arman  Mushtaq",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f87/f87f2cd70a09503181d0fe915d14b1de_709c5ad43a8d45749de5ed3d11e90d99.jpg",
  },
  {
    name: "JACKPOT KILLER",
    account: 11840755,
    description:
      "Second Account of Dollar Hunter (Fully Funded)\nReal Statistics !!\nTrades Wins 90% ++ \nTarget 100% / Month (More = Bonus)\nKeep Calm and Patience",
    author: "CHANDRA WIJAYA",
    authorPhoto:
      "/st/media/pim/media/user_photo/ca/cae/cae674c12004e6626ce6a43c0e32927b_9e8f184f4db94e3995e0cad2fca2727a_61Iy1Jp.jpeg",
  },
  {
    name: "Gold safety",
    account: 11841246,
    description:
      "Xauusd scalping trading profit 15-30% /month \n-EA Expert advisor swing trade\n-Take profit every day\n-Low risk high return.\n-Warranty back test 10 year",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "NHIMONHAN  - AU",
    account: 11841579,
    description: "Cùng nhau kiếm tiền",
    author: "Thi Thanh Hoa Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/36/369/369bb0d4ef668d7f9cb7d7ab1fd4f430_6ab6c0863ef04b8294201ffb02aacd21.jpeg",
  },
  {
    name: "Tn70012345",
    account: 11841677,
    description: "Chào mừng tất cả mọi người đến với mình nhé",
    author: "Thành Nguyễn 5",
    authorPhoto: null,
  },
  {
    name: "HOLY NEWS",
    account: 11841818,
    description:
      "A strategy trade using lot money management, Supply & Demand. Using Stop Loss (SL) & Take Profit (TP) . Happy Profit 💸",
    author: "MARTIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/e1/e16/e1634236df63037ed94b903e215fc014_ae62a36e041241bbb7e715a371167ec0.JPG",
  },
  {
    name: "Rocket Forex",
    account: 11841855,
    description: "Expected profit of 1% to 3% per month.",
    author: "Jadna Loch Schlickmann",
    authorPhoto:
      "/st/media/pim/media/user_photo/2b/2b5/2b55fa71162bc1c1fe85748c49286171_81ba89ba78fa4aea875d519e6ce51621.png",
  },
  {
    name: "Finolazytrader",
    account: 11842378,
    description: "We Help to change your lifestyle",
    author: "Palash Biswas",
    authorPhoto:
      "/st/media/pim/media/user_photo/8c/8c4/8c4cfa210dd6b407a658c02d02f2a5da_98990e16e3a14af992e3c6e35e7618db.jpg",
  },
  {
    name: "Level20230",
    account: 11842603,
    description: "跟踪策略",
    author: "金亮 唐",
    authorPhoto: null,
  },
  {
    name: "RTA_FX_Market",
    account: 11843175,
    description: "Journey to build up capital.",
    author: "Rana Tauheed  Asif",
    authorPhoto:
      "/st/media/pim/media/user_photo/77/77e/77ec346041c0d347b7f74d56ef377b18_bc70488114ef475bbeba312fc9518e7f.jpg",
  },
  {
    name: "GORD Master-BTC",
    account: 11843260,
    description: "Hedging strategy by EA (trading BTC only)",
    author: "Gord Ruksaphol",
    authorPhoto:
      "/st/media/pim/media/user_photo/3c/3cf/3cf7f0c530cfea8a715c3067796f55ab_1c2c996e95ea4d708bfc511d98803759.jpg",
  },
  {
    name: "Thu 12 Jan",
    account: 11843350,
    description: "Hi",
    author: "Nguyen Thi Lanh",
    authorPhoto:
      "/st/media/pim/media/user_photo/a3/a3b/a3b23ae1048c924fca110b33d2b9ce49_21d442098afd45cdac3824c1c2f8aabd.jpeg",
  },
  {
    name: "Forex Pro",
    account: 11843856,
    description:
      "Let’s increase our money easily, with smallest DD .\nOur priority is to safe our capital and invest it to get best profit with lowest risk .",
    author: "Mohamed Elhosseiny Elhosseiny",
    authorPhoto:
      "/st/media/pim/media/user_photo/e7/e73/e73bb12a2de1826333db0c7378318c1f_ee98a3bac300456fb0f542000a34e9e8.jpeg",
  },
  {
    name: "Spiderman VIP",
    account: 11844217,
    description: "Xauusd",
    author: "MR SANKOM KLONGDEE",
    authorPhoto:
      "/st/media/user_photo/7b/7bd/7bd3292b196ccf1be43375f0d7926550_7d58c16323294fde98d3bc12b254d397.jpg",
  },
  {
    name: "Gold Rush 88",
    account: 11847545,
    description: "เทรดแบบไม่เสี่ยง รอได้",
    author: "Thawatchai Khumklad",
    authorPhoto:
      "/st/media/pim/media/user_photo/63/63a/63a3ec41dc1c2f379d0146e5ec0b65d8_26070033c14c45c8b4ac9bd8021a33ed.jpg",
  },
  {
    name: "ネコネコトレードで勝つ",
    account: 11847846,
    description:
      "直近の高値更新（高ネコ）安値更新（安ネコ）のタイミングで順張り、または逆張りでエントリーするネコネコトレードで運用しています。通貨ペアはドル円（USDJPY）です。",
    author: "HIroaki Kaga",
    authorPhoto:
      "/st/media/pim/media/user_photo/b2/b25/b253ec3afb0b19b14ce9559407932550_474d3f799f3c4be89dfe5672e3ec466a.jpg",
  },
  {
    name: "Strong Turtle",
    account: 11849612,
    description: "Slowly Trade",
    author: "MR CHONPHOOM PHUINROS",
    authorPhoto:
      "/st/media/pim/media/user_photo/0c/0c1/0c12af0f108b980981b1970f1da4652f_a59036f125cc448894e357ab417f9e5e.jpg",
  },
  {
    name: "SONY Perfect Trading",
    account: 11851677,
    description:
      "SONY Perfect Trading System which will give you great satisfaction in long run. Visit : www.sonynetbusiness.net",
    author: "BASHIR AHMAD",
    authorPhoto:
      "/st/media/pim/media/user_photo/f1/f10/f10430fc487bb6ba8f75f43740b2a115_6a620b4c38f8457cb8015964c1ac64be.jpg",
  },
  {
    name: "Fast profit",
    account: 11851836,
    description: "Make fast profit",
    author: "Istihak  Mohammad",
    authorPhoto:
      "/st/media/pim/media/user_photo/7b/7b3/7b3c8de91188ea9b9235b2fc6553429c_7113665ead394a3dbc3dfad2fb571f68.jpg",
  },
  {
    name: "Smart Traders",
    account: 11852883,
    description: "Safe and Secure\nConfirmed Profits\nProfessional Approach",
    author: "Muhammad Iqbal Bashir",
    authorPhoto: null,
  },
  {
    name: "Gold safety 1",
    account: 11852895,
    description:
      "Xauusd scalping trading profit 15-50% /month \n-EA Expert advisor swing trade\n-Take profit every day\n-Low risk high return.\n-Warranty back test 10 year",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "SAXCOIN PROFIT",
    account: 11853330,
    description: "SAXCOIN PROFIT",
    author: "SAID ABD ELGHAFFAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/33/33c/33c6aaf9975b416db7e9c89fd28cf0ce_29ddb2fc5dd046c1964fb879f87b2265.png",
  },
  {
    name: "PRISMA INFINITY",
    account: 11853384,
    description: "MONEY NEVER SLEEP",
    author: "MUHAMAD HARYADI",
    authorPhoto:
      "/st/media/user_photo/c5/c53/c53390b36f87ae09783d508cf02d7cf3_fa9ec03d289541278e16861bd19dbbf9.jpeg",
  },
  {
    name: "Mercury Rising",
    account: 11854291,
    description: "TA Based Trading in XAU",
    author: "DANIEL KAMTO",
    authorPhoto:
      "/st/media/pim/media/user_photo/1d/1da/1da8eb0a4484ce8817fa1144a0d4d79a_de77a1fa0d95460183dd4b7a9e049a0d.jpg",
  },
  {
    name: "Mua tích lũy DCA",
    account: 11854319,
    description:
      "Chiến lược mua tích lũy dài hạn. Tỷ suất lợi nhuận 4% / tháng. An toàn hiệu quả.",
    author: "Đức Lợi",
    authorPhoto:
      "/st/media/pim/media/user_photo/c7/c73/c732505eb80e9ddd7a70995c60fa2198_5335a2d3d37b471e876ea5d5abaff304.jpg",
  },
  {
    name: "BEST EA PORTFOLIO",
    account: 11854419,
    description:
      "I have purchased more than 100 EAs and have carefully selected the best EAs from them to trade this strategy.",
    author: "Tsuneaki Hasekura",
    authorPhoto:
      "/st/media/user_photo/60/60a/60a7165aa1321221a257a8b0f53df662_669d7a6b490c4ac8ba96de91c0f356ef.jpg",
  },
  {
    name: "AssuredEarnings",
    account: 11855379,
    description:
      "With HIGH GRADE EXPERIENCE of last 30 years, ZERO RISK TOLERANCE POLICY, we group of Analytics will help YOU generate MORE MONEY from your HARD EARNED",
    author: "Baljit Kaur",
    authorPhoto:
      "/st/media/pim/media/user_photo/9c/9c3/9c36c87ee14b00f85f4133addc5fccb6_f97f647590e74438a638085f49991db5.jpg",
  },
  {
    name: "GOLD  SCALPING",
    account: 11855581,
    description: "TANADOL_2526",
    author: "MR SUPPANAT PAKYANUWAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/f2/f2e/f2e7d32caacce2c9166c173f683f8458_8393ea8d6ddb483499593dabfd293f24.jpg",
  },
  {
    name: "DEFI EXPERIENCE",
    account: 11855591,
    description:
      "Nuestro sistema esta creado para que ganes dinero de manera consistente, Estamos comprometidos con nuestros usuarios para que ganen a largo plazo.",
    author: "Capital Performance SAS Entity",
    authorPhoto:
      "/st/media/pim/media/user_photo/b6/b6c/b6c9821a66f72bec907a1561ebcf5acf_c05400e13c1c4b24ab208f09e4470011.png",
  },
  {
    name: "2X in 4 Months",
    account: 11856286,
    description: "Double your capital in 4 months with low risk",
    author: "Venkatarajendra Dandu",
    authorPhoto: null,
  },
  {
    name: "FOREX IN HAND 3",
    account: 11856795,
    description:
      "FOREX IN HAND we trade not like other trader we have very safe strategy",
    author: "ELDEEN ELDEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/603/60360f065d7cb7f6622240dd1855a05d_d915f6c58f5d49728e53aa36f93c9922.jpg",
  },
  {
    name: "FOREX IN HAND 05",
    account: 11856834,
    description:
      "FOREX IN HAND we trade not like other trader we have very safe strategy",
    author: "ELDEEN ELDEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/603/60360f065d7cb7f6622240dd1855a05d_d915f6c58f5d49728e53aa36f93c9922.jpg",
  },
  {
    name: "FOREX TRADE 03",
    account: 11857281,
    description:
      "FOREX TRADE is the right way to make good profit with very low risk its safe system with human control all time . WHATSAPP GROUP http://chat.5kc.com",
    author: "ABD ALRAHEEM ABD ALRAHEEM",
    authorPhoto:
      "/st/media/user_photo/41/415/415936b9f32d4c3029ad1e5fc12b3397_48f8bd48411a4a4ba017c298fc2f7ee6.jpg",
  },
  {
    name: "GORDTraderPlus",
    account: 11861747,
    description: "Hedging strategy  (trading XAUUSD only)",
    author: "Gord Ruksaphol",
    authorPhoto:
      "/st/media/pim/media/user_photo/3c/3cf/3cf7f0c530cfea8a715c3067796f55ab_1c2c996e95ea4d708bfc511d98803759.jpg",
  },
  {
    name: "Amphibious Robot II",
    account: 11862327,
    description: "Swing Trade",
    author: "Nawee Tungpaisannugul",
    authorPhoto:
      "/st/media/pim/media/user_photo/d2/d21/d215da1202c58dfb220f23d1732b43cc_a112cbf43d954fafa2db6ffac954c098.jpg",
  },
  {
    name: "Maxtrader500",
    account: 11862472,
    description:
      "My strategy based on price action. Trading is a profession of skills and patience. But we know investment are subject to market risk",
    author: "Kuminder Singh",
    authorPhoto: null,
  },
  {
    name: "EURUSDGOLD",
    account: 11865235,
    description: "EURUSDGOLD",
    author: "Charalampos Kokkinis",
    authorPhoto:
      "/st/media/pim/media/user_photo/48/48c/48c72a423eb485dd4dd079ae44fa240f_71c9b56e5da64b7aabb4fbcc7f7d7e97.jpg",
  },
  {
    name: "Forex Trading",
    account: 11865284,
    description: "Forex Trading and metal trading",
    author: "MUTHUKRISHNAN PALAVESAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/625/62555f917e2d8bc80faaf4409bed222e_ffaa2ff69f7f4caf81a5c59d4da571a7.PNG",
  },
  {
    name: "RESURRECTION TRADERS",
    account: 11866733,
    description:
      "I have a special strategy and it will change every 15 days. Whoever want to copy me please contact me first at : https://wa.me/qr/PHNGM5ZBCXP3H1",
    author: "KAKI  S P S REDDY",
    authorPhoto:
      "/st/media/pim/media/user_photo/82/828/82864bfeba117f4bfbad412544de8a48_8bc5d466308644caafdba83b0862dd3e.jpg",
  },
  {
    name: "ProfitVaultFX",
    account: 11867131,
    description:
      "ProfitVaultFX's results are determined by a combination of predictive analytics, algo trading, machine learning, and 24 indicator formulas.",
    author: "Dilip Bm",
    authorPhoto:
      "/st/media/pim/media/user_photo/42/420/420e0faeb5d676ae5cbd4a6caec8d2ed_f83e73b6ef37489a86b4fc89046be716.png",
  },
  {
    name: "Stable System",
    account: 11867236,
    description: "Trend Following",
    author: "Catherine Flores",
    authorPhoto:
      "/st/media/pim/media/user_photo/d2/d2f/d2f2da0ead656c47b2ce75976f0d78d3_77ba8029a147490187c2b01d70ffbed2.png",
  },
  {
    name: "Gold Master FA1",
    account: 11867865,
    description:
      "Xauusd scalping trading profit 15-50% /month \n-EA Expert advisor swing trade\n-Take profit every day\n-Low risk high return.\n-Warranty back test 10 year",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "Gold 5 EA  Master",
    account: 11867952,
    description:
      "Xauusd scalping trading profit 7-15% /month \n-EA Expert advisor swing trade\n-Take profit every day\n-Low risk high return.\n-Warranty back test 10 year",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "Safety Money",
    account: 11867996,
    description: "Slowly but Safety",
    author: "Tien Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/05/059/05957fd7f629d5bb8e1f37c1aeaf0ac8_68e0e89a1bbc483e98bfc7e5788c26fc.jpg",
  },
  {
    name: "Phương Gold",
    account: 11868454,
    description:
      "Xauusd scalping trading profit 20-40%/month\n- EA Expert advisor swing trade\n- Take profit every day\n- Low risk high return\n- Warranty back test 8years",
    author: "phuong nguyen thi",
    authorPhoto:
      "/st/media/pim/media/user_photo/41/416/4168bef503f40264fd91faf72e2c17ba_a9054ba430b346c5b0ef1f1d148acddd.jpg",
  },
  {
    name: "Total profit",
    account: 11868487,
    description: "100% profit no loss",
    author: "Shabnam  bano",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/69f/69f26ae62838b596f58966adbea99b54_1cadc3ae4782480395b9ad2872f302cd.jpg",
  },
  {
    name: "Art forextrader",
    account: 11870270,
    description:
      "slow but sure  swing trader forex \nLow risk  \nช้า เรื่อยๆ ชิวๆครับ",
    author: "กฤตธรรม โพธิสุนทร",
    authorPhoto:
      "/st/media/pim/media/user_photo/65/65c/65cbb339dcd01d488d318c551b8f77e6_d734f11afd0c4045b9d1f547c31c6e63_NmcWyst.png",
  },
  {
    name: "Moneymaker",
    account: 11871203,
    description:
      "Vamos trabalhar com XAUUSD USDJPY EURUSD GBPUSD USDCHF  BTCUSD",
    author: "Alexsandro Pereira De Almeida Kimura",
    authorPhoto:
      "/st/media/pim/media/user_photo/23/23d/23d74c5ae1aebe63f35ab005aebf22e5_8db138f385bf424e83c21d1b915d4c63.png",
  },
  {
    name: "Forex Market",
    account: 11871518,
    description: "multipliers and reinforcement\nhttps://t.me/Forexmarket13",
    author: "wafaa gamal hassan",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/45f/45f27c6216cc0e7d293b0abaacd1d90b_46a6c582a6414948ab271aedbbd0f68c_7ObJjNZ.jpeg",
  },
  {
    name: "FOREX WIN XAUUSD",
    account: 11872121,
    description: "Profits will come to everyone again. Wish everyone happy.",
    author: "Bích Thuận Nguyễn Thị",
    authorPhoto:
      "/st/media/pim/media/user_photo/b0/b00/b001d8640f75695639105fc29b78ca89_ef1ef36f975d4f36bfdb2e2eb8b4e7c3.jpg",
  },
  {
    name: "Forex King",
    account: 11872762,
    description: "The best earning strategy",
    author: "Huu Tai Huynh",
    authorPhoto:
      "/st/media/user_photo/0c/0c8/0c886c5994610510d66844838625e7b0_fdef3ba5b5b043188cdbbc113e42c8c5.jpeg",
  },
  {
    name: "Gold Hunter",
    account: 11873278,
    description: "low risk entry ,",
    author: "Vijay Robert",
    authorPhoto: null,
  },
  {
    name: "Gold-strategy",
    account: 11873923,
    description:
      "We will be only focusing mainly on commodities and a few currencies with a medium risk.",
    author: "Sandeep J",
    authorPhoto:
      "/st/media/pim/media/user_photo/92/929/929f37e3bcbf28a776d4e6366c894741_6f08b639407a47ac84f219a81c19da26.jpg",
  },
  {
    name: "Siam Marathon",
    account: 11875034,
    description: "สร้างผลตอบแทนอย่างยั่งยืน",
    author: "MR SAPOB WILAINUWAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/fd/fdc/fdc9e56e72b56a0a5badb4a35d0ce935_c09841cfad2642b386a3e9c5e84aea7a.jpg",
  },
  {
    name: "Gold TRANG 2 NTQ",
    account: 11875742,
    description:
      "Monthly target is around 20-30% Take profit every day Low risk high return",
    author: "trang nguyen thi quynh",
    authorPhoto:
      "/st/media/user_photo/ed/eda/eda92915b34a85bdc7d45650753a96a6_2e2c4c6362104561ac040044ed3f9030.jpg",
  },
  {
    name: "AOTW Strategy",
    account: 11875788,
    description:
      "Risk control is always the first priority of my trading system, yield rate is the second.About 130 trades per month and used margin is 20% of balance.",
    author: "逸飞 陈",
    authorPhoto:
      "/st/media/pim/media/user_photo/e6/e67/e676e2342b2ba224b7735220505f52c7_2fff3ba6d06040008b090a04b7d61822.jpg",
  },
  {
    name: "Turtle Trade",
    account: 11876554,
    description: "Slow But Safe",
    author: "Ongah Erwin Tan",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c26/c264969ebcaa7a40bcfef0452bc0ed01_20780200f5fc4de69bacb0be02873b8b.png",
  },
  {
    name: "DeltaFund_YM_Sst",
    account: 11877536,
    description:
      "Rule Based from Overbought/sold + money management + risk protection with max trades and trades on 12 Pair (EUR,GBP,JPY,USD,AUD,NZD)",
    author: "setyana putra",
    authorPhoto:
      "/st/media/pim/media/user_photo/de/de5/de5e60262deaf9344d332c1fbc6f8ce4_5e5bd8bd074e4658b313a742c0660706.png",
  },
  {
    name: "SWING SEESAW",
    account: 11878062,
    description:
      "กลยุทธ EA เข้าเทรดทั้งตามเทรนและสวนเทรน กำหนดการเข้าออร์เดอตาม Price Action ร่วมกับ Indicator",
    author: "MR PATHARAPHON PHAHONGSA",
    authorPhoto:
      "/st/media/pim/media/user_photo/06/060/060c0eb323d820b7b3721bf9cd48da88_bbb70ea85f2b49c1831d1eb1c73406a9.jpg",
  },
  {
    name: "Gold growth RX",
    account: 11878291,
    description:
      "Xauusd scalping trading profit 15-30% /month \n-EA Expert advisor swing trade\n-Take profit every day\n-Low risk high return.\n-Warranty back test 10 year",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "WolfTeam V2 - MedR",
    account: 11878927,
    description:
      "Smart Finance is when you are sleeping money still work for you.\nCapital management to maintain stable Profit is our goal.\nTarget is 10%-15% monthly.",
    author: "TRỊNH PHÚ",
    authorPhoto:
      "/st/media/pim/media/user_photo/d7/d72/d72a067afc2157b61b8d3fccd818ceac_941964dd5e974465a24b3e1dbaa2897d.png",
  },
  {
    name: "Robot Trade",
    account: 11879988,
    description: "Robot Trade",
    author: "MR SAKSET SRISOMSONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/ff/ff5/ff5709af91fe062ca083516247cbc30d_cc00e1f70f7c49ceb5c38da32746e807.jpg",
  },
  {
    name: "Lucky Euro",
    account: 11880214,
    description: "EA !! EUR 100% \nEA start 1 April 2024",
    author: "MISS ANISARA INJUN",
    authorPhoto:
      "/st/media/pim/media/user_photo/83/836/83608fc7d2772d6af86481483bddb64e_028d0f3f369a4c08b5e2ad169dca3548.jpeg",
  },
  {
    name: "Hedging strategy",
    account: 11880586,
    description: "Hedging strategy",
    author: "Yuthana Klongklaew",
    authorPhoto:
      "/st/media/user_photo/81/81a/81a3149f29ded109a4ade6f8327587c1_c509392b331a411a8fdba04dfaf6cbe5.png",
  },
  {
    name: "Number 1",
    account: 11881335,
    description:
      "I use Martingale  Size not Martingale  strategy and Hedge Together\nOpen account here and take advantage \nhttps://www.goldenrebate.com/largestbroker",
    author: "Maryam Gholamhosaini",
    authorPhoto:
      "/st/media/user_photo/b7/b79/b793593f7fc58fc070c81f6f1a9b37b3_9c12fc408b4b49a58bfa55afb9fea4ad.PNG",
  },
  {
    name: "Profit Hero",
    account: 11882167,
    description:
      "We trade only EURUSD without anyrisk to principal and we work on the worlds best strategy and provide you 15-20% income monthly on your principal",
    author: "Srinivas  Jayaramappa",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5a6/5a6e72d31c3a786f75854cb914145165_1992d43fc42a4814836f55b19c469867.png",
  },
  {
    name: "Smart capital 1",
    account: 11882468,
    description:
      "Day trade only, no averaging/martingle.\nOur priority is managing risk below 40%of equity\nTarget profit is 20-50%/month",
    author: "FUJIANTO TANJONO",
    authorPhoto:
      "/st/media/pim/media/user_photo/95/95b/95b47b844ef07e9fa7372a867c0b6440_ab49fbe6d960487ab5b2dfef274b80c8_AIsr6rK.jpg",
  },
  {
    name: "Forex king 01",
    account: 11882715,
    description: "well profitable stratagy",
    author: "Amzad Ali Khan",
    authorPhoto:
      "/st/media/pim/media/user_photo/e1/e15/e151bd0d8eef98d7142011aaecdf36ae_bc86970896ec45df9651f262ed28697d.jpg",
  },
  {
    name: "Gold safety 2",
    account: 11882948,
    description:
      "Xauusd scalping trading profit 15-30% /month \n-EA Expert advisor swing trade\n-Take profit every day\n-Low risk high return.\n-Warranty back test 10 year",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "Jernoob_Fram-1",
    account: 11883539,
    description: "Trade only 1 symblo",
    author: "MR RATTAWAT KOTCHALEE",
    authorPhoto:
      "/st/media/pim/media/user_photo/53/535/53538e946c2351f48677ed4e59d9f1b2_ef8dc8c00c5d4e51a5fa8174141a06b0.JPG",
  },
  {
    name: "MASTER NO 1",
    account: 11883761,
    description:
      "Use AI machine learning with a variety of trading strategies. Expect a return of 30% per year. At low to medium risk.\nFacebook: Deep Ocean AI",
    author: "Tanitas Choeithongsri",
    authorPhoto:
      "/st/media/pim/media/user_photo/41/41d/41d1e99108e5a3f04d05c3e51cc54abb_999ebb4afa6748e5a3fcb888362c6f44_CSJSNph.png",
  },
  {
    name: "DIZUPi Simple",
    account: 11885444,
    description: "DIZUPi Simple",
    author: "Điền Nguyễn Hải",
    authorPhoto:
      "/st/media/user_photo/4a/4a7/4a7879577b03e7d72a571aa96b9b0a0e_dd22c7c032d845668fc96febd37f9677.png",
  },
  {
    name: "FOREX CONSULTANCY",
    account: 11886419,
    description: "PLEASE VIEW MY TRADE THEN COPY PROFILE",
    author: "ASHOK KUMAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/12/122/1226e384d3b1663fdbd4692d0664a9d1_d3abcb907cd744789d6f9677ea915b24.jpg",
  },
  {
    name: "Ez Smart Idea",
    account: 11886512,
    description:
      "The EA works on Fibonacci levels. The levels are built automatically.",
    author: "MR KRAISIT CHOMPUNGAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/c9/c9c/c9c687b5c3fb357fd610bc79798b0e15_d89d7ab3514443ecba7e0d961e76bc4a.jpg",
  },
  {
    name: "Grid Grid GridMan",
    account: 11889333,
    description:
      "Many drops make a shower.\nIf the balance doubles, we plan to increase the commission by one level. Let's all get excited and have fun!",
    author: "KOJI OKUMURA",
    authorPhoto:
      "/st/media/pim/media/user_photo/19/198/198b59ae03e79de4e9b17e35873a8102_89d3ef36d9e3405bbafd302616dc8c6b.JPG",
  },
  {
    name: "investimento",
    account: 11889614,
    description:
      "¡Combinamos nuestra operativa manual y algorítmica, para traerte la mejor estrategia del mercado!",
    author: "Camilo Roncancio",
    authorPhoto:
      "/st/media/pim/media/user_photo/11/114/1140ab95b6f94b5b775ce8334cfe2075_85a9204479f049c480179d86b4d3624d.jpg",
  },
  {
    name: "9Pair-Grid",
    account: 11889670,
    description:
      "The pair I use are...EURUSD,GBPUSD,USDJPY,GBPCAD,GBPCHF,EURGBP,EURCHF,USDCAD,USDCHF",
    author: "Takashi Kimura",
    authorPhoto:
      "/st/media/pim/media/user_photo/e7/e7a/e7a5330109f059573b73176c7c7ccd1c_9ab6bb4732e54228a067116901825f96.png",
  },
  {
    name: "THE FLASH EA",
    account: 11889855,
    description:
      "Fully EA / Robot Trade\nLets Growth Together\nKeep Calm and Patience\n\nEverymonth equity will be reset to 4000 USD",
    author: "SURYADI",
    authorPhoto:
      "/st/media/pim/media/user_photo/46/461/461864c048ab8e4af8cd85c6ebe4bdce_5285773f2ffa42859010b81de0158aeb.jpg",
  },
  {
    name: "HS TraderVN",
    account: 11890571,
    description: "Đầu tư mạo hiểm",
    author: "Sơn Đoàn Xuân",
    authorPhoto:
      "/st/media/user_photo/40/40f/40fd120a5df0fdb4874bee38f118c91b_5376ff0dceb045969a3036cc50fde423.png",
  },
  {
    name: "Gold EA winrate FA1",
    account: 11890614,
    description:
      "Xauusd scalping trading profit 30-70% /month \n-EA Expert advisor swing trade\n-Take profit every day\n-Low risk high return.\n-Warranty back test 10 year",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "Bot CerbersiX",
    account: 11890620,
    description:
      "Giao dịch EUR/USD.\nPhương pháp giao dịch: tuần hoàn + lưới + hành động giá.\nLợi nhuận mục tiêu: 6%/tháng.\nĐiểm rủi ro thấp (<4/10). \nwww.cerbersi.com",
    author: "DUC THANH PHAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/25/25b/25bea7fa31ee0a71633a813b1dd2e73e_152418013e984547aee81e4a312c5aa7.png",
  },
  {
    name: "Minimal 270265",
    account: 11890643,
    description: "Trade Minimal style",
    author: "Sutja Dhavehutsadin na ayuthaya",
    authorPhoto:
      "/st/media/user_photo/30/30f/30f0fbb8e2ddc1940db6a25dda9b9f13_318e2017b2f7496589959b1f05bb5b2f.png",
  },
  {
    name: "GOD IS GREAT",
    account: 11891276,
    description: "No Over Trading No Risk Only Patience And take Profit",
    author: "Naresh Ravtole",
    authorPhoto:
      "/st/media/pim/media/user_photo/28/28a/28ab41909f23848e5e8f8ce3bd0fd3f6_af787a34b017401da84b7bd947db6b21.jpg",
  },
  {
    name: "Autobot_100",
    account: 11892068,
    description: "Giao dịch hoàn toàn bằng EA 100%",
    author: "Trung Nguyễn Đức Cao",
    authorPhoto: null,
  },
  {
    name: "Profit Wave",
    account: 11892123,
    description:
      "Success in swing trading requires a patient and disciplined approach. Unlike rapid-fire trading styles, swing trading is about playing the long game.",
    author: "Le Hoang Long",
    authorPhoto:
      "/st/media/pim/media/user_photo/f4/f47/f479694d30ee166fdf984906641c0aa0_5d14a5636df54c1381958de2836a5088.png",
  },
  {
    name: "Cakra_ Trader",
    account: 11892231,
    description:
      "Deposit 1.000$ # Leverage 1:500 # Risk Management 10%, Profit Potential 30 % # Trading Style : Scalping , Intraday , Swing # DICLAIMER ON",
    author: "mohammad  yahya",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e2a/e2abe4c457d56862c406ff2d566d1002_c893923391124aabb68ccf98ecfc5b7b.jpeg",
  },
  {
    name: "tahawur shikoh",
    account: 11893095,
    description: "Only gold",
    author: "tahawur shikoh",
    authorPhoto: null,
  },
  {
    name: "DRIVE WITH THE LINE",
    account: 11893300,
    description: "Patience & Discipline",
    author: "Oanh Doãn Thị",
    authorPhoto:
      "/st/media/user_photo/89/890/8904e27f7a856580c7801ac70fde8dc2_5a2c64c607b74480b34278cc94fe0073.jpg",
  },
  {
    name: "Golden Star EA",
    account: 11894134,
    description:
      "Xauusd scalping trading profit 15-30% /month \n-EA Expert advisor swing trade\n-Take profit every day\n-Low risk high return.",
    author: "Yonlada Thongdeesri",
    authorPhoto:
      "/st/media/pim/media/user_photo/04/046/0464188be9bc3d4a661d6eb19af354b2_528592b72b08497089cc764b7c3700b8.jpg",
  },
  {
    name: "Genius Trader",
    account: 11894639,
    description:
      "I'm a full-time professional forex trader and I have ten years of forex trading experience. minimum deposit of 100 $. monthly profit target 10 to 20%+",
    author: "MD MIJANUR RAHAMAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/2b/2b1/2b16ae55f1b716965221dc5cd14ec6af_37ff4f89619a4f72b2ecd2a6d9a00727.jpg",
  },
  {
    name: "Raising Traders",
    account: 11894720,
    description: "Ve are not robo, ve are manual traders. Only for my team",
    author: "SUREDDI SANJEEV",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c66/c666c5712111605e4bb8527576ed1392_46caaf7694f9487d9e9a05acceb423f9.png",
  },
  {
    name: "L111111111",
    account: 11895109,
    description: "Bắt đầu giao dịch với 10usd.....kiên trì và bền bỉ...",
    author: "lien tran",
    authorPhoto:
      "/st/media/user_photo/d4/d43/d433034a867ce83d5cb7bfb028c48f3d_8af73fd6f0d644089d787a3942d2bf2b.jpg",
  },
  {
    name: "DOLLAR MAKER",
    account: 11896094,
    description: "MEDIUM RISK\nHIGH PROFIT\nTRADE WITH 100% RESPONSIBILITY",
    author: "STEVANNY",
    authorPhoto:
      "/st/media/pim/media/user_photo/de/de6/de6b574e6446d01f9a94c3d3e6b03225_9c791190a8a84f12bace26bb1abbc176.png",
  },
  {
    name: "SAFE TRADER M1",
    account: 11896168,
    description:
      "This system be safe for long-term investment that\ntrading with stoploss ,MM,no martingale,no hedging\n(passed backtesting with 10years TF-M1 data)",
    author: "AKBAR  HUSAIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/ac/ac2/ac281848d37cefee7b387627d231d308_51c57a8748f44c5dbca50fcbf6ce2038.jpg",
  },
  {
    name: "Forex Heist 2",
    account: 11898136,
    description: "Swing Trade",
    author: "Jeffry Wijaya",
    authorPhoto:
      "/st/media/user_photo/11/117/117c52c71c0f7f9f7177f6970832165b_20f233f471074ee6b313a1c5b76b0986.jpg",
  },
  {
    name: "Profit Infinity",
    account: 11898413,
    description: "YOU CAN SET YOUR OWN PROFITS.",
    author: "ANANDH PACKIRISAMY",
    authorPhoto:
      "/st/media/pim/media/user_photo/d8/d86/d863201ad9531be57a8d52225c501b21_709ccff357434e48a5f8ce63f13e1da7.jpg",
  },
  {
    name: "L1111111112",
    account: 11899487,
    description: "Start !",
    author: "lien tran",
    authorPhoto:
      "/st/media/user_photo/d4/d43/d433034a867ce83d5cb7bfb028c48f3d_8af73fd6f0d644089d787a3942d2bf2b.jpg",
  },
  {
    name: "JACKPOT HUNTER",
    account: 11899761,
    description:
      "The Very Best Traders Don’t Just Randomly Enter Trades.\nKeep calm,\nWe Only Trade Based On Our Plan.\nReal Statistics",
    author: "CHANDRA WIJAYA",
    authorPhoto:
      "/st/media/pim/media/user_photo/ca/cae/cae674c12004e6626ce6a43c0e32927b_9e8f184f4db94e3995e0cad2fca2727a_61Iy1Jp.jpeg",
  },
  {
    name: "Safe Robot",
    account: 11901852,
    description: "Safe Robot Trading",
    author: "Ongah Erwin Tan",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c26/c264969ebcaa7a40bcfef0452bc0ed01_20780200f5fc4de69bacb0be02873b8b.png",
  },
  {
    name: "Mr Forex Market",
    account: 11903106,
    description: "Enjoy Profit",
    author: "Thiyam Purnima",
    authorPhoto: null,
  },
  {
    name: "THESKY-90P",
    account: 11904381,
    description:
      "I AM A SWING TRADER & FOLLOW RISK MANAGEMENT WITH POSITION SIZING.WE ARE NOT CONTROLE MARKET VOLATILITY BUT I CONTROLE MY POSITION SIZE.",
    author: "PRADIP KUMAR MONDAL",
    authorPhoto:
      "/st/media/pim/media/user_photo/8d/8d9/8d9e3b14f1d243d7899660f3a344cb81_e5dacc5b13b84747af6617f9f66cf5ba.jpg",
  },
  {
    name: "The Zodiac Sign 3",
    account: 11904602,
    description: "So as not to lose",
    author: "Shigenori Yamagishi",
    authorPhoto:
      "/st/media/pim/media/user_photo/84/840/8402234b68abeaf7ce80e3d0d8df60b4_4b4a51a7aa0d42a584952138db9526d1.jpg",
  },
  {
    name: "VIP Beruang",
    account: 11905174,
    description: "Profit Profit Profit",
    author: "SUGIANTO SE",
    authorPhoto:
      "/st/media/pim/media/user_photo/40/40d/40d1a727884bbf21e3dcf92b6bd1f34a_f7f26258232c4f6b80f4ed2a9986fbf2.png",
  },
  {
    name: "GROUNDSWELL",
    account: 11905201,
    description:
      "Running away is very easy.  Facing things and overcoming them makes you strong.",
    author: "DINH THU HOANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/30/305/3050009f82b35fd8359b4cc60f66b5a5_02b2ad45be214f1e800fc858583c7a46.jpeg",
  },
  {
    name: "DEAF process",
    account: 11906151,
    description:
      "Risk management due to: Maximum losing order: 2.5% account (R), Drop rate: 5% account/day, Risk/reward ratio: 1.5, Win rate: 65%/35%, Tele: baoanfx",
    author: "VAN PHUONG NGO",
    authorPhoto:
      "/st/media/pim/media/user_photo/4f/4fc/4fc8b8c98efd47051f6104341cdccfa3_09deb7f1b57d4db8a693165a5624005e.jpg",
  },
  {
    name: "Golden Dream",
    account: 11907199,
    description:
      "“ We don’t trade market. We trade our beliefs about the market “",
    author: "Trần Huy Vũ",
    authorPhoto:
      "/st/media/pim/media/user_photo/05/050/0508a619fe2931530586efd040b937e0_01590d8f7e9a4579ab95da366bb20582.jpeg",
  },
  {
    name: "mooa1111111",
    account: 11908075,
    description: "1",
    author: "Mohammad Alizade",
    authorPhoto: null,
  },
  {
    name: "Daily-Dollars",
    account: 11908269,
    description:
      "Our trading method is based on AI system. it's always in profit. we are not gambling. just trust us and sit back. enjoy your profits. +971545356976",
    author: "Hafiz Muhammad Ajmal Latif",
    authorPhoto:
      "/st/media/pim/media/user_photo/bb/bb5/bb5f6b81ad5d616e5accd0e59b30ea65_130b272d3ceb4ecea658ef024b575134.jpg",
  },
  {
    name: "AEMfxSystem",
    account: 11910709,
    description: "AEMfx Trading System",
    author: "Adul In-in",
    authorPhoto:
      "/st/media/pim/media/user_photo/f3/f31/f312543207c58ab44435de3ea1a42e97_c55bab2a20e6442bb0b6dc852d119355.jpg",
  },
  {
    name: "Engineer forex 3 HR",
    account: 11911268,
    description: "Very smart strategy",
    author: "Faten azzam",
    authorPhoto:
      "/st/media/pim/media/user_photo/5c/5c9/5c93bfd7f3eccd5808dcbce5d1ffb900_18028ffbb47f40d9bd5c02459b7dfcc0.jpg",
  },
  {
    name: "Swing Trade 1",
    account: 11911315,
    description: "Swing trade",
    author: "Trung Hoang",
    authorPhoto:
      "/st/media/user_photo/ee/ee5/ee578cd309853d61666582535cd50da8_0666c27d26d54827928c7cbeea996898.png",
  },
  {
    name: "2X Every Month",
    account: 11911479,
    description:
      "Double your capital every month. I use hedging strategy so that your capital would be safe",
    author: "Venkatarajendra Dandu",
    authorPhoto: null,
  },
  {
    name: "EA North East Way",
    account: 11911717,
    description: "Ea top 1 thế giới",
    author: "NGUIYỄN VÂN",
    authorPhoto:
      "/st/media/user_photo/47/47b/47bde261afe3bef78b4fc63ae98c72a4_6049ed685f5e4fd896e16a31404b9ff4.jpeg",
  },
  {
    name: "koliaphanyoutube",
    account: 11912657,
    description: "koliaphan icopy",
    author: "Minh Chí Phan",
    authorPhoto:
      "/st/media/pim/media/user_photo/f4/f4b/f4bcd290d24a958991cdcde12735758f_781ba605fbce4af29a328a1c2caabd4a.png",
  },
  {
    name: "EA Profit Gainer",
    account: 11913206,
    description:
      "EAProfitGainer is a trading strategy that produces consistent profits. Focus on capital management. Use a simple trading system.Can make real profits.",
    author: "MR KAMONRAT BUTSRIPHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/ed/ed1/ed1d5fae1a9470155ed292940b212d5e_ed24cb858e184b1e86606901ec2aebab.jpg",
  },
  {
    name: "Neverz EA",
    account: 11913459,
    description:
      "*This Master account is an Expert Advisors based on my own system.\n*Long-term investment, stable and consistency. \n*Target profit : 7-20% / month.",
    author: "Teerapat Fukvaja",
    authorPhoto:
      "/st/media/pim/media/user_photo/59/594/5940668f0887811e112f05f363ffdb42_50a51b435f8a4709812fb20c2b361700.jpeg",
  },
  {
    name: "ท่านเทพ 01",
    account: 11913795,
    description: "ทุกการผิดพลาดคือการเรียนรู้ใหม่เสมอ",
    author: "PIYAPHONG NGOPRATEEP",
    authorPhoto:
      "/st/media/pim/media/user_photo/dc/dce/dce329f6b5844834c639d503e6e35823_100aa07009ce43db8c3454642bd0c0d0_B018hHu.jpg",
  },
  {
    name: "Noik Crazy",
    account: 11914677,
    description:
      "Pair : AUDCAD, AUDNZD, NZDCAD\nStrategy : Martingale \nSlow open position (not everyday)",
    author: "NI MARYANI",
    authorPhoto: null,
  },
  {
    name: "Normal Life",
    account: 11914764,
    description: "Always set StopLost",
    author: "NGHI HUYNH HONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/de/de1/de17efd6d5eca4f675444595892402b3_0be6ec66ecee4ea5aac4cddef1b39435.png",
  },
  {
    name: "Ryan_nguyen",
    account: 11915437,
    description:
      "https://ryan-nguyen.ca\n           \nhttps://www.myfxbook.com/members/Ryannguyen1002\n\nhttps://t.me/ryan_nguyen1002",
    author: "NGUYỄN CHUNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/55/553/55377ee027b5a8c523b393797f2fa880_bb5b8cb967ed4554b94358d1b08a334b.jpeg",
  },
  {
    name: "Rudra forex",
    account: 11915733,
    description: "2000",
    author: "Sagar khunt",
    authorPhoto: null,
  },
  {
    name: "Otaru Hiru",
    account: 11916376,
    description: "siêu scalp",
    author: "NGOC THANH HA VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/63/630/630bcd9a641137a184533d4bdffd0d27_0b4b70f5ad224bcc8040614895ec51b6.jpg",
  },
  {
    name: "FX PRO - INVINCIBLE",
    account: 11916639,
    description: "-  DiSCIPLINE CREATES SUCCESS",
    author: "Chân  Nguyễn hữu",
    authorPhoto:
      "/st/media/pim/media/user_photo/c7/c74/c740c248e34390ec9c4ce9cd0d0b3246_3949a2dd985d4b1ca9599fffc47990a3.jpg",
  },
  {
    name: "20PIP GOLD STRATEGY",
    account: 11916748,
    description: "PIVOT  STRATEGY",
    author: "santoshini gouda",
    authorPhoto:
      "/st/media/pim/media/user_photo/e3/e31/e319e4198750763334ec2bdee5a2df2a_66ce2020aed84425b3640bb2c946ad3d.JPG",
  },
  {
    name: "hendrikhdk",
    account: 11917304,
    description: "tehnik trading profit dengan akuransi tinggi",
    author: "FARIDA",
    authorPhoto:
      "/st/media/pim/media/user_photo/5c/5cb/5cb10cc58e418dcee9acbb56b3a02a28_4313d8631fb7408e8e69befa8ae4a761.jpg",
  },
  {
    name: "MAS Scalping 2",
    account: 11918062,
    description:
      "Monthly target is around 5%-10%.\nMAS Scalping 3: https://t.ly/4TEP2",
    author: "Jemmy Alwiyandu",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee1/ee11d972c7610534b6fca4649f29d126_ec9a448b908d4287bbeffd4f539faffe.png",
  },
  {
    name: "Without Loss",
    account: 11918742,
    description:
      "No risk No pain, Your money is growing everyday. We believe that time is money. So we grow your money every minute with without risk (0.001%)",
    author: "SOPNA",
    authorPhoto:
      "/st/media/pim/media/user_photo/59/592/5924f1e844c91b83fc95cf6a19825d8a_dfadc7de24f64d939eb43c85dd548370.jpeg",
  },
  {
    name: "MeowTrader",
    account: 11918817,
    description: "Scalping Trader",
    author: "MR KOMSAKE PROMMOPAKORN",
    authorPhoto:
      "/st/media/pim/media/user_photo/31/316/316da9157b73180d46886b8daf9c2b27_334b83831248483589fb04b7b4a3db45.jpeg",
  },
  {
    name: "DuongSophie 1",
    account: 11919030,
    description: "scalp xau, btc",
    author: "DINH DUONG THI",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5a8/5a8ae4df63d1bcab75f942d0dfe7a0ad_01ce34561e00460fa2becb203984f6e1.jpg",
  },
  {
    name: "Spiderman FX",
    account: 11919209,
    description: "x",
    author: "MR SANKOM KLONGDEE",
    authorPhoto:
      "/st/media/user_photo/7b/7bd/7bd3292b196ccf1be43375f0d7926550_7d58c16323294fde98d3bc12b254d397.jpg",
  },
  {
    name: "INDIAN SCALPER",
    account: 11919520,
    description:
      "Hi guys I am a professional trader having 10 years of experience...if u copy my strategy u can earn 1% profit daily.Minimum amount 500 USD, lets Start",
    author: "Kirti Kirti",
    authorPhoto:
      "/st/media/pim/media/user_photo/be/be4/be473a7e60a6ab7db71714da2940cc61_dc315a8553b746d2af654a4fae839b72.jpg",
  },
  {
    name: "Fx Gold Prediction",
    account: 11920402,
    description: "only 1 candle stop loss .with safe investment",
    author: "sidra sheer",
    authorPhoto:
      "/st/media/user_photo/cb/cb0/cb0b7f705eef02437f9087d1a1640618_e62955a55b754e7c8c2ad9b309bdc1a2.jpg",
  },
  {
    name: "HT - Great",
    account: 11920422,
    description:
      "Happy Trading!\n- Target: ~1%/day, ~20%/month\n- Hand and EA together trading\n- More than 8 years of trading experience",
    author: "VAN HUNG DUONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/02/024/024f4ba6671008861ffc7c4ed5cc4495_ee0388cff9be42739ddfede93c3a1d40.jpg",
  },
  {
    name: "BomahdiFx 1",
    account: 11920475,
    description:
      "تداول بسيط بمخاطرة قليلة جداً\n( Daily Risk 2% ) \n- يمكنك بأي وقت إلغاء النسخ\n- لا يوجد تعويض في حال الخسارة \n- دخولك معاي يعني أنك قابل الشروط أعلاه .",
    author: "Hasan Alenezi",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/69c/69ccd9511c5cdb559cc8843a2aa2b570_8484e6d788cb4d3894c0be74e5fe5c75.PNG",
  },
  {
    name: "BGT BillionGoldtrade",
    account: 11920910,
    description: "Short traders focused on gold/",
    author: "Patitta Sapyoo",
    authorPhoto:
      "/st/media/pim/media/user_photo/8d/8d8/8d88539186580f283f150a814e50a6ec_59c42889c26d4f64845b76b9c29e517a.jpg",
  },
  {
    name: "Super trade",
    account: 11920988,
    description:
      "Crest a trading strategy and set the commission level you want to earn (up to 25%)",
    author: "WEI LAR TA",
    authorPhoto:
      "/st/media/pim/media/user_photo/ad/ad6/ad6064adbe9797ab8219626b71b094e1_55fffe450bef4d6eaf49a40afca79ae5.jpeg",
  },
  {
    name: "VORAPATCH_K",
    account: 11921784,
    description:
      "อย่ากดคัตCopyนะครับ เดี๋ยวจะเพิ่มทุนและจะกลับขึ้นข้างบนกันครับ",
    author: "Vorapatch Kongjantree",
    authorPhoto:
      "/st/media/pim/media/user_photo/78/787/7878b87d0c66842af6fc6c60f0529038_ccc1b42bda0b497ca75381d7d720bced.jpeg",
  },
  {
    name: "Seven",
    account: 11923171,
    description:
      "Trading with Price Action, Smart Money Concept, Supply Demand. Low risk high returns. Consistent profit every day.\n👉 Telegram: @SevenTradingChannel",
    author: "Le Hoai Bao",
    authorPhoto:
      "/st/media/user_photo/0b/0b7/0b7279cd410ac99259d95c34d8b11f47_b7c13d2a89184aae98f93d595cd2e741.png",
  },
  {
    name: "CeresInvestmentFX",
    account: 11923593,
    description: "Low DD + Max Profit= Answer",
    author: "SANTIAGO EDUARDO TOSI FALASCHI",
    authorPhoto:
      "/st/media/pim/media/user_photo/02/022/02219075b12939be6b5daccbe83bbaf3_a287e5b2eeed4528b063e758cd92776b.jpeg",
  },
  {
    name: "Copy Trade Fx",
    account: 11924407,
    description:
      "Hello I'm Pahalad ; I trade as pr my rules, more focused on risk reward trade, your will get profit slowly, but we make sure first your fund is safe.",
    author: "Meet Korat",
    authorPhoto:
      "/st/media/pim/media/user_photo/fb/fb1/fb1305e6e5f910a0254f347a28009f18_d175dc6bcf134d15abb08f4e79daa10c.png",
  },
  {
    name: "Master Trading",
    account: 11924472,
    description:
      "Trading Gold and ...\nSupply and Demand with Price Action\nFulltime Trader since 2020 - Trading for a Living",
    author: "Xuan Hong Thi Duong",
    authorPhoto:
      "/st/media/pim/media/user_photo/38/38f/38f2d54b8c610566640d004f5dd56dac_f3beb333045c4e299f928835bad29e44.jpeg",
  },
  {
    name: "GoldMaster",
    account: 11924856,
    description:
      "100% safe trading with money management. There could be floating losses for some days but not real losses. Your money will keep growing daily.",
    author: "Rahat Batool",
    authorPhoto: null,
  },
  {
    name: "RAPID PROFIT",
    account: 11925829,
    description:
      "RAPID PROFIT MACHINE our trade system more safe and high profit the trade is very safe all time with no risk and we help you to make high profit",
    author: "ABDELWAHAB AHMED",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f89/f89bcdbe5d66c6455f720ff3387618c7_b09979cbdef448c383e4cce5bbbf7bf9.png",
  },
  {
    name: "EUR-USD niveles",
    account: 11927001,
    description:
      "Esta estrategia consta de hacer operaciones en corto sin stop los por lo cual la persona que ingrese se le recomienda tener buena gestión de riesgo",
    author: "Heiler Perez",
    authorPhoto:
      "/st/media/pim/media/user_photo/77/776/77645d80aee34fb5e5096000c6c09d81_12eb620d9c47425f92246c329f7b8b3c.png",
  },
  {
    name: "GBP-USD NIVELES",
    account: 11927016,
    description:
      "Esta estrategia consta de hacer operaciones en corto sin stop los por lo cual la persona que ingrese se le recomienda tener buena gestión de riesgo",
    author: "Heiler Perez",
    authorPhoto:
      "/st/media/pim/media/user_photo/77/776/77645d80aee34fb5e5096000c6c09d81_12eb620d9c47425f92246c329f7b8b3c.png",
  },
  {
    name: "AUD-CAD NIVELES",
    account: 11927032,
    description:
      "Esta estrategia consta de hacer operaciones en corto sin stop los por lo cual la persona que ingrese se le recomienda tener buena gestión de riesgo",
    author: "Angi Duarte",
    authorPhoto:
      "/st/media/pim/media/user_photo/b5/b5f/b5f4a6969fd0d96a2a0131b127caa5e1_e6ca52e4907846f9a70574f9147a7c48.png",
  },
  {
    name: "OHO trading",
    account: 11927177,
    description: "We care for your hard earning",
    author: "Ramesh Chandra Patnaik",
    authorPhoto:
      "/st/media/pim/media/user_photo/be/be0/be0b4786a2f495374b7ee23dca6c2798_7d4762f5251649e79e04cf6b23f95bbc.jpg",
  },
  {
    name: "MAMATRADER",
    account: 11927206,
    description: "FUTURE PREDICTION",
    author: "THI KIM XUAN BUI",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/625/62569a943f32b1b4b1c75282ade9e988_6f2667ac38fe451bbb92638979e0bbc0.PNG",
  },
  {
    name: "SON19XX Team Youtube",
    account: 11927230,
    description:
      "Theo dõi chúng tôi qua các nền tảng :\nYoutube / Tiktok / Zalo / Facebook / Telegram : SON19XX. \n\nLiên hệ : teamson19xx@gmail.com",
    author: "Ngọc Sơn Trần",
    authorPhoto:
      "/st/media/pim/media/user_photo/ff/ff0/ff092316c943d9e97be73366fecc5da2_b46f643345b646b29603340bca482a3b.jpeg",
  },
  {
    name: "USD-CAD NIVELES",
    account: 11927462,
    description:
      "Esta estrategia consta de hacer operaciones en corto sin stop los por lo cual la persona que ingrese se le recomienda tener buena gestión de riesgo",
    author: "Angi Duarte",
    authorPhoto:
      "/st/media/pim/media/user_photo/b5/b5f/b5f4a6969fd0d96a2a0131b127caa5e1_e6ca52e4907846f9a70574f9147a7c48.png",
  },
  {
    name: "FAST PROTOCOL",
    account: 11928124,
    description: "FAST PROTOCOL fast profit good system for make fast profit",
    author: "AHMED ELDIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8a8/8a8ade816612b27ccd7f8d6e8e45a151_57c567133b334429b3bbe26f379d961c.jpg",
  },
  {
    name: "FAST PROTOCOL",
    account: 11928273,
    description: "FAST PROTOCOL fast profit good system for make fast profit",
    author: "AHMED ELDIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8a8/8a8ade816612b27ccd7f8d6e8e45a151_57c567133b334429b3bbe26f379d961c.jpg",
  },
  {
    name: "Galaxy Startegy",
    account: 11929025,
    description:
      "With good money management this Stategy will raise you Deposit from time to time",
    author: "SUSANTI",
    authorPhoto:
      "/st/media/pim/media/user_photo/44/446/446bc7f1c94c4374c8d9a3a3b9c90ec9_7415e98988e6438d842150e259339561.jpg",
  },
  {
    name: "CJS001-Hades-EURUSD",
    account: 11929074,
    description: "@CopyRates: $1,000 -> 1:1\n@Max SL: 50%",
    author: "加爍 JIASHUO 陳 CHEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e25/e25cb498e1ecb356142f55c94cd71b12_5b41826cf09143b99caaa5f80324a6c9.jpg",
  },
  {
    name: "EXCELLENT TRADES FX",
    account: 11929758,
    description:
      "GROW WITH SAFELY FOREVER WE GIVE A BETTER CONFIDENCE TO U IN FOREX MARKET",
    author: "Sheela kumari Saini",
    authorPhoto: null,
  },
  {
    name: "Luxfami6868",
    account: 11930149,
    description: "Scap Eu",
    author: "Thi Binh Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/608/60868b76531aed696ccd2d00d37ed378_fbcc176f7f3e4b5384e1988822807e08.jpeg",
  },
  {
    name: "Gold MM 2023",
    account: 11930506,
    description: "Mình nghỉ tết Trung Thu",
    author: "Trường Trần",
    authorPhoto:
      "/st/media/pim/media/user_photo/cc/cc7/cc703ea298f4c797115f837d8f851559_c89e9598fc1741ae92b490d1a4661640.jpg",
  },
  {
    name: "LUCKY ACCOUNT",
    account: 11931256,
    description:
      "Each trading order has a maximum loss of 2% of the account, while each winning order generates returns of 4% to 5% of the account (R:R = 1:2 or 1:2,5)",
    author: "Thao Nguyen Van",
    authorPhoto:
      "/st/media/pim/media/user_photo/88/88e/88ee9b71c048d0c93e829621669b9427_5499221ace974a0191b6b1758631a897.jpg",
  },
  {
    name: "AUTOMATED TRADE",
    account: 11931783,
    description:
      "AUTOMATED TRADE ,uses algorithms to place trades on your behalf. It operates without human intervention based on predefined criteria and strategies.",
    author: "ABD ELRAHIM",
    authorPhoto:
      "/st/media/pim/media/user_photo/57/578/5786287ea2bb781c0741f4cbcc0d97a4_e9eeb812ff874149902debc8cffb9b55.png",
  },
  {
    name: "scalp xau teentitans",
    account: 11932288,
    description: "fight short, raise long, accumulate small to become big",
    author: "hoàng vũ huy",
    authorPhoto:
      "/st/media/pim/media/user_photo/14/148/1483b1014c593ce5d648ba750c39d2f2_b48f25c893744f53bc84d04e98971420.jpeg",
  },
  {
    name: "หมวยนักลงทุน Std",
    account: 11932707,
    description:
      "Long-term  investment ( monthly ) +10%\nทุกการลงทุนมีความเสี่ยง ทางทีมแอดมินไม่สามารถรับผิดชอบในความเสียหายใดใดได้นะคะ",
    author: "MISS SIRIGAN YIMSOPA",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5ad/5ad586820b97645de4ae99ec05e47011_674f5862bc864e66a768951557e0421a.png",
  },
  {
    name: "Wish List - Gold",
    account: 11934156,
    description: "Making money while you sleep!",
    author: "MISS CHONNICHA CHAROENWAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/9e/9e8/9e881a41955ab691bcb4cdaadc93b9ce_ad1097ef53a1419aaa5805dfa3524774.jpg",
  },
  {
    name: "OM TRADING",
    account: 11935753,
    description: "We have very safe strategy",
    author: "Tejas Patel",
    authorPhoto: null,
  },
  {
    name: "MASTER NO 2",
    account: 11936106,
    description:
      "Uses AI machine learning strategies, trades only GBPUSD, expects 100% annual returns, moderate risk.\nFacebook: Deep Ocean AI",
    author: "Tanitas Choeithongsri",
    authorPhoto:
      "/st/media/pim/media/user_photo/41/41d/41d1e99108e5a3f04d05c3e51cc54abb_999ebb4afa6748e5a3fcb888362c6f44_CSJSNph.png",
  },
  {
    name: "ARJUN TRADEUNIVERSE",
    account: 11936138,
    description: "Trade All PAir",
    author: "ARJUN MULYONO",
    authorPhoto:
      "/st/media/pim/media/user_photo/c7/c70/c704a5ced00223335ac5f7537ff5522c_3eb21c34ddce4ff593f60c6db9baab26.jpg",
  },
  {
    name: "Forex Brain",
    account: 11937563,
    description:
      "Artificial intelligence is used with human intelligence To make a monthly profit equivalent to a 10% which can be increased",
    author: "HADY SAAD",
    authorPhoto:
      "/st/media/pim/media/user_photo/31/314/3143aebbcc7c4e99f8ba1d1edae03664_f634e94379c644fbbe8468ac2aa10152.jpg",
  },
  {
    name: "FOR killer",
    account: 11937884,
    description: "Trade Since 2021.\nConsistent profit.",
    author: "LUCKY LIM",
    authorPhoto:
      "/st/media/pim/media/user_photo/ad/ad3/ad3e6d9658c520a500affb118f010294_8c3b0452e0664b718ca6fe47531c6fb8.jpeg",
  },
  {
    name: "FOR killer 1",
    account: 11937978,
    description: "Trade Since 2021.\nConsistent profit.",
    author: "LUCKY LIM",
    authorPhoto:
      "/st/media/pim/media/user_photo/ad/ad3/ad3e6d9658c520a500affb118f010294_8c3b0452e0664b718ca6fe47531c6fb8.jpeg",
  },
  {
    name: "Swing x Scalp 786",
    account: 11938799,
    description: "I Like To Swing and Scalp",
    author: "Waseemuddin Mohammad",
    authorPhoto:
      "/st/media/user_photo/ae/ae1/ae161333d747622cde0f83900277dd35_2a6ed9f02e994c538b00b05dc6e7021f.jpg",
  },
  {
    name: "EA North East Way",
    account: 11939478,
    description: "Siêu EA top 1",
    author: "NGUIYỄN VÂN",
    authorPhoto:
      "/st/media/user_photo/47/47b/47bde261afe3bef78b4fc63ae98c72a4_6049ed685f5e4fd896e16a31404b9ff4.jpeg",
  },
  {
    name: "TRADE GOLD VN2",
    account: 11939815,
    description: "Win! Win",
    author: "My Trà",
    authorPhoto:
      "/st/media/pim/media/user_photo/aa/aa3/aa3441e1134976d350f17edae8722a47_2ff803437abd4f59a473baaf5d3943cb.png",
  },
  {
    name: "DEFU--DRAGON",
    account: 11939888,
    description:
      "From China, we find low-leverage is the guarantee of long-term benefit . \nExpect your joining! 1079185577@qq.com/V:defu108",
    author: "hongkuan huang",
    authorPhoto:
      "/st/media/pim/media/user_photo/27/27e/27e8c9d45975236d41cf591ed091d6bb_e48b1f4104d64a02903f17871ecca4a0.png",
  },
  {
    name: "Volume Analysis",
    account: 11940561,
    description:
      "Exclusively gold trading with the invented system  Make profit daily or weekly",
    author: "MISS NATCHAPORN TEABPO",
    authorPhoto:
      "/st/media/pim/media/user_photo/74/749/7496357933a2af737439b2733beea8f2_0a826c82a36341248aec8e4d7ba2085b.jpg",
  },
  {
    name: "PEAK PRIME FUND",
    account: 11941201,
    description:
      "15 năm trong ngành trader, cam kết cùng với tất cả các nhà đầu tư có thu nhập cao và bền vững",
    author: "Huyen Dang Thi Bich",
    authorPhoto:
      "/st/media/pim/media/user_photo/d9/d91/d91779108df82f622272e4d1256db75a_24a7e6a3426f4f4abb8ba0fe96648867.jpg",
  },
  {
    name: "AVATAR FUNDS",
    account: 11941909,
    description:
      "กลยุทธ์การทำกำไร\n- โครงสร้างตลาด TF D1, H4, H1\n- โมเมนตั้มราคา\n- พฤติกรรมราคา\n- ความเสี่ยงไม่เกิน 5%\nเป้าหมายผลตอบแทนมากกว่า 80%ต่อปี",
    author: "Prasit Chukrathok",
    authorPhoto:
      "/st/media/pim/media/user_photo/38/384/3840425161ce65e007f2ab616cf86456_89c4a3679db443c4b17ca4c97aedd5c6.jpeg",
  },
  {
    name: "Gold Hunter EA2",
    account: 11942884,
    description:
      "Xauusd scalping trading profit 15-30% /month \n-EA Expert advisor swing trade\n-Take profit every day\n-Low risk high return.\n-Warranty back test 10 year",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "Glims Forex",
    account: 11943282,
    description: "Update You Later",
    author: "Pithani Rajesh",
    authorPhoto: null,
  },
  {
    name: "GOLD_LONG TERM",
    account: 11943414,
    description:
      "Đầu tư chuyên vàng chu kỳ dài hạn quý/năm vùng đỉnh/đáy chu kỳ dài, không quá quan tâm đến giao động ngắn hạn (vì thế ngắn hạn có thể lỗ vị thế)",
    author: "THI HOA DANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8a3/8a3436aa46e77bad918e68fa860e038f_24d42ad21d4c403a9d798726fbd27c3a.png",
  },
  {
    name: "Prayad Trander",
    account: 11944319,
    description: "follow trend",
    author: "MR PRAYAD DOLSOOK",
    authorPhoto: null,
  },
  {
    name: "XAU Digger",
    account: 11944495,
    description: ".",
    author: "Richard Tiria",
    authorPhoto:
      "/st/media/pim/media/user_photo/4d/4d3/4d36dfaec21282f8348ebe5f2e7fc3bb_0e09034a9f1f4ea7b2ca126449fb2e37.jpg",
  },
  {
    name: "Mayakka Nidhi Ltd",
    account: 11945005,
    description: "Mayakka Nidhi Ltd",
    author: "Suraj Jadhav",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c2d/c2d0c5f6ab1652c684c95341ecd0f7b4_9e2c51c43f264950b3ba4ed4ca2448ae.jpg",
  },
  {
    name: "Smart gold 1",
    account: 11945110,
    description:
      "We have team.of trader and  IT  to manage and support trading sistem. We trade monday to friday. We only make  day trade transactions.",
    author: "FUJIANTO TANJONO",
    authorPhoto:
      "/st/media/pim/media/user_photo/95/95b/95b47b844ef07e9fa7372a867c0b6440_ab49fbe6d960487ab5b2dfef274b80c8_AIsr6rK.jpg",
  },
  {
    name: "Never Zero-Just Join",
    account: 11945216,
    description:
      "Daily trade using SL with small profit. It's\n100% guarantee that your hard earning will never zero. So just copy now.",
    author: "Radhika Medhe",
    authorPhoto:
      "/st/media/pim/media/user_photo/8c/8cf/8cf4d0c4b06c29a8bb17c35592d636b2_42e586df380c4898b8cc69bd26ef01d0.jpg",
  },
  {
    name: "Ngày về bờ",
    account: 11945938,
    description: "Ngày về bờ",
    author: "Văn Hoàng Bùi",
    authorPhoto:
      "/st/media/pim/media/user_photo/10/108/108a84657ed88dc5025c3c2d67e768c9_4abc5cdc46d341bfa1157e68b2e66ed5.jpg",
  },
  {
    name: "Dunia Trader GU",
    account: 11946337,
    description:
      "teknik scalping dengan compounding dengan  kerangka kerja yang standart dengan resiko yang kecil. program jangka panjang",
    author: "NUR HASANAH",
    authorPhoto:
      "/st/media/pim/media/user_photo/87/87c/87c87992f907330f340b4e187f338f9c_24e10748005d4ef98132479d6eff5c65.jpg",
  },
  {
    name: "Safety Trade",
    account: 11946869,
    description: "Slow is Smooth, Smooth is Fast",
    author: "MISS NATWARA KANTRASIRI",
    authorPhoto:
      "/st/media/pim/media/user_photo/ef/ef0/ef0b195b0a663c778f6147ab67b50a48_90de38c879b141e9b654a2f56dd3efad.JPG",
  },
  {
    name: "Happy Trader",
    account: 11947035,
    description:
      "Trade only when seeing a clear Divergence between the price line with MACD and RSI",
    author: "Công Trường Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/27/27d/27d55cc7961db78e4257625bc45cd47d_f475928ed49b4e13b4252dfbdedc3366.png",
  },
  {
    name: "Profit Owner",
    account: 11947365,
    description:
      "Monthly Target 10-20%🔥\n100% Risk free\nSafe for big investment \n\n01645334739(WhatsApp)",
    author: "BAHAR AFJOL",
    authorPhoto:
      "/st/media/pim/media/user_photo/84/847/847f586bc5ee823f9a06931a3a14aceb_0a8ec61591ac4d5894e05d892608774d.jpg",
  },
  {
    name: "JoParFX  Pemburu USD",
    account: 11947379,
    description: "Perdagangan Khusus Pair's XauUsd",
    author: "PARJANTO",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50f/50fdc0bf72f2f34abb5abc5eaf70d193_0521443ebbd94c3c8ad99992ba80d80b.jpg",
  },
  {
    name: "MangoTreeV7",
    account: 11947677,
    description:
      "I am a professional EA designer for 6 years experience. This EA is a trend-following type.",
    author: "秋男 佐藤",
    authorPhoto:
      "/st/media/user_photo/a0/a01/a01e75458ccb4d97ce9c0f2525e9d57c_93c2d77ee4d44f11bca194e17f9dc853.jpg",
  },
  {
    name: "WitchcraftWonders II",
    account: 11947902,
    description: "High Risk High Return",
    author: "MR GRITSAPITPONG AKARAMANEEJIRATCHA",
    authorPhoto:
      "/st/media/pim/media/user_photo/a5/a5f/a5f139a3dd26c9ebe2d05e5042964865_73c5874b005a4cbba77eedda64fb4024.jpeg",
  },
  {
    name: "JJJJJJJJJJ",
    account: 11948143,
    description: "0.02",
    author: "jirakana kanokrutchanun",
    authorPhoto:
      "/st/media/pim/media/user_photo/73/738/73839e8ea363c8c8c283c7f49891cd02_fe689e318297465ebfb747738d44f383.png",
  },
  {
    name: "Good Profit",
    account: 11948221,
    description: "Vào lệnh chính xác cho lợi nhuận ổn định",
    author: "Sỹ Phạm Văn",
    authorPhoto:
      "/st/media/pim/media/user_photo/68/680/680a125559bfd4dafb3bfbdcd594febf_e5dc1439d4e347fbbabaab73dd5938c7.jpeg",
  },
  {
    name: "LuuMT-Trader Fund",
    account: 11948502,
    description:
      "RISK ~99% TK .\nQuản lý vốn của bạn ở trong BANK . KHÔNG được đặt NHIỀU TIỀN trên sàn rồi quản lý Risk 1-2%tk/ lệnh.  HÃY NHỚ KỸ ĐIỀU NÀY",
    author: "Lưu Luu",
    authorPhoto:
      "/st/media/pim/media/user_photo/70/700/700ee5ca0c5efdd57404f0d05449fea8_c1dcf0602f91466b8e7ec5a940e71b77.jpg",
  },
  {
    name: "VIETNAM vodich",
    account: 11948515,
    description: "VIETNAM vodich",
    author: "Văn Hoàng Bùi",
    authorPhoto:
      "/st/media/pim/media/user_photo/10/108/108a84657ed88dc5025c3c2d67e768c9_4abc5cdc46d341bfa1157e68b2e66ed5.jpg",
  },
  {
    name: "dan111112121",
    account: 11949463,
    description: "d",
    author: "Mohammad Alizade",
    authorPhoto: null,
  },
  {
    name: "mua444444444",
    account: 11949479,
    description: "4",
    author: "ozra sadeghinejad",
    authorPhoto: null,
  },
  {
    name: "EZSignals Team",
    account: 11950627,
    description:
      "NO CHEATING PROFIT.\n\nMonthly Profit Target around: 5% - 20%.\n\nStop Loss: -50%.\nSafety is the best policy.\n\nTelegram: @ezforexapp",
    author: "Phạm Quang Duy",
    authorPhoto:
      "/st/media/pim/media/user_photo/a9/a9b/a9bd4da28b5931112a30f8c3f7a76875_8cf2a0e24ad146fba5b2156defa280d8.png",
  },
  {
    name: "FAST TRADE",
    account: 11950787,
    description:
      "FAST TRADE We are part of the professional trader and we trade safe all time",
    author: "MERSAL MOHAMED",
    authorPhoto:
      "/st/media/pim/media/user_photo/d1/d16/d1651172a7b2f603a3810dab29922151_1eecc4387d9d4c31bbbb7ff7bc715823.png",
  },
  {
    name: "Thien An Pro",
    account: 11951030,
    description: "Profit 10%",
    author: "Hồng Loan Đoàn Thị",
    authorPhoto: null,
  },
  {
    name: "NoStress Exness",
    account: 11951418,
    description:
      "Thank you for choosing to profit together with me.\nSeeking around 5% per month operating normally AUDCAD.",
    author: "Daniel Moraes da Silva",
    authorPhoto:
      "/st/media/user_photo/86/864/864a8ad0d79ae47f9d2149eb4add97e1_5348bb47f2f54ece972284d9c8a9071f_BFshpip.png",
  },
  {
    name: "STEP BY STEP",
    account: 11951458,
    description: "Follow me. I will give you something special.",
    author: "ĐINH QUY",
    authorPhoto:
      "/st/media/user_photo/25/254/254e7b02dce9af44f29693558c6f2ced_f8f53c1c3a37421a8ca1252cf86175e2.jpg",
  },
  {
    name: "HUU THIN PRO",
    account: 11951482,
    description: "Trader Scapl",
    author: "HUU THIN VO",
    authorPhoto: null,
  },
  {
    name: "Wolf of FX",
    account: 11951815,
    description:
      "A Lone Wolf\n\nDisclaimer :\n\nMaximum drawdown -50%\n\nI Strongly Advise you to only put your money that you can afford to lose here\n\nThank you",
    author: "YOUGIE",
    authorPhoto:
      "/st/media/pim/media/user_photo/4b/4b1/4b10d507e967dd4a69720073b848ad3c_3d30a69937814c6d9c5283b5270429a5.png",
  },
  {
    name: "I Be Rich MasterGold",
    account: 11951861,
    description: "XAUUSD",
    author: "MR PATTANID PLAIWET",
    authorPhoto:
      "/st/media/pim/media/user_photo/4c/4c9/4c9d088a0f680ca3d140eb965f8cad74_4f5f9461c3a147f79e5b9d254bbdbf6b_cgxaceJ.jpg",
  },
  {
    name: "Swing trade JP",
    account: 11951998,
    description:
      "この戦略はEAではありません。\n全て私の考えで手動でトレードを行っています。\n\n損切りを徹底したトレンドフォローによって、資産を大きくリスクを最大限に抑え、長期的に利益を得るための戦略となっています。\n\n目標は、月利益10%以上です。",
    author: "藤原 徹弥",
    authorPhoto:
      "/st/media/pim/media/user_photo/94/941/9415823e9ff867327dded1aa7f359623_919ee055ec9c48da8642f5fe8f2f379a.jpg",
  },
  {
    name: "Nobita Trading",
    account: 11952062,
    description:
      "- Stable and long-term profit / Lợi nhuận ổn định và lâu dài.\n- Extremely low risk ratio / Tỉ lệ rủi ro thấp.\n\nWellcome !",
    author: "Tráng Nguyễn Công",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b9e/b9eca139a04971bcfaa3b204916c44d1_d621491e7d91446192c26d7e01d3147e.jpeg",
  },
  {
    name: "SMT BOT Money Pro",
    account: 11952701,
    description:
      "Chiến lược chạy các cặp tiền với mức lợi nhuận 10-20%/ Tháng.\nCài mức stoploss cố định 25% tài khoản. Đã nâng cấp hạn chế tối đa rủi ro. Siêu an toàn.",
    author: "VAN HIEU VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/e4/e46/e46b43c99ca684ebb1714f5d25028163_f3ce8582f9334ffc88094f104d922fab.jpg",
  },
  {
    name: "MONEY NEVER SLEEPS",
    account: 11953078,
    description: "MONEY NEVER SLEEPS",
    author: "RASLAN OLA",
    authorPhoto:
      "/st/media/pim/media/user_photo/cd/cd8/cd86d09329ee8cf1c283e809b0ad452a_87d92fcb0ca34c4fb0d283920a3eeaa3.jpg",
  },
  {
    name: "Anh Du Kích",
    account: 11954392,
    description: "Chờ đợi và hành động.",
    author: "Ngô Hiệp",
    authorPhoto:
      "/st/media/pim/media/user_photo/56/56e/56ed93f724fcecf1ca2abfce19dd80c5_e9109c70b5d141c8b45094a4f235f32f.jpg",
  },
  {
    name: "Cash Train",
    account: 11954415,
    description:
      "- Mục tiêu 8-15%/tháng\r\n- Swing trading\r\n- Không ngày nào lỗ\r\n- Giao dịch thuần Volume, SL=Entry\r\n- https://tiktok.com/@caroo.nguyen",
    author: "tuan nguyen manh",
    authorPhoto:
      "/st/media/pim/media/user_photo/83/83e/83e3ee3cf694043b2808b7eaccd36a40_cd207b7831f146baa6804ace1152b2d0.png",
  },
  {
    name: "Dig dig dig",
    account: 11954416,
    description: "小小的波动里面挖呀挖呀挖，订单不过夜，一天天积累",
    author: "Xu Yuqi",
    authorPhoto:
      "/st/media/user_photo/16/163/163cccf9a455be0d4b263b85837b38a9_0108c8dd72ce436f9ff49b14400f9752.jpg",
  },
  {
    name: "32_s680_sig2_4470",
    account: 11954470,
    description: "Smart Grid Trading",
    author: "TẤN PHẠM VĂN",
    authorPhoto:
      "/st/media/user_photo/d8/d87/d874e7c270df51115765d000c3900cd8_ca6f74fdc87e44de92130b8c0cf07ced.jpg",
  },
  {
    name: "32_s680_sig3_4472",
    account: 11954472,
    description: "Smart Grid Trading",
    author: "TẤN PHẠM VĂN",
    authorPhoto:
      "/st/media/user_photo/d8/d87/d874e7c270df51115765d000c3900cd8_ca6f74fdc87e44de92130b8c0cf07ced.jpg",
  },
  {
    name: "Low Risk Trading 1",
    account: 11954936,
    description:
      "Making profits with focus on money management and risk mitigation.",
    author: "Ahmed Mohamed Fathy Moustafa Elkhateeb",
    authorPhoto:
      "/st/media/pim/media/user_photo/43/43e/43e3fe79012d5e6c983082753149cb2b_aab196a33a2f4248b2d7b437129b4d8b.jpeg",
  },
  {
    name: "PI KEN_PRO TRADER",
    account: 11954953,
    description: "PI KEN_PRO TRADER",
    author: "HUỲNH PHẠM PHƯỚC THIỆN",
    authorPhoto:
      "/st/media/user_photo/7a/7a9/7a97e75848b86fc5984ad6406d8593bc_fcf7668b29fc40baab87a3f39c905b03.jpg",
  },
  {
    name: "Stella",
    account: 11955450,
    description:
      "Welcome investors to the strategy! Let's create miracles together!",
    author: "Huyền Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/68/68c/68cf318d3329a5e3f30bf3bb8db3cec8_435365d64e3b42b8a7269382d34faf9f.jpg",
  },
  {
    name: "Handrefill",
    account: 11956198,
    description: "Scalping Emas dengan akurasi yang tetap",
    author: "FARIDA",
    authorPhoto:
      "/st/media/pim/media/user_photo/5c/5cb/5cb10cc58e418dcee9acbb56b3a02a28_4313d8631fb7408e8e69befa8ae4a761.jpg",
  },
  {
    name: "Julia Scalping",
    account: 11956623,
    description:
      "- Giao dịch kim loại quý\n- Giao dịch trong ngày\n- Gọn lệnh cuối ngày",
    author: "LE NGUYỄN THI THUY",
    authorPhoto:
      "/st/media/pim/media/user_photo/df/df0/df06719928fbf210a3ed8af9ea598a6f_a98efe143da148ffb6ccf48431c96a17.jpeg",
  },
  {
    name: "PA Trading",
    account: 11956636,
    description:
      "Be patient to profit every day\nFollow my trading strategy\nStart with >=200$\n\nYoutube: PC Channel",
    author: "Cương Phạm",
    authorPhoto:
      "/st/media/pim/media/user_photo/93/93a/93a521d4f8148a7e3847293e474fdf74_92afcff192e84ef4a27b167e51762a21.png",
  },
  {
    name: "AdvirazzAI",
    account: 11956734,
    description:
      "TRADERS WHO WANT EARN CONSISTENT MONTHLY 5% TO 10% INCOME COPY OUR TRADE\r\nAND JUST RELAX\r\n\r\nYOUR HAPPINESS IS OUR MOST PRIORITY",
    author: "Sanket Dudhat",
    authorPhoto:
      "/st/media/pim/media/user_photo/3d/3db/3dba78e9edc4ccb73b035b0a19e687fa_9f30d27415054fd19d0d9f122c2b857d.jpg",
  },
  {
    name: "TE7A Tarding",
    account: 11956958,
    description:
      "OUR SIGNALS IS THE MOST SAFETY SIGNAL\n1- SAFETY COME FIRST\n2- Xauusd scalping trading profit 20-50% /month\n3- telegram https://t.me/Exness_Libya",
    author: "جبريل المعداني",
    authorPhoto:
      "/st/media/pim/media/user_photo/87/877/877b6713c7783d3b6f5c12eec8ecaeaf_db2a341ceeb445bea9a3257edea84d9c.jpg",
  },
  {
    name: "Golden Horse",
    account: 11956962,
    description: "Gold",
    author: "Tôn Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/29/29e/29e548f753b78d9ebdfa60f2425ba2a6_3a6f8dcbc29841378c167344e8c248f0.jpeg",
  },
  {
    name: "VENKY SUPPLY DEMAND",
    account: 11957373,
    description:
      "I AM USING ADVANCED SUPPLY DEMAND WITH HARMONIC CONFLEUNCE AND MORE. I AMINTAIN RISK REWARD 1:3 ONLY.",
    author: "Venkateshan T s",
    authorPhoto: null,
  },
  {
    name: "Forex Scalping",
    account: 11957665,
    description:
      "Scalping is a trading style that specializes in profiting off of small price changes and making a fast profit off reselling. Scalping requires a trade",
    author: "HADY SAAD",
    authorPhoto:
      "/st/media/pim/media/user_photo/31/314/3143aebbcc7c4e99f8ba1d1edae03664_f634e94379c644fbbe8468ac2aa10152.jpg",
  },
  {
    name: "TNT Trader 1",
    account: 11958052,
    description: "Eat less to preserve Capital\nĂn ít để bảo toàn vốn",
    author: "Nguyễn Thanh Tùng",
    authorPhoto:
      "/st/media/pim/media/user_photo/a0/a00/a00cef094debaf07d96e5cc2ceb3ddc3_c93c12438f314941b0a93221ca1276b1.jpg",
  },
  {
    name: "Homasterfx",
    account: 11958226,
    description: "DCA volume hợp lý!",
    author: "Xuân Hổ Hà",
    authorPhoto: null,
  },
  {
    name: "顺势而为躺在趋势上赚钱",
    account: 11958475,
    description: "顺势而为，追涨追强势行情为主，见反转信号抄底抄顶为辅",
    author: "继恒 骆",
    authorPhoto:
      "/st/media/pim/media/user_photo/2e/2e8/2e803e5ef39446217587e3c2da8a4af0_048e8fa1d7084ba8adcbec637595a4f5.jpeg",
  },
  {
    name: "FinbrellaTech",
    account: 11958822,
    description:
      "Based on technical Analysis, using 55 indicators effectively. All trading are manual. I avoid trading just before and after news",
    author: "Arun Kumar",
    authorPhoto:
      "/st/media/pim/media/user_photo/c4/c47/c471670b89734c08c93dccfe7ae8d8ab_e15158899bb142d1a1dca0591d047729.jpg",
  },
  {
    name: "EA Gold Hunter",
    account: 11958932,
    description:
      "Pair = Gold Only\nTarget = One Day One Percent\nSharp Entry\nProfitable Entry",
    author: "RITA RAHMAWATI",
    authorPhoto:
      "/st/media/pim/media/user_photo/8d/8db/8db6233e6bd2b6fbaf65cdc37f252720_b81a732ace234a58b7de42acdc7cd8da.jpg",
  },
  {
    name: "Fx 3rd Eye",
    account: 11958976,
    description:
      "I am a hedge trader since 2010, but started social trading from 04/07/2023. Minimum capital $50 only.",
    author: "Rajendra Furde",
    authorPhoto:
      "/st/media/pim/media/user_photo/a1/a10/a10514efeee471a75c7f2abe726ebca0_a91c860ab48e43859ca78ca1a5d4c5ea.jpeg",
  },
  {
    name: "Navya knowledges",
    account: 11959916,
    description: "I USE SL AND TP\nJOIN TELEGRAM CHANNEL @navyaknowledges",
    author: "Neha Saini",
    authorPhoto:
      "/st/media/pim/media/user_photo/41/416/416aefac0cb74cc7013ff373c1da44e8_9337d79bdfea4dcab6938d767c64da3c.jpg",
  },
  {
    name: "SteadyCash",
    account: 11960206,
    description: "เทรดอย่างปลอดภัย",
    author: "เขมจิรา วงศรีทรา",
    authorPhoto:
      "/st/media/pim/media/user_photo/ec/ec8/ec84639a53bb2e6b51a3bac3af6fd34d_1d6cfdf66c8e4f9d8bbd30b7ed746b3b.png",
  },
  {
    name: "Tiger Trader",
    account: 11960257,
    description:
      "Profit comes with risk. You can withdraw your investment at any time.",
    author: "SOMKID KUMPAY",
    authorPhoto:
      "/st/media/pim/media/user_photo/75/753/7537a428c5b78aff29907bc0a1facec7_b6b32434617c452387c696221161e996.jpg",
  },
  {
    name: "Lucky Pro",
    account: 11960351,
    description:
      "*Keep your money *\nTrade EUR GBP AUD  \nProfit 2-5% per month",
    author: "MISS ANISARA INJUN",
    authorPhoto:
      "/st/media/pim/media/user_photo/83/836/83608fc7d2772d6af86481483bddb64e_028d0f3f369a4c08b5e2ad169dca3548.jpeg",
  },
  {
    name: "Gold finger pro Mix",
    account: 11960850,
    description:
      "Goldfinger Pro Mix have several algorithmic approach that combines trend analysis, price action , and volatility indicators.",
    author: "katsuyuki hiroe",
    authorPhoto:
      "/st/media/user_photo/21/21f/21f1140aa123c97ce6d6f77e50246803_7377363a1df041f0859ddaaa792d9d23.jpg",
  },
  {
    name: "Scalping Strategy",
    account: 11961079,
    description: "One of the best Scalping Strategy.",
    author: "Sajid Yakheen",
    authorPhoto:
      "/st/media/user_photo/82/829/82908f344cdb1767a90056c65a1b19fc_5708221afc2f44aea46f55a9e3c456e3.jpg",
  },
  {
    name: "Hedging Strategy",
    account: 11961086,
    description: "One of the best Hedging Strategy.",
    author: "Sajid Yakheen",
    authorPhoto:
      "/st/media/user_photo/82/829/82908f344cdb1767a90056c65a1b19fc_5708221afc2f44aea46f55a9e3c456e3.jpg",
  },
  {
    name: "GIAPHAT NZD-CAD",
    account: 11961363,
    description: "Money never sleep!",
    author: "Phạm Thái Doãn",
    authorPhoto:
      "/st/media/user_photo/70/701/7016095d7db40714feb6bd9a47943110_51c947ac19a34be6bf7f9572f4f88f98.jpg",
  },
  {
    name: "Business Plan",
    account: 11961812,
    description: "Low risk low reward",
    author: "Ghulam  Mustafa",
    authorPhoto: null,
  },
  {
    name: "FOREX WORLD",
    account: 11961920,
    description:
      "FOREX WORLD trader skilled in analyzing currency markets, making informed decisions, managing risks, and executing profitable trades efficiently.",
    author: "SAHAR ABDELRAHIM",
    authorPhoto:
      "/st/media/pim/media/user_photo/d5/d5b/d5bcc3f881003f68262cc6d43e839893_d662b22132a6442daf70941830cf1f47.jpg",
  },
  {
    name: "Anand Copy Trading",
    account: 11962512,
    description:
      "I have been trading with without risk since  last many years..",
    author: "Anand Cholachagudd",
    authorPhoto: null,
  },
  {
    name: "GENERATOR",
    account: 11962729,
    description: "1-2% per day",
    author: "ARIO PAMUNGKAS",
    authorPhoto:
      "/st/media/pim/media/user_photo/23/23e/23e3fd2659b7c824b6cf03a46e84c495_4d71ac7fec0c4d1da56bb8ddec47cf45.png",
  },
  {
    name: "ntp0013686",
    account: 11962997,
    description: "copytrade1",
    author: "Dung Nguyễn Thị Phương",
    authorPhoto:
      "/st/media/pim/media/user_photo/21/213/21386f36577b5bdfbd74966529dbb234_1a652c120fbe43d98c6992ff96ce2e17.png",
  },
  {
    name: "Diamond FX 39",
    account: 11963088,
    description: "Hàng tháng bạn sẽ có một mức lợi nhuận tốt",
    author: "Hoang Quoc Quan Do",
    authorPhoto:
      "/st/media/user_photo/eb/eb6/eb63c0b3e29a7c4ab08accbd0f6f8b9e_5e53af9581c14ea0b1cc6d0bb7a0c3e8.jpg",
  },
  {
    name: "Diamond FX 68",
    account: 11963092,
    description: "Hàng tháng bạn sẽ có một khoản lợi nhuận tốt.",
    author: "Hoang Quoc Quan Do",
    authorPhoto:
      "/st/media/user_photo/eb/eb6/eb63c0b3e29a7c4ab08accbd0f6f8b9e_5e53af9581c14ea0b1cc6d0bb7a0c3e8.jpg",
  },
  {
    name: "Diamond FX 79",
    account: 11963095,
    description: "Hàng tháng bạn sẽ có một khoản lợi nhuận tốt.",
    author: "Hoang Quoc Quan Do",
    authorPhoto:
      "/st/media/user_photo/eb/eb6/eb63c0b3e29a7c4ab08accbd0f6f8b9e_5e53af9581c14ea0b1cc6d0bb7a0c3e8.jpg",
  },
  {
    name: "Diamond FX 139",
    account: 11963097,
    description: "Hàng tháng bạn sẽ có một khoản lợi nhuận tốt.",
    author: "Hoang Quoc Quan Do",
    authorPhoto:
      "/st/media/user_photo/eb/eb6/eb63c0b3e29a7c4ab08accbd0f6f8b9e_5e53af9581c14ea0b1cc6d0bb7a0c3e8.jpg",
  },
  {
    name: "Real Warrior",
    account: 11963532,
    description:
      "1.-Quy tắc số 1: không bao giờ để mất tiền.\n  - Quy tắc số 2: không bao giờ quên Quy tắc số 1.\n2. Chiến lược giao dịch đạt lợi nhuận từ 5-30%/tháng",
    author: "Long Le Van",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/865/865198ef45e73423c8459bd4ec8b5a1a_7d6965ffcc984ebd9426a2e2f0c7979f.jpg",
  },
  {
    name: "Mr Oxygen",
    account: 11963701,
    description:
      "Self trading with proper chart analysis with fundamental and news",
    author: "RUDRAPRATAPSINH RANA",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/ae2/ae25f4fab9cd6a82e6348ea3f1a67ffe_643a64bf328048a290b670cf9476aeff.jpg",
  },
  {
    name: "Shadow walker",
    account: 11963795,
    description: "low profit with stable",
    author: "MR METEE LAORAKWIT",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b9d/b9d10036f8a396de574a2be222d490ca_04fcbcff0d2b485ab5233cf404b22579.jpg",
  },
  {
    name: "gold for good",
    account: 11964181,
    description: "fix good",
    author: "BAGUS BUDIANTO",
    authorPhoto:
      "/st/media/pim/media/user_photo/07/07b/07bae0139ddb58c3eb738f089ae68046_be05d2743d0946e5a77e99f66c0ee665.png",
  },
  {
    name: "Roller Coaster 3",
    account: 11965062,
    description: "Get the profit from forex",
    author: "FENG ZHIYAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/452/4524f6b3c4c76b8724f461285e02eaee_289cbd5dde6242b39bb04bf3f1f53dce.jpg",
  },
  {
    name: "kiếm đồng bạc lẻ",
    account: 11965367,
    description: "kiếm đồng bạc lẻ",
    author: "Văn Hoàng Bùi",
    authorPhoto:
      "/st/media/pim/media/user_photo/10/108/108a84657ed88dc5025c3c2d67e768c9_4abc5cdc46d341bfa1157e68b2e66ed5.jpg",
  },
  {
    name: "STOPLOSS JIMSIMONS",
    account: 11965674,
    description: "SIMONS",
    author: "PHUC LE CONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/4d/4d7/4d71fae769cc34a67a4cdad7cfa5ee7a_edc4fec730f146f19376a16a7b2052a0.jpg",
  },
  {
    name: "FXBangladesh",
    account: 11965793,
    description:
      "✅ Swing Trading | Recommended $500 Investment | Mainly GBP/USD | 10-15% Monthly Return | lot size 0.05-0.10 | Strategy details 👉 https://fxbd.co/copy",
    author: "MD RAKIBUL HOSSAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a0/a0d/a0d0cd02093d31c5a197ed3d9dbcb5da_82cf6e1363904dc9859f96846fa4bb1a.png",
  },
  {
    name: "Project Blue Sea",
    account: 11965815,
    description:
      "Break of structure/ Scalping & Follow Trend\nScalping Short - Long profit\nSL: <10% of Balance",
    author: "SUPAWIT DUMRONGKITJAKARN",
    authorPhoto:
      "/st/media/pim/media/user_photo/2e/2e7/2e72f8e58d439668014e00534d12a265_658aade97e584eac8a23037d630297c3.png",
  },
  {
    name: "LA1 Forex",
    account: 11965943,
    description: "This is Medium Risk investment",
    author: "Allan Lauan II",
    authorPhoto:
      "/st/media/pim/media/user_photo/0b/0b6/0b69c2be07acc71c91fc2b5c4fedb8bc_526a877135de46ac86cb6590c5841bc2.jpg",
  },
  {
    name: "Lubaba Tahmid",
    account: 11966411,
    description: "If you Invest you earn more profit.",
    author: "MD MAKSUD IBN MUSTAFA",
    authorPhoto:
      "/st/media/pim/media/user_photo/eb/eb5/eb5ff8d62ec726eb697a479154f51f3e_7f8612391cde45a6b78109f55d0a43d5.jpg",
  },
  {
    name: "SAXCOIN PROFIT",
    account: 11966943,
    description: "SAXCOIN PROFIT",
    author: "SAID ABD ELGHAFFAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/33/33c/33c6aaf9975b416db7e9c89fd28cf0ce_29ddb2fc5dd046c1964fb879f87b2265.png",
  },
  {
    name: "SAXCOIN PROFIT",
    account: 11966995,
    description: "SAXCOIN PROFIT",
    author: "SAID ABD ELGHAFFAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/33/33c/33c6aaf9975b416db7e9c89fd28cf0ce_29ddb2fc5dd046c1964fb879f87b2265.png",
  },
  {
    name: "ِPro Trading",
    account: 11967069,
    description: "GBP\nGold",
    author: "Amr Fahmy",
    authorPhoto:
      "/st/media/pim/media/user_photo/df/dfd/dfdd1e35bcd6696a267f3839b38c817d_2a03242a706b407886e092907c0a8dd3.jpg",
  },
  {
    name: "Full Time 4U",
    account: 11967076,
    description:
      "10% lợi nhuận mỗi tháng.\n\nhttps://one.exness-track.com/a/gca4kwrhxu",
    author: "Phạm  Ngọc Hưởng",
    authorPhoto:
      "/st/media/pim/media/user_photo/a9/a93/a93d11e7336c17a1abedac8285ffb661_187eb546184e45eb92aaef563993602f.png",
  },
  {
    name: "SCAPING GOLD",
    account: 11967532,
    description:
      "- Để tăng tính an toàn. Vốn up 1k $.\n- Giao dịch 3 mã Gold. EU. ACa.\n- Vốn thấp. Lợi nhuận. SL mỗi mã 200$ để ACE an tâm\n- Zalo 0988912431 để giao lưu",
    author: "TRẨN LỘC",
    authorPhoto:
      "/st/media/pim/media/user_photo/bc/bc0/bc063170a3eb96dc8a1d67500e9964cc_51c582e88ea04bd399d08a14327bbb36.jpg",
  },
  {
    name: "Gold Max",
    account: 11967743,
    description:
      "Ouro: Segurança e Crescimento combinados. Proteja seu patrimônio e aproveite o potencial de valorização nesse ativo precioso.",
    author: "Michel da Silva Martins",
    authorPhoto:
      "/st/media/pim/media/user_photo/74/747/74721acd0bab2264c3b8ae066596fbf7_8c87947378b2482b8e0cef66f12f2e50.png",
  },
  {
    name: "GL_endou000",
    account: 11968349,
    description: "a",
    author: "真理子 林",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/457/4573ae88620da32efc53d64956b8d976_ecdfd9d2b46f430bb4c4243b5e08773c.jpg",
  },
  {
    name: "Happy Gold 1",
    account: 11969004,
    description:
      "Chiến lược thể hiện rõ tính kiên nhẫn, sự nhạy bén và khả năng sinh lời ổn định",
    author: "Hoàng Trung Kiên",
    authorPhoto:
      "/st/media/pim/media/user_photo/52/52c/52cf0a919ee62e005b29c0b6795f14ef_c572d5b752954f07be35c9b81d486b31_wbYtlMX.jpg",
  },
  {
    name: "Destination Infinity",
    account: 11969115,
    description: "if you like my strategy, you can invest here..",
    author: "Nasrin Akther",
    authorPhoto:
      "/st/media/user_photo/8f/8fa/8fa0f881962604a9dcc8dfcd4c82687a_8e3dd955a2574a20b0286307e88453c6.jpg",
  },
  {
    name: "Smart Strategy 2",
    account: 11970076,
    description:
      "Estrategia 2\nRisk Magnagment Designed for 10k account\n1k is needed for work\nI am using 2k as margin to give more ROI but use risk magnagment . Thanks",
    author: "Luis Cordova",
    authorPhoto: "",
  },
  {
    name: "Velociraptor Robot Z",
    account: 11970105,
    description: "Sniper & Scalping",
    author: "MR NORACHAI TONGNOK",
    authorPhoto:
      "/st/media/pim/media/user_photo/72/726/7262ba23095265f4d403f577ee6c330e_4bdd2d5492bf467b9470df6d25106054.jpg",
  },
  {
    name: "Copy Trade Fx Pro",
    account: 11970303,
    description: "Win! Win!",
    author: "Hà Cao Xuân",
    authorPhoto:
      "/st/media/pim/media/user_photo/b6/b62/b627c64786dc342c13f1b7dc4a37eea1_832b5ee09aeb4018970dba3bf0e42093.png",
  },
  {
    name: "A BB TRADING",
    account: 11970866,
    description: "I LOVE FOREX",
    author: "AVISHEK SAHA",
    authorPhoto:
      "/st/media/pim/media/user_photo/1b/1b6/1b60b93af192050086fc2cd98f33cb1c_0fe33ed5eeeb4ee2a1c78ddb652173e1.png",
  },
  {
    name: "ForexQuantTrade",
    account: 11971333,
    description:
      "Optimized EA: Buys on dip using momentum & grid martingale. High DD, but yields good portfolio gains.",
    author: "Wittawat Boonyanuwat",
    authorPhoto:
      "/st/media/pim/media/user_photo/9d/9d7/9d7248e121a1223f9a4b45cff885af79_b75ae66bb9fa431ca040aba9d77b3d7e.png",
  },
  {
    name: "GL_Ito00000",
    account: 11971796,
    description: "0",
    author: "真理子 林",
    authorPhoto: null,
  },
  {
    name: "SDK MASTER-Trend",
    account: 11971820,
    description:
      "Profitable forex trader. Copy my trades for success. Consistent gains, risk management, and transparent insights. Let's grow together!",
    author: "Sandeep Katkam",
    authorPhoto:
      "/st/media/pim/media/user_photo/73/73e/73e9451a97b532bd927ab859c207d9e8_dc5cc83c50d546c7be7d63f3c39a1b78.jpg",
  },
  {
    name: "Growth Horizon CC",
    account: 11972829,
    description: "Use Moving Average and Advance money management",
    author: "MR SIRAPAT THUAMPHIWTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/ba/bac/bacc4860df3b7449cc5af802c64e9edd_2e878d2f255d40e798d2f21adc7ce070.jpg",
  },
  {
    name: "FX Strategy Fund",
    account: 11973461,
    description: "EURUSD",
    author: "Ashraf Kamel",
    authorPhoto:
      "/st/media/pim/media/user_photo/dc/dce/dcea750001db99cfb9a774b8f5d8f84e_43f47eed223c436d9729b291b74b1a0e.jpg",
  },
  {
    name: "SVS FOREX 777",
    account: 11974048,
    description: "Respect golden rule: Patience and risk management",
    author: "VANSAR SUON",
    authorPhoto:
      "/st/media/pim/media/user_photo/82/827/827a0ff8f0cd524ac9fb305cdbbd39a8_8d8cd3946c9848de8f2f83ffe5135ea1.jpg",
  },
  {
    name: "EUR-USD Safe trading",
    account: 11974176,
    description: "stable profit",
    author: "Mai Mohamed",
    authorPhoto:
      "/st/media/pim/media/user_photo/95/95b/95b2e0692348e20d73188d69462f4455_a7c0aca64d864b7fa589dcd1170b6a93.jpg",
  },
  {
    name: "Smart_Scalping",
    account: 11974205,
    description:
      "Stable Profit # Swing Trade&Scalping  Monthly target is around 5%-10%",
    author: "อัครวิชช์ สุวรรณรัตน์",
    authorPhoto:
      "/st/media/pim/media/user_photo/d2/d2b/d2b2ef4bbca7fb7707b752f603327950_f5c211ed870143b1a05c231982aca7c6.jpg",
  },
  {
    name: "Sustain Trade",
    account: 11974687,
    description:
      "Scalping, intraday, swing and longterm. Use SL or hedging base on trend, money management, risk management, draw down, and total profit",
    author: "ROBBI ST",
    authorPhoto:
      "/st/media/pim/media/user_photo/ec/ece/ece40fd111f2b9ed80788dc916de7a53_9b776e652fc34dc99d6cf357c9b5d03e.jpg",
  },
  {
    name: "DaytradeXAUUSD_Min30",
    account: 11975720,
    description:
      "Daytrade XAUUSD , Profit target 20-50% /month ,\nDowTheory + Fibo ,\nAll Order set SL and TP ,\nMin. Capital 30 USD",
    author: "Pramuk Wichit",
    authorPhoto:
      "/st/media/user_photo/0a/0a8/0a8e4c2ca1fedf05c9c42983a8dabc9a_d13db84137b3404a8d754ef1f18210a1.jpg",
  },
  {
    name: "gold hunter nhica02",
    account: 11976016,
    description:
      "Profits grow steadily. Relax and rest because your money is working for you",
    author: "Tuan Tran Minh",
    authorPhoto:
      "/st/media/pim/media/user_photo/de/de2/de21da54042f99fd5813dcfcc525de0e_398390edca694e3eb558a2b5ff4599c9.jpg",
  },
  {
    name: "INK FOREX",
    account: 11976870,
    description: "Swing trading. Price action trading. Scalping.",
    author: "Clement Kwofie",
    authorPhoto:
      "/st/media/pim/media/user_photo/65/65f/65f19f77c03ab1ca30249b83baa59a8d_67b69d68cdf74673af0c5bcbca47c94e.jpg",
  },
  {
    name: "Conservador",
    account: 11976989,
    description: "2 a 5% ao mês",
    author: "Sergio Alves Padilha Ribeiro",
    authorPhoto:
      "/st/media/user_photo/20/20f/20fc06e55f9011339a9159d9576ef1a6_b1a7950d62f14007824c32bb01e5f452.jpg",
  },
  {
    name: "Rising Star",
    account: 11977022,
    description:
      "- Profit estimate 8% - 25% / month\n- May u can see my statistic always going up & consistent",
    author: "ELISABETH LILIAWATY",
    authorPhoto:
      "/st/media/pim/media/user_photo/92/92c/92ca2ee15ce9495cd7cd3b1b42dd732b_32874b1ec2b94f158de1cd63bda70659.jpg",
  },
  {
    name: "Safe Invest",
    account: 11977221,
    description:
      "1. Target 5% per month.\n2. Safety first, please be patient.\n3. Trading hours: US session.",
    author: "HOÀNG MẠNH CƯỜNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/ea/ea6/ea646fd06370e74d18843132c195d40c_2614c63c11804c139a79aa4af9d21a32.png",
  },
  {
    name: "ALPH4INVEST-PRO",
    account: 11977244,
    description:
      "Artificial Intelligence has been performing in the financial market for 4 years, seeking low risk and excellent average  profit 15-20% per month.",
    author: "Rosangela de jesus souza",
    authorPhoto:
      "/st/media/pim/media/user_photo/3a/3a0/3a076f23b76f954cfb9cb4d7602ec394_0942e89838fa42b38b6e9bc87f192ac0.png",
  },
  {
    name: "Anna Billionaire One",
    account: 11977435,
    description: "Mutilot open Oder 2Way",
    author: "ฐนิษฐา โสนางาม",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f5a/f5a6b321b3145c5aa139a2193137b591_1b3d4261dd96496ab27e7427865ab49f.jpg",
  },
  {
    name: "Hanhpro_01",
    account: 11977570,
    description: "Trading to the rich!",
    author: "Hạnh Nguyễn Thị",
    authorPhoto:
      "/st/media/user_photo/a9/a90/a90a230fc04469a71bc49cd850392100_4c6eef6cf58349bc9e7843e1c7e33868_wKOrKLs.png",
  },
  {
    name: "Self Made Business",
    account: 11977604,
    description:
      "Stable Profit\nLow risk high return\nTarget 5 -10% /month\nSwing & scalping trading\nStrategy back test 10 year...",
    author: "SUMAN BALA",
    authorPhoto:
      "/st/media/pim/media/user_photo/8b/8b9/8b963f38d0771fda4accbea6ffca84a4_0505d26cf5864298b143f48e51964713.png",
  },
  {
    name: "Norme Trader",
    account: 11978295,
    description: "Day Trade",
    author: "Lertarit Poophat",
    authorPhoto:
      "/st/media/pim/media/user_photo/64/64d/64dd01bd327547e3ab700e027c467191_9d6277880be64e8d863d4bb40cc3007e.png",
  },
  {
    name: "USDJPYminor",
    account: 11978401,
    description:
      "USDJPY specialist follow the trend Be content with a small yield.",
    author: "息吹 野田",
    authorPhoto:
      "/st/media/pim/media/user_photo/de/de0/de0257c8cc732b150e5b41637abd011c_bf5259cea7af488fbafcf6fdf0f55011.png",
  },
  {
    name: "HT-TRADING",
    account: 11978444,
    description: "AAAAAA",
    author: "HUM HUYNH",
    authorPhoto:
      "/st/media/pim/media/user_photo/99/994/994f2272b9621a606460af445fab3b64_90719074674e43c19bd40e9e66def5ca.jpg",
  },
  {
    name: "GL_Masubuchi000",
    account: 11978737,
    description: "a",
    author: "真理子 林",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/457/4573ae88620da32efc53d64956b8d976_ecdfd9d2b46f430bb4c4243b5e08773c.jpg",
  },
  {
    name: "Gold Roster TBH",
    account: 11979021,
    description: "Xu hướng Tiền Tệ",
    author: "Van Hai Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/b2/b2c/b2ca0ef2675fe7fdd91c7a030e5d1941_08f9a887fbc84601b3da0a17c5a43d5d.jpeg",
  },
  {
    name: "DemandAndSupplyZone",
    account: 11979218,
    description:
      "Expectation 5-20% per month.\nWait price to zone demand or supply. Plesse be patient and wait. safety first\nAlpha strategy use leverage for trade.",
    author: "Adisorn Mayang",
    authorPhoto:
      "/st/media/pim/media/user_photo/18/18a/18a6fa19b5b2fc6992a270dc4b779824_75c3e52891324c15bb64b7e36f814d22.jpg",
  },
  {
    name: "PHẠM HOÀNG TUỆ AN",
    account: 11979521,
    description: "Tâm an nhiên, đường đi sẽ thông thoáng !",
    author: "Them Pham",
    authorPhoto:
      "/st/media/pim/media/user_photo/27/275/275f3aa5a8547c1099b8c86cfc294a71_3ed606ef1fe54bcaa6106119d434aba5.jpg",
  },
  {
    name: "FOREX IN HAND",
    account: 11980245,
    description:
      "FOREX IN HAND we trade not like other trader we have very safe strategy",
    author: "ELDEEN ELDEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/603/60360f065d7cb7f6622240dd1855a05d_d915f6c58f5d49728e53aa36f93c9922.jpg",
  },
  {
    name: "Gold Signal",
    account: 11980314,
    description:
      "From my experience and education I will confirm the best value to achieve. I use AI & critical analysis to preserve your investment secure.",
    author: "REZAUL KARIM",
    authorPhoto:
      "/st/media/user_photo/2d/2d0/2d0333e307307ce1760600741a105963_fa5cd61784e34c0a99ead47d9111af02.png",
  },
  {
    name: "FOREX IN HAND",
    account: 11980333,
    description:
      "FOREX IN HAND we trade not like other trader we have very safe strategy",
    author: "ELDEEN ELDEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/603/60360f065d7cb7f6622240dd1855a05d_d915f6c58f5d49728e53aa36f93c9922.jpg",
  },
  {
    name: "Nunow Trader",
    account: 11980425,
    description:
      "Profit always comes with risk. You can withdraw your investment at any time.",
    author: "SOMKID KUMPAY",
    authorPhoto:
      "/st/media/pim/media/user_photo/75/753/7537a428c5b78aff29907bc0a1facec7_b6b32434617c452387c696221161e996.jpg",
  },
  {
    name: "MGM  FOREX",
    account: 11980733,
    description: "MONTHLY 10 TO 20 %",
    author: "MOHAMMED GULAM MOHIUDDIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/70/701/70108e080e3c4b5f311ed32208145ed4_0f0dec73288845d3bf83060de6bb16dd.jpg",
  },
  {
    name: "GOLD-USD-BTC",
    account: 11980853,
    description:
      "*Every day 0 to 4% profit \n*following big strategy \n*just wait and watch.  \n* 95% accuracy signal \n*Low risk,\n*Trust me when I Trading",
    author: "Nurullah",
    authorPhoto:
      "/st/media/pim/media/user_photo/44/445/445cd5713e54a44d99cc993473449b07_0493777a969542e5abc47544bd78f6dd.png",
  },
  {
    name: "FxSMM-Standard",
    account: 11980885,
    description: "EARNING CONSISTENT PROFITS",
    author: "UGOCHUKWU K OZIRI",
    authorPhoto:
      "/st/media/user_photo/39/399/399cb60a72e05e6b033f599ffea4402b_17f5355f1dee4b2c8ceae1e998f83418.jpg",
  },
  {
    name: "RathSuebGun",
    account: 11980940,
    description: "Swing trade\n2% risk per trade\nReward to risk ratio >1.5",
    author: "RATHAPOL SUEBSINSATCHAWONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/dc/dc1/dc1759a5ac7eb18a7124e6d13c47bed3_66264f018446424792c836ca28b41725.jpg",
  },
  {
    name: "THE ONE",
    account: 11981071,
    description: "THE ONE  very safe trade with high profit",
    author: "OLA SAID ABD ELGHAFFAR RASLAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/457/457e28ac7f9ebe65a753f2d05f639468_5bb1a82cb25a4f40b473d190c6aefb6d.jpg",
  },
  {
    name: "MAN OF STEEL",
    account: 11981096,
    description: "MAN OF STEEL",
    author: "HMED DEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/47/47d/47dff44a6a3d2d356f5dffc97716a8d9_410c9ad3860a47e6a694425301f24fa6.jpg",
  },
  {
    name: "DEFINE YOUR WORLD",
    account: 11981235,
    description:
      "Short Trade, Protect portfolio and earn profits. Close all order in the day and don't forget to use the money you earn !",
    author: "Varavut Nithipakorn",
    authorPhoto:
      "/st/media/pim/media/user_photo/37/37a/37a7b072e5835e690480fa331417ab6b_7f0713541c45425ca453a3c0ade88397.jpg",
  },
  {
    name: "Sky Trading Hub",
    account: 11981445,
    description:
      "🚀 Welcome to the world of Smart Money in Forex trading, where financial prowess meets strategic brilliance! 🚀",
    author: "Srikant Yadav",
    authorPhoto:
      "/st/media/pim/media/user_photo/d0/d05/d05efbf3d9c30db7c67a21951bb90b3e_11ea82694ae441ab8c6638e6f46cd3f5.jpg",
  },
  {
    name: "BomahdiFx 2",
    account: 11981617,
    description:
      "تداول بسيط بمخاطرة قليلة جداً\n( Daily Risk 2% ) \n- يمكنك بأي وقت إلغاء النسخ\n- لا يوجد تعويض في حال الخسارة",
    author: "Hasan Alenezi",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/69c/69ccd9511c5cdb559cc8843a2aa2b570_8484e6d788cb4d3894c0be74e5fe5c75.PNG",
  },
  {
    name: "Super Trading",
    account: 11981627,
    description: "If u want double your wallet  that's your place",
    author: "Mostafa Mahmoud mohamed ahmed",
    authorPhoto:
      "/st/media/pim/media/user_photo/40/40c/40cc58dea8abf87dc449350b31881821_397ce6eeb7424cf5bdd5bc37f680480a.jpg",
  },
  {
    name: "kitatu2016",
    account: 11981681,
    description: "Chiến lược rùa , đầu tư có lợi nhuận an toàn đầu tư ,",
    author: "Việt Vũ Quốc",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/501/501098263c4dd5e02f72f0d20774f085_0fac862771cb40e2a4af873bfe24062a.jpeg",
  },
  {
    name: "WORLD TRADERS",
    account: 11982292,
    description: "WORLD TRADERS",
    author: "MOHAMED ABDELWAHAB",
    authorPhoto:
      "/st/media/pim/media/user_photo/f7/f73/f73a614e58d30c6ce418430fd1cdd61a_3c673d151d1d4159b797cb1adf68e9e0.jpg",
  },
  {
    name: "MONEY MAKER 2",
    account: 11983002,
    description: "MONEY MAKER 2",
    author: "Mohamed Mostafa",
    authorPhoto:
      "/st/media/pim/media/user_photo/e7/e7e/e7e40b12390d3168b32a0fa48d09336b_b70af4847b744d59973ee71fc01b6498.jpg",
  },
  {
    name: "MONEY MAKER",
    account: 11983022,
    description:
      "MONEY MAKER  WORKING WITH ZOMBIE INFECTION !_! >> IF any loss happen then the system will CUT OFF the infection !!!!!! APPLY this proverb in EQUITY",
    author: "Mohamed Mostafa",
    authorPhoto:
      "/st/media/pim/media/user_photo/e7/e7e/e7e40b12390d3168b32a0fa48d09336b_b70af4847b744d59973ee71fc01b6498.jpg",
  },
  {
    name: "TRADE HARD",
    account: 11983881,
    description:
      "TRADE HARD We will all time to let you make high profit so we TRADE HARD for you",
    author: "Fatma  Anwar",
    authorPhoto:
      "/st/media/pim/media/user_photo/56/562/5622ba4f066d22c51b9c018c84a9e1e5_db4c6d9e5f974d5ca44193e5164caf7a.jpg",
  },
  {
    name: "Vietnam Trader",
    account: 11983985,
    description: "Trader from Vietnam",
    author: "Hùng Ngô Xuân",
    authorPhoto:
      "/st/media/pim/media/user_photo/4f/4f1/4f1958a21b3bb3d8c79a06f8208bdd89_8a59004fdb7c4bb58e4885d72a39aefe.png",
  },
  {
    name: "Tho26052018",
    account: 11984038,
    description: "AI",
    author: "Tiб»‡p LГЅ",
    authorPhoto: null,
  },
  {
    name: "Zainfx autotrade 1",
    account: 11984168,
    description:
      "Zainfx autotrade - low risk, our target is to get a constant profit % (5 - 10 / M), your entry means you are willing to take risk on your capital.",
    author: "Zainab Alhalwachi",
    authorPhoto:
      "/st/media/pim/media/user_photo/0a/0a7/0a778fc6b9e1b8033f9c50c15131adf2_3a102fae59474bceb897a49e69cbd49e.jpg",
  },
  {
    name: "DRIVE ANGRY",
    account: 11984513,
    description:
      "DRIVE ANGRY The new way to make profit from Forex with low risk  work in very safe zone on your money",
    author: "HADY SAAD ELDEEN AHMED SAAD ELDEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/01/011/011531291b549c2bf86905b94f6f4209_5672bdf8396545fb869eebcc5dd54cab.jpg",
  },
  {
    name: "Classic Trader",
    account: 11984809,
    description:
      "Trade with safety strategy. Only open trade on best timing to enter the market. Enjoy low risk and consistent profit.",
    author: "Michael",
    authorPhoto:
      "/st/media/pim/media/user_photo/95/95c/95c6615979d1747cf9e39ae32440e552_28fc83c4b28a4d14bf182145c477896f.jpeg",
  },
  {
    name: "Gold killer 1",
    account: 11985344,
    description:
      "daily 1% profit\r\nFollow the GOLD KILLER community channel on WhatsApp: https://whatsapp.com/channel/0029VaWPXwv1Xquci9QlD525",
    author: "muhammad bilal",
    authorPhoto:
      "/st/media/pim/media/user_photo/8f/8f8/8f8939a591431115e316437fb0cb7245_db58d311267a4697bc19159b495c770a.png",
  },
  {
    name: "RSI Ultra boost EA",
    account: 11985415,
    description:
      "Xauusd scalping trading profit 15-20% /month \n-EA Expert advisor swing trade\n-Take profit every day\n-Low risk high return.\n-Warranty back test 10 year",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "FAST PROTOCOL",
    account: 11985726,
    description: "FAST PROTOCOL fast profit good system for make fast profit",
    author: "AHMED AHMED",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8a8/8a8ade816612b27ccd7f8d6e8e45a151_c6fc6197aad844bea1a77ac99f75c0ba.jpg",
  },
  {
    name: "FAST PROTOCOL",
    account: 11985853,
    description: "FAST PROTOCOL fast profit good system for make fast profit",
    author: "AHMED AHMED",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8a8/8a8ade816612b27ccd7f8d6e8e45a151_c6fc6197aad844bea1a77ac99f75c0ba.jpg",
  },
  {
    name: "Pegasus",
    account: 11985954,
    description: "Stay Stable\nStay Stiff and Steady",
    author: "BINIMOY DUTTA",
    authorPhoto:
      "/st/media/user_photo/25/256/256dea6b17ec8ce49a808ceff319c28f_62613fec739e45b994f4b89ab82554dc.jpg",
  },
  {
    name: "Fundo Conservador",
    account: 11986090,
    description:
      "Preserve seu capital com nosso fundo conservador. Estabilidade e segurança para seus investimentos.",
    author: "Michel da Silva Martins",
    authorPhoto:
      "/st/media/pim/media/user_photo/74/747/74721acd0bab2264c3b8ae066596fbf7_8c87947378b2482b8e0cef66f12f2e50.png",
  },
  {
    name: "Divine Mercy Mix",
    account: 11986213,
    description:
      "- GbpUsd only\n- Martingale max 6 layers (EA) + manual trading\n- https://t.me/DivineMercyCT",
    author: "MARIA SULISTYOWATI",
    authorPhoto:
      "/st/media/user_photo/6f/6fb/6fb4cd729d849a2fd40c059e72d5133b_5c1d4f21ebc04f059ea5dfa494bb8cd0.jpg",
  },
  {
    name: "Storm Forex",
    account: 11986249,
    description: "Make Profit When Forex got Storm",
    author: "Erwin Erwin",
    authorPhoto:
      "/st/media/pim/media/user_photo/00/003/0034cd953ac988df11cf2cc3a987757c_e7fbe97d2ee344649f6b8097b01ab06b.jpg",
  },
  {
    name: "老鼠爱大米EURUSD",
    account: 11986308,
    description:
      "月化10%以上，长久稳定，始终坚持以技术为核心，做最干净质量最高的技术支持服务合作方",
    author: "玉宾 吴",
    authorPhoto:
      "/st/media/pim/media/user_photo/c3/c3f/c3faaead8cb4fb78d464ad4ccafded1f_79be72ccf7a04cab80ee4e514d305903.jpeg",
  },
  {
    name: "BEST FOREX TRADING",
    account: 11986402,
    description: "I use more than 3 indicators for good accuracy.",
    author: "rajesh kumar saini",
    authorPhoto: null,
  },
  {
    name: "Coppermine",
    account: 11987040,
    description: "XAUUSD",
    author: "zhang shu",
    authorPhoto:
      "/st/media/pim/media/user_photo/9e/9e4/9e44ccffb023a4ca152aab66e48f8840_73f0b8b742da4201b306bbdeba496787.jpeg",
  },
  {
    name: "Forex-Trading-Robot",
    account: 11987173,
    description: "Forex-Trading-Robot",
    author: "Moumtaz  EL Chami",
    authorPhoto:
      "/st/media/pim/media/user_photo/11/117/117d628b67660e795a55164e30c98a83_c420e1f942024462a51b7b364e3ad905.jpg",
  },
  {
    name: "Bhatti Traders",
    account: 11987236,
    description:
      "Do not anticipate and move without market confirmation - being a little late in your trade is your insurance that you are right or wrong.",
    author: "Abrar Nadeem",
    authorPhoto:
      "/st/media/pim/media/user_photo/5c/5c0/5c0804ab14fc3aa181a4ff4a3031e18e_7ef60185e1b146c4bd9f31db22b51f70.jpg",
  },
  {
    name: "RUBY  PHAM",
    account: 11987395,
    description: "Chuyên giao dịch vàng",
    author: "Phạm Thị Mai",
    authorPhoto:
      "/st/media/pim/media/user_photo/77/773/773cc284c6d91f8b4b383561cc97832f_4dcf1ce162d442958bf8af96fb49f9b1.jpg",
  },
  {
    name: "7Days System",
    account: 11987520,
    description:
      "Trading pairs: AUDCAD, NZDCAD, AUDNZD\nMy partner link: https://one.exness-track.com/a/vuchiqj5",
    author: "Vũ Trần",
    authorPhoto:
      "/st/media/pim/media/user_photo/d4/d4c/d4cc448f84a7760ccf40edc7f4bd294f_44f39332785041b38256b2d9f34e7c85.png",
  },
  {
    name: "EMOEATrader001",
    account: 11988086,
    description: "Just trading.",
    author: "HAIJING JIANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/92/926/926ebaa44fe50e577ef501aaf178600f_e3bde8b158a646b2bf81202ca9d256c1.jpeg",
  },
  {
    name: "Gold Trading Robot",
    account: 11988158,
    description:
      "A robot that has been researched for more than 10 years, for running XAUUSD in all types of market condition",
    author: "Thanh Ninh Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/bd/bd4/bd4a44edb3bb8203f5b13e8c1a56b126_294cd12a42d349dcb7230071a5c2ff9c.jpg",
  },
  {
    name: "Ansh_Forex",
    account: 11988326,
    description:
      "The Goal of a successful trader is to make the best trades, Money is secondary. I always trade with SL whether it is small or big equity.",
    author: "Anoop Chauhan",
    authorPhoto:
      "/st/media/pim/media/user_photo/32/328/32800ca9764a44415ed7199940c016d5_b7468299787743dda5bcba7c765ccf6d.jpeg",
  },
  {
    name: "ForexHedgeQuant",
    account: 11989314,
    description:
      "Hedge XAUUSD on false breaks for risk mitigation during reversals.",
    author: "Wittawat Boonyanuwat",
    authorPhoto:
      "/st/media/pim/media/user_photo/9d/9d7/9d7248e121a1223f9a4b45cff885af79_b75ae66bb9fa431ca040aba9d77b3d7e.png",
  },
  {
    name: "EA autotrade 18x",
    account: 11989719,
    description:
      "Fully automatic trading with intelligent algorithm.\nUse martingale for a steady monthly profit.\nHigh risk setup does not encourage safe investors.",
    author: "Công Chính Phạm",
    authorPhoto:
      "/st/media/pim/media/user_photo/08/08d/08d935cf10d38e4b02a3e6cf764293f6_083ef79a8c7e4755a04caf721c1d204f.jpg",
  },
  {
    name: "6 to 10 Percent",
    account: 11990208,
    description:
      "6-10% monthly profit with high safety, the trading method has been verified by a team of experts.",
    author: "Khánh Linh Đỗ",
    authorPhoto:
      "/st/media/pim/media/user_photo/d1/d1f/d1f6c8d680df251a43d7bba8b7c6ada8_ace433ab4bbb4c20bb75113e48600e69.png",
  },
  {
    name: "FP Action Strategy",
    account: 11990235,
    description: "Fibonacci Price Action",
    author: "santoshini gouda",
    authorPhoto:
      "/st/media/pim/media/user_photo/e3/e31/e319e4198750763334ec2bdee5a2df2a_66ce2020aed84425b3640bb2c946ad3d.JPG",
  },
  {
    name: "SAFE NO RISKY",
    account: 11990573,
    description:
      "SAFE NO RISKY  using risk management strategies, setting stop-loss orders, diversifying investments, and staying informed to protect capital",
    author: "HITHAM ELMARABY",
    authorPhoto:
      "/st/media/pim/media/user_photo/cc/cc6/cc6bced682b7e0fa85bd2146f115e788_4592f0200e6f4ee0a52b7252c2e44881.jpg",
  },
  {
    name: "RFFreedom-Plus",
    account: 11991335,
    description: "EA combinations：follow the trend, step by step。",
    author: "Sheng Lu",
    authorPhoto:
      "/st/media/user_photo/d9/d93/d935f37ccd8171019a5c3e0363161951_b74d3506afbd4f44a3658cc82452dccf.jpg",
  },
  {
    name: "หมวยนักลงทุน PRO",
    account: 11991430,
    description:
      "Long-Term (Monthly) investment +10%\nเน้นการลงทุนระยะยาว(รายเดือน) ทุกการลงทุนมีความเสี่ยง พิจารณากระจายการลงทุนในสินทรัพย์ที่ต่างกันเพื่อความปลอดภัย",
    author: "MISS SIRIGAN YIMSOPA",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5ad/5ad586820b97645de4ae99ec05e47011_674f5862bc864e66a768951557e0421a.png",
  },
  {
    name: "elghoul trading",
    account: 11991700,
    description:
      "التداول باستراتيجية خاصة تحقق ربح شهري لا يقل عن 30%\r\nلمتابعتنا علي التليجرام  https://t.me/elghoultrading",
    author: "said elghoul",
    authorPhoto:
      "/st/media/pim/media/user_photo/52/520/5205510b4117e967cb36c11041ccca24_aefc50299adf472f8e6f43cba67601c7.jpg",
  },
  {
    name: "Phân tích kỹ thuật",
    account: 11991867,
    description: "Đáng theo mô hình giá và lực nến",
    author: "Lê Quốc Khánh Lê",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/629/6295e81a82021f6fa3e2ee613f8b3f93_8f1a34e9dd5f42db8ea9e77d31a86596.png",
  },
  {
    name: "DHOHO EA TRADER I",
    account: 11991869,
    description: "Start from $500,\nAsk me on \nhttps://t.me/+_nvIj1lpW0s3YzNl",
    author: "Witurseno Witurseno",
    authorPhoto:
      "/st/media/pim/media/user_photo/b7/b72/b7240b824346bade031e71c81dc0587d_9c2349c7b21447c8b22d4d29f3a8965a.jpg",
  },
  {
    name: "Professional trader2",
    account: 110001211,
    description:
      "本信号EA开单，专业人工风控，帮助亏损投资者实行盈利，相信我一定不会让你失望。\n\n最大化利用资金，最大止损50%=230美金，月收益120美金左右，年收益目标1000美金，跟单要有耐心，耐心等待终会有惊喜与收获。\n\n请用自己能力资金投入，不想一直暴富，只要细水长流！",
    author: "必仕 梁",
    authorPhoto:
      "/st/media/pim/media/user_photo/1c/1c4/1c4d55df3680402f2eeb911f1ca99939_d91f48d5f3d34eb493e92029fdc620ce.jpg",
  },
  {
    name: "Gold trading",
    account: 110001784,
    description: "Gold trading",
    author: "asma zahoor",
    authorPhoto:
      "/st/media/pim/media/user_photo/c8/c88/c88a4e8d08da97ad1d64efd84b059da4_9d912c7137574adbba442ed4505cc81e.jpg",
  },
  {
    name: "Multiple Factors",
    account: 110002086,
    description:
      "Technical Analysis\nSMC  RTM Elliott wave \nMoney management\n\nให้ความสำคัญกับ การบริหารความเสี่ยง \nTechnical  50%\nMM 50%",
    author: "MISS TASSANAN THECHANANTIPAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/ea/eaa/eaaa7f6c5e014c171ccd69d080bc3169_092ee428100f4d0b8b11628eedc1f315.jpeg",
  },
  {
    name: "Fusion Skull",
    account: 110002127,
    description: "All Hybird",
    author: "PONGPITAYA THOWICHA",
    authorPhoto:
      "/st/media/user_photo/ca/cac/cacf81a2ed3aa7aa39b216e7ee6587c7_c3f874efbeef41259c64d449fda11019.jpg",
  },
  {
    name: "Investment funds HQ",
    account: 110002130,
    description: "Investment funds HQ",
    author: "Hải Võ Thanh",
    authorPhoto:
      "/st/media/user_photo/50/50d/50d2bffd126321331b58aff8d17059b8_b1a01feb392f49e9a8d25d9e90bb3910.jpg",
  },
  {
    name: "PhoenixProfit Matrix",
    account: 110002890,
    description:
      "In this strategy we Analyse the Chart With his previous Highs and lows also we consider the news of particular currency pair and take Trade.",
    author: "SANDEEP  KUMAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/c5/c52/c52889449260d152e4c4fa556cd29640_4238dd8b1876426991109d626828d3f6.jpg",
  },
  {
    name: "TRADE FOR FREEDOM",
    account: 110003058,
    description:
      "-swing trading\n-trade D1 - 12 cross currency pairs AUD, EUR, CAD, CHF, NZD\n- high profit\n- low risk\n- take profit 10-20%/month",
    author: "VAN DUNG VO",
    authorPhoto:
      "/st/media/pim/media/user_photo/2c/2c4/2c4d155b1da2af93f95df250c4c4febb_b89ce4948b6348c8997185c87c30ed08.png",
  },
  {
    name: "WIN TRADE 1",
    account: 110003257,
    description:
      "WIN TRADE was the result of meticulous analysis, strategic decision-making, risk management, and seizing profitable opportunities efficiently",
    author: "HAISAM TAHA",
    authorPhoto:
      "/st/media/pim/media/user_photo/1e/1e5/1e5f1107f97a6a516b1b5906eee3d709_ba2211b2e190440eaabe7ccee4792a4d.jpg",
  },
  {
    name: "ASJ GLOBAL",
    account: 110003339,
    description: "NO 1 COPY TRADING PLATFORM IN THE WORLD.",
    author: "SK SANIRUL ISLAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/452/452d5201f93de581ee1e32b3bb5bfa4b_7e3f9aa7850b4c3eb419bd7b9459a727.jpg",
  },
  {
    name: "EA SWING MMFFOREX",
    account: 110003369,
    description:
      "Lệnh nhỏ, an toàn bằng siêu robot\nhttps://zalo.me/g/rdalyv772 Backcom 100% tại exness và XM",
    author: "XUAN TAI NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/3f/3fd/3fd640ae53d59eff84e3ad31af5d4050_061c427c57c745f8ad975816884de746.jpeg",
  },
  {
    name: "Compound profit",
    account: 110003865,
    description:
      "This port has a capital of 1300$, traded since 18/1/23 from FBS, moved to copy trade in exness, Elliot Wave trading technique, not OVT, low risk",
    author: "MR UDOM SANGSARATOOL",
    authorPhoto:
      "/st/media/pim/media/user_photo/0a/0af/0aff425a83a925910a89ef1cd0452113_edf8daa6b55241bab02015e6371dd306.jpg",
  },
  {
    name: "xiaoxi trading",
    account: 110003879,
    description: "XAU/USD only",
    author: "NOZOMI TANAKA",
    authorPhoto:
      "/st/media/pim/media/user_photo/de/de2/de2f0e7a50b19d69769fa3c3a3e8f79a_04652d6accfa4711a20471852b8dfd3a.jpeg",
  },
  {
    name: "GrConstTrading",
    account: 110003903,
    description:
      "มีกลยุทธ์ด้วยการเติบโตอย่างคงที่ และกำหนดระดับความเสี่ยงปานกลาง",
    author: "MISS SUTHARAT RATTANA",
    authorPhoto:
      "/st/media/pim/media/user_photo/8c/8c6/8c633be01e4ee8f9ae5582b9175e22f9_a41f4c452e754f5e96be4347255d679b.jpg",
  },
  {
    name: "XAUUSD trading",
    account: 110004478,
    description: "only buy for XAUUSD",
    author: "Thị Việt Trinh Lê",
    authorPhoto:
      "/st/media/pim/media/user_photo/66/662/662806daf1cf2b54ca5af56dd816f275_05a82fbe48fd464599fd500ab095c407.jpg",
  },
  {
    name: "Smart Money Trader",
    account: 110004639,
    description: "trade using Smart Money Concept",
    author: "ANDY CHANDRA",
    authorPhoto:
      "/st/media/user_photo/b1/b18/b18ed93afaf44c36813d9f8102d9d104_03eda9a4b2e944358a1d38cbf43e61bd.jpg",
  },
  {
    name: "inpuz exness",
    account: 110004652,
    description:
      "TRADE ON MOMENT\n\nGrup seleksi Copytrade\nhttps://t.me/seleksicopytrade\n\nGrup Dsikusi inpuz \nhttps://t.me/inpuzFamily",
    author: "IKA HARDIYATI",
    authorPhoto:
      "/st/media/user_photo/7e/7e0/7e0875112d63b949a01743f180770f0c_3691959e28b44866939b2795b5cccdd0.jpg",
  },
  {
    name: "NgocNi1982",
    account: 110005166,
    description: "Tìm kiếm keylevel quan trọng tạo nên lợi nhuận tối đa",
    author: "Vi Ngọc Du",
    authorPhoto:
      "/st/media/pim/media/user_photo/d9/d98/d989e7f81768bdeebbe03030c683333f_2731f76f2a17412a8a993a268766129a.jpg",
  },
  {
    name: "ThuocDoFXDotCom",
    account: 110005509,
    description:
      "Giao dịch theo Thước Đo Tự Động an toàn, bền vững và không rủi ro.\n\nThuNong",
    author: "Lê Thi Huơng",
    authorPhoto:
      "/st/media/pim/media/user_photo/18/18c/18c81d8f08b4cc63e8669d10667c6947_5430bddabbcb476d9b0bdca55081daf8.png",
  },
  {
    name: "win trader gold",
    account: 110006248,
    description: "win trader gold",
    author: "Nhi Giang",
    authorPhoto:
      "/st/media/pim/media/user_photo/b1/b11/b11b1aa1454d2ef90b60d39f72da3e1e_cd14afe2713c41c8a192c5301f1abc71.jpg",
  },
  {
    name: "Alitronz Profit 1000",
    account: 110006453,
    description:
      "Telegram: @alitronz\nhttps://www.youtube.com/@alitronzprofit\nWhatsapp-: +916388030756",
    author: "Wazid Khan",
    authorPhoto:
      "/st/media/pim/media/user_photo/9b/9bf/9bf24ecd66937f7e8b44445b8e70a753_bf7da79e1ca54f9d828a56c9a2f0b733.jpg",
  },
  {
    name: "PRICE ACTION",
    account: 110006457,
    description: "PRICE ACTION",
    author: "manoj kumar sahu",
    authorPhoto:
      "/st/media/pim/media/user_photo/70/703/703b4f5596746ec6036cb4f06f106c5e_c70cb5da57bd4ed380dcfe860ae2e455.PNG",
  },
  {
    name: "MASTER TRADER",
    account: 110006823,
    description:
      "We work in every way to maintain a constant monthly profit level from 2% to 10%, with an annual return that may exceed 100%. Copy you will not regret",
    author: "ISSLAM BEN MANSOUR",
    authorPhoto:
      "/st/media/pim/media/user_photo/e8/e8b/e8b05b7340d6a0ec8273a36c8f292913_fde6256076274d72b6077d88cb61f379.jpg",
  },
  {
    name: "Ryan-nguyen 2",
    account: 110007187,
    description:
      "Welcome : Ryan-nguyen.ca\n\nHigh return investment comes with high risk.\n\nhttps://t.me/ryan13245",
    author: "NGUYỄN CHUNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/55/553/55377ee027b5a8c523b393797f2fa880_fe9d6259b2574f7eadc6a07438dbc3ec.jpeg",
  },
  {
    name: "EA-Quantum-1",
    account: 110008039,
    description: "Quantum technology",
    author: "Sheng Lu",
    authorPhoto:
      "/st/media/user_photo/d9/d93/d935f37ccd8171019a5c3e0363161951_b74d3506afbd4f44a3658cc82452dccf.jpg",
  },
  {
    name: "Lonely Night",
    account: 110008064,
    description: "Using a simple moving average system to stop losses",
    author: "舞凤 王",
    authorPhoto:
      "/st/media/pim/media/user_photo/7a/7a7/7a71aa16457f52a90b8a86cbf5e1ce17_068f84776c014ed3b75bb5f1f59312b7.png",
  },
  {
    name: "Sadaa Vishwas",
    account: 110008300,
    description:
      "Hi dear friends i am trading in forex market 1.5 year experience my trading strategy only long term",
    author: "Sadashiv  Tatakoti",
    authorPhoto:
      "/st/media/pim/media/user_photo/fe/fe0/fe0abcbe3e4b2684d01d9a6ecdc3ef1a_bdb93f22661643d8ace4e49c76cfe5ba.jpg",
  },
  {
    name: "MasterNae QuanTrader",
    account: 110008427,
    description: "Algorithm + Mathematic + Trading System",
    author: "Sanae Jongchanasurakul",
    authorPhoto:
      "/st/media/pim/media/user_photo/58/58b/58bf0ebd8b50f5d33b8c2a6be8b0a7c9_c77d24a442cc4987ad2ce6460e48117b.jpg",
  },
  {
    name: "Day Trade Copy",
    account: 110008804,
    description: "Day Trade Copy",
    author: "MISS VILAI KHAMKAWEEPRAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b9e/b9e7313b3f2e3873544b8047109c1a0b_2d1d138df58b4e1ea26ad04a20ab2d31_BJNU0qq.png",
  },
  {
    name: "Smart Trader EA",
    account: 110008964,
    description: "intraday and swing combination",
    author: "ANITA SETIAWATI",
    authorPhoto:
      "/st/media/pim/media/user_photo/90/90f/90f654903a33c11b8aca7ca130e90790_b160cad173cd46df834c3969df4a3365.jpg",
  },
  {
    name: "Uncox_traders",
    account: 110009493,
    description:
      "Strategy Description Safety of our hard earned money is our first priority. We open trade only when there is best opportunity.",
    author: "Shahafzal Adel",
    authorPhoto:
      "/st/media/pim/media/user_photo/2f/2f2/2f2ff6a9f750fff70b14f1b5a33c4246_e117d20ccc8d4cd1b8054b09cd8eeba0.jpg",
  },
  {
    name: "abastmoringa",
    account: 110009821,
    description: "bienvenue",
    author: "Bouchra El Haouzi",
    authorPhoto:
      "/st/media/pim/media/user_photo/23/234/234db2a89c471857907e5597aa4bb192_cbec5f803e524e1da0104cdc8e932bd5.jpg",
  },
  {
    name: "Recovery with grid",
    account: 110009887,
    description:
      "Open order with specify TP and without SL by using EMA and stochastic indicator.  If wrong way, open more orders with grid until profit > 0",
    author: "Satit Seetad",
    authorPhoto:
      "/st/media/pim/media/user_photo/4b/4b0/4b0af8c4670c17e36db3a1dfd2ffb031_3aa05a0145e743b5b06a37568d0e7e2a.png",
  },
  {
    name: "The Gold Kid",
    account: 110010140,
    description: "target: 10%++",
    author: "ĐÕ THÚY",
    authorPhoto:
      "/st/media/user_photo/78/78f/78fe72332b3cd738aeda8f7412408511_c395a45e4bc44edd9e0fad8ebfbf3585.jpeg",
  },
  {
    name: "EAGLE_VIE03",
    account: 110010503,
    description: "Trading to the Rich!",
    author: "Hạnh Nguyễn Thị",
    authorPhoto:
      "/st/media/user_photo/a9/a90/a90a230fc04469a71bc49cd850392100_4c6eef6cf58349bc9e7843e1c7e33868_wKOrKLs.png",
  },
  {
    name: "MKtrades0923",
    account: 110012073,
    description:
      "- Trade XAUUSD with Elliott Wave\n- Swing & Intraday Trading\n- Instagram : @MKTRADES",
    author: "KETHY",
    authorPhoto:
      "/st/media/pim/media/user_photo/2f/2f7/2f741d94b8d6910b179508202b219713_7c40613b9e98403483c374de668dc498.JPG",
  },
  {
    name: "Hipercube Strategy",
    account: 110012362,
    description:
      "hybrid trading that operates assets in the forex market, we seek a return between 0% to 5% net per month for the client.",
    author: "Edgardo Llanos Bernal",
    authorPhoto:
      "/st/media/pim/media/user_photo/9e/9e5/9e54bfca2b861a3902ccb07050c1a9a2_91f557790f614af08ffdeac2956dac6f.jpg",
  },
  {
    name: "Aggressive Ocean 1",
    account: 110012499,
    description:
      "Using AI and machine learning for multi-asset diversification enables higher risk for greater rewards. Trading pauses at a -30% max drawdown.",
    author: "Tanitas Choeithongsri",
    authorPhoto:
      "/st/media/pim/media/user_photo/41/41d/41d1e99108e5a3f04d05c3e51cc54abb_999ebb4afa6748e5a3fcb888362c6f44_CSJSNph.png",
  },
  {
    name: "Moderate Ocean 1",
    account: 110012503,
    description:
      "Using AI and machine learning for multi-asset diversification strategies.Balance risk to achieve decent rewards.Trading pauses at a -30% max drawdown.",
    author: "Tanitas Choeithongsri",
    authorPhoto:
      "/st/media/pim/media/user_photo/41/41d/41d1e99108e5a3f04d05c3e51cc54abb_999ebb4afa6748e5a3fcb888362c6f44_CSJSNph.png",
  },
  {
    name: "Zainfx autotrade 2",
    account: 110012807,
    description:
      "Zainfx autotrade - low risk, our target is to get a constant profit % (5 - 10 / M), your entry means you are willing to take risk on your capital.",
    author: "Zainab Alhalwachi",
    authorPhoto:
      "/st/media/pim/media/user_photo/0a/0a7/0a778fc6b9e1b8033f9c50c15131adf2_3a102fae59474bceb897a49e69cbd49e.jpg",
  },
  {
    name: "Darkside Fx",
    account: 110012846,
    description: "Mục tiêu lợi nhuận đều, không rủi ro lớn.",
    author: "HOANG GIANG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/d0/d05/d057096063bf588c3cf33239a5932d4f_f4efefe015c8456ba3975f718f79c2d0.jpeg",
  },
  {
    name: "DB Safety Investment",
    account: 110012890,
    description:
      "Trade only on Minor Pair with very small drawdown and give the investor stable profit Monthly (around 2-5%)",
    author: "Fernando Theo Darmawan",
    authorPhoto:
      "/st/media/user_photo/52/52e/52e7db1f41ecbcf0b8daae5789f97801_f900fe4462364a8880843174bfbb3886.jpg",
  },
  {
    name: "Scalp Gold -1",
    account: 110012894,
    description:
      "- Phá vỡ mọi Lý Thuyết Trading .\n- Cắt lỗ vì đam mê, lợi nhuận có ý nghĩa gì đâu.\n\nWebsite: scalpgold.pro\nGroup : https://t.me/ScalpGold_Group",
    author: "TRUNG VI VĂN",
    authorPhoto:
      "/st/media/pim/media/user_photo/9e/9e0/9e09a1d83f812e465b8e2891b29453f9_4897519f359b4da098b414b8b7a64898.png",
  },
  {
    name: "Hanhpro_02",
    account: 110013224,
    description: "Trading to the Rich!",
    author: "Hạnh Nguyễn Thị",
    authorPhoto:
      "/st/media/user_photo/a9/a90/a90a230fc04469a71bc49cd850392100_4c6eef6cf58349bc9e7843e1c7e33868_wKOrKLs.png",
  },
  {
    name: "MMFFOREX MIX FX001",
    account: 110014366,
    description: "Giao dịch nhiều cặp tiền với khối lượng nhỏ và an toàn",
    author: "NGUYẼN TÀI",
    authorPhoto:
      "/st/media/user_photo/3f/3fd/3fd640ae53d59eff84e3ad31af5d4050_6460c8e7eab946c6bf8c894f2f7ecd8e.jpeg",
  },
  {
    name: "Trading Psychology",
    account: 110014455,
    description:
      "Trading Psychology: Mastering Your Mind for Successful Trading",
    author: "SAAD HADY",
    authorPhoto:
      "/st/media/pim/media/user_photo/9a/9ab/9ab5bae5821100ec8ee0c674a544ccee_084297b3e767478eb47c71d4a959e3f2.jpg",
  },
  {
    name: "THUOCCHUOT",
    account: 110014684,
    description: "Eat less and live longer",
    author: "lu van thu",
    authorPhoto:
      "/st/media/pim/media/user_photo/0b/0b1/0b11f2dac023512da5511b0cb88e0c9c_f35dc76abfb0484989859e506b70652e.jpg",
  },
  {
    name: "SmartTrader",
    account: 110016476,
    description:
      "SmartTrader is the leading Forex Trading & Stock Market Charting Software. Analyze Forex, stocks and cryptocurrency markets. Join for Free today!",
    author: "AHMED HADY",
    authorPhoto:
      "/st/media/pim/media/user_photo/9d/9dd/9dd65babf045849b1f3f076d995ed466_8a18bf008e0f495e88702f1ec03cb268.jpg",
  },
  {
    name: "Trading specialist",
    account: 110017291,
    description:
      "量化EA  7*24小时交易，专业人工风控，请放心投资。\n主要交易EURUSD  NZDCAD  AUDCAD  GBPCAD  GBPAUD  AUDNZD等货币兑\n\n每月稳定盈利，浮亏20%开始人工干预，达到50%强止损。\n不想一夜暴富，只要细水长流，相信我做特稳定的信号源。",
    author: "必仕 梁",
    authorPhoto:
      "/st/media/pim/media/user_photo/1c/1c4/1c4d55df3680402f2eeb911f1ca99939_d91f48d5f3d34eb493e92029fdc620ce.jpg",
  },
  {
    name: "Black_Rock",
    account: 110017949,
    description:
      "Take smart Decisions,\n\nYou are making money while you are sleeping, our target is 5 to 10%.\n\nTo enjoy must follow one month.",
    author: "usman asif",
    authorPhoto:
      "/st/media/pim/media/user_photo/30/304/3046372481e5906473963645232dca13_d6ee474fe1f746e1a5df72b059b26028.png",
  },
  {
    name: "JAPAN 24hours",
    account: 110018508,
    description:
      "This strategy works 24hours everyday. Though it used to be high risk high return, risk is low and return is still good now. 30%profit is estimated.",
    author: "SO ASAKURA",
    authorPhoto:
      "/st/media/pim/media/user_photo/07/071/0710ac4c34ba881465d43650c8fd507a_d30135df3fbe44fa88aee9de7ee9192f.jpg",
  },
  {
    name: "Happy Trading",
    account: 110019154,
    description: "Lucky Trader",
    author: "Tiến Mạnh Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/2e/2ee/2ee80635c69b903750f58dabd2910e66_434bb60083474cd286d3e3da48765b4e.jpg",
  },
  {
    name: "Gold Swing Trade - H",
    account: 110019286,
    description:
      "Swing Trade High Risk target 10%-20% / Month\nFree Commission for IB",
    author: "SARATIT ONPRAPAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/4a/4a5/4a5ea8c502d31cdd52542354f7d1f785_7a3e41d25e584d7bad35662b9442fa4b.jpg",
  },
  {
    name: "Smart Strategy",
    account: 110019704,
    description: "- Stable Profit\n- Capital preservation",
    author: "Tuyến Cao Trung",
    authorPhoto:
      "/st/media/pim/media/user_photo/e5/e5e/e5eb71c628b26d88ebc1945fe83d6290_87b15333993e40c4a43da22196f998e9.jpg",
  },
  {
    name: "Safety First 2",
    account: 110019773,
    description: "Safety & Profitable",
    author: "Julius Hansel",
    authorPhoto:
      "/st/media/pim/media/user_photo/20/205/2059efa9177162765d9ebd2c1693d21c_59ea1cde223e4e00a77334a2173764a0.jpg",
  },
  {
    name: "SWASTIK108",
    account: 110020137,
    description:
      "Warm welcome to SWASTIK108. Our trading strategy is very simple, safe , low risk at low drawdown and best. The funds requirement is minimum $1000.",
    author: "BHARATKUMAR SHIROYA",
    authorPhoto: null,
  },
  {
    name: "Gold Buffalo TBH",
    account: 110020206,
    description: "Swing",
    author: "Van Hai Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/b2/b2c/b2ca0ef2675fe7fdd91c7a030e5d1941_08f9a887fbc84601b3da0a17c5a43d5d.jpeg",
  },
  {
    name: "Scalp Gold -2",
    account: 110020617,
    description:
      "- Phá vỡ mọi Lý Thuyết Trading .\r\n- Cắt lỗ vì đam mê, lợi nhuận có ý nghĩa gì đâu.\r\n\r\nWebsite: scalpgold.pro\r\nGroup : https://t.me/ScalpGold_Group",
    author: "TRUNG VI VĂN",
    authorPhoto:
      "/st/media/pim/media/user_photo/9e/9e0/9e09a1d83f812e465b8e2891b29453f9_4897519f359b4da098b414b8b7a64898.png",
  },
  {
    name: "Gold speck",
    account: 110020761,
    description:
      "Trade Gold only. Used Reinforcement Learning (RL) algorithm to predict Long/Short signal. Limited drawdown at max -30% from previous highest balance.",
    author: "Narongsak Mahatep",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/62c/62cf24e7f92fbdd018ec1e8c22c14920_45037e868fa34adbb852946fdd57e3b7.JPG",
  },
  {
    name: "LOOPER",
    account: 110021623,
    description:
      "LOOPER uses automated strategies to profit from market cycles by opening and closing trades repeatedly, maximizing potential gains in forex trading.",
    author: "FATMA ELSEYD",
    authorPhoto:
      "/st/media/pim/media/user_photo/fc/fc8/fc81b0caf529336e1c386e8c12a4e50e_cb57329970e94c8ab0ec4267aaf4ba28.jpg",
  },
  {
    name: "SmartForex PRO",
    account: 110022053,
    description:
      "Leverage the power of positive EURUSD & GBPUSD correlation for up to 1-2% daily returns!\nhttps://bit.ly/copytradesupport",
    author: "ELLYZABET ST",
    authorPhoto:
      "/st/media/pim/media/user_photo/c5/c58/c5898f2cd413048f5b1ed617638978a2_d7ef81d4795745e693936adc5af55a34.png",
  },
  {
    name: "MidAutum ANC",
    account: 110022574,
    description: "Aussie Cad Kiwi Trend SND",
    author: "JOSEF",
    authorPhoto:
      "/st/media/pim/media/user_photo/51/515/515907e7cca28ff86f458754c3da1877_bea12b258be4475781533472dae568a2.jpg",
  },
  {
    name: "BACK TO FUTURE",
    account: 110022744,
    description:
      "BACK TO FUTURE uses time travel for currencies, predicting future values based on past trends, enabling profit from fluctuating exchange rates",
    author: "ANWAR ABDGAFAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee1/ee11babb58fa8ccba23a1fd6a5af150a_2746dd0c52ae46dea489a9ca46c3f9f2.jpg",
  },
  {
    name: "E-GCC TRADER",
    account: 110023240,
    description:
      "a little that is permanent and continuous is much \n better than a lot that is interrupted \n   قليلٌ دائم خيرٌ من كثيرٌ منقطع",
    author: "ibrahem alsaied",
    authorPhoto:
      "/st/media/pim/media/user_photo/6e/6ed/6ed3d1987cf357fa1b4e6ad642bbac39_c8c8e5dc1d934103934cedc29d4378d3.jpg",
  },
  {
    name: "Auto Measuring Ruler",
    account: 110023645,
    description: "AUTOMATIC MEASUREMENT - Gentle & Sustainable Trade Method",
    author: "Nga Bui",
    authorPhoto:
      "/st/media/pim/media/user_photo/ba/ba1/ba186302b69102a2934860258fe0e225_b2a7a807d5134a489ddee00ca2ad9c24.jpg",
  },
  {
    name: "Zainfx autotrade 3",
    account: 110024223,
    description:
      "Zainfx autotrade - low risk, our target is to get a constant profit % (5 - 10 / M), your entry means you are willing to take risk on your capital.",
    author: "Zainab Alhalwachi",
    authorPhoto:
      "/st/media/pim/media/user_photo/0a/0a7/0a778fc6b9e1b8033f9c50c15131adf2_3a102fae59474bceb897a49e69cbd49e.jpg",
  },
  {
    name: "Richie Rich",
    account: 110024590,
    description: "Low Risk High Profit",
    author: "rajinder nath",
    authorPhoto:
      "/st/media/pim/media/user_photo/82/821/8213a5d95e6f47829866471432f0e3ab_7d90ea7c9a7746e1acc0fe7511945126.jpg",
  },
  {
    name: "SAFETY FIRST",
    account: 110025652,
    description: "SAFETY FIRST",
    author: "HADY ELDEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/b8/b8b/b8b7203e4d50acd60122a06bef56ba11_b56c60a866fe452dbba41412f49b80d9.jpg",
  },
  {
    name: "Never Lose Again",
    account: 110026364,
    description:
      "Trading grid bot over 5 year olds\nProfit 7-15% / Month , Max DD <= 20%",
    author: "QUOC HUY NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/8d/8db/8dbffbcc5704816f2d12d288bffefb2c_06f1a98f441b448aba68b22f02fae907.jpg",
  },
  {
    name: "SGOLD INVEST",
    account: 110026668,
    description:
      "GBPUSD\nSafety !\ntelegram: @quyetho34\nPhone: +84973496168\nCaptal min: 10 USD\nTrading volume 100%: 3000 USD",
    author: "Quyet Ho",
    authorPhoto:
      "/st/media/pim/media/user_photo/8d/8d3/8d3bc2f9c75ab96c7e759322438a6216_15f2ab0a444243af936604bed4ce6deb.jpg",
  },
  {
    name: "haitham sabry",
    account: 110026682,
    description:
      "We work with minimal risk, our monthly target is 10%. \nCommunication link \nhttps://t.me/+QlzEivEmpx5iYmVk\n 01095846765 Whatsapp",
    author: "اسراء  قباري",
    authorPhoto:
      "/st/media/pim/media/user_photo/87/87e/87eb510baa41c2ca13a7b50af6b10bc6_886ab7a19c86411fac8a3ee14b3a01b9.jpg",
  },
  {
    name: "OM SRI SAI RAM",
    account: 110026757,
    description:
      "Start With Minimum $100,Daily Sure Shot Profit in Gold.Proper Account Management Followed.One Trade At Time.Copy Our Strategy For Consistent Profit!",
    author: "DILIP KUMAR DAS",
    authorPhoto:
      "/st/media/pim/media/user_photo/f4/f49/f497e1a2fe26e6b45bd7904dc78a66cd_5c20e842e4a544bc93ab94344af106bf.jpg",
  },
  {
    name: "breaks bloks",
    account: 110027070,
    description:
      "price action, estratégia baseada no equilíbrio de mercado, com alvos de retornos em 10% ao mês.",
    author: "Antonio Claudio da Silva Pedroso",
    authorPhoto:
      "/st/media/pim/media/user_photo/75/759/759cc4398cd504bda4c03b97096b8ff2_0dca4bfe9f87449b925877aa9321e89c.jpeg",
  },
  {
    name: "WinWin-STB",
    account: 110027319,
    description: "Chuyên giao dịch ngoại tệ và gold",
    author: "Tai Nghiem",
    authorPhoto:
      "/st/media/pim/media/user_photo/ab/aba/abaec089aeaca4c826df96d385b77972_f9275fd391de46e588034df26607d9fc.jpg",
  },
  {
    name: "scalping bbma too",
    account: 110029488,
    description: "new scalping",
    author: "Navdiya Nilesh",
    authorPhoto:
      "/st/media/pim/media/user_photo/3a/3ab/3ab8a437052f43c570738ec7eea4216b_a5fb86c9a317499e9eb0ce323d658bb0.jpg",
  },
  {
    name: "SEROENI-tsabit trade",
    account: 110029651,
    description: "PROFIT CONSISTENT ACUMULATION",
    author: "ASIH HANDAYANI",
    authorPhoto: null,
  },
  {
    name: "xauusd swing",
    account: 110029789,
    description:
      "I trade xauusd, use haiken Ashi candle patterns, support and resistance, I can get good profits in long-run .",
    author: "DEEPAK",
    authorPhoto: null,
  },
  {
    name: "Makmur Abadi",
    account: 110030082,
    description: "Swing trade",
    author: "ABRAHAM KAAWOAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/8e/8e6/8e6c716f23de81b8b10cb1848a09eb2c_0825d91743de41ab8956e8fd5de181a0_O0NAhnv.png",
  },
  {
    name: "XAUUSD trend trading",
    account: 110030724,
    description:
      "GOLD trend trading，Monthly target is around 10%-30%. We aim for followers to have a stable income every month.",
    author: "云凯 黄",
    authorPhoto:
      "/st/media/pim/media/user_photo/a6/a6e/a6e12a7aae70d0441c1f5cccd15dd8bd_39d26e39aac5484bb6411f6fc8d7388c.jpg",
  },
  {
    name: "Saith Trader Bot",
    account: 110030732,
    description: "Auto Trading Service Monthly Profit 15 / 30%",
    author: "Usman Ashiq",
    authorPhoto:
      "/st/media/pim/media/user_photo/98/98b/98be646d2934b3814c030285137b3d71_9428d40e54f04a40859b9e211c058aaa.jpg",
  },
  {
    name: "LC FINANCE",
    account: 110031063,
    description:
      "Tài chính thông minh là khi bạn ngủ tiền vẫn hoạt động cho bạn. \nTư vấn mở tài khoản Social hiệu quả. \nZalo: 0838868968",
    author: "Chiến Lê Văn",
    authorPhoto:
      "/st/media/pim/media/user_photo/09/097/0974a00f78eccc052bffcec41dc1096e_b7005d25651d4cafa30002b8e5074968.jpeg",
  },
  {
    name: "รีบเทรดเดี๋ยวเมียด่า",
    account: 110031306,
    description: "Swing Trade : H1, H4 เป้าหมาย 5-10% ต่อเดือน",
    author: "THEERATHUCH THEERATHUCHSAKUL",
    authorPhoto:
      "/st/media/pim/media/user_photo/c3/c30/c30eac1d6eb513e1ebae1cf5549c7bd3_53fe5fdf390a49839ed300bfe05eb64a.jpg",
  },
  {
    name: "Hedge sestem",
    account: 110032846,
    description: "https://social-trading.exness.com/strategy/110032846",
    author: "Muhammad zaman",
    authorPhoto:
      "/st/media/pim/media/user_photo/b1/b1d/b1d4920bd41818819dac00385fc04697_f178379cd8e14b85aca2eb9dd72be7da_THaPORs.jpg",
  },
  {
    name: "TRADE GOLD",
    account: 110032924,
    description: "Duy trì tài khoản 2000u, \nLợi nhuận 10%/tháng",
    author: "HUU LUAT NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/b7/b7a/b7afcd465d60a6cfaa3a8514902741d8_7bfe5d554bcd4233b57545c1e37d7a5a.jpg",
  },
  {
    name: "thinhvuong2026plus",
    account: 110032957,
    description:
      "Vào lệnh kỷ luật, quản lý vốn an toàn mới đi xa và lâu dài. Chiến lược ở tài khoản này là hold EUR/GPB, mục tiêu lợi nhuận 10-20%/tháng là an toàn.",
    author: "huy đỗ quốc",
    authorPhoto:
      "/st/media/user_photo/f6/f6b/f6bcd10df7a3c00eb128322789f744f3_79889831fa294eb39f769c6eaa023031.png",
  },
  {
    name: "Ennow Trader",
    account: 110032978,
    description: "Swing trade",
    author: "SOMKID KUMPAY",
    authorPhoto:
      "/st/media/pim/media/user_photo/75/753/7537a428c5b78aff29907bc0a1facec7_b6b32434617c452387c696221161e996.jpg",
  },
  {
    name: "Hanh_pro03",
    account: 110033036,
    description: "Trading to Rich!",
    author: "Hạnh Nguyễn Thị",
    authorPhoto:
      "/st/media/user_photo/a9/a90/a90a230fc04469a71bc49cd850392100_4c6eef6cf58349bc9e7843e1c7e33868_wKOrKLs.png",
  },
  {
    name: "thinhvuong2026vip",
    account: 110033487,
    description:
      "Vào lệnh kỷ luật, quản lý vốn an toàn mới đi xa và lâu dài. Chiến lược ở tài khoản này là hold EUR/USD, mục tiêu lợi nhuận 10-20%/tháng là an toàn.",
    author: "huy đỗ quốc",
    authorPhoto:
      "/st/media/user_photo/f6/f6b/f6bcd10df7a3c00eb128322789f744f3_79889831fa294eb39f769c6eaa023031.png",
  },
  {
    name: "Trading Master",
    account: 110034121,
    description: "Limited risk = Unlimited return",
    author: "Warit Limchalerm",
    authorPhoto:
      "/st/media/pim/media/user_photo/77/77e/77ed8c092df364b05f0e0935108b3c1b_3a06627032fb4f20b9a0f18a3910c7eb.jfif",
  },
  {
    name: "Per Ai LowRisker",
    account: 110035419,
    description: "Per Ai LowRisker",
    author: "EKKAPHAN NAKPRASERT",
    authorPhoto:
      "/st/media/pim/media/user_photo/22/227/2276bf7900b39112b0ad98070dc3f111_2fd363370a8b4af58a4b6835841021aa.jpg",
  },
  {
    name: "Trading For You",
    account: 110035506,
    description: "buy on dip",
    author: "MR SOMPHON SOOKPROM",
    authorPhoto: null,
  },
  {
    name: "Elliott Wave Trading",
    account: 110035585,
    description: "Scalping",
    author: "Lê Đức Nguyên",
    authorPhoto:
      "/st/media/pim/media/user_photo/55/558/55816ee63a9eb88450649ada68bc114c_40d16d131c984cc3b669980b2af9f066.png",
  },
  {
    name: "Scalping ทองคำ",
    account: 110035625,
    description: "1-3",
    author: "MISS TASSANAN THECHANANTIPAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/ea/eaa/eaaa7f6c5e014c171ccd69d080bc3169_092ee428100f4d0b8b11628eedc1f315.jpeg",
  },
  {
    name: "One at a time",
    account: 110035660,
    description:
      "We use price action trading to achieve one percent profit at a time so that we minimize the risk but keeping a consistency in profit",
    author: "Riyas P K",
    authorPhoto:
      "/st/media/pim/media/user_photo/34/34f/34f9be71b59ae6154d36f20c4a1a6f9c_614745601cea4a06810c0413440947c5.jpg",
  },
  {
    name: "๙ มิเตพาหุหะติ ๙",
    account: 110036075,
    description: "ลุย",
    author: "MR JAKRIN NANTASON",
    authorPhoto:
      "/st/media/pim/media/user_photo/32/324/324d476dcd0fc1afa95b5bbda95d07f2_b8d5caf3f81f45919e64906bcfbc9389.jpg",
  },
  {
    name: "ThanhGiong Capital",
    account: 110036186,
    description:
      "TA: RSI, Ichimoku, Bolingerband, DCA\nMin 100 usd, Stoploss: 20%",
    author: "Hinh Phạm Đức",
    authorPhoto:
      "/st/media/user_photo/db/db9/db9ee26cfebc794c2dbd77bb0254f1cf_8b981fb9577d43899f240dfdf9f4d6a6.png",
  },
  {
    name: "Smart FX strategy",
    account: 110036386,
    description: "Smart money management",
    author: "RACHID BENAAOUAS",
    authorPhoto:
      "/st/media/user_photo/22/22b/22b942b030349f0a002e342f888bc979_05399bc7581f42488220e474de894177.jpg",
  },
  {
    name: "SAFETY FIRST",
    account: 110036743,
    description:
      "If you think that we are gaining low profits but also we risk very low because your capital is more important than profits 👍",
    author: "Nada Abdelmohsen",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/507/507bd75eaf7b15169232059d9d266361_30c15fe9c4264679ace2b69d1fee1a83.png",
  },
  {
    name: "Gold Bullish 2024",
    account: 110037207,
    description:
      "Hold Gold spot strategy.\nScalping strategy: https://www.social-trading.club/strategy/110111929.\nTele: https://t.me/xaubullish.",
    author: "Huyen Tran Thanh",
    authorPhoto:
      "/st/media/pim/media/user_photo/88/885/885e8102c947acba35763dfda24087a3_f39b9b17500e4d19ae19f482d5761416.jpg",
  },
  {
    name: "FOREX GOLD 1",
    account: 110037233,
    description: "Scalping gold\nProfit 20% month.\nLow risk",
    author: "ngo hoang hai",
    authorPhoto:
      "/st/media/user_photo/53/53a/53a19e548eaec7ba601ff0e3228fe052_06f35c52353e487b910ef064f631a726.jpg",
  },
  {
    name: "HumonomicS",
    account: 110037349,
    description: "Wealth Health Happiness :- )\nTrade with me, earn with me.",
    author: "HEMANT KUMAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/95/95d/95d8c7b8a8497208cca0ee8405f523fd_892a6916f739435ea967e4691c21e57b.jpg",
  },
  {
    name: "market eye",
    account: 110037549,
    description:
      "Counter trend system with custom indicators. Applicable m15 to daily",
    author: "MD ISMAIL HOSSEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/ec/ece/ece5df3cdabfdb06e8d225492c2a5c30_6cca2f400e81411f8483e1c64b30fcb5.jpg",
  },
  {
    name: "INNOVINC FOREX",
    account: 110037559,
    description: "MONTHLY 10 TO 20 %",
    author: "MOHAMMED HASHMI",
    authorPhoto: null,
  },
  {
    name: "bachudaigia2",
    account: 110037830,
    description: "mãi mãi thành công",
    author: "Minh Nhựt Võ",
    authorPhoto:
      "/st/media/pim/media/user_photo/f1/f14/f149c6d82b7a13afda7240b9095b2f96_b7aac3a9f63a45b49cc0fe61d67f1cf3.jpg",
  },
  {
    name: "Putra Jaya",
    account: 110038065,
    description: ":)",
    author: "SHOLICHIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/12/122/1224bf8740fc46c8c32b38891beb643e_c67b2ccd67254739bc65b0c7483279fc.png",
  },
  {
    name: "safe and smart trade",
    account: 110038520,
    description:
      "I work and this strategy in last 6-7 month and consistancy profit on last 6-7 month is average 30% monthly",
    author: "Aniket Pawar",
    authorPhoto: null,
  },
  {
    name: "GOLD STAR FOREX",
    account: 110038533,
    description: "Earn 5-10%Monthly.",
    author: "PRABHAT KUMAR SASMAL",
    authorPhoto:
      "/st/media/pim/media/user_photo/23/23d/23d2e729a8e15e38bf98281f0833b7cb_a6c7811abce240f1b9eeac78a45f798e.jpg",
  },
  {
    name: "King Trader Number 1",
    account: 110039335,
    description:
      "Long term investment brings success \nhttps://t.me/+wW5-W8Z9LP5kMmJl \nTelegram: 0889 108 668\nZalo: 0889 108 668",
    author: "NGUYỄN TRẦN HUYỀN TRÂN",
    authorPhoto:
      "/st/media/pim/media/user_photo/7d/7de/7de8d8959ae638b1c2a6e9d72e5b444a_6b3072f984074d7c8e2edf6f8150f8dd.jpg",
  },
  {
    name: "EAGLEVIE_IV",
    account: 110039681,
    description: "Investment to Rich",
    author: "Hạnh Nguyễn Thị",
    authorPhoto:
      "/st/media/user_photo/a9/a90/a90a230fc04469a71bc49cd850392100_4c6eef6cf58349bc9e7843e1c7e33868_wKOrKLs.png",
  },
  {
    name: "Profit Stable",
    account: 110040235,
    description:
      "Target at 1-3% per day, Stop loss at 50%. Especially, we have profit compounding lot percent so don't worry about withdrawal. Have fun!",
    author: "Kittiwat Trongsujaritsin",
    authorPhoto:
      "/st/media/pim/media/user_photo/4f/4f4/4f4ab61847ae7677ea064dbcfdb0b6e8_3654729aa24a4205a6c40fa4f683305e.jpg",
  },
  {
    name: "SAFE INVESTMENT PLUS",
    account: 110040450,
    description:
      "We will trade to the best of our ability by protecting your capital as much as possible. \nlow risk, medium return.",
    author: "MR SITTHIPHON CHIRAPHAISANSAKUN",
    authorPhoto:
      "/st/media/user_photo/7c/7cf/7cf629fcd30585dd5d7f059082038534_e0048230071c4b42b74908d1862ebb17.jpg",
  },
  {
    name: "Big profit-low risk",
    account: 110040506,
    description:
      "I Grantee a good profit with no risk\nMy priority is always saving money before making profit\nI always put stop losses\n monthly target is 10-30%",
    author: "Mohamad Saied",
    authorPhoto:
      "/st/media/pim/media/user_photo/98/985/9857b51e87cd73e0cca346f2dda320f3_e3f521ae9bc94f1db0bdc4305245f98b.jpg",
  },
  {
    name: "ASTRO - ONE",
    account: 110040779,
    description:
      "Combination of manual trading and EA\nJoin Tele: https://t.me/ASTRO_CT\n\nThe journey of a thousand miles begins with one step. #Lao Tzu#",
    author: "Yudi  Haryadi",
    authorPhoto:
      "/st/media/pim/media/user_photo/e3/e33/e33bcd05c7b5af57018ba8cc87d888d5_6f8f660c6c8948198900bdd4f6a2ee6a.jpg",
  },
  {
    name: "PARMARTH TRADING",
    account: 110041138,
    description:
      "Whenever they hit the gold stop loss or exit, from the gold with proper stop loss.",
    author: "BEENA .",
    authorPhoto:
      "/st/media/pim/media/user_photo/dc/dc5/dc55bd65bbd360430b813d9c1d04f644_51db6db65c0e4706977be915e94c439b.jpg",
  },
  {
    name: "AUTO TRADE8",
    account: 110041163,
    description:
      "I have more than 7 years of experience in the forex market.\nThank you for trusting me.",
    author: "Phonepaseuth Phosalath",
    authorPhoto:
      "/st/media/pim/media/user_photo/77/775/77528a36cd62cd0645280dc24f2dbf97_feff96b2cb5c4baaa940c9e086b1e091.png",
  },
  {
    name: "Trading The Chart",
    account: 110041455,
    description:
      "I well trade with the perspective of making small but constant profit so with time well be big.",
    author: "Jameelah Alayyan",
    authorPhoto:
      "/st/media/pim/media/user_photo/51/51b/51bc3a5da4391f7a51abe05c2cce3bfa_a0690904faaf4829883efdb7050c3ecf.png",
  },
  {
    name: "Fast money",
    account: 110041666,
    description:
      "Deals swing term with high income\nprofit 15-30% /month\n1-SMC- ICT\n2-diversion indicator\n3-technical chart model\n4-rsi\n5-super trend\n6-harmonic",
    author: "samer afif",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/aec/aec6c1da8178ebc4235b5084ae4bc195_7d77acf574d74a3caba9dfea7ba487ef.jpg",
  },
  {
    name: "KAMEN_RIDER",
    account: 110041949,
    description:
      "Very safe and accurate strategy based on support and resistance, with extensive market analysis.  Big profits and little drawdown.",
    author: "Eloizio Coelho Alves",
    authorPhoto:
      "/st/media/pim/media/user_photo/dd/ddf/ddfa8de12ad64919b4a2cdcd3ccf0461_0a0dd7d9b07e4dc085337cef0222158d_E0UUOqQ.jpg",
  },
  {
    name: "GIAPHAT AUD-CAD",
    account: 110042441,
    description: "Trade with only AUD-CAD pair",
    author: "Phạm Thái Doãn",
    authorPhoto:
      "/st/media/user_photo/70/701/7016095d7db40714feb6bd9a47943110_51c947ac19a34be6bf7f9572f4f88f98.jpg",
  },
  {
    name: "Net Profit",
    account: 110042756,
    description: "Only Net Profit No Loss",
    author: "PATEL KRUNALKUMAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/70/706/7066319ea8c6d2579db650913de68fa8_c9146869215f4f61b56b703c62b3be97.jpg",
  },
  {
    name: "MoonShotTrades",
    account: 110043020,
    description:
      "Most Copy Trader Invest Big & Rarely Gets Liquidated.\nMy Goal Profit 50% /m on 500$ Investment",
    author: "Affaan  Nasir",
    authorPhoto:
      "/st/media/pim/media/user_photo/99/997/9970dd68cfd9dbeb92ec10723f7bd189_77dbd1da519f480c8597b2fb79a7a4df.jpg",
  },
  {
    name: "Run Trend copy",
    account: 110043506,
    description: "Run Trend copy",
    author: "MISS VILAI KHAMKAWEEPRAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b9e/b9e7313b3f2e3873544b8047109c1a0b_2d1d138df58b4e1ea26ad04a20ab2d31_BJNU0qq.png",
  },
  {
    name: "BULLET TIME",
    account: 110043809,
    description:
      "trade Gold only\ntrade by hand\nhave a stop loss and take profit\nhave move sl protect profit",
    author: "PARNUWICH PLENGRUSAMEE",
    authorPhoto: null,
  },
  {
    name: "SNOWLEOPARD INVEST 2",
    account: 110043811,
    description:
      "Chỉ giao dịch với EurUsd\nMục tiêu lợi nhuận từ 18-30%\nhttps://one.exness-track.com/boarding/sign-up/a/vcfbditd/?campaign=18229&track1=snowinvest2",
    author: "NGUYỄN TÂN",
    authorPhoto:
      "/st/media/pim/media/user_photo/be/be0/be0fd8b52d69d41e62c0f62f4a8cad5f_abfde35833ee45288b8735d3fbefa062.jpeg",
  },
  {
    name: "wlgbys666888",
    account: 110043947,
    description: "数据记录",
    author: "龙初 孙",
    authorPhoto: null,
  },
  {
    name: "KING SCALP C102",
    account: 110044089,
    description: "Scap",
    author: "Tran Kim Dung",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c26/c2666c66888478e9391e24ee2dd6ec6f_29cd4d412f47464ea0fcaf026db48ba6.jpeg",
  },
  {
    name: "MUHAMMAD WALI IMRAN",
    account: 110044770,
    description: "INTRADAY TRADER",
    author: "Muhammad  Imran",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c23/c23a884ce913faefd57fd11ed162cb54_d9dcb0f24b4e4ba9bf35ae36dc43ec8e.png",
  },
  {
    name: "5percent Per day",
    account: 110045184,
    description: "Trade Gold only. 5% per day. Draw down maximum 20%",
    author: "Duy Nguyễn Mạnh",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c2c/c2ccb139658bbb81857f1c4ea43726e5_c8d311aecc80464a8ab8a225705b3c41.jpeg",
  },
  {
    name: "Brother-Hao",
    account: 110045725,
    description: "浩哥起飞",
    author: "文豹 张",
    authorPhoto:
      "/st/media/user_photo/af/af7/af750b21709619dc36c6d3b1e949aea6_6a1fb0f9a85d4315872ae909b1b4e4ae.jpg",
  },
  {
    name: "Magic Moments",
    account: 110045737,
    description:
      "Dear investors check the strategy achieve your goals it's my promise.",
    author: "Jithin P.S.",
    authorPhoto:
      "/st/media/pim/media/user_photo/fa/fa0/fa01f36f72bcbfa4c764bd57581a45e7_315ee9518521405b864ab24ff437f131.jpg",
  },
  {
    name: "RF BUSINESS MODULE",
    account: 110045751,
    description: "RISK FREE BUSINESS MODULE",
    author: "Kulanthaivel P",
    authorPhoto:
      "/st/media/pim/media/user_photo/cc/ccc/ccc34c10410c0e180046d29b6c3dbd68_27e108f02d4b4271aeaf853cfee25b3e.png",
  },
  {
    name: "Currency Power",
    account: 110045813,
    description: "Currency power, avg down n martingale",
    author: "Herdy Lihiantoro",
    authorPhoto:
      "/st/media/pim/media/user_photo/56/56f/56fac0840638a873665292125bb12203_0659c21a240a405283f57f3e6e383989.jpg",
  },
  {
    name: "Crypto-Divisas",
    account: 110046337,
    description:
      "COMERCIO LIGERO Operamos en el mercado con Varios  Pares  EUR/USD, AUD/CAD, GBP/USD, AUD/NZD",
    author: "Gerardo Paulino Ventura",
    authorPhoto:
      "/st/media/pim/media/user_photo/5f/5fd/5fd113099e5f763a6db092b6988822d7_ba006cba6ce34f2b8f15ae29047ab317.png",
  },
  {
    name: "PIPS BLESSING",
    account: 110046508,
    description: "BLESSING AND GLORY",
    author: "AGUSTIAN EFFENDI",
    authorPhoto:
      "/st/media/pim/media/user_photo/ec/ecb/ecba3d6eea65722847e5d650fdc67a13_f16e2c4b8dea469682382a881b209454.jpg",
  },
  {
    name: "Lương tháng 5 triệu",
    account: 110046894,
    description: "Mức đầu tư tối thiểu lên tới $200.",
    author: "ANH TUAN KHUC",
    authorPhoto:
      "/st/media/pim/media/user_photo/0b/0b9/0b98e4d6d3c07904b4b1585a1c38e407_a823403a5c5c4053bf6aff0087fa0e00.jpg",
  },
  {
    name: "Money Morning Star",
    account: 110047355,
    description:
      "The minimum monthly profit target is 10%, possibly as high as 30%.",
    author: "MR PAKAWAT BUMRUNGHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/79/797/7971978c1a522ddbbc4c5a9bb8526a67_a865a4e2a91941c7a950a08602345154.PNG",
  },
  {
    name: "Chaleeburger",
    account: 110047673,
    description: "Social trading",
    author: "MR SUTHUS SONGSURA",
    authorPhoto:
      "/st/media/pim/media/user_photo/6f/6f9/6f97285bbf6585f49a14570b253bd4c1_71ad6059c140442285dfd88732b09894.jpg",
  },
  {
    name: "FX Ultimate PRO",
    account: 110048558,
    description: "Risk Takers Only",
    author: "Abhishek Deshmukh",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50f/50f42737940c63c1f5d4963a365c617d_74b222d74b5146648fe8b68b3dda9fdb_jtF5ypp.png",
  },
  {
    name: "UAE TRADER",
    account: 110048752,
    description:
      "انا متداول خبرة فى السوق اكثر من 15 عام تقوم استرتيجيتي علي اقل نسبة مخاطر وصفقاتي علي المدة القصير",
    author: "Shady Mohamed",
    authorPhoto:
      "/st/media/pim/media/user_photo/b7/b74/b74d07129efb7114226b401f30591b19_6f846946452b4769bb6b8f4c4a9e196f.jpeg",
  },
  {
    name: "LuckyTraderClub",
    account: 110048779,
    description:
      "Expected profitability of 5% to 20% monthly. Don t put stop loss.                                  https://t.me/LuckyTraderClub",
    author: "Yanina Estefanía Freire",
    authorPhoto:
      "/st/media/pim/media/user_photo/7d/7dc/7dcfeb337dc4a0b019e6f8b60f5a814b_77f4c30475ef42ca9bbf281d0f7be47d.png",
  },
  {
    name: "Lấy lại 100 tỷ",
    account: 110048869,
    description: "Không đánh vàng. Chỉ đánh EU GU và UJ",
    author: "Truong Thi Suong",
    authorPhoto:
      "/st/media/pim/media/user_photo/6e/6e5/6e53497245db44d96d263e3018efde0f_84518b9c506345c980989d79e90058e6.jpg",
  },
  {
    name: "Daily Earning 01",
    account: 110048998,
    description:
      "https://www.myfxbook.com/members/smxll/daily-earning-1/10477089",
    author: "JETSADA PHONGWASIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/e1/e13/e1360f20fb6596f7feba98c3bda06bf3_2aea875376614d648fc47e7f3f326fcf.png",
  },
  {
    name: "Queen of Fx 01",
    account: 110049049,
    description: "I  provide Education on forex trading .",
    author: "KANAN MALAKAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/39/39e/39e2c37cebaab38570466872513fb8b3_d51c1584f5c24f258a0c599a03c73d27.jpg",
  },
  {
    name: "3RSIOBPIVPR",
    account: 110050091,
    description:
      "Manual scalping strategy that combines RSI with order blocks, pivot points and price action, uses SL and do not trade during news.",
    author: "Cristian Urmeneta Krarup",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/606/6068221efad51418c0432abea9e49329_ed18cd6c9b7a4a1497a8869410e73997.jpg",
  },
  {
    name: "RTD INTERNATIONAL",
    account: 110050487,
    description:
      "Our portfolio management best experience trader provide and gold 🪙 trade and growth 📈 your portfolio management world best experience trader ☺️and",
    author: "SUMAN DOLAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/2c/2cc/2ccc03dc73906d38c5f74fe9715ad829_4ee249932724481fa2faf53663ed1baa.jpg",
  },
  {
    name: "GenieTrader",
    account: 110050717,
    description: "Bolinger band with Stoploss",
    author: "NATTAKARN NAVAPONGSIREETORN",
    authorPhoto:
      "/st/media/pim/media/user_photo/fa/fa9/fa994aba2fb5642cfe2c0c73925bab91_9c30b287e2b64932a83ff82e80076152.jpg",
  },
  {
    name: "TRGA",
    account: 110050727,
    description:
      "✔️ TRGA Monthly Return Target 5-10% (In Sha Allah)\n✔️ For Better Result Invest Minimum $100",
    author: "TANJIL ISLAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/37/37a/37a78bd1713bb5a4fe25249b6cd0e702_19d185bd06fe4a83bd68b6dea612f312.jpg",
  },
  {
    name: "The ant strategy",
    account: 110050843,
    description:
      "A grid based trading system that uses cost averaging to enter into positions and ensure the best average price.\nLittle and often fill the purse.",
    author: "Vu Ba Quang",
    authorPhoto:
      "/st/media/pim/media/user_photo/4e/4e0/4e015bf28b119b55195a1b6120f68a25_c29976d480ad4d249ef0f918f9c97ea2.PNG",
  },
  {
    name: "EU Swing Bot",
    account: 110050994,
    description: "EU Swing",
    author: "THU SANG TRAN",
    authorPhoto: null,
  },
  {
    name: "eagle wings",
    account: 110051539,
    description: "Trading with money management",
    author: "Makanjuola Segun Michael",
    authorPhoto:
      "/st/media/pim/media/user_photo/84/84b/84b21920b8471b87bfae57e730bede87_6fe910c62bc8442181cd6e53e7bc48cd.jpg",
  },
  {
    name: "Global Earner",
    account: 110051862,
    description: "Trading strategy",
    author: "Anamika .",
    authorPhoto:
      "/st/media/pim/media/user_photo/d1/d13/d13c16be01d5fd9642255ddd8b5f4621_daa642460811459791533e167fbcf2f8.png",
  },
  {
    name: "F4ALL - Advanced",
    account: 110052258,
    description: "Technology based on swing trading operations.",
    author: "Juliano de Souza Raymundo",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5ae/5ae965c96148d8138f20eafc4747ceff_8640ad2e479b4bbc94dc23750a3cd8d7.jpg",
  },
  {
    name: "Trade For Myself",
    account: 110052379,
    description:
      "Fund managerment is very important. I start with 10k and withdraw profit at the end of the month. If I lose, I will redeposite 10k to restart.",
    author: "Gia Vinh Le Pham",
    authorPhoto:
      "/st/media/pim/media/user_photo/b8/b8c/b8c0334891da7586b6a556d1ba9faf6d_43c0243e9e4748ae86a15ea1c6d97693.jpg",
  },
  {
    name: "Maximum TP",
    account: 110052993,
    description:
      "Buy on Trend, Sell on Trend, Swing Trade\nCut your Losses Short\n\nNo Martingale dan Averaging down. No Margin Call",
    author: "ALFON ARIAPATI",
    authorPhoto:
      "/st/media/user_photo/09/09d/09d205fa990f4e98b68e9e8687c8bd18_7e337305c8754e8cb30d85422273e5e1.jpg",
  },
  {
    name: "QUY DAO GIA",
    account: 110052998,
    description:
      "lợi nhuận tuy không nhiều những sẽ an toàn và đảm bảo hàng tháng, hàng năm",
    author: "Huy Tiến Lê",
    authorPhoto:
      "/st/media/pim/media/user_photo/25/252/25221a3a2fde5fcd1ddc18e44bc04b1e_fa69527b47a7468eb250303c3b9feff4.jpg",
  },
  {
    name: "PIGEON SCALPING",
    account: 110053357,
    description: "LOW DRAWDOWN AND HIGHT PROFIT PER MONTH",
    author: "HIEU NGUYEN QUOC",
    authorPhoto:
      "/st/media/user_photo/93/935/93598dfa365919e56013cc807ea4cc14_3da5b81b0b534c7b9a73fd8cb477b933.jpg",
  },
  {
    name: "ASJ INTERNATIONAL",
    account: 110053847,
    description: "No1 copy trading account",
    author: "MST BEGUM",
    authorPhoto: null,
  },
  {
    name: "Autoinvestment",
    account: 110053983,
    description: "Take Profit 10Percent per month",
    author: "TOTSAPORN PHURAHONG",
    authorPhoto: null,
  },
  {
    name: "重生之我在exness搬砖",
    account: 110054537,
    description: "搬砖",
    author: "天伦 杭",
    authorPhoto:
      "/st/media/pim/media/user_photo/64/646/64618d2dc8f207c85fb5ea436c20b043_6aa6d07cbd634c7b93d75ce0caea0f5c.png",
  },
  {
    name: "quy vuong dang minh",
    account: 110054634,
    description: "Vui ve hanh phuc",
    author: "Minh Hằng Lương",
    authorPhoto:
      "/st/media/pim/media/user_photo/4d/4da/4dab0a25df7e0a062382e1df86a7bbe0_162f2af640f14880b6751e2b6f0ff5f3.jpg",
  },
  {
    name: "Gold Expert EA",
    account: 110054838,
    description:
      "> Earn Profit Everyday\n> Low Risk ~ High Returns\n> Monthly Expected (5% ~ 10%)\n> Long-term • Smart Investment\n> 10 Years Back-test Research Approved ✅",
    author: "Abdullah Shaikh",
    authorPhoto:
      "/st/media/pim/media/user_photo/dc/dc8/dc88f987313613c43a418762fbd867db_66a4a326a412473bb277b95d8567e46b.png",
  },
  {
    name: "NH FINANCIAL GROUP",
    account: 110055579,
    description: "ALL TIMES GOOD RETURNS AND BEST SERVICE CLIENT",
    author: "Narshi dhila",
    authorPhoto:
      "/st/media/pim/media/user_photo/1b/1ba/1ba5639ab2d1bad0afabbc7b6eac6163_5e277338847c4025a0c27cba938dcb17.png",
  },
  {
    name: "S TATAKOTI 69",
    account: 110055610,
    description:
      "I am trading in forex market 1.5years experience.\nAnd long term trading strategy..",
    author: "Sadashiv  Tatakoti",
    authorPhoto:
      "/st/media/pim/media/user_photo/fe/fe0/fe0abcbe3e4b2684d01d9a6ecdc3ef1a_bdb93f22661643d8ace4e49c76cfe5ba.jpg",
  },
  {
    name: "Price Action_Fibo",
    account: 110055921,
    description: "Analyst With FIbonanci & Price Action",
    author: "Petrus Petrus",
    authorPhoto:
      "/st/media/user_photo/81/81b/81b087a392c4278eeacc5d3f0a5d47ec_e403b9e2b747480a8dd680517b89f869.jpg",
  },
  {
    name: "KES Academy",
    account: 110056199,
    description: "Profitable. Control risk yourself. You will be happy.",
    author: "Gia Vinh Le Pham",
    authorPhoto:
      "/st/media/pim/media/user_photo/b8/b8c/b8c0334891da7586b6a556d1ba9faf6d_43c0243e9e4748ae86a15ea1c6d97693.jpg",
  },
  {
    name: "thinhvuong2026win",
    account: 110056366,
    description:
      "Vào lệnh kỷ luật, quản lý vốn an toàn mới đi xa và lâu dài. Chiến lược ở tài khoản này là hold USD/CAD, mục tiêu lợi nhuận 10-20%/tháng là an toàn.",
    author: "huy đỗ quốc",
    authorPhoto:
      "/st/media/user_photo/f6/f6b/f6bcd10df7a3c00eb128322789f744f3_79889831fa294eb39f769c6eaa023031.png",
  },
  {
    name: "Trade With Forexwala",
    account: 110056445,
    description:
      "We are the best trading services provide and low risk management with your funds...",
    author: "HET RAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/e8/e8a/e8a4753937e62df3bebd718fbd30e3fe_a421463762c24cd39fae5a705652c34d.jpg",
  },
  {
    name: "North Peaks Capital",
    account: 110056579,
    description:
      "Sau 10 năm nghiên cứu tạo ra 1 quy trình đầu tư chúng tôi đã kiến tạo quỹ bền vững, lợi nhuận 5-15%/tháng. Tối thiểu từ 10$\nhttps://t.me/npc_fundgroup",
    author: "PHẠM TUÂN",
    authorPhoto:
      "/st/media/pim/media/user_photo/47/47a/47a7e78a3f006ff26d5c479d70970c38_f1de5fa679424536b9cdd3920cc13dc9_g0LgqzG.jpg",
  },
  {
    name: "Optimal GU",
    account: 110057442,
    description:
      "Dynamic position sizing to maximize profit with limited risk. Trade only GBPUSD, Long/Short. Port max drawdown is controlled at -30% or better.",
    author: "Narongsak Mahatep",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/62c/62cf24e7f92fbdd018ec1e8c22c14920_45037e868fa34adbb852946fdd57e3b7.JPG",
  },
  {
    name: "Aurum Traders",
    account: 110057886,
    description: "Wait and watch",
    author: "Ajay  J",
    authorPhoto: null,
  },
  {
    name: "Profit FX",
    account: 110058157,
    description:
      'Monthly Profit Target around: 5% - 10%\n"FOREX TRADE is the right way to make good profit with very low risk its safe system',
    author: "dobariya paresh",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/620/62017e17c99d74666fd2694d4b89babc_acf3a175e3624458a2413fe68fc382fd.png",
  },
  {
    name: "Abcdefghij",
    account: 110058290,
    description: "Minimum investment 100",
    author: "sanjeev  kumar",
    authorPhoto:
      "/st/media/pim/media/user_photo/be/beb/bebeaf87dde0634dd261a2cfca39cb2c_9a88ec6c0f744452b3639d08fa4ad379.jpg",
  },
  {
    name: "HT - Dream",
    account: 110058471,
    description:
      "Happy Trading!\n- Target: ~1%/day, ~20%/month\n- Hand and EA together trading\n- More than 8 years of trading experience",
    author: "VAN HUNG DUONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/02/024/024f4ba6671008861ffc7c4ed5cc4495_ee0388cff9be42739ddfede93c3a1d40.jpg",
  },
  {
    name: "HappyTrading_Diamond",
    account: 110058475,
    description:
      "Happy Trading!\n- Target: ~1%/day, ~20%/month\n- Hand and EA together trading\n- More than 8 years of trading experience",
    author: "Hùng Dương",
    authorPhoto:
      "/st/media/pim/media/user_photo/cc/cc4/cc407ebb123059af8662d3ff8a2fa3a0_85b3bf4edeb64e4ca349f00fce73969a.jpg",
  },
  {
    name: "Titan Moon",
    account: 110058893,
    description:
      "Long lasting profitable system with clients fund as main priority",
    author: "ANDY CHANDRA",
    authorPhoto:
      "/st/media/user_photo/b1/b18/b18ed93afaf44c36813d9f8102d9d104_03eda9a4b2e944358a1d38cbf43e61bd.jpg",
  },
  {
    name: "Pips Hunter",
    account: 110059229,
    description:
      "Min investment $100 & Redoubling for more Return,\nLet's Make Monthly Profits From 9% to 27%,\n1K Net Monthly Targeted PIPS,\nTelegram: t.me/PipsHunterFD",
    author: "EHAB MOHAMED ABDELAAL SAYED ALI",
    authorPhoto:
      "/st/media/pim/media/user_photo/99/99e/99e7d170555b023f7016d743736625d6_fa555d4c08264a3f8f36412e034baa9e_nxOVKgJ.jpg",
  },
  {
    name: "Silver Bullet Snipe",
    account: 110059325,
    description:
      "Best sniper with high accuracy rate over 90%.\nMax DD shall < 30%.\nFloating lot with 0.1 ratio on invested amount with annuity growth rate.",
    author: "TERAPOL SOONPONRAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/d5/d52/d521994de3310842b28627336a3f5257_f8fc9c8995a24339971792f1cfc7b844.jpg",
  },
  {
    name: "INFOPRENEUR NATION",
    account: 110059873,
    description: "Our monthly target is 30%",
    author: "CHARLES NNAEMEKA AJI",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/627/627d8bef9c0106a7bb6c978f775d43c5_6e49513cea9f454da27ffca9209d6d01.jpg",
  },
  {
    name: "babybabybaby",
    account: 110060237,
    description: "Kiên nhẫn và kiên trì.",
    author: "lien tran",
    authorPhoto:
      "/st/media/user_photo/d4/d43/d433034a867ce83d5cb7bfb028c48f3d_8af73fd6f0d644089d787a3942d2bf2b.jpg",
  },
  {
    name: "EurGbp 2-5",
    account: 110060579,
    description:
      "DD 5-10% con benificios superiores al DD mensualmente. Algunas operaciones pueden durar más de 1 día.",
    author: "Salvador Nuñez Limon",
    authorPhoto: null,
  },
  {
    name: "TCD FUND",
    account: 110060812,
    description:
      "👉EURUSD ONLY \nContact : 0879 44 7777    \nTelegram :@tcd7777 \nt.me/copytrade_tcdfund",
    author: "Dat Trinh Cong",
    authorPhoto:
      "/st/media/pim/media/user_photo/0d/0d2/0d215ace53f6320053cd9130fc60adfc_683b652c063a49069ecbafe9c56789ec.jpeg",
  },
  {
    name: "TREND FOLLOWING 1",
    account: 110060910,
    description:
      "Trend-following trading and Thinking Small Los - Win Big are my strategy to bring safe and stable profits to investors",
    author: "Phú Thọ Phạm",
    authorPhoto:
      "/st/media/pim/media/user_photo/4c/4c8/4c883d41cf69288972ad8c1598d787c4_e4865a6966a34ae9b0ba46e527506534.png",
  },
  {
    name: "Smart Growth",
    account: 110061001,
    description:
      "Stable profit\n100 investors: 5% commission\n200 investors: 10% commission\nCopy now for zero commission",
    author: "Duy Thai",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e29/e29f50ad75e97bddaac60798a25015d6_5e7ce96deefd44109f61ab20c1398470.jpeg",
  },
  {
    name: "FX SkyHigh BeWealthy",
    account: 110061146,
    description: "Only right strategy makes wealthy and take to the sky high",
    author: "Arpita Ghosh",
    authorPhoto:
      "/st/media/pim/media/user_photo/9b/9bf/9bf258b122c84e4012130dede2a00976_523cda23d9a64943a12f0386e05622cd.jpg",
  },
  {
    name: "Đại Hải Thuỷ Trading",
    account: 110061268,
    description:
      "♻️ Giao dịch luôn đặt mức độ an toàn và quản trị rủi ro lên cao nhất.\n💎 LH: 0982908911",
    author: "HOAI NGUYEN BA",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/ae9/ae9402cba39d864a5d95bf2ba6281751_f7cdd7cb7fdd4937bd66106ed99e2eb3.jpeg",
  },
  {
    name: "Tích Tiểu Thành Đại",
    account: 110061546,
    description: "Quản lý rủi ro tuyệt đối",
    author: "Nguyen  Thi Doan",
    authorPhoto:
      "/st/media/pim/media/user_photo/40/40c/40cc58dea8abf87dc449350b31881821_f238ca991bc748a9a1d253a899d5cf8f.jpg",
  },
  {
    name: "HoangKim Invest l",
    account: 110061759,
    description:
      "Liên hệ hỗ trợ:\nHoàng kim:\nZalo: 0979228799\nTelegram: @Hoangkim663",
    author: "HUONG NGUYEN THI",
    authorPhoto:
      "/st/media/pim/media/user_photo/8e/8ec/8ec9c4a2b446ffd24dfc45cddcc1e403_d167b7a25c6b4a53808f1e478daa94fa.jpeg",
  },
  {
    name: "THERICHBTC-oil",
    account: 110062260,
    description: "BTC,OIL",
    author: "THIDAPORN SAWATLON",
    authorPhoto:
      "/st/media/pim/media/user_photo/51/51d/51d96d813996c36a2978bde686b87f96_8c9e0a21c9114f7980951cef3e94ad20.jpg",
  },
  {
    name: "EURUSD-H1-MTG-01",
    account: 110062555,
    description: "EURUSD martingale \nTF : H1\nEA 100%",
    author: "MR WEERAPHAT WIWATTHANODOM",
    authorPhoto:
      "/st/media/pim/media/user_photo/d4/d47/d473752dedd005963f39a23c4dda63da_a92c6d44a1a344ed94390b8ce5c864da.jpg",
  },
  {
    name: "teoteoteo-107",
    account: 110062753,
    description: "TRADE IS LIFE",
    author: "Thị Hương Hoàng",
    authorPhoto:
      "/st/media/pim/media/user_photo/43/430/43099951af6cd798783774c07aae00cb_921e0c12a63b47adb81228034a4b4373.jpg",
  },
  {
    name: "Gold Ocean 1",
    account: 110062895,
    description:
      "Uses AI Reinforcement learning (RL) of Machine Learning Strategies, trades only GOLD, use SL every order. circuit breaker at a -30% max drawdown.",
    author: "Tanitas Choeithongsri",
    authorPhoto:
      "/st/media/pim/media/user_photo/41/41d/41d1e99108e5a3f04d05c3e51cc54abb_999ebb4afa6748e5a3fcb888362c6f44_CSJSNph.png",
  },
  {
    name: "Day to Day",
    account: 110062965,
    description: "Sống với bản chất của chính mình",
    author: "Hien Vu thi dieu",
    authorPhoto:
      "/st/media/pim/media/user_photo/bf/bfb/bfbd6c4a97973b1c01f689737e50659a_c8202df3e3834e04a0cf8b888adf6035.jpg",
  },
  {
    name: "Scalp Gold - Swing",
    account: 110063260,
    description:
      "- Swing Trading\n\n- Cắt lỗ vì đam mê, lợi nhuận có ý nghĩa gì đâu.\n\nWebsite: scalpgold.pro\nGroup : https://t.me/ScalpGold_Group",
    author: "TRUNG VI VĂN",
    authorPhoto:
      "/st/media/pim/media/user_photo/9e/9e0/9e09a1d83f812e465b8e2891b29453f9_4897519f359b4da098b414b8b7a64898.png",
  },
  {
    name: "DAU TU LAU DAI",
    account: 110063276,
    description:
      "Đầu tư theo cách người giàu, tích lũy vốn mang về lợi nhuận mỗi năm 60%",
    author: "Huy Tiến Lê",
    authorPhoto:
      "/st/media/pim/media/user_photo/25/252/25221a3a2fde5fcd1ddc18e44bc04b1e_fa69527b47a7468eb250303c3b9feff4.jpg",
  },
  {
    name: "Fundamentals",
    account: 110063567,
    description:
      "Volume trading based Fundamentals, especially Banks & other Institutes Trading design",
    author: "GHULAM ABBAS خ",
    authorPhoto: null,
  },
  {
    name: "ASJ GLOBAL",
    account: 110063577,
    description: "World's No1 copy trading account",
    author: "Lipika Begum",
    authorPhoto:
      "/st/media/pim/media/user_photo/0a/0ad/0adebd30023474038b64f1eec9c75daa_77e1a38f8f974255a4dba4379bdecc3d.jpg",
  },
  {
    name: "Gold Trade",
    account: 110063744,
    description: "Trade what u see not what u think",
    author: "SIAUW JAYA",
    authorPhoto: null,
  },
  {
    name: "Trend Master",
    account: 110063747,
    description:
      "- The system analyzes market behaviors and conducts transactions based on specific criteria.",
    author: "Tuyến Cao Trung",
    authorPhoto:
      "/st/media/pim/media/user_photo/e5/e5e/e5eb71c628b26d88ebc1945fe83d6290_87b15333993e40c4a43da22196f998e9.jpg",
  },
  {
    name: "anhminhstock",
    account: 110064005,
    description:
      "Lợi nhuận luôn dương hàng tháng, mục tiêu trên 20%/tháng đến 50%/tháng\nPhương pháp an toàn, bảo toàn vốn tối đa.",
    author: "Tâm Đỗ",
    authorPhoto: null,
  },
  {
    name: "Equilibrium",
    account: 110064676,
    description: "Focusing on Risk Management and maximizing on profit gain.",
    author: "LELI",
    authorPhoto: null,
  },
  {
    name: "PULLBACK PHAN",
    account: 110065773,
    description:
      "* Pullback trading with high profit ratio (FOREX 30-100 pips).\n* Take profit from a few days to a few weeks.\n* Target 10-30% a month.",
    author: "Tuan Phan",
    authorPhoto:
      "/st/media/pim/media/user_photo/9b/9bc/9bc0b9d1ce27ce87620584e5e9140c80_730f35b783d94f7e905ca6457f488e72.jpg",
  },
  {
    name: "Zack FIM88",
    account: 110065965,
    description:
      "metode singel entry\nno averaging,no headging no martingel\ntarget profit per month 10-30%\nwaranty no MC",
    author: "ZAKAT FITRAH",
    authorPhoto:
      "/st/media/pim/media/user_photo/0c/0c5/0c580c5d4610178125a3b5c003f00de8_e2ae848347dd46a29c8fe3de54d1d9f5_eNsYC0l.jpeg",
  },
  {
    name: "Monthly 20 percent",
    account: 110066156,
    description:
      "Target 20% profits per month\nEUR / GBP / USD (SL = Hedging)\nXAU (R:R = 1:1)",
    author: "Duc Nguyen Van",
    authorPhoto:
      "/st/media/pim/media/user_photo/d7/d7e/d7e343e39f399373077cf3e8d0849dde_107cbdd4434940fd817735f092e30993.jpeg",
  },
  {
    name: "scalping xau vàng",
    account: 110066427,
    description: "youtube.com/@tradexauvang tôi live trade hàng ngày ở đây",
    author: "Văn Hoàng Bùi",
    authorPhoto:
      "/st/media/pim/media/user_photo/10/108/108a84657ed88dc5025c3c2d67e768c9_4abc5cdc46d341bfa1157e68b2e66ed5.jpg",
  },
  {
    name: "CHAMIAN 40",
    account: 110066669,
    description: "DEPOT MIN 1000DOLLAR\nCOMPTE STANDARD",
    author: "hicham labiad",
    authorPhoto:
      "/st/media/pim/media/user_photo/e9/e98/e98355d35bb858d8c89d4ef90b3f4e44_b071bed8278949c1bb13d16756caa4b9.jpg",
  },
  {
    name: "Win-Win-Win",
    account: 110066882,
    description: "Thank you for your faith",
    author: "Anh Tuấn Đào",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/ae0/ae027662a6fc37fd2d65fa6fc035f8f2_8840a4b508044a9288e4ab365ee08079.jpeg",
  },
  {
    name: "Sinar Mandiri 88",
    account: 110067195,
    description:
      "do you want to invest and growth ?\nwelcome and join with me\nscalping - intraday\n\nthank you",
    author: "ALBERT VIERA",
    authorPhoto:
      "/st/media/pim/media/user_photo/8d/8d5/8d507226334aec7ae41a0d75aef3ffee_75f522cbd50e405a8d999f568d681533.jpg",
  },
  {
    name: "IA Ax Euro Green",
    account: 110067476,
    description:
      "Robô conservador, abre operações em movimentações estratégicas que não ocorrem diariamente. Média de lucro mensal de 5 à 7%",
    author: "Ana Carolina",
    authorPhoto:
      "/st/media/pim/media/user_photo/53/531/53120bdeecbe53487ac71e27e3cefec5_a9dc993d6ced4304a9e8d7eb91d16642.png",
  },
  {
    name: "bap win1985",
    account: 110067636,
    description: "Chiến thắng",
    author: "dũng  nguyễn văn",
    authorPhoto:
      "/st/media/pim/media/user_photo/65/65f/65f36bf401d33d896e2cf6925b9a8b8e_689db72ee60b4d23b8939b97cd3f3236.png",
  },
  {
    name: "Fx_Money_Machine_985",
    account: 110067985,
    description:
      "Low Risk, Sustainable Profit Growth - Rủi ro thấp, Lợi nhuận tăng trưởng đều và ổn định.",
    author: "QUANG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/98/98d/98dc2487fbb1648c39d3040b793e8cf4_701ec9ee86e548ffaacd5970bfc7d909.JPG",
  },
  {
    name: "ThemeEMT_Thai",
    account: 110068013,
    description:
      "- Major Pairs\n- like a Grid system\n- V12 FIFO EA start from  June 26,2024",
    author: "MR WORAWUT JAISAWANG",
    authorPhoto:
      "/st/media/user_photo/3c/3c3/3c3c4af1f2a592cb8f5e108687eda662_a09418f54eb64709b4d4f873010c58d0.jpg",
  },
  {
    name: "NHH Robot Trading",
    account: 110068112,
    description: "Vietnamese 🇻🇳",
    author: "Hoa Nguyen Huu",
    authorPhoto:
      "/st/media/pim/media/user_photo/0b/0bc/0bcffcc1efc899a085417fac6cccaece_d7ed11b341b24b82a949960fdbbb9667.png",
  },
  {
    name: "Dragonxtrade",
    account: 110068311,
    description:
      "Safety- Reliable - Wisdom - Sustainable development - Honestly",
    author: "Thắng Lê Đức",
    authorPhoto:
      "/st/media/pim/media/user_photo/23/233/233330a9888058916e1be82fc105fb7b_5fb5070fc50e4cfeb10dc1170bbcf1bd.png",
  },
  {
    name: "Đại Hải Thuỷ II",
    account: 110068429,
    description:
      "♻️ Giao dịch luôn đặt mức độ an toàn và quản trị rủi ro lên cao nhất.\n💎 LH: 0982908911",
    author: "HOAI NGUYEN BA",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/ae9/ae9402cba39d864a5d95bf2ba6281751_f7cdd7cb7fdd4937bd66106ed99e2eb3.jpeg",
  },
  {
    name: "SCALPX GLOBAL",
    account: 110069200,
    description: "START YOUR TRADING JOURNEY WITH 200$",
    author: "Jasir hameed",
    authorPhoto:
      "/st/media/pim/media/user_photo/ec/eca/ecae2c4c5cdc20d4fcfa3391d3fd370f_3e76b7d232994f94864e276c0d37f2f6.jpg",
  },
  {
    name: "Trading4Life",
    account: 110069438,
    description: "Estrategia automatizada en el EURUSD y AUDCAD",
    author: "Pablo Hidalgo",
    authorPhoto:
      "/st/media/pim/media/user_photo/5e/5e8/5e8b2d8b6317c329816cfa12bd35df06_0e0212a91fe347a7977b57a4fabed339.jpg",
  },
  {
    name: "OCEAN WAVE TRADERS",
    account: 110069719,
    description: "Join us for weekly Confirm Profit Trade with us Grow with us",
    author: "Ghazanfar Ali",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f58/f585d8c76119130b60a9e8f2a12e9b5d_a6f00aebb1dd454baef763ade1fec47c.jpg",
  },
  {
    name: "Hansafxfxfx",
    account: 110070121,
    description: "Manually",
    author: "ELIZANDRA DE SOUZA",
    authorPhoto:
      "/st/media/pim/media/user_photo/a4/a4f/a4f0bde55a9d8d3f66eb82902c6f1f0c_b1b609148a7542209502ab288b93912c.PNG",
  },
  {
    name: "Latcrypto EURUSD",
    account: 110070619,
    description:
      "LatCrypto\nIs a trading strategy developed by our company, Latcripto, with the goal of achieving precise and consistent profits in the cryptocurr",
    author: "javier mauricio zaninetti",
    authorPhoto:
      "/st/media/pim/media/user_photo/64/64e/64e5d310232c54f500fbd01d94a3b40a_ec60fe9a31c946dd941ec8713fe80713_CrpwjJJ.jpg",
  },
  {
    name: "CoRsi Bot 1",
    account: 110070672,
    description: "RSI Divergence",
    author: "PAVAT VORAPRUCK",
    authorPhoto:
      "/st/media/pim/media/user_photo/80/80e/80e5b0752f89845c78394d4633a081b0_3f04cff9265f418dac6ce71c61890d55.png",
  },
  {
    name: "Dreamcatcher GSym",
    account: 110070748,
    description: "GSym EA trading",
    author: "용철 김",
    authorPhoto:
      "/st/media/pim/media/user_photo/3a/3a3/3a3fc5b941dcce479c8544aa1847a34a_fd9a2367660d4b5e9ab84175f69115b1.jpg",
  },
  {
    name: "เล่นสั้น ขยันซอย",
    account: 110070805,
    description: "Total orders not more than 0.1% of balance",
    author: "Parnupong Raksakom",
    authorPhoto:
      "/st/media/pim/media/user_photo/35/356/35652d35a3a9be21313107b4850ca2ff_82c79d3012b3452684ab688d5fb4ff9d.jpg",
  },
  {
    name: "J2_GOLD_F200",
    account: 110070826,
    description:
      "J2  is a trade strategy focused on stable growth.\nwe decide to do this through the A.I analysis tool and the opinions of experienced traders.\nthanks~",
    author: "jeong jae park",
    authorPhoto:
      "/st/media/pim/media/user_photo/5c/5cd/5cdbb829f314dcf1d4f7676265d1bd2d_bf66f2ed91d74208b342f1e73c29cf1f.jpg",
  },
  {
    name: "Family Trading",
    account: 110070858,
    description: "Family me",
    author: "PRASOP SUWANPRASIT",
    authorPhoto:
      "/st/media/pim/media/user_photo/9d/9d2/9d2a2441860c5f9094142d2e91b8dd26_c3da5ac1ed3c4b7a8c53fe0ed023f934.jpg",
  },
  {
    name: "Trend Robust Strateg",
    account: 110070898,
    description:
      "一三社区交易团队是拥有丰富经验，擅长趋势交易，只做BTC/USD，ETH/USD,XAU/USD三个个品种组合，通过细致入微的市场分析和精准的决策，我们努力为客户创造可观的收益。无论市场波动如何，我们都保持冷静并灵活应对，以确保投资组合的稳定增长，您将迎来精彩而可靠的投资之旅。",
    author: "应军 陈",
    authorPhoto:
      "/st/media/pim/media/user_photo/bf/bfd/bfdb1ed16287018bb3a66c9bb3856488_e1cdea1a33234995b723f198905bce76.jpg",
  },
  {
    name: "Bahrain FX",
    account: 110070962,
    description:
      "Low risk, High reward\nI treat your money as my money.\n\nEnjoy your journey with me ❤️\n\nBest wishes",
    author: "Mohamed Meftah",
    authorPhoto:
      "/st/media/pim/media/user_photo/3e/3e6/3e640d1f3a5fc5590a9877344e13ff4c_f39dfd0a69dc4e6ea5d2d20a5ae1a785.jpeg",
  },
  {
    name: "Scaping EU",
    account: 110070994,
    description: "MMFForex channel",
    author: "NGUYẼN TÀI",
    authorPhoto:
      "/st/media/user_photo/3f/3fd/3fd640ae53d59eff84e3ad31af5d4050_6460c8e7eab946c6bf8c894f2f7ecd8e.jpeg",
  },
  {
    name: "Pips Mastermind",
    account: 110071074,
    description:
      "Unlock steady profits with 'Pips Mastermind' – where risk is minimized, rewards are maximized, and success is achievable.",
    author: "Bhavika Pokiya",
    authorPhoto:
      "/st/media/pim/media/user_photo/c0/c0b/c0b03ecd6411fccfa7f78c21b8b41378_c021044e206e4774a752b874736f86a0.png",
  },
  {
    name: "Min Risk WO SL",
    account: 110071086,
    description:
      "Earn Profit without the risk of losing Capital.\nSlow and Stable Income.\n\nMin Risk trading Without Stoploss.",
    author: "Sajid Moidu Abdulla",
    authorPhoto:
      "/st/media/pim/media/user_photo/ed/ed0/ed0671c4750e168d7192629f06ed61c1_66be8f73d147459190d534aed8380953.PNG",
  },
  {
    name: "Zelda by Apisbot",
    account: 110071643,
    description:
      "Focus on GBPUSD. 100% Trade using EA, Smart Averaging to lower drawdown. Trading contains risk, use money you can afford to loose",
    author: "David Yulianto Santoso",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/696/696c116dd07051e4d302bd6ee53779b3_aec007cb1d8c4deeb7f65842b5577a61.jpg",
  },
  {
    name: "Alpha Return",
    account: 110071990,
    description:
      "I run several EA and each EA has an independent day-trading strategy, no Matingale or other risky method, each order has SL (some SL are hidden in EA)",
    author: "一敏 马",
    authorPhoto:
      "/st/media/pim/media/user_photo/70/70b/70b4eb428117cc5edd9916c373f983bd_3612e08e4057468b81f158074c5e0416.JPG",
  },
  {
    name: "Great one 2",
    account: 110072297,
    description: "Great strategie",
    author: "mohammed hoummadi",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/60d/60d0a9802930e5922f6b0b24c2a66db3_bde6ab47422d40ce860396d54c567fe5.jpg",
  },
  {
    name: "Simple Simple",
    account: 110072930,
    description: "If you can't hold, you won't be rich",
    author: "THI KIM LOAN TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/23/239/2396e7962d73a71165235df037455dc4_77296978a1fc4dfe8e6f3b39cfeee778.jpg",
  },
  {
    name: "Scalp Multicurrent",
    account: 110072989,
    description:
      "Looking for a 10% monthly target with daily scalping. We use multiple currencies and trades can be opened for days.",
    author: "Greta Jazmin Alonso Hernandez",
    authorPhoto:
      "/st/media/user_photo/44/443/443c2e615aa95869790736a5b5dc0f49_374f0a7e62a5422cbcf257efb8d620b8.jpg",
  },
  {
    name: "The strategy 2",
    account: 110073039,
    description: "Great",
    author: "mohammed hoummadi",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/60d/60d0a9802930e5922f6b0b24c2a66db3_bde6ab47422d40ce860396d54c567fe5.jpg",
  },
  {
    name: "The strategy 4",
    account: 110073042,
    description: "Awsome",
    author: "mohammed hoummadi",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/60d/60d0a9802930e5922f6b0b24c2a66db3_bde6ab47422d40ce860396d54c567fe5.jpg",
  },
  {
    name: "Daily Safe Profit",
    account: 110073364,
    description:
      "Our Monthly income is around 5% To 15% 💸  With our professional \n experience and algorithm that we use our 10 months income is 170% Equity 1000$",
    author: "SAMIULLAH KHYBER",
    authorPhoto:
      "/st/media/pim/media/user_photo/2f/2fb/2fb2f2852e1edb050181c17e14aa8d82_57462706cdb24de68193924158b3f5d9.png",
  },
  {
    name: "BomahdiFx HighRisk",
    account: 110073972,
    description:
      "⚠️ انتبه ⚠️ \nهذه الاستراتيجية ليس للقلوب الضعيفة ❗️\nالمخاطرة عالية جداً ❗️\n- لا يوجد تعويض في حال الخسارة \n- دخولك يعني أنك تعلم بالمخاطرة \n- شكراً 🌹",
    author: "Hasan Alenezi",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/69c/69ccd9511c5cdb559cc8843a2aa2b570_8484e6d788cb4d3894c0be74e5fe5c75.PNG",
  },
  {
    name: "The strategie 6",
    account: 110074038,
    description: "Great",
    author: "mohammed hoummadi",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/60d/60d0a9802930e5922f6b0b24c2a66db3_bde6ab47422d40ce860396d54c567fe5.jpg",
  },
  {
    name: "WishBourne",
    account: 110074285,
    description: "Focus on XAUUSD\n\nTrade in timeframe 4HR and 15M",
    author: "Jatuphol Seeboonruang",
    authorPhoto:
      "/st/media/pim/media/user_photo/18/18f/18fb031ff581dbb09f62189338e71041_4bc4c9ace4604626bdc677574e67caa4.png",
  },
  {
    name: "Quick Gains",
    account: 110074322,
    description:
      "The stratergy takes quick trades and closes in small profit, for long term slow growth of account",
    author: "Shashidhar Chandraiah",
    authorPhoto:
      "/st/media/pim/media/user_photo/3c/3c0/3c0aa09051bfbbd3fcb94fbadca4ef3e_fadcb37571da472d90ba53821ff6c15b.jpg",
  },
  {
    name: "Thanhdg vàng dài hạn",
    account: 110074861,
    description:
      "Thanhdg : Đầu tư dài hạn theo tháng. Theo năm. Không dùng đòn bẩy , an toàn trên hết . 10-20%/ tháng",
    author: "THANH LO TRAC",
    authorPhoto:
      "/st/media/pim/media/user_photo/80/803/803a2449780b704379d12c5539bb359e_49be7937af664cacaf4863e6aa5e7926.jpg",
  },
  {
    name: "HIRA MDM TRADEMORES",
    account: 110075499,
    description:
      "TREND IS FRIENDTREND IS FRIEND .DONE WITH PROPER MONEY MANAGEMENT TARGET AND STOP LOSS. SLOWLY WE WILL GROW TOGETHER.",
    author: "Mallesh Mali",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b97/b97a2eabb26b84878b0938c36169f13b_3907e9c9e81d40d185e4adb35cf84bcd.jpg",
  },
  {
    name: "TDP_FOREX_MANUAL",
    account: 110075539,
    description:
      "This Strategy is for Forex Pairs Manual Trading\nFor EA Trading copy my other stradegy\nhttps://t.me/TDP_Trader_Official",
    author: "Kundan Pandya",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b97/b979c65723397cb1efc30a38e75d6469_440f596db9fb4edea0b1e64e56396667.png",
  },
  {
    name: "Safely Trading",
    account: 110075846,
    description:
      "This is a trading method based on the price trajectory of 5 currency pairs. This method is safe and sustainable. It is suitable for beginners as well.",
    author: "Tri Le",
    authorPhoto:
      "/st/media/pim/media/user_photo/4b/4b7/4b7d3a7e134283946bf06cd68a7d7233_0f73f4d00ef548f6abe6df14b0100f90.jpg",
  },
  {
    name: "Times 199x",
    account: 110076065,
    description:
      "Telegram:t.me/times199x\n\n*Dừng lỗ tối đa 1R=20-25$, lợi nhuận  từ 0R -10R phụ thuộc vào điều kiện thị trường",
    author: "Phúc Điền Bùi",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8a5/8a5e2b7ccaab6e2db9c860becb121ede_143ef59547b7499bab359655d7d8c342.jpeg",
  },
  {
    name: "Aikido Invest Dwro",
    account: 110076187,
    description:
      "Hola Amigos, hago Trading con Gestión de Riesgo máxima del 1% por operación, máxima por día 2% en Forex, Xau, Usoli, Btc, Rentabilidad Prom 2-20% mes.",
    author: "Dwrier Osbaldo Arredondo Quintero",
    authorPhoto:
      "/st/media/pim/media/user_photo/ac/acd/acdcf0e2b3424d0879337f58933e5ec8_ed8b5d119c034613a50ffbc97e830908.jpg",
  },
  {
    name: "ACHILLEUS WAY",
    account: 110076323,
    description:
      "I have a historical Gold pricing data last 2 years\n✨ High Win Rates: ~90%\n\n✨ My track record :\nhttps://www.mql5.com/fr/signals/2068431?source=Site%20",
    author: "Mouad  MELLOUKI",
    authorPhoto:
      "/st/media/pim/media/user_photo/9f/9fd/9fdf880084acfffd2042f16262120dd3_4b6deae4a777482daf2ed24324d9988c.jpg",
  },
  {
    name: "Ark safe SL TP",
    account: 110076514,
    description:
      "We only enter the market when there is risk free opportunity.your fund safe is our  first priority. Gold medalist achiever in forex industry. Pipra",
    author: "ASHRAF KHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/70/70a/70ac94a1896a557f5cee6f6fdc039e20_53d36cd8a7d34ed6a2bf4f5108b69cc9.jpg",
  },
  {
    name: "Lê Trương Anh Triết",
    account: 110076589,
    description:
      "Làm Lại từ đầu. Đã từng x1000 lần tài khoản nhưng 6 tháng nay thua liên tục. Giờ làm lại từ đầu",
    author: "Anh Triết Lê Trương",
    authorPhoto:
      "/st/media/pim/media/user_photo/e3/e30/e30beb771e2830d2da3c2059b576d34c_b14a8d08f85443c3abcd8593d518ae10.jpg",
  },
  {
    name: "Lê Trương Anh Triết",
    account: 110076590,
    description:
      "Làm lại từ đầu. Đã 3 lần x1000 lần tài khoản nhưng cháy sạch sẽ 3 tháng nay thua\n\nGiờ làm lại từ đầu",
    author: "Anh Triết Lê Trương",
    authorPhoto:
      "/st/media/pim/media/user_photo/e3/e30/e30beb771e2830d2da3c2059b576d34c_b14a8d08f85443c3abcd8593d518ae10.jpg",
  },
  {
    name: "Lê Trương Anh Triết",
    account: 110076604,
    description: "Làm lại từ đầu",
    author: "Anh Triết Lê Trương",
    authorPhoto:
      "/st/media/pim/media/user_photo/e3/e30/e30beb771e2830d2da3c2059b576d34c_b14a8d08f85443c3abcd8593d518ae10.jpg",
  },
  {
    name: "Forex__100",
    account: 110076719,
    description: "Breakout Trading with proper TP & SL\nLong term strategy",
    author: "Remeet Laiya",
    authorPhoto:
      "/st/media/pim/media/user_photo/d8/d8b/d8b8c1e7c4647ccd4f7d5505b15f2a42_a1c52d3df88f4612a2be062376cf4108.jpg",
  },
  {
    name: "The strategy 10",
    account: 110076805,
    description: "Great",
    author: "mohammed hoummadi",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/60d/60d0a9802930e5922f6b0b24c2a66db3_bde6ab47422d40ce860396d54c567fe5.jpg",
  },
  {
    name: "Strategy12",
    account: 110077117,
    description: "Great",
    author: "mohammed hoummadi",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/60d/60d0a9802930e5922f6b0b24c2a66db3_bde6ab47422d40ce860396d54c567fe5.jpg",
  },
  {
    name: "Disk Jockey",
    account: 110077504,
    description:
      "Estrategia que busca generar un crecimiento acelerado de tu inversión",
    author: "Israel Saenz",
    authorPhoto:
      "/st/media/pim/media/user_photo/c0/c07/c072d7e6823839bd8a12a662ac9edb36_eb9f4e4bb1a24016a8adb81f40652ae7.jpg",
  },
  {
    name: "Vinh Trương",
    account: 110078150,
    description: "TPO & Footprint",
    author: "Nhật Vinh Trương",
    authorPhoto:
      "/st/media/pim/media/user_photo/91/91d/91dfdec138eb9598196df384bbdf4a37_d8f538d47cbc49f7a123cd9bfc8eb1d3_g1zs367.png",
  },
  {
    name: "Limit risk",
    account: 110078194,
    description: "Limit risk",
    author: "กานต์ฐพิชญ์ ชลภิวรรธน์",
    authorPhoto:
      "/st/media/pim/media/user_photo/de/def/deff5dfe81477356fe27fbf5df13c1f0_c67541f7afd74420bce1300a58f6f7f9.jfif",
  },
  {
    name: "MIDDLE PATH",
    account: 110078377,
    description: "LIFE'S GOOD",
    author: "long lâm",
    authorPhoto:
      "/st/media/pim/media/user_photo/1c/1c3/1c3273c0f207dbf2eac6c1f42a2cb907_10de2392cb78483cb680c96c914ec5c4.png",
  },
  {
    name: "Test Trade",
    account: 110079082,
    description: "Forex",
    author: "KAMLANI SHANKER",
    authorPhoto:
      "/st/media/pim/media/user_photo/6f/6f5/6f506af9231ceae8ecf4566914599833_c64dd5836f8e4b37b8d527380db33b77.jpg",
  },
  {
    name: "Win - Win",
    account: 110079163,
    description:
      "We will be focusing only on Gold (XAU/USD) and expected returns would be around 8%-12% depends on the market volatility.",
    author: "Dhivya kumar",
    authorPhoto: null,
  },
  {
    name: "Fx Commander",
    account: 110079173,
    description:
      "Why compete with big players in the market when we can join them and follow their trade wisdom? 🌐👣 Let's follow in their footsteps!",
    author: "Devandra Shinde",
    authorPhoto:
      "/st/media/pim/media/user_photo/0c/0cc/0cc5d97d2b4da61fc2127fd0ce6bbfdd_a4038946831a491c9dbd98873fd12f9c.jpeg",
  },
  {
    name: "Takeprofit",
    account: 110079324,
    description:
      "Không có phương pháp tốt nhất , chỉ có phương pháp phù hợp nhất",
    author: "Dũng Bùi Quang",
    authorPhoto:
      "/st/media/pim/media/user_photo/dc/dc6/dc6336ec232e35cb217e7cfebff10f68_f09fc45236c54ef6ac4798a33770048d.png",
  },
  {
    name: "MocFinance",
    account: 110079333,
    description:
      "Rủi ro <= 5%, Lợi Nhuận = 2-10% 1 tháng. \nHơn tiết kiệm Ngân Hàng.\nChuyên GOLD!",
    author: "BA QUOC VU NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a2/a29/a29ad7da0c5eb6e906e13b5cb5876ef0_be5af552e8ec45d0b9fc0dc7bd2bab5a.jpg",
  },
  {
    name: "Malik Traders",
    account: 110079414,
    description: "Follow me and enjoy profit",
    author: "Rafaquat Ali",
    authorPhoto:
      "/st/media/pim/media/user_photo/9c/9cc/9cc9997c8ae970a606f78de168925e43_41187326eadf4adca1a0e49300bbe8fd.jpg",
  },
  {
    name: "Back Com Cac San",
    account: 110079689,
    description: "- X2 TÀI KHOẢN",
    author: "HOÀNG VIỆT",
    authorPhoto:
      "/st/media/pim/media/user_photo/6e/6e9/6e9614c69a203ccf805e516598ba123e_8eb232b321184af6aff107a6042d3d5a.jpg",
  },
  {
    name: "Dollers in sleep",
    account: 110079958,
    description:
      "Professional trader whose aim is to provide safe, secure and easy income to its followers",
    author: "Mujahid Ahmad",
    authorPhoto:
      "/st/media/pim/media/user_photo/eb/ebd/ebd9b224192278eb35d2fff33fac7eda_3607ada0c53b4a01aada4c7cee17b47f.jpeg",
  },
  {
    name: "Forex Mantra",
    account: 110079990,
    description: "Take profit 2-3% daily",
    author: "UPENDRA MISHRA",
    authorPhoto:
      "/st/media/pim/media/user_photo/b1/b16/b16bff5552178b56390866a01f5363ed_db23cc0e4436486e93821e56b43f5a04.jpg",
  },
  {
    name: "Newlifes MMFFOREX",
    account: 110080001,
    description: "MMFFOREX CHANNEL",
    author: "NGUYẼN TÀI",
    authorPhoto:
      "/st/media/user_photo/3f/3fd/3fd640ae53d59eff84e3ad31af5d4050_6460c8e7eab946c6bf8c894f2f7ecd8e.jpeg",
  },
  {
    name: "FOREX IN HAND",
    account: 110080114,
    description: "FOREX IN HAND",
    author: "ELDEEN ELDEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/603/60360f065d7cb7f6622240dd1855a05d_d915f6c58f5d49728e53aa36f93c9922.jpg",
  },
  {
    name: "FAST PROTOCOL",
    account: 110080236,
    description: "FAST PROTOCOL",
    author: "AHMED AHMED",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8a8/8a8ade816612b27ccd7f8d6e8e45a151_c6fc6197aad844bea1a77ac99f75c0ba.jpg",
  },
  {
    name: "FAST PROTOCOL",
    account: 110080287,
    description: "FAST PROTOCOL",
    author: "AHMED ELDIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8a8/8a8ade816612b27ccd7f8d6e8e45a151_57c567133b334429b3bbe26f379d961c.jpg",
  },
  {
    name: "FAST PROTOCOL",
    account: 110080359,
    description: "FAST PROTOCOL",
    author: "AHMED ELDIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8a8/8a8ade816612b27ccd7f8d6e8e45a151_57c567133b334429b3bbe26f379d961c.jpg",
  },
  {
    name: "DRIVE ANGRY",
    account: 110080378,
    description:
      "DRIVE ANGRY The new way to make profit from Forex with low risk  work in very safe zone on your money",
    author: "HADY SAAD ELDEEN AHMED SAAD ELDEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/01/011/011531291b549c2bf86905b94f6f4209_5672bdf8396545fb869eebcc5dd54cab.jpg",
  },
  {
    name: "Trend is king",
    account: 110080599,
    description: "Trend is king－EURUSD\nStart copying with $200",
    author: "Yang Yingru",
    authorPhoto:
      "/st/media/pim/media/user_photo/85/852/852cc1ef3f200d3caf910bec6d6948bb_0db7af6b927249c998a2e857ac8af509.png",
  },
  {
    name: "Marty Female",
    account: 110080724,
    description:
      "Open posisi dengan System Martiangel  dimana akan buka posisi jika berlawanan arah tapi dengan akurasi buka posisi yang bagus dan penambahan lot",
    author: "FARIDA",
    authorPhoto:
      "/st/media/pim/media/user_photo/5c/5cb/5cb10cc58e418dcee9acbb56b3a02a28_4313d8631fb7408e8e69befa8ae4a761.jpg",
  },
  {
    name: "Millionaire Gold",
    account: 110080985,
    description:
      "Experience 7+\nPrice action trading \nFollow the trend \nXAUUSD Favourite \nMax profits min loss\nFeel free to copy",
    author: "Malik Atta Ullah",
    authorPhoto:
      "/st/media/pim/media/user_photo/bb/bbb/bbb93a6087b70aba31095dc607e01c8e_6e73eb2e87cc47e3a4c766010e974dfd.jpg",
  },
  {
    name: "WORLD TRADERS",
    account: 110081060,
    description: "WORLD TRADERS",
    author: "MOHAMED ABDELWAHAB",
    authorPhoto:
      "/st/media/pim/media/user_photo/f7/f73/f73a614e58d30c6ce418430fd1cdd61a_3c673d151d1d4159b797cb1adf68e9e0.jpg",
  },
  {
    name: "FOREX LOGICAL",
    account: 110081273,
    description:
      "FOREX LOGICAL success in disciplined analysis, risk management, and strategic decision-making, maximizing profit potential with calculated moves",
    author: "Sahar Abd Alrahem Abd Elghaffar",
    authorPhoto:
      "/st/media/pim/media/user_photo/be/be4/be45c5e4b720bdf2942b6cadbe5772cb_fd6f8120565b4fef80a314c0c3d9d2f4.jpg",
  },
  {
    name: "FOREX TRADE 04",
    account: 110081384,
    description:
      "FOREX TRADE is the right way to make good profit with very low risk its safe system with human control all time . WHATSAPP GROUP http://chat.5kc.com",
    author: "ABD ALRAHEEM ABD ALRAHEEM",
    authorPhoto:
      "/st/media/user_photo/41/415/415936b9f32d4c3029ad1e5fc12b3397_48f8bd48411a4a4ba017c298fc2f7ee6.jpg",
  },
  {
    name: "TERMINATOR",
    account: 110081437,
    description: "TERMINATOR",
    author: "SAHAR ABDELRAHIM",
    authorPhoto:
      "/st/media/pim/media/user_photo/7e/7ea/7ea028f579200bc3b38be188d7ee270d_dae72a11e7bd4173a67a6c3ad0768b74.jpg",
  },
  {
    name: "AUTOMATED TRADE",
    account: 110081602,
    description:
      "AUTOMATED TRADE ,uses algorithms to place trades on your behalf. It operates without human intervention based on predefined criteria and strategies.",
    author: "ABD ELRAHIM",
    authorPhoto:
      "/st/media/pim/media/user_photo/57/578/5786287ea2bb781c0741f4cbcc0d97a4_e9eeb812ff874149902debc8cffb9b55.png",
  },
  {
    name: "ThuNongTDTD",
    account: 110081739,
    description:
      "Giao dịch không rủi ro với THƯỚC ĐO QUỸ ĐẠO GIÁ http://thuocdoforex.com/",
    author: "Thị Anh Thư Nông",
    authorPhoto:
      "/st/media/pim/media/user_photo/47/47e/47e76c933ecbe224c1cf837257911e46_9cf328b293f94452bf94a3eabe1220ee.png",
  },
  {
    name: "FX Mania",
    account: 110081744,
    description:
      "WELCOME, we are not just depending on graph The main pillar of our trading strategy is Market analysis. AIM (RISK: ZERO)v(RETURN: 10%) (Monthly)",
    author: "Piyush Chovatiya",
    authorPhoto:
      "/st/media/pim/media/user_photo/79/79f/79f3eac7bfe73099a5dbbbd7d8ed1d19_9e52eed80d6a41b49cbe2b686ffa73ec.jpg",
  },
  {
    name: "Forex Master",
    account: 110081788,
    description:
      "Invest with us , be relax and see your money growing. Monthly target 5% - 15%",
    author: "Pritpal Singh",
    authorPhoto:
      "/st/media/pim/media/user_photo/04/042/0428ea1e2eba8d8314350693af70923a_6cdd8e8b600244d18b7f98d8ae0bfdd1.jpg",
  },
  {
    name: "Nitro Capital",
    account: 110081856,
    description:
      "Artificial intelligence is used with human intelligence To make a monthly profit equivalent to a 12% which can be increased",
    author: "Pintu  Choudhary",
    authorPhoto:
      "/st/media/pim/media/user_photo/ef/ef7/ef703cbc10e60f16f10ddb44a4da7ed2_6c55a61bfd434090b49a13a3156e9125.jpg",
  },
  {
    name: "Invicto FX Hypado",
    account: 110081869,
    description:
      "A melhor estrategia de swing trade da Tokai Invest\nCom uma media mensal de + ou - 10% ao mes\nMais de 15 anos de experiencia.",
    author: "NACAYA ROBERTO KUNIO",
    authorPhoto:
      "/st/media/user_photo/4b/4b8/4b8b8d4089bbe8db02399681ba337785_b90f165c2a2e4189b991d4bac34a9fed.jpg",
  },
  {
    name: "Price Action- TF",
    account: 110081892,
    description:
      "Strategy is based on pure price-action and follows trends. Believe in low risk and consistent profits.\n-No Robots\n-Safe during High Volatility",
    author: "Shinderpal Shinderpal",
    authorPhoto:
      "/st/media/pim/media/user_photo/bc/bcc/bcc54433714555d3894a5b8af6cd8e47_dd806dc5d12b4c6195a4f78506bf9073.PNG",
  },
  {
    name: "MMR Traders",
    account: 110082109,
    description: "I will give you good profit with very low risk",
    author: "Muhammad Rizwan Sarwar",
    authorPhoto:
      "/st/media/pim/media/user_photo/3a/3a3/3a315398061a1e8edf768de4701e8910_d77a7fa50118439eb704bac6eb438855.jpg",
  },
  {
    name: "MM trade GOLD",
    account: 110082130,
    description: "Target 10% per month \nDay+Swing trade\nRisk per trade 2%",
    author: "MISS TASSANAN THECHANANTIPAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/ea/eaa/eaaa7f6c5e014c171ccd69d080bc3169_092ee428100f4d0b8b11628eedc1f315.jpeg",
  },
  {
    name: "Venda Venda",
    account: 110082862,
    description: "Venda Venda",
    author: "Francisco Narcizo de Chaves",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/45b/45b243ccaca90d8b204568ae1e556e8c_c6c4726c0fc84e0289ecc652c4b9dfd4.jpg",
  },
  {
    name: "Compra Compra",
    account: 110082872,
    description: "Compra Compra",
    author: "Francisco Narcizo de Chaves",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/45b/45b243ccaca90d8b204568ae1e556e8c_c6c4726c0fc84e0289ecc652c4b9dfd4.jpg",
  },
  {
    name: "Roma Horizon",
    account: 110082941,
    description:
      "Quỹ vận hành bởi người có nhiều năm kinh nghiệm về EA, \nLợi nhuận ổn định từ 5-15%/tháng\nĐầu tư từ 10$",
    author: "DƯƠNG QUANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/56/56a/56a562e914d7e885913afd52136a2bc7_dffc07c07f7a47229c22b5593316d880.png",
  },
  {
    name: "Hedging and Speculat",
    account: 110082996,
    description: "Swing trade",
    author: "Muhammad shabib",
    authorPhoto:
      "/st/media/pim/media/user_photo/a6/a6f/a6f829517064740ffe49fe8f29a8f02d_ed323fc55ccf4e8da0a7198369fce115.jpg",
  },
  {
    name: "HABA INNOVATION",
    account: 110082997,
    description: "You sleep, we make your money",
    author: "Thanh Hà Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/d4/d45/d45a2f94cb76b42067d46bc32eff8cc6_9d7cb75807ec4cac970060aa3277d53f.jpg",
  },
  {
    name: "good profit-low risk",
    account: 110083259,
    description:
      "I grantee a good profit with no risk \nI always put SL\nMonthly target 5%-25%",
    author: "Mohamad Saied",
    authorPhoto:
      "/st/media/pim/media/user_photo/98/985/9857b51e87cd73e0cca346f2dda320f3_e3f521ae9bc94f1db0bdc4305245f98b.jpg",
  },
  {
    name: "MONEY NEVER SLEEPS",
    account: 110083479,
    description: "MONEY NEVER SLEEPS",
    author: "RASLAN OLA",
    authorPhoto:
      "/st/media/pim/media/user_photo/cd/cd8/cd86d09329ee8cf1c283e809b0ad452a_87d92fcb0ca34c4fb0d283920a3eeaa3.jpg",
  },
  {
    name: "KING SCALP 001",
    account: 110083747,
    description:
      "Scalping and sometimes Swing. \n>>Safety is the top priority \n>> We will try to kip  a steady profit every month ! \n            *** Thanks for all  ***",
    author: "Hoang  Tuan",
    authorPhoto:
      "/st/media/pim/media/user_photo/57/572/572a3f03248cca0c953c72d31c544d14_8a75593aafa3482fa0ae34817f25c2b6.jpeg",
  },
  {
    name: "MATRIX",
    account: 110083856,
    description: "MATRIX",
    author: "ABDELGHAFFAR SAID",
    authorPhoto:
      "/st/media/pim/media/user_photo/6a/6af/6af5ab20598770c28971af9bed1a9cf7_acdf6b8ef4a7495b99f37b8a75835886.jpg",
  },
  {
    name: "Highly profitable EA",
    account: 110084212,
    description: "Highly profitable express train",
    author: "YI-LONG CHANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/5f/5f4/5f4bde41963e5fe30279d104780b318c_c8ce5306b14040f8a4ff8ffc680d42dc.jpg",
  },
  {
    name: "Zainfx autotrade 4",
    account: 110084408,
    description:
      "Low risk, our target is to get a constant profit % (5 - 10 / M)",
    author: "Zainab Alhalwachi",
    authorPhoto:
      "/st/media/pim/media/user_photo/0a/0a7/0a778fc6b9e1b8033f9c50c15131adf2_3a102fae59474bceb897a49e69cbd49e.jpg",
  },
  {
    name: "HTB-FX-2023",
    account: 110084681,
    description:
      "Chuyên sâu về xauusd. Mục tiêu mang lại lợi nhuận ổn định 10%/ tháng. \nQuý vị hãy coppytrader bằng số tiền mà nếu mất không ảnh hưởng đến cuộc sống.",
    author: "HA HA",
    authorPhoto:
      "/st/media/pim/media/user_photo/3f/3f1/3f12883a6c72796ee09e5b48f44483b9_5b96271997644c92a2a54d4b24ede422.jpg",
  },
  {
    name: "LIFEs GOOD",
    account: 110085274,
    description: "The roses of love glad the garden of life. (Lord Byron)",
    author: "long lâm",
    authorPhoto:
      "/st/media/pim/media/user_photo/1c/1c3/1c3273c0f207dbf2eac6c1f42a2cb907_10de2392cb78483cb680c96c914ec5c4.png",
  },
  {
    name: "Optimal GU 1",
    account: 110085600,
    description:
      "Using AI, Machine learning, and Reinforcement learning for trade GBPUSD only. Use statistics to adjust the risk ratio. Every order has a stop loss.",
    author: "Tanitas Choeithongsri",
    authorPhoto:
      "/st/media/pim/media/user_photo/41/41d/41d1e99108e5a3f04d05c3e51cc54abb_999ebb4afa6748e5a3fcb888362c6f44_CSJSNph.png",
  },
  {
    name: "YESHUA 1 God is Good",
    account: 110085685,
    description:
      'Estratégia Consolidada, Abençoada e Vencedora.\n\nPares EURUSD, GBPUSD c/ Stop.\n\nObs.: "10% do rendimento líquido é retornado a Projetos Sociais."',
    author: "Eliel Oscar Moreira Alves",
    authorPhoto:
      "/st/media/pim/media/user_photo/83/83b/83bdfeb555101ee58b74a6d5647b7160_9f3ee4decdee4d278c9b42a5ae06bff8.jpeg",
  },
  {
    name: "YESHUA 2 God is Good",
    account: 110085845,
    description:
      'Estratégia Consolidada, Abençoada e Vencedora.\n\nPares EURUSD, GBPUSD c/ Stop.\n\nObs.: "10% do rendimento líquido é retornado a Projetos Sociais."',
    author: "Eliel Oscar Moreira Alves",
    authorPhoto:
      "/st/media/pim/media/user_photo/83/83b/83bdfeb555101ee58b74a6d5647b7160_9f3ee4decdee4d278c9b42a5ae06bff8.jpeg",
  },
  {
    name: "YESHUA 3 God is Good",
    account: 110085848,
    description:
      'Estratégia Consolidada, Abençoada e Vencedora.\n\nPares EURUSD, GBPUSD c/ Stop.\n\nObs.: "10% do rendimento líquido é retornado a Projetos Sociais."',
    author: "Eliel Oscar Moreira Alves",
    authorPhoto:
      "/st/media/pim/media/user_photo/83/83b/83bdfeb555101ee58b74a6d5647b7160_9f3ee4decdee4d278c9b42a5ae06bff8.jpeg",
  },
  {
    name: "MangoStickyRice",
    account: 110085940,
    description:
      "Target Profit Monthly 15%-20%\nMinimum fund $300\nRecommended $1,000",
    author: "PATCHAYA KATSONGKRAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/1b/1b6/1b61d468cea59c9ee1468af82465db61_9e20a988728f44dd80f34a80fe1a501a.jpg",
  },
  {
    name: "SCALP AND SWING XAU",
    account: 110086171,
    description:
      "Monthly Target around 5% , which is its bigger than any Bank Deposit Rate Annualy. Trading relaxing",
    author: "Bambang Haryanto",
    authorPhoto:
      "/st/media/user_photo/7a/7ab/7ab0618d6d051af34a50aee3e750c4c3_4ce90541f3414e4194d0579ce3da5fd0.jpg",
  },
  {
    name: "Safehousetradingfx",
    account: 110086237,
    description:
      "A proper Risk Management and equity Management is being applied. Safety of funds and passive income is our first priority",
    author: "Waseem Jameel",
    authorPhoto:
      "/st/media/pim/media/user_photo/a1/a13/a13749252808223459254160f3e20d21_d771dd08ff314406a2f64ce121c99845.jpeg",
  },
  {
    name: "marty girl",
    account: 110086303,
    description:
      "Martiagle system untuk wanita . mendapatakan keamanan dan kenyaman karena pasti profit dengan resiko terukur engak buat kantong jebol",
    author: "FARIDA",
    authorPhoto:
      "/st/media/pim/media/user_photo/5c/5cb/5cb10cc58e418dcee9acbb56b3a02a28_4313d8631fb7408e8e69befa8ae4a761.jpg",
  },
  {
    name: "Always - 1",
    account: 110086392,
    description:
      "Controlled Risk (Drawdown Max 20%)\nSustainable Monthly Targets (10%)\nTrading Mainly EURUSD\nProven Record",
    author: "LEONARDO MARANHAO FARIA DA SILVA",
    authorPhoto:
      "/st/media/pim/media/user_photo/2d/2d7/2d718f7e97bded2a60e9ef80d5d8a2ea_af4df9fd42bc4c47873d1b654221f240.jpg",
  },
  {
    name: "SS ALGO 30 PERCENT",
    account: 110086517,
    description: "Target Profit 30% Every Year \nJust trade at AUDCAD",
    author: "MUHAMAD ALFIN",
    authorPhoto: null,
  },
  {
    name: "Monthly 10 percent-1",
    account: 110086552,
    description:
      "Copy Trade by EA\r\nDaily profit : 1% (Monday - Friday)\r\nMinimum profit : 20% per month\r\nDrawdown : 35-50%\r\nWithdrawal : %Profit > %DD",
    author: "ACTING SUB LT PIYAPONG SASOONTARA",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e21/e217cc888eeac64a72587a2ccef51616_c6b63dff56f141628ef6eef53db928e2.png",
  },
  {
    name: "LF SAIGON 8",
    account: 110086699,
    description:
      "Contact for a consultation\nTư vấn tại Telegram Chat Group:  https://t.me/VANGgroup\ncopy dán Google để vào nhóm\ncopy this link paste on Google to join",
    author: "long thành nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/f7/f7d/f7d234d7c625dbfd0e398240be1332ed_5bd065d78cba42619656951469d14d10.jpg",
  },
  {
    name: "Canyfox capital",
    account: 110086957,
    description: "Gold scalper",
    author: "Hemant singh",
    authorPhoto:
      "/st/media/pim/media/user_photo/06/060/0600d6e716b2567ca87c065438370228_a2065768ef564014b03f0eb101b2c327.jpeg",
  },
  {
    name: "Euro Compra",
    account: 110086984,
    description: "Somente compra",
    author: "Francisco Narcizo de Chaves",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/45b/45b243ccaca90d8b204568ae1e556e8c_c6c4726c0fc84e0289ecc652c4b9dfd4.jpg",
  },
  {
    name: "EA Scalping",
    account: 110087047,
    description: "Robot Hedge account safety",
    author: "Văn Kiên Trịnh",
    authorPhoto:
      "/st/media/user_photo/d3/d32/d3215e6420ac1eb4025b7f5078445c75_d087ca5ee2ec4c0faf3a49d29e6d6246.png",
  },
  {
    name: "Hai Forex GBP",
    account: 110087135,
    description: "Only GBP\nZalo: 0817635621\nTelegram: @binoen",
    author: "Hải Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/695/695c9e1adc3b15fe4c36863865d903d3_8b290684db6d409b990cc9b4417a677b.jpg",
  },
  {
    name: "AEA Finance",
    account: 110087294,
    description:
      "Play swing Trade\nGo for freedom financial\nhttps://chat.whatsapp.com/DIf9jqFny4zGTCSIuHciJo",
    author: "ANDY",
    authorPhoto:
      "/st/media/pim/media/user_photo/0a/0ad/0adb2e167ba227c08a5ba42c487234c8_9b10dba34c674edf913ff634379784e2.jpg",
  },
  {
    name: "LF SAIGON 2",
    account: 110087320,
    description:
      "Contact for a consultation\nTelegram Chat Group:  https://t.me/VANGgroup\nTelegram contact: @LONGFX_admin \ncopy this link paste on Google to join",
    author: "NGUYẼN LONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/f7/f7d/f7d234d7c625dbfd0e398240be1332ed_524a5927d84e48ab9e7039b55a57d67d.jpg",
  },
  {
    name: "TEAM - GOLD",
    account: 110087328,
    description: "X2",
    author: "HOÀNG VIỆT",
    authorPhoto:
      "/st/media/pim/media/user_photo/6e/6e9/6e9614c69a203ccf805e516598ba123e_8eb232b321184af6aff107a6042d3d5a.jpg",
  },
  {
    name: "Thai Binh Funds",
    account: 110087331,
    description:
      "Operated by someone with many years of experience using robots\nProfit 5-15%/month Safe, stable, daily profit withdrawal\nMinimum invest from 10$+",
    author: "THI NHUNG VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/84/84f/84f942de2445ef49406c7e062622f4fe_8ee79e6525714bd6879daf62083880b0.png",
  },
  {
    name: "Maemod Trader",
    account: 110087523,
    description: "I am a housewife turned trader. I have to beat the market.",
    author: "อนุรัตน์ เเสนพงษ์",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/502/5021e365e527f46fd8c48646d4d63261_8dfc68b0aa284d4493c7df1685124d84.jpg",
  },
  {
    name: "stabilization fund",
    account: 110087808,
    description: "Stable strategies bring good returns",
    author: "李建",
    authorPhoto:
      "/st/media/pim/media/user_photo/0d/0d6/0d603995d9dedf2ff686667106d8a830_95710ac107f74efe81b6c6a2e0943a58.jpg",
  },
  {
    name: "go to rich",
    account: 110087990,
    description: "10$/day",
    author: "NAOWARAD DECHNUN",
    authorPhoto: null,
  },
  {
    name: "Smart Trade",
    account: 110088551,
    description: "Smart Trading Strategy",
    author: "AHMAD ALAZAIZEH",
    authorPhoto:
      "/st/media/pim/media/user_photo/7d/7da/7da8fa2278e2b54de73e97caa8b7e80a_220ab28ddb45436e8a5404b5ce75fb49.png",
  },
  {
    name: "The 1 Capital BBS",
    account: 110088620,
    description:
      "Trade with safety to preserve your funds. Emphasis on stability of profits, even if the profits are small. But definitely and consistently",
    author: "ACTING SUB LT TANASATE SOMBOONWONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/41/411/411faaece557cdfef4a7dd97dfe62a85_9e89855d8ef34f0ab7c8b92fd0d5ad2e.jpg",
  },
  {
    name: "Priceaction smc",
    account: 110088704,
    description:
      "This method is proven. copy me if you want 15 to 40 % passive income.\n2000 dollar investment is safer than below 1000 $.",
    author: "BADUSHA M",
    authorPhoto: null,
  },
  {
    name: "Jao EA V12 999 USD",
    account: 110089094,
    description: "Buy and Sell, Open 0.05 lot, Max DD -51% , Start 4 DEC 2023",
    author: "Somphit Phiewsamphan",
    authorPhoto:
      "/st/media/pim/media/user_photo/7c/7c1/7c198f016a6806f4b92396a4eb992e4c_b9e75e78d8654ee28e116642c873d15c.png",
  },
  {
    name: "FX PRO TRADER",
    account: 110089177,
    description: "- EA 100% EU/ UC\n- Lợi nhuận ổn hơn 5% tuần",
    author: "TRẨN LỘC",
    authorPhoto:
      "/st/media/pim/media/user_photo/bc/bc0/bc063170a3eb96dc8a1d67500e9964cc_51c582e88ea04bd399d08a14327bbb36.jpg",
  },
  {
    name: "FXSRI LUCKY",
    account: 110089204,
    description:
      "These sorted notes provide a quick reference for a comprehensive and advanced SMC & ICT approach to Forex trading. Customize these principles based on",
    author: "Srikant Yadav",
    authorPhoto:
      "/st/media/pim/media/user_photo/d0/d05/d05efbf3d9c30db7c67a21951bb90b3e_11ea82694ae441ab8c6638e6f46cd3f5.jpg",
  },
  {
    name: "Gold _ BTC _ Scalp",
    account: 110089228,
    description: "It will definitely bring good profits to investors!",
    author: "Dinh Hoang",
    authorPhoto:
      "/st/media/pim/media/user_photo/53/53b/53b6fdd7a73a275138c2536952fa2fda_8224d7dd18f74ebcb6bf361bf2bed3dc.jpg",
  },
  {
    name: "WARCAN 300",
    account: 110090044,
    description:
      "มีอินดิเคเตอร์ ตัวบ่งชี้ในการเข้าออเดอร์ ออกออเดอร์\nพึงพอใจกำไรก็ หยุดคัดลอก ได้เลย\nหรือจะปล่อยให้ TP  ตามระบบ EAก็จะใช้ระยะเวลานานหน่อย",
    author: "MR WERUMAS SEESOD",
    authorPhoto:
      "/st/media/pim/media/user_photo/ab/abb/abb0375c2dd8e5f3e7c323cf654458de_911f0e49dcc04aa6a36bcfee37a281e9.jpg",
  },
  {
    name: "ADR currency master",
    account: 110090071,
    description:
      "Welcome to ADR. Floating is common, be patient. Only open swing position, target S3/R3.\nMin depo 500$\nThis CT more suitable for investors than traders",
    author: "SISKA PRATIWI",
    authorPhoto:
      "/st/media/pim/media/user_photo/57/572/5728f60a1968e1904468f7e52f296bf6_a30aa0fb16c54485bea8d51845989d42.jpg",
  },
  {
    name: "SCALPING SCALPING",
    account: 110090598,
    description:
      "Our trading depends on a wise strategy that preserves capital while achieving an appropriate daily profit because of our experience of more than 10 ye",
    author: "Mohammed  Ahmed",
    authorPhoto:
      "/st/media/pim/media/user_photo/fa/fa6/fa69e1108ec28d8a92e6ddb37422e6fa_9794de01cc6945aeb1955a03e1d58da0_1SMgBA7.jpg",
  },
  {
    name: "Hunter Trader",
    account: 110090642,
    description:
      "Trading forex pairs with special entry set-up.  Daily trading with passive income everyday. \nCollect profits at end of the day then reinvest again.",
    author: "Hamouda Alfroukh",
    authorPhoto:
      "/st/media/pim/media/user_photo/7a/7a9/7a9fb917b2a621b8cd262179196d7f45_989cd63c0b74452f9cfcafdb1eb7a3be.jpg",
  },
  {
    name: "THE TIME TRENDS",
    account: 110090880,
    description: "We believe in safe trading strategies and on intraday basis.",
    author: "Rajkiran S V",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f89/f891ea00fda15aaeb2147768d346de14_8ba51fcc4c4b45ef93e6eb60590c0ade.jpg",
  },
  {
    name: "Gold market",
    account: 110090943,
    description: "Focus only on gold",
    author: "DANNY RICHMOND BEAVER",
    authorPhoto:
      "/st/media/pim/media/user_photo/c9/c90/c90b643d29632282383ab43379cf1968_325b234010d74f54ad1e92086ac36665.jpg",
  },
  {
    name: "ONS RAINBOW",
    account: 110090946,
    description:
      "I prioritize the protection of capital through effective risk management strategies. This includes setting realistic profit targets, implementing stop",
    author: "RENU SRIVASTAV",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/695/695e77c91e4539c6beb460f0e03ac67b_4f25f72cd33841f192f41af4acbee39b.jpg",
  },
  {
    name: "The Real Deal",
    account: 110090961,
    description: "Real deal only entries",
    author: "Heti Wirawati",
    authorPhoto:
      "/st/media/pim/media/user_photo/72/723/723fc19f065c74f37170e35bde2d3cbb_d6dc9d1e71894b058d19b808ffa90c69.png",
  },
  {
    name: "GOLD MASTER",
    account: 110090984,
    description: "GOOD Master and again",
    author: "Muhammad Arsalan",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b9a/b9a48a2acad20c9d391316cc1e915f8f_b2f56c675f7b4b8985cab1bb783a82de.jpg",
  },
  {
    name: "XDtrader signal",
    account: 110091027,
    description: "XDtrader signal",
    author: "Danh Trần Nguyễn Xuân",
    authorPhoto:
      "/st/media/pim/media/user_photo/e6/e6d/e6d8e7ec7c6a1cba021d1f8a3c4b5498_a612f75989b64965a6b43fdeecfe78cf.jpg",
  },
  {
    name: "Vip Trade C102",
    account: 110091099,
    description:
      "{ Kết nối + Hợp Tác & Chia Sẻ }  Với Chúng Tôi qua \n+ Group VN: https://t.me/FXvietnam88\n+ For English: https://t.me/fxvietnamglobal",
    author: "Tuan Hoang",
    authorPhoto:
      "/st/media/pim/media/user_photo/10/103/103142d2c27380f024c138f946ee21ac_1f3053ffdeed4dedb4c731707f0c65cb.jpeg",
  },
  {
    name: "Save Constant Profit",
    account: 110091345,
    description: "Save Constant Profit",
    author: "EDDY",
    authorPhoto:
      "/st/media/user_photo/70/703/70362b3dfa4c70eda4e7c75b0a6ec526_b5c5f64d957444768289f84e787d9ae3.jpeg",
  },
  {
    name: "Autopilot-01",
    account: 110091391,
    description: "Auto trade",
    author: "Nutthaphong Theerathuvanont",
    authorPhoto:
      "/st/media/user_photo/1c/1c6/1c628d4ad68d4e6160a1c15b9221838a_fc404adb3a0f4a20adb0a4c306448f2b.png",
  },
  {
    name: "AI brilliant",
    account: 110091477,
    description:
      "This strategy is baced on Japanese EA. 20%profit/month. Created by extremely skillful programmer. 7years back test is fully competed.",
    author: "SO ASAKURA",
    authorPhoto:
      "/st/media/pim/media/user_photo/07/071/0710ac4c34ba881465d43650c8fd507a_d30135df3fbe44fa88aee9de7ee9192f.jpg",
  },
  {
    name: "Apollo Trading",
    account: 110091564,
    description:
      "Thanks for follow me,\n- Scalping Follow Trend\n- Manual Input, \n- Auto SL, Auto TP",
    author: "Thanh Hải Phan",
    authorPhoto:
      "/st/media/user_photo/32/32d/32d360ffbd8293a8a51c1ead5ba59c5e_11e3daab252948dda2c01287ab84dc48.png",
  },
  {
    name: "PIPS-Pilot",
    account: 110091665,
    description:
      "Pip-Pilot is a proven and profitable forex trading strategy that has consistently delivered impressive returns for the past four years at low-risk",
    author: "OLALEKAN ADENIYI",
    authorPhoto:
      "/st/media/pim/media/user_photo/5d/5d0/5d0f1722afe03e99c524409811256746_931cc56c71954aa0bc7c18b1005c5cc7.png",
  },
  {
    name: "AN NHIEN 2024",
    account: 110091872,
    description: "LỢI NHUẬN MỖI NGÀY 1% TỐI ĐA 10%",
    author: "Kim khanh nguyen thi",
    authorPhoto:
      "/st/media/pim/media/user_photo/23/234/23477ae5312f5827aebe23d8322c5156_12f01af277324216aa1ee3ec5b4c699c.jpg",
  },
  {
    name: "Capitalgrow",
    account: 110092113,
    description: "everyday is new opportunity.folting is comman",
    author: "vasoya kalpesh",
    authorPhoto:
      "/st/media/pim/media/user_photo/bb/bbe/bbea705ee68fc874b8ca04fc49338d14_24915b8947ab4d4bb3ba436207376ee4.png",
  },
  {
    name: "forextrader112",
    account: 110092155,
    description: "copy and enjoy it is good",
    author: "Muhammad Sabeel  Younas",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e2d/e2df103860f28a7e9d7113946de803b9_e32fa9100646495694419b5f87da6d86.jpg",
  },
  {
    name: "Forex Killer",
    account: 110092170,
    description: "Monthly target is around 5%-10%.",
    author: "KULWINDER KAUR",
    authorPhoto:
      "/st/media/pim/media/user_photo/53/53f/53f3ae661c26d5d69d2ecb1a47de8bf2_d03b6a3c36534941b9c58bab0dbf2381.png",
  },
  {
    name: "Investment farmers",
    account: 110092294,
    description: "Biết đủ trong chữ đủ thì sẽ đủ",
    author: "hiếu nguyễn",
    authorPhoto:
      "/st/media/user_photo/66/664/664245e6a3d448e559ca1858283cc3a3_cab10627e3264191b3e7d4ae98603ba5.jpg",
  },
  {
    name: "Buy low  Sell high",
    account: 110092844,
    description:
      "IN OUR 5 YEARS OF EXPERIENCE, WE HAVE SEEN THAT IF YOU WANT TO MAKE GOOD PROFITS IN THE MARKET, THEN  SELL ABOVE AND BUY BELOW.",
    author: "Ratnesh Kumar  Mourya",
    authorPhoto: null,
  },
  {
    name: "Trade With Stoploss",
    account: 110093112,
    description:
      "Only Trader on exness who trade with stoploss. Your money will be safe and never washout. We trade with stoploss and minimum drawdown.6 yrs experience",
    author: "CHANDAN KUMAR",
    authorPhoto:
      "/st/media/user_photo/40/406/4060ea406ae205e15f57bbd409831116_9a0c7ade8f9c409680ed92eb182ec940.jpg",
  },
  {
    name: "Soft Trading",
    account: 110093241,
    description:
      "safe trading strategy for all investors,scalping and swing Trading",
    author: "mohammed rizwan",
    authorPhoto:
      "/st/media/pim/media/user_photo/ac/aca/aca6fa0d1b8515a02c0b7f2991604215_316cba6ce4974f11b9c9ec4fead5140c.jpg",
  },
  {
    name: "NOTHING IS FOREVER",
    account: 110093318,
    description:
      "Trade based on the main trend.\nRisk management is a top priority.",
    author: "Dat Nguyen Thanh",
    authorPhoto:
      "/st/media/user_photo/f4/f48/f48e74dd61ace6dd6bea20d8925a4ce7_01d62763ee284d40a983984081fd1caa.jpeg",
  },
  {
    name: "Candlestick Pattern",
    account: 110093323,
    description:
      "I have more than 5 years trading gold and forex experieces.\nPlease invest, we together make profits from market. Target 15-20% per month.",
    author: "NGUYEN VAN SAU",
    authorPhoto:
      "/st/media/pim/media/user_photo/ea/eac/eac05b4a2932c690a9f9fb380a919ef9_17595136e87f4a30bfbe861b116e1da4.jpg",
  },
  {
    name: "Exceed",
    account: 110093371,
    description:
      "Risking 0.5% per trade using ICT and Harmonic strategy\naiming 5% to 15% monthly\nmanaged by: @liquiditysweep @mfalomair on instagram",
    author: "Musaed Shtail",
    authorPhoto:
      "/st/media/pim/media/user_photo/b3/b3d/b3d44c1d5aa264a83efaa41e42ae94e1_9b28ebc5a19f4b969a32191eccaaf3ce.png",
  },
  {
    name: "Gold fx bd",
    account: 110093389,
    description:
      "I am trade only XAUUSD and GBPJPY.\nAll trades is 90% accuracy.",
    author: "LIPON SARKAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/fc/fc0/fc00916905552fc912e8d7c25d69110a_23ea099e05fd4db9b17620d4328b52f5.jpg",
  },
  {
    name: "JAPAN STABLE",
    account: 110093455,
    description:
      "This strategy works only when there is big chance. 10% profit is expected for a long time.",
    author: "SO ASAKURA",
    authorPhoto:
      "/st/media/pim/media/user_photo/07/071/0710ac4c34ba881465d43650c8fd507a_d30135df3fbe44fa88aee9de7ee9192f.jpg",
  },
  {
    name: "SONICT-SONICT",
    account: 110093678,
    description: "- CHUYÊN GOLD",
    author: "HOÀNG VIỆT",
    authorPhoto:
      "/st/media/pim/media/user_photo/6e/6e9/6e9614c69a203ccf805e516598ba123e_8eb232b321184af6aff107a6042d3d5a.jpg",
  },
  {
    name: "FXx Online",
    account: 110093774,
    description:
      "I have 10 years of experience, and my methods have been thoroughly tested. Or trust and register to participate. I will not let you down.",
    author: "THUC KHANH HO",
    authorPhoto:
      "/st/media/pim/media/user_photo/0d/0d8/0d824441c525524c31c08f404ad00d1f_8c3a40573f344480ba0697422a86e267.png",
  },
  {
    name: "BEYOND TRADING",
    account: 110093793,
    description: "we can make a difference in the way we trade",
    author: "Khaled  Abdulrasoul",
    authorPhoto: null,
  },
  {
    name: "Defensive - 1",
    account: 110093891,
    description: "Balanced strategy\nControlled risk \nLong-term focused",
    author: "LEONARDO MARANHAO FARIA DA SILVA",
    authorPhoto:
      "/st/media/pim/media/user_photo/2d/2d7/2d718f7e97bded2a60e9ef80d5d8a2ea_af4df9fd42bc4c47873d1b654221f240.jpg",
  },
  {
    name: "ท่านเทพ 02",
    account: 110093922,
    description: "ทุกการผิดพลาดคือการเรียนรู้ใหม่เสมอ",
    author: "PIYAPHONG NGOPRATEEP",
    authorPhoto:
      "/st/media/pim/media/user_photo/dc/dce/dce329f6b5844834c639d503e6e35823_100aa07009ce43db8c3454642bd0c0d0_B018hHu.jpg",
  },
  {
    name: "LiveYourBestLife",
    account: 110093924,
    description: "Scalp trading forex; xau; btc",
    author: "DINH DUONG THI",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5a8/5a8ae4df63d1bcab75f942d0dfe7a0ad_01ce34561e00460fa2becb203984f6e1.jpg",
  },
  {
    name: "DSA Team 268",
    account: 110094290,
    description: "SMART FOREX",
    author: "Danh Nguyen Duc",
    authorPhoto: null,
  },
  {
    name: "Trading DCA",
    account: 110094332,
    description: "Using DCA max 7 steps",
    author: "Quang Chính Đỗ",
    authorPhoto:
      "/st/media/pim/media/user_photo/3b/3b2/3b240eb37ebd364ac8c5917d304246a2_62c0328a28284cd98412af26f371bd27.jpg",
  },
  {
    name: "TREND PHAN",
    account: 110094451,
    description:
      "* Trend trading with fast profit ratio (FOREX 10-50 pips).\n* Take profit everyday.\n* Target 10-30% a month.",
    author: "Tuan Phan",
    authorPhoto:
      "/st/media/pim/media/user_photo/9b/9bc/9bc0b9d1ce27ce87620584e5e9140c80_730f35b783d94f7e905ca6457f488e72.jpg",
  },
  {
    name: "Future value",
    account: 110094482,
    description:
      "Are you in Big loss\nI will help Recover Loss\n100% Reality work\n100% Sure Signals\n100% Safe trading\nBest account management services.",
    author: "Văn Phúc Chu",
    authorPhoto:
      "/st/media/user_photo/82/82a/82abb79942efc49cbe1404dde70ce467_5ec3dfe0290d4b25b31b7acc477859f2.jpg",
  },
  {
    name: "marty Quen",
    account: 110094606,
    description:
      "martiangel system keaman yg lebih bagus dengan drown down yang lebih kecil dan cara buka posisi lebih baik",
    author: "FARIDA",
    authorPhoto:
      "/st/media/pim/media/user_photo/5c/5cb/5cb10cc58e418dcee9acbb56b3a02a28_4313d8631fb7408e8e69befa8ae4a761.jpg",
  },
  {
    name: "midnight scalper",
    account: 110094624,
    description:
      "An old bull that haunts the lower half of the US market, one order at a time, no Martin, fully automatic.",
    author: "威振 王",
    authorPhoto:
      "/st/media/pim/media/user_photo/bc/bc0/bc06cc3ba71e13a607ac5ed2b67cba2e_f793efabe061447899254241c4ea0583.jpg",
  },
  {
    name: "IAS BOT Forex Trade",
    account: 110094708,
    description:
      "Grow your wealth 20% to 50% monthly with our safe trading policy.",
    author: "Amit Garg",
    authorPhoto:
      "/st/media/user_photo/6e/6ed/6ed36ef89a0349728d458420be240070_40bb04729ed14561935c6b8f52b641a1.jpg",
  },
  {
    name: "OnePesa_fx",
    account: 110094920,
    description:
      "This platform provides a wealthy solution for your investment.",
    author: "MIRA CHOWDHURY",
    authorPhoto:
      "/st/media/pim/media/user_photo/7e/7e9/7e994bbd82b1fe8234d8cf010aa51529_8810303771804df0973a56cd63cebc47.jpg",
  },
  {
    name: "Always Winner",
    account: 110094939,
    description:
      "Hello everyone, I am trader from India who has been trading with Exness for long time.",
    author: "SANTOSH ORAON",
    authorPhoto:
      "/st/media/pim/media/user_photo/8d/8d4/8d4ccc404f28a33640153308c2fe3b19_31bc98f7cb134b57b159947377ef49bf.jpg",
  },
  {
    name: "DynamicOrgresh_1",
    account: 110094960,
    description:
      "Chiến lược chậm. Hạn chế rủi ro.\nĐược gì? Lợi nhuận 200%/năm (10-20%/tháng)\nMất gì? 50% tài khoản\nXem thêm: https://www.mql5.com/en/signals/2160695",
    author: "Thanh Trần Thiện",
    authorPhoto:
      "/st/media/pim/media/user_photo/3f/3fd/3fdf39fdba8e8df8aa2b9d78c7abe358_91a6e63880a7491abac29f11d7e9a02d.jpg",
  },
  {
    name: "Shooting Star",
    account: 110094981,
    description:
      "Dive into the lucrative world of Forex trading and unlock financial opportunities at your fingertips. With a daily trading volume exceeding $6 trillio",
    author: "Muhammad  Tahir",
    authorPhoto:
      "/st/media/pim/media/user_photo/3c/3ce/3cecdee180668fdc5e5fe74ac3937467_d8b9b9ba772148bbb126163a2a2b1d9f.jpg",
  },
  {
    name: "TEST 222kkk",
    account: 110095044,
    description: "222222",
    author: "Hưng Nguyễn Quang",
    authorPhoto:
      "/st/media/user_photo/4c/4c2/4c27e129817573b243d2ec96c5696237_ca266260c5744b60a4b99b9623a5c55b.jpg",
  },
  {
    name: "MARKET CAPITAL FX",
    account: 110095121,
    description: "Comercio XAUUSD",
    author: "Daiana Andrea González Barrera",
    authorPhoto:
      "/st/media/pim/media/user_photo/7e/7e4/7e4b8bf0ed827449f9bd80aafeb10f54_349a8990eb7848d79024e14ccb590cee.PNG",
  },
  {
    name: "To be best",
    account: 110095448,
    description: "To be best",
    author: "思伟 喻",
    authorPhoto:
      "/st/media/pim/media/user_photo/2c/2c9/2c926030774e38a5394ef4660ea3362e_fea2f54f492d4d9db4f76b74a4919f0a.png",
  },
  {
    name: "BRCopy Trader",
    account: 110095607,
    description:
      "You are welcome!\nThrough this Copy technology, we have shared our results and capitalized millions in accounts from various clients and brokers.",
    author: "Everton Backes",
    authorPhoto:
      "/st/media/pim/media/user_photo/e3/e3f/e3fe5b238d964a086adb28c66a67b231_e0c9b4966bd942e7b0d9aeae0aca7c38.png",
  },
  {
    name: "ZeeZa Trader",
    account: 110095688,
    description: "Swing trade",
    author: "SOMKID KUMPAY",
    authorPhoto:
      "/st/media/pim/media/user_photo/75/753/7537a428c5b78aff29907bc0a1facec7_b6b32434617c452387c696221161e996.jpg",
  },
  {
    name: "Midas Matrix",
    account: 110095689,
    description:
      "About this strategy:\n- Rapid and high profit with advanced m15 system\n- 15-20% / month\n- Guarantee to have long-term profit.",
    author: "Quốc Hùng Phan",
    authorPhoto:
      "/st/media/pim/media/user_photo/b7/b7b/b7bd0e1b1ca66dc5194f92deceb31738_9a3e045bada14b27985b7f4a53360dab.jpg",
  },
  {
    name: "Silver Dual Wield",
    account: 110095714,
    description:
      "Dual Sculping with Trailing Stop\nWin Rate > 94%+\nHigher DD than Silver Bullet Snipe\nMuch Higher return, let try to double your port in 2 month.",
    author: "TERAPOL SOONPONRAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/d5/d52/d521994de3310842b28627336a3f5257_f8fc9c8995a24339971792f1cfc7b844.jpg",
  },
  {
    name: "NSP29x",
    account: 110096058,
    description:
      "Mission to the Moon 500$ => 5,000$\nMission to Mars 500$ => 50,000$\n\nบัญชีนี้สำหรับการเทรดปลอดภัยเป้าหมายวันละ2-5%",
    author: "SUPPAKRON CHUENJAIDEE",
    authorPhoto:
      "/st/media/pim/media/user_photo/89/899/899e85f5b5c28c83dead4dc6346faba8_4c997b1c5a6f4928a056f50da6ea427f.png",
  },
  {
    name: "Forex Killer Zone 2",
    account: 110096132,
    description:
      "Monthly Profit Target around: 40%-50%\n\nClick On News Feed To Get More Profitable Updates",
    author: "Md Abu Bakkar Siddique",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1a9/1a9e5464628c14f8051f5f52f87a1506_523000fa0a8e4e5d86ff37527fa86f58.jpg",
  },
  {
    name: "Golding Gold",
    account: 110096350,
    description:
      "Maximize gold gains with our savvy strategy! Expert analysis, risk control, and community support for confident trading. Join us :)",
    author: "Hussain Al Rashdi",
    authorPhoto:
      "/st/media/pim/media/user_photo/dc/dc3/dc366f5ffe6cce4b3b93c1fa31da6e60_1043ea769ecb4aecbd238ee7e459ff3b.jpeg",
  },
  {
    name: "Tycoon Group",
    account: 110096645,
    description:
      "Chiến Lược: EURUSD\nZalo Admin: 0981258096\nChiến lược rủi ro thấp lợi nhuận 10-15%/tháng",
    author: "VAN CONG DANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/e5/e5a/e5a1e0ca59cdcca13b256c52a3f43c97_7781f1d715da4f2ba17de343f49a64c1.jpeg",
  },
  {
    name: "Originaltrinding28",
    account: 110096657,
    description:
      "Trading is a long-term trade. which focuses on collecting small amounts at a time with a medium level of risk Therefore, it is a new and dynamic strat",
    author: "sirikarn promla",
    authorPhoto: null,
  },
  {
    name: "LF SAIGON 3",
    account: 110096759,
    description:
      "Contact for a consultation\nTelegram Chat Group:  https://t.me/VANGgroup\nTelegram contact: @LONGFX_admin \ncopy this link paste on Google to join",
    author: "NGUYẼN LONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/f7/f7d/f7d234d7c625dbfd0e398240be1332ed_524a5927d84e48ab9e7039b55a57d67d.jpg",
  },
  {
    name: "TRAN VU CAPITAL",
    account: 110096850,
    description: "Forex degen",
    author: "HUNG MY TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/2c/2c2/2c2e1c26e7f33ebfb66c0b0ef03fe3b2_1b98df0733474a74981ebc3587b91b84.jpg",
  },
  {
    name: "ILJIMAE Sama Trading",
    account: 110096888,
    description: "Kiếm 15$ mỗi ngày bằng các anh grab thôi là vui vẻ rồi.",
    author: "HUU TAI NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/d8/d8a/d8a63824d33c4ec8412e778739326859_307989a2682d480b8d481a6bc2089ca7.png",
  },
  {
    name: "Fund capital",
    account: 110097042,
    description:
      "I have 3 year experience in trading. And test many strategies. Monthly profit target 8% to 13%.",
    author: "Uzma Hafeez",
    authorPhoto:
      "/st/media/pim/media/user_photo/2a/2a8/2a863b9904e5b7596c6856aee72fd486_236911f4f9ec49f99686b80dea918469.jpg",
  },
  {
    name: "DAILY PHAN",
    account: 110097076,
    description:
      "* Daily trading with high profit ratio (FOREX 30-100 pips).\n* Take profit from a few days to a few weeks.\n* Target 10-30% a month.",
    author: "Tuan Phan",
    authorPhoto:
      "/st/media/pim/media/user_photo/9b/9bc/9bc0b9d1ce27ce87620584e5e9140c80_730f35b783d94f7e905ca6457f488e72.jpg",
  },
  {
    name: "SWING PHAN",
    account: 110097077,
    description:
      "* Swing trading with high profit ratio (FOREX 50-200 pips).\n* Take profit from a few days to a few months.\n* Target 10-30% a month.",
    author: "Tuan Phan",
    authorPhoto:
      "/st/media/pim/media/user_photo/9b/9bc/9bc0b9d1ce27ce87620584e5e9140c80_730f35b783d94f7e905ca6457f488e72.jpg",
  },
  {
    name: "The GBPUSD hunter",
    account: 110097179,
    description:
      "Muy especifico y estudiado para GBPUSD. rendimiento garantizado. Para una optima operativa, se recomiendo una inversión minima de 1000dls.",
    author: "Alexander Tobon",
    authorPhoto:
      "/st/media/pim/media/user_photo/c0/c06/c06d2560398f8e85293db50cf5edd384_21e0aa508de1437195ec5a38fab6706e.jpg",
  },
  {
    name: "RichGoldRich",
    account: 110097187,
    description: "Buy/Sell Gold",
    author: "ประพัทธ์ กุญชร",
    authorPhoto:
      "/st/media/pim/media/user_photo/80/805/80528d4afb1a64350613797576ea328e_ed6bde53a8ff4600a5043ed8628a85ef.jpeg",
  },
  {
    name: "Amolrada_J",
    account: 110097190,
    description:
      "Gold Only. Breakout H4. Cut Loss!!! Use my EA. Backtest account Pro Spread125 (23.11.01-24.01.01) Deposit 2000 NetProfit 2675.31 DD 11.67% quality90%",
    author: "อมลรดา จงเลิศธนา",
    authorPhoto: null,
  },
  {
    name: "TherichGoldVSBtc",
    account: 110097217,
    description: "Gold and btc (Ea robot)",
    author: "THANINNUT WORAKOSONTANAPHAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/cc/cc8/cc83c54cd8f928ade2402b8ae420936b_03ac6d037e624c649c41baccedc4aeff.jpeg",
  },
  {
    name: "穏やかで一貫性があり収 XAU BOT",
    account: 110097218,
    description:
      "To continue Using this strategy pls create an account using this link: https://one.exness-track.com/a/h910h7bcq8",
    author: "Lance Kirby Lazaro",
    authorPhoto:
      "/st/media/pim/media/user_photo/d2/d2c/d2cc52db25e7f8ca60d7fe0e3464d9ea_d043774db8b24364a297fd1b50d87291.png",
  },
  {
    name: "Monster 11",
    account: 110097220,
    description:
      "I am very experienced trader .Follow me to see my history.\nI will earn you a lot of money without any worries",
    author: "Tejas tambade",
    authorPhoto:
      "/st/media/pim/media/user_photo/bb/bb8/bb89931977a6ec3e3ce78f6d66e808d2_7c54c31ec63147e6a5e0a3719c73d34b.png",
  },
  {
    name: "Go to success",
    account: 110097320,
    description: "Trade forex",
    author: "NONTAWACH KAEOMALA",
    authorPhoto:
      "/st/media/pim/media/user_photo/ac/ac4/ac4c002810fa986dd40bf74678558d41_dad8f91427a644599b1514499e624780.png",
  },
  {
    name: "SCALPING WINNER",
    account: 110097383,
    description:
      "Strategy seeking little exposure to risk.\n10% of the results donated to Social Actions in Brazil.",
    author: "Dimas Zanon",
    authorPhoto:
      "/st/media/pim/media/user_photo/ff/ff9/ff95c746a6cd5ad1fc4bb40d08d3fdfc_4cffd67e67774bb0bb8405124be47993.png",
  },
  {
    name: "bb-snc-xau",
    account: 110097469,
    description: "tài khoan copy",
    author: "VIET NIEM HO",
    authorPhoto:
      "/st/media/pim/media/user_photo/12/120/120b9e47efcf7ff5e547f79f5f3e32ae_a843b4ceda53474cb8467778cbdcbee4.png",
  },
  {
    name: "Lalisa -Trader",
    account: 110097471,
    description: "Full time Trader\n- Target 1% per Day",
    author: "Pitakchon Wises",
    authorPhoto:
      "/st/media/user_photo/c4/c4c/c4ce1a477fd335d510a01d62e0b2a316_8421e7c77b6946b6b37a0d47eed15a66.jpeg",
  },
  {
    name: "Forex Killer Zone 3",
    account: 110097528,
    description:
      "Monthly Profit Target around: 30%-40%\n\nClick On News Feed To Get More Profitable Updates",
    author: "Md Abu Bakkar Siddique",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1a9/1a9e5464628c14f8051f5f52f87a1506_523000fa0a8e4e5d86ff37527fa86f58.jpg",
  },
  {
    name: "Ideal trader",
    account: 110097650,
    description: "Trade on \nEurusd\nXauusd\nBtcusd",
    author: "Pranee Boonwat",
    authorPhoto:
      "/st/media/pim/media/user_photo/6e/6e7/6e767b272a1da0d1d0f2f25c6b6fed81_295e1a36122c459c95dfd20cb6cf2ecf.jpg",
  },
  {
    name: "多货比稳定策略1000强损",
    account: 110097763,
    description: "根据指标开单，1000止损，1000可1:1跟单",
    author: "东风 孙",
    authorPhoto:
      "/st/media/user_photo/ae/aee/aee50443a362f1b4c829ac3451bc5467_37903dc4af6847f792e254d29c1cf97c.jpg",
  },
  {
    name: "多货币双向对冲策略1000止损",
    account: 110097764,
    description: "三货币双向对冲策略，单子较多，1000强制止损，1000可1:1跟单。",
    author: "东风 孙",
    authorPhoto:
      "/st/media/user_photo/ae/aee/aee50443a362f1b4c829ac3451bc5467_37903dc4af6847f792e254d29c1cf97c.jpg",
  },
  {
    name: "BP System1",
    account: 110097834,
    description: "Trading pairs: \nAUDCAD\nNZDCAD\nAUDNZD",
    author: "Vũ Trần",
    authorPhoto:
      "/st/media/pim/media/user_photo/d4/d4c/d4cc448f84a7760ccf40edc7f4bd294f_44f39332785041b38256b2d9f34e7c85.png",
  },
  {
    name: "KESTREL WIN",
    account: 110097851,
    description: "Sap GU, EU, GOLD",
    author: "Thuong Vu Le Song",
    authorPhoto:
      "/st/media/pim/media/user_photo/91/914/914ad64205583973afa0572bc4aff2dc_a4f809cdcd1446a19a3fd7d4ec57c4e2.jpeg",
  },
  {
    name: "Grow with Protraders",
    account: 110097858,
    description:
      "I am MS \nOur Target Anual 70 To 100%\nhttps://one.exness-track.com/a/pe5ffont3m",
    author: "Mahendra  .",
    authorPhoto:
      "/st/media/pim/media/user_photo/f1/f13/f13e65f8ea6a6280224a7ed7411ecafa_5642ce47cfcf4338b2683789dc41c75e.png",
  },
  {
    name: "RC TRADINGS",
    account: 110097912,
    description:
      "I trade in xauusd and jpy 225 indices with monthly returns upto 25%. I charge commission around 5%.",
    author: "MUTHURATHINASABAPATHY",
    authorPhoto: null,
  },
  {
    name: "USD Make Money",
    account: 110098050,
    description:
      "I am professional Forex trader having experience 5 year in forex, boat treding, just start social treding, you can copy my account",
    author: "DUKARE UTTAMRAO",
    authorPhoto:
      "/st/media/pim/media/user_photo/c4/c44/c4412f12d801f1fb47c8f70b33882b58_81f8db53ca754390bd886d049c669bce.jpg",
  },
  {
    name: "flow me",
    account: 110098070,
    description:
      "what i open you open what i get together some time we loss but more time winning",
    author: "MUSAB  MALAK",
    authorPhoto:
      "/st/media/pim/media/user_photo/10/107/1076b06b8c4ec2212fa0d39ac71039c7_92854101e1a34b3b91afa3df77bfd099.png",
  },
  {
    name: "Gold_Robot",
    account: 110098078,
    description: "Money safe with me",
    author: "Mohamed Hosny",
    authorPhoto:
      "/st/media/user_photo/c9/c94/c9483f46fd7e6d561b73a77eb649629e_f69b5d60bfa94ff2b0837b73edb23d7c.jpg",
  },
  {
    name: "TakeProfit Stg",
    account: 110098141,
    description: "Nói không với vàng - no Gold",
    author: "Dang Hai Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/53/534/534bf733aeb58c723a2a8f316a90ccba_5cb22b0dda864975935dce97e6d5691c.jpeg",
  },
  {
    name: "CIM Machine",
    account: 110098476,
    description: "Expected monthly profits range from 5-20%.",
    author: "Nguyễn Văn Trí",
    authorPhoto:
      "/st/media/pim/media/user_photo/d6/d60/d60516fe5a8914e5c667bcaad4b929af_16ee80774c3c40a38b228eb373810465.jpg",
  },
  {
    name: "VIETNAM179",
    account: 110098535,
    description: "Giao dịch cấp số cộng.",
    author: "Luong Quang",
    authorPhoto:
      "/st/media/user_photo/10/107/10771b58acc8bf892e89e3cdcf112a9a_15d355ce22dd4bdd9ac27c1cfe07bec1.jpg",
  },
  {
    name: "O D I B A B A",
    account: 110098720,
    description:
      "We watch your account day and night for optimal returns through hands-off trading. Our Trading team operates 24/7, maximizing profits. Monthly 10-20%",
    author: "RAJESWARI SUBRAMANI",
    authorPhoto:
      "/st/media/pim/media/user_photo/ac/ac6/ac6086409318e6182c9c2646c9316093_94256e3b18fe4c2aafeb01cb991a0a82.png",
  },
  {
    name: "ESF Group Trading",
    account: 110098742,
    description: "Daily trade... \nGo Financial freedoms",
    author: "MELYA",
    authorPhoto:
      "/st/media/pim/media/user_photo/78/785/7852136ffc0fd262dcb2e9ffcc5d2908_bff12af2336a4e4a902d7c713fdc9731.jpg",
  },
  {
    name: "NPC - Immortal",
    account: 110098775,
    description:
      "North Peak Capital - Immortal\nChiến lược lãi kép dài hạn nhằm bảo toàn và phát triển vốn cho nhà đầu tư.\nLợi nhuận ổn định 3-6%/tháng. Đầu tư từ 10$.",
    author: "PHẠM TUÂN",
    authorPhoto:
      "/st/media/pim/media/user_photo/47/47a/47a7e78a3f006ff26d5c479d70970c38_f1de5fa679424536b9cdd3920cc13dc9_g0LgqzG.jpg",
  },
  {
    name: "retirement",
    account: 110098835,
    description: "全EA，主打挂欧美，大数据停",
    author: "程 李",
    authorPhoto:
      "/st/media/pim/media/user_photo/8b/8bc/8bcb44305fc74f4bf9b59cecfb0b8584_4e9d6df5eeda4121a9b7e5efa6cd67e3.png",
  },
  {
    name: "EURUSD ONLY",
    account: 110099054,
    description: "EURUSD ONLY",
    author: "程 李",
    authorPhoto:
      "/st/media/pim/media/user_photo/8b/8bc/8bcb44305fc74f4bf9b59cecfb0b8584_4e9d6df5eeda4121a9b7e5efa6cd67e3.png",
  },
  {
    name: "Con Đường Triệu Đô",
    account: 110099286,
    description: "💖 Kế hoạch : 10%/ tháng & Lãi kép 👉 1,000,000USD",
    author: "THI THUY VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/ae6/ae624c102c791d44a0582f94e9d86159_d7a8846628f94b229a9e7b89d3d03367.png",
  },
  {
    name: "NGUYEN HOANG -1",
    account: 110099287,
    description:
      "Hành trình đi từ 500$-50k\nhttps://social-trading.club/strategy/110099287",
    author: "Chí Hạnh Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/6f/6fa/6fa491e9ccbc407331b21048a807362d_f05732fcf5a448d88eb1e15da5ae3e5d.jpg",
  },
  {
    name: "First Track Strategy",
    account: 110099289,
    description: "A very powerful strategy yielding handsome consistent profit",
    author: "Murshid Sarwar",
    authorPhoto:
      "/st/media/pim/media/user_photo/a2/a2c/a2c395e2c0cd4c15f636268a60ebb70c_53490623f7f943078a667826756525d5.jpg",
  },
  {
    name: "ĐAM_MÊ_THUA_LỖ",
    account: 110099507,
    description: "Cắt lỗ là đam mê, lời lãi gì",
    author: "CHU HIẾU",
    authorPhoto:
      "/st/media/pim/media/user_photo/27/274/2742db6279f42fcdc240483ada216b5d_65d6d17d24b54768852f7ab6ea280a65.jpeg",
  },
  {
    name: "Money News",
    account: 110099530,
    description:
      "100% automated trading, using selected EA with AI Capability to analyze data released during the news and make trading decisions based on them.",
    author: "ADI T",
    authorPhoto:
      "/st/media/pim/media/user_photo/aa/aa1/aa1d995b379e3741591bb3b269a89747_3dded2aca6174c7391c777fc2677b112.jpg",
  },
  {
    name: "Social trading 121",
    account: 110099739,
    description:
      "I’ll try to make 5 to 50 percent profit monthly and try to give my best watch my performance and invest at your own risk and ups&down will come",
    author: "Abdul Rehman",
    authorPhoto:
      "/st/media/pim/media/user_photo/ac/ac0/ac08809cc7ff4109ef7cba59edbe799c_79bd58b9a0324d56b1457175f5a5f600.jpg",
  },
  {
    name: "Happy Trading",
    account: 110099905,
    description: "Intraday Trader",
    author: "TUYET NHI TRUONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/11/116/11679ebed489eaa2c952a9859efefd95_39af836f65c34846b4ef0dbe5a164c7b.png",
  },
  {
    name: "Onion_Gold_Plus",
    account: 110099916,
    description:
      "EA_Scalping_Gold.\nMục tiêu lợi nhuận ổn định & Drawdown thấp.",
    author: "TRUONG LONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/0a/0a2/0a228125123187b795ab6f730500912a_6157d909898440de980c8822a17f12ba.jpg",
  },
  {
    name: "SDP_FOREX_MANUAL",
    account: 110099922,
    description:
      "Hello Investor,\n\nthis strategy is Forex and Metal, \nMonthly Return 15% to 20%\n\nplease join Telegram Channel\nhttps://t.me/TDP_Trader_Official",
    author: "Sonal Pandya",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b97/b979c65723397cb1efc30a38e75d6469_8b16068c7885423388a12dd359dad797.png",
  },
  {
    name: "Jelly Bean",
    account: 110099949,
    description: "Safety",
    author: "Trần Hoàng",
    authorPhoto:
      "/st/media/pim/media/user_photo/b8/b89/b89d5243dcebd2ec898c42244ca0e49a_e98b50d312154530b6a1fd3635fc011e.jpeg",
  },
  {
    name: "EURUSD Trading PRO",
    account: 110100020,
    description:
      "Our Team Takes trades in EURUSD ONLY positions\n\n\n\n\nPlease invest on your own risk there is no guarantee of return",
    author: "Kulwant Rana",
    authorPhoto:
      "/st/media/pim/media/user_photo/c0/c0b/c0b5091f13b45a11d33542c1c9aafd09_e8dbe9dc0338447ca5a2ebfd9c2a1c23.jpg",
  },
  {
    name: "MAS Scalping 3",
    account: 110100044,
    description: "Monthly target is around  5%-10%.",
    author: "Jemmy Alwiyandu",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee1/ee11d972c7610534b6fca4649f29d126_ec9a448b908d4287bbeffd4f539faffe.png",
  },
  {
    name: "BHARATHI GOLD MINING",
    account: 110100073,
    description:
      "We will do XAUUSD scalping trades purely based on technical analysis and price action.\n\nDon't start copy when order is run\n\nExpected monthly return 5%",
    author: "GANGADHAR MARRI",
    authorPhoto:
      "/st/media/pim/media/user_photo/29/295/295bf13c158f9728d723feaed3aff75c_f6f87812657044a182acb3e547f1a80d.jpg",
  },
  {
    name: "SNOWBALL TRADING",
    account: 110100087,
    description: "investing growing like snowball",
    author: "Dimas Zanon",
    authorPhoto:
      "/st/media/pim/media/user_photo/ff/ff9/ff95c746a6cd5ad1fc4bb40d08d3fdfc_531817ae5f7345819abe04597fd3cc07.png",
  },
  {
    name: "Pro Invesment",
    account: 110100239,
    description: "play safe for long invest",
    author: "RUDY CANDRA",
    authorPhoto:
      "/st/media/user_photo/3b/3be/3be307a15556c81459589dff3fae98c7_a13055414db8489daac38afe477f77e1.jpg",
  },
  {
    name: "PERCEPTRADER AI",
    account: 110100335,
    description:
      "Pair : AUDCAD,AUDNZD,NZDUSD,GBPCHF,USDCAD\nStrategy : Martingale",
    author: "NI MARYANI",
    authorPhoto: null,
  },
  {
    name: "Ct prone 4",
    account: 110100338,
    description: "Ct ct",
    author: "NI MARYANI",
    authorPhoto: null,
  },
  {
    name: "Ct prone 5",
    account: 110100339,
    description: "Ct ct",
    author: "NI MARYANI",
    authorPhoto: null,
  },
  {
    name: "Ct prone 6",
    account: 110100340,
    description: "Ct ct",
    author: "NI MARYANI",
    authorPhoto: null,
  },
  {
    name: "Ct prone 7",
    account: 110100341,
    description: "Ct ct",
    author: "NI MARYANI",
    authorPhoto: null,
  },
  {
    name: "Prakamya_fx",
    account: 110100521,
    description:
      "Dedicated to delivering consistent results while managing risks for you.",
    author: "Arup Mahapatra",
    authorPhoto:
      "/st/media/pim/media/user_photo/64/64f/64f76a0b96547baba5d39bc0ef80d528_bc2bfc0841ef4352b9e1a09db4d08460.jpg",
  },
  {
    name: "SCALP FOREX DAILY",
    account: 110100573,
    description:
      "Trades are executed Professionally basing on Supply and Demand Zones",
    author: "SUBHASMITA RATH",
    authorPhoto:
      "/st/media/user_photo/18/18e/18ea8fded74dd3711f51b97bfb6b9930_2bf63046dcae4615bae2a4f936487d7f_xgN7m2W.jpg",
  },
  {
    name: "MIDAS KING",
    account: 110100579,
    description: "Tìm kiếm lợi nhuận với mức rủi ro thấp",
    author: "MINH KHOI NGO",
    authorPhoto:
      "/st/media/pim/media/user_photo/b4/b4b/b4b62e40936488203d6170c04f6e169b_73f35d061f7d4922b8e45a86628c5452.png",
  },
  {
    name: "Trade With Trend",
    account: 110100586,
    description:
      "Trade with Trend provides valuable insights, analysis, and strategies to navigate the forex market.",
    author: "SADHANA BAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/3f/3fd/3fd0a9f6bb87942f17619804aa480080_324b26239dce462e88e7806dbb65b65c.jpg",
  },
  {
    name: "Collect Profit EA",
    account: 110100604,
    description: "EA Trading",
    author: "MR PICHET INTO",
    authorPhoto:
      "/st/media/pim/media/user_photo/34/34e/34ef12a9cc96c5d8d1cc4e53bf0ef904_0cf78c863df34d9ea29a1bc4bfb490b7.jpg",
  },
  {
    name: "Học Viện Trader",
    account: 110100642,
    description: "Sử dụng pace active tinh gọn",
    author: "VAN TUYEN DOAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a9/a98/a988245a990c7f6f57fa258dc1c3f428_b62ef562d110442690529c9b37806986.jpg",
  },
  {
    name: "ADMD 4517 MN42",
    account: 110100657,
    description: "Profit 42$ per time",
    author: "MR PHONTREE WONGPRASAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/39/39c/39c561f30c4e9b11c28fedfe0d582cfd_8c2034ee33bc4a86b66c61988ff5d3d8.png",
  },
  {
    name: "Beyond Peak",
    account: 110100701,
    description:
      "We aim to generate decent profits while minimizing the drawdown thus preserving the capital. We continuously monitor our strategy for  improvements",
    author: "Adil Jawad",
    authorPhoto: null,
  },
  {
    name: "ZenTea UIF",
    account: 110100885,
    description:
      "• Lợi nhuận ổn định lâu dài.\n• Tỉ lệ rủi ro trung bình thấp.\n• Welcome & enjoy ❤️.",
    author: "Đức Tâm Hứa",
    authorPhoto:
      "/st/media/pim/media/user_photo/d6/d67/d67b486770865cea1b8236b56f821489_5df93b8a479e48e1a62ffeaec1d07e8d.jpg",
  },
  {
    name: "ZenTea MIF",
    account: 110100889,
    description:
      "• Lợi nhuận ổn định lâu dài.\n• Tỉ lệ rủi ro thấp.\n• Welcome & enjoy ❤️.",
    author: "Đức Tâm Hứa",
    authorPhoto:
      "/st/media/pim/media/user_photo/d6/d67/d67b486770865cea1b8236b56f821489_5df93b8a479e48e1a62ffeaec1d07e8d.jpg",
  },
  {
    name: "MR - TEN PERCENT",
    account: 110100928,
    description:
      "Greetings...\nI have 1+ years experienced and almost 10% to 25% monthly revenue generated guarantee.",
    author: "MUBASHIR DAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/e7/e77/e77e59dc963d2013d517ac52eaf73fdb_9b9fc4d5fd864e34bf6a3b9ac2f65179.jpg",
  },
  {
    name: "USD make money 1",
    account: 110100935,
    description:
      "Hi.... I am full time trader, and  my strategy depends upon price action and smart money concept. and candlesticks patterns, so follow me..",
    author: "DUKARE UTTAMRAO",
    authorPhoto:
      "/st/media/pim/media/user_photo/c4/c44/c4412f12d801f1fb47c8f70b33882b58_81f8db53ca754390bd886d049c669bce.jpg",
  },
  {
    name: "HAPPY TRADING 3K",
    account: 110101001,
    description: "Happy trading",
    author: "LY LÊ THỊ",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1a8/1a8b8b84934c5259f9daaeddb04cc523_2f4ef1e3f8d34305965662b381a2f127.png",
  },
  {
    name: "ORIGINAL 79",
    account: 110101005,
    description: "Win together",
    author: "LY LÊ THỊ",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1a8/1a8b8b84934c5259f9daaeddb04cc523_2f4ef1e3f8d34305965662b381a2f127.png",
  },
  {
    name: "UNIQUE TRADINGS",
    account: 110101018,
    description:
      "WE  HANDLE LOW RISK TRADING BASED ON CUTTING EDGE ANALYSIS IN CURRENCY . DEPENDS ON LOW RISK  CLIENTS CAN EARN GOOD ROI.",
    author: "MAYA BADGUJAR",
    authorPhoto: null,
  },
  {
    name: "XAU Gold 99",
    account: 110101022,
    description:
      "Trading for XAU gold. My strategies are using SnR and SnD only. Trade with your own risk. Please enjoy the ride and profit.",
    author: "Yopy halley Limanto",
    authorPhoto:
      "/st/media/pim/media/user_photo/32/32f/32f62c6933db5505d76ce41f76eb0052_21b6749f08c647a081f9ac061cc21c51.jpg",
  },
  {
    name: "ZEBILLPIPS",
    account: 110101062,
    description:
      "This is Zebillpips  strategy \nWe are executing from heaven.thus we have \nheavenly transactions..\n\nNot that Big Equity are better",
    author: "CHRISTOPHER KERONGO",
    authorPhoto:
      "/st/media/pim/media/user_photo/8c/8ce/8cef2dc08a6b390107a607e60da36680_68bd143385be4013a74ad0cdfdcb5550.jpg",
  },
  {
    name: "Conservative",
    account: 110101132,
    description: "Day+Swing trade\nTarget Profit 10% per month\nMax Loss 10%",
    author: "MISS TASSANAN THECHANANTIPAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/ea/eaa/eaaa7f6c5e014c171ccd69d080bc3169_092ee428100f4d0b8b11628eedc1f315.jpeg",
  },
  {
    name: "ProfessionalTraderA",
    account: 110101312,
    description: "ProfessionalTrader -EURUSD",
    author: "wei zhenjiang",
    authorPhoto: null,
  },
  {
    name: "Little Dragon",
    account: 110101371,
    description:
      "Chiến lược giao dịch cặp tiền GBPUSD.\nGiao dịch thuận xu hướng trend Daily.\nMục tiêu lợi nhuận ổn định 10-15%/tháng với độ tin cậy cao.",
    author: "HUNG PHAM DUC",
    authorPhoto:
      "/st/media/pim/media/user_photo/2e/2ea/2ea31f32d14777eb9797a9fd71ef1f64_254d45983d0f4dd4acbfe60ae895f638.jpg",
  },
  {
    name: "PHAT TAI 68",
    account: 110101377,
    description: "Phát tài, phát lộc",
    author: "LY LÊ THỊ",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1a8/1a8b8b84934c5259f9daaeddb04cc523_2f4ef1e3f8d34305965662b381a2f127.png",
  },
  {
    name: "NeuroSharp Trader",
    account: 110101469,
    description:
      "Trading strategy AI-powered EA: smart blend of price action, correlation, martingale-hedging for quick, dynamic gains!",
    author: "NARUDOL HOMSAEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/1b/1be/1bec27d862d8489077c9a46e063ab48d_e548c31f1bba45b796079590583f9d03.jpg",
  },
  {
    name: "Lazy Trader 30",
    account: 110101533,
    description:
      "( Contact Line@ : lazy_td ) \n\nHamonic + โครงสร้างของราคา + Demand + Suppy",
    author: "MR KANJANAWAT MEECHOK",
    authorPhoto: null,
  },
  {
    name: "Cheetah Steady v5",
    account: 110101605,
    description:
      "Our EA already proved stable profit about 40% above per month,  trade only 1 pair. This EA has been run for more than a year. Come, Join and Proved it",
    author: "JOLIN LIMERTHA",
    authorPhoto:
      "/st/media/pim/media/user_photo/2f/2f1/2f1d83c86f7c34b5b861697909125d9d_a0878ccabb09491db88b8dc652a3bc22.jpg",
  },
  {
    name: "HTK_Forex Scalping",
    account: 110101801,
    description: "Forex scalping (M5)",
    author: "HAI QUANG TRUONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/f6/f67/f675b05592d359d947db6ca8296c123e_e1523f79ac164cb7a5593fbb147843d3.jpg",
  },
  {
    name: "manh EA123",
    account: 110101923,
    description:
      "cùng nhau tạo lợi nhuận an toàn. Lợi nhuận sẽ đạt 5-30% tháng nhé ae",
    author: "Manh Dinh khac",
    authorPhoto:
      "/st/media/pim/media/user_photo/73/736/7363f4fb22e43837c854ac36e49930c0_698e04f075dc4063a358a277e6c871c0.jpeg",
  },
  {
    name: "Mantra infotech",
    account: 110102023,
    description:
      "I am full Time Trader I have 6 year experience in forex and crypto market I make profit monthly 20%to 40%",
    author: "POONAM SHARMA",
    authorPhoto: null,
  },
  {
    name: "Make money",
    account: 110102032,
    description: "Hi all make money every day with me,",
    author: "MUTHUKRISHNAN PALAVESAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/625/62555f917e2d8bc80faaf4409bed222e_ffaa2ff69f7f4caf81a5c59d4da571a7.PNG",
  },
  {
    name: "FX Swing Pro",
    account: 110102235,
    description:
      "I trade EU and GU pairs based on swing strategy for consistent returns. Join my Telegram channel for regular updates at - https://t.me/AlgoLab_Trading",
    author: "Jaideep Bhattacharjee",
    authorPhoto:
      "/st/media/pim/media/user_photo/8b/8be/8be6d62ae5cff55af49bb5d36b4e91f1_facd4b4a5bb142db91bf28ffada9a321.jpg",
  },
  {
    name: "HTLtrayding",
    account: 110102245,
    description: "Disciplined trading, safe capital management, stable profits",
    author: "Lưỡng Hoàng",
    authorPhoto:
      "/st/media/pim/media/user_photo/1d/1db/1dba042e7773417bcde304fc9acdf31c_6870e2514a7546078f7f96d0ea184706.PNG",
  },
  {
    name: "Research Investiment",
    account: 110102467,
    description: "The Best Strategy in the World",
    author: "Leandro Goncalves",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/600/60069c112ae9eb5814d6f95ed0d38f36_89a9b1f61380476c85dbb524c34b73bc_eERa1Rb.jpg",
  },
  {
    name: "Drop of Peace",
    account: 110102760,
    description:
      "ALHAMDULILLAH for Everything. \n\nTelegram:\nhttps://t.me/+gdh9d3WBuSBmZmJl\n\n.\n\nTo Open an Exness Account:\nhttps://one.exnesstrack.net/a/s3f7rhnj",
    author: "Abul Gazi",
    authorPhoto:
      "/st/media/pim/media/user_photo/21/21a/21a71d54540127235cceca3825297a6f_da7ecab823a94e8e9f59e7151c8aafdd.jpeg",
  },
  {
    name: "Grow Bit By Bit",
    account: 110102772,
    description: "Lets Grow Together",
    author: "Ata Ullah",
    authorPhoto:
      "/st/media/pim/media/user_photo/c3/c30/c30df91007ad2a8b73ab33033249019f_900ec0d30ffa4f0ba6134d4bf7751963.jpg",
  },
  {
    name: "LF SAIGON 9",
    account: 110102851,
    description:
      "Contact for a consultation\nTư vấn tại Telegram Chat Group:  https://t.me/VANGgroup\ncopy dán Google để vào nhóm\ncopy this link paste on Google to join",
    author: "long thành nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/f7/f7d/f7d234d7c625dbfd0e398240be1332ed_5bd065d78cba42619656951469d14d10.jpg",
  },
  {
    name: "Knowledgeispowerfx",
    account: 110103257,
    description:
      "Strategy developed based on SUPPORT & RESISTANCE and buttressed by a reliable indicator having (90%) win rate. Risk : Reward is 1: 3 or 1:5.",
    author: "SAMUEL KOFI TETTEH",
    authorPhoto:
      "/st/media/pim/media/user_photo/dc/dcf/dcfafe948faccd796ccfefa1d211a0d0_93c7684c9189438e885754ffe1beb0b6.jpg",
  },
  {
    name: "Bitcoin313",
    account: 110103304,
    description: "Swing trade",
    author: "Nguyễn Hải Nam",
    authorPhoto:
      "/st/media/pim/media/user_photo/d9/d92/d92b90c5c26ae04061f22f8683dc1365_8e5f015fa864463baa79ec49de8f8363_Z4CgDSo.jpg",
  },
  {
    name: "Hoan_BuiBK",
    account: 110103360,
    description: "Money Hunter 2024",
    author: "Hoan Bùi",
    authorPhoto:
      "/st/media/pim/media/user_photo/99/991/991bd082ac2f3b0cedd63f69a1c1de6c_a67a234b01b04f0bb95a8fcda3e3f430.jpg",
  },
  {
    name: "TOP SNIPER- GBPUSDse",
    account: 110103508,
    description: "TOP SNIPER- GBPUSDse",
    author: "Xiaojie Pan",
    authorPhoto:
      "/st/media/user_photo/9a/9a6/9a669143a2b5860c7a0cfa4ba49af4fe_a46663edd1b847d8b0d6890286850f9c.jpg",
  },
  {
    name: "Forex Thief",
    account: 110103531,
    description:
      "Forex Thief is a Forex scalping strategy targeting small, frequent gains from short-term trades, emphasizing quick market response and disciplined",
    author: "Saleh Mohammed Alshehri",
    authorPhoto:
      "/st/media/user_photo/e1/e13/e1381653ef7658824f24792afd757cce_fcd868a2865c4d259c8c2b57267c9373.jpeg",
  },
  {
    name: "Pro Mix Pair 2",
    account: 110103646,
    description: "focus pair GBPUSD EURNZD & XAUUSD",
    author: "RUDY CANDRA",
    authorPhoto:
      "/st/media/user_photo/3b/3be/3be307a15556c81459589dff3fae98c7_a13055414db8489daac38afe477f77e1.jpg",
  },
  {
    name: "Safe Step Up",
    account: 110103691,
    description:
      "Press copy and release fund for a long time. Please don't close running trades as you think. My goal is to grow your fund 5-10% within one month..",
    author: "ච ල",
    authorPhoto:
      "/st/media/pim/media/user_photo/19/19c/19c246509bf93f7b5360a2e62e046f3b_c0190bcb2f7145de839d48beb50f4d87.png",
  },
  {
    name: "Btc360 invest",
    account: 110103743,
    description:
      "Our strategy is very safe for long term invest with out any risk",
    author: "salah salhi",
    authorPhoto:
      "/st/media/pim/media/user_photo/16/167/1676aa68446b36ced234b34919a7b598_6b3c265b80ae4138a971effc43febdfc.jpg",
  },
  {
    name: "Millionz ID",
    account: 110103786,
    description:
      "We trade simple yet profitable\nAverage R:R 0.7:1\nAverage 25 planned signal/month\nAverage Holding Position : 5 days\nXAUUSD",
    author: "JONATAN CLAUDE",
    authorPhoto: null,
  },
  {
    name: "Magnetroning",
    account: 110103832,
    description:
      "specializes in gold and scalp.  Committed profit over 5%/month.  Over 5 years of experience with gold\nhttps://zalo.me/g/zclmdx715",
    author: "minh ngu bui",
    authorPhoto:
      "/st/media/pim/media/user_photo/57/570/5700c7ea0117e16b4f2c15e24fd059ca_13bc261da1c4486d8b6885f10561e532.jpeg",
  },
  {
    name: "Trade gold with Minh",
    account: 110103962,
    description: "Profit target is 10-20% per month",
    author: "Nhật Minh Đinh",
    authorPhoto:
      "/st/media/pim/media/user_photo/4b/4b0/4b0eb79ba4aed846fcfb41216fa973b4_b17ce752cad44490a1cd24264cccdb9f.jpg",
  },
  {
    name: "XAU-USD SUPER TRADER",
    account: 110104061,
    description: "Expert in XAU - USD",
    author: "Minh Lê Đức",
    authorPhoto:
      "/st/media/pim/media/user_photo/67/678/678a64874e99a6b97a3e02ff915be72b_3fe6da534f694558a00ee59801103166.jpg",
  },
  {
    name: "FX-SMART-99",
    account: 110104136,
    description:
      "Martingale strategy for EURUSD.\nMinimum risk with expected profit of 1% per day on an average.",
    author: "Naresh Kumar V",
    authorPhoto:
      "/st/media/pim/media/user_photo/e4/e48/e48dd767373f388e9b58b940954f9ead_9c1ca546854b4600939b37f281667161.jpg",
  },
  {
    name: "An toan_chac chan",
    account: 110104313,
    description: "Kiên nhẫn",
    author: "hưng quốc",
    authorPhoto:
      "/st/media/user_photo/1e/1ea/1ea8e3f7f3b152bd2792c2b2c8ff84fe_5807622e57b64c929418efd886955111.jpg",
  },
  {
    name: "Gold Trend Trading",
    account: 110104347,
    description: "Gold Trend Trading",
    author: "青林 田",
    authorPhoto:
      "/st/media/pim/media/user_photo/c4/c44/c44ebc8eddbba44c4d31cb7064361c09_37550b3f310946cd9d02887a493bbe76.jpg",
  },
  {
    name: "Lion King",
    account: 110104352,
    description:
      "Vốn LỚN tại link 2  dành cho nhà đầu tư chọn rủi ro thấp lợi nhuận ổn định  : ---https://social-trading.club/strategy/110109903",
    author: "HUNG VY NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/da/da5/da5025db56f58f1a4102142e3fd2d26c_991b5b319df348c99069bb937242f49c_CkBixxB.jpg",
  },
  {
    name: "Winning  Home 赢之家",
    account: 110104366,
    description: "Rolling profit, focusing on gold  \n滚动的利润  专注黄金",
    author: "文宏 李",
    authorPhoto:
      "/st/media/pim/media/user_photo/91/918/9185bf85f40a976c4814f3c94a7e4222_364f021960b5410080cf08cf88776ce0.jpg",
  },
  {
    name: "DiRekFoRex",
    account: 110104373,
    description: "BB in TF Day",
    author: "Direk Ponvisadchaiyakul",
    authorPhoto:
      "/st/media/pim/media/user_photo/d2/d2c/d2c7e6d57230504f5cda99e3aa52287d_f63c87988d2445c5904355d0cdb30067.png",
  },
  {
    name: "51Percent_Scalping",
    account: 110104522,
    description: "High Risk High Returns",
    author: "MISS TASSANAN THECHANANTIPAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/ea/eaa/eaaa7f6c5e014c171ccd69d080bc3169_092ee428100f4d0b8b11628eedc1f315.jpeg",
  },
  {
    name: "EA for quick profits",
    account: 110104649,
    description: "together",
    author: "YI-LONG CHANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/5f/5f4/5f4bde41963e5fe30279d104780b318c_c8ce5306b14040f8a4ff8ffc680d42dc.jpg",
  },
  {
    name: "EA spaceship",
    account: 110104652,
    description: "Sailors, come aboard",
    author: "YI-LONG CHANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/5f/5f4/5f4bde41963e5fe30279d104780b318c_c8ce5306b14040f8a4ff8ffc680d42dc.jpg",
  },
  {
    name: "NDT social welfare",
    account: 110104688,
    description:
      "This is a conservative investment as it is funded by my company's welfare.\n$1500usd is minimum required deposit.",
    author: "THANH CHUONG TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/d3/d3c/d3c2fc097ab0a556a136ded76fff2571_ef24365352e84c4fb346a4a6ee449d9e.png",
  },
  {
    name: "DCA by DCL",
    account: 110104720,
    description: "Trung bình giá: Dollar Cost Average",
    author: "CONG LINH DINH",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/69f/69f911fc874d1169ca4c0168c2f66e24_55bd834865eb4e08bfa99f268d8b1bb7_OXYBNcw.png",
  },
  {
    name: "COPY FOREX SIGNALS",
    account: 110104811,
    description:
      "Hệ thống giao dịch tự động mã GBP/USD với lịch sử giao dịch hơn 2 năm ổn định. Lợi nhuận kỳ vọng 10% / tháng.",
    author: "Hoàng Song Ân Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/f6/f60/f600f84920891b353d0967c96b59bdd4_1c1453d9b2aa4b1ea2b32b80d676a6f0.jpg",
  },
  {
    name: "RUN-AND-GUN-OVER-LOT",
    account: 110104915,
    description: "-",
    author: "Ukrit Satjathanaporn",
    authorPhoto:
      "/st/media/pim/media/user_photo/72/721/72175fbb6003fde1e1eceefebbc472c8_fe67e6d4c7cc4fc8991c198a2515497a.jpg",
  },
  {
    name: "Stable Gain V1",
    account: 110104959,
    description:
      "A Robot based trading strategy that uses trend following in combination with a grid method for entry. Safe Initial capital shall start at 1,000 usd.",
    author: "MR THITI BUNSIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/34/340/340918732e84b76656fb429681ef656a_f73a2c1b79e54a67b545392aa56fd5dd.png",
  },
  {
    name: "HIDDEN DRAGON",
    account: 110105045,
    description: "Day Trading",
    author: "Hanh Dinh Thi",
    authorPhoto:
      "/st/media/pim/media/user_photo/74/742/74273aecd620b65ef50cca560fa0f4a0_bc5d2cadd77645e8a0a4c5269fc12774.jpg",
  },
  {
    name: "WHALES TRADERS",
    account: 110105139,
    description:
      "“WHALES TRADERS” are trading experts working on profitable and safe trading business models with EURUSD, USDCHF , EURGBP , GBPUSD.",
    author: "Moosa  Al Abri",
    authorPhoto:
      "/st/media/pim/media/user_photo/40/402/402ee5971cb14b19091499bd24c80b4f_66d36dc724b84b20afed7ea6c68b1036.jpg",
  },
  {
    name: "SCALPER OLYMPIC",
    account: 110105142,
    description:
      "Scalper strategy for quick gains and low exposure, maintaining liquidity.",
    author: "Eliel Oscar Moreira Alves",
    authorPhoto:
      "/st/media/pim/media/user_photo/24/242/242f6ed0f916ce583d74878a7b5dfc16_e01a2d2b9d79447db530740e97ffcce0.jpg",
  },
  {
    name: "SnD Protector",
    account: 110105177,
    description: "profitable method with low risk",
    author: "ANITA SETIAWATI",
    authorPhoto:
      "/st/media/pim/media/user_photo/90/90f/90f654903a33c11b8aca7ca130e90790_b160cad173cd46df834c3969df4a3365.jpg",
  },
  {
    name: "vuongphanmoi",
    account: 110105338,
    description:
      "Giao dịch vàng trung hạn, có sl và tp đầy đủ, lợi nhuận ổn định. Tele t_me/vuongphan , zalo_me/g/rohknr112",
    author: "Vuong Phan Hong",
    authorPhoto:
      "/st/media/pim/media/user_photo/36/36e/36ef61a7c235a8231af2cbe367cd8785_65ec0dac187a4877a5fe1054ab191b42_tZl0F0E.png",
  },
  {
    name: "AUDUSD Trading",
    account: 110105386,
    description:
      "AUDUSD with risk management\n\n\nDisclaimer:\nPlease invest on your own risk there is no guaranty of return in the market & you ca loose also investment",
    author: "Kulwant Rana",
    authorPhoto:
      "/st/media/pim/media/user_photo/c0/c0b/c0b5091f13b45a11d33542c1c9aafd09_e8dbe9dc0338447ca5a2ebfd9c2a1c23.jpg",
  },
  {
    name: "TRADE TO FREEDOM",
    account: 110105557,
    description:
      "-swing trading\n-trade D1 - 12 cross currency pairs AUD, EUR, CAD, CHF, NZD\n- high profit\n- low risk\n- take profit 10-20%/month",
    author: "VAN DUNG VO",
    authorPhoto:
      "/st/media/pim/media/user_photo/2c/2c4/2c4d155b1da2af93f95df250c4c4febb_b89ce4948b6348c8997185c87c30ed08.png",
  },
  {
    name: "Ea Csap EU Hung",
    account: 110105658,
    description: "Không kiếm được tiền là lỗi của bạn\nMMFFFOREX channel",
    author: "NGUYẼN TÀI",
    authorPhoto:
      "/st/media/user_photo/3f/3fd/3fd640ae53d59eff84e3ad31af5d4050_6460c8e7eab946c6bf8c894f2f7ecd8e.jpeg",
  },
  {
    name: "Nguyễn Văn Thu",
    account: 110105725,
    description: "Đem phồn vinh đến khách hàng",
    author: "Thu Nguyễn Văn",
    authorPhoto:
      "/st/media/user_photo/c8/c88/c8895d4ab7a55300b42df89a34af35da_82660b06f6eb4958848368190d21cf3a.jpg",
  },
  {
    name: "VOLDOZ GRIDS",
    account: 110105842,
    description:
      "My Instagram : @Voldozfx\n\nSafe Trading And Continuous Profit",
    author: "waleed alsultan",
    authorPhoto:
      "/st/media/pim/media/user_photo/21/212/2128204bbe0445bbbb41f92c57420b88_ca194361171548d7aaf29bc0b21d7f55.jpeg",
  },
  {
    name: "Growup5 two",
    account: 110106018,
    description: "Minimum investment 10$",
    author: "sanjeev  kumar",
    authorPhoto:
      "/st/media/pim/media/user_photo/be/beb/bebeaf87dde0634dd261a2cfca39cb2c_9a88ec6c0f744452b3639d08fa4ad379.jpg",
  },
  {
    name: "Golden FX Signals",
    account: 110106019,
    description:
      "Professional and simple trading with very little risk (Daily risk 2%)\n\nBecome a pro Money will flow, Month target is 8 to 10%",
    author: "NIVEDITA KONATI",
    authorPhoto: null,
  },
  {
    name: "scamping gold",
    account: 110106214,
    description:
      "Đã có kinh nghiệm 5 năm\ngiao dịch 10% 20% tháng \ntích tiểu thành đại \ncố gắng từ tháng 2.2024  sẽ ko có ngày nào thua lỗ",
    author: "Ha Le Phuoc",
    authorPhoto:
      "/st/media/pim/media/user_photo/65/65e/65e98ee0971860e74ec1c97970dbcfcb_f9f423eea7bf4d05acbea9b8bcdbb86b.jpg",
  },
  {
    name: "Lucas Capital",
    account: 110106289,
    description:
      "This portfolio use EA strategy for long-term goals.\nI really appreciate everyone who added me to watchlist. Add funds monthly for wealth accumulation.",
    author: "NGOC MINH NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/73/735/735650abf2c5622fe25230dafb24d7a8_f80bb57ef8ad4f5cb5dea061b6470648.png",
  },
  {
    name: "TH Trading",
    account: 110106318,
    description:
      "Đầu tư giá trị bền vững - Không đầu cơ \nTìm hiểu chúng tôi tại : https://t.me/giaolodautu\nLiên hệ Telegram : @tungtv_fly",
    author: "Văn Tùng Tô",
    authorPhoto:
      "/st/media/pim/media/user_photo/f7/f76/f76790804ff1e0eaef3b21697dfb99e7_8cf6613b06fe4f0388d9850328e3bf6f.jpg",
  },
  {
    name: "1000USDBY18-MARCHPPS",
    account: 110106352,
    description: "DAYTRAD",
    author: "KHEMCHIRA TECHADAMRONGCHIT",
    authorPhoto:
      "/st/media/pim/media/user_photo/2b/2b2/2b2c09252f97b8ebce3ffd21eeabb320_993841a75e2043fea7e998ca602b471f.jpeg",
  },
  {
    name: "LuhueaKaiDu",
    account: 110106482,
    description: "主要做黄金，不持仓过夜。",
    author: "zeng mei",
    authorPhoto:
      "/st/media/pim/media/user_photo/78/780/780e5153db84162443b5fa7ced9ff0d7_76cad4976f3246cd86c95b41e60fb210.jpg",
  },
  {
    name: "Jeyxy An Toàn",
    account: 110106508,
    description:
      "Lợi nhuận nhỏ, an toàn, bền vững\n- TK “ Jeyxy Trader “: lợi nhuận 30%-50%\n- TK “ Jeyxy Trading “: Lợi nhuận 15-25%\n- Kinh nghiệm 5 năm\n- Web: jeyxy.vn",
    author: "Tuyền Lưu",
    authorPhoto:
      "/st/media/pim/media/user_photo/79/79c/79c6de1c8659ee76fbe5e29f05046a22_ae4751294c714e368c59d45b41b1c974.jpeg",
  },
  {
    name: "GBot-XAUUSD",
    account: 110106531,
    description: "GBot team 2024.",
    author: "Tuan Anh Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/a1/a17/a17b263d55c034faa279378d24e6e363_dac793e4d1664b4db9b4c6ad6ef9dc06.png",
  },
  {
    name: "SLOW GROWTH",
    account: 110106534,
    description:
      "YOU ARE NOT IN A RACE WITH ANYONE. GOOD THINGS TAKE TIME. REAL THINGS TAKE TIME... and SLOW GROWTH EQUALS STRONG ROOTS.”",
    author: "Rabnawaz khan",
    authorPhoto:
      "/st/media/pim/media/user_photo/5d/5d4/5d4db02a1df8cefcf13d12ff6d7ef2f5_2914cab5c0d24596882457c1e606cfac.jpg",
  },
  {
    name: "Get rid of greed",
    account: 110106619,
    description:
      "Get rid of your greed and fear. Then find the lowest buying point and the highest selling point. for sustainable profits",
    author: "นิธิศ ชมตระกูล",
    authorPhoto:
      "/st/media/pim/media/user_photo/9c/9cd/9cd259a291ac593a707cef968ce8ef40_3ee42fce394b405eaf5703e55df1ba92.png",
  },
  {
    name: "Continent Enterprise",
    account: 110106831,
    description:
      "Conservative Trade \nManual Trade Only using SMC and Price Action",
    author: "hendy Hendy",
    authorPhoto:
      "/st/media/pim/media/user_photo/c4/c4d/c4d0fd523d46f1608c4c7ca13b9cce14_d140e5f98c45428f91bfc9f6d53b1ec9.jpg",
  },
  {
    name: "Scalping Strategy",
    account: 110106989,
    description:
      "We manage trading account day and night 24 hours so that you will get your profit constantly ,\nrisk ratio is only 10%",
    author: "SHAHANAJ PARVIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/25/255/255e3e3950cf9ab07e50ae587a41e573_941e41f43b0549efa947ccbfc0fa10f3.png",
  },
  {
    name: "Trading Win-22",
    account: 110107022,
    description: "Forex",
    author: "NONTAWACH KAEOMALA",
    authorPhoto:
      "/st/media/pim/media/user_photo/ac/ac4/ac4c002810fa986dd40bf74678558d41_dad8f91427a644599b1514499e624780.png",
  },
  {
    name: "Advanced Forex",
    account: 110107554,
    description: "Advanced Trading Strategies in Forex markets",
    author: "Alaa Ramadan",
    authorPhoto:
      "/st/media/pim/media/user_photo/c3/c30/c3005ef2f59352adf5f5eceedcf7e294_f6e64ede957e4a3c8ce40bee6e8eb840_k6t5vQn.jpg",
  },
  {
    name: "Cash back you1 Per",
    account: 110107575,
    description:
      "TES_1%/DayCash_back_U\nCash back to you 1% per day\nTrade only 1-3% per day. We mainly focus on safety.",
    author: "Pumin Ninsiri",
    authorPhoto:
      "/st/media/pim/media/user_photo/a6/a62/a6289797dca9770b9f759e1d103a4bc4_3bbfdd70a73d44ff9759a96bd4389619.png",
  },
  {
    name: "Millionaires Club",
    account: 110107596,
    description:
      "Use a trend-following strategy in Forex trading by identifying a strong trend using technical indicators like moving averages.",
    author: "MASUD PARVEZ",
    authorPhoto:
      "/st/media/pim/media/user_photo/eb/eb9/eb93dc7232add03c2a0db96f21bd42b1_2b6fb2af383d40c595eda66844bd8ae4.jpg",
  },
  {
    name: "Reversal Trading",
    account: 110107614,
    description: "Expect 5-15% return per month.",
    author: "WORRWICH WONGKUAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/72/72c/72cca6fe16eeed5457c3f274d0320ac5_2bafb7ce1c8947c1821c232303751249.png",
  },
  {
    name: "Small Lot2024",
    account: 110107713,
    description: "استخدام لوت صغير والتزام ب الاهداف وايقاف الخساره",
    author: "tahany mahmoud",
    authorPhoto:
      "/st/media/pim/media/user_photo/89/89f/89f5ce6c3a1e0b3eddeab3892afceb30_9839daab1dc140888668a71200ce4345.jpeg",
  },
  {
    name: "HUMBLED TRADER 77",
    account: 110107761,
    description: "Monthly target is around 10% - 12%",
    author: "DANG QUANG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c28/c28822a31a81e11f93c1868f6671f857_9f4f169ac63c4eb2ad9a87d3f1774743.png",
  },
  {
    name: "Gold Miner By Yada",
    account: 110107773,
    description:
      "(Waiting to come back again)\nH1 Gold Only\nMartingale EA\nCut Loss 200$\nPause before new 15 minute and after new 30 minute start again",
    author: "ปกรณ์ พรหมมินทร์",
    authorPhoto:
      "/st/media/pim/media/user_photo/c8/c88/c888d5546b51009323d1a6924299b43d_7a90cf1305104597bef1925e985de6d8.jpg",
  },
  {
    name: "Double Money",
    account: 110107849,
    description:
      "Hello Everyone, 👉This account is totally Safe to copy for every investor.👈 I will try my best to make 10-100 usd profit Weekly. 👍",
    author: "Nirmala  Devi",
    authorPhoto: null,
  },
  {
    name: "MAA  M  K  M",
    account: 110107939,
    description: "U CAN COPY MY ACCOUNT",
    author: "SAGARIKA PANDA",
    authorPhoto:
      "/st/media/pim/media/user_photo/b5/b59/b59a162a1278c8a2eed525084bb3b29a_52fcbaa8f0534d8ea0302d52673c5643.jpg",
  },
  {
    name: "Resistance Support",
    account: 110107961,
    description: "50% -100% annual return target.",
    author: "WORRWICH WONGKUAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/72/72c/72cca6fe16eeed5457c3f274d0320ac5_2bafb7ce1c8947c1821c232303751249.png",
  },
  {
    name: "TRADE WINGS",
    account: 110108025,
    description: "ONLY GBPUSD TRADING   LOW RISQ LOW PROFIT  THE BEST PROFIT",
    author: "Gaurav thakar",
    authorPhoto:
      "/st/media/user_photo/4e/4e3/4e3094e333463801ab10a99212716682_63e090ec785f43a4bf469af51b67692e.jpg",
  },
  {
    name: "Copernicus",
    account: 110108027,
    description: "作成中",
    author: "伊藤 壮一",
    authorPhoto: "",
  },
  {
    name: "Dragon King",
    account: 110108028,
    description:
      "Chào các nhà đầu tư đến với Dragon King, chiến lược của chúng tôi là chiến lược dài hạn nhằm tìm kiếm lợi nhuận đều đặn và ổn định. Good Luck .",
    author: "HUNG VY NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/da/da5/da5025db56f58f1a4102142e3fd2d26c_991b5b319df348c99069bb937242f49c_CkBixxB.jpg",
  },
  {
    name: "Ezdehar Capital",
    account: 110108093,
    description:
      "صفقات مختارة بمخاطرة بسيطة، لتنمية رأس المال بهدف شهري بين (١-٥٪).\nلا أتداول بشكل يومي. صفقة او صفقتين كل اسبوع.\nيمكنك إلغاء النسخ في أي وقت.",
    author: "Husain Hashem",
    authorPhoto:
      "/st/media/pim/media/user_photo/b8/b87/b871463d5ea970718949f828cc2a70e9_4599f417d86e44aaac7933cf7320d7cf.jpg",
  },
  {
    name: "Flying in the sky",
    account: 110108236,
    description: "hybrid transactions",
    author: "培君 牛",
    authorPhoto:
      "/st/media/pim/media/user_photo/5e/5e4/5e48626a2125828dd52f278e3c1f2bb3_9626c17c977c48e4a0bf0033811aec35.jpg",
  },
  {
    name: "SAFE TRADE",
    account: 110108287,
    description:
      "Secure Ambition and Financial Eminent.\nDo not Invest all you have.\nSometimes high risk.\nSwing trade.\nFinancial Freedom.",
    author: "SINTA WIRAWAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/47/47a/47a5d11abcb4468a67672e75d2cf2745_444eba1383bb4a858478c14928513484.png",
  },
  {
    name: "RoboticPips",
    account: 110108289,
    description:
      "Gaining money while you sleeping ;)\ni’m just copying from the below channel \n\n-Telegram\nhttps://t.me/RoboticPips",
    author: "bahaa Ahmed",
    authorPhoto:
      "/st/media/pim/media/user_photo/af/af1/af1423e8f1b65161893bc6b998b2f4cd_bee404f2fa4048b9a715c49ac6dc0dce_fE0lMe1.jpeg",
  },
  {
    name: "Profit Dancing",
    account: 110108494,
    description:
      "Stable Profit \nฝากเงินแล้วปล่อย Run ยาวได้เลยครับ\nผมจะทำการถอดกำไรทุกๆ 2อาทิตย์",
    author: "VITID ASSAVARUT",
    authorPhoto:
      "/st/media/pim/media/user_photo/cf/cfb/cfbb6cc31b72f754b81c7da6e23ba203_ddb19348ff3e438e9742791065680567.jpg",
  },
  {
    name: "GAPTEK PROFIT",
    account: 110108634,
    description:
      "Ambil Posisi setelah pergerakan posisi maximal / titik jenuh di resisten ataupun suport\nLihat data fundamental\nLot kecil\nJaga ketahanan Equity",
    author: "Steven Shan",
    authorPhoto:
      "/st/media/pim/media/user_photo/85/857/85787157c7ef2fa3a0e29a7bbff5df22_d0fa221d37ed477d9c39df8525006961.jpg",
  },
  {
    name: "S investment",
    account: 110108721,
    description: "5000USD MINIMUM",
    author: "suresh popatbhai savani",
    authorPhoto:
      "/st/media/pim/media/user_photo/cd/cd5/cd502316674088cdeabe00f6fddc919a_ca21fabf56714acfa47ac19d697b7c00.jpeg",
  },
  {
    name: "O D I B A B A - 2",
    account: 110108816,
    description: 'Trading is not a " G A M B L I N G "',
    author: "RAJESWARI SUBRAMANI",
    authorPhoto:
      "/st/media/pim/media/user_photo/ac/ac6/ac6086409318e6182c9c2646c9316093_94256e3b18fe4c2aafeb01cb991a0a82.png",
  },
  {
    name: "Bull vs Bear",
    account: 110108834,
    description:
      "I won’t put my account in unnecessary risk. I’m an intraday trader and also a scalper. \nMonthly Target 20-25% or even more in sha Allah",
    author: "SHAHADAT HOSSAIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/4a/4a2/4a2a980c4afcc4d2a0f8b42943de0813_11c8917136ca407c927fb3c2c53a566b.jpeg",
  },
  {
    name: "NRP_5K_Copy",
    account: 110108913,
    description: "Hệ thống giao dịch tự động",
    author: "QUOC TOAN TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/89/893/893a35411f69e21849374380ae44f73e_a3ec6b9b177743c194270bb5f943947d.jpg",
  },
  {
    name: "Sky 1234567",
    account: 110109021,
    description: "Chốt lời, cắt lỗ bất kỳ",
    author: "Miên  Pham thi",
    authorPhoto:
      "/st/media/pim/media/user_photo/db/dbf/dbfa7c1dfda43fe97862278b52587d97_d03918fc800848198242532015f07bbe.jpg",
  },
  {
    name: "Gainers-FX",
    account: 110109024,
    description:
      "LOSING and WINNING is bound to happen,. We choose the best.  99% of trades are completed per day.  Invest WISELY.\nEdit",
    author: "SETYO DHARMO",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/504/5041412dfa497ddfd487fd5617f024d8_687eb668733543ff8b423f053aaaa30c.jpg",
  },
  {
    name: "FOREX MASTER",
    account: 110109092,
    description:
      "✅ The main goal of the strategy is to improve the security and efficiency of trading\n10-20% monthly profit with no any martingale we use fixed lot",
    author: "Nada Abdelmohsen",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/507/507bd75eaf7b15169232059d9d266361_30c15fe9c4264679ace2b69d1fee1a83.png",
  },
  {
    name: "One Percent A Day",
    account: 110109137,
    description:
      "Every 100 working days your fund will be doubled, current maximum investment is $1,000",
    author: "丕皓 王",
    authorPhoto:
      "/st/media/user_photo/ca/ca3/ca3183a110d67852ecf851130e8b5326_d0c83a31daa947ea8665236da82201d4.png",
  },
  {
    name: "Optimal Trading",
    account: 110109217,
    description: "Stable profit with low risk 5 to 10% monthly raise",
    author: "Hamza Farooq",
    authorPhoto:
      "/st/media/pim/media/user_photo/97/973/973a4a76b389596a9c3337e644c92a86_3709f52660cb46c69cb4c57b61f373e1.JPG",
  },
  {
    name: "Trung Hoà Trading",
    account: 110109237,
    description:
      "Lợi nhuận 10% /tháng.\nTập trung lợi nhuận NHỎ nhưng ĐỀU và AN TOÀN . Nhà đầu tư An toàn Ngủ ngon.\nZalo: 0975 797 694",
    author: "HÒA TRẦN",
    authorPhoto:
      "/st/media/pim/media/user_photo/47/475/475f2c24f52ca7f458d7675edda07daa_7445eb73e4314b489693ab9f91fa50fd.jpg",
  },
  {
    name: "Harmonic Cypher",
    account: 110109264,
    description:
      "Strategy is the combination of various mechanism: harmonic cypher pattern, swing and hedging,...\nOrders are monitored by an individual supervisor!",
    author: "Viet Dung Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/fc/fc2/fc2ec220ba1e5efbc17badc5408a35aa_2bc33ec654e34ae48c745001d2ad472a.jpeg",
  },
  {
    name: "Consistent Profit",
    account: 110109287,
    description: "Consistency guaranteed…",
    author: "FASIL RAROOTHCHALI",
    authorPhoto:
      "/st/media/pim/media/user_photo/a8/a88/a88a491f17bcf9110fd99f50c8b6cbe7_3defe59ac60342a3bc11f629f9cb1bff.jpeg",
  },
  {
    name: "GoTogether",
    account: 110109295,
    description: "EA-Gold",
    author: "PITCHAKORN PAOSUWANCHAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/e3/e3d/e3d47da76b0901afff091c4b21711d8e_40dcefd5a4dc4910b482fc24c2c5d8bd.png",
  },
  {
    name: "chensu0001",
    account: 110109305,
    description: "chen",
    author: "陈 苏",
    authorPhoto: null,
  },
  {
    name: "Printing Dollars",
    account: 110109421,
    description: "Slow But Safe",
    author: "Malik Arshad",
    authorPhoto:
      "/st/media/pim/media/user_photo/07/072/072a3b0b0d4d160123b149613dc35c64_aafd8e1f87d74a81b90916beb42db3de.jpg",
  },
  {
    name: "NHAN AUTO3",
    account: 110109470,
    description: "Profit 20-50%/month- \nLow DD- \nGroup: https://t.me/ccflrwe",
    author: "NHÂN NGUYỄN THÀNH",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/86f/86f4e0fe61d92b0a1ff48a7bd35b332d_255b941ed7824d45aaa5325789d84253.jpg",
  },
  {
    name: "GOLD MASTER",
    account: 110109523,
    description:
      "Monthly Profit Target around: 5% - 10%💵 I will try my best In Sha Allah❤️ 👉Start Copy and Be Relax I have lot of Experience in Trading 💱🏆",
    author: "MD MERAJUL ISLAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/22/22c/22c1f0f5fd786785d7f8aec7bc0dee4b_9cd5b1af003e4b5d9477091c7a836ac5.png",
  },
  {
    name: "2H Group EA",
    account: 110109538,
    description:
      "EA được khống chế SL bằng tổng SL tất cả các lệnh, Không dừng lỗ riêng cho từng lệnh, để hạn chế việc bị quét SL. Max DD 25%--->Close All",
    author: "VAN HUONG TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a0/a05/a05ff51f33fbd5a691f6d0e840351867_a2a9fd152d4a4aaf88ac0f3b62c2fff3.jpg",
  },
  {
    name: "FOREX SAFE",
    account: 110109576,
    description:
      "FOREX SAFE can offer relatively safe profit through careful risk management, strategic planning, and disciplined trading practices to minimize losses",
    author: "ABDELGHAFFAR RASLAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/74/74b/74b095f9d5c1f6ceee743d36ac9c7c56_505e58d32fb141808a33c7a6e7763113.jpg",
  },
  {
    name: "Trading Win Win",
    account: 110109666,
    description: "Forex",
    author: "NONTAWACH KAEOMALA",
    authorPhoto:
      "/st/media/pim/media/user_photo/ac/ac4/ac4c002810fa986dd40bf74678558d41_dad8f91427a644599b1514499e624780.png",
  },
  {
    name: "Golden Fox Trader",
    account: 110109798,
    description: "Golden Fox Trader",
    author: "Devid Tanuwijaya",
    authorPhoto:
      "/st/media/pim/media/user_photo/53/530/530c5cec1fd8f40e6fa4abd9b2bc2861_483876249d5041adb6c0563138e962ef.jpeg",
  },
  {
    name: "Nami Trader",
    account: 110109824,
    description: "⚡",
    author: "Tuyết Minh Phạm",
    authorPhoto:
      "/st/media/pim/media/user_photo/5b/5b7/5b77c8263d4d25f2099a16a5fc428c61_f949990dc4b747a89925b9c798f42775.jpg",
  },
  {
    name: "Tuyetminhpro13",
    account: 110109825,
    description: "M",
    author: "Tuyết Minh Phạm",
    authorPhoto:
      "/st/media/pim/media/user_photo/5b/5b7/5b77c8263d4d25f2099a16a5fc428c61_f949990dc4b747a89925b9c798f42775.jpg",
  },
  {
    name: "PinnAlgo Capitals",
    account: 110109874,
    description:
      "Automated trading with the most lethal institutional trading algo in the market. \nMonthly profit target: 10 - 20% \nTelegramv👉 https://t.me/PinnAlgo",
    author: "EDIDIONG SAMUEL ESSIEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/c5/c59/c5929d199a149ac8c4baa2341b2fe1da_26dc95450f49497e95b8c5e0a8a36354.jpg",
  },
  {
    name: "Dragon Capital",
    account: 110109903,
    description:
      "Chào các nhà đầu tư đến với Dragon Capital, chiến lược của chúng tôi là chiến lược dài hạn nhằm tìm kiếm lợi nhuận đều đặn và ổn định. Good Luck",
    author: "HUNG VY NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a0/a0e/a0e59506b3c9b75cca3a70db57658883_6b4b923ec192447bb77df38af0ccc67f.jpg",
  },
  {
    name: "Dragon Sea",
    account: 110109907,
    description:
      "Chào các nhà đầu tư đến với Dragon Sea , chiến lược của chúng tôi là chiến lược dài hạn nhằm tìm kiếm lợi nhuận đều đặn và ổn định. Good Luck",
    author: "HUNG VY NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a0/a0e/a0e59506b3c9b75cca3a70db57658883_6b4b923ec192447bb77df38af0ccc67f.jpg",
  },
  {
    name: "To The Future",
    account: 110109936,
    description: "We are the best",
    author: "MR SAMAT WONGTIDA",
    authorPhoto:
      "/st/media/user_photo/e2/e24/e246dce822a80c2e763279dcf2154576_cca5a66b200948109f0c03b4c87bd4d9.JPG",
  },
  {
    name: "RAPID PROFIT",
    account: 110109968,
    description: "RAPID PROFIT",
    author: "ABDELWAHAB AHMED",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f89/f89bcdbe5d66c6455f720ff3387618c7_b09979cbdef448c383e4cce5bbbf7bf9.png",
  },
  {
    name: "Return home VICTORY",
    account: 110110193,
    description: "2% to 6% /month profit target\n#vmbw",
    author: "TRISIANA TANA",
    authorPhoto:
      "/st/media/pim/media/user_photo/61/614/614fc7cd9420d86bcd446a01e1571430_786aeba40b8f45d7a344e37c23ecd829.jpg",
  },
  {
    name: "Price Action Trading",
    account: 110110219,
    description:
      "Trading with Pure Price Action Trading methods , Using Pivot and Order Flow Analysis for finding trade opportunities on XAUUSD/GOLD,and EURUSD",
    author: "Balram Kashyap",
    authorPhoto:
      "/st/media/user_photo/66/663/663919aa4a8c87d49c65d20eb24dcda4_92da23dacd074ef6ac142a6c8b455fa6.jpeg",
  },
  {
    name: "Gold farmer",
    account: 110110221,
    description:
      "Everything takes time to grow up, but they will surely grow up.\nBe patient and have faith!",
    author: "HUU DIEP BUI",
    authorPhoto:
      "/st/media/pim/media/user_photo/0c/0c3/0c3017fc51d26efefef46ff6f5f98b71_9133f61ccbd64555996d82e285ed6467.jpg",
  },
  {
    name: "NimblyTrade",
    account: 110110267,
    description:
      "Strategy : Long term and risk control\nProfit Target : 5%/Month\nPortfolio : https://www.myfxbook.com/members/suteepanit/nimbly-trade/10666733",
    author: "Sutee Panitnawa",
    authorPhoto:
      "/st/media/pim/media/user_photo/ff/ffc/ffc78387dcfb943bf6937fe8a393f2c9_8750f48b0acd448e879a0f07a4a1e8a1.jpg",
  },
  {
    name: "Forex100crClub",
    account: 110110699,
    description: "welcome forex.....",
    author: "Anil  Bagal",
    authorPhoto:
      "/st/media/pim/media/user_photo/3b/3be/3be1b5e5fbed657a843e193115c3454e_0929ed0c16c941beb922107958c28a1e.jpeg",
  },
  {
    name: "Lotteries Risk",
    account: 110110739,
    description:
      "- Target 1.000.000 % .\r\n- Phá vỡ mọi Lý Thuyết Trading .\r\n- Lợi nhuận luôn kèm rủi ro . \r\nWebsite: scalpgold.pro \r\nGroup: https://t.me/ScalpGold_Group",
    author: "VAN CONG VO",
    authorPhoto:
      "/st/media/pim/media/user_photo/33/339/3398e97d802094555fd230c41bab6281_d58d57d169fc4ae0b016ded4ae83e411.jpg",
  },
  {
    name: "FXEuroMax_Scalping",
    account: 110110764,
    description:
      '"Before Thinking About making Money, Learn not to Loose money."',
    author: "Chandubhai Vataliya",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f81/f81c6dabb3b969cfa6bc31abb239f97d_d12492e4b7644b4f87d57edc3a69dd2d.jpg",
  },
  {
    name: "GoldSwing strategy",
    account: 110110803,
    description:
      "Unlock Your Financial Potential with Forex Market Mastery\n\nUse Link to new account \nhttps://one.exnesstrack.net/a/md9qkhaa23",
    author: "Sakhvala Gautam Raghavbhai",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f81/f81c6dabb3b969cfa6bc31abb239f97d_828b2a249c60410092c42b6d7e2b8d0c.jpg",
  },
  {
    name: "A long stream of wat",
    account: 110110917,
    description: "A long stream of wat",
    author: "Xuezhen Gong",
    authorPhoto: null,
  },
  {
    name: "yearly target",
    account: 110111056,
    description:
      "is this real?\njust my personal ea i have devoloped and tested for months.\nhope it would get me (and you?) some bread longterm\n- fly safe my only son -",
    author: "Kim Anh Vũ Trần",
    authorPhoto:
      "/st/media/user_photo/a7/a77/a77ef896c0c6f98840d025b2a06aa40c_b0e3b79ba82b4e54948792f5e99456e9.png",
  },
  {
    name: "NICE TO MEET YOU",
    account: 110111106,
    description:
      "NICE TO MEET YOU  The safe trade that will make you will stay forever with NICE TO MEET YOU",
    author: "KAREEM KHAIRY",
    authorPhoto:
      "/st/media/pim/media/user_photo/03/03f/03f81549c0b2fcb741a556c42b264718_39f9d373db134f2b9db629868942e9d6.jpg",
  },
  {
    name: "Sea Lion",
    account: 110111132,
    description:
      "Chào các nhà đầu tư đến với Sea Lion , chiến lược của chúng tôi là chiến lược dài hạn nhằm tìm kiếm lợi nhuận đều đặn và ổn định. Good Luck",
    author: "HUNG VY NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a0/a0e/a0e59506b3c9b75cca3a70db57658883_6b4b923ec192447bb77df38af0ccc67f.jpg",
  },
  {
    name: "Sea Tiger",
    account: 110111136,
    description:
      "Chào các nhà đầu tư đến với Sea Tiger , chiến lược của chúng tôi là chiến lược dài hạn nhằm tìm kiếm lợi nhuận đều đặn và ổn định. Good Luck",
    author: "HUNG VY NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a0/a0e/a0e59506b3c9b75cca3a70db57658883_6b4b923ec192447bb77df38af0ccc67f.jpg",
  },
  {
    name: "NICE TO MEET YOU",
    account: 110111150,
    description:
      "NICE TO MEET YOU  The safe trade that will make you will stay forever with NICE TO MEET YOU",
    author: "KAREEM KHAIRY",
    authorPhoto:
      "/st/media/pim/media/user_photo/03/03f/03f81549c0b2fcb741a556c42b264718_39f9d373db134f2b9db629868942e9d6.jpg",
  },
  {
    name: "TRADEMATCH",
    account: 110111307,
    description: "Scalper + trading algorítmico",
    author: "Daniela  Cristina Mejia Desousa",
    authorPhoto:
      "/st/media/pim/media/user_photo/e0/e04/e046b8176da4bc61d446da55e61ee21c_92befe5ff11341d7bf4fa8a448f535d8.png",
  },
  {
    name: "Ghost in the Machine",
    account: 110111395,
    description:
      "My Strategy uses hedging to cut the losses and generate profits.",
    author: "Muhammad Arslan Wazir",
    authorPhoto:
      "/st/media/pim/media/user_photo/96/968/96800e7fa146cc1d35bd493e04737082_4cd6df051a154f20b858d762298702b8.png",
  },
  {
    name: "EuroMASTER SAFETRADE",
    account: 110111412,
    description:
      "Trading focus only 1 pair EURUSD \nMonthly profit target around : 10% - 12%\nI will try my best to keep your money grow 🙏\n\n\nLet's profit together $$$",
    author: "APRIYANDI",
    authorPhoto:
      "/st/media/pim/media/user_photo/ca/ca9/ca99301b75c17e82f742eb3da42f2b11_093c720f0c9b4fd5b1c8a1aa217329a4.jpg",
  },
  {
    name: "VinBotGold",
    account: 110111434,
    description:
      "TÍCH TIỂU THÀNH ĐẠI\n1. Mục tiêu 1% / ngày. \n2. Trade phiên Á và Âu. \n3. Không giữ lệnh qua đêm, qua tuần\n4. Không gồng lệnh,  đủ chỉ tiêu là nghỉ",
    author: "CAO TRÍ ĐỖ",
    authorPhoto:
      "/st/media/pim/media/user_photo/8c/8c9/8c9b4033108770da24c7c91c88c42e49_864412cd26f64f7facb150043aeed633.jpg",
  },
  {
    name: "xiaowei6a08",
    account: 110111457,
    description: "我的追求：稳定盈利，永在战场",
    author: "炜 潘",
    authorPhoto:
      "/st/media/pim/media/user_photo/63/637/637642acd7629c26e477601d50e913bb_acb76fbd0b814e14b4cdc6f8614467ee.jpg",
  },
  {
    name: "Start 2000 - 1000USD",
    account: 110111459,
    description: "Cứ. Từ từ",
    author: "XUAN DAT VUONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/ff/ff4/ff4be2a88fe78b45dc0bd2084499592c_6f5dfbff028c49e18b5958fa224ea82b.jpg",
  },
  {
    name: "Fast-stable rise",
    account: 110111485,
    description: "up up up",
    author: "Sheng Lu",
    authorPhoto:
      "/st/media/user_photo/d9/d93/d935f37ccd8171019a5c3e0363161951_b74d3506afbd4f44a3658cc82452dccf.jpg",
  },
  {
    name: "AB Investment",
    account: 110111534,
    description: "Better with minimum deposit $1000 Pro or RAW",
    author: "NOVIANTO ZULKARNAIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/38/389/3895814714a1a9aec85b9718855bb44d_b77f9f50130d4d899a32d3066a71d83f.jpg",
  },
  {
    name: "MONEY TRADING 1",
    account: 110111642,
    description: "Auto get money everyday",
    author: "LY LÊ THỊ",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1a8/1a8b8b84934c5259f9daaeddb04cc523_2f4ef1e3f8d34305965662b381a2f127.png",
  },
  {
    name: "5 star trader",
    account: 110111664,
    description: "Minimum 5 to 10 % profit pr month",
    author: "SYED TAZEEM UL",
    authorPhoto:
      "/st/media/pim/media/user_photo/92/920/9205c8aad43db15e8f1e4eb53cd0b4db_50f365d67b3746ee9823c395c71f2d38_5xnnIuZ.jpg",
  },
  {
    name: "Empire Market",
    account: 110111719,
    description:
      "Forex copy trading lets you automatically copy the trades of experienced traders. It can yield returns of 4% to 10% or higher but it also carries risk",
    author: "RAJESH KUSHWAHA",
    authorPhoto:
      "/st/media/pim/media/user_photo/b3/b37/b37422876ec89fa2aa00b35ba1c4a2ef_484aaa92cddc45f5920d422a2ebbf709.jpg",
  },
  {
    name: "套利对冲基金投资策略",
    account: 110111813,
    description:
      "月投资回报10%～30%，能及时止损！非常成熟的投资策划，利润大于止损！",
    author: "润聪 刘",
    authorPhoto:
      "/st/media/pim/media/user_photo/a1/a18/a18a77910543d9ac1c9d3b6a808ab987_14940613d82141aa97c816b348e155f8.jpg",
  },
  {
    name: "Nobita Trading 2",
    account: 110111814,
    description:
      "- Stable and long-term profit / Lợi nhuận ổn định và lâu dài.\n- Extremely low risk ratio / Tỉ lệ rủi ro thấp.\n\nWellcome !",
    author: "Tráng Nguyễn Công",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b9e/b9eca139a04971bcfaa3b204916c44d1_d621491e7d91446192c26d7e01d3147e.jpeg",
  },
  {
    name: "AZ Trading 05",
    account: 110111833,
    description: "Welcome to my trading strategy. Thank you for your trust.",
    author: "Thang Phung Trieu",
    authorPhoto:
      "/st/media/pim/media/user_photo/dc/dc4/dc43ce41c8fa3058ca78f1240e52ec27_5b33be120db34213bc50102ffc7e4503.jpg",
  },
  {
    name: "The Guardian one",
    account: 110111942,
    description:
      "The trading system is designed to capture market movements, market volatility, and manage risk based on the market's movement magnitude.",
    author: "WANTHANA RASEETHAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/fe/feb/febe778091340f2578fef737f20eddaa_9e59d5ff38ff4405b0f30d1c1ceae63b.png",
  },
  {
    name: "Triple Harmony",
    account: 110112050,
    description:
      "My strategy uses the correlation method on 3 currency pairs. Monthly target is around 5-15% with a maximum floating loss of 100% each time",
    author: "TRIVENA RAU",
    authorPhoto:
      "/st/media/user_photo/8c/8c8/8c8213f4767eddb5d998246bd2dae8ce_17fa51988ffc4a1cbdff8dcdedbb291f.jpg",
  },
  {
    name: "Young Cai Shen",
    account: 110112075,
    description: "A man plans. The heaven decides the outcome",
    author: "NATCHAPOL KLINSRISUK",
    authorPhoto:
      "/st/media/pim/media/user_photo/08/08d/08d49f7635a4dbe2d5998cd9fd43b935_ed307466eeac45e4b4c67054b9645215_T4B4R0U.png",
  },
  {
    name: "Download Profits",
    account: 110112121,
    description:
      "Target profit from July onwards: 20% to 30%!\nJoin 👉 https://t.me/HaiAuCapital",
    author: "ANH TUAN NGO",
    authorPhoto:
      "/st/media/pim/media/user_photo/59/59b/59b91012c84e8ffdddb68b12bc8c42df_1b5faab8e7b34c7b8d746a4c31aa3945.jpg",
  },
  {
    name: "forex killer",
    account: 110112125,
    description: "Trading expert",
    author: "محمد سعدي خليفة عبدلله",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/62b/62b64f0009855e3e8c3fcbad67b31131_1952703c48d84a5d985b81f590835a16.jpg",
  },
  {
    name: "LOVE STORY",
    account: 110112184,
    description:
      "Tạo ra 1 chiến lược đầu tư thông thái\nGiúp các nhà đầu tư không có nhiều thời gian tìm hiểu \n- thông tin liên hệ Zalo : 0862502829\nXin cảm ơn 🖤",
    author: "Nhất Trần",
    authorPhoto:
      "/st/media/pim/media/user_photo/bf/bfa/bfa71b9b49797b6ace6243085b5070e8_e453b18f906540d1814212e4776dcd27.jpeg",
  },
  {
    name: "DRK-TRADING-NGUYÊNXU",
    account: 110112278,
    description:
      "* Phương Pháp Giao Dịch Dựa Theo Nguyên Lý Phân Tích Kỹ Thuật : Xu Hướng - Biên Độ - Sóng - Chu Kỳ.\n*Gồm\n- Chiến Lược Scalping\n- Chiến Lược DayTrading",
    author: "TRONG NGUYEN NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/23/23d/23d002436403c2e3a526bac69d47c55c_c0ac17271da942148aa567286d42f707_vYzqS4O.jpg",
  },
  {
    name: "Is meeeeeeee",
    account: 110112295,
    description: "Money with trading",
    author: "MISS NAWARAT KAMAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/d3/d37/d371f01aa3cdb9aa785a75ff1946d5f8_3b00e21331114b3c81f2689e80a27383.jpeg",
  },
  {
    name: "TRADER VIET",
    account: 110112357,
    description: "Tôi thắng bạn thắng",
    author: "Long Trần Quốc",
    authorPhoto:
      "/st/media/pim/media/user_photo/f3/f37/f3741cb36be60519329ab6e15f3710c8_26708ecceb4a43f181e4772ef93067c3.jfif",
  },
  {
    name: "Keng Veerapong",
    account: 110112430,
    description: "กำลังพยายามแก้ไขให้พอร์ตกลับมาเป็นบวก ขอเวลาหน่อยนะครับ",
    author: "Veerapong Mukkanchanasres",
    authorPhoto:
      "/st/media/pim/media/user_photo/b5/b55/b551c44ff7915667e0ae3e1c0616b0c8_ff34bfabb0824e898e90e2fe2dbad1fd.jpg",
  },
  {
    name: "Trade Calmly",
    account: 110112662,
    description:
      "I have 14 years of experience in trading. I am trading with exness since 2011. I belive in my traded and know what i m doing.",
    author: "Nitendra Singh",
    authorPhoto:
      "/st/media/pim/media/user_photo/b8/b8d/b8df230372b6f9edb2699bf5de757861_ec9562381783442abacd226793d5f8e3.jpg",
  },
  {
    name: "Robot Master Trading",
    account: 110112762,
    description:
      "Join us by copying and earn with minimum risk and high reward ratio. we are focused on safe trading opertunities based on our risk management plans.",
    author: "Inzamam ul haq",
    authorPhoto:
      "/st/media/pim/media/user_photo/39/391/39120d5f9cc4dc303c8a3c3db9ff7f90_59468f77bb684ec8942366ee43943422.jpg",
  },
  {
    name: "GO Long and High",
    account: 110112769,
    description:
      "All about the core of trade.\n一切源于交易核心与市场波动原理。",
    author: "Xiaojing Zhu",
    authorPhoto:
      "/st/media/pim/media/user_photo/7b/7b2/7b24b3bb3f5a2535d95a4fd9fa100359_86d598f30572420eafe2ca065c3af7c7.png",
  },
  {
    name: "Gió Trading",
    account: 110112777,
    description: "Lợi nhuận đi kèm sự an toàn, rủi ro thấp cho NĐT.",
    author: "Như Nguyễn Thành",
    authorPhoto:
      "/st/media/pim/media/user_photo/cc/cc7/cc78e35922a8bb838a7f084973de044b_56ea78ba06014d999aa33b05573629e8.jpg",
  },
  {
    name: "INNOVATORS",
    account: 110112857,
    description:
      "This is an unique strategy filtered & mechanized after expending 10 years of hard analysis. It will innovate about 200% growth in 60-90 days.",
    author: "Nirmala Singh",
    authorPhoto:
      "/st/media/pim/media/user_photo/32/32f/32fbe696832db23ca2d26341a8cbf7b4_e3be21498cdc4b21b355b463240a222d.JPG",
  },
  {
    name: "THAM DO CHOT",
    account: 110112859,
    description: "1234567890",
    author: "Tham Nguyen Thi",
    authorPhoto:
      "/st/media/pim/media/user_photo/83/83b/83bc29f8355a7fc829840d42a4e67f62_7b0810a113e740108411a6e57b253da3.jpeg",
  },
  {
    name: "Simple Trader",
    account: 110112866,
    description: "Minimum 1,000$.\nThe risk is the same as the master.",
    author: "MR AMNART MONTHAWEEPHAISAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/26/261/26179441ca97defea3c3d5badbf9fdcd_1776483cd24a482096498cb82054a850.jpg",
  },
  {
    name: "Toan Gold1",
    account: 110112890,
    description:
      "Tôi có trên 6 năm giao dịch Vàng, đủ kinh nghiệm để mang lại lợi nhuận bền vững cho nhà đầu tư.",
    author: "ĐÀO TOÀN",
    authorPhoto:
      "/st/media/pim/media/user_photo/06/062/062e8f7c194bd87083b7d3260bfccde8_c7ec040f001d4caea4ef41efca024e2e.jpeg",
  },
  {
    name: "Ai Robot Trading",
    account: 110112972,
    description:
      "High-performance 24/7 trading system for Gold and Global Currencies. You can happily use it as an investment and savings.",
    author: "MR SIRIRAJ CHU UMNART",
    authorPhoto:
      "/st/media/user_photo/01/015/015a36e8e02963b0427738d5420b43b7_30948a4717724420a24a87118b099d28.jpg",
  },
  {
    name: "Mycia Ultima",
    account: 110113043,
    description:
      "Non stop trading (24 hours) at pair non xau. \nTrading using EA that has already passed many obstacles.\nJoin with our community: t.me/eaforexforliving",
    author: "Tommy Dharmaji",
    authorPhoto:
      "/st/media/pim/media/user_photo/e8/e8b/e8bcd914f7625757bfd7f21dd2f10b41_cc12bfb8674f429e91a20db200488c30.jpg",
  },
  {
    name: "Money Trading 2",
    account: 110113085,
    description: "Auto get money",
    author: "LY LÊ THỊ",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1a8/1a8b8b84934c5259f9daaeddb04cc523_2f4ef1e3f8d34305965662b381a2f127.png",
  },
  {
    name: "Gold by Fat Cat",
    account: 110113118,
    description: "with high profit",
    author: "minh tran",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f5f/f5fbf70fda30ab29ce99df299ae55173_afb75c65c4c445b0ad9bbd0e8e5fead9.png",
  },
  {
    name: "GOLD TRADER",
    account: 110113175,
    description: "Monthly Target is Around 20%-40%",
    author: "SHASHI BALA",
    authorPhoto:
      "/st/media/pim/media/user_photo/66/66e/66eaec3375fa965f184fe80c0246235c_1b99ecaf45d742bf887f5b58b5f3e141.jpg",
  },
  {
    name: "iVictory Smart EA",
    account: 110113220,
    description:
      "Comes with a better trading concept with an open position mechanism after a pair has gone up/down to a certain distance",
    author: "VINCENT SJAKLIF",
    authorPhoto:
      "/st/media/pim/media/user_photo/a8/a84/a84b880413fdb473de5d0e6e3d56097a_a458e29028ee455e952244cd1c581414.jpg",
  },
  {
    name: "Con Đường Triệu Đô",
    account: 110113322,
    description: "Social Trading Free",
    author: "THI THUY VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/ae6/ae624c102c791d44a0582f94e9d86159_d7a8846628f94b229a9e7b89d3d03367.png",
  },
  {
    name: "Long Term EA",
    account: 110113364,
    description:
      "Reversal based strategy with grid. News filter implement to reduce risks.",
    author: "WORRWICH WONGKUAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/72/72c/72cca6fe16eeed5457c3f274d0320ac5_2bafb7ce1c8947c1821c232303751249.png",
  },
  {
    name: "Quantitative strate",
    account: 110113368,
    description:
      "Quantitative strategy, monthly returns of 8-16%, with a minimum of $2000.",
    author: "静 韩",
    authorPhoto:
      "/st/media/pim/media/user_photo/c4/c44/c44a4241515a2e7d0dde7f3815e6bb11_805edd99851643159ca11a9977a5b03f.jpeg",
  },
  {
    name: "TRADER PRO 2",
    account: 110113369,
    description: "Cảm ơn bạn đã luôn tin tưởng và đồng hành cùng chúng tôi!",
    author: "Thúy Hằng Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/aee/aee4b36adcbd32b61b74556037641246_8b7102f1f8844d2ba340eb10d1aed7dd.png",
  },
  {
    name: "Market Tamer",
    account: 110113461,
    description:
      "Best entry position and risk management.\n\nTarget monthly profit 15-20%",
    author: "ANDREAS LUKITA",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e2c/e2c6b123dbbeafbc8f64ad41d4d807e3_1b439655564e4a32bec4879309a7c215.png",
  },
  {
    name: "Frank Trading Team",
    account: 110113552,
    description:
      "- Monthly profit target 10-15%\n- No EA\n- No indicator\n- Only candlestick and volumes",
    author: "Hoán Phạm Xuân",
    authorPhoto:
      "/st/media/pim/media/user_photo/83/834/8345548df2545f5ba25e0c19f6d2c9bf_f6eb2cb77eba4ac68ed44112d1df71df.png",
  },
  {
    name: "AJ Forex Strategy",
    account: 110113580,
    description: "Following mainly in Forex ( Currencies)",
    author: "Shahana  Anas",
    authorPhoto:
      "/st/media/pim/media/user_photo/22/225/2257c34ac169803d5ac5f59dba43038d_2ca4b63840664d52bca6b56daddc04b4.png",
  },
  {
    name: "Pip Navigator - B",
    account: 110113607,
    description: ".",
    author: "حسين حمزاوي",
    authorPhoto:
      "/st/media/pim/media/user_photo/4d/4d1/4d1ad17e650462628f334e3315352565_8ae9a1cf46b143e18e0ffe1a4e1ef2b3.jpg",
  },
  {
    name: "VR Successful",
    account: 110113635,
    description: "We stay in with the rules & discipline. Always be positive.",
    author: "TEJASH CHANGELA",
    authorPhoto:
      "/st/media/pim/media/user_photo/d6/d62/d623979cac1e422bbe96cf3217bd222b_51c8574618f1435bbfa3baff8f580fdc.jpg",
  },
  {
    name: "Hedge Strategy",
    account: 110113644,
    description: "Min 2 K. Can have floating position for long period.",
    author: "WORRWICH WONGKUAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/72/72c/72cca6fe16eeed5457c3f274d0320ac5_2bafb7ce1c8947c1821c232303751249.png",
  },
  {
    name: "WealthyMamy01",
    account: 110113749,
    description: "Wealthy Mamy",
    author: "ATCHARAPORN NEDSAWANG",
    authorPhoto: null,
  },
  {
    name: "k4 News Trader",
    account: 110113840,
    description: "Trader News",
    author: "Maicon Lazier Reichel",
    authorPhoto:
      "/st/media/pim/media/user_photo/01/01e/01ea29d31871aaad68f311cde823f398_da6acdfdb873476aab9713b556632a56.jpeg",
  },
  {
    name: "k4 Banking",
    account: 110113841,
    description: "GBPUSD Only",
    author: "Maicon Lazier Reichel",
    authorPhoto:
      "/st/media/pim/media/user_photo/01/01e/01ea29d31871aaad68f311cde823f398_da6acdfdb873476aab9713b556632a56.jpeg",
  },
  {
    name: "SUPER GRID WINNER",
    account: 110113986,
    description:
      "Strategy based on gradient growth with accumulation of gains and optimized risk management.",
    author: "Denis Renato Vargem Zanon",
    authorPhoto:
      "/st/media/pim/media/user_photo/41/414/4149931cd20b6de1f551818a93fb82a7_40826dc55f134da69dff328bb44552a8.png",
  },
  {
    name: "MONEY HEIST",
    account: 110114042,
    description:
      "Simple Profitable Method\nTested 6Months bfr Launch at SocTrade.\nNow its already 12 Months Portfolio\nProfit Target is 10-15% monthly.\nJoin us\nThnk you",
    author: "WUIJONO TEH",
    authorPhoto:
      "/st/media/user_photo/10/109/109e1985c56bec2dacc10b57d8128c5e_4cf7403950ba4b1981ea0b5f93de909f.jpg",
  },
  {
    name: "Bounty Harvest",
    account: 110114103,
    description: "Target 3% to 9% monthly profit.",
    author: "TRISIANA TANA",
    authorPhoto:
      "/st/media/pim/media/user_photo/61/614/614fc7cd9420d86bcd446a01e1571430_786aeba40b8f45d7a344e37c23ecd829.jpg",
  },
  {
    name: "Nasim Fx copy trade",
    account: 110114180,
    description:
      "Supercharge your forex trading with Nasim FX Copy Trade! Gain an unfair advantage by tapping into the strategies of top-performing traders. Our cuttin",
    author: "Nahid  Hossain  Nasim",
    authorPhoto:
      "/st/media/pim/media/user_photo/fb/fbf/fbf1dbbe80b8f516314aca9f85dcbfc5_e4b2058a6b154cca98f06ccc59d3d8c3.jpeg",
  },
  {
    name: "Sanjari Fx",
    account: 110114196,
    description:
      "Target at 2-5% per day, Stop loss at 50%. Especially, we have profit compounding lot percent, Have fun! \nTarget 🎯 to Gooooooooooold 🥇",
    author: "Haider Ali",
    authorPhoto:
      "/st/media/pim/media/user_photo/87/877/877ed6ed10dac3cb0dc1f50f2d91c3cb_970784519eed4e63b85cab4f56330c94.jpg",
  },
  {
    name: "QuantumFX Strategy",
    account: 110114209,
    description:
      "Quantum FX EA - Custom EA. Checkout the track record :) \nGrowing account @ a target of 20-25% monthly  - EUR, USD, GBP, XAU\nhttps://t.me/quantumfxTm",
    author: "SHAMITHA WIDANAPATHIRANA",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/601/6013b2c113498e844af6be0e0dd691d2_96877ff252004d39872e5f53c35351ca.png",
  },
  {
    name: "Funtactic Forex",
    account: 110114234,
    description:
      "No trading strategy is complete without proper risk management. The 5-3-1 rule encourages traders to limit their risk by only trading five currency",
    author: "NG DAVID WIJAYA",
    authorPhoto:
      "/st/media/user_photo/be/bef/bef654654feb37b1c0e801255e1565ca_9848d7bd0a3642b691409a857729d9e0.jpeg",
  },
  {
    name: "Super Money Forex",
    account: 110114311,
    description: "I use more than 3 indicator for easy profit by scalping.",
    author: "radheshyam jat",
    authorPhoto:
      "/st/media/pim/media/user_photo/87/871/8710f8b571bbd53864a40a8a6473e9e2_0264c06ae2664314a2f0c0e9368ba612.jpg",
  },
  {
    name: "Smart Trader",
    account: 110114384,
    description:
      "All Trade Execution according to Money management .All risk on capital 1%/1Trade\nTrading Plan: Smart Money Concept ,HTF liquidity Sweep and Sessional",
    author: "Muhammad Shakeel",
    authorPhoto:
      "/st/media/pim/media/user_photo/2b/2be/2be390406469c6baace82345919de39a_2e3c10f56a1e49c69adec116764b19c4.jpg",
  },
  {
    name: "AulakhTrades",
    account: 110114540,
    description:
      "Hii Everyone, You are welcome to copy my trades and make free money :)",
    author: "PARMINDER BANGA",
    authorPhoto: null,
  },
  {
    name: "FOREX TIME",
    account: 110114641,
    description:
      "FOREX TIME its a very unique system make trade in the right time with high profit and low risk WHATS CHAT http://chat.existtrade.com",
    author: "HODA AHMED",
    authorPhoto:
      "/st/media/user_photo/f3/f35/f3562663cb881d1b0eb23709459be745_eb113685eb644c34b8f1340e0e8edea5.jpg",
  },
  {
    name: "TWZ Golden Strategy",
    account: 110114914,
    description:
      "We do only Trade In Major Currency pair EUR/USD, that is the Trending strategy and per month more then a 10% easily we are making.",
    author: "Zafar Iqbal",
    authorPhoto:
      "/st/media/pim/media/user_photo/63/635/635a70b5d30e49a7f0633a4c7f3513f1_1c35f709f7d54bb3a97ae190c1a3fe21.jpeg",
  },
  {
    name: "LƯỚT SÓNG-SCALPING",
    account: 110114924,
    description: "Chiến lược Scalping.\nChiến lược Day trading.",
    author: "LÊ HƯƠNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/76/764/76412b3e877d31d67042aef9797d61a8_6da325906e044d8a86e4f99ae880e168.jpg",
  },
  {
    name: "FAST TRADE",
    account: 110115026,
    description: "FAST TRADE",
    author: "MERSAL MOHAMED",
    authorPhoto:
      "/st/media/pim/media/user_photo/d1/d16/d1651172a7b2f603a3810dab29922151_1eecc4387d9d4c31bbbb7ff7bc715823.png",
  },
  {
    name: "PipsHarvest Method",
    account: 110115416,
    description:
      "The PipsHarvest Method is a precise and disciplined trading strategy designed to systematically generate profits in the Forex market.",
    author: "GIA LOC HO",
    authorPhoto:
      "/st/media/pim/media/user_photo/6c/6c8/6c87542cb207e55ed423730b40475a51_a3c531bcd89b4ff9b3f3ba1994ad07f0.jpg",
  },
  {
    name: "HitprofitsEA",
    account: 110115643,
    description:
      "Safe and profitable strategy for 3 years now you can join us with Exness",
    author: "Ahmed Hassan",
    authorPhoto:
      "/st/media/pim/media/user_photo/8c/8c6/8c61ef898a7aecc5a04e82e48892cd4c_a50a580cd51246eda0562c78df7af0df.jpg",
  },
  {
    name: "Volume-Fundamentals",
    account: 110115945,
    description: "Based on Banks divergence with confirmation from Volume",
    author: "Ghulam Abbas",
    authorPhoto: null,
  },
  {
    name: "WIN TRADE 2",
    account: 110116229,
    description:
      "WIN TRADE was the result of meticulous analysis, strategic decision-making, risk management, and seizing profitable opportunities efficiently",
    author: "HAISAM TAHA",
    authorPhoto:
      "/st/media/pim/media/user_photo/1e/1e5/1e5f1107f97a6a516b1b5906eee3d709_ba2211b2e190440eaabe7ccee4792a4d.jpg",
  },
  {
    name: "Kk capital",
    account: 110116687,
    description:
      "I have experience in trading. Your capital is safe with us.\nJoin link\nhttps://whatsapp.com/channel/0029VaCRlwN5kg6zzT6gfT1Q",
    author: "UMAR HAYAT",
    authorPhoto: null,
  },
  {
    name: "ONE TOUCH AI TRADE",
    account: 110116873,
    description:
      "Kindly 12 times  irenvest my copy trading subscribe link, you will get 240000 USD thank you",
    author: "SENTHIL",
    authorPhoto:
      "/st/media/pim/media/user_photo/25/25f/25fd3b853c570638b7e30d83ca8b2136_ef6135d782774e21966a6669322f9b81.jpeg",
  },
  {
    name: "ROBO_360_AI",
    account: 110116875,
    description:
      "ROBO_360_AI is customized to work profitably in all market conditions.",
    author: "HEMASUNDARARAO AMBALLA",
    authorPhoto:
      "/st/media/pim/media/user_photo/08/086/086169b6fa4612d6ed26bf2d19a66b0d_47822d26a0114e969fe4bbe12d30a0c8.jpg",
  },
  {
    name: "Move to 100k usd",
    account: 110116986,
    description: "Risk ~ 2%/trade.",
    author: "Van Nhu Tran",
    authorPhoto:
      "/st/media/pim/media/user_photo/3e/3e7/3e7246d4297c4213bb6b0d5ce952cf5d_9933884686864267ab5c589a41a25136.jpg",
  },
  {
    name: "Pailon FX",
    account: 110116996,
    description: "Trade with security and honesty",
    author: "ERIC MASHURI",
    authorPhoto:
      "/st/media/pim/media/user_photo/73/73d/73d28f794d33362d3158f6817b2559f2_a08069c1061c48e8af02c58a2ff06d99.jpg",
  },
  {
    name: "Happy Trade",
    account: 110117015,
    description: "The strategy I use is safety first.",
    author: "Rapeepong Morakul",
    authorPhoto:
      "/st/media/pim/media/user_photo/53/534/534b8f9b6d75e9291e229718dd15c0aa_9fb78dd2c1e4466db8f648f49581a7e0.jpg",
  },
  {
    name: "PB TRADING ACADEMY",
    account: 110117024,
    description:
      "Our Mission is to provide a SAFE, PROFITABLE & HASSLE FREE Trading Experience to all our Copiers. Lets grow together…",
    author: "Gurdeep Singh",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b96/b963539b1b79e0f87dcdc177545ee8aa_b7707568739b4ea7ab9dda91b62c96a9.JPG",
  },
  {
    name: "NGUYEN VAN THU",
    account: 110117446,
    description: "Đem lại sự phồn vinh cho các nhà đầu tư",
    author: "Thu Nguyễn Văn",
    authorPhoto:
      "/st/media/user_photo/c8/c88/c8895d4ab7a55300b42df89a34af35da_82660b06f6eb4958848368190d21cf3a.jpg",
  },
  {
    name: "FX SAMURAI",
    account: 110117793,
    description:
      "Trend follower with a stochastic filter, We trade AUDCAD, AUDNZD, NZDCAD, EURUSD & USDCAD and EA avoids high impact news",
    author: "SOVIA",
    authorPhoto:
      "/st/media/pim/media/user_photo/d7/d75/d7573610300ffee39d9be15a86af655c_745a65fccbe84375b454be1d9b00de84.jpg",
  },
  {
    name: "Simple Safe Fx 2",
    account: 110117795,
    description: "I trade 6 major fx pairs and golds",
    author: "THI THU TRANG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/ec/ec2/ec2ef8b3944df76f8f2ccccc7af1ef29_adad9f1341c347e08f25700a85060642.jpg",
  },
  {
    name: "Profit 5 Currency",
    account: 110117871,
    description: "Target at 40-90% per month. Have fun!",
    author: "Kittiwat Trongsujaritsin",
    authorPhoto:
      "/st/media/pim/media/user_photo/4f/4f4/4f4ab61847ae7677ea064dbcfdb0b6e8_3654729aa24a4205a6c40fa4f683305e.jpg",
  },
  {
    name: "MONEY TRADING 3",
    account: 110117893,
    description: "GET MONEY EVEDAY",
    author: "LY LÊ THỊ",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1a8/1a8b8b84934c5259f9daaeddb04cc523_2f4ef1e3f8d34305965662b381a2f127.png",
  },
  {
    name: "SAFE NO RISKY",
    account: 110117900,
    description:
      "SAFE NO RISKY  using risk management strategies, setting stop-loss orders, diversifying investments, and staying informed to protect capital",
    author: "HITHAM ELMARABY",
    authorPhoto:
      "/st/media/pim/media/user_photo/cc/cc6/cc6bced682b7e0fa85bd2146f115e788_4592f0200e6f4ee0a52b7252c2e44881.jpg",
  },
  {
    name: "Silver Machine",
    account: 110118090,
    description: "Hedging Machine",
    author: "TERAPOL SOONPONRAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/1e/1ee/1eeaf0c3fd1f0041505b4b9c5883239c_611e06e1a66040bba3df8a627d3a959d.jpeg",
  },
  {
    name: "Manote Trader",
    account: 110118091,
    description: "ปลาใหญ่กินปลาเล็ก",
    author: "Manote Homjai",
    authorPhoto:
      "/st/media/pim/media/user_photo/16/16f/16fbff19fecfa70bf594db196e816625_3814b82ab49b464a9f737f0b19cace01.jpg",
  },
  {
    name: "Gold_Hunter",
    account: 110118111,
    description: "We trade XAU/USD",
    author: "Abdul Khaliq",
    authorPhoto: null,
  },
  {
    name: "Cubes Gold Reaper",
    account: 110118259,
    description: "This strategies using Nesco EA All strategies ultimate",
    author: "DANIEL CHRISTANTO",
    authorPhoto: null,
  },
  {
    name: "HCK Trading",
    account: 110118279,
    description:
      "- Mục tiêu : 8-20% một tháng \n- Swing trading nên mọi người hãy kiên nhẫn chờ đợi \n- Giao dịch an toàn , bảo toàn vốn cho nhà đầu tư 🦈",
    author: "Nguyễn  Thế Trưởng",
    authorPhoto:
      "/st/media/pim/media/user_photo/b2/b2c/b2c6f76d9eec965ecb0ceca2e0cfd9b9_c024e2b3f809468bae9d7c5cc7e186f7.jpeg",
  },
  {
    name: "Higher Gain",
    account: 110118306,
    description:
      "Trader With 8+ years of experience in Forex. 1. Protect Capital and Profit will come naturally.  Monthly target 5-10%..Enjoy Trading...",
    author: "Shobhaben Dhapa",
    authorPhoto:
      "/st/media/user_photo/bd/bd2/bd252b0076b694326b474085e1890078_ec1dd4bc907b4f5aae19f4e97501856e.jpeg",
  },
  {
    name: "Dragon Funds",
    account: 110118377,
    description: "Low risk and high profit",
    author: "Vu Duc Hieu",
    authorPhoto:
      "/st/media/user_photo/a5/a56/a56248b62d6edc4e9d4fc9a979184295_1069818aaec74e5d872ecbff985f2e45.jpg",
  },
  {
    name: "BACK TO FUTURE",
    account: 110118461,
    description:
      "BACK TO FUTURE uses time travel for currencies, predicting future values based on past trends, enabling profit from fluctuating exchange rates",
    author: "ANWAR ABDGAFAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee1/ee11babb58fa8ccba23a1fd6a5af150a_2746dd0c52ae46dea489a9ca46c3f9f2.jpg",
  },
  {
    name: "Forex Safe 10",
    account: 110118560,
    description:
      "- We r pushing the profit of maximum 10-20% per month\n- Low risk and Safe to invest",
    author: "Siva Raman",
    authorPhoto:
      "/st/media/user_photo/b2/b2e/b2e2dc58175d91d1dedd0b67865b0d38_1968affc653547b09054e1e61ab98ee7.jpg",
  },
  {
    name: "LEGION Adiutrix",
    account: 110118754,
    description:
      '"LEGION Adiutrix" combina análisis cuantitativos y el seguimiento de traders institucionales para identificar tendencias y estructuras en Forex.',
    author: "Leiton Gabriel Ruiz Joza",
    authorPhoto:
      "/st/media/pim/media/user_photo/d1/d1b/d1b124b1c2c1db38c45ea06db0f4dd5b_df76ecefdc214595ba205a235d7c5015.png",
  },
  {
    name: "EU-LNT-boil",
    account: 110118818,
    description: "Only EU",
    author: "Linh Nguyễn Tuấn",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/45f/45f4aa7c8e399002a5cc0c391670fca6_9dd894c1fcbe4a56a5198a9144bf0f5b.png",
  },
  {
    name: "TAKE PROFIT",
    account: 110118891,
    description: "TAKE PROFIT",
    author: "MD FARUQUE",
    authorPhoto:
      "/st/media/pim/media/user_photo/8c/8c7/8c745147b7e25cb4432812549a91a7ac_0faecf9cfc9347e0a470997dfa95ee60.jpg",
  },
  {
    name: "LOOPER",
    account: 110118909,
    description:
      "LOOPER uses automated strategies to profit from market cycles by opening and closing trades repeatedly, maximizing potential gains in forex trading.",
    author: "FATMA ELSEYD",
    authorPhoto:
      "/st/media/pim/media/user_photo/fc/fc8/fc81b0caf529336e1c386e8c12a4e50e_cb57329970e94c8ab0ec4267aaf4ba28.jpg",
  },
  {
    name: "Gold RSIX Master 1",
    account: 110119192,
    description: "x",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/df/dfc/dfcc39e6d697fbb1d8529603559279ad_f9fb10bc729a4546945ce831ff3475c5.jpg",
  },
  {
    name: "EURUSD TRADER",
    account: 110119256,
    description:
      "EURUSD TRADER Committed to ensuring safety in every EURUSD Prioritizing trust, security, and reliability for prosperous and risk-free transactions.",
    author: "Alsid Abdghafar",
    authorPhoto:
      "/st/media/pim/media/user_photo/da/da7/da75492589898f82eac09a42f393fe7f_1f34b078ad534a298e98aad79cdcb8df.jpg",
  },
  {
    name: "TAURUS BTC",
    account: 110119271,
    description:
      "Estrategia de bajo riesgo de inversión, con el objetivo de obtener una renta sobre capital total entre 0,5% a 1% diario. Sin Robots ni martingalas.",
    author: "Leandro Santiago",
    authorPhoto:
      "/st/media/pim/media/user_photo/1d/1d5/1d5ce191cc99b3606387c2b0fa7c486c_aaa86149d0204cb2adfbd588214f4050.PNG",
  },
  {
    name: "Stable Gain V2",
    account: 110119397,
    description:
      "A Robot based signal that using Price Swing trading method and trend following strategy for entry and closing. Safe Initial capital start at 1,000 usd",
    author: "MR THITI BUNSIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/34/340/340918732e84b76656fb429681ef656a_f73a2c1b79e54a67b545392aa56fd5dd.png",
  },
  {
    name: "Low risk High Profit",
    account: 110119651,
    description: "you will get consistence profit every month with row risk",
    author: "TIRATH POKIYA",
    authorPhoto:
      "/st/media/pim/media/user_photo/e0/e02/e0270581b6edd1a4cc56237010e3354c_c2aa9e3833e94db082bf926917831660.png",
  },
  {
    name: "Trade Solution",
    account: 110119772,
    description: "Right Solution for Trading",
    author: "Bahadur Hussain",
    authorPhoto:
      "/st/media/pim/media/user_photo/a0/a0e/a0eb1c8ae2315556ff0b4e3340b4e073_af902d42bac54bc598466531003552ca.jpg",
  },
  {
    name: "RN TRADERS",
    account: 110119820,
    description: "I'M going to copy trade",
    author: "Nikhil Biswas",
    authorPhoto: null,
  },
  {
    name: "THE SUCCESS",
    account: 110119940,
    description: "Profitability is 5% - 20% per month.",
    author: "Puwadon Ainsong",
    authorPhoto:
      "/st/media/pim/media/user_photo/18/187/18705ae9510cd737ef516efa24c1e1a2_697b94383c844ddb9b07048e59790e0d.jpg",
  },
  {
    name: "Expert of Gold",
    account: 110120005,
    description: "Monthly Target is more than 50 % with safely trading.",
    author: "PUNEET RAM CHOUDHARY",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/607/607485d14e5b686f4fd769aed164d948_9fd56ea320c540119430f2a07617ffff.jpg",
  },
  {
    name: "WORLD TRADERS",
    account: 110120081,
    description: "WORLD TRADERS",
    author: "MOHAMED ABDELWAHAB",
    authorPhoto:
      "/st/media/pim/media/user_photo/f7/f73/f73a614e58d30c6ce418430fd1cdd61a_3c673d151d1d4159b797cb1adf68e9e0.jpg",
  },
  {
    name: "Stable Gain V3",
    account: 110120215,
    description:
      "A Robot based signal that using scalping trading method and trend following strategy for entry and closing. Safe Initial capital start at 1,000 usd",
    author: "MR THITI BUNSIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/34/340/340918732e84b76656fb429681ef656a_f73a2c1b79e54a67b545392aa56fd5dd.png",
  },
  {
    name: "Bright Future",
    account: 110120307,
    description:
      "AutoBot System 🤖📊\nDon't Blow Your Account Let's Copy To Us And Get Monthly 25%+ Profit Gain 💸\nHurry Up Now..! 🤑",
    author: "BALU INGLE",
    authorPhoto:
      "/st/media/pim/media/user_photo/ce/ce5/ce5eac3bab6a1b94e30bb18af50ee383_5b5c836553374816b00fb4deefa7b5fd_nQYBcrg.png",
  },
  {
    name: "Triumph_EA_24",
    account: 110120403,
    description: "Stable Profit",
    author: "Tran Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8a0/8a048fb947e3584e8a73063db07884b8_8739ff2a85bc4435b8d4d325144af047.png",
  },
  {
    name: "LAST CHANCE",
    account: 110120440,
    description:
      "Unlock financial success with my strategy. Achieve consistent monthly returns of 30% or more by following my trades With Low drawdown",
    author: "AHMED HADY",
    authorPhoto:
      "/st/media/pim/media/user_photo/9d/9dd/9dd65babf045849b1f3f076d995ed466_8a18bf008e0f495e88702f1ec03cb268.jpg",
  },
  {
    name: "Trading Psychology",
    account: 110120617,
    description: "Trading Psychology",
    author: "SAAD HADY",
    authorPhoto:
      "/st/media/pim/media/user_photo/9a/9ab/9ab5bae5821100ec8ee0c674a544ccee_084297b3e767478eb47c71d4a959e3f2.jpg",
  },
  {
    name: "H Algorithm",
    account: 110120654,
    description:
      "655% growth with 12.5% max drawdown backtesting from 01Feb23 to 01Feb24\nhttps://www.instagram.com/halgotrade",
    author: "Chung Ming Fong",
    authorPhoto:
      "/st/media/pim/media/user_photo/e0/e0b/e0b795332f86ffc12a3edae6ae3aa6c2_481f1cb68df04eabb77d3f002f751806.png",
  },
  {
    name: "Leverkusen",
    account: 110120702,
    description:
      "My balance is 1,234 USD only trade XAUUSD, Manual trading and EA, No overtrade, No martingale.",
    author: "Karnjana Narkparn",
    authorPhoto:
      "/st/media/user_photo/8a/8a1/8a1b22c8041ab067bb04853cb59dd635_68431d615e8a41e2a1d8f3eb1a07f954.jpg",
  },
  {
    name: "Makemoneywithme",
    account: 110120737,
    description:
      "I make money with 0.90 risk \nI have 500used and in mouth i make 100to 180dollor porfiter\nWithout any stoploss hit",
    author: "Fozia Anjum",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cb3/cb32f096f99b2e3ccf9decd18183253e_831b916b36694a8cb5e75cbaeab93159.jpg",
  },
  {
    name: "FX Tracker",
    account: 110120795,
    description: "Trading on FX Currency",
    author: "STEFANUS TACTRIA",
    authorPhoto:
      "/st/media/pim/media/user_photo/27/27a/27a3703f337e580e828b58eb92f6a48e_82b4ad69180c4cebbe6aedb01c1f5bc4.jpg",
  },
  {
    name: "Step One Challenge",
    account: 110120866,
    description: "3000$ CHALLENGE",
    author: "Majd Halaiqa",
    authorPhoto:
      "/st/media/user_photo/e8/e8b/e8bfdd8b3893e0ee8b9c8db746bab95b_3d0c839e895d4a33a86e8c7e2829a039.jpg",
  },
  {
    name: "AB Treding",
    account: 110120976,
    description: "AB Treding",
    author: "Abdur Rahman Al Hasan",
    authorPhoto:
      "/st/media/pim/media/user_photo/a9/a90/a90ef5fce05d2d7fad357b0662bf7122_d8681d9fb3ee456a9e6e0c13328a4354.jpg",
  },
  {
    name: "ForexCamSVS",
    account: 110121142,
    description: "Let's ride on Gold.",
    author: "VANSAR SUON",
    authorPhoto:
      "/st/media/pim/media/user_photo/82/827/827a0ff8f0cd524ac9fb305cdbbd39a8_8d8cd3946c9848de8f2f83ffe5135ea1.jpg",
  },
  {
    name: "goldvsusd scalping",
    account: 110121741,
    description:
      "Trading with proper money management and medium risk factor. \nIntraday trading! \nMonthly target is around 5% - 10%. \nTrade mostly Gold",
    author: "Ahsan Ahmed khan",
    authorPhoto:
      "/st/media/user_photo/9f/9fc/9fc28df1f368d4ed72f3e1d70b43a4f6_1f20f2d9cf24422c8ba17302f3673352.jpg",
  },
  {
    name: "Pathaan_Fx",
    account: 110121779,
    description:
      "Observe our performance and then copy for profit with profit risk management.",
    author: "Abdul Khaliq",
    authorPhoto: null,
  },
  {
    name: "Okbabyabyb",
    account: 110121783,
    description: "Hay là một nhà giáo dịch thông minh",
    author: "lien tran",
    authorPhoto:
      "/st/media/user_photo/d4/d43/d433034a867ce83d5cb7bfb028c48f3d_8af73fd6f0d644089d787a3942d2bf2b.jpg",
  },
  {
    name: "JOHNPAUL777",
    account: 110121908,
    description: "DAY TRADING",
    author: "HENDRA",
    authorPhoto: null,
  },
  {
    name: "Chiến lược theo xu h",
    account: 110122127,
    description: "Theo xu hướng",
    author: "Triều Nguyễn",
    authorPhoto: "",
  },
  {
    name: "Học viện Academy",
    account: 110122187,
    description: "Giao dịch theo xu hướng khung tuần",
    author: "Đức Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/75/75a/75a64bf28af3a62f2ef8a972abbb2a64_94ef89fa468b4b6485e17e36c5faabe5_fEmZv2X.jpeg",
  },
  {
    name: "Think and go Rich",
    account: 110122230,
    description:
      "My aim is preservation of CAPITAL first before greedy and risky profits.\nThe signals can make about 3% to 6% or more profit every single month.",
    author: "MR JATUPON THUMMOON",
    authorPhoto:
      "/st/media/user_photo/cf/cff/cffe458f933fe96d7549b3789461aef6_efe203dfb656439b97027363267021a4.jpg",
  },
  {
    name: "PA Trading",
    account: 110122239,
    description:
      "Be patient to profit every day\nFollow my trading strategy\nStart with >=200$",
    author: "Cương Phạm",
    authorPhoto:
      "/st/media/pim/media/user_photo/93/93a/93a521d4f8148a7e3847293e474fdf74_92afcff192e84ef4a27b167e51762a21.png",
  },
  {
    name: "ONLY  GOLD",
    account: 110122259,
    description: "ONLY  GOLD TRADING",
    author: "MD MUSA",
    authorPhoto:
      "/st/media/pim/media/user_photo/a2/a29/a2997ee0acab52d323e33e88c1b76ce6_ce1c283f45b6418296481829056710b8.jpg",
  },
  {
    name: "Siya boat stratregy",
    account: 110122270,
    description: "Daily 1% ingrees of capital",
    author: "SHIHAB THAVALATHIL",
    authorPhoto:
      "/st/media/pim/media/user_photo/af/aff/affbf9d965776de1b93656681502ac9b_50cf806e4e81455ca6a368b386e324c2.jpg",
  },
  {
    name: "Jay Shree Ram",
    account: 110122293,
    description:
      "Strategy Description\nHello Everyone, 👉This account is totally Safe to copy for every investors.👈 I will try my best to make 25-50% profit Weekly. 👍",
    author: "HARI SHANKER  YADAV",
    authorPhoto: null,
  },
  {
    name: "STRATEGY APHA",
    account: 110122300,
    description:
      "Chiến lược tập trung vào tối ưu quản lý rủi ro, để đạt được lợi nhuận ổn định lên đến 5% mỗi tháng với mức rủi ro thấp nhất",
    author: "Dao Duong",
    authorPhoto:
      "/st/media/pim/media/user_photo/9e/9e3/9e3e11cc51be5b20580dc3be89a0a477_47d98293d3e14ace9b632c10d5e38e86.jpg",
  },
  {
    name: "Priceslippage",
    account: 110122551,
    description:
      "Working on. Dealing in the market according to mathematical operations",
    author: "mahmud yunsu",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c2f/c2fe20dac88d82f84a5bdee36c9dee04_2e0e745245234f01aed8482cc4ddf461.jpg",
  },
  {
    name: "Bonsai Technique",
    account: 110122559,
    description:
      "The knowledge of patience: \nUnion of AI skills and Human insight.",
    author: "Daniel Pelegrino",
    authorPhoto:
      "/st/media/pim/media/user_photo/44/44b/44b63573af924c7bbc4c7a5627a693a9_051e07b39dd44e3f957aafabb299077e.jpeg",
  },
  {
    name: "DeThayHuan",
    account: 110122795,
    description:
      "+Mục tiêu 5-15% 1 tháng tùy biên độ thị trường\n -5% lãi từ Social trích ra góp phần vào dự án Nuôi Em -Zalo : 0384233445 Liên hệ để biết thêm chi tiết",
    author: "Hung Tran dinh",
    authorPhoto:
      "/st/media/pim/media/user_photo/9c/9c0/9c00822f58ea9d49c64b76e6b40a1d83_2afd133db21e42a69aac6037077b340e.jpg",
  },
  {
    name: "NG-Super Trade",
    account: 110122814,
    description: "EA trading  profit 5-10% /month.",
    author: "MR PONGPICHAN NIRAMITWASU",
    authorPhoto:
      "/st/media/pim/media/user_photo/22/224/224322f2028086fe780383d85cf167d1_07dd2d244d9a463995bd2ca973cdc8c3_ey7Xxff.png",
  },
  {
    name: "GHOUSI TRADERS",
    account: 110122910,
    description:
      "Hello Everyone, 👉This account is totally Safe to copy for every investor.👈 I will try my best to make 25-50% profit Weekly. 👍Big INVT$$$=Big Profit",
    author: "Najibullah Sediqi",
    authorPhoto:
      "/st/media/pim/media/user_photo/e1/e1e/e1ea6601a69e093d7cf8963c358e44b7_d359f3371ed24e5bbd8638fad2a7ea2d.PNG",
  },
  {
    name: "Trading Guru",
    account: 110122997,
    description:
      "Well i am a full time trader and investor. I use neowave for my analysis and forecasting which is an advanced method to trade the market. \nThank You",
    author: "MEENU RANI",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/86e/86ef190f5ecdb76e2da63d3d064f6537_3bcd1fb7169b4504b4f4876d6fffa109.png",
  },
  {
    name: "SafeHaven FX Strateg",
    account: 110123054,
    description:
      "SafeHaven ,The strategy emphasizes the importance of avoiding excessive risks and aims to generate consistent returns over the long term.",
    author: "YIMING LI",
    authorPhoto:
      "/st/media/pim/media/user_photo/e1/e15/e157045ef28c6344048726de22140907_bd42fa2ebcb2484d8393854b61bc13a9.jpg",
  },
  {
    name: "MAgic Trader",
    account: 110123161,
    description: "Profit together",
    author: "HENDRA",
    authorPhoto: null,
  },
  {
    name: "Cakra Trader Dua",
    account: 110123211,
    description:
      "Minimum Depo : 5.000 USD \nRisk Management : Trading Style : - Scalping - Intraday# Disclaimer On : Forex trading contains high risk We do not promise",
    author: "mohammad  yahya",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e2a/e2abe4c457d56862c406ff2d566d1002_c893923391124aabb68ccf98ecfc5b7b.jpeg",
  },
  {
    name: "Reversal Pattern",
    account: 110123234,
    description:
      "The reversal of trend to be tracked to generate profit. Averaging may be required and patience of few days",
    author: "Jayna Thakkar",
    authorPhoto: null,
  },
  {
    name: "Baby EL FX",
    account: 110123300,
    description: "Cuan terus",
    author: "BRIAN KURNIAWAN",
    authorPhoto: null,
  },
  {
    name: "PHAO TRADE SWING",
    account: 110123442,
    description:
      "TRADE SWING H4 and D1\n- Small Lose , Big Win ( lãi lớn , lỗ bé ) \n- Trade using the Price action system .\n- Trade 28 currency pairs .",
    author: "Phú Hào Bùi",
    authorPhoto:
      "/st/media/pim/media/user_photo/82/825/82579723151c66a8c87e1cc2a6d3758f_a09ec636bfab475390754a5cbbf40b07.png",
  },
  {
    name: "mrphoenixswingtrader",
    account: 110123487,
    description:
      "work with proper managment\nper trade risk 5%\nrisk reward 1:2+",
    author: "Varshil Savani",
    authorPhoto: null,
  },
  {
    name: "SonEA02_HedgeScalper",
    account: 110123771,
    description:
      "Giao dịch với các cặp tiền và thực hiện Hedging tỉa chéo lẫn nhau",
    author: "DUONG SON LE",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8ab/8ab5c7311a145297ba593d28f2c67b6e_ede5d09d009a4a7d8f67d7d24bfdeac9.jpg",
  },
  {
    name: "MuayThai-AUTO V2",
    account: 110123779,
    description:
      "เป็นกลยุทร์การเทรด เน้นทำกำไรไว ตัวนี้เป็น V.2\nเทรด time frame 5M \nมีระบบป้องกันขาดทุน ที่ 25% \nและเน้น DDไม่เกิน 10%\nอัพเกรดเพิ่มความฉลาดของEAมากขึ้น",
    author: "SUKRIT KRITSADADECHAKUL",
    authorPhoto:
      "/st/media/pim/media/user_photo/a4/a45/a458cb8e486b491996f1a50be4f5e95a_25a32293466f4bcf9f0f5f1821c569de.jpg",
  },
  {
    name: "METARiCH MR05",
    account: 110123782,
    description: "Gold scalping  TF M5",
    author: "METAPAT CHIRAKITRUENGKUL",
    authorPhoto:
      "/st/media/pim/media/user_photo/54/54f/54ff8ecbf42935766649f03e24211468_bc4f8b8e27334052ae9f709e88496fc1.jpg",
  },
  {
    name: "Breakoutscalper",
    account: 110123784,
    description: "Gold scalping only.",
    author: "Lester Halili",
    authorPhoto:
      "/st/media/pim/media/user_photo/1c/1c8/1c8e92286c910edbc28c15830d92dcec_5cfb5b7e30bb48aab7441ce2d2b596d8.jpg",
  },
  {
    name: "雪球EA6666666",
    account: 110123957,
    description:
      "建议5000USD跟1/1，交易7货币兑，历史回测可过2010-2024年，最大回撤30％，年平均回报70％。",
    author: "海东 郭",
    authorPhoto:
      "/st/media/pim/media/user_photo/b1/b1c/b1cd51d75a8b9bad1ab0fe13da8cb31e_2786f34629d9440aae43a63b0f8279f4.jpg",
  },
  {
    name: "Growing Capital",
    account: 110124008,
    description:
      "Paciencia, constancia y buen manejo del riesgo son la clave para tener éxito 🚀\nPara preguntas y cometarios escríbeme. \n\nhttps://t.me/juankmilotrader",
    author: "Juan camilo  Guarin villegas",
    authorPhoto:
      "/st/media/pim/media/user_photo/53/539/5398674813eb43ed2365440120bcc6f6_f68292d96c0b478499e29c2f46ab8135.jpeg",
  },
  {
    name: "Volcanic Money",
    account: 110124060,
    description:
      'Like volcanic eruptions reshape landscapes, "Volcanic Money"  have the potential to reshape your portfolios, for those who seize the opportunity.',
    author: "ADI T",
    authorPhoto:
      "/st/media/pim/media/user_photo/aa/aa1/aa1d995b379e3741591bb3b269a89747_3dded2aca6174c7391c777fc2677b112.jpg",
  },
  {
    name: "Extraordinary New",
    account: 110124075,
    description: "Extra income",
    author: "BENJAWAN NEDSAWANG",
    authorPhoto: null,
  },
  {
    name: "Profit Space",
    account: 110124137,
    description:
      "We're using 5 years experience robots to trade for higher return on your investment",
    author: "ASIANG",
    authorPhoto: null,
  },
  {
    name: "Owl888martin",
    account: 110124221,
    description: "赚买菜钱ea",
    author: "Qi Qiu",
    authorPhoto:
      "/st/media/pim/media/user_photo/27/27c/27ccb1d323c8f77791ba8ddea8398290_a394ed7fe67f4deca5a9e41c75cdd482.png",
  },
  {
    name: "Harmonious",
    account: 110124251,
    description:
      "This is a trend following strategy that is expected to grow 5-10% per month.",
    author: "鎧程 張",
    authorPhoto:
      "/st/media/pim/media/user_photo/58/589/58941aed3f9b558c801561ca5fdae45c_1aa6767abf414f3184e43d432f230dda.jpg",
  },
  {
    name: "HuiYing222",
    account: 110124258,
    description: "黄金交易，波段为主。低频率，低风险，稳健型，纯手动交易。",
    author: "庆利 徐",
    authorPhoto:
      "/st/media/pim/media/user_photo/2d/2d6/2d66793ba7d11c05ee3ced1077dd9722_29c247930af2433997c6959998a0f87f.jpg",
  },
  {
    name: "ETDS-RUNNING",
    account: 110124370,
    description:
      "Target 20%/mouth\nLh Zalo: 0356280116\nChanel telegram: https://t.me/etdsrunning",
    author: "THOAI TRINH BA",
    authorPhoto:
      "/st/media/pim/media/user_photo/6a/6ae/6ae992e605f2baafc8a734ab2ec86f2b_55a9458bd14f4ecc879d37f9e54b9cbc.png",
  },
  {
    name: "Price Action",
    account: 110124514,
    description:
      "Trading different strategies based on price action. Will do my best to generate stable income from this account.",
    author: "Javaid Ahmad Alvi",
    authorPhoto:
      "/st/media/pim/media/user_photo/32/323/323b025c553439f00ec0b46ebc88838a_a83c4595dde54739a0b4bcbe1be87256.jpg",
  },
  {
    name: "FOREXTRADERSUSA",
    account: 110124766,
    description:
      "For us, stable profits and account safety are top criteria. Please accompany us. Thank you",
    author: "LE XUAN PHAM THI",
    authorPhoto:
      "/st/media/pim/media/user_photo/00/003/0033b371d429a347f493474d2cbf87d8_d565be2f5f72467ab575d1c11db7b3b6.jpg",
  },
  {
    name: "Street Fighter",
    account: 110124871,
    description: "-",
    author: "Muhammad Maulidiyan",
    authorPhoto: null,
  },
  {
    name: "Golden Bot",
    account: 110124895,
    description:
      "Low risk strategy, sustainable profits.\nPurpose: share Bot with the community, help financial freedom, early retirement.",
    author: "HIEU SON HOANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/e1/e1b/e1b26969ebefb02243c7e8ed465a895d_fb8bf98b711647dca20a6f2ecc1bc0db.jpg",
  },
  {
    name: "SniperS Sure shot",
    account: 110124944,
    description:
      "We have Found one wondeful stategy to gain Money Steadily.. If U are Small Inverstor ..U can get Wonderful income ...We willbe Using Price Action ..",
    author: "pallapu  Mahesh",
    authorPhoto:
      "/st/media/pim/media/user_photo/c4/c47/c477c75d817043c27d52f613e5041ce3_6def1a10c26f4f05a24a098f059cba42.jpg",
  },
  {
    name: "Tiger Balm",
    account: 110125155,
    description: "a balm for treating headaches",
    author: "令中 郭",
    authorPhoto:
      "/st/media/pim/media/user_photo/97/97b/97b2825d82a41e160af95530220ede8e_56932f669e8b4554bdbdbf33929bb0db.jpg",
  },
  {
    name: "P-Action_SmartMoney",
    account: 110125221,
    description:
      "I am professional Trader and trading with Exness from last 3 years , I follow mostly my own designed strategy based on various best indicators.",
    author: "Falguni Manishkumar Fosi",
    authorPhoto: null,
  },
  {
    name: "Profit maker",
    account: 110125222,
    description: "We trade in eur usd just like reboot",
    author: "غزالہ یاسمین",
    authorPhoto: null,
  },
  {
    name: "XNET GOLD H",
    account: 110125239,
    description: "lợi nhuận đều - lâu bền",
    author: "Hoàng trần",
    authorPhoto:
      "/st/media/pim/media/user_photo/00/007/0077d246701ef6f41a115f1dfbc7c867_756cf75ef64e434d8f7bec086fe13e73.png",
  },
  {
    name: "EA Pro mai",
    account: 110125245,
    description: "an toan von loi nhuan on 5_30%",
    author: "Mai Đinh thi",
    authorPhoto:
      "/st/media/pim/media/user_photo/96/965/965afa0b5e638073a2067d1bf816f488_52140063462e47efa756633d379308f8.jpeg",
  },
  {
    name: "Scalp Snipper",
    account: 110125259,
    description:
      "We deploye a safe strategy that takes minimum risk and high reward. Can expect 10-15 % returns on XAUUSD per month",
    author: "nethaji nirmal",
    authorPhoto:
      "/st/media/pim/media/user_photo/d3/d37/d378f58ac954a7d08066bbeae6fdf438_a2f4e0d143804b54864823f4acfcb564.jpg",
  },
  {
    name: "CK68 FUND 79",
    account: 110125324,
    description:
      "Watching more details, more funds, more safety, more profit at ck68.vn",
    author: "VAN CUONG PHAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/e4/e4e/e4e6eef7060b9b6188905e28aaf9e758_bb9eb3238fd7452389f986c293979bc3.jpg",
  },
  {
    name: "Vimol billion",
    account: 110125408,
    description: "ตามกลยุทธ์ที่กำหนด",
    author: "วิมล บุญเกิด",
    authorPhoto:
      "/st/media/user_photo/21/21f/21f440a46d6242d8e903a137d7415d6a_1dcb09b26f41401fa9c835e90e5c0fde.jpg",
  },
  {
    name: "GFF_SMC Intensive",
    account: 110125422,
    description: "SMC Specialised Intensive extremely effective!",
    author: "SY QUYEN HO",
    authorPhoto:
      "/st/media/pim/media/user_photo/9e/9e0/9e0392a8517b30dda77a162937c9224e_4bb9dcbce33f43aa932acf4ecce7d9f2.jpg",
  },
  {
    name: "GFF_PriceAction Mix",
    account: 110125429,
    description:
      "Combination of many trading methods. In-depth Price Action combined with indicators",
    author: "SY QUYEN HO",
    authorPhoto:
      "/st/media/pim/media/user_photo/9e/9e0/9e0392a8517b30dda77a162937c9224e_4bb9dcbce33f43aa932acf4ecce7d9f2.jpg",
  },
  {
    name: "Trader XAUUSD thtren",
    account: 110125430,
    description:
      "Giao dịch XAUUSD theo xu hướng .Hạn chế  thua lỗ , tối đa hóa lợi nhuận",
    author: "THI THU HA HUYNH",
    authorPhoto:
      "/st/media/pim/media/user_photo/14/149/1491d4c9d556a5551a0b871bdf545221_2d3a8d3060384aa7a82bcf664320b6de.PNG",
  },
  {
    name: "TradewayFX",
    account: 110125544,
    description:
      "For secure and profitable forex copy trading. We prioritizes safe trades and we maintain risk-free strategies.",
    author: "MANJU VERMA",
    authorPhoto:
      "/st/media/pim/media/user_photo/47/472/472a161ae6fe50acf7d36ca784b17cf6_47bed5b92eba4af288ca62fbb5b0c831.jpg",
  },
  {
    name: "Liu Ren of ZhuGe",
    account: 110125631,
    description:
      "依托诸葛小六壬黄金策略测算下单，每次下单0.02，买卖单同时最多为1单。安全保守，持续盈利。",
    author: "超 李",
    authorPhoto:
      "/st/media/pim/media/user_photo/80/80a/80a25110fe573e0d59dc1035808d3762_cc150f6a1eae4ea1b2fb696c285d45da.jpg",
  },
  {
    name: "Trend is your friend",
    account: 110125634,
    description:
      "Quan trọng nhất là bảo vệ thành quả đầu tư.\nĐừng tranh cãi với thị trường, cũng đừng chống lại thị trường.",
    author: "Nuôi Lê văn",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/aee/aee5463fd8e9b08e667b1f054c64af0f_c23a5e627134421d8002ccd004655a92.jpg",
  },
  {
    name: "Trung_pro68",
    account: 110125646,
    description: "5 nam kinh nghiem forex",
    author: "QUANG TRUNG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/e3/e36/e3633a69be0e4043fc9f3365c4a4b2a7_de753323377340239aa4726434f0c355.jpg",
  },
  {
    name: "Bull Trade",
    account: 110125687,
    description: "Trading intradía, basado en análisis técnico del EURUSD",
    author: "Edwar Leonardo Guevara Burgos",
    authorPhoto:
      "/st/media/pim/media/user_photo/02/025/0252e21991b4b21a25f2c5449f939b16_0a4953a77a9446449f8224107881f13a.jpg",
  },
  {
    name: "AI_Inveaent_Growth",
    account: 110125713,
    description: "Min risk Max return...\nCompounding the investment amount",
    author: "NAIMA KHATUN",
    authorPhoto:
      "/st/media/pim/media/user_photo/1d/1db/1db2cbab2b92f18f8d48459ef54676fe_b29ef6b73c9a4a8f8acc12aa5cfcd9df.jpg",
  },
  {
    name: "BacThanh77",
    account: 110125799,
    description: "Quản Lý Vốn An Toàn là trên hết!!!",
    author: "Huynh Van Thanh",
    authorPhoto:
      "/st/media/user_photo/48/482/4820f16ff99fa267a3ff0d851801e91a_8912a1fefa0a4deeb7086616ea8e5f61.jpg",
  },
  {
    name: "Kajal Stratergy",
    account: 110125876,
    description:
      "monthly 10% to 15% return on equity, daily withdraw you profit",
    author: "Kajal Rafaliya",
    authorPhoto:
      "/st/media/pim/media/user_photo/a1/a1c/a1c7a6b438357851bffb1b740d639701_20304f89e5c640908d6a5cbaaa271b60.jpeg",
  },
  {
    name: "Ricky Money",
    account: 110125897,
    description:
      "- 100% Algo trading\n- Safety first\n- Smart entry\n- Monthly profit: from 5 to 20%",
    author: "VAN PHU LE",
    authorPhoto:
      "/st/media/pim/media/user_photo/d0/d0c/d0c67a58df8cd1fa4e59a7211e4169bf_245b84b6e11444129571889871e3158a.jpg",
  },
  {
    name: "Metaverse XAU",
    account: 110125902,
    description: "จัดการระบบด้วย AI และควบคุมการเข้าออเดอร์ด้วยเงื่อนไข",
    author: "KRITH CHAIHIRANPANYA",
    authorPhoto:
      "/st/media/pim/media/user_photo/c8/c88/c880ce267fd97dde32054c2d698a3cfb_ebebc264cb3c4c1cba2f2079a58df5b5.jpeg",
  },
  {
    name: "DarkToTheMoon",
    account: 110125917,
    description: "scalping trading",
    author: "ANAWACH CHIRAPONGTHANAKIT",
    authorPhoto:
      "/st/media/pim/media/user_photo/ec/ecf/ecf3567382690f2053d6c60ac7bc83b1_46e9f2d9f9894cbc963d6f23f82b76eb.jpeg",
  },
  {
    name: "Swing Trading EA",
    account: 110126001,
    description: "This is swing trading EA so take few days to book profit",
    author: "JADVANI BHAVINBHAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/11/112/112082d97e2d6b214b5e125d05a75232_4d6fab5959514144abcc59ab26a9ca84.jpeg",
  },
  {
    name: "HuiYing333",
    account: 110126009,
    description:
      "黄金日内周内交易为主，跟随K线信号开仓，低频率低风险,月收益10%-20%左右,纯手动交易，均有浮亏加仓以及爆仓风险。",
    author: "庆利 徐",
    authorPhoto:
      "/st/media/pim/media/user_photo/2d/2d6/2d66793ba7d11c05ee3ced1077dd9722_29c247930af2433997c6959998a0f87f.jpg",
  },
  {
    name: "Live-X2102",
    account: 110126064,
    description: "swing trade",
    author: "Nguyễn Quốc Việt",
    authorPhoto:
      "/st/media/pim/media/user_photo/6d/6dc/6dc519e7b42044562728aedecbb822ea_3a68e673a1614758b497a58d2b3b96c6_OVVJqdh.jpg",
  },
  {
    name: "EA MAN OF STEEL EUR",
    account: 110126113,
    description: "EA MAN OF STEEL EUR",
    author: "HMED DEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/47/47d/47dff44a6a3d2d356f5dffc97716a8d9_410c9ad3860a47e6a694425301f24fa6.jpg",
  },
  {
    name: "MAN OF STEEL",
    account: 110126146,
    description: "MAN OF STEEL",
    author: "HMED DEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/47/47d/47dff44a6a3d2d356f5dffc97716a8d9_410c9ad3860a47e6a694425301f24fa6.jpg",
  },
  {
    name: "Trade all the Way",
    account: 110126152,
    description: "Invest with me, and get consistant return each month.",
    author: "Abdul  Samad",
    authorPhoto:
      "/st/media/pim/media/user_photo/e8/e86/e865b4942cc296713261466412333863_d2b5f3f074ab4a23bca43fb2afd66981.png",
  },
  {
    name: "Visión Investments",
    account: 110126200,
    description:
      "Nuestra prioridad es siempre tener una buena gestión de riesgo. 5 años en el mercado nos puede llevar a generar grandes profits.",
    author: "Camilo Roncancio",
    authorPhoto:
      "/st/media/pim/media/user_photo/11/114/1140ab95b6f94b5b775ce8334cfe2075_85a9204479f049c480179d86b4d3624d.jpg",
  },
  {
    name: "Ovan Trading",
    account: 110126235,
    description: "Giao dịch ổn định, lợi nhuận đều đặn hàng tháng",
    author: "Ngọ Văn Hùng",
    authorPhoto:
      "/st/media/pim/media/user_photo/93/93b/93b0d8bbed35b05780df7e58d58d0e18_1785dbab6def46debf296e9d8ce9ebe3.png",
  },
  {
    name: "EATD RUNNING",
    account: 110126424,
    description:
      "Target 20%/mouth \nLh Zalo: 0356280116 \nChanel telegram: https://t.me/etdsrunning",
    author: "THOAI TRINH BA",
    authorPhoto:
      "/st/media/pim/media/user_photo/6a/6ae/6ae992e605f2baafc8a734ab2ec86f2b_55a9458bd14f4ecc879d37f9e54b9cbc.png",
  },
  {
    name: "Trader Gentleman",
    account: 110126465,
    description:
      "Road to $80 Millions\nTop 7th Rank Institutional Trader\nParticipate for 5 years to gain $80 Millions [650 Crores]",
    author: "AMIR KHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/ff/ff4/ff46ce455151853a9107747ceb569a98_32808fa34a4741cc9ea3434790bc12ad.jpg",
  },
  {
    name: "Forex best",
    account: 110126511,
    description: "kỹ luật hằng ngày kiếm 1-2%",
    author: "Cường Trần",
    authorPhoto:
      "/st/media/pim/media/user_photo/96/966/96651ede9a23ae7c0336164425f6dee8_851b8a9a4cbc4961a1ccd90febc547ae.jpeg",
  },
  {
    name: "FAST PROTOCOL",
    account: 110126536,
    description: "FAST PROTOCOL",
    author: "AHMED AHMED",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8a8/8a8ade816612b27ccd7f8d6e8e45a151_c6fc6197aad844bea1a77ac99f75c0ba.jpg",
  },
  {
    name: "HedgeMaster Robot",
    account: 110126605,
    description:
      '- Target 8-20%/month\n- Swing trading\n- Never lose a day 24/7 \n- Robot Details: WhatsApp "03065332335"',
    author: "Tayyab Mehmood",
    authorPhoto:
      "/st/media/pim/media/user_photo/95/950/9509b222e8dbeff5070df308b4114d3a_540ddc63caa74b93931eec50c1ff336d.PNG",
  },
  {
    name: "MK TRADING",
    account: 110126691,
    description: "KỶ LUẬT TẠO THÀNH CÔNG",
    author: "hưng nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/e5/e57/e57f18795181a30e78859e0ce641ebc9_db7318b0e7814fc8b9a7217ed2c690c3.jpg",
  },
  {
    name: "LuluLuan Currency",
    account: 110126697,
    description: "All currency pairs, no XAU, stable income, small lot",
    author: "Luan Bui",
    authorPhoto:
      "/st/media/pim/media/user_photo/17/177/1775a3230565de824323704c918e71d5_e0087965801246599716f69a41073338.jpg",
  },
  {
    name: "TOP SNIPER- AUDseiEA",
    account: 110126705,
    description: "TOP SNIPER- AUDseiEA",
    author: "Xiaojie Pan",
    authorPhoto:
      "/st/media/user_photo/9a/9a6/9a669143a2b5860c7a0cfa4ba49af4fe_a46663edd1b847d8b0d6890286850f9c.jpg",
  },
  {
    name: "Daily 1 percent _ 2",
    account: 110126731,
    description:
      "Copy Trade by EA\r\nDaily profit : 1% (Monday - Friday)\r\nMinimum profit : 20% per month\r\nDrawdown : 35-50%\r\nWithdrawal : %Profit > %DD",
    author: "ACTING SUB LT PIYAPONG SASOONTARA",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e21/e217cc888eeac64a72587a2ccef51616_c6b63dff56f141628ef6eef53db928e2.png",
  },
  {
    name: "Gold  Stars",
    account: 110126745,
    description:
      "We use the simplest techniques in trading. To have a stable, sustainable income",
    author: "Joonchart Sakdasri",
    authorPhoto:
      "/st/media/pim/media/user_photo/a3/a3d/a3d36837fc23ab5f25550acbc20d6a46_9c155082d18748cda8cd513ceb13b0ab.jpg",
  },
  {
    name: "Passive Trader",
    account: 110126779,
    description:
      "Hedging strategy risk free, 200$ minimum investment, weekly withdraw profit. strategy from 23rd Apr 2024, follow https://t.me/+pjoEvdsrQkZhMDk9",
    author: "MOHANA PRIYA",
    authorPhoto:
      "/st/media/pim/media/user_photo/0a/0a0/0a0cfdaa8dff1657265e474823bf6e67_a88d8a51a0cc4c80a6acfce74eb2624a.png",
  },
  {
    name: "BINEX",
    account: 110126843,
    description:
      "نظام تداول آلي - تداول سكالبج يومي - مخاطرة قليلة و درودون قليل - ربح يتراوح بين 20-30% شهرياً - دخولك يعني أنك مستعد للمخاطرة.",
    author: "Sadeq Saleem",
    authorPhoto:
      "/st/media/pim/media/user_photo/a4/a45/a45eca4914dea231cee8c4cc3b9420c5_3f350a462b924d6b986504cab4cd83a9.jpg",
  },
  {
    name: "Gold Profit",
    account: 110126939,
    description:
      "In this strategy we will trade mostly on Gold and BTC but not limited to it.\nTo get consistent profit join it.",
    author: "MUHAMMAD SHOAIB",
    authorPhoto:
      "/st/media/pim/media/user_photo/5f/5f1/5f15e5255f093139ab87539d4077a4cd_f57d1c7b253b477a864f9c8256a85d0f.jpg",
  },
  {
    name: "Grow more with forex",
    account: 110126943,
    description: "We use smc concepts",
    author: "ZAHEER AHMAD",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f8b/f8b5066a86c0fa3fbc89bffe806acf5f_f675a649831e409b9eb955d560caf796.jpeg",
  },
  {
    name: "รู้อะไรไม่เท่ารู้งี้",
    account: 110126945,
    description: "เป้า 2-3% ต่อเดือน 25-40% ต่อปี",
    author: "THEERATHUCH THEERATHUCHSAKUL",
    authorPhoto:
      "/st/media/pim/media/user_photo/c3/c30/c30eac1d6eb513e1ebae1cf5549c7bd3_53fe5fdf390a49839ed300bfe05eb64a.jpg",
  },
  {
    name: "Blockchain Dream",
    account: 110126947,
    description: "Quy Vu",
    author: "Quy Tran Dinh",
    authorPhoto:
      "/st/media/pim/media/user_photo/f9/f99/f99f17562080dceff85307ecab844238_ff94417d224d4aab823300099daf35ce.png",
  },
  {
    name: "Lightly Trading",
    account: 110126992,
    description:
      "This strategy does not take up much of your time, follows the Measure method, plays daily at a reasonable time and without too much pressure.",
    author: "Tri Le",
    authorPhoto:
      "/st/media/pim/media/user_photo/4b/4b7/4b7d3a7e134283946bf06cd68a7d7233_0f73f4d00ef548f6abe6df14b0100f90.jpg",
  },
  {
    name: "xau_usd_JuJOOs_FX",
    account: 110127003,
    description: "JuJOOs_FX",
    author: "JOHN J",
    authorPhoto: null,
  },
  {
    name: "093 1881616",
    account: 110127116,
    description: "093 1881616",
    author: "THI HUONG GIANG DANG",
    authorPhoto: null,
  },
  {
    name: "Amoga Forex",
    account: 110127129,
    description: "Gold Trading , Monthly sure shot profit",
    author: "Balaji  P",
    authorPhoto: null,
  },
  {
    name: "200 DAILY PROFIT",
    account: 110127381,
    description: "1 pair only GBP USD\nPLEASE WITHDRAW DAILY",
    author: "ADE SILITONGA",
    authorPhoto: null,
  },
  {
    name: "Money Maker Bees",
    account: 110127422,
    description:
      "10% Monthly Safe Return, with trade in crude, gold, bitcoin. Invest 500$, +500$ Emergency Risk management. Check Your account balance and maintain it",
    author: "dheeraj aggarwal",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/ae5/ae5ccd19a7bce6c7563f0b01358b7091_18fbf9071159433f88f732ecd7817e99.jpg",
  },
  {
    name: "King of forex",
    account: 110127443,
    description: "تحقيق ربح من 20% لي 40%",
    author: "kirolos ashak",
    authorPhoto:
      "/st/media/user_photo/eb/ebe/ebe4fba5c33c39b0242692e5905739cb_2713744c176f4cc3b9a7acbedcdde2f7.jpg",
  },
  {
    name: "wave theory",
    account: 110127464,
    description: "water can flow or it can crush",
    author: "枕禹 王",
    authorPhoto:
      "/st/media/pim/media/user_photo/7a/7a6/7a6fa6e603ade72380bd36624d0fd694_8de7851801084682aff7bbe9ed67e149.jpg",
  },
  {
    name: "Optimus - S",
    account: 110127467,
    description:
      "Strategy seeking monthly investment of 3 to 5% reducing the maximum possible risk in swing trade operations with an initial investment of 1000 dollars",
    author: "Isaque Gonzaga Teles",
    authorPhoto:
      "/st/media/pim/media/user_photo/4b/4b5/4b5318406b0c607b50e9b57df339b11d_156cbd9d92634b78a4f65bafbcbca0d5.jpg",
  },
  {
    name: "Happy money",
    account: 110127481,
    description: "The monthly profit target is more than 30%",
    author: "嘉俊 马",
    authorPhoto:
      "/st/media/pim/media/user_photo/15/151/151b0f002bcf2494e218d808cc4c3426_552e7f0ebc834338adf07d146a2783e9.jpeg",
  },
  {
    name: "Hedge Scalper Leader",
    account: 110127510,
    description:
      "Chiến lược giao dịch hoàn toàn tự động\nPhí giao dịch 20%- trích 5% cho cộng đồng Vì các em nhỏ vùng cao có thể đến trường",
    author: "TIẾN HỒ VIẾT",
    authorPhoto:
      "/st/media/pim/media/user_photo/89/893/893a35411f69e21849374380ae44f73e_5c318edbcbce4d4ba2d8b3a7e8e84849.jpg",
  },
  {
    name: "Boldscale Trading",
    account: 110127633,
    description: "Come and esrn and enjoy your life",
    author: "MOHSIN FAROOQ",
    authorPhoto: null,
  },
  {
    name: "TND NETWORK",
    account: 110127660,
    description: "- Scalping GOLD\n- 3-5% monthly \n- Drawdown < 10%",
    author: "Thai Ninh Trinh",
    authorPhoto:
      "/st/media/pim/media/user_photo/f0/f0d/f0d42474002c1d1693ec7f6fa59fb800_69ff45e18681415bbb28bc8f96677ee0.png",
  },
  {
    name: "Nguyen tien",
    account: 110127665,
    description: "Mục tiêu hàng tháng 8%-12%",
    author: "nguyen tiến",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f53/f53e1e1aa69f73c8f87088f799e3bc88_c850d12b1d404cdebb0ff8c34ea3228b.jpg",
  },
  {
    name: "BIKRAMKY2024",
    account: 110127672,
    description: "SMC BASE TRADING AND HASING STRATEGY",
    author: "BIKRAM KUMAR YADAV",
    authorPhoto: null,
  },
  {
    name: "VN_Pro_Traing",
    account: 110127929,
    description: "Follow SMC.",
    author: "Liễu Lê Thị Thúy",
    authorPhoto:
      "/st/media/pim/media/user_photo/bd/bdc/bdc0b8c6a8f3c3cf04d29b2f444f4020_b0b32de414ce405ba74131c8f6f85d3d.png",
  },
  {
    name: "Vivekanand Chamle",
    account: 110127988,
    description: "Profitable Strategy",
    author: "VIVEKANAND CHAMLE",
    authorPhoto: "",
  },
  {
    name: "ATM Golden Miner",
    account: 110128045,
    description: "Grasp the rhythm",
    author: "Qi Qingcheng",
    authorPhoto:
      "/st/media/pim/media/user_photo/5e/5e4/5e492fde0e0a4ce4ae5e84d911749fce_07e1441e99384b15b6d88513691f1688.png",
  },
  {
    name: "HERNANDEZ CUFFIA",
    account: 110128074,
    description:
      "Más de 9 años en el mercado operando... abrimos para ustedes nuestra cuenta para que puedan generar ingresos de la misma forma que nosotros",
    author: "augusto cuffia",
    authorPhoto:
      "/st/media/pim/media/user_photo/bb/bba/bbaae656f133ee97a1cc817d23f5466e_25663b004d824f27bfdfef3f5dc487e8.png",
  },
  {
    name: "llBUMBUNMONll",
    account: 110128199,
    description: "XAU/USD\nhttps://www.social-trading.club/strategy/110128199",
    author: "tai ho van",
    authorPhoto:
      "/st/media/pim/media/user_photo/83/83c/83c4990a23da51d5e2711832a635e6c4_6ad0bce5204c4ac8a90601f324b38498.jpg",
  },
  {
    name: "STAR WARS FX",
    account: 110128259,
    description: "LOW DD & HIGH PROFIT",
    author: "OEI WICAKSONO",
    authorPhoto: null,
  },
  {
    name: "Basic Return",
    account: 110128320,
    description: "Monthly 10% Jo mle to mle Nakar no mle",
    author: "KOTDIYA HARJIBHAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/67/67a/67a93e6cf9b41046a38d4d4218b343ce_319f624ec0394a11a0fbf7c078c2bb36.jpg",
  },
  {
    name: "WORLD SAFEST TRADER",
    account: 110128387,
    description:
      "This system be safe for long-term investment that\ntrading with stoploss ,MM,no martingale,no hedging\n(passed backtesting with 10years TF-M1 data)",
    author: "MD HUSAIN ABBAS",
    authorPhoto:
      "/st/media/pim/media/user_photo/56/562/56268b9fcf8ae0e17012b10feba1efc6_dfb7f34ae6c541179c77f4033f0e8ebc.jpg",
  },
  {
    name: "Shree shyam trading",
    account: 110128405,
    description: "Big profits and account safe",
    author: "Shanker lal Balai",
    authorPhoto:
      "/st/media/pim/media/user_photo/1c/1ca/1ca7a7c54e33c9051838eacdcce27909_6d0086d51d414595b387e9462ca418cf.jpg",
  },
  {
    name: "BBBBBBBBBB",
    account: 110128531,
    description: "<minimum 100$>",
    author: "naragon kanokrutchanun",
    authorPhoto:
      "/st/media/pim/media/user_photo/82/824/8241a01c82124121ad96e44bca5dbe1e_e84fe94ac4204a8cab9cde7edc785ae1.png",
  },
  {
    name: "RaptorIndo",
    account: 110128581,
    description: "XAUUSD",
    author: "Jan Martin",
    authorPhoto:
      "/st/media/pim/media/user_photo/72/72d/72ddfd8fb33a9cc2757a36d600456394_339084f1694c4ac89423792aa26323b8.jpg",
  },
  {
    name: "Able FX MT4",
    account: 110128664,
    description:
      "https://www.myfxbook.com/members/narita/able-fx-exness-mt4/10868808",
    author: "Takashi Narita",
    authorPhoto:
      "/st/media/pim/media/user_photo/e7/e78/e786a2abfdd2c0a9b09137f6d166ac17_c64b8de4497644d3a8308fcf3ae5ad87_QtNisUr.JPG",
  },
  {
    name: "Traderduong",
    account: 110128666,
    description:
      "Giao dịch theo xu hướng: \nXAUUSD, GBPUSD, EURUSD, BTCUSD, DXY",
    author: "Phạm Văn Dương",
    authorPhoto:
      "/st/media/pim/media/user_photo/ea/eab/eabb7482298c232ba54b7c65db9c4fc3_ea55c08559554593a9c64ec47624b9f8.jpg",
  },
  {
    name: "Trade h4-d1 only",
    account: 110128712,
    description: "Trade H1 H4 only",
    author: "Thành Nguyễn",
    authorPhoto:
      "/st/media/user_photo/16/163/163f6840275aeba029a5871e8861295a_82bd4e2bdc0646659573ea1ac4ca9840.jpg",
  },
  {
    name: "Gold_Young_Jo",
    account: 110128715,
    description:
      "Trade Gold with stop loss\n4 Years Experences\nเทรดทองแบบมีจุดคัท \nมีประสบการณ์เทรด 4",
    author: "PANYOD PONGJIRAWUT",
    authorPhoto:
      "/st/media/pim/media/user_photo/b4/b43/b434e817d40650e050bb2426d352794b_7877f22d80fd4e24b9a872a4c953ca7b.jpg",
  },
  {
    name: "Kisame Akatsuki",
    account: 110128735,
    description:
      "Chiến lược giao dịch cặp tiền chéo nhau, stoploss 20% tài khoản. Lợi nhuận 20-30% tháng",
    author: "Văn Kiên Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/e9/e91/e913fb0e0a3da0b0ff20e72bb5784972_5543e14e93e64ac49feb29c960547845.jpeg",
  },
  {
    name: "Grid system",
    account: 110128835,
    description: "Grid system",
    author: "Mrs.Pattama Intajak",
    authorPhoto:
      "/st/media/pim/media/user_photo/e9/e94/e941b6e99044baa79d7c3744913d0cdf_eb4ae89fe739402f8d76eb2f157db273.jpg",
  },
  {
    name: "QQ963239004",
    account: 110128838,
    description:
      "利用规则一和规则二以及跟随趋势方向适量加仓策略，该策略盈亏比大于1：1，做到2：1比较合理，更大化的盈利要看市场机会。2000本金月化盈利能够达到50%以上。跟单可联系微信wechat:VSC857",
    author: "爽 李",
    authorPhoto:
      "/st/media/pim/media/user_photo/20/207/207ddb5e6577831876fa72e7c305467f_d36b2c963c5440eab278265420170d89.jpg",
  },
  {
    name: "Daily 1 percent _ 3",
    account: 110128845,
    description:
      "Copy Trade by EA\r\nDaily profit : 1% (Monday - Friday)\r\nMinimum profit : 20% per month\r\nDrawdown : 35-50%\r\nWithdrawal : %Profit > %DD",
    author: "ACTING SUB LT PIYAPONG SASOONTARA",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e21/e217cc888eeac64a72587a2ccef51616_c6b63dff56f141628ef6eef53db928e2.png",
  },
  {
    name: "18marchppsfx-500USD",
    account: 110128910,
    description: "DayTrad",
    author: "KHEMCHIRA TECHADAMRONGCHIT",
    authorPhoto:
      "/st/media/pim/media/user_photo/2b/2b2/2b2c09252f97b8ebce3ffd21eeabb320_993841a75e2043fea7e998ca602b471f.jpeg",
  },
  {
    name: "copy-X2102",
    account: 110128940,
    description: "Swing-trade",
    author: "Nguyễn Quốc Việt",
    authorPhoto:
      "/st/media/pim/media/user_photo/6d/6dc/6dc519e7b42044562728aedecbb822ea_3a68e673a1614758b497a58d2b3b96c6_OVVJqdh.jpg",
  },
  {
    name: "Amata_SC99",
    account: 110128961,
    description: "Amata port.",
    author: "MISS PUDSACHON NANTI",
    authorPhoto:
      "/st/media/user_photo/ed/edc/edc647ece77d341a89c1bcf650f0105d_e954e60bd2ae4cf9b2462b1e640cf5fd.jpg",
  },
  {
    name: "W2M Trading -Signals",
    account: 110129243,
    description:
      "Price Action Strategy\n0.5 ~ 1 % Risk per Trade\nMinimum Investment is $100 for Micro Accounts , and $1000 for Standard Accounts",
    author: "Momen Medhat",
    authorPhoto:
      "/st/media/pim/media/user_photo/cf/cf8/cf870c51f84d1bd75ffc9be5966fcc19_14f767f465c14ddfab3c661ac02226c9.png",
  },
  {
    name: "Trung_pro68_02",
    account: 110129287,
    description: "Kinh nghiệm 5 năm fx",
    author: "QUANG TRUNG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/e3/e36/e3633a69be0e4043fc9f3365c4a4b2a7_de753323377340239aa4726434f0c355.jpg",
  },
  {
    name: "Trung_pro68_05",
    account: 110129292,
    description: "Kinh nghiệm 5 năm fx",
    author: "QUANG TRUNG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/e3/e36/e3633a69be0e4043fc9f3365c4a4b2a7_de753323377340239aa4726434f0c355.jpg",
  },
  {
    name: "VFXSUCCESS",
    account: 110129519,
    description:
      "Hello, My strategy on the Forex market based to the Technical analysis and news. Daily profit 1% to 5% Life time . My fevret Pair XAUUSD, EUROUSD.",
    author: "Vidyadhar Khairnar",
    authorPhoto:
      "/st/media/pim/media/user_photo/cf/cfe/cfe9d5f6f4dbc7f126a3b9d15d99447f_1b64787fbc9f484396d26f91c3dd0019.jpg",
  },
  {
    name: "Daksh Forex Trading",
    account: 110129641,
    description:
      "I am professional Forex trader having experience 1 years in forex..you can copy my account without any strees Setup No Entry Target proft 10%-40% per",
    author: "SITARAM MEENA",
    authorPhoto:
      "/st/media/pim/media/user_photo/9c/9c7/9c70a216c094d1c15f1e61fb013a5d38_1a487011d8a64f2baadbc76eb1e96b8e.jpg",
  },
  {
    name: "CLB TRADER DA NANG",
    account: 110129693,
    description: "clb trader đà nẵng",
    author: "VAN NGOC LE",
    authorPhoto:
      "/st/media/pim/media/user_photo/9b/9bc/9bca2844cd66fc5725bb1fe08ea61aaf_fe9cc33f7406435480ece5e0f5082d78.jpg",
  },
  {
    name: "TheVih AUD",
    account: 110129741,
    description:
      "Đây là chiến lược lâu dài\nRất mong nhận được sự hợp tác của các nhà đầu tư",
    author: "THE VINH NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/db/db3/db30a1ef06608270bfee795fdd1659fd_0084a73d85c2496baa1fefb54cec5e8b.jpg",
  },
  {
    name: "Cutloss-oder",
    account: 110129771,
    description: "Cutloss để sống",
    author: "Thọ Lại Hữu",
    authorPhoto:
      "/st/media/pim/media/user_photo/18/18f/18f1a6aa29962ebbcf6f5a631bc55a79_86ccd5397b20478b94122adde183cc09.png",
  },
  {
    name: "Invester Mania",
    account: 110129808,
    description: "462140 since 2012 \nhttps://www.youtube.com/@MduTrader",
    author: "suu nguyen trong",
    authorPhoto:
      "/st/media/pim/media/user_photo/4a/4ab/4ab553c8f33c0b12add7a06eab5ca714_e1dc435457df4185bac31e042ada7ae4.jpg",
  },
  {
    name: "TRADOLOGY",
    account: 110129838,
    description:
      "Scalping & Swing Trading\nMonthly target is around 5%-15%\nنعتمد على الربح التراكمي \nونستهدف من5%-15% أرباح شهرية بإذن الله\nنتمنى التوفيق لنا جميعا ...",
    author: "SAYED MOHAMMED SAYED",
    authorPhoto:
      "/st/media/pim/media/user_photo/ec/ec0/ec09ea186f07ce7311ca3533b04ce0e0_d6020cc84db641ab8a636248f541d232.jpg",
  },
  {
    name: "S7X TRADING",
    account: 110129854,
    description:
      "- الناسخ للتجربة فقط \n\n- يمكنك الغاء النسخ في أي وقت ☑️\n\n- لا يوجد تعويض في حال الخسارة 🛑\n\n- دخولك معي يعني انك قابل لشروط أعلاه",
    author: "SHUAIB AL-BALUSHI",
    authorPhoto:
      "/st/media/pim/media/user_photo/9a/9a4/9a458aa90698f9fd39ae7a70be8bdfdb_6884ee56478e471cb3713125ee7a7394.png",
  },
  {
    name: "Vietlot x1000",
    account: 110129890,
    description: "Kèo Rủi RO",
    author: "VÕ GIANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/fa/fa8/fa85776aef04c758e042bdc266844d07_ba59232b8b704ae582f74f978117fed0.jpg",
  },
  {
    name: "EarnNEarnusd",
    account: 110129924,
    description: "Money is honey",
    author: "RAJ RANI",
    authorPhoto: null,
  },
  {
    name: "Trader Pro Level",
    account: 110129952,
    description:
      "Estrategia creada en base a SMC y leveling con proyección a ganancias mensuales siempre!!!\nPreguntas, sugerencias y/o contacto directo a +51 936768724",
    author: "José Ricardo Adauto Urrutia",
    authorPhoto:
      "/st/media/pim/media/user_photo/eb/eb0/eb0b6b87079be442e813c5f3f3f251dd_08b8802d06ce4365b8984adf29f0b042.jpg",
  },
  {
    name: "Duy FX Group",
    account: 110129958,
    description: "Private group",
    author: "NGUYỄN DUY",
    authorPhoto: null,
  },
  {
    name: "Professional",
    account: 110130200,
    description: "FOLTING IS COMMAN",
    author: "Reena Vasoya",
    authorPhoto: null,
  },
  {
    name: "AMEXSON TRADES",
    account: 110130311,
    description: "Trying to achieve daily profit",
    author: "ANCY SMINAGE",
    authorPhoto:
      "/st/media/pim/media/user_photo/d9/d9c/d9c3ecc9591a0c155215d95bfadd0da0_301fefa0695b423baff2c667c4e9a386.jpg",
  },
  {
    name: "Profit With Ovi",
    account: 110130326,
    description: "Technical analysis following news also.",
    author: "MST ASHA",
    authorPhoto: null,
  },
  {
    name: "The Profit",
    account: 110130346,
    description:
      "Signal: the best Ea, this EA Active in pair GBPUSD,EURUSD,GBPCAD and AUDCAD. - very low DD\n- min depo 100 usd\nyou can sleep peacefully with th signal",
    author: "DENDE ASMAWATI",
    authorPhoto:
      "/st/media/pim/media/user_photo/9f/9f9/9f9449085658bcec3eb6900cff61a5a5_5e068bcb34ea46119dc8b8ed485a34b3.jpg",
  },
  {
    name: "TRADING FULL TIME 2",
    account: 110130452,
    description: "Trading full time",
    author: "MẠCH TÀI",
    authorPhoto:
      "/st/media/pim/media/user_photo/74/744/744a461c65f5c68d1c48be32930c1894_6c424f5e18e04af286dc7ce4b03c1aaf.jpg",
  },
  {
    name: "TRADING FULL TIME 1",
    account: 110130479,
    description: "STRATEGY 2:  https://social-trading.club/strategy/110130452",
    author: "MẠCH TÀI",
    authorPhoto:
      "/st/media/pim/media/user_photo/74/744/744a461c65f5c68d1c48be32930c1894_6c424f5e18e04af286dc7ce4b03c1aaf.jpg",
  },
  {
    name: "MilL-Trade",
    account: 110130963,
    description: "I will be billionaire",
    author: "MR NATTAWUT MOOLPONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/2b/2bf/2bf26ce288eeeba3a7bda7f3d6a337d3_00c6825c893e4ea9a9a5795a516967fa.jpeg",
  },
  {
    name: "SmartDiversification",
    account: 110130987,
    description:
      "We work with various strategies, each operating separately. This approach enhances performance and enables us to achieve near-daily profits",
    author: "Alfredo Ramirez Velazco",
    authorPhoto:
      "/st/media/pim/media/user_photo/e9/e90/e902867bea085c2dfeaebb58e1c3c35c_afb79e2a0eae472eac0cbc54600aa3fc.jpg",
  },
  {
    name: "Think_Positive 1",
    account: 110131007,
    description:
      "I am a price action trader Take small trades with little risk. and little makes huge after some time. I have 8 years forex experience.",
    author: "Nithiyananth Mohan",
    authorPhoto:
      "/st/media/pim/media/user_photo/0e/0e3/0e369e2c41c2948b62532070dfc13b61_e8a651c10ba94b96b377945424d5876b.jpg",
  },
  {
    name: "Super Arrow - Pro",
    account: 110131100,
    description: "Momentum Strategy",
    author: "SOMPHOP PLENGPLUNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/24/243/2433fb050d733825322326a284bae297_1d9baf4212724a45a0c2cd47008c748a.PNG",
  },
  {
    name: "scalping smart-money",
    account: 110131198,
    description:
      "We manage your account day and night so that you get your profit back which you have given me for investing...",
    author: "Vyacheslav Mashtakov",
    authorPhoto:
      "/st/media/pim/media/user_photo/2f/2f9/2f9492e1071a179a6a1b7f515ad1af81_3d0c8ecbaa7942febd15910ae21b65ba.jpg",
  },
  {
    name: "Jonh Wick 1",
    account: 110131199,
    description:
      "I trade safely and long term. \nNot trade with a high leverage gambling method.\nVery low but stable profits",
    author: "THANH HOANG PHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50a/50a0ee43bc16db9ccddc9fc1578f0fa5_43739171f7624ad389af6f00d4aa5425.jpg",
  },
  {
    name: "DA Acad Srv6",
    account: 110131226,
    description: "Save money",
    author: "Thao Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/0f/0fd/0fd22e3cf1baec08436e3d3917164037_a62a37a6c9644383a503c5cebd19801e.jpg",
  },
  {
    name: "UnM Funds 1",
    account: 110131280,
    description: "An Toàn, Lợi nhuận ổn định, Kỷ Luật\nTaget 10- 15%/tháng",
    author: "Hằng Đỗ Thị Thanh",
    authorPhoto:
      "/st/media/pim/media/user_photo/91/919/9196a84d59056d4930647e1f5ccd9759_71fb669e00844358839a39ecaabd4322.jpg",
  },
  {
    name: "TNT Trader 3",
    account: 110131283,
    description: "An toàn, Lợi nhuận đều, Kỷ luật tốt\nTaget 10-15%/ tháng",
    author: "Hằng Đỗ Thị Thanh",
    authorPhoto:
      "/st/media/pim/media/user_photo/91/919/9196a84d59056d4930647e1f5ccd9759_71fb669e00844358839a39ecaabd4322.jpg",
  },
  {
    name: "Gold trade",
    account: 110131410,
    description: "Trade gold only",
    author: "Sakonnarong krasang",
    authorPhoto:
      "/st/media/user_photo/06/067/0673bbe203799efeb68673440fdac2e7_572fc97fa66e45aa8b54d5d93d893200.jpg",
  },
  {
    name: "gold daytrade",
    account: 110131445,
    description:
      "ใช้เงินที่เสียได้, ไม่รับรองผลใดๆทั้งสิ้น, แผนตามสถานการณ์,\nhttps://t.me/tospoltoommala",
    author: "MR TOSPOL TOOMMALA",
    authorPhoto:
      "/st/media/pim/media/user_photo/9a/9a7/9a7419456c5277a6b433ca50dbda49b5_dc94d5196da94cfe8394bacdbd79dc4f.PNG",
  },
  {
    name: "Eurusd Audusd",
    account: 110131499,
    description: "Safe returns upto 20% to 40%",
    author: "Sarita Bhatnagar",
    authorPhoto: null,
  },
  {
    name: "NRP_Aaron9x",
    account: 110131511,
    description: "Minimum risk_Maximum profit",
    author: "VAN LONG TRINH",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee4/ee42a7c12b5b4ee19f17fe67cf3afd3a_5194a5b0f1694b3f8d1e29c2a31aba72.jpeg",
  },
  {
    name: "ExpertAdvisorDynasty",
    account: 110131765,
    description:
      "Average gain is 150-200% / year.\nOne trade at a time.\nAlways have sl and tp.\nBack tested over 16 years period of Expert Advisor auto trading robot.",
    author: "Giang Nguyen Truong",
    authorPhoto:
      "/st/media/pim/media/user_photo/fe/fe3/fe3b0ab468547f0c0bc006b50f4c1de5_1ffdf5a0120a4b2bad2a39e424bd1eb6.jpg",
  },
  {
    name: "MIDAS ACADEMY",
    account: 110131775,
    description: "Keep it Simple",
    author: "HONG SON NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/ec/ec9/ec998e149668def57425d8dafacdb55e_df3fff9bb43b4aafb8d99bbdd5d68fe1.png",
  },
  {
    name: "SMC_HT_2024",
    account: 110131975,
    description: "SMC",
    author: "Hai Tran Thi Ninh",
    authorPhoto: null,
  },
  {
    name: "FOREXSTAY SOLARIS",
    account: 110132113,
    description:
      "FOREXSTAY SOLARIS safety, manage risk, set stop losses, avoid emotions, Practice discipline and education for long-term success.",
    author: "Saadeldeen Ahmed",
    authorPhoto:
      "/st/media/pim/media/user_photo/87/874/8740648f3a701eedf9fd0d72b15ce615_9980c8eb3ca249258749b4019bde4dfd_vka3KVr.jpg",
  },
  {
    name: "Forex  EA V3",
    account: 110132204,
    description:
      "Forex EA V3 is purely based on complex algorithm and mathematics with no emotions involved and the profit is guaranteed.",
    author: "Aazam Khan",
    authorPhoto:
      "/st/media/pim/media/user_photo/a2/a2a/a2a17971541fa95bedab6e2932a7975b_e3ffa3418472411dbcbc27a046945750.PNG",
  },
  {
    name: "Born to Win",
    account: 110132267,
    description: "In Sha Allah I will win",
    author: "ASIF HASSAN",
    authorPhoto:
      "/st/media/user_photo/16/16a/16adbc5c06615df88f3ff7f61ef2194e_41fcb118be624094b46516ae974b36bd.jpg",
  },
  {
    name: "INVI KINGS",
    account: 110132309,
    description: "MAGNETA makes you RICH.",
    author: "D GODFREY",
    authorPhoto:
      "/st/media/pim/media/user_photo/65/65a/65a165f2e3b479f909e4412e46c5f345_10d672fff5d74e82be49e5e2898b75ab.png",
  },
  {
    name: "TH Trading",
    account: 110132332,
    description: "Chậm\nĐều",
    author: "THI QUYNH THU LUU",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8a4/8a46c5824a5718953991285fe45e50fa_01c7f983056249dda23c13767f76c510.jpeg",
  },
  {
    name: "eddtrading",
    account: 110132356,
    description: "king of gold",
    author: "amine eddahbi",
    authorPhoto:
      "/st/media/pim/media/user_photo/43/437/437803b204c9ea36b994342257b73b45_4c8833ad0f394273aa1f90e2087dac01.png",
  },
  {
    name: "FOREX LOGICAL",
    account: 110132522,
    description:
      "FOREX LOGICAL success in disciplined analysis, risk management, and strategic decision-making, maximizing profit potential with calculated moves",
    author: "Sahar Abd Alrahem Abd Elghaffar",
    authorPhoto:
      "/st/media/pim/media/user_photo/be/be4/be45c5e4b720bdf2942b6cadbe5772cb_fd6f8120565b4fef80a314c0c3d9d2f4.jpg",
  },
  {
    name: "MDA Profit Trader",
    account: 110132571,
    description: "Use Money Management to control risk, Enjoy the profit.",
    author: "MADE ARIANTINA",
    authorPhoto: null,
  },
  {
    name: "Cumulative profit",
    account: 110132664,
    description:
      "I work on the xauusd pair only. The strategy is to buy gold from strong investment areas. There is no loss in this strategy.",
    author: "MOHAMMAD GHAZI AMIR",
    authorPhoto:
      "/st/media/pim/media/user_photo/94/940/940116ebfebfa0ab6f5d022d5e0af93d_9813e35661cd4f3bbe2e266607ce949d.jpg",
  },
  {
    name: "FOREX WORLD",
    account: 110132730,
    description:
      "FOREX WORLD trader skilled in analyzing currency markets, making informed decisions, managing risks, and executing profitable trades efficiently.",
    author: "SAHAR ABDELRAHIM",
    authorPhoto:
      "/st/media/pim/media/user_photo/d5/d5b/d5bcc3f881003f68262cc6d43e839893_d662b22132a6442daf70941830cf1f47.jpg",
  },
  {
    name: "FROM THE SCRATCH",
    account: 110132774,
    description: "NEVER LOSE HOPE",
    author: "Ahmed Alrawahi",
    authorPhoto:
      "/st/media/pim/media/user_photo/3d/3df/3dfbb5b8eb8de45436d406248a4f7e7d_430c88b84b0f4e0c822c43e2d53aef63.jpeg",
  },
  {
    name: "audcad  hedger",
    account: 110132775,
    description: "phí hoa hồng chỉ 10%",
    author: "khánh bạch quốc",
    authorPhoto:
      "/st/media/pim/media/user_photo/bb/bb4/bb4af47c185c8c4456d9a176e52cbbe5_1dd0169bb3f6412ea3d4b599cf32e6a1.jpg",
  },
  {
    name: "Safety First 1",
    account: 110132822,
    description: "How to Keep Your Money still exist",
    author: "Anselmus Sinabariba Silalahi",
    authorPhoto:
      "/st/media/user_photo/0b/0b4/0b41fd659e47db2c8aa5d1581c604352_020538cb31f44101a112c24b92c4dedc.jpeg",
  },
  {
    name: "J2_F_200UP",
    account: 110132892,
    description: "WELCOME!",
    author: "jeong jae park",
    authorPhoto:
      "/st/media/pim/media/user_photo/5c/5cd/5cdbb829f314dcf1d4f7676265d1bd2d_bf66f2ed91d74208b342f1e73c29cf1f.jpg",
  },
  {
    name: "RUT TIET KIEM",
    account: 110132919,
    description: "rut tiet kiem",
    author: "Hoài Thuận Phạm",
    authorPhoto:
      "/st/media/pim/media/user_photo/d7/d74/d746985821c4a9e0e56b642799bc1b56_f422464ad29a42aebb92478ecf325af5.jpg",
  },
  {
    name: "REAL GOLD TRADERS",
    account: 110132934,
    description:
      "We manage your account day and night so that you get your profit back which have given for investing. Mostly I'm trading on the XAUUSD.",
    author: "Kalinga Kamble",
    authorPhoto:
      "/st/media/pim/media/user_photo/9a/9aa/9aa1b4a2a096511d1e6cbdcac3c1ce08_5acd23cd575d4b2a84d48b59fd67c6e0.jpeg",
  },
  {
    name: "Okane Okane Trading",
    account: 110132947,
    description:
      "I am a trader with 8 years of experience.\nMy method only focuses on trading gold & BTC\nhttps://t.me/+bnZnJxgPbxs1Mjg1",
    author: "TRONG HIEU VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/42/42d/42d27b57121194fb25218f5ce4616a57_2cdd3d58effc45589ebd13b5f9ea0088.png",
  },
  {
    name: "AMC capital",
    account: 110133132,
    description:
      "I'm Vu Anh, a trading expert in the Forex market, I help you make a profit every month based on a proven strategy, follow me to get monthly passive in",
    author: "VŨ ANH",
    authorPhoto:
      "/st/media/pim/media/user_photo/f9/f91/f91cc9606fd1ec26d7682cf72231e0de_75babbeef62544a2b133917b4afd2e21.jpg",
  },
  {
    name: "Pro Trader",
    account: 110133186,
    description: "Daily consistent profit guaranteed…",
    author: "FASIL RAROOTHCHALI",
    authorPhoto:
      "/st/media/pim/media/user_photo/a8/a88/a88a491f17bcf9110fd99f50c8b6cbe7_3defe59ac60342a3bc11f629f9cb1bff.jpeg",
  },
  {
    name: "Pooled Funds",
    account: 110133195,
    description: "BTCUSD,XAUUSD,USDJPY",
    author: "佐藤 弘毅",
    authorPhoto:
      "/st/media/pim/media/user_photo/6b/6b4/6b4b6112b54759dc29dcf13939616955_b9ccb2a568984fbb8dfe59ca2792cf1c.jpeg",
  },
  {
    name: "Abundancia Infinita",
    account: 110133315,
    description:
      "MI ESTRATEGIA ES SENCILLA, BASADA EN EL CRUCE DE 3 -4 INDICADORES, ANALISIS TECNICO Y NOTICIAS DE ALTO IMPACTO.  Opero XAUUSD, BTC, EURUSD, CHFJPY.",
    author: "FRANCISCO RUBIO PARRA",
    authorPhoto:
      "/st/media/pim/media/user_photo/e9/e9c/e9ca9262e5bd3dea804194eb925729c0_98f0c17167d24cb58d3f4d62d7f366a6.jpg",
  },
  {
    name: "VIP NEW DREAM",
    account: 110133355,
    description: "Goal to Achieve Consistent Profitable Growth",
    author: "SUGIARTI",
    authorPhoto:
      "/st/media/pim/media/user_photo/f6/f62/f62f2453cc64d110b70b04c3d587972c_c0e1dce850574637ad64b1a756d654ee.jpg",
  },
  {
    name: "Luongtv-trading",
    account: 110133387,
    description: "Copy 1:1, profit 20%/ tháng, trade gold, btc",
    author: "TRẦN LƯƠNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/d9/d9f/d9f43ca8c3a918e3f0fd3089a95eec13_266bcf2bc278479ba1587e3cb909f31d.jpg",
  },
  {
    name: "DGP Institute",
    account: 110133444,
    description:
      "Price Action Base Trading, Every Trade Take Profit And Stop Loss. No Open Trades.",
    author: "Lalit Chaudhari",
    authorPhoto:
      "/st/media/pim/media/user_photo/80/807/807e881f41185b29a2cd5ea5635bf2e6_6110bfeb2e744008bb981403a111b788.jpg",
  },
  {
    name: "PRICEACTION007",
    account: 110133461,
    description:
      "Trade manually by price action\nDay~intraday~swing\nIm full time trader \nContact me on https://t.me/priceact007",
    author: "SONNY KRISNANDA",
    authorPhoto:
      "/st/media/pim/media/user_photo/fc/fcc/fccb1a1eed159297d68b5c784ad71fc1_7ade5749ba9147e4a942d9bf24290f0a.png",
  },
  {
    name: "EU Trading",
    account: 110133559,
    description: "Trades Strictly EURUSD. With very low risk",
    author: "Chinagorom Precious Ifeoma",
    authorPhoto:
      "/st/media/pim/media/user_photo/9c/9c8/9c88e289abd362f2faa4d5f9e92f32c9_e302e9309d134298a5c8c0a136f7b618.jpg",
  },
  {
    name: "EURUSD",
    account: 110133610,
    description:
      "- Autotrade\n- No trades limit.\n- No SL. Full margin risk.\n- Working 5/7",
    author: "Zainab Alhalwachi",
    authorPhoto:
      "/st/media/pim/media/user_photo/09/091/0917b603abc1e226b0778fa590a329cd_1da81c3e73464ee2b522a8c80d27cf10.jpg",
  },
  {
    name: "双拾科技---主力军",
    account: 110133649,
    description:
      "主力军策略（稳健型）：\n此策略专注于保持资本的安全性和交易的稳健性。交易三个品种，以分散风险。单笔风控2%以内，从而确保即便在市场波动时，投资者的资本也能得到妥善保护。\n特种兵策略（激进型）：https://www.social-trading.club/strategy/110133963",
    author: "以榜 吴",
    authorPhoto:
      "/st/media/pim/media/user_photo/b5/b56/b56f861c0d3fa5ff60a2b1b5b187b4a2_6dc1a15b0b374e3db20ec18303dc3c44.jpg",
  },
  {
    name: "groundswell",
    account: 110133726,
    description:
      "“Keep your face always towards the sun and the shadows will fall behind you.”",
    author: "DINH THU HOANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/30/305/3050009f82b35fd8359b4cc60f66b5a5_02b2ad45be214f1e800fc858583c7a46.jpeg",
  },
  {
    name: "The Red Fox",
    account: 110133772,
    description: "Grow Your Small Account",
    author: "Abel Amare",
    authorPhoto:
      "/st/media/pim/media/user_photo/6b/6b5/6b5a8ae9935309e71231f69bcb4b67f6_04e46b3d88b0441dba9eb62e9872977b.jpg",
  },
  {
    name: "KHANH HIEN INVEST",
    account: 110133884,
    description:
      "Chiến lược tối ưu cho Vàng, quản trị rủi ro tuyệt đối, tối ưu hóa lợi nhuận.",
    author: "NGUYEN KHANH HIEN LE",
    authorPhoto: null,
  },
  {
    name: "AI Robot Max",
    account: 110133950,
    description:
      "Chào các nhà đầu tư đến với AI Robot Max , chiến lược của chúng tôi là chiến lược dài hạn nhằm tìm kiếm lợi nhuận đều đặn và ổn định. Good Luck",
    author: "HUNG VY NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a0/a0e/a0e59506b3c9b75cca3a70db57658883_6b4b923ec192447bb77df38af0ccc67f.jpg",
  },
  {
    name: "双拾科技---特种兵",
    account: 110133963,
    description:
      "特种兵策略（激进型）：\n专注于追求利润最大化。单笔风控10%以内，相对于稳健型策略略显宽松，但这也是为了给予更大的灵活性和可能性。----主力军策略（稳健型）：https://www.social-trading.club/strategy/110133649，详情可访问策略链接以获取更多信息。",
    author: "以榜 吴",
    authorPhoto:
      "/st/media/pim/media/user_photo/b5/b56/b56f861c0d3fa5ff60a2b1b5b187b4a2_6dc1a15b0b374e3db20ec18303dc3c44.jpg",
  },
  {
    name: "ASIAN CAPITAL",
    account: 110133965,
    description:
      "Chào các nhà đầu tư đến với ASIAN CAPITAL, chiến lược của chúng tôi là chiến lược dài hạn nhằm tìm kiếm lợi nhuận đều đặn và ổn định. Good Luck",
    author: "HUNG VY NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a0/a0e/a0e59506b3c9b75cca3a70db57658883_6b4b923ec192447bb77df38af0ccc67f.jpg",
  },
  {
    name: "LifeLong Lucky",
    account: 110133975,
    description:
      "Chào các nhà đầu tư đến với LifeLong Lucky, chiến lược của chúng tôi là chiến lược dài hạn nhằm tìm kiếm lợi nhuận đều đặn và ổn định. Good Luck",
    author: "HUNG VY NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a0/a0e/a0e59506b3c9b75cca3a70db57658883_6b4b923ec192447bb77df38af0ccc67f.jpg",
  },
  {
    name: "APE TRADING",
    account: 110134058,
    description:
      "I have 5 years best trading experience and more profit every day every month. Thanks..",
    author: "EFTEKAR ALAM CHOWDHURY",
    authorPhoto: null,
  },
  {
    name: "VENKY HEDGING",
    account: 110134060,
    description:
      "WELCOME TO COPY TRADE OF VENKY HEDGING. DISCLAIMER I AM NOT RESPONSIBLE FOR YOUR PROFIT AND LOSSES, TRADE IS MARKET RISK.",
    author: "Venkateshan T s",
    authorPhoto: null,
  },
  {
    name: "PN-Investment",
    account: 110134145,
    description:
      "Hello lady and gentlement , im  prefer risk management method .  my strategie using PA+timming+s/r and Fundamental Analysis  . Profit  5-15% monthly .",
    author: "Thị Minh Phương Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/0a/0ac/0ac0614fccb3d3f3ca09dc01da8b7e65_38d0855f921c4ed583bc5d0aca99ad8d.png",
  },
  {
    name: "Kings of SMC",
    account: 110134156,
    description: "we are on SMC only",
    author: "Muhammad Shakeel",
    authorPhoto:
      "/st/media/pim/media/user_photo/2b/2be/2be390406469c6baace82345919de39a_2e3c10f56a1e49c69adec116764b19c4.jpg",
  },
  {
    name: "Best Return EA",
    account: 110134250,
    description: "Monthly target is around 20%-40%.\nVX: waihui168168",
    author: "辉 郑",
    authorPhoto:
      "/st/media/pim/media/user_photo/03/038/0387e7e59ab0315bc84caeaf65933d01_f8926d8961234d208163f6edf703bcda.jpg",
  },
  {
    name: "Cubes Gold",
    account: 110134420,
    description: "Pair XAU/USD\nMedium Risk\nUsing TP / SL",
    author: "HERU ST",
    authorPhoto:
      "/st/media/user_photo/16/16b/16b2fe6e136e842868fcb05ccfe269d4_288d8d8d5afd4560bff679baf21a8bcd.png",
  },
  {
    name: "PatronesLiquidez",
    account: 110134480,
    description:
      "¡Estrategia basada en patrones de liquidez tanto en continuación de la dirección como para el cambio de dirección!",
    author: "Maria Daissy  Valencia Osorio",
    authorPhoto:
      "/st/media/user_photo/29/292/29216db96b1aef72d27b425d84a48b4d_98f420c6596e47a083d6d6cd47e5baac.jpeg",
  },
  {
    name: "New Payday",
    account: 110134491,
    description: "Enjoy payday",
    author: "NURHAIDA DEWI",
    authorPhoto:
      "/st/media/pim/media/user_photo/cf/cf1/cf1080d58140ddc94108bfd9de884fe4_0cd8a17236ea4acda8c94803ed8a360d.jpg",
  },
  {
    name: "Nguyen Thi Oanh",
    account: 110134518,
    description: "Hegde Scalper Các cặp tiền chính",
    author: "Oanh Nguyen Thi",
    authorPhoto:
      "/st/media/pim/media/user_photo/25/250/25062ba4eb29306aa4ef4c1e3efe48a9_9cba833fe1f44afa8bda1c239f363a60.jpg",
  },
  {
    name: "LuluLuan EU mid-term",
    account: 110134581,
    description: "100% EU, low risk, stable profit",
    author: "Luan Bui",
    authorPhoto:
      "/st/media/pim/media/user_photo/17/177/1775a3230565de824323704c918e71d5_e0087965801246599716f69a41073338.jpg",
  },
  {
    name: "NHAT LINH FX",
    account: 110134595,
    description: "Đủ nắng hoa sẽ nở",
    author: "NHAT LINH VO",
    authorPhoto:
      "/st/media/pim/media/user_photo/da/da6/da661bda8edd9eec7727a799f484dfe6_615fad53e22c4518837001258d3e1dfd.jpg",
  },
  {
    name: "Black Diamond",
    account: 110134606,
    description:
      "HÃY TỈNH TÁO! Trade không phải là 1 kênh kiếm tiền duy nhất. Việc đầu tư quá nhiều tiền bạc, thời gian vào trade không phải là 1 hành động khôn ngoan.",
    author: "VAN NGHIA NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/79/79a/79a22f5e052d17ba5d3e5cd34320b590_739bd4bb7aea4467b64d286d2b69ec64.jpg",
  },
  {
    name: "Reliable Trading",
    account: 110134740,
    description:
      "Trading with multiple forex currency pairs\nSwing and day trading\nusing TP and SL\nAlgo Trading with strict supervision",
    author: "Muhammad Siddique Ahmed Merchant",
    authorPhoto:
      "/st/media/pim/media/user_photo/a7/a74/a74486923e5a635738ea405d810e8a45_10d4d642d66e4e67ada1330f72f532bd.jpg",
  },
  {
    name: "Jako trading",
    account: 110134801,
    description: "Kiếm tiền thật dễ!!",
    author: "Công Dinh Hoàng",
    authorPhoto:
      "/st/media/pim/media/user_photo/c5/c50/c506d8c992496f90a0b5184089437de0_1bad6a4748bd49169d7bc9e0ebdc5a48.jpg",
  },
  {
    name: "TheFoxxyFox",
    account: 110134876,
    description: "scalping",
    author: "ANAWACH CHIRAPONGTHANAKIT",
    authorPhoto:
      "/st/media/pim/media/user_photo/ec/ecf/ecf3567382690f2053d6c60ac7bc83b1_46e9f2d9f9894cbc963d6f23f82b76eb.jpeg",
  },
  {
    name: "Ajk sniper",
    account: 110134900,
    description: "sniper trader",
    author: "ANOJ KUMARAVEL",
    authorPhoto:
      "/st/media/user_photo/6f/6fa/6fa6892137b35c433b19cf5ba331bfb3_c774328ae50f4a3f8d29008146a84f41.jpg",
  },
  {
    name: "Game Theory Gold",
    account: 110134946,
    description:
      "Built from game theory and applied to trading, the entire decision-making process is based on finding the best decision point for the Player",
    author: "Kittipong Suwannarat",
    authorPhoto:
      "/st/media/pim/media/user_photo/48/48b/48bd89ec083f8dd590c7405bf14181ce_a8e79c84df3a44769c28f9e58116b711.jfif",
  },
  {
    name: "daily good profit",
    account: 110134960,
    description: "I grantee a daily profit with no risk",
    author: "Mohamad Saied",
    authorPhoto:
      "/st/media/pim/media/user_photo/98/985/9857b51e87cd73e0cca346f2dda320f3_e3f521ae9bc94f1db0bdc4305245f98b.jpg",
  },
  {
    name: "EurGbp 2-15",
    account: 110135028,
    description:
      "DD 5-7% con benificios superiores al DD mensualmente. Algunas operaciones pueden durar poco más de 1 día.",
    author: "Salvador Nuñez Limon",
    authorPhoto: null,
  },
  {
    name: "Tiểu Hổ Trading",
    account: 110135077,
    description: "Chuyên đánh vàng, dầu và BTC",
    author: "NGÔ ĐỨC",
    authorPhoto:
      "/st/media/pim/media/user_photo/18/184/1841c4c6e4af90819985c8a0b9bbaaf5_7b9bb3c8adcf43f0b85b4f99b231467b.jpg",
  },
  {
    name: "Hangauthentic12",
    account: 110135117,
    description: "Tích tiểu thành đại",
    author: "THI HANG BUI",
    authorPhoto:
      "/st/media/pim/media/user_photo/68/688/688017bcdefc053ac64358cd7d5bd88f_5767bb65efb344e2bd405c1832f6750b.jpg",
  },
  {
    name: "MY THIEN INVEST",
    account: 110135135,
    description: "Chuyên trading vàng. Quản trị vốn tối ưu, lợi nhuận ổn định.",
    author: "Thiện Trương Thị Mỹ Thiện",
    authorPhoto:
      "/st/media/pim/media/user_photo/21/215/215e3583fe332d923a1c57445c0e94b2_3c63644ddc32477493f4521b408b8435.jpg",
  },
  {
    name: "XAUUSD-best",
    account: 110135225,
    description:
      "Control the maximum single loss within 10% to achieve the goal of monthly returns of 10% -30%.",
    author: "云凯 黄",
    authorPhoto:
      "/st/media/pim/media/user_photo/a6/a6e/a6e12a7aae70d0441c1f5cccd15dd8bd_39d26e39aac5484bb6411f6fc8d7388c.jpg",
  },
  {
    name: "Victory Gold",
    account: 110135293,
    description:
      "10000美金，总风控30%（=3000美金），单次风控500美金，设置有70点的止损，100点的止盈，请做好资金管理。激进的1000美金开始跟单，资金小的不要跟随，以免造成亏损。不明白加TG/line:vvv5525",
    author: "世景 覃",
    authorPhoto: null,
  },
  {
    name: "Victory Forex",
    account: 110135296,
    description:
      "5000美金，总风控30%（=1500美金），双货币对交易，回撤很小，稳定月收益5%，请做好资金管理。激进的3000美金开始跟一倍，资金小的不要跟随，以免造成亏损。不明白加TG/line:vvv5525",
    author: "世景 覃",
    authorPhoto: null,
  },
  {
    name: "EURUSD to KASH",
    account: 110135455,
    description:
      "Trade only include symbols: EURUSD\nTrading days (00:00-24:00): every Weekday\nStrategy type: Supervised Algorithm",
    author: "VƯƠNG PHỦ",
    authorPhoto:
      "/st/media/pim/media/user_photo/7e/7e8/7e8234e7ad69d3b70a778f91943f2f29_8209cfb1c764460cbbcc230c791da3ab.png",
  },
  {
    name: "5XCommunity",
    account: 110135530,
    description:
      "Mi estrategia es simple, esta basada en conceptos smart money al igual que las noticias fundamentales. Con mis pares favoritos XAUUSD, GBPUSD.",
    author: "Pedro  Garcia Rubio",
    authorPhoto:
      "/st/media/pim/media/user_photo/c3/c34/c341e088f12988420b5523f7747ca71b_0ad53f92956e4e5784f12a322ddd73a9.PNG",
  },
  {
    name: "Only EURUSD_Chau",
    account: 110135685,
    description:
      "Swing trading means entering and exiting a trading position within a usually short period of time, often within one day (day trading).",
    author: "Chau Tran Nguyen Quynh",
    authorPhoto:
      "/st/media/pim/media/user_photo/7e/7e8/7e8234e7ad69d3b70a778f91943f2f29_49fb8f6c17d141dbb3dd3b2c566afbe2.png",
  },
  {
    name: "Gold Prize",
    account: 110135688,
    description: "#XAUUSD",
    author: "Aprian Doni Faizal",
    authorPhoto:
      "/st/media/pim/media/user_photo/d2/d20/d20a2c8f5d73f2e25f72a51baddc03b1_2814a15b306a4522af2117aeaaeed4ca.jpg",
  },
  {
    name: "Social Trading small",
    account: 110135689,
    description:
      "This is the safe and slow strategy for consistent profit. We may go for big drawdown up to 500$ but I will never blow your account. Sharing is caring.",
    author: "UZAIR RIAZ",
    authorPhoto:
      "/st/media/pim/media/user_photo/fc/fcf/fcf2c25c985ae41d7de0bf36237af1b8_2d6c3317815e477b8a4d965495b06ea0.png",
  },
  {
    name: "Only EURUSD_Anh",
    account: 110135691,
    description:
      "Swing trading means entering and exiting a trading position within a usually short period of time, often within one day (day trading).",
    author: "Anh Tuan Tran",
    authorPhoto:
      "/st/media/pim/media/user_photo/7e/7e8/7e8234e7ad69d3b70a778f91943f2f29_816763b426a1421591e312841cc0811d.png",
  },
  {
    name: "HPA Capital",
    account: 110136017,
    description:
      "Don't trade gold, don't burn account.\nYour job is to travel, I'll take care of making money.\n--> More on MQL5: https://www.mql5.com/en/signals/2209860",
    author: "Minh Tuấn Cao",
    authorPhoto:
      "/st/media/pim/media/user_photo/4a/4a5/4a552374187bd3c944ba6d795e291e5e_fadec6a1951f4fb980160522a1f5f310.jpg",
  },
  {
    name: "Keeperofthelight89",
    account: 110136023,
    description: "Responsible, Fearless, decisive, reckless, never give up",
    author: "MINH THUY BUI",
    authorPhoto:
      "/st/media/pim/media/user_photo/30/306/306f1c2eb9833e69a63cdd8be1e47d4c_24bfdd4727c244438703222a6e276317.jpg",
  },
  {
    name: "Gold Trading",
    account: 110136160,
    description: "Position, Swing Trading",
    author: "Kiện Năng Lạc",
    authorPhoto:
      "/st/media/pim/media/user_photo/65/65a/65a67e96d5ca6f4a40c893991f5b6878_2fc0fab652d342a4839011053f6b712c.jpeg",
  },
  {
    name: "Art of Averaging 1",
    account: 110136191,
    description:
      "An averaging algorithmic trading strategy on major forex pairs that will uses a trend following strategy.",
    author: "Yi Hsuan Ko",
    authorPhoto:
      "/st/media/pim/media/user_photo/52/52d/52d749ec78b8eabb7a6ccff773dc7dbe_fb0651599b14463ab7da0e31dc2b0f7a.png",
  },
  {
    name: "Hephaistos",
    account: 110136323,
    description: "Safe and sustainable profit goals",
    author: "TRUONG NGHIA",
    authorPhoto:
      "/st/media/pim/media/user_photo/83/83f/83f555e0f8484b4943591b17ac720e47_181cbfb5eff74a47817c3068a3090787.png",
  },
  {
    name: "Shivanshi1",
    account: 110136372,
    description:
      "Welcome to the Exness pro hope you all enjoy trading with us. daily profit minimum 50$ safely  join my Telegram https://t.me/+ClADyAf1q31hYzhl",
    author: "REKHA DEVI",
    authorPhoto:
      "/st/media/pim/media/user_photo/bc/bcd/bcda547cc416b985d765099ad4e9d1f0_dac675ee243c4a148d6a8f0a97bc7ecd.jpg",
  },
  {
    name: "SAFE TRADER SCALP",
    account: 110136510,
    description:
      "I USE SL AND TP HIGH RISK HIGH PROFIT FOLLOW YOUR OWN RISK JOIN TG @SNSGOLDENCHANCE",
    author: "MD HUSAIN ABBAS",
    authorPhoto:
      "/st/media/pim/media/user_photo/56/562/56268b9fcf8ae0e17012b10feba1efc6_dfb7f34ae6c541179c77f4033f0e8ebc.jpg",
  },
  {
    name: "---- NAFX ----",
    account: 110136520,
    description: "Safe,guaranteed and reliable \nما منبيعك وهم ✅",
    author: "Nihad Alyousfi",
    authorPhoto:
      "/st/media/pim/media/user_photo/53/534/534235c45198d6fb205a6681fa0bc2d4_556372023fab4c75bea6b971f0cedea5.jpeg",
  },
  {
    name: "Trading for Living 2",
    account: 110136554,
    description:
      "Trading for a Living: Psychology, Trading Tactics, Money Management",
    author: "VAN NGOC NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cb9/cb97bd49dd30d8ef96b07b56b4ad05bb_596cd7784f2f4db3b08fd827fad1f135.png",
  },
  {
    name: "Trading for Living 5",
    account: 110136600,
    description: "Trading for Living 5",
    author: "VAN NGOC NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cb9/cb97bd49dd30d8ef96b07b56b4ad05bb_596cd7784f2f4db3b08fd827fad1f135.png",
  },
  {
    name: "HỌC VIỆN GOLD",
    account: 110136601,
    description:
      "Tập trung chủ yếu trade vàng, mức kì vọng lợi nhuận tháng khoảng 30%.",
    author: "Hoang Ninh Duc",
    authorPhoto: null,
  },
  {
    name: "默默无闻小心翼翼的淘金者",
    account: 110136602,
    description: "默默无闻小心翼翼的淘金者",
    author: "值海 张",
    authorPhoto:
      "/st/media/pim/media/user_photo/10/10b/10bbfbe83e00499a56f43e3f081f9320_548b60ec242b4cbd91a74278e5a75b49.png",
  },
  {
    name: "HUNTING BULLION",
    account: 110136681,
    description: "Safe Trading",
    author: "Muhammed Sameer",
    authorPhoto:
      "/st/media/pim/media/user_photo/57/571/571a2b63f2eb45a066d2067615a2f256_c343c1df6f5b43b49237f820b8ba5384.jpg",
  },
  {
    name: "Money within Reach",
    account: 110136942,
    description:
      "Kênh đầu tư an toàn, tiền trong tầm tay bạn.\nhttps://t.me/exnesssocialtrader tham gia nhóm telegram để bàn luận nhiều hơn cùng bọn mình.",
    author: "Ha Nguyen Hoang",
    authorPhoto:
      "/st/media/pim/media/user_photo/9a/9aa/9aaa7608560e514cf4e44b4c46ffb893_b68822a809f2487abef72490e1ca9753.jpg",
  },
  {
    name: "Growth Horizon AA",
    account: 110136978,
    description: "Grid Close System.",
    author: "MR SIRAPAT THUAMPHIWTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/ba/bac/bacc4860df3b7449cc5af802c64e9edd_2e878d2f255d40e798d2f21adc7ce070.jpg",
  },
  {
    name: "MARKET WINNER",
    account: 110136979,
    description:
      "I,m have more than 10 yeras experience in forex trading.This strategy is designed by an automated way.Also Back tested again n again to Survive",
    author: "Fozia Noreen",
    authorPhoto:
      "/st/media/pim/media/user_photo/27/27f/27f0a4567004c22600d21a021a048efd_421e2a5823484717999cba13ec612897_gRRwUjN.jpg",
  },
  {
    name: "TOP SNIPER- EURseiEA",
    account: 110137022,
    description: "TOP SNIPER- EURseiEA",
    author: "Xiaojie Pan",
    authorPhoto:
      "/st/media/user_photo/9a/9a6/9a669143a2b5860c7a0cfa4ba49af4fe_a46663edd1b847d8b0d6890286850f9c.jpg",
  },
  {
    name: "Khaled ALAZMI",
    account: 110137064,
    description:
      "خطوره قليله وربح طيب ان شاءالله \nدخول صفقات اقل من 20‎%‎ من راس مال المحفظه \nكل نهاية شهر يتم سحب ارباحك وتستطيع كل اسبوع \n\nالقرار لك",
    author: "Khaled  ALAZMI",
    authorPhoto:
      "/st/media/pim/media/user_photo/c0/c09/c092bf4f4392566ff736c248ced75eb4_db95be12b8204ac18bb543a0c8ef1282.jpeg",
  },
  {
    name: "Trader Success",
    account: 110137068,
    description:
      "Điềm tĩnh mỗi ngày 1 đến 2% và tái đầu tư. Đều đặn, Kỷ luật mang lại sự thịnh vượng tài chính.",
    author: "Duong Ta Xuan",
    authorPhoto:
      "/st/media/pim/media/user_photo/4d/4de/4def270cf7db5e73dc5f1f92b8c32e42_c8df96cdbc884947bc656daaf8d3aaca.jpg",
  },
  {
    name: "pro8xgoldswing",
    account: 110137154,
    description:
      "Experience, knowledge, psychology, and discipline are the keys to creating steady and safe profits\nhttps://t.me/+Y7zmkIsJS-MxMDM9",
    author: "binh Nguyen van",
    authorPhoto:
      "/st/media/pim/media/user_photo/29/292/2925a02115c8b0d2d7fdca052fccace9_ce6c6ea30a734fe4a5091ddb317a167a.jpg",
  },
  {
    name: "I am back",
    account: 110137157,
    description: "I am back",
    author: "文豹 张",
    authorPhoto:
      "/st/media/user_photo/af/af7/af750b21709619dc36c6d3b1e949aea6_6a1fb0f9a85d4315872ae909b1b4e4ae.jpg",
  },
  {
    name: "Gold Scalping SL-TP",
    account: 110137167,
    description: "Gold Scalping SL-TP",
    author: "MINH TUAN VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/e6/e6c/e6c93c84d2b89284e3155663f42894d4_12f0958fa6e841c59726d6967e173a20.jpg",
  },
  {
    name: "trading maddhyam",
    account: 110137224,
    description:
      "we are robotic trader with very low drawdown.\nmin 10% profit guaranteed.",
    author: "SONU KUMAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/7d/7d4/7d4140c5799f3a4ffa95261b0105f566_ff5bb4f085b04f4282452ef38b52efd4_kLHVAnu.jpg",
  },
  {
    name: "CS5 FX Trading",
    account: 110137228,
    description: "Good Invest",
    author: "SIMPHORIANUS KRISTOPHORUS",
    authorPhoto: null,
  },
  {
    name: "xToro - AAA",
    account: 110137231,
    description: "testing",
    author: "Nhuong Nguyen Vu Le",
    authorPhoto:
      "/st/media/pim/media/user_photo/4e/4ed/4edcc8a386a3e65e34875d33d0086d3c_872c6608fa3c40a99c5ad896a42cc2b9.jpg",
  },
  {
    name: "Gold Rush game",
    account: 110137281,
    description: "Gold miner",
    author: "DOAN BICH PHUONG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/b2/b24/b247cd385981ba814b4e61028037cdd9_2cee8a07ff614aa3b2fd14b9b59c62c5.jpg",
  },
  {
    name: "A NÔNG DÂN TRADE FX",
    account: 110137438,
    description: "ACE trader cần Hổ Trợ miễn phí IB \nzalo: 0777778782",
    author: "TAN CUONG DOAN",
    authorPhoto:
      "/st/media/user_photo/a8/a8b/a8b45468db743ac88496a84ced3628b1_3a902a34f5be4dec86e9547629bff5a7.jpg",
  },
  {
    name: "Askari team",
    account: 110137469,
    description: "Monthly Best profit",
    author: "MUHAMMAD NAZIR",
    authorPhoto: null,
  },
  {
    name: "Wealth Builder",
    account: 110137526,
    description: "very low risk , focus on protecting and compounding",
    author: "Gurjeet singh",
    authorPhoto: null,
  },
  {
    name: "10 Percent Profit",
    account: 110137543,
    description:
      "Almost 10 years of forex experience..\nCopy with same equity..\nYour equity is safe here..",
    author: "HASSAN KHAN",
    authorPhoto: null,
  },
  {
    name: "Asha ki Nayi Ꮶɪʀᴀɴ",
    account: 110137544,
    description:
      "Only profit robot trading group for those who make loss with own trade.",
    author: "RAMESH MAURYA",
    authorPhoto:
      "/st/media/pim/media/user_photo/d0/d0d/d0de70a30a8c6cf954d2e74860092055_405edcaa62314a29a56199b0592a21ca.jpeg",
  },
  {
    name: "Martingale PLUS",
    account: 110137560,
    description:
      "This trading strategy focuses on EURUSD, EA swing trading, Martingale PLUS, expected monthly returns of over 10% ……",
    author: "静平 杨",
    authorPhoto:
      "/st/media/pim/media/user_photo/48/48f/48f97344e19b589668f2c8c6004fa3b6_2b234076e52d4a05a5b32e2cba0f3e4b.png",
  },
  {
    name: "Estrategia 1",
    account: 110137593,
    description: "Portafolio de inversión 1",
    author: "Danna Katherine Grajales Chaparro",
    authorPhoto:
      "/st/media/pim/media/user_photo/17/178/17856e8ee19dd4d46c2ee0343f0e1b12_36877afec8054962ac5f02ece2d70f34.png",
  },
  {
    name: "Estrategia 2",
    account: 110137594,
    description: "Portafolio de inversión 2",
    author: "Danna Katherine Grajales Chaparro",
    authorPhoto:
      "/st/media/pim/media/user_photo/17/178/17856e8ee19dd4d46c2ee0343f0e1b12_36877afec8054962ac5f02ece2d70f34.png",
  },
  {
    name: "Mamba Social Trading",
    account: 110137601,
    description:
      "Uso Indicadores Tecnicos como osciladores entre otros para fluir en el mercado para alcanzar la rentabilidad planeada.",
    author: "MONICA PANTANO GONZALEZ",
    authorPhoto: null,
  },
  {
    name: "Dautuviet Group EU 1",
    account: 110137669,
    description:
      "Chúng tôi sử dụng phương pháp break out kết hợp phân kỳ cho cặp EU này, mọi rủi ro đều được kiểm soát dưới 20%",
    author: "Thạnh Hoàng Ngọc",
    authorPhoto:
      "/st/media/pim/media/user_photo/e4/e43/e43735d47c254c28ba36490c927dbcc3_87c0f18d35d34e88a5d061ee39604cdd.jpg",
  },
  {
    name: "Dautuviet Group GU 1",
    account: 110137672,
    description:
      "Chúng tôi sử dụng phương pháp break out kết hợp phân kỳ cho cặp GU này, mọi rủi ro đều được kiểm soát dưới 20%",
    author: "Thạnh Hoàng Ngọc",
    authorPhoto:
      "/st/media/pim/media/user_photo/e4/e43/e43735d47c254c28ba36490c927dbcc3_87c0f18d35d34e88a5d061ee39604cdd.jpg",
  },
  {
    name: "Trade For Living",
    account: 110137674,
    description:
      "MMA Setups: Giao dịch theo bẫy thanh khoản (Liquidity Traps) - dựa trên Nỗ lực thất bại và Thuyết nhà buôn lớn.",
    author: "Ngoc Anh Cao",
    authorPhoto:
      "/st/media/user_photo/29/298/29897c7a3f74751537b821d94b21d51e_ebd393384c444cbb846c09c6a3fc01a7.jpg",
  },
  {
    name: "Falcon FX  ICT",
    account: 110137718,
    description:
      "Exploring advanced trading strategies such as carry trades, correlation trading, and scalping.\nWe Use Strict Stop Loss for Maintaining Risk.  \nBest",
    author: "YOGESH CHAUDHARI",
    authorPhoto:
      "/st/media/pim/media/user_photo/4f/4f8/4f8138b5448ce0479858d9e15a554dec_dca92d585d7b4fa7ae4620fafecd9b74.jpg",
  },
  {
    name: "Tec Trader",
    account: 110137764,
    description: "NA",
    author: "Mahamudsha Mujawar",
    authorPhoto:
      "/st/media/pim/media/user_photo/aa/aaa/aaadbdd5d35b5c26db1c10ccb1690bea_bf8743c35f4e4f0daff0e4bcb3e5c79d.jpg",
  },
  {
    name: "GOLD CAT HUNT 1",
    account: 110137964,
    description: "SL, TP",
    author: "Nụ Phạm Thị",
    authorPhoto:
      "/st/media/pim/media/user_photo/cd/cdb/cdb72d8093ae8f8005b4b1c71ee31dc7_1a64e4ead49941518cc098d477da2a82.jpeg",
  },
  {
    name: "MONEY TRADING 4",
    account: 110137975,
    description: "GET MONEY EVERYDAY",
    author: "LY LÊ THỊ",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1a8/1a8b8b84934c5259f9daaeddb04cc523_2f4ef1e3f8d34305965662b381a2f127.png",
  },
  {
    name: "TNT Currency",
    account: 110138200,
    description: "slowly but surely, monthly target about 10 - 20%",
    author: "Thành Nguyễn Thế",
    authorPhoto:
      "/st/media/pim/media/user_photo/94/942/942e20716600e1e305e53c8b35b49001_15e5f86993fd4279a4b2bfcedcd60f81_ktC5PBU.png",
  },
  {
    name: "STACHOCASTIC",
    account: 110138208,
    description: "Let's make some money$$$",
    author: "WORRWICH WONGKUAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/72/72c/72cca6fe16eeed5457c3f274d0320ac5_2bafb7ce1c8947c1821c232303751249.png",
  },
  {
    name: "BOT TRADE PRO",
    account: 110138479,
    description:
      "- Ưu tiên an toàn về vốn cho nhà đầu tư.\n- Lợi nhuận hàng tháng khoảng 5-10% (đã trừ chiết khấu).\n- Sử dụng chỉ báo RSI và phương pháp trung bình giá.",
    author: "TRU HUY BANH",
    authorPhoto:
      "/st/media/pim/media/user_photo/f0/f0b/f0b99807bb3c9b18e19e2232a6c3b864_07c3ee2be370400b80e5f99316ab6490.jpg",
  },
  {
    name: "Forex king",
    account: 110138551,
    description: "Forex king",
    author: "saiful islam",
    authorPhoto: null,
  },
  {
    name: "SBJ-TRADERS",
    account: 110138602,
    description:
      "SBJ-TRADERS is providing you best trading platform without any risk",
    author: "Sunil Ruhela",
    authorPhoto:
      "/st/media/pim/media/user_photo/65/659/6593df9cf74f748a6677ac4fa0a8334d_7ad798b7f70e40d396f58201b68be19a.jpg",
  },
  {
    name: "Adventure - Port 1",
    account: 110138604,
    description:
      '-  Trading " con số " .\n-  Tôi luôn duy trì " vốn chủ sở hữu ở mức 5.000$ " \n    Nếu muốn lãi kép thì có thể tái đầu tư từ phần lợi nhuận đã có.',
    author: "VÕ GIANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50f/50f095fde31538826e6c22582a428756_c8d6b459f6af43ae8495478a624f81e7.png",
  },
  {
    name: "Little Bird",
    account: 110138616,
    description: "Hi my friend, let relax and I make profit for you!",
    author: "Vo Thanh Quang",
    authorPhoto:
      "/st/media/pim/media/user_photo/75/753/7536d2a290b052488d956c4c6c02d46a_7d6826d5eb6340959db8e0d048b12e8b.jpeg",
  },
  {
    name: "CSFX_TRADER",
    account: 110138661,
    description: "I have 4 years Experience in This Market",
    author: "RAKESA SAHU",
    authorPhoto:
      "/st/media/pim/media/user_photo/91/915/91525f4a213da92fc9e651a0020ca81a_ad97d09f0d6b401ab3c30414ee3781c4.jpg",
  },
  {
    name: "KERALA TRADER",
    account: 110138733,
    description:
      "Hi, My strategy on the Forex market is simple, based to the technical analysis . My favorite pairs is XAUUSD, My Telegram\nt.me/Kerala_trader",
    author: "Afradeen  Muhammed Kunju",
    authorPhoto:
      "/st/media/pim/media/user_photo/98/988/9888a1845da66e68dc3cba86847a9a67_f701bfe1d7af499f9c2ff12053531e0c.jpg",
  },
  {
    name: "AB BOSS TRADING",
    account: 110138792,
    description:
      "Với đội nhóm có trên 10 năm kinh nghiệm, ở tài khoản giao dịch này, chúng tôi đặt ra lợi nhuận từ 20-45% monthly",
    author: "Tuan Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/67/672/6725006f2df84a04b47544231ee01202_6621690e334f490d8cff83f6778c57dd.jpeg",
  },
  {
    name: "Protrading-Fx496",
    account: 110138801,
    description: '"Turning Knowledge into Profit."',
    author: "THANH CHANH PHAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/a4/a46/a4634b645b98d0db65a4b0158df764e3_e2de98827b32471c8f91ae2dd72502d0.png",
  },
  {
    name: "Chun Xám Trading",
    account: 110138946,
    description: "begin 2019 \nleverage 1/200\ntarget profit 30-50%/morth",
    author: "Hải Nam Nguyễn Bá",
    authorPhoto:
      "/st/media/pim/media/user_photo/cd/cd1/cd14925501e22e09b55164ad45ac8ef1_1554cf5a07bb4b06b7db72475a534d76.png",
  },
  {
    name: "Kỷ luật là chìa khoá",
    account: 110138953,
    description:
      "Kỷ luật mỗi ngày . Duy trì mục tiêu nhỏ sẽ tạo nên điều phi thường",
    author: "NGUYỄN HƯNG",
    authorPhoto: null,
  },
  {
    name: "Manchester Apisbot",
    account: 110139029,
    description:
      "100% Mechanical trading using EA, Smart Averaging to lower drawdown. Trade GBPUSD. Trading contains risk, use money you can afford to loose",
    author: "David Yulianto Santoso",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/696/696c116dd07051e4d302bd6ee53779b3_aec007cb1d8c4deeb7f65842b5577a61.jpg",
  },
  {
    name: "ICT Trade Pro1",
    account: 110139145,
    description: "Join us for Professional Treading .",
    author: "Shahid Ahmad Shaheed",
    authorPhoto:
      "/st/media/pim/media/user_photo/bd/bd4/bd43d22f817e0c72165cc5cbd8db1bc1_eb4c39b7241548d0aa15e30de2b52717.png",
  },
  {
    name: "Trader VN88",
    account: 110139223,
    description: "Day trader",
    author: "Sỹ Sơn Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/ae3/ae340437c5c8662e28767eae1a45b3ce_1d3b9222821a463eb133b88a59f6b81e.png",
  },
  {
    name: "SR GOLD TRADER",
    account: 110139363,
    description: "Minimum return 5% to 10%",
    author: "Reyaj Ansari",
    authorPhoto:
      "/st/media/pim/media/user_photo/d5/d5d/d5d8866d9fc5ec39afbff7750ff3b2ed_7b965fb1f01a41328a72ecfbb36e3631.jpg",
  },
  {
    name: "ALRASHEDFX",
    account: 110139415,
    description:
      "التداول بطريقة بسيطة وامنه \nالربح المتوقع من 15الى 30% شهريا",
    author: "Mohammed  Alrashed",
    authorPhoto:
      "/st/media/pim/media/user_photo/0e/0e5/0e588df588589285dd8281f18e928935_075e3a7537e64b03a8bbe02f70aa389c.jpg",
  },
  {
    name: "ZAMAN DAILY EARNING",
    account: 110139419,
    description:
      "10% to 25% monthly target inshallah my believe is لا الہ \nSafety first\nDaily 1percent plus",
    author: "Muhammad zaman",
    authorPhoto:
      "/st/media/pim/media/user_photo/b1/b1d/b1d4920bd41818819dac00385fc04697_f178379cd8e14b85aca2eb9dd72be7da_THaPORs.jpg",
  },
  {
    name: "Federally FTA",
    account: 110139472,
    description:
      "Fundamental Traders Arabian - FTA\nFundamental & Technical Trading for FOEX & CFDs\nااستثمار مغلق لمدة 3 او 4 شهور",
    author: "Ahmed Ibrahim",
    authorPhoto:
      "/st/media/pim/media/user_photo/52/52b/52bfb840ea86b5b9d087b6ec3ea52f57_be00454dd4d84118a996e66b88bc682b.jpg",
  },
  {
    name: "Chiến lược triệu đô",
    account: 110139514,
    description: "Gold club",
    author: "VAN DONG BUI",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b98/b98be401ca316cb9cfbe1b6e9f394795_49538207101440a6b942690aa06e7b41.jpeg",
  },
  {
    name: "DinhTrung Invest",
    account: 110139585,
    description:
      "Nơi nào có ĐÁM ĐÔNG và niềm tin VỮNG CHẮC, nơi đó sẽ tràn ngập ĐAU THƯƠNG  và MẤT MÁT.",
    author: "Trung Chế Đình",
    authorPhoto:
      "/st/media/user_photo/e7/e7d/e7def86a78a5a8d4e3c498d651d69404_81558c797c194e25863330062acd0a23.jpg",
  },
  {
    name: "Trading Raja",
    account: 110139594,
    description: "Scalping is the best policy of trading platform",
    author: "Vinni  Lalwani",
    authorPhoto: null,
  },
  {
    name: "SwingToWin",
    account: 110139620,
    description: "Swing strategy",
    author: "Le Hoang Long",
    authorPhoto:
      "/st/media/pim/media/user_photo/f4/f47/f479694d30ee166fdf984906641c0aa0_5d14a5636df54c1381958de2836a5088.png",
  },
  {
    name: "ROSE TRADING - GU",
    account: 110139666,
    description: "Monthly profit target: 15% or more!",
    author: "Ánh Hồng  Trương",
    authorPhoto:
      "/st/media/pim/media/user_photo/42/42a/42ad1874f290590860acee98a7bbb7c2_629ce42473694725801eb00a2230353f.jpg",
  },
  {
    name: "TERMINATOR",
    account: 110139720,
    description:
      "TERMINATOR EA is the simulation of human intelligence processes by machines, especially computer systems.So we get good profit from this system.",
    author: "SAHAR ABDELRAHIM",
    authorPhoto:
      "/st/media/pim/media/user_photo/7e/7ea/7ea028f579200bc3b38be188d7ee270d_dae72a11e7bd4173a67a6c3ad0768b74.jpg",
  },
  {
    name: "EA Ttrade V2",
    account: 110139896,
    description:
      "Chiến lược trung bình giá và xử lý lệnh thông mình giúp luôn chốt lời được dù thị trường đi như thế nào.\nNgày nào cũng có lợi nhuận",
    author: "PHẠM TÂN",
    authorPhoto:
      "/st/media/pim/media/user_photo/4c/4c7/4c7494b3349171c5f057ea55e0fada52_9af3b6457efe42c080ccea19663ec2c8.jpg",
  },
  {
    name: "trading 001",
    account: 110139898,
    description: "0869732393",
    author: "HUU TOAN NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/42/423/423b5385f182c54b1f1f19ebc1c7c808_f42f4f7232604354b93c9bc4b186fefd.jpg",
  },
  {
    name: "Social FX Trading",
    account: 110139934,
    description:
      "I trade price action. I use sl at every trade. I emphasis on power of buyer and seller. What's up +8801303515877",
    author: "AL  HELAL",
    authorPhoto:
      "/st/media/pim/media/user_photo/6c/6c9/6c975a90a683799136cd7a9db3eac2e0_de522f34f11e4ba098473a3bac6f7dca.jpg",
  },
  {
    name: "MFTTradingVN",
    account: 110139950,
    description: "Chanh niem",
    author: "Lương Cường Trần",
    authorPhoto:
      "/st/media/user_photo/89/891/891b0d3394227fb7fe7406753dfd19ad_944584731bcb44759773564f28408dcd.jpg",
  },
  {
    name: "STEADY AI",
    account: 110139986,
    description: "STEADY AI",
    author: "HANA LESTARI",
    authorPhoto:
      "/st/media/pim/media/user_photo/95/954/95490fe5deb29280933c9a3f9fdc34c1_9f6c9c619ec84183bd8f53e144d8c2c8.jpg",
  },
  {
    name: "M5 Scalping",
    account: 110140030,
    description:
      "This account will trade on safe strategy with 1 to 10% per day returns on Gold .",
    author: "Muhammad Saleem",
    authorPhoto: null,
  },
  {
    name: "EL CAPITAL",
    account: 110140079,
    description: "EL CAPITAL",
    author: "Linh Do Thuy",
    authorPhoto:
      "/st/media/pim/media/user_photo/22/227/2270d1be268f7ed808f6a63704046e6d_af7eee678fd24825bea32bdd69dab729.jpeg",
  },
  {
    name: "StarTrade99",
    account: 110140385,
    description:
      "I have over 8 years of trading experience. Safe and effective. (+84)0984296355",
    author: "Nguyen Tuan",
    authorPhoto:
      "/st/media/pim/media/user_photo/36/364/36416ead31131edaa68cee900e11b8c7_41a16a32f3fa4223aacbacb05a3a6a51.jpg",
  },
  {
    name: "ATURO - VN - EURUSD",
    account: 110140465,
    description:
      "🔹Aturo Copy Trading🔹\nĐầu Tư Thông Minh - An Toàn - Bền Vững - Thịnh Vượng\nXem thông tin chi tiết & Link nhóm  ở phần mô tả phía dưới\nSĐT: 0978263688",
    author: "Huan Vu Van",
    authorPhoto:
      "/st/media/pim/media/user_photo/3b/3b2/3b2a37d0fe7d35bc30a5b40c7cbcb5ff_094122e385524cfc8eca753c3039f83e.jpg",
  },
  {
    name: "Bang Billy",
    account: 110140536,
    description:
      "Trade Forex & Gold.\nSetiap posisi menggunakan stoploss. Profit target /bulan 10-30%.",
    author: "Fitri Susanti",
    authorPhoto:
      "/st/media/pim/media/user_photo/37/37b/37bac6857b4dfde947260fac86d30108_82b2f52586564824b2ef73e22b603d95.jpeg",
  },
  {
    name: "Passive income",
    account: 110140581,
    description:
      "Focused on the long term run. Looking to have up to 12% profit per month. 1-2% Risk per trade. 1:1 Risk/Benefit per trade.",
    author: "Angel Arturo Garcia Jimenez",
    authorPhoto:
      "/st/media/pim/media/user_photo/4c/4ca/4cace11d61e92d00b075ce142a666990_9b817a21343f4ad39943df30f2cc4d5e.png",
  },
  {
    name: "BabyBombasticExpress",
    account: 110140799,
    description:
      "💶 [▓░░░░░░░░░░] 1.2K of 200K invested!\n📈 Mid-risk, Short-term Growth Signal\n🚫 No Martingale/Grid, SL safe\n💹 Monthly Profit: 10-20%\n\n📉 Max DD: 40%",
    author: "Amirhossein Ghasemi Moroodi",
    authorPhoto:
      "/st/media/pim/media/user_photo/3f/3fb/3fb3e18ff0ab6c97467a74f680c24e84_3fbf042ce0b74be89d42719f0931285a.png",
  },
  {
    name: "PRICE ACTION HFT",
    account: 110140913,
    description: "PRICE ACTION HFT",
    author: "MUHAMMED ZAHEER",
    authorPhoto: null,
  },
  {
    name: "AUTOMATED TRADE",
    account: 110141037,
    description:
      "AUTOMATED TRADE ,uses algorithms to place trades on your behalf. It operates without human intervention based on predefined criteria and strategies.",
    author: "ABD ELRAHIM",
    authorPhoto:
      "/st/media/pim/media/user_photo/57/578/5786287ea2bb781c0741f4cbcc0d97a4_e9eeb812ff874149902debc8cffb9b55.png",
  },
  {
    name: "PIPS VISION",
    account: 110141092,
    description:
      "Daily Vision🏆50 to 100 PIPS \nWith low risk.\nI will try my best IN SHA ALLAH 😍",
    author: "Waheed  Akram",
    authorPhoto:
      "/st/media/pim/media/user_photo/3b/3b7/3b76422fe440f66132dbabfe4c2e95a7_d0c580a3ba3c44538377fc34b7f4d7aa.jpeg",
  },
  {
    name: "AUTOMATED TRADE",
    account: 110141159,
    description:
      "AUTOMATED TRADE ,uses algorithms to place trades on your behalf. It operates without human intervention based on predefined criteria and strategies.",
    author: "ABD ELRAHIM",
    authorPhoto:
      "/st/media/pim/media/user_photo/57/578/5786287ea2bb781c0741f4cbcc0d97a4_e9eeb812ff874149902debc8cffb9b55.png",
  },
  {
    name: "TOP SNIPER- XAUseiEA",
    account: 110141255,
    description: "TOP SNIPER- XAUseiEA",
    author: "Xiaojie Pan",
    authorPhoto:
      "/st/media/user_photo/9a/9a6/9a669143a2b5860c7a0cfa4ba49af4fe_a46663edd1b847d8b0d6890286850f9c.jpg",
  },
  {
    name: "income every month",
    account: 110141344,
    description: "income every month for you",
    author: "Thai Bui ho",
    authorPhoto:
      "/st/media/pim/media/user_photo/7e/7ed/7ed04a002522a64c0408df7749761f83_4315622391884c9fa95fd904143d4aaa.jpeg",
  },
  {
    name: "Stable Trader",
    account: 110141390,
    description:
      "We Provide Stable and Consistent Monthly Profit. \nOur monthly Profit Target is up to 90%",
    author: "sejalben Koshiya",
    authorPhoto:
      "/st/media/pim/media/user_photo/a9/a9d/a9d83708ffa60e3d19b4d92d877d3089_33ee342f5b664ac694b72616483e23b4.png",
  },
  {
    name: "Go To The Moon",
    account: 110141394,
    description:
      "https://social-trading.club/strategy/110143099\nhttps://social-trading.club/strategy/110143120\nzalo: https://zalo.me/g/bxlstf937",
    author: "Hung Khuong Quoc",
    authorPhoto:
      "/st/media/pim/media/user_photo/3d/3d3/3d3b8700a78ccea95d852d3630c4a7b1_b1e3118f6eb14e0080f041c438f6808e.jpg",
  },
  {
    name: "PROFIT HUNTER786",
    account: 110141399,
    description:
      "MAKE PROFIT WITH MINIMUM LEVEL OF TRADES. MAKE PROFIT 5~10% MONTHLY.",
    author: "Ali Akbar",
    authorPhoto:
      "/st/media/pim/media/user_photo/d9/d94/d94aabe3cbc0cfae5dc6b8ee97b4add1_c788dc2983bf4ba8a2183aa6968eb5a0.jpg",
  },
  {
    name: "cobaforex-com",
    account: 110141410,
    description:
      "Profit kecil \nYg penting Konsisten \nMinuman Deposit 200$\nLot di atur sesuai Balance \n% di tambah atau dikurang",
    author: "MELISSA TRAWIRA",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cb1/cb180b2611da9c1b0c0219c4775fb524_0f292b2f92ee45b3b6bd99d0fe712195.jpg",
  },
  {
    name: "Win-Win888",
    account: 110141452,
    description:
      "This is a range trading strategy that tracks direction as much as possible and is expected to grow 8-15% per month",
    author: "寶治 章",
    authorPhoto:
      "/st/media/pim/media/user_photo/1d/1d9/1d9ef672eb66ef93e3a1155c23e3ef07_072c7b8ad6e745e8861f4678d6213de0.jpg",
  },
  {
    name: "Master-pranith",
    account: 110141455,
    description: "Start your profitable journey with us in minimum risk.",
    author: "GAJENDRAPAL BAGHEL",
    authorPhoto: null,
  },
  {
    name: "Gold Trading",
    account: 110141500,
    description:
      "Trading is a risky investment channel. If you can bear the risk, copy it. Managing risk in the best way will lead to profits.",
    author: "NGOC TAI HA",
    authorPhoto:
      "/st/media/pim/media/user_photo/c3/c37/c3731678a094aa8518fad18b86e48e63_8a5b9258bc134675aa68696aada9617c.jpg",
  },
  {
    name: "Final Awning",
    account: 110141513,
    description: "I promise and you will see.",
    author: "Hani Mohamad Hasan Maebed",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cb1/cb1ae78d8c8ac1534c4de441404ae559_1c936e830f5f4017bef608e2b92783c1.png",
  },
  {
    name: "GoldDigger pro",
    account: 110141550,
    description:
      "I have been trading only in gold since last 5 years, Come join me and see magic of daily profits without doing nothing, Join fast grab your profits.",
    author: "Mitesh Patel",
    authorPhoto:
      "/st/media/pim/media/user_photo/de/de2/de2d0bc3d432f71bc8e4e40def3c86b5_50a6da3f4cad4d698b331452b6fb0acb.jpg",
  },
  {
    name: "ProTradition",
    account: 110141569,
    description: "ProService",
    author: "IRENI  Sumalatha",
    authorPhoto:
      "/st/media/pim/media/user_photo/c5/c55/c557ef86189ed62eba19e58da4fb03f5_c97c041509eb47cc880799d3b6abef3d.jpg",
  },
  {
    name: "MECA GOLD",
    account: 110141757,
    description:
      "Safety is a priority with SL in each order\nStable and sustainable profits\nThe DD max is under 20%\nDon't trade with emotions - Trade with intelligent",
    author: "Do Hong Anh",
    authorPhoto:
      "/st/media/pim/media/user_photo/9d/9da/9dab9dadbb0522060fa7df13ba2de0a6_6b67c9ce617a49b3aa4c92a9eb1b3f2e.jpg",
  },
  {
    name: "ANT-A-888888",
    account: 110141789,
    description:
      "This account is managed by the EA ANT-A system. We have worked hard for many years to develop and optimize it. Recommended minimum capital is 500-700$",
    author: "VAN HUE DANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/f7/f72/f72e05c37fbb3cc59f1212f27bf24c6d_4e78a736ac744c4cb01c722786589273.jpg",
  },
  {
    name: "P Magic Trend",
    account: 110141815,
    description: "P Magic Trend",
    author: "Tien Nguyen Bao",
    authorPhoto:
      "/st/media/user_photo/5e/5ed/5ed9c8209a7b38d0af6d4b323b11a3a6_64c2365c9b8c4c54867bb41c6a7bf9dc.png",
  },
  {
    name: "DVS Invest",
    account: 110141844,
    description:
      "Scalping: gold, eurusd,gbpusd\nTele:  https://t.me/+0zAZABWIGVlmNDY1",
    author: "Sáng Đỗ",
    authorPhoto:
      "/st/media/pim/media/user_photo/73/73f/73f0bb1ac2f47380b84d5b457ea19fa7_777d737d08f1423f91807c2c55e41241.jpeg",
  },
  {
    name: "----割韭菜----",
    account: 110141888,
    description: "韭菜长得真好",
    author: "双利 李",
    authorPhoto:
      "/st/media/pim/media/user_photo/10/10b/10bfe5058be8b8f56c14d0e70e8d6f74_329d49a8f88b4b638f91eeda329cc184.png",
  },
  {
    name: "SCALPING GOLD",
    account: 110141926,
    description:
      "* Scalping Gold with very fast profit (10-50 pips).\n* Take profit everyday.\n* Target 10-30% a month.",
    author: "Tuan Phan",
    authorPhoto:
      "/st/media/pim/media/user_photo/9b/9bc/9bc0b9d1ce27ce87620584e5e9140c80_730f35b783d94f7e905ca6457f488e72.jpg",
  },
  {
    name: "Jonh Wick 2",
    account: 110142145,
    description:
      "I trade safely and long term. Not trade with a high leverage gambling method. Very low but stable profits",
    author: "THANH HOANG PHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50a/50a0ee43bc16db9ccddc9fc1578f0fa5_43739171f7624ad389af6f00d4aa5425.jpg",
  },
  {
    name: "Wait and watch",
    account: 110142175,
    description: "Bounce back",
    author: "Bahubali Shiragave",
    authorPhoto:
      "/st/media/pim/media/user_photo/10/100/100097763fd434227ed8c77b38a9ef86_7bdeacf404d54c8aa683c31073d04cb5.jpg",
  },
  {
    name: "Krishnamoorthi",
    account: 110142284,
    description:
      "Those who believe in me should have some patience I can only give you profit",
    author: "krishna moorthi",
    authorPhoto:
      "/st/media/user_photo/43/43a/43a92c2843e13bcd9db9d42c1c4b7352_0ae0519e0b7543919eab04c4e9338aeb.jpg",
  },
  {
    name: "Tradophile",
    account: 110142296,
    description:
      "swing trader. Risk per trade will be 10 to 15$.  guareented safest trading strartegy.",
    author: "rushit desai",
    authorPhoto:
      "/st/media/pim/media/user_photo/0c/0cd/0cd5955a2805c6860a53142219530bab_b4759ec3fe284475a3a4cf39e5720c0e.jpg",
  },
  {
    name: "N Money N Friendship",
    account: 110142328,
    description:
      "Fun-Tastic Trader Team.\nWe make trading so easy, fun and profitable.",
    author: "ANTON SAPUTRA",
    authorPhoto:
      "/st/media/pim/media/user_photo/b2/b2d/b2d3fc00cef50a6536513c15b3200dcc_6b281a7408a0429ab4fc0885d073d949.jpg",
  },
  {
    name: "FX bymahen",
    account: 110142331,
    description: "Instagram : @tradewithmahen",
    author: "ANAK MAHENDRA",
    authorPhoto:
      "/st/media/pim/media/user_photo/d6/d6c/d6c2b6dc0ab15aa48d8d81cd49f5218f_f3c5f65cbb0e46a4a532765b05630704.jpeg",
  },
  {
    name: "Innovation Waves",
    account: 110142343,
    description: "Trading with never loss.",
    author: "ඉරේෂ් අභයවික්‍රම",
    authorPhoto:
      "/st/media/pim/media/user_photo/95/959/9596b8a61a676f44928d2634b85ed0d1_0ca64ebbf2e849e98f0bdb0fca02c599.jpg",
  },
  {
    name: "CryptoFX Cross Hedge",
    account: 110142363,
    description:
      "We Cross Hedge between FX pairs, Cryptos. We analysis and gain advantage to trading products with market in-efficiency, price momentum and Volume",
    author: "Chun Man Siu",
    authorPhoto: null,
  },
  {
    name: "Handmade Orders",
    account: 110142420,
    description:
      "Pure handmade, non Martin, grid and other EA.\nSmall stop loss, large break even ratio.\n纯手工，非马丁，网格等EA，细水长流。\n小止损，大盈亏比。",
    author: "刚俊 许",
    authorPhoto:
      "/st/media/pim/media/user_photo/28/286/2862b72f8841eee5655762743084262e_a741fd4d87fd43fb9881e84b231feb8f.jpg",
  },
  {
    name: "DRIVE ANGRY",
    account: 110142428,
    description:
      "DRIVE ANGRY The new way to make profit from Forex with low risk  work in very safe zone on your money",
    author: "HADY SAAD ELDEEN AHMED SAAD ELDEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/01/011/011531291b549c2bf86905b94f6f4209_5672bdf8396545fb869eebcc5dd54cab.jpg",
  },
  {
    name: "Profit EU H1",
    account: 110142441,
    description:
      "Target at 2-5% per month, Stop loss at 50%. Especially, we have profit compounding lot percent so don't worry about withdrawal. Have fun!",
    author: "Kittiwat Trongsujaritsin",
    authorPhoto:
      "/st/media/pim/media/user_photo/4f/4f4/4f4ab61847ae7677ea064dbcfdb0b6e8_3654729aa24a4205a6c40fa4f683305e.jpg",
  },
  {
    name: "EYE-INVESTING",
    account: 110142585,
    description:
      "Monthly target is around 5%-10%. \n        EYE-INVESTING SCALPING\nhttps://one.exnesstrack.net/a/llvj1ujufg",
    author: "THI BE VAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/84/846/846deabf5cb27bd1c901e1810a828e55_44dec30013524ca0af7909733719affa.jpg",
  },
  {
    name: "DynamicDollar Advant",
    account: 110142632,
    description:
      "Tận dụng tính biến đổi của thị trường để tối ưu hóa lợi nhuận.",
    author: "TRẦN BÌNH",
    authorPhoto:
      "/st/media/pim/media/user_photo/40/408/408dce8a8eeb66fde0b2ec42617b93fc_0a5b9825866d4d7dbcfa1f613dbf91fc.jpg",
  },
  {
    name: "Mee Close system",
    account: 110142660,
    description:
      "Hi My name is Mee\nTrading since : 2020\nTrading style : Close system or Grid trading, Bet on the profit\nMinimum deposit : $2,000-$5,000",
    author: "Rattanapong Julkliang",
    authorPhoto:
      "/st/media/pim/media/user_photo/89/89f/89f132a31f3ad034138b97d8ca87937c_543824192200400095ddd38f1e08e579.png",
  },
  {
    name: "ॐ Bageshwara Namah",
    account: 110142664,
    description:
      "💮SAFETY FIRST\n              BE CAREFUL \n                            BE AWARE💮",
    author: "Anil Shaw",
    authorPhoto:
      "/st/media/pim/media/user_photo/95/95a/95a23e6f3efce0796914405e075fad48_4dd98e502c234a7485a0e8ab939d248f.jpg",
  },
  {
    name: "Bobebi-forex",
    account: 110142688,
    description: "2% everyday",
    author: "Le Trong Hao",
    authorPhoto:
      "/st/media/pim/media/user_photo/61/61a/61a283d4ca058e3c2057e373ed640f24_6bd8003c48714196a2ee45a7a764014d.jpg",
  },
  {
    name: "SBS - Slow But Sure",
    account: 110142704,
    description:
      "We focus on currency pairs with a $2000 starting capital. We use SL and trailing stops to limit losses and secure profits. Trade Forex Only",
    author: "Darwin Darwin",
    authorPhoto: null,
  },
  {
    name: "Gold Master",
    account: 110142718,
    description:
      "My strategy on the Forex market is simple, based to the technical analysis and news. My favorite pairs is XAUUSD, BTCUSD, GBPUSD & EURUSD. Most",
    author: "Abdul Rahim",
    authorPhoto:
      "/st/media/pim/media/user_photo/ba/ba0/ba0148e1f0b0b3ec29002677d642d913_f7a0012804614534b1318a2efa7c55d6.jpg",
  },
  {
    name: "BRUT",
    account: 110142748,
    description:
      "Bet the Reversal and unemotional Trading.\nThe specific method is a counter-trend method based on swing trading.",
    author: "Watcharin Thongarporn",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee2/ee2f5678937d5bebc6bf28bd6f1922db_c4937e70e7ba4f8b805ae5dac35806f7.png",
  },
  {
    name: "Corvet GBP e EURUSD",
    account: 110142755,
    description:
      "Estratégia baseada em reversão operada por robôs. Invista com cautela, mercado de renda variável sempre tem riscos.",
    author: "Angelita Russi Zimermann",
    authorPhoto:
      "/st/media/pim/media/user_photo/4a/4a0/4a0d2671889b4c8b493ebb96debcb4cf_2ec1014f5315417aaea93912fe68543e.jpg",
  },
  {
    name: "Ahmed Ben Ali",
    account: 110142810,
    description:
      "معنا أصبح حلم الربح حقيقة مع درجة أمان عالية قليلة المخاطر خطة تداول مدروسة مع تحقيق نسبة عائد شهرى من 3% الى 5% بأقل \n حجم مخاطرة ودروداون",
    author: "Ahmed Ali amin",
    authorPhoto:
      "/st/media/pim/media/user_photo/e1/e15/e15067ad4e778a73dcc00a41987f8e47_96e35866310c4f69a5d43a08574f2f3c.jpg",
  },
  {
    name: "111111111111111111",
    account: 110142858,
    description: "1",
    author: "凯 康",
    authorPhoto: null,
  },
  {
    name: "GHOST IN THE MACHINE",
    account: 110142947,
    description:
      "A Profitable strategy that uses different trading concepts depending on different market timezones.",
    author: "Muhammad Arslan Wazir",
    authorPhoto:
      "/st/media/pim/media/user_photo/96/968/96800e7fa146cc1d35bd493e04737082_4cd6df051a154f20b858d762298702b8.png",
  },
  {
    name: "IA RICH  2024",
    account: 110142963,
    description:
      "MAXIMIZE YOUR TIME!\nLet our artificial intelligence take care of all your operations. You will have an intelligent and efficient virtual assistant",
    author: "Nelio Alexandre Silva de Oliveira",
    authorPhoto:
      "/st/media/pim/media/user_photo/98/983/983e637e1332aed7043515fcd01406a4_f6964a61a458464c9d1f18bf18139991.jpg",
  },
  {
    name: "Go To Mars",
    account: 110143099,
    description: "freestyle",
    author: "NGUYỄN VÂN",
    authorPhoto:
      "/st/media/pim/media/user_photo/48/483/483af8d21ee04d827b141705e2855be0_3ba72d9a13eb44548c2ea1928ceece6e.jpg",
  },
  {
    name: "Sfin_sfin pro",
    account: 110143103,
    description: "Giao dịch chờ",
    author: "Tuấn Nguyễn",
    authorPhoto: null,
  },
  {
    name: "Go To Saturn",
    account: 110143120,
    description: "free style",
    author: "QUOC DUY KHUONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/3d/3d6/3d6a13c6ed56e4099de9dd837896cc40_e892fe1bccd04b85849fa4af70d0b784.jpg",
  },
  {
    name: "Adaptive Robot Trade",
    account: 110143136,
    description:
      "Price action trading (no hedge, no grid).\nHigh drawdown because initial capital is small.\nAfter stable operation, manage low drawdown.",
    author: "Tiến Tâm Trương",
    authorPhoto:
      "/st/media/pim/media/user_photo/a1/a17/a171be3e9886aa3ff17a6da9dde37cb1_ca8c355151864352aeaf5fc70eb45cfe.png",
  },
  {
    name: "EASY MONEY",
    account: 110143168,
    description:
      "I'm not better than the next trader,\njust quicker at admitting my\nmistakes and moving on to the next opportunity 💵💶",
    author: "Ahmad  Mohamad",
    authorPhoto:
      "/st/media/pim/media/user_photo/14/140/1406f52ce615893f1446c846c67cace1_4e49d1356d61473ca6fc0fc70afc394a.jpeg",
  },
  {
    name: "Finance flyy",
    account: 110143195,
    description:
      "Position trading is the best trading strategy for a trader and the investors associated with that trader.",
    author: "ASHISH KHETAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/23/234/234486f0ba33274a5b3bf90e8958a230_9fbd42cf329e49389478625d44849c78.jpeg",
  },
  {
    name: "Profit Gold1",
    account: 110143215,
    description: "AE runs GOLD.",
    author: "NATHAKORN CHOMDEE",
    authorPhoto: null,
  },
  {
    name: "Advance hedging EA",
    account: 110143252,
    description:
      "i m using highly advance hedging EA which is almost risk free with minimum dradown ,\nbut to copy my trades minimum balance required =my balance  3000$",
    author: "MANOJ KUMAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/6a/6ae/6ae85dc30de338d927e606aaa95bb84c_33738f2105884030a1dc91de860148b8.jpeg",
  },
  {
    name: "Genius Pryse AI Bot",
    account: 110143272,
    description:
      "Trading only EUR/USD low drawdown\n15% to 30% income monthly :)",
    author: "Sergio Armando Basurto Cortes",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f89/f891378f20c79746f26012be0050f0e6_fb61b87957184b71a2f853db65791431.jpeg",
  },
  {
    name: "LuluLuan lowrisk",
    account: 110143392,
    description: "Trade currency pairs",
    author: "BÙI LUÂN",
    authorPhoto:
      "/st/media/pim/media/user_photo/91/91b/91b4277fa5230573443473b43ee487db_c4d791329a414ab093128a12cfadff6e.jpg",
  },
  {
    name: "FXPiPS Finder",
    account: 110143406,
    description: "Metal, Currency, Commodity",
    author: "ADIL HUSSAIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a8/a88/a8804df3aded9277d9f886faba5b03f7_c1bbd5e199894bf89b359079f6110583.jpg",
  },
  {
    name: "Radhe Shyam",
    account: 110143417,
    description: "Low risk , High profit",
    author: "DHARMVEER YADAV",
    authorPhoto: null,
  },
  {
    name: "TA363_ACAD",
    account: 110143436,
    description: "Trading on AUDCAD pair, entry based on reversal.",
    author: "Tumiran Tumiran",
    authorPhoto:
      "/st/media/pim/media/user_photo/e5/e52/e52f9513513891201c22dc0a7d2f3d77_9fab5c19a6b748d5879cbe9e56dd8b71_v2Nyc4m.jpeg",
  },
  {
    name: "MM TRADING",
    account: 110143549,
    description: "SWING TRADE\n\nLink Telegram : https://t.me/mmtradingvn",
    author: "DUY ANH BUI",
    authorPhoto:
      "/st/media/pim/media/user_photo/48/487/4872337259cf1967a72c0dd80706c43d_9614cabcc2db4b489e568f9bf523e71a.jpeg",
  },
  {
    name: "Monster Forex",
    account: 110143551,
    description: "Giao dịch lợi nhuận đều đặn 10-20% mỗi tháng",
    author: "Ngọ Văn Hùng",
    authorPhoto:
      "/st/media/pim/media/user_photo/93/93b/93b0d8bbed35b05780df7e58d58d0e18_1785dbab6def46debf296e9d8ce9ebe3.png",
  },
  {
    name: "LuluLuan mid-term",
    account: 110143570,
    description: "High profit, currency pairs",
    author: "Luan Bui",
    authorPhoto:
      "/st/media/pim/media/user_photo/17/177/1775a3230565de824323704c918e71d5_e0087965801246599716f69a41073338.jpg",
  },
  {
    name: "ATURO - VN - GBPUSD",
    account: 110143580,
    description:
      "🔹Aturo Copy Trading🔹\nĐầu Tư Thông Minh - An Toàn - Bền Vững - Thịnh Vượng\nXem thông tin chi tiết & Link nhóm  ở phần mô tả phía dưới\nSĐT: 0978263688",
    author: "Thiep Vu Van",
    authorPhoto:
      "/st/media/pim/media/user_photo/3b/3b2/3b2a37d0fe7d35bc30a5b40c7cbcb5ff_68f321e4d06842d9ae53fa5e491e45a6.jpg",
  },
  {
    name: "Data Trading",
    account: 110143581,
    description:
      "Lợi nhuận 10-15% / tháng, rủi ro ở mức thấp nhất & sẽ lãi hơn gửi ngân hàng 1 năm rất rất nhiều lần nha ACE",
    author: "THỊ THANH HUYỀN TRẦN",
    authorPhoto:
      "/st/media/pim/media/user_photo/1c/1c7/1c7c77e0a2012ac3cf8aee417c83e726_8914ebbef41c47bc9f63b1e0e01b6e35.jpeg",
  },
  {
    name: "NEVER GIVE UP",
    account: 110143599,
    description:
      '" Nguyên tắc 1: Đừng để mất tiền\n\nNguyên tắc 2: Xem lại nguyên tắc 1"',
    author: "Duong Dong",
    authorPhoto:
      "/st/media/pim/media/user_photo/36/369/3694ffd63905cb981b7082fceaa139f7_59f0e22c52f14164a47d25539afe8e90.jpeg",
  },
  {
    name: "Sachin Pro Strategy",
    account: 110143677,
    description:
      "Enjoy profit with low risk, specially focus on SMC, Price Action, Swing Trade with Risk management. So don't be greedy. My weekly target 5% to 10%",
    author: "Sachin Dev Nath",
    authorPhoto: null,
  },
  {
    name: "Hoàng Vũ FX",
    account: 110143757,
    description:
      'Thuận theo tự nhiên \n                                       " Lão Tử"',
    author: "VAN QUANG VO",
    authorPhoto:
      "/st/media/pim/media/user_photo/b3/b3f/b3fa337e445521a7b04bbaf408489ba3_dd358bff6d2d4b0883a3e62374326575.png",
  },
  {
    name: "Safety First -EU",
    account: 110143782,
    description:
      "“Đầu tư thông minh, An toàn tài chính - Vững bước tương lai!”",
    author: "Thanh Hai Nguyen Tu",
    authorPhoto:
      "/st/media/pim/media/user_photo/7e/7e2/7e298e683a0bf9d19048f6e3b7abbe29_a52c0a08bb614d38963c15f0c0e0bfa4.jpg",
  },
  {
    name: "MKarim Trades",
    account: 110143783,
    description: "good profit",
    author: "MUSTUFA KARIM",
    authorPhoto:
      "/st/media/pim/media/user_photo/5c/5ca/5ca502de0b3485f1d664d7d906999fa4_82ab8bac9b124a759c159a91dd50ff29.png",
  },
  {
    name: "Money Printer",
    account: 110143801,
    description:
      "- Mục tiêu 8-15%/ tháng\n- Scalping Trading\n- Winrate = 50 %, RR >= 1:1",
    author: "THI DIEM KIEU LE",
    authorPhoto:
      "/st/media/pim/media/user_photo/7a/7a1/7a171f3bfafbf22aec91369f19c2d435_658d9a8d2cdc408c95885963532b67b5.jpeg",
  },
  {
    name: "Train Of Love",
    account: 110143803,
    description:
      "My goal is to be safe and make a stable profit of 10% per month",
    author: "PHUONG VO DONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/bb/bb0/bb06a4fed497d87d2b881414a6f1f542_a7d724972c51426e9b6becd5abf65a06.jpg",
  },
  {
    name: "KCFX500 CopyTrade",
    account: 110143827,
    description:
      "Real Trade, NOT ROBOT\nUse SL with max loss/day = 2 setups\nMax loss/day = 3%\nMin risk reward = 1:2",
    author: "KURNIAWAN SAPUTRA",
    authorPhoto:
      "/st/media/pim/media/user_photo/72/727/727f0d4591af2ee0554a2b6f18310a1e_2e4ba83dd5dd4d32afb3e3d18e3403e2.jpeg",
  },
  {
    name: "Phamtinh86",
    account: 110143842,
    description: "Nơi niềm tin tỏa sáng",
    author: "PHẠM TÌNH",
    authorPhoto:
      "/st/media/pim/media/user_photo/0d/0d9/0d991373e691a9e913a0dc1722226c98_63e6208e6db641a888a140b742e5d106.jpg",
  },
  {
    name: "Gold_N_Crypto_Master",
    account: 110143845,
    description: "Monthly target 25%. Very expert in crypto and gold trading.",
    author: "MD ZAHIDUL ISLAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/a4/a4a/a4a73c6e4a9c776b79a22d34bb9d64f9_ce164f7bc5234ed99054f44b007cf27c.jpg",
  },
  {
    name: "专做黄金采用蚂蚁搬家策略",
    account: 110143991,
    description: "判断好长线趋势，以小博大，稳定盈利",
    author: "花 李",
    authorPhoto: null,
  },
  {
    name: "globaltrade",
    account: 110144052,
    description: "i have 10 years experence in trading",
    author: "Humaira Sadiqa",
    authorPhoto: null,
  },
  {
    name: "Hopefully SULTAN",
    account: 110144112,
    description: "Sultan wanna be..",
    author: "JANE DEVIYANTIH",
    authorPhoto: null,
  },
  {
    name: "Gamas set on",
    account: 110144132,
    description: "Just let it flow",
    author: "ANTON",
    authorPhoto:
      "/st/media/pim/media/user_photo/33/338/3387a78c5749ffb071766024ac1a5e65_8e8573d1654e4870857ae9827943e6dd.jpg",
  },
  {
    name: "Gold Professor",
    account: 110144170,
    description: "Stable Profit's Growing with low drawdown....",
    author: "LEO SETIAWAN",
    authorPhoto: null,
  },
  {
    name: "Nguyen Van Cuong",
    account: 110144178,
    description:
      "- Expert Advisor ( EA ) long live after 14 years of backtest on real Gold tick data ( from 2010 to 2024 ) \n- Profits 3-5% monthly \n- Spread >= 30, eas",
    author: "VAN CUONG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/56/566/56655fca52dbb6fb1cf47d803ff286fa_fe925515230a40c9bb8f60a005515646.jpeg",
  },
  {
    name: "MK TRADING",
    account: 110144394,
    description: "KỸ LUẬT TẠO NÊN THÀNH CÔNG",
    author: "ANH HUNG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/e5/e57/e57f18795181a30e78859e0ce641ebc9_601941fdb75349c39463afe6f62ea0ae.jpg",
  },
  {
    name: "SMC MASTER",
    account: 110144432,
    description:
      "Unique strategies \nStrict Stop Loss  \nProper Money management \nAchieve 15 to 20 %",
    author: "SUNIL SAWANT",
    authorPhoto:
      "/st/media/pim/media/user_photo/97/972/9722e906022414c23b53b98abbb71f12_0bbbf456bd804d79bf47d5d08f79b99e.jpg",
  },
  {
    name: "Smartpips786",
    account: 110144496,
    description: "My syragty is risk free scalping stragty.",
    author: "Muhammad Irfan",
    authorPhoto:
      "/st/media/pim/media/user_photo/43/434/4347b924b21d19d9aafc933bb4dd9235_990f010ad254493faf1263136400a7c2.jpg",
  },
  {
    name: "Cobra forex 2",
    account: 110144568,
    description:
      "Experience of more than 12 years of high and low that ended with a Successful Personal Strategy OBJECTIVES : *profitability : 20% in month *Net positi",
    author: "Redouan Nfissi",
    authorPhoto:
      "/st/media/user_photo/d5/d5a/d5aaeb4ba9da08247195ba897afc29e2_947ecc7a1062402098a6c0455e1911b2.jpg",
  },
  {
    name: "Hunter Dragon",
    account: 110144717,
    description:
      "Hunter Dragon is a precise and disciplined trading\nstrategy designed to systematically generate profits in the\nForex markets",
    author: "NGUYEN PHU QUI PHAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/3f/3fc/3fcc2fab4c503b85d9de5043cf61ce04_5de4e12219d34e3a8228b3842fcd7a0d.jpg",
  },
  {
    name: "长期稳健策略exness",
    account: 110144777,
    description: "长期稳健策略",
    author: "爱新 张",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/69c/69cc54b44245172d321e36c3862f2821_207a019199b943cc93e701143560ccfa.jpg",
  },
  {
    name: "TNT trader 4",
    account: 110144798,
    description:
      "Quản lý rủi ro chặt chẽ, lợi nhuận ổn định\nMục tiêu 10-15%/ tháng",
    author: "Hằng Đỗ Thị Thanh",
    authorPhoto:
      "/st/media/pim/media/user_photo/91/919/9196a84d59056d4930647e1f5ccd9759_71fb669e00844358839a39ecaabd4322.jpg",
  },
  {
    name: "RICH FAM TRADING",
    account: 110144821,
    description: "Only Use Pending Order.",
    author: "YEHESTIEL SIBURIAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/f0/f0c/f0c0778720d69879c26b5dbeab93fafb_57537e83e96b423a9c7733a793cd2fef.jpg",
  },
  {
    name: "BOC Trading",
    account: 110144926,
    description: "Intraday trading",
    author: "Dung Nguyen Tuan",
    authorPhoto:
      "/st/media/pim/media/user_photo/b2/b21/b218011549adde2239af4ccd0811cdd1_8ee0e3e3d39b4b9fb55a9dc13ec2d6d2.jpg",
  },
  {
    name: "3-5 percent weekly",
    account: 110145051,
    description:
      "safe and stable income  wtih eurusd 3-5% per week easy and safe  never  blown",
    author: "MR METHEE TAENGNGAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/3f/3ff/3ffc0f32d01c1ea7878a92702e252070_149a315cf3ba4065999fa348b0adb376.jpg",
  },
  {
    name: "Lac Viet Invest",
    account: 110145138,
    description:
      "🌟 Giao dịch bằng robot theo phương pháp Trendline , SMC, DCA..\n🌟 Profit > 10%/tháng\n🌟 Lợi nhuận an toàn và ổn định\nTelegram:   t.me/vntime91",
    author: "THI LAN ANH PHAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/70/701/701dbf830dd0c48b9ac891e2f480616b_512e381649bf41518c875cf9ed616308.png",
  },
  {
    name: "LuxBot AI Mark 1",
    account: 110145262,
    description:
      "- Return Up To 300% Yearly\n- This Account Operate With AI\n- Ai Work With SL & TP Only\n- Join Below Link For Valuable Update\nhttps://t.me/luxbotai",
    author: "HILESHKUMAR MANGROLIYA",
    authorPhoto:
      "/st/media/pim/media/user_photo/23/232/23252e7c00e509f0b098db284885dc9e_aeb7ee2f43e54d72aaef61b82962b8fa.png",
  },
  {
    name: "Running profits",
    account: 110145380,
    description: "Running pip",
    author: "Chansavang Chaleunsouk",
    authorPhoto:
      "/st/media/pim/media/user_photo/9f/9f6/9f6ec23068a0593bc0f480b3d25f776e_7f65ddedbc3044368fb5da47ea207a86.jpeg",
  },
  {
    name: "Sheriff Daramola",
    account: 110145383,
    description: "Supply and Demand",
    author: "SHERIFF DARAMOLA",
    authorPhoto:
      "/st/media/pim/media/user_photo/77/77f/77fa659a1d56ec1fb661d563594c4c7b_c15537a4d24649f78b7229967f4f1388.jpg",
  },
  {
    name: "Close range sniper",
    account: 110145405,
    description:
      "Let's Go on top together.\nThink long term to make good money",
    author: "Abhishek Deshmukh",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50f/50f42737940c63c1f5d4963a365c617d_74b222d74b5146648fe8b68b3dda9fdb_jtF5ypp.png",
  },
  {
    name: "Smart Chill",
    account: 110145461,
    description: "Scalping 24/7",
    author: "ปรมัตถ์ โททุมพล",
    authorPhoto:
      "/st/media/pim/media/user_photo/0a/0a6/0a6bee225332e8bb62b5a011300c97de_5f73db7a53924f989e1e6fd8cd87ff1c.png",
  },
  {
    name: "Kamaal strategy",
    account: 110145489,
    description:
      "I am a prop trader and know how to grow account using proper risk management.",
    author: "Haroon Ahmed",
    authorPhoto:
      "/st/media/pim/media/user_photo/75/75f/75f2ab510dfe5d0478a9720ac21c5b0b_f1ce9336ed7949cc8aecc3673b2d9586.jpg",
  },
  {
    name: "Cyra Lunar",
    account: 110145518,
    description:
      "Metode Matahari dan Bulan\nAkan Membawa Keberuntungan Atas Kehidupan",
    author: "RIDWAN UTAMA",
    authorPhoto:
      "/st/media/pim/media/user_photo/4d/4d3/4d32dd4c3fec30a124254833ae897bf7_c4bdde583e01474c8e0b2c1548452b3b.jpg",
  },
  {
    name: "metaX Social",
    account: 110145533,
    description: "trade by metax signal",
    author: "NGOC TOAN PHAM",
    authorPhoto:
      "/st/media/user_photo/ea/ea6/ea6a1c668ff2ba8e2e02323fdfbcc6cd_3101a631a430457d817cf177b93f7a0f.png",
  },
  {
    name: "Day Running",
    account: 110145565,
    description: "Daytrade",
    author: "thanawut chuthueng",
    authorPhoto:
      "/st/media/pim/media/user_photo/28/28f/28f4c9e7781d69dacead472a91d647b4_1483f8477b5b47209bcd6c36ee107725.jpg",
  },
  {
    name: "DOW JONES AND US30",
    account: 110145614,
    description: "AI",
    author: "GANGADHAR MARRI",
    authorPhoto:
      "/st/media/pim/media/user_photo/29/295/295bf13c158f9728d723feaed3aff75c_f6f87812657044a182acb3e547f1a80d.jpg",
  },
  {
    name: "Ultron V01",
    account: 110145643,
    description:
      "Born from Tony Stark's artificial intelligence\n\nTele : @Ultron24",
    author: "Tuấn Trung Lê Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/05/054/05449398a195b76bce48d3d68ef609c7_2644581248a24968b4a0f1fccd3b1b9e.jpg",
  },
  {
    name: "Fx Rahul 0707",
    account: 110145671,
    description: "Realistic trades and authentic calls",
    author: "RAHUL CHOUDHARI",
    authorPhoto:
      "/st/media/pim/media/user_photo/34/34c/34c56dd5da3b54490e371d61d069c50e_13b60a6e6a9d4cefa07d8b8c50564d98.jpg",
  },
  {
    name: "XAU bymahen",
    account: 110145672,
    description:
      "instagram tradewitmahen\nDay trading strategy +swing method + price action, focus on micro trends, candlestick patterns, support/resistance",
    author: "ANAK MAHENDRA",
    authorPhoto:
      "/st/media/pim/media/user_photo/d6/d6c/d6c2b6dc0ab15aa48d8d81cd49f5218f_f3c5f65cbb0e46a4a532765b05630704.jpeg",
  },
  {
    name: "Lisan al Gaib",
    account: 110145681,
    description:
      "Discover our AI trading system for GBPUSD, using advanced ML to exploit market inefficiencies for steady, low-risk gains. (https://t.me/plutusBotFx)",
    author: "TRUNG KIEN VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/36/360/3607cbd318024f7c4922219590c8a148_9db5cfc282a94b2c922e3da72ee9c8f2.jpg",
  },
  {
    name: "PilotFX496",
    account: 110145703,
    description:
      "Chiến lược giao dịch đơn giản đánh bại các chiến lược phức tạp. Hãy luôn ghi nhớ điều này!",
    author: "HOÀNG LUẬT",
    authorPhoto:
      "/st/media/pim/media/user_photo/3d/3d2/3d2f1c93c5ebf4a22fdf32a260c16687_70b90142550a479b8441e41bb40be8e5.jpg",
  },
  {
    name: "Rookie system菜鸟系统",
    account: 110145712,
    description: "最大回撤5%～8%",
    author: "翰韬 朴",
    authorPhoto:
      "/st/media/pim/media/user_photo/f9/f92/f920d4143e2da51242093346ae61d010_f705c2573f124ffe99ce8026ecb27571.jpeg",
  },
  {
    name: "MONEY TRADING 5",
    account: 110145739,
    description: "Win win everyday",
    author: "LY LÊ THỊ",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1a8/1a8b8b84934c5259f9daaeddb04cc523_2f4ef1e3f8d34305965662b381a2f127.png",
  },
  {
    name: "1 2 NGUYEN XUAN HAI",
    account: 110145793,
    description: "1 2 NGUYEN XUAN HAI",
    author: "VAN NGOC NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cb9/cb97bd49dd30d8ef96b07b56b4ad05bb_596cd7784f2f4db3b08fd827fad1f135.png",
  },
  {
    name: "黄金和日元的日内交易",
    account: 110145816,
    description: "黄金和日元的日内交易",
    author: "陈学斌",
    authorPhoto:
      "/st/media/pim/media/user_photo/d7/d7f/d7fa7ae5aa5a230f98efdfe375c60336_0c726faf5b6946069b24f245844fad06.jpg",
  },
  {
    name: "AbdulRehman Trader",
    account: 110145907,
    description: "We are Professional traders with over 8 Years of experience",
    author: "Nouman Khalid Qureshi",
    authorPhoto: null,
  },
  {
    name: "K4 gbpusd only",
    account: 110145943,
    description: "Only gbpusd",
    author: "Maicon Lazier Reichel",
    authorPhoto:
      "/st/media/pim/media/user_photo/01/01e/01ea29d31871aaad68f311cde823f398_da6acdfdb873476aab9713b556632a56.jpeg",
  },
  {
    name: "K4 price action",
    account: 110145944,
    description: "Estratégia clássica price action",
    author: "Maicon Lazier Reichel",
    authorPhoto:
      "/st/media/pim/media/user_photo/01/01e/01ea29d31871aaad68f311cde823f398_da6acdfdb873476aab9713b556632a56.jpeg",
  },
  {
    name: "TOP1 COPY TRADE SMC",
    account: 110146141,
    description:
      "Chúng tôi hướng đến sự lâu dài bền vững.\nĐảm bảo sự an toàn cho nhà đầu tư với mức rủi ro chỉ 1-3%/lệnh.\nMục tiêu lợi nhuận đều đặn >30%/tháng.",
    author: "Bành Chấn Quyền",
    authorPhoto:
      "/st/media/pim/media/user_photo/db/db2/db2646c7cf8d26fd2c411c38f65bd5f4_2b70077c8715460aa8594facefdf12b9_Qfi7L08.jpg",
  },
  {
    name: "Gold Ninja",
    account: 110146157,
    description:
      "XAUUSD master!\n\n75% scalp, 25% swing.\n\nTrade less to get more.\n\nTrading is Hard, Stoploss is Art!\n\nTele: https://t.me/Gold_njnja",
    author: "Phạm Lê Lợi",
    authorPhoto:
      "/st/media/pim/media/user_photo/5c/5ca/5cab87de6c8248130b753e47c5e5dfec_74e0c481fcc045fb81588f6c479ffe0d.jpg",
  },
  {
    name: "Swing Trade 987",
    account: 110146174,
    description:
      "Follow Trends and place trade based on supply and demand. Profit target is 10-20% per month",
    author: "EKRAMUL HASAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/89/893/893d95ab6fdbdf10ed0f2ba5d0919b3d_8386acb1c9a54837a35b519326ec8fa8.jpg",
  },
  {
    name: "Premium Portfolios",
    account: 110146183,
    description: "JOIN OUR EXPARTS TRADER FOR CONSISTENT PROFIT.",
    author: "KANAN MALAKAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/39/39e/39e2c37cebaab38570466872513fb8b3_d51c1584f5c24f258a0c599a03c73d27.jpg",
  },
  {
    name: "Four Leaf Clover EA",
    account: 110146229,
    description:
      "Trade on multi currency pairs with fixed lot. Realistic expectations more than 500 pips per month",
    author: "chatchai chonglerkngam",
    authorPhoto:
      "/st/media/pim/media/user_photo/4b/4b2/4b265ca7724558233bb6f3267fbbd23e_b11f6cfee1ff493eb17f636f8a76b092.jpg",
  },
  {
    name: "GALAXY BOT 1",
    account: 110146236,
    description:
      "Patience & Consistency are the key tp succes in forex\n\nInvestor must be patience for the better result\n\nLets Growth Together",
    author: "Suryadi Suryadi",
    authorPhoto:
      "/st/media/user_photo/3d/3d0/3d0e8eb0f02d4afb4475abd46a42a381_88dbbe6ba094430092639392cccd7fcd.jpg",
  },
  {
    name: "Hypergrowth",
    account: 110146266,
    description:
      "Acceso sólo por invitación, debes ser miembro de la comunidad SER Trader - Access by invitation only, you must be member of SER Trader community.",
    author: "Yenny Yolanda Castaneda Jaime",
    authorPhoto:
      "/st/media/pim/media/user_photo/09/09a/09a915114eb787f38b860969148dd87b_facc73a3c176446d8f9dc3904be89ac6.jpg",
  },
  {
    name: "Growth Horizon DD",
    account: 110146275,
    description: "muti indi",
    author: "MR SIRAPAT THUAMPHIWTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/ba/bac/bacc4860df3b7449cc5af802c64e9edd_2e878d2f255d40e798d2f21adc7ce070.jpg",
  },
  {
    name: "NAM TV88888",
    account: 110146356,
    description:
      "Quy tắc 1: Không bao giờ để mất tiền.\nQuy tắc 2 : Đừng quy tắc số 1.",
    author: "Nam Đặng Quang",
    authorPhoto:
      "/st/media/pim/media/user_photo/0d/0d5/0d5d3b38a28268353f5af56a5d3096be_509d7037335340f18fa3b271f68e6733.jpg",
  },
  {
    name: "Phoenixxxx",
    account: 110146419,
    description: "Day trade",
    author: "วิมล ปรางค์ทอง",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f58/f5893c250beddc331d43c4f22e17d655_51eee8e1644e4dc7a67111a824562578.jpg",
  },
  {
    name: "MoonStudio101",
    account: 110146484,
    description: "Stable investment up to 20% per month",
    author: "PHẠM TÙNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/5e/5ef/5ef29e82a892ef3d9079fa94e273fb3d_c84e346ec5cf4b7f9feadd7996108956.jpg",
  },
  {
    name: "VN Master Trade",
    account: 110146492,
    description: "Scalp and sometimes Swing",
    author: "BA TUAN HOANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/9b/9b6/9b68620313f282b2c20da9ad89dd74e4_7ffb7a1dd12c4c4aa55e7be566731603.jpeg",
  },
  {
    name: "Money_Hunt",
    account: 110146539,
    description:
      "I am trading at my own risk. Invest/ Trade with the money which you can afford to loose.",
    author: "RAKESH PRAJAPATI",
    authorPhoto:
      "/st/media/pim/media/user_photo/ce/ce3/ce32adc10be212a38b0ecf06fd1afbe0_5a1788f672a1464f9232d22efa7ba6e0.png",
  },
  {
    name: "FX-8 Daily Profit",
    account: 110146567,
    description:
      "Trade: Automated Smart EA\nDaily Profit: 1-5% per day\nDrawdown: <50%\nNo Stop Loss\nhttps://social-trading.exness.com/strategy/110146567",
    author: "MISS WIMOLRAT SANGKAMANEE",
    authorPhoto:
      "/st/media/pim/media/user_photo/4a/4a0/4a06d1a5167ecb4c6d928d41aac70a43_466bca2cf0974cae9348a4fbc9b5bc84.jpeg",
  },
  {
    name: "FX-6 Daily Profit",
    account: 110146592,
    description:
      "Trade: Automated Smart EA\nDaily Profit: 1-5% per day\nDrawdown: <50%\nNo Stop Loss\nhttps://social-trading.exness.com/strategy/110146592",
    author: "MISS WIMOLRAT SANGKAMANEE",
    authorPhoto:
      "/st/media/pim/media/user_photo/4a/4a0/4a06d1a5167ecb4c6d928d41aac70a43_466bca2cf0974cae9348a4fbc9b5bc84.jpeg",
  },
  {
    name: "EURUSD EA maximum",
    account: 110146600,
    description:
      "100%EA. Approximate win78% and the maxDD is 19%. Aim to  return  about 150%/year. that has been proven for several years at other trading firms.",
    author: "英章 宮野",
    authorPhoto:
      "/st/media/user_photo/6f/6f4/6f43fb1d9e5e182f767d4d639ddeb4df_ed89f5f54ebe4ab3bfbfd72f6c1c9792.jpg",
  },
  {
    name: "CONVALEXA",
    account: 110146608,
    description: "Scalping\nExperience 10 years",
    author: "One point Strategy",
    authorPhoto:
      "/st/media/pim/media/user_photo/9f/9f2/9f28a041bf9d485f27bdaa61a1346cb3_6f247dc6313044b49e6161fc11e4db49.jpg",
  },
  {
    name: "Apple Strategy",
    account: 110146685,
    description: "Apple strategy",
    author: "BAHAR AFJOL",
    authorPhoto:
      "/st/media/pim/media/user_photo/84/847/847f586bc5ee823f9a06931a3a14aceb_0a8ec61591ac4d5894e05d892608774d.jpg",
  },
  {
    name: "EA Pro Xau",
    account: 110146809,
    description: "Ea cực ngon.",
    author: "ĐẠNG NGỌC",
    authorPhoto:
      "/st/media/pim/media/user_photo/9e/9e0/9e0b1609fe6963d6cdc2dbd2a0d03e39_e4e8c0554422478786569abe25125ac5.jpeg",
  },
  {
    name: "EasyPipsFX",
    account: 110146843,
    description: "shush",
    author: "Ahmed Marzooq",
    authorPhoto:
      "/st/media/pim/media/user_photo/a5/a52/a5297d3ece752b948325184549442c6c_f1034ba23161494bbeff09d22c15544b.png",
  },
  {
    name: "Adventure - Port 2",
    account: 110146901,
    description:
      '-  Trading " con số " .\n-  Tôi luôn duy trì " vốn chủ sở hữu ở mức 5.000$ " \n    Nếu muốn lãi kép thì có thể tái đầu tư từ phần lợi nhuận đã có.',
    author: "VÕ GIANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50f/50f095fde31538826e6c22582a428756_c8d6b459f6af43ae8495478a624f81e7.png",
  },
  {
    name: "ScaleMoneyFX",
    account: 110146909,
    description:
      "ScaleMoneyFx é uma I.A. sofisticada e especializada em operações no mercado de câmbio, visando lucros em diferentes cenários de mercado.",
    author: "Luis Felipe  Bento Pereira Telpizov",
    authorPhoto:
      "/st/media/pim/media/user_photo/b1/b1f/b1f770d70de636781a89c74da26eebcd_1362f494a0d748a7a07b54dd656a6f44.jpeg",
  },
  {
    name: "relax 2024",
    account: 110146931,
    description: "Chien luoc an toan ngay 0.5-1%",
    author: "Van Tran Bao",
    authorPhoto:
      "/st/media/user_photo/e8/e8a/e8ae1b61f0161a464fbe676a6cc926f3_04eeb682c92f4d5daa4e53b656e07c1d.jpg",
  },
  {
    name: "_KiAShA_FoReX_",
    account: 110146946,
    description:
      "We🫂 manage your account🧾 day⛅️ and night🌙 so that you get\nyour🫵 profit📈 back which you have given me for investing💰.\n\nRecover Your Loss With US.",
    author: "SALIYA KESHAVBHAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/00/004/0047454cc0151b928a0a7b5a7d0d8251_81d7b63427264d75be4d467fd5a5f89f.jpg",
  },
  {
    name: "ProfitPulse",
    account: 110146982,
    description:
      "Thị trường bây giờ cũng giống như 5-10 năm trước vì chúng lớn lên giống như chúng ta cũng trưởng thành lên.",
    author: "THANH CHANH PHAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/41/41c/41c3160823bf08af1ba9359ace75889e_d1aaa2610cfb4c39a5a129bc7b2f1623.png",
  },
  {
    name: "Koonsin_X50",
    account: 110146992,
    description: "Grid System , Swing Trade",
    author: "MR PIPHAT IM KONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/7a/7ae/7ae468f6325d99d6d2150a41f28ae975_511d28d6900e41cdaf6521d20fc9342b_jnv9roq.jpeg",
  },
  {
    name: "goldbullish",
    account: 110147020,
    description: "main focus is having high winrate and grow  consistent",
    author: "MELVERN JULIUS",
    authorPhoto: null,
  },
  {
    name: "EURUSD Full",
    account: 110147220,
    description:
      "Opero somente com EURUSD buscando 5% ao mês com o menor DD possível, utilizando EA construido por mim.",
    author: "Eder Leandro Domingos",
    authorPhoto:
      "/st/media/user_photo/89/893/893c618051e6857df99a80804e7ae97e_311e3e9905444f29af9c26f5f98bcf9d.jpg",
  },
  {
    name: "DAU TU BINH AN",
    account: 110147229,
    description: "giao dich theo quy trình D.E.A.F",
    author: "Phong Nguyễn Đại",
    authorPhoto:
      "/st/media/pim/media/user_photo/8f/8fb/8fbb4bee1f1effbc46155c0fea27971d_9ff94c4639504170a6f33a7a80043c8b.jpg",
  },
  {
    name: "Super Trader",
    account: 110147380,
    description: "Profit min 15% month",
    author: "VAN TRUONG NGUYEN",
    authorPhoto: null,
  },
  {
    name: "A Thợ Trade May Mắn",
    account: 110147443,
    description:
      "Bảo toàn vốn cho các nhà đầu tư phải được đặt lên hàng đầu.\nKiếm lợi nhuận an toàn, hiệu quả",
    author: "VAN UOC NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/d7/d78/d78e6ca31e30caa571261eb38a45a95c_81bbe06e18f04344b690b870170bdde0.png",
  },
  {
    name: "gold day tradind",
    account: 110147461,
    description: "Trading Gold (Xau/Usd ) only , Monthly 10 - 20 %",
    author: "kanthasamy anti",
    authorPhoto: null,
  },
  {
    name: "稳健型货币对-Currency pair",
    account: 110147470,
    description: "稳健型货币对-Currency pair",
    author: "双利 李",
    authorPhoto:
      "/st/media/pim/media/user_photo/10/10b/10bfe5058be8b8f56c14d0e70e8d6f74_329d49a8f88b4b638f91eeda329cc184.png",
  },
  {
    name: "shivagoldt",
    account: 110147484,
    description: "manraj shiva rk",
    author: "manish kumar soni",
    authorPhoto:
      "/st/media/pim/media/user_photo/8d/8d4/8d4e0b3005307b324f3c73023e98c3b7_3bdf1868d7424a389fafe5a8c2c49d26.jpg",
  },
  {
    name: "Forex Scalper",
    account: 110147490,
    description:
      "Trading is a risky business\nProfit Target is 10% to 20% per month.",
    author: "Prafulla Meher",
    authorPhoto:
      "/st/media/pim/media/user_photo/4d/4d4/4d48f227c9fc0a0645e052ece6f3b1cf_2bfe11518dd443df9d2f487e609086f7.png",
  },
  {
    name: "The Enigma",
    account: 110147617,
    description:
      "Leading financial services firm offering tailored solutions for wealth management, investment, and financial planning.",
    author: "CHHANDA JANA",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee2/ee2c4223979d23043562b6128c107f0b_aa87073bf62f433986cc6a9d3db1fc38.jpg",
  },
  {
    name: "BILLIONAIRE BOON",
    account: 110147680,
    description:
      "•Our experts do the trading, and you reap the rewards. Copy our proven strategies for daily gains. \n-Our Profit target is 30-35% per mont",
    author: "Tehseen  Ullah",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c21/c2119eacddca07204412d36277111e24_d38980667b234170bc1198c3e842b12f.jpg",
  },
  {
    name: "QueensStrategy",
    account: 110147717,
    description: "This is a tested strategey for USDCHF. Minimum $500 needed.",
    author: "ACHINI DARSHIKA WIJEWARDHANA VIYANNALAGE",
    authorPhoto:
      "/st/media/pim/media/user_photo/14/148/1483ce5704b0b8836820ac0eec981931_27ba8310b0374e83a0f0a4024c7de53b.png",
  },
  {
    name: "Memon traders",
    account: 110147802,
    description: "Hello",
    author: "Shahzeb Abdul Ghaffar",
    authorPhoto: null,
  },
  {
    name: "Exnessbotai",
    account: 110147805,
    description:
      "Best planning for investing here. Safe and secure trading guidiliness.",
    author: "DINESH BHAGWAT",
    authorPhoto: null,
  },
  {
    name: "Cash Generator",
    account: 110147807,
    description:
      "Trade by EA\nMonthly Profit: 5-15%\nUse grid and hedging techniques.",
    author: "PATTARA LHAOMEEPHOL",
    authorPhoto:
      "/st/media/pim/media/user_photo/7f/7ff/7ff2bc56f9371708bc89b8b2fdc30ff2_f4fcee0dd0e342eabe0c24db69ce1a7c.jpg",
  },
  {
    name: "Thiên Nga Đen",
    account: 110147817,
    description:
      "Mục tiêu từ 10-15%/tháng \n-Swing Trading\n- Giao dịch thuần Sonic R, Kháng cự hỗ trợ, Tuyệt Kĩ Vùng Giá Trị",
    author: "Huy Tran",
    authorPhoto:
      "/st/media/pim/media/user_photo/d0/d09/d093c332f874a7e63047b14aabba38cb_771fa9af306947c38fd3afaf0e36297b.png",
  },
  {
    name: "细水长流-恒久不息",
    account: 110147854,
    description:
      "The flowing water does not race, but its persistence is unending.\n流水不争先，争的是滔滔不绝。",
    author: "禹辛 龙",
    authorPhoto:
      "/st/media/pim/media/user_photo/70/703/703444041c03d84162a44b0a12ec9ff4_da4b18a1c40d4b59b7340c1076c56573.jpg",
  },
  {
    name: "Ovan Combat - EA2",
    account: 110147992,
    description:
      "Giao dịch ổn định theo các tín hiệu hạng A+ 99% EU\nMục tiêu lợi nhuận 10-20%/1 tháng\nXử lý lệnh bán tự động để đảm bảo tài khoản an toàn",
    author: "Ngọ Văn Hùng",
    authorPhoto:
      "/st/media/pim/media/user_photo/93/93b/93b0d8bbed35b05780df7e58d58d0e18_1785dbab6def46debf296e9d8ce9ebe3.png",
  },
  {
    name: "Ovan Combat - EA1",
    account: 110147995,
    description:
      "Giao dịch ổn định theo các tín hiệu hạng A+ 99% EU\nMục tiêu lợi nhuận 10-20%/1 tháng\nXử lý lệnh bán tự động để đảm bảo tài khoản an toàn",
    author: "Ngọ Văn Hùng",
    authorPhoto:
      "/st/media/pim/media/user_photo/93/93b/93b0d8bbed35b05780df7e58d58d0e18_1785dbab6def46debf296e9d8ce9ebe3.png",
  },
  {
    name: "tai khoan coppy",
    account: 110148244,
    description: "quản lý vốn theo tỷ lệ",
    author: "tung van",
    authorPhoto:
      "/st/media/pim/media/user_photo/f6/f68/f687846dbfbca1bc1cf020bd2f741dda_08ac0b2b97c84fb3a1ffc23856af2155.jpg",
  },
  {
    name: "HungTrading Eu V1",
    account: 110148301,
    description:
      "Sử dụng các quy luật vận hành của vũ trụ vào trong trading.\nMin 100\nContact: \nTelegram https://t.me/dinhhungdigital\nZalo: 0966493666",
    author: "THI THAM NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/46/46d/46d0280340ca8d152fe281aaacd5b74a_8926473dd316421b9794e5f22f853d8e.jpg",
  },
  {
    name: "Phoenix FX",
    account: 110148303,
    description:
      "Constantly growing the account with experienced traders community",
    author: "KITHUL GUNAWARDHANA",
    authorPhoto:
      "/st/media/pim/media/user_photo/67/67a/67abd7e7fac670960ef23d89f36ca652_c81be9838601477e85cc5f14472a8370.png",
  },
  {
    name: "Swing_Trend",
    account: 110148314,
    description:
      "การออกออเดอร์ซื้อขายแบบ Swing Trading ของเทรดเดอร์ในตลาด Forex นั้น มีทั้งแบบระยะสั้นและแบบระยะยาว การถือยาวหรือสั้นจะขึ้นอยู่กับ และ Trend Trading",
    author: "จตุพล จรูญศิริ",
    authorPhoto:
      "/st/media/pim/media/user_photo/6d/6db/6db9d4390268f9396d1adb7149572dcb_589c9e64c12c4fb294db590bd4765d0f.jpg",
  },
  {
    name: "Pips and Profits",
    account: 110148478,
    description: "Kỷ luật là chìa khóa của sự thành công !",
    author: "NGUYỄN LANH",
    authorPhoto:
      "/st/media/pim/media/user_photo/63/639/639b0f7141701d23c367dad94a0a924e_80cbb44991c040d39955bdcbee55d8f1.jpeg",
  },
  {
    name: "HOKI_RICHARD",
    account: 110148526,
    description: "GBPAUD\nEURAUD\nTrade Pair",
    author: "Junus Tiono",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b93/b931255b4a7263fd661d2dd4dfc5d994_430575701bf54d2fad86a29f308e97dd.jpg",
  },
  {
    name: "Forex Trading",
    account: 110148843,
    description:
      "Here we r not giving Guaranteed Return..\nBut atleast 3-10 % return",
    author: "ROHIT KUMAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cbe/cbe645d16b9b3b7b94e85803a79fdef8_b531698c866a497b8927b4225dc04d80.jpg",
  },
  {
    name: "Gold Price Action",
    account: 110148948,
    description: "Gold Price Action",
    author: "Anll S",
    authorPhoto:
      "/st/media/pim/media/user_photo/fa/fa2/fa2ddd9b6c2a2a421ac6572f63428632_640837d9efc14fd1a324afa18d689428.jpg",
  },
  {
    name: "Lotteries Risk -Sub",
    account: 110148995,
    description:
      "- Nếu Lotteries Risk full hạn mức copy thì hãy copy chiến lược này .\nWebsite: scalpgold.pro Group: https://t.me/ScalpGold_Group",
    author: "VAN CONG VO",
    authorPhoto:
      "/st/media/pim/media/user_photo/33/339/3398e97d802094555fd230c41bab6281_d58d57d169fc4ae0b016ded4ae83e411.jpg",
  },
  {
    name: "Pro_Player",
    account: 110149011,
    description:
      "Salping 1%-2%\nVới 7 năm kinh nghiệm trinh chiến trên thị trường.Tôi nhận ra quản lý vốn là cách tốt nhất để tối ưu hóa về mặt lợi nhuận.",
    author: "MINH VU DANG",
    authorPhoto: null,
  },
  {
    name: "Locked strategy 2024",
    account: 110149127,
    description:
      "Swingtrade return are based on coresponding risk. Only for people who patiently wait. Let your money works for you",
    author: "Ceiline Lim",
    authorPhoto:
      "/st/media/pim/media/user_photo/ed/edc/edc71ed4346b0fb7738f3dc67d64d52a_3017afa2826240cba14cace5f3de4579.jpg",
  },
  {
    name: "Mr Green Bee",
    account: 110149134,
    description: "Chiến lược an toàn, quản lí rủi ro, quản lí vốn, kỉ luật",
    author: "THE ANH TRINH",
    authorPhoto:
      "/st/media/pim/media/user_photo/98/988/9888b06808de89af50b0849426f857b0_37b854596a824137b1b8def722d311e8.jpg",
  },
  {
    name: "Ads Trading",
    account: 110149267,
    description:
      "Funds with High Risk that give High Return\n=> Join group: https://t.me/trading68forex",
    author: "PHẠM LÂM",
    authorPhoto:
      "/st/media/pim/media/user_photo/a6/a68/a683ad90656ffda15a81092120590b0e_2b0c6bd8a73a49259a570348cbee0d02.jpg",
  },
  {
    name: "More Profit1",
    account: 110149588,
    description: "Take more profit from forex",
    author: "Aurakin Tongsuk",
    authorPhoto:
      "/st/media/pim/media/user_photo/71/713/713d4e852351231ace435263647d0c3c_53af9979415949f49d5d94f03eca93b7.jpeg",
  },
  {
    name: "Mohamed Amer",
    account: 110149600,
    description: "market radar stratgy based on ict and classic anaylasis",
    author: "Mohamed Amer",
    authorPhoto:
      "/st/media/user_photo/9e/9ea/9ea40c7c58eb23fd8f29db345ba7cc4a_d0ed496a88c04a9c97fd38bb8da776ce.jpg",
  },
  {
    name: "Optmus - HR",
    account: 110149670,
    description:
      "Estratégia agressiva buscando alto rendimento com um risco proporcional.",
    author: "Isaque Gonzaga Teles",
    authorPhoto:
      "/st/media/pim/media/user_photo/4b/4b5/4b5318406b0c607b50e9b57df339b11d_156cbd9d92634b78a4f65bafbcbca0d5.jpg",
  },
  {
    name: "Growth Horizon BB",
    account: 110149692,
    description: "Grid",
    author: "MR SIRAPAT THUAMPHIWTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/ba/bac/bacc4860df3b7449cc5af802c64e9edd_2e878d2f255d40e798d2f21adc7ce070.jpg",
  },
  {
    name: "Copy Trade 6 258",
    account: 110149717,
    description: "Lợi nhuận tăng đều",
    author: "VAN DINH NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/28/287/287023e5ea2b6e470917459aee05a490_62037aed2264436e8397270a74a4a31a_aOov5RC.jpeg",
  },
  {
    name: "สร้างชีวิตที่ดีขึ้น",
    account: 110149826,
    description: "สร้างรายได้ที่ดีขึ้น ให้กับตัวเองและครอบครัว",
    author: "MRS EUANGFA SIRITHO",
    authorPhoto: null,
  },
  {
    name: "Mean Revert Strat",
    account: 110149970,
    description:
      "Mean revert startegy with aim of protecting capital while earning 5 to 30 percent monthly.",
    author: "Wilmer Encarnacion",
    authorPhoto: null,
  },
  {
    name: "Akira Forex EU - GU",
    account: 110150026,
    description:
      "Chỉ giao dịch EURUSD, có chiến lược quản lý vốn an toàn và profit hàng tháng đặt 5-10%\nZalo 034.303.7221\nhttps://t.me/akiratruong",
    author: "THI HONG DAO",
    authorPhoto:
      "/st/media/pim/media/user_photo/1e/1ed/1edc78c1195b5178d22563070c0c4d6a_781456d32e3c42b1ae27d176a34cf1c9.png",
  },
  {
    name: "PERFICIENT",
    account: 110150054,
    description: "NO MONTHLY TARGET\nSWING TRADE",
    author: "JENNY",
    authorPhoto:
      "/st/media/pim/media/user_photo/73/735/7350d56681774dbb648c214570b200c0_3567b1e7b32a48b9b2e253357cb06fae.jpg",
  },
  {
    name: "SpaceX EURUSD",
    account: 110150116,
    description:
      "Fund: $2000\nStoploss: $444\nSecondary stratety: mql5.com/en/signals/2214815",
    author: "THI PHUONG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/8b/8b3/8b3a4db4a5da50498c24f7ea921d421c_5fdc980d237e4cfb97293686f8277687.jpg",
  },
  {
    name: "Mang tiền về cho vợ",
    account: 110150256,
    description:
      "Nơi đầu tư cho các quỹ đen của chồng, lãi nhớ rút mua quà cho vợ :))",
    author: "THAO PHUONG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/82/82c/82cdecd91bb5435444e4c01534bcd182_3f27b41472ec42e5b411853ddeef2463.jpg",
  },
  {
    name: "FX-5 Daily Profit",
    account: 110150311,
    description:
      "Trade: Automated Smart EA\nDaily Profit: 1-5% per day\nDrawdown: <50%\nNo Stop Loss\nhttps://social-trading.exness.com/strategy/110150311",
    author: "MISS WIMOLRAT SANGKAMANEE",
    authorPhoto:
      "/st/media/pim/media/user_photo/4a/4a0/4a06d1a5167ecb4c6d928d41aac70a43_466bca2cf0974cae9348a4fbc9b5bc84.jpeg",
  },
  {
    name: "LF SAIGON 4",
    account: 110150390,
    description:
      "Contact for a consultation\nTelegram Chat Group:  https://t.me/VANGgroup\nTelegram contact: @LONGFX_admin \ncopy this link paste on Google to join",
    author: "NGUYẼN LONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/f7/f7d/f7d234d7c625dbfd0e398240be1332ed_524a5927d84e48ab9e7039b55a57d67d.jpg",
  },
  {
    name: "MY AUTO ATM 001",
    account: 110150468,
    description: "very small rish and good profit",
    author: "海明 邵",
    authorPhoto:
      "/st/media/pim/media/user_photo/eb/ebd/ebd19f2f5269be75c03f08609bb99970_cc9466fbce1f42779cf86c4459d5308f.jpg",
  },
  {
    name: "Paras Mani Gold",
    account: 110150613,
    description:
      "For more detail check out our Telegram channel. https://t.me/+3gtUIwLVP0c0ZGE1",
    author: "Ashutosh Pratap Singh",
    authorPhoto: null,
  },
  {
    name: "Exness Trading Team",
    account: 110150622,
    description:
      "Profit Target : 10%-20% per month\nMục tiêu lợi nhuận 10-20% trên tháng",
    author: "Thu Hằng Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/fe/fe1/fe160eeda18650a0fe88c90c3192a4dd_b1fda8e362d34770994362281e401622.png",
  },
  {
    name: "Chinazhang",
    account: 110150637,
    description: "1221221222122",
    author: "海峰 张",
    authorPhoto:
      "/st/media/pim/media/user_photo/c5/c53/c5376f80679bb382e2a31026cf3894d9_78d52f872d7449a9b89556eca707bc61.jpg",
  },
  {
    name: "MONEY CARE_1",
    account: 110150679,
    description:
      "Always set Stop Loss, max 5%. \nProfit target is 10 - 30% per month.\n\nLuôn đặt cắt lỗ, tối đa 5%\nLợi nhuận 10 - 30%/ tháng",
    author: "THI LOAN DANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/3d/3d8/3d831f0b1879630c985ad1fc57d3f616_c9c17b3e5d4a4a17a0e991668c9dbd27.png",
  },
  {
    name: "Vu tru EA no22",
    account: 110150682,
    description: "Funny bot",
    author: "Cong Do Thanh",
    authorPhoto:
      "/st/media/pim/media/user_photo/a4/a4d/a4daea9f1cc8ca732d88743bc2eb1163_56463e8fa6c7447f8f0b4b55a4bcd197.jpg",
  },
  {
    name: "Shree gold",
    account: 110150687,
    description:
      "100 % sefe swing tread and no loss. invest long tream\nTrust is money",
    author: "Jitendra Bardiya",
    authorPhoto:
      "/st/media/pim/media/user_photo/c9/c97/c97563423be38da2aca8a2fa8cceea14_5861d8dab954482c8a363100c96f4f6c.png",
  },
  {
    name: "EUROpro LionDance",
    account: 110150712,
    description:
      "Pairs: EURUSD\nFund: $1000\nStrategy: Grid+,EMA, RSI, TREND, ATR",
    author: "THI PHUONG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/8b/8b3/8b3a4db4a5da50498c24f7ea921d421c_5fdc980d237e4cfb97293686f8277687.jpg",
  },
  {
    name: "Hello Hello",
    account: 110150725,
    description: "Hello Hello",
    author: "Dinh Thi Kim Lien",
    authorPhoto:
      "/st/media/user_photo/65/65c/65cc8004b94edb0e6f7d53bc95c7bdc6_6d75e7d02aca48ccba10a2dbbd6a60ce.jpg",
  },
  {
    name: "Radha Rani",
    account: 110150726,
    description:
      "Radha rani ki kripa se sab accha hoga. profit bhi hoga or radha rani k dharshan bhi jaldi hi honge. Jai ho Radha Rani ki.",
    author: "Shalini Jain",
    authorPhoto: null,
  },
  {
    name: "Lotus_bot_master",
    account: 110150751,
    description:
      "We are a professional forex trader and earn daily upto 10% in gold.",
    author: "NITIN ODNALWAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/27/27a/27accbd8b4373c5f614af0858202aa3f_ab8ba9a23bd84443bda86a136cb29338.jpg",
  },
  {
    name: "Emotion Game",
    account: 110150754,
    description: "Discipline to survive",
    author: "Hiền Lê Thanh",
    authorPhoto:
      "/st/media/user_photo/63/638/638ef1d820f1629f7b2f0cfeaf4bf962_c610648713c14112bea396d02728deb4.jpeg",
  },
  {
    name: "Happy Life",
    account: 110150786,
    description:
      "Chiến lược vận dụng linh hoạt các phương pháp: Lục chỉ cầm ma, Sóng Eliot, Volume Profile, Price Action, Lý thuyết Down. SL TP rõ ràng. Lợi nhuận >10%",
    author: "VAN PHAN HOANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cb7/cb7be89eef4949ffd2ef3dedcc81cfb2_567e69e7482346f9a94ee6546839b345.jpg",
  },
  {
    name: "Projeto  Hórus",
    account: 110150796,
    description:
      "Entradas de alta precisão, de tendência ou Scalping de forma segura, prática e tranquila. Acompanhe o crescimento da sua conta.",
    author: "José Matheus da Silva Oliveira",
    authorPhoto:
      "/st/media/pim/media/user_photo/ca/ca4/ca48704e6ecda7d927ea43715f1a9e55_416b4185a3624ba7a1e908a1a7abe030.jpg",
  },
  {
    name: "Trading Roomz",
    account: 110150803,
    description: "Swing trade",
    author: "APIWAT SATTAYA",
    authorPhoto:
      "/st/media/pim/media/user_photo/7f/7fd/7fd45269aaac803216516cb15da53b57_e4fdc2a2c9134571b716b064f4948102.jpg",
  },
  {
    name: "Profit Forever",
    account: 110150921,
    description:
      "~Daily Trade/ Daily Profit \n~Trade With Low Risk\n~Pure Volume Trading\n~Monthly Target 15-20%",
    author: "سلمان علي",
    authorPhoto:
      "/st/media/pim/media/user_photo/9a/9a4/9a41f064535aade6e008297b05b26bc6_2679d71a96ae4490b9b4f1bcbd1b9f51.jpg",
  },
  {
    name: "Jai Ambe 09",
    account: 110150985,
    description: "Hi I'm kirtik surti",
    author: "KIRTIK SURTI",
    authorPhoto:
      "/st/media/pim/media/user_photo/c5/c57/c570584cd10592dc8b6bc8ae1760eba2_728220ebc9ab4738bb1c8e4d0a05f4eb.jpg",
  },
  {
    name: "ICT-GOLDHUNTER",
    account: 110151037,
    description:
      "LOW RISK AND CONSISTENT PROFIT. I use ICT strategy for my entry with1:3RR with TP/SL, no martingale, no layering. Avg Profit 10-25% a month",
    author: "Melissa Sutandio",
    authorPhoto:
      "/st/media/pim/media/user_photo/e9/e99/e99695f54cc71382cd497fbf4784e2a6_7e93a694f326483ba27c9256774c27d1.jpg",
  },
  {
    name: "Cubes All Star",
    account: 110151146,
    description: "Eurusd, Gbpusd, audcad",
    author: "DANIEL CHRISTANTO",
    authorPhoto: null,
  },
  {
    name: "Viet Dragon Trading",
    account: 110151154,
    description:
      "Chiến lược giao dịch dài hạn với mức lợi nhuận ổn định từ 10-30%/ tháng.",
    author: "CHÂU BÌNH",
    authorPhoto:
      "/st/media/pim/media/user_photo/ca/cae/cae4267892b8caef8c48c599ceb2ec9d_32d8d973f87d4f10b196a5adb07d9d92.jpg",
  },
  {
    name: "Sun Trading",
    account: 110151183,
    description:
      "Gold Strategy and GBP/USD\nProfit: 5%-20% / per month.\nRefunding transaction Fee, please contact Telegram: @CopyEA\nStoploss : -30%",
    author: "Công Phạm Hữu",
    authorPhoto:
      "/st/media/pim/media/user_photo/c4/c42/c425b4bc55be970c7e21145d12e52e04_2658fec0942a47a38469083f86d7fdae.jpg",
  },
  {
    name: "PHS Capital",
    account: 110151197,
    description:
      "Giao dịch theo xu hướng : Trade with the trend\nKhuyến nghị Cố 1000$ : Recommended Try $1000",
    author: "Thuy Quynh Nguyen Ngoc",
    authorPhoto:
      "/st/media/pim/media/user_photo/f3/f35/f352ec50289a59880f489ab538611d95_1183f9a1564e4b46a7459ada322be9ec.png",
  },
  {
    name: "Aswad BH AUDUSD",
    account: 110151490,
    description:
      "AswadFX is a low risk strategy with the objective of achieving a consistent monthly target profit up to 5%.\n\nEntering this strategy at your own risk.",
    author: "Husain Aswad",
    authorPhoto:
      "/st/media/pim/media/user_photo/e0/e08/e08cb09e7cbcbf2c70353b8eb9092bc2_45c1ad9ff5094a9dab9fd4b03149d2b1.jpeg",
  },
  {
    name: "Scalper Gold Seaweed",
    account: 110151658,
    description:
      "1) Minset\n2) Trade setup\n3) News \n\nFollow us:\nhttps://www.facebook.com/SaraiSaitrade?mibextid=LQQJ4d",
    author: "MR VIWAT ANTIPKUL",
    authorPhoto:
      "/st/media/pim/media/user_photo/aa/aa0/aa0f4c9479b02c384673e108a541b820_860d09483e0b46dfa09f90944bb836d7.jpeg",
  },
  {
    name: "Day Trading FX",
    account: 110151667,
    description:
      "📈 A strategy that's going to earn you low yet consistent returns over the long run. 👇 Read my Bio to learn more about me and my strategy.",
    author: "Asim Mehmood Mughal",
    authorPhoto:
      "/st/media/pim/media/user_photo/33/33c/33c056ec8b5437e8a5af2dfa7dcc15e4_0decd26aa093471494e70185867677ba.png",
  },
  {
    name: "TraderAlquimista",
    account: 110151700,
    description:
      "Combino diferentes indicadores para lograr un gran profit, con un riesgo controlado",
    author: "JONNY ANDRES ROMERO VILLARREAL",
    authorPhoto:
      "/st/media/pim/media/user_photo/c7/c74/c74cb072cd113abc36e0efe04c4f34ab_4cbe7ad2f70f4301a9e4a6d4ae8ee555.jpg",
  },
  {
    name: "HBH SPOT TRADING",
    account: 110151779,
    description: "safe",
    author: "RIN ANH TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/4c/4c4/4c4fb32d114b7968d3f1a980e2993bee_7048fb55ccac4cd298d21b8eb97c819c.jpg",
  },
  {
    name: "elliottwase",
    account: 110151806,
    description: "elliot",
    author: "HOÀNG NGỌC",
    authorPhoto: null,
  },
  {
    name: "Gold rider 1",
    account: 110151830,
    description:
      "Low risk strategy that aims to grow capital gradually over time. Trades only Gold.",
    author: "ADEDUNMOLA ADENIKE ODUNLAMI",
    authorPhoto:
      "/st/media/pim/media/user_photo/de/deb/debe5e14207c6ab2d291594b6d7ebe82_c7f685af675d4599802cbf426ea012ef.jpg",
  },
  {
    name: "LHD-Invest",
    account: 110152014,
    description: "mang tien ve cho me",
    author: "Le Hoang duy",
    authorPhoto: null,
  },
  {
    name: "Forex Winner",
    account: 110152028,
    description: "Profit target is 5-10% per month",
    author: "Muhammad Rafique",
    authorPhoto:
      "/st/media/pim/media/user_photo/b3/b33/b339b269e4f54c1d3f04b9e96c5c0721_021779746a3b4147af930bd33718d84c.jpg",
  },
  {
    name: "BÚFALOtrading",
    account: 110152045,
    description: "Intradia/Scalpe",
    author: "Yaiko Chalas",
    authorPhoto:
      "/st/media/pim/media/user_photo/11/113/1133a470d76abc20377b07cc6a31a3bb_726639d9048f4f9fa7374b7443cffb03.jpg",
  },
  {
    name: "HFX SNIPERS",
    account: 110152074,
    description:
      "-Profit Target is upto 40% to 50% per month\n-RISK PER TRADE IS 1% TO 2%\n- R:R IS MINIMUM 1:2\n- ACCURACY IS MORE THAN 80%",
    author: "PAWAN YELE",
    authorPhoto:
      "/st/media/pim/media/user_photo/8f/8f9/8f9800501b211e445048462d84a1aec0_370dcae2de314606b36b78da4c7030af.jpeg",
  },
  {
    name: "SonEA01_Correlation",
    account: 110152129,
    description:
      "Chạy 6 cặp AUDCAD - AUDUSD - EURAUD - EURGPB - EURUSD - GPBUSD\n+ Bot Auto 100%\n+ Chốt lời độc lập và tỉa chéo cặp âm\n+ LN 15-20%/tháng\n+ Rút lãi tuần",
    author: "DUONG SON LE",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8ab/8ab5c7311a145297ba593d28f2c67b6e_ede5d09d009a4a7d8f67d7d24bfdeac9.jpg",
  },
  {
    name: "Victory Golg2",
    account: 110152199,
    description:
      "超级大神管理账户，平均月收益50%+，200美金，爆仓当止损，单日风控20美金，每单0.01手，最多持仓2单，请做好资金管理。激进的200美金开始跟单一倍，稳定的2000的跟随一倍，以免造成亏损。不明白加TG/line:vvv5525",
    author: "世景 覃",
    authorPhoto: null,
  },
  {
    name: "Taikhoanthamkhao",
    account: 110152222,
    description: "Hi anh em",
    author: "NGỌC QUANG PHẠM",
    authorPhoto: null,
  },
  {
    name: "Loyalty an toàn số 1",
    account: 110152239,
    description: "An toàn-hiệu quả là điều duy nhất tôi quan tâm",
    author: "THI QUYNH CHAM NGO",
    authorPhoto:
      "/st/media/pim/media/user_photo/a6/a68/a68520a0bd0a13ffbfbc89038445bb07_01335d7bf3f84ff2871595664d2aa642.jpeg",
  },
  {
    name: "Justchill",
    account: 110152276,
    description: "Profitable one, First try for a month Fir Vishwas Karo",
    author: "ARUN INGEWAD",
    authorPhoto:
      "/st/media/pim/media/user_photo/a8/a8c/a8c97f4f34f54ee8e9636201bab193e1_5750caa9c8904959a884746958d4a61a.png",
  },
  {
    name: "THE FOREX EMPIRE 01",
    account: 110152365,
    description:
      "A conservative 2% risk per transaction for stable and sustainable growth.\n\n Significantly stabilized Drawdown (DD) for a smoother trading journey.",
    author: "Cheikh ahmadou bamba  DIAGNE",
    authorPhoto:
      "/st/media/pim/media/user_photo/15/15d/15d114bcc2ae673978b5af0d313f8f40_abb3b3df603349a6a0b46cd076d3d06d.jpg",
  },
  {
    name: "TU DUY TRIEU DO",
    account: 110152370,
    description: "PRICE ACTION",
    author: "phuoc tran anh",
    authorPhoto:
      "/st/media/pim/media/user_photo/18/188/188fb7d0be4bc1e3b1c82118735b65c2_913657f8b44b4c788c118ae4fde9a546.jpg",
  },
  {
    name: "Chill Daily",
    account: 110152373,
    description: "Chill",
    author: "SURACHAI TANGJAIPATTANA",
    authorPhoto:
      "/st/media/pim/media/user_photo/cc/cce/cce3d5049e652e7f4c3b6c87074ad8a2_0e60750171144929b2c3af9d2e1c5470.jpg",
  },
  {
    name: "HEAD SHOT",
    account: 110152381,
    description: "5%/MONTH",
    author: "NGUYỄN THÙỶ",
    authorPhoto:
      "/st/media/pim/media/user_photo/3e/3ea/3ea3a75377a8e69c82071186b18eb679_f525e4e51e29455dbd0cec0b9ffd45c3.jpg",
  },
  {
    name: "SuccessTraderTez1",
    account: 110152456,
    description: "Scalping 10-20 pips",
    author: "KRISTIANI",
    authorPhoto: null,
  },
  {
    name: "Euro Focus",
    account: 110152506,
    description:
      "We trade only EURUSD, removing human emotion for systematic, profitable trades. Join our copy service for capital growth.",
    author: "Taiane dos Santos Siebra",
    authorPhoto:
      "/st/media/pim/media/user_photo/2a/2aa/2aa9d065d1e8e97828beca32c9bbb258_e7faff681cd94005a0b1a70dc7220bc8.jpg",
  },
  {
    name: "x5traderx5",
    account: 110152519,
    description: "x5",
    author: "THE HAI PHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a6/a6c/a6cab55370f944ca9b76fc0917063004_2483379e49794d4ab846a9ed273b2e96.png",
  },
  {
    name: "Profit 10 percent",
    account: 110152568,
    description:
      "Profit 10%/month. SAFE. Low Risk.\nNo DCA, NO EA, Have SL & TP.\nhttps://t.me/+VboSIdBBDntlN2Rl   (telegram group)",
    author: "NGUYỄN THỊ NGỌC  MAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f82/f82868753754774c39641556995d3c7e_922b0555451e4301b00114f318f002df.jpg",
  },
  {
    name: "Auspicious",
    account: 110152587,
    description: "We focus on scalping\n\nt.me/@Aspicious74",
    author: "Md. Badrul Hasan  Nibir",
    authorPhoto:
      "/st/media/pim/media/user_photo/f2/f27/f27335aab1fbe3cada555f9b5fe8610e_4145e2a5f60b496ca58bfeb316b3c600.jpg",
  },
  {
    name: "Trade Master",
    account: 110152613,
    description:
      "You will get 10 to 15% monthly consistence returns with very minimum drawdown",
    author: "Bhavesh Gelani",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b91/b91a4c448a7568d6f0505629dfc239d3_0f70fab6653b4d5db1790bf13054980d.jpg",
  },
  {
    name: "Hamdan Dubai",
    account: 110152725,
    description: "Man can destroy but can't be defeat",
    author: "AMMAD SHAHID",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c2a/c2a1f2e6674a138fa77c7cf643be0a1a_2dc6ed73e433438294c974a8d4fc643d.jpg",
  },
  {
    name: "Forex scalping",
    account: 110152735,
    description: "Forex scalping strategies with low risk high gain",
    author: "SAMEER RAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/f4/f4f/f4fec371a7d6506e9e1c3312bc722e1e_10d9b46ec8d048b3ba862176803fd9bc.jpg",
  },
  {
    name: "Everest",
    account: 110152777,
    description: "Đừng bao giờ “Kiếm củi ba năm thiêu một giờ”.",
    author: "Tùng Nguyễn Huy",
    authorPhoto:
      "/st/media/pim/media/user_photo/da/dab/dabc76102c8c0fefae2e011eeafa6b5c_c6738eab125440958b78f9e1f4ed18bf.jpg",
  },
  {
    name: "Everest",
    account: 110152785,
    description: "h",
    author: "Tùng Nguyễn Huy",
    authorPhoto:
      "/st/media/pim/media/user_photo/da/dab/dabc76102c8c0fefae2e011eeafa6b5c_55286e6abce84389a5c24eeaacb07f9d.jpg",
  },
  {
    name: "Everest",
    account: 110152795,
    description:
      "If your account burns out, will you no longer have money to last forever in the market? To survive forever in the market, don't let your account burn.",
    author: "Tùng Nguyễn Huy",
    authorPhoto:
      "/st/media/pim/media/user_photo/da/dab/dabc76102c8c0fefae2e011eeafa6b5c_aede0a1f881d402eb8e508245ef44273.jpg",
  },
  {
    name: "Everest",
    account: 110152797,
    description:
      "If your account burns out, will you no longer have money to last forever in the market? To survive forever in the market, don't let your account burn.",
    author: "Tùng Nguyễn Huy",
    authorPhoto:
      "/st/media/pim/media/user_photo/da/dab/dabc76102c8c0fefae2e011eeafa6b5c_aede0a1f881d402eb8e508245ef44273.jpg",
  },
  {
    name: "Everest",
    account: 110152907,
    description:
      "If your account burns out, will you no longer have money to last forever in the market? To survive forever in the market, don't let your account burn.",
    author: "Tùng Nguyễn Huy",
    authorPhoto:
      "/st/media/pim/media/user_photo/da/dab/dabc76102c8c0fefae2e011eeafa6b5c_084d7d1c4bc74a1d995c78d30a9c8151.jpg",
  },
  {
    name: "Everest",
    account: 110152909,
    description:
      "If your account burns out, will you no longer have money to last forever in the market? To survive forever in the market, don't let your account burn.",
    author: "Tùng Nguyễn Huy",
    authorPhoto:
      "/st/media/pim/media/user_photo/da/dab/dabc76102c8c0fefae2e011eeafa6b5c_084d7d1c4bc74a1d995c78d30a9c8151.jpg",
  },
  {
    name: "Everest",
    account: 110152911,
    description:
      "If your account burns out, will you no longer have money to last forever in the market? To survive forever in the market, don't let your account burn.",
    author: "Tùng Nguyễn Huy",
    authorPhoto:
      "/st/media/pim/media/user_photo/da/dab/dabc76102c8c0fefae2e011eeafa6b5c_d793a06ffbeb4f4a9a5c69ebf1998005.jpg",
  },
  {
    name: "Everest",
    account: 110152912,
    description:
      "If your account burns out, will you no longer have money to last forever in the market? To survive forever in the market, don't let your account burn.",
    author: "Tùng Nguyễn Huy",
    authorPhoto:
      "/st/media/pim/media/user_photo/da/dab/dabc76102c8c0fefae2e011eeafa6b5c_d793a06ffbeb4f4a9a5c69ebf1998005.jpg",
  },
  {
    name: "Victory Gold3",
    account: 110152914,
    description:
      "超级大神管理账户，平均月收益50%+，200美金，爆仓当止损，单日风控30美金，每单0.01手，最多持仓3单，请做好资金管理。激进的200美金开始跟单一倍，稳定的2000的跟随一倍，以免造成亏损。不明白加TG/line:vvv5525",
    author: "世景 覃",
    authorPhoto: null,
  },
  {
    name: "Blue Pipss",
    account: 110152951,
    description:
      "Join our social trading platform and let experienced traders manage your investment for you...",
    author: "Hamza Hamid Khan",
    authorPhoto:
      "/st/media/pim/media/user_photo/2b/2bf/2bfa0d9796655042881107476ce6bec7_94a9a43e9b724906a83212cae0646fb5.jpeg",
  },
  {
    name: "Gold Super Fast 1",
    account: 110152955,
    description: "X",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "Gold Super Fast 2",
    account: 110152957,
    description: "X",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "SpeedyPips",
    account: 110153041,
    description: "Tạo ra lợi nhuận nhanh chóng từ những giao dịch nhỏ.",
    author: "LÊ ANH",
    authorPhoto:
      "/st/media/pim/media/user_photo/a7/a7e/a7e41896bc0adc81ee0c2f9590e5f053_36894e2ecb5740c592fd958f05466cb9.jpeg",
  },
  {
    name: "Serok Emas",
    account: 110153077,
    description: "Serok Emas",
    author: "LIM TONNY",
    authorPhoto:
      "/st/media/pim/media/user_photo/bd/bd7/bd7cda663983200a2ee4827de3362b5b_4f798c581f47417282b6c637e388def7.jpeg",
  },
  {
    name: "Earn Daily Profit",
    account: 110153095,
    description:
      "More than 10 Years of Forex trading experience. Keep making profits. Profitability target 50-100% or more a Month. Investors funds are SAFE here.",
    author: "Muhammad Sohrab Khan",
    authorPhoto:
      "/st/media/pim/media/user_photo/26/269/269b112b064f9f449853d3ca1c502f4c_261e9347a9084091b3d6555632c00e16.jpg",
  },
  {
    name: "Day trader",
    account: 110153232,
    description: "We place day trades only",
    author: "Ehsan Shabbir",
    authorPhoto: null,
  },
  {
    name: "FOREX TRADING",
    account: 110153267,
    description:
      "-Mục tiêu 15-30%/tháng.\n-Liên hệ hỗ trợ:\nTelegram: @SocialTrading_EA\nZalo: +84398176806",
    author: "VAN NAM NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/b8/b84/b84957adf159514042941426e70480f7_d3d65892beb54a9e914e887ad017bba2.jpg",
  },
  {
    name: "Narayana123",
    account: 110153287,
    description:
      "We trade BTC and Gold. Our task is to get the profit of 15 to 20% per month. Our strategy is of low risk and high reward.",
    author: "BHAVANI PRASAD",
    authorPhoto:
      "/st/media/pim/media/user_photo/ec/ecf/ecf952f9682a0aa541afcf6aa9c4df11_0c60450cefc84c70aa3e2cfeae822b8d.jpeg",
  },
  {
    name: "Niagara by Apisbot",
    account: 110153289,
    description:
      "Niagara by Apisbot | 100% automated using EA | Trading involve risk, you can lose all your money. Only use money you can afford to loose",
    author: "David Yulianto Santoso",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/696/696c116dd07051e4d302bd6ee53779b3_aec007cb1d8c4deeb7f65842b5577a61.jpg",
  },
  {
    name: "Extraordinary N",
    account: 110153293,
    description: "-",
    author: "BENJAWAN NEDSAWANG",
    authorPhoto: null,
  },
  {
    name: "ᴹᴿP EP E R F E C T",
    account: 110153367,
    description:
      "No over trading profit is small but safe 100 percent no need to take risk and every time in tention. Those who want big profit ignore this strategy",
    author: "ABDUR REHMAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a6/a6f/a6f829517064740ffe49fe8f29a8f02d_114e9fabeb13474a83a902c62a57a1be.jpg",
  },
  {
    name: "Nuclear Profit",
    account: 110153488,
    description: "Tele: 0989598121",
    author: "THI THANH DIEM NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6a/c6aea2cd994738eb05dc9914588afab7_6819facf38de481a949e6733f6be7d60.png",
  },
  {
    name: "tntsuga trades",
    account: 110153570,
    description: "Noob",
    author: "TANTO AGUS",
    authorPhoto:
      "/st/media/pim/media/user_photo/15/15c/15cc9a487d5877e096c95273ee1f2587_49fda73347a74fa3b261de1ee5d929f3.jpeg",
  },
  {
    name: "Tiangong-1",
    account: 110153608,
    description:
      "Calculate a judgment value through the trend indicator, enter according to the indicator, reach a certain value, or form a hedge, or enter in the same",
    author: "璘 黄",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f8d/f8d70379a2eef2d57eee5d054824e728_ea07fd2bf46d463a985267b5789537a5.jpeg",
  },
  {
    name: "Ravi algorithm",
    account: 110153624,
    description:
      "We manage your account day and night so that you get your profit back which have given me for investing this approach is called hands-off-investment",
    author: "ravi chanchar",
    authorPhoto:
      "/st/media/pim/media/user_photo/6c/6c1/6c19d97d00cf584e848c776b9ee70ef6_db77442f439248e1a094a8147d523fce.jpg",
  },
  {
    name: "The Blue Whale",
    account: 110153629,
    description:
      "My strategy based on PPA and SMC,that gives more precise entries and high reward",
    author: "SHERZOD TUKTAKHUJAEV",
    authorPhoto:
      "/st/media/user_photo/de/dea/deabfb67938c3cfdd3f501dd533518e6_f9a46fde03ab45daad70348e4dae801e.jpg",
  },
  {
    name: "RIYADA TRADING",
    account: 110153678,
    description:
      "- خبره في التداول منذ 2018 .\n- هاوي للمضاربه و الصفقات السريعه \n- نعشق المخاطره المدروسة",
    author: "Saeed  Alalwi",
    authorPhoto:
      "/st/media/pim/media/user_photo/4d/4d1/4d108fcb1ff8558c3b4b77c82f5a6e6a_03ba1238f5d64b54847e03c4131245d5.jpeg",
  },
  {
    name: "Proso Pyare",
    account: 110153724,
    description: "Experience trading",
    author: "One point Strategy",
    authorPhoto:
      "/st/media/pim/media/user_photo/9f/9f2/9f28a041bf9d485f27bdaa61a1346cb3_6f247dc6313044b49e6161fc11e4db49.jpg",
  },
  {
    name: "Pacman-Guarantee MC",
    account: 110153738,
    description:
      "www.MasterCopytrading.com\n-100% Guarantee MC\n-Balance Master $2500\n-Profit 5% - 30% every month\n-Reset balance every month\n-Pair GBPUSD,USDCHF,USDCAD",
    author: "UMI LESTARI",
    authorPhoto:
      "/st/media/pim/media/user_photo/92/920/920fb0e388105c04c8e1bd16983ec5a7_493c51369456486d990bda427615bc85.png",
  },
  {
    name: "Eurokiwi-Guarante MC",
    account: 110153796,
    description:
      "www.MasterCopytrading.com\n- 100% Guarantee MC\n- Balance Master $2500\n- Profit 5% - 30% every month\n- Reset balance every month\n- Pair EURUSD, NZDUSD",
    author: "UMI LESTARI",
    authorPhoto:
      "/st/media/pim/media/user_photo/92/920/920fb0e388105c04c8e1bd16983ec5a7_493c51369456486d990bda427615bc85.png",
  },
  {
    name: "EA-i Robot Guarantee",
    account: 110153800,
    description:
      "www.MasterCopytrading.com\n- 100% Guarantee MC\n- Balance Master $2500\n- Profit 5% - 30% every month\n- Reset balance every month\n- Pair GBPAUD, EURAUD",
    author: "UMI LESTARI",
    authorPhoto:
      "/st/media/pim/media/user_photo/92/920/920fb0e388105c04c8e1bd16983ec5a7_493c51369456486d990bda427615bc85.png",
  },
  {
    name: "Gold trade",
    account: 110153811,
    description: "Gold trade",
    author: "Mohamed Ahmed",
    authorPhoto:
      "/st/media/pim/media/user_photo/26/26b/26b180894439ad6d7b3f81ab9faafd4c_7ac9174fcda2409eb5f52adad677f660.jpg",
  },
  {
    name: "Trading With Ariful",
    account: 110153944,
    description:
      "Let's move forward with me.\n\nContact Details:\n\nTelegram: https://t.me/forextradingwithariful\n\nYoutube: https://www.youtube.com/forextradingwithariful",
    author: "Ariful Islam",
    authorPhoto:
      "/st/media/user_photo/6c/6c9/6c98656def7eb74decddf2debac47e76_02f5e2473b2d44f2ae0200bec5e6d1e8.png",
  },
  {
    name: "GOLD GOLD GOLD",
    account: 110154011,
    description: "CHIẾN LƯỢC GOLD",
    author: "Đức Linh Vũ",
    authorPhoto:
      "/st/media/pim/media/user_photo/35/35b/35b31ddf0ce5f4e5fdf7c0dc18157e7d_e2e04e5380f34cd7895497e8bff7edb4.jpg",
  },
  {
    name: "ELTradeYou",
    account: 110154017,
    description:
      "Hedging is the best way to Protect the investment to Grow your money and Asset",
    author: "hekinus daeli",
    authorPhoto:
      "/st/media/user_photo/87/872/87224313dc339643dbf62c74c6caca73_10e877321a144b4889f342ffc5fc7223.png",
  },
  {
    name: "Robo1CashHunterswing",
    account: 110154020,
    description:
      "Safe first\nTarget: x3 in 2024 ( frome 1/6/2024 - 30/12/2024)\nBe strong !",
    author: "Nguyễn Mạnh Cường",
    authorPhoto:
      "/st/media/pim/media/user_photo/bf/bf3/bf340ed1e788dfbd3558f90fa1ff9451_99b994008e3c4f5abe0b243442776a39.jpeg",
  },
  {
    name: "RÙA VÀNG 99",
    account: 110154250,
    description: "GG",
    author: "MINH TAM NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/be/bef/bef7dcd9938c7047bd568adc9dc45922_a24f1716a0754ec0b2ed35a422c4cc86.jpg",
  },
  {
    name: "Happy Trading",
    account: 110154251,
    description: "Happy Trading",
    author: "MUHAMMAD FIKRI",
    authorPhoto:
      "/st/media/pim/media/user_photo/9d/9d7/9d7d2b905dd285fd356a87e5fc238669_cd75a08bd77f454c9208b177708cbd13.png",
  },
  {
    name: "BTC_USD auto-trading",
    account: 110154508,
    description: "Join in our Bitcoin trading and earn regular profits 24*7.",
    author: "Sandeep Kumar Sharma",
    authorPhoto:
      "/st/media/pim/media/user_photo/bd/bd0/bd062546624c00261ba629caa439b622_7588ea8a3ad048c39b7f587006cbde63.jpg",
  },
  {
    name: "SAFETY TRADER",
    account: 110154578,
    description:
      "SAFETY TRADER-Prioritize Capital Safety-\nTrade with Carefully-\nMoney Management-\nFEARLESS & DON'T BE GREEDY, BE PATIENT & TAKE PROFIT TOGETHER $$$",
    author: "JAMES HENDRA",
    authorPhoto:
      "/st/media/pim/media/user_photo/35/352/3521eadfbf43f583e72ef2be01f831c3_bff92deb3f48498595b3b09302543a07.jpeg",
  },
  {
    name: "COCA TRADER VN",
    account: 110154593,
    description: "Pro trader vn",
    author: "Long Ngo",
    authorPhoto:
      "/st/media/user_photo/e6/e60/e60ceacf0ac97b0514b0b6b1105af9bd_aad087e972bb479fa48fa4bf712b96f2.jpg",
  },
  {
    name: "HoangKim Invest II",
    account: 110154638,
    description:
      "♻️Profit x2 so với chiến lược 1\n♻️Chiến lược 1: https://social-trading.club/strategy/110061759\n♻️Hỗ trợ: \nZalo: 0979228799\nTelegram: @Hoangkim663",
    author: "HUONG NGUYEN THI",
    authorPhoto:
      "/st/media/pim/media/user_photo/8e/8ec/8ec9c4a2b446ffd24dfc45cddcc1e403_d167b7a25c6b4a53808f1e478daa94fa.jpeg",
  },
  {
    name: "Ngọn Hải Đăng 2024",
    account: 110154649,
    description: "Trend is your friend",
    author: "Cong Van Trinh",
    authorPhoto:
      "/st/media/pim/media/user_photo/02/026/0261f5c3c1372bad2cd023ecd9f56ee0_1c5dee0b5ef6400d90f720701143819a.jpeg",
  },
  {
    name: "CuanForex 6pairs",
    account: 110154776,
    description: "Trading 6 USD pairs with RSI Reversal based open position.",
    author: "Christopher Tanpuyani",
    authorPhoto:
      "/st/media/pim/media/user_photo/32/328/32875142fa47f73aa65fbdd506294753_c7b4ebba08854929a4aee806993b7cbd.png",
  },
  {
    name: "Ramoo_4_FX",
    account: 110154835,
    description: "Better late than never, try, always try, the next is better.",
    author: "Ramzi Abderrezzak",
    authorPhoto:
      "/st/media/pim/media/user_photo/dc/dca/dcab2d3e81e9f3b390b5b62cc0d76972_41f93afd6b64474091acfcfcc5a15f83.jpg",
  },
  {
    name: "Gold Digger",
    account: 110154872,
    description:
      "Only trade for XAU/USD , Stop loss set for prevention but Cut loss will be applied when I think it is necessary",
    author: "NURMANSYAH AZHARY",
    authorPhoto:
      "/st/media/pim/media/user_photo/ca/caf/caf1f54798e7dd67e6aaba2bd844c848_bcaefcf6f22d41a2b227a0d85a43bed3.jpg",
  },
  {
    name: "Smart Trade",
    account: 110154888,
    description:
      "A slow and steady strategy that aims to preserve capital first and achieve steady and growing profits",
    author: "Mostafa Mansour",
    authorPhoto:
      "/st/media/pim/media/user_photo/fb/fbe/fbe9eac6451ea0b8698a131f59e7549d_0b968fa5212f403cb8ea337c58a5a28f.png",
  },
  {
    name: "BLi Trader",
    account: 110154899,
    description:
      "- No indicator\n- No scam\n- Only Candlestick\n=> simple method to get profit",
    author: "Linh Nguyen Van Bao",
    authorPhoto:
      "/st/media/pim/media/user_photo/38/388/3886d92e7b5ccae719163791ae87c7e1_39268a43dd7a4d43a64853eac35b66bb.png",
  },
  {
    name: "Money Road",
    account: 110154901,
    description: "minimum 2000$",
    author: "RI NGON NINH",
    authorPhoto:
      "/st/media/pim/media/user_photo/a5/a5a/a5a0374f728cf68215738215a2990dd0_2f773054853b45829489ad94c7d53db7.jpg",
  },
  {
    name: "Nonna Farm Legend",
    account: 110154923,
    description:
      "eat, sleep, live\nLine open chat - https://line.me/R/ti/g/qFOFpKCaIg",
    author: "อธิวัฒน์ วงค์ษา",
    authorPhoto:
      "/st/media/user_photo/e6/e63/e6347eba72e664f737847940f5527a54_8eaae3ee0f6c4d539c0e670ef546ad10.jpg",
  },
  {
    name: "FOREX ZONE",
    account: 110154961,
    description:
      "We manage your account day and night so that you get your profit back which you have given me for investing. This approach is called a hands-off appro",
    author: "Lal Kumar",
    authorPhoto:
      "/st/media/pim/media/user_photo/9f/9f7/9f70353942fc25d97efff6f1a5f5ea1e_9c85e8710da5482baaf52b07a91f00a8.jpeg",
  },
  {
    name: "Đam mê Forex Group",
    account: 110154975,
    description:
      "Nhóm mình ở Sài Gòn chuyên giao dịch các cặp tiền sinh lãi đều mỗi tuần, mỗi  tháng ưu tiên an toàn là trên hết ,lợi nhuận sẽ đến bền vững và lâu dài",
    author: "Dai nghia Huynh",
    authorPhoto:
      "/st/media/pim/media/user_photo/c5/c51/c51d95e1b48005c9839c57d5081419ab_2b336a1f353643aaaa8dd67b8bd22505.jpg",
  },
  {
    name: "FX Trade Navigator",
    account: 110154979,
    description:
      '"Sail the forex seas with confidence! FX Trade Navigator guides investors to profitable shores with precision and expertise. Navigate to success today',
    author: "MUHAMMAD QASIM",
    authorPhoto:
      "/st/media/pim/media/user_photo/c8/c8e/c8ed58bde23f85eb3736300a91e67b9e_d38c14c0b5a443e28c0ac701ec686497.png",
  },
  {
    name: "Okabawes2024",
    account: 110155027,
    description: "Otot kuat balung wesi",
    author: "GILBERTUS ARYOPUTRO",
    authorPhoto:
      "/st/media/user_photo/e1/e11/e11d0a337251eb40a475808eab133b42_3a3fe3e16edc47168d662da482ff007e.jpg",
  },
  {
    name: "Evil robot",
    account: 110155037,
    description: "Expert advisor with stop lose\nGood gain and low risk",
    author: "Motasem Marar",
    authorPhoto:
      "/st/media/pim/media/user_photo/e8/e88/e881bf475974cb61664c350db7669b44_c7b35b664d3c4f428a2744de19f86e75.jpg",
  },
  {
    name: "ChronoTrigger",
    account: 110155051,
    description: "gridtime",
    author: "SIAM THONGNAK",
    authorPhoto:
      "/st/media/pim/media/user_photo/63/63c/63ce700ec8c91dfc52c302dfc7b98464_31ee83a4d2d643fea4f3de970ac7d505.png",
  },
  {
    name: "Scalper Xtreme",
    account: 110155082,
    description:
      "Maximize your investment potential with copy trading 🚀✨\n\nReplicate the strategies of master investors to optimize your portfolio's performance 📈🔥",
    author: "CHOUDHARI",
    authorPhoto:
      "/st/media/pim/media/user_photo/0e/0e8/0e8918a353a2790e97039c424190c233_fe9bf34510054c74bc4541b004822ff2.jpg",
  },
  {
    name: "HVMemoryTD",
    account: 110155090,
    description:
      "Tiền không là gì nhưng ai cũng cần tiền, tiền không dễ kiếm nhưng cũng không khó. Chỉ khi có tiền mới có thể làm phiền người khác!",
    author: "NGOC DOAN NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/59/595/595373c3bc337642c26b678b0b8be922_e53e0ebcd3484e32935a6f2223859ff7.jpg",
  },
  {
    name: "HS Strategy",
    account: 110155103,
    description:
      "The trend is your friend! This strategy is a trend following strategy, mainly on the 4hr time frame. It proceeds market structure and price action.",
    author: "MARIAH GONZAGA NAKAJUBI",
    authorPhoto:
      "/st/media/pim/media/user_photo/b8/b8b/b8be069516362bc055cba613f68994cc_1817464e94474a42a6c8d38e1d5ae429.jpg",
  },
  {
    name: "Flow",
    account: 110155167,
    description:
      "CAUTION!\nأقرأ قبل أن تدخل \nالخسارة غير قابل للإسترجاع\nدخولك معنا بالتداول الآلي هو إقرارك بالمعلومات أعلاه\n@flowfxteam",
    author: "Fahad Mohammad",
    authorPhoto:
      "/st/media/pim/media/user_photo/87/874/87486ba19a2f23a58e648ef31f88af96_a49a0412834c4651bfdf3e01526e688d.png",
  },
  {
    name: "AhmedAmer Gold EA",
    account: 110155190,
    description:
      "اكسبيرت خاص بالدهب مع إدارة راس المال بأسلوب احترافي جدا\nويتم سحب الأرباح اليومية حتي نستطيع وصول لاعلي ربح شهرى إن شاء الله",
    author: "احمد عامر",
    authorPhoto:
      "/st/media/user_photo/f4/f4e/f4e0a772cb585d0028b1a12052c96763_924fc819deb84538a9f029b3afc707af.jpg",
  },
  {
    name: "Lucky Gold",
    account: 110155200,
    description:
      "Profit target 2-5% per day. Give it a try!\nTelegram: https://t.me/phaocuusinh6868",
    author: "TUAN HUNG BUI",
    authorPhoto:
      "/st/media/pim/media/user_photo/4a/4ad/4ad7561e7a0b11bd4771ea72205ff932_1910cd5e827b477f92b1419ee2791f4c.png",
  },
  {
    name: "Trading Tetris",
    account: 110155219,
    description:
      "Operaciones SCALPING DAYTRADING,SWING, operar bajo lotaje,  SIN STOP",
    author: "mariel astrid bustos rivera",
    authorPhoto:
      "/st/media/pim/media/user_photo/d6/d6f/d6fa079804fb72cde33d2f97f0c3d0f0_60f45bebb6b64ef692c845bf66ce3186.jpeg",
  },
  {
    name: "Đi chậm sống lâu",
    account: 110155227,
    description:
      "Đi chậm cũng tới đích, trước sống được lâu tiền sẽ từ từ vào ví",
    author: "Truong Hong",
    authorPhoto: null,
  },
  {
    name: "Gmnasiathailand",
    account: 110155280,
    description: "R:R\n1:1",
    author: "Pansawut Chookhaw",
    authorPhoto:
      "/st/media/pim/media/user_photo/94/942/942cf286e4378eb38dc248302b2962f6_53d9d742b1f6493596d1c66d6ac64309.jpeg",
  },
  {
    name: "Zen_Trading",
    account: 110155287,
    description: "Little profit_Great value\n(Lợi nhuận nhỏ_Giá trị to)",
    author: "Dương Trần",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c25/c250768a8ded5d9efd90bb3d11b44ebd_4925fd591e44486aa6f1c0cee0f2f2ac.jpg",
  },
  {
    name: "FLB - 05 SC",
    account: 110155338,
    description: "Counter Trend\n\nMinimum Deposit = 1,200 USD",
    author: "NARATHIP PIROMSUK",
    authorPhoto:
      "/st/media/pim/media/user_photo/ab/ab1/ab14b8d14716881481b5019ff2d42b03_6fa22b5efae64051a5b0d250eb622e7f.png",
  },
  {
    name: "Forex Fox Day",
    account: 110155342,
    description: "Good Profit Every Day",
    author: "Prathamesh Juikar",
    authorPhoto:
      "/st/media/pim/media/user_photo/d1/d11/d11e40d33a5fc9238b2d059f72741a0a_4373392ff9bb47299654424a062faded.jpg",
  },
  {
    name: "FOREX LOVERS",
    account: 110155345,
    description:
      "We trade manually professionally 🤑\nNo EA ⛔️\n20-30% monthly profit 💸",
    author: "Nada Abdelmohsen",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/507/507bd75eaf7b15169232059d9d266361_30c15fe9c4264679ace2b69d1fee1a83.png",
  },
  {
    name: "FLB - 03 SC",
    account: 110155351,
    description: "Counter Trend\n\nMinimum Deposit = 1,000 USD",
    author: "NARATHIP PIROMSUK",
    authorPhoto:
      "/st/media/pim/media/user_photo/ab/ab1/ab14b8d14716881481b5019ff2d42b03_6fa22b5efae64051a5b0d250eb622e7f.png",
  },
  {
    name: "Thu nhập thụ động",
    account: 110155354,
    description: "Giao dịch an toàn , lợi nhuận ổn định.",
    author: "QỤÁCH TRÚC",
    authorPhoto:
      "/st/media/pim/media/user_photo/37/376/376bd9f6d8f92fab985316c3b74329e2_1a768a857594417cb47552312f0d73e3.jpeg",
  },
  {
    name: "Swing trading- Scalp",
    account: 110155413,
    description:
      "This is for long term Profit.\nJoin and enjoy profit without fear of losing.",
    author: "muhammad ammad jamshaid",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5a7/5a77ce45c314d76a3de92b7e4ab24adc_94342e885ff84f74b05a6d721d8c4960.jpg",
  },
  {
    name: "CME-BIGBOY Ver2",
    account: 110155488,
    description: "Giao dịch theo chỉ số CME - Option",
    author: "Huy Nguyen Duc",
    authorPhoto:
      "/st/media/pim/media/user_photo/e8/e8e/e8e10a0e9ed13683b9f5b146167f0967_34b2501c43974689aa3be71b495cfa86.png",
  },
  {
    name: "DHOHO ONE SHOOT  EA",
    account: 110155509,
    description: "EURUSD ONE SHOOT ONLY",
    author: "Witurseno Witurseno",
    authorPhoto:
      "/st/media/pim/media/user_photo/b7/b72/b7240b824346bade031e71c81dc0587d_9c2349c7b21447c8b22d4d29f3a8965a.jpg",
  },
  {
    name: "EURUSD GBPUSD",
    account: 110155570,
    description: "Stability comes first.",
    author: "程 李",
    authorPhoto:
      "/st/media/pim/media/user_photo/8b/8bc/8bcb44305fc74f4bf9b59cecfb0b8584_4e9d6df5eeda4121a9b7e5efa6cd67e3.png",
  },
  {
    name: "QGoldtrader",
    account: 110155695,
    description: "Đặt an toàn trên mỗi lệnh giao địch",
    author: "TÚ ANH TRẦN",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c62/c626d44e9d7a05678e3508fc0963f796_34ea6bf5462c4071a8f149ed2695d9dd.jpg",
  },
  {
    name: "GuruKripa_ForexTrade",
    account: 110155696,
    description:
      "We are not a financial adviser. Always do your own research before investing & count your risk.",
    author: "SAMDISH",
    authorPhoto:
      "/st/media/pim/media/user_photo/47/475/4753a01519d1ea0c881b99edff80d5dc_263d84c4173a4dd3b11b4fb1cc7f835b.png",
  },
  {
    name: "Long Journey",
    account: 110155858,
    description:
      "https://t.me/EAForexExnessSocial\nFree of charge for the first 2 months.",
    author: "VAN BON CAO",
    authorPhoto:
      "/st/media/pim/media/user_photo/b7/b7e/b7eb29d5cbb02889ffc261f5d4a13eef_3a081a1ad9044ba9aab7e5008d75de55.jpeg",
  },
  {
    name: "Wk 308 exness",
    account: 110155892,
    description: "Rủi ro cao\nSử dụng lưới\nLợi nhuận ổn định",
    author: "Công Chính Phạm",
    authorPhoto:
      "/st/media/pim/media/user_photo/08/08d/08d935cf10d38e4b02a3e6cf764293f6_083ef79a8c7e4755a04caf721c1d204f.jpg",
  },
  {
    name: "HHH-数字游戏-HHH",
    account: 110155899,
    description: "不念过往，不畏将来，活在当下！！！",
    author: "林玉 徐",
    authorPhoto:
      "/st/media/pim/media/user_photo/a0/a04/a04908b352ccc78235cd666498a97187_2b8055a7b165433fa8f9e22523988ddc.jpeg",
  },
  {
    name: "Victorious",
    account: 110155920,
    description:
      "Unlock Profitability with 7%+ Returns. Seamlessly adapt using advanced analysis, risk management, and disciplined decisions.",
    author: "Azhar Tawash",
    authorPhoto:
      "/st/media/pim/media/user_photo/11/115/11531ae69f959882ace49065bd113f75_b1683799108149b7b1c3d0172fa62c98.jpg",
  },
  {
    name: "Ngepet Digital EA",
    account: 110155955,
    description:
      "Fun-Tastic Trader Team.\nWe make trading so easy, fun and profitable.",
    author: "ANTON SAPUTRA",
    authorPhoto:
      "/st/media/pim/media/user_photo/b2/b2d/b2d3fc00cef50a6536513c15b3200dcc_6b281a7408a0429ab4fc0885d073d949.jpg",
  },
  {
    name: "ᴹᴿP EP E R F E C T",
    account: 110156020,
    description: "Follow for safe",
    author: "ABDUR REHMAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a6/a6f/a6f829517064740ffe49fe8f29a8f02d_114e9fabeb13474a83a902c62a57a1be.jpg",
  },
  {
    name: "XAUUSD Trader",
    account: 110156073,
    description:
      "I have experiences in Gold Trading more than 10 years.I can trade only Gold.",
    author: "MR RACHATA ANANSIRIKUL",
    authorPhoto:
      "/st/media/pim/media/user_photo/f1/f1d/f1de65deb3b92abf1dca88b382dfc152_0e48bc81861842d58bab01cb8107c81b.jpg",
  },
  {
    name: "Fishing 5_0",
    account: 110156146,
    description:
      "Explore with me this unique forex trading strategy, where we can conquer the market and achieve financial goals together!\nProfit from 20-50% monthly",
    author: "Thành An Nguyễn",
    authorPhoto:
      "/st/media/user_photo/ff/ff9/ff96c4da5c2e5b64223f63c849bb5230_57a1c70526944b85956dc5918a2bcaeb.jpg",
  },
  {
    name: "KIÊN TRÌ TRIỆU ĐÔ",
    account: 110156157,
    description:
      "🌟 Mỗi người chỉ sống 1 lần, thất bại là khi bạn chết mà chưa mãn nguyện điều gì đó\n💯 Bạn có thể sống và làm việc ở mọi nơi trên thế giới với trading",
    author: "CONG TRINH TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/ad/ad2/ad28d95c26258b8a58d65ac8adb6bb51_1122a240f22c451784269b7c1b5e202c.jpg",
  },
  {
    name: "HIGH RISK",
    account: 110156159,
    description:
      "- مخاطرة عالية \n\n- لا أنصح الاستثمار بمبالغ لا تتحمل خسارتها \n\n- الاستراتيجية لأصحاب قلوب القوية 🛑\n\n- قد تصل الخسائر إلى 100% من رأس المال",
    author: "SHUAIB AL-BALUSHI",
    authorPhoto:
      "/st/media/pim/media/user_photo/9a/9a4/9a458aa90698f9fd39ae7a70be8bdfdb_6884ee56478e471cb3713125ee7a7394.png",
  },
  {
    name: "FOREX TRADING",
    account: 110156163,
    description: "-Mục tiêu 10-30%/tháng.",
    author: "VAN NAM NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/b8/b84/b84957adf159514042941426e70480f7_d3d65892beb54a9e914e887ad017bba2.jpg",
  },
  {
    name: "Blulifeindia",
    account: 110156171,
    description: "Professional Money Concept & Liquidity Concept",
    author: "PREM SINGH",
    authorPhoto:
      "/st/media/pim/media/user_photo/8b/8b3/8b3782caf9cbd801397e219be8225cbe_be67ab3a145d433da03a03830b7bea19.png",
  },
  {
    name: "ChienThan 9999",
    account: 110156176,
    description: "0.5%-2% per trade\nRR 1: 3\nNo DCA",
    author: "QUANG CHIEN PHAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/b3/b39/b39ced41a73976847cb344709e9a6bf4_df1e987f93634726927da2c9febd66c7.jpg",
  },
  {
    name: "Hui   Ying",
    account: 110156197,
    description:
      "黄金交易,波段为主，日内为辅。跟随K线信号开仓，低频率低风险,月收益10%左右,纯手动交易，仓位不固定，投资有风险，入市需谨慎。",
    author: "庆利 徐",
    authorPhoto:
      "/st/media/pim/media/user_photo/2d/2d6/2d66793ba7d11c05ee3ced1077dd9722_29c247930af2433997c6959998a0f87f.jpg",
  },
  {
    name: "Tôi Hơi Bị Nét",
    account: 110156206,
    description:
      "Chiến lược được vận hành bởi chuyển gia phân tích kỹ thuật Trần Anh -  CMT - Level 2, hy vọng giúp tải khoản của NĐT tăng đều đặn theo thời gian.",
    author: "VAN ANH TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cb4/cb41ecc95fa6e941f677ca29a20c752c_b675220cfa604a98871e6c8e2a8bffd8.png",
  },
  {
    name: "Mangalam Group",
    account: 110156208,
    description:
      "Leading financial services firm offering tailored solutions for wealth management, investment and financial planning.",
    author: "SUMAN MAITY",
    authorPhoto:
      "/st/media/pim/media/user_photo/70/70d/70d884eede7bbe236f654ee1921d5fd0_c87bb19f6a834bebac8925688083006d.jpeg",
  },
  {
    name: "Forex swing",
    account: 110156222,
    description: "Always set stoploss",
    author: "Tùng Lưu Văn",
    authorPhoto:
      "/st/media/user_photo/20/208/20854fbb85e27fcbdd025c617e970673_4b7b16cfb6f944308b0c2558f2ffcf5c.jpg",
  },
  {
    name: "Fun-Tastic Four EA",
    account: 110156254,
    description:
      "Fun-Tastic Trader Team.\nWe make trading so easy, fun and profitable.\n\n................................................................................",
    author: "ANTON SAPUTRA",
    authorPhoto:
      "/st/media/pim/media/user_photo/b2/b2d/b2d3fc00cef50a6536513c15b3200dcc_54aca1cc393a4d439f9bdfdfe48d224b.jpg",
  },
  {
    name: "Kakimori Wang",
    account: 110156261,
    description: "不追求单单命中，但求每次出手都建立在逻辑正确的前提下。",
    author: "雅珍 彭",
    authorPhoto:
      "/st/media/pim/media/user_photo/10/108/108a040ea9f9fa86442988395cb6ddf2_5e45da2e523444ac8ce3599e93245607.jpg",
  },
  {
    name: "Pokemon EA XAU V1",
    account: 110156280,
    description:
      "Fun-Tastic Trader Team.\nWe make trading so easy, fun and profitable.\n\n................................................................................",
    author: "ANTON SAPUTRA",
    authorPhoto:
      "/st/media/pim/media/user_photo/b2/b2d/b2d3fc00cef50a6536513c15b3200dcc_5eefbd6065be4f8abb9b6a920f2fd13e.jpg",
  },
  {
    name: "Pokemon EA XAU V2",
    account: 110156281,
    description:
      "Fun-Tastic Trader Team.\nWe make trading so easy, fun and profitable.\n\n................................................................................",
    author: "ANTON SAPUTRA",
    authorPhoto:
      "/st/media/pim/media/user_photo/b2/b2d/b2d3fc00cef50a6536513c15b3200dcc_5eefbd6065be4f8abb9b6a920f2fd13e.jpg",
  },
  {
    name: "Systematic Rewards",
    account: 110156313,
    description:
      "If you are unable to control your impulse while trading then this strategy is is for you. \nJust follow the strategy and do nothing else.",
    author: "Wajiha Batool",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/45e/45ed4489b6d5db0372bc2dc07117f74f_0e52236b9bba4170aa6d64546ac14553.jpg",
  },
  {
    name: "Gold Super Fast 3",
    account: 110156345,
    description: "x",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "Gold Super Fast HG",
    account: 110156346,
    description: "x",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "Gold The Best 1 EA",
    account: 110156348,
    description: "x",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "Gold Ultimate EA1",
    account: 110156367,
    description: "x",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "Gold Ultimate EA2",
    account: 110156370,
    description: "x",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "Gold Ultimate EA3",
    account: 110156372,
    description: "x",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "New strategy",
    account: 110156433,
    description: "顺势徐为",
    author: "丁 浩明",
    authorPhoto:
      "/st/media/pim/media/user_photo/36/366/36696b1f72b6cc6093dc4b9e9d61c6aa_841aa430a8b1417cb9f6e51340968a23.png",
  },
  {
    name: "GOLD TRADER",
    account: 110156435,
    description: "GOLD",
    author: "招龙 李",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f5f/f5fdfb09eb10c3f796e3ae4834a7a387_67502f0e4e174b70a7ae60fc7664fe19.png",
  },
  {
    name: "EA Trading Farm",
    account: 110156447,
    description:
      "-EA auto trade\n-Daily monitor\n-See result   \nhttps://www.myfxbook.com/portfolio/ea-farm/10908482",
    author: "PICHET INTO",
    authorPhoto:
      "/st/media/pim/media/user_photo/7e/7e6/7e6f96fc235aa9512ef21f49e1fa935b_79650829f76140558234a146d93a4522.JPG",
  },
  {
    name: "OneTrade999 -DD 9per",
    account: 110156518,
    description:
      "- Stoploss: ~2%/trade\n- Mục tiêu: tuân thủ nguyên tắc bảo toàn vốn, kỷ luật\n- Com: 15% ->40%\n- No Martingale, DCA\n- Telegram: OneTrade999",
    author: "Van Giang Pham",
    authorPhoto:
      "/st/media/pim/media/user_photo/72/727/72794569a9fa03f66fd5f0acb7f7545c_0fc2a3f9f0224e5d818df5f222efa897.jpg",
  },
  {
    name: "Rising EA Pro",
    account: 110156521,
    description: "Change your life now or never",
    author: "CINDY",
    authorPhoto:
      "/st/media/pim/media/user_photo/0d/0d9/0d939cbf964de0d30457abae2811d9db_6cdbb6ff74294ea1814af11a13ef8e34.jpeg",
  },
  {
    name: "World is with gold",
    account: 110156558,
    description:
      "Trust with gold,🍀\nI will try to increase wealth by one percent every day.🙏🏻",
    author: "GANAPATHI NAIR",
    authorPhoto:
      "/st/media/pim/media/user_photo/19/191/191a92982815d6258b7be39d4fa84d6c_ea1256cfacdb483f82006a80ff63ef5d.jpg",
  },
  {
    name: "Mbah djo Gold",
    account: 110156589,
    description: "Gold Only",
    author: "Joko Nugroho",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5a5/5a5c85e7a6b2fa918cb9e70045d3b965_c622910e653142ed9bfd924095f5fa1c.jpg",
  },
  {
    name: "Air Force One",
    account: 110156705,
    description:
      "Chào các nhà đầu tư đến với Air Force One, chiến lược của chúng tôi là chiến lược dài hạn nhằm tìm kiếm lợi nhuận đều đặn và ổn định. Good Luck",
    author: "HUNG VY NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a0/a0e/a0e59506b3c9b75cca3a70db57658883_6b4b923ec192447bb77df38af0ccc67f.jpg",
  },
  {
    name: "VIP FX TRADER",
    account: 110156715,
    description:
      "6 years forex trading experience \nExpected Monthly Returns 10 to 30%\nProper Money Management & Safe Trading strategies",
    author: "JADHAV VISHNU",
    authorPhoto:
      "/st/media/pim/media/user_photo/5c/5cf/5cf199114b1a14c886750fd2e97640ac_92150aaf19d54d51b378bbc845e4134a.jpg",
  },
  {
    name: "Safety Trade",
    account: 110156732,
    description:
      "My target profit is less but Rix Free Bank gives 10% to 15% yearly and my account gives yearly 120% minimum insha'Allah 🤲🤲❤️❤️",
    author: "MD SAJID HOSSAIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/fe/fe1/fe1da442a878c379330b3c55971309eb_b9cc23ba1ecd4b07af17a415786f125e.jpg",
  },
  {
    name: "QuantumFX - 12K",
    account: 110156854,
    description:
      "2K - 12K Challenge. Growing a 1K account @ 20-25% monthly\n31/12/24 = 12K\nTrading - XAU/USD, EUR/USD, GBP/USD\nTrading Style = EA + Manual",
    author: "SHAMITHA WIDANAPATHIRANA",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/601/6013b2c113498e844af6be0e0dd691d2_96877ff252004d39872e5f53c35351ca.png",
  },
  {
    name: "Forex By Saqib 786A",
    account: 110156857,
    description:
      "we believe in slow and steady win the race.\nand consistent profit. +971558774018\nwww.forexbysaqib.com",
    author: "Muhammad saqib  Rao",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/451/4513d64b20ecfc65802e78d40c96e149_8baeae2c843544ee9457146f3dabd24c.jpg",
  },
  {
    name: "INVEST and RELAX",
    account: 110156908,
    description: "مرحبا بكم في عالم الاستثمار",
    author: "Ahmed Alghafri",
    authorPhoto:
      "/st/media/pim/media/user_photo/1e/1ef/1efdfc90cc133c98b58d446cd61487ee_4431dda72b054db1a96c4d9547394281.jpeg",
  },
  {
    name: "UAV Systems",
    account: 110157062,
    description:
      "Chào các nhà đầu tư đến với UAV Systems, chiến lược của chúng tôi là chiến lược dài hạn nhằm tìm kiếm lợi nhuận đều đặn và ổn định. Good Luck",
    author: "HUNG VY NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a0/a0e/a0e59506b3c9b75cca3a70db57658883_6b4b923ec192447bb77df38af0ccc67f.jpg",
  },
  {
    name: "Project bot",
    account: 110157099,
    description: "a",
    author: "กุลธร ภิญญรัตน์",
    authorPhoto:
      "/st/media/pim/media/user_photo/d7/d77/d77ba7b8ce2f72debb36d1b1def75bbc_509fe6623ad346e5b8c85cc8ee1c4f76.jpeg",
  },
  {
    name: "Scalpavishka",
    account: 110157124,
    description:
      "Best scalping . Max drawdown 5 to 10% . Big earning opportunity.",
    author: "NAVEEN  SAINI",
    authorPhoto:
      "/st/media/pim/media/user_photo/b4/b4f/b4f6e98091127b5fd2706a85d41ef679_c90f2b4bf6f04e7586cb1281360abcc3.jpg",
  },
  {
    name: "Neb Signal",
    account: 110157156,
    description:
      "Specializing in automated grid trading for EURUSD/XAUUSD. 24/7 strategy maximizes returns with expert signal adjustments for profit boosts.",
    author: "Loi Ly",
    authorPhoto:
      "/st/media/pim/media/user_photo/96/966/9662ca05fedeb371c5a4f1eeec1728c5_5c3569ef36a249bd844168a79dfc3bd0.jpeg",
  },
  {
    name: "Mobile banking",
    account: 110157341,
    description: "…….",
    author: "TRƯƠNG ĐẠT",
    authorPhoto:
      "/st/media/pim/media/user_photo/74/74f/74f83094a2f8ba67abe23895d98ffaa5_f8ab24e63a1346538a4a89fbef31fe70.jpeg",
  },
  {
    name: "MR_GOLD_HUNTER",
    account: 110157377,
    description: "▪︎SnD_SMC Trader📈🎓\n\n▪︎Price Action 2.0📚🎓",
    author: "JAGDISH  PRASAD",
    authorPhoto:
      "/st/media/pim/media/user_photo/bc/bc3/bc3ae273c99fa852fb8830f0a20317a4_aa069232b61e46fd922867f157c76ff9.png",
  },
  {
    name: "Manage risk",
    account: 110157391,
    description: "Short - middle term trading based on risk management",
    author: "悠 田中",
    authorPhoto: null,
  },
  {
    name: "stable strategy",
    account: 110157403,
    description: "we have our AI Expert with stable and safe strategy",
    author: "Amr gamal",
    authorPhoto:
      "/st/media/user_photo/54/547/54775b7b5ea8e82d3c1b86cb5ac47337_ebc1b588dd1846b896b9ceb7750f6b15.jpg",
  },
  {
    name: "MK XAU EXNESS",
    account: 110157411,
    description: "Instrument XAU in 5 minutes timeframe trading bot",
    author: "MARKUS KARJADI",
    authorPhoto:
      "/st/media/pim/media/user_photo/76/762/762bdb70ed4235f14d4958b383139558_09de1629e74c494a85f27f3c958a32bf.jpeg",
  },
  {
    name: "ATURO - VN - EU",
    account: 110157415,
    description:
      "🔹Aturo Copy Trading🔹\nĐầu Tư Thông Minh - An Toàn - Bền Vững - Thịnh Vượng\nXem thông tin chi tiết & Link nhóm  ở phần mô tả phía dưới\nSĐT: 0978263688",
    author: "Huan Vu Van",
    authorPhoto:
      "/st/media/pim/media/user_photo/3b/3b2/3b2a37d0fe7d35bc30a5b40c7cbcb5ff_094122e385524cfc8eca753c3039f83e.jpg",
  },
  {
    name: "FLB - 10 SC",
    account: 110157457,
    description: "Pro Trend\n\nMinimum Deposit = 1,000 USD",
    author: "NARATHIP PIROMSUK",
    authorPhoto:
      "/st/media/pim/media/user_photo/ab/ab1/ab14b8d14716881481b5019ff2d42b03_6fa22b5efae64051a5b0d250eb622e7f.png",
  },
  {
    name: "SmartPips Strategy",
    account: 110157478,
    description:
      "Monthly Profit Target around 10% - 25% I believe Risk,Money Managmenet With Proper Stop Loss and Follow Market Movers Footprints",
    author: "Muhammad Uzair Saleem",
    authorPhoto:
      "/st/media/pim/media/user_photo/6a/6a5/6a57bb1d75b2736ae045c0d5fc11f05d_8785962800234caea750cd5ed82c5d93.jpg",
  },
  {
    name: "AAMER FOREX",
    account: 110157492,
    description: "PROFIT IS NESSECITY OF HUMINITY",
    author: "MOHAMMED HASHMI",
    authorPhoto: null,
  },
  {
    name: "Million of Trade 1M",
    account: 110157499,
    description:
      '"O nosso robô de Forex é alimentado por uma sofisticada rede neural artificial, inspirada no sistema nervoso central dos animais. Assim como o cérebro',
    author: "Raphael  Alves siqueira da silva",
    authorPhoto:
      "/st/media/pim/media/user_photo/d4/d49/d4993f1bb92ee4508aed23d82272683a_f38c434a71f0413ab959ede09980bc5d.png",
  },
  {
    name: "DATS FOREX",
    account: 110157538,
    description: "Đầu tư rủi ro thấp với mức lợi nhuận 10% / tháng",
    author: "NGUYẺN ĐẠT",
    authorPhoto: null,
  },
  {
    name: "Quantitative trading",
    account: 110157560,
    description:
      "My strategy is now delivering stable with low risk. All have been automated by me using EA to trade 24 x 7 and give higher return on your investment.",
    author: "林 张",
    authorPhoto:
      "/st/media/pim/media/user_photo/66/66a/66aeb1bf0f49d22bf3017ac60a3eca7d_1394a500272842bd8dd0baabf0f89eef.jpg",
  },
  {
    name: "Simba FX GUEU",
    account: 110157565,
    description: "Giao dịch các cặp tiền tệ",
    author: "Hai Dang Tran",
    authorPhoto:
      "/st/media/pim/media/user_photo/98/986/98606ee4a35395eac622741c846bb6a0_bb0fc1d7a8b64a47ab7c776d02e943d0.jpeg",
  },
  {
    name: "Lua Lang VN",
    account: 110157569,
    description:
      "Luôn phải có kỳ vọng thực tế. Giao dịch là một kế hoạch làm giàu một cách từ từ.",
    author: "Như Nguyễn Thành",
    authorPhoto:
      "/st/media/pim/media/user_photo/cc/cc7/cc78e35922a8bb838a7f084973de044b_56ea78ba06014d999aa33b05573629e8.jpg",
  },
  {
    name: "Pro gold trading st",
    account: 110157571,
    description:
      "Mục tiêu 1%/ngày \nAn toàn với SL, TP\nCặp giao dịch chính Xauusd, Btcusd, Eurusd, Gbpusd",
    author: "hung chien le",
    authorPhoto:
      "/st/media/pim/media/user_photo/b7/b74/b7448f079afb8b26fa674231a33df2e2_afb2b089ea5c4f09ab31dc19d6bcd546.jpg",
  },
  {
    name: "Inngocmai23",
    account: 110157639,
    description: "Loi nhuan - an toàn - lâu dài",
    author: "NGUYEN MINH NGOC",
    authorPhoto:
      "/st/media/pim/media/user_photo/8b/8b0/8b04499aa87e6e4c2f39e21f0701e552_5f1a855393654ac396f6d999933f185f.jpg",
  },
  {
    name: "Bajarangbali",
    account: 110157688,
    description: "Pranjal Saikia \nXAUUSD",
    author: "PRANJAL SAIKIA",
    authorPhoto:
      "/st/media/pim/media/user_photo/25/253/253b8905e052c7f5f19a1a0719636b72_1f4314e7276c4df394f0108bbec28a98.jpg",
  },
  {
    name: "The scalpers",
    account: 110157705,
    description: "Target 20% monthly",
    author: "Hemant singh",
    authorPhoto:
      "/st/media/pim/media/user_photo/06/060/0600d6e716b2567ca87c065438370228_a2065768ef564014b03f0eb101b2c327.jpeg",
  },
  {
    name: "97黑马",
    account: 110157883,
    description: "黑马短线",
    author: "梦婷 徐",
    authorPhoto:
      "/st/media/pim/media/user_photo/26/267/26700282eb69212326813f4df5b153a6_00f30c7d05054f1c9ed181f0615e5d5d.jpg",
  },
  {
    name: "EXNESS COPY",
    account: 110157887,
    description:
      "Hello Investor, My trading strategy based on fundamentals and technical. I don't trade high risk events and news. Always try to go with flow means res",
    author: "fatima zohra  ES-Sabry",
    authorPhoto: null,
  },
  {
    name: "UAE_FOREX",
    account: 110157888,
    description:
      "Hello Investor, My trading strategy based on fundamentals and technical. I don't trade high risk events and news. Always try to go with flow means res",
    author: "fatima zohra  ES-Sabry",
    authorPhoto: null,
  },
  {
    name: "Rudra Forex",
    account: 110157961,
    description:
      "I hedge. Please keep minimum 1k balance. Withdraw only after it doubles.",
    author: "Shital Raja",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/626/626c12613dd59b3c68b61498a12f4c31_c8832578b8d6466ca9a4da46d1d390de.jpg",
  },
  {
    name: "VIP Strategy",
    account: 110157972,
    description: "Follow market trading",
    author: "Phang Finny Liliana",
    authorPhoto:
      "/st/media/pim/media/user_photo/f2/f22/f226f2868aa125be4e7e92e339842fe5_6766342c924a4a8fbf66d2ac674f9358.png",
  },
  {
    name: "Almosawifx-A1",
    account: 110158272,
    description:
      "الناسخ أ\n\nمخاطرة منخفضة مع أرباح معقولة\nالهدف من الناسخ هو الاستمرارية مع المحافظة على رأس المال\nلا يوجد تعويض في حالة الخسارة\n\nInstagram: Almosawi.fx",
    author: "Fadhel Yusuf",
    authorPhoto:
      "/st/media/pim/media/user_photo/dc/dc7/dc7e2da754d6f619a93e8afa62a1db3f_a37d600087d3450bbb08422d25d763e6.jpeg",
  },
  {
    name: "EURUSD EA 01",
    account: 110158455,
    description: "EA automatic trading with a target monthly yield of 20-50%。",
    author: "晓伟 胡",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/86a/86af3ba2af5597045063859b60ef97c5_0fe53411895b4752be248f2c089bd45f.png",
  },
  {
    name: "NZDUSD EA 01",
    account: 110158465,
    description: "EA automatic trading with a target monthly yield of 20-50%。",
    author: "晓伟 胡",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/86a/86af3ba2af5597045063859b60ef97c5_0fe53411895b4752be248f2c089bd45f.png",
  },
  {
    name: "USDCAD EA 01",
    account: 110158469,
    description: "EA automatic trading with a target monthly yield of 20-50%。",
    author: "晓伟 胡",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/86a/86af3ba2af5597045063859b60ef97c5_0fe53411895b4752be248f2c089bd45f.png",
  },
  {
    name: "GBPUSD EA 01",
    account: 110158474,
    description: "EA automatic trading with a target monthly yield of 20-50%.",
    author: "晓伟 胡",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/86a/86af3ba2af5597045063859b60ef97c5_0fe53411895b4752be248f2c089bd45f.png",
  },
  {
    name: "ICT MASTER",
    account: 110158572,
    description:
      "ICT Master \n1. Risk management \n2. Quality setups \n3. Discipline \n4. Patience \n5. Stop loss\n6. Good hedge fund strategy \n7. 20% to 30% return monthly",
    author: "RAVINDRA PAWAL",
    authorPhoto:
      "/st/media/pim/media/user_photo/1c/1c2/1c245a53a16fbefd95b9c08eebea75ff_c1f0942a7b5f451ebda7642a9a85033c.jpg",
  },
  {
    name: "Scalp Gold - 7",
    account: 110158857,
    description:
      "SCALP XAUUSD ! * Limit trading during news releases * Implement scalping trading strategy * Good profits in reversal markets, and sideway",
    author: "ARNON NINRATSUWAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/6c/6cd/6cd7fabf9adfebddf0f37cd21adc88b0_9b1747c838fb4821803414db0118a74f.png",
  },
  {
    name: "ICT ROCKSTAR",
    account: 110158902,
    description: "You Discover Pro Trader",
    author: "Ganesh  Sharmale",
    authorPhoto:
      "/st/media/pim/media/user_photo/4f/4f8/4f8138b5448ce0479858d9e15a554dec_be12f6339b164071b21d22e58e59ea22.jpg",
  },
  {
    name: "Chuyên vàng 2024",
    account: 110158919,
    description: "Gold",
    author: "Hùng Nguyễn",
    authorPhoto: null,
  },
  {
    name: "Fx Only Profit",
    account: 110158923,
    description: "Forex trade is the best way to make profit every day....",
    author: "MALAY SIKDER",
    authorPhoto:
      "/st/media/pim/media/user_photo/55/55a/55a0d71312a733b54efe820706d64870_0ca0da78a2a24818918b8d3fc1c55156.jpeg",
  },
  {
    name: "Green pips",
    account: 110159063,
    description: "Insha Allah \nDaliy target 1-2%\nMonthly target 30-40%",
    author: "DILDAR BEGUM",
    authorPhoto:
      "/st/media/pim/media/user_photo/43/439/4399370e65fe1c06fe97155de1b4b443_21fe9e8715034243ac9b1bdc23731b04.jpg",
  },
  {
    name: "Gold Special EA",
    account: 110159097,
    description: "X",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/ac/ace/ace529c85edbea776a06cb904b0eb20f_e2fe8118fbe948429969c3a67592c557.jpg",
  },
  {
    name: "CASTIMO GBPUSD",
    account: 110159165,
    description:
      "By using this strategy on GBPUSD, it is going to put u above your peers. Every pips is money.",
    author: "STEPHEN KASEETA",
    authorPhoto:
      "/st/media/pim/media/user_photo/7c/7cb/7cb144266a30fc0702d5c487b32b1009_e507b25e6d3349f7b8d7f9f130c37cda.jpg",
  },
  {
    name: "FOUP Đầu tư tỉnh tức",
    account: 110159211,
    description:
      "Tham gia để đạt lãi 15-30%/tháng. Giao dịch chuyên nghiệp, an toàn, cẩn trọng. Kết quả đã được kiểm chứng.",
    author: "Van Thang Le",
    authorPhoto:
      "/st/media/pim/media/user_photo/73/739/739277dd3ba16c93e75220fdb05cf0eb_99831d95e3fe4c27ac5eb4c0d9bc021f.png",
  },
  {
    name: "Low Risk High Profit",
    account: 110159228,
    description:
      "Low Risk, High Profit, Less Drawdown\nMonthly Target  20 to 40%                                         \n\nhttps://social-trading.club/strategy/11015922",
    author: "zeeshan  ashraf",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/690/690007b410235c5d36568376fd9ef492_069c0342ac604902b879f2d7b9703d38.png",
  },
  {
    name: "Bull Rider Bot",
    account: 110159263,
    description:
      "Bull Rider Bot is robot trading account. Bull Rider Bot make monthly 20% and give a stable income from trading.",
    author: "HIMANSHU YADAV",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f5e/f5e60754ec7ec2bf529c7a2f0fbed2a1_bc050df575ee433a864f8fe56c01a8aa.jpg",
  },
  {
    name: "JALAN NINJA",
    account: 110159284,
    description:
      "Forex trading is very risky, so invest according to the risk you can bear.",
    author: "ANGELIA FARIANY",
    authorPhoto:
      "/st/media/pim/media/user_photo/36/367/3678e0cd7b479f03c08c0426d74a6171_d92e51864f0f40d6b230d6469ec22e4c.png",
  },
  {
    name: "BeliefAcademy2",
    account: 110159299,
    description: "EA, BB and MA",
    author: "MARTHE MARYLINE ANGE  GNAYORO EPOUSE BROU",
    authorPhoto: null,
  },
  {
    name: "Cubes Gold Reaper 2",
    account: 110159330,
    description: "This is using Gold Reaper Moderate Risk",
    author: "DANIEL CHRISTANTO",
    authorPhoto: null,
  },
  {
    name: "Copy trading max",
    account: 110159365,
    description: "daily 1%- 10%. monthly minimum target around 10% - 20%",
    author: "MARASINGHE PERERA",
    authorPhoto:
      "/st/media/pim/media/user_photo/04/04c/04c2f5c5993402dbe11a8901aa60806b_332849997bd749ef86c1e7ea8d74a4ec.jpg",
  },
  {
    name: "PASO A PASO",
    account: 110159420,
    description: "ESTRATEGIA DE TRADING DE RIESGO CONTROLADO.",
    author: "Christian Kurt Adams",
    authorPhoto:
      "/st/media/pim/media/user_photo/15/15b/15b1456f2aa1d0d972aea20ed5804570_4ae4ea0a529c46078752aaecefb2a412.jpg",
  },
  {
    name: "sy1234567890",
    account: 110159444,
    description: "稳中求盈，风控第一，盈利第二",
    author: "志强 蔡",
    authorPhoto:
      "/st/media/pim/media/user_photo/5d/5d1/5d1a8bffcdd04e484f6e112de7ce679f_90c73c83049347b49775c80672621e9b.jpg",
  },
  {
    name: "Copytrade 5-2024",
    account: 110159445,
    description: "Chiến thắng",
    author: "THOA NGUYEN THI",
    authorPhoto:
      "/st/media/pim/media/user_photo/ed/ed6/ed6f99320ae8227cb88f804e69a99e4b_d0590ccd6b1e45d7853c5b1ccd242319.jpeg",
  },
  {
    name: "InvestIQ Bot",
    account: 110159453,
    description:
      "Stop Loss: $500 (DD = 50%)\nTarget: 100-400% annually\nBacktest: \nhttps://www.mql5.com/en/market/product/117444",
    author: "Phuc Nguyen",
    authorPhoto:
      "/st/media/user_photo/ee/eec/eec8098dcedca7079a411770a5d7148a_17e611a1d9bf4997b875852bbb840ec8.png",
  },
  {
    name: "CO CO TRADE",
    account: 110159466,
    description:
      "3 năm giao dịch trong thị trường. Giao dịch vàng là chủ yếu và các cặp tiền như EURUSD, GBPUSD.",
    author: "VAN CO TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/61/61d/61dcdb3b94960ae8ec34c548070cbc9d_f6b5f21bd3654bb0a1f8d00edb0d8cff.jpeg",
  },
  {
    name: "Tiểu Tư Sản Capital",
    account: 110159478,
    description:
      "Rủi ro 2%-5% tài khoản / lệnh\nSử dụng phương pháp cung cầu , hành động giá",
    author: "THANH TUNG HOANG",
    authorPhoto: null,
  },
  {
    name: "New strategy 2",
    account: 110159489,
    description: "聚沙成塔",
    author: "丁 浩明",
    authorPhoto:
      "/st/media/pim/media/user_photo/36/366/36696b1f72b6cc6093dc4b9e9d61c6aa_841aa430a8b1417cb9f6e51340968a23.png",
  },
  {
    name: "For a better life",
    account: 110159507,
    description:
      "Với nhiều năm kinh nghiệm giao dịch và cầm quỹ FTMO, chúng tôi sẽ cam kết tạo ra lợi nhuận ổn định lâu dài với RỦI RO THẤP NHẤT cho các nhà đầu tư",
    author: "Ân Thái Trần",
    authorPhoto:
      "/st/media/pim/media/user_photo/f6/f6a/f6aff5fe893dcff6890a9c9cbdf4c3d6_d9695c7732c44686ac0a821c002cf4c1.jpg",
  },
  {
    name: "Takeprofit-FX",
    account: 110159508,
    description:
      "10 years experienced trading in XAUUSD pair.\n99 % of trade complete perday.\nFollow at your own risk. Invest wisely.",
    author: "Setyo Dharmo",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5a2/5a254697c456bbe7ab0d113d64d6510a_bf14a0add09248e09d59bdfc7e8605a1.jpg",
  },
  {
    name: "SCW_PRO",
    account: 110159646,
    description: "Suuu_Chee_Wit",
    author: "MR PIPHAT IM KONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/7a/7ae/7ae468f6325d99d6d2150a41f28ae975_511d28d6900e41cdaf6521d20fc9342b_jnv9roq.jpeg",
  },
  {
    name: "Gold Profit",
    account: 110159655,
    description:
      "Join and see result\nContact for long term account Management \nWhats app\n03299892950",
    author: "MUHAMMAD SHAKEEL",
    authorPhoto:
      "/st/media/pim/media/user_photo/68/685/685a9f0ec44f83c3d5a4b523bc1bfdb1_9cf200247f7e4a51a9c0c3c38d1b5610.png",
  },
  {
    name: "Pocket money",
    account: 110159683,
    description:
      "Trade and work\n100% hand trading\nEvery stick has SL, no drag.\nSave 1% per day, profit rate 15-20% per month.",
    author: "NETIPONG PHAPAKDEE",
    authorPhoto:
      "/st/media/pim/media/user_photo/8d/8d5/8d579c5ad9c47aebcfda9f8b8d95aa51_fab762bfe9184afb8c3a9ec1695d9f95.png",
  },
  {
    name: "Power of Jupiter",
    account: 110159685,
    description: "Gold FUTURES Day Trading Strategy",
    author: "Thanaphipat Sathumanatphan",
    authorPhoto:
      "/st/media/pim/media/user_photo/3d/3d3/3d380dcbc7070c7e233f1c82f3b0bc76_e617a24d7b334668a77e493f5a9fa022.jpg",
  },
  {
    name: "Forex with Maha",
    account: 110159687,
    description:
      "✅Monthly 22-30% constant Profit with low risk. \n✅Check Daily Closing is always in Profit💰\n\nContact What'sapp  :➡️\nMaha +15515500449",
    author: "MUHAMMAD INAAMULLAH",
    authorPhoto:
      "/st/media/pim/media/user_photo/b7/b73/b7378faf43a6f9227ffdcfb019beaa14_9720d3b5a33e43229e060b516935410d.jpg",
  },
  {
    name: "Compound Gold - BTC",
    account: 110159749,
    description:
      "Compound interest and\nBitcoin Halving Sniper Make profits up and down",
    author: "MR NOPSAKORN THUIBUENGCHIM",
    authorPhoto:
      "/st/media/pim/media/user_photo/c3/c37/c3768423c422b993b152da3132cf240b_fe97b50c1ed34ffc9cda3144216b4565.jpg",
  },
  {
    name: "PROFIT NINJA BOT",
    account: 110159798,
    description: "Trading algorítmico",
    author: "Jaqueline Esther Herrera Medina",
    authorPhoto:
      "/st/media/pim/media/user_photo/d5/d59/d59477712db00ec5143850712e9315b1_6d8760e34bb44d21b606f233cb9ea1f1.jpg",
  },
  {
    name: "Pheonix Fligt",
    account: 110159799,
    description:
      "“Pheonix Flight transforms market volatility into growth, ensuring your investment thrives.”",
    author: "KITHUL GUNAWARDHANA",
    authorPhoto:
      "/st/media/pim/media/user_photo/67/67a/67abd7e7fac670960ef23d89f36ca652_c81be9838601477e85cc5f14472a8370.png",
  },
  {
    name: "true champion1",
    account: 110159810,
    description:
      "This is not a gamer platform, you will get it a little less here but you will get it continuously, this is my experience of the last 7 years.",
    author: "bal krishan",
    authorPhoto:
      "/st/media/pim/media/user_photo/01/015/01548810ea1c55a893bca792127db691_a31025d08d5a4da88168e7fb20ec365b.jpeg",
  },
  {
    name: "TRADER PRO WINNER",
    account: 110159811,
    description:
      "MANUAL STRATEGY BY PROFESSIONAL TRADERS WITH YEARS OF EXPERIENCE IN THE STOCK MARKET.\nUSUALLY TRADED IN EUR/USD.",
    author: "CARLOS MOISES GARCIA REAL",
    authorPhoto:
      "/st/media/pim/media/user_photo/97/970/970ebf7f3bcd5277df4ccd77a0d680e8_4a6de16458084914bc65f32f8fc0e646.jpg",
  },
  {
    name: "Master wealth",
    account: 110159820,
    description: "It’ my life.",
    author: "Pruthipong Phirasawong",
    authorPhoto:
      "/st/media/pim/media/user_photo/4a/4aa/4aad674f0af1fb5a5a35fce4651ab1c7_752bc59c0604456f80c132a5221c64d0.jpeg",
  },
  {
    name: "GoldMiningToTheMoon",
    account: 110159829,
    description:
      "Gold Mining To The Moon เป็นพอร์ต Social Trading ที่ใช้ Expert Advicer (EA) เป็นเครื่องมือในการเทรด ซึ่งให้ผลตอบแทนระดับปานกลางความเสี่ยงต่ำ",
    author: "SARAWUT BUBPHARAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/88/886/8860f360b8e44951eb8e9e1e32f1627c_e822f701a0964827bda97d1d0d30c783.jpg",
  },
  {
    name: "Tou Top Trader",
    account: 110159857,
    description: "Let's join the path to success together.",
    author: "Nilanxay Dararasamy",
    authorPhoto:
      "/st/media/pim/media/user_photo/c9/c94/c94599c8c97061b5258d2665b0b9ddfc_eae03cf36f394c4cb6a193dcd2c3b914.png",
  },
  {
    name: "Blue Corner 1",
    account: 110159875,
    description:
      "Menggunakan strategi reversal dan koreksi dengan target profit 15-50% perbulan.",
    author: "Raiyan Darisman",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c27/c272dcaa571626995d468e905c6aa783_00f380f93f1b4a1db91d9c4ec22823e1.jpg",
  },
  {
    name: "Balancer96",
    account: 110159902,
    description: "Target: 0.5-1%/day.\nVPA strategy.",
    author: "THANH NGAN NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/1e/1ec/1ec9bcab8b7886d725e02a3f458bdf1d_7e3a674f711346f281147ff3822d84f9.jpeg",
  },
  {
    name: "MPT -  Hedge",
    account: 110159908,
    description: "High profit - Low DD",
    author: "THI PHUONG THANH MAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f5e/f5e4214fe4940c709053391dbd7311d0_3a10f5e4f31446c288d914564119e5b0.jpg",
  },
  {
    name: "MPT - Collection",
    account: 110159914,
    description: "High profit - Low DD",
    author: "THI PHUONG THANH MAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f5e/f5e4214fe4940c709053391dbd7311d0_3a10f5e4f31446c288d914564119e5b0.jpg",
  },
  {
    name: "TRADE FOR PROFIT",
    account: 110159916,
    description:
      "Our goal is to preserve the capital while achieving a profit rate between 20 to 30% per month. Just copy our trades and make a good profit with us.",
    author: "MUKTAR SULEMANI",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/626/626b94fabc1df340ed7f19c9fca498a0_28ac96b8e37342e0ab2d043015a070a1.jpg",
  },
  {
    name: "Trang trải cuộc sống",
    account: 110159938,
    description: "Bỏ tiền vào đây nè, xong tháng rút ra như tiền lương vậy đó",
    author: "ANH TUAN KHUC",
    authorPhoto:
      "/st/media/pim/media/user_photo/0b/0b9/0b98e4d6d3c07904b4b1585a1c38e407_a823403a5c5c4053bf6aff0087fa0e00.jpg",
  },
  {
    name: "IA Ax News",
    account: 110160040,
    description:
      "Inteligência Artificial que opera SOMENTE durante o momento de notícias de grande impacto, com 15% de média de lucro mensal e baixa exposição.",
    author: "Ana Carolina",
    authorPhoto:
      "/st/media/pim/media/user_photo/53/531/53120bdeecbe53487ac71e27e3cefec5_a9dc993d6ced4304a9e8d7eb91d16642.png",
  },
  {
    name: "Lucky 777 by Kran",
    account: 110160084,
    description: "Money Money",
    author: "Nopprarat Phungprasert",
    authorPhoto:
      "/st/media/pim/media/user_photo/16/16d/16d129ef5871b3827eb210ebc8ba4c5f_d449ae2d458f4422a66361a059bdbcb5.jpeg",
  },
  {
    name: "Magic entry",
    account: 110160114,
    description: "Be patient",
    author: "Ahmed Shahin",
    authorPhoto:
      "/st/media/pim/media/user_photo/76/766/766b70e9d2622e5cd9f7f7a2ed1c46ea_d6b0f04a75a34c4d9d839699760f5623.jpeg",
  },
  {
    name: "VictorFX Scalper",
    account: 110160122,
    description: "Operaciones de alta precision en el activo XAUUSD.",
    author: "Victor Hernandez",
    authorPhoto:
      "/st/media/pim/media/user_photo/95/954/954ea25c0c036feecf8834477fc5b377_0cf16dd1810a4d6bb930b93cd8aa79e3.png",
  },
  {
    name: "Aswad BH USDCAD",
    account: 110160144,
    description:
      "AswadFX is a low risk strategy with the objective of achieving a consistent monthly target profit up to 5%.\n\nEntering this strategy at your own risk.",
    author: "Husain Aswad",
    authorPhoto:
      "/st/media/pim/media/user_photo/e0/e08/e08cb09e7cbcbf2c70353b8eb9092bc2_45c1ad9ff5094a9dab9fd4b03149d2b1.jpeg",
  },
  {
    name: "Aswad BH GBPUSD",
    account: 110160145,
    description:
      "AswadFX is a low risk strategy with the objective of achieving a consistent monthly target profit up to 10%\n\nEntering this strategy at your own risk.",
    author: "Husain Aswad",
    authorPhoto:
      "/st/media/pim/media/user_photo/e0/e08/e08cb09e7cbcbf2c70353b8eb9092bc2_45c1ad9ff5094a9dab9fd4b03149d2b1.jpeg",
  },
  {
    name: "EfuO-Ekkusu",
    account: 110160169,
    description: "Fox-KaiSha",
    author: "đầy lê thị",
    authorPhoto:
      "/st/media/pim/media/user_photo/20/206/2061b6cd96d27caacff9e2ae27446e39_c3e616a99aba4da3982c9098cc5deb21.jpg",
  },
  {
    name: "CuanForex 25pairs",
    account: 110160204,
    description:
      "Trading 25 pairs Forex with RSI based open position and Drawdown Recovery Strategy.",
    author: "Christopher Tanpuyani",
    authorPhoto:
      "/st/media/pim/media/user_photo/32/328/32875142fa47f73aa65fbdd506294753_c7b4ebba08854929a4aee806993b7cbd.png",
  },
  {
    name: "MADAM TRADE",
    account: 110160217,
    description:
      "- Bot giao dịch các cặp tiền hiệu quả 25-30% mỗi tháng\nLưu ý: Luôn rút lãi hàng tháng, không tham lam all in\nLH: 0961786786",
    author: "Hạnh Kiều thị ngọc",
    authorPhoto:
      "/st/media/pim/media/user_photo/9e/9eb/9eb9831a5d31dd035b095bb90152eed9_4796415cda814bcca1f89eabbfbe777b.jpg",
  },
  {
    name: "DIP - Full Gold",
    account: 110160240,
    description: "Ở đây chỉ nói về cậu vàng",
    author: "NHU THUAN DINH",
    authorPhoto:
      "/st/media/pim/media/user_photo/3e/3e6/3e6746bef5ae6362ecb756fd0b4b37be_101ff695111842e6a3e868c9fdf2eaa5.jpeg",
  },
  {
    name: "Marvin PRO",
    account: 110160241,
    description: "estrategia gerenciada",
    author: "isabel de oliveira mendes",
    authorPhoto:
      "/st/media/pim/media/user_photo/ce/ced/cedd0bbab7801ad7cf555d00ec024d0f_f6e0f460637e40e99b9b785d98568c06.jpeg",
  },
  {
    name: "2WIN INVEST_PETER",
    account: 110160247,
    description:
      "- BOT EA Trading EURUSD, USDCAD\n- Monthly Profit:  Min 20%\n- https://www.social-trading.club/strategy/110160247\n- Telegram: @PETER_2WIN (+84898596778)",
    author: "VAN DU NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/54/541/54151cfbbdb3a1a575dac5cde8fcba0e_a83b6c0f0c734e9e98cc29d3c91d92ae.jpg",
  },
  {
    name: "Gold Trader",
    account: 110160263,
    description:
      "That Is Automatic Robot & Manual Trading Monthly Profit 10/30% If Your Investment $1000 Then You Earn Profit $100/300\nJoin Telegram @SaithTrader",
    author: "Usman Ashiq",
    authorPhoto:
      "/st/media/pim/media/user_photo/04/043/043d95ac1e597415bf671b47369ecbbc_ba31cbbb3a6545a2ac878e0da8ee77d0.jpg",
  },
  {
    name: "Money Farm Eurusd",
    account: 110160269,
    description: "-",
    author: "ชัชพล เผือกจิตต์",
    authorPhoto:
      "/st/media/pim/media/user_photo/a2/a26/a26469f2d417e61c45b8b8321a3a1f79_a7d7b497f1984cf08c45fcd3c2aa6adb.jpg",
  },
  {
    name: "Smart fx business",
    account: 110160306,
    description: "Smart fx business",
    author: "RACHID BENAAOUAS",
    authorPhoto:
      "/st/media/user_photo/22/22b/22b942b030349f0a002e342f888bc979_05399bc7581f42488220e474de894177.jpg",
  },
  {
    name: "SAMAR GOLD TRADING",
    account: 110160309,
    description: "CONTACT ON WHATSAPP\n03151332244\nFOR MORE INFORMATION",
    author: "Bilal Rafique",
    authorPhoto:
      "/st/media/pim/media/user_photo/17/179/1791d24964a0680d921e53c1b8a5820e_6ede239726f14a14a813b2222bebe8e1.jpg",
  },
  {
    name: "AHGroup trading",
    account: 110160322,
    description: "RR 1/1",
    author: "NGUYỄN ANH",
    authorPhoto:
      "/st/media/pim/media/user_photo/28/286/2865b9c525a8b237b085f0964a3a7d7c_f87b224451c9459399eea52a7bd3bed3.jpg",
  },
  {
    name: "play to win",
    account: 110160329,
    description: "play to win",
    author: "MISS CHONNIKAN WICHIAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/32/32f/32f6dccfbfc2803f9e120029893f898c_4f5003cabee540d68468c045dd42c8c0.jpg",
  },
  {
    name: "nguyenhoang-1",
    account: 110160380,
    description: "tôi sẽ giao dịch từ 500$-100.000$",
    author: "Chí Hạnh Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/6f/6fa/6fa491e9ccbc407331b21048a807362d_f05732fcf5a448d88eb1e15da5ae3e5d.jpg",
  },
  {
    name: "Golden Dragon",
    account: 110160383,
    description: "Annual profit target 500%",
    author: "元海 孙",
    authorPhoto:
      "/st/media/pim/media/user_photo/a8/a8a/a8abead59c09f4e29a4eadbe1bfb6655_d4b8595ea0d54ba78be37a3215bb8814.jpg",
  },
  {
    name: "Nguyen Nam",
    account: 110160446,
    description: "kiến thức,kinh nghiệm và trải nghiệm",
    author: "nam van",
    authorPhoto:
      "/st/media/pim/media/user_photo/01/01f/01fd26843295694ceb772243ccefbb3e_5eca374d71584a54bcd1dcd4c00e7d1f.jpg",
  },
  {
    name: "EuroKiller Scalper",
    account: 110160478,
    description:
      "We work safely and profitably. Our EA's strategy is validated by 2 years of real ticks with constant profit. Start copying our trades now!",
    author: "kevin horsth",
    authorPhoto:
      "/st/media/pim/media/user_photo/cd/cd2/cd2157f3b5fbd2d0808c76b0db5339b3_f455f46ae5e44e48bcaf8208c02725ff.png",
  },
  {
    name: "Top of Top",
    account: 110160550,
    description:
      "Trading strategies comply with discipline and follow the safe methods of investment funds. Expected profit per month ranges from 15% to 30%...",
    author: "Tùng Nguyễn Huy",
    authorPhoto:
      "/st/media/pim/media/user_photo/af/afe/afede53464f8f06e12f8a393a9cd9ccb_662f24f0284d4cf7936147b7ac0dfb86.png",
  },
  {
    name: "SmartEA 24",
    account: 110160599,
    description: "Stable Profit",
    author: "Văn Nghiêm Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/3d/3d2/3d25a087acb225ec84c867c7acb8f945_b9c2b8a1c81e40fba6b440425766cd9c.JPG",
  },
  {
    name: "Safety for account 1",
    account: 110160602,
    description: "safety for your account, low rish. daily profit",
    author: "VAN QUANG NGO",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/459/4595d4a0c5264cef0966c7e193e45502_11ec54c515f74e8f8ba31b770c75d678.jpg",
  },
  {
    name: "VietNamtoiyeu",
    account: 110160609,
    description:
      "Tôi là nhà giao dịch B.OT chuyên tiền tệ, cặp tiền tôi giao dịch là AUD. Tôi trade hơn 9 năm kinh nghiệm trong viết B.OT trade. AE Follow tôi nhé.",
    author: "Khánh Huỳnh Đăng",
    authorPhoto:
      "/st/media/pim/media/user_photo/53/53b/53bcd7527006ab77d1a2b18050a64ced_415457e29c304c03ba3f724c507a3e0b.jpg",
  },
  {
    name: "MONEY CARE_2",
    account: 110160629,
    description:
      "Always set Stop Loss, max 5%. \nProfit target is 10 - 30% per month.\n\nLuôn đặt cắt lỗ, tối đa 5%\nLợi nhuận 10 - 30%/ tháng",
    author: "THI LOAN DANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/3d/3d8/3d831f0b1879630c985ad1fc57d3f616_c9c17b3e5d4a4a17a0e991668c9dbd27.png",
  },
  {
    name: "Wealth Journey",
    account: 110160692,
    description:
      '"Tap into our industry expertise. Aim for 15-20% monthly profit. Let money work while you sleep. Copy our trades for great profits! 🎉',
    author: "MUHAMMAD ASIM",
    authorPhoto:
      "/st/media/pim/media/user_photo/fb/fbf/fbfa898c92734e2a1b3358411795065e_b7a0c85d03704450af0a2342d796ad57.png",
  },
  {
    name: "MONEY TRADING 6",
    account: 110160744,
    description: "Make money every day",
    author: "LY LÊ THỊ",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1a8/1a8b8b84934c5259f9daaeddb04cc523_2f4ef1e3f8d34305965662b381a2f127.png",
  },
  {
    name: "USD EUR CAD TRADING",
    account: 110160745,
    description:
      "Kết nối trực tiếp nếu cần :\nHotline : 0946139186\nZL / FB : 0946139186",
    author: "Trọng Đoàn Hoài",
    authorPhoto:
      "/st/media/pim/media/user_photo/dc/dc1/dc1e6c0cce9a3406e8c9ca49cc91ea24_ae8c15979ed74c718fb4b4ba244ced11.jpeg",
  },
  {
    name: "SMN TRADING",
    account: 110160770,
    description: "Giao dich Swing forex",
    author: "THI HONG NHUNG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/33/336/336d37776c9c6a625c76ba8d462bea22_8dced81ff68e448b817b513263c492a5.png",
  },
  {
    name: "Kumeil FX v1",
    account: 110160804,
    description: "0013057139",
    author: "Kumeil Munir",
    authorPhoto: null,
  },
  {
    name: "JUST COPY TAKE MONEY",
    account: 110160809,
    description: "Swing Trader\nAlways set Stoploss",
    author: "DUY KHANH TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/d8/d89/d8948ce62e482af1b25343f64fa0d0e5_4937c91c68fe47b187c33fba7ee74470.jpg",
  },
  {
    name: "LongTradingVN",
    account: 110160836,
    description: "Long trading, less profit but it is safe.",
    author: "TUAN LINH PHAM",
    authorPhoto: null,
  },
  {
    name: "In His Name",
    account: 110160868,
    description: "I am a wave trader",
    author: "Kasibante John Paul Nyanzi",
    authorPhoto:
      "/st/media/pim/media/user_photo/da/da0/da086c7152ffc0d3f47d411abfa3a508_c9b07491e70d415e8b4d98b029e11a8a.png",
  },
  {
    name: "R_ForexTrading_India",
    account: 110160883,
    description:
      "I am experience, I am always Market STOP Loss and I am possible recovery profit",
    author: "K Rajeshwar  Reddy",
    authorPhoto: null,
  },
  {
    name: "Sabar Jemput Profit",
    account: 110160886,
    description:
      "Menggabungkan keunggulan 3 indikator dan analisis dari 3 timeframe berbeda dalam satu strategi trading. Fokus minimkan Resiko dan Maximalkan profit.",
    author: "ISAN WIJAYA",
    authorPhoto: null,
  },
  {
    name: "Grow with Bilvez",
    account: 110160910,
    description:
      "Hello traders .....this is my strategy which helps you to grow your account with minimum risk",
    author: "Parvez Parvez",
    authorPhoto: null,
  },
  {
    name: "FOREX SMART 2",
    account: 110160964,
    description: "Chiến lược giao dịch forex với lợi nhuận 5-20% mỗi tháng.",
    author: "huyen nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/f6/f6a/f6a6d27330d6071eb98822d29a103d7d_8f36781ea16e45759e6d40de6a0a0166.jpg",
  },
  {
    name: "FOREX SMART 3",
    account: 110160966,
    description:
      "Chiến lược giao dịch thông minh với lợi nhuận 15-30% mỗi tháng. Quý khách có thể xem lịch sử giao dịch sẽ thấy.",
    author: "huyen nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/f6/f6a/f6a6d27330d6071eb98822d29a103d7d_8f36781ea16e45759e6d40de6a0a0166.jpg",
  },
  {
    name: "Gold love pro trader",
    account: 110160981,
    description: "I try my best",
    author: "Muhammad  faizan",
    authorPhoto:
      "/st/media/pim/media/user_photo/73/735/7355ee4deb8c2c3224577d533a40c755_4e05f11019b0439db42ae59a4992e0ef.jpeg",
  },
  {
    name: "NIAZI Trader",
    account: 110161006,
    description:
      "Unlock the secrets of forex success! Join my copy trading strategy—combining Fibonacci & 200 EMA for thrilling profits!",
    author: "Zeeshan Ullah",
    authorPhoto:
      "/st/media/pim/media/user_photo/9f/9fc/9fc76d8f991a9a6bb982f8e9bcdaa7f9_4f2acc85b09047d4abbbbd47ad3fb35d.png",
  },
  {
    name: "Seven of October",
    account: 110161022,
    description:
      "Seven of October  for 💪   support  Palestine and this is for Islamic people Free Sawp and lower 1:2 leverage inshAllah hala 100%",
    author: "Adam Shadid",
    authorPhoto:
      "/st/media/pim/media/user_photo/2e/2ea/2eabc9e2f122cc71acfe73e8c8d8d1ea_12c89c3d58f1487496accd03b61f32fa.jpg",
  },
  {
    name: "GO TO MOON",
    account: 110161084,
    description:
      "“Sound strategy starts with having the right goal”\nMột chiến lược hiệu quả bắt đầu bằng mục tiêu đúng đắn.",
    author: "Thang Nguyen",
    authorPhoto:
      "/st/media/user_photo/03/035/035e01da3c79315a7b0a9c760f304258_69e0717e177e46b18a935b046c1e8785.jpg",
  },
  {
    name: "Свинг-трейдинг",
    account: 110161098,
    description: "«Господство над хаосом»",
    author: "Bulat Shokbarov",
    authorPhoto:
      "/st/media/pim/media/user_photo/79/796/796f69bb47f07a6cdbb5a56e8bf1ff87_494574cdfcbd471b81a9ccb265968580.jpeg",
  },
  {
    name: "NeverLoss ForexTrade",
    account: 110161120,
    description:
      "Copy to NeverLoss ForexTrade confidently to Earn Big (15-30%) Profit in every Month. We promise you will never loss your Main Capital.",
    author: "MST KHATUN",
    authorPhoto: null,
  },
  {
    name: "C9 Hoang Capital",
    account: 110161135,
    description: "Xauusd \nVolume\nZalo 0965789997",
    author: "Hà Mi Dương",
    authorPhoto:
      "/st/media/pim/media/user_photo/e9/e90/e90e1bfc2f4f72c10fd8aa46479b7f04_c533fac698fc410fa3ab809c5bbd1707.jpg",
  },
  {
    name: "Passive Safe",
    account: 110161141,
    description: "Safe strategy to multiply your capital",
    author: "冉 谭",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50b/50bf108f138db5389e26349c0bb0d9a4_3e8087e3933d409994f4acadd0184f25.jpeg",
  },
  {
    name: "Trader và Cuộc Sống",
    account: 110161186,
    description:
      "- Mục tiêu 1-2%/1 ngày, 10-25%/1 tháng.\n- Thuần Scalping\n- Tất toán, rút lãi hàng ngày.\n- Coi trong việc giữ tiền, duy trì lợi nhuận trong dài hạn.",
    author: "Trần Trọng Tú",
    authorPhoto:
      "/st/media/pim/media/user_photo/93/939/9399866c9aa63db9b45db64010b0b5db_3d6531343ffc4b80a873de67204c394d.png",
  },
  {
    name: "Right innovetion",
    account: 110161225,
    description: "Right innovetion",
    author: "Geeta Lilhare",
    authorPhoto:
      "/st/media/pim/media/user_photo/dd/dd3/dd3efc13b86d1ee3ae74951d4329c76b_fb4b685209ce4a1fa84a649f5b3372f6.jpg",
  },
  {
    name: "Leesa Trader",
    account: 110161250,
    description: "aaaaaaaa",
    author: "V SINDHU",
    authorPhoto: null,
  },
  {
    name: "Alpha Strategy",
    account: 110161276,
    description:
      "Descubre una cuenta de trading que ofrece rentabilidad estable y sostenida a lo largo del tiempo, con riesgo mínimo para tu capital.",
    author: "Juan Felipe Corredor",
    authorPhoto:
      "/st/media/pim/media/user_photo/06/069/069762f653b0965cc6ae3272f18508d6_9730a74f3a3d4b2d8d29d04f1da6fc9f.jpg",
  },
  {
    name: "Matrix EA 01",
    account: 110161296,
    description: "Matrix EA",
    author: "MINH ANH BUI",
    authorPhoto:
      "/st/media/pim/media/user_photo/b8/b82/b82855bc2702f1fe68c6661b212a9c97_b6177f45df474cb2a7b1e7a509707fc8.jpg",
  },
  {
    name: "XẪUXAUGOLD",
    account: 110161299,
    description: "ct",
    author: "VAN DINH NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/82/821/82142a5aa6dcc58f11b7d97a46933882_d17181502cd1488fb27ccd92bf2f0e2f.jpg",
  },
  {
    name: "Lucky Gold 2",
    account: 110161301,
    description:
      "Profit target 1-2% per day. Give it a try!\nTelegram: https://t.me/phaocuusinh6868",
    author: "TUAN HUNG BUI",
    authorPhoto:
      "/st/media/pim/media/user_photo/4a/4ad/4ad7561e7a0b11bd4771ea72205ff932_1910cd5e827b477f92b1419ee2791f4c.png",
  },
  {
    name: "顺律通  保守 20",
    account: 110161308,
    description:
      "Stable and long-lasting, with easy and stress free monthly growth of 10% .BABCB Rapid 35\n最底10美元，最高20万美元，当前程序轻两年多实盘稳定收入月百分之十以上",
    author: "雪飞 蓝",
    authorPhoto:
      "/st/media/pim/media/user_photo/4d/4df/4df5f6e0ff3d192e32a55cdbdc37c77d_1946a603318a412a929c3007a11580c3.png",
  },
  {
    name: "EU-GU DIGGER",
    account: 110161326,
    description: "EU, GU SUPER DIGGER MACHINE\nDD = PROFIT = 25-30%",
    author: "KHOA THUAN HO",
    authorPhoto:
      "/st/media/pim/media/user_photo/25/25b/25b1b67903116df947f3164d3d2b50a8_76e03f03a2294c7798e36fa2c2075fea.jpg",
  },
  {
    name: "Stay Blessed 786",
    account: 110161363,
    description: "We trade in EurUsd",
    author: "USMAN GULL",
    authorPhoto:
      "/st/media/pim/media/user_photo/76/760/76000a5e2ec07602dd7255bf88196294_379feb956d69412b9797b0b3f766f1e7.jpg",
  },
  {
    name: "GOLD SNIPER",
    account: 110161370,
    description: "Xau only bro",
    author: "PUJO WIBOWO",
    authorPhoto: null,
  },
  {
    name: "Trueway Business",
    account: 110161424,
    description:
      "Daily consistent profit with long term fundamental and technical analysis.",
    author: "ARUNKUMAR M",
    authorPhoto:
      "/st/media/user_photo/3a/3ad/3ade3472fec78133bcfbb743c39a4a25_3dfbda55f2ab4db2976d894cfc0a5aa0.jpg",
  },
  {
    name: "KB VENTURES 9",
    account: 110161436,
    description: "30%",
    author: "DUY TIEP NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/7f/7f1/7f11348e2e302dd7ddfcc5e6f95902eb_8b6ba25b1b12489184cfe7fb18476a72.png",
  },
  {
    name: "Vàng lao đao",
    account: 110161471,
    description:
      "Đầu tư an nhàn cuộc sống giàu sang. Mục tiêu lãi 20% mỗi tháng song bền vững. Đã lên thuyền thì tin tưởng mình. Đừng tự ý ra vào sẽ mất tiền",
    author: "BÙI LÀNH",
    authorPhoto:
      "/st/media/pim/media/user_photo/ca/ca6/ca62d5d8197fd9c8a97e80fd2b586ef1_2fcc5d47f5ff4627b2bce7a791fea5e8.png",
  },
  {
    name: "Winwin Trader",
    account: 110161474,
    description:
      "💥 Smart Trading Strategy with Robots: Achieving Steady Monthly Profits",
    author: "THOAI LUONG DINH",
    authorPhoto:
      "/st/media/pim/media/user_photo/7f/7f6/7f6c151599a6bec5a2ce7e67bfb901df_26909bbe20324894ae71b2fbe8032b2b.jpg",
  },
  {
    name: "MARKET KILLER",
    account: 110161478,
    description:
      "1. FEARLESS & DON'T BE GREEDY 2. BE PATIENT 3. TAKE PROFIT Let'$ Grow Together 🚀🚀🚀",
    author: "Mery Mery",
    authorPhoto:
      "/st/media/pim/media/user_photo/35/352/3521eadfbf43f583e72ef2be01f831c3_8c07a1e338cf4433809a065edbca7d5e.jpeg",
  },
  {
    name: "Nguyen Van Kien",
    account: 110161498,
    description:
      "Chiến lược hedge các cặp tiền chính, không xlot để giảm rủi ro",
    author: "Kien Nguyen Van",
    authorPhoto:
      "/st/media/pim/media/user_photo/08/089/0894a73d658f38ed5be69aa20ecb6069_c024833f35b543299f1c1a7ab9823121.jpg",
  },
  {
    name: "Plan A Plan B",
    account: 110161522,
    description:
      "My strategy depend on support & resistance, working only with GBPUSD. \nMonthly TP 30% (smtimes more but not less)\nSL 10% (never get touched)",
    author: "Lulwah omar",
    authorPhoto:
      "/st/media/pim/media/user_photo/82/823/823adfb0b365f4aa25f4ea00ec6bef6d_facb2fd3e9b54a388b2a9dc158e40ca4.jpeg",
  },
  {
    name: "Saidtrading3",
    account: 110161590,
    description: "استراتيجية المخاطرة المعتدلة والربح الجيد",
    author: "said elghoul",
    authorPhoto:
      "/st/media/pim/media/user_photo/52/520/5205510b4117e967cb36c11041ccca24_aefc50299adf472f8e6f43cba67601c7.jpg",
  },
  {
    name: "TK2S-REVENGE",
    account: 110161596,
    description: "TK2-REVENGE",
    author: "Thang Ho Thanh",
    authorPhoto: null,
  },
  {
    name: "Gizel Acad Go",
    account: 110161621,
    description: "For ACAD",
    author: "OEY LAN",
    authorPhoto:
      "/st/media/user_photo/82/823/823cbd5ed091cf01686b53bc9cc65a0b_671cc67d48fd4661b38c2f44f4ece33f.jpg",
  },
  {
    name: "N3wsty88888888",
    account: 110161631,
    description: "Slow",
    author: "monire Nejati",
    authorPhoto: null,
  },
  {
    name: "Stable Gain V4 Gold",
    account: 110161638,
    description:
      "A Robot based signal that using Scalping trading method on Gold price movement for entry and closing. Safe Initial capital start at 1,000 usd",
    author: "MR THITI BUNSIN",
    authorPhoto:
      "/st/media/pim/media/user_photo/34/340/340918732e84b76656fb429681ef656a_f73a2c1b79e54a67b545392aa56fd5dd.png",
  },
  {
    name: "Swing trading GM368",
    account: 110161650,
    description: "Không giao dịch tiền điện tử",
    author: "THI HONG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/16/164/1640e5044209a68ff73d1563ed90e475_336f837af0d44a3398ac04b96f490d7f.jpg",
  },
  {
    name: "MS Capital EURUSD",
    account: 110161676,
    description:
      "Copy Trade EU not by EA\nProfit monthly: 5-7% per month\nhttps://t.me/MSCapitalForex",
    author: "HUU TAI NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/d8/d8a/d8a63824d33c4ec8412e778739326859_307989a2682d480b8d481a6bc2089ca7.png",
  },
  {
    name: "والصطنعتك لنفسی",
    account: 110161678,
    description:
      "Konsisten dan disiplin, loss itu wajar dalam dunia trading, yg penting bagaimana probabilitas kita bayakan lost atau profit??",
    author: "Aprilia Nur Ulfa",
    authorPhoto:
      "/st/media/pim/media/user_photo/4a/4a3/4a396443bd9c272708ec515e7944596b_0db35977d8e543e5aa9d2572913f7192.jpg",
  },
  {
    name: "GROWTH MANAGER",
    account: 110161761,
    description: "Ok",
    author: "SUSHANT GODASE",
    authorPhoto: null,
  },
  {
    name: "Low Risk Trader",
    account: 110161764,
    description:
      "This account seeks to diversify your portfolio, seeking to achieve consistent growth, standardization and profit in the short term.",
    author: "Rafael Araujo",
    authorPhoto:
      "/st/media/pim/media/user_photo/fc/fc9/fc90d084064a3995eeb5d1adf0b2cc03_cc2fed7c17684ffd80990a489859c6c1.jpg",
  },
  {
    name: "Realking_id",
    account: 110161814,
    description:
      "Trade for my pension fund, \nSo i can provide better living for my child and family",
    author: "WILIAM WIJAYA",
    authorPhoto:
      "/st/media/pim/media/user_photo/51/512/5125ff71538500277dbf2be530b9f797_18d7fe9bc67e479893096e732b8d1eb9.jpeg",
  },
  {
    name: "AutoPilotFX EA",
    account: 110161815,
    description: "Copy Trade by EA \nSwing trading",
    author: "Nam Nguyễn văn",
    authorPhoto:
      "/st/media/pim/media/user_photo/87/871/871d4d9f436a9245b99fee40c14bbffa_aa9122672c2a44fda684bed2938fcf0d.png",
  },
  {
    name: "Luckygirl Love",
    account: 110161826,
    description:
      "This strategy uses trend trading.  Investors should not rush to withdraw mone.\nhttps://social-trading.club/strategy/110161837",
    author: "LAPATRADA SRIKOMEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c23/c23f9661c5852a7e18e74d361c5190a1_c7bf1742d87945909f7ca71bd02cb56b.jpg",
  },
  {
    name: "Aya delle love",
    account: 110161837,
    description:
      "Running trend trading marketing strategy, lots will be issued 4-\nกลยุทธ์การตลาดการเทรดแบบรันเทรน จะมีการออก lot 4-5ครั้งต่อเดือน ผู้ลงทุนควรถือระยะยาว",
    author: "PIRAPHAT MUANGTHANACHAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/1b/1b1/1b135103495f7a32855d857d2b8fc576_e6277fdc170f4a29baf131155f4d69bd_6vFYhTS.jpg",
  },
  {
    name: "เทรดตามเจ้า",
    account: 110161909,
    description: "อยากรวยร้อยล้าน\nต้องคิดอย่างคนหมื่นล้านเขาคิดกัน",
    author: "MISS APINYA KWANTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/9e/9e2/9e240d6ae84b86caafd017a8e9984cb3_d1b28fd50f0046af8e06100be74ddbff.jpg",
  },
  {
    name: "复利百万要多久-启程",
    account: 110161934,
    description: "2024年5月启程复利百万征程。",
    author: "腾铎 黄",
    authorPhoto:
      "/st/media/pim/media/user_photo/b5/b5f/b5f42b8bb1f98e2bd69a60e4fb0cb364_0b96c924fa844ddc818954d36deba725.png",
  },
  {
    name: "Diamond FX 239",
    account: 110161956,
    description: "You will have regular profits every month",
    author: "Hoang Quoc Quan Do",
    authorPhoto:
      "/st/media/user_photo/eb/eb6/eb63c0b3e29a7c4ab08accbd0f6f8b9e_5e53af9581c14ea0b1cc6d0bb7a0c3e8.jpg",
  },
  {
    name: "Diamond FX 268",
    account: 110161957,
    description: "You will have regular profits every month",
    author: "Hoang Quoc Quan Do",
    authorPhoto:
      "/st/media/user_photo/eb/eb6/eb63c0b3e29a7c4ab08accbd0f6f8b9e_5e53af9581c14ea0b1cc6d0bb7a0c3e8.jpg",
  },
  {
    name: "The Group Of Bohra",
    account: 110161962,
    description: "hello invester's",
    author: "Harish Kumar jain",
    authorPhoto:
      "/st/media/pim/media/user_photo/ad/adf/adf46bea4b50e0181266976fd006f2c4_36eecc87288f48248c0f8145317c7626.jpg",
  },
  {
    name: "FLB - 12 SC",
    account: 110161979,
    description: "Pro Trend\n\nMinimum Deposit = 500$",
    author: "NARATHIP PIROMSUK",
    authorPhoto:
      "/st/media/pim/media/user_photo/ab/ab1/ab14b8d14716881481b5019ff2d42b03_6fa22b5efae64051a5b0d250eb622e7f.png",
  },
  {
    name: "Minh-Anh social",
    account: 110161982,
    description: "cham tu tu",
    author: "Tuấn Trần Đình",
    authorPhoto:
      "/st/media/pim/media/user_photo/e7/e78/e787e9ea4aed690f0db7f22680556c7c_2747d4a5bb2c4fd6899804c13473a249.jpg",
  },
  {
    name: "GOLD_2percent",
    account: 110162017,
    description:
      "2 percent everyday is my goal!\n2 phần trăm mỗi ngày là mục tiêu duy trì lâu dài!",
    author: "CAO MINH",
    authorPhoto:
      "/st/media/pim/media/user_photo/36/366/366df5b7a057d4b6b2ce6257f11536d0_485c7fffd692477d8b63dfc4692168c4.jpg",
  },
  {
    name: "Protrader Academy",
    account: 110162024,
    description: "SWING TRADING, MONTHLY TARGET IS AROUND 5% TO 10%",
    author: "JITENDER JITENDER",
    authorPhoto:
      "/st/media/pim/media/user_photo/35/35b/35b3cdd257763d32c9d401e5499a16d0_7afcc276b6e94f4c8bb265d3c87a9059.jpg",
  },
  {
    name: "Smart FX - Standard",
    account: 110162058,
    description: "Smart FX Standard",
    author: "RACHID BENAAOUAS",
    authorPhoto:
      "/st/media/user_photo/22/22b/22b942b030349f0a002e342f888bc979_05399bc7581f42488220e474de894177.jpg",
  },
  {
    name: "FOLLOW ME  YOU WIN",
    account: 110162114,
    description: "FOLLOW ME YOU WIN",
    author: "PHAN LỌC",
    authorPhoto:
      "/st/media/pim/media/user_photo/91/91e/91e6173f9969bd07473818d08d0aa349_b58418efaac144a4947230d0d971524a.png",
  },
  {
    name: "VINCENZO Cassano",
    account: 110162177,
    description: "Thank you for joining.",
    author: "EVIYANTI",
    authorPhoto:
      "/st/media/pim/media/user_photo/17/17e/17e7f9b17dacddc6c41905d0c1fd5f3e_50ef6091a3854ccb8aa6ddfee79c2a01.jpg",
  },
  {
    name: "十年磨一剑  aaa",
    account: 110162186,
    description: "不见风雨，怎见彩虹。手动+策略",
    author: "孟军 高",
    authorPhoto: null,
  },
  {
    name: "Trọng Tân-Back",
    account: 110162192,
    description:
      "Chiến lược chuyên cặp EU với hơn 5 năm kinh nghiệm trải qua nhiều thăng trầm của thị trường fx.",
    author: "Mai Anh  Bùi",
    authorPhoto:
      "/st/media/pim/media/user_photo/25/258/258f84583cfd8f57897aacc5cb3a5a26_cef6d90595b449d6b77d847381bd1d1b.jpg",
  },
  {
    name: "Seal Of Approval",
    account: 110162294,
    description:
      "Trade small, stay in the game, persist, and eventually reach a satisfying level of proficiency.",
    author: "Limadijaya Suhendra",
    authorPhoto:
      "/st/media/pim/media/user_photo/c9/c96/c9641a4cf535bc70776e06713fc1c361_931518e3b9464682800d5ed9a6e9fa47.png",
  },
  {
    name: "ZA GBPUSD Pro",
    account: 110162295,
    description:
      "Đây là tín hiệu đang là no1 trên mql5.\nchúng tôi chỉ copy và đưa nó về Exness cho các bạn sử dụng miễn phí\nlink nhóm zalo https://zalo.me/g/uiwvcn717",
    author: "DANH DUC HOANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/d1/d1e/d1e075b74cf623f19322ff587e805191_b155d6f77aad4df18269f95c32a40d0d.jpg",
  },
  {
    name: "thanh niên bể nợ",
    account: 110162351,
    description: "hội bể nợ",
    author: "linh phan",
    authorPhoto:
      "/st/media/pim/media/user_photo/4b/4bf/4bf1b382a5281b8c48029a24219d972f_028e405790bd4fa58f71e3d53bbc81dc_zXNUPi7.jpg",
  },
  {
    name: "GOLD Scalping",
    account: 110162416,
    description: "Giao dịch Vàng ngắn hạn trong ngày",
    author: "THANH LONG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/92/92b/92b7930be8c2a7558eac7e9a6ad2b0ea_5645b9d91c2b445394720f78ad0a657e.jpeg",
  },
  {
    name: "Master Rich",
    account: 110162482,
    description: "Trade gold and day trade\nScalping style",
    author: "Chanso Chidtivong",
    authorPhoto:
      "/st/media/pim/media/user_photo/4d/4d9/4d97c457b7c152c6c993325e496dbb2f_7424be276ace42e58fffaa1bf05a5cda.png",
  },
  {
    name: "TradeMasterX",
    account: 110162483,
    description:
      "Welcome to TradeMasterX! Our strategy blends expertise with delivering profitable trades for investors. Join us for smart trading solutions.",
    author: "Marwane Ziani",
    authorPhoto:
      "/st/media/pim/media/user_photo/ff/ffc/ffc27d84da8f61040d60417ae0019c80_104e97eb86b242589c0d8688f20f865d.jpg",
  },
  {
    name: "Forex EurUsd",
    account: 110162494,
    description: "0,5 - 1 % / day",
    author: "EDWAR",
    authorPhoto:
      "/st/media/user_photo/e6/e68/e689a48fe0311c75f2b38a793b804a04_0a4b0cd97beb4e1c95720f15301e4e2d.jpeg",
  },
  {
    name: "Clever Money",
    account: 110162503,
    description:
      "CM doesn’t rely on worthless retail base strategies or unsafe\ngambling tactics to trade. CM operates highly on mathematical and statistical methods.",
    author: "RIKA P",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/509/50957c17970ed2bc681d7a4bd29679bc_0bf4e4023f9c436dad88b72802bcf5d0.png",
  },
  {
    name: "ZM TRADERS PAK",
    account: 110162557,
    description:
      "AI based Trading bot \nLong term profit consistently with low risk\nContact 00923452216551\nHigh risk link available also",
    author: "zahid Maqbool",
    authorPhoto:
      "/st/media/pim/media/user_photo/be/bec/bec1525bbb6130f15701802c87ff9a55_dfd643d9c75b4ba1b1c8cb4f8bb8b9ed.jpg",
  },
  {
    name: "Thien Nhan",
    account: 110162660,
    description:
      "Scalping Vàng và BTC, Lợi nhuận/ Rủi ro cao. Lot: 0.1, Max Trade:10. Lời rút, Lỗ không nộp duy trì Ballance $5K. Tk quỹ RR thấp 110171073",
    author: "TRẦN HIẾU",
    authorPhoto:
      "/st/media/pim/media/user_photo/a1/a1c/a1cf9ceb386e119d5dfbbabd9cf8a28d_b98434baaf00471d913df50654148ef6.jpeg",
  },
  {
    name: "EA20คู่เงินซื้อและรอ",
    account: 110162664,
    description:
      "ไม่แนะนำให้ปิดการcopyตอนที่มีไม้ติดลบอยู่เนื่องจากการปิด positionจะเป็นการปิดรวบและมีการแก้ไม้ แนะนำให้ถือและใจเย็นๆ หากมีการติดลบไม่ต้องตกใจดูที่%DD",
    author: "Wattakarn Jansame",
    authorPhoto:
      "/st/media/pim/media/user_photo/f9/f91/f9177393abfa1ab453620fb30262de60_f1d72a8c54364756996f69c53cdae91c.jpg",
  },
  {
    name: "SS-FOREXActiveProfit",
    account: 110162682,
    description: "Join us for making just quick Profit",
    author: "Shahd Siddiqui",
    authorPhoto:
      "/st/media/user_photo/a6/a6d/a6dda1388c024ccf1c3e806bf99a5631_28d1612b829f49e2b469a73635d784cf.jpg",
  },
  {
    name: "Loooo RiSK",
    account: 110162706,
    description: "Wait and watch",
    author: "Javed ahmad Shah",
    authorPhoto:
      "/st/media/pim/media/user_photo/9a/9a9/9a9d2aaea5c24d80a0930da05e980051_77ac8ef46bdd411ea077788b330a2024_WNfBs2m.jpg",
  },
  {
    name: "WIN EXNESS",
    account: 110162710,
    description: "GOLD ONLY",
    author: "THI BAO HIEN NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/d5/d5a/d5aeb1c1a4440284f956abdf590acd8d_f450cd016dba404b987078a20d1870c2.jpg",
  },
  {
    name: "TRADING SOCIAL GOLD",
    account: 110162748,
    description:
      "Scaping gold every day with 5 - 20% monthly profit with maximum risk of 2% of account monthly\n\nhttps://t.me/trading_social_gold",
    author: "PHẠM CƯỜNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/cc/cc3/cc33d4bdd83a75897ffa76a918b0d2d8_0880247dd65c467c8c3bb834ef173ce6.jpg",
  },
  {
    name: "Yfrujhigjhufih",
    account: 110162749,
    description: "Kk fyjjov7hohr",
    author: "shrikrushna Nikam",
    authorPhoto:
      "/st/media/pim/media/user_photo/3e/3e1/3e1e0911eb1239f6ab3126978e66179d_2b76b3ebec2d4fb79674e065b18f099d.jpg",
  },
  {
    name: "Just-Billioners",
    account: 110162754,
    description:
      "trading with proper money management and strong sycology.i have six years experience. .For more info:\nfaizanchanda95@gmail.com",
    author: "Kamran Jabbar",
    authorPhoto:
      "/st/media/pim/media/user_photo/f6/f69/f69ce42c76e789c5a88a6aecf07122f9_30ac50e9b5d84031a9ed64eeb2f6828c.jpg",
  },
  {
    name: "New Among Us",
    account: 110162782,
    description: "Hello",
    author: "Xuân Toản Mai",
    authorPhoto:
      "/st/media/pim/media/user_photo/f1/f1d/f1debe7359e37d47818f56aed291908c_0617d9fffa2245faba8ab76c72c885cd.jpg",
  },
  {
    name: "SBL Capital",
    account: 110162810,
    description: "Daily target is 1%-2% profit.\nMonthly 30%-40% profit.",
    author: "Nazmul  Hasan",
    authorPhoto:
      "/st/media/pim/media/user_photo/57/57c/57cd7c205627e1d916f967b8dccfaae6_2d545617c8be4af88ceaba5480929ff7.jpg",
  },
  {
    name: "Gold Day Reaper Pro",
    account: 110162838,
    description:
      "Chúng tôi giao dịch đều có dừng lỗ - cắt lời cụ thể.\nNên mọi khoản NDT hay kiểm soát tài khoản của mình.\nHướng tới bền vững ở thi trường",
    author: "BỦI THỨ",
    authorPhoto:
      "/st/media/pim/media/user_photo/f6/f65/f652ca8d89b54b32ec28ca2e94174661_78235d2e110b4770bcacb628f91308fb.png",
  },
  {
    name: "RELAX TRADING",
    account: 110162853,
    description: "Swing trade",
    author: "Huyền Vũ",
    authorPhoto:
      "/st/media/pim/media/user_photo/52/522/522d90291d297d5594ae3cbd7ab95aca_b5484b2a56a449f99ed2b354bbf5cb61.jpg",
  },
  {
    name: "Price Action",
    account: 110162859,
    description: "High Risk High Profit",
    author: "Shubhangi Gaikwad",
    authorPhoto: null,
  },
  {
    name: "Rockbull FX",
    account: 110162862,
    description: "Pure Trading",
    author: "RAVINDRA BHAROLIYA",
    authorPhoto: null,
  },
  {
    name: "An Toan - Ben vung",
    account: 110162903,
    description:
      "Giao dịch 02 chiều theo pp trung bình giá, chạy trên 04 cặp tiền : AUDCAD , EURUSD, EURGBP, USDCAD. Lot đầu tiên 0,01 , Rate 1.2, khoảng cách 35pip.",
    author: "THI PHUNG NGUYEN",
    authorPhoto: null,
  },
  {
    name: "Tiền chợ hàng ngày",
    account: 110162990,
    description: "Mỗi tháng lãi 10-15% là đủ tiền đi chợ",
    author: "Thị Thanh Bình Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/44/446/446a9be413eb48cdbe1104ca716ae29e_f74b94ac816c403cbf413fb018f0bfc3.jpg",
  },
  {
    name: "ThangChinhMinh",
    account: 110163037,
    description: "Stoplots 2%",
    author: "NGUYỄN LUẬT",
    authorPhoto:
      "/st/media/pim/media/user_photo/38/387/3873f057c18d075a2e7e7c0ad936ca2d_251e41fa38ea4a2d9f7617a4bc0e5e47.jpg",
  },
  {
    name: "Warrior1995",
    account: 110163051,
    description: "Target 1%/ngày",
    author: "DAI DUC VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/dd/dd9/dd96160be2c4e98a17ea3c2811a0400c_b878e8fa47694948b2bcab75e3ab6349.jpeg",
  },
  {
    name: "Goldzilla FX-1",
    account: 110163091,
    description:
      "Overbought-Oversold Trading Strategy\nOnly on Asia-Australia-Europe Market",
    author: "ERIC SETIOPRABOWO",
    authorPhoto:
      "/st/media/user_photo/c3/c32/c32526976b2f9e3e84829d96f67a1ab6_0140dfd2b00c42889404e8b9a7f13911.png",
  },
  {
    name: "HELDA AUTO TRADE",
    account: 110163120,
    description: "BOT NO 1 SUPER MM LONG TERM",
    author: "HELDA NUGRAHA",
    authorPhoto: null,
  },
  {
    name: "Islamic Strategy",
    account: 110163179,
    description: "Islamic Strategy 7th of October 2023",
    author: "Adam Shadid",
    authorPhoto:
      "/st/media/pim/media/user_photo/2e/2ea/2eabc9e2f122cc71acfe73e8c8d8d1ea_12c89c3d58f1487496accd03b61f32fa.jpg",
  },
  {
    name: "Market Anylsis",
    account: 110163188,
    description: "Must make a Profit in a Month",
    author: "MUHAMMAD FURQAN",
    authorPhoto: null,
  },
  {
    name: "Spot Trade",
    account: 110163193,
    description:
      "Trade on Spot with 87% winning Rate. With TP and SL, Risk Management is applied",
    author: "Jelyn Samillano",
    authorPhoto:
      "/st/media/pim/media/user_photo/49/49f/49fdeff9f2b4b2ccde65fa8f5e559be8_52c3d322dff34eb393e7b086ce56b33d.jpeg",
  },
  {
    name: "provietnam",
    account: 110163223,
    description: "provietnam",
    author: "thị mai Hương Vũ",
    authorPhoto: null,
  },
  {
    name: "Eagle Training",
    account: 110163233,
    description: "Trading with William Gan methods, time and price",
    author: "Mostafa Mesbah",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/86a/86a05bcb92b493e98e52d81e0fa4a1f0_52ff4be9590a42a09c6de0e356ba7a7e.jpg",
  },
  {
    name: "G-Scalping01",
    account: 110163248,
    description: "G-Scalping01",
    author: "sakda chanapat",
    authorPhoto: null,
  },
  {
    name: "Maket view",
    account: 110163342,
    description: "Chiến lược giao dịch an toàn lợi nhuận đều",
    author: "Nguyễn Diễm  Thơ",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e20/e20f5e31077ca45fdb0869caaca8d003_bcc3935de7784b40a7c3c037b02f204f.jpeg",
  },
  {
    name: "Baoooooooo",
    account: 110163346,
    description: "Earning money",
    author: "Bao Le",
    authorPhoto:
      "/st/media/user_photo/ec/ec5/ec50d202d5dc9aa23746e31822f7641c_0970c929e4964d77846bbf5a01bb5864.jpg",
  },
  {
    name: "Market Lion",
    account: 110163357,
    description: "等待突袭 一击必中",
    author: "Qi Qingcheng",
    authorPhoto:
      "/st/media/pim/media/user_photo/5e/5e4/5e492fde0e0a4ce4ae5e84d911749fce_07e1441e99384b15b6d88513691f1688.png",
  },
  {
    name: "Quyên GOLD",
    account: 110163389,
    description: "Chuyên gold",
    author: "Minh Dinh vu ngoc",
    authorPhoto:
      "/st/media/user_photo/12/12f/12f971a73f7b3715a871f66ad61851ca_0b075da30a9a424bb22d7cd5546f5a73.jpeg",
  },
  {
    name: "Forex Box",
    account: 110163411,
    description:
      "Copy us to earn royal income.\nLive life with carefree profits.\nYour earnings will continue to grow even while you sleep.",
    author: "MISHORI SULTANA",
    authorPhoto:
      "/st/media/pim/media/user_photo/25/254/25413645609b3c7623d8920fde44c877_f893f63e219c46b2b64d551887d35862.jpg",
  },
  {
    name: "Triumph_EA_Extra_24",
    account: 110163437,
    description: "Stab Profit",
    author: "Tran Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8a0/8a048fb947e3584e8a73063db07884b8_8739ff2a85bc4435b8d4d325144af047.png",
  },
  {
    name: "Smart concept trade",
    account: 110163454,
    description:
      "Scalping intraday swing trade monthly target 22% to 44%\nGBPUSD EURUSD Xauusd Btcusd",
    author: "zahid Hussain",
    authorPhoto:
      "/st/media/pim/media/user_photo/77/776/7761f4c4dcdf8d7c82691224d95305e6_21f7d20049b54014906a9a7d04a694fc.jpg",
  },
  {
    name: "THE  STAGE",
    account: 110163510,
    description:
      '"Earn as much as you can, save as much as you can, invest as much as you can, give as much as you can.”',
    author: "VIKRAM CHARAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/94/94e/94ecf5fb9e406712231d339fda276468_50d0a9952632439ca4ec5499e8bcb3f7.jpg",
  },
  {
    name: "IMBTCJACKSONWANGRUAY",
    account: 110163544,
    description:
      "หาเงินจ่ายค่ากาแฟ ค่าน้ำมันรถ ค่าน้ำค่าไฟ ค่ามื้ออาหาร (ไม่ใช้ BOT)",
    author: "Thanawat Chintananuch",
    authorPhoto:
      "/st/media/pim/media/user_photo/57/579/57923a65300524406e5d11565a6ce59d_6b14bc5f434d4bb794a7474f58563145.png",
  },
  {
    name: "Never Give up",
    account: 110163566,
    description: "Profit target is 30-40% per month.",
    author: "MD MAHMUDUL KARIM CHOWDHURY",
    authorPhoto:
      "/st/media/pim/media/user_photo/9a/9a7/9a7b78713129e1bba9c324eb00e7f1a1_0d7c0a98534f427687f865d4d08cec81.png",
  },
  {
    name: "Tomato Frog_EA",
    account: 110163581,
    description: "EA",
    author: "THANAWAT NGAMSANTIKUL",
    authorPhoto:
      "/st/media/pim/media/user_photo/d1/d19/d19ab4d4597b5daae4ab7b40ecd66fc3_b895a8c86c984ce1bfc7985504c3b452.jpg",
  },
  {
    name: "Fx Wiser_Team",
    account: 110163582,
    description: "Join us for guaranteed better returns",
    author: "Dhannjay Sharma",
    authorPhoto:
      "/st/media/pim/media/user_photo/83/836/836300f08231a26b49c2eb21279f66db_5e0af2b8b4e349498df57a9d7fa55d50.jpg",
  },
  {
    name: "FinTech-P01",
    account: 110163589,
    description: "Multi-currency pairs, random trading.",
    author: "有福 陳",
    authorPhoto:
      "/st/media/pim/media/user_photo/c3/c30/c30c2c310e923710bcacb50e61ccbaf8_c232ea3961ad4c81847cfec61c918d28_Cs80ca6.png",
  },
  {
    name: "Bona philippines 2",
    account: 110163598,
    description:
      "the purpose of human life is to serve,\nand to show compassion \nand the will to others.",
    author: "Bonie Afundar",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/694/69438a4070f5ff3a9c581ce03e4fdd6b_ae1e548662dd4204808f854439e2304d.png",
  },
  {
    name: "tradegoldpro",
    account: 110163599,
    description: "10 năm kinh nghiệp giao dịch xau/usd",
    author: "QUANG HA BUI",
    authorPhoto:
      "/st/media/pim/media/user_photo/93/930/930010fd30cf4e0830f0009c9841515b_e380f0d446e54e3d857c77b64dfcc6c5.jpeg",
  },
  {
    name: "Mastermind",
    account: 110163658,
    description: "Thu nhập thụ động",
    author: "QỤÁCH TRÚC",
    authorPhoto:
      "/st/media/pim/media/user_photo/37/376/376bd9f6d8f92fab985316c3b74329e2_1a768a857594417cb47552312f0d73e3.jpeg",
  },
  {
    name: "Pro gold st 02",
    account: 110163710,
    description:
      "Mục tiêu 1%/ngày \nAn toàn với SL, TP\nCặp giao dịch chính Xauusd, Btcusd, Eurusd, Gbpusd",
    author: "hung chien le",
    authorPhoto:
      "/st/media/pim/media/user_photo/b7/b74/b7448f079afb8b26fa674231a33df2e2_afb2b089ea5c4f09ab31dc19d6bcd546.jpg",
  },
  {
    name: "Shotgun strategy",
    account: 110163768,
    description: "Shotgun strategy",
    author: "ChuanHsun Chen",
    authorPhoto:
      "/st/media/pim/media/user_photo/f6/f63/f638ed3decef1cc55b884d6fa630a603_d68ed6d1b1e441919dfae06330b358d8.jpeg",
  },
  {
    name: "VN_MAKE MONEY",
    account: 110163869,
    description: "Daytrader",
    author: "LA HÁN",
    authorPhoto: null,
  },
  {
    name: "Trading  Life",
    account: 110163887,
    description: "TradingLife",
    author: "Anh Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/08/08a/08a9b800cd96a4b3acf3f6eec84019b7_fee55808e2e4469cb63c38e8ba75210b.jpg",
  },
  {
    name: "tôi có 1 triệu đô",
    account: 110163954,
    description: "tôi là người  chiến thắng",
    author: "XUAN THANH LE",
    authorPhoto:
      "/st/media/pim/media/user_photo/23/230/2306afa25d873f1e2345a84e952a13ce_d316c6bac22f4f178115faec24fb4da3.jpg",
  },
  {
    name: "Bahrain Gold",
    account: 110163991,
    description: "Trading Xauusd only with golden strategy",
    author: "Mohamed Meftah",
    authorPhoto:
      "/st/media/pim/media/user_photo/3e/3e6/3e640d1f3a5fc5590a9877344e13ff4c_f39dfd0a69dc4e6ea5d2d20a5ae1a785.jpeg",
  },
  {
    name: "AnggaProject",
    account: 110164215,
    description: "Target Profit 5%/Month \nCutloss Drawdown 9%",
    author: "angga anugrawan",
    authorPhoto:
      "/st/media/user_photo/d7/d77/d77bcf80f8b3f0e0210553f293e9bd13_98c36b6521a84a44bc9ed11032fcacb4.png",
  },
  {
    name: "Keep on winning A",
    account: 110164248,
    description:
      "This is really strong strategy! Your money will be doubled soon!",
    author: "SO ASAKURA",
    authorPhoto:
      "/st/media/pim/media/user_photo/07/071/0710ac4c34ba881465d43650c8fd507a_533e37559ded4ef7b4d27090e4dfdba8.jpg",
  },
  {
    name: "EA-TRADING-STOPLOS",
    account: 110164251,
    description:
      "My trading strategy is daytrading, EA has been programmed with stoploss, each stoploss is 1% of balance. Stable. sustainable profits",
    author: "Thanh Tung Bui",
    authorPhoto:
      "/st/media/user_photo/48/48f/48f21d47313ac44e21efa0177c9a860b_d23c69960ffd472f8340cf25a82cff31.jpg",
  },
  {
    name: "VN_USD_GBP_EUR",
    account: 110164297,
    description:
      "Tất cả các giao dịch của chúng tôi đều được xử lý tự động. AI sẽ tối ưu hoá mọi giao dịch để bảo toàn vốn và lợi nhuận của chiến lược.",
    author: "Phuong Nguyen thi thu",
    authorPhoto:
      "/st/media/pim/media/user_photo/81/813/813120f5b988b3997f420eb903fa080c_07a6a1695b994d2386ffb429f157363b.jpg",
  },
  {
    name: "FELIX TRADE",
    account: 110164345,
    description: "Chiến lược giao dịch an toàn và hiệu quả.\n20%/ month",
    author: "MINH HAI NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/25/254/2542ed89db0f22fba7570150ce2fb429_8225c81d82eb4b6d9a6e22cc7f7b0728.png",
  },
  {
    name: "Momentum Mastery",
    account: 110164403,
    description:
      "Unlock the secrets of successful trading with my proven Forex strategy – your shortcut to consistent profits in the currency markets",
    author: "Izat Ullah",
    authorPhoto:
      "/st/media/pim/media/user_photo/19/19c/19cf87496104ccdf05d20b84b42a4643_2f6d8cbc19fe4b01ada9043f913af251.jpeg",
  },
  {
    name: "激荡华尔街平衡点位入场法",
    account: 110164406,
    description:
      "严格按照日本蜡烛图技术\n精准点位平衡图形入场法\n月化收益30%-60%                                           回撤最大30%以内。                                          手工操作 欢迎跟单！",
    author: "亚清 王",
    authorPhoto:
      "/st/media/pim/media/user_photo/8f/8fc/8fcf246ec962f6b4129269d2775aa9fb_b9ec1a48b47440ab98677942d6a98788.jpeg",
  },
  {
    name: "METHER VAAS ITES",
    account: 110164413,
    description:
      "“In trading/investing, it's not about how much you make but rather how much you don't lose.”\n\n“Do more of what works and less of what doesn't”",
    author: "Vinay Kumar",
    authorPhoto:
      "/st/media/pim/media/user_photo/22/22c/22c36f442c08ffdbe9264cf1f86a74a5_02e7c69b78de44d0afc8ad9edb0d6cbc.jpg",
  },
  {
    name: "货币震荡对冲翻倍策略",
    account: 110164493,
    description:
      "跟单起步阶段，请选择存量订单较少时开始操作。以1000美元对应0.01手数进行布局，假如跟单时，本策略最小手数为0.03，则需要3000美元保证金。本人以收益最大化为目的，会不断进行盈利加仓，请慎重选择。",
    author: "彭 凤",
    authorPhoto:
      "/st/media/pim/media/user_photo/b0/b09/b0921bd26295befd088b34e3310e6e5e_27b5c160298446dda106ada5d6a0cce2.jpg",
  },
  {
    name: "Almosawifx-Auto",
    account: 110164498,
    description:
      "الناسخ الآلي بالروبوت\n\nمخاطرة منخفضة إلى متوسطة مع أرباح معقولة\nلا يوجد تعويض في حالة الخسارة\n\nInstagram: Almosawi.fx",
    author: "Fadhel Yusuf",
    authorPhoto:
      "/st/media/pim/media/user_photo/dc/dc7/dc7e2da754d6f619a93e8afa62a1db3f_a37d600087d3450bbb08422d25d763e6.jpeg",
  },
  {
    name: "Eurvndpro1",
    account: 110164582,
    description: "Tài khoản pro 2000$ tối ưu lợi nhuận😍😍😍",
    author: "VAN QUAN PHAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/aa/aa9/aa9cec764be205d6cbb583c40fa1062a_954f022283c44113bccbeba5e1b67b9e.jpeg",
  },
  {
    name: "Ultron V02",
    account: 110164775,
    description: "I'm here to help.\n\nTele : @Ultron24",
    author: "Tuan Linh Ninh",
    authorPhoto:
      "/st/media/pim/media/user_photo/2c/2cb/2cb1dade69af487a5442ec11c7cb26f0_1e8cd85a47a84cea9ce3361e6743ed77.jpg",
  },
  {
    name: "CA VOI FOREX VN",
    account: 110164819,
    description:
      "Chiến lược giao dịch quản trị vốn R:R 1-3\nKiên nhẫn chờ đợi entry đẹp ( Điểm vào A+ )\nTiền được sinh ra trong quá trình chờ đợi 💸💸💸",
    author: "Đào Văn Tâm",
    authorPhoto:
      "/st/media/pim/media/user_photo/28/284/284afcc972c5517d87e2a9dce40490f3_6e6909071a744452b4404be904f3b1b8.jpeg",
  },
  {
    name: "Up Finance Gold",
    account: 110164905,
    description:
      "Estrategia \nFazemos análise Gráfica e decidimos qual de nossas ferramentas usar para as operações. \nTodas as operações são feitas através de um Robô.",
    author: "Inocencio Pereira Reis Neto",
    authorPhoto:
      "/st/media/pim/media/user_photo/25/25d/25dbed1715314d6745e1914864f1c8f0_b08e6be2bc1c4c779bcb483c9bba60ae.jpeg",
  },
  {
    name: "10 percent per month",
    account: 110164936,
    description: "10 percent per month",
    author: "HOANG ANH NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/7e/7e7/7e78feeaf33c008aa127e4dbc6d41678_45872bcc1e9e47c3bde6cd6e998f24ba.png",
  },
  {
    name: "GIAPHAT No5",
    account: 110164951,
    description: "Trade with 5 currency pairs.",
    author: "Phạm Thái Doãn",
    authorPhoto:
      "/st/media/user_photo/70/701/7016095d7db40714feb6bd9a47943110_51c947ac19a34be6bf7f9572f4f88f98.jpg",
  },
  {
    name: "3ala Allah",
    account: 110164993,
    description: "Daily trading",
    author: "Ibrahim Elgendy",
    authorPhoto:
      "/st/media/pim/media/user_photo/29/295/29562c535e6e8e5676ee1fdf5adcc11c_bc428c1ba88b4b42aa6262810fca385f.jpg",
  },
  {
    name: "Velociraptor Robot",
    account: 110165021,
    description: "Sniper & Scalping",
    author: "MR NORACHAI TONGNOK",
    authorPhoto:
      "/st/media/pim/media/user_photo/72/726/7262ba23095265f4d403f577ee6c330e_4bdd2d5492bf467b9470df6d25106054.jpg",
  },
  {
    name: "FOREX WEALTH",
    account: 110165036,
    description: "Reliable and stable strategies",
    author: "SOKMENG ENG",
    authorPhoto:
      "/st/media/pim/media/user_photo/ab/abc/abca77ef452798354b869a9b3fe9732a_e64fbb0dec654f52af23e5f4275b8804.jpg",
  },
  {
    name: "Money matrix",
    account: 110165082,
    description: "I have 16 year experience",
    author: "Muhammad haroon Abdul haq",
    authorPhoto: null,
  },
  {
    name: "FM ULTRA TREND",
    account: 110165101,
    description:
      '"Hello, My strategy on the Forex market is simple, based to the technical analysis, My favorite pairs is GBPUSD based on scure hedging strategy.',
    author: "MANOJ  KAWADE",
    authorPhoto:
      "/st/media/pim/media/user_photo/55/555/555cf0743247fa99b71c06398fb23567_3e8713a053094b7e83db742d4f9c6ddc.jpg",
  },
  {
    name: "FX DRL Daily",
    account: 110165116,
    description:
      "Tập trung vào kỹ năng, tiền sẽ theo sau. \nKhông marketing hay đội nhóm, giao dịch tự do. \nKhi có lãi, luôn kéo SL về điểm vào. \nTarget/tháng: >= 30%",
    author: "THI CAM MI TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/16/16e/16e9994ff34e72fdb42c20b2b0a25302_b89c2aaf55c04a4a874fc284555ab617.png",
  },
  {
    name: "Demand_Supply",
    account: 110165118,
    description: "Buy and sell according to major players.",
    author: "ACTING SUB LT PONGPISIT WUTTIDITTACHOTTI",
    authorPhoto:
      "/st/media/pim/media/user_photo/b0/b0a/b0a68ee2bc33133900364e9a5163fb48_5e0b3203fbb44644966f744d105c4c80.png",
  },
  {
    name: "LeadPK_Long",
    account: 110165119,
    description:
      "Let the money work, Withdraw profit every day.\nMinimum Lot x1 Amount 20,000 Cent",
    author: "Phattharanun Yutthakraichaisri",
    authorPhoto:
      "/st/media/pim/media/user_photo/38/384/384158f169a84c21c3166868a3aec5fd_8e425b59b82940c5b37cb25e7b56e44d.jpeg",
  },
  {
    name: "Only profit",
    account: 110165131,
    description:
      "Hello investors, \n      I am work in forex market 10+ years. I am master 😎 in forex. My strategy work in technical analysis and fundamental.",
    author: "HIMANSHU YADAV",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f5e/f5e60754ec7ec2bf529c7a2f0fbed2a1_bc050df575ee433a864f8fe56c01a8aa.jpg",
  },
  {
    name: "Chiến lược triệu đô2",
    account: 110165174,
    description: "Part2",
    author: "VAN DONG BUI",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b98/b98be401ca316cb9cfbe1b6e9f394795_49538207101440a6b942690aa06e7b41.jpeg",
  },
  {
    name: "Ultron V03",
    account: 110165181,
    description: "Monthly profit from 10%\n\nTelegram : @Ultron24",
    author: "Tuan Linh Ninh",
    authorPhoto:
      "/st/media/pim/media/user_photo/2c/2cb/2cb1dade69af487a5442ec11c7cb26f0_1e8cd85a47a84cea9ce3361e6743ed77.jpg",
  },
  {
    name: "Giao dịch SMA",
    account: 110165192,
    description:
      "Kết hợp tứ trụ trong giao dịch: Xu hướng - Biên độ - Timing - Sóng",
    author: "VAN GIAP DAO",
    authorPhoto:
      "/st/media/pim/media/user_photo/29/295/29561e3da4b2511fcbd73698ea2e06f8_e98ae2a0dbca433b9dabe0508fc3ba23.jpg",
  },
  {
    name: "Eazy Twenty",
    account: 110165194,
    description:
      "- Trade by EA\n- Only EURUSD pair\n- Great MM \n- Grid method\n- Just focus on 15-20% Month\n- Patience is the key",
    author: "A SYAIFULFALAH",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1a6/1a6911a06172860204f4dea816a4dba3_347e1c9ee85844c5b467afbb7132daa2.png",
  },
  {
    name: "Royal prosperity",
    account: 110165225,
    description:
      "Investing is a journey of self-discovery. Its should be more like a marathon than a sprint .I want to be your marathon running partner. I want to make",
    author: "TANJIN ISLAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/4e/4e9/4e9b53f240aae785da4636a875864333_6180b7c41b8d4f778a83518aae76d38a.jpg",
  },
  {
    name: "Sói Xám Inv",
    account: 110165229,
    description:
      "My strategy is focus on stable, not for high return. Actually, I expect my profit is 10-20% monthly what is depended on my balance account",
    author: "MINH PHUONG LE",
    authorPhoto:
      "/st/media/pim/media/user_photo/3b/3bc/3bc383788a778544502315e55f363a2b_aab6d56951fa442b98735664d81b661a.jpg",
  },
  {
    name: "Little Farm",
    account: 110165238,
    description: "Analyze the price structure and use EA to help trade.",
    author: "MR WICHAI PASOOK",
    authorPhoto:
      "/st/media/pim/media/user_photo/a3/a31/a31e5595b591bdd35bcfb39e50a99faa_505a4c44a0ee467ca8b14de4f1098bf8.jpg",
  },
  {
    name: "RichardRich HighSafe",
    account: 110165246,
    description:
      "High Return & Safe strategy was executed & managed by Richardrich's Pro Traders. Max DDD <9%. Just rich, safe, to be free!",
    author: "HOÀNG PHÚ",
    authorPhoto:
      "/st/media/pim/media/user_photo/2f/2fb/2fbfa0f4309f9532d99b04a5352e7145_fdbaa8d2a9074b5db6fcb7d7150726db.jpeg",
  },
  {
    name: "Gold Tamer",
    account: 110165275,
    description:
      "After a long time of testing and improvement, XAUUSD trades could be made less risky and more profitable.",
    author: "Zainab Talaq",
    authorPhoto:
      "/st/media/pim/media/user_photo/a7/a71/a71d52755de2ceb7f00d467212a50791_b3328b05380641ef8f60ac621fcfa10f.jpg",
  },
  {
    name: "CHIẾN BINH 200-5000",
    account: 110165286,
    description: "vốn 200USD có thể lên 5000USD trong vòng 3 tháng",
    author: "VƯỚNG KHẢI",
    authorPhoto:
      "/st/media/pim/media/user_photo/ac/ac8/ac8c558966f69d4176c9234d6db3406b_d39caee510264dbabad122969d50f3c6.jpg",
  },
  {
    name: "Euro AI scalping",
    account: 110165310,
    description:
      "This strategy works on AI based analysis and gives around 50% to 100% in a month",
    author: "IQRA USMAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/55/55c/55ca0b4a70a0ef06366e4dd462f9e19e_1ee70217ce194bc6b1caf23a1e8ef1d6.jpg",
  },
  {
    name: "Mì tôm nhân thịt",
    account: 110165332,
    description:
      "- Anh chị em cần hỗ trợ vấn đề gì liên hệ Sdt/zalo :0706666012\n-Chiến lược bảo toàn vốn và gia tăng vốn siêu lợi nhuận",
    author: "Tam Doan",
    authorPhoto:
      "/st/media/pim/media/user_photo/06/068/068d3ede59edeb302048778f641fb0d1_70580b47f6bb427cbffe54d8752f2219.jpg",
  },
  {
    name: "Tcoin FX 03 - Auto",
    account: 110165363,
    description:
      "Đây là tài khoản giao dịch tự động bằng EA.\n Mức độ sụt giảm tài khoản tối đa <20%.\n Nên copy tối thiểu bội số 505$ (505$,1010$,...,2020$,...,50.500$)",
    author: "Toan Nguyen Huu",
    authorPhoto:
      "/st/media/pim/media/user_photo/d4/d4d/d4df8a2342f9bd1fb519445a5b8267a5_b000e27cf0c5413eb0288e30f9d55a20.jpg",
  },
  {
    name: "TOGETHER GROWTH 338",
    account: 110165367,
    description:
      "Algo Trading with Technique Swing, Scalping tiktok, Market trending overbought oversold with custom indicator.",
    author: "THOMAS EDISON",
    authorPhoto:
      "/st/media/pim/media/user_photo/eb/ebf/ebf9b2ada26ef8f4b055ca3568e9ba3d_0cec6ae35aa94f469e9ebcccae947073.png",
  },
  {
    name: "Ultimate Pro",
    account: 110165478,
    description: "Estrategia manual, estable y con muy buenos rendimientos",
    author: "Jose Angel Gonzalez Bejos",
    authorPhoto:
      "/st/media/pim/media/user_photo/13/139/139f699fab6495cee44a91e1294865e8_b66f10d89ed24a8aa09dd37c4cbd0e0c.png",
  },
  {
    name: "Ta-Ling-Ping v2",
    account: 110165533,
    description: "Smile & Go",
    author: "Sakolporn kreethapun",
    authorPhoto:
      "/st/media/pim/media/user_photo/89/89d/89dfb7e29b643762823cbc64f9bf0513_759d7ceee54c44a0b84a99e2e1e0d581.png",
  },
  {
    name: "Serok Emas 5 Titik 1",
    account: 110165561,
    description: "Serok Emas 5 Titik 1",
    author: "LIM TONNY",
    authorPhoto:
      "/st/media/pim/media/user_photo/bd/bd7/bd7cda663983200a2ee4827de3362b5b_4f798c581f47417282b6c637e388def7.jpeg",
  },
  {
    name: "The Clown",
    account: 110165571,
    description:
      "Consistent Profit And Every trade is protected with 250 pips SL",
    author: "FIKTOR MEKO",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c24/c24a3858aa077f6203d7d7a336be1908_d50f57b741894c7ab53b71f793773194.jpg",
  },
  {
    name: "swingTraderV2",
    account: 110165573,
    description:
      "Daily and weekly trades following trend to generate more profit, patience is the key.",
    author: "abdelkhalek behja",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/ae1/ae136ab3250aee57ab53a0d35398c9e2_769c9b6fe12b4cbe84062f19ab53a3db.jpg",
  },
  {
    name: "Serok Emas 5 Titik 2",
    account: 110165578,
    description: "Serok Emas 5 Titik 2",
    author: "LIM TONNY",
    authorPhoto:
      "/st/media/pim/media/user_photo/bd/bd7/bd7cda663983200a2ee4827de3362b5b_4f798c581f47417282b6c637e388def7.jpeg",
  },
  {
    name: "Serok Emas 5 Titik 3",
    account: 110165585,
    description: "Serok Emas 5 Titik 3",
    author: "LIM TONNY",
    authorPhoto:
      "/st/media/pim/media/user_photo/bd/bd7/bd7cda663983200a2ee4827de3362b5b_4f798c581f47417282b6c637e388def7.jpeg",
  },
  {
    name: "Serok Emas 5 Titik 4",
    account: 110165596,
    description: "Serok Emas 5 Titik 4",
    author: "LIM TONNY",
    authorPhoto:
      "/st/media/pim/media/user_photo/bd/bd7/bd7cda663983200a2ee4827de3362b5b_4f798c581f47417282b6c637e388def7.jpeg",
  },
  {
    name: "Serok Emas 5 Titik 5",
    account: 110165601,
    description: "Serok Emas 5 Titik 5",
    author: "LIM TONNY",
    authorPhoto:
      "/st/media/pim/media/user_photo/bd/bd7/bd7cda663983200a2ee4827de3362b5b_4f798c581f47417282b6c637e388def7.jpeg",
  },
  {
    name: "Price explosion mac2",
    account: 110165609,
    description: "The trading account of the strategy works without swaps",
    author: "mohamed  saeed abdelfattah hussien",
    authorPhoto:
      "/st/media/pim/media/user_photo/d1/d11/d119b8ea96339facba5c25f24ae8f3a1_3e6bf94b709b460daa4f408822ea9ca8.jpg",
  },
  {
    name: "NISH 1 day 1 percent",
    account: 110165613,
    description:
      "WE FOCUS ON GBP EUR USD MARKET AND WE ABLE TO GIVE CONSISTANT PROFIT",
    author: "Rifa TK",
    authorPhoto:
      "/st/media/pim/media/user_photo/52/520/520fa731bc3bd88e1af95e130597caa6_9757d6d3371c4d089d0b2639eb1aa4a1.png",
  },
  {
    name: "Zainab TraderZ",
    account: 110165614,
    description:
      "Dedicated to delivering consistent results while managing risks for you.",
    author: "MUJIBAR RAHAMAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee2/ee2c4223979d23043562b6128c107f0b_bf2d31ec1b0b4c6fad585d030bd1c475.jpg",
  },
  {
    name: "The FearLess",
    account: 110165622,
    description:
      "Based on the modes and techniques of the market avoiding fear and emotions while trading.",
    author: "Waheed Ullah",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8a1/8a1e1385f959e70513db2549e1c6ed58_96fb165a435741f5a9a10c44aa339531.jpg",
  },
  {
    name: "Gold Miner",
    account: 110165670,
    description:
      "Earn money while sleeping 😴 💰 💰 profit targit 20% +  monthly",
    author: "sukhjinder grewal",
    authorPhoto:
      "/st/media/pim/media/user_photo/6f/6f3/6f3b5d75e8d5d16c4842f0b182fbe396_923e2395133e4a8599845ff0509a4fc4.jpg",
  },
  {
    name: "HungTrading Eu V2",
    account: 110165739,
    description:
      "Proved by results.\nTrading with low risk\n10-15% per month.\nContact\nTelegram https://t.me/dinhhungdigital",
    author: "THI THAM NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/46/46d/46d0280340ca8d152fe281aaacd5b74a_8926473dd316421b9794e5f22f853d8e.jpg",
  },
  {
    name: "Gold scalper",
    account: 110165969,
    description: "My strategy is based on SMC",
    author: "SHERZOD TUKTAKHUJAEV",
    authorPhoto:
      "/st/media/user_photo/de/dea/deabfb67938c3cfdd3f501dd533518e6_f9a46fde03ab45daad70348e4dae801e.jpg",
  },
  {
    name: "VN INVEST",
    account: 110166004,
    description:
      "Quản lý rủi ro là ưu tiên hàng đầu, lợi nhuận là vấn đề thời gian\nzalo : 0976476939\ntiktok : https://www.tiktok.com/@vinvest93",
    author: "VAN VIEN CAO",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cb6/cb60879cd6454b354656243cfc54e24e_955fecbdf0bd4a0ca3686f0be5021ca8.jpg",
  },
  {
    name: "Support fibno Resist",
    account: 110166094,
    description:
      "This is trend based strategies  used in support resistance with Fibonacci",
    author: "AMSAVENI Palanisamy",
    authorPhoto: null,
  },
  {
    name: "The mysterious power",
    account: 110166124,
    description: "The mysterious power",
    author: "焦 坤",
    authorPhoto:
      "/st/media/pim/media/user_photo/83/83a/83a397f4e6a11e98222bcac3ab1d48bf_66e61d189e08470cba6bbb39ff34a07d.png",
  },
  {
    name: "AN GIA FUND",
    account: 110166146,
    description: "QUỸ AN GIA",
    author: "THI QUYNH THU LUU",
    authorPhoto:
      "/st/media/pim/media/user_photo/8a/8a4/8a46c5824a5718953991285fe45e50fa_01c7f983056249dda23c13767f76c510.jpeg",
  },
  {
    name: "Tại khoản x5",
    account: 110166148,
    description: "100%",
    author: "Hiền Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/ea/ea4/ea4f063380e573d2b6eaf02fc054e527_82bc339fd5354b1a9dd56cffd3dca965.jpg",
  },
  {
    name: "Make daily secure pr",
    account: 110166155,
    description: "Safe and secure",
    author: "Durgesh Maurya",
    authorPhoto:
      "/st/media/pim/media/user_photo/3d/3d7/3d743fd8e7bf2c7d7bd8e067de64f45b_2cd3fcf0ad09486fa4a8c5e42adc153b.jpg",
  },
  {
    name: "T19 Capital",
    account: 110166164,
    description:
      '"Tôi có hơn 9 năm kinh nghiệm trong việc viết mã và phát triển các hệ thống giao dịch. Với mục tiêu giao dịch an toàn',
    author: "PHAM VU THUAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/452/45276419883d19a0325912212ed8f2d0_5db58e621e9c405d913e3de013a26476.png",
  },
  {
    name: "LuckyLucky",
    account: 110166199,
    description: "Golden",
    author: "ANH TU NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/865/8654e1bf3942f3f7925874661e35d493_fcbea5abe8db46519a8328858c573512.jpeg",
  },
  {
    name: "Martingale MM Method",
    account: 110166232,
    description:
      "Use martingale with MM.  Focus on EURUSD pair only. The concept is to gain 20% per year on maximum 15% of DD. Maximum lot size is 0.06 per $1000.",
    author: "MR AWIRUT JONGJAROEN",
    authorPhoto: null,
  },
  {
    name: "MUNSKÍD_23",
    account: 110166280,
    description:
      "Volume an toàn thích hợp NĐT lớn\n- Min 2000$ - Set Tỷ lệ với quỹ của tôi\nChỉ 6 cặp chính: AUDCAD, NZDCAD, AUDNZD, \nZalo : 035.49.50.282",
    author: "Phuong Tran Van",
    authorPhoto:
      "/st/media/user_photo/ae/ae7/ae722ff7294740226273ab378cedaf9e_97d4e0b7b81241dfb2fa88a20168ae14.jpg",
  },
  {
    name: "Empire Market Turbo",
    account: 110166299,
    description:
      "My copy trading service allows you to automatically copy my trades, potentially monthly returns of 15% to 20% Telegram - https://t.me/Empire_Mrkt",
    author: "Saeem Shaikh",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee6/ee633956b1c7eb6dc614273c65b83312_e638acb01d844a058c7ebda9dce2937a.jpg",
  },
  {
    name: "Empire Market Ultlow",
    account: 110166307,
    description:
      "My copy trading lets you automatically copy the my trades It can yield month return of 3% to 6% or more Follow on telegram- https://t.me/Empire_Mrkt",
    author: "Saeem Shaikh",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee6/ee633956b1c7eb6dc614273c65b83312_e638acb01d844a058c7ebda9dce2937a.jpg",
  },
  {
    name: "SNOW WOLF  VNS",
    account: 110166311,
    description:
      "Safe - discipline\nStable profit from 3 - 5%/month\nWin - win",
    author: "THANH TRIEU TO",
    authorPhoto:
      "/st/media/pim/media/user_photo/1c/1cd/1cd07b882f7e1b5d9509d12c0449e6ab_46766c08a6b54e928e72de0ac2916c2c.jpg",
  },
  {
    name: "GBPUSD MANUAL",
    account: 110166423,
    description:
      "UNA OPERATIVA PARA CUENTAS PEQUEÑAS CON POCO RIESGO Y OPERADO POR TRADERS PROFESIONALES",
    author: "Michael Alexander Maldonado Arevalo",
    authorPhoto:
      "/st/media/pim/media/user_photo/9f/9f4/9f4cb8ffbff4d057a84ab79a7cabfc80_2b80e45d00d5456785b0a0e8f8512aab.jpeg",
  },
  {
    name: "CFO business club",
    account: 110166490,
    description: "Follow CFO strategies and make friends",
    author: "YI-LONG CHANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/5f/5f4/5f4bde41963e5fe30279d104780b318c_c8ce5306b14040f8a4ff8ffc680d42dc.jpg",
  },
  {
    name: "Unicorn-Forex",
    account: 110166714,
    description:
      "Copy trade safely EUR.USD \nhttps://minanguyenfx.com/\nhttps://t.me/UnicornForex_Copy\nTelegram: ThaoVy_N\nContact : 0792706309 ( Zalo/ WhatsApp)",
    author: "THI THAO VY NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a8/a85/a857facc6ce5a95f1395379f1e586fc3_efac1e580edc43048471428d5320a6aa.jpg",
  },
  {
    name: "Dhammajati Trade-V11",
    account: 110166739,
    description:
      "Use truth of Dhammjati 3 things to trade on H4 & D1 by medium to long term trading",
    author: "ภากร ฟุ้งพิมาย",
    authorPhoto:
      "/st/media/pim/media/user_photo/cf/cfd/cfd50bd2d70993a9d3ee53f6a7b44cf7_b96b009ffd6f4f1e97b0fdbe6b497f0f.jpg",
  },
  {
    name: "TBT-FINALCIAL INVEST",
    account: 110166922,
    description:
      "5 năm kinh nghiệm crypto và 3 năm forex chuyên trade vàng, lợi nhuận đều ko đột biến , an toàn là ưu tiên hàng đầu theo time dài hạn daytrading",
    author: "BAO TRUNG TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cb8/cb8d3a3109918788a1a244b48c36b4df_0d70862d4099461c84874489d42ed3ce.jpg",
  },
  {
    name: "Boy one Champ",
    account: 110166928,
    description: "Giao dịch Vàng",
    author: "HOÀNG ĐỨC",
    authorPhoto:
      "/st/media/pim/media/user_photo/27/27a/27a1f102683059e1d9d4c5cc8aa0c0a0_78bab07dead34679a365b622e13c5109.jpg",
  },
  {
    name: "chetan patel",
    account: 110166929,
    description:
      "We manage your account day and night so that you get your profit back which you have given me for investing. This approach is called a hands-off appro",
    author: "chetan patel",
    authorPhoto: null,
  },
  {
    name: "LuuChiToan",
    account: 110166985,
    description: "EU",
    author: "Hiền Lưu Đắc",
    authorPhoto:
      "/st/media/user_photo/5a/5a9/5a99af524f1148a53810de5e78a0579c_312eec79c20d4fcda754fbc475640623.jpg",
  },
  {
    name: "Tiền đi chợ",
    account: 110166995,
    description: "Kiếm tiền đi chợ hàng ngày",
    author: "Nhân Nguyễn Thành",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/86f/86f4e0fe61d92b0a1ff48a7bd35b332d_413e65bfd7204c749a6bfd26ca19b2aa.jpg",
  },
  {
    name: "500U起步黄金日内稳健收益交易",
    account: 110167006,
    description: "每月10%以上收益，只求稳定，不求一夜暴富",
    author: "黃 振忠",
    authorPhoto:
      "/st/media/pim/media/user_photo/f6/f68/f688dc7571d3f4d86970855fb33d232f_088a190eba7740ed9ca113064589e021.jpg",
  },
  {
    name: "Scalping ngắn hạng",
    account: 110167037,
    description:
      "Sử dụng volume profile kết hợp Kháng Cự Hổ Trợ Cộng thêm phương pháp SMC \nTỷ lệ RR : 1/2 \nMỗi lệnh đi 1% tài khoảng \nTỷ lệ chiến thắng 80%",
    author: "Hiền Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/2d/2df/2df9bc864badad279c9ff0632cb49864_ff2e09bca8064dc2b7db7f3d51887bfe.jpg",
  },
  {
    name: "StarTrade82",
    account: 110167047,
    description: "I have more than 10 years  (+ 84) 0984296355",
    author: "Nguyen Tuan",
    authorPhoto:
      "/st/media/pim/media/user_photo/36/364/36416ead31131edaa68cee900e11b8c7_41a16a32f3fa4223aacbacb05a3a6a51.jpg",
  },
  {
    name: "Wiki Strategy",
    account: 110167049,
    description: "Low risk strategy with excellent profits",
    author: "Majed  Kasem",
    authorPhoto:
      "/st/media/pim/media/user_photo/01/01a/01a533c5fc7adbf6b3efd2ce5a277f55_3dc68cffae8e4122a575155686be9fd2.jpg",
  },
  {
    name: "QuíckPip Guard",
    account: 110167058,
    description:
      "Unlock the power of QuíckPip Series with a 99.44% win rate. Transform your trading journey with exceptional success and unmatched precision.",
    author: "Hữu Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/38/38a/38a05260e46577c8ed0a6182209c33fd_6d5bccfa38764b99b36c9d71352b1130.png",
  },
  {
    name: "QuickPip Venture",
    account: 110167059,
    description:
      "Unlock the power of QuíckPip Series with a 99.44% win rate. Transform your trading journey with exceptional success and unmatched precision.",
    author: "Hữu Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/38/38a/38a05260e46577c8ed0a6182209c33fd_6d5bccfa38764b99b36c9d71352b1130.png",
  },
  {
    name: "Forex safe profit",
    account: 110167105,
    description:
      "Make good profits with a very safe strategy only for you do not hesitate on following us welcome.",
    author: "Wafae ERROUIS",
    authorPhoto:
      "/st/media/pim/media/user_photo/ff/ff0/ff0a93c668f07ae70b27e967604fd9c3_c1a4ca0e77cc43de9387cc9a27f93d24.png",
  },
  {
    name: "Fx Trading",
    account: 110167111,
    description:
      "Através de análise robusta, buscar alvos financeiros próximos de 10% mensal.",
    author: "Calebe  Ribeiro Souza",
    authorPhoto:
      "/st/media/pim/media/user_photo/74/74e/74e6a5b381e4341d487a330e1fac6ba3_c687a7656f8a431e9d4188ba770c00b3.jpeg",
  },
  {
    name: "TRADERPSY GURUKUL",
    account: 110167188,
    description:
      "SMALL BUT SWEET PROFIT , PROFIT GAIN CONSTANT, \nI AM FROM INDIA , 8 YEARS TRADING EXPERIENCE.",
    author: "Pramod Yadav",
    authorPhoto:
      "/st/media/pim/media/user_photo/20/201/20179fc7cc8b3b386cd4de826895c033_9ac6e1bef83c465c835e0b9c642631d4.png",
  },
  {
    name: "Vu Hedge EA",
    account: 110167192,
    description: "Hedge Scalper Strategy",
    author: "Vu Nguyen Huu",
    authorPhoto:
      "/st/media/pim/media/user_photo/6c/6c8/6c81023c67ce758162e1aaeb6d6820e8_fc894eb3e6624a1bb65b83e694e2d919.png",
  },
  {
    name: "Oooooooo123",
    account: 110167226,
    description: "Hi",
    author: "lien tran",
    authorPhoto:
      "/st/media/user_photo/d4/d43/d433034a867ce83d5cb7bfb028c48f3d_8af73fd6f0d644089d787a3942d2bf2b.jpg",
  },
  {
    name: "Digitgurus Trading",
    account: 110167230,
    description:
      "Monthly profit 5 to 10% for sure.\nJoin our Telegram channel\nhttps://t.me/Tradingwithdigitgurus\nWhatsapp me 918275441162",
    author: "Pitambar Mali",
    authorPhoto:
      "/st/media/pim/media/user_photo/e4/e45/e450b54b8360a4677cfac48720ef6de5_7a0aa9e65f7f42149400bda90106c090.jpg",
  },
  {
    name: "K Phú Định",
    account: 110167250,
    description: "Go a long time and far\nThat's all",
    author: "QUAN KHOI TRUONG",
    authorPhoto:
      "/st/media/user_photo/48/482/482d585caeb505d2ce4ad05003204ce1_8c81657d496046718aa5ed946bac5170.jpg",
  },
  {
    name: "KARAWANG ROBOT EA",
    account: 110167258,
    description:
      "Trading menggunakan robot (EA) dengan strategi Averaging dengan empat mata uang yang diperdagangkan, Saran deposit  $100 atau lebih besar.. salam ..",
    author: "KAMAL PRIHANDANI",
    authorPhoto:
      "/st/media/pim/media/user_photo/44/447/447f3c6ec61c180efde44202d44e2927_daa645579e7c4fe7bdd6b5ea1fe69cc3.jpg",
  },
  {
    name: "1 Percent Every Day",
    account: 110167272,
    description: "The average profit is 1% per day",
    author: "TRUNG THUY NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/6c/6c7/6c79010b3d45819e8d718df1dbb8f65d_54b1c410a15c4573b9d780bbae831451.jpg",
  },
  {
    name: "Gold Scalping",
    account: 110167278,
    description:
      "Chỉ giao dịch Vàng, mỗi lệnh SL = 2% tài khoản; 1/2 chốt RR=1; 1/2 để trailing",
    author: "Le Tung Lam",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f82/f82ca4408db1cb1fe1cf56f2a9e82b81_435d3fdbb8d64f2287f48c269c93af35.jpeg",
  },
  {
    name: "Money Honey Ea Bot",
    account: 110167280,
    description:
      "we create bot Smart hedging and scalping ea, every week withdraw your money\nweekly we generate more then 30% profit",
    author: "Ketan Rafaliya",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f86/f861e8ecbf67c0413d768660163d895d_62ad05c5268443969f12a64916b7b044.jpg",
  },
  {
    name: "Growth Horizon EE",
    account: 110167286,
    description: "Directional with TP SL",
    author: "MR SIRAPAT THUAMPHIWTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/ba/bac/bacc4860df3b7449cc5af802c64e9edd_2e878d2f255d40e798d2f21adc7ce070.jpg",
  },
  {
    name: "Trading Workshop",
    account: 110167302,
    description:
      "Simple Moving Averages\nWaves\nAccurate Calculations\nPrecise Entry and Exits",
    author: "NNACHEBE NNAMANI",
    authorPhoto: null,
  },
  {
    name: "Goldfundamental1",
    account: 110167331,
    description: "Goldfundamental1",
    author: "Muhammad  Ahmed",
    authorPhoto:
      "/st/media/pim/media/user_photo/43/439/439bfc9348e2be8da144fdb1ead1dabe_64b751c0c68d453c98c2a69ceef68170.jpeg",
  },
  {
    name: "H CAPITAL SMC",
    account: 110167337,
    description:
      "Trade according to the SMC method.\nOrder limit 100%\nHcapital is managing investments in Da Nang and Hanoi. Transaction office in Hoa Xuan Da Nang",
    author: "THI PHUONG THAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/6d/6d0/6d040643cefc68a0d8056e52a94663a1_f740d07f035d49b58222a1393da682e7.jpg",
  },
  {
    name: "TradingTwist Premium",
    account: 110167343,
    description:
      "This fast scalping strategy, built on principles of (ICT) methodologies, has demonstrated a proven track record over the past for 4 yes with 15% DD",
    author: "محمد زاہد",
    authorPhoto:
      "/st/media/pim/media/user_photo/42/420/420e3fa6ed2e89832cd80f5ccc6d6941_f9c472b46faa4ecfbe1074b1b3b08f98.jfif",
  },
  {
    name: "ARCH ANGEL OF GOD",
    account: 110167395,
    description:
      "I have more than 9 years experience in forex with 34,000 dollars made from 0.01 lots from 2019 to 2023, invest and smile to the bank monthly",
    author: "IBIFUBARA HALLIDAY",
    authorPhoto:
      "/st/media/user_photo/07/074/074aa1a97bef96a05a7c5fe13f55abff_b7a3e140006c4a2986cd39ed7edded65.jpg",
  },
  {
    name: "K Trading No Grid",
    account: 110167417,
    description: "Safe trading style, profit target of 50%/month. max risk 30%",
    author: "Tuan Phan Anh",
    authorPhoto:
      "/st/media/pim/media/user_photo/fa/fa3/fa31e043688b2c0080d364ab53e3270f_11acaa5c95134622a1e99171b599785a.jpg",
  },
  {
    name: "Subhan_Trader",
    account: 110167443,
    description: "Monthly 3x Easily In Sha Allah❤️",
    author: "MUHAMMAD SUBHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/c5/c52/c52b7ecba285ba0b898a9101baeb2412_3869ce9d255842c39e179cc8887172fd.jpg",
  },
  {
    name: "Dailydollar",
    account: 110167564,
    description:
      "Our trading earns YOU dollar on a daily basis with our Superb Eliot wave strategy. \nWe maintain maximum drawdown to secure your fund. Join us now",
    author: "SAKIRU OTUNBA",
    authorPhoto:
      "/st/media/pim/media/user_photo/ef/ef5/ef5b2a9a15707e9c5be798c4f2ee3a46_1a2d63f6eae74faa91fc226880758dee.png",
  },
  {
    name: "Cash Flow Creators",
    account: 110167569,
    description:
      "Automated forex strategy with tested robots . Precision execution for profitable, hassle-free trading.",
    author: "PRATHAMESH PETHKAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/db/dbd/dbde423024b3e4aebc11dde1a5c1b814_58fc6e1f8f0b4cca802c72075dfb2938.jpg",
  },
  {
    name: "THE STAGE",
    account: 110167596,
    description:
      "We Will Give You More Than 1% Profit Every Working Day.\n(Our Team Works Four Days In A Week)\nThis Is STAGE PRIME'S Promise To You.",
    author: "VIKRAM CHARAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/94/94e/94ecf5fb9e406712231d339fda276468_50d0a9952632439ca4ec5499e8bcb3f7.jpg",
  },
  {
    name: "Pro Comeback",
    account: 110167606,
    description: "Pro Comeback",
    author: "Tuấn Vũ Minh",
    authorPhoto:
      "/st/media/user_photo/ac/ac0/ac0ed39607207644c216f0eb44d76d14_404f9bf9b7d444d2a122c7295a8c1e84.jpg",
  },
  {
    name: "EA Asuka High",
    account: 110167620,
    description:
      "I want to reach the  of success in the forex market and to give the profit to all those who are my followers and investors with max drawdown < 30%",
    author: "RONY DARMANTO",
    authorPhoto:
      "/st/media/pim/media/user_photo/3f/3f3/3f3e4f181bf4e33df7fcb38daab80ff0_0ae5bf86ebd24a1fa4412e285c1ad601.png",
  },
  {
    name: "SUPER SONIC",
    account: 110167623,
    description:
      "trend following, range trading, or breakout trading. Traders who choose this type of trading style need patience and discipline.",
    author: "Qurrat Ul Ain Toor",
    authorPhoto: null,
  },
  {
    name: "Pony Express",
    account: 110167628,
    description: "profitable trade with currency, using simple math",
    author: "EFFI SENTOSA",
    authorPhoto:
      "/st/media/pim/media/user_photo/ca/caf/caf36bea412d352d0b824009994ad40c_d76976a686aa43f3abad2c0cb62a7d04.jpg",
  },
  {
    name: "QUYNHAKA_EA",
    account: 110167630,
    description:
      "Enter order D1 and Close according to currency pair and total amount. Hold for days, not weeks.",
    author: "THI KIEU TRANG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/1d/1d9/1d9b13fe382e413e2a7e0024bf312679_e681b85904e54c35821b4ef891c1cbba.jpg",
  },
  {
    name: "稳定盈利多货币对冲策略",
    account: 110167653,
    description:
      "本策略采用多货币对冲稳定盈利，历史2年多研发，目前实盘跟单资金规模700万美金，月化收益率20%-25%，多重技术指标判断方向小仓位远距离加仓兼顾平衡率，风险小且稳定。",
    author: "小筱 石",
    authorPhoto: null,
  },
  {
    name: "Hedge Fund Manager",
    account: 110167707,
    description:
      "Welcome to safe & secure Hedge Fund Management. Over the years I have managed large funds for high networth individuals, corporations & governments.",
    author: "H.E. Dr Simon  Rosenberg",
    authorPhoto:
      "/st/media/pim/media/user_photo/bf/bf9/bf9dcba804d17c51470bd0cfe3ac183c_add2336be02348538bb580118fc6990e.jpg",
  },
  {
    name: "Sam Son Beach",
    account: 110167808,
    description: "Chiến lược lợi nhuận 5-10%/tháng",
    author: "THU TRANG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/10/10c/10c52e390c99509b4001e1f5d846091c_b534e74b7de9447097e59d54e6d97af0.jpg",
  },
  {
    name: "LEO INVESTMENT 2",
    account: 110167844,
    description: "LEO INVESTMENT",
    author: "Tan Nguyen Thanh",
    authorPhoto:
      "/st/media/user_photo/39/39a/39aeac83fc30c23b741684667cf84562_84ff78b6c33d4e22ba176ec2b467987c.jpeg",
  },
  {
    name: "DucvotradingNo1",
    account: 110167917,
    description:
      "giao dịch ngắn hạn và dài hạn cùng chuyên gia quỹ vàng tỷ lệ winrate trên 70%",
    author: "SY DUC VO",
    authorPhoto: null,
  },
  {
    name: "HA LONG BAY",
    account: 110167946,
    description: "Lợi nhuận 10-20% Tháng",
    author: "Tùng Đỗ",
    authorPhoto:
      "/st/media/pim/media/user_photo/0c/0cd/0cd46646028063d2c8c478782725c556_67b791dabac942279d246a84ff9a3457.jpg",
  },
  {
    name: "FOREX TRADING",
    account: 110167954,
    description: "Swing Trade.\nProfit Target is 20% to 30% per month.",
    author: "SHASHI BALA",
    authorPhoto:
      "/st/media/pim/media/user_photo/66/66e/66eaec3375fa965f184fe80c0246235c_1b99ecaf45d742bf887f5b58b5f3e141.jpg",
  },
  {
    name: "Forex_trading",
    account: 110168055,
    description: "Hello friends",
    author: "RAMKUMAR HALDKAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/ef/ef1/ef1324953f0986fabaa45a35797786a9_5c539a78dbd14ce99dd92a3ba0d2464f.jpg",
  },
  {
    name: "BaimTest001",
    account: 110168088,
    description: "Test compounding",
    author: "ALFRED SUHARLY",
    authorPhoto:
      "/st/media/pim/media/user_photo/cd/cd7/cd7c1515b17fdfc22461d64d182df417_1fe71de4af414b229657f0f6a745106e.jpeg",
  },
  {
    name: "GODSPEED FX-PRO",
    account: 110168113,
    description:
      "GU EU start 0.01\nH1, avg 20 pips, marti 1.5\nSL 150 usd per pair",
    author: "KHO LIDYA WIJANARKHO",
    authorPhoto:
      "/st/media/pim/media/user_photo/65/65a/65a25c26b9dfc47d6ea556cf7f97152b_4ad3e8f1e714404eb3af47bc4a0bde76.jpg",
  },
  {
    name: "Đi Theo Xu Hướng Giá",
    account: 110168140,
    description:
      "Giao dịch dựa vào xu hướng giá và điều chỉnh vol hợp lý, kiểm soát tâm lý giao dịch.",
    author: "Cuong Pham",
    authorPhoto:
      "/st/media/pim/media/user_photo/ba/ba4/ba4844c0f7f519a22f98b6e501c495b9_0907476da50145fba7d93b6961b72f19.jpg",
  },
  {
    name: "Gold Space",
    account: 110168154,
    description: "Stable + Strong + Safe",
    author: "MISS PARICHAT NISSAYAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/8c/8c5/8c5595f3c84d5dbc6b15151c9671e70e_5571d5cd08e3476a9852ca8cf5a2a1a6.jpeg",
  },
  {
    name: "safestrate",
    account: 110168168,
    description: "Chiến lược giao dịch an toàn được ưu tiên hàng đầu",
    author: "THI THUY LE",
    authorPhoto: null,
  },
  {
    name: "Sói Già Phố Wall 01",
    account: 110168207,
    description: "Tiền không bao giờ ngủ!!!",
    author: "Thanh Tuyến Bùi",
    authorPhoto:
      "/st/media/pim/media/user_photo/ef/efc/efcc457b490041036216fe94b2e01c73_c2b214145a944ba79f01ffca048bcd54.jpg",
  },
  {
    name: "Tara trading",
    account: 110168329,
    description:
      "Hello guys plz maintain your account 55 $ minimum\nM15 to M30 15$-20$ Per Week \nEmail ID hkapadiato@gmail.com",
    author: "KAPADIYA PANKAJ",
    authorPhoto:
      "/st/media/pim/media/user_photo/4d/4d4/4d40c75efa985f1dd3e5d706df02300f_40ca82c51d4c4844a290372cbbd8d283.jpg",
  },
  {
    name: "VN Trading",
    account: 110168330,
    description: "AI",
    author: "VAN TUYEN DOAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a9/a98/a988245a990c7f6f57fa258dc1c3f428_6bdc89c723f94c7b81772245e7b8aff0.jpg",
  },
  {
    name: "Divergence Scalper",
    account: 110168340,
    description:
      "Trading Divergences in different time frames to catch pips from the market.",
    author: "Nimer Ghazal",
    authorPhoto: null,
  },
  {
    name: "Narayana234",
    account: 110168402,
    description:
      "A best strategy with low risk and high reward. Expecting 1000% per year. Just tray with minimum amount. Thank you",
    author: "BHAVANI PRASAD",
    authorPhoto:
      "/st/media/pim/media/user_photo/ec/ecf/ecf952f9682a0aa541afcf6aa9c4df11_0c60450cefc84c70aa3e2cfeae822b8d.jpeg",
  },
  {
    name: "Hariram Baba",
    account: 110168409,
    description: "Min Return 15-20% Monthly",
    author: "Durga Kumar  Jaiswal",
    authorPhoto:
      "/st/media/pim/media/user_photo/bf/bf1/bf14ef3a0f90bec7332d0d63ba0de1d5_6ea5ae04c1ed449990bc0b702155fbbc.jpg",
  },
  {
    name: "Mộc Huyền 98",
    account: 110168491,
    description: "Waiting",
    author: "Dang Hai Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/53/534/534bf733aeb58c723a2a8f316a90ccba_5cb22b0dda864975935dce97e6d5691c.jpeg",
  },
  {
    name: "Gasss Bismillah",
    account: 110168677,
    description: "Konsisten",
    author: "AHMAD HIDAYAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/4f/4f6/4f6f4e2bd953f29f4b4568b6eb1578e9_2c94481410734df9a6949f8b307e5a3e.jpg",
  },
  {
    name: "Minimize MMI",
    account: 110168684,
    description:
      "Add trading by calculating MM to be able to make a reversal. to protect capital",
    author: "ประสพโชค พรมพิทักษ์",
    authorPhoto:
      "/st/media/pim/media/user_photo/2e/2ee/2ee7ff99056f53553cc7da7adf07f20a_e21b10a237924df8960654809218d67f.jpg",
  },
  {
    name: "2024华尔街AI提款机",
    account: 110168686,
    description: "全部智能化量化和半人工操作，安全稳定，回报率可观",
    author: "瑞锋 陈",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b9b/b9bd81232c01ab5ffa29c052d50015b9_07a91ab0a5234168bd47c105f8644c83.jpg",
  },
  {
    name: "TRADE FOR BABY 269",
    account: 110168690,
    description: "TRDAE EU XAU BTC ETH",
    author: "Supattrawadee Kerdsiri",
    authorPhoto:
      "/st/media/pim/media/user_photo/70/702/70228e7101239ecdb03931c650184a36_cd86c0af1d5b4936b985cf4d9f31ef4e.jpg",
  },
  {
    name: "2R Trading",
    account: 110168697,
    description: "Gold wave is our target.",
    author: "THI LOAN VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/a1/a14/a148e317fc9abd35657448226bcd1aba_63fb433e3d30489f8ae20c3996c46f07.jpg",
  },
  {
    name: "EA Farm 2000",
    account: 110168831,
    description:
      "-EA auto trade\n-Daily monitor\n-See result  \nhttps://www.myfxbook.com/portfolio/ea-farm-2000/10908496",
    author: "PICHET INTO",
    authorPhoto:
      "/st/media/pim/media/user_photo/7e/7e6/7e6f96fc235aa9512ef21f49e1fa935b_79650829f76140558234a146d93a4522.JPG",
  },
  {
    name: "STEVENTRADING TEAM",
    account: 110168865,
    description:
      "Đội ngũ Trader chuyên nghiệp kinh nghiệm giao dịch từ 6 -12 năm trong thị trường forex\nMội thông tin các NĐT có thể tham khảo tại : steventrading.com",
    author: "VUONG TA",
    authorPhoto:
      "/st/media/pim/media/user_photo/b5/b5a/b5a4620ec4065f1d4580c217b2112d0c_f197b95bff8a4cedb65882e813268396.jpg",
  },
  {
    name: "Monthly Profits - EU",
    account: 110168870,
    description:
      "This is a high-risk strategy, however it’s a super profitable strategy.\nEU - Swing trading , SL = Hedging",
    author: "VAN DUC NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/d7/d7e/d7e343e39f399373077cf3e8d0849dde_b7790d66afb7493ba7ac37498fba7d52.jpeg",
  },
  {
    name: "Govic- Smart Money",
    account: 110168882,
    description:
      "EurAud / GbpUsd Trading: Smart Strategy (SL = Hedging)\nGold - Scalp (R:R 1:1)\nTarget: 20-30% per month",
    author: "NGUYỀN ĐỨC",
    authorPhoto:
      "/st/media/pim/media/user_photo/02/020/0206160be7b8bc33688fff69e916295e_5022313b963a48c582d72d28114ed554.jpeg",
  },
  {
    name: "Make Money Auto",
    account: 110168967,
    description:
      "- Swing và scalp\n- Mục tiêu 10-20%/tháng\n- Lợi nhuận đều đặn hàng tháng\n- Link tiktok: www.tiktok.com/@tranduchiep294",
    author: "TRẦN HIỆP",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1aa/1aa339b1a06b27905d90a4edfd2015fb_53e440630ddf4e83812e8c2585abe3b3.jpeg",
  },
  {
    name: "VERN PARTNERSHIP",
    account: 110169010,
    description: "Make it Simple",
    author: "HENDICKY FERNANDA",
    authorPhoto:
      "/st/media/pim/media/user_photo/b2/b29/b29f20bdaaba5701c03bfaf83eb37748_705d6e9027ef46e7a6dbf909ed28203f.png",
  },
  {
    name: "Scalping Gold",
    account: 110169018,
    description: "Scalping",
    author: "NGOC UYEN TRUONG",
    authorPhoto:
      "/st/media/user_photo/ae/ae6/ae63232b3a64a87461f84e0b667a2223_ce872d46dc544aa5a995e97b0bd26b68.jpg",
  },
  {
    name: "Gold for Dcs",
    account: 110169079,
    description: "Open manually, manage by EA",
    author: "Khoa Do Quang",
    authorPhoto:
      "/st/media/pim/media/user_photo/82/824/824986c642d859d3531354d59a935990_4f79772a86684682a50b11c03095a221.jpg",
  },
  {
    name: "Newday Happy",
    account: 110169126,
    description: "Win",
    author: "Thang Pham",
    authorPhoto:
      "/st/media/user_photo/f5/f57/f57c5600743dee56c8b3eeb6b8d36727_1a6e9f33d4bb4f63946bbbba9b79eb3d.jpg",
  },
  {
    name: "HappyWealth",
    account: 110169149,
    description: "Slow Steady Wealth  Happy \nรวยมีความสุข",
    author: "WASSANA DAMNURNNGAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/03/037/037e7bd32770a8c2bff4d9f1833baad9_cbbc351cecec4facb764a6f4214083b2.png",
  },
  {
    name: "Captain Trading",
    account: 110169204,
    description:
      "กลยุทธ์ A.I. Grid Trading by Capt. \nกำไรที่คาดหวังต่อเดือน 5-10% \nทุนขั้นต่ำที่แนะนำ 300-500$ \nเทรดบนสินทรัพย์ทองคำและคู่เงิน\nความเสี่ยงต่ำกำไรปานกลาง",
    author: "Krissana Namyeang",
    authorPhoto:
      "/st/media/pim/media/user_photo/99/99a/99af459ccbb945b93fa4e59fb5adc057_b92b140d7da5432d8f82e7621cf1cfcd.png",
  },
  {
    name: "KING SCALPING",
    account: 110169218,
    description: "Dailly trade mostly xau using scalping strategy",
    author: "Ali Pirmansyah,SE",
    authorPhoto:
      "/st/media/pim/media/user_photo/96/964/96475cf82c32dc761d0d138903b17b97_8342a627a5f34270a09c6633e0571fbf.png",
  },
  {
    name: "Profits_15",
    account: 110169285,
    description: "test",
    author: "กุลธร ภิญญรัตน์",
    authorPhoto:
      "/st/media/pim/media/user_photo/d7/d77/d77ba7b8ce2f72debb36d1b1def75bbc_509fe6623ad346e5b8c85cc8ee1c4f76.jpeg",
  },
  {
    name: "Elpis Invest Fund",
    account: 110169290,
    description:
      "Elpis is a new private equity fund, designed to deliver exceptional returns for selected investors",
    author: "Tram Vo Huynh Ngoc Bao",
    authorPhoto:
      "/st/media/pim/media/user_photo/cd/cd8/cd85faf399d35c60560356e22a91b164_90566d6ad63f4a48976c02964d8875d9.jpg",
  },
  {
    name: "forex007gold",
    account: 110169389,
    description: "forex and gold",
    author: "招龙 李",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f5f/f5fdfb09eb10c3f796e3ae4834a7a387_67502f0e4e174b70a7ae60fc7664fe19.png",
  },
  {
    name: "Gold future",
    account: 110169399,
    description: "Safe and secured strategy.\n10 to 15 percent per month",
    author: "RAVI SUBRAMANIAM",
    authorPhoto: null,
  },
  {
    name: "Victory Quest",
    account: 110169427,
    description:
      "Transactions are closed during the day.\nSL, TP: 20-50 pips. DD < 20%, Profit > 20%/month.",
    author: "TRẦN BÁCH",
    authorPhoto:
      "/st/media/pim/media/user_photo/45/458/458c1d70a222ddf2c13c001f176b56bd_ced9fabb326443faa76fed83b51ac099.jpg",
  },
  {
    name: "Trader TV From VN",
    account: 110169441,
    description: "Trader TV From VN",
    author: "THI THAO NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/77/775/7757ad04aeb8b4fa11cc9b687da1f79d_460c80c6a08d4e9bbec3011ce15f6046.jpg",
  },
  {
    name: "1Percent1day-SafeTRD",
    account: 110169466,
    description: "Safe - Protect - Peace and Quiet Life",
    author: "Phóng Hoàng Hữu",
    authorPhoto:
      "/st/media/pim/media/user_photo/8e/8ec/8eca0c541fe44ae14b5d704963dd85c5_effd90d718d64e29a8c3dff4e87e4a7f.jpg",
  },
  {
    name: "SeekingAlpha_F2024_9",
    account: 110169504,
    description:
      "Active strategy aim to maximize profit while keeping risk at a moderate level",
    author: "Son Ma Quang",
    authorPhoto: null,
  },
  {
    name: "SS gold strategy",
    account: 110169520,
    description: "I made 15% to 20% minimum & upto 40% maximum in a month.",
    author: "BHUPENDRA SONULE",
    authorPhoto: null,
  },
  {
    name: "GOLD SCAP SMNTRADING",
    account: 110169527,
    description: "giao dịch scaping Gold",
    author: "THI HONG NHUNG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/33/336/336d37776c9c6a625c76ba8d462bea22_8dced81ff68e448b817b513263c492a5.png",
  },
  {
    name: "Wish List 2 - Gold",
    account: 110169529,
    description: "Making money while you sleep!",
    author: "MISS CHONNICHA CHAROENWAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/9e/9e8/9e881a41955ab691bcb4cdaadc93b9ce_ad1097ef53a1419aaa5805dfa3524774.jpg",
  },
  {
    name: "trader ban ban_1",
    account: 110169537,
    description: "หยอดกระปุกวันละนิด",
    author: "ANSORY ALEE",
    authorPhoto:
      "/st/media/pim/media/user_photo/75/753/753aad9af379ebbabafa2a7910eb9b67_006d9fde667048f8822cc78e087f821a.jpg",
  },
  {
    name: "NixkyBoy_2025",
    account: 110169588,
    description: "High profits move into the future",
    author: "MR CHATREE PORNWILASSIRI",
    authorPhoto:
      "/st/media/pim/media/user_photo/74/74b/74b38a1abb2f77b85879e37d91aec7ec_d4fed322bc884a6285641e31854dec1c.jpg",
  },
  {
    name: "ST FX Autotrader 4",
    account: 110169615,
    description:
      "This strategy will be removed once the equity is back to 100% for a better strategy please copy \nhttps://social-trading.exness.com/strategy/110198265",
    author: "Sultan  Alshamsi",
    authorPhoto:
      "/st/media/pim/media/user_photo/18/180/1807c682cd4c4c2355bcd3d681fbf0c1_d09fd38e51b442cf92dfe5baa641bb68.jpg",
  },
  {
    name: "Thợ Săn vàng 68",
    account: 110169620,
    description: "1- TP không cần có nhưng SL luôn phải có",
    author: "Hoang Ninh Pham",
    authorPhoto:
      "/st/media/pim/media/user_photo/67/670/6703ac4e72e6cb1787919af5b8898c5d_a487ca28c9bd42ebae06e6a10b0dd437.jpg",
  },
  {
    name: "Kỷ luật mỗi ngày",
    account: 110169625,
    description: "Duy trì",
    author: "NGUYỄN HƯNG",
    authorPhoto: null,
  },
  {
    name: "黄金狙击手XAUUSD01",
    account: 110169641,
    description:
      "该策略主做黄金日内顺势波段交易，属于高胜率+高盈亏比+低频率纯手工交易模式，顺势盈利加仓模式，整体带止损止盈模式！建议按照资金净值比例1：1跟随即可！账号最大杠杆1:200倍！",
    author: "琪斌 廖",
    authorPhoto:
      "/st/media/pim/media/user_photo/fc/fca/fcaa3ba90293cd4654c8ef7a53373f46_2878f8662f1b4d3d825cd15f2f1c2b04.jpg",
  },
  {
    name: "GBPUSD SCALPING",
    account: 110169646,
    description:
      "Chiến lược giao dịch tỷ lệ lợi nhuận trung bình 50%/ tháng, maxdd 30%",
    author: "Trung Kiên Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/56/568/56871dc6d771dc68d145448fb9cf18c3_af39349eb7c4447d9fe058fe3f648217.jpg",
  },
  {
    name: "DevelopVN68",
    account: 110169668,
    description: "Trao niềm tin cùng phát triển.",
    author: "HOANG KHOA NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/ea/ea3/ea34711fcabbb0dd203aa60b240c4962_cbf5791ee4824b4d92d94ff7ea73c543.jpeg",
  },
  {
    name: "Mohammed_Fx",
    account: 110169705,
    description: "Mohammed_Fx",
    author: "Mohammed Almunayan",
    authorPhoto: null,
  },
  {
    name: "MUKTIALGO786",
    account: 110169727,
    description: "MUKTI ALGO",
    author: "PANKAJ KUMAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/c4/c4a/c4a23ffaa73aa6d66bef76d685d9120e_45c366ad0ee84e16b71050908ff5cbbf.jpg",
  },
  {
    name: "Gogrowprofit",
    account: 110169770,
    description: "Demand supply",
    author: "varaporn kaewphattharasathian",
    authorPhoto:
      "/st/media/pim/media/user_photo/72/724/72440e0dc8c01e05fb3221d103b979c1_9d5ed8deddd14138ad428e7e0fe85012.jpg",
  },
  {
    name: "be sure of victory",
    account: 110169796,
    description: "Winning profits",
    author: "程 李",
    authorPhoto:
      "/st/media/pim/media/user_photo/8b/8bc/8bcb44305fc74f4bf9b59cecfb0b8584_4e9d6df5eeda4121a9b7e5efa6cd67e3.png",
  },
  {
    name: "EA Automatic Trading",
    account: 110169799,
    description: "The monthly target return rate is 20-50%.",
    author: "晓伟 胡",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/86a/86af3ba2af5597045063859b60ef97c5_0fe53411895b4752be248f2c089bd45f.png",
  },
  {
    name: "SuperCor5Pir3",
    account: 110169874,
    description: "SuperCor5Pir3",
    author: "Akkrawit Suwanarat",
    authorPhoto:
      "/st/media/pim/media/user_photo/58/580/580b1d0aa952c394ceb3d51712a23bee_9432483ef99d4c709edfd9c7903e5446.jpg",
  },
  {
    name: "SeekingAlpha_F2024_7",
    account: 110169877,
    description: "Supervised Strategy with steady profit and moderate drawdown",
    author: "Son Ma Quang",
    authorPhoto: null,
  },
  {
    name: "SeekingAlphaF24_92",
    account: 110169880,
    description:
      "Supervise Algorithm aming to maximize profit within a constraint drawdown",
    author: "Son Ma Quang",
    authorPhoto: null,
  },
  {
    name: "F1819_SeakingAlpha",
    account: 110169884,
    description:
      "Alpha Algorithim aim to balance out profit and drawdown with longevity",
    author: "Son Ma Quang",
    authorPhoto: null,
  },
  {
    name: "The sister of Yellen",
    account: 110169887,
    description: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    author: "玉红 张",
    authorPhoto:
      "/st/media/pim/media/user_photo/0e/0ef/0efd5dcc590495654acbea45a905ddd1_5556ea4bcb41497d9bf339b7a2386515_snwMaoH.jpg",
  },
  {
    name: "The feeder of Yellen",
    account: 110169889,
    description:
      "Full cycle hedging protection compound position trading system",
    author: "红梅 范",
    authorPhoto:
      "/st/media/pim/media/user_photo/0e/0ef/0efd5dcc590495654acbea45a905ddd1_0f66da6b76344061849276d73cbea70f.jpg",
  },
  {
    name: "Goldminer7",
    account: 110169911,
    description: "Best XAUUSD scalping strategy",
    author: "Sudhakar Shinde",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c25/c254e232dc9fea4843904990a2c873b5_41af905c122f4781b060e112f7e22f91.jpg",
  },
  {
    name: "Bitcoin Killer",
    account: 110169958,
    description:
      "Sistema de Ondas de Elliot aplicado a la cotización de Bitcoin respecto al dólar estadounidense.",
    author: "Facundo Romera",
    authorPhoto:
      "/st/media/pim/media/user_photo/96/960/960d4813163504dd85433bd9f21ad05e_4f21e06146eb471bab81c4efd706e394.jpg",
  },
  {
    name: "Protrader2025",
    account: 110170013,
    description: "chỉ cho mình tôi",
    author: "ĐẶNG HOÀNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/4c/4cc/4ccd502b381478e0d5e0805ca0d16c3d_5f334407415945e0ad56c447413085fb.jpg",
  },
  {
    name: "Aviation Trading",
    account: 110170068,
    description:
      "Funds with High Risk that give High Return\n\n=> Join group: https://t.me/trading68forex",
    author: "Lam Pham Van",
    authorPhoto:
      "/st/media/pim/media/user_photo/f0/f0b/f0b581123850d53ee3a35a3dc2c4f620_206648ba9878470393bca4c9532ae155.jpg",
  },
  {
    name: "GoTogether-Speed",
    account: 110170073,
    description: "EA Run",
    author: "PITCHAKORN PAOSUWANCHAI",
    authorPhoto: null,
  },
  {
    name: "Global Finance",
    account: 110170099,
    description:
      "Daily Profit 1 - 2 %\nAll the days are profitable\nJoin Telegram: https://t.me/Globalfinancefunds",
    author: "JAWAD AHMAD",
    authorPhoto:
      "/st/media/user_photo/82/822/8228ad427d0842142d4958c2cf4205f8_b1baf5d55d2740ca849b75819d10a87c.jpg",
  },
  {
    name: "Học Viện Nemo",
    account: 110170120,
    description:
      "Tham gia thị trường từ 2019, tôi đã xây dựng một hệ thống giao dịch có lợi nhuận cao",
    author: "VIET DUNG TO",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f8a/f8ae9808c5ab5101059504a7c0708f13_74ad8e70be424918bb504d16128f3f21.jpg",
  },
  {
    name: "Kim Nguyên Store 436",
    account: 110170143,
    description: "Bet on Gold, not on Funny money",
    author: "Tài Nguyễn Ngọc",
    authorPhoto:
      "/st/media/pim/media/user_photo/d2/d22/d2244b4dd5099d2f06efabc09af6e1cb_d92fd33fe57e4202a84c10e6702a666b.jpg",
  },
  {
    name: "Golden Ways Maestro",
    account: 110170278,
    description:
      "Gold Trading Specialist Scalp & Swing\n\nVisit our Telegram and get Free Daily Forecast at t.me/robotforexindo",
    author: "ANTONY DEMAS",
    authorPhoto:
      "/st/media/pim/media/user_photo/43/433/433b7d2b8891d0a2ed7af394bb69ce54_87d15e324a3144df9838051a49d13305.jpg",
  },
  {
    name: "beautiful world",
    account: 110170358,
    description: "beautiful world",
    author: "Tươi  Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/9e/9e9/9e9135bbafcb7360aa48b5bd5dee6bb7_ae465e420825430a9b00c7f1a1098ba2.jpeg",
  },
  {
    name: "Bollinguer FX",
    account: 110170375,
    description:
      "Estrategia de trading automatica que abre operaciones con alta efectividad y riesgo controlado",
    author: "Andres alvear",
    authorPhoto:
      "/st/media/pim/media/user_photo/24/246/2461cddc54e3cc407d430010797a19a6_aa7d83f123944b048b92691d057a9aa6.png",
  },
  {
    name: "Sniper Trader",
    account: 110170392,
    description: "Trading with ICT concept\nMax risk 1% per trade",
    author: "Thanh Huy Nguyễn",
    authorPhoto:
      "/st/media/user_photo/93/93d/93dcf16a2b2da49e8be3601e9fbf92ce_71171d3bc25f4336bb7dff9b958490f3.jpg",
  },
  {
    name: "7StarScalping Army",
    account: 110170394,
    description:
      "Hedging EA, GBP/AUD, EUR/AUD, book ur sit now, let money works for U 👍🏻",
    author: "LEONARD GUNAWAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/af/af4/af448114c856eebb8716f7b9352e2595_72bdd165b06d4e19b78bbc188fdf6140.jpg",
  },
  {
    name: "nclammoi111",
    account: 110170399,
    description: "nclammoi111",
    author: "Dinh Thi Kim Lien",
    authorPhoto:
      "/st/media/user_photo/65/65c/65cc8004b94edb0e6f7d53bc95c7bdc6_6d75e7d02aca48ccba10a2dbbd6a60ce.jpg",
  },
  {
    name: "Winners are rare",
    account: 110170441,
    description:
      "By the reading of candle and understand carefully movement of market will definitely support u inntrading as well as give us Positive spirit...",
    author: "YELAKA SUDHARANI",
    authorPhoto: null,
  },
  {
    name: "Great dos 1",
    account: 110170501,
    description:
      "I want only growing like a plant slowly but must grow any cost same money have to grow.",
    author: "MUNNA KUMAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/33/33e/33e1daa40153d0695a02fb54e44ad278_9c20a11cee3f4710b272d50f93d59def.jpg",
  },
  {
    name: "ELITE PRO TRADE",
    account: 110170512,
    description: "Join Elite Trade Pro for enhanced profitability",
    author: "ARUN INGEWAD",
    authorPhoto:
      "/st/media/pim/media/user_photo/a8/a8c/a8c97f4f34f54ee8e9636201bab193e1_5750caa9c8904959a884746958d4a61a.png",
  },
  {
    name: "Horizon Way",
    account: 110170531,
    description: "Risk Zone trade AC  DD 20 %\nMin 500 $",
    author: "WORAWIT WONGBOONMAK",
    authorPhoto:
      "/st/media/pim/media/user_photo/ab/aba/abaeaa064ced201f0a8cd6b2ce597ef0_8f82351eb04740f1ad1e5fae5d10784d.png",
  },
  {
    name: "GOLD TRADE",
    account: 110170533,
    description: "GOLD TRADE",
    author: "Văn Hoàng Bùi",
    authorPhoto:
      "/st/media/pim/media/user_photo/10/108/108a84657ed88dc5025c3c2d67e768c9_4abc5cdc46d341bfa1157e68b2e66ed5.jpg",
  },
  {
    name: "Sơn Hải 73 Group",
    account: 110170540,
    description:
      "scapling gold 10-20%/tháng\nCùng nhau kiếm tiền.\nTài khoản trade tay 100%",
    author: "MAI TƯ",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/eef/eef945744f0aa69a9cc5fbed24f67e77_bccb25393e8643a6aca4e30ae1a267b9.jpg",
  },
  {
    name: "EUR USD Crack",
    account: 110170546,
    description: "just follow😉",
    author: "Jafar Karakka kal",
    authorPhoto:
      "/st/media/pim/media/user_photo/a9/a9c/a9c4714d7d3fe232c2b2f3bebd766a7e_e3266477507e49ca919d85fc907868f2.jpg",
  },
  {
    name: "Super Trading",
    account: 110170554,
    description:
      "Trading strategy with an acceptable level of risk, discipline adherence, and quick capital recovery.",
    author: "Văn Lương Anh",
    authorPhoto:
      "/st/media/pim/media/user_photo/34/345/3450286f9850798bb8247626d29f4957_b3532b8a8cd645d48dd6ad04eca40c1e.jpg",
  },
  {
    name: "IIF Capital",
    account: 110170555,
    description: "International Invest Funs Capital",
    author: "TRÀN DÂN",
    authorPhoto:
      "/st/media/pim/media/user_photo/08/088/088c139b0449866634952d3019a250bc_53072fa087434d5a9f9874c0e3f5180e.jpeg",
  },
  {
    name: "Mr Money 6868",
    account: 110170565,
    description:
      "Nếu đầu tư X2 liên tục thì với 1$ sau 20 lần X2 sẽ thành 1 triệu$\nLãi suất TB 30%/tháng thì sau 2,5 tháng sẽ X2 1 lần\nĐầu tư tối thiểu 500$ và Đợi!",
    author: "VIET DUC CAO",
    authorPhoto:
      "/st/media/pim/media/user_photo/93/93b/93b6dd508516d5dbf5e5e90d18d07482_728f842663e2477f93aeb8c113b2a224.jpeg",
  },
  {
    name: "Mr Money 6666",
    account: 110170566,
    description:
      "Nếu đầu tư X2 liên tục thì với 1$ sau 20 lần X2 sẽ thành 1 triệu$\nLãi suất TB 30%/tháng thì sau 2,5 tháng sẽ X2 1 lần\nĐầu tư tối thiểu 500$ và Đợi!",
    author: "VIET DUC CAO",
    authorPhoto:
      "/st/media/pim/media/user_photo/93/93b/93b6dd508516d5dbf5e5e90d18d07482_728f842663e2477f93aeb8c113b2a224.jpeg",
  },
  {
    name: "Mr Money 8888",
    account: 110170568,
    description:
      "Nếu đầu tư X2 liên tục thì với 1$ sau 20 lần X2 sẽ thành 1 triệu$\nLãi suất TB 30%/tháng thì sau 2,5 tháng sẽ X2 1 lần\nĐầu tư tối thiểu 500$ và Đợi!",
    author: "VIET DUC CAO",
    authorPhoto:
      "/st/media/pim/media/user_photo/93/93b/93b6dd508516d5dbf5e5e90d18d07482_728f842663e2477f93aeb8c113b2a224.jpeg",
  },
  {
    name: "Yellow Ant",
    account: 110170606,
    description: "Long term profit!",
    author: "Vo Thanh Quang",
    authorPhoto:
      "/st/media/pim/media/user_photo/75/753/7536d2a290b052488d956c4c6c02d46a_7d6826d5eb6340959db8e0d048b12e8b.jpeg",
  },
  {
    name: "Golden_Kay",
    account: 110170723,
    description: "BoT Trading : Min deposit 500$, Ideal Deposit 1000$",
    author: "RIZAL",
    authorPhoto:
      "/st/media/pim/media/user_photo/d4/d4e/d4e02e71b569dbd307a3a7b1cbfa4a8b_e015354ecb9e4c06893336a9041b992b.jpg",
  },
  {
    name: "EURUSD GOLD",
    account: 110170778,
    description:
      "Lợi nhuận 8-20%/ tháng\ngiao dịch Swing, EURUSD. XAUUSD.\nĐồng hành cùng tôi theo tháng để có lợi nhuận ổn định.\nHãy Folow tôi từ 10$, good Job. thank!",
    author: "VAN TIEN DO",
    authorPhoto:
      "/st/media/pim/media/user_photo/3b/3b6/3b6695b4aac92187859cc3cccf5267c3_71803b1a00d6402586321bf94d92bb38.jpg",
  },
  {
    name: "SCRIPT NO 1",
    account: 110170815,
    description: "LIKE A COMPOUND METHOD",
    author: "JEYALAKSHMI",
    authorPhoto:
      "/st/media/pim/media/user_photo/04/047/0471fddb50e23e4feaa9b19c8ee12aee_60f6bca70ef943d186a14d9a574fe88b.jpg",
  },
  {
    name: "BTC EA Trade 01",
    account: 110170852,
    description: "EA program automatically trades and stabilizes returns.",
    author: "晓伟 胡",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/86a/86af3ba2af5597045063859b60ef97c5_0fe53411895b4752be248f2c089bd45f.png",
  },
  {
    name: "Dragon 6666",
    account: 110170878,
    description:
      "Với 1$ nhân đôi liên tục 20 lần sẽ thành 1 triệu$.\nLợi nhuận 30% tháng thì 2,5 tháng sẽ nhân đôi 1 lần.\nĐầu tư 1000$ chờ đợi trong 25 tháng 💪",
    author: "Đức Việt",
    authorPhoto:
      "/st/media/pim/media/user_photo/00/007/0070004b9f76c63c8b5aa88b8b2127bb_fb7236ab5730418e8b56ef8683aa0df0.jpeg",
  },
  {
    name: "TZBtrading",
    account: 110170896,
    description: "Swingtrade+Daytrade",
    author: "TAI LE DUY",
    authorPhoto:
      "/st/media/pim/media/user_photo/2b/2ba/2ba465ab01524090acf83ba79a2aa6e7_3fff5a47dab34a99a8a859f417c53ce2.jpg",
  },
  {
    name: "Vntrader85",
    account: 110170919,
    description: "Stable Profit",
    author: "TRAN ANH VIET HO",
    authorPhoto:
      "/st/media/pim/media/user_photo/19/193/19313af4a2cdd40ad5b418663552832e_4294e8886c1c439db3d623aa5519357d.jpeg",
  },
  {
    name: "Super Profit Gold1",
    account: 110170926,
    description: "เปิดปิดออเดอร์ ได้อย่างแม่นยำ ทำกำไรสูงสุด",
    author: "NATHAKORN CHOMDEE",
    authorPhoto: null,
  },
  {
    name: "Super Profit Gold2",
    account: 110170932,
    description: "เปิดปิดออเดอร์แม่นยำ ทำกำไรสูงสุด",
    author: "NATHAKORN CHOMDEE",
    authorPhoto: null,
  },
  {
    name: "Cậu Bé Trade Gold",
    account: 110170981,
    description: "Cậu Bé Trade Gold",
    author: "Tiến Tôn",
    authorPhoto:
      "/st/media/pim/media/user_photo/00/001/0018221bac73493cd1592f034759c47a_4f40eebb49a7436f841a03be621cac5e.jpg",
  },
  {
    name: "Victory EA",
    account: 110171002,
    description:
      "手动15年黄金策略！3000美金，一次一单，单次止损2美金（20点），设置有20点的止损，止盈不限制，请做好资金管理。激进的3000美金开始跟一倍，资金小的不要跟随，以免造成亏损。不明白加TG/line:vvv5525",
    author: "梅献 陆",
    authorPhoto:
      "/st/media/pim/media/user_photo/3b/3b1/3b114ae2f9b3ac847f1c45b4a9150f04_62b9b565b40e4874bc582bb3b3d75d78.jpg",
  },
  {
    name: "Gold Trader",
    account: 110171030,
    description: "Only trade on Gold with secure capital",
    author: "Muhammad  Adnan",
    authorPhoto:
      "/st/media/pim/media/user_photo/e7/e75/e757953dadd9c2eb28b1da0d5871d05b_37cd2be51aca4e26822c0e13b999e27c.jpg",
  },
  {
    name: "Gold hedging strateg",
    account: 110171045,
    description:
      "Long-term strategy, please confirm that the position is in a floating loss before copying the signal, and all orders need to be copied!",
    author: "翔 李",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b90/b9098e46c7cf2ff80ed2815075603382_726ebc7eafd34ffa9638eb88057cc819.png",
  },
  {
    name: "All in Strategy 8",
    account: 110171069,
    description: "All in Strategy 8",
    author: "DUC THANH LIEM TRAN",
    authorPhoto: null,
  },
  {
    name: "Hephaistos 1",
    account: 110171089,
    description:
      "The strategy has TP and SL\nStarting capital is only 10$\nKeep a minimum profit of 15%/month",
    author: "TRUONG NGHIA",
    authorPhoto:
      "/st/media/pim/media/user_photo/83/83f/83f555e0f8484b4943591b17ac720e47_181cbfb5eff74a47817c3068a3090787.png",
  },
  {
    name: "养成系交易员cxzn000000",
    account: 110171157,
    description: "欧美策略，趋势策略，有加仓行为，轻仓参与。",
    author: "时义江",
    authorPhoto:
      "/st/media/pim/media/user_photo/b3/b3c/b3c83222209b1b27884e1a5afa746352_a9f2f9e81d8040b9a1473ec3895b3d12.jpeg",
  },
  {
    name: "HQfxinvest",
    account: 110171213,
    description: "Giảm thiểu rủi ro",
    author: "NGÔ QUÂN",
    authorPhoto:
      "/st/media/pim/media/user_photo/12/122/1226bafbc4319ac9054bb5811631c6f8_e2c07d7f78e44115b3ec32aeaea1ddab.jpg",
  },
  {
    name: "MARVIN FX",
    account: 110171351,
    description:
      "Estratégia com mais de 8 meses de teste, rebaixamento baixo é lucro consistente.",
    author: "William Amaral da costa",
    authorPhoto:
      "/st/media/pim/media/user_photo/8e/8e4/8e4086f4af71d6414d235211a89ca42a_042a573c532d431d9a317b5f504fe2d3.jpeg",
  },
  {
    name: "Forex Academy FZ",
    account: 110171356,
    description:
      "Our Monthly Target is  15-20% InshAllah \nThank you for copying Forex Academy.\nBest of Luck",
    author: "Umme Aiman Bilal",
    authorPhoto:
      "/st/media/pim/media/user_photo/d6/d66/d6643f618d341db678096f46ec5cd870_42fb9e81e8544743b174afb7a71cc289.jpeg",
  },
  {
    name: "SWAING N SCLPING",
    account: 110171534,
    description: "Swing and scalping trading with tread flowing,",
    author: "BHAVESH VADADORIYA",
    authorPhoto: null,
  },
  {
    name: "Stay the course",
    account: 110171569,
    description:
      "Đầu tư vào tôi và thắt dây an toàn, tôi sẽ đưa các các anh em lên shark tank Mỹ chậm rãi và đều đều 🤑🤑🤑",
    author: "THANH DAT PHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/91/913/913bfa062efd1209b7bb8dddb09829da_fb52c6838b0e4365908e92f5d0670360.jpg",
  },
  {
    name: "Apex Trading Firm",
    account: 110171595,
    description: "We use price action. with rrr 1:2",
    author: "APURVA GOSWAMI",
    authorPhoto:
      "/st/media/pim/media/user_photo/58/581/5815ae3b16d0087a8ae31c50dd99bc4d_88262aedd2d3492393910376af75e13a.jpg",
  },
  {
    name: "Alaradi FX",
    account: 110171618,
    description:
      "Our target is to achieve a 15 to 35% monthly return with a low-risk strategy.\n\n#Sustainable growth \n\nBio for more details",
    author: "Abdulla Alaradi",
    authorPhoto:
      "/st/media/pim/media/user_photo/08/08d/08da51b72934334c92eacbc43d2cdeac_900a0bc6d0e940c5b6ce7487ae515da7.jpg",
  },
  {
    name: "FXT4ME GEN BT HR",
    account: 110171669,
    description: "GEN BOT",
    author: "Emmanuel Oluwaseyi Sholotan",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/502/502b38e76749f53afc3e961673927b76_ae0f85796ffb4d8e918874ef52a16867.jpeg",
  },
  {
    name: "Risk Manager",
    account: 110171745,
    description:
      "I'm a manual trader. My strategy is designed for long term investment. Risk management is my priority.",
    author: "Leonardo Ibita",
    authorPhoto:
      "/st/media/pim/media/user_photo/76/769/769c93a67562bfd7a10656adde97a124_4063b10c9e8e4ac9bfb07e9d8cc0fdcd.png",
  },
  {
    name: "Money matrix2 kashif",
    account: 110171767,
    description: "This strategy will be on low risk strategy",
    author: "Hafiz Kashif",
    authorPhoto:
      "/st/media/pim/media/user_photo/2a/2a8/2a863b9904e5b7596c6856aee72fd486_b28ca42aa76447d0b2731c9baa16d847.jpg",
  },
  {
    name: "Scalping queen",
    account: 110171811,
    description: "Scalping queen",
    author: "UMME SALMA SAMIA",
    authorPhoto: null,
  },
  {
    name: "Nang Am Que Huong",
    account: 110171834,
    description:
      "EURUSD: Swing trade. \nXAUUSD: Momentum trade.\nTarget: 10%/Month.",
    author: "NGUYỄN DŨNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/7c/7c2/7c2ddec37cb052f588720817e9bcf8a3_1d1f89ee6dfb435d92380e58f4b2fb78.jfif",
  },
  {
    name: "XU88888888",
    account: 110171835,
    description: "根据k线信号开仓",
    author: "庆利 徐",
    authorPhoto:
      "/st/media/pim/media/user_photo/2d/2d6/2d66793ba7d11c05ee3ced1077dd9722_29c247930af2433997c6959998a0f87f.jpg",
  },
  {
    name: "trading up",
    account: 110171837,
    description: "good good trading,day day up!",
    author: "红录 杨",
    authorPhoto:
      "/st/media/pim/media/user_photo/17/172/172c7bca70de220295ddf5531f1b4fbe_00810afa3ee44c3a90abedd82429c9d6.jpg",
  },
  {
    name: "FollowMoon 1",
    account: 110171944,
    description:
      "This strategy trades multiple assets, adjusts to market conditions, uses risk per trade (not martingale), and pauses trading at a 30% max drawdown.",
    author: "Tanitas Choeithongsri",
    authorPhoto:
      "/st/media/pim/media/user_photo/41/41d/41d1e99108e5a3f04d05c3e51cc54abb_999ebb4afa6748e5a3fcb888362c6f44_CSJSNph.png",
  },
  {
    name: "Gold June 2024",
    account: 110172045,
    description: ".",
    author: "Nahid Ali",
    authorPhoto: null,
  },
  {
    name: "Indiabizlistfx Ai",
    account: 110172092,
    description: "Safe and secure, Long Term Investment Strategy",
    author: "RADADIYA CHIRAGKUMAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/f0/f00/f00766db32d4dd7ea9141c58828ec2cd_cd96c396074146cfb4d5dc7d81033353.png",
  },
  {
    name: "Right trader",
    account: 110172168,
    description:
      "Good for all , copy at least equal equity for better performance & safe trading",
    author: "Mohammad Zareef  Ahmad",
    authorPhoto:
      "/st/media/pim/media/user_photo/ea/ea3/ea35642ed94e54c2dc6e3dbeaefc9bd4_d407a9980bcb4e1fbafbd1c9e64e7082.jpeg",
  },
  {
    name: "Money Plant",
    account: 110172201,
    description: "Gold",
    author: "SEETA DEVI",
    authorPhoto:
      "/st/media/pim/media/user_photo/e0/e0c/e0c67a6ce14d17e5659ce47a38b09d5f_25f64f63051f498bb6c2f07a3c84450a.jpg",
  },
  {
    name: "iTRADE  FX GROUP",
    account: 110172203,
    description:
      "I am a day trader and a technical analyst,  I major in top down analysis and fundamental analysis, for a maximum profitability of my subscribers.",
    author: "CHIAMAKA NWADIKE",
    authorPhoto:
      "/st/media/pim/media/user_photo/97/97f/97fdb7785be87bddbab80020dcd7be00_41222e24c2894b50b94891b6460a0e16.jpg",
  },
  {
    name: "Mission 1k - 100k",
    account: 110172224,
    description: "Journey From 1000$ to 100000$ in 100 days",
    author: "Sujit Sarfale",
    authorPhoto:
      "/st/media/pim/media/user_photo/f4/f49/f49d66b68e4203ffc2e3a5211704af0a_8855bcb021354ed59c5d4a32fcb7eb49.jpeg",
  },
  {
    name: "The Best Trader",
    account: 110172285,
    description:
      "This strategy was implemented by Mr. Xiro. He provides trading signals for gold, EURAUD, AUDUSD, DXY, GBPJPY. https://www.facebook.com/xirosoros",
    author: "CANH HUNG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/6e/6e7/6e7532ce714a716a404645ef6a43b4b3_64a5855fa6154d43b305c96fac11893d.jpg",
  },
  {
    name: "Step by Step",
    account: 110172363,
    description: "☆☆☆☆☆",
    author: "HARIS SHEHZAD",
    authorPhoto:
      "/st/media/pim/media/user_photo/04/047/047bff91553ae1d0562c6cadc205c4af_a8bb9fd78e224ad0b655a6ea868afdba.jpg",
  },
  {
    name: "Price Action",
    account: 110172371,
    description: "☆☆☆☆☆",
    author: "HARIS SHEHZAD",
    authorPhoto:
      "/st/media/pim/media/user_photo/04/047/047bff91553ae1d0562c6cadc205c4af_a8bb9fd78e224ad0b655a6ea868afdba.jpg",
  },
  {
    name: "Dodot Forex",
    account: 110172423,
    description:
      "INTRADAY TRADING\n🇮🇩 Xau Usd\n- MARTINGALE STRATEGY\n- SINGLE TRADE",
    author: "IRANI HERLIAWATI",
    authorPhoto:
      "/st/media/pim/media/user_photo/25/252/252851158a00034bf77940a841e91d6e_843e85d9dbcc4b219947e3d970fa9ded.jpg",
  },
  {
    name: "Daystar 24",
    account: 110172448,
    description: "Giao dịch nhỏ thành công vững.",
    author: "QỤÁCH TRÚC",
    authorPhoto:
      "/st/media/pim/media/user_photo/37/376/376bd9f6d8f92fab985316c3b74329e2_1a768a857594417cb47552312f0d73e3.jpeg",
  },
  {
    name: "RAMOSTRADER EA",
    account: 110172449,
    description:
      "An AI expert advisor trade system with high profit 24/7 with low risk pairs",
    author: "Luciano Ramos da Silva",
    authorPhoto:
      "/st/media/pim/media/user_photo/8d/8d2/8d2ae8d50adfa4f85833aee7f1a4bc4b_56e5fae584f446369443eac19cbc3fed.jpg",
  },
  {
    name: "MASTER BOT PAOTANG",
    account: 110172470,
    description:
      "EA TRADING this port Gold\nTrading Style(s):Quantitative Analyst.\nMarkets Traded:Crypto, Energy, Equities, Forex, Metals",
    author: "natuchapong sinsiriyanon",
    authorPhoto:
      "/st/media/user_photo/49/497/4975e61e2716777af31b37662382dbb1_9618a2b303df4d00986c5934bcc2a6af.png",
  },
  {
    name: "EXNESS6868",
    account: 110172484,
    description: "Chậm mà chắc",
    author: "Ban Nguyen Trinh",
    authorPhoto:
      "/st/media/pim/media/user_photo/b2/b23/b2358667dda27f3c56a2d49c560c06a0_18797d1d048649dab244d0d80ae73328.jpeg",
  },
  {
    name: "SMART  BOT",
    account: 110172495,
    description:
      "Avereging slow marty max 12 layer \nSL MAX 25%\nDISCLAIMER ON",
    author: "ESTHER MUGIANA",
    authorPhoto:
      "/st/media/pim/media/user_photo/9b/9ba/9baa6c17b6c3aace95f54c70b9de34c3_a51e87e084dd4e61b419a26de04129f6.png",
  },
  {
    name: "Growing Capital -BWP",
    account: 110172505,
    description: "increate your portfolio with Low Risk",
    author: "Asim Hashim",
    authorPhoto:
      "/st/media/pim/media/user_photo/40/40d/40d95408922331cbf52337ec743b0629_e5f7ace02f454e26971143af59be97c8.jpg",
  },
  {
    name: "PROFIT DONE",
    account: 110172572,
    description:
      "Every month you will get a return of 15% to 25% and that too without any major risk. Let us earn a good income along with the safety of your funds.",
    author: "Manoj Kumar",
    authorPhoto:
      "/st/media/pim/media/user_photo/aa/aa1/aa193ddb8857b037d1c0fb7ee20ffc21_8c891450ebd34eb5a0dd3abc5a8e6f55.png",
  },
  {
    name: "FOREX MASTER - 2",
    account: 110172590,
    description:
      "I am a full time trader with more than 4 years experiences. With a strict discipline, I make a stable profit each month",
    author: "TRAN VAN AN TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/ea/eaf/eaf47469951b912cd97f86d197cf66e0_c66264a2c1f24a99807677f284962094.jpg",
  },
  {
    name: "NOTHING",
    account: 110172671,
    description: "NOTHING",
    author: "Rahadian Bramandito W",
    authorPhoto:
      "/st/media/pim/media/user_photo/05/051/0518106c7c2d4ce978b7ff89cc71c17b_2f0a19ec83294c43975e40642c7cbc13_iT4N6es.jpg",
  },
  {
    name: "TR TRADE GOLD",
    account: 110172776,
    description:
      "Chiến lược \n- Stoploss 1-1,5% lệnh \n- Mục tiêu tuân thủ nguyên tắc bảo toàn vốn, kỷ luật\n📲Zalo 0333220436\nTelegram: @TrExness",
    author: "XUAN TRUONG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/b5/b54/b549b83a041a0df747b89ccf92c16ba2_178ebe76dc5041cbaea57394e3f7c5e5.jpeg",
  },
  {
    name: "Naachiyaar prabu",
    account: 110172858,
    description: "Don't waste your bullets",
    author: "PRABU",
    authorPhoto:
      "/st/media/pim/media/user_photo/bd/bd4/bd4ab1d09c8bbd4863cdc0e0e8126de9_eac18e35395244628ee0c0701a91f71e.jpg",
  },
  {
    name: "Dream Partner",
    account: 110172862,
    description:
      "“Unlock prosperity with Dream Partner: Where financial dreams converge, profits soar, and unity flourishes!” 🌱",
    author: "FERDOUS WAHID",
    authorPhoto:
      "/st/media/pim/media/user_photo/76/760/760cce50b1940128da41bc28ff1f757b_184d79dca6ef47ca8f70d15e9f6165cf.png",
  },
  {
    name: "Gold Miner",
    account: 110172882,
    description:
      "Lost my old account accidentally. Low risk low return strategy.\nTarget 10% - 15%\nContact:\nhttps://whatsapp.com/channel/0029VagAgrm0LKZDo2ld5A2f",
    author: "MUHAMMAD SALEEM",
    authorPhoto:
      "/st/media/pim/media/user_photo/ba/ba1/ba105df95e054d3fc9dd1074f545fdf5_5fd71a515e1042c79aeddc2d54b82394.jpg",
  },
  {
    name: "_ST _future",
    account: 110172887,
    description: "التداول ب اقل لوت بعيدا عن المخاطره",
    author: "tahany mahmoud",
    authorPhoto:
      "/st/media/pim/media/user_photo/89/89f/89f5ce6c3a1e0b3eddeab3892afceb30_9839daab1dc140888668a71200ce4345.jpeg",
  },
  {
    name: "Bdvtfx_vinod",
    account: 110172928,
    description:
      "Scalping & perfect entry profit is main aim not a target \nSupport & resistance trend & trade",
    author: "vinod kumar",
    authorPhoto:
      "/st/media/pim/media/user_photo/4f/4f9/4f99240ef3c4150b88ec5cc1f023141d_e82f0eb6e279446fb08a6347f05dfb8a.jpg",
  },
  {
    name: "huyphaisinh123",
    account: 110172950,
    description:
      "thứ giết chết trader chính là lòng tham. tiết chế lòng tham thì sẽ sống sót ở thị trường này. liên hệ đầu tư sđt 0988719261",
    author: "biển phạm thị",
    authorPhoto:
      "/st/media/pim/media/user_photo/e1/e10/e104f3a19882ac570ddddfc28be25f3e_0a969fe69680439b8dc63f6dbeb37a87.jpg",
  },
  {
    name: "Tcoin FX 02 - BTC",
    account: 110172973,
    description:
      "Đây là tài khoản để giao dịch BTC. Mức độ sụt giảm tài khoản tối đa <30%. Nên copy tối thiểu bội số 505$ (505$,1010$,...,2020$,...,50.500$)",
    author: "Toan Nguyen Huu",
    authorPhoto:
      "/st/media/pim/media/user_photo/d4/d4d/d4df8a2342f9bd1fb519445a5b8267a5_b000e27cf0c5413eb0288e30f9d55a20.jpg",
  },
  {
    name: "GOLD BUDDY_1",
    account: 110172976,
    description: "Profit consistency and Risk management.",
    author: "Jirawan Wonkaonoi",
    authorPhoto:
      "/st/media/pim/media/user_photo/70/70b/70b85a114717fef9927ac67b42c0d027_2dfa46fe95eb46fa895ec8756fbdaee4.jpeg",
  },
  {
    name: "havy love 2022",
    account: 110172992,
    description: "nơi ty bắt đầu",
    author: "Manh Dinh khac",
    authorPhoto:
      "/st/media/pim/media/user_photo/73/736/7363f4fb22e43837c854ac36e49930c0_698e04f075dc4063a358a277e6c871c0.jpeg",
  },
  {
    name: "QuantumFX Scalper",
    account: 110173002,
    description:
      "Custom EA. Checkout the track record on telegram https://t.me/quantumfxTm\n20% per month profit target",
    author: "SHAMITHA WIDANAPATHIRANA",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/601/6013b2c113498e844af6be0e0dd691d2_96877ff252004d39872e5f53c35351ca.png",
  },
  {
    name: "LOMA81 RESCUE",
    account: 110173019,
    description: "กู้ภัยพาเทรด\nการลงทุนมีความเสี่ยง โปรดศึกษาก่อนลงทุน",
    author: "นิธิศ แสงชาติ",
    authorPhoto:
      "/st/media/pim/media/user_photo/f6/f60/f60be8e4ddac7f03802f359d9340df00_3e0f84cb309c48fe9f7bcaf6b945f248.jfif",
  },
  {
    name: "1000XMake Money",
    account: 110173024,
    description: "rowrisk",
    author: "ACTING SUB LT PATIPAT UDOMSAREE",
    authorPhoto:
      "/st/media/pim/media/user_photo/6c/6cc/6cc0e9e761c0b0d4b949ba22d33d9ad9_e02c4cf30f184781beda71e38d2a2322.jpeg",
  },
  {
    name: "Golden Buffalo",
    account: 110173038,
    description:
      "Night scalp for XAUUSD\nOpen and close in 2 hours\nBuffalo pro just update interest rate version\nsupport telegram @goldenbuff",
    author: "DANH DUC HOANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/d1/d1e/d1e075b74cf623f19322ff587e805191_b155d6f77aad4df18269f95c32a40d0d.jpg",
  },
  {
    name: "Fx scalper",
    account: 110173046,
    description: "Monthly target 20%",
    author: "Hemant singh",
    authorPhoto:
      "/st/media/pim/media/user_photo/06/060/0600d6e716b2567ca87c065438370228_a2065768ef564014b03f0eb101b2c327.jpeg",
  },
  {
    name: "OrdinaryMiracle365",
    account: 110173050,
    description: "It's ordinary miracle today",
    author: "NGOC CHUNG LAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/59/59c/59c3825c6f77a59763629790a172e0a7_e63d0966d3674e7b960c785481faf292.jpg",
  },
  {
    name: "EURUSD_GOLD",
    account: 110173055,
    description: "kỷ luật và giảm rủi ro là vấn đề quan trọng của chúng tôi.",
    author: "Phuong Tran huu",
    authorPhoto:
      "/st/media/pim/media/user_photo/a3/a3c/a3c1c800987a3593c6d5a53a3d3537cb_97f04ff33d4e4f628a2f194d7a24277d.jpg",
  },
  {
    name: "vuongphantrdo",
    account: 110173066,
    description:
      "Lợi nhuận cao, rủi ro cao. Hãy đầu tư số vốn mình có thể chấp nhận được. Cùng download tiền về nào.",
    author: "Vuong Phan Hong",
    authorPhoto:
      "/st/media/pim/media/user_photo/36/36e/36ef61a7c235a8231af2cbe367cd8785_65ec0dac187a4877a5fe1054ab191b42_tZl0F0E.png",
  },
  {
    name: "vuongphan chung",
    account: 110173068,
    description:
      "Rủi ro và lợi nhuận trung bình, hãy quản lý vốn tốt để không ảnh hưởng đến cuộc sống của bạn. Hãy cùng tôi download tiền về nào.",
    author: "Vuong Phan Hong",
    authorPhoto:
      "/st/media/pim/media/user_photo/36/36e/36ef61a7c235a8231af2cbe367cd8785_65ec0dac187a4877a5fe1054ab191b42_tZl0F0E.png",
  },
  {
    name: "Khan khan kh",
    account: 110173101,
    description: "Low risk low risk",
    author: "QAZI SHAH",
    authorPhoto: null,
  },
  {
    name: "Moonwalker",
    account: 110173106,
    description:
      "The adventure to the moon : Turn $2,000 into $100,000 in 2 years (by 2026). Who want to be moonwalker ? Join us now!",
    author: "SARUN SEEPOMKUN",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5a3/5a3264dffaae94489584e97500951032_3f016d93bc4946398cc1365c95a00908.png",
  },
  {
    name: "LangTufxVIP",
    account: 110173115,
    description: "Giao Dịch Daily Trading Với SL",
    author: "Thị Hồng Ly Nguyen",
    authorPhoto:
      "/st/media/user_photo/69/699/699908ee4b90c104126bf92ac1faa3ad_ac4c3aea42a94776908284d387d4a128.jpg",
  },
  {
    name: "Empire Market Echo",
    account: 110173119,
    description:
      "My copy trading service allows you to automatically copy my trades, potentially monthly returns of 8% to 15% Telegram - https://t.me/Empire_Mrkt",
    author: "Saeem Shaikh",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee6/ee633956b1c7eb6dc614273c65b83312_e638acb01d844a058c7ebda9dce2937a.jpg",
  },
  {
    name: "LTH SIGNAL24",
    account: 110173240,
    description:
      "3% PERDAY\n While you are sleeping, our trading methods and tools still generate money regularly 2-3% a day for you",
    author: "LÊ HỊẾỤ",
    authorPhoto:
      "/st/media/pim/media/user_photo/54/54b/54be330480bcb88b1cde2c98bf00b90f_c5a95369cd214a29b03440179bbd945d.jpeg",
  },
  {
    name: "TRADING TOP",
    account: 110173269,
    description:
      "Tiêu chí giao dịch ổn định, bền vững, có SL, TP đầy đủ. \nQuản lý vốn: Mức sụt giảm không quá 3%/ngày và 20%/tháng.",
    author: "NGUYẺN HIẾU",
    authorPhoto:
      "/st/media/pim/media/user_photo/4f/4f9/4f9f85e77deec8d81141a35897f53ea7_1d1cbf628f234d9b8b6f90847fc2f67d.JPG",
  },
  {
    name: "Beyond Infinity",
    account: 110173379,
    description:
      "Trading is inside game\n\nYou can have best system, ideas, plans and practices\n\nBut in the end, your mindset deternines your success.",
    author: "Akshay  Raut",
    authorPhoto:
      "/st/media/pim/media/user_photo/77/77f/77f2b5fbc2c13f06ded552db65e065c8_6d33dbed34e544e8a5641df406a0e7e1.jpg",
  },
  {
    name: "Smart Train Block",
    account: 110173484,
    description:
      "Chiến lược này sử dụng các công cụ phân tích kỹ thuật và chỉ báo thông minh để phát hiện các điểm cản quan trọng. mục tiêu 300% trong 1 năm",
    author: "THANH PHUONG NONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/87/879/87929dd428b8d52677844e84d59eb5f9_91c67e2233cb4bba80d4922e672f99a7.jpg",
  },
  {
    name: "Smart Asset Grow",
    account: 110173534,
    description: "Keep Smiling",
    author: "JYOTI PODDAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/3b/3bb/3bb27ddf1d90cf0e73434d63dfff75b7_a1f77b7461434e7eb4c6ef64c6a97a19.jpg",
  },
  {
    name: "Fx_Revolt Trade",
    account: 110173546,
    description:
      "Forex trading, or FX trading, involves buying and selling different currencies with the aim of making a profit. At its core, forex trading is about",
    author: "SATENDRA SINGH",
    authorPhoto:
      "/st/media/pim/media/user_photo/42/42f/42f7f97cffeb74b8a490b15b43515a88_35bffe89d5144b36a1cd88d139f7717d.jpg",
  },
  {
    name: "HUNTING XAU DAILY",
    account: 110173551,
    description:
      "PP giao dịch của tôi là chặn đường dài và tuân thủ kỉ luật. Sẽ có lúc đúng lúc sai, nhưng với R/R 2/1 và tỉ lệ winrate 60-70% bạn sẽ có lợi nhuận.",
    author: "ĐĂNG HÀ",
    authorPhoto:
      "/st/media/pim/media/user_photo/ab/ab4/ab405932638249ac50a4a8f4e15edd69_6ad21595b35642c8b7034ac5d38aebd0.png",
  },
  {
    name: "Secured and Fast",
    account: 110173574,
    description: "Safety first and let the profit runs to you",
    author: "FERICO",
    authorPhoto:
      "/st/media/pim/media/user_photo/80/803/803e93cfc3b63afe809863809893862a_8f5e969a3290427893f9a46273c39ed1.jpeg",
  },
  {
    name: "KES Academy",
    account: 110173577,
    description:
      "Fund managerment is very important. I start with 10k and withdraw profit at the end of the month. If I lose, I will redeposite 10k to restart again",
    author: "Trong Thuy Le",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f5a/f5aa79f1699547c474da2541713d49e3_9a21dd4412d343daabd70773f1083ed9.jpg",
  },
  {
    name: "KES Academy",
    account: 110173580,
    description:
      "Fund managerment is very important. I start with 10k and withdraw profit at the end of the month. If I lose, I will redeposite 10k to restart again",
    author: "Thi Thanh Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/b1/b15/b153f52918a52fadff3cdc1b5ff04f42_93c79fcd90e94f2fb192868e416f0f7f.jpg",
  },
  {
    name: "KES Academy",
    account: 110173585,
    description:
      "Fund managerment is very important. I start with 10k and withdraw profit at the end of the month. If I lose, I will redeposite 10k to restart.",
    author: "Gia Vinh Le Pham",
    authorPhoto:
      "/st/media/pim/media/user_photo/b8/b8c/b8c0334891da7586b6a556d1ba9faf6d_43c0243e9e4748ae86a15ea1c6d97693.jpg",
  },
  {
    name: "Ride The Waves",
    account: 110173584,
    description: "Forex pro",
    author: "Hoàng Lê văn",
    authorPhoto:
      "/st/media/pim/media/user_photo/f6/f6c/f6cb1a64690d3a45e3021cc05a389f0a_d7ce948a7d9042faac7980e8a4179a0a.png",
  },
  {
    name: "KES Academy",
    account: 110173586,
    description:
      "Fund managerment is very important. I start with 10k and withdraw profit at the end of the month. If I lose, I will redeposite 10k to restart.",
    author: "Gia Vinh Le Pham",
    authorPhoto:
      "/st/media/pim/media/user_photo/b8/b8c/b8c0334891da7586b6a556d1ba9faf6d_43c0243e9e4748ae86a15ea1c6d97693.jpg",
  },
  {
    name: "ONLY GU Lyzz",
    account: 110173621,
    description: "1. AN TOÀN\n2. LỢI NHUẬN",
    author: "Thị Mỹ Linh Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/af/af6/af629fd3c3607f57c60a4ac80b658e3f_f69e14d24561486592c07dde39c5fae4.jpg",
  },
  {
    name: "Passive Income",
    account: 110173643,
    description:
      "1% a day guaranteed!\nMy strategy consists of scalping GOLD with small movements to make a profit.\nTrade on NY session except when there is news.",
    author: "diego richardi",
    authorPhoto:
      "/st/media/pim/media/user_photo/be/bec/becd5f4447afad7ec56ad84c498a5c4a_9ddf32bf59d44c97854f8687fab146e1.png",
  },
  {
    name: "SupplyNDemand JIGGU",
    account: 110173659,
    description: "Trades based on Zones and Fresh Support and Resistance",
    author: "Zia Ullah Khan",
    authorPhoto:
      "/st/media/pim/media/user_photo/fb/fb3/fb33e50a9b619c82b5b064378d898ba0_6847f242be1e450f8839692b54c809a0.jpg",
  },
  {
    name: "QuíckPip Balance",
    account: 110173689,
    description:
      "Unlock the power of QuíckPip Series with a 99.44% win rate. Transform your trading journey with exceptional success and unmatched precision.",
    author: "Hữu Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/38/38a/38a05260e46577c8ed0a6182209c33fd_6d5bccfa38764b99b36c9d71352b1130.png",
  },
  {
    name: "Islamic Strategy",
    account: 110173702,
    description: "Islamic Strategy With Free Swap and lower leverage",
    author: "Adam Shadid",
    authorPhoto:
      "/st/media/pim/media/user_photo/2e/2ea/2eabc9e2f122cc71acfe73e8c8d8d1ea_12c89c3d58f1487496accd03b61f32fa.jpg",
  },
  {
    name: "Islamic Strategy EA",
    account: 110173703,
    description:
      "Islamic Strategy without leverage and free swap working with EA",
    author: "Adam Shadid",
    authorPhoto:
      "/st/media/pim/media/user_photo/2e/2ea/2eabc9e2f122cc71acfe73e8c8d8d1ea_12c89c3d58f1487496accd03b61f32fa.jpg",
  },
  {
    name: "GT Capital",
    account: 110173723,
    description: "Forex",
    author: "Eduardo Gómez Torrez",
    authorPhoto:
      "/st/media/pim/media/user_photo/5b/5b3/5b3fae7c0dcba1cc5faa5a1ba3935ce9_fb6a77c74f474620a09e0cc132a55a04.jpg",
  },
  {
    name: "Macd Pro",
    account: 110173732,
    description:
      "Hi all 🤗 \nBy keeping the capital safe and secure, we assure you to earn maximum profit daily.\n\nThanks for support",
    author: "sabiq Thanikkat",
    authorPhoto:
      "/st/media/user_photo/f8/f83/f83c53bea28b6b5c0b21a2bcb59f2789_629124f7bdd34e24b0d741f98b3e7190.jpg",
  },
  {
    name: "Gold Rich Stable V2",
    account: 110173762,
    description:
      'We have trade Gold only. Returns 5-10% per month.\nConfident our system and strategy. \nSystem is control "risk per trade" so do not worry about drag.',
    author: "Mr. JAKKRIT PHUPHANPETCH",
    authorPhoto:
      "/st/media/pim/media/user_photo/4d/4db/4db8921b3fd0fc9e153c6bf7c8194be0_c611e344a3214184a5ce33ccb27c4f8c.png",
  },
  {
    name: "Tien Nhat Office",
    account: 110173782,
    description: "Quản Lý vốn 0.02",
    author: "Tiến Nhất Bui",
    authorPhoto:
      "/st/media/pim/media/user_photo/27/272/2723368e4dfe88a1beac910cb0057790_854930d199404b0c88fd0bab868c08f0_a56cS7e.png",
  },
  {
    name: "Tien Nhat Office",
    account: 110173784,
    description: "Quản Lý Vốn 0.02",
    author: "Tiến Nhất Bui",
    authorPhoto:
      "/st/media/pim/media/user_photo/27/272/2723368e4dfe88a1beac910cb0057790_854930d199404b0c88fd0bab868c08f0_a56cS7e.png",
  },
  {
    name: "BTC EA Trade 02",
    account: 110173789,
    description: "Target a monthly return rate of 20-30%.",
    author: "晓伟 胡",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/86a/86af3ba2af5597045063859b60ef97c5_0fe53411895b4752be248f2c089bd45f.png",
  },
  {
    name: "FD Hedge Fund",
    account: 110173793,
    description:
      "FD is a group of Professional Traders who managing Huge Hedge Funds Globally. We Copy that trades here for small investor.(Exp Yearly ROI 277-3433%)",
    author: "Muhammad Farooq Muhammad Siddique",
    authorPhoto: null,
  },
  {
    name: "GOLD PRO EA",
    account: 110173807,
    description: "- 100% EA\n- Bền bỉ vói sóng gió\n- Vốn chuẩn 5k.",
    author: "TRẢN LỌC",
    authorPhoto:
      "/st/media/pim/media/user_photo/23/232/2326fc0f154f2e55cdc8265186c54992_a51d5795b6e04d149b5675a23c8c740a.jpg",
  },
  {
    name: "Gold Safe Trading",
    account: 110173814,
    description: "Gold trading high risk high return",
    author: "Arman  Mushtaq",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f87/f87f2cd70a09503181d0fe915d14b1de_709c5ad43a8d45749de5ed3d11e90d99.jpg",
  },
  {
    name: "Himalayan FX Trader",
    account: 110173840,
    description:
      "Leading financial services firm offering tailored solutions for wealth management, investment, and financial planning.",
    author: "KESHAV SAHA",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee6/ee62124b4772894c68cf7cb1468045ac_eafbd0fef7b243dbbda585d538c1fbfc.jpg",
  },
  {
    name: "ATURO VIETNAM GBPUSD",
    account: 110173900,
    description:
      "- Mục tiêu lợi nhuận 10 - 20%/tháng.\n- Giao dịch thuần EMA & ICHIMOKU",
    author: "HUNG LE VAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/13/139/13933933199204e84b0e1039c672e536_10f38f27c3d34566977824431bffe571.jpeg",
  },
  {
    name: "ATURO VIETNAM EURUSD",
    account: 110173906,
    description:
      "- Mục tiêu 8-15%/tháng\n- Swing trading\n- Không ngày nào lỗ\n- Giao dịch thuần EMA &ICHIMOKU",
    author: "HUNG LE VAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/13/139/13933933199204e84b0e1039c672e536_10f38f27c3d34566977824431bffe571.jpeg",
  },
  {
    name: "ST FX Auto Trader 2",
    account: 110173907,
    description: "Different strategy with Low risk and stable income",
    author: "Sultan  Alshamsi",
    authorPhoto:
      "/st/media/pim/media/user_photo/18/180/1807c682cd4c4c2355bcd3d681fbf0c1_d09fd38e51b442cf92dfe5baa641bb68.jpg",
  },
  {
    name: "TRADING IS HAVE FUN",
    account: 110173912,
    description: "Trading should be flexible and fun",
    author: "HONG NHUNG PHAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/b7/b77/b774312bf2a47057611e334ba3321116_4352247780814d9e8d2f48edb9040e74.png",
  },
  {
    name: "Quantum Trade",
    account: 110173926,
    description:
      "Quantum Trade-Revolutionizing Market Strategies\nWe aims to achieve superior performance and capture market opportunities with unprecedented accuracy",
    author: "THI KIM CHAU NGUYEN",
    authorPhoto: null,
  },
  {
    name: "Jonh Wick 3",
    account: 110173933,
    description: "Gold Scalping",
    author: "THANH HOANG PHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50a/50a0ee43bc16db9ccddc9fc1578f0fa5_43739171f7624ad389af6f00d4aa5425.jpg",
  },
  {
    name: "Volume spread analys",
    account: 110173946,
    description: "We do trades on volume base",
    author: "Humayun Malik",
    authorPhoto:
      "/st/media/pim/media/user_photo/eb/eb1/eb1477b521d4f236b417530cd1307255_29a67692561641b9902288b2594ac592.jpg",
  },
  {
    name: "ZERO-RISK-TRADING",
    account: 110173958,
    description:
      "Zero-risk trader, you will get profit slowly but we make sure first your fund is safe then we work on consistent profit.monthly Returns 7% to 15%.",
    author: "rajishkumar H",
    authorPhoto:
      "/st/media/pim/media/user_photo/c1/c13/c13bb42ffc74496c6fc4f2a649265dc0_f626ebdbcd374e99b64eefe3e7eb6849.jpg",
  },
  {
    name: "Forex Calendar AI",
    account: 110173962,
    description:
      "🌟 Introducing the AI-Driven Forex Strategy: Unleash Your Trading Potential! 🌟",
    author: "mahmoud darwish",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f58/f587e946e4ce1517d407df78d918459c_d05a7b19476147d8b4f08667eae2a210.jpeg",
  },
  {
    name: "VijayFx897",
    account: 110173977,
    description:
      "Hello Investors,OurRisk free trading strategy your fund is always safe here , so u can copy with big fund to earn HIGH profit. You are on right place",
    author: "MANOJ  PRASAD",
    authorPhoto:
      "/st/media/pim/media/user_photo/8c/8ce/8cedbc51434fb2e50aa36e373697284f_50218b1707d04e27aeeb8269b3cd375a.jpg",
  },
  {
    name: "HighRiskHighReturn1",
    account: 110174001,
    description:
      "EA same as Daily 1 percent\r\nBut reduce equity from 5000 to 3000$\r\nAccumulate profit until 4000$",
    author: "ACTING SUB LT PIYAPONG SASOONTARA",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e21/e217cc888eeac64a72587a2ccef51616_c6b63dff56f141628ef6eef53db928e2.png",
  },
  {
    name: "Fast gold robot",
    account: 110174012,
    description: "EA Price action momentum and grid martingale",
    author: "PONGSAK PUNLA",
    authorPhoto:
      "/st/media/pim/media/user_photo/5e/5e2/5e2a767471e9a838f8686e8d53d04ca1_c36ed5f8b71c4c61b8d144d2ee564068.jpg",
  },
  {
    name: "SCALPING TRADING ONE",
    account: 110174088,
    description: "SCALPING TRADING",
    author: "somsak direkwatanasarn",
    authorPhoto:
      "/st/media/user_photo/89/89b/89be4aadaca5a61927ab7f0577844e88_7eb721d1ccd9484f9d3dc89e6e14c50e.jpg",
  },
  {
    name: "MR  FOREX",
    account: 110174112,
    description:
      "I am doing Auto Robot trading from last three years with zero Percent  loss. To earn 10%-20% monthly profit of your investment please copy my account.",
    author: "Mubashir ali",
    authorPhoto:
      "/st/media/pim/media/user_photo/a2/a2f/a2fd5523be621e1f5f721f5a784f6aee_2a1f10f0d5074927a123463bc1fa49b0.jpg",
  },
  {
    name: "Rajpout ProfitMaster",
    account: 110174113,
    description:
      "Earn 10 to 20% Monthly \nLess then 1000$ Should be risky \nFor query \nt.me/RahielRajpout\nIts Robot Dude",
    author: "Muhammad Tahir",
    authorPhoto:
      "/st/media/pim/media/user_photo/a3/a32/a32d4cdc89bac80c67f847df4ad04a8c_0e36d952d2084481a0663360d4633e28.JPG",
  },
  {
    name: "xToro - GGG",
    account: 110174176,
    description: "Testing",
    author: "Nhuong Nguyen Vu Le",
    authorPhoto:
      "/st/media/pim/media/user_photo/4e/4ed/4edcc8a386a3e65e34875d33d0086d3c_872c6608fa3c40a99c5ad896a42cc2b9.jpg",
  },
  {
    name: "AHG trading 88",
    account: 110174224,
    description: "Mạnh dần theo thời gian",
    author: "LÊ ANH",
    authorPhoto:
      "/st/media/pim/media/user_photo/b6/b63/b638cdb16ee2e4e8fcc46093964fb813_c95d19e6c86845e09f5bc06c1ca8731d.jpg",
  },
  {
    name: "Easy Money",
    account: 110174228,
    description: "Monthly  Return 5  % to 10 %",
    author: "imran ghani",
    authorPhoto:
      "/st/media/pim/media/user_photo/f0/f05/f051269bb0afacba47481d4110dfeb0c_7beaabbfa018439180800b29776d41b7.jpg",
  },
  {
    name: "Heaven",
    account: 110174246,
    description:
      "Với 1$ nhân đôi liên tục 20 lần sẽ thành 1 triệu$.\nLợi nhuận 30% tháng thì 2,5 tháng sẽ nhân đôi 1 lần.\nĐầu tư 1000$ chờ đợi trong 25 tháng 💪",
    author: "Đức Việt",
    authorPhoto:
      "/st/media/pim/media/user_photo/00/007/0070004b9f76c63c8b5aa88b8b2127bb_fb7236ab5730418e8b56ef8683aa0df0.jpeg",
  },
  {
    name: "EAGLES PART 1",
    account: 110174248,
    description: "FOLLOW US",
    author: "MOSTAFA  SUBRY",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/620/620cdec8f8b03289197218b973077767_b97312b30e5042cea3bf492b54b575a2.jpeg",
  },
  {
    name: "EAGLES PART 2",
    account: 110174249,
    description: "FOLLOW US",
    author: "MOSTAFA  SUBRY",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/620/620cdec8f8b03289197218b973077767_b97312b30e5042cea3bf492b54b575a2.jpeg",
  },
  {
    name: "Legend Pro1",
    account: 110174255,
    description:
      "Với 1$ nhân đôi liên tục 20 lần sẽ thành 1 triệu$.\nLợi nhuận 30% tháng thì 2,5 tháng sẽ nhân đôi 1 lần.\nĐầu tư 1000$ chờ đợi trong 25 tháng 💪",
    author: "Đức Việt",
    authorPhoto:
      "/st/media/pim/media/user_photo/00/007/0070004b9f76c63c8b5aa88b8b2127bb_fb7236ab5730418e8b56ef8683aa0df0.jpeg",
  },
  {
    name: "EAGLES PART 3",
    account: 110174256,
    description: "FOLLOW US",
    author: "MOSTAFA  SUBRY",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/620/620cdec8f8b03289197218b973077767_b97312b30e5042cea3bf492b54b575a2.jpeg",
  },
  {
    name: "EAGLES PART 4",
    account: 110174257,
    description: "FOLLOW US",
    author: "MOSTAFA  SUBRY",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/620/620cdec8f8b03289197218b973077767_b97312b30e5042cea3bf492b54b575a2.jpeg",
  },
  {
    name: "XHQ pro trading",
    account: 110174259,
    description:
      "Cặp giao dịch chủ yếu: XAU và US30. Giao dịch trung han, rủi ro thấp.",
    author: "HOANG QUE BUI",
    authorPhoto:
      "/st/media/pim/media/user_photo/25/254/2543efe21ec29dc7b8256d386fbb8db6_0c9ca4a05ab447b8a79b45bbe1e8c357.png",
  },
  {
    name: "Pinnacle Trades",
    account: 110174268,
    description:
      "Hii Investors, Follow me for Risk-Free trades. Your capital is save with us. We follow proper Risk management & Stop-loss strategies",
    author: "Venkadesh Selvaraj",
    authorPhoto:
      "/st/media/pim/media/user_photo/dc/dcf/dcf6f035bbe3908f865e2e6739f3cf77_c3a7949839594941a2dbe6c40fa35ab5.jpg",
  },
  {
    name: "Daily 2 percent plus",
    account: 110174271,
    description:
      "daily 2% profit confirmed . safe and secure . minimum risk . take withdrawal every week\nhttps://whatsapp.com/channel/0029VaWPXwv1Xquci9QlD525",
    author: "muhammad bilal",
    authorPhoto:
      "/st/media/pim/media/user_photo/8f/8f8/8f8939a591431115e316437fb0cb7245_db58d311267a4697bc19159b495c770a.png",
  },
  {
    name: "KingSwingMan",
    account: 110174273,
    description: "10% per DAY 70% per WeeK",
    author: "VAN SANG DO",
    authorPhoto:
      "/st/media/pim/media/user_photo/af/afd/afd7aaca69a26f98a6d96bec515fd1e4_cdac499262a04a88b106089f4864ecd2.jpg",
  },
  {
    name: "KING F2024",
    account: 110174279,
    description: "3% PERDAY\nPrint money machine",
    author: "LÊ HỊẾỤ",
    authorPhoto:
      "/st/media/pim/media/user_photo/54/54b/54be330480bcb88b1cde2c98bf00b90f_c5a95369cd214a29b03440179bbd945d.jpeg",
  },
  {
    name: "Gold Invester 567",
    account: 110174322,
    description:
      "ออกออเดอร์ ตามแนวรับแนวต้าน ตามเงื่อนไข ผลกำไร คาดการณ์ 1% -5% ต่อวัน และ 50% ต่อปี",
    author: "MR VARA LIM IM",
    authorPhoto:
      "/st/media/user_photo/70/70a/70a2028cc902b0a077a6ef518e47222a_caca43a2d2d147e8864325c504384dd7.jpg",
  },
  {
    name: "Jacksparrow",
    account: 110174329,
    description:
      "Hello investors, \nPlease make sure you add at-least 100$ to start copy trading and to manage risk reward ratio. \n\nThank & regards\nAnkur Kathiriya",
    author: "KATHIRIYA CHHAGANBHAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/93/938/938245ce18a654d76fb125c09a7c52d7_d0ffe600fffc4a48a4735917a4dfe096.jpg",
  },
  {
    name: "Stable Income",
    account: 110174414,
    description: "- XAUUSD\n- Scalping\n- m5/m15\n- Basic with tactics",
    author: "An Phan",
    authorPhoto:
      "/st/media/pim/media/user_photo/90/905/90595a527774347402459ded0a8aa752_66d3b889424242e1af7633a157720517.png",
  },
  {
    name: "Perfect Gold EA",
    account: 110174449,
    description: "X",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c6d/c6dfd97f9be07ba3ca7391cc8c0eb9c2_a10c73f527714be0b7a818b21c15e3ef.jpg",
  },
  {
    name: "Gold Extra EA",
    account: 110174463,
    description: "x",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/ac/ace/ace529c85edbea776a06cb904b0eb20f_e2fe8118fbe948429969c3a67592c557.jpg",
  },
  {
    name: "Gold Extra EA1",
    account: 110174464,
    description: "X",
    author: "MR THANUSAK CHALUTHONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/ac/ace/ace529c85edbea776a06cb904b0eb20f_e2fe8118fbe948429969c3a67592c557.jpg",
  },
  {
    name: "Profit Hunter",
    account: 110174465,
    description:
      "Hello Friends.. Low Risk Trader Always Use SL So Follow Me.. Let's Profit Together Thanks..",
    author: "QAMAR SHAHZAD",
    authorPhoto:
      "/st/media/pim/media/user_photo/3d/3d0/3d00ee0839bbb307f72fceb76860f3a8_70c3ba96cc034d88bfb71098514839f1.png",
  },
  {
    name: "Omakase888",
    account: 110174484,
    description: "Omakase style",
    author: "Tithipan Chinsakulcharoen",
    authorPhoto:
      "/st/media/pim/media/user_photo/e9/e9b/e9ba4e74a670868756efcd0c7c5f2c5d_57fbc9fc676949b78b5e571f5a35afa3_HNfc8sU.jpg",
  },
  {
    name: "PIP GROWTH",
    account: 110174488,
    description:
      "PIP Growth is a trading strategy that aims to capture price movements and generate consistent profits.",
    author: "EEDEE BRIGHT IGONI",
    authorPhoto:
      "/st/media/pim/media/user_photo/09/093/09375757771ec5994040d9d024d14293_c390d2aac617486387ec2b8d14199363.jpg",
  },
  {
    name: "MJ-XAUUSD-Sniper-R1",
    account: 110174522,
    description: "Trade by Robot , Risk 1 , All Order set TP and Stop Loss",
    author: "Pramuk Wichit",
    authorPhoto:
      "/st/media/user_photo/0a/0a8/0a8e4c2ca1fedf05c9c42983a8dabc9a_d13db84137b3404a8d754ef1f18210a1.jpg",
  },
  {
    name: "DXB Royel Gold Trade",
    account: 110174529,
    description: "i have a good strategy for gold trade lets go together",
    author: "Asaduzzaman  Ismail Hossain",
    authorPhoto: null,
  },
  {
    name: "Gold Scalping",
    account: 110174541,
    description: "Profit target is 5-10% per month",
    author: "Muhammad Rafique",
    authorPhoto:
      "/st/media/pim/media/user_photo/b3/b33/b339b269e4f54c1d3f04b9e96c5c0721_021779746a3b4147af930bd33718d84c.jpg",
  },
  {
    name: "Survivor",
    account: 110174568,
    description:
      "Small profit but stable.\nTarget 10% ~ 15%/month.\nProtect equity is 1st priority.\nGo with me 👉https://www.exness.com/a/tea3oea3",
    author: "Văn Tuấn Anh Ngô",
    authorPhoto:
      "/st/media/pim/media/user_photo/35/356/3567995f5948979efc21ef4e72e91cab_dfa66812d5d9479093eade36dd3c0573.jpg",
  },
  {
    name: "Trader 15Dollar",
    account: 110174589,
    description: "Trader15dollar",
    author: "Hoang Tran Van",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f54/f54dde97896bbeb07299a89c59f3e057_630727439c5f43b79fefeeaff38fd1fb.png",
  },
  {
    name: "Strategy X",
    account: 110174592,
    description: "Single trades with profit and stop loss",
    author: "kumar chainani",
    authorPhoto:
      "/st/media/pim/media/user_photo/08/087/08741923ad8ef6aa82c689e720bad36f_07076e4f490c47a1bd22af2ca4413b2c.jpg",
  },
  {
    name: "Resurrection2 Trader",
    account: 110174607,
    description: "For All",
    author: "KAKI  S P S REDDY",
    authorPhoto:
      "/st/media/pim/media/user_photo/82/828/82864bfeba117f4bfbad412544de8a48_8bc5d466308644caafdba83b0862dd3e.jpg",
  },
  {
    name: "Ayrton Senna Forever",
    account: 110174615,
    description:
      "Trading with the philosophy and behavior of a Champion, seeking perfection, in honor of the Eternal Ayrton Senna of Brazil",
    author: "dimas francisco vargem zanon",
    authorPhoto:
      "/st/media/pim/media/user_photo/ef/ef2/ef261406377ce66f045a486d53723846_ab1e6881c97c469caf0154e20c466498.png",
  },
  {
    name: "Money in the air",
    account: 110174621,
    description:
      "EA expert trading.\nTake profit everyday.\nBe trust and enjoy your profit.",
    author: "PHACHARADA CHOMDEE",
    authorPhoto:
      "/st/media/pim/media/user_photo/99/991/9919b022bd9bb288cee54d03ca4087f7_9f3c66df5ccf435c8616dbcb5cae55ef.jpg",
  },
  {
    name: "ArA Trading",
    account: 110174634,
    description: "Tích tiểu thành đại",
    author: "THI CAM LE HUYNH",
    authorPhoto: null,
  },
  {
    name: "Simply The Best",
    account: 110174645,
    description:
      "Trading following the example of the phenomenon Ayrton Senna from Brazil, simply the best of all time. Let us seek excellence, always honoring God.",
    author: "Eliel Oscar Moreira Alves",
    authorPhoto:
      "/st/media/pim/media/user_photo/3b/3b8/3b8f2da7e896713044b621d6d569762e_e4a1623b481b486bb1e2b8a711193abc.png",
  },
  {
    name: "Yes We Can",
    account: 110174647,
    description:
      "YES WE CAN get consistent results and make a living from trading. Long and healthy life!",
    author: "Denis Renato Vargem Zanon",
    authorPhoto:
      "/st/media/pim/media/user_photo/81/81e/81e16c659a7e24434a759c738d62f5a6_0f6a8f1f3aaf4607b18e7ad89966485c.png",
  },
  {
    name: "Pro Trader 86",
    account: 110174650,
    description: "thị trường chẳng có gì là chắc chắn cả",
    author: "Đắc Nguyễn Văn",
    authorPhoto:
      "/st/media/pim/media/user_photo/09/095/0956d40f0cdf443d8da41d4426496bb2_2ed09f8c399f40fb877958fb48e3da07.jpg",
  },
  {
    name: "FX-2 Daily Profit",
    account: 110174708,
    description:
      "Trade by:  EA\nProfit: 1-5%/Day, 40-70%/Month\nDrawdown: <50%\nNot required set SL\nhttps://social-trading.exness.com/strategy/110174708",
    author: "MR CHALERMSAK SANGKAMANEE",
    authorPhoto:
      "/st/media/pim/media/user_photo/47/474/474d3b88feb6d8e3c918789149453c9c_597cfde980584214bcc1cbdbb7147b6b.jpeg",
  },
  {
    name: "SGold LGiBot Auto V1",
    account: 110174817,
    description:
      "Chào mừng bạn đến với chiến dịch đầu tư sử dụng L&Gi Bot V1 tự động giao dịch với cặp \nXAUUSD.  Bot tư động giao dịch với TP/ SL.",
    author: "TRAN VAN LUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/88/881/8814f87bb985e292c061b6e81288b28c_7bb2ae99a0f642b39336e84da047f6ab.jpg",
  },
  {
    name: "FOREX TURBO",
    account: 110174848,
    description:
      "no martingale,We use a fixed lot🔥\nMonthly Tareget:20%\nDD:10-20%",
    author: "Nada Abdelmohsen",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/507/507bd75eaf7b15169232059d9d266361_30c15fe9c4264679ace2b69d1fee1a83.png",
  },
  {
    name: "Silver Strategy",
    account: 110174855,
    description: "Diversify with forex products",
    author: "THANIT RIMCHAISITH",
    authorPhoto:
      "/st/media/pim/media/user_photo/0e/0e2/0e256f6087b65d024372833f14c8fa1e_19d5370777714ca5a065cbe642cfecbf.jpeg",
  },
  {
    name: "Money Farm EURUSD",
    account: 110174860,
    description: "EA for make profit 4-8% per month",
    author: "Preeda Somabut",
    authorPhoto:
      "/st/media/pim/media/user_photo/7a/7a4/7a43f5d7d2a29429700318033727d114_a45ca827dc5a42cb874bb5a2fab5daac.png",
  },
  {
    name: "mini Gold Hunter",
    account: 110174881,
    description:
      "this is a manual account wich is set to gain 2% per day. the strategy is clearly safety, start open in 0,01 lot and average one more position.",
    author: "MUHAMMAD FAHRURROZI",
    authorPhoto:
      "/st/media/pim/media/user_photo/10/10e/10e2aac7dc685a1e9e73620d7b935228_6242ce4c5dec41e592bc64657cd10be5.jpg",
  },
  {
    name: "TÔM CAPITAL",
    account: 110174882,
    description: "following trend",
    author: "Dinh Thi Thuy Linh",
    authorPhoto:
      "/st/media/pim/media/user_photo/c8/c80/c8063726f5561c72ef3d8fa3ef57e553_b6c8046c71f34a51b872d2e2cef3121a.jpg",
  },
  {
    name: "BUITHANHHN",
    account: 110174912,
    description: "$$$$$$",
    author: "VAN THANH BUI",
    authorPhoto:
      "/st/media/pim/media/user_photo/a8/a87/a874479ecda6f40092fd38b9171c2560_84afe20f71e741798cc650cca599ed2a.jpg",
  },
  {
    name: "Longfin_24k",
    account: 110174913,
    description:
      "Longfin là chiến lược Forex kết hợp phân tích kỹ thuật và cơ bản, giúp xác định điểm vào lệnh chính xác và quản lý rủi ro hiệu quả.",
    author: "Tùng Phạm",
    authorPhoto:
      "/st/media/pim/media/user_photo/db/db4/db475d83c54735a2a62938da5e185718_945036fffc0f4cbcb5d0cb199ba65b55.PNG",
  },
  {
    name: "DEYBBA STRATEGY",
    account: 110175042,
    description: "Price action",
    author: "MOHAMMED FARHAN",
    authorPhoto: null,
  },
  {
    name: "High probability",
    account: 110175053,
    description: "The trading strategy will give you high probability trading",
    author: "ARAVINDHASAMY M",
    authorPhoto:
      "/st/media/pim/media/user_photo/ef/ef4/ef48893f56d3d42b2da707de95170b2a_6dcd80550bb4411a9c76f6a28dcfbab8.png",
  },
  {
    name: "SGRM TRADER",
    account: 110175054,
    description:
      "I m trading from 4_5years and also trainer..my team also work continuesly, u will get weekly good returns..",
    author: "Shreelaxmi Raghavendra",
    authorPhoto:
      "/st/media/pim/media/user_photo/06/06c/06c40b3cc18c0588086b9b81ec470fb9_9c7f5000ad7242f0ae8f3e1aace25360.jpg",
  },
  {
    name: "pIPS GAINER",
    account: 110175065,
    description:
      "🄻🄴🅃'🅂   🄶🅁🄾🅆   🅃🄾🄶🄴🅃🄷🄴🅁\n𝙄𝙉 ᴛʀᴀᴅɪɴɢ , ᴇᴠᴇʀʏ  sᴇᴛʙᴀᴄᴋ ɪs ᴀ  sᴇᴛᴜᴘ ғᴏʀ  ᴀ \n ᴄᴏᴍᴇʙᴀᴄᴋ",
    author: "MANAS MOHAPATRA",
    authorPhoto:
      "/st/media/pim/media/user_photo/78/788/7880a38f92df430684375f63169755a8_8bc20dc97078455e814d9daebe22cd2f.jpg",
  },
  {
    name: "Effortless StretegyG",
    account: 110175070,
    description:
      "FOREX TRADE is the right way to make good profit with very low risk its safe system with human control all time.",
    author: "ITALIYA MAHESHBHAI",
    authorPhoto: null,
  },
  {
    name: "Monthly 10 percent-2",
    account: 110175087,
    description:
      "Copy Trade by EA\r\nDaily profit : 1% (Monday - Friday)\r\nMinimum profit : 10% per month\r\nDrawdown : 20%\r\nWithdrawal : %Profit > %DD",
    author: "ACTING SUB LT PIYAPONG SASOONTARA",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e21/e217cc888eeac64a72587a2ccef51616_c6b63dff56f141628ef6eef53db928e2.png",
  },
  {
    name: "Good Profit",
    account: 110175093,
    description:
      "All my operations with TP and SL\nDaily monitoring of all operations\nEarnings between 20% and 10% monthly\nTrader with 5 years of experience",
    author: "Miguel Angel Mamani Cosi",
    authorPhoto:
      "/st/media/pim/media/user_photo/0d/0d5/0d5ded7f93f9662f6109bf5a413bbe57_ee596fe1c13a4fa7aea6714d1d7f0793.png",
  },
  {
    name: "Hedging strategy",
    account: 110175099,
    description: "Gold's hedging strategy is relatively stable and safe.",
    author: "永仁 王",
    authorPhoto:
      "/st/media/pim/media/user_photo/16/169/169db28cd8f477c1945a3504adcb25db_98a9bf516b644c4e9e96d72dd3ee52f6.jpg",
  },
  {
    name: "BYF-Profit Link",
    account: 110175184,
    description:
      "You can view the Myfxbook tracking for this account's performance as well\nhttps://www.myfxbook.com/members/thiha2024/fx-thiha/10967150",
    author: "THIHA SOE",
    authorPhoto:
      "/st/media/pim/media/user_photo/57/57f/57f98d3c9c09e2575c029ba92365dc78_ed25da2b026a445f81fc6b966ae5b748.png",
  },
  {
    name: "Play safe Play sure",
    account: 110175248,
    description:
      "Play safe and Play sure. \nProfit every month. \nTrade By Fulltime trader.",
    author: "SOPETCH ANANSUKSRI",
    authorPhoto:
      "/st/media/pim/media/user_photo/5b/5b2/5b27beecdb9b7673ed7d12f2b23ee343_e8f61edbdcdf4482ba72c2df818ec25f.png",
  },
  {
    name: "Tien Thanh",
    account: 110175263,
    description: "Vô địch",
    author: "QUẢNG ĐÔ",
    authorPhoto:
      "/st/media/pim/media/user_photo/6a/6a6/6a6af6cbce40e802806a4689faa8484d_47c76763fb8842f080a30f30d4519447.jpg",
  },
  {
    name: "SH- Trader X",
    account: 110175276,
    description: "Đơn giản hiệu quả",
    author: "Tùng Trần",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/606/606dad980853b804f23526d24f57afb9_0759463c490f4735b0403273309ffbc1.jpg",
  },
  {
    name: "The Mask AI Trading",
    account: 110175292,
    description:
      "- Target 20-40%/ tháng\n- Giao dịch an toàn, stoploss ngắn takerprofit dài \n- Sử dụng công cụ phân tích kỹ thuật The Mask AI giao dịch an toàn tối đa",
    author: "Duy Tùng Phạm",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f5c/f5cbf05a5d2061caab1e0c2c03f03311_c5170e41a1d14a24b82d9fc727aaa944.png",
  },
  {
    name: "GBP MASTERTEAM 1",
    account: 110175293,
    description:
      "Law risk high profit,only GBP and gold,draw down 10-45% let's make passively income.\nContact@arkanmanzil",
    author: "ABDULRAZAK MANSURI",
    authorPhoto:
      "/st/media/pim/media/user_photo/4e/4e2/4e23dff719870603b6d5edb291edc126_0b73931175fc4f9d9372f0e3604d760c.jpg",
  },
  {
    name: "MORNING COFFEE",
    account: 110175297,
    description:
      "Contact us: https://zalo.me/g/okkuxi025 >>> Thank you for visiting :)",
    author: "MY HANG HA",
    authorPhoto:
      "/st/media/pim/media/user_photo/e5/e51/e515c0b73c3f40c3d75254c394a7c044_3e17125f9aeb4546bc989884b3da2661.jpg",
  },
  {
    name: "GOLD MS Cap01",
    account: 110175302,
    description:
      "Experienced trader emphasizing capital management. Together, let's pursue steady growth and smart risk management. Join me on this journey!",
    author: "CHI BAO NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/d8/d8a/d8a63824d33c4ec8412e778739326859_3298ff6b553348d2ab05dc4a26501592.png",
  },
  {
    name: "Long Journey 2",
    account: 110175312,
    description: "XAU",
    author: "VAN BON CAO",
    authorPhoto:
      "/st/media/pim/media/user_photo/b7/b7e/b7eb29d5cbb02889ffc261f5d4a13eef_3a081a1ad9044ba9aab7e5008d75de55.jpeg",
  },
  {
    name: "AT_TRADING",
    account: 110175336,
    description:
      "Liên hệ hỗ trợ : \nHotline Zalo : 0932373226\nTelegram       : @tradermaster92",
    author: "PHAN TUẤN",
    authorPhoto:
      "/st/media/pim/media/user_photo/5d/5d6/5d686cda6cf4eb3e7604e5323c88dfa8_1fa3fba5d9584673a7fd091d76b24dcc_NL0cGGA.png",
  },
  {
    name: "MASTER FX PRO",
    account: 110175355,
    description:
      "-Bot do nhóm tự code và vận hành, có update, lái bot, lịch sử real hơn 1 năm myfxbook (từ đầu 2023)\n-LH FB: \nhttps://www.facebook.com/investfx.vn/",
    author: "NGOC TU DINH",
    authorPhoto:
      "/st/media/pim/media/user_photo/53/535/5359dd9f255b65344658240b901bb7db_857d5135cc5242b5b4c7116c5151438b.jpg",
  },
  {
    name: "Smart Asset Grow",
    account: 110175383,
    description:
      "You have to jump in the pool and make your own mistakes if you want to learn about the market that you’re trading.",
    author: "KANAN MALAKAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/39/39e/39e2c37cebaab38570466872513fb8b3_d51c1584f5c24f258a0c599a03c73d27.jpg",
  },
  {
    name: "VIE - TTrade Trung",
    account: 110175402,
    description:
      "Sau quá trình Backtest và tìm kiếm phương pháp tôi đã phát triển thành EA , các nhà đầu tư tránh được tâm lí và gd có tính nhất quán , lợi nhuận  tốt",
    author: "Trung Ngọc",
    authorPhoto:
      "/st/media/pim/media/user_photo/6a/6ad/6ad19d8b95a4181cb77547efa184f9e1_11a0cb58872744348809122f868a6599.png",
  },
  {
    name: "Global Finance Fund3",
    account: 110175455,
    description: "Gold",
    author: "Quốc Đạt Đinh",
    authorPhoto:
      "/st/media/user_photo/21/211/211c2e1c61e2dce003bc4dd3259c45ac_5300d889d09b40cfa85826e1d6c020e4.jpg",
  },
  {
    name: "Daily 2 percent_1",
    account: 110175486,
    description:
      "I am aiming for a standard income of 20-40% every month.\nI do not believe in fast money but I like to have the strategy yo earn the same.",
    author: "BABU SELVARAJ",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f55/f55c1f365d88f12da5c5c7eaacef500a_47efd8c68dd94419b63c73540d1a6e4f.jpg",
  },
  {
    name: "Viet Nam mai dinh",
    account: 110175560,
    description: "Trade tiền lợi nhuận 10-15% tháng",
    author: "Thi Lan Anh Le",
    authorPhoto:
      "/st/media/user_photo/d8/d83/d83285af1c8b5d8fd5e0e722710431df_6369e4e67c054bdf80851a0077722ec8.jpeg",
  },
  {
    name: "Minimal Trading",
    account: 110175603,
    description:
      "As a trader, my focus is on safeguarding investments through a conservative strategy that prioritizes stability and risk management, ensuring reliable",
    author: "NONGCHAPHAT RATTANATHIRAPHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/9b/9b8/9b86fcc3c282c4e42f81d36474a49714_2b246d95ebe542fe8f957ba44706f3b2.png",
  },
  {
    name: "SMT XAU 1sl2tp",
    account: 110175672,
    description:
      "Chiến lược 1sl2tp với phương pháp nhất quán với mức lợi nhuận kỳ vọng 20-50% / tháng. Sụt giảm vốn không quá 20%\nsmtfx.vn",
    author: "VAN HIEU VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/c9/c9f/c9f9e4edb15e9337f45085a706f043e8_3de20a05b5fe4f7fb20b15fefa2be323.jpg",
  },
  {
    name: "SMT XAU 1sl2tp 2",
    account: 110175714,
    description:
      "Chiến lược 1sl2tp với phương pháp nhất quán với mức lợi nhuận kỳ vọng 20-50% / tháng. Sụt giảm vốn không quá 20%\nsmtfx.vn",
    author: "VAN HIEU VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/c9/c9f/c9f9e4edb15e9337f45085a706f043e8_3de20a05b5fe4f7fb20b15fefa2be323.jpg",
  },
  {
    name: "SMT XAU 1sl2tp 3",
    account: 110175719,
    description:
      "Chiến lược 1sl2tp với phương pháp nhất quán với mức lợi nhuận kỳ vọng 20-50% / tháng. Sụt giảm vốn không quá 20%\nsmtfx.vn",
    author: "VAN HIEU VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/c9/c9f/c9f9e4edb15e9337f45085a706f043e8_3de20a05b5fe4f7fb20b15fefa2be323.jpg",
  },
  {
    name: "SMT XAU 1sl2tp 4",
    account: 110175722,
    description:
      "Chiến lược 1sl2tp với phương pháp nhất quán với mức lợi nhuận kỳ vọng 20-50% / tháng. Sụt giảm vốn không quá 20%\nsmtfx.vn",
    author: "VAN HIEU VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/c9/c9f/c9f9e4edb15e9337f45085a706f043e8_3de20a05b5fe4f7fb20b15fefa2be323.jpg",
  },
  {
    name: "SMT XAU 1sl2tp 5",
    account: 110175726,
    description:
      "Chiến lược 1sl2tp với phương pháp nhất quán với mức lợi nhuận kỳ vọng 20-50% / tháng. Sụt giảm vốn không quá 20%\nsmtfx.vn",
    author: "VAN HIEU VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/c9/c9f/c9f9e4edb15e9337f45085a706f043e8_3de20a05b5fe4f7fb20b15fefa2be323.jpg",
  },
  {
    name: "Investment Family XI",
    account: 110175826,
    description:
      "A/c cần hỗ trợ vấn đề gì liên hệ :  Sdt/zalo :  0706666012\nChiến lược bảo toàn vốn và gia tăng vốn siêu lợi nhuận\nKết quả ở cuối tháng.Niềm tin ở bạn",
    author: "Tam Doan",
    authorPhoto:
      "/st/media/pim/media/user_photo/06/068/068d3ede59edeb302048778f641fb0d1_70580b47f6bb427cbffe54d8752f2219.jpg",
  },
  {
    name: "Lion hunting",
    account: 110175898,
    description: "测试中",
    author: "利森 付",
    authorPhoto:
      "/st/media/pim/media/user_photo/9b/9bc/9bc529abfc991cca2e821512037f1e24_6b49b559fdde4f4c9fea706d93ec0e2c.jpg",
  },
  {
    name: "Long Live - Safety",
    account: 110176415,
    description:
      "04 căp tiền : EURUSD, USDCAD, EURGPB, AUDCAD. Giao dịch 02 chiều, Lệnh đầu  tiên 0.01, chốt lệch theo DCA, Khoảng cách vào lệnh từ 20 pips - 35pips.",
    author: "NAM LE TRUNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/f7/f7c/f7cdbdf9d06858dbc8a71227b7ec56dc_1f71331685144759849c17743fe88225.jpg",
  },
  {
    name: "Infinity money",
    account: 110176419,
    description: "Dinheiro infinito",
    author: "marcio cobos",
    authorPhoto:
      "/st/media/pim/media/user_photo/a1/a17/a1753e601d6e78421b60368533185c86_9a0a42890cae4126b4bc557eb6f61dcb.png",
  },
  {
    name: "XLEXPERT STRATEGY",
    account: 110176515,
    description:
      "You can earn atleast 50% ROI on your investment monthly with capital save guarantee.",
    author: "MUHAMMAD RIZWAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c68/c686b914fa78e42a78ccddc7aae878f4_65e2f329c1af400cbbe51e78ffb20a07.jpeg",
  },
  {
    name: "柳生-翻倍策略组合1",
    account: 110176517,
    description: "随心随意操作 无定式",
    author: "澳杨 储",
    authorPhoto:
      "/st/media/pim/media/user_photo/b6/b6f/b6fd0e856bfe37281371377375c98a76_e66a0aef1713446683512f3c465ba3de.jpg",
  },
  {
    name: "DynamicOrgresh_2",
    account: 110176638,
    description:
      "Chiến lược DCA. \nMột biến thể khác DynamicOrgresh_1. \nAUDCAD + NZDCAD.\nĐảm bảo không để mất tiền vào thị trường\nLợi nhuận trung bình 15-25%/Tháng.",
    author: "Thanh Trần Thiện",
    authorPhoto:
      "/st/media/pim/media/user_photo/3f/3fd/3fdf39fdba8e8df8aa2b9d78c7abe358_91a6e63880a7491abac29f11d7e9a02d.jpg",
  },
  {
    name: "Jaya Sukses",
    account: 110176639,
    description: "High risk",
    author: "ABRAHAM KAAWOAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/8e/8e6/8e6c716f23de81b8b10cb1848a09eb2c_0825d91743de41ab8956e8fd5de181a0_O0NAhnv.png",
  },
  {
    name: "HoangDat V1",
    account: 110176641,
    description: "Hoangdat",
    author: "VAN DAT NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/b0/b0a/b0afe4fc777e7562718cfd3a20743217_a18500351bb24187b07893ac5805c609.jpeg",
  },
  {
    name: "_Gold Mine_IXPro",
    account: 110176682,
    description: "Stable Profit",
    author: "NATCHARAT VANKAEWSAWAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/34/340/3405cfad54cdabece53fb5836d77567d_dba305cb8cea4d2697483566d9fc03f4_1owN6us.png",
  },
  {
    name: "Compound Effect",
    account: 110176708,
    description: "<3",
    author: "Triều Nguyễn Văn",
    authorPhoto:
      "/st/media/pim/media/user_photo/9c/9ca/9ca87252cded5cba0352b648f8b008ea_99521e97733d4f5cb767106c48746992.jpg",
  },
  {
    name: "Profit Machine",
    account: 110176739,
    description:
      "We have 10 years of experience in Forex or Share Market, you can copy Our Accoun without any fear, we will safely  10-20% profit for you every month",
    author: "MOHAMMAD SHOKEEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/57/577/577ce38935a566342616e5cc9dfda177_e7345ecbbb0049fda44c1f2286487958.png",
  },
  {
    name: "TRADES BY MASTER",
    account: 110176915,
    description: "Automated Trading Bot\n\nInsta: TradesByMaster",
    author: "Mohammed Albazzaz",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/69d/69d5e6a1dd641e1681d9b9d60e90e894_917cc19fa4f34f238ae91454bf622a69.png",
  },
  {
    name: "EFFORTLESS 2",
    account: 110176998,
    description: "Passion And Earn",
    author: "ITALIYA MAHESHBHAI",
    authorPhoto: null,
  },
  {
    name: "rOcK DaSh EA",
    account: 110177063,
    description:
      "بوت تداول الي بإدارة رأس المال | يعمل علي XAU/USD يحقق يومياً اربح من %1 الي 1.5% ليصل الربح الشهري كحد ادني 33% من رأس المال استثمار امن",
    author: "Mustafa Mohamed",
    authorPhoto:
      "/st/media/pim/media/user_photo/6f/6fc/6fc5975bff43617e8a390afc22567f29_0c858e1e932f4c9f9cd6f40841df3083.jpg",
  },
  {
    name: "AI-TRADERGOLD",
    account: 110177123,
    description:
      "I AM NOT A SHARK. BUT I KNOW WHERE I NEED TO ENTER ORDERS TO BRING PROFITS FOR MYSELF.\nI HAVE BEEN TRADER FOR 4 YEARS WITH GOLD. LET ME BE YOUR INVEST",
    author: "VAN TIEN TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/94/94d/94d0aa7c544a47ce539eb417f2c2b2e8_e8394b09900341f9bb090cb425ac2025.jpg",
  },
  {
    name: "Trade geniuz",
    account: 110177154,
    description:
      "Capital Guarantee💯\nMonthly 5 to 20% Returns\nFor More Enquiries Tradegeniuz Capital Private Limited \nContact -  +917305034826 / +918148446225",
    author: "Mohammed Backeer mohamed",
    authorPhoto:
      "/st/media/pim/media/user_photo/ac/ace/ace4a4b1afa8ede042103dff51918936_7e3be52ab77b4f218fea34c2ad5fc73c.png",
  },
  {
    name: "ForexGenius",
    account: 110177156,
    description:
      "本外汇EA策略是一种基于技术指标的自动交易系统。它通过分析历史数据中的趋势和价格波动，识别出潜在的交易机会。核心算法结合了移动平均线、相对强弱指数（RSI）和布林带等多种技术指标，自动执行买卖操作。策略包括设置止损和止盈点，以有效控制风险和保护收益。此EA策略旨在减少人为干预，提高交易效率，并通过不",
    author: "志东 蔡",
    authorPhoto:
      "/st/media/pim/media/user_photo/94/948/948d6d1e05644bb74fb789ab96fabb53_1b18fde0326148089de9e13618df4819.jpg",
  },
  {
    name: "Cumulative profit",
    account: 110177178,
    description: "be safe",
    author: "NABIL RAMADAN EZZELREGAL ELSAYED",
    authorPhoto: null,
  },
  {
    name: "Faith Booster",
    account: 110177196,
    description: "Decrease the Risk and boost the winning rate",
    author: "JUANITO JR SAMILLANO",
    authorPhoto:
      "/st/media/pim/media/user_photo/fc/fce/fce76ff5c08fa2868a13ba2c61eea0d3_67f7c71e815348428d3b9abb6820858b.png",
  },
  {
    name: "Kema - EA",
    account: 110177211,
    description: "Kema",
    author: "MASOUD SABRY MASOUD AHMED MASOUD",
    authorPhoto:
      "/st/media/pim/media/user_photo/00/000/0004c2dc01dd5211e6fbae94922d2906_afe71340a4274ccd89de3a808d14bb1e.jpeg",
  },
  {
    name: "GROW MORE 4X",
    account: 110177213,
    description: "20% MONTHLY SAFE TRADING STRATEGY",
    author: "MOHAMMED SAIFULLAH",
    authorPhoto:
      "/st/media/pim/media/user_photo/f9/f9f/f9fb7bcb77a0ac31c0e3ca11b2c37b34_cf68fdac551848be9cd1520353d21cd7.jpeg",
  },
  {
    name: "Candlestick ZZ",
    account: 110177229,
    description:
      "DayTrade gold with Candlestick ZZ, Average profit 3% month safe for your funds .",
    author: "NGUYỄN LOAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a8/a88/a887cdaed4b2967ecea2ab4dfd10bf4e_8a494d994f4c4e069ee810557ae2935a.png",
  },
  {
    name: "Gold Trading",
    account: 110177381,
    description:
      "gold trades during Asian/London sessions.\n\n7 % loss limit on account size.\n\nPause trading after hitting loss limit; continue next day.",
    author: "ASHOK GEHLOT",
    authorPhoto:
      "/st/media/pim/media/user_photo/b5/b57/b57908c448da8527ddef0d481e6d5bd9_7849335d8ea84e479bece875779bfc2e.jpeg",
  },
  {
    name: "Bestcopytrade",
    account: 110177391,
    description: "Best copy trade",
    author: "Jafar Shedati",
    authorPhoto: null,
  },
  {
    name: "Litonsweet",
    account: 110177426,
    description:
      "Our trading long and short strategy\nMnimum 500 deposit no loss your money \nInshallah",
    author: "Md Mosharraf Hossain",
    authorPhoto:
      "/st/media/pim/media/user_photo/3c/3c9/3c932b92591b5fd40f168eada38a381e_792b1213ba53408d8f83317d7a9e0677.jpg",
  },
  {
    name: "Social Trading_EN",
    account: 110177885,
    description: "“Money is made by sitting, not trading.”",
    author: "VŨ TRÁNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/33/331/331f5b411524818b576fe424dfca0356_ba465a6088ea4f6287f503298b2688f5.jpg",
  },
  {
    name: "Tribu de Negocios",
    account: 110178006,
    description:
      "Operamos pares como oro euro , buscamos una ganancia promedio   de 0,5% a 1% diario , con máximo de flotante de 35%.",
    author: "LUIS DAVID JESUS SALINAS CASTELLANOS",
    authorPhoto:
      "/st/media/pim/media/user_photo/20/20d/20d60d952327e2b6228c145b793e95ba_2e11db7264dc49b98798c285fab8b9d9.jpg",
  },
  {
    name: "Future FxTrading AI",
    account: 110178020,
    description:
      "Future Fx Trading academy  AI auto robot Trade 52 Strategy Apply . U will be watch 15 days then Try. Min dep. 1000 USD . your motive allows save fund.",
    author: "DIPAK KUMAR MALLICK",
    authorPhoto:
      "/st/media/pim/media/user_photo/65/659/65963dfec6490116a27341e958b2a066_cef1be2135c642fca957266059f46177.jpg",
  },
  {
    name: "Eurousd_ win",
    account: 110178062,
    description: "Operaciones de bajo riesgo e euro",
    author: "Gabriela  Martínez",
    authorPhoto: null,
  },
  {
    name: "Shrishivshakti",
    account: 110178085,
    description: "Medium Rish sometimes high return",
    author: "Jayeshkumar Jivtani",
    authorPhoto:
      "/st/media/pim/media/user_photo/aa/aac/aacecc3277db8c61aa9ea72d654a6d4d_197e92b03401436391bd7fa7f28b4f41.jpg",
  },
  {
    name: "White Horse",
    account: 110178211,
    description: "EA follow trend",
    author: "Apichai Sriwaenkaew",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/aef/aeff028f632f2e1568e90c064a4839b2_afcdfda23b0e4249bbd33a66deff928c.jpg",
  },
  {
    name: "Trend Catcher",
    account: 110178212,
    description: "Find trend strength change rate and trade follow the trend;",
    author: "海滨 杨",
    authorPhoto:
      "/st/media/pim/media/user_photo/2d/2dc/2dc50b33b44885eb945a3f522ebbe5b2_17effef45a1549bb9212ce8cc6b84d86.jpg",
  },
  {
    name: "HNLD TRADING",
    account: 110178240,
    description: "SCALP TRADING",
    author: "DINH DUONG THI",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5a8/5a8ae4df63d1bcab75f942d0dfe7a0ad_01ce34561e00460fa2becb203984f6e1.jpg",
  },
  {
    name: "NT2024 TRADING",
    account: 110178245,
    description: "SCALP TRADING",
    author: "DINH DUONG THI",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5a8/5a8ae4df63d1bcab75f942d0dfe7a0ad_01ce34561e00460fa2becb203984f6e1.jpg",
  },
  {
    name: "Alligator trader",
    account: 110178259,
    description: "🐊",
    author: "Faisal Sultan",
    authorPhoto:
      "/st/media/pim/media/user_photo/92/921/9219db3d9157a70b7071aa517c5e94b3_cfc09ce2e2044bdcbda413f768c30eb8.jpg",
  },
  {
    name: "Thành Công Khúc",
    account: 110178267,
    description: "Luôn hướng tới sự an toàn!",
    author: "Công Khúc",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/ae9/ae9ce41a0f4416f52eb88d2db0be5af0_7778a8e6fd1944888f184bf149825d4a.jpg",
  },
  {
    name: "LE PHUONG_SCALP GOLD",
    account: 110178282,
    description: "TRADER VIET",
    author: "HAI THIEN LE",
    authorPhoto:
      "/st/media/pim/media/user_photo/2f/2f9/2f909a01fa7095d094fbad06d62ec5a7_9dd7f6b523d843babf13b01f894e7d28.png",
  },
  {
    name: "Ladoan_2024",
    account: 110178285,
    description: "10-15%/ Month",
    author: "Lâm Đoàn",
    authorPhoto:
      "/st/media/pim/media/user_photo/81/816/816d5fe62763133d1f0f8a4de25692c1_68042b76524a430ba58516e86b2de032.jpg",
  },
  {
    name: "Trí Tuệ VIETNAM",
    account: 110178297,
    description: "Chiến lược đánh theo chu kỳ giá (CKG)",
    author: "Văn An Lê",
    authorPhoto:
      "/st/media/pim/media/user_photo/9f/9fd/9fd0b98e752c77de0a4214e4db17b263_d7ae6bbab68c4e10bfd0ac1b8623361a.jpg",
  },
  {
    name: "TOP TRADE SÀI GÒN",
    account: 110178305,
    description:
      "Chiến lược kiếm tiền hàng tuần, hàng tháng về tài khoản của bạn đều đặn ngay  cả khi bạn đang ngủ😴hãy tận hưởng nó😉xem kết quả của tôi làm cho bạn💝",
    author: "Dai nghia Huynh",
    authorPhoto:
      "/st/media/pim/media/user_photo/c5/c51/c51d95e1b48005c9839c57d5081419ab_2b336a1f353643aaaa8dd67b8bd22505.jpg",
  },
  {
    name: "AI UBET FX",
    account: 110178306,
    description:
      "Hello Traders \nWelcome to AI UBET FX .... We manage your account day and night so that you get your profit back which you have given me for investing",
    author: "SWATI KUMARI",
    authorPhoto: null,
  },
  {
    name: "ICT TRADER",
    account: 110178343,
    description:
      "I trade on ICT concept. I take only few trade in a week according to market structures, so be patient and wait for at least 30 days and see the result",
    author: "Ajay Maurya",
    authorPhoto:
      "/st/media/pim/media/user_photo/0d/0dd/0dd4046ef5e0cae5d528bd6252ec5f7d_ae125368a1ce45f68658a674ef4b1252.jpg",
  },
  {
    name: "Financial freedom",
    account: 110178368,
    description: "Manage your account with us for financial freedom",
    author: "Sijeel Ahmed",
    authorPhoto:
      "/st/media/pim/media/user_photo/11/118/1188942dcbf6ada1953758e7fca3a91e_f2f3e759acc146fb86d32807c8124e9e.jpg",
  },
  {
    name: "Mahmoud amhan 40",
    account: 110178394,
    description: "Tp",
    author: "mahmoud amhan",
    authorPhoto:
      "/st/media/pim/media/user_photo/89/89f/89f48cd10bd17ea1d731797a67fac6ee_a70cfbe51f38456ba4d038b70b5c9227.jpeg",
  },
  {
    name: "INFINITY GREEN",
    account: 110178398,
    description: "Swing trade, base on H1 Time frame",
    author: "MRS TANIDA KAEWSIRI",
    authorPhoto:
      "/st/media/pim/media/user_photo/ab/ab5/ab5101d266dd2c4cb0c5492ed7a30233_d73b569c6a914e76b00ce2f0175f21f1.jpg",
  },
  {
    name: "Never give up",
    account: 110178399,
    description: "Hi! Wellcom",
    author: "Do Cao Ngoc",
    authorPhoto:
      "/st/media/pim/media/user_photo/72/722/7227f9899ccf2d363754cc1495950cd2_3f0ad3f0ee964fbc80bdf0eaf8da4fe8.jpg",
  },
  {
    name: "Tripple-Pay",
    account: 110178467,
    description:
      "Hi, I am a forex trader. I have 4 years experience . If you wanna take profit with safe investment, you can copy me. You will get 30%-70% return.",
    author: "ROFIQUL MOLLICK",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f87/f87ba2f86ca7db35a9ff04a1112b2c9d_3651b582f2094f78b332367a23e8f6d5.jpg",
  },
  {
    name: "Jonh Wick 4",
    account: 110178470,
    description: "Only trade in currencies pair with a target of 5%/month",
    author: "THANH HOANG PHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50a/50a0ee43bc16db9ccddc9fc1578f0fa5_43739171f7624ad389af6f00d4aa5425.jpg",
  },
  {
    name: "XAU_GBP_EUR",
    account: 110178471,
    description: "Chậm mà chắc.",
    author: "NGUYỄN LONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/0e/0e6/0e654295708124e585c539b6bf576790_e032e3628ac14c0c88409747f7b33555.jpg",
  },
  {
    name: "Jonh Wick 5",
    account: 110178472,
    description: "Only trade in currencies pair with a target of 7%/month",
    author: "THANH HOANG PHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50a/50a0ee43bc16db9ccddc9fc1578f0fa5_43739171f7624ad389af6f00d4aa5425.jpg",
  },
  {
    name: "Jonh Wick 6",
    account: 110178475,
    description: "Only trade currencies pair with a target of 5%/month",
    author: "THANH HOANG PHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50a/50a0ee43bc16db9ccddc9fc1578f0fa5_43739171f7624ad389af6f00d4aa5425.jpg",
  },
  {
    name: "Jonh Wick 7",
    account: 110178476,
    description:
      "Jonh Wick 7 Only trade currencies pair with a target of 5%/month",
    author: "THANH HOANG PHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50a/50a0ee43bc16db9ccddc9fc1578f0fa5_43739171f7624ad389af6f00d4aa5425.jpg",
  },
  {
    name: "Short-term Swing",
    account: 110178552,
    description:
      "The short-term swing trading strategy for forex focuses on identifying currency pairs with clear trends using technical indicators and order flows.",
    author: "Wahengbam Romita Devi",
    authorPhoto:
      "/st/media/pim/media/user_photo/83/831/83197166bfdc8e9e4562e5fee44544c3_4a47af5833954dc8a1e76c39f888d9fd.jpg",
  },
  {
    name: "Thu Nhập Thụ Động 1",
    account: 110178577,
    description: "Lợi nhuận ổn định.",
    author: "THI TRUC QUACH",
    authorPhoto:
      "/st/media/pim/media/user_photo/95/95f/95f2984d3b66574802ecbaef438d7330_1724a189dd5b450c8637f1a748c128f0.jpg",
  },
  {
    name: "Jani the brand",
    account: 110178587,
    description:
      "A little progress each day Add up to big Results,, stay connected with me with the minimum deposit of at least 150 Usd,,",
    author: "amir shahzad",
    authorPhoto:
      "/st/media/pim/media/user_photo/8f/8f4/8f4326e89d9022c892bff5a3ab6ba12f_0ce04a79f5734c0bb324e5ff6006520e.jpg",
  },
  {
    name: "Fx Trading Strategy",
    account: 110178599,
    description: "Our target will be 30%/month",
    author: "Tú Bùi",
    authorPhoto:
      "/st/media/pim/media/user_photo/79/79f/79f8d0628dfebc484760fdd10c7f5a65_b551870eb78c4238a4dbddec44cbb9aa.jpeg",
  },
  {
    name: "SMC MASTER ONE",
    account: 110178611,
    description:
      "Advance smart money concept \nUnique strategy.\nFollow strict money management",
    author: "SUNIL SAWANT",
    authorPhoto:
      "/st/media/pim/media/user_photo/97/972/9722e906022414c23b53b98abbb71f12_0bbbf456bd804d79bf47d5d08f79b99e.jpg",
  },
  {
    name: "Sniper Trading",
    account: 110178655,
    description:
      "Swing Trade  and Stop Loss   Not  Martingale   \n\nRISK Reward ration  1:3  and Protect against risks\n \n\n\nYou should invest at least 3 months.",
    author: "Nattapol Naiwikul",
    authorPhoto:
      "/st/media/pim/media/user_photo/03/03d/03de7f047f94cfb2decb141b4e4bcaf9_8793de1589264124943b1e43da3dc7a9.jpg",
  },
  {
    name: "Empire Market 24K",
    account: 110178673,
    description:
      "My copy trading service allows you to automatically copy my trades, potentially monthly returns of 10% to 15% Telegram - https://t.me/Empire_Mrkt",
    author: "Saeem Shaikh",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee6/ee633956b1c7eb6dc614273c65b83312_e638acb01d844a058c7ebda9dce2937a.jpg",
  },
  {
    name: "Trade An Toàn",
    account: 110178679,
    description: "SL - TP",
    author: "PHAN ANH DO",
    authorPhoto: null,
  },
  {
    name: "TTAAM MAIN",
    account: 110178690,
    description: "....",
    author: "TẤN PHƯỚC NGUYỄN",
    authorPhoto:
      "/st/media/pim/media/user_photo/9c/9ca/9cabdb01da71137099a9537ecad7094b_78e427169d2e43ef8ea9e096b3890d77.jpeg",
  },
  {
    name: "Fairytale - EURUSD",
    account: 110178691,
    description:
      "Giao dịch EA với cặp chiến lược chính là EURUSD.\nDuy trì mức lợi nhuận mỗi ngày và rút vốn đều đặn.",
    author: "Phuoc Truong Vinh",
    authorPhoto:
      "/st/media/pim/media/user_photo/06/067/067af09cac6a1c3343c20fa89003331a_7e3d78faef73478dbc8e6b9ffb05610d.jpg",
  },
  {
    name: "Gold scalping",
    account: 110178707,
    description: "Scalping only gold",
    author: "Jayashree Thorat",
    authorPhoto: null,
  },
  {
    name: "SMC Trading",
    account: 110178709,
    description: "R:R tối thiểu 1:3\nZalo: 0836616208",
    author: "Duc Nguyen Van",
    authorPhoto:
      "/st/media/pim/media/user_photo/e9/e9d/e9d0eed072da413e948ff182ec5e7ff3_a7985d66e14b4cb59bbb158904a0048e.jpg",
  },
  {
    name: "Tcoin FX 01 - GOLD",
    account: 110178719,
    description:
      "Đây là tài khoản để giao dịch vàng (gold). Mức độ sụt giảm tài khoản tối đa <30%. Nên copy tối thiểu bội số 505$ (505$,1010$,...,2020$,...,50.500$)",
    author: "Toan Nguyen Huu",
    authorPhoto:
      "/st/media/pim/media/user_photo/d4/d4d/d4df8a2342f9bd1fb519445a5b8267a5_b000e27cf0c5413eb0288e30f9d55a20.jpg",
  },
  {
    name: "hlley99 CT",
    account: 110178975,
    description:
      "Trading for EURUSD GBPUSD and AUDCAD\n\nPlease enjoy the ride and profit!",
    author: "Yopy halley Limanto",
    authorPhoto:
      "/st/media/pim/media/user_photo/32/32f/32f62c6933db5505d76ce41f76eb0052_21b6749f08c647a081f9ac061cc21c51.jpg",
  },
  {
    name: "Doctors Formula",
    account: 110178983,
    description:
      "#Trade only on XAUUSD, XAGUSD,BTCUSD and occasionally on others.\n#Daily profit target 1-2% with minimum risk.",
    author: "MD EMAMUL ISLAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/2f/2f2/2f2160b6bed01927332057b7b9bdd5c1_57ae1d01c283425980ecf6115d2f40c3.jpg",
  },
  {
    name: "Safe Investment1789",
    account: 110179006,
    description:
      "We are safe traders, we provide safe solutions and good profits for investors, Min 500$, profit 2-4% per day, we commit to profit 30-60% every month.",
    author: "THANH NGA PHAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/12/124/1244f1675f24b1aee452bde15d197af7_9d39939454224861a0b5a2ef7f914346.jpeg",
  },
  {
    name: "落叶归根究底何处去花落知多少",
    account: 110179030,
    description: "万事如意，心想事成",
    author: "随兵 关",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/691/6917a5c89f1c2ae8e35305a411a37e70_a9a7447b8ea0435ca3b94b0e330bba43.jpg",
  },
  {
    name: "Pro Gold No1",
    account: 110179140,
    description: "Pro Gold No1",
    author: "Tuấn Vũ Minh",
    authorPhoto:
      "/st/media/user_photo/ac/ac0/ac0ed39607207644c216f0eb44d76d14_404f9bf9b7d444d2a122c7295a8c1e84.jpg",
  },
  {
    name: "Empire Market Aegis",
    account: 110179147,
    description:
      "My copy trading service allows you to automatically copy my trades, potentially monthly returns of 4% to 6% Telegram - https://t.me/Empire_Mrkt",
    author: "Saeem Shaikh",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee6/ee633956b1c7eb6dc614273c65b83312_e638acb01d844a058c7ebda9dce2937a.jpg",
  },
  {
    name: "Forex safe 2",
    account: 110179191,
    description:
      "forex safe profits second strategy very safe welcome everyone",
    author: "Wafae ERROUIS",
    authorPhoto:
      "/st/media/pim/media/user_photo/ff/ff0/ff0a93c668f07ae70b27e967604fd9c3_c1a4ca0e77cc43de9387cc9a27f93d24.png",
  },
  {
    name: "Forex Test",
    account: 110179192,
    description:
      '"Our Monthly Target 🎯 is around 5% - 10%. Your Capital will Lose So Research First then Link Your Account to Our Master Account."',
    author: "ASGHAR ABBAS SAQIB",
    authorPhoto: null,
  },
  {
    name: "Chậm mà chắc",
    account: 110179214,
    description: "Lùi 1 bước biển rộng trời cao, tiến 3 bước nhà lầu xe hơi",
    author: "THI LICH LE",
    authorPhoto:
      "/st/media/pim/media/user_photo/a6/a6a/a6aea47975b998bc5faf512b82ad720b_72bb4fe67a1741ba926853d4dff11ccf.jpg",
  },
  {
    name: "Profit Run",
    account: 110179339,
    description: "Trade Eurusd Only",
    author: "MR PISAN KOWTAVEERUNGROD",
    authorPhoto:
      "/st/media/user_photo/58/58b/58b8b6dc26751f5ab132bb72d0ada724_8e91b74c49e841c4addbc6542248edb8.jpg",
  },
  {
    name: "行是知之始 知是行之成",
    account: 110179344,
    description: "行是知之始，知是行之成",
    author: "卫平 郭",
    authorPhoto:
      "/st/media/pim/media/user_photo/1e/1e7/1e7b8534778242527357ec960137de23_e847b8dbee044d5f93cab136e6cf7946.jpg",
  },
  {
    name: "Trade what you see",
    account: 110179348,
    description: "Trade what you see, not what you think.",
    author: "DANG HA PHAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/3a/3a6/3a63302adaf3df97ba50aa176305ef5b_bc31d3dfa8dd424090977fae2d90ec6e_Ry3SsAo.jpg",
  },
  {
    name: "DevFx Profit",
    account: 110179359,
    description:
      "I am professional Forex trader having experience 5 years in forex \nyou can copy my account without any strees",
    author: "LAXMI DEVI",
    authorPhoto:
      "/st/media/pim/media/user_photo/36/36f/36f54adeb5926c0f8d12d89c23389d2d_2f3bd7f05dbd45f794b3589d33a267a5.jpeg",
  },
  {
    name: "PH7 low risk",
    account: 110179365,
    description:
      "Drawdown is not more than 20-30%. Profit is 5-10% per month. Preventing loss of capital is the most important ting.",
    author: "THATCHANON NACHOM",
    authorPhoto:
      "/st/media/pim/media/user_photo/65/659/65900a6ce79e747de12e2eb4f5564ec2_0963328b53164889a81c886df8f4dbd0.jpg",
  },
  {
    name: "Banana Blitz",
    account: 110179383,
    description: "Safe strategy with profit 5-10%/month",
    author: "BA HOANG VY PHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/3e/3ef/3ef18e2771c63b5e405a8ca854f2cff7_8515cdc027264791941968bff33f411a.jpeg",
  },
  {
    name: "ExTrade Indonesia",
    account: 110179391,
    description:
      "Swing Trade - 4% to 10% Monthly Target - with -25% Maximum Drawdown Barrier",
    author: "BAYU RACHMATEA",
    authorPhoto:
      "/st/media/pim/media/user_photo/f5/f54/f540e3a493f206f1a49ddd56697fd423_989688f3876b48ce96fb1a5c6fdfb33a.jpg",
  },
  {
    name: "Ladoan_2024_02",
    account: 110179392,
    description: "10-15%/ Month and very safe (Dont trading XAU)",
    author: "ĐOÀN LÂM",
    authorPhoto:
      "/st/media/pim/media/user_photo/81/816/816d5fe62763133d1f0f8a4de25692c1_5bfc9842e36244f2b02081ee3647e67f.jpg",
  },
  {
    name: "HighRiskHighReturn3",
    account: 110179447,
    description:
      "EA same as Daily 1 percent\r\nBut reduce equity from 5000 to 3000$\r\nAccumulate profit until 4000$",
    author: "ACTING SUB LT PIYAPONG SASOONTARA",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e21/e217cc888eeac64a72587a2ccef51616_c6b63dff56f141628ef6eef53db928e2.png",
  },
  {
    name: "Gold Mining Intraday",
    account: 110179471,
    description:
      "Set up intraday properly by Fibonacci strategy and retest breakout.prepared SL and TP well.",
    author: "JOHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/52/525/525e70b61bd90894cb40733f087ce5f0_7da2d2b107504cffab83d21a85f17b6e.jpeg",
  },
  {
    name: "Price action",
    account: 110179495,
    description:
      "We work on SMC and price action trading we only trade pn these strategies with the help of our system AI.",
    author: "SHREYAS VARUTE",
    authorPhoto: null,
  },
  {
    name: "Ravieurousdt",
    account: 110179506,
    description: "Low risk strategy profit hight\nt.me/Indiaa1314",
    author: "Ravi Sao",
    authorPhoto: null,
  },
  {
    name: "scaping goll 102",
    account: 110179527,
    description:
      "https://one.exness-track.com/a/lzdxwbwfqh\nĐăng nhập link trên bạn giao dịch 1 lót tôi tặng bạn 10 $\ntelegram,viber +79660376868",
    author: "VAN KHI DO",
    authorPhoto:
      "/st/media/pim/media/user_photo/bb/bb8/bb859103fa91cf5876d298c85d749093_ee9fc6817b9b43809066af642f4f3021.jpeg",
  },
  {
    name: "Bootcam the5er fund",
    account: 110179566,
    description:
      "All orders must have an SL and an individual order must not exceed 2% of the account Currently owning a 100k live bootcam account.",
    author: "BÙI QUỐC",
    authorPhoto:
      "/st/media/pim/media/user_photo/8c/8ca/8ca4960de7b841120b21b7b64bbfea85_112218f00450455085f623c7296c3af9.jpeg",
  },
  {
    name: "Lion and Tiger",
    account: 110179600,
    description: "The winning  Attitude is the key for success.",
    author: "Surachai Laowue",
    authorPhoto:
      "/st/media/pim/media/user_photo/62/624/624224b7b4a72a2dfbd8c2bb7166b186_1a0e28a4beb0443e8fd62d7e3823539f.jpg",
  },
  {
    name: "House Of Dollar",
    account: 110179608,
    description:
      "Target 30-50%/Month\nExtraordinary Trade\nPatience And Money Management\nCome And Join Us",
    author: "STEVANNY",
    authorPhoto:
      "/st/media/pim/media/user_photo/de/de6/de6b574e6446d01f9a94c3d3e6b03225_9c791190a8a84f12bace26bb1abbc176.png",
  },
  {
    name: "FOREX KILLER 1",
    account: 110179610,
    description:
      "Mix Pair\nTarget 30-50%/Month\nMoney Management And Time Management\nCome And Join Us",
    author: "DENNIS WIJAYA",
    authorPhoto:
      "/st/media/user_photo/3b/3ba/3ba12b5c427c986fa98100a8d106efda_6e14da0f2d124ad7ab377808f14fed9c.png",
  },
  {
    name: "Athena Gold Trade",
    account: 110179627,
    description: "Gold Short Term Trading. Consistent profits.",
    author: "Thakorn Tudsanasorn",
    authorPhoto:
      "/st/media/pim/media/user_photo/ad/ad6/ad6c8bb61f81a7cebd7f2b12b35e1e4e_9b432cb73edb4a5184b8c9d4b287fba6.jpg",
  },
  {
    name: "Saleem FX Signals",
    account: 110179638,
    description:
      "Trading has become easier with us. You can now copy strategy trades via Exness. Invest money and make profits with us effortlessly. With SaleemFx you",
    author: "SALEEM LUBBAD",
    authorPhoto:
      "/st/media/user_photo/ca/cab/caba95449f1e89402faef2b384983926_b6b3ec21b7ac4105b0cec9c08205381f.jpg",
  },
  {
    name: "S18 - EA Trader",
    account: 110179696,
    description: "https://s18.vn\nKhông làm mà vẫn có ăn!",
    author: "MINH TRONG HOANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c4/c47/c472140b2b4bba5dbf7101be227d620c_98a40e1dfbec4a6faa889bdde877d2b7.png",
  },
  {
    name: "5G Trading",
    account: 110179756,
    description:
      '✳️ Focus ✳️ Discipline ✳️ Consistency\n"Let Your Money Work for You"\nMinimum investment 500$\nMonthly target 20% - 30%',
    author: "Akhtar  Gul",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5ab/5ab5882dfd1f1caf542d2aaf983d5f7c_4dc4ad89d13f4d7d89d5eb6ddc0c1b59.jpg",
  },
  {
    name: "Budha Trade",
    account: 110179796,
    description: "Trading",
    author: "VU DUONG",
    authorPhoto:
      "/st/media/user_photo/fa/fa1/fa1c27e977a2ac15a71887bba63600d6_3b6cfd82ec704e53ae2f3669ce58bfd7.jpg",
  },
  {
    name: "Abala VIP 1",
    account: 110179806,
    description:
      "ROBOT AI specializes in currency trading\nSAFE - SUSTAINABLE\n- Profit 50-100%/1 Month\n- Investment MIN=300$",
    author: "DAO VAN TUAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/76/762/762fbff4d5846d6ca5929850bccf97f3_b90d8bf02a1b4a2198c7552ec9b47f08.jpg",
  },
  {
    name: "SHERY FX__",
    account: 110179838,
    description:
      "Professional Forex trader just copy my trades and earn profit",
    author: "ZAHID SOOMRO",
    authorPhoto:
      "/st/media/pim/media/user_photo/30/307/30710f565111c30d87faae6e681327c5_d6396f023dd843e7bbc7022e01b17618.jpg",
  },
  {
    name: "Gold Pro Scalper",
    account: 110179844,
    description:
      "Gold Scalping based on moving averages and other custom indicators, high risk high reward strategy.",
    author: "Mahmoud Sayed",
    authorPhoto:
      "/st/media/pim/media/user_photo/da/da7/da75492589898f82eac09a42f393fe7f_5fa0187dc63245bc9d2afb045d2b052f.jpg",
  },
  {
    name: "Power of skill",
    account: 110179867,
    description:
      "Our strategy it's supply and demand based because this strategy it's big profit and small stoploss.",
    author: "PADALIYA NITINBHAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/0c/0c5/0c5efb19ca3f78ea51debfd74bb2b451_a93e23303a0c4456972d36222f57f040.jpg",
  },
  {
    name: "Izzy Trading Mex",
    account: 110179879,
    description: "Trade Simple. Trade Izzy",
    author: "ISRAEL IGLESIAS",
    authorPhoto:
      "/st/media/pim/media/user_photo/9b/9bb/9bb99db82d2edb809164eaef4e73b7b0_c247fbdb191a48b98525af327ef6f322.png",
  },
  {
    name: "Money Making Machine",
    account: 110179897,
    description: "Money Making Machine.",
    author: "ZAIN ASLAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/9d/9dc/9dc37950c0c3742d37adb1044c8b98b8_18bc0decc2454264bf53aab11febb968.jpeg",
  },
  {
    name: "INTVestments",
    account: 110179916,
    description: "LITTLE INCOME BUT SECURE\nPOCO INGRESO PERO SEGURO",
    author: "ian nicolas tellez velandia",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/692/6922de0d43be355d2bc65798d5d5f298_c2116e845bbb47268dce69f24b7f4543.jpg",
  },
  {
    name: "Tiem Vang Nho",
    account: 110179949,
    description:
      "An Toàn và đảm bảo lợi nhuận nhất có thể\nRoom giao lưu trao đổi kiến thức và room đi lệnh trực tiếp \nhttps://zalo.me/g/rokhqi968",
    author: "NGOC THANH HUONG DOAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/e9/e94/e941985c726f81380f59f9a13b5d4b3e_2e9c65db3d1a44e8a923b9b42502bf37.jpeg",
  },
  {
    name: "Wealth Maker",
    account: 110179969,
    description: "Wealth Maker",
    author: "SORANA NIYAMANON",
    authorPhoto:
      "/st/media/pim/media/user_photo/bf/bf2/bf297399656d5cb23be7ef80903a3707_b21d11cf431d407ea42137a23868321d.png",
  },
  {
    name: "Cash VJC VN",
    account: 110179981,
    description:
      "- Mục tiêu rút tiền 5-15%/month (ổn định)\n- Giao dịch tự động (chuyên nghiệp, kỷ luật)\n- Hệ thống swing trade (an toàn)\nJoin:  https://t.me/cashvjcvn",
    author: "NGOC THINH DUONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c1/c1a/c1a679a998b93ce172585c8dcafa81d9_fdf16eba159e48dd80788d373221d2b0.jpg",
  },
  {
    name: "LP Trading",
    account: 110180090,
    description: "N/A",
    author: "Lam Pham Van",
    authorPhoto:
      "/st/media/pim/media/user_photo/a1/a1d/a1dad14a436e73ff5971b93debd35bfd_fa814b6b605a423780ac4f53ba3884eb.jpg",
  },
  {
    name: "HERO GROUP",
    account: 110180119,
    description:
      "we  are professional traders , working on fundamental and technical analysis . we take trades on combination of both.",
    author: "RAVI YADAV",
    authorPhoto: null,
  },
  {
    name: "HNX-Trading",
    account: 110180133,
    description: "1%/ ngay",
    author: "THAO NGUYEN",
    authorPhoto:
      "/st/media/user_photo/d8/d80/d805a49050cb9d3020b5be6742a9f307_b8c60a2ea6e040439a633df554d6eb0c.JPG",
  },
  {
    name: "Trading-Metals",
    account: 110180166,
    description: "Best way to increse your investments",
    author: "Vinh Cường Lương",
    authorPhoto:
      "/st/media/pim/media/user_photo/dd/dd2/dd234875411a3d290a4653d6351053a2_306efe622cde43f4bb0a2d71be1cf910.jpg",
  },
  {
    name: "IndiabizlistFx Slow",
    account: 110180179,
    description: "Slow and Safe Trading Strategy",
    author: "SOJITRA PRAFULBHAI",
    authorPhoto: null,
  },
  {
    name: "MRM Finance GMBH",
    account: 110180198,
    description:
      "Controlled approach to FOREX MARKET. Low Risk trades - MRM Finance GmbH - First 50 members will enjoy 0% commission !!",
    author: "MAHBUBUR MAHI",
    authorPhoto:
      "/st/media/pim/media/user_photo/34/34c/34c8162a0a7a23749a73088c012cca2f_b8ed5b9a6bec4f8aaff2aa78381257b1.jpg",
  },
  {
    name: "SafeffistDeve",
    account: 110180224,
    description: "Safety - Efficiency - Stability - Development",
    author: "Linh Le",
    authorPhoto:
      "/st/media/pim/media/user_photo/58/587/5870fdfba28d5110fedc7a1d3b3a169f_1e3865b18c6446eeb8d7d272c7a47b2e.jpeg",
  },
  {
    name: "BASATA TRADING",
    account: 110180227,
    description:
      "My method of trading is safe and we target a few points cumulatively. The most important thing is not an interrupted profit, but rather the continuity",
    author: "rachid moumad",
    authorPhoto:
      "/st/media/user_photo/49/491/49103b7f4886c0147e6f2f93a9cbce2a_e893978cf8d940feb11d401ee6730bbd.jpg",
  },
  {
    name: "Vitamin Money",
    account: 110180264,
    description:
      "- Long-term strategy\n- Note: surfing copying will be less effective",
    author: "TRẦN XUÂN",
    authorPhoto:
      "/st/media/pim/media/user_photo/22/22b/22bf2bad40aba2ffc5188c3fa16c6d9f_5e9ea071c9e442bcbb4a74dbae32c254.png",
  },
  {
    name: "Trading Emergente",
    account: 110180310,
    description:
      "Operativa institucional, de Compra y venta basada en zonas de liquidez, protegiendo operaciones con sistema de Cobertura.",
    author: "MARIANO EZEQUIEL PASCUAL",
    authorPhoto:
      "/st/media/pim/media/user_photo/b6/b60/b60a6902479326c10998b17dc44a9dac_2e3dfa35fcb546cfac4cc9d98fe71291.png",
  },
  {
    name: "night shadow fx",
    account: 110180321,
    description: "xau Eu Gu Ga btc eth",
    author: "aphiratee phanumart",
    authorPhoto:
      "/st/media/pim/media/user_photo/80/805/8057089d905552d56c9428721feeb6ef_1df9fc86c15949ae86c4a26de54dfdd9.png",
  },
  {
    name: "GOLD TRADING",
    account: 110180409,
    description: "Profitable Gold Strategy",
    author: "Yassine Aknazay",
    authorPhoto:
      "/st/media/pim/media/user_photo/2f/2f1/2f1e1e4f2344ad2c2652db716d1529b5_310f10e423a8497c8ee7226f7861ddc1.jpg",
  },
  {
    name: "SNIPER 6868",
    account: 110180416,
    description:
      "Chiến lược giảm thiểu tối đa rủi ro mất tiền,kiên nhẫn bền bỉ. Ai muốn kiếm nhanh thì không nên theo.",
    author: "TOÀN MAI VĂN",
    authorPhoto:
      "/st/media/user_photo/b5/b55/b55ac89c887a3932029edddfef97b1bd_67df806227c74c2ba740ee5167cd99f5.jpg",
  },
  {
    name: "Trading Awet",
    account: 110180424,
    description:
      "Trading awet is trading using an EA. Runs only on the XAUUSD pair and EURAUD pair. Ensure to use SL and TP",
    author: "HUSNUL HADI",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/aed/aedd06e6fe8c471564a2813efadfb36f_737a8c88f60a4a009de78fa0b2b11fdb.jpg",
  },
  {
    name: "Bull vs Bear",
    account: 110180434,
    description: "Bienvenido",
    author: "shahid muhammad",
    authorPhoto:
      "/st/media/pim/media/user_photo/fb/fb2/fb2fd88e7aa10208c9960e7b5c828b97_895d7da0b7d14dc799610e3a4548f8dd.PNG",
  },
  {
    name: "Vu Hedge Scalper EA",
    account: 110180525,
    description: "Hedge Scalper",
    author: "Vu Nguyen Huu",
    authorPhoto:
      "/st/media/pim/media/user_photo/6c/6c8/6c81023c67ce758162e1aaeb6d6820e8_fc894eb3e6624a1bb65b83e694e2d919.png",
  },
  {
    name: "Money Spinner3 Gold",
    account: 110180565,
    description: "Make money while you sleep!",
    author: "JANPHEN CHAROENWAT",
    authorPhoto: null,
  },
  {
    name: "Safe investment",
    account: 110180566,
    description: "Safe investment for a comfortable life",
    author: "Duy Lê",
    authorPhoto:
      "/st/media/user_photo/8c/8cf/8cf6feab1f1bba07a485fda1a1fd9dd4_beb6bef99ec84727ba52ea9b6b528984.jpg",
  },
  {
    name: "Tudotaichinh",
    account: 110180573,
    description: "GBPUSD, EURUSD, AUDUSD, NZDUSD",
    author: "DINH TUAN TRAN",
    authorPhoto: null,
  },
  {
    name: "Jonh Wick 8",
    account: 110180585,
    description: "Only trade currencies pair with a target of 5%/month",
    author: "THANH HOANG PHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50a/50a0ee43bc16db9ccddc9fc1578f0fa5_43739171f7624ad389af6f00d4aa5425.jpg",
  },
  {
    name: "Jonh Wick 9",
    account: 110180586,
    description: "Only trade in currencies pair with a target of 7%/month",
    author: "THANH HOANG PHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50a/50a0ee43bc16db9ccddc9fc1578f0fa5_43739171f7624ad389af6f00d4aa5425.jpg",
  },
  {
    name: "Jonh Wick 10",
    account: 110180587,
    description: "Only trade in currencies pair with a target of 7%/month",
    author: "THANH HOANG PHAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/50a/50a0ee43bc16db9ccddc9fc1578f0fa5_43739171f7624ad389af6f00d4aa5425.jpg",
  },
  {
    name: "EYE-FOREX SCALPING",
    account: 110180629,
    description:
      "The monthly goal is at least around 5%-10%.\nMục tiêu hàng tháng ít nhất là khoảng 5% -10%.",
    author: "HONG NHAN NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/82/82b/82b97b120dd339ede34dca4c46a8d8f4_4295defabfe340b7b3d02791490d7df0.jpg",
  },
  {
    name: "MartingHedge",
    account: 110180637,
    description:
      "Protect capital and growth surely and steadily \n15-30% permonth",
    author: "David Chiang",
    authorPhoto:
      "/st/media/pim/media/user_photo/2d/2dd/2dd99b1ff02fd9fd6c71557dcaacb4d7_503bd59ba39541fc972ddc9de56781f2.jpg",
  },
  {
    name: "Estrategia AF",
    account: 110180685,
    description:
      "Nos adaptamos a la volatilidad del mercado, para aumentar rentabilidades y bajar el riesgo.",
    author: "Andres Felipe Riaño",
    authorPhoto:
      "/st/media/pim/media/user_photo/80/809/809581df08d11829f4315355581c9dd0_768254159c524f369f781e982d27518f.png",
  },
  {
    name: "H and R marchants",
    account: 110180718,
    description: "Win win and win",
    author: "Hemant singh",
    authorPhoto:
      "/st/media/pim/media/user_photo/06/060/0600d6e716b2567ca87c065438370228_a2065768ef564014b03f0eb101b2c327.jpeg",
  },
  {
    name: "Copy VH 2024",
    account: 110180771,
    description: "Cấm đánh lot to",
    author: "CHI VINH DUONG",
    authorPhoto: null,
  },
  {
    name: "RR Capital Extra X1",
    account: 110180785,
    description:
      "Extraordinary monthly profits with our elite trading strategy, expertly managed by top-tier market professionals. Unleash your financial potential!",
    author: "HOÀNG PHÚ",
    authorPhoto:
      "/st/media/pim/media/user_photo/2f/2fb/2fbfa0f4309f9532d99b04a5352e7145_fdbaa8d2a9074b5db6fcb7d7150726db.jpeg",
  },
  {
    name: "PROFIT 100  X1",
    account: 110180793,
    description:
      "PROFIT 79%/MONTH.\nNo DCA, NO EA, Have SL & TP.\nhttps://t.me/+VboSIdBBDntlN2Rl   (telegram group)",
    author: "NGUYỄN THỊ NGỌC  MAI",
    authorPhoto:
      "/st/media/pim/media/user_photo/f8/f82/f82868753754774c39641556995d3c7e_922b0555451e4301b00114f318f002df.jpg",
  },
  {
    name: "Dragon6688",
    account: 110180816,
    description: "2010",
    author: "MANH PHAM BA",
    authorPhoto:
      "/st/media/pim/media/user_photo/9d/9d9/9d9c363520e85c6fcb02cbfae4bcf0d6_235cfcd57f08461782d5d8ef162ee4e6.jpg",
  },
  {
    name: "GANAR GANAR",
    account: 110180873,
    description:
      "OPERACIONES CON IA SOLO CON EL PAR EURUSD NADA DE EMOCIONES NI CONFLICTOS INTERNOS. RIESGO BAJO.",
    author: "LIDER TEOBALDO CALLE OCHOA",
    authorPhoto:
      "/st/media/pim/media/user_photo/11/118/118e6a5b2eaf248eb47dd016f9e01a9d_397d4df0dabd4e48ac26376149dfecda.png",
  },
  {
    name: "mimizu4_XAUUSD",
    account: 110180928,
    description:
      '"mimizu4" is an averaging repeat type Expert Advisor. It employs a strategic logic for entries and can handle sudden market fluctuations with its aver',
    author: "Takemura Koichi",
    authorPhoto:
      "/st/media/user_photo/93/939/939e2b09d7fdf9b37dab207672a620a5_109a277bc53749a1a72f0691b79a189d.jpg",
  },
  {
    name: "Big Farm EA",
    account: 110180949,
    description:
      "-EA auto trade 10 currency pairs\n-Daily monitor\n-See result  \nhttps://www.myfxbook.com/portfolio/big-farm-ea/1094847",
    author: "PICHET INTO",
    authorPhoto:
      "/st/media/pim/media/user_photo/7e/7e6/7e6f96fc235aa9512ef21f49e1fa935b_79650829f76140558234a146d93a4522.JPG",
  },
  {
    name: "Gold trade 1",
    account: 110181024,
    description: "Full time",
    author: "ROCKY",
    authorPhoto:
      "/st/media/pim/media/user_photo/c1/c14/c147c6ede1bbd327ab4945bcc87d3d07_3e94b4f3a4e0441bbb9dec4e4d03cc93.jpeg",
  },
  {
    name: "Bel 50k estrategy",
    account: 110181029,
    description: "estratégia para investimento de 50 mil",
    author: "isabel de oliveira mendes",
    authorPhoto:
      "/st/media/pim/media/user_photo/ce/ced/cedd0bbab7801ad7cf555d00ec024d0f_f6e0f460637e40e99b9b785d98568c06.jpeg",
  },
  {
    name: "EA_MINH_TUE_VN",
    account: 110181032,
    description:
      "Trade FRAME D1, low DD, stable profits. \nAccept personal accounts via inbox tel:  0935031041",
    author: "QUOC PHONG DANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/6c/6ce/6cea8b26f5924fca938ca735223e1b9f_9f18bbee58314dcdb6da8d0ebec5a814.jpg",
  },
  {
    name: "EA_THICH_DU_THU",
    account: 110181034,
    description:
      "H1 channel trading on gold and currency pairs (low SW cost), stable profit, low DD. \nAccept personal running, contact tel: 0935031041",
    author: "QUOC PHONG DANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/6c/6ce/6cea8b26f5924fca938ca735223e1b9f_9f18bbee58314dcdb6da8d0ebec5a814.jpg",
  },
  {
    name: "Gold digger",
    account: 110181040,
    description:
      "we will trade only in london time zone and NY time\nmajor currency pairs\nwe will use proper tools to track economy and datas which effect on market",
    author: "Tanveer Ali",
    authorPhoto:
      "/st/media/pim/media/user_photo/d6/d66/d66b41d9409b9d8fd13245cf644bb607_ad48dce22a744ead8e0f76b919052166.jpg",
  },
  {
    name: "Gold Everyday",
    account: 110181079,
    description:
      "Gold everyday by EA for long time .1-2 trades per day and no overnight .The risk is below 30%.",
    author: "自清 朱",
    authorPhoto:
      "/st/media/pim/media/user_photo/43/439/439d15034d24b9c52fefbdef2625f7af_6a5f8b428dc6404ba79a30771932d664.jpg",
  },
  {
    name: "News effect",
    account: 110181132,
    description:
      "money is the most important in life. its decrease problem in life",
    author: "Atul Singh",
    authorPhoto: null,
  },
  {
    name: "MARATHON EUR TRADDER",
    account: 110181183,
    description: "TRADE TO TRADE ANY TIME",
    author: "manoj agarwal",
    authorPhoto:
      "/st/media/pim/media/user_photo/2e/2ee/2ee71f64c719c1ff0624eea5f8306b3e_0650afbe51344b1f942fffae1f2ea8ab.jpeg",
  },
  {
    name: "bhavesh 40",
    account: 110181206,
    description:
      "Check our performance first, then decide. We only need dedicated copiers who are committed to earning consistent profit at low risk..",
    author: "PANDYA HARIHAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/95/955/95575b3528151cf23f929be430f8ca9c_b0ae96602c96418c987818f263d4aac0.jpg",
  },
  {
    name: "THE SECRET VISIONARY",
    account: 110181244,
    description:
      "É uma organização criada com desejo de construir uma comunidade de investimentos forte e sustentável com a missão de ajudar 1 milhão de investidores🎯",
    author: "Fernando Henrique Ferreira da silva",
    authorPhoto:
      "/st/media/pim/media/user_photo/fe/fe5/fe548540e2ca33a563a17265dd57b0fb_b5801eeb72b94a5f8cfaa51cdeb16609.jpg",
  },
  {
    name: "Apollo trading",
    account: 110181259,
    description:
      "a good trade, and another a good trade, and another a good trade,... keep it day by day, week by week",
    author: "DUC LAP NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/c6/c61/c61bd47ae1421129f5e8ea118d103e85_19ac25b5cf3d4b55accceb7253914004.jpg",
  },
  {
    name: "TrendRocket",
    account: 110181295,
    description:
      "Achieve financial freedom with TrendRocket! Follow top traders, access real-time insights, and boost your returns.Join us now to transform your future",
    author: "SENNAN R",
    authorPhoto:
      "/st/media/pim/media/user_photo/ce/cee/cee49ef7f460c216b34cb3d789012763_3ac411babae94c1baa1a69d33e3e9091.jpg",
  },
  {
    name: "VIBA MONEY",
    account: 110181394,
    description:
      "After more than a decade's practicing Technical Analysis we realized that the biggest money is made by trend reversal. We make between 20%-40%.",
    author: "PHIROZ HOBLE",
    authorPhoto:
      "/st/media/pim/media/user_photo/08/085/08593c5e8df100f058110673d1c503e4_8a9bb2debd9b41beaccdb0aa0eec28b1.jpg",
  },
  {
    name: "Titan Group",
    account: 110181395,
    description: "Quản lý vốn, giao dịch khối lượng an toàn cho tài khoản",
    author: "Nguyễn Văn Đạt",
    authorPhoto:
      "/st/media/pim/media/user_photo/a6/a6b/a6b57b6e72ae67b7870f831106ed942c_f65d377363c444b58d4bd241fbe8d448.jpg",
  },
  {
    name: "XAUUSD VS XAGUSD",
    account: 110181426,
    description: "Gold and Silver hedging transactions",
    author: "静平 杨",
    authorPhoto:
      "/st/media/pim/media/user_photo/48/48f/48f97344e19b589668f2c8c6004fa3b6_2b234076e52d4a05a5b32e2cba0f3e4b.png",
  },
  {
    name: "Expert_pro",
    account: 110181443,
    description:
      "I am professional forex trader. Involved in forex trading Sine 2016.Trading style based on price action in higher timeframe. Monthly profit target 20%",
    author: "Delowar Hossen",
    authorPhoto:
      "/st/media/pim/media/user_photo/e1/e12/e12ec72d7f28c368ab2a06e68a4c84ca_ea2ba26d86b24b8787ff5bab93dc2bdd.jpg",
  },
  {
    name: "Smart strategy",
    account: 110181479,
    description: "Stable Profit",
    author: "ahmed khairy",
    authorPhoto:
      "/st/media/pim/media/user_photo/01/01c/01cff33e939e56a094bbc88547831643_84cf638f57c24144986fc43c9ad49d2f.jpg",
  },
  {
    name: "Gold Grinder",
    account: 110181491,
    description:
      "Day trading XAU/USD pair using price action on multiple time frames. Target of 10% monthly profit",
    author: "Gilbert Lazaro",
    authorPhoto: "",
  },
  {
    name: "HOATUOI -1",
    account: 110181494,
    description: "Lợi nhuận ổ định",
    author: "Chí Hạnh Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/6f/6fa/6fa491e9ccbc407331b21048a807362d_f05732fcf5a448d88eb1e15da5ae3e5d.jpg",
  },
  {
    name: "Thanh hoa capital",
    account: 110181497,
    description:
      "Lợi nhuận chung bình 15% đến 35% / tháng . Quản lý vốn tốt cho nhà đầu tư",
    author: "Thu Nguyễn Văn",
    authorPhoto:
      "/st/media/user_photo/c8/c88/c8895d4ab7a55300b42df89a34af35da_82660b06f6eb4958848368190d21cf3a.jpg",
  },
  {
    name: "Lucky Forex",
    account: 110181512,
    description:
      "Trade on 4 currency pairs: audcad, audusd, eurosd, usdcad. \nProfit: 20 - 30% / month",
    author: "NHU QUYNH VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/b8/b85/b8514fea9cf11c0e1e79c5c417474fa2_a15150651e694882924af78674b37b8e.jpg",
  },
  {
    name: "BTC EA Trade 03",
    account: 110181519,
    description: "Expected monthly return rate of 50%.",
    author: "晓伟 胡",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/86a/86af3ba2af5597045063859b60ef97c5_0fe53411895b4752be248f2c089bd45f.png",
  },
  {
    name: "Gold wave of the day",
    account: 110181521,
    description:
      "1.交易频率很低，有时候几天都不开单\n2.交易逻辑是趋势型小止损换大盈利，盈亏比很大\n3.历史回测一个月平均能抓两次大行情，资金翻一倍\n4.很考验耐心和执行力，能忍受较大的利润回吐\n5.时间是个好东西，我们要成为时间的朋友，包括跟单也是，没有耐心钓大鱼的就别跟了",
    author: "南谕 余",
    authorPhoto:
      "/st/media/pim/media/user_photo/12/123/123d07c6dab671fd5aaedd275aec6024_eab6ff78b3304161bd28c693967bd0da.jpeg",
  },
  {
    name: "TREDER VN",
    account: 110181527,
    description: "Ổn Định - Bền Vững",
    author: "TUẤN BÙI",
    authorPhoto: null,
  },
  {
    name: "GoodLuck-MKT20",
    account: 110181529,
    description: "Nothing",
    author: "Dinh Thang Phung",
    authorPhoto:
      "/st/media/pim/media/user_photo/c0/c04/c04a802bc328c19b91f7760259a5d5c3_10943a8b1b65486aa79503d4107f1e65.png",
  },
  {
    name: "AI Turtle Trading",
    account: 110181544,
    description: "leverage and compound interest",
    author: "VAN NAM NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/92/928/92869cc732659175f9e0e5d75ba91c52_45215cd1f73c4836a3c6b9eb79f8931e.jpg",
  },
  {
    name: "Corporate account",
    account: 110181564,
    description: "Dare to Dream Big",
    author: "Jelyn Samillano",
    authorPhoto:
      "/st/media/pim/media/user_photo/49/49f/49fdeff9f2b4b2ccde65fa8f5e559be8_52c3d322dff34eb393e7b086ce56b33d.jpeg",
  },
  {
    name: "Trend is your friend",
    account: 110181572,
    description: "100% Algo trading with selected pairs",
    author: "Burcuhan Bayulken",
    authorPhoto:
      "/st/media/pim/media/user_photo/9a/9ae/9aeed498e6a42a3f5578233e2368e584_41ca18e2946f4e0994a43460753f9646.JPG",
  },
  {
    name: "Cao Phuong Lam",
    account: 110181659,
    description: "Cao Phuong Lam",
    author: "EAO LÂÍMI",
    authorPhoto: null,
  },
  {
    name: "Bumblebee 2024",
    account: 110181686,
    description:
      "Chiến lược giao dịch 4 cặp tiền an toàn đã vượt sóng 2 năm. Lợi nhuận ổn định 25-40% tháng. DDmax không quá 25%.",
    author: "NGUYỀN HOÀNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/41/41b/41b31b31748413795bbaa44623f59070_80f295bf499f4327a1880508b3ec268f.jpg",
  },
  {
    name: "C Hedge Fund",
    account: 110181710,
    description: "Mixed Strategy",
    author: "Chalermchai Kochaphun",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/69d/69d936609d3be0fadffca1af3d746a77_d513f8a9f2dc4a37beeb516983408466.jpg",
  },
  {
    name: "Kizumbi FX Academy",
    account: 110181727,
    description:
      "It's our Field class, invest in our expertise for the best and reliable returns",
    author: "Hope  Katemba",
    authorPhoto: null,
  },
  {
    name: "Master Gold",
    account: 110181734,
    description: "Kinh nghiệm 5 năm chuyên về Xau/Usd",
    author: "Thu Hiền Đinh Thị",
    authorPhoto:
      "/st/media/pim/media/user_photo/2c/2ca/2ca1638f938e17dfae057585abe7d18f_880fae29329443b0b9832609592cb21d.jpeg",
  },
  {
    name: "MunMongManh",
    account: 110181737,
    description: '"Rule number 1 is don\'t lose all the money you have"',
    author: "Hop Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/c0/c0f/c0f55e8164f70b1f3aa834f3531ad519_f24baf9ef8b94dc3834cb44dde550ab0.JPG",
  },
  {
    name: "Christian Investment",
    account: 110181811,
    description: "Conta conservadora e gerenciada",
    author: "ISAIAS ALVES DOS SANTOS",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/600/600228b7c661e9e50accfd8264b88eb5_5a03bbf8182e4cda96a83ab0da3827da.png",
  },
  {
    name: "32_trend_trader_1823",
    account: 110181823,
    description: "Use EA and trade follow trend.",
    author: "TẤN PHẠM VĂN",
    authorPhoto:
      "/st/media/user_photo/d8/d87/d874e7c270df51115765d000c3900cd8_ca6f74fdc87e44de92130b8c0cf07ced.jpg",
  },
  {
    name: "Black Rock",
    account: 110181833,
    description: "Safe Trading strategy..............",
    author: "Ram Prakash Sharma",
    authorPhoto: null,
  },
  {
    name: "Golden_Bot",
    account: 110181850,
    description:
      "Trading automatizado en el par XAU/USD.\nEstrategia de cobertura,",
    author: "Mariano Fernandez Favre",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c2a/c2a2d328acb68efdd72bba01622f79d0_3e297e0e8b17444ab6093bce29a9ad88.jpeg",
  },
  {
    name: "INERSIONES RETAR",
    account: 110181854,
    description:
      "Gestión de Capital con responsabilidad, para minimizar las perdidas y maximizar las ganancias\ncontamos con equipo de Traders Consistentes",
    author: "JIMMY INLAGO",
    authorPhoto:
      "/st/media/pim/media/user_photo/35/358/3585f71c36a31cd46e1418842fe31493_36c4f64c33a44a39ad7e42d06eb8da99.png",
  },
  {
    name: "SB Keiko J",
    account: 110181858,
    description:
      "trading algorítmico, rentabilidad aproximada del 15 al 25% al mes",
    author: "LUZ MARY AGUILAR ZAPATA",
    authorPhoto:
      "/st/media/pim/media/user_photo/4c/4c8/4c8e9e9471d64659376b6ab33bc93a8a_be86736299264395b7887d7c3a2c15a3.jpg",
  },
  {
    name: "KTOL Gold Scalper",
    account: 110181894,
    description: "Scalp Gold with Stoploss = 20% , Takeprofit = 1%/ daily",
    author: "Nam Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/e3/e3b/e3bb9bfbd8ef3254e26ef91dab97b8e1_726be135998a43a88054cd048026844e.png",
  },
  {
    name: "TMT GOLDSCALPER PRO",
    account: 110181907,
    description:
      "This trading involves making multiple trades within a single session to capitalize on small price movements .It is short term trading technique.",
    author: "Minh Tuan Tran",
    authorPhoto:
      "/st/media/pim/media/user_photo/30/304/304511468c087b50c8c6267fbc4a9d8b_9cc2b7def65849a787e2118387526f06.jpg",
  },
  {
    name: "WAVE INVEST",
    account: 110181908,
    description: "5-20%/month",
    author: "Hà Nguyễn Thị",
    authorPhoto:
      "/st/media/pim/media/user_photo/fc/fc1/fc114d4c9aa702ada316c9c3a14d94de_78ed980bae334ea3a49caa2721240301.jpg",
  },
  {
    name: "metaXtrading mt4",
    account: 110181910,
    description: "By signal metaxtrading platform",
    author: "NGOC TOAN PHAM",
    authorPhoto:
      "/st/media/user_photo/ea/ea6/ea6a1c668ff2ba8e2e02323fdfbcc6cd_3101a631a430457d817cf177b93f7a0f.png",
  },
  {
    name: "SoulmateParisN01",
    account: 110181914,
    description: "BB & RSI & MACD",
    author: "NGOC HAN LE",
    authorPhoto:
      "/st/media/pim/media/user_photo/3a/3a9/3a9a3d61b71e6d055fdaab3ccf8f5b1c_542d79b8e1974bdc84aa6f8fb058b52e.jpg",
  },
  {
    name: "Money Money Come 001",
    account: 110181958,
    description: "1 + 1 = 2",
    author: "AGUS SALIM",
    authorPhoto: null,
  },
  {
    name: "Hello Money",
    account: 110182012,
    description: "I trade to make money Don't focus on winning anyone.",
    author: "MISS KESKAEW KOKSANTIA",
    authorPhoto:
      "/st/media/pim/media/user_photo/00/00a/00aa48b5700a49f488b6aa39008b88c3_bf57e7da676a404b900ebbd09d96f5cf.jpg",
  },
  {
    name: "Scalp_Earn",
    account: 110182026,
    description: "scalping And day Trading \nBook pips \nHappy Trading",
    author: "Bhisham  Singh",
    authorPhoto: null,
  },
  {
    name: "JONY_GOLD",
    account: 110182044,
    description: "We Believe in Transparency.",
    author: "Sayed Awais Ahmed Shah",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5ac/5ac41f2bd02879353ffc4f03f735b0ca_ff1466acd7a641cabec3c3a5220e6d90.png",
  },
  {
    name: "Daily 2 percent",
    account: 110182046,
    description: "Swing on a long trend,Low risk,profit 2%/day",
    author: "Tâm Lê Hữu",
    authorPhoto:
      "/st/media/user_photo/e7/e77/e77880c6363c6db9bd518fbf028e376f_719f215abfe44f0fa43cf4d4a92d7c23.jpg",
  },
  {
    name: "Slow Trader",
    account: 110182047,
    description: "Slow and steady wins the race.",
    author: "MOHAMMAD ALI",
    authorPhoto:
      "/st/media/pim/media/user_photo/d4/d45/d4576015eab045512096b96031d0985c_4770638415e44b97ad68c15e2b3d1cd2.png",
  },
  {
    name: "My son GIAHAO",
    account: 110182078,
    description: "Safe",
    author: "Phan Hưng",
    authorPhoto:
      "/st/media/pim/media/user_photo/41/41e/41e30061166c9feec657eee3feec5195_d08b1642efd841f4a06d7a108f768a65.jpeg",
  },
  {
    name: "The Devil s Plan",
    account: 110182080,
    description: "Make money together",
    author: "文宏 喬",
    authorPhoto:
      "/st/media/pim/media/user_photo/2c/2c6/2c6b175b67d364fbe8f30e985937602a_3df9430a93bb444290e2e9b36ec1f97c.jpg",
  },
  {
    name: "EUR-XAU BAJO RIESGO",
    account: 110182129,
    description: "TRADING EUR-XAU",
    author: "Enrique Pecora",
    authorPhoto: null,
  },
  {
    name: "Gao Silver II",
    account: 110182170,
    description: "Trade EU GU",
    author: "THI MY TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/98/981/98172165413fa1b5912c863c62a416e1_15cf603130e14f3a9f454bc0e632a6ef.jpg",
  },
  {
    name: "Mr_D0G_PATH",
    account: 110182172,
    description: "1 % a day",
    author: "herry hartono",
    authorPhoto:
      "/st/media/user_photo/72/720/720d2099ca00d8bdf88505eea058ce63_bfabb986ac144c949a685103460dfd0c.png",
  },
  {
    name: "PROFITS CLUB",
    account: 110182185,
    description:
      "🌟 Welcome to Profits Club 🌟 Join us for a transformative trading experience and unlock the path to financial success. ( Daily Profit Margin %50 )",
    author: "Rai Faizan  Fareedi",
    authorPhoto:
      "/st/media/pim/media/user_photo/74/74f/74f73623a285fe0e53a8640ee2d0f7af_c9465099562e4088851ed31b8306f50d.png",
  },
  {
    name: "Bull - Market Master",
    account: 110182346,
    description:
      "Strategy based on risk calculation from market standards. No martingale, no grid, just a good strategy running over the time.",
    author: "Arthur Gerhard",
    authorPhoto:
      "/st/media/pim/media/user_photo/33/331/3317dd8b64ae6244d7ab05ed4b1e2f1a_a96245fe29b74aebb7effa0a5b2cbd56.jpg",
  },
  {
    name: "follow trend",
    account: 110182351,
    description:
      "Chúng ta sẽ đầu tư theo nguyên tắc:\n1. Bảo vệ quyền lợi nhà đầu tư tối đa.\n2. Rủi ro thấp nhất-lợi nhuận cao.\n- Phương pháp đầu tư: theo xu hướng",
    author: "Các Lê Văn",
    authorPhoto:
      "/st/media/pim/media/user_photo/99/99e/99e829ef5cc8d96e3517aed843d6a8e8_17701edbd09a4bfebeeb4a747394e648.jpg",
  },
  {
    name: "PassiveIncome4U",
    account: 110182364,
    description:
      "For consistent, safe returns. Over the past five years, I've honed my skills and been profitable for the last three, delivering monthly profits 20 %",
    author: "Biswas Khadka",
    authorPhoto:
      "/st/media/pim/media/user_photo/b7/b77/b778087aa35f9224d58d2ebd64534afe_91392218e0e04eb69cf85d1969655bf2.jpeg",
  },
  {
    name: "判断趋势顺应趋势回踩确认",
    account: 110182377,
    description: "顺势而为",
    author: "海涛 刘",
    authorPhoto:
      "/st/media/pim/media/user_photo/17/176/1760bd3cfcac687bb192ed79f042b68b_213fccf540914549b24065dad1e685cb.jpg",
  },
  {
    name: "Eagles FX",
    account: 110182385,
    description: "2%-5% monthly",
    author: "Khee heng Lee",
    authorPhoto:
      "/st/media/pim/media/user_photo/f7/f70/f70fa385c42a2a806abdd64628a5a569_4c603e291e794dfebe17d56b4b7e0b13.jpeg",
  },
  {
    name: "W5 of your life",
    account: 110182393,
    description:
      "Prefers manual trading using Price Action, Elliott Wave, trendline, MA, and RSI. Can easily make $1 to $5 daily with 10 years of experience.",
    author: "praphas samersri",
    authorPhoto:
      "/st/media/pim/media/user_photo/eb/eb7/eb72e263948b83fb7c84a64e59198377_6e380fb7cc7e4d0cac616bbc4f61f5a1.jfif",
  },
  {
    name: "zhuanlejiupao",
    account: 110182438,
    description: "赚钱就跑，年化利率50-100%之间，只专注于黄金。",
    author: "志鸿 邹",
    authorPhoto:
      "/st/media/pim/media/user_photo/db/dba/dbad72d78ea0c8978e911cb28dba4eac_3772de88041f4ea18764b7c98991604d.jpg",
  },
  {
    name: "equity protection 1",
    account: 110182492,
    description: "Dear valued investor, Description is on profile description.",
    author: "MR KITIPOP WINYANGKUL",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/ee8/ee8e3f527af1e9c58dd6ef45bd7f3141_b35d46fd0ee847d099c88e728ec18d3d.jpeg",
  },
  {
    name: "EUR Scalper",
    account: 110182523,
    description: "Spacial strategy for EUR\\USD $",
    author: "Fatma Alhadrami",
    authorPhoto:
      "/st/media/pim/media/user_photo/d6/d6a/d6adb4e6ee51e747fe9de4dd301b619c_0d2bfbdc112640f0a741602c38545550.png",
  },
  {
    name: "FX-4 Daily Profit",
    account: 110182531,
    description:
      "Trade by EA\nProfit 1-3% per day, 20-50% per month\nDrawdown < 30%\nEquity : 3000 USD, \nLot size: 0.02, \nPairs: EURAUD, EURUSD, EURCAD\nLeverage: 1:200",
    author: "MR CHALERMSAK SANGKAMANEE",
    authorPhoto:
      "/st/media/pim/media/user_photo/47/474/474d3b88feb6d8e3c918789149453c9c_597cfde980584214bcc1cbdbb7147b6b.jpeg",
  },
  {
    name: "Instant CopyAI",
    account: 110182552,
    description:
      "CopyAI executes our experts trade signals for you instantly with precision and daily profit.",
    author: "CHISOM NNA",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cbb/cbbca10140ba30cfb1adf408f63d539a_c66abd58b29a4e2fa9c71bc5931b62c8.jpg",
  },
  {
    name: "StepByStep",
    account: 110182577,
    description: "Profit: 1-2%/day. Only trading money pairs",
    author: "THI THANH VI NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/af/af5/af5a992ac443c2175bccd5aac52a15de_ed9f870fbf104bb8b1f837147a9df3da.jpeg",
  },
  {
    name: "Sagittarius",
    account: 110182579,
    description: "Profit: 1-2%/day",
    author: "THI THANH VI NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/af/af5/af5a992ac443c2175bccd5aac52a15de_ed9f870fbf104bb8b1f837147a9df3da.jpeg",
  },
  {
    name: "Daily 1 percent _ 5",
    account: 110182618,
    description: "Daily 1 percent _ 5",
    author: "ACTING SUB LT PIYAPONG SASOONTARA",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e21/e217cc888eeac64a72587a2ccef51616_c6b63dff56f141628ef6eef53db928e2.png",
  },
  {
    name: "HighRiskHighReturn2",
    account: 110182620,
    description:
      "EA same as Daily 1 percent\r\nBut reduce equity from 5000 to 3000$\r\nAccumulate profit until 4000$",
    author: "ACTING SUB LT PIYAPONG SASOONTARA",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e21/e217cc888eeac64a72587a2ccef51616_c6b63dff56f141628ef6eef53db928e2.png",
  },
  {
    name: "HighRiskHighReturn4",
    account: 110182622,
    description:
      "EA same as Daily 1 percent\r\nBut reduce equity from 5000 to 3000$\r\nAccumulate profit until 4000$",
    author: "ACTING SUB LT PIYAPONG SASOONTARA",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e21/e217cc888eeac64a72587a2ccef51616_c6b63dff56f141628ef6eef53db928e2.png",
  },
  {
    name: "Winner Investment",
    account: 110182625,
    description:
      "Strategy tested for 1 year in real account with a profit of 15-25% per month. The maximum drawndown was 20%.",
    author: "Edson  Gerhard",
    authorPhoto:
      "/st/media/pim/media/user_photo/6d/6d5/6d5f5ae1d61bd7c35448b8d56c5d6773_9f3f192ef36547548e9345549d62fafc.jpeg",
  },
  {
    name: "Nam_Gold Trading",
    account: 110182626,
    description: "Chuyên giao dịch Vàng",
    author: "THI KIEU LAM VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/51/519/519f764deeb5ab8534c893eaaaebc4fc_174286026ecc461ba40b69176a602983.jpg",
  },
  {
    name: "TẠ ĐÌNH VIỆT",
    account: 110182634,
    description: "Follow me and relax",
    author: "Tạ Việt",
    authorPhoto:
      "/st/media/pim/media/user_photo/65/658/65897330210b34bc428b51864b9d4414_8a3fd27d8a204405a6fd2b30660235f1.jpg",
  },
  {
    name: "Gold trading",
    account: 110182645,
    description: "Scalping + Hedging + Swing trading",
    author: "MR SURASAK PAIRAT",
    authorPhoto:
      "/st/media/pim/media/user_photo/a8/a8b/a8b965ab82b774aa5f521c8f3b2da660_cf680898567b43b8b0ed71f524b1e649.jpg",
  },
  {
    name: "AutoKonnect",
    account: 110182690,
    description:
      "Risk only what you can afford to loose as past performance does not guarantee future performance.",
    author: "OLURANT SUNDAY OWOLEWA",
    authorPhoto: "",
  },
  {
    name: "MVP-Stable Profit",
    account: 110182715,
    description:
      "My goal is aim for keep safe and earn stable profit, I will not bet your and mine money on gamble.",
    author: "Thường Nguyễn Minh",
    authorPhoto:
      "/st/media/pim/media/user_photo/24/247/2473fe608375dcb1433c617f90795fdd_e523a87b18674382a9583d9553e8bf1a.jpg",
  },
  {
    name: "ThanhVu_VN",
    account: 110182734,
    description:
      "Minima 500USD\n✅Target Profit : 10 - 15% (Monthly)\n\n✅Setting Copy :In Proportion To My Funds\n✅Dont Tick Opened Oders\n✅Trade AUDUSD",
    author: "NGOC THANH VU",
    authorPhoto: null,
  },
  {
    name: "Lee Corporation",
    account: 110182862,
    description:
      "Been trading in forex and gold for over 10 years, join us now to get profit up to 10% per week. Thanks.",
    author: "NGUYỄN SINH",
    authorPhoto:
      "/st/media/pim/media/user_photo/ad/ad3/ad35886a31e195a057cd29c7b194855b_3dcdcb9cdf7c4fd8b836c5e8c28aebb6.jpg",
  },
  {
    name: "Win of win",
    account: 110182897,
    description:
      "Trading strategy with an acceptable level of risk, discipline adherence, and quick capital recovery.",
    author: "Binh Dinh Thi Thanh",
    authorPhoto:
      "/st/media/pim/media/user_photo/b1/b15/b15c1b32e6b0be4f4521e1fdbb750e25_dedc88d3f9f2482c9f1ec2746974ca5b.jpg",
  },
  {
    name: "FuturePanda",
    account: 110182900,
    description: "เทรดน้อยๆ ค่อยๆเทรด",
    author: "Chatnaree Pathan",
    authorPhoto:
      "/st/media/pim/media/user_photo/38/38d/38db051a3f7cc27413e3d673ffda45c6_c11b1f7855614ea791fb6da1c4ba821d.png",
  },
  {
    name: "KkFinancee",
    account: 110182968,
    description:
      "SL/TP: 1/1\nDD: 10-15%.\nSet SL 20% DD to protect your fund\nTrade based on price action, trendline and RSI",
    author: "Khang Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/50/504/504d7af14eb37c0720796caee6eba044_930126f2b8714ee4b76f79f74ef164c9.png",
  },
  {
    name: "Roller Coaster",
    account: 110183171,
    description: "Manual trading",
    author: "Pisanu Chanakorn",
    authorPhoto:
      "/st/media/pim/media/user_photo/ea/eac/eac68b44eb1c0466c6a824749932cdd2_c6b96283496d4e349bd260728c9e0005_bpmfiTM.jpg",
  },
  {
    name: "ONLY GU SAFE",
    account: 110183178,
    description: "SAFE AND TAKE PROFIT",
    author: "Thị Mỹ Linh Nguyễn",
    authorPhoto:
      "/st/media/pim/media/user_photo/af/af6/af629fd3c3607f57c60a4ac80b658e3f_f69e14d24561486592c07dde39c5fae4.jpg",
  },
  {
    name: "MONEY MONEY",
    account: 110183205,
    description: "Make money everyday",
    author: "LY LÊ THỊ",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1a8/1a8b8b84934c5259f9daaeddb04cc523_2f4ef1e3f8d34305965662b381a2f127.png",
  },
  {
    name: "Assasin EA",
    account: 110183214,
    description: "Trade Euro Pair and Gold",
    author: "MELSIA WIBOWO",
    authorPhoto:
      "/st/media/pim/media/user_photo/ba/ba0/ba031e1150acf1936a2021e295435fcc_8c7e50e283874ecabd5b23a97cdbb48e.jpg",
  },
  {
    name: "Vo Danh Pro",
    account: 110183222,
    description: "High risk !!!  \nTelegram : @vodanh9909",
    author: "giang thai hong",
    authorPhoto:
      "/st/media/pim/media/user_photo/c9/c9e/c9ef831dc45803fc193b58d4147d95a6_255952c81a1e4b23a9ec2389ec2937e6_fhmCv4m.jpeg",
  },
  {
    name: "华尔街CG手动操盘手Xauusd",
    account: 110183228,
    description: "每天早上7.30起来做个单，然后挂根据行情挂单不频繁做单风险小",
    author: "成辉 凌",
    authorPhoto:
      "/st/media/pim/media/user_photo/2f/2f7/2f7c4076f33ff8560cb78703f04f71ad_c4cd0a6165eb461795793e7694f1f846.jpg",
  },
  {
    name: "999 Gold Master",
    account: 110183237,
    description: "Profit over 30%/ Month",
    author: "Linh Hoang Cong",
    authorPhoto:
      "/st/media/pim/media/user_photo/bb/bbb/bbb1af03c2a5d5e512c228158b87c6ca_5beff19297a246dd83966b7037ccd3d1.jpg",
  },
  {
    name: "A Pro Trader",
    account: 110183260,
    description:
      "- An experienced trader & fund manager\n- A Day trader using Price Action and Supply/Demand without any indicator.",
    author: "Đức Hậu Trần",
    authorPhoto:
      "/st/media/pim/media/user_photo/a1/a10/a105c2332426c5476312a72b2266bd27_b6031442e3a24f09adf7c03d4c740d8b.jpg",
  },
  {
    name: "Kill_Bill_F24_98_AT1",
    account: 110183286,
    description: "Dynamic Strategy seeking to maximize profit",
    author: "Son Ma Quang",
    authorPhoto: null,
  },
  {
    name: "GrandPa Trader",
    account: 110183317,
    description:
      "Veteran Gold trader \nFor more than 10 year experiences\nLow risks but very satisfied returns!",
    author: "WISUT WORAMUSIK",
    authorPhoto:
      "/st/media/pim/media/user_photo/e7/e7f/e7f68d67593540120a3b76edb806efa2_036d823b39b546e49b81d492252271fa.jpg",
  },
  {
    name: "Digital Point 4 O",
    account: 110183322,
    description:
      "Price Action Based Trading. \nOnly 4 star 5star Entry setup Get.\nComplasary plased stop loss and take profit.",
    author: "CHAUDHARI LALIT",
    authorPhoto:
      "/st/media/pim/media/user_photo/f3/f3e/f3ed234f3ecb026e1b77067272d4df3c_9a9cd3f24adb4964ac7d6f72b5cb8181.jpg",
  },
  {
    name: "Easy Invest",
    account: 110183325,
    description: "Astounding Auto Trading System",
    author: "NGUYEN ANH VU TRUONG",
    authorPhoto: null,
  },
  {
    name: "Global Trading",
    account: 110183580,
    description:
      "Este copy foi criado para atender investidores exigentes que buscam maximizar seus investimentos .",
    author: "Marlon Cardoso Scatolin",
    authorPhoto:
      "/st/media/pim/media/user_photo/c8/c87/c87dfb604dda6419c1089b9f482f3b46_c9be4b7197824bce83e81afa9bde0e81.jpg",
  },
  {
    name: "AI Smart v1",
    account: 110183666,
    description: "AI Smart v1",
    author: "DUC THANH TRAN",
    authorPhoto: null,
  },
  {
    name: "Brussel by Apisbot",
    account: 110183668,
    description:
      "Trade on EURUSD, averaging max. 3 layer, no martingale. Stoploss using certain logic to minimize risk. Trading contains risk, use money you can afford",
    author: "David Yulianto Santoso",
    authorPhoto:
      "/st/media/pim/media/user_photo/69/696/696c116dd07051e4d302bd6ee53779b3_aec007cb1d8c4deeb7f65842b5577a61.jpg",
  },
  {
    name: "ATURO VIETNAM",
    account: 110183678,
    description:
      "- Mục tiêu 10-20%/tháng\n- Swing trading\n- Không ngày nào lỗ\n- Giao dịch thuần EMA & ICHIMOKU",
    author: "HUNG LE VAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/13/139/13933933199204e84b0e1039c672e536_10f38f27c3d34566977824431bffe571.jpeg",
  },
  {
    name: "AQua Investing",
    account: 110183680,
    description: "Adding some buckets of Blues from Forex Ocean .",
    author: "BHARAT KAUSHIK",
    authorPhoto:
      "/st/media/pim/media/user_photo/92/923/9236d52abcd43c996b0c1e2fca4a99c9_92f50ad9ab8944b292dbd4af8074884c.jpg",
  },
  {
    name: "Buti dxbG63",
    account: 110183719,
    description: "لاتقلق",
    author: "Buti Aljnaibi",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1aa/1aa93b73e5e3e572d4a13c94d590fc94_c847f635296a43d1b33bf4d3db63e651.jpeg",
  },
  {
    name: "SunFish Trader",
    account: 110183775,
    description: "Trading in Zone",
    author: "Thanayooth Dhittanate",
    authorPhoto:
      "/st/media/user_photo/88/887/887e458e0955090c950897ea80b8008d_891c0a0fcf544cd8b989faa0b86116b5.jpeg",
  },
  {
    name: "Wanwan เทรดคู่เงิน",
    account: 110183809,
    description:
      "บัญชีนี้เทรดด้วยกลยุทธรันเทรน ดิฉันเทรดเล่นๆ หาค่าขนมเฉยๆ ผู้ลงทุนสามารถลงทุนได้ที่บัญชีหลักคือ https://social-trading.club/strategy/110161837",
    author: "SIRIWAN AIAMLA OR",
    authorPhoto:
      "/st/media/pim/media/user_photo/8d/8de/8de1039f42b19e404cec83c05fa033bd_45e051f8bdc1487c8a7bb4ad8eb96f4d.jpg",
  },
  {
    name: "Scalping_Beast",
    account: 110183960,
    description: "We do scalping",
    author: "mariyam indori",
    authorPhoto:
      "/st/media/pim/media/user_photo/f6/f63/f63382cb89015d0eff355708b9f22d0e_749a50476a9c4b22a90478828cf5cd40.jpg",
  },
  {
    name: "97黑马111",
    account: 110183980,
    description: "5555665",
    author: "梦婷 徐",
    authorPhoto:
      "/st/media/pim/media/user_photo/26/267/26700282eb69212326813f4df5b153a6_00f30c7d05054f1c9ed181f0615e5d5d.jpg",
  },
  {
    name: "Prakash 1000",
    account: 110184000,
    description:
      "Hi this copiers account  copy 500 usd monthly profit 5 to 10 %",
    author: "PRAKASH JOTDAR",
    authorPhoto: null,
  },
  {
    name: "Happy 2024",
    account: 110184008,
    description: "Van dung lai kep",
    author: "Nguyen Thuy Lan",
    authorPhoto:
      "/st/media/pim/media/user_photo/ed/ed4/ed429329fb4110a02c0e35eb5ad0da4f_64791d74361544a2b8ab2026757c5968.jpg",
  },
  {
    name: "2X Trading",
    account: 110184017,
    description: "High Risk - High Return",
    author: "THI LOAN VU",
    authorPhoto:
      "/st/media/pim/media/user_photo/a1/a14/a148e317fc9abd35657448226bcd1aba_63fb433e3d30489f8ae20c3996c46f07.jpg",
  },
  {
    name: "FX Fresh Life",
    account: 110184036,
    description: "Plan to Trade",
    author: "Van Son Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/e8/e81/e811560aae6746b59fe69fee7143a8d5_9ac9bc98574a471dae5b4b287f2c7e17.png",
  },
  {
    name: "Thiên Nga Trắng",
    account: 110184037,
    description: "Không quan trọng lãi cao, chỉ cần lãi đều.",
    author: "Tuấn Nguyễn Quang",
    authorPhoto:
      "/st/media/pim/media/user_photo/13/138/1388121313aafd04ca88311c7dbc365a_30e00950c4b64d82bdee19621ba93090.jpg",
  },
  {
    name: "ONLY GOLD FX",
    account: 110184047,
    description:
      "this is amorning 8.30 AM timing jeckpot wining ret is very good 95% best copy trading opasation for pasiv income",
    author: "Sima bai",
    authorPhoto:
      "/st/media/pim/media/user_photo/5e/5e8/5e8bf443d8db4a4b5c9b82079b24388f_5dd8d71995804325919ae83474d5b98a.jpg",
  },
  {
    name: "7th Sence",
    account: 110184076,
    description:
      "Forex copy trading simplifies your trading journey by allowing you to automatically replicate the trades of experienced investors.  Profit 20% / Month",
    author: "SNEHA MAHADAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/64/64b/64be190043bd6e77a373e0eebadac06b_ca029a0c075347379087fe3a34e82b09.jpg",
  },
  {
    name: "EURUSD - Việt Nam",
    account: 110184122,
    description:
      "EURUSD - Việt Nam\n\nMục tiêu 10%/1 tháng.\nHãy Copy với số tiền nhỏ và cảm giác thoải mái nhất.",
    author: "DANG KIEN NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/9a/9aa/9aa054a0dadb604e9d9abcbb5082a31d_82cc93ea9ed547a08bfd45fba650c5d9.jpg",
  },
  {
    name: "86 Trading4Living",
    account: 110184135,
    description: "86 Trading4Living",
    author: "VAN NGOC NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cb9/cb97bd49dd30d8ef96b07b56b4ad05bb_596cd7784f2f4db3b08fd827fad1f135.png",
  },
  {
    name: "Smart trade AI",
    account: 110184143,
    description: "Smart trade AI",
    author: "MR METHEE TAENGNGAM",
    authorPhoto:
      "/st/media/pim/media/user_photo/3f/3ff/3ffc0f32d01c1ea7878a92702e252070_149a315cf3ba4065999fa348b0adb376.jpg",
  },
  {
    name: "ARTOMORO Pos Master",
    account: 110184188,
    description:
      "Trading menggunakan Fibo H4 untuk OP\nOnly AUD-USD\nEA LAINNYA BISA WA SAYA 085781111339",
    author: "MUSTIKO CAHYONO",
    authorPhoto:
      "/st/media/user_photo/9a/9a1/9a1e5146684fdbfe70362e0ebee3f2e0_5d2aa39f19c643b187b8ea4f88a3b236.jpg",
  },
  {
    name: "Swing trading",
    account: 110184202,
    description:
      "Chiến lược đầu tư của chúng tôi kết hợp sáng tạo và phân tích sâu, mang lại lợi nhuận bền vững cho nhà đầu tư.",
    author: "NGUYEN VAN DUY",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cb9/cb9b5e99a47cc6a2ed2ef211c8cb72e9_9d8bf348bf004409a155e12fb56df41a.jpeg",
  },
  {
    name: "Scap xauusdm",
    account: 110184210,
    description: "An toàn lợi nhuận 5-10%",
    author: "TRẦN THỊNH",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1a3/1a3c04df95597d7873c2171b7998a576_c8b60bf3262e42a380edc64e086a5376.jpeg",
  },
  {
    name: "From Vina to Riga",
    account: 110184241,
    description: "Manual trade high risk",
    author: "VAN BON CAO",
    authorPhoto:
      "/st/media/pim/media/user_photo/b7/b7e/b7eb29d5cbb02889ffc261f5d4a13eef_3a081a1ad9044ba9aab7e5008d75de55.jpeg",
  },
  {
    name: "Mad Enlighten-1",
    account: 110184259,
    description:
      "Chiến lược tự động với Robot 24/7. Mục tiêu không có tháng âm ( Lợi nhuận 10-50% / 1 tháng) An Toàn - Ổn Định - Bền Vững",
    author: "QUANG NAM LE",
    authorPhoto:
      "/st/media/pim/media/user_photo/02/020/02047b465888268c3c9ce7451965ab7f_25ab918bea504434bf33fb1b3cc07acb.jpg",
  },
  {
    name: "We are changing the",
    account: 110184290,
    description: "Trading in gold only",
    author: "ABOUBAKR MAGDY ELGAWISH",
    authorPhoto:
      "/st/media/pim/media/user_photo/55/558/558db49e23d1a5dd981286f7a0c6bd67_86c30e2cac89480c85cd8d888daf2bb7.jpg",
  },
  {
    name: "九九盟主999999",
    account: 110184316,
    description:
      "不知不觉已从事交易十年之路，主做日内交易，穿越牛熊，敬畏市场，一直在交易路上总结和前进$ （仅供参考 投资有风险需谨慎）",
    author: "泉境 邵",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5ac/5ace30d9a9bb2345c61ab241cb37465c_3655151abbbb446d94f7144a1f320cad.jpg",
  },
  {
    name: "Golden Kura",
    account: 110184365,
    description: "- Mostly trade XAUUSD",
    author: "LIEM TASLIM",
    authorPhoto: null,
  },
  {
    name: "STEADY PRO",
    account: 110184369,
    description:
      "STEADY PROFIT with proven single trade EA,\nThe Smart EA uses multiple confirmation algorithms to find the best entry and exit price.",
    author: "Golianto",
    authorPhoto:
      "/st/media/pim/media/user_photo/4b/4b9/4b9159a75c152dd386d36411db25755d_b1a2633e603647249dda88ac7aba701b.jpg",
  },
  {
    name: "Big4trading",
    account: 110184375,
    description: "Giao dịch an toàn, Lợi nhuận vừa đủ.",
    author: "HUU TINH LE",
    authorPhoto:
      "/st/media/pim/media/user_photo/ab/ab9/ab9922c1ccaa9a5f69262b706abfd07d_f3d8d8c6035a42b28c515b541e9f386c.jpg",
  },
  {
    name: "HKTTrading",
    account: 110184383,
    description: "100% currency",
    author: "THI PHUONG LE",
    authorPhoto: null,
  },
  {
    name: "One shot Trading",
    account: 110184389,
    description: "One short trading with Tp and sl provide maruti forex fx",
    author: "Bodar Piyushkumar  Hareshbhai",
    authorPhoto:
      "/st/media/pim/media/user_photo/85/854/85478e865f5dc5f33e6487a5a55616e9_50f5fb0d1c584e98b9e11061c3ac53e2.jpg",
  },
  {
    name: "Dynamo Trader",
    account: 110184416,
    description: "Follow 100$ up with low risk\n\nEURUSD",
    author: "KANN CHANTHEA",
    authorPhoto:
      "/st/media/pim/media/user_photo/05/05a/05a24a664b15dff0ddac38f795db6400_7746f1b69bb241669ab18ae0ac797cfb.jpeg",
  },
  {
    name: "Startup Investment",
    account: 110184417,
    description:
      "|  10,000 Langkah berawal dari 1 langkah pertama  | \n| $10,000 Passive Income tanpa bekerja berawal dari $10 pertama | \n\nNow or Never !!",
    author: "YANRI TAMBUNAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/97/97b/97b48d70e864338057bc7295922702f7_cd25fcfaae7b4c52b4665d73db5d0f89.jpeg",
  },
  {
    name: "Exness Trader",
    account: 110184427,
    description:
      "# Pairs: All\n# Min: 10 USD.\n# Profit: 05 - 50%/m.\n# Profit Locking: 05%/m (If Any)\n# Risk: 01 - 03%/order",
    author: "TOAN NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/0e/0e0/0e0b4e1f632b7bd9c396e380d3254fab_7e31d4339115408db2f4ca96b0c087f1.jpg",
  },
  {
    name: "Monthly 7 Percent",
    account: 110184442,
    description:
      "Profit Target 7% monthly\nMaximum drawdown 10.\nConsistent gain with low risk.",
    author: "AYESHA SIDDIQUA",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1ae/1aeb7024f3d70289a4a3757c6cdeaafa_7b0ec64b9cd043209c36041cf38973c7.png",
  },
  {
    name: "TOM FOREX",
    account: 110184509,
    description: "Trend following",
    author: "NGUYỄN TRỌNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c8/c80/c8063726f5561c72ef3d8fa3ef57e553_28eed4abdd964e13bc1741ec0ef81f89.jpg",
  },
  {
    name: "da nang trader",
    account: 110184529,
    description: "Giao dịch theo cung cầu",
    author: "VAN PHUONG NGO",
    authorPhoto:
      "/st/media/pim/media/user_photo/c8/c85/c85b966e6f145c3df2760f07f1f74ab9_d3bb7eebf2c0480fa13f46f4dd651b8a.jpg",
  },
  {
    name: "AlgorithmicProfit",
    account: 110184531,
    description:
      "AutomaticTrading strategy EURUSD that generates 7-10% monthly, low risk. If you want more historical information https://https://t.me/+Jo3lJttRnsoyMzc",
    author: "Pierre Paul  Ghabrel Djebedjian",
    authorPhoto:
      "/st/media/pim/media/user_photo/6f/6f2/6f2a0917c2232617c0bb35a3840f99fc_1aea4596824e458b8657035e0d3d6cac.png",
  },
  {
    name: "LinhLungLinh",
    account: 110184532,
    description: '"thị bò thịt bò thịt bò..."',
    author: "Hop Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/c0/c0f/c0f55e8164f70b1f3aa834f3531ad519_f24baf9ef8b94dc3834cb44dde550ab0.JPG",
  },
  {
    name: "Antfinances",
    account: 110184581,
    description:
      "If you are looking for a strategy that works with compound interest,In a couple of years you will reach your financial goal. Trade in EURUSD & GBPUSD",
    author: "Pierre Paul  Ghabrel Djebedjian",
    authorPhoto:
      "/st/media/pim/media/user_photo/6f/6f2/6f2a0917c2232617c0bb35a3840f99fc_1aea4596824e458b8657035e0d3d6cac.png",
  },
  {
    name: "The Champion Bot",
    account: 110184583,
    description:
      "Maximice sus rendimientos con estrategias replicadas de expertos financieros. Confíe en profesionales y obtenga resultados consistentes en sus inversi",
    author: "Astrid Carolina  Betancurt marulanda",
    authorPhoto:
      "/st/media/pim/media/user_photo/e5/e50/e509f7166e1f48e96fa585b9a32744e2_56b06adf6b184f8f8a3a77dd5cb3963e.jpg",
  },
  {
    name: "LR1 Trading VIP",
    account: 110184604,
    description:
      "LR1 se basa en los principios de oferta y demanda, respaldados por un exhaustivo estudio económico para capitalizar las fluctuaciones del mercado.",
    author: "GUILLERMO LEANDRO SAHAGUN",
    authorPhoto:
      "/st/media/pim/media/user_photo/19/199/1990848c75de800ec565ca97050f21b6_ed46d8639c454a2cae0cfd6982f9bdfe.png",
  },
  {
    name: "GoldenEdge Invest",
    account: 110184610,
    description:
      "Our advanced algorithm trades gold, silver and Ethereum with futures market calculations to maximize your returns",
    author: "Avelino  Pereti Junior",
    authorPhoto:
      "/st/media/pim/media/user_photo/d1/d11/d11ffde42f03fb043e3465615bcc8562_3b3a3207cc2e41d98f3e656719eec2a7.jpg",
  },
  {
    name: "Swing  Technique",
    account: 110184640,
    description:
      "Trade along with the market momentum according to the market situation",
    author: "海峰 容",
    authorPhoto:
      "/st/media/pim/media/user_photo/2e/2e7/2e7d39d6332406d4939450c27d9abd75_866f69eecbb349c28509ea9e3656e916.jpg",
  },
  {
    name: "Scalp Gold 1",
    account: 110184667,
    description: "1% per day",
    author: "yen nguyen thi my",
    authorPhoto:
      "/st/media/pim/media/user_photo/0a/0a2/0a2a3ae0e9b42b2beb88fd574ebf6db4_674171c647ee4c45afe41846ddc3fded.jpg",
  },
  {
    name: "GoldCore Trading",
    account: 110184693,
    description:
      "La estrategia GoldCore está diseñada para proporcionar una metodología robusta y confiable para el trading de oro (XAU/USD).",
    author: "Jared Vicente Manuel Niño",
    authorPhoto: null,
  },
  {
    name: "haycungnhauphattrien",
    account: 110184698,
    description: "tạo ra lợi nhuận ổn định",
    author: "VAN HOI NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/23/23d/23df1ce7aa9465442cc0f0701d616a5d_ca80a604f4884a5f9456a351159be917.jpg",
  },
  {
    name: "Scalp Gold",
    account: 110184701,
    description:
      "Trading Strategies comply with discipline and follow the sàn methods of Investment find. Expected profit Per month ranges from 10% to 30%",
    author: "LƯƠNG VŨ",
    authorPhoto:
      "/st/media/pim/media/user_photo/61/61d/61dcd38e3845b8355e676c6eec504a74_92b2fb945bb04e7a97b59410737d5d90.jpg",
  },
  {
    name: "DYNAMIC FUTURE",
    account: 110184710,
    description: "Follow me for Creative Future",
    author: "ATANU PRASAD JANA",
    authorPhoto:
      "/st/media/pim/media/user_photo/d0/d03/d038c0c11bc9f6f99076e26864f24173_3ae5d23f72c9407f9cada9ec27bf3ad3.jpg",
  },
  {
    name: "Swing trade on trend",
    account: 110184721,
    description:
      "Secure weekly forex trading strategy focusing on capital preservation and consistent profits, utilizing expert analysis and risk management techniques",
    author: "Thị Hồng Nhung Nguyễn",
    authorPhoto:
      "/st/media/user_photo/17/172/172d8a91473b2aa6f5e9d7435b093290_1bd515d398014ffe9fff299738a46060.jpg",
  },
  {
    name: "risk control funds",
    account: 110184730,
    description: "risk control funds",
    author: "桂冰 潘",
    authorPhoto:
      "/st/media/pim/media/user_photo/3d/3d8/3d80e7a1f94d6db5478ae714cfd309a4_434457e0d8674a798606f164010f5904.jpg",
  },
  {
    name: "Giao dịch xu hướng",
    account: 110184738,
    description: "Cập nhật sau",
    author: "duc bang vu",
    authorPhoto:
      "/st/media/pim/media/user_photo/8b/8b0/8b068895ef6167a7800a0cde39f76b08_0af0dfd1bcf244ffb6995ccee5eeba41.jpeg",
  },
  {
    name: "Thien Nhan Moi",
    account: 110184745,
    description: "Scalping Xau\nLow Risk/ High Reward",
    author: "TRẦN HIẾU",
    authorPhoto:
      "/st/media/pim/media/user_photo/a1/a1c/a1cf9ceb386e119d5dfbbabd9cf8a28d_b98434baaf00471d913df50654148ef6.jpeg",
  },
  {
    name: "MainCoppy 1",
    account: 110184762,
    description: "Arbitrage trading",
    author: "Quốc Huy Võ",
    authorPhoto:
      "/st/media/pim/media/user_photo/37/37b/37bd14ef8d02759a25abb4eb420bdee9_f135eaa6e52e4a458e4c1c6d5c2226ad.jpg",
  },
  {
    name: "Best Hunter",
    account: 110184770,
    description:
      "- Giao dịch trong ngày\n- DD không quá 20%\n- Lợi nhuận mục tiêu 10% mỗi tháng",
    author: "THI BICH PHUONG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/da/da7/da75492589898f82eac09a42f393fe7f_2a453736a0fc4f1fac18c1400b36ea83.jpg",
  },
  {
    name: "Victory one year",
    account: 110184811,
    description:
      "Gia tăng vốn bằng công thức lũy thừa số lợi nhuận. Vốn của bạn gia tăng nhanh chóng sau 1 năm tham gia cùng chúng tôi.",
    author: "VAN HANH NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/23/231/231637577158ad39d75fc81eceb3dc21_0bc9368e168e498985f4990d0c764532.jpg",
  },
  {
    name: "Forex trade",
    account: 110184844,
    description: "positional....",
    author: "Dhaval  Gajera",
    authorPhoto:
      "/st/media/pim/media/user_photo/66/661/6614ced4ec6a350f4ee01618a20c2cf0_0b4ed26f6ecd4ae5b012438695d60b3e.png",
  },
  {
    name: "Headquarter Of Trade",
    account: 110184865,
    description:
      "I Study historical market data, including Price Action , SMC , Volume & Market Psychology.",
    author: "ZEESHAN AHMED",
    authorPhoto:
      "/st/media/pim/media/user_photo/e0/e02/e0298eeaaed476f1d4db663c9ac65eea_4dfdaed27ab14cff8e0bfba0ef9a8d60.jpg",
  },
  {
    name: "HQsignalfx",
    account: 110184982,
    description: "30% per month",
    author: "HONG QUAN NGO",
    authorPhoto:
      "/st/media/pim/media/user_photo/6f/6f2/6f2cf5995ee4908c9451c40d67fa811f_6b94bf0a3c8b44abb957349301e69d41.jpg",
  },
  {
    name: "IMMORTALS ONE",
    account: 110184991,
    description: "EU XAU",
    author: "MR NATTAPON BUTNAISUN",
    authorPhoto:
      "/st/media/pim/media/user_photo/fe/fe6/fe6dd977cedcc4514d62727020f827de_ee69816b34db456ba487261ffbb77a8f.jpg",
  },
  {
    name: "Magician Freedoms",
    account: 110185013,
    description: "อิสระภาพทางด้านการเงิน\nศักยภาพของเรา ใช้เพื่อตัวเรา",
    author: "MISS DUONGCHEEWAN YAVICHAI",
    authorPhoto:
      "/st/media/user_photo/2b/2ba/2bad17bb7f44a9f8cb67be272a0fb81b_1f41e6815c4e4494bccecbdb503005b0.jpg",
  },
  {
    name: "Optifundss",
    account: 110185051,
    description:
      "Optifunds combina lo mejor de  3 enfoques distintos: trading algorítmico, swing trading, day trading, scalping. Diseñada para ofrecer un rendimiento.",
    author: "JONAICKER JAVIER CRUZ PAYANO",
    authorPhoto:
      "/st/media/pim/media/user_photo/8b/8b7/8b705bf1dfcdc05dad93dbb0658f5993_d359a0780f2f4537b4fa5d04b04917d8.jpeg",
  },
  {
    name: "Fx_Eva_USDGBP",
    account: 110185066,
    description:
      "The winning rate is controlled at 60% and the profit-loss ratio is controlled at 0.6",
    author: "PENGPENG SHAO",
    authorPhoto:
      "/st/media/pim/media/user_photo/5a/5ad/5ad4057dd6ceb29c3739da73b75580e2_f21526b2abb641b7b1e9177d7dbf1e91.jpg",
  },
  {
    name: "Gold-Dragon",
    account: 110185105,
    description: "Low risk........",
    author: "QUYEN NGUYEN THI TO",
    authorPhoto:
      "/st/media/pim/media/user_photo/d9/d98/d98b67e0950901904ca23b03a81fc833_f148fab1df4a4efb88cb48a68e793a9d.jpg",
  },
  {
    name: "INA-GOLD CUAN",
    account: 110185135,
    description: "Focus trading gold",
    author: "PUJI NANIK",
    authorPhoto: null,
  },
  {
    name: "Trần Khắc Công",
    account: 110185142,
    description:
      "Quản lý vốn và quản lý cảm xúc là kim chỉ nam, chia khóa thành công",
    author: "Trần Khắc Công",
    authorPhoto:
      "/st/media/pim/media/user_photo/6d/6d9/6d93fca9df178d3b2efae3b3039cf803_c9bcf1ee4efd456e8f6d462d9e212ea6.png",
  },
  {
    name: "The Gravity",
    account: 110185143,
    description: "New",
    author: "MR PEERASAK PRANGTHONG",
    authorPhoto:
      "/st/media/user_photo/49/496/49692f11ff28cfe3bcf9c76849742054_1e5f60d77ba142d1a5c9120dcbd13374.png",
  },
  {
    name: "Currency Correlation",
    account: 110185145,
    description:
      "A strategy based on correlation of 28 pairs of major currencies.\n-almost always trade in pairs\n-use low level of martingale",
    author: "MR PRAJIT CHANPRASIT",
    authorPhoto:
      "/st/media/pim/media/user_photo/9a/9a0/9a085cea8795530fa28860f233bc4d2c_1bb8cf2e0ead41dbb9668346eb68d8fa.jpg",
  },
  {
    name: "Kaizu 8 Xau",
    account: 110185158,
    description: "SCM strategy",
    author: "MITRO WIGITO",
    authorPhoto: null,
  },
  {
    name: "BTC EA Robust Tradin",
    account: 110185167,
    description: "Expected monthly net profit is around 50%.",
    author: "晓伟 胡",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/86a/86af3ba2af5597045063859b60ef97c5_0fe53411895b4752be248f2c089bd45f.png",
  },
  {
    name: "Proper  Stoploss",
    account: 110185199,
    description: "We r safest & best on exness. With proper stoploss .",
    author: "Mrs Manju",
    authorPhoto:
      "/st/media/pim/media/user_photo/34/34d/34d6f60478f4548786b7b3058e13c5a6_2726b66220214c36881ee0539a2338c1.jpg",
  },
  {
    name: "ROYALIUM GLOBAL",
    account: 110185214,
    description: "Trade What You See, Not What You Think",
    author: "NISH KUMAR",
    authorPhoto:
      "/st/media/pim/media/user_photo/31/311/3112a7788ff5b3b0a6e708df0ea0d46e_472c4c226e19421b8b155b1c01e25d3b.jpg",
  },
  {
    name: "HGTZ_24_06",
    account: 110185222,
    description:
      "全EA交易，交易量不多，但是无爆仓记录，历史回测2010-2024期间实现26500倍利润。",
    author: "委良 李",
    authorPhoto:
      "/st/media/pim/media/user_photo/ae/ae6/ae6131641f8a8feb73ef4b78b96193a1_4d9772107dc1461992dd5f84942af259.jpg",
  },
  {
    name: "Trading For Living",
    account: 110185244,
    description: "Quản lý vốn, không bình quân giá, không all in",
    author: "MINH HUNG DOAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/79/79e/79e3ddacabc0cee7def52cc49157ebaf_f00b7aa19ae54436860937ce0d26c64c.jpeg",
  },
  {
    name: "Ex200MajorsGold7x24",
    account: 110185258,
    description:
      "Una poderosa estrategia basada en los pares mayores y Oro. Máxima rentabilidad con riesgo moderado.",
    author: "Diego Raul Pacheco Alcaraz",
    authorPhoto:
      "/st/media/pim/media/user_photo/db/db4/db4dc3bd92f607a67acc19d7b068332f_d95a8d4fd31e45819d52217fccc15359.jpg",
  },
  {
    name: "FCPI Lovers",
    account: 110185282,
    description:
      "This strategy does not guarantee anyone that you will make money or results will stay the same forever. It is all up to you to see the great results,",
    author: "Lejeune Bauvil",
    authorPhoto:
      "/st/media/pim/media/user_photo/c0/c0e/c0e903effba1ff8cf00badd3c54b2fce_cf58142172b349a396f0fea3122f68ca.jpg",
  },
  {
    name: "Xauusd only",
    account: 110185311,
    description: "Chơi vàng vì đam mê",
    author: "LE DINH TU",
    authorPhoto:
      "/st/media/pim/media/user_photo/53/53a/53aa4377623061bd8f3475b2a84f05e7_a7f981cc8a334c0da073b50a8dde9399.jpeg",
  },
  {
    name: "great_waves_sifting",
    account: 110185318,
    description: "great_waves_sifting",
    author: "洁 糜",
    authorPhoto:
      "/st/media/pim/media/user_photo/8b/8b8/8b82a56738f3cc8e543e0c1815ae5133_8c6694c1c5174f4fbac7fecb5553a400.png",
  },
  {
    name: "EM  Profi-1",
    account: 110185370,
    description: "EA Trade control by Human",
    author: "CHUMPOT YAMKONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/80/805/805926a8a2885aecbe1dee39bdf0d001_1e77bf196b214d1d85a3151262db68d7.jpg",
  },
  {
    name: "L88 GOLD-1",
    account: 110185380,
    description:
      "SETUP sl100-150pip\nĐây là tài khoản mạo hiểm. Stoploss=cả tài khoản\nĐề nghị ae đầu tư với số vốn nhỏ và tự chịu trách nhiệm với khoản đầu tư của mình",
    author: "Linh Trần văn",
    authorPhoto:
      "/st/media/pim/media/user_photo/43/431/43120cf17f2b5b97431ed50e0aee0bc2_e7a7eacea4d54251b0e24d743d73321e.jpg",
  },
  {
    name: "GBTS GOLD AI",
    account: 110185410,
    description:
      "Copy Trade by GBTS GOLD AI\nProfite Daily 1%-2% (Monday Friday )\nMinimum Profite 22% Monthly \nMaximum Drawdown 40%",
    author: "VY CHROR",
    authorPhoto:
      "/st/media/pim/media/user_photo/d3/d38/d38fa2d58bdf8c1b503c9a9db9dfe17e_b9544f556ef34797a580d4ce282d3b1e_LLyDcVh.jpg",
  },
  {
    name: "TD INVEST",
    account: 110185429,
    description: "Quỹ đầu tư vàng",
    author: "HAI TRUONG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/fc/fc6/fc63ec4355d834b7e001d074d8d323b8_cd296de9dfb1496599486e5d62769af7.jpeg",
  },
  {
    name: "Forex Act Management",
    account: 110185442,
    description:
      "Funds Security is our 1st Priority.\n10% Equity Guard on any Pair.\nJoin for Account Growth & Funds Compounding.",
    author: "MFON BASSEY",
    authorPhoto:
      "/st/media/pim/media/user_photo/a5/a5b/a5bd2872464b93151f0a37a8ea2e04bd_fc7d95cd84484c7e8eff69dd4130f497.jpg",
  },
  {
    name: "XAU BTC Trade",
    account: 110185502,
    description: "XAU BTC Trade",
    author: "Linh Trần",
    authorPhoto:
      "/st/media/pim/media/user_photo/7a/7a9/7a938cf40a915320319b411704bfbdb0_e0f54e82691b47b4943e4ba263363632.jpg",
  },
  {
    name: "SMART TRADER 777",
    account: 110185519,
    description:
      "I'm expert in trading forex and gold. Please invest your money on me, you will be profit 💲💲💲",
    author: "SOFIANSYAH",
    authorPhoto:
      "/st/media/pim/media/user_photo/be/bea/beaf9307399b4f1c5d6d904dabad171d_8570991ae1d144458a07292476631a5c.jpg",
  },
  {
    name: "Forex Clone",
    account: 110185616,
    description:
      "Copy expert forex traders effortlessly. Follow, replicate, and succeed with our intuitive copy trading platform",
    author: "DAL RAJAKBHAI",
    authorPhoto: null,
  },
  {
    name: "TEAM - SRIKANTA",
    account: 110185651,
    description: "A safest way to make monthly profit from FOREX Market.",
    author: "SRIKANTA SINGHA",
    authorPhoto:
      "/st/media/pim/media/user_photo/6f/6fc/6fc88b3d15473b549c0b142cafc3702a_c1e1667472474a428614c1723acd9575.png",
  },
  {
    name: "XAUUSD KILLER",
    account: 110185663,
    description:
      "Estrategia xauusd operada con promedios y en temporalidades de h4, máximo DD 50%, riesgo medio-alto. objetivo mensual superior al 40%",
    author: "JENNIFER ANDREA RAMIREZ MONTOYA",
    authorPhoto:
      "/st/media/pim/media/user_photo/06/064/06405493425b106fcc98ef2ac7dffeac_fb063087f7344550b7f84836d2df4378.jpeg",
  },
  {
    name: "Wave Painter",
    account: 110185705,
    description: "EW + WK + VPA",
    author: "TRỌNG ĐẠI TRẦN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a9/a94/a945d7083951b1d5a0eb4ab7fffca6f5_6f69192665f94f34b97ed33fb7cc055a.jpg",
  },
  {
    name: "AI Strategy",
    account: 110185728,
    description: "Strong strategy developed by AI\nhttps://t.me/gctr3",
    author: "SALAH  ABDULLAH",
    authorPhoto:
      "/st/media/pim/media/user_photo/8f/8f5/8f503bd5a8efa85dbf818b486d810aa3_37248854c05a483eb3f5d3a1f1bfb9ba.jpg",
  },
  {
    name: "Slow is fast 1",
    account: 110185748,
    description:
      "The core of trading is to gradually increase funds through compound interest by controlling the risk of each trading order.",
    author: "幸 吕",
    authorPhoto:
      "/st/media/user_photo/d7/d76/d76f02afca9f815eb4a79783318eddff_3161c7be23254526892e8ec984410055.png",
  },
  {
    name: "Slow is fast 2",
    account: 110185750,
    description:
      "The core of trading is to gradually increase funds through compound interest by controlling the risk of each trading order.",
    author: "幸 吕",
    authorPhoto:
      "/st/media/user_photo/d7/d76/d76f02afca9f815eb4a79783318eddff_3161c7be23254526892e8ec984410055.png",
  },
  {
    name: "Swing EURUSD",
    account: 110185753,
    description:
      "_ Mục tiêu 10-20%/ Tháng\n_ Swing Trading\n_ Phương châm : chậm mà chắc, lợi nhuận nhỏ nhưng lâu dài",
    author: "Nguyen Sinh",
    authorPhoto:
      "/st/media/pim/media/user_photo/ed/ed8/ed8016b1f99fe52e1d384cc7042fe5ff_f6a1f558b6c847b3ba8670efc4ff761b.jpeg",
  },
  {
    name: "Daithinhgl",
    account: 110185804,
    description: "Bình thường thôi",
    author: "Van thinh Vo",
    authorPhoto:
      "/st/media/pim/media/user_photo/c7/c78/c7857542bfac7c4a1ea1a0b0e837af96_8bcab754cc694f82ad2c6673f61126de.png",
  },
  {
    name: "PHU QUY 68",
    account: 110185820,
    description: "Niem tin chien thang",
    author: "NGÔ QUÍ",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/607/607da8f157a13d55cec815b127c82e03_4c7758debd3948c8a815f08ecd463083.jpg",
  },
  {
    name: "PHU QUY 668",
    account: 110185821,
    description: "Niem tin chien thang",
    author: "NGÔ QUÍ",
    authorPhoto:
      "/st/media/pim/media/user_photo/60/607/607da8f157a13d55cec815b127c82e03_4c7758debd3948c8a815f08ecd463083.jpg",
  },
  {
    name: "Jocelynzqx",
    account: 110185848,
    description: "We use a trading system using Ea",
    author: "JITTAWAT VIJITJINDA",
    authorPhoto:
      "/st/media/pim/media/user_photo/aa/aa8/aa89836df63a193f9067ca86a1211a27_4f8b7f9eb328407484fe7b0613f87bca.jpg",
  },
  {
    name: "Money Sniper",
    account: 110185857,
    description:
      "Welcome to Money Sniper! Join me in the pursuit of profitable trading opportunities.",
    author: "Nguyễn Thanh Xuân",
    authorPhoto:
      "/st/media/pim/media/user_photo/b9/b9c/b9c31a0f6450f8ad27e2b47259430732_f5b5d4b325b94b8495d9e6d972bf1f2b.png",
  },
  {
    name: "ATURO VIETNAM _ 1",
    account: 110185859,
    description:
      "- Mục tiêu 10 -20%/tháng\n- Swing trading\n- Không ngày nào lỗ\n- Giao dịch thuần EMA & ICHIMOKU",
    author: "HUNG LE VAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/13/139/13933933199204e84b0e1039c672e536_10f38f27c3d34566977824431bffe571.jpeg",
  },
  {
    name: "World bank",
    account: 110185861,
    description: "回撤低于百分之 8，几十美金即可跟单。",
    author: "芊 李",
    authorPhoto:
      "/st/media/pim/media/user_photo/17/170/1706d06a311d560fecda0a293122bf13_fb522c9869834b7384d4ae55426a7e5b.jpeg",
  },
  {
    name: "Exness Pro",
    account: 110185862,
    description:
      "I am professional Forex trader having experience 2 years in forex\nyou can copy my account without any strees",
    author: "LAXMI DEVI",
    authorPhoto:
      "/st/media/pim/media/user_photo/36/36f/36f54adeb5926c0f8d12d89c23389d2d_2f3bd7f05dbd45f794b3589d33a267a5.jpeg",
  },
  {
    name: "GoldVFX Dubai",
    account: 110185901,
    description: "Scalping",
    author: "Saifudheen Ayappally",
    authorPhoto: null,
  },
  {
    name: "GOLD MASTER RSII",
    account: 110185957,
    description: "Scalp gold",
    author: "THAI VY TRAN",
    authorPhoto:
      "/st/media/pim/media/user_photo/e2/e27/e27062db9ddffc75decdfb0d061f9afd_7ec7ccef7d4c43d38f61fba996ec2cd7.jpg",
  },
  {
    name: "Main Coppy 2",
    account: 110185970,
    description: "Giao dịch chênh lệch",
    author: "THI THUAN LE",
    authorPhoto:
      "/st/media/pim/media/user_photo/d2/d2c/d2cd254be5dc3ebd67d5d04a8092b3e6_0e9ac91563564d1b88c9ea0df4035f6d.png",
  },
  {
    name: "Trader Rất Lỏ",
    account: 110185976,
    description:
      "Let's make money together, with profits ranging from 20-30%/month",
    author: "KHANH TAM LE",
    authorPhoto:
      "/st/media/pim/media/user_photo/1f/1f1/1f1b24c595a7526bdfe1b5e301edb565_e7220343ac314224a1fdf08376321297.jpg",
  },
  {
    name: "Day Trading Gold",
    account: 110185982,
    description: "Nhat quan va ki luat, risk 5% tk, RR 1:2",
    author: "Nghĩa Bùi Hữu",
    authorPhoto:
      "/st/media/pim/media/user_photo/c2/c23/c23e5113be1e09cc92f809daa49b1e60_9abf6ed3e4154d14a2f7967bca51143c.jpg",
  },
  {
    name: "Gau Gamming",
    account: 110186007,
    description: "Kinh nghiệm trader 3 năm, lợi nhuận đều và an toàn",
    author: "ĐÀO ƯỞNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/6d/6d1/6d1401931666dc8ef7558d935914b728_2086d72ec3964fc9b66d6e69f51142b9.png",
  },
  {
    name: "Forex School 4",
    account: 110186019,
    description: "10%-20% Monthly",
    author: "Md Abu Bakkar Siddique",
    authorPhoto:
      "/st/media/pim/media/user_photo/1a/1a9/1a9e5464628c14f8051f5f52f87a1506_523000fa0a8e4e5d86ff37527fa86f58.jpg",
  },
  {
    name: "EURUSD No1",
    account: 110186021,
    description: "Giao dịch an toàn và hiệu quả",
    author: "VAN DUC DO",
    authorPhoto: null,
  },
  {
    name: "3_stages_price",
    account: 110186034,
    description: "Chiến lược đem đếm 5$/ ngày",
    author: "Giang Tran Hoang",
    authorPhoto:
      "/st/media/pim/media/user_photo/01/01f/01f4ae19d3b98ab30d8c91d1eb8fc120_d2cd46325f5f4e23bcfe66c158ad81b8.jpg",
  },
  {
    name: "S-Trade8686",
    account: 110186056,
    description:
      "- Scaplp Gold: XAU/USD\n- Forex Trade: EUR/USD, AUD/USD, GBP/USD",
    author: "MINH HOANG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/a5/a55/a55d2568f1c6100940954876c842b40b_3ca53770fb884c93b12018ee778db908.jpg",
  },
  {
    name: "TrongngociNVEST",
    account: 110186071,
    description: "Wait for Clear Signal\nTake Strong Action\nAnd Win Money",
    author: "Ngoc Nguyen",
    authorPhoto:
      "/st/media/user_photo/12/124/1240e411dfc4b1d87ce7a0e5ac61d98f_9f52aa99c6b34751b0f68646bdccfacc.png",
  },
  {
    name: "Good--One1",
    account: 110186117,
    description:
      "My strategy is Risk free trading strategy based on RSI and fundamental analysis to assure.strategy based on RSI and fundamental.",
    author: "virani Anand haribhai",
    authorPhoto:
      "/st/media/pim/media/user_photo/02/02a/02acfbfab21753b0648000db55bb413e_eff51adcd02241d890efec51fa75332c.jpg",
  },
  {
    name: "Green Blue wallet",
    account: 110186128,
    description:
      "Hy guys wlcm to Towardssky new program start Blu Wallet 💙 deposit menimum 50$ to 5000$ As soon as possible your all lose cover INSHALLAH ❤️ 👍",
    author: "Abdul Raza",
    authorPhoto:
      "/st/media/pim/media/user_photo/c9/c92/c9244258b0946c7865fa91bb835ac93c_1faf2d4074834ea0bf70df05887e1534.jpg",
  },
  {
    name: "danacampbellemcdbxqi",
    account: 110186145,
    description: "H",
    author: "Tùng Nguyễn Huy",
    authorPhoto:
      "/st/media/pim/media/user_photo/35/357/357aff725791131921adc57acb94dde8_c017f2229620494ea9a58ba83b30e1d7.jpg",
  },
  {
    name: "NguyenNhanh",
    account: 110186179,
    description:
      "Phương pháp giao dịch: Phân tích kỹ thuật.\nLợi nhuận mục tiêu: Khoảng 10%/tháng.",
    author: "VĂN NHANH NGUYỄN",
    authorPhoto:
      "/st/media/pim/media/user_photo/43/43f/43f9f3af826735ec5f62f34c7a402a6d_1b8b1911a4cb47bb98362c436f98e62c_AMzLCNa.png",
  },
  {
    name: "88 Stable Income",
    account: 110186189,
    description:
      "My strategy ensures consistent success, even after hundreds of trades.\nOnly using free money for investing in forex and withdraw profit every month",
    author: "VAN NGOC NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cb9/cb97bd49dd30d8ef96b07b56b4ad05bb_596cd7784f2f4db3b08fd827fad1f135.png",
  },
  {
    name: "LR1 Real Trading",
    account: 110186197,
    description:
      "LR1 se basa en los principios de oferta y demanda, respaldados por un exhaustivo estudio económico para capitalizar las fluctuaciones del mercado.",
    author: "GUILLERMO LEANDRO SAHAGUN",
    authorPhoto:
      "/st/media/pim/media/user_photo/19/199/1990848c75de800ec565ca97050f21b6_ed46d8639c454a2cae0cfd6982f9bdfe.png",
  },
  {
    name: "Gold_GIABAO42",
    account: 110186240,
    description: "Luôn luôn lắng nghe. Luôn luôn thấu hiểu.",
    author: "Đặng Hữu  Phong",
    authorPhoto:
      "/st/media/pim/media/user_photo/d0/d0e/d0e7d44fcc7d05bf8c780c81294ebcfd_9983247b5d4744dd995c5de6d2eb8cab.jpg",
  },
  {
    name: "Alphaedges1",
    account: 110186414,
    description:
      "Beyond profits, success in trading embodies a journey of continuous learning and adaptation.",
    author: "FAZAL MAQSOOD",
    authorPhoto:
      "/st/media/pim/media/user_photo/dd/dd1/dd14ac3f6dbef08dc13f016cc658b980_ccd4eb9806b64cb588b475a09a03b335.jpeg",
  },
  {
    name: "Tony Forex benefit",
    account: 110186416,
    description: "For benefit only",
    author: "Apiwat Saenthaweesuk",
    authorPhoto:
      "/st/media/pim/media/user_photo/76/763/763b28eaf0bc918ac236b9a74c85bd29_7677ac249ecc47678b25b7c2306a2050.jpg",
  },
  {
    name: "W Buffett",
    account: 110186424,
    description: "X1000000",
    author: "VIET DUC CAO",
    authorPhoto:
      "/st/media/pim/media/user_photo/93/93b/93b6dd508516d5dbf5e5e90d18d07482_728f842663e2477f93aeb8c113b2a224.jpeg",
  },
  {
    name: "Satoshi invert No1",
    account: 110186436,
    description:
      "Giao dịch tuân thủ quy tắc stoploss - Scalping -Swing Trading",
    author: "Hoat luong van",
    authorPhoto:
      "/st/media/pim/media/user_photo/bb/bb6/bb6631670628856446ae646a710ab72c_e90d32de3cfa488fb17c1bad12737f5b.jpg",
  },
  {
    name: "MONDAL GOLD SECRET",
    account: 110186443,
    description:
      "COPY ME FOR A CONSISTENT PROFIT ! NO MARTANGLE, NO AVERAGING , PROPER FIX TP AND SL ! CONTACT +919163542888",
    author: "mona mondal",
    authorPhoto:
      "/st/media/pim/media/user_photo/16/16b/16bc587e7262b05fd596273f69ca26d7_c662076fcedb47a88b8a84fff0dd3053_8RDraBK.jpg",
  },
  {
    name: "VIETNAM_GOLD 999",
    account: 110186478,
    description: "Start up",
    author: "Linh Hoang Cong",
    authorPhoto:
      "/st/media/pim/media/user_photo/bb/bbb/bbb1af03c2a5d5e512c228158b87c6ca_5beff19297a246dd83966b7037ccd3d1.jpg",
  },
  {
    name: "Slow is fast 3",
    account: 110186495,
    description:
      "The core of trading is to gradually increase funds through compound interest by controlling the risk of each trading order.",
    author: "幸 吕",
    authorPhoto:
      "/st/media/user_photo/d7/d76/d76f02afca9f815eb4a79783318eddff_3161c7be23254526892e8ec984410055.png",
  },
  {
    name: "Slow is fast 4",
    account: 110186497,
    description:
      "The core of trading is to gradually increase funds through compound interest by controlling the risk of each trading order.",
    author: "幸 吕",
    authorPhoto:
      "/st/media/user_photo/d7/d76/d76f02afca9f815eb4a79783318eddff_3161c7be23254526892e8ec984410055.png",
  },
  {
    name: "Cuanforexone",
    account: 110186506,
    description: "Cuan strategy",
    author: "EDWAR",
    authorPhoto:
      "/st/media/user_photo/e6/e68/e689a48fe0311c75f2b38a793b804a04_0a4b0cd97beb4e1c95720f15301e4e2d.jpeg",
  },
  {
    name: "GTS GOLD AI",
    account: 110186507,
    description: "Jdjdjdhdhddjjd",
    author: "DARA PANN",
    authorPhoto:
      "/st/media/pim/media/user_photo/40/407/4074f17cc9af424380b73bb18c1ba1da_2fcb8167e85642268efdfa558efcaa51.jpg",
  },
  {
    name: "Silence is golden",
    account: 110186531,
    description: "Light warehouse，Trend Trading。",
    author: "鹏飞 曹",
    authorPhoto:
      "/st/media/pim/media/user_photo/9c/9cf/9cf23ce240b9549f000264a4c6dd7955_1334f89c2b524cf29d95ffb8de9de897.jpg",
  },
  {
    name: "50 PIPS Gold Trading",
    account: 110186562,
    description: "50 PIPS TRADE TARGET",
    author: "MISBAH SIDDIQUI",
    authorPhoto:
      "/st/media/pim/media/user_photo/10/10d/10d554d0c6c52e441c766b6bf9469364_7c8f7895fdee435a9ba3752ccf379a8a.png",
  },
  {
    name: "Big jobs 2030",
    account: 110186575,
    description: "H",
    author: "Tùng Nguyễn Huy",
    authorPhoto:
      "/st/media/pim/media/user_photo/35/357/357aff725791131921adc57acb94dde8_b897dce9cc714ed8a9cc4dde9bc7add3.jpg",
  },
  {
    name: "Big jobs 2030",
    account: 110186579,
    description: "H",
    author: "Tùng Nguyễn Huy",
    authorPhoto:
      "/st/media/pim/media/user_photo/35/357/357aff725791131921adc57acb94dde8_bd16a628966847ddb5dbf7de55e2250f.jpg",
  },
  {
    name: "Big jobs 2030",
    account: 110186584,
    description: "H",
    author: "Tùng Nguyễn Huy",
    authorPhoto:
      "/st/media/pim/media/user_photo/35/357/357aff725791131921adc57acb94dde8_a9008c073d2747b5926129310369a108.jpg",
  },
  {
    name: "Big jobs 2030",
    account: 110186592,
    description: "H",
    author: "Tùng Nguyễn Huy",
    authorPhoto:
      "/st/media/pim/media/user_photo/35/357/357aff725791131921adc57acb94dde8_dacdaa09cd334577bc33dbde54a78e35.jpg",
  },
  {
    name: "Command stuffin EUUS",
    account: 110186709,
    description: 'Stuffing the command "positive money"',
    author: "VÕ GIANG",
    authorPhoto:
      "/st/media/pim/media/user_photo/fa/fa8/fa85776aef04c758e042bdc266844d07_ba59232b8b704ae582f74f978117fed0.jpg",
  },
  {
    name: "NCC Trade6868",
    account: 110186717,
    description: "NCC6868                         \nLH : 0865.295.186",
    author: "CAO CUONG NGUYEN",
    authorPhoto:
      "/st/media/pim/media/user_photo/d8/d89/d89e58e294b33867ad0b296680fa0e92_072507652a4b4ad5a1a62712bfc2cbce.jpg",
  },
  {
    name: "Profit Generator",
    account: 110186734,
    description:
      "★ 7 currency pairs trading \n★ Please invest for at least 3 months to experience the wonders of this system\n★ Let's enjoy safety Forex journey!!",
    author: "MAKI WATANABE",
    authorPhoto:
      "/st/media/pim/media/user_photo/7d/7d7/7d77150ea8d3425dae44e39a78758d5a_fdbd9eb7d12b4f18860e55bfdcaccea1.jpg",
  },
  {
    name: "Scalping Robot",
    account: 110186744,
    description:
      "Scalping strategy with Low risk Profile using fully automatic EA for trade execution.1)  Leverage 100:12) Currency Pairs-EUR/USD, GBP/USD,USD/JPY",
    author: "Harsh Makhija",
    authorPhoto:
      "/st/media/pim/media/user_photo/16/161/16153d99f9c5ba7301f06984e136030f_8479e0fc50244a6ba64cc9d0f90f9aac.png",
  },
  {
    name: "Bank Volume Trader",
    account: 110186748,
    description:
      "volume trading data lll \nstrategy  mbo data and order flow level 3",
    author: "Hossein Zarrin",
    authorPhoto: null,
  },
  {
    name: "SosoBaidu Bitcoin",
    account: 110186756,
    description:
      "A trader who has only focused on Bitcoin and has been in the investment market for over 20 years, let us witness how $1000 can grow to $100000 in the",
    author: "锦坚 方",
    authorPhoto:
      "/st/media/pim/media/user_photo/97/97e/97e7c0303f16fc051cedb7705636edda_312d0981f9804c178842610620f74846.png",
  },
  {
    name: "Daily 100-200 USD",
    account: 110186783,
    description:
      "Hey There, I am a  Professional Forex and a crypto trader from Hong Kong.",
    author: "Prajay Gurung",
    authorPhoto:
      "/st/media/pim/media/user_photo/aa/aa9/aa9d91dde43ffd2835a189e34a381f2f_a1840265a5f24b9885666ab9bf7ccfbe.png",
  },
  {
    name: "MONEY PRINTER",
    account: 110186872,
    description: "Hi",
    author: "Salem  Douar",
    authorPhoto:
      "/st/media/pim/media/user_photo/cb/cb1/cb165ad978a9242b2e870d2bfb478e19_5bebe966d7094494be84a3560b4a1a06.jpg",
  },
  {
    name: "The Holy Grail",
    account: 110186880,
    description: "Trading AUDCAD AUDNZD NZDCAD with The Holy Grail system.",
    author: "Natchapon Aroonsirikul",
    authorPhoto:
      "/st/media/pim/media/user_photo/11/111/1117e7e874379d177facc4aec39ef1b8_1158ab63afd845f3be607f5e2cb747d7.jpg",
  },
  {
    name: "Sơn Hải Group",
    account: 110186900,
    description:
      "scapling gold 10-20%/tháng \ncùng nhau kiếm tiền\nTài khoản trade tay 100%",
    author: "MAI TƯ",
    authorPhoto:
      "/st/media/pim/media/user_photo/ee/eef/eef945744f0aa69a9cc5fbed24f67e77_bccb25393e8643a6aca4e30ae1a267b9.jpg",
  },
  {
    name: "AUDUSD EA 01",
    account: 110186964,
    description: "Expected monthly income of over 20%.",
    author: "晓伟 胡",
    authorPhoto:
      "/st/media/pim/media/user_photo/86/86a/86af3ba2af5597045063859b60ef97c5_0fe53411895b4752be248f2c089bd45f.png",
  },
  {
    name: "Tradding 1",
    account: 110187054,
    description: "ความสำคัญ\n1.เทรดรักษาทุน \n2.กำไรตามสถานการณ์",
    author: "suksan binson",
    authorPhoto:
      "/st/media/pim/media/user_photo/91/914/91462aecadc911cc51fae7b4c59b18a9_66f7812520f845fdb61f7611f32de95e.jpg",
  },
  {
    name: "Smart investment 01",
    account: 110187147,
    description: "Smart investment 01",
    author: "Thi Huyen Nguyen",
    authorPhoto:
      "/st/media/pim/media/user_photo/9e/9e6/9e638362394c3d5fe20b89c25ba3c7a3_9513b3ede08b460ca18eaaef574bf305.jpg",
  },
  {
    name: "Swing Strategies",
    account: 110187164,
    description: "Swing Strategies , Patience will lead us to profit",
    author: "Hani Alghazi",
    authorPhoto:
      "/st/media/pim/media/user_photo/11/112/1123720c6d0ef97636aa75ab3cb87f28_db47b6ad569a4e029d99eba28035adfa.jpg",
  },
  {
    name: "TOM FOREX 3",
    account: 110187186,
    description: "The following trend",
    author: "NGUYỄN TRỌNG",
    authorPhoto:
      "/st/media/pim/media/user_photo/c8/c80/c8063726f5561c72ef3d8fa3ef57e553_28eed4abdd964e13bc1741ec0ef81f89.jpg",
  },
  {
    name: "TRADER TỰ DO",
    account: 110187205,
    description: "Scap gold",
    author: "THI NGOC ANH LE",
    authorPhoto:
      "/st/media/pim/media/user_photo/1c/1c3/1c32668afbdbc73c4dabff78435d1732_cb8188c36a264f35885886d4c500f110.jpeg",
  },
  {
    name: "Profit Angel",
    account: 110187220,
    description:
      "★ 13 currency pairs trading \n★ Please invest for at least 3 months to experience the wonders of this system\n★ Let's enjoy safety Forex journey!!",
    author: "MAKI WATANABE",
    authorPhoto:
      "/st/media/pim/media/user_photo/7d/7d7/7d77150ea8d3425dae44e39a78758d5a_fdbd9eb7d12b4f18860e55bfdcaccea1.jpg",
  },
  {
    name: "GOLD - Steady Growth",
    account: 110187245,
    description: "Only GOLD (XAUUSD) Trades \nSteady Growth of Account",
    author: "Hetul Lukhi",
    authorPhoto:
      "/st/media/pim/media/user_photo/ed/edc/edc0c43796721ded6ea98efa1b8e002a_12621c2cf1df4b208cc75747b200ccc3.png",
  },
  {
    name: "Risk-Reward Strategy",
    account: 110187248,
    description:
      "Consistency and discipline are key.\nStrick to strategy.\nEmotional management.",
    author: "Kannikar Kuttiyawittayakul",
    authorPhoto:
      "/st/media/user_photo/b1/b1c/b1cd83343237de3025cfafa8138bb8f5_63ade3c82c9846b98bfdaab052b4eda7.jpeg",
  },
  {
    name: "ProThaworn",
    account: 110187583,
    description: "90 Win rate",
    author: "MR THAWORN LONTHAISONG",
    authorPhoto:
      "/st/media/pim/media/user_photo/95/95d/95d28663a96c6599908f5cd73a45c59d_6bf445a6735e4e589a7a761f6669843e.png",
  },
];

// let traders = [];
// const limit = 30; // Number of traders to fetch per call
// let offset = 0; // Starting point for pagination

// function fetchAllTraders() {
//   fetch(`https://www.social-trading.club/st/v1/managers/accounts/?limit=${limit}&offset=${offset}`)
//     .then(response => response.json())
//     .then(data => {
//       if (data.result.length > 0) {
//         const cookedResult = data.result.map((trader) => ({
//             name: trader.name,
//             account: trader.account,
//             description: trader.description,
//             author: trader.manager?.name,
//             authorPhoto: trader.manager?.photo,
//         }));
//         traders = traders.concat(cookedResult); // Add new traders to the array
//         offset += limit;
//         fetchAllTraders(); // Fetch the next page
//       } else {
//         navigator.clipboard.writeText(JSON.stringify(traders));
//       }
//     })
//     .catch(error => console.error("ERROR"));
// }

// document.addEventListener('DOMContentLoaded', () => {
//   fetchAllTraders();
// });

document.getElementById("traderId").addEventListener("input", () => {
  // navigator.clipboard.writeText(JSON.stringify(traders));
  const input = document.getElementById("traderId").value.toLowerCase();
  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = "";

  if (input) {
    const filteredTraders = TRADERS_DATA.filter(
      (trader) =>
        trader.name.toLowerCase().includes(input) ||
        trader.account.toString().includes(input)
    );

    filteredTraders.forEach((trader) => {
      const li = document.createElement("li");
      li.textContent = `${trader.name} (${trader.account})`;
      li.addEventListener("click", () => {
        document.getElementById(
          "traderId"
        ).value = `${trader.name} (${trader.account})`;
        suggestions.innerHTML = "";
      });
      suggestions.appendChild(li);
    });
  }
});

document.getElementById("viewButton").addEventListener("click", () => {
  let traderId = document.getElementById("traderId").value;
  if (traderId && traderId.includes("(") && traderId.includes(")")) {
    traderId = traderId.split("(")[1].split(")")[0].trim();
  }
  const ordersTableBody = document
    .getElementById("ordersTable")
    .querySelector("tbody");
  const totalProfitElement = document.getElementById("totalProfit");
  const viewButton = document.getElementById("viewButton");

  ordersTableBody.innerHTML = ""; // Clear previous data
  totalProfitElement.textContent = "0$"; // Reset total profit
  totalProfitElement.className = "profit default";
  viewButton.disabled = true; // Disable the button
  viewButton.classList.add("disabled");

  if (traderId) {
    fetch(
      `https://www.social-trading.club/st/v1/managers/accounts/${traderId}/open-trades`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        let totalProfit = 0;
        if (data.result && data.result.length > 0) {
          const formatOrders = data.result.map((order) => ({
            account: order.account,
            symbol: order.symbol,
            trade_type: order.trade_type,
            open_price: order.open_price,
            open_datetime: formatDate(new Date(order.open_datetime)),
            size: order.size,
            profit: order.profit,
            current_price: order.current_price,
          }));
          formatOrders.forEach((order) => {
            const row = document.createElement("tr");

            const tradeTypeClass =
              order.trade_type.toLowerCase() === "sell" ? "sell" : "buy";
            const profitClass =
              order.profit > 0
                ? "positive"
                : order.profit < 0
                ? "negative"
                : "default";

            totalProfit += order.profit;

            row.innerHTML = `
                            <td>${order.account}</td>
                            <td>${order.symbol}</td>
                            <td class="trade-type ${tradeTypeClass}">${order.trade_type}</td>
                            <td>${order.open_price}</td>
                            <td>${order.open_datetime}</td>
                            <td>${order.size}</td>
                            <td class="profit ${profitClass}">${order.profit}$</td>
                            <td>${order.current_price}</td>
                        `;

            ordersTableBody.appendChild(row);
          });
          const totalProfitClass =
            totalProfit > 0
              ? "positive"
              : totalProfit < 0
              ? "negative"
              : "default";
          totalProfitElement.textContent = totalProfit.toFixed(2) + "$";
          totalProfitElement.className = `profit ${totalProfitClass}`;
        } else {
          const row = document.createElement("tr");
          const cell = document.createElement("td");
          cell.textContent = "No orders found";
          cell.colSpan = 10;
          row.appendChild(cell);
          ordersTableBody.appendChild(row);
        }
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.textContent = "Failed to fetch data";
        cell.colSpan = 10;
        row.appendChild(cell);
        ordersTableBody.appendChild(row);
      })
      .finally(() => {
        viewButton.disabled = false; // Re-enable the button
        viewButton.classList.remove("disabled"); // Remove disabled class
      });
  } else {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.textContent = "Please enter a Trader ID";
    cell.colSpan = 10;
    row.appendChild(cell);
    ordersTableBody.appendChild(row);
    viewButton.disabled = false; //
    viewButton.classList.remove("disabled"); // Remove disabled class
  }
});
