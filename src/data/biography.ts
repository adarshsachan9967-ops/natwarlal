export interface ProfileFact {
  id: string;
  labelHi: string;
  labelEn: string;
  valueHi: string;
  valueEn: string;
  category: "personal" | "political" | "education" | "official";
}

export const PROFILE_FACTS: ProfileFact[] = [
  {
    id: "name",
    labelHi: "नाम",
    labelEn: "Full Name",
    valueHi: "वैश्य नटवर गोयल",
    valueEn: "Vaishya Natwar Goyal",
    category: "personal",
  },
  {
    id: "current_role",
    labelHi: "वर्तमान पद",
    labelEn: "Current Position",
    valueHi: "उपाध्यक्ष, उत्तर प्रदेश लघु उद्योग निगम (राज्यमंत्री स्तर)",
    valueEn: "Vice Chairman, UP Small Industries Corporation (MoS Rank)",
    category: "official",
  },
  {
    id: "org_role_1",
    labelHi: "राष्ट्रीय संगठन दायित्व",
    labelEn: "National Role",
    valueHi: "राष्ट्रीय उपाध्यक्ष, अखिल भारतीय वैश्य महासम्मेलन",
    valueEn: "National Vice President, All India Vaishya Mahasammelan",
    category: "political",
  },
  {
    id: "org_role_2",
    labelHi: "व्यापार संगठन दायित्व",
    labelEn: "Trade Body Leadership",
    valueHi: "राष्ट्रीय उपाध्यक्ष, भारतीय उद्योग व्यापार मण्डल (BJP समर्थक)",
    valueEn: "National Vice President, Bharatiya Udyog Vyapar Mandal",
    category: "political",
  },
  {
    id: "past_gov_role",
    labelHi: "पूर्व दायित्व",
    labelEn: "Past Gov. Position",
    valueHi: "उपाध्यक्ष (राज्यमंत्री स्तर), उ०प्र० खादी एवं ग्रामोद्योग बोर्ड (2012)",
    valueEn: "Vice Chairman (MoS Rank), UP Khadi & Village Industries Board (2012)",
    category: "official",
  },
  {
    id: "education",
    labelHi: "शैक्षिक योग्यता",
    labelEn: "Education",
    valueHi: "बी०कॉम० (B.Com)",
    valueEn: "Bachelor of Commerce (B.Com)",
    category: "education",
  },
  {
    id: "dob",
    labelHi: "जन्मतिथि",
    labelEn: "Date of Birth",
    valueHi: "17 अगस्त 1967",
    valueEn: "17 August 1967",
    category: "personal",
  },
  {
    id: "father",
    labelHi: "पिता का नाम",
    labelEn: "Father's Name",
    valueHi: "स्व० श्री जगन्नाथ दास गोयल",
    valueEn: "Late Shri Jagannath Das Goyal",
    category: "personal",
  },
  {
    id: "spouse",
    labelHi: "पत्नी का नाम",
    labelEn: "Spouse",
    valueHi: "श्रीमती बबिता अग्रवाल",
    valueEn: "Mrs. Babita Agarwal",
    category: "personal",
  },
  {
    id: "home_city",
    labelHi: "गृह जनपद",
    labelEn: "Home District",
    valueHi: "वाराणसी (काशी), उत्तर प्रदेश",
    valueEn: "Varanasi (Kashi), Uttar Pradesh",
    category: "personal",
  },
  {
    id: "work_center",
    labelHi: "कर्मक्षेत्र",
    labelEn: "Work Sphere",
    valueHi: "लखनऊ एवं कानपुर, उत्तर प्रदेश",
    valueEn: "Lucknow & Kanpur, Uttar Pradesh",
    category: "official",
  },
  {
    id: "community",
    labelHi: "समुदाय",
    labelEn: "Community",
    valueHi: "वैश्य (अग्रवाल)",
    valueEn: "Vaishya (Agrawal)",
    category: "personal",
  },
];

export interface BiographySection {
  id: string;
  titleHi: string;
  titleEn: string;
  subtitleHi?: string;
  subtitleEn?: string;
  contentHi: string[];
  contentEn: string[];
  image?: string;
  imageCaptionHi?: string;
  imageCaptionEn?: string;
}

export const BIOGRAPHY_SECTIONS: BiographySection[] = [
  {
    id: "early_life",
    titleHi: "आरंभिक जीवन एवं पारिवारिक पृष्ठभूमि",
    titleEn: "Early Life & Family Background",
    subtitleHi: "काशी की पावन भूमि पर संस्कार और सेवा का बीजारोपण",
    subtitleEn: "Values of public service grounded in the holy city of Kashi",
    contentHi: [
      "श्री वैश्य नटवर गोयल का जन्म 17 अगस्त 1967 को आध्यात्मिक और व्यापारिक नगरी वाराणसी (काशी) में हुआ। उनके पिता स्व० श्री जगन्नाथ दास गोयल प्रतिष्ठित और समाज-सेवी व्यक्तित्व थे, जिनसे उन्हें ईमानदारी, सेवाभाव और सामाजिक प्रतिबद्धता के गहरे संस्कार प्राप्त हुए।",
      "उन्होंने अपनी उच्च शिक्षा के अंतर्गत वाणिज्य स्नातक (बी०कॉम०) की उपाधि प्राप्त की। शिक्षा पूर्ण करने के साथ ही उन्होंने व्यापार और उद्योग के व्यावहारिक पहलुओं का गहराई से अध्ययन किया और युवावस्था से ही व्यापारिक समुदाय व समाज कल्याण से जुड़े कार्यों में सक्रिय योगदान देना शुरू कर दिया।",
      "उनका विवाह श्रीमती बबिता अग्रवाल के साथ संपन्न हुआ, जो सामाजिक और पारिवारिक दायित्वों में उनका निरंतर संबल बनी रही हैं।"
    ],
    contentEn: [
      "Shri Vaishya Natwar Goyal was born on 17 August 1967 in the historic and spiritual city of Varanasi (Kashi), Uttar Pradesh. His father, Late Shri Jagannath Das Goyal, was a respected figure whose integrity, philanthropy, and commitment to public welfare deeply shaped his values.",
      "He completed his Bachelor of Commerce (B.Com), developing a strong grounding in commercial economics and business enterprise. From his youth, he immersed himself in trade advocacy and community service.",
      "He is married to Mrs. Babita Agarwal, who has stood alongside him through decades of active public, organizational, and family life."
    ],
    image: "/images/gallery/formal-dialogue-leaders-lounge.jpg",
    imageCaptionHi: "श्री वैश्य नटवर गोयल - सांगठनिक एवं सार्वजनिक संवाद",
    imageCaptionEn: "Shri Vaishya Natwar Goyal - Organizational Dialogue"
  },
  {
    id: "trade_leadership",
    titleHi: "व्यापारिक संगठनों में नेतृत्व एवं संघर्ष",
    titleEn: "Leadership in Trade & Business Organizations",
    subtitleHi: "व्यापारियों के अधिकारों और औद्योगिक उन्नति के लिए चार दशकों का समर्पण",
    subtitleEn: "Four decades dedicated to commercial rights and MSME advancement",
    contentHi: [
      "वर्ष 1988 में श्री नटवर गोयल ने काशी दवा व्यापार संघ के संगठन मंत्री के रूप में व्यापारियों के हितों की रक्षा हेतु संगठनात्मक दायित्व संभाला। इसके उपरांत 1992 से 1996 तक उन्होंने काशी युवा व्यापार प्रतिनिधि मण्डल के उपाध्यक्ष के रूप में युवा व्यापारियों को संगठित किया।",
      "अखिल भारतीय उद्योग व्यापार मण्डल में उनकी निष्ठा और कार्यशैली को देखते हुए उन्हें 2007 से 2012 तक प्रदेश कार्य समिति सदस्य बनाया गया। बाद में वे भारतीय उद्योग व्यापार मण्डल (BJP समर्थक) के राष्ट्रीय उपाध्यक्ष बने और 2013 से 2023 तक लगातार तीन बार निर्विरोध प्रदेश अध्यक्ष चुने गए।",
      "उन्होंने उत्तर प्रदेश के व्यापारियों पर लगने वाले अनावश्यक करों, प्रशासनिक जटिलताओं और सुरक्षा से जुड़े विषयों पर मुखर होकर आवाज उठाई और सरकार व व्यापार जगत के मध्य एक विश्वसनीय सेतु की भूमिका निभाई।"
    ],
    contentEn: [
      "In 1988, Shri Natwar Goyal took on his first major organizational mantle as Organizational Secretary of Kashi Pharmaceutical Trade Association. From 1992 to 1996, he served as Vice President of the Kashi Youth Traders Representative Body.",
      "His dedication earned him membership in the State Working Committee of Akhil Bharatiya Udyog Vyapar Mandal (2007–2012). Later, as National Vice President of Bharatiya Udyog Vyapar Mandal (BJP-aligned), he was unanimously elected State President for three consecutive terms from 2013 to 2023.",
      "Throughout these tenures, he championed streamlined compliance, merchant security, and fair commercial governance across Uttar Pradesh."
    ],
    image: "/images/gallery/with-union-minister-piyush-goyal.jpg",
    imageCaptionHi: "केंद्रीय वाणिज्य एवं उद्योग मंत्री श्री पीयूष गोयल जी के साथ श्री नटवर गोयल",
    imageCaptionEn: "With Union Minister of Commerce & Industry Shri Piyush Goyal"
  },
  {
    id: "community_engagement",
    titleHi: "सामाजिक एवं वैश्य समाज का सशक्तिकरण",
    titleEn: "Social Leadership & Community Welfare",
    subtitleHi: "शिक्षा, स्वास्थ्य और सामाजिक समरसता के लिए अनवरत प्रयास",
    subtitleEn: "Championing education, civic relief, and cultural unity",
    contentHi: [
      "वर्ष 1984 में काशी अग्रवाल समाज की आजीवन सदस्यता ग्रहण करने के साथ ही श्री गोयल का सामाजिक जीवन प्रारंभ हुआ। 1992 में जब वाराणसी का लोहता क्षेत्र दंगों से प्रभावित हुआ, तब उन्होंने राहत समिति के सदस्य के रूप में पीड़ितों तक खाद्य सामग्री और आवश्यक सहायता पहुंचाने में महत्वपूर्ण भूमिका निभाई।",
      "वे शिक्षा के प्रसार हेतु 2005 में जय खाकीबाबा इण्टर कालेज, सुरापुर, सुल्तानपुर के अध्यक्ष रहे। साथ ही सकलडीहा पी०जी० कालेज (चन्दौली) और बनारस मुगल एकेडमी के आजीवन सदस्य रहे हैं।",
      "अखिल भारतीय वैश्य महासम्मेलन, उत्तर प्रदेश के वे 2009 से 2012 तक कोषाध्यक्ष और 2013 से 2022 तक प्रदेश अध्यक्ष रहे। वर्तमान में वे इसके राष्ट्रीय उपाध्यक्ष के रूप में समाज के वंचित वर्गों की सहायता, मेधावी विद्यार्थियों के प्रोत्साहन और सामाजिक समरसता के कार्यों का मार्गदर्शन कर रहे हैं।"
    ],
    contentEn: [
      "Beginning with his life membership in Kashi Agrawal Samaj in 1984, Shri Goyal devoted considerable energy to grassroots social causes. In 1992, during riots in the Lohata sector of Varanasi, he served on the frontlines of the relief committee aiding affected citizens.",
      "In education, he served as President of Jai Khakibaba Inter College (Surapur, Sultanpur) in 2005 and holds life memberships in Sakaldiha P.G. College (Chandauli) and Banaras Mughal Academy.",
      "Within the All India Vaishya Mahasammelan, he served as State Treasurer (2009–2012) and State President (2013–2022). Currently serving as National Vice President, he guides educational scholarships, social welfare, and matrimonial conferences."
    ],
    image: "/images/gallery/with-rss-chief-mohan-bhagwat.jpg",
    imageCaptionHi: "राष्ट्रीय स्वयंसेवक संघ के सरसंघचालक परम पूज्य डॉ० मोहन भागवत जी के साथ",
    imageCaptionEn: "With RSS Sarsanghchalak Dr. Mohan Bhagwat"
  },
  {
    id: "public_responsibility",
    titleHi: "शासकीय दायित्व एवं लघु उद्योग निगम",
    titleEn: "Public Governance & UPSIC Responsibilities",
    subtitleHi: "खादी ग्रामोद्योग से लेकर सूक्ष्म, लघु एवं मध्यम उद्योगों तक राज्य सेवा",
    subtitleEn: "Public service spanning village industries and state manufacturing infrastructure",
    contentHi: [
      "वर्ष 2012 में श्री नटवर गोयल को उत्तर प्रदेश सरकार द्वारा राज्यमंत्री स्तर के साथ उत्तर प्रदेश खादी एवं ग्रामोद्योग बोर्ड का उपाध्यक्ष नियुक्त किया गया था, जहां उन्होंने ग्रामीण कारीगरों और बुनकरों के उत्थान के लिए विभिन्न योजनाओं का क्रियान्वयन किया।",
      "13 सितम्बर 2024 को उत्तर प्रदेश के यशस्वी मुख्यमंत्री योगी आदित्यनाथ जी की सरकार द्वारा श्री वैश्य नटवर गोयल को 'उत्तर प्रदेश लघु उद्योग निगम लिमिटेड' (UPSIC) का उपाध्यक्ष (दर्जा प्राप्त राज्यमंत्री) नियुक्त किया गया।",
      "कानपुर स्थित निगम मुख्यालय में पदभार ग्रहण करने के पश्चात उन्होंने प्रदेश के एमएसएमई (MSME) सेक्टर, औद्योगिक पार्कों, कच्चे माल की आपूर्ति और युवा उद्यमियों को ऋण व तकनीकी सहायता सुलभ कराने की दिशा में गतिशीलता प्रदान की है।"
    ],
    contentEn: [
      "In 2012, Shri Goyal was appointed Vice Chairman of the UP Khadi & Village Industries Board with Minister of State rank, where he oversaw schemes for rural artisans, weavers, and agro-industries.",
      "On 13 September 2024, the Government of Uttar Pradesh under Chief Minister Yogi Adityanath appointed Shri Vaishya Natwar Goyal as Vice Chairman of Uttar Pradesh Small Industries Corporation Limited (UPSIC) with Minister of State status.",
      "Assuming charge at the corporation headquarters in Fazalganj, Kanpur, he has actively driven industrial park modernization, raw material distribution, and handholding for emerging MSME entrepreneurs."
    ],
    image: "/images/gallery/walking-with-cm-yogi.jpg",
    imageCaptionHi: "उत्तर प्रदेश के माननीय मुख्यमंत्री योगी आदित्यनाथ जी के साथ श्री वैश्य नटवर गोयल",
    imageCaptionEn: "With Hon'ble Chief Minister of Uttar Pradesh Yogi Adityanath"
  }
];
