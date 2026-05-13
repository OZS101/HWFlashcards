# CMPS 3350 Study App

Interactive study tool for Software Engineering (CMPS 3350, Spring 2026). Features flashcards, true/false quizzes, fill-in-the-blank exercises, and a comprehensive 100-question exam mode across 21 lecture modules.

## Features

- **Flashcards** — Shuffled card deck per topic; mark cards as "Got It" or "Still Learning"; per-card progress persists across sessions
- **True / False Quiz** — Timed quiz mode with instant feedback and explanations
- **Fill in the Blank** — Text-input quiz with hints; normalized answer matching tolerates minor formatting differences
- **Multiple Choice** — 60 multiple-choice mock exam questions across 13 decks with A/B/C/D options and explanations
- **Exam Mode** — 100 short-answer questions covering all topics, shuffled each attempt, with score tracking
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
| Exam | Type short answer, press Enter; 100 shuffled questions |
| Results | Retry or go back to decks |

## File Structure

```
index.html              — HTML structure (all screens)
style.css               — Dark theme, responsive layout, animations
script.js               — App logic (state, navigation, quiz/flashcard/exam/MC modes)
all-in-one.js           — 21 lecture modules with cards, T/F, FIB, MC data + 100 exam questions
CMPS3350_ALL_IN_ONE.json          — Consolidated source data (all decks + MC + exam100)
CMPS3350_100_exam_questions.json  — Legacy exam questions source
README.md               — This file
```

## Technical Notes

- Pure vanilla HTML/CSS/JS — no frameworks or build tools
- Data is separated from logic: `decks.js` and `exam-questions.js` contain all study content
- Progress is stored in `localStorage` under key `cmps3350_progress`
- Answer matching uses `normalizeAnswer()` (lowercase, trim, trailing punctuation stripped)
- Cards use Fisher-Yates shuffle for unbiased randomization
- Flashcard progress tracks individual card indices (`knownIndices[]`) for accurate per-card tracking across sessions
