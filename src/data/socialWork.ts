export interface SocialWorkActivity {
  id: string;
  year: string;
  titleHi: string;
  titleEn: string;
  categoryHi: string;
  categoryEn: string;
  locationHi: string;
  locationEn: string;
  descriptionHi: string;
  descriptionEn: string;
  image?: string;
  organizationRefHi: string;
  organizationRefEn: string;
}

export const SOCIAL_WORK_ACTIVITIES: SocialWorkActivity[] = [
  {
    id: "lohata-relief-1992",
    year: "1992",
    titleHi: "वाराणसी लोहता दंगा प्रभावित राहत एवं पुनर्वास",
    titleEn: "Citizen Relief & Support in Riot-Affected Lohata Area",
    categoryHi: "आपदा एवं दंगा राहत कार्य",
    categoryEn: "Civic Crisis Relief",
    locationHi: "लोहता, वाराणसी, उत्तर प्रदेश",
    locationEn: "Lohata, Varanasi, UP",
    descriptionHi: "वर्ष 1992 में वाराणसी के संवेदनशील लोहता क्षेत्र में घटित दंगों के दौरान गठित विशेष राहत समिति के सक्रिय सदस्य के रूप में प्रभावित बेसहारा परिवारों तक राशन सामग्री, वस्त्र और प्राथमिक चिकित्सा किट पहुंचाई गई तथा सामाजिक सौहार्द की पुनर्स्थापना में अग्रणी योगदान दिया।",
    descriptionEn: "During the 1992 communal disturbances in the Lohata sector of Varanasi, served on the frontlines of the civic relief committee distributing ration kits, clothing, and primary healthcare essentials while working tirelessly to restore social cohesion.",
    organizationRefHi: "वाराणसी राहत समिति (Natwargoyal New11.pdf, Page 2)",
    organizationRefEn: "Varanasi Relief Committee (Documented)"
  },
  {
    id: "rural-education-jai-khakibaba-2005",
    year: "2005",
    titleHi: "ग्रामीण शिक्षा का आधुनिकीकरण एवं विद्यालय प्रबंधन",
    titleEn: "Rural Educational Modernization & College Administration",
    categoryHi: "शिक्षा एवं युवा उत्थान",
    categoryEn: "Education & Youth Development",
    locationHi: "सुरापुर, सुल्तानपुर, उत्तर प्रदेश",
    locationEn: "Surapur, Sultanpur, UP",
    descriptionHi: "जय खाकीबाबा इण्टर कालेज के अध्यक्ष के रूप में ग्रामीण क्षेत्र के सैकड़ों छात्र-छात्राओं के लिए बेहतर अध्ययन वातावरण, बालिका शिक्षा प्रोत्साहन तथा विज्ञान प्रयोगशालाओं के निर्माण का संचालन किया।",
    descriptionEn: "As President of Jai Khakibaba Inter College in Surapur, Sultanpur, steered infrastructural modernization, instituted girl child education incentives, and set up state-of-the-art science laboratories.",
    organizationRefHi: "जय खाकीबाबा इण्टर कालेज, सुल्तानपुर (Natwargoyal New11.pdf, Page 2)",
    organizationRefEn: "Jai Khakibaba Inter College, Sultanpur"
  },
  {
    id: "kashi-agrawal-samaj-welfare",
    year: "1984 – निरंतर",
    titleHi: "काशी अग्रवाल समाज के माध्यम से जनकल्याण",
    titleEn: "Community Welfare via Kashi Agrawal Samaj",
    categoryHi: "सामुदायिक सेवा एवं स्वास्थ्य",
    categoryEn: "Community Service & Healthcare",
    locationHi: "वाराणसी, उत्तर प्रदेश",
    locationEn: "Varanasi, UP",
    descriptionHi: "1984 से आजीवन सदस्य के रूप में निःशुल्क चिकित्सा शिविर, सामूहिक विवाह आयोजनों में सहयोग, तथा आर्थिक रूप से दुर्बल परिवारों के बच्चों की उच्च शिक्षा हेतु छात्रवृत्ति सहायता में निरंतर मार्गदर्शन।",
    descriptionEn: "Serving as a Life Member since 1984, regularly supporting free healthcare camps, mass community marriage facilitation, and higher education scholarship stipends for underprivileged students.",
    organizationRefHi: "काशी अग्रवाल समाज, वाराणसी (Natwargoyal New11.pdf, Page 2)",
    organizationRefEn: "Kashi Agrawal Samaj, Varanasi"
  },
  {
    id: "rotary-lions-civic-drives",
    year: "2003 – 2004",
    titleHi: "रोटरी एवं लायन्स क्लब के साथ व्यापक नागरिक सेवा",
    titleEn: "Civic Health & Sanitation Drives with Rotary and Lions Clubs",
    categoryHi: "अंतर्राष्ट्रीय सेवा क्लब अभियान",
    categoryEn: "International Civic Service Campaigns",
    locationHi: "उत्तर प्रदेश",
    locationEn: "Uttar Pradesh",
    descriptionHi: "लायन्स क्लब (2003) और रोटरी क्लब (2004) की प्रबंध कार्यकारिणी के सदस्य के रूप में पोलियो उन्मूलन जागरूकता, स्वच्छ पेयजल वितरण तथा मोतियाबिंद शल्य-चिकित्सा शिविरों का आयोजन कराया।",
    descriptionEn: "As executive member of Lions Club (2003) and Rotary Club (2004), organized statewide polio eradication drives, cataract surgery camps, and pure drinking water distribution points in rural areas.",
    organizationRefHi: "लायन्स क्लब एवं रोटरी क्लब (Natwargoyal New11.pdf, Page 2)",
    organizationRefEn: "Lions Club & Rotary Club International"
  },
  {
    id: "vaishya-mahasammelan-statewide",
    year: "2013 – 2022",
    titleHi: "अखिल भारतीय वैश्य महासम्मेलन द्वारा सामाजिक समरसता अभियान",
    titleEn: "Statewide Social Cohesion & Welfare Drives under All India Vaishya Federation",
    categoryHi: "राज्यव्यापी सामाजिक संगठन",
    categoryEn: "Statewide Social Organization",
    locationHi: "उत्तर प्रदेश के सभी 75 जनपद",
    locationEn: "All 75 Districts of Uttar Pradesh",
    descriptionHi: "प्रदेश अध्यक्ष के रूप में एक दशक तक उत्तर प्रदेश के सभी 75 जिलों में भ्रमण कर युवा व्यवसायियों के लिए मार्गदर्शन प्रकोष्ठ, वरिष्ठ नागरिकों की सहायता और सामाजिक जागरूकता सम्मेलनों का सफल संचालन।",
    descriptionEn: "As State President for nearly a decade, toured all 75 districts of Uttar Pradesh establishing youth enterprise cells, elder assistance programs, and large-scale civic conventions.",
    organizationRefHi: "अखिल भारतीय वैश्य महासम्मेलन उ०प्र० (Natwargoyal New11.pdf, Page 1)",
    organizationRefEn: "All India Vaishya Mahasammelan UP"
  }
];
