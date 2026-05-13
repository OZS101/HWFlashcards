// DECKS and EXAM_QUESTIONS are loaded from decks.js and exam-questions.js

/* ══════════════════════════════════════════════════════════════
   APP STATE & STORAGE
══════════════════════════════════════════════════════════════ */
const STORE_KEY = 'cmps3350_progress';
let state = {currentDeck:null, currentMode:null, cardIndex:0, quizItems:[], quizIndex:0, quizScore:0, answered:false, studyCards:[], knownIndices:new Set(), quizResults:[], quizAttempts:[]};
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

function getFIBOptions(item){
  const correct=normalizeAnswer(item.a);
  const pool=[];
  DECKS.forEach(d=>d.fillinblank.forEach(f=>{
    const ans=normalizeAnswer(f.a);
    if(ans!==correct&&!pool.includes(ans)) pool.push(f.a);
  }));
  const wrong=shuffle(pool).slice(0,3);
  return shuffle([...wrong,item.a]).map(a=>({
    sentence:item.q.replace(/___/g,'<strong>'+a+'</strong>'),
    value:a, correct:normalizeAnswer(a)===correct
  }));
}

function getExamFIBOptions(item){
  const correct=normalizeAnswer(item.answer);
  const pool=EXAM_QUESTIONS.filter(e=>e.id!==item.id).map(e=>e.answer).filter((v,i,a)=>a.indexOf(v)===i);
  const wrong=shuffle(pool).filter(a=>normalizeAnswer(a)!==correct).slice(0,3);
  return shuffle([...wrong,item.answer]).map(a=>({
    sentence:a,
    value:a, correct:normalizeAnswer(a)===correct
  }));
}

function getAllDeck(){
  return {
    id:'__all__', title:'Study All Concepts', icon:'[ALL]', color:'#ff6bcd',
    cards:DECKS.flatMap(d=>d.cards),
    truefalse:DECKS.flatMap(d=>d.truefalse),
    fillinblank:DECKS.flatMap(d=>d.fillinblank),
    multiplechoice:DECKS.flatMap(d=>d.multiplechoice||[])
  };
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
    const tfCount=DECKS.reduce((a,d)=>a+d.truefalse.length,0);
    const mcCount=DECKS.reduce((a,d)=>a+(d.multiplechoice?d.multiplechoice.length:0),0);
    grid.innerHTML=`<div class="deck-card" style="--accent-clr:#ff6bcd">
      <div class="deck-card-top">
        <div><div class="deck-icon">[EXM]</div></div>
      </div>
      <div class="deck-title">CMPS 3350 Exam</div>
      <div class="deck-sub">Three exam modes covering all ${DECKS.length} topics</div>
      <div class="deck-actions" style="flex-direction:column">
        <button class="deck-btn primary" onclick="startExam('shortanswer')">Short Answer (${EXAM_QUESTIONS.length})</button>
        <button class="deck-btn secondary" onclick="startExam('truefalse')">True / False (${tfCount})</button>
        <button class="deck-btn tertiary" onclick="startExam('multiplechoice')">Multiple Choice (${mcCount})</button>
      </div>
    </div>`;
    document.getElementById('stats-row').innerHTML=`
      <div class="stat-pill"><strong>${EXAM_QUESTIONS.length+tfCount+mcCount}</strong> total exam questions</div>
      <div class="stat-pill"><strong>${DECKS.length}</strong> topics covered</div>`;
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

  // Build deck cards
  let cardsHtml='';
  if(activeFilter==='all'){
    const all=getAllDeck();
    cardsHtml+=`<div class="deck-card" style="--accent-clr:#ff6bcd">
      <div class="deck-card-top">
        <div><div class="deck-icon">[ALL]</div></div>
        <div style="text-align:right;font-size:11px;color:var(--text3)">&nbsp;</div>
      </div>
      <div class="deck-title">Study All Concepts</div>
      <div class="deck-sub">${all.cards.length} cards · ${all.truefalse.length} T/F · ${all.fillinblank.length} FIB · ${all.multiplechoice.length} MC</div>
      <div class="deck-actions" style="flex-direction:column">
        <button class="deck-btn primary" onclick="startFlashcards('__all__')">All Flashcards (${all.cards.length})</button>
        <button class="deck-btn secondary" onclick="startQuiz('__all__','truefalse')">All T/F (${all.truefalse.length})</button>
        <button class="deck-btn tertiary" onclick="startQuiz('__all__','fib')">All Fill Blank (${all.fillinblank.length})</button>
        <button class="deck-btn quaternary" onclick="startQuiz('__all__','multiplechoice')">All MC (${all.multiplechoice.length})</button>
      </div>
    </div>`;
  }
  cardsHtml+=filtered.map(d=>{
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
  grid.innerHTML=cardsHtml;

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
  const deck=deckId==='__all__'?getAllDeck():DECKS.find(d=>d.id===deckId);
  state.currentDeck=deck; state.currentMode='flashcard'; state.cardIndex=0;
  const p=deckId==='__all__'?{knownIndices:[]}:getDeckProgress(deck.id);
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
  const deck=deckId==='__all__'?getAllDeck():DECKS.find(d=>d.id===deckId);
  state.currentDeck=deck; state.currentMode=mode;
  state.quizItems = mode==='truefalse'
    ? shuffle(deck.truefalse)
    : mode==='fib'
      ? shuffle(deck.fillinblank)
      : mode==='multiplechoice'
        ? shuffle(deck.multiplechoice||[])
        : [];
  state.quizIndex=0; state.quizScore=0; state.answered=false; state.quizResults=[]; state.quizAttempts=[];
  const modeLabel=mode==='truefalse'?'True / False':mode==='fib'?'Fill in Blank':mode==='multiplechoice'?'Multiple Choice':'';
  document.getElementById('quiz-title').textContent=`${deck.title} — ${modeLabel}`;
  showScreen('quiz-screen');
  renderQuizQ();
}

function renderQuizQ(){
  const item=state.quizItems[state.quizIndex];
  const total=state.quizItems.length;
  const prevResult=state.quizResults[state.quizIndex];
  const wasAnswered=prevResult!==undefined&&prevResult!==null;
  const prevAttempts=state.quizAttempts[state.quizIndex]||0;
  state.answered=wasAnswered;
  document.getElementById('quiz-progress').textContent=`${state.quizIndex+1}/${total}`+(wasAnswered?'':`  Attempts: ${prevAttempts}/5`);
  document.getElementById('quiz-bar').style.width=`${((state.quizIndex+1)/total)*100}%`;
  document.getElementById('quiz-score-disp').textContent=state.quizScore;
  document.getElementById('quiz-feedback').style.display='none';
  document.getElementById('quiz-next').style.display='none';
  document.getElementById('quiz-submit').style.display='none';
  document.getElementById('quiz-card').classList.add('anim');
  setTimeout(()=>document.getElementById('quiz-card').classList.remove('anim'),300);

  const prevBtn=document.getElementById('quiz-prev');
  if(prevBtn) prevBtn.style.display=state.quizIndex>0?'block':'none';
  const nextBtn=document.getElementById('quiz-next');
  if(wasAnswered){
    nextBtn.textContent=state.quizIndex>=total-1?'See Results >':'Next Question >';
    nextBtn.classList.remove('skip');
  } else {
    nextBtn.textContent='Skip >';
    nextBtn.classList.add('skip');
  }

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
    const fibOptions=getFIBOptions(item); state._fibOptions=fibOptions;
    document.getElementById('quiz-options').innerHTML=`
      <div class="fib-options">
        ${fibOptions.map((o,i)=>`<button class="fib-opt-btn" onclick="pickFIBAnswer(${i})">${o.sentence}</button>`).join('')}
      </div>
      <div class="fib-wrap" style="margin-top:12px">
        <input class="fib-input" id="fib-input" placeholder="Or type your answer here…" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')submitAnswer()">
        <div style="font-size:12px;color:var(--text3);margin-top:6px">Hint: ${item.hint}</div>
      </div>`;
    document.getElementById('quiz-submit').style.display='block';
    setTimeout(()=>{const inp=document.getElementById('fib-input');if(inp)inp.focus()},100);
  }
}

function pickFIBAnswer(idx){
  const opts=state._fibOptions;
  const inp=document.getElementById('fib-input');
  if(inp) inp.value=opts[idx].value;
  submitAnswer();
}

function handleAnswer(correct,exp){
  const i=state.quizIndex;
  if(correct){
    if(state.quizResults[i]===false) state.quizScore++;
    state.quizResults[i]=true;
    state.answered=true;
    showFeedback(true,exp);
  } else {
    state.quizAttempts[i]=(state.quizAttempts[i]||0)+1;
    if(state.quizAttempts[i]>=5){
      state.quizResults[i]=false;
      state.answered=true;
      showFeedback(false,exp);
    } else {
      showRetry(state.quizAttempts[i]);
    }
  }
}

function showRetry(attempts){
  const fb=document.getElementById('quiz-feedback');
  fb.className='quiz-feedback feedback-wrong';
  fb.textContent='Incorrect. '+(5-attempts)+' attempt'+(5-attempts>1?'s':'')+' remaining.';
  fb.style.display='block';
  document.getElementById('quiz-score-disp').textContent=state.quizScore;
}

function answerTF(userAnswer){
  if(state.answered)return;
  const item=state.quizItems[state.quizIndex];
  const correct=userAnswer===item.answer;
  if(correct&&state.quizResults[state.quizIndex]===null) state.quizScore++;
  const trueBtn=document.getElementById('tf-true');
  const falseBtn=document.getElementById('tf-false');
  if(item.answer===true) trueBtn.classList.add('correct');
  else falseBtn.classList.add('correct');
  if(!correct){
    if(userAnswer===true) trueBtn.classList.add('wrong');
    else falseBtn.classList.add('wrong');
  }
  handleAnswer(correct,item.exp);
}

function answerMC(letter){
  if(state.answered)return;
  const item=state.quizItems[state.quizIndex];
  const correct=letter===item.answer;
  if(correct&&state.quizResults[state.quizIndex]===null) state.quizScore++;
  ['A','B','C','D'].forEach(l=>{
    const btn=document.getElementById('mc-'+l);
    btn.classList.remove('selected');
    if(l===item.answer) btn.classList.add('correct');
    if(l===letter&&!correct) btn.classList.add('wrong');
  });
  handleAnswer(correct,item.exp);
}

function submitAnswer(){
  if(state.currentMode==='exam'){submitExamAnswer();return;}
  if(state.currentMode==='multiplechoice')return;
  if(state.answered)return;
  const inp=document.getElementById('fib-input');
  if(!inp)return;
  inp.classList.remove('correct','wrong');
  const userVal=normalizeAnswer(inp.value);
  const item=state.quizItems[state.quizIndex];
  const fullAns=normalizeAnswer(item.a);
  const correctAnswers=item.a.split('/').map(s=>normalizeAnswer(s));
  const correct=userVal===fullAns||correctAnswers.some(ans=>userVal===ans);
  if(correct&&state.quizResults[state.quizIndex]===null) state.quizScore++;
  if(correct){inp.classList.add('correct');document.getElementById('quiz-submit').style.display='none';}
  else inp.classList.add('wrong');
  handleAnswer(correct,`Correct answer: ${item.a}`);
}

function showFeedback(correct,explanation){
  const fb=document.getElementById('quiz-feedback');
  fb.className='quiz-feedback '+(correct?'feedback-correct':'feedback-wrong');
  fb.textContent=(correct?'Correct! ':'Incorrect. ')+explanation;
  fb.style.display='block';
  document.getElementById('quiz-score-disp').textContent=state.quizScore;
  if(state.answered){
    const isLast=state.quizIndex>=state.quizItems.length-1;
    const nextBtn=document.getElementById('quiz-next');
    nextBtn.textContent=isLast?'See Results >':'Next Question >';
    nextBtn.style.display='block';
    overrideNextHandler();
  }
}

function nextQuizQ(){
  if(state.currentMode==='exam'){nextExamQ();return;}
  if(!state.answered){
    state.quizResults[state.quizIndex]=false;
    state.answered=true;
  }
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

function prevQuizQ(){
  if(state.currentMode==='exam'){prevExamQ();return;}
  if(state.quizIndex>0){
    state.quizIndex--;
    renderQuizQ();
  }
}

/* ══════════════════════════════════════════════════════════════
   EXAM MODE
══════════════════════════════════════════════════════════════ */
function startExam(examType){
  state.currentDeck=null; state.currentMode='exam'; state.examType=examType;
  state.quizIndex=0; state.quizScore=0; state.answered=false; state.quizResults=[]; state.quizAttempts=[];
  if(examType==='shortanswer'){
    state.quizItems=shuffle(EXAM_QUESTIONS);
    document.getElementById('quiz-title').textContent='Exam — Short Answer ('+EXAM_QUESTIONS.length+')';
  } else if(examType==='truefalse'){
    state.quizItems=shuffle(DECKS.flatMap(d=>d.truefalse));
    document.getElementById('quiz-title').textContent='Exam — True/False ('+DECKS.reduce((a,d)=>a+d.truefalse.length,0)+')';
  } else if(examType==='multiplechoice'){
    state.quizItems=shuffle(DECKS.flatMap(d=>d.multiplechoice||[]));
    document.getElementById('quiz-title').textContent='Exam — Multiple Choice ('+DECKS.reduce((a,d)=>a+(d.multiplechoice?d.multiplechoice.length:0),0)+')';
  }
  showScreen('quiz-screen');
  renderExamQ();
}

function renderExamQ(){
  const item=state.quizItems[state.quizIndex];
  const total=state.quizItems.length;
  const prevResult=state.quizResults[state.quizIndex];
  const prevAttempts=state.quizAttempts[state.quizIndex]||0;
  state.answered=prevResult!==undefined&&prevResult!==null;
  document.getElementById('quiz-progress').textContent=`${state.quizIndex+1}/${total}`+(state.answered?'':`  Attempts: ${prevAttempts}/5`);
  document.getElementById('quiz-bar').style.width=`${((state.quizIndex+1)/total)*100}%`;
  document.getElementById('quiz-score-disp').textContent=state.quizScore;
  document.getElementById('quiz-feedback').style.display='none';
  document.getElementById('quiz-next').style.display='none';
  document.getElementById('quiz-submit').style.display='none';
  document.getElementById('quiz-card').classList.add('anim');
  setTimeout(()=>document.getElementById('quiz-card').classList.remove('anim'),300);

  const prevBtn=document.getElementById('quiz-prev');
  if(prevBtn) prevBtn.style.display=state.quizIndex>0?'block':'none';
  const nextBtn=document.getElementById('quiz-next');
  if(state.answered){
    nextBtn.textContent=state.quizIndex>=total-1?'See Results >':'Next Question >';
    nextBtn.classList.remove('skip');
  } else {
    nextBtn.textContent='Skip >';
    nextBtn.classList.add('skip');
  }

  const topic=item.topic||'';
  const prefix=topic?topic+' — ':'';
  if(state.examType==='shortanswer'){
    document.getElementById('quiz-type-badge').className='quiz-type-badge badge-fib';
    document.getElementById('quiz-type-badge').textContent=prefix+'Short Answer';
    document.getElementById('quiz-question').textContent=item.question;
    const fibOptions=getExamFIBOptions(item); state._fibOptions=fibOptions;
    document.getElementById('quiz-options').innerHTML=`
      <div class="fib-options">
        ${fibOptions.map((o,i)=>`<button class="fib-opt-btn" onclick="pickExamFIBAnswer(${i})">${o.sentence}</button>`).join('')}
      </div>
      <div class="fib-wrap" style="margin-top:12px">
        <input class="fib-input" id="fib-input" placeholder="Or type your answer here…" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')submitAnswer()">
      </div>`;
    document.getElementById('quiz-submit').style.display='block';
    setTimeout(()=>{const inp=document.getElementById('fib-input');if(inp)inp.focus()},100);
  } else if(state.examType==='truefalse'){
    document.getElementById('quiz-type-badge').className='quiz-type-badge badge-tf';
    document.getElementById('quiz-type-badge').textContent=prefix+'True/False';
    document.getElementById('quiz-question').textContent=item.q;
    document.getElementById('quiz-options').innerHTML=`
      <div class="tf-options">
        <button class="tf-btn" id="exam-tf-true" onclick="answerExamTF(true)">TRUE</button>
        <button class="tf-btn" id="exam-tf-false" onclick="answerExamTF(false)">FALSE</button>
      </div>`;
  } else if(state.examType==='multiplechoice'){
    document.getElementById('quiz-type-badge').className='quiz-type-badge badge-mc';
    document.getElementById('quiz-type-badge').textContent=prefix+'Multiple Choice';
    document.getElementById('quiz-question').textContent=item.q;
    document.getElementById('quiz-options').innerHTML=`
      <div class="mc-options">
        <button class="mc-btn" id="exam-mc-A" onclick="answerExamMC('A')"><span class="mc-letter">A</span> ${item.options.A}</button>
        <button class="mc-btn" id="exam-mc-B" onclick="answerExamMC('B')"><span class="mc-letter">B</span> ${item.options.B}</button>
        <button class="mc-btn" id="exam-mc-C" onclick="answerExamMC('C')"><span class="mc-letter">C</span> ${item.options.C}</button>
        <button class="mc-btn" id="exam-mc-D" onclick="answerExamMC('D')"><span class="mc-letter">D</span> ${item.options.D}</button>
      </div>`;
  }
}

function pickExamFIBAnswer(idx){
  const opts=state._fibOptions;
  const inp=document.getElementById('fib-input');
  if(inp) inp.value=opts[idx].value;
  submitAnswer();
}

function submitExamAnswer(){
  if(state.answered)return;
  const inp=document.getElementById('fib-input');
  if(!inp)return;
  inp.classList.remove('correct','wrong');
  const userVal=normalizeAnswer(inp.value);
  const item=state.quizItems[state.quizIndex];
  const correctAns=normalizeAnswer(item.answer);
  const correct=userVal===correctAns||(userVal.length>=3&&correctAns.includes(userVal));
  if(correct&&state.quizResults[state.quizIndex]===null) state.quizScore++;
  if(correct){inp.classList.add('correct');document.getElementById('quiz-submit').style.display='none';}
  else inp.classList.add('wrong');
  handleExamAnswer(correct,`Correct answer: ${item.answer}`);
}

function handleExamAnswer(correct,exp){
  const i=state.quizIndex;
  if(correct){
    if(state.quizResults[i]===false) state.quizScore++;
    state.quizResults[i]=true;
    state.answered=true;
    showFeedback(true,exp);
  } else {
    state.quizAttempts[i]=(state.quizAttempts[i]||0)+1;
    if(state.quizAttempts[i]>=5){
      state.quizResults[i]=false;
      state.answered=true;
      showFeedback(false,exp);
    } else {
      showRetry(state.quizAttempts[i]);
    }
  }
}

function answerExamTF(userAnswer){
  if(state.answered)return;
  const item=state.quizItems[state.quizIndex];
  const correct=userAnswer===item.answer;
  if(correct&&state.quizResults[state.quizIndex]===null) state.quizScore++;
  const trueBtn=document.getElementById('exam-tf-true');
  const falseBtn=document.getElementById('exam-tf-false');
  if(item.answer===true) trueBtn.classList.add('correct');
  else falseBtn.classList.add('correct');
  if(!correct){
    if(userAnswer===true) trueBtn.classList.add('wrong');
    else falseBtn.classList.add('wrong');
  }
  handleExamAnswer(correct,item.exp);
}

function answerExamMC(letter){
  if(state.answered)return;
  const item=state.quizItems[state.quizIndex];
  const correct=letter===item.answer;
  if(correct&&state.quizResults[state.quizIndex]===null) state.quizScore++;
  ['A','B','C','D'].forEach(l=>{
    const btn=document.getElementById('exam-mc-'+l);
    if(l===item.answer) btn.classList.add('correct');
    if(l===letter&&!correct) btn.classList.add('wrong');
  });
  handleExamAnswer(correct,item.exp);
}

function nextExamQ(){
  if(!state.answered){
    state.quizResults[state.quizIndex]=false;
    state.answered=true;
  }
  if(state.quizIndex>=state.quizItems.length-1){
    showResultsExam(state.quizScore,state.quizItems.length);
  } else {
    state.quizIndex++;
    renderExamQ();
  }
}

function prevExamQ(){
  if(state.quizIndex>0){
    state.quizIndex--;
    renderExamQ();
  }
}

function showResultsExam(correct,total){
  const wrong=total-correct;
  const pct=Math.round((correct/total)*100);
  const isGreat=pct>=80, isOk=pct>=50;
  document.getElementById('results-pct').textContent=pct+'%';
  document.getElementById('results-pct').className='results-score '+(isGreat?'great':isOk?'ok':'bad');
  const typeLabel=state.examType==='shortanswer'?'Short Answer Exam':state.examType==='truefalse'?'True/False Exam':'Multiple Choice Exam';
  document.getElementById('results-label').textContent=
    (isGreat?'Excellent work! ':'')+(isOk&&!isGreat?'Good effort! ':'')+((!isOk)?'Keep practicing! ':'')
    +typeLabel;
  document.getElementById('res-correct').textContent=correct;
  document.getElementById('res-wrong').textContent=wrong;
  document.getElementById('res-total').textContent=total;
  document.getElementById('retry-btn').onclick=()=>{startExam(state.examType)};
  showScreen('results-screen');
}

function overrideNextHandler(){
  const nextBtn=document.getElementById('quiz-next');
  if(state.currentMode==='exam'){
    nextBtn.onclick=nextExamQ;
  } else {
    nextBtn.onclick=nextQuizQ;
  }
  if(state.answered){
    nextBtn.textContent=state.quizIndex>=state.quizItems.length-1?'See Results >':'Next Question >';
    nextBtn.classList.remove('skip');
  } else {
    nextBtn.textContent='Skip >';
    nextBtn.classList.add('skip');
  }
  const prevBtn=document.getElementById('quiz-prev');
  if(prevBtn){
    prevBtn.style.display=state.quizIndex>0?'block':'none';
    if(state.currentMode==='exam'){
      prevBtn.onclick=prevExamQ;
    } else {
      prevBtn.onclick=prevQuizQ;
    }
  }
}

/* ══════════════════════════════════════════════════════════════
   RESULTS SCREEN
══════════════════════════════════════════════════════════════ */
function showResults(modeName,correct,wrong,total,retryFn){
  const pct=Math.round((correct/total)*100);
  const isGreat=pct>=80, isOk=pct>=50;
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
