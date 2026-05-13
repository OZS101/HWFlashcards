// DECKS and EXAM_QUESTIONS are loaded from all-in-one.js

/* ══════════════════════════════════════════════════════════════
   APP STATE & STORAGE
══════════════════════════════════════════════════════════════ */
const STORE_KEY = 'cmps3350_progress';
let state = {currentDeck:null, currentMode:null, cardIndex:0, quizItems:[], quizIndex:0, quizScore:0, answered:false, studyCards:[], knownIndices:new Set()};
let progress = {};

function loadProgress(){
  try{
    progress=JSON.parse(localStorage.getItem(STORE_KEY))||{};
    for(const id in progress){
      if(progress[id].known!==undefined) delete progress[id].known;
    }
  }catch{progress={}}
}
function saveProgress(){try{localStorage.setItem(STORE_KEY,JSON.stringify(progress));}catch{}}

function getDeckProgress(id){
  const p=progress[id]||{};
  return {knownIndices:p.knownIndices||[],total:p.total||0,tfScore:p.tfScore||0,tfTotal:p.tfTotal||0,fibScore:p.fibScore||0,fibTotal:p.fibTotal||0,mcScore:p.mcScore||0,mcTotal:p.mcTotal||0};
}
function saveDeckProgress(id,updates){progress[id]={...getDeckProgress(id),...updates};saveProgress()}

function normalizeAnswer(s){
  return s.trim().toLowerCase().replace(/[.,!?;:'"()]+$/g,'').replace(/\s+/g,' ');
}

/* ══════════════════════════════════════════════════════════════
   HOME SCREEN
══════════════════════════════════════════════════════════════ */
let activeFilter='all', searchQuery='';
function setFilter(f,btn){activeFilter=f;document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderDecks()}
function filterDecks(){searchQuery=document.getElementById('search-input').value.toLowerCase();renderDecks()}

function renderDecks(){
  const grid=document.getElementById('decks-grid');

  // Exam filter — show a single exam card
  if(activeFilter==='exam'){
    grid.innerHTML=`<div class="deck-card" style="--accent-clr:#ff6bcd">
      <div class="deck-card-top">
        <div><div class="deck-icon">[EXM]</div></div>
      </div>
      <div class="deck-title">CMPS 3350 Exam</div>
      <div class="deck-sub">100 short-answer questions covering all 21 topics</div>
      <div class="deck-actions">
        <button class="deck-btn primary" onclick="startExam()">Start Exam</button>
      </div>
    </div>`;
    document.getElementById('stats-row').innerHTML=`
      <div class="stat-pill"><strong>100</strong> exam questions</div>
      <div class="stat-pill"><strong>21</strong> topics covered</div>`;
    return;
  }

  const filtered=DECKS.filter(d=>{
    if(!searchQuery)return true;
    const q=searchQuery;
    if(d.title.toLowerCase().includes(q))return true;
    if(d.cards.some(c=>c.q.toLowerCase().includes(q)||c.a.toLowerCase().includes(q)))return true;
    if(d.truefalse.some(t=>t.q.toLowerCase().includes(q)))return true;
    if(d.fillinblank.some(f=>f.q.toLowerCase().includes(q)))return true;
    if(d.multiplechoice&&d.multiplechoice.some(m=>m.q.toLowerCase().includes(q)))return true;
    return false;
  });
  grid.innerHTML=filtered.map(d=>{
    const p=getDeckProgress(d.id);
    const pct=d.cards.length>0?Math.round((p.knownIndices.length/d.cards.length)*100):0;
    let modeButtons='';
    if(activeFilter==='all'||activeFilter==='flashcard') modeButtons+=`<button class="deck-btn primary" onclick="startFlashcards('${d.id}')">Flashcards (${d.cards.length})</button>`;
    if(activeFilter==='all'||activeFilter==='truefalse') modeButtons+=`<button class="deck-btn secondary" onclick="startQuiz('${d.id}','truefalse')">T/F (${d.truefalse.length})</button>`;
    if(activeFilter==='all'||activeFilter==='fillinblank') modeButtons+=`<button class="deck-btn tertiary" onclick="startQuiz('${d.id}','fib')">Fill Blank (${d.fillinblank.length})</button>`;
    if(d.multiplechoice&&d.multiplechoice.length&&(activeFilter==='all'||activeFilter==='multiplechoice')) modeButtons+=`<button class="deck-btn quaternary" onclick="startQuiz('${d.id}','multiplechoice')">MC (${d.multiplechoice.length})</button>`;
    return `<div class="deck-card" style="--accent-clr:${d.color}">
      <div class="deck-card-top">
        <div>
          <div class="deck-icon">${d.icon}</div>
        </div>
        <div style="text-align:right;font-size:11px;color:var(--text3)">${pct}% known</div>
      </div>
      <div class="deck-title">${d.title}</div>
      <div class="deck-sub">${d.cards.length} cards · ${d.truefalse.length} T/F · ${d.fillinblank.length} FIB${d.multiplechoice&&d.multiplechoice.length?` · ${d.multiplechoice.length} MC`:''}</div>
      <div class="prog-bar"><div class="prog-fill" style="width:${pct}%;background:${d.color}"></div></div>
      <div class="deck-actions">${modeButtons}</div>
    </div>`;
  }).join('');

  const totalCards=DECKS.reduce((a,d)=>a+d.cards.length,0);
  const totalTF=DECKS.reduce((a,d)=>a+d.truefalse.length,0);
  const totalFIB=DECKS.reduce((a,d)=>a+d.fillinblank.length,0);
  const totalMC=DECKS.reduce((a,d)=>a+(d.multiplechoice?d.multiplechoice.length:0),0);
  const totalKnown=Object.values(progress).reduce((a,p)=>a+((p.knownIndices&&p.knownIndices.length)||0),0);
  document.getElementById('stats-row').innerHTML=`
    <div class="stat-pill"><strong>${DECKS.length}</strong> topics</div>
    <div class="stat-pill"><strong>${totalCards}</strong> flashcards</div>
    <div class="stat-pill"><strong>${totalTF}</strong> true/false</div>
    <div class="stat-pill"><strong>${totalFIB}</strong> fill-in-blank</div>
    <div class="stat-pill"><strong>${totalMC}</strong> multiple choice</div>
    <div class="stat-pill"><strong>${totalKnown}</strong> cards known</div>`;
}

/* ══════════════════════════════════════════════════════════════
   FLASHCARD MODE
══════════════════════════════════════════════════════════════ */
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a}

function startFlashcards(deckId){
  const deck=DECKS.find(d=>d.id===deckId);
  state.currentDeck=deck; state.currentMode='flashcard'; state.cardIndex=0;
  const p=getDeckProgress(deck.id);
  state.knownIndices=new Set(p.knownIndices);
  state.studyCards=shuffle(deck.cards.map((c,i)=>({...c,_origIdx:i})));
  document.getElementById('study-title').textContent=deck.title;
  showScreen('study-screen');
  renderCard();
}

function renderCard(){
  const card=state.studyCards[state.cardIndex];
  const total=state.studyCards.length;
  document.getElementById('card-front-text').textContent=card.q;
  document.getElementById('card-back-text').textContent=card.a;
  document.getElementById('flashcard').classList.remove('flipped');
  document.getElementById('study-progress').textContent=`${state.cardIndex+1} / ${total}`;
  document.getElementById('study-bar').style.width=`${((state.cardIndex+1)/total)*100}%`;
}

function flipCard(){document.getElementById('flashcard').classList.toggle('flipped')}

function markCard(knew){
  const card=state.studyCards[state.cardIndex];
  if(knew) state.knownIndices.add(card._origIdx);
  if(state.cardIndex<state.studyCards.length-1){
    state.cardIndex++;renderCard();
  } else {
    saveDeckProgress(state.currentDeck.id,{knownIndices:[...state.knownIndices],total:state.studyCards.length});
    showResults('Flashcards',state.knownIndices.size,state.studyCards.length-state.knownIndices.size,state.studyCards.length,()=>startFlashcards(state.currentDeck.id));
  }
}

/* ══════════════════════════════════════════════════════════════
   QUIZ MODE (T/F + Fill in Blank)
══════════════════════════════════════════════════════════════ */
function startQuiz(deckId, mode){
  const deck=DECKS.find(d=>d.id===deckId);
  state.currentDeck=deck; state.currentMode=mode;
  state.quizItems = mode==='truefalse'
    ? shuffle(deck.truefalse)
    : mode==='fib'
      ? shuffle(deck.fillinblank)
      : mode==='multiplechoice'
        ? shuffle(deck.multiplechoice||[])
        : [];
  state.quizIndex=0; state.quizScore=0; state.answered=false;
  const modeLabel=mode==='truefalse'?'True / False':mode==='fib'?'Fill in Blank':mode==='multiplechoice'?'Multiple Choice':'';
  document.getElementById('quiz-title').textContent=`${deck.title} — ${modeLabel}`;
  showScreen('quiz-screen');
  renderQuizQ();
}

function renderQuizQ(){
  const item=state.quizItems[state.quizIndex];
  const total=state.quizItems.length;
  state.answered=false;
  document.getElementById('quiz-progress').textContent=`${state.quizIndex+1}/${total}`;
  document.getElementById('quiz-bar').style.width=`${((state.quizIndex+1)/total)*100}%`;
  document.getElementById('quiz-score-disp').textContent=state.quizScore;
  document.getElementById('quiz-feedback').style.display='none';
  document.getElementById('quiz-next').style.display='none';
  document.getElementById('quiz-submit').style.display='none';
  document.getElementById('quiz-card').classList.add('anim');
  setTimeout(()=>document.getElementById('quiz-card').classList.remove('anim'),300);

  if(state.currentMode==='truefalse'){
    document.getElementById('quiz-type-badge').className='quiz-type-badge badge-tf';
    document.getElementById('quiz-type-badge').textContent='True or False';
    document.getElementById('quiz-question').textContent=item.q;
    document.getElementById('quiz-options').innerHTML=`
      <div class="tf-options">
        <button class="tf-btn" id="tf-true" onclick="answerTF(true)">TRUE</button>
        <button class="tf-btn" id="tf-false" onclick="answerTF(false)">FALSE</button>
      </div>`;
  } else if(state.currentMode==='multiplechoice'){
    document.getElementById('quiz-type-badge').className='quiz-type-badge badge-mc';
    document.getElementById('quiz-type-badge').textContent=item.topic||'Multiple Choice';
    document.getElementById('quiz-question').textContent=item.q;
    document.getElementById('quiz-options').innerHTML=`
      <div class="mc-options">
        <button class="mc-btn" id="mc-A" onclick="answerMC('A')"><span class="mc-letter">A</span> ${item.options.A}</button>
        <button class="mc-btn" id="mc-B" onclick="answerMC('B')"><span class="mc-letter">B</span> ${item.options.B}</button>
        <button class="mc-btn" id="mc-C" onclick="answerMC('C')"><span class="mc-letter">C</span> ${item.options.C}</button>
        <button class="mc-btn" id="mc-D" onclick="answerMC('D')"><span class="mc-letter">D</span> ${item.options.D}</button>
      </div>`;
  } else {
    document.getElementById('quiz-type-badge').className='quiz-type-badge badge-fib';
    document.getElementById('quiz-type-badge').textContent='Fill in the Blank';
    document.getElementById('quiz-question').innerHTML=item.q.replace(/___/g,`<span class="fib-blank">___</span>`);
    document.getElementById('quiz-options').innerHTML=`
      <div class="fib-wrap">
        <input class="fib-input" id="fib-input" placeholder="Type your answer here…" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')submitAnswer()">
        <div style="font-size:12px;color:var(--text3);margin-top:6px">Hint: ${item.hint}</div>
      </div>`;
    document.getElementById('quiz-submit').style.display='block';
    setTimeout(()=>{const inp=document.getElementById('fib-input');if(inp)inp.focus()},100);
  }
}

function answerTF(userAnswer){
  if(state.answered)return;
  state.answered=true;
  const item=state.quizItems[state.quizIndex];
  const correct=userAnswer===item.answer;
  if(correct)state.quizScore++;
  const trueBtn=document.getElementById('tf-true');
  const falseBtn=document.getElementById('tf-false');
  if(item.answer===true) trueBtn.classList.add('correct');
  else falseBtn.classList.add('correct');
  if(!correct){
    if(userAnswer===true) trueBtn.classList.add('wrong');
    else falseBtn.classList.add('wrong');
  }
  showFeedback(correct,item.exp);
}

function answerMC(letter){
  if(state.answered)return;
  state.answered=true;
  const item=state.quizItems[state.quizIndex];
  const correct=letter===item.answer;
  if(correct)state.quizScore++;
  ['A','B','C','D'].forEach(l=>{
    const btn=document.getElementById('mc-'+l);
    btn.classList.remove('selected');
    if(l===item.answer) btn.classList.add('correct');
    if(l===letter&&!correct) btn.classList.add('wrong');
  });
  showFeedback(correct,item.exp);
}

function submitAnswer(){
  if(state.currentMode==='exam'){submitExamAnswer();return;}
  if(state.currentMode==='multiplechoice')return;
  if(state.answered)return;
  const inp=document.getElementById('fib-input');
  if(!inp)return;
  const userVal=normalizeAnswer(inp.value);
  const item=state.quizItems[state.quizIndex];
  const fullAns=normalizeAnswer(item.a);
  const correctAnswers=item.a.split('/').map(s=>normalizeAnswer(s));
  const correct=userVal===fullAns||correctAnswers.some(ans=>userVal===ans);
  state.answered=true;
  if(correct){state.quizScore++;inp.classList.add('correct');}
  else{inp.classList.add('wrong');}
  document.getElementById('quiz-submit').style.display='none';
  showFeedback(correct,`Correct answer: ${item.a}`);
}

function showFeedback(correct,explanation){
  const fb=document.getElementById('quiz-feedback');
  fb.className='quiz-feedback '+(correct?'feedback-correct':'feedback-wrong');
  fb.textContent=(correct?'Correct! ':'Incorrect. ')+explanation;
  fb.style.display='block';
  document.getElementById('quiz-score-disp').textContent=state.quizScore;
  const isLast=state.quizIndex>=state.quizItems.length-1;
  const nextBtn=document.getElementById('quiz-next');
  nextBtn.textContent=isLast?'See Results >':'Next Question >';
  nextBtn.style.display='block';
  overrideNextHandler();
}

function nextQuizQ(){
  if(state.quizIndex>=state.quizItems.length-1){
    const correct=state.quizScore;
    const wrong=state.quizItems.length-state.quizScore;
    const total=state.quizItems.length;
    const deck=state.currentDeck;
    const mode=state.currentMode;
    if(mode==='truefalse') saveDeckProgress(deck.id,{tfScore:correct,tfTotal:total});
    else if(mode==='fib') saveDeckProgress(deck.id,{fibScore:correct,fibTotal:total});
    else if(mode==='multiplechoice') saveDeckProgress(deck.id,{mcScore:correct,mcTotal:total});
    const modeLabel=mode==='truefalse'?'True/False':mode==='fib'?'Fill in Blank':mode==='multiplechoice'?'Multiple Choice':'';
    showResults(modeLabel,correct,wrong,total,()=>startQuiz(deck.id,mode));
  } else {
    state.quizIndex++;
    renderQuizQ();
  }
}

/* ══════════════════════════════════════════════════════════════
   EXAM MODE
══════════════════════════════════════════════════════════════ */
function startExam(){
  state.currentDeck=null; state.currentMode='exam';
  state.quizItems=shuffle(EXAM_QUESTIONS);
  state.quizIndex=0; state.quizScore=0; state.answered=false;
  document.getElementById('quiz-title').textContent='CMPS 3350 Exam (100 Questions)';
  showScreen('quiz-screen');
  renderExamQ();
}

function renderExamQ(){
  const item=state.quizItems[state.quizIndex];
  const total=state.quizItems.length;
  state.answered=false;
  document.getElementById('quiz-progress').textContent=`${state.quizIndex+1}/${total}`;
  document.getElementById('quiz-bar').style.width=`${((state.quizIndex+1)/total)*100}%`;
  document.getElementById('quiz-score-disp').textContent=state.quizScore;
  document.getElementById('quiz-feedback').style.display='none';
  document.getElementById('quiz-next').style.display='none';
  document.getElementById('quiz-submit').style.display='none';
  document.getElementById('quiz-card').classList.add('anim');
  setTimeout(()=>document.getElementById('quiz-card').classList.remove('anim'),300);
  document.getElementById('quiz-type-badge').className='quiz-type-badge badge-fib';
  document.getElementById('quiz-type-badge').textContent=item.topic+' — Short Answer';
  document.getElementById('quiz-question').textContent=item.question;
  document.getElementById('quiz-options').innerHTML=`
    <div class="fib-wrap">
      <input class="fib-input" id="fib-input" placeholder="Type your answer here…" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')submitAnswer()">
    </div>`;
  document.getElementById('quiz-submit').style.display='block';
  setTimeout(()=>{const inp=document.getElementById('fib-input');if(inp)inp.focus()},100);
}

function submitExamAnswer(){
  if(state.answered)return;
  const inp=document.getElementById('fib-input');
  if(!inp)return;
  const userVal=normalizeAnswer(inp.value);
  const item=state.quizItems[state.quizIndex];
  const correctAns=normalizeAnswer(item.answer);
  const correct=userVal===correctAns||(userVal.length>=3&&correctAns.includes(userVal));
  state.answered=true;
  if(correct){state.quizScore++;inp.classList.add('correct');}
  else{inp.classList.add('wrong');}
  document.getElementById('quiz-submit').style.display='none';
  showFeedback(correct,`Correct answer: ${item.answer}`);
}

function nextExamQ(){
  if(state.quizIndex>=state.quizItems.length-1){
    showResultsExam(state.quizScore,state.quizItems.length);
  } else {
    state.quizIndex++;
    renderExamQ();
  }
}

function showResultsExam(correct,total){
  const wrong=total-correct;
  const pct=Math.round((correct/total)*100);
  const isGreat=pct>=80, isOk=pct>=50;
  document.getElementById('results-emoji').textContent=isGreat?':)':isOk?':|':':(';
  document.getElementById('results-pct').textContent=pct+'%';
  document.getElementById('results-pct').className='results-score '+(isGreat?'great':isOk?'ok':'bad');
  document.getElementById('results-label').textContent=
    (isGreat?'Excellent work! ':'')+(isOk&&!isGreat?'Good effort! ':'')+((!isOk)?'Keep practicing! ':'')
    +'CMPS 3350 Exam';
  document.getElementById('res-correct').textContent=correct;
  document.getElementById('res-wrong').textContent=wrong;
  document.getElementById('res-total').textContent=total;
  document.getElementById('retry-btn').onclick=()=>{startExam()};
  showScreen('results-screen');
}

function overrideNextHandler(){
  const btn=document.getElementById('quiz-next');
  if(state.currentMode==='exam'){
    btn.onclick=nextExamQ;
  } else {
    btn.onclick=nextQuizQ;
  }
}

/* ══════════════════════════════════════════════════════════════
   RESULTS SCREEN
══════════════════════════════════════════════════════════════ */
function showResults(modeName,correct,wrong,total,retryFn){
  const pct=Math.round((correct/total)*100);
  const isGreat=pct>=80, isOk=pct>=50;
  document.getElementById('results-emoji').textContent=isGreat?':)':isOk?':|':':(';
  document.getElementById('results-pct').textContent=pct+'%';
  document.getElementById('results-pct').className='results-score '+(isGreat?'great':isOk?'ok':'bad');
  document.getElementById('results-label').textContent=
    (isGreat?'Excellent work on ':'')+(isOk&&!isGreat?'Good effort on ':'')+((!isOk)?'Keep practicing ':'')
    +state.currentDeck.title+' -- '+modeName;
  document.getElementById('res-correct').textContent=correct;
  document.getElementById('res-wrong').textContent=wrong;
  document.getElementById('res-total').textContent=total;
  document.getElementById('retry-btn').onclick=()=>{retryFn();};
  showScreen('results-screen');
}

/* ══════════════════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════════════════ */
function showScreen(id){
  ['home','study-screen','quiz-screen','results-screen'].forEach(s=>{
    const el=document.getElementById(s);
    if(el) el.style.display=s===id?(s==='home'?'block':'flex'):'none';
  });
}

function goHome(){
  if(state.currentMode==='flashcard'&&state.currentDeck&&state.studyCards.length>0){
    saveDeckProgress(state.currentDeck.id,{knownIndices:[...state.knownIndices],total:state.studyCards.length});
  }
  showScreen('home');
  loadProgress();
  renderDecks();
}

/* ══════════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════════ */
loadProgress();
renderDecks();
