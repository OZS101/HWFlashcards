# CMPS 3350 Study App (Merged)

Interactive study tool for Software Engineering (CMPS 3350, Spring 2026). Features flashcards, true/false quizzes, fill-in-the-blank exercises, and a comprehensive 200-question exam mode across 21 lecture modules.

## Data Sources

This is a **hybrid merge** of two versions:
- **Original** — natural study-friendly Q&A flashcards
- **Slide-verified** — content rebuilt directly from `CMPS3350-Spring-2026-Slides.zip` PDFs with source references

| Component | Source |
|-----------|--------|
| Flashcards (360) | Original — natural Q&A format |
| True/False (252) | Slide-verified — source-backed with real slide check |
| Fill-in-Blank (254) | Slide-verified — meaningful technical terms (no filler words) |
| Multiple Choice (84) | Slide-verified — source-backed with slide explanations |
| Exam Questions (200) | Both — 100 slide-verified exact-term + 100 original study Q&A |

## Features

- **Flashcards** — Shuffled card deck per topic; mark cards as "Got It" or "Still Learning"; per-card progress persists across sessions
- **True / False Quiz** — Slide-verified questions with source-backed explanations
- **Fill in the Blank** — Text-input quiz with slide-hints; no weak filler-word answers
- **Multiple Choice** — 84 slide-verified questions with source slide references
- **Exam Mode** — 200 short-answer questions (100 slide-verified + 100 original), shuffled each attempt
- **Search** — Filters decks by title and card/quiz content
- **Progress Tracking** — Tracks exactly which flashcards you've mastered (per-card indices), plus quiz scores per deck, saved to `localStorage`
- **Results Screen** — Percentage score with encouraging feedback and retry option

## How to Use

1. Open `index.html` in any modern browser (no server required)
2. Browse 21 topic decks on the home screen
3. Use filter buttons to show only Flashcards, T/F, Fill-in-Blank, or Exam mode
4. Search for specific terms using the search bar
5. Click a deck button to start studying
6. Progress is saved automatically to your browser's local storage

## Controls

| Screen | Action |
|--------|--------|
| Home | Click deck buttons or filter by mode |
| Flashcards | Click card to flip; mark as known or still learning |
| Quiz (T/F) | Click True or False; read explanation |
| Quiz (Fill-in) | Type answer, press Enter or click Check |
| Quiz (Multiple Choice) | Click A/B/C/D option; explanation shown |
| Exam | Type short answer, press Enter; 200 shuffled questions |
| Results | Retry or go back to decks |

## File Structure

```
index.html              — HTML structure (all screens)
tests.html              — Browser-based test suite (27 assertions)
README.md               — This file
.gitignore              — OS, IDE, and log exclusions
css/
  style.css             — Dark theme, responsive layout, animations
js/
  script.js             — App logic (state, navigation, quiz/flashcard/exam/MC modes)
  decks.js              — 21 lecture modules (360 cards, 252 T/F, 254 FIB, 84 MC)
  exam-questions.js     — 200 exam questions across all topics
data/
  CMPS3350_ALL_IN_ONE.json  — Consolidated source data (all decks + 200 exam)
.github/
  workflows/static.yml  — GitHub Pages deploy action
```

## Technical Notes

- Pure vanilla HTML/CSS/JS — no frameworks or build tools
- Data is separated from logic: `decks.js` and `exam-questions.js` contain all study content
- Progress is stored in `localStorage` under key `cmps3350_progress`
- Answer matching uses `normalizeAnswer()` (lowercase, trim, trailing punctuation stripped)
- Cards use Fisher-Yates shuffle for unbiased randomization
- Flashcard progress tracks individual card indices (`knownIndices[]`) for accurate per-card tracking across sessions
- T/F, FIB, and MC questions include `source` fields referencing specific PDF slides
- Exam questions 1-100 are slide-verified; 101-200 are original study Q&A
