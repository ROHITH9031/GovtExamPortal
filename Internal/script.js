// /* ═══════════════════════════════════════════════
//    DATA
// ═══════════════════════════════════════════════ */
// const notifications = [
//   "🔔 UPSC Civil Services 2025 Notification Released — Apply by April 30 |",
//   "🔔 SSC CGL 2025 Exam Dates Announced — Tier I: July 2025 |",
//   "🔔 RRB NTPC 2025 Registration Open — Last Date May 15 |",
//   "🔔 AP APPSC Group 1 2025 Notification Out |",
//   "🔔 Telangana TSPSC AEE 2025 Results Declared |",
//   "🔔 UP Police Constable 2025 Exam Schedule Released |",
//   "🔔 IBPS PO 2025 Notification Expected June 2025 |",
//   "🔔 TN TRB PG Asst 2025 Counselling Ongoing |",
//   "🔔 Maharashtra MPSC State Service 2025 Prelims in August |",
//   "🔔 Kerala PSC LDC 2025 — Rank List Published |"
// ];

// const categories = [
//   {id:'all',icon:'🏛️',label:'All Exams'},
//   {id:'central',icon:'🇮🇳',label:'Central'},
//   {id:'upsc',icon:'👔',label:'UPSC'},
//   {id:'railway',icon:'🚂',label:'Railways'},
//   {id:'banking',icon:'🏦',label:'Banking'},
//   {id:'police',icon:'👮',label:'Police'},
//   {id:'teacher',icon:'📚',label:'Teaching'},
//   {id:'defence',icon:'⚔️',label:'Defence'},
//   {id:'state',icon:'🗺️',label:'State PSC'},
//   {id:'group',icon:'📋',label:'Group D/C/B'},
// ];

// const EXAMS = [
//   // ─── CENTRAL ───
//   {
//     id:'upsc_cse',title:'UPSC Civil Services (IAS/IPS/IFS)',
//     short:'UPSC CSE',icon:'👔',state:'Central',type:'central',
//     category:['upsc','central'],
//     colorBg:'rgba(236,72,153,.15)',colorText:'#f472b6',
//     conducting:'Union Public Service Commission',
//     posts:'IAS, IPS, IFS, IRS and 24 other services',
//     vacancies:'~1000 (varies annually)',
//     eligibility:'Any Graduate (Min 21, Max 32 yrs)',
//     mode:'Offline (OMR + Descriptive)',
//     language:'English & Hindi',
//     status:'upcoming',
//     notification:'Feb 2025',
//     applyLast:'March 2025',
//     prelims:'June 2025',
//     mains:'Sept 2025',
//     interview:'Jan 2026',
//     result:'April 2026',
//     syllabus:{
//       'GS Paper I':['Indian Heritage & Culture','History of India','Geography of India & World'],
//       'GS Paper II':['Governance & Constitution','Polity','Social Justice','International Relations'],
//       'GS Paper III':['Technology','Economic Development','Biodiversity','Security','Disaster Management'],
//       'GS Paper IV':['Ethics, Integrity & Aptitude','Public Administration'],
//       'CSAT (Qualifying)':['Comprehension','Logical Reasoning','Analytical Ability','Decision Making','Basic Numeracy'],
//       'Optional Subjects':['26 Options Available','Mains Paper VI & VII','250 Marks Each'],
//     },
//     pattern:[
//       {stage:'Prelims (Screening)',papers:'GS Paper I (100Q, 200M) + CSAT (80Q, 200M)',duration:'2 hrs each',marks:'200+200'},
//       {stage:'Mains (Written)',papers:'9 Papers: Essay + GS I-IV + Optional I-II + Lang',duration:'3 hrs each',marks:'1750'},
//       {stage:'Personality Test',papers:'Interview by UPSC Board',duration:'~30 min',marks:'275'},
//     ],
//     cutoffs:[
//       {year:'2023',general:'1009 (GS+Interview combined)',obc:'994',sc:'981',st:'958',ews:'984'},
//       {year:'2022',general:'1011',obc:'999',sc:'988',st:'960',ews:'987'},
//       {year:'2021',general:'987',obc:'975',sc:'962',st:'935',ews:'968'},
//     ],
//     materials:[
//       {icon:'📖',title:'NCERT Books (VI–XII)',type:'Free PDFs','desc':'Foundation reading'},
//       {icon:'📰',title:'The Hindu / PIB',type:'Daily','desc':'Current Affairs'},
//       {icon:'📋',title:'Previous Year Papers',type:'PDF','desc':'2010–2024'},
//       {icon:'🎥',title:'UPSC Pathshala YouTube',type:'Free','desc':'Video lectures'},
//       {icon:'📘',title:'Laxmikant Polity',type:'Book','desc':'M.Laxmikant'},
//       {icon:'📙',title:'Spectrum Modern India',type:'Book','desc':'Rajiv Ahir'},
//     ],
//   },
//   {
//     id:'ssc_cgl',title:'SSC Combined Graduate Level (CGL)',
//     short:'SSC CGL',icon:'📋',state:'Central',type:'central',
//     category:['central','group'],
//     colorBg:'rgba(99,102,241,.15)',colorText:'#818cf8',
//     conducting:'Staff Selection Commission',
//     posts:'Inspector (IT/CB/CE), Asst Section Officer, Auditor, UDC, DEO, etc.',
//     vacancies:'~17,000',
//     eligibility:'Graduate (21-32 yrs, varies by post)',
//     mode:'CBT (Online)',
//     language:'English & Hindi',
//     status:'active',
//     notification:'Sept 2024',
//     applyLast:'Oct 2024',
//     tier1:'Jan–March 2025',
//     tier2:'June–July 2025',
//     result:'Oct 2025',
//     syllabus:{
//       'Tier I — General Intelligence':['Analogy','Series','Coding-Decoding','Directions','Blood Relations','Puzzles'],
//       'Tier I — General Awareness':['History','Geography','Polity','Economics','Science','Current Affairs'],
//       'Tier I — Quantitative Aptitude':['Number System','Ratio & Proportion','Percentage','Profit-Loss','Geometry','Trigonometry','DI'],
//       'Tier I — English':['Reading Comprehension','Error Spotting','Fill in Blanks','One Word Sub','Cloze Test'],
//       'Tier II — Mathematical Abilities':['Advanced Maths','Statistics (for JSO)'],
//       'Tier II — English Language':['Grammar','Vocabulary','Comprehension'],
//     },
//     pattern:[
//       {stage:'Tier I (Screening)',papers:'4 Sections x 25Q = 100Q',duration:'60 min',marks:'200'},
//       {stage:'Tier II (Main)',papers:'Session I (3 hrs) + Session II (2.15 hrs)',duration:'5+ hrs',marks:'690'},
//     ],
//     cutoffs:[
//       {year:'2023',general:'146 (T1)',obc:'138',sc:'130',st:'125',ews:'140'},
//       {year:'2022',general:'144',obc:'136',sc:'129',st:'122',ews:'138'},
//       {year:'2021',general:'142',obc:'134',sc:'127',st:'120',ews:'136'},
//     ],
//     materials:[
//       {icon:'📖',title:'Kiran SSC CGL Guide',type:'Book','desc':'Complete guide'},
//       {icon:'📋',title:'Previous Year Papers',type:'PDF','desc':'2010–2024'},
//       {icon:'🎥',title:'SSC Adda YouTube',type:'Free','desc':'Video lectures'},
//       {icon:'📘',title:'Rakesh Yadav Maths',type:'Book','desc':'Quantitative'},
//     ],
//   },
//   {
//     id:'rrb_ntpc',title:'RRB Non-Technical Popular Categories (NTPC)',
//     short:'RRB NTPC',icon:'🚂',state:'Central',type:'central',
//     category:['railway','central'],
//     colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
//     conducting:'Railway Recruitment Boards (21 RRBs)',
//     posts:'Junior Clerk, Accounts Clerk, Junior Time Keeper, Commercial cum Ticket Clerk, Traffic Asst, Goods Guard, Sr Commercial cum Ticket Clerk, Sr Clerk cum Typist, JSA, Sr Time Keeper, Commercial Apprentice, Station Master',
//     vacancies:'~11,558',
//     eligibility:'10+2 to Graduation (18-33 yrs)',
//     mode:'CBT (Online)',
//     language:'15 languages',
//     status:'active',
//     notification:'Sept 2024',
//     applyLast:'Oct 2024',
//     cbt1:'Feb–April 2025',
//     cbt2:'June 2025',
//     skill:'July–Aug 2025',
//     result:'Dec 2025',
//     syllabus:{
//       'Mathematics':['Number System','Decimals','Fractions','LCM & HCF','Ratio & Proportion','Percentage','Mensuration','Time & Work','Time & Distance','SI & CI','Profit & Loss','Elementary Algebra','Geometry','Trigonometry'],
//       'General Intelligence':['Analogies','Completion of Number/Alphabetic Series','Coding-Decoding','Directions','Data Sufficiency','Statement Conclusion','Venn Diagrams','Blood Relations'],
//       'General Awareness':['Current Events (National & International)','Games & Sports','Art & Culture','Geography','Economics','Politics','Science'],
//     },
//     pattern:[
//       {stage:'CBT Stage 1',papers:'Maths 30Q + GI&R 30Q + GA 40Q = 100Q',duration:'90 min',marks:'100'},
//       {stage:'CBT Stage 2',papers:'Maths 35Q + GI&R 35Q + GA 50Q = 120Q',duration:'90 min',marks:'120'},
//       {stage:'CBAT / Typing Skill Test',papers:'Aptitude for Station Master; Typing for Clerk posts',duration:'Varies',marks:'Qualifying'},
//     ],
//     cutoffs:[
//       {year:'2019 Cycle',general:'70 (CBT1)',obc:'65',sc:'62',st:'58',ews:'68'},
//       {year:'2016 Cycle',general:'75',obc:'70',sc:'67',st:'62',ews:'N/A'},
//     ],
//     materials:[
//       {icon:'📖',title:'Arihant RRB NTPC Guide',type:'Book','desc':'Complete guide'},
//       {icon:'📋',title:'RRB Previous Papers',type:'PDF','desc':'All years'},
//       {icon:'🎥',title:'Exampur YouTube',type:'Free','desc':'Free classes'},
//     ],
//   },
//   {
//     id:'rrb_groupd',title:'RRB Group D (Level 1)',
//     short:'RRB Group D',icon:'🚂',state:'Central',type:'central',
//     category:['railway','central','group'],
//     colorBg:'rgba(16,185,129,.15)',colorText:'#34d399',
//     conducting:'Railway Recruitment Boards',
//     posts:'Track Maintainer, Helper (Electrical/Mechanical/Signal & Telecom), Porter, Pointsman, Gateman',
//     vacancies:'~32,000',
//     eligibility:'10th Pass + ITI or Equivalent (18-33 yrs)',
//     mode:'CBT + PET',
//     language:'15 languages',
//     status:'upcoming',
//     notification:'Jan 2025',
//     applyLast:'Feb 2025',
//     exam:'May–June 2025',
//     pet:'Aug 2025',
//     result:'Nov 2025',
//     syllabus:{
//       'Mathematics':['Number System','BODMAS','Decimals & Fractions','LCM/HCF','Ratio','Percentage','Mensuration','Time/Work/Distance','SI/CI','Profit/Loss','Geometry','Trigonometry'],
//       'General Intelligence & Reasoning':['Analogy','Coding-Decoding','Blood Relations','Series','Puzzles','Non-verbal'],
//       'General Science':['Physics (10th level)','Chemistry (10th level)','Life Sciences (10th level)'],
//       'General Awareness':['Current Affairs','Sports','Art & Culture','Geography','Polity','Economy'],
//     },
//     pattern:[
//       {stage:'CBT (Online)',papers:'Maths 25Q + GI&R 30Q + GS 25Q + GA 20Q = 100Q',duration:'90 min',marks:'100'},
//       {stage:'PET (Physical)',papers:'Male: 35kg carry 100m in 2min; 1000m in 4.15min; Female: 20kg in 2min; 1000m in 5.40min',duration:'As specified',marks:'Qualifying'},
//       {stage:'Document Verification',papers:'Medical + Document Check',duration:'—',marks:'Qualifying'},
//     ],
//     cutoffs:[
//       {year:'2022 Cycle',general:'58',obc:'54',sc:'50',st:'46',ews:'56'},
//       {year:'2018 Cycle',general:'55',obc:'50',sc:'48',st:'44',ews:'N/A'},
//     ],
//     materials:[
//       {icon:'📖',title:'RRB Group D Guide',type:'Book','desc':'Arihant / Kiran'},
//       {icon:'📋',title:'Previous Papers',type:'PDF','desc':'All CBT papers'},
//     ],
//   },
//   {
//     id:'ibps_po',title:'IBPS Probationary Officer (PO)',
//     short:'IBPS PO',icon:'🏦',state:'Central',type:'central',
//     category:['banking','central'],
//     colorBg:'rgba(59,130,246,.15)',colorText:'#60a5fa',
//     conducting:'Institute of Banking Personnel Selection',
//     posts:'Probationary Officer / Management Trainee in 11 PSU Banks',
//     vacancies:'~4,000',
//     eligibility:'Any Graduate (20-30 yrs)',
//     mode:'Online CBT + Interview',
//     language:'English & Hindi',
//     status:'upcoming',
//     notification:'June 2025',
//     applyLast:'July 2025',
//     prelims:'Oct 2025',
//     mains:'Nov 2025',
//     interview:'Dec 2025–Jan 2026',
//     syllabus:{
//       'Prelims — English Language':['Reading Comprehension','Cloze Test','Parajumbles','Error Detection','Fill in Blanks'],
//       'Prelims — Quantitative Aptitude':['Data Interpretation','Quadratic Equation','Number Series','Simplification','Miscellaneous Arithmetic'],
//       'Prelims — Reasoning Ability':['Puzzles & Seating','Syllogism','Inequality','Coding-Decoding','Blood Relations','Input-Output','Direction Sense'],
//       'Mains — Reasoning & Computer':['Advanced Reasoning','Computer Awareness','Machine Input'],
//       'Mains — English Language':['RC','Grammar','Vocabulary','Essay Writing'],
//       'Mains — Data Analysis':['DI (Tables/Charts/Graphs)','Caselet DI','Arithmetic'],
//       'Mains — General/Economy/Banking Awareness':['Banking Awareness','Financial Awareness','Current Affairs'],
//     },
//     pattern:[
//       {stage:'Prelims',papers:'English 30Q + Quant 35Q + Reasoning 35Q = 100Q',duration:'20+20+20=60 min',marks:'100'},
//       {stage:'Mains',papers:'Reasoning+Computer 45Q + Eng 35Q + DI+Analysis 35Q + GA/Economy 40Q + Essay+Letter',duration:'4 hrs',marks:'200+25'},
//       {stage:'Interview',papers:'Personal Interview',duration:'~15 min',marks:'100'},
//     ],
//     cutoffs:[
//       {year:'2023',general:'52.50 (Prelims)',obc:'50.75',sc:'45.25',st:'41.00',ews:'51.00'},
//       {year:'2022',general:'51.75',obc:'49.50',sc:'44.00',st:'40.25',ews:'50.25'},
//     ],
//     materials:[
//       {icon:'📖',title:'Oliveboard IBPS PO',type:'App','desc':'Mock tests'},
//       {icon:'📋',title:'Previous Papers',type:'PDF','desc':'All IBPS papers'},
//       {icon:'📘',title:'Arun Sharma Quant',type:'Book','desc':'Quantitative'},
//       {icon:'📙',title:'Plinth to Paramount',type:'Book','desc':'English grammar'},
//     ],
//   },
//   {
//     id:'nda',title:'NDA & NA Examination',
//     short:'NDA',icon:'⚔️',state:'Central',type:'central',
//     category:['defence','central'],
//     colorBg:'rgba(239,68,68,.15)',colorText:'#f87171',
//     conducting:'Union Public Service Commission',
//     posts:'Army, Navy & Air Force — Permanent Commission',
//     vacancies:'~400 (NDA I) + 400 (NDA II)',
//     eligibility:'12th Pass PCM for Navy/AF; Any stream for Army (16.5–19.5 yrs)',
//     mode:'Offline (Written) + SSB',
//     language:'English & Hindi',
//     status:'active',
//     notification:'Dec 2024 (NDA I) / May 2025 (NDA II)',
//     applyLast:'Jan 2025 / June 2025',
//     written:'April 2025 / Sept 2025',
//     ssb:'June–Sept 2025',
//     result:'Dec 2025',
//     syllabus:{
//       'Mathematics (300M)':['Algebra','Matrices & Determinants','Trigonometry','Analytical Geometry 2D&3D','Differential Calculus','Integral Calculus','Vector Algebra','Statistics & Probability'],
//       'GAT — English (200M)':['Grammar','Vocabulary','Comprehension','Composition'],
//       'GAT — General Knowledge (400M)':['Physics','Chemistry','General Science','History','Freedom Movement','Geography','Current Events'],
//     },
//     pattern:[
//       {stage:'Written — Mathematics',papers:'120 Questions',duration:'2.5 hrs',marks:'300'},
//       {stage:'Written — GAT',papers:'150 Questions',duration:'2.5 hrs',marks:'600'},
//       {stage:'SSB Interview',papers:'Psychological Tests + GTO + Interview + Conference',duration:'5 days',marks:'900'},
//     ],
//     cutoffs:[
//       {year:'2023 NDA II',general:'(Written) 360 / (Final) 699',obc:'—',sc:'—',st:'—',ews:'—'},
//       {year:'2022 NDA II',general:'355 / 695',obc:'—',sc:'—',st:'—',ews:'—'},
//     ],
//     materials:[
//       {icon:'📖',title:'Pathfinder NDA/NA',type:'Book','desc':'Arihant'},
//       {icon:'📋',title:'Previous 10 Years',type:'PDF','desc':'Solved papers'},
//       {icon:'🎥',title:'Study IQ Defence',type:'YouTube','desc':'Free videos'},
//     ],
//   },
//   // ... many state entries follow (omitted here for brevity but original file contained full data) ...
// ];

// const INDIA_STATES = ['Andhra Pradesh','Telangana','Uttar Pradesh','Maharashtra','Rajasthan','Tamil Nadu','Karnataka','Kerala','West Bengal','Gujarat','Punjab','Jharkhand','Madhya Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Haryana','Himachal Pradesh','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Sikkim','Tripura','Uttarakhand'];

// const STATE_JOB_TEMPLATES = [
//   {key:'upsc',titleSuffix:'UPSC Civil Services',short:'UPSC',icon:'👔',category:['upsc','state'],colorBg:'rgba(236,72,153,.15)',conducting:'Union Public Service Commission',posts:state=>`IAS, IPS, IFS, IRS and allied services aspirants from ${state}`,vacancies:'Varies by cadre and cycle',eligibility:'Graduate (21-32 yrs)',mode:'Prelims + Mains + Interview',language:'English & Hindi',status:stateIndex=>stateIndex % 3 === 0 ? 'active' : 'upcoming',notification:'Annual cycle',applyLast:'Varies',prelims:'June 2025',mains:'Sept 2025',interview:'Dec 2025',syllabus:{'Prelims':['Polity','History','Geography','Economy','Environment','Current Affairs'],'GS Paper I':['Indian Heritage','History','World Geography','Society'],'GS Paper II':['Constitution','Governance','IR','Social Justice'],'GS Paper III':['Economy','Environment','Science & Tech','Security'],'GS Paper IV':['Ethics','Integrity','Aptitude']},pattern:[{stage:'Prelims',papers:'GS Paper I + CSAT',duration:'2 hrs each',marks:'400'},{stage:'Mains',papers:'4 GS + Essay + Optional + Language papers',duration:'3 hrs each',marks:'1750'},{stage:'Interview',papers:'Personality Test',duration:'—',marks:'275'}],cutoffs:[{year:'2024',general:'Varies by service',obc:'Varies',sc:'Varies',st:'Varies',ews:'Varies'}],materials:[{icon:'📖',title:'UPSC Standard Books',type:'Book','desc':'NCERT + core texts'},{icon:'📋',title:'Previous Year Papers',type:'PDF','desc':'Prelims + Mains'}]},
//   {key:'railway',titleSuffix:'Railway Recruitment',short:'Railways',icon:'🚂',category:['railway','state'],colorBg:'rgba(16,185,129,.15)',conducting:'Railway Recruitment Boards (RRB)',posts:state=>`ALP, NTPC, Group D, JE, Technician and apprentice posts serving ${state}`,vacancies:'Varies by notification',eligibility:'10th / 12th / Diploma / Degree (post-wise)',mode:'CBT + Skill / Physical where applicable',language:'Hindi & English',status:stateIndex=>stateIndex % 2 === 0 ? 'upcoming' : 'active',notification:'Rolling notifications',applyLast:'Varies',written:'2025 cycle',exam:'2025 cycle',result:'After CBT / PET',syllabus:{'General Awareness':['Current Affairs','Railway Basics','History','Geography'],'Arithmetic':['Number System','Percentage','Ratio','Time & Work','DI'],'Reasoning':['Series','Coding','Directions','Blood Relations']},pattern:[{stage:'CBT 1',papers:'Screening test',duration:'90 min',marks:'100'},{stage:'CBT 2 / CBT 1 + PET',papers:'Post-specific selection',duration:'Varies',marks:'200'},{stage:'Skill / Document Verification',papers:'Typing / Medical / DV',duration:'—',marks:'Qualifying'}],cutoffs:[{year:'2024',general:'Varies by zone and post',obc:'Varies',sc:'Varies',st:'Varies',ews:'Varies'}],materials:[{icon:'📖',title:'RRB Aptitude Guide',type:'Book','desc':'Exam-oriented'},{icon:'📋',title:'RRB Practice Sets',type:'PDF','desc':'CBT mocks'}]},
//   {key:'banking',titleSuffix:'Banking Recruitment',short:'Banking',icon:'🏦',category:['banking','state'],colorBg:'rgba(59,130,246,.15)',conducting:'IBPS / SBI / Regional Rural Banks',posts:state=>`PO, Clerk, SO and RRB openings for candidates from ${state}`,vacancies:'Varies by bank and cycle',eligibility:'Graduation (post-wise)',mode:'Prelims + Mains + Interview / Language Test',language:'English & Hindi',status:stateIndex=>stateIndex % 4 === 0 ? 'active' : 'upcoming',notification:'Annual cycle',applyLast:'Varies',prelims:'June 2025',mains:'Sept 2025',interview:'Nov 2025',syllabus:{'Reasoning':['Puzzles','Coding-Decoding','Syllogism','Inequality'],'Quantitative Aptitude':['Simplification','DI','Arithmetic','Data Sufficiency'],'English / Hindi':['Reading Comprehension','Grammar','Vocabulary'],'General Awareness':['Banking Awareness','Current Affairs','Economy']},pattern:[{stage:'Prelims',papers:'Reasoning + Quant + English/Hindi',duration:'60 min',marks:'100'},{stage:'Mains',papers:'Reasoning + Quant + GA + English + Computer',duration:'2 hrs',marks:'200'},{stage:'Interview / LPT',papers:'Personality / language check',duration:'—',marks:'Qualifying'}],cutoffs:[{year:'2024',general:'Varies by bank and post',obc:'Varies',sc:'Varies',st:'Varies',ews:'Varies'}],materials:[{icon:'📖',title:'Bank PO Master Guide',type:'Book','desc':'Quant + Reasoning'},{icon:'📋',title:'Mock Test Series',type:'PDF','desc':'Prelims + Mains'}]},
//   {key:'police',titleSuffix:'Police Recruitment',short:'Police',icon:'👮',category:['police','state'],colorBg:'rgba(239,68,68,.15)',conducting:state=>`${state} Police Recruitment Board / Home Department`,posts:state=>`Constable, SI, AR, Armed Police and Home Guard recruitment for ${state}`,vacancies:'Varies by state notification',eligibility:'10th / 12th / Degree (post-wise)',mode:'Written + Physical + Medical',language:'State language + English',status:stateIndex=>stateIndex % 2 === 0 ? 'active' : 'upcoming',notification:'2025 cycle',applyLast:'Varies',written:'2025 cycle',physical:'After written test',result:'Post selection',syllabus:{'General Knowledge':['State GK','History','Polity','Current Affairs'],'Reasoning':['Series','Coding','Directions','Analogies'],'Arithmetic':['Basic Maths','Mensuration','DI']},pattern:[{stage:'Written Exam',papers:'GK + Reasoning + Arithmetic',duration:'90-120 min',marks:'100-300'},{stage:'Physical Test',papers:'PET / PST',duration:'—',marks:'Qualifying'},{stage:'Medical / DV',papers:'Medical fitness',duration:'—',marks:'Qualifying'}],cutoffs:[{year:'2024',general:'Varies by state and unit',obc:'Varies',sc:'Varies',st:'Varies',ews:'Varies'}],materials:[{icon:'📖',title:'Police Constable Guide',type:'Book','desc':'GK + Reasoning'},{icon:'📋',title:'PET Drill Set',type:'PDF','desc':'Physical prep'}]},
//   {key:'teacher',titleSuffix:'Teaching Recruitment',short:'Teaching',icon:'📚',category:['teacher','state'],colorBg:'rgba(245,158,11,.15)',conducting:state=>`${state} Education Department / Teacher Recruitment Board`,posts:state=>`TET, SGT, PGT, Lecturer and school teacher posts for ${state}`,vacancies:'Varies by district and subject',eligibility:'D.El.Ed / B.Ed / Degree (post-wise)',mode:'TET / CBT / Interview',language:'State language + English',status:stateIndex=>stateIndex % 3 === 0 ? 'active' : 'upcoming',notification:'2025 cycle',applyLast:'Varies',exam:'2025 cycle',result:'After merit list',syllabus:{'Child Development & Pedagogy':['Child growth','Learning theories','Inclusive education'],'Language I':['Grammar','Comprehension','Teaching methods'],'Language II':['English basics','Pedagogy'],'Subject / Pedagogy':['Maths / Science / Social / Language content']},pattern:[{stage:'TET / Paper I',papers:'150 MCQ',duration:'150 min',marks:'150'},{stage:'TET / Paper II',papers:'150 MCQ',duration:'150 min',marks:'150'},{stage:'Demo / Interview',papers:'Teaching demonstration',duration:'—',marks:'Qualifying'}],cutoffs:[{year:'2024',general:'60% typical threshold',obc:'Varies',sc:'Varies',st:'Varies',ews:'Varies'}],materials:[{icon:'📖',title:'CTET / TET Guide',type:'Book','desc':'Pedagogy + subject'},{icon:'📋',title:'Teaching Mock Papers',type:'PDF','desc':'Paper I & II'}]},
//   {key:'defence',titleSuffix:'Defence Recruitment',short:'Defence',icon:'⚔️',category:['defence','state'],colorBg:'rgba(100,116,139,.15)',conducting:'Indian Army / Navy / Air Force / CAPF',posts:state=>`NDA, CDS, Agniveer, CAPF and recruitment rally opportunities for ${state}`,vacancies:'Varies by force and rally',eligibility:'10+2 / Graduation (post-wise)',mode:'Written + SSB / Physical / Medical',language:'English & Hindi',status:stateIndex=>stateIndex % 4 === 0 ? 'active' : 'upcoming',notification:'2025 cycle',applyLast:'Varies',written:'2025 cycle',ssb:'After written test',physical:'As per service standards',syllabus:{'Maths':['Algebra','Geometry','Trigonometry','Statistics'],'General Ability':['English','GK','History','Science','Current Affairs'],'Reasoning / Aptitude':['Mental ability','Logical reasoning']},pattern:[{stage:'Written Exam',papers:'Mathematics + GAT / Service paper',duration:'2-3 hrs',marks:'Varies'},{stage:'SSB / Physical',papers:'Conference + fitness + medical',duration:'5 days',marks:'Qualifying'},{stage:'Final Merit',papers:'Training / offer',duration:'—',marks:'Final stage'}],cutoffs:[{year:'2024',general:'Varies by service and zone',obc:'Varies',sc:'Varies',st:'Varies',ews:'Varies'}],materials:[{icon:'📖',title:'Defence Aptitude Guide',type:'Book','desc':'NDA / CDS'},{icon:'📋',title:'SSB Prep Notes',type:'PDF','desc':'Interview + psych'}]},
//   {key:'state_psc',titleSuffix:'State PSC Services',short:'State PSC',icon:'🏛️',category:['state','group'],colorBg:'rgba(139,92,246,.15)',conducting:state=>`${state} Public Service Commission`,posts:state=>`Deputy Collector, DSP, revenue and allied administrative posts for ${state}`,vacancies:'Varies by cycle',eligibility:'Any Degree (post-wise)',mode:'Prelims + Mains + Interview',language:'State language + English',status:stateIndex=>stateIndex % 2 === 0 ? 'upcoming' : 'active',notification:'2025 cycle',applyLast:'Varies',prelims:'2025 cycle',mains:'2025 cycle',interview:'After mains',syllabus:{'GS Paper I':['History','Geography','Polity','Current Affairs'],'GS Paper II':['Economy','Governance','Environment','Science'],'Essay':['State issues','National issues','Society']},pattern:[{stage:'Prelims',papers:'Objective GS paper',duration:'2 hrs',marks:'200'},{stage:'Mains',papers:'GS papers + essay + language',duration:'3 hrs each',marks:'800-1500'},{stage:'Interview',papers:'Personality Test',duration:'—',marks:'100'}],cutoffs:[{year:'2024',general:'Varies by commission',obc:'Varies',sc:'Varies',st:'Varies',ews:'Varies'}],materials:[{icon:'📖',title:'State PSC Guide',type:'Book','desc':'General + state GK'},{icon:'📋',title:'PSC Previous Papers',type:'PDF','desc':'State service papers'}]},
//   {key:'group_cd_b',titleSuffix:'Group C/D/B Recruitment',short:'Group C/D/B',icon:'📋',category:['group','state'],colorBg:'rgba(99,102,241,.15)',conducting:state=>`${state} Government Departments / Boards`,posts:state=>`Clerk, assistant, driver, junior assistant and support staff roles in ${state}`,vacancies:'Varies by department',eligibility:'10th / 12th / Graduate (post-wise)',mode:'Written + Skill / DV / Physical where applicable',language:'State language + English',status:stateIndex=>stateIndex % 3 === 0 ? 'active' : 'upcoming',notification:'2025 cycle',applyLast:'Varies',written:'2025 cycle',skill:'Typing / Driving / Trade test where applicable',result:'After selection',syllabus:{'General Awareness':['State GK','Current Affairs','History','Polity'],'Arithmetic':['Basic maths','DI','Percentages'],'Reasoning':['Series','Coding','Analogies','Directions']},pattern:[{stage:'Written Exam',papers:'GK + Reasoning + Maths',duration:'90 min',marks:'100-200'},{stage:'Skill Test',papers:'Typing / trade / driving',duration:'—',marks:'Qualifying'},{stage:'DV / Medical',papers:'Document verification',duration:'—',marks:'Qualifying'}],cutoffs:[{year:'2024',general:'Varies by department',obc:'Varies',sc:'Varies',st:'Varies',ews:'Varies'}],materials:[{icon:'📖',title:'Group C/D Guide',type:'Book','desc':'Aptitude + GK'},{icon:'📋',title:'Typing / Skill Mocks',type:'PDF','desc':'Post-specific prep'}]},
// ];

// function slugifyValue(value){
//   return value.toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'');
// }

// function buildStateJob(state, template, stateIndex){
//   return {
//     id:`${slugifyValue(state)}_${template.key}`,
//     title:`${state} ${template.titleSuffix}`,
//     short:template.short,
//     icon:template.icon,
//     state,
//     type:'state',
//     category:template.category,
//     colorBg:template.colorBg,
//     conducting:typeof template.conducting === 'function' ? template.conducting(state) : template.conducting,
//     posts:typeof template.posts === 'function' ? template.posts(state) : template.posts,
//     vacancies:template.vacancies,
//     eligibility:template.eligibility,
//     mode:template.mode,
//     language:template.language,
//     status:typeof template.status === 'function' ? template.status(stateIndex) : template.status,
//     notification:template.notification,
//     applyLast:template.applyLast,
//     prelims:template.prelims,
//     mains:template.mains,
//     interview:template.interview,
//     written:template.written,
//     exam:template.exam,
//     result:template.result,
//     physical:template.physical,
//     ssb:template.ssb,
//     skill:template.skill,
//     syllabus:template.syllabus,
//     pattern:template.pattern,
//     cutoffs:template.cutoffs,
//     materials:template.materials,
//   };
// }

// EXAMS.push(...INDIA_STATES.flatMap((state, stateIndex)=>STATE_JOB_TEMPLATES.map(template=>buildStateJob(state, template, stateIndex))));

// /* ═══════════════════════════════════════════════
//    STATE / FILTER
// ═══════════════════════════════════════════════ */
// let activeFilter = 'all';
// let activeCategory = 'all';
// let searchQuery = '';

// const states = ['Central','Andhra Pradesh','Telangana','Uttar Pradesh','Maharashtra','Rajasthan','Tamil Nadu','Karnataka','Kerala','West Bengal','Gujarat','Punjab','Jharkhand','Madhya Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Haryana','Himachal Pradesh','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Sikkim','Tripura','Uttarakhand'];

// function init(){
//   // Notifications ticker
//   document.getElementById('notifText').textContent = notifications.join('  ');

//   // Quick links
//   const ql = document.getElementById('quickLinks');
//   categories.forEach(c=>{
//     ql.innerHTML += `<div class="quick-card" onclick="setCategory('${c.id}')">
//       <div class="quick-icon">${c.icon}</div>
//       <div class="quick-label">${c.label}</div>
//     </div>`;
//   });

//   // Filter chips
//   const fc = document.getElementById('filterChips');
//   // Central filter
//   fc.innerHTML += `<span class="chip central ${activeFilter==='Central'?'active':''}" onclick="setFilter('Central')">🇮🇳 Central</span>`;
//   // State filters
//   states.filter(s=>s!=='Central').forEach(s=>{
//     fc.innerHTML += `<span class="chip" onclick="setFilter('${s}')">${s}</span>`;
//   });
//   // All
//   fc.innerHTML = `<span class="chip ${activeFilter==='all'?'active':''}" onclick="setFilter('all')">All States</span>` + fc.innerHTML;

//   renderGrid();
// }

// function setFilter(f){
//   activeFilter = f;
//   document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
//   event.target.classList.add('active');
//   renderGrid();
// }

// function setCategory(c){
//   activeCategory = c;
//   renderGrid();
//   document.getElementById('examGrid').scrollIntoView({behavior:'smooth',block:'start'});
// }

// function filterExams(){
//   searchQuery = document.getElementById('searchInput').value.toLowerCase();
//   renderGrid();
// }

// function renderGrid(){
//   const grid = document.getElementById('examGrid');
//   const title = document.getElementById('gridTitle');
//   let exams = EXAMS;

//   // State filter
//   if(activeFilter !== 'all'){
//     exams = exams.filter(e=>e.state === activeFilter);
//   }
//   // Category filter
//   if(activeCategory !== 'all'){
//     exams = exams.filter(e=>e.category.includes(activeCategory));
//   }
//   // Search
//   if(searchQuery){
//     exams = exams.filter(e=>
//       e.title.toLowerCase().includes(searchQuery) ||
//       e.short.toLowerCase().includes(searchQuery) ||
//       e.state.toLowerCase().includes(searchQuery) ||
//       e.conducting.toLowerCase().includes(searchQuery) ||
//       e.posts.toLowerCase().includes(searchQuery)
//     );
//   }

//   // Update title
//   let tl = 'All Government Exams';
//   if(activeFilter!=='all') tl = `${activeFilter} Exams`;
//   if(activeCategory!=='all'){
//     const cat = categories.find(c=>c.id===activeCategory);
//     tl = (cat?cat.label+' ':'')+tl;
//   }
//   title.textContent = `${tl} (${exams.length})`;

//   if(exams.length === 0){
//     grid.innerHTML = `<div class="empty" style="grid-column:1/-1">
//       <div class="empty-icon">🔍</div>
//       <h3>No exams found</h3>
//       <p>Try changing filters or search query</p>
//     </div>`;
//     return;
//   }

//   grid.innerHTML = exams.map(e=>{
//     const typeTag = e.type==='central'
//       ? `<span class="tag tag-central">Central</span>`
//       : `<span class="tag tag-state">${e.state}</span>`;

//     let catTags = '';
//     if(e.category.includes('railway')) catTags+=`<span class="tag tag-rail">Railway</span>`;
//     if(e.category.includes('police')) catTags+=`<span class="tag tag-police">Police</span>`;
//     if(e.category.includes('teacher')) catTags+=`<span class="tag tag-teach">Teaching</span>`;
//     if(e.category.includes('upsc')) catTags+=`<span class="tag tag-upsc">UPSC</span>`;
//     if(e.category.includes('banking')) catTags+=`<span class="tag tag-group">Banking</span>`;
//     if(e.category.includes('defence')) catTags+=`<span class="tag tag-police">Defence</span>`;
//     if(e.category.includes('group')) catTags+=`<span class="tag tag-group">Group Exam</span>`;

//     const statusClass = `status-${e.status}`;
//     const statusLabel = e.status==='active'?'🟢 Active':e.status==='upcoming'?'🟡 Upcoming':'⚫ Closed';

//     return `<div class="exam-card" onclick="openModal('${e.id}')">
//       <div class="card-head">
//         <div class="card-icon" style="background:${e.colorBg}">${e.icon}</div>
//         <div>
//           <div class="card-title">${e.title}</div>
//           <div class="card-sub">${e.conducting}</div>
//         </div>
//       </div>
//       <div class="card-tags">${typeTag}${catTags}</div>
//       <div class="card-body">
//         <div class="info-row"><span>Posts</span>${e.posts.length>60?e.posts.substring(0,60)+'…':e.posts}</div>
//         <div class="info-row"><span>Vacancies</span>${e.vacancies}</div>
//         <div class="info-row"><span>Eligibility</span>${e.eligibility}</div>
//         <div class="info-row"><span>Mode</span>${e.mode}</div>
//       </div>
//       <div class="card-footer">
//         <span class="status-badge ${statusClass}">${statusLabel}</span>
//         <button class="view-btn">View Details →</button>
//       </div>
//     </div>`;
//   }).join('');
// }

// /* ═══════════════════════════════════════════════
//    MODAL
// ═══════════════════════════════════════════════ */
// function openModal(id){
//   const e = EXAMS.find(x=>x.id===id);
//   if(!e) return;

//   // Header
//   document.getElementById('modalHeader').innerHTML = `
//     <div class="modal-icon" style="background:${e.colorBg}">${e.icon}</div>
//     <div>
//       <div class="modal-title">${e.title}</div>
//       <div class="modal-sub">${e.conducting} &nbsp;|&nbsp; ${e.state}</div>
//     </div>
//     <button class="modal-close" onclick="closeModal()">✕</button>
//   `;

//   // Tabs
//   const tabs = ['Overview','Syllabus','Exam Pattern','Timeline','Cut-offs','Study Material'];
//   document.getElementById('modalTabs').innerHTML = tabs.map((t,i)=>
//     `<button class="mtab ${i===0?'active':''}" onclick="switchTab(${i},this)">${t}</button>`
//   ).join('');

//   // Body
//   document.getElementById('modalBody').innerHTML = `
//     ${buildOverviewTab(e)}
//     ${buildSyllabusTab(e)}
//     ${buildPatternTab(e)}
//     ${buildTimelineTab(e)}
//     ${buildCutoffTab(e)}
//     ${buildMaterialTab(e)}
//   `;

//   document.getElementById('overlay').classList.add('open');
//   document.body.style.overflow='hidden';
// }

// function closeModal(e){
//   if(e && e.target !== document.getElementById('overlay')) return;
//   document.getElementById('overlay').classList.remove('open');
//   document.body.style.overflow='';
// }

// function switchTab(idx, btn){
//   document.querySelectorAll('.mtab').forEach(t=>t.classList.remove('active'));
//   btn.classList.add('active');
//   document.querySelectorAll('.tab-panel').forEach((p,i)=>{
//     p.classList.toggle('active', i===idx);
//   });
// }

// function buildOverviewTab(e){
//   return `<div class="tab-panel active">
//     <div class="alert-box">📢 Always verify dates from official website. This is indicative data for guidance only.</div>
//     <div class="info-grid">
//       <div class="info-box"><div class="info-box-label">Conducting Body</div><div class="info-box-val" style="font-size:.85rem">${e.conducting}</div></div>
//       <div class="info-box"><div class="info-box-label">Vacancies</div><div class="info-box-val">${e.vacancies}</div></div>
//       <div class="info-box"><div class="info-box-label">Eligibility</div><div class="info-box-val" style="font-size:.85rem">${e.eligibility}</div></div>
//       <div class="info-box"><div class="info-box-label">Mode</div><div class="info-box-val">${e.mode}</div></div>
//       <div class="info-box"><div class="info-box-label">Language</div><div class="info-box-val">${e.language}</div></div>
//       <div class="info-box"><div class="info-box-label">Status</div><div class="info-box-val" style="color:${e.status==='active'?'#34d399':e.status==='upcoming'?'#fbbf24':'#64748b'}">${e.status.toUpperCase()}</div></div>
//     </div>
//     <h3 class="sec">Posts & Services</h3>
//     <p style="color:var(--text2);font-size:.9rem;line-height:1.7;">${e.posts}</p>
//   </div>`;
// }

// function buildSyllabusTab(e){
//   const boxes = Object.entries(e.syllabus).map(([k,v])=>`
//     <div class="syllabus-box">
//       <h4>${k}</h4>
//       <ul>${v.map(i=>`<li>${i}</li>`).join('')}</ul>
//     </div>
//   `).join('');
//   return `<div class="tab-panel">
//     <h3 class="sec">Complete Syllabus</h3>
//     <div class="syllabus-grid">${boxes}</div>
//   </div>`;
// }

// function buildPatternTab(e){
//   if(!e.pattern) return `<div class="tab-panel"><p style="color:var(--text3)">Pattern data not available</p></div>`;
//   const rows = e.pattern.map(p=>`
//     <tr>
//       <td><strong style="color:var(--text)">${p.stage}</strong></td>
//       <td>${p.papers}</td>
//       <td>${p.duration}</td>
//       <td><strong style="color:var(--accent)">${p.marks}</strong></td>
//     </tr>
//   `).join('');
//   return `<div class="tab-panel">
//     <h3 class="sec">Exam Pattern & Selection Process</h3>
//     <table class="cutoff-table">
//       <thead><tr><th>Stage</th><th>Papers / Events</th><th>Duration</th><th>Marks</th></tr></thead>
//       <tbody>${rows}</tbody>
//     </table>
//   </div>`;
// }

// function buildTimelineTab(e){
//   const events = [];
//   const fields = ['notification','applyLast','prelims','tier1','cbt1','written','exam','mains','tier2','cbt2','physical','pet','skill','ssb','interview','result'];
//   const labels = {
//     notification:'📢 Notification Released',applyLast:'📝 Last Date to Apply',
//     prelims:'📝 Preliminary Exam',tier1:'📝 Tier I Exam',cbt1:'📝 CBT Stage 1',
//     written:'📝 Written Exam',exam:'📝 Examination',mains:'📝 Main Exam',
//     tier2:'📝 Tier II Exam',cbt2:'📝 CBT Stage 2',physical:'🏃 Physical Test',
//     pet:'🏃 Physical Efficiency Test',skill:'⌨️ Skill Test',ssb:'🎖️ SSB Interview',
//     interview:'🎤 Interview / Personality Test',result:'🏆 Final Result'
//   };
//   fields.forEach(f=>{ if(e[f]) events.push({label:labels[f],date:e[f]}); });

//   return `<div class="tab-panel">
//     <h3 class="sec">Important Dates & Timeline</h3>
//     <ul class="timeline-list">
//       ${events.map(ev=>`<li class="timeline-item">
//         <span class="tl-date">${ev.date}</span>
//         <span class="tl-event">${ev.label}</span>
//       </li>`).join('')}
//     </ul>
//   </div>`;
// }

// function buildCutoffTab(e){
//   if(!e.cutoffs || !e.cutoffs.length){
//     return `<div class="tab-panel"><p style="color:var(--text3)">Cut-off data not available for this exam cycle</p></div>`;
//   }
//   const rows = e.cutoffs.map(c=>`
//     <tr>
//       <td><strong style="color:var(--accent)">${c.year}</strong></td>
//       <td>${c.general}</td>
//       <td>${c.obc}</td>
//       <td>${c.sc}</td>
//       <td>${c.st}</td>
//       <td>${c.ews}</td>
//     </tr>
//   `).join('');
//   return `<div class="tab-panel">
//     <h3 class="sec">Previous Year Cut-offs</h3>
//     <div style="overflow-x:auto">
//     <table class="cutoff-table">
//       <thead><tr><th>Year / Stage</th><th>General</th><th>OBC</th><th>SC</th><th>ST</th><th>EWS</th></tr></thead>
//       <tbody>${rows}</tbody>
//     </table>
//     </div>
//     <p style="color:var(--text3);font-size:.78rem;margin-top:12px">* Cut-offs are indicative. Actual values depend on vacancy, difficulty, and number of candidates.</p>
//   </div>`;
// }

// function buildMaterialTab(e){
//   if(!e.materials || !e.materials.length){
//     return `<div class="tab-panel"><p style="color:var(--text3)">Study material list not available</p></div>`;
//   }
//   return `<div class="tab-panel">
//     <h3 class="sec">Recommended Study Material</h3>
//     <div class="material-grid">
//       ${e.materials.map(m=>`
//         <div class="material-card">
//           <div class="mat-icon">${m.icon}</div>
//           <div>
//             <div class="mat-title">${m.title}</div>
//             <div class="mat-sub">${m.type} — ${m.desc}</div>
//           </div>
//         </div>
//       `).join('')}
//     </div>
//     <h3 class="sec" style="margin-top:28px">General Free Resources</h3>
//     <div class="material-grid">
//       <div class="material-card"><div class="mat-icon">🌐</div><div><div class="mat-title">Official Website</div><div class="mat-sub">Commission's official portal</div></div></div>
//       <div class="material-card"><div class="mat-icon">📰</div><div><div class="mat-title">Drishti IAS / Unacademy</div><div class="mat-sub">Free notes & articles</div></div></div>
//       <div class="material-card"><div class="mat-icon">🎥</div><div><div class="mat-title">YouTube — Free Classes</div><div class="mat-sub">Khan GS Research Centre</div></div></div>
//       <div class="material-card"><div class="mat-icon">📱</div><div><div class="mat-title">Testbook / Adda247 App</div><div class="mat-sub">Mock tests & quizzes</div></div></div>
//     </div>
//   </div>`;
// }

// /* ═══════════════════════════════════════════════
//    PAGE NAVIGATION (simple show/hide)
// ═══════════════════════════════════════════════ */
// function showPage(page){
//   document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
//   event.target.classList.add('active');
//   if(page==='central'){
//     setFilter('Central');
//     setCategory('all');
//     activeCategory='all';
//   } else if(page==='state'){
//     setFilter('all');
//     setCategory('state');
//     activeCategory='state';
//   } else if(page==='home'){
//     setFilter('all');
//     setCategory('all');
//     activeFilter='all';activeCategory='all';
//     renderGrid();
//   } else if(page==='calendar'){
//     showCalendarModal();
//     return;
//   } else if(page==='notifications'){
//     showNotifModal();
//     return;
//   }
//   document.querySelector('.main').scrollIntoView({behavior:'smooth'});
// }

// function showCalendarModal(){
//   document.getElementById('modalHeader').innerHTML = `
//     <div class="modal-icon" style="background:rgba(59,130,246,.15)">📅</div>
//     <div><div class="modal-title">Exam Calendar 2025</div><div class="modal-sub">Upcoming government exam dates</div></div>
//     <button class="modal-close" onclick="closeModal()">✕</button>
//   `;
//   document.getElementById('modalTabs').innerHTML = '';

//   const calEvents = [
//     {month:'April 2025',events:['UPSC CSE Prelims Application (Last Date)','RRB NTPC Registration Open','AP Group 1 Prelims']},
//     {month:'May 2025',events:['UPPSC PCS Prelims','GPSC Class I Prelims','SSC CGL 2025 Notification','NDA I Written Exam']},
//     {month:'June 2025',events:['APPSC Group 1 Prelims','SSC CGL Tier I','RRB NTPC CBT Stage 1','UPSC CSE Prelims','TS TET Exam','TNPSC Group 1 Prelims']},
//     {month:'July 2025',events:['IBPS PO Notification','TS Police SI Written','TN Police PC Exam','AP TET Exam','WBCS Prelims','SSC CGL Tier II']},
//     {month:'August 2025',events:['MPSC State Service Prelims','UPPSC PCS Mains','MPPSC Prelims','TS TET Results']},
//     {month:'September 2025',events:['RPSC RAS Prelims','KPSC KAS Prelims','NDA II Written Exam','IBPS PO Prelims','SSC CGL Tier II Final']},
//     {month:'October 2025',events:['APPSC Group 1 Mains','TNPSC Group 1 Mains','IBPS PO Mains','PPSC Mains']},
//     {month:'November 2025',events:['UPSC CSE Mains','GPSC Mains','WBCS Mains','JPSC Mains']},
//     {month:'December 2025',events:['TSPSC Group 1 Interviews','IBPS PO Results','SSC CGL Results']},
//   ];

//   document.getElementById('modalBody').innerHTML = `<div class="tab-panel active">
//     ${calEvents.map(m=>`
//       <h3 class="sec">${m.month}</h3>
//       <ul style="padding-left:0;list-style:none;">
//         ${m.events.map(ev=>`<li style="padding:8px 0;border-bottom:1px solid var(--border);font-size:.88rem;color:var(--text2);display:flex;gap:10px;align-items:center"><span style="color:var(--accent)">▸</span>${ev}</li>`).join('')}
//       </ul>
//     `).join('')}
//   </div>`;

//   document.getElementById('overlay').classList.add('open');
//   document.body.style.overflow='hidden';
// }

// function showNotifModal(){
//   document.getElementById('modalHeader').innerHTML = `
//     <div class="modal-icon" style="background:rgba(239,68,68,.15)">🔔</div>
//     <div><div class="modal-title">Live Notifications</div><div class="modal-sub">Latest government exam updates</div></div>
//     <button class="modal-close" onclick="closeModal()">✕</button>
//   `;
//   document.getElementById('modalTabs').innerHTML = '';

//   const notifs = [
//     {date:'Apr 28, 2025',exam:'UPSC CSE 2025',update:'Notification released. Apply at upsconline.gov.in',tag:'active'},
//     {date:'Apr 25, 2025',exam:'RRB NTPC 2025',update:'Registration window now open. Last date: May 15, 2025',tag:'active'},
//     {date:'Apr 22, 2025',exam:'SSC CGL 2025',update:'Exam schedule announced. Tier I: July 2025',tag:'upcoming'},
//     {date:'Apr 20, 2025',exam:'AP Group 1 2025',update:'Notification released by APPSC. Apply now',tag:'active'},
//     {date:'Apr 18, 2025',exam:'TSPSC AEE 2025',update:'Results declared. Check merit list on tspsc.gov.in',tag:'active'},
//     {date:'Apr 15, 2025',exam:'UP Police Constable 2025',update:'Exam city intimation released for 60,244 posts',tag:'active'},
//     {date:'Apr 12, 2025',exam:'IBPS PO 2025',update:'Notification expected in June 2025',tag:'upcoming'},
//     {date:'Apr 10, 2025',exam:'TN TRB PG Asst',update:'Counselling schedule announced at trb.tn.gov.in',tag:'active'},
//     {date:'Apr 08, 2025',exam:'MPSC State Service 2025',update:'Preliminary exam scheduled for August 2025',tag:'upcoming'},
//     {date:'Apr 05, 2025',exam:'Kerala PSC LDC',update:'Rank list published on keralapsc.gov.in',tag:'active'},
//     {date:'Apr 02, 2025',exam:'MPPSC 2025',update:'Online application form available at mppsc.mp.gov.in',tag:'active'},
//     {date:'Mar 28, 2025',exam:'RRB Group D 2025',update:'Notification to be released in April 2025',tag:'upcoming'},
//   ];

//   document.getElementById('modalBody').innerHTML = `<div class="tab-panel active">
//     ${notifs.map(n=>`<div style="display:flex;gap:16px;padding:14px 0;border-bottom:1px solid var(--border);align-items:flex-start">
//       <span style="font-family:'JetBrains Mono',monospace;font-size:.75rem;color:var(--text3);min-width:90px;padding-top:2px">${n.date}</span>
//       <div>
//         <div style="font-weight:600;font-size:.9rem;color:var(--accent);margin-bottom:4px">${n.exam}</div>
//         <div style="font-size:.85rem;color:var(--text2)">${n.update}</div>
//       </div>
//       <span class="status-badge status-${n.tag==='active'?'active':'upcoming'}" style="margin-left:auto;flex-shrink:0">${n.tag}</span>
//     </div>`).join('')}
//   </div>`;

//   document.getElementById('overlay').classList.add('open');
//   document.body.style.overflow='hidden';
// }

// // Keyboard close
// document.addEventListener('keydown',e=>{ if(e.key==='Escape') { document.getElementById('overlay').classList.remove('open'); document.body.style.overflow=''; }});

// // Init
// init();
// /* Extracted JS from index.html */
// /* ═══════════════════════════════════════════════
//    DATA
// ═══════════════════════════════════════════════ */
// const notifications = [
//   "🔔 UPSC Civil Services 2025 Notification Released — Apply by April 30 |",
//   "🔔 SSC CGL 2025 Exam Dates Announced — Tier I: July 2025 |",
//   "🔔 RRB NTPC 2025 Registration Open — Last Date May 15 |",
//   "🔔 AP APPSC Group 1 2025 Notification Out |",
//   "🔔 Telangana TSPSC AEE 2025 Results Declared |",
//   "🔔 UP Police Constable 2025 Exam Schedule Released |",
//   "🔔 IBPS PO 2025 Notification Expected June 2025 |",
//   "🔔 TN TRB PG Asst 2025 Counselling Ongoing |",
//   "🔔 Maharashtra MPSC State Service 2025 Prelims in August |",
//   "🔔 Kerala PSC LDC 2025 — Rank List Published |"
// ];

// const categories = [
//   {id:'all',icon:'🏛️',label:'All Exams'},
//   {id:'central',icon:'🇮🇳',label:'Central'},
//   {id:'upsc',icon:'👔',label:'UPSC'},
//   {id:'railway',icon:'🚂',label:'Railways'},
//   {id:'banking',icon:'🏦',label:'Banking'},
//   {id:'police',icon:'👮',label:'Police'},
//   {id:'teacher',icon:'📚',label:'Teaching'},
//   {id:'defence',icon:'⚔️',label:'Defence'},
//   {id:'state',icon:'🗺️',label:'State PSC'},
//   {id:'group',icon:'📋',label:'Group D/C/B'},
// ];

// const EXAMS = [
//   // central and many state entries...
// ];

// const INDIA_STATES = ['Andhra Pradesh','Telangana','Uttar Pradesh','Maharashtra','Rajasthan','Tamil Nadu','Karnataka','Kerala','West Bengal','Gujarat','Punjab','Jharkhand','Madhya Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Haryana','Himachal Pradesh','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Sikkim','Tripura','Uttarakhand'];

// const STATE_JOB_TEMPLATES = [ /* templates omitted for brevity in file but kept in original project */ ];

// function slugifyValue(value){
//   return value.toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'');
// }

// function buildStateJob(state, template, stateIndex){
//   return {
//     id:`${slugifyValue(state)}_${template.key}`,
//     title:`${state} ${template.titleSuffix}`,
//     short:template.short,
//     icon:template.icon,
//     state,
//     type:'state',
//     category:template.category,
//     colorBg:template.colorBg,
//     conducting:typeof template.conducting === 'function' ? template.conducting(state) : template.conducting,
//     posts:typeof template.posts === 'function' ? template.posts(state) : template.posts,
//     vacancies:template.vacancies,
//     eligibility:template.eligibility,
//     mode:template.mode,
//     language:template.language,
//     status:typeof template.status === 'function' ? template.status(stateIndex) : template.status,
//     notification:template.notification,
//     applyLast:template.applyLast,
//     prelims:template.prelims,
//     mains:template.mains,
//     interview:template.interview,
//     written:template.written,
//     exam:template.exam,
//     result:template.result,
//     physical:template.physical,
//     ssb:template.ssb,
//     skill:template.skill,
//     syllabus:template.syllabus,
//     pattern:template.pattern,
//     cutoffs:template.cutoffs,
//     materials:template.materials,
//   };
// }

// EXAMS.push(...INDIA_STATES.flatMap((state, stateIndex)=>STATE_JOB_TEMPLATES.map(template=>buildStateJob(state, template, stateIndex))));

// /* STATE / FILTER */
// let activeFilter = 'all';
// let activeCategory = 'all';
// let searchQuery = '';

// const states = ['Central','Andhra Pradesh','Telangana','Uttar Pradesh','Maharashtra','Rajasthan','Tamil Nadu','Karnataka','Kerala','West Bengal','Gujarat','Punjab','Jharkhand','Madhya Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Haryana','Himachal Pradesh','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Sikkim','Tripura','Uttarakhand'];

// function init(){
//   document.getElementById('notifText').textContent = notifications.join('  ');
//   const ql = document.getElementById('quickLinks');
//   categories.forEach(c=>{
//     ql.innerHTML += `<div class="quick-card" onclick="setCategory('${c.id}')">
//       <div class="quick-icon">${c.icon}</div>
//       <div class="quick-label">${c.label}</div>
//     </div>`;
//   });

//   const fc = document.getElementById('filterChips');
//   fc.innerHTML += `<span class="chip central ${activeFilter==='Central'?'active':''}" onclick="setFilter('Central')">🇮🇳 Central</span>`;
//   states.filter(s=>s!=='Central').forEach(s=>{
//     fc.innerHTML += `<span class="chip" onclick="setFilter('${s}')">${s}</span>`;
//   });
//   fc.innerHTML = `<span class="chip ${activeFilter==='all'?'active':''}" onclick="setFilter('all')">All States</span>` + fc.innerHTML;

//   renderGrid();
// }

// function setFilter(f){
//   activeFilter = f;
//   document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
//   event.target.classList.add('active');
//   renderGrid();
// }

// function setCategory(c){
//   activeCategory = c;
//   renderGrid();
//   document.getElementById('examGrid').scrollIntoView({behavior:'smooth',block:'start'});
// }

// function filterExams(){
//   searchQuery = document.getElementById('searchInput').value.toLowerCase();
//   renderGrid();
// }

// function renderGrid(){
//   const grid = document.getElementById('examGrid');
//   const title = document.getElementById('gridTitle');
//   let exams = EXAMS;
//   if(activeFilter !== 'all'){
//     exams = exams.filter(e=>e.state === activeFilter);
//   }
//   if(activeCategory !== 'all'){
//     exams = exams.filter(e=>e.category.includes(activeCategory));
//   }
//   if(searchQuery){
//     exams = exams.filter(e=>
//       e.title.toLowerCase().includes(searchQuery) ||
//       e.short.toLowerCase().includes(searchQuery) ||
//       e.state.toLowerCase().includes(searchQuery) ||
//       e.conducting.toLowerCase().includes(searchQuery) ||
//       e.posts.toLowerCase().includes(searchQuery)
//     );
//   }
//   let tl = 'All Government Exams';
//   if(activeFilter!=='all') tl = `${activeFilter} Exams`;
//   if(activeCategory!=='all'){
//     const cat = categories.find(c=>c.id===activeCategory);
//     tl = (cat?cat.label+' ':'')+tl;
//   }
//   title.textContent = `${tl} (${exams.length})`;
//   if(exams.length === 0){
//     grid.innerHTML = `<div class="empty" style="grid-column:1/-1">
//       <div class="empty-icon">🔍</div>
//       <h3>No exams found</h3>
//       <p>Try changing filters or search query</p>
//     </div>`;
//     return;
//   }
//   grid.innerHTML = exams.map(e=>{
//     const typeTag = e.type==='central'
//       ? `<span class="tag tag-central">Central</span>`
//       : `<span class="tag tag-state">${e.state}</span>`;
//     let catTags = '';
//     if(e.category.includes('railway')) catTags+=`<span class="tag tag-rail">Railway</span>`;
//     if(e.category.includes('police')) catTags+=`<span class="tag tag-police">Police</span>`;
//     if(e.category.includes('teacher')) catTags+=`<span class="tag tag-teach">Teaching</span>`;
//     if(e.category.includes('upsc')) catTags+=`<span class="tag tag-upsc">UPSC</span>`;
//     if(e.category.includes('banking')) catTags+=`<span class="tag tag-group">Banking</span>`;
//     if(e.category.includes('defence')) catTags+=`<span class="tag tag-police">Defence</span>`;
//     if(e.category.includes('group')) catTags+=`<span class="tag tag-group">Group Exam</span>`;
//     const statusClass = `status-${e.status}`;
//     const statusLabel = e.status==='active'?'🟢 Active':e.status==='upcoming'?'🟡 Upcoming':'⚫ Closed';
//     return `<div class="exam-card" onclick="openModal('${e.id}')">
//       <div class="card-head">
//         <div class="card-icon" style="background:${e.colorBg}">${e.icon}</div>
//         <div>
//           <div class="card-title">${e.title}</div>
//           <div class="card-sub">${e.conducting}</div>
//         </div>
//       </div>
//       <div class="card-tags">${typeTag}${catTags}</div>
//       <div class="card-body">
//         <div class="info-row"><span>Posts</span>${e.posts.length>60?e.posts.substring(0,60)+'…':e.posts}</div>
//         <div class="info-row"><span>Vacancies</span>${e.vacancies}</div>
//         <div class="info-row"><span>Eligibility</span>${e.eligibility}</div>
//         <div class="info-row"><span>Mode</span>${e.mode}</div>
//       </div>
//       <div class="card-footer">
//         <span class="status-badge ${statusClass}">${statusLabel}</span>
//         <button class="view-btn">View Details →</button>
//       </div>
//     </div>`;
//   }).join('');
// }

// /* MODAL and other functions (openModal, closeModal, switchTab, builders, nav, showCalendarModal, showNotifModal, keyboard close) are included in the original script and should be preserved here. */

// // Keyboard close
// document.addEventListener('keydown',e=>{ if(e.key==='Escape') { document.getElementById('overlay').classList.remove('open'); document.body.style.overflow=''; }});

// // Init
// init();
