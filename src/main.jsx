import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Bot, Building2, DatabaseZap, UsersRound, Rocket, Play, ChevronLeft, ChevronRight, CheckCircle2, AlertTriangle, Workflow, Cpu, ArrowRight, RotateCcw } from 'lucide-react';
import './style.css';

const video = {
  title: '토스 PO 출신 대표가 사내 ERP와 AI 에이전트를 직접 만들고 AI 네이티브 컴퍼니로 거듭난 방법',
  guest: '윤용승 대표 · 윤자동',
  channel: '빌더 조쉬 Builder Josh',
  views: '약 1.9만 조회 · 공개 2일 전 확인',
  url: 'https://youtu.be/CVmbidt-3ro',
  thumb: 'https://i.ytimg.com/vi/CVmbidt-3ro/hqdefault.jpg',
};

const slides = [
  {
    icon: Play,
    kind: 'intro',
    eyebrow: '영상 소개',
    title: '어떤 영상인가?',
    headline: '사내 ERP와 AI 에이전트를 직접 만든 대표의 AI 네이티브 전환 사례',
    body: '토스 PO 출신 윤용승 대표가 내부 운영 시스템을 직접 만들고, 직원들이 AI와 함께 일하는 방식으로 조직을 바꿔가는 과정을 다룬 영상입니다.',
    bullets: ['출처: 빌더 조쉬 Builder Josh', '주제: ERP 내재화 · AI 에이전트 · 업무 자동화', '신뢰도: 현재는 자막 미확보, 공개 메타데이터 기반'],
    image: video.thumb,
    badge: '먼저 큰 그림',
    accent: 'cyan'
  },
  {
    icon: Building2,
    eyebrow: '1 · 운영 시스템',
    title: 'ERP를 제품처럼 본다',
    headline: '사내 ERP는 비용센터가 아니라 회사의 운영 OS입니다.',
    body: '외부 솔루션을 그대로 쓰는 대신, 실제 직원의 업무 흐름에 맞춰 직접 만들고 고쳐야 자동화가 조직 안에 스며듭니다.',
    bullets: ['반복 업무와 병목을 제품 문제로 정의', '현장 사용자가 매일 쓰는 흐름 중심으로 개선', '도입보다 빠른 실험과 수정 루프가 핵심'],
    diagram: 'ERP OS',
    badge: '핵심 관점',
    accent: 'indigo'
  },
  {
    icon: DatabaseZap,
    eyebrow: '2 · 데이터 구조',
    title: 'AI는 데이터 위에서 움직인다',
    headline: '정리된 업무 데이터가 있어야 AI 에이전트가 실행력을 얻습니다.',
    body: '요청, 결재, 전표, 문서, 고객 응대 같은 흐름이 한 시스템 안에 쌓이면 AI가 단순 답변을 넘어 실제 업무 처리에 연결됩니다.',
    bullets: ['흩어진 메신저·시트 업무를 시스템화', '상태값과 이벤트를 명확히 관리', '자동화 가능한 지점을 데이터로 발견'],
    diagram: 'DATA FLOW',
    badge: '구조 만들기',
    accent: 'blue'
  },
  {
    icon: Bot,
    eyebrow: '3 · AI 동료',
    title: 'AI 에이전트는 도구가 아니라 동료',
    headline: '직원이 AI 비서와 함께 일하도록 업무 인터페이스를 바꿉니다.',
    body: '질문에 답하는 챗봇을 넘어, 조회·요약·작성·처리까지 이어지는 실행형 인터페이스가 필요합니다.',
    bullets: ['조회/요약/문서 작성 같은 반복 작업 지원', '사람은 판단과 예외 처리에 집중', 'AI가 처리한 결과가 다시 업무 데이터가 됨'],
    diagram: 'AI AGENT',
    badge: '일하는 방식',
    accent: 'violet'
  },
  {
    icon: UsersRound,
    eyebrow: '4 · 조직 변화',
    title: '전 직원이 쓰면 문화가 바뀐다',
    headline: 'AI 네이티브 회사는 특정 팀만이 아니라 전사 업무 습관을 바꿉니다.',
    body: '대표가 직접 만들고, 직원들이 매일 쓰고, 피드백이 다시 시스템에 반영되는 루프가 조직 문화를 바꿉니다.',
    bullets: ['대표가 직접 기준과 방향을 제시', '사용자 피드백을 빠르게 반영', '자동화 결과가 다음 개선의 데이터가 됨'],
    diagram: 'TEAM LOOP',
    badge: '전사 확산',
    accent: 'amber'
  },
  {
    icon: Rocket,
    eyebrow: '5 · 실행 순서',
    title: '작게 만들고 매일 쓰게 하라',
    headline: '큰 시스템보다 실제 업무 한 장면을 끝까지 자동화하는 것이 출발점입니다.',
    body: '가장 자주 반복되는 업무 하나를 고르고, 데이터·권한·예외까지 설계한 뒤 AI 에이전트를 붙여 실행 가능한 자동화로 확장합니다.',
    bullets: ['반복 업무 TOP 1부터 선정', '업무 흐름·권한·예외를 제품처럼 설계', 'AI 에이전트를 붙여 실행 자동화로 확장'],
    diagram: 'NEXT STEP',
    badge: '한 줄 결론',
    accent: 'green'
  }
];

function App(){
  const [idx,setIdx]=useState(0);
  const [touchStart,setTouchStart]=useState(null);
  const s=slides[idx];
  const Icon=s.icon;
  const progress=((idx+1)/slides.length)*100;
  const next=()=>setIdx((idx+1)%slides.length);
  const prev=()=>setIdx((idx-1+slides.length)%slides.length);
  const restart=()=>setIdx(0);

  useEffect(()=>{
    const onKey=(e)=>{ if(e.key==='ArrowRight') next(); if(e.key==='ArrowLeft') prev(); };
    window.addEventListener('keydown', onKey);
    return()=>window.removeEventListener('keydown', onKey);
  },[idx]);

  const quick = useMemo(()=> idx===0 ? '영상 소개 후 바로 요약으로 넘어갑니다' : `${idx}번째 핵심 / 총 ${slides.length-1}개 요약`, [idx]);

  return <main className={`story ${s.accent}`}
    onTouchStart={(e)=>setTouchStart(e.touches[0].clientX)}
    onTouchEnd={(e)=>{ if(touchStart===null) return; const dx=e.changedTouches[0].clientX-touchStart; if(Math.abs(dx)>42) dx<0?next():prev(); setTouchStart(null); }}>
    <header className="topbar">
      <div>
        <span className="source">빌더 조쉬 · 영상 요약</span>
        <span className="quick">{quick}</span>
      </div>
      <strong>{idx+1} / {slides.length}</strong>
    </header>
    <div className="progressTrack"><span style={{width:`${progress}%`}} /></div>

    <section className={`slide ${s.kind === 'intro' ? 'introSlide' : ''}`}>
      <div className="copy">
        <span className="pill">{s.badge}</span>
        <p className="eyebrow">{s.eyebrow}</p>
        <h1>{s.title}</h1>
        <h2>{s.headline}</h2>
        <p className="body">{s.body}</p>
        <ul>
          {s.bullets.map((b,i)=><li key={i}><CheckCircle2 size={18}/><span>{b}</span></li>)}
        </ul>
        {idx===0 && <a className="watch" href={video.url} target="_blank" rel="noreferrer"><Play size={16}/> 원본 영상 보기 <ArrowRight size={16}/></a>}
      </div>

      <div className="visual" aria-hidden="true">
        {s.image ? <img src={s.image} alt=""/> : <div className="diagram">
          <div className="node a"><Workflow size={22}/><span>WORK</span></div>
          <div className="line"></div>
          <div className="core"><Icon size={44}/><strong>{s.diagram}</strong></div>
          <div className="line"></div>
          <div className="node b"><Cpu size={22}/><span>AI</span></div>
        </div>}
      </div>
    </section>

    <nav className="dots" aria-label="슬라이드 이동">
      {slides.map((_,i)=><button key={i} className={i===idx?'active':''} onClick={()=>setIdx(i)} aria-label={`${i+1}번 슬라이드`} />)}
    </nav>

    <footer className="controls">
      <button className="ghost" onClick={prev} disabled={idx===0}><ChevronLeft size={18}/> 이전</button>
      {idx===slides.length-1
        ? <button className="primary" onClick={restart}><RotateCcw size={18}/> 처음부터</button>
        : <button className="primary" onClick={next}>다음 <ChevronRight size={18}/></button>}
    </footer>

    <p className="trust"><AlertTriangle size={14}/> 현재 버전은 자막 미확보 상태입니다. 신뢰 가능한 최종본은 자막/전사 확보 후 업데이트해야 합니다.</p>
  </main>
}

createRoot(document.getElementById('root')).render(<App/>);
