export interface NewsArticle {
  slug: string;
  titleHi: string;
  titleEn: string;
  date: string;
  sourceNameHi: string;
  sourceNameEn: string;
  sourceUrl: string;
  category: "appointment" | "public_event" | "msme" | "community";
  image: string;
  excerptHi: string;
  excerptEn: string;
  contentHi: string[];
  contentEn: string[];
  readTime: string;
  featured?: boolean;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "upsic-vice-chairman-charge-assumption-2024",
    titleHi: "नटवर गोयल ने उत्तर प्रदेश लघु उद्योग निगम लिमिटेड के उपाध्यक्ष पद का कार्यभार संभाला",
    titleEn: "Natwar Goyal Assumes Charge as Vice Chairman of UP Small Industries Corporation",
    date: "14 सितम्बर 2024",
    sourceNameHi: "तरुणमित्र समाचार सेवा / यूपीएसआईसी आधिकारिक",
    sourceNameEn: "TarunMitra / UPSIC Official Release",
    sourceUrl: "https://ho.upsic.in/about",
    category: "appointment",
    image: "https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/gallery/walking-with-cm-yogi.jpg",
    excerptHi: "उत्तर प्रदेश सरकार द्वारा दर्जा प्राप्त राज्यमंत्री बनाए जाने के उपरांत नटवर गोयल ने कानपुर स्थित लघु उद्योग निगम के मुख्यालय में विधिवत पदभार ग्रहण किया।",
    excerptEn: "Following his appointment with Minister of State rank, Shri Natwar Goyal officially assumed charge at the UPSIC headquarters in Kanpur.",
    contentHi: [
      "कानपुर/लखनऊ: उत्तर प्रदेश सरकार द्वारा 13 सितम्बर 2024 को जारी आदेश के अंतर्गत वरिष्ठ सामाजिक कार्यकर्ता एवं व्यापारी नेता श्री वैश्य नटवर गोयल को 'उत्तर प्रदेश लघु उद्योग निगम लिमिटेड' (UPSIC) का उपाध्यक्ष (दर्जा प्राप्त राज्यमंत्री) नियुक्त किया गया।",
      "नियुक्ति के उपरांत उन्होंने फजलगंज, कानपुर स्थित निगम मुख्यालय में अध्यक्ष श्री राकेश गर्ग एवं निगम के वरिष्ठ प्रशासनिक अधिकारियों की उपस्थिति में विधिवत कार्यभार ग्रहण किया। इस अवसर पर प्रदेश भर से आए व्यापारिक एवं सामाजिक संगठनों के प्रतिनिधियों ने उनका माल्यार्पण कर भव्य स्वागत किया।",
      "पदभार ग्रहण करने के उपरांत श्री नटवर गोयल ने कहा कि मुख्यमंत्री योगी आदित्यनाथ जी के नेतृत्व में उत्तर प्रदेश को वन ट्रिलियन डॉलर अर्थव्यवस्था बनाने के संकल्प में लघु एवं मध्यम उद्योग (MSME) की भूमिका सबसे महत्वपूर्ण है। उन्होंने कहा कि निगम का प्रयास होगा कि प्रदेश के प्रत्येक जिले में स्थापित औद्योगिक आस्थानों का आधुनिकीकरण हो, उद्यमियों को समय पर कच्चा माल सुलभ हो और युवाओं को स्वरोजगार के व्यापक अवसर प्राप्त हों।"
    ],
    contentEn: [
      "Kanpur/Lucknow: Under notification issued on 13 September 2024 by the Government of Uttar Pradesh, senior public figure and trade leader Shri Vaishya Natwar Goyal was appointed Vice Chairman of the Uttar Pradesh Small Industries Corporation Limited (UPSIC) with Minister of State rank.",
      "Following the announcement, Shri Goyal formally took charge at the corporation headquarters in Fazalganj, Kanpur, alongside UPSIC Chairman Shri Rakesh Garg and senior state administrative directors. Representatives from various commerce and community associations across UP gathered to extend their felicitations.",
      "Addressing the media upon assuming office, Shri Goyal emphasized that micro, small, and medium enterprises are central to realizing Chief Minister Yogi Adityanath's vision of transforming Uttar Pradesh into a one-trillion-dollar economy. He noted that the corporation will prioritize modernizing industrial estates across districts, securing timely raw materials for manufacturing units, and mentoring young entrepreneurs under state credit initiatives."
    ],
    readTime: "3 min read",
    featured: true
  },
  {
    slug: "raebareli-visit-traders-welcome-upsic-vp",
    titleHi: "रायबरेली आगमन पर उत्तर प्रदेश लघु उद्योग निगम के उपाध्यक्ष नटवर गोयल का भव्य स्वागत",
    titleEn: "Grand Welcome for UPSIC Vice Chairman Natwar Goyal on Raebareli Visit",
    date: "06 अक्टूबर 2024",
    sourceNameHi: "लाइव हिन्दुस्तान समाचार",
    sourceNameEn: "Live Hindustan News",
    sourceUrl: "https://www.livehindustan.com/uttar-pradesh/raebareli",
    category: "public_event",
    image: "https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/gallery/meeting-deputy-cm-keshav-maurya.jpg",
    excerptHi: "रायबरेली जनपद के दौरे पर पहुंचे लघु उद्योग निगम के उपाध्यक्ष नटवर गोयल का व्यापारियों और सामाजिक संगठनों ने गर्मजोशी से स्वागत किया।",
    excerptEn: "During his official tour of Raebareli district, UPSIC Vice Chairman Natwar Goyal was accorded a warm reception by local trade bodies.",
    contentHi: [
      "रायबरेली: उत्तर प्रदेश लघु उद्योग निगम के नवनियुक्त उपाध्यक्ष श्री वैश्य नटवर गोयल के रायबरेली प्रथम आगमन पर स्थानीय व्यापारियों, व्यापार मण्डल के पदाधिकारियों और वैश्य समाज के प्रबुद्ध नागरिकों ने उनका जोरदार स्वागत किया।",
      "जिले के प्रमुख व्यापारिक केंद्र में आयोजित स्वागत समारोह में व्यापारियों ने स्थानीय औद्योगिक क्षेत्रों में बिजली आपूर्ति, जल निकासी और सड़कों की समस्याओं को उनके सम्मुख रखा।",
      "श्री गोयल ने व्यापारियों को आश्वस्त करते हुए कहा कि सरकार उद्यमियों की समस्याओं के समाधान हेतु पूरी तरह प्रतिबद्ध है। लघु उद्योग निगम के माध्यम से स्थानीय स्तर पर क्लस्टर विकास और कच्चे माल के केंद्रों की स्थापना पर विचार किया जा रहा है ताकि छोटे निर्माताओं को दूर के शहरों पर निर्भर न रहना पड़े।"
    ],
    contentEn: [
      "Raebareli: On his maiden visit to Raebareli after assuming the vice-chairmanship of UP Small Industries Corporation, Shri Vaishya Natwar Goyal was accorded an enthusiastic reception by trade guilds, merchant bodies, and civic delegations.",
      "At a gathering organized in the city, traders submitted representations regarding civic infrastructure in local industrial zones, uninterrupted electricity, and warehousing amenities.",
      "Responding to the delegates, Shri Goyal assured that the state administration is resolute in resolving procedural hurdles for local businesses. He stated that UPSIC is evaluating localized raw material distribution hubs to ensure grassroots micro-manufacturers can produce competitively without supply bottlenecks."
    ],
    readTime: "3 min read",
    featured: true
  },
  {
    slug: "indian-business-committee-honors-natwar-goyal-lucknow",
    titleHi: "भारतीय व्यापार समिति एवं उद्योग प्रतिनिधियों द्वारा उपाध्यक्ष नटवर गोयल का नागरिक अभिनंदन",
    titleEn: "Civic Felicitation of Vice Chairman Natwar Goyal by Business Committee in Lucknow",
    date: "20 सितम्बर 2024",
    sourceNameHi: "लाइव हिन्दुस्तान / स्थानीय मीडिया",
    sourceNameEn: "Live Hindustan / Lucknow City Press",
    sourceUrl: "https://www.livehindustan.com/uttar-pradesh/lucknow",
    category: "community",
    image: "https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/gallery/with-minister-kapil-dev-agarwal.jpg",
    excerptHi: "राजधानी लखनऊ में आयोजित भव्य सम्मान समारोह में उद्योग एवं व्यापार जगत के प्रतिनिधियों ने नटवर गोयल के मनोनयन पर हर्ष जताया।",
    excerptEn: "Business associations and trade federations held a civic reception in Lucknow celebrating Shri Natwar Goyal's appointment.",
    contentHi: [
      "लखनऊ: भारतीय व्यापार समिति एवं विभिन्न औद्योगिक संगठनों द्वारा राजधानी लखनऊ में एक विशेष सम्मान समारोह का आयोजन कर उत्तर प्रदेश लघु उद्योग निगम के नवनियुक्त उपाध्यक्ष श्री वैश्य नटवर गोयल का नागरिक अभिनंदन किया गया।",
      "कार्यक्रम में उपस्थित वक्ताओं ने कहा कि श्री नटवर गोयल विगत चार दशकों से व्यापारियों और कुटीर उद्योगों के हितों के लिए संघर्षरत रहे हैं। उनके इस पद पर आने से प्रदेश के छोटे उद्यमियों की समस्याओं का त्वरित समाधान संभव होगा।",
      "श्री नटवर गोयल ने सभी का आभार व्यक्त करते हुए कहा कि वे संगठन के विश्वास और सरकार की प्राथमिकताओं पर खरा उतरने का पूर्ण प्रयास करेंगे।"
    ],
    contentEn: [
      "Lucknow: The Indian Business Committee along with allied trade organizations convened a special felicitation assembly in the state capital to honor Shri Vaishya Natwar Goyal upon his appointment as Vice Chairman of UPSIC.",
      "Speakers highlighted Shri Goyal's four-decade-long grassroots engagement with merchant safety, regulatory relief, and trade representations, noting that his presence at the corporation will expedite solutions for emerging enterprises.",
      "In his address, Shri Goyal expressed sincere gratitude to all industry stakeholders, affirming his commitment to bridging administrative frameworks with real-world entrepreneurial requirements."
    ],
    readTime: "2 min read",
    featured: false
  },
  {
    slug: "msme-empowerment-initiative-up-2024",
    titleHi: "प्रदेश में सूक्ष्म एवं लघु उद्योगों को बढ़ावा देने हेतु यूपीएसआईसी की नई कार्ययोजना",
    titleEn: "UPSIC Outlines Modernization Roadmap for Micro and Small Enterprises in UP",
    date: "28 सितम्बर 2024",
    sourceNameHi: "ईटीवी भारत / औद्योगिक रिपोर्ट",
    sourceNameEn: "ETV Bharat / Industrial News Desk",
    sourceUrl: "https://ho.upsic.in",
    category: "msme",
    image: "https://ik.imagekit.io/avdarinn/tr:f-auto,q-80/natwarlal/gallery/meeting-cm-yogi-conference.jpg",
    excerptHi: "लघु उद्योग निगम द्वारा प्रदेश के औद्योगिक क्षेत्रों में आधारभूत सुविधाओं के उन्नयन और उद्यमियों के लिए सिंगल विंडो समन्वय पर जोर।",
    excerptEn: "UPSIC announces focus on upgrading basic amenities in industrial estates and strengthening single-window support for entrepreneurs.",
    contentHi: [
      "कानपुर: उत्तर प्रदेश लघु उद्योग निगम लिमिटेड के उपाध्यक्ष श्री नटवर गोयल ने निगम के अधिकारियों के साथ उच्चस्तरीय समीक्षा बैठक कर प्रदेश भर के औद्योगिक आस्थानों की स्थिति का जायजा लिया।",
      "बैठक में निर्णय लिया गया कि पुराने औद्योगिक क्षेत्रों में जर्जर सड़कों की मरम्मत, ड्रेनेज व्यवस्था और स्ट्रीट लाइटों का नवीनीकरण प्राथमिकता के आधार पर कराया जाएगा।",
      "श्री गोयल ने अधिकारियों को निर्देश दिए कि उद्यमियों द्वारा प्राप्त आवेदनों पर समयबद्ध निर्णय लिया जाए और किसी भी स्तर पर अनावश्यक विलंब बर्दाश्त नहीं किया जाएगा।"
    ],
    contentEn: [
      "Kanpur: Presiding over an operational review meeting with departmental officials at UPSIC headquarters, Vice Chairman Natwar Goyal assessed the infrastructural status of designated industrial estates across the state.",
      "The corporation outlined immediate targets for revamping drainage lines, modernizing road connectivity, and installing solar lighting across regional manufacturing hubs.",
      "Shri Goyal instructed officers that processing times for allotting commercial plots and disbursing supplies must adhere strictly to statutory turnaround standards."
    ],
    readTime: "3 min read",
    featured: false
  }
];
