import { h } from './main-B0P4vA-S.js';
import './routeAssumptions-D6qzFEVR.js';

const copy = {
  badge:'UK hospitality and gaming guide',
  title:'Ultimate Guide to UK Hotels with Onsite Casinos and Slots',
  intro:"The sophisticated combination of hospitality and entertainment appears at hotels that provide complete facilities for casinos in the centre of Britain's cities and luxurious countryside areas. These facilities deliver an enjoyable all-around experience which satisfies residence needs along with entertainment excitement for people from different regions.",
  sections:[
    sections:[
  ['5-Star Casino Hotels','Experience the comfort of premium 5-star casino hotels offering elegant accommodation, exceptional dining, modern gaming floors, and entertainment for every type of traveller. Whether you are planning a weekend escape or an extended holiday, luxury casino hotels combine relaxation with exciting nightlife in one destination.'],

  ['Best Casino Hotels Near You','Discover some of the best casino hotels near you with stylish rooms, quality restaurants, exciting slot areas, table games, and live entertainment. Many destinations also feature wellness facilities, shopping, and attractions that make every visit memorable.'],

  ['Book a Casino Hotel Now','Booking a casino hotel has never been easier. Compare popular destinations, explore accommodation options, and find exclusive hotel packages that include dining, entertainment, and premium guest services designed for every budget.'],

  ['Casino Resorts & Deals','Casino resorts regularly feature seasonal promotions, accommodation packages, dining specials, and entertainment offers. From luxury suites to relaxing spa experiences, guests can enjoy excellent value while experiencing world-class hospitality.'],

  ['Ultimate Casino Hotel Stay','Create the ultimate casino hotel experience by staying at destinations that combine comfortable accommodation, exciting gaming, fine dining, stylish bars, and live performances. Many resorts also provide fitness centres, pools, and premium guest services.'],

  ['Top Casino Resorts Today','Today's leading casino resorts deliver far more than gaming. Visitors can enjoy award-winning restaurants, luxury accommodation, shopping, wellness facilities, live music, sporting events, and vibrant nightlife all within a single destination.'],

  ['Casino Hotels','Casino hotels continue to attract travellers looking for convenient accommodation alongside entertainment. Whether visiting a city centre or a resort destination, guests can enjoy comfortable rooms, professional service, restaurants, and exciting gaming experiences.'],

  ['Casino Resorts','Modern casino resorts are complete entertainment destinations featuring hotels, gaming floors, swimming pools, spas, conference facilities, retail stores, and family-friendly attractions. Every resort offers its own unique atmosphere and guest experience.'],

  ['Casino Lounge Bar','Relax in sophisticated casino lounge bars serving premium cocktails, wines, beers, and signature drinks. Many venues also offer live music, comfortable seating, sporting events on large screens, and a welcoming atmosphere throughout the day and evening.'],

  ['Casino Sport Lounges','Casino sport lounges provide comfortable spaces to watch major sporting events while enjoying food, drinks, and entertainment. With large HD screens, premium seating, and lively surroundings, they offer an enjoyable social experience for sports fans.']
]
  ],
  age:'This website is for users aged 18+. Please confirm you are 18 or over to proceed.',
  confirm:'Yes, I’m 18+'
};

function isMobile(){return window.matchMedia('(max-width: 780px), (pointer: coarse)').matches}
function accepted(){return sessionStorage.getItem('age_gate_ok')==='1'}
function buildAgeGate(root){
  if(!isMobile() || accepted()) return;
  const backdrop=h('div',{class:'age-backdrop'},[
    h('div',{class:'age-box'},[
      h('p',{text:copy.age}),
      h('button',{class:'age-button',type:'button',text:copy.confirm})
    ])
  ]);
  backdrop.querySelector('button').addEventListener('click',()=>{sessionStorage.setItem('age_gate_ok','1');backdrop.remove()});
  root.appendChild(backdrop);
}
function input(name,placeholder,type='text'){return h('input',{name,placeholder,type,required:'required'})}
function buildApp(shadow){
  const app=h('div',{class:'app-frame'},[
    h('aside',{class:'sidebar'},[
      h('div',{class:'brand',text:'Travel Guide'}),
      h('nav',{class:'nav'},[
        h('a',{href:'#guide',text:'Guide'}),h('a',{href:'#article',text:'Article'}),h('a',{href:'#newsletter',text:'Newsletter'})
      ])
    ]),
    h('main',{class:'main'},[
      h('section',{class:'hero',id:'guide'},[
        h('span',{class:'badge',text:copy.badge}),
        h('h1',{text:copy.title}),
        h('p',{class:'lead',text:copy.intro}),
        h('div',{class:'actions'},[h('a',{class:'button primary',href:'#newsletter',text:'Sign up to the newsletter'}),h('a',{class:'button secondary',href:'#article',text:'Read the guide'})])
      ]),
      h('section',{class:'grid',id:'article'},copy.sections.map(s=>h('article',{class:'card'},[h('h2',{text:s[0]}),h('p',{text:s[1]})]))),
      h('section',{class:'newsletter',id:'newsletter'},[
        h('h2',{text:'Sign up to our newsletter'}),
        h('p',{text:'Get updates about hotel guides, travel inspiration, and destination features.'}),
        h('form',{class:'form'},[input('name','Your name'),input('email','Email address','email'),h('button',{type:'submit',text:'Sign Up'})]),
        h('div',{class:'notice',style:'display:none',text:'Thanks. Your signup was saved on this browser.'})
      ]),
      h('footer',{class:'footer'},[
  h('p',{text:'Information guide for adults 18+. Please check local rules and official venue information before travelling.'}),
  h('p',{text:'This site is operated by CONSTANTIN BARDEANU.'}),
  h('p',{},[
    h('a',{
      href:'https://www.wildfi.com/',
      target:'_blank',
      rel:'noopener noreferrer',
      text:'Privacy Policy'
    })
  ]),
  h('p',{},[
    document.createTextNode('Montaña 853'),
    h('br',{}),
    document.createTextNode('2520000 Viña del Mar'),
    h('br',{}),
    document.createTextNode('Valparaíso'),
    h('br',{}),
    document.createTextNode('Chile')
  ])
])
    ])
  ]);
  const form=app.querySelector('form');
  form.addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(form));const leads=JSON.parse(localStorage.getItem('newsletter_leads')||'[]');leads.push({...data,createdAt:new Date().toISOString(),page:location.href});localStorage.setItem('newsletter_leads',JSON.stringify(leads));form.reset();app.querySelector('.notice').style.display='block'});
  shadow.appendChild(app);
  buildAgeGate(shadow);
}

const host=document.getElementById('root');
if(host){
  const closedShadow=host.attachShadow({mode:'closed'});
  const cssLink=document.createElement('link');cssLink.rel='stylesheet';cssLink.href='assets_vjs/main-CYEVdsHA.css';closedShadow.appendChild(cssLink);
  buildApp(closedShadow);
}
localStorage.removeItem('entrypoint-chunk-retry-count');
