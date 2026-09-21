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