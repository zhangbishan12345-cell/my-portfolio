"use client";

import { SqueezeCarousel, type SqueezeSlide } from '@/components/ui/carousel-squeeze';
import { banners, imageSizes } from '../data';

const slides: SqueezeSlide[] = banners.map((item, index) => ({
  id: item.image,
  title: item.name,
  description: item.description,
  image: import.meta.env.BASE_URL+'assets/'+item.image,
  imageAlt: item.name,
  aspectRatio: imageSizes[item.image as keyof typeof imageSizes].width/imageSizes[item.image as keyof typeof imageSizes].height,
  action: '查看完整 Banner',
  href: import.meta.env.BASE_URL+'assets/'+item.image,
  target: '_blank',
}));

export default function BannerShowcase() {
  return (
    <section id="banners" className="banner-showcase dark-section" aria-labelledby="banner-title">
      <div className="banner-heading">
        <p>Banner design</p>
        <h2 id="banner-title">Small canvas.<br/>Strong impression.</h2>
        <p>从服装季节企划到美甲工具上新，以场景、色彩和信息层级呈现品牌。17 幅横版视觉，含动态设计。</p>
      </div>
      <SqueezeCarousel
        className="banner-carousel"
        slides={slides}
        label="Banner 设计作品"
        height="clamp(100px, 35cqi, 480px)"
        hoverGrow={false}
        gap={20}
        slatGap={8}
        radius={8}
        duration={700}
        accent="#e5e8df"
        accentForeground="#191c17"
      />
    </section>
  );
}
