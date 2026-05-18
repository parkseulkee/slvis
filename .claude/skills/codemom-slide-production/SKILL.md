---
name: codemom-slide-production
description: Use this skill AFTER a post plan has been approved by the user (via codemom-content-planning skill) — i.e. `posts/post-NN-<slug>/plan.md` has `status: approved`. Triggers include "이제 만들어줘", "슬라이드 제작", "export 해줘", "슬라이드 뽑아줘". Produces 1080×1350 HTML carousel slides using the @codemom.life design system, then exports to PNG (all slides) and optionally MOV/MP4 (reel version). The output is what gets uploaded to Instagram.
user-invocable: true
---

# codemom Slide Production

You are the slide-builder for **@codemom.life**. You take an **approved plan** and turn it into shippable assets — HTML slides first, then PNG exports, then optionally a MOV reel.

## Before you start — always read

1. The approved plan — `posts/post-NN-<slug>/plan.md`
2. `TEMPLATE_MAP.md` — which slide template ID maps to which HTML file
3. `colors_and_type.css` — design tokens
4. `README.md` — visual foundations section
5. `EXPORT_GUIDE.md` — PNG/MOV pipeline
6. At least one produced example — `posts/post-01-capcut/` (structure reference)

## The production flow (strict order)

### Step 1 — Verify approval

If `status:` in the plan is not `approved`, **stop**. Tell the user:

> 기획이 아직 승인되지 않았어요. `codemom-content-planning` 스킬로 먼저 마무리해주세요.

### Step 2 — Set up the post folder

```
posts/post-NN-<slug>/
  plan.md              ← already exists
  post.css             ← shared tokens for this post
  01-<kebab>.html      ← slide 1
  02-<kebab>.html
  ...
  index.html           ← 8-up viewer
  export-preview.html  ← export grid
  assets/              ← user-supplied photos/screenshots
  exports/
    html/              ← copies ready for PNG export
    png/               ← final 1080×1350 PNGs (populated via EXPORT_GUIDE)
    mov/               ← (optional) reel
```

Copy from `posts/post-01-capcut/post.css` as a starting point; adjust palette variables to match the plan's `accent`.

### Step 3 — Build slides (one HTML per slide)

For each row in the plan's slide table:

1. Find the template ID (e.g. `04-before-after`) in `TEMPLATE_MAP.md`
2. Copy from `slides/<template>.html` as a base
3. Fill in the copy from the plan (exactly — do not edit copy at this stage; if something reads wrong, pause and ask)
4. Apply accent color per axis (LIFE→terracotta / TECH/AI→amber / DEV→green-optional)
5. Preserve **mandatory page chrome**: top mono label, bottom `@codemom.life + SWIPE →`, page counter `NN / total`
6. Minimum font size on slide = **24px**. Violations must be fixed before moving on.

슬라이드를 하나 완성할 때마다 바로 열어준다 (배치 처리 금지):

```bash
open posts/post-NN-<slug>/NN-<kebab>.html
```

### Step 4 — Build the 8-up viewer

Create `posts/post-NN-<slug>/index.html` that shows all slides in one grid (see `posts/post-01-capcut/index.html`). Use this to visually audit rhythm, color balance, and mode transitions.

### Step 5 — Export PNGs

Follow `EXPORT_GUIDE.md`. Two options:

- **Puppeteer script** (recommended, batches all slides) — writes to `exports/png/`
- **Chrome DevTools** (manual, fallback) — user runs it per slide

### Step 6 — (Optional) Build MOV reel

If the plan's `reels_version:` field is `true`, follow `MOV_GUIDE.md` to produce a vertical 9:16 reel derived from key slides.

### Step 7 — Final check

Run through `CHECKLIST.md` with the user before they publish.

---

## Mandatory rules

### Layout

- **Canvas: 1080×1350** (no exceptions)
- Safe margins: **72px horizontal / 96px vertical**
- Every slide has: top mono label + bottom `@codemom.life  ·  SWIPE →` + page counter

### Typography

- Body minimum: **24px** on canvas
- Title range: 64–120px
- Mono labels: 18–22px with `letter-spacing: 0.12em`
- Never use 한글 with letter-spacing > 0 (look bad in Pretendard)

### Color

- One accent per post. Do NOT mix terracotta + amber in the same slide.
- TECH-mode slides inside a LIFE-dominant post: OK if plan specified it, max 1-2 slides out of 8.

### Copy

- Copy comes from the approved plan verbatim.
- If you spot a typo or tone break, **stop and ask** — do not silently edit.
- No emoji. No `ㅋㅋ`. Mono symbols only (`→ · — ●`).

### Assets

- If the plan lists a photo the user hasn't supplied, use a cross-hatch placeholder (see `ui_kits/instagram/` for example styling).
- Never generate photorealistic SVG art as a photo substitute.

---

## Handoff signal (when PNGs are ready)

PNG export 완료 즉시 전체를 열어준다:

```bash
open posts/post-NN-<slug>/exports/png/*
```

> ✅ `post-NN-<slug>` 슬라이드 PNG 완성했어요. 전체 열었으니 확인해보세요.
> 업로드 전 `CHECKLIST.md` 한번 같이 돌려볼까요?
