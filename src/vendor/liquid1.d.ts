type Texture={image:HTMLImageElement|HTMLVideoElement|HTMLCanvasElement;needsUpdate:boolean;dispose():void};
export interface LiquidApp{
 liquidPlane:{material:{metalness:number;roughness:number;map?:Texture};uniforms:{displacementScale:{value:number};uvMapScale:{value:{set(x:number,y:number):void}}}};
 three:{maxPixelRatio:number;fpsLimit:number;resize():void;onBeforeRender:(time:{delta:number;elapsed:number})=>void;onAfterRender:()=>void;onAfterResize:(size:unknown)=>void};
 loadImage(src:string):Promise<void>;setRain(enabled:boolean):void;dispose():void;
}
export default function LiquidBackground(canvas:HTMLCanvasElement):LiquidApp;
