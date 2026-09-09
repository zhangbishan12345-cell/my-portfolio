# Liquid refraction

Engine: threejs-components 0.0.30 (ISC), bundled with Three.js (MIT; notice retained in liquid1.js).
Source: https://cdn.jsdelivr.net/npm/threejs-components@0.0.30/build/backgrounds/liquid1.min.js
Effect reference: https://github.com/feitangyuan/liquid-refraction-lab, app/demo/page.tsx.

Matching settings: metalness 0.35, roughness 0.45, displacementScale 2, rain disabled; pointer-speed-driven RGB offsets.
Local engine patch: retain bound resize/visibility callback identities so dispose removes those listeners correctly.
Portfolio adaptations: video textures, reduced-motion fallback, offscreen disposal, independent instance/filter IDs, 40fps / 1.25 DPR cap.
