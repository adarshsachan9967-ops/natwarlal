export interface AwardItem {
  id: string;
  year: string;
  titleHi: string;
  titleEn: string;
  conferredByHi: string;
  conferredByEn: string;
  dignitaryHi?: string;
  dignitaryEn?: string;
  descriptionHi: string;
  descriptionEn: string;
  categoryHi: string;
  categoryEn: string;
  sourceNote: string;
  image?: string;
}

export const AWARDS_LIST: AwardItem[] = [
  {
    id: "vaishya-samaj-ratna-2009",
    year: "2009",
    titleHi: "वैश्य समाज रत्न एवं वैश्य जागृति पत्रिका विमोचन",
    titleEn: "Vaishya Samaj Ratna Award & Magazine Inauguration",
    conferredByHi: "अखिल भारतीय वैश्य संगठन एवं वैश्य जागृति पत्रिका",
    conferredByEn: "All India Vaishya Federation & Vaishya Jagriti Patrika",
    dignitaryHi: "महामहिम डॉ० अनिरुद्ध जगन्नाथ जी (राष्ट्रपति, मॉरिशस गणराज्य)",
    dignitaryEn: "H.E. Dr. Anerood Jugnauth (President, Republic of Mauritius)",
    descriptionHi: "मॉरिशस गणराज्य के तत्कालीन राष्ट्रपति महामहिम डॉ० अनिरुद्ध जगन्नाथ जी द्वारा सामाजिक समरसता, समाज सेवा एवं सामुदायिक जागरण में अप्रतिम योगदान के लिए 'वैश्य समाज रत्न' से सम्मानित किया गया। इसी अवसर पर 'वैश्य जागृति' पत्रिका का औपचारिक विमोचन भी संपन्न हुआ।",
    descriptionEn: "Conferred the prestigious 'Vaishya Samaj Ratna' by His Excellency Dr. Anerood Jugnauth, President of the Republic of Mauritius, in recognition of exemplary social service and community leadership. The commemorative issue of 'Vaishya Jagriti' magazine was officially released on this momentous occasion.",
    categoryHi: "अंतर्राष्ट्रीय एवं सामाजिक सम्मान",
    categoryEn: "International & Social Leadership",
    sourceNote: "Natwargoyal New11.pdf, Page 1 (Point 8)",
    image: "/images/gallery/with-rss-chief-mohan-bhagwat.jpg"
  },
  {
    id: "kashi-gaurav-ratna-2009",
    year: "2009",
    titleHi: "काशी गौरव रत्न - 2009",
    titleEn: "Kashi Gaurav Ratna Award 2009",
    conferredByHi: "जनता हिताय समिति, उत्तर प्रदेश (पंजी.)",
    conferredByEn: "Janata Hitay Samiti, Uttar Pradesh (Registered)",
    descriptionHi: "काशी के बौद्धिक, सामाजिक, सांस्कृतिक एवं साहित्यिक क्षेत्र में कार्य करने वाली प्रतिष्ठित पंजीकृत संस्था 'जनता हिताय समिति' द्वारा काशी क्षेत्र के विशिष्ट व्यक्तित्व के रूप में 'काशी गौरव रत्न' सम्मान से अलंकृत किया गया।",
    descriptionEn: "Bestowed with the distinguished 'Kashi Gaurav Ratna' by Janata Hitay Samiti UP, an eminent registered body dedicated to intellectual, social, cultural, and literary advancement in Varanasi.",
    categoryHi: "विशिष्ट नागरिक एवं सांस्कृतिक सम्मान",
    categoryEn: "Civic & Cultural Honor",
    sourceNote: "Natwargoyal New11.pdf, Page 1 (Point 9)",
    image: "/images/gallery/with-defence-minister-rajnath-singh.jpg"
  },
  {
    id: "kadambari-kala-2008",
    year: "2008",
    titleHi: "कादम्बरी कला एवं नाट्य परिषद सम्मान",
    titleEn: "Kadambari Kala & Natya Parishad State Honor",
    conferredByHi: "कादम्बरी कला, नाट्य परिषद, उत्तर प्रदेश",
    conferredByEn: "Kadambari Kala & Natya Parishad, Uttar Pradesh",
    descriptionHi: "उत्तर प्रदेश की पारंपरिक कला, रंगमंच, नाट्य विधाओं और सांस्कृतिक गतिविधियों के संवर्धन एवं सामाजिक संरक्षण हेतु कादम्बरी कला नाट्य परिषद द्वारा सम्मानित किया गया।",
    descriptionEn: "Honored by the Kadambari Kala & Natya Parishad of Uttar Pradesh for dedicated patronage and promotion of regional theatre, performing arts, and indigenous cultural activities.",
    categoryHi: "कला एवं सांस्कृतिक सम्मान",
    categoryEn: "Arts & Cultural Patronage",
    sourceNote: "Natwargoyal New11.pdf, Page 1 (Point 10)",
    image: "/images/gallery/with-party-leader-bouquet.jpg"
  }
];

export const AWARDS_DATA = AWARDS_LIST;

