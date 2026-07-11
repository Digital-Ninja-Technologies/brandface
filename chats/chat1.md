# Sales page with video embed

_Started 2026-07-11 20:03 UTC_

---

## User

create a sales page with this content and embed this video (https://drive.google.com/file/d/1bDCT7ZxZE11_t61RbQ02gkaaWy2iY6RL/view?ts=6a5294a3). make it dynamic and engaging

## Assistant

Let me explore the design system and read the content doc first.

_[tool: list_files]_

_[tool: read_file]_

The design system project is empty, and the PDF content is compressed. Let me read the PDF skill to extract the text.

_[tool: read_skill_prompt]_

_[tool: run_script]_

I have the full content. The design system project is empty, so I'll establish a strong visual direction myself (premium, authority-driven — fitting a done-for-you agency targeting law firms). A few quick non-visual questions before I build:

_[tool: set_project_title]_

_[tool: questions_v2]_

## User

Questions answered:
- cta: Book a call / consultation
- video_placement: Both hero preview + full section
- variations: Just one polished page
- testimonials: Leave them out until I send them
- emphasis: The 90-day guarantee
- length: Full long-form sales page — all the content
- tone: Decide for me

## Assistant

Content extracted, direction set. Building a single long-form Design Component — dark, premium "legal authority" aesthetic (deep ink + gold, Libre Caslon Display over Archivo), leaning hard on the 90-day guarantee, with the Drive video in both the hero and a dedicated case-study section, plus scroll-reveal + count-up motion.

_[tool: dc_write]_

_[tool: show_html]_

The page is built. Let me verify it.

_[tool: ready_for_verification]_

Done. Built a full long-form sales page as a single Design Component:

- **Direction:** dark ink + gold "legal authority" aesthetic, Libre Caslon Display over Archivo, with animated glows, scroll-reveal, count-up stats, sticky nav, and a scroll-progress bar.
- **Video** embedded (Drive preview) in both the hero and a dedicated case-study section beside Demetrius McCloud's results.
- **Guarantee-first:** the 10-consultation / 90-day promise leads the hero and gets its own full-bleed gold band.
- **Full content:** problem, three-pillar offer, track record, case study, founder, two-tier pricing, ROI math, who-it's-for, differentiators, and a working booking form (submits to a confirmation state). No testimonials, per your note.
- **Tweaks:** accent color swatches, and adjustable guarantee count/days.

Testimonials, headshots, and client screenshots are ready to drop in whenever you send them — just say where.

## User

add this section with dummy content for now "Testimonials and additional proof"

## Assistant

_[tool: dc_html_str_replace]_

Added a **Testimonials & additional proof** section (marked "Placeholder") just before the booking CTA — three star-rated quote cards with monogram headshots and a row of four client-screenshot placeholders, all in the page's existing style. Swap in the real quotes, headshots, and screenshots when you have them.

## User

create a popup modal for book a call button

## Assistant

I'll convert the "Book a call" buttons to open a popup modal with the booking form.

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

Now add the modal markup and a keyframe for the entrance. Add the modal before the closing root `</div>`:

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

I referenced a `stop` handler to prevent backdrop clicks inside the dialog from closing it. Let me add it.

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Done. Every "Book a call" button now opens a popup modal with the booking form instead of scrolling. It has a backdrop blur, entrance animation, close button, closes on backdrop click or Esc, locks page scroll while open, and shows a confirmation state on submit.

## User

remove all unecessary hyphen (-)

## Assistant

_[tool: grep]_

The user means the em-dashes (—) used as punctuation, which read as AI-slop. Compound hyphens like "done-for-you" are necessary and I'll keep them. Let me find every em-dash in the copy.

_[tool: grep]_

Let me read the exact copy for the multi-line paragraphs so my replacements match precisely.

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

Now I'll replace every em-dash in the copy with cleaner punctuation, keeping compound hyphens intact.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

One replacement didn't match (the section-form "Thanks" line, likely already handled or differently formatted). Let me confirm no em-dashes remain in copy.

_[tool: grep]_

Line 400 still has one. The line-315 hit is just the arrow glyph in context. Fixing 400:

_[tool: dc_html_str_replace]_

All em-dashes are now removed from the copy, replaced with commas, colons, or periods. Compound hyphens ("done-for-you," "short-form," "speed-to-lead," "cost-per-case," etc.) are kept since those are grammatically necessary. No verification needed for a copy-only pass.

## User

users should be able to schedule a meeting by clicking book a call and the embeded form https://calendly.com/team-brandfacemedia/30min

## Assistant

I'll embed the Calendly scheduler in both the popup modal and the on-page booking section. Let me read the current modal and booking markup.

_[tool: read_file]_

Now I'll replace the on-page booking form with a Calendly embed:

_[tool: dc_html_str_replace]_

Now the modal. Let me read its current markup.

_[tool: read_file]_

_[tool: dc_html_str_replace]_

Now widen the modal container from 540px to fit the calendar:

_[tool: dc_html_str_replace]_

Both the popup modal and the on-page booking section now embed your Calendly scheduler (`team-brandfacemedia/30min`), so users book a real 30-minute call directly. Let me verify it loads cleanly.

_[tool: ready_for_verification]_

Done. Clicking any "Book a call" button opens the popup with your Calendly scheduler embedded, and the on-page booking section shows the same live calendar — users can pick a time and book a 30-minute call directly.

## User

Save this design as a PDF: BrandFace Media Sales Page.dc.html

## Assistant

I'll rebuild the print copy as a paged document. First, let me get the doc_page starter.

_[tool: copy_starter_component]_

Now I'll author the print copy as a paged document. Let me grab the current title/hero copy exactly, then build it.

_[tool: read_file]_

I have all the content. Now I'll write the print copy as a paged document with `doc-page`.

_[tool: dc_write]_

## User

Send this design to Vercel: BrandFace Media Sales Page.dc.html

## Assistant

The Vercel import tool is available. Let me show the design and bundle it.

_[tool: show_to_user]_

_[tool: tool_search_tool_bm25]_

The design needs a bundler thumbnail template. Let me add one, then bundle.

_[tool: dc_html_str_replace]_

_[tool: bundle_project]_

_[tool: vercel__import-claude-design-from-url]_

Your sales page is live on Vercel:

**[Open in Vercel →](https://brandface-media-sales-page-ee031768-e9uyoo2bh.vercel.app)**

## User

use this as the logo

## Assistant

_[tool: image_metadata]_

The logo is white-on-black with no transparency, which would show as a black box on the site. Let me make the black transparent and trim it so just the white mark shows.

_[tool: run_script]_

_[tool: view_image]_

The white mark is correct (invisible only against this white preview). Now I'll swap it into the nav and footer.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

The white face-profile mark now replaces the "B" monogram in both the nav and footer (black made transparent and trimmed so only the mark shows on the dark background). The lettermark wordmark stays alongside it.

## User

change the website theme color to the previous color

## Assistant

_[tool: grep]_

Your source theme is still gold — the emerald was just an unsaved preview tweak on your end. To force your view back to the gold reliably, I'll reset the tweak by renaming the color prop (which drops the orphaned emerald override) and keep gold as the default.

_[tool: dc_js_str_replace]_

_[tool: dc_set_props]_

The theme is back to the original gold (#CBA24C). The emerald was only an unsaved preview tweak; resetting the color control cleared it, so the site now shows the previous gold everywhere again.

## User

remove media from the logo.

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Removed "Media" from the logo wordmark in both the nav and footer — it now reads "BrandFace" alongside the face mark.

