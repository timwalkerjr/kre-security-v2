## 1. Site Info

SITE_TYPE: Corporate Telecom & IT Provider
HTML_LANG: en

## 2. Color Token Mapping

```
---DESIGN_MD_START---
## Visual Theme
Modern, high-tech dark enterprise telecom website with a deep navy palette, crisp glass-morphism panels, vivid electric green accents, and ultra-clean Inter typography.

## Colors
- background: hsl(211, 66%, 10%)
- foreground: hsl(206, 43%, 95%)
- muted-foreground: hsl(209, 23%, 69%)
- border: hsl(210, 30%, 18%)
- surface: hsl(210, 48%, 13%)
- primary: hsl(0, 0%, 100%)
- primary-foreground: hsl(213, 64%, 11%)
- primary-hover: hsl(206, 43%, 92%)
- secondary: hsl(210, 40%, 16%)
- secondary-foreground: hsl(206, 43%, 95%)
- secondary-hover: hsl(210, 40%, 22%)
- dark-background: hsl(209, 68%, 7%)
- dark-foreground: hsl(0, 0%, 100%)
- dark-muted-foreground: hsl(209, 23%, 69%)
- dark-border: hsl(210, 30%, 15%)
- accent: hsl(97, 75%, 64%)

## Page Background
solid hsl(211, 66%, 10%) with subtle radial light glows and a fine background grid: `background-image: radial-gradient(55% 65% at 80% 32%, rgba(46, 104, 168, 0.2), rgba(0, 0, 0, 0) 62%), radial-gradient(38% 46% at 74% 46%, rgba(97, 149, 63, 0.12), rgba(0, 0, 0, 0) 62%), radial-gradient(60% 60% at 12% 92%, rgba(20, 52, 86, 0.35), rgba(0, 0, 0, 0) 68%), linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px); background-size: 100% 100%, 100% 100%, 100% 100%, 60px 60px, 60px 60px;`

## Typography

- Heading font: REQUIRED slug `inter` (source: "Inter", available weights: 400, 500, 600, 700, 800, 900)
- Body font: REQUIRED slug `inter` (source: "Inter", available weights: 400, 500, 600, 700, 800)

Typography scale:
- h1: text-[62.4px] font-extrabold leading-[61.15px] tracking-[-2.18px]
- h2: text-[44px] font-extrabold leading-[47.52px] tracking-[-1.1px]
- h3: text-[18.24px] font-bold leading-[27.36px]
- h4: text-[12.8px] font-bold leading-[19.2px] uppercase tracking-[1.28px]
- body: text-[17.28px] font-normal leading-[28.51px]

## Components
- Buttons:
  - Primary button: Solid white `bg-white text-[#0a1a2e] font-semibold text-[16px] px-[28px] py-[15px] rounded-[10px] hover:bg-[#eef3f7] transition-all shadow-sm`
  - Outline/Ghost button: Semi-transparent `border border-white/20 text-[#e6ecf2] font-semibold text-[16px] px-[28px] py-[15px] rounded-[10px] hover:border-[#94e760] hover:text-white transition-all`
  - Small Primary button (Nav): `bg-white text-[#0a1a2e] font-semibold text-[15.2px] px-[20px] py-[10px] rounded-[10px] hover:bg-[#eef3f7] transition-all`
  - Small Outline button: `border border-white/20 text-white font-semibold text-[15.2px] px-[22px] py-[12px] rounded-[10px]`
- Cards:
  - Service Card: `bg-white/[0.035] border border-white/[0.09] rounded-[16px] p-[32px] hover:border-[#94e760]/40 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.3)] transition-all`
  - Client Support Panel: `bg-[#0c2136]/90 backdrop-blur-md border border-[#94e760]/22 rounded-[20px] p-[24px] shadow-2xl`
  - Tag pill: `bg-white/[0.035] border border-white/[0.09] text-[#b8c5d2] text-[14.4px] px-[16px] py-[6px] rounded-full`
---DESIGN_MD_END---
```

## 3. Navigation Spec

NAV_FULL_WIDTH: true
NAV_WIDTH: 100%
NAV_BACKGROUND: rgba(9, 26, 44, 0.82)
NAV_BORDER_RADIUS: none
NAV_POSITION: sticky
NAV_SHADOW: 0 1px 0 rgba(255, 255, 255, 0.08)
SCROLL_BEHAVIOR: sticky with backdrop-filter: blur(12px)
NAV_DIVIDERS: Bottom 1px border `rgba(255, 255, 255, 0.08)`

Link style:
- fontSize: text-[14.88px]
- fontWeight: font-medium (500)
- fontFamily: Inter
- textTransform: normal-case, do NOT use uppercase
- letterSpacing: tracking-normal, do NOT use tracking-wide
- color: text-[#c4d1dd] hover:text-white transition-colors
- link row layout: distribution right, pitchPx 32px (gap-[32px] items-center)
- SINGLE LINE: whitespace-nowrap flex-nowrap
- menu vertical placement: middle

Logo:
- Presence: Net Express logo image linking to `/#home`
- Size: w-[169px] h-[31px]
- Position: inside-nav, left-aligned
- Badge: false
- Logo swap: none (same logo throughout)

Header right content:
- Phone number: `Call ` + `(855) 313-2300` in bold white (`font-semibold text-white text-[14.88px] mr-2`)
- CTA button: `Get a Quote` (`bg-white text-[#0a1a2e] font-semibold text-[15.2px] px-[18px] py-[9px] rounded-[10px] hover:bg-[#eef3f7] transition-all`)

Dropdowns: None

## 4. Section Plan

### 1. Hero Section id="home"
- theme: DARK
- background: bg-transparent (sits directly on page dark gradient background)
- contained panel: none
- text: text-[#9fb1c2]
- heading color: text-[#eef3f7] with second line highlighted in text-[#94e760]
- heading size: text-[62.4px] font-extrabold leading-[61.15px] tracking-[-2.18px]
- heading transform/tracking: normal-case, tracking-[-2.18px]
- body size: text-[18.56px] font-normal leading-[29.7px]
- text alignment/placement: left-aligned (items-start text-left)
- layout: 2-column grid (`grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-center`), left content spanning 7 cols, right support panel spanning 5 cols. Container max-w-[1180px] mx-auto px-6.
- padding: pt-[72px] pb-[48px]
- content:
  - Eyebrow: `— VOIP · BUSINESS INTERNET · MANAGED IT` (`text-[#94e760] text-[13.6px] font-semibold tracking-wider flex items-center gap-2 mb-4`)
  - H1: `Always on.` <br><span class="text-[#94e760]">`Always local.`</span>
  - Body paragraph: `Business phone, internet, and IT from one Michigan provider — engineered so you never miss a call, a customer, or a beat.`
  - Button group:
    - Primary CTA: Solid white button `Get a Free Quote →` (`bg-white text-[#0a1a2e] font-semibold text-[16px] px-[28px] py-[15px] rounded-[10px] hover:bg-[#eef3f7] transition-all`)
    - Ghost CTA: Outline button `See What We Do` (`border border-white/20 text-[#e6ecf2] font-semibold text-[16px] px-[28px] py-[15px] rounded-[10px] hover:border-[#94e760] hover:text-white transition-all`)
  - Sub-CTA Trust Pills:
    - `● Locally owned & operated` (`text-[#b8c5d2] text-[13.6px] flex items-center gap-2`, green dot `w-2 h-2 rounded-full bg-[#94e760]`)
    - `● One provider, one bill` (`text-[#b8c5d2] text-[13.6px] flex items-center gap-2`, green dot `w-2 h-2 rounded-full bg-[#94e760]`)
  - Right Column (Client Support Center Panel):
    - Container: `bg-[#0c2136]/90 border border-[#94e760]/22 rounded-[20px] p-[24px] shadow-2xl`
    - Header: Title `Client Support Center` (`text-white font-bold text-[18px] text-center mb-1`), Subtitle `● Online · 24/7 US-based support` (`text-[#9fb1c2] text-[12.48px] flex items-center justify-center gap-1.5 mb-5`, green pulsing dot `bg-[#94e760]`)
    - 5 interactive support rows (`bg-white/[0.035] border border-white/[0.09] hover:bg-[#94e760]/[0.07] hover:border-[#94e760]/50 rounded-[12px] p-[14px_16px] flex items-center justify-between transition-all group mb-2.5`):
      1. `Remote Support` (Headset/Support icon in green badge `bg-[#94e760]/13 text-[#94e760] p-2 rounded-[9px]`, label `Remote Support`, chevron right arrow)
      2. `Open a Support Ticket` (Chat/Ticket icon in green badge, chevron right arrow)
      3. `Pay Your Invoice` (Credit card/Payment icon in green badge, chevron right arrow)
      4. `Client Portal` (User/Portal icon in green badge, chevron right arrow)
      5. `Call Support` (Phone icon in green badge, chevron right arrow, href `tel:+18553132300`)
- backgroundImage: none
- overlay: none
- slider: none
- accordion: none
- tabs: none
- form: none
- transition to next: straight edge

---

### 2. Trust Highlights Bar id="trust-bar"
- theme: DARK
- background: bg-[#0c2136]/50 border-y border-white/[0.06]
- contained panel: none
- text: text-[#b8c5d2] text-[14.4px] font-medium
- layout: flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-w-[1180px] mx-auto px-6
- padding: py-[20px]
- content:
  - Item 1: `★★★★★ 5.0 on Google Reviews` (gold stars `text-[#f59e0b]`)
  - Item 2: `◆ Single-source phone, data & internet` (green diamond `text-[#94e760]`)
  - Item 3: `◆ Serving Michigan & the Midwest` (green diamond `text-[#94e760]`)
  - Item 4: `◆ No expensive PBX hardware` (green diamond `text-[#94e760]`)
- backgroundImage: none
- overlay: none

---

### 3. Services Section id="services"
- theme: DARK
- background: bg-transparent
- contained panel: none
- text: text-[#9fb1c2]
- heading color: text-[#eef3f7]
- heading size: text-[44px] font-extrabold leading-[47.52px] tracking-[-1.1px]
- body size: text-[17.28px] font-normal leading-[28.51px]
- text alignment/placement: left-aligned
- layout: max-w-[1180px] mx-auto px-6. Grid with 3 columns (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[48px]`).
- padding: py-[92px]
- content:
  - Eyebrow: `— WHAT WE DO` (`text-[#94e760] text-[13.6px] font-semibold tracking-wider mb-3`)
  - H2: `Everything your business needs to stay connected.`
  - Subtitle: `Voice, data, internet, and IT — designed, provisioned, and supported by one local team.`
  - 6 Feature Cards (`bg-white/[0.035] border border-white/[0.09] rounded-[16px] p-[32px] hover:border-[#94e760]/40 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.3)] transition-all flex flex-col justify-between`):
    1. Card 1:
       - Icon: Phone icon (`bg-[#94e760]/12 text-[#94e760] w-12 h-12 rounded-[11px] flex items-center justify-center mb-5`)
       - Title: `Hosted VoIP` (h3: `text-[18.24px] font-bold text-[#eef3f7] mb-2.5`)
       - Body: `A full cloud phone system with multi-location extension dialing, auto-attendants, and voicemail-to-email — no on-site PBX to buy or maintain.`
    2. Card 2:
       - Icon: Sliders/Settings icon (`bg-[#94e760]/12 text-[#94e760] w-12 h-12 rounded-[11px] flex items-center justify-center mb-5`)
       - Title: `Tailored Solutions` (h3: `text-[18.24px] font-bold text-[#eef3f7] mb-2.5`)
       - Body: `No two businesses run the same. We design and build a communications and IT system around how yours actually works — not a one-size-fits-all package.`
    3. Card 3:
       - Icon: Fiber/Wifi signal icon (`bg-[#94e760]/12 text-[#94e760] w-12 h-12 rounded-[11px] flex items-center justify-center mb-5`)
       - Title: `Business Internet & Fiber` (h3: `text-[18.24px] font-bold text-[#eef3f7] mb-2.5`)
       - Body: `Dedicated high-speed connectivity — up to 1 Gbps on fiber — built for business uptime, not best-effort. Redundant options available.`
    4. Card 4:
       - Icon: Printer/Fax icon (`bg-[#94e760]/12 text-[#94e760] w-12 h-12 rounded-[11px] flex items-center justify-center mb-5`)
       - Title: `Virtual Fax (FaxBridge)` (h3: `text-[18.24px] font-bold text-[#eef3f7] mb-2.5`)
       - Body: `Send and receive faxes by email and web — no machine, no dedicated line. Reliable and compliant for healthcare, legal, and finance.`
       - Link: `Learn about FaxBridge →` (`text-[#94e760] text-[14.4px] font-semibold mt-4 inline-block hover:underline`)
    5. Card 5:
       - Icon: Shield/Security icon (`bg-[#94e760]/12 text-[#94e760] w-12 h-12 rounded-[11px] flex items-center justify-center mb-5`)
       - Title: `Managed IT` (h3: `text-[18.24px] font-bold text-[#eef3f7] mb-2.5`)
       - Body: `Network management, security, and responsive support from a local team — so your technology just works and someone's always accountable.`
    6. Card 6:
       - Icon: Cellular/Tower antenna icon (`bg-[#94e760]/12 text-[#94e760] w-12 h-12 rounded-[11px] flex items-center justify-center mb-5`)
       - Title: `4G LTE Failover` (h3: `text-[18.24px] font-bold text-[#eef3f7] mb-2.5`)
       - Body: `Automatic wireless backup keeps you online when the wired line goes down. Your phones keep ringing and your business keeps running.`
- backgroundImage: none
- overlay: none

---

### 4. Why Net Express Section id="why"
- theme: DARK
- background: bg-[#0c2136]/60 border-y border-white/[0.06]
- contained panel: none
- text: text-[#9fb1c2]
- heading color: text-[#eef3f7]
- heading size: text-[44px] font-extrabold leading-[47.52px] tracking-[-1.1px]
- body size: text-[17.28px] font-normal leading-[28.51px]
- layout: 2-column grid (`grid grid-cols-1 lg:grid-cols-2 gap-[56px] items-center max-w-[1180px] mx-auto px-6`)
- padding: py-[92px]
- content:
  - Left Column:
    - Eyebrow: `— WHY NET EXPRESS` (`text-[#94e760] text-[13.6px] font-semibold tracking-wider mb-3`)
    - H2: `One provider instead of four.`
    - Paragraph: `Most businesses juggle separate vendors for phone, internet, fax, and IT — four bills, four support numbers, and finger-pointing when something breaks. We deliver all of it as a single, integrated service, backed by a local Michigan team that's accountable end to end.`
    - CTA button: `Talk to a specialist` (`bg-white text-[#0a1a2e] font-semibold text-[15.2px] px-[24px] py-[13px] rounded-[10px] hover:bg-[#eef3f7] transition-all mt-6 inline-block`)
  - Right Column (Feature Checklist):
    - 2-column grid of check items (`grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6`):
      1. Item 1: `✓ One monthly bill`
      2. Item 2: `✓ One number for support`
      3. Item 3: `✓ Keep your phone numbers`
      4. Item 4: `✓ No PBX hardware to buy`
      5. Item 5: `✓ Multi-location dialing`
      6. Item 6: `✓ Local, US-based team`
      - Checkmark badge: `bg-[#94e760]/15 text-[#94e760] w-6 h-6 rounded-[6px] flex items-center justify-center mr-3 shrink-0`
      - Label: `text-[#eef3f7] font-medium text-[15.68px]`
- backgroundImage: none
- overlay: none

---

### 5. Service Area Section id="areas"
- theme: DARK
- background: bg-transparent
- contained panel: none
- text: text-[#9fb1c2]
- heading color: text-[#eef3f7]
- heading size: text-[44px] font-extrabold leading-[47.52px] tracking-[-1.1px]
- body size: text-[17.28px] font-normal leading-[28.51px]
- layout: 2-column grid (`grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-center max-w-[1180px] mx-auto px-6`)
- padding: py-[92px]
- content:
  - Left Column (7 cols):
    - Eyebrow: `— SERVICE AREA` (`text-[#94e760] text-[13.6px] font-semibold tracking-wider mb-3`)
    - H2: `Proudly serving Michigan & the Midwest.`
    - Paragraph: `Headquartered in Clarkston, we support businesses from single storefronts to multi-location enterprises across the region — with the responsiveness of a local partner and the reach of a full-service carrier.`
    - City Tag Pills row (`flex flex-wrap gap-2.5 mt-6`):
      - Tags: `Clarkston`, `Metro Detroit`, `Oakland County`, `Flint`, `Grand Rapids`, `Lansing`, `Ann Arbor`, `& the Midwest`
      - Tag styling: `bg-white/[0.035] border border-white/[0.09] text-[#b8c5d2] text-[14.4px] px-[16px] py-[6px] rounded-full`
  - Right Column (5 cols - Area Card):
    - Container: `bg-white/[0.035] border border-white/[0.09] rounded-[18px] p-[36px] text-center`
    - Speed stat: `1 Gbps` (`text-[#94e760] font-extrabold text-[48px] leading-none mb-2`)
    - Speed subtitle: `dedicated fiber speeds available` (`text-[#b8c5d2] text-[15px] mb-6`)
    - Divider: `w-full h-[1px] bg-white/[0.09] my-6`
    - Location info:
      - `Net Express HQ` (`text-white font-bold text-[16px] mb-1`)
      - `6825 Dixie Hwy` (`text-[#9fb1c2] text-[14px]`)
      - `Clarkston, MI 48346` (`text-[#9fb1c2] text-[14px]`)
- backgroundImage: none
- overlay: none

---

### 6. Testimonial Section id="reviews"
- theme: DARK
- background: bg-transparent
- contained panel: none
- text: text-[#eef3f7]
- layout: single column, centered (`max-w-[860px] mx-auto px-6 text-center`)
- padding: py-[72px]
- content:
  - Stars: `★★★★★` (`text-[#f59e0b] text-[22px] tracking-widest mb-6 flex justify-center gap-1`)
  - Quote: `"When we started looking at VoIP options, most providers wanted us to rip out our Avaya PBX and start from scratch. Net Express met us where we were and made the switch painless."` (`text-[26px] md:text-[30px] font-bold text-white leading-snug mb-6 italic`)
  - Attribution: `Michael Torres` · `5.0 on Google Reviews` (`text-[#9fb1c2] text-[16px] font-normal`)
- backgroundImage: none
- overlay: none

---

### 7. FAQ Section id="faq"
- theme: DARK
- background: bg-transparent
- contained panel: none
- text: text-[#9fb1c2]
- heading color: text-[#eef3f7]
- heading size: text-[44px] font-extrabold leading-[47.52px] tracking-[-1.1px]
- body size: text-[17.28px] font-normal leading-[28.51px]
- layout: centered header + vertical stack of accordion items (`max-w-[860px] mx-auto px-6`)
- padding: py-[92px]
- content:
  - Eyebrow: `— QUESTIONS` (`text-[#94e760] text-[13.6px] font-semibold tracking-wider text-center mb-3`)
  - H2: `Frequently asked questions` (`text-center`)
  - Subtitle: `Everything you need to know about switching to Net Express.` (`text-center text-[#9fb1c2] mb-10`)
- accordion:
  1. Question: `What does Net Express do?`
     Answer: `Net Express is a single-source provider for business phone, internet, and IT. We deliver Hosted VoIP, high-speed business internet and fiber, virtual fax, managed IT, and 4G LTE failover — all from one local Michigan team, on one bill.`
  2. Question: `Can I keep my existing phone numbers?`
     Answer: `Yes. We port your current business numbers to our network, so your customers keep reaching you at the numbers they already know — with no interruption.`
  3. Question: `Do I need to buy a phone system or PBX hardware?`
     Answer: `No. Our Hosted VoIP runs in the cloud, so there's no on-site PBX to purchase or maintain — you get auto-attendants, voicemail-to-email, and multi-location extension dialing without the hardware.`
  4. Question: `What areas do you serve?`
     Answer: `We're headquartered in Clarkston, Michigan and serve businesses across Michigan and the Midwest — from single storefronts to multi-location enterprises.`
  5. Question: `What is FaxBridge?`
     Answer: `FaxBridge internet-enables your existing fax machine. Plug it in and send or receive faxes over your internet connection instead of a dedicated phone line, with every fax stored securely in the cloud — no new equipment needed.`
  6. Question: `What happens to my phones if the internet goes down?`
     Answer: `Our 4G LTE failover automatically switches to a wireless connection if your wired line drops, so your phones keep ringing and your business stays online.`
  7. Question: `How do billing and support work?`
     Answer: `One provider, one monthly bill, and one number to call. Our US-based support is available 24/7, backed by a local Michigan team that's accountable from setup through day-to-day service.`
  - Item styling: `details.faq-item: bg-white/[0.035] border border-white/[0.09] rounded-[12px] p-[20px_24px] mb-3 transition-all open:border-[#94e760]/30`
  - Summary styling: `cursor-pointer flex justify-between items-center text-[16.32px] font-semibold text-white list-none` with chevron icon in `text-[#94e760]`
  - Answer styling: `text-[#9fb1c2] text-[15.5px] leading-relaxed mt-4 pt-3 border-t border-white/[0.06]`
- backgroundImage: none
- overlay: none

---

### 8. Contact CTA Section id="contact"
- theme: DARK
- background: bg-[#0c2136]/50 border-t border-white/[0.06]
- contained panel: none
- text: text-[#9fb1c2]
- heading color: text-[#eef3f7]
- heading size: text-[44px] font-extrabold leading-[47.52px] tracking-[-1.1px]
- body size: text-[17.28px] font-normal leading-[28.51px]
- layout: 2-column grid (`grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-center max-w-[1180px] mx-auto px-6`)
- padding: py-[92px]
- content:
  - Left Column (7 cols):
    - Eyebrow: `— GET CONNECTED` (`text-[#94e760] text-[13.6px] font-semibold tracking-wider mb-3`)
    - H2: `Let's simplify your business communications.`
    - Paragraph: `Talk to a Michigan-based specialist. We'll design the right phone, internet, and IT setup for your business — and handle the switch.`
    - Button group (`flex flex-wrap gap-4 mt-8`):
      - Primary CTA: `Call (855) 313-2300` (`bg-white text-[#0a1a2e] font-semibold text-[16px] px-[28px] py-[15px] rounded-[10px] hover:bg-[#eef3f7] transition-all`)
      - Ghost CTA: `Email us` (`border border-white/20 text-[#e6ecf2] font-semibold text-[16px] px-[28px] py-[15px] rounded-[10px] hover:border-[#94e760] hover:text-white transition-all`, href `mailto:support@gonetexpress.com`)
  - Right Column (5 cols - Contact Card):
    - Container: `bg-white/[0.035] border border-white/[0.09] rounded-[18px] p-[28px] space-y-4`
    - Row 1: Phone
      - Icon: Phone icon in green badge `bg-[#94e760]/12 text-[#94e760] p-3 rounded-[10px]`
      - Sub-label: `CALL US` (`text-[#9fb1c2] text-[11.5px] uppercase tracking-wider font-semibold`)
      - Value: `(855) 313-2300` (`text-white font-semibold text-[16.8px] hover:text-[#94e760] transition-colors`)
    - Row 2: Email
      - Icon: Envelope icon in green badge `bg-[#94e760]/12 text-[#94e760] p-3 rounded-[10px]`
      - Sub-label: `EMAIL` (`text-[#9fb1c2] text-[11.5px] uppercase tracking-wider font-semibold`)
      - Value: `support@gonetexpress.com` (`text-white font-semibold text-[16.8px] hover:text-[#94e760] transition-colors`)
    - Row 3: Visit / Address
      - Icon: Location pin icon in green badge `bg-[#94e760]/12 text-[#94e760] p-3 rounded-[10px]`
      - Sub-label: `VISIT` (`text-[#9fb1c2] text-[11.5px] uppercase tracking-wider font-semibold`)
      - Value: `6825 Dixie Hwy, Clarkston, MI 48346` (`text-white font-semibold text-[16px]`)
- backgroundImage: none
- overlay: none

---

## 5. Favicon

Instruct the builder to call `generate_favicon` with site name "Net Express" and primary brand color `#091A2C`.

## 6. Footer

Style: bg-[#06131f] (dark navy background)
Text color: rgb(159, 177, 194) / rgb(238, 243, 247)
Columns: 4
Content alignment: start (left-aligned columns distributed across max-w-[1180px])
Padding: pt-[64px] pb-[28px]

Footer Columns:
1. Column 1 (Brand):
   - Logo: `netexpress-logo.png` (w-[169px] h-[31px] mb-4)
   - Description: `Your single-source Michigan provider for business phone, data, internet, and IT. One provider, one bill, one support line.` (`text-[#9fb1c2] text-[14.72px] leading-[25px] max-w-[280px]`)
2. Column 2 (Services):
   - Heading: `SERVICES` (`text-white text-[12.8px] font-bold uppercase tracking-[1.28px] mb-4`)
   - Links:
     - `Hosted VoIP` (/#services)
     - `Tailored Solutions` (/#services)
     - `Internet & Fiber` (/#services)
     - `Virtual Fax (FaxBridge)` (/faxbridge/)
     - `Managed IT` (/#services)
3. Column 3 (Company):
   - Heading: `COMPANY` (`text-white text-[12.8px] font-bold uppercase tracking-[1.28px] mb-4`)
   - Links:
     - `Why Net Express` (/#why)
     - `Service Area` (/#areas)
     - `Reviews` (/#reviews)
     - `FAQ` (/#faq)
     - `Contact` (/#contact)
4. Column 4 (Contact):
   - Heading: `CONTACT` (`text-white text-[12.8px] font-bold uppercase tracking-[1.28px] mb-4`)
   - Links & text:
     - `Toll free (855) 313-2300` (tel:+18553132300)
     - `Local (248) 313-2300` (tel:+12483132300)
     - `support@gonetexpress.com` (mailto:support@gonetexpress.com)
     - `6825 Dixie Hwy`
     - `Clarkston, MI 48346`

Footer Bottom Bar:
- Divider: Top border `border-t border-white/[0.09] pt-6 mt-12`
- Layout: flex flex-col sm:flex-row justify-between items-center gap-4 text-[13.6px] text-[#9fb1c2]
- Left text: `© 2026 Net Express. All rights reserved.`
- Right text: `Business phone · internet · IT · Michigan & the Midwest`
- Sub-footer agency credit: `Web Design and SEO by twalkerco` (`text-[#eef3f7] text-[12px] hover:text-[#94e760] transition-colors mt-3 text-center flex items-center justify-center gap-1.5`)

## 7. Files

MODIFY:
- `src/components/Navigation.astro`
- `src/components/Footer.astro`
- `src/config/site.ts`
- `src/styles/global.css`

CREATE:
- `src/components/home/Hero.astro`
- `src/components/home/TrustBar.astro`
- `src/components/home/Services.astro`
- `src/components/home/WhyUs.astro`
- `src/components/home/ServiceArea.astro`
- `src/components/home/Testimonial.astro`
- `src/components/home/Faq.astro`
- `src/components/home/ContactCta.astro`