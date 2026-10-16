export interface OfficialUpdate {
  id: string;
  date: string;
  titleHi: string;
  titleEn: string;
  category: "press_release" | "meeting" | "notification" | "public_event";
  status: "completed" | "ongoing" | "upcoming";
  excerptHi: string;
  excerptEn: string;
  contentHi: string;
  contentEn: string;
  venueHi?: string;
  venueEn?: string;
}

export const OFFICIAL_UPDATES: OfficialUpdate[] = [
  {
    id: "up-2024-01",
    date: "14 सितम्बर 2024",
    titleHi: "उत्तर प्रदेश लघु उद्योग निगम के उपाध्यक्ष पद का विधिवत कार्यभार ग्रहण",
    titleEn: "Formal Assumption of Office as Vice Chairman, UPSIC",
    category: "notification",
    status: "completed",
    excerptHi: "फजलगंज कानपुर स्थित मुख्यालय में अध्यक्ष श्री राकेश गर्ग एवं वरिष्ठ प्रशासनिक अधिकारियों की उपस्थिति में कार्यभार ग्रहण।",
    excerptEn: "Assumed official responsibilities at UPSIC headquarters, Fazalganj, Kanpur in the presence of Chairman Rakesh Garg and senior directors.",
    contentHi: "उत्तर प्रदेश शासन के आदेशानुसार श्री वैश्य नटवर गोयल ने फजलगंज, कानपुर स्थित उत्तर प्रदेश लघु उद्योग निगम के मुख्यालय में उपाध्यक्ष पद का कार्यभार विधिवत ग्रहण किया। इस अवसर पर उन्होंने निगम के समस्त प्रभागों की कार्यप्रणाली का अवलोकन किया और औद्योगिक प्रगति को प्राथमिकता देने का आह्वान किया।",
    contentEn: "Pursuant to the official notification of the Government of Uttar Pradesh, Shri Vaishya Natwar Goyal formally took charge as Vice Chairman at the corporate headquarters of UPSIC in Fazalganj, Kanpur. He inspected divisional workflows and emphasized accelerating industrial assistance.",
    venueHi: "यूपीएसआईसी मुख्यालय, फजलगंज, कानपुर",
    venueEn: "UPSIC Headquarters, Fazalganj, Kanpur"
  },
  {
    id: "up-2024-02",
    date: "28 सितम्बर 2024",
    titleHi: "प्रदेश के औद्योगिक आस्थानों के आधुनिकीकरण हेतु समीक्षा बैठक",
    titleEn: "Review Session on Modernization of State Industrial Estates",
    category: "meeting",
    status: "completed",
    excerptHi: "औद्योगिक पार्कों में सड़क, बिजली, जल निकासी और कच्चे माल वितरण केंद्रों की समीक्षा।",
    excerptEn: "Comprehensive review of roads, power supply, drainage, and raw material logistics across state manufacturing hubs.",
    contentHi: "उपाध्यक्ष श्री नटवर गोयल की अध्यक्षता में निगम के तकनीकी एवं अभियंत्रण अधिकारियों की उच्चस्तरीय बैठक संपन्न हुई। बैठक में पुराने औद्योगिक क्षेत्रों के त्वरित कायाकल्प के निर्देश जारी किए गए।",
    contentEn: "A high-level session with engineering and administrative heads convened under Vice Chairman Natwar Goyal, directing accelerated turnaround for infrastructure revamping in older industrial sectors.",
    venueHi: "समीक्षा सभागार, कानपुर",
    venueEn: "Review Auditorium, Kanpur"
  },
  {
    id: "up-2024-03",
    date: "06 अक्टूबर 2024",
    titleHi: "रायबरेली जनपद के औद्योगिक एवं व्यापारिक प्रतिनिधियों से संवाद",
    titleEn: "Public Consultation with Industrial and Merchant Delegations in Raebareli",
    category: "public_event",
    status: "completed",
    excerptHi: "व्यापार मण्डल एवं स्थानीय उद्यमियों के साथ संवाद कर समस्याओं का प्राथमिक संज्ञान लिया गया।",
    excerptEn: "Direct dialogue with regional trade bodies and local enterprise owners taking direct cognizance of operational challenges.",
    contentHi: "रायबरेली जिले के प्रवास के दौरान व्यापारियों और उद्यमियों द्वारा प्रस्तुत मांग-पत्र पर सकारात्मक कार्रवाई हेतु संबंधित विभागों को निर्देशित किया गया।",
    contentEn: "During his official tour in Raebareli district, Shri Goyal examined merchant petitions and instructed coordinated departmental action.",
    venueHi: "व्यापारिक केंद्र, रायबरेली",
    venueEn: "Commercial Center, Raebareli"
  },
  {
    id: "up-2024-04",
    date: "आगामी कार्यक्रम",
    titleHi: "सूक्ष्म एवं लघु उद्यमियों हेतु राज्यस्तरीय परामर्श संगोष्ठी",
    titleEn: "Statewide Advisory Seminar for Micro & Small Entrepreneurs",
    category: "press_release",
    status: "upcoming",
    excerptHi: "युवा उद्यमियों को राज्य सरकार की ऋण, अनुदान और तकनीकी योजनाओं की विस्तृत जानकारी प्रदान करने हेतु आयोजन प्रस्तावित।",
    excerptEn: "Proposed workshop providing emerging entrepreneurs detailed orientation on government credit and subsidy schemes.",
    contentHi: "प्रदेश के नवोदित उद्यमियों को उद्यम स्थापना, कच्चे माल की सुलभता तथा विपणन सहायता की जानकारी उपलब्ध कराने हेतु यूपीएसआईसी द्वारा विशेष कार्यशाला आयोजित की जाएगी।",
    contentEn: "A dedicated workshop organized by UPSIC to mentor emerging startup founders on project setup, supply chain access, and institutional marketing.",
    venueHi: "लखनऊ / कानपुर",
    venueEn: "Lucknow / Kanpur"
  }
];
