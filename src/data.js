import assets from './portfolio-assets.json';
export const imageSizes=assets.sizes;
export const closingImage=assets.closing;
export const profile = {
  name:'张壁珊', english:'Bess Zhang', role:'跨境电商视觉设计师',
  email:'1229078210@qq.com', phone:'17876253259', wechat:'a52158111',
  intro:'拥有七年的实战工作经验，曾在两家大型上市企业就职。有国内及国外时尚类品牌设计经验和海外市场全品类运营设计经验，具备从 0 到 1 的跨境新市场视觉体系搭建能力。',
  capability:'能独立完成大型促销活动的主视觉，熟悉独立站各类网页、亚马逊店铺和产品相关页面，以及天猫和京东店铺各类页面的设计与优化。',
  approach:'从品牌视觉规范，到产品拍摄、渲染与页面落地，让每一个触点传递一致的品牌语言。',
};
export const experience=[
  ['2026.05 - 2026.07','坦途创新智能科技有限公司','视觉设计师','主导 NAVEE 社媒视觉规范搭建，参与品牌 VI 迭代与新品页面设计。'],
  ['2024.12 - 2026.05','深圳市钰创合成光电有限公司','高级视觉设计师','负责美甲品牌全球化视觉设计，覆盖独立站、亚马逊和社交媒体。'],
  ['2022.07 - 2024.12','深圳赛维时代网络科技有限公司','视觉设计师','制定多品牌全平台视觉策略，负责 COOFANDY 页面、邮件与广告创意。'],
  ['2020.06 - 2022.06','深圳虾皮信息科技有限公司','电商平面设计师','负责新市场活动视觉、直播推广及多品牌店铺设计。'],
];
export const categories=[['brands','01','品牌项目','Brand projects'],['features','02','专题页面','Feature pages'],['products','03','产品详情','Product stories'],['campaigns','04','主题活动视觉','Campaign visuals'],['other','05','其他设计','Visual explorations']];
const project=(id,name,category,image,description,services,challenge,approach)=>({id,name,category,image,description,services,challenge,approach,...assets.projects[id],outcome:'通过统一的视觉语言和清晰的信息层级，将品牌表达延展至不同内容触点。具体设计呈现见本页作品。'});
export const brands=[
 project('navee','NAVEE','brands','navee.webp','以统一的品牌语言，连接产品科技与户外生活方式。',['品牌视觉规范','社交媒体','产品页面'],'为海外全渠道建立统一的视觉风格与模板体系，强化品牌识别。','以产品结构、生活方式场景与克制的字体层级组织画面，保持品牌在不同媒介中的一致性。'),
 project('onail','ONAIL','brands','onail.webp','围绕智能美甲体验，建立清晰、轻盈的品牌视觉体系。',['品牌视觉','独立站设计','多语言页面'],'将产品功能与美甲体验转化为易于理解的品牌表达。','从色彩、字体和影像规范出发，延展至美国站与日本站，兼顾品牌一致性和本地化阅读。'),
 project('melodysusie','MELODYSUSIE','brands','melodysusie.webp','从专业美甲工具到日常创作，构建完整的品牌体验。',['品牌页面','活动专题','产品视觉'],'连接专业工具的理性信息与美甲创作的情感诉求。','以产品场景、真实使用体验和模块化页面结构，串联品牌首页与活动内容。'),
 project('coofandy','COOFANDY','brands','coofandy.webp','以场景化叙事，呈现男装品牌的风格与日常。',['品牌故事','服装专题','邮件营销'],'让多品类服装在统一品牌框架下拥有清晰的风格识别。','以婚礼、度假与日常穿搭为内容线索，组织品牌故事、产品陈列及营销触点。'),
 project('ek','EKOUAER','brands','ek.webp','在舒适与风格之间，建立贴近日常的视觉表达。',['品牌页面','生活方式视觉','Banner'],'将服装的触感与生活方式传达给线上消费者。','通过自然场景、细腻色彩和轻盈版式，延展品牌故事与系列产品内容。'),
];
export const features=[
 project('exo','外骨骼','features','exo.png','让复杂科技变得直观可感。',['专题页面','科技产品','视觉设计'],'将穿戴结构、使用场景与产品优势转化为清晰的阅读顺序。','通过产品特写、场景叙事与功能层级，建立由感知到理解的页面路径。'),
 project('plant','植物胶','features','plant.webp','从植物灵感，延展色彩的自然表达。',['专题策划','产品视觉','独立站'],'将植物概念与美甲色彩联系起来，建立一致的视觉记忆。','结合植物场景、配色和产品特写，形成专题页面的连贯叙事。'),
 project('lamp','防黑手美甲灯','features','lamp.webp','以可视化细节，讲清一次美甲体验。',['功能可视化','专题页面','产品渲染'],'将美甲灯功能和使用体验转化为容易浏览的内容。','用结构展示、局部特写和使用步骤，安排产品的阅读节奏。'),
];
export const products=[
 project('vacuum','吸尘器','products','vacuum.webp','从桌面场景到内部结构，呈现美甲吸尘器的使用体验。',['产品详情','卖点梳理','场景合成'],'在有限的页面空间中组织产品结构与使用场景。','以主视觉吸引注意，按使用需求依次展开功能、细节和场景。'),
 project('nails','法式甲片','products','nails.png','让质感、色彩和佩戴效果成为主角。',['产品详情','美妆视觉','视觉设计'],'在线上呈现甲片的色彩、款式与佩戴体验。','通过细节影像、款式展示和简洁排版，帮助用户理解产品。'),
 project('drill','打磨机','products','drill.webp','把专业参数转化为清晰的使用价值。',['产品详情','工具视觉','独立站'],'兼顾专业工具的信息密度与页面的浏览效率。','运用产品特写、配件展示和步骤说明，形成清晰的内容层级。'),
];
export const campaigns=[
 project('anniversary','周年庆','campaigns','anniversary.png','用镭射风格的主视觉，创造品牌的重要时刻。',['活动主视觉','营销延展','活动页面'],'建立具有识别度、可延展的周年庆活动视觉。','以清透的蓝紫色和产品陈列建立周年庆主视觉，串联活动预热、优惠信息与工具系列。'),
 project('christmas','圣诞节','campaigns','christmas.png','以材质与节日色彩，唤起送礼的期待。',['节日视觉','电商营销','活动页面'],'在节日氛围与产品表达之间保持平衡。','通过暖金色的圣诞装饰、礼物场景与产品组合，串联节日氛围和选购信息。'),
 project('mother','母亲节','campaigns','mother.png','让温柔的情绪，成为礼物的一部分。',['节日视觉','情感叙事','活动页面'],'以贴近生活的情感表达，建立节日主题。','以母女相处的生活影像与柔和粉色，连接礼赠主题、产品推荐和活动信息。'),
];
export const allProjects=[...brands,...features,...products,...campaigns];
export const art=assets.art;
export const banners=assets.banners;
