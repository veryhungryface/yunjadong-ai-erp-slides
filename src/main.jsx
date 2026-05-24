
import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Bot, Building2, DatabaseZap, UsersRound, Rocket, Play, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, AlertTriangle } from 'lucide-react';
import './style.css';

const video = {
  title: '토스 PO 출신 대표가 사내 ERP와 AI 에이전트를 직접 만들고 AI 네이티브 컴퍼니로 거듭난 방법',
  guest: '윤용승 대표 · 윤자동',
  channel: '빌더 조쉬 Builder Josh',
  views: '약 1.9만 조회 · 공개 2일 전 확인',
  url: 'https://youtu.be/CVmbidt-3ro',
  thumb: 'https://i.ytimg.com/vi/CVmbidt-3ro/hqdefault.jpg',
  note: '자막 API는 접근 제한으로 원문 전문을 가져오지 못해, 공개 메타데이터와 영상 제목/설명에서 확인 가능한 주제 중심으로 구성했습니다.'
};

const slides = [
  {
    icon: Building2,
    kicker: 'Slide 01',
    title: 'ERP를 외주가 아니라 내부 제품으로 본다',
    headline: '사내 운영 시스템도 고객용 제품처럼 직접 설계해야 업무 방식이 바뀐다.',
    bullets: ['반복 업무와 병목을 제품 문제로 정의', '현장 사용자가 매일 쓰는 흐름을 기준으로 개선', '구매/도입보다 빠른 실험과 수정에 초점'],
    visual: 'ERP OS',
    tone: 'indigo'
  },
  {
    icon: DatabaseZap,
    kicker: 'Slide 02',
    title: '데이터가 모이는 구조가 AI의 출발점',
    headline: 'AI 에이전트는 “정리된 업무 데이터” 위에서 실제 실행력을 얻는다.',
    bullets: ['업무 기록·요청·결재·정산을 한 흐름으로 연결', '흩어진 스프레드시트/메신저 업무를 시스템화', '자동화 가능한 이벤트와 상태값을 명확히 관리'],
    visual: 'DATA FLOW',
    tone: 'cyan'
  },
  {
    icon: Bot,
    kicker: 'Slide 03',
    title: 'AI 에이전트는 보조 도구가 아니라 동료',
    headline: '직원들이 AI 비서와 함께 일하도록 업무 인터페이스를 재설계한다.',
    bullets: ['단순 질의응답보다 실제 업무 처리에 연결', '요약·작성·조회·전표/문서 처리 같은 반복 작업 지원', '사람은 판단과 예외 처리에 집중'],
    visual: 'AI AGENT',
    tone: 'violet'
  },
  {
    icon: UsersRound,
    kicker: 'Slide 04',
    title: '전 직원이 쓰는 자동화가 조직 문화를 바꾼다',
    headline: 'AI 네이티브 회사는 특정 팀만이 아니라 전사 업무 습관을 바꾼다.',
    bullets: ['대표가 직접 만들며 조직의 기준을 제시', '사용자 피드백을 빠르게 반영하는 내부 개발 루프', '자동화 결과가 곧 다음 개선의 데이터가 됨'],
    visual: 'TEAM LOOP',
    tone: 'amber'
  },
  {
    icon: Rocket,
    kicker: 'Slide 05',
    title: '핵심 메시지: 작게 만들고 매일 쓰게 하라',
    headline: '비용을 크게 쓰기보다, 실제 업무 한 장면을 끝까지 자동화하는 것이 출발점이다.',
    bullets: ['가장 자주 반복되는 업무 1개부터 선정', '업무 흐름·데이터·권한·예외를 제품처럼 설계', 'AI 에이전트를 붙여 실행 가능한 자동화로 확장'],
    visual: 'NEXT STEP',
    tone: 'green'
  }
];

const actions = [
  '우리 조직의 반복 업무 TOP 5를 목록화한다.',
  '데이터가 어디에 흩어져 있는지 한 장의 맵으로 그린다.',
  '하나의 업무를 ERP/AI 에이전트 관점에서 프로토타입화한다.',
  '직원이 매일 쓰는 인터페이스로 배포하고 피드백을 받는다.'
];

function App(){
  const [idx,setIdx]=useState(0);
  const s=slides[idx];
  const Icon=s.icon;
  const progress=((idx+1)/slides.length)*100;
  const next=()=>setIdx((idx+1)%slides.length);
  const prev=()=>setIdx((idx-1+slides.length)%slides.length);

  return <main className="app">
    <section className="hero">
      <div className="heroText">
        <div className="badge"><Sparkles size={16}/> Visual Summary Web</div>
        <h1>{video.title}</h1>
        <p className="subtitle">{video.guest} · {video.channel}</p>
        <p className="desc">사내 ERP와 AI 에이전트를 직접 구축해 AI 네이티브 조직으로 전환하는 방법을 5장의 시각 슬라이드로 압축했습니다.</p>
        <div className="heroActions">
          <a className="primary" href={video.url} target="_blank"><Play size={18}/> 원본 영상 보기</a>
          <span className="meta">{video.views}</span>
        </div>
      </div>
      <div className="videoCard">
        <img src={video.thumb} alt="영상 썸네일"/>
        <div className="scan"></div>
        <div className="caption">ERP × AI Agent × Company OS</div>
      </div>
    </section>

    <section className={`deck ${s.tone}`}>
      <div className="deckTop">
        <div><span className="kicker">{s.kicker}</span><h2>{s.title}</h2></div>
        <div className="progress"><span style={{width:progress+'%'}}/></div>
      </div>
      <div className="slideGrid">
        <div className="slideCopy">
          <div className="iconWrap"><Icon size={36}/></div>
          <h3>{s.headline}</h3>
          <ul>{s.bullets.map((b,i)=><li key={i}><CheckCircle2 size={18}/>{b}</li>)}</ul>
        </div>
        <div className="visualPanel">
          <div className="orb one"></div><div className="orb two"></div><div className="orb three"></div>
          <div className="terminalBox"><span>company.workflow</span><strong>{s.visual}</strong><em>human decision + ai execution</em></div>
        </div>
      </div>
      <div className="controls">
        <button onClick={prev}><ChevronLeft/> 이전</button>
        <div className="dots">{slides.map((_,i)=><button className={i===idx?'active':''} onClick={()=>setIdx(i)} key={i} aria-label={`${i+1}번 슬라이드`}/>)}</div>
        <button onClick={next}>다음 <ChevronRight/></button>
      </div>
    </section>

    <section className="takeaway">
      <div><h2>실행 체크리스트</h2><p>영상을 본 뒤 바로 적용할 수 있는 조직 자동화 관점의 다음 액션입니다.</p></div>
      <div className="actionGrid">{actions.map((a,i)=><div className="action" key={a}><span>{String(i+1).padStart(2,'0')}</span>{a}</div>)}</div>
    </section>

    <footer><AlertTriangle size={16}/>{video.note}</footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App/>);
