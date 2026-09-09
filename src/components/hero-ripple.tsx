"use client";
import {useEffect,useId,useRef} from 'react';

// Matching engine and settings from feitangyuan/liquid-refraction-lab's image demo.
export default function HeroRipple(){
 const ref=useRef<HTMLCanvasElement>(null);
 const red=useRef<SVGFEOffsetElement>(null),blue=useRef<SVGFEOffsetElement>(null);
 const filterId='liquid-'+useId().replace(/[^a-zA-Z0-9]/g,'');
 useEffect(()=>{
  const canvas=ref.current!,surface=canvas.parentElement!,host=canvas.closest<HTMLElement>('section,footer')!;
  const media=surface.querySelector<HTMLVideoElement|HTMLImageElement>('video,img');if(!media)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  let disposed=false,visible=false,generation=0;
  let app:import('../vendor/liquid1').LiquidApp|undefined;
  let intensity=1.5,previous:{x:number;y:number}|undefined;
  const stop=()=>{generation++;canvas.style.opacity='0';app?.dispose();app=undefined;previous=undefined;};
  const start=async()=>{
   if(disposed||!visible||reduced.matches||document.hidden||app)return;
   const isVideo=media instanceof HTMLVideoElement;
   if(isVideo?media.readyState<2:!media.complete||!media.naturalWidth)return;
   const ticket=++generation;
   try{
    const {default:LiquidBackground}=await import('../vendor/liquid1');
    if(disposed||ticket!==generation||!visible||reduced.matches||document.hidden)return;
    const instance=LiquidBackground(canvas);app=instance;
    instance.setRain(false);
    instance.liquidPlane.material.metalness=.35;
    instance.liquidPlane.material.roughness=.45;
    instance.liquidPlane.uniforms.displacementScale.value=2;
    instance.three.maxPixelRatio=1.25;instance.three.fpsLimit=40;instance.three.resize();
    let source=media.src;
    let videoFrame:HTMLCanvasElement|undefined;
    let videoContext:CanvasRenderingContext2D|null=null;
    if(isVideo){
     const still=document.createElement('canvas');still.width=Math.min(media.videoWidth,1600);still.height=Math.round(still.width*media.videoHeight/media.videoWidth);
     const context=still.getContext('2d');if(!context)throw new Error('Video texture unavailable');
     context.drawImage(media,0,0,still.width,still.height);source=still.toDataURL('image/jpeg',.9);videoFrame=still;videoContext=context;
    }
    await instance.loadImage(source);
    if(disposed||ticket!==generation||app!==instance){instance.liquidPlane.material.map?.dispose();return;}
    const texture=instance.liquidPlane.material.map;
    if(videoFrame&&texture){texture.image=videoFrame;texture.needsUpdate=true;}
    const updateCrop=()=>{
     const aspect=isVideo?media.videoWidth/media.videoHeight:media.naturalWidth/media.naturalHeight;
     const ratio=surface.clientWidth/surface.clientHeight;
     instance.liquidPlane.uniforms.uvMapScale.value.set(ratio<aspect?ratio/aspect:1,ratio<aspect?1:aspect/ratio);
    };
    const originalResize=instance.three.onAfterResize;
    instance.three.onAfterResize=size=>{originalResize(size);updateCrop()};updateCrop();
    const originalFrame=instance.three.onBeforeRender;
    instance.three.onBeforeRender=time=>{
     if(isVideo&&texture&&videoFrame&&videoContext&&media.readyState>=2&&!media.paused){videoContext.drawImage(media,0,0,videoFrame.width,videoFrame.height);texture.needsUpdate=true;}
     originalFrame(time);
     intensity=Math.max(1.5,intensity*Math.pow(.92,time.delta*60));
     red.current?.setAttribute('dx',String(-intensity));blue.current?.setAttribute('dx',String(intensity));
    };
    instance.three.onAfterRender=()=>{canvas.style.opacity='1'};
   }catch(error){if(ticket===generation){stop();console.warn('Liquid refraction unavailable; original artwork remains visible.',error)}}
  };
  const move=(e:PointerEvent)=>{
   if(e.pointerType==='touch'||!app)return;
   const speed=previous?Math.hypot(e.clientX-previous.x,e.clientY-previous.y):0;
   intensity=Math.min(1.5+speed*.15,8);previous={x:e.clientX,y:e.clientY};
  };
  const leave=()=>{previous=undefined};
  const sync=()=>{if(reduced.matches||document.hidden||!visible)stop();else void start()};
  const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync()},{threshold:0});observer.observe(canvas);
  host.addEventListener('pointermove',move);host.addEventListener('pointerleave',leave);
  media.addEventListener('loadeddata',start);media.addEventListener('load',start);
  reduced.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);
  return()=>{disposed=true;stop();observer.disconnect();host.removeEventListener('pointermove',move);host.removeEventListener('pointerleave',leave);media.removeEventListener('loadeddata',start);media.removeEventListener('load',start);reduced.removeEventListener('change',sync);document.removeEventListener('visibilitychange',sync)};
 },[]);
 return <><svg className="liquid-filter" aria-hidden="true"><defs><filter id={filterId} x="-5%" y="-5%" width="110%" height="110%">
  <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red"/>
  <feOffset ref={red} dx="-1.5" dy="0" in="red" result="red-out"/>
  <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green"/>
  <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue"/>
  <feOffset ref={blue} dx="1.5" dy="0" in="blue" result="blue-out"/>
  <feBlend in="red-out" in2="green" mode="screen" result="rg"/><feBlend in="rg" in2="blue-out" mode="screen"/>
 </filter></defs></svg><canvas ref={ref} className="hero-ripple" aria-hidden="true" style={{filter:`url(#${filterId})`}}/></>;
}
