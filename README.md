# Official Website of Shri Vaishya Natwar Goyal
## श्री वैश्य नटवर गोयल — आधिकारिक वेबसाइट

> **Vice Chairman, Uttar Pradesh Small Industries Corporation Ltd. (UPSIC)**  
> *Minister of State Rank, Government of Uttar Pradesh*  
> National Vice President, Akhil Bharatiya Vaishya Mahasammelan & Bharatiya Udyog Vyapar Mandal

---

## 🏛️ Project Overview

This is the production-ready, full-stack bilingual official public profile, political journey, media archive, and content management website for **Shri Vaishya Natwar Goyal** (वैश्य नटवर गोयल).

Every fact, position, date, and historical milestone is strictly sourced from:
1. **`Natwargoyal New11.pdf`** — 7-page primary biographical dossier containing authenticated dates, historical organizational positions (1984–2024), educational credentials (B.Com), family lineage, and high-resolution event photographs.
2. **Official Government & Public Media Portals**:
   - [Uttar Pradesh Small Industries Corporation (UPSIC)](https://ho.upsic.in/about)
   - [LiveHindustan — Appointment & Welcome Ceremony](https://www.livehindustan.com/uttar-pradesh/lucknow/story-indian-business-committee-honors-new-vice-president-natwar-goyal-in-uttar-pradesh-172683967679079.html)
   - [LiveHindustan — Raebareli Commercial & MSME Visit](https://www.livehindustan.com/uttar-pradesh/raebareli/story-natwar-goyal-up-small-industries-corporation-vp-welcomed-in-raebareli-172823823253070.html)
   - Official Verified Instagram Profile: [`@natwargoyal4bjp`](https://www.instagram.com/natwargoyal4bjp)

---

## 🌟 Key Architecture & Features

### 1. Bilingual Architecture (हिन्दी / English)
- **Primary Editorial Language**: Professional, dignified Hindi.
- **Secondary Language**: Polished, professional English.
- **Seamless State & URL Routing**:
  - Global `LanguageProvider` with reactive `useLanguage()` hook.
  - Dedicated localized URLs: `/hi`, `/en`, `/hi/biography`, `/en/biography`, etc.
  - Persistent language preference stored in browser `localStorage`.

### 2. Cloud Database & Media CDN
- **MongoDB Atlas**: Full database persistence for contact inquiries, citizen feedback, and site content.
- **ImageKit CDN**: All 40+ media assets (34 authentic photographs + 6 videos) pushed to ImageKit with automatic format optimization (`tr:f-auto,q-80`) and global CDN delivery.

### 3. Website Pages & Routing
| Route | Hindi Title | English Title | Description |
|---|---|---|---|
| `/` | मुख्य पृष्ठ | Home | Hero carousel banner, verified milestones with sticky leadership spotlight, photo archive, video library |
| `/about` | संक्षिप्त परिचय | About | Executive summary, core principles, areas of public engagement |
| `/biography` | विस्तृत जीवन परिचय | Detailed Biography | Full editorial narrative, family lineage, early Varanasi trade leadership, MSME initiatives |
| `/political-journey` | सांगठनिक व सार्वजनिक यात्रा | Political Journey | Interactive chronological timeline (1984–2024) with category filters |
| `/social-work` | सामाजिक एवं लोक कल्याण | Social Activities | Documented flood relief, mass marriage sammelans, youth education, community welfare |
| `/awards` | सम्मान एवं उपाधियां | Awards & Honors | Vaishya Samaj Ratna, civic felicitations, citations |
| `/gallery` | फोटो गैलरी | Photo Gallery | High-resolution masonry grid with category filters, full-screen lightbox |
| `/media` | वीडियो एवं संबोधन | Media & Video | Public addresses, speeches, and video recordings with responsive HTML5 player |
| `/news` | समाचार एवं प्रेस | News & Media | Verified press reports, filterable by category, original source links |
| `/news/[slug]` | समाचार विस्तार | Article Detail | Complete news report with verified source attribution |
| `/contact` | संपर्क एवं कार्यालय | Contact & Office | Validated public contact form directly connected to MongoDB Atlas |
| `/privacy-policy` | गोपनीयता नीति | Privacy Policy | Transparent data policy, no unconsented tracking |
| `/accessibility` | सुगमता विवरण | Accessibility | WCAG compliant, keyboard navigable |

### 4. Admin Content Management Portal (CMS)
- Secure portal located at `/admin/login`
- **Default Administrative Credentials**:
  - **Username**: `admin`
  - **Password**: `Natwar@2024` *(can be changed directly inside `/admin/settings`)*

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or 20.x+
- npm 9.x+

### Local Development
```bash
# Clone or navigate to the directory
git clone https://github.com/adarshsachan9967-ops/natwarlal.git
cd natwarlal

# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Production Build
```bash
npm run build
npm run start
```
