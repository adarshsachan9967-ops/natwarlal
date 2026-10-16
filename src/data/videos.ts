export interface VideoMediaItem {
  id: string;
  titleHi: string;
  titleEn: string;
  date: string;
  category: "interview" | "speech" | "news_coverage" | "event";
  videoSrc: string;
  thumbnail?: string;
  youtubeId?: string;
  sourceHi: string;
  sourceEn: string;
  duration?: string;
  descriptionHi: string;
  descriptionEn: string;
}

export const VIDEO_MEDIA_LIST: VideoMediaItem[] = [
  {
    id: "vid-01",
    titleHi: "उत्तर प्रदेश लघु उद्योग निगम पदभार ग्रहण एवं मीडिया संवाद",
    titleEn: "Assuming Office as Vice Chairman, UPSIC & Media Interaction",
    date: "सितम्बर 2024",
    category: "news_coverage",
    videoSrc: "https://ik.imagekit.io/avdarinn/natwarlal/videos/VID-20261015-WA0350.mp4",
    sourceHi: "कानपुर मुख्यालय / क्षेत्रीय प्रेस",
    sourceEn: "Kanpur HQ / Regional Media",
    duration: "1:15",
    descriptionHi: "कानपुर में पदभार ग्रहण करने के उपरांत श्री वैश्य नटवर गोयल ने प्रदेश के सूक्ष्म, लघु एवं मध्यम उद्योगों (MSME) की उन्नति एवं स्वरोजगार विस्तार पर प्राथमिकताओं को साझा किया।",
    descriptionEn: "Interacting with delegates after taking charge in Kanpur, Shri Natwar Goyal outlined strategic priorities for revitalizing MSMEs across Uttar Pradesh."
  },
  {
    id: "vid-02",
    titleHi: "व्यापारिक सम्मेलन में व्यापारियों के अधिकारों एवं सुरक्षा पर उद्बोधन",
    titleEn: "Keynote Address on Traders' Rights & Security at State Convention",
    date: "2024",
    category: "speech",
    videoSrc: "https://ik.imagekit.io/avdarinn/natwarlal/videos/VID-20261015-WA0358.mp4",
    sourceHi: "भारतीय उद्योग व्यापार मंडल प्रांतीय अधिवेशन",
    sourceEn: "Bharatiya Udyog Vyapar Mandal State Assembly",
    duration: "4:30",
    descriptionHi: "व्यापारी सम्मेलन के मंच से व्यापारियों के वैधानिक अधिकारों, व्यापारिक सुरक्षा और कर प्रक्रियाओं के सरलीकरण पर विचार प्रस्तुत किए।",
    descriptionEn: "Keynote presentation advocating simplified commercial regulations, prompt grievance redressal, and institutional insurance for retailers."
  },
  {
    id: "vid-03",
    titleHi: "अखिल भारतीय वैश्य महासम्मेलन में सामाजिक समरसता एवं युवा उत्थान",
    titleEn: "Address on Social Harmony & Youth Development at Vaishya Mahasammelan",
    date: "2023",
    category: "speech",
    videoSrc: "https://ik.imagekit.io/avdarinn/natwarlal/videos/VID-20261015-WA0359.mp4",
    sourceHi: "अखिल भारतीय वैश्य महासम्मेलन, उ०प्र०",
    sourceEn: "All India Vaishya Mahasammelan UP",
    duration: "4:20",
    descriptionHi: "समाज के कमजोर वर्गों के आर्थिक व सामाजिक उत्थान, सामूहिक कन्या विवाह आयोजन और युवाओं के कौशल संवर्धन पर सारगर्भित उद्बोधन।",
    descriptionEn: "Inspiring civic address focused on social unity, educational scholarships for deserving students, and mass marriage initiatives."
  },
  {
    id: "vid-04",
    titleHi: "नागरिक अभिनंदन, स्वागत समारोह एवं वरिष्ठ जनसंवाद",
    titleEn: "Grand Civic Felicitation & Community Welcome Ceremony",
    date: "2024",
    category: "event",
    videoSrc: "https://ik.imagekit.io/avdarinn/natwarlal/videos/VID-20261015-WA0354.mp4",
    sourceHi: "नागरिक समाज एवं व्यापार प्रतिनिधि मंडल",
    sourceEn: "Civic Society & Merchant Delegates",
    duration: "2:45",
    descriptionHi: "राज्यमंत्री स्तर का दायित्व मिलने पर प्रदेश के विभिन्न जनपदों से पधारे व्यापारिक व सामाजिक प्रतिनिधियों द्वारा भव्य नागरिक सम्मान एवं आत्मीय स्वागत।",
    descriptionEn: "Warm reception and felicitation ceremony organized by leading trade associations and civil society bodies honoring his appointment."
  },
  {
    id: "vid-05",
    titleHi: "व्यापारी सम्मेलन में विशिष्ट अभिनंदन एवं पुष्पमाला अर्पण",
    titleEn: "Honorary Welcome at Trade Association Gathering",
    date: "2023",
    category: "event",
    videoSrc: "https://ik.imagekit.io/avdarinn/natwarlal/videos/VID-20261015-WA0346.mp4",
    sourceHi: "जिला उद्योग व्यापार प्रतिनिधि मंडल",
    sourceEn: "District Trade Representation Forum",
    duration: "1:30",
    descriptionHi: "स्थानीय व्यापारिक समस्याओं के निवारण हेतु आयोजित संगोष्ठी में व्यापारियों द्वारा पुष्पगुच्छ व साफा पहनाकर गर्मजोशी से स्वागत।",
    descriptionEn: "Reception accorded by district commercial leaders discussing local marketplace infrastructure and trader safety."
  },
  {
    id: "vid-06",
    titleHi: "सार्वजनिक सम्मान, शॉल एवं स्मृति चिन्ह अर्पण समारोह",
    titleEn: "Felicitation with Traditional Shawl and Memento of Honor",
    date: "2023",
    category: "ceremonies" as any,
    videoSrc: "https://ik.imagekit.io/avdarinn/natwarlal/videos/VID-20261015-WA0341.mp4",
    sourceHi: "सामाजिक कल्याण एवं सांस्कृतिक न्यास",
    sourceEn: "Social Welfare & Cultural Foundation",
    duration: "0:45",
    descriptionHi: "सार्वजनिक जीवन में चार दशकों के निष्कलंक योगदान हेतु सामाजिक संस्थाओं द्वारा शॉल एवं स्मृति चिन्ह भेंट कर कृतज्ञता ज्ञापन।",
    descriptionEn: "Presentation of honorary shawl and commemorative citation acknowledging four decades of selfless community leadership."
  }
];
