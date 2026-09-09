"use client";
import {useLayoutEffect,useRef,type ReactNode} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IntroSequence({children}:{children:ReactNode}){
 const root=useRef<HTMLDivElement>(null);
 useLayoutEffect(()=>{
  const scene=root.current!;
  const hero=scene.querySelector<HTMLElement>('.hero')!;
  const about=scene.querySelector<HTMLElement>('.about')!;
  const media=gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)',()=>{
   scene.classList.add('intro-animated');
   const context=gsap.context(()=>{
    gsap.set(about,{autoAlpha:0});about.inert=true;
    const timeline=gsap.timeline({defaults:{ease:'none'},scrollTrigger:{
     id:'intro-scene',trigger:scene,start:'top top',end:()=>`+=${innerHeight*(innerWidth<768?1.5:2)}`,
     pin:true,scrub:.65,anticipatePin:1,invalidateOnRefresh:true,refreshPriority:10,
     onUpdate:self=>{about.inert=self.progress<.76;hero.inert=self.progress>.76},
    }});
    timeline.to('.hero-type',{x:()=>-innerWidth*.34,duration:.72},0)
     .to('.hero-visual',{rotation:4,xPercent:3,yPercent:-3,scale:1.09,duration:.85},0)
     .to('.hero-copy',{y:-45,autoAlpha:0,duration:.25},.08)
     .to(about,{autoAlpha:1,duration:.01},.78)
     .fromTo('.about-main>div:first-child',{y:45,autoAlpha:0},{y:0,autoAlpha:1,duration:.17},.79)
     .fromTo('.about-bio>div:first-child',{y:65,autoAlpha:0},{y:0,autoAlpha:1,duration:.19},.83)
     .fromTo('.bio-copy>p',{y:32,autoAlpha:0},{y:0,autoAlpha:1,stagger:.035,duration:.15},.87)
     .fromTo('.about-aside>div',{y:35,autoAlpha:0},{y:0,autoAlpha:1,stagger:.035,duration:.15},.9)
     .fromTo('.about-statement',{y:30,autoAlpha:0},{y:0,autoAlpha:1,duration:.16},.94);
    // Separate full-width slices leave unequal windows onto the moving hero.
    // They meet only at the end, before the real About background takes over.
    const slices=scene.querySelectorAll('.intro-wipe-slice');
    const openings=[.06,.14,.32,.52,.7];
    slices.forEach((slice,index)=>{
     timeline.fromTo(slice,{scaleY:0},{scaleY:openings[index],duration:.2,ease:'power1.out'},.28+(4-index)*.025)
      .to(slice,{scaleY:1,duration:.23,ease:'power2.inOut'},.55-index*.025);
    });
   },scene);
   return()=>{context.revert();scene.classList.remove('intro-animated');about.inert=false;hero.inert=false};
  });
  return()=>media.revert();
 },[]);
 return <div ref={root} className="intro-sequence">{children}<div className="intro-wipe" aria-hidden="true">{[24,19,18,18,21].map((height,index)=><div className="intro-wipe-slice" key={index} style={{height:`${height}%`}}/>)}</div></div>;
}
