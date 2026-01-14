
import { ContentData } from '../types';

export const CONTENT: Record<'en' | 'ar', ContentData> = {
  en: {
    navigation: {
      home: "Home",
      decisionMaps: "Decision Maps",
      lifeSimulation: "Life Simulation",
      unwrittenRules: "Unwritten Rules",
      about: "Philosophy",
    },
    home: {
      heroTitle: "Master Your Path",
      heroSubtitle: "Strategic maps, life simulations, and the unwritten laws of success.",
      cta: "Explore Now",
      cards: {
        decisionMaps: { title: "Decision Maps", desc: "Complex logic trees for career and life pivots." },
        lifeSimulation: { title: "Life Simulation", desc: "Experience consequences through different personas." },
        unwrittenRules: { title: "Unwritten Rules", desc: "The hidden database of social and professional etiquette." },
      }
    },
    about: {
      title: "Our Philosophy",
      philosophyTitle: "The Logic of Life",
      philosophyBody: "We believe that life is a series of interconnected decisions. By mapping the variables, we can navigate complexity with clarity. This platform is built to provide structural thinking for messy real-world scenarios.",
      visionTitle: "Empowering Strategy",
      visionBody: "Our vision is to provide a repository of collective wisdom, translated into actionable interactive experiences. No AI, just distilled human experience and logic.",
    },
    decisionMaps: {
      title: "Decision Trees",
      subtitle: "Map your future with logic and structure.",
      trees: {
        careers: [
          {
            id: "root",
            question: "Choose your primary career domain:",
            options: [
              { id: "tech", label: "Technology", description: "Software, Data, Hardware", nextStep: "tech_path" },
              { id: "health", label: "Health", description: "Medicine, Nursing, Research", result: "A noble path requiring deep resilience and empathy. Specialize early." },
              { id: "edu", label: "Education", description: "Teaching, Academic Research", result: "Impact-driven path. Focus on pedagogical innovation and digital learning." },
              { id: "fin", label: "Finance", description: "Banking, Investment, Crypto", result: "High stakes, high rewards. Analytical rigor is your primary tool." },
              { id: "art", label: "Art", description: "Design, Visual Arts, Music", result: "The creative economy. Success depends on personal branding and consistency." }
            ]
          },
          {
            id: "tech_path",
            question: "Which aspect of tech fascinates you most?",
            options: [
              { id: "code", label: "Coding", description: "Building the engine", result: "Software Engineering is the backbone of the modern world. Master 1-2 stacks deeply." },
              { id: "data", label: "Data Science", description: "Interpreting the world", result: "Become the translator of information. Focus on statistics and machine learning." },
              { id: "uiux", label: "Design/UX", description: "The human interface", result: "Bridge the gap between technology and humans. Empathy is your superpower." },
              { id: "cyber", label: "Cybersecurity", description: "Protecting systems", result: "High demand. Continuous learning is mandatory to stay ahead of threats." },
              { id: "mgmt", label: "Product Management", description: "The vision holder", result: "Combine business, tech, and user needs. Communication is the key here." }
            ]
          }
        ],
        education: [
          {
            id: "root",
            question: "What is your academic inclination?",
            options: [
              { id: "eng", label: "Engineering", description: "Structural thinking", result: "Focus on problem solving. The future belongs to those who build it." },
              { id: "med", label: "Medicine", description: "Human biology", result: "A long marathon of learning. Resilience is as important as intelligence." },
              { id: "soc", label: "Social Sciences", description: "Understanding society", result: "Crucial for policy and human understanding. Diversify your skills with data." },
              { id: "biz", label: "Business", description: "Market dynamics", result: "Focus on networking and practical experience over theoretical grades." },
              { id: "fine", label: "Fine Arts", description: "Expression", result: "Master your craft and understand the business of art to thrive." }
            ]
          }
        ],
        personal: [
          {
            id: "root",
            question: "Which life change are you considering?",
            options: [
              { id: "move", label: "Move to new city", description: "Fresh start", result: "Research the cost of living vs. networking opportunities first." },
              { id: "social", label: "Expand social circle", description: "New connections", result: "Attend niche meetups. Quality of connection beats quantity." },
              { id: "remote", label: "Go fully remote", description: "Work from anywhere", result: "Establish strict boundaries between home and work life to avoid burnout." },
              { id: "learn", label: "New skill/Hobby", description: "Self-growth", result: "Dedicate 20 hours of focused practice to see immediate results." },
              { id: "invest", label: "First investment", description: "Wealth building", result: "Diversify. Never invest more than you are willing to lose." }
            ]
          }
        ]
      }
    },
    lifeSimulation: {
      title: "Life Simulation",
      subtitle: "Live through the decisions of our diverse personas.",
      personas: [
        {
          id: "p1",
          name: "Sami",
          title: "The Tech Professional",
          description: "A 24-year-old junior developer facing career choices.",
          image: "https://picsum.photos/400/300?random=1",
          steps: [
            {
              id: "s1",
              question: "A high-paying but boring corporate job offer arrives. What do you do?",
              options: [
                { id: "o1", label: "Accept", description: "Stability first", result: "You gain financial freedom but feel stagnated after 12 months." },
                { id: "o2", label: "Negotiate", description: "Ask for remote days", result: "They agree! You get better balance and start a side project." },
                { id: "o3", label: "Reject", description: "Wait for a startup", result: "3 months of stress, but you eventually find a dream role." },
                { id: "o4", label: "Stay at current", description: "Loyalty", result: "The company pivots. You are promoted but overworked." },
                { id: "o5", label: "Freelance", description: "Go solo", result: "Income is erratic, but your skills grow exponentially." }
              ]
            }
          ]
        },
        {
          id: "p2",
          name: "Lina",
          title: "The University Student",
          description: "Finding her way in her third year of studies.",
          image: "https://picsum.photos/400/300?random=2",
          steps: [
            {
              id: "s1",
              question: "Final year project choice:",
              options: [
                { id: "o1", label: "Research Thesis", description: "Academic focus", result: "Paves the way for a Master's degree abroad." },
                { id: "o2", label: "Industry Project", description: "Practical focus", result: "A job offer arrives before you even graduate." },
                { id: "o3", label: "Group Startup", description: "Risk-taker", result: "The project fails as a business but becomes a viral portfolio piece." },
                { id: "o4", label: "Study Abroad", description: "New perspective", result: "You learn more about yourself than the subject." },
                { id: "o5", label: "Part-time work", description: "Financial focus", result: "Grades suffer slightly, but bank account is healthy." }
              ]
            }
          ]
        },
        {
          id: "p3",
          name: "Omar",
          title: "The Entrepreneur",
          description: "Attempting to scale a small e-commerce brand.",
          image: "https://picsum.photos/400/300?random=3",
          steps: [
            {
              id: "s1",
              question: "How do you fund your next growth stage?",
              options: [
                { id: "o1", label: "Bootstrap", description: "Use own profits", result: "Slow growth, but you own 100% of the dream." },
                { id: "o2", label: "Angel Investor", description: "External capital", result: "Fast growth, but now you have a boss again." },
                { id: "o3", label: "Crowdfunding", description: "Community power", result: "Great marketing, but delivery logistics are a nightmare." },
                { id: "o4", label: "Bank Loan", description: "Debt financing", result: "Pressure is high. You work 80 hours a week to repay." },
                { id: "o5", label: "Pivot", description: "Change product", result: "You find a 'Blue Ocean' market and dominate it quickly." }
              ]
            }
          ]
        }
      ]
    },
    unwrittenRules: {
      title: "The Unwritten Rules",
      subtitle: "The database of common sense and social strategy.",
      rules: [
        { id: 1, category: 'work', title: "Clarify Expectations Early", explanation: "Ambiguity is the enemy of performance. Always ask: 'What does success look like for this task?'", examples: ["Asking for a deadline before starting.", "Clarifying priorities with a manager."] },
        { id: 2, category: 'money', title: "Save Before Spending", explanation: "Treat savings as your first mandatory monthly bill. What remains is your budget.", examples: ["Automatic transfers to savings.", "The 50/30/20 rule."] },
        { id: 3, category: 'relationships', title: "Listen More Than You Speak", explanation: "Listening builds influence and trust faster than any monologue.", examples: ["Wait 2 seconds after someone finishes before replying.", "Repeat back what you heard to confirm."] },
        { id: 4, category: 'growth', title: "The 5-Minute Rule", explanation: "If a task takes less than 5 minutes, do it now. If it takes more, schedule it.", examples: ["Replying to a quick email.", "Putting away laundry."] },
        { id: 5, category: 'work', title: "Punctuality is a Message", explanation: "Being on time says you respect other people's most valuable asset: their time.", examples: ["Joining a meeting 2 minutes early.", "Calling ahead if 5 mins late."] },
        { id: 6, category: 'money', title: "Avoid Consumer Debt", explanation: "Never borrow money for things that lose value (cars, electronics) unless essential.", examples: ["Paying off credit cards in full.", "Buying used over new."] },
        { id: 7, category: 'growth', title: "Compound Interest of Skills", explanation: "A 1% improvement every day leads to massive transformation over a year.", examples: ["Reading 10 pages a day.", "Learning 1 new word daily."] },
        { id: 8, category: 'relationships', title: "Don't Criticize in Public", explanation: "Correct someone privately to maintain their dignity and your professional relationship.", examples: ["Taking a colleague aside.", "Sending a private DM instead of a group reply."] },
        { id: 9, category: 'work', title: "Your Network is Your Net Worth", explanation: "Relationships open doors that merit alone cannot.", examples: ["Networking without needing anything.", "Connecting two people who can help each other."] },
        { id: 10, category: 'growth', title: "Learn to Say No", explanation: "Every 'Yes' is a 'No' to something else. Guard your focus.", examples: ["Declining social events during busy weeks.", "Turning down low-value projects."] }
      ]
    }
  },
  ar: {
    navigation: {
      home: "الرئيسية",
      decisionMaps: "خرائط القرارات",
      lifeSimulation: "محاكاة الحياة",
      unwrittenRules: "القواعد غير المكتوبة",
      about: "الفلسفة",
    },
    home: {
      heroTitle: "أتقن مسارك",
      heroSubtitle: "خرائط استراتيجية، محاكاة للحياة، والقوانين الخفية للنجاح.",
      cta: "استكشف الآن",
      cards: {
        decisionMaps: { title: "خرائط القرارات", desc: "أشجار منطقية معقدة للتحولات المهنية والحياتية." },
        lifeSimulation: { title: "محاكاة الحياة", desc: "عش النتائج من خلال شخصيات واقعية مختلفة." },
        unwrittenRules: { title: "القواعد غير المكتوبة", desc: "قاعدة بيانات القواعد الخفية للإتيكيت المهني والاجتماعي." },
      }
    },
    about: {
      title: "فلسفتنا",
      philosophyTitle: "منطق الحياة",
      philosophyBody: "نحن نؤمن بأن الحياة عبارة عن سلسلة من القرارات المترابطة. من خلال رسم المتغيرات، يمكننا التنقل في التعقيدات بوضوح. تم بناء هذه المنصة لتوفير تفكير هيكلي للسيناريوهات الحقيقية.",
      visionTitle: "تمكين الاستراتيجية",
      visionBody: "رؤيتنا هي توفير مستودع للحكمة الجماعية، مترجمة إلى تجارب تفاعلية قابلة للتطبيق. لا ذكاء اصطناعي، فقط خبرة ومنطق بشري مقطر.",
    },
    decisionMaps: {
      title: "أشجار القرارات",
      subtitle: "ارسم مستقبلك بالمنطق والهيكل.",
      trees: {
        careers: [
          {
            id: "root",
            question: "اختر مجالك المهني الأساسي:",
            options: [
              { id: "tech", label: "التكنولوجيا", description: "البرمجيات، البيانات، العتاد", nextStep: "tech_path" },
              { id: "health", label: "الصحة", description: "الطب، التمريض، الأبحاث", result: "مسار نبيل يتطلب مرونة عميقة وتعاطفاً. تخصص مبكراً." },
              { id: "edu", label: "التعليم", description: "التدريس، البحث الأكاديمي", result: "مسار قائم على التأثير. ركز على الابتكار التربوي والتعلم الرقمي." },
              { id: "fin", label: "المالية", description: "الخدمات المصرفية، الاستثمار، الكريبتو", result: "مخاطر عالية، مكافآت عالية. الصرامة التحليلية هي أداتك الأساسية." },
              { id: "art", label: "الفن", description: "التصميم، الفنون البصرية، الموسيقى", result: "الاقتصاد الإبداعي. النجاح يعتمد على العلامة التجارية الشخصية والاستمرارية." }
            ]
          },
          {
            id: "tech_path",
            question: "ما هو الجانب التكنولوجي الذي يثير اهتمامك أكثر؟",
            options: [
              { id: "code", label: "البرمجة", description: "بناء المحرك", result: "هندسة البرمجيات هي العمود الفقري للعالم الحديث. أتقن تقنية واحدة أو اثنتين بعمق." },
              { id: "data", label: "علم البيانات", description: "تفسير العالم", result: "كن مترجماً للمعلومات. ركز على الإحصاء وتعلم الآلة." },
              { id: "uiux", label: "التصميم/تجربة المستخدم", description: "الواجهة الإنسانية", result: "سد الفجوة بين التكنولوجيا والبشر. التعاطف هو قوتك الخارقة." },
              { id: "cyber", label: "الأمن السيبراني", description: "حماية الأنظمة", result: "طلب مرتفع. التعلم المستمر إلزامي للبقاء متقدماً على التهديدات." },
              { id: "mgmt", label: "إدارة المنتجات", description: "صاحب الرؤية", result: "اجمع بين الأعمال والتكنولوجيا واحتياجات المستخدم. التواصل هو المفتاح هنا." }
            ]
          }
        ],
        education: [
          {
            id: "root",
            question: "ما هو ميلك الأكاديمي؟",
            options: [
              { id: "eng", label: "الهندسة", description: "التفكير الهيكلي", result: "ركز على حل المشكلات. المستقبل لمن يبنيه." },
              { id: "med", label: "الطب", description: "البيولوجيا البشرية", result: "ماراثون طويل من التعلم. المرونة لا تقل أهمية عن الذكاء." },
              { id: "soc", label: "العلوم الاجتماعية", description: "فهم المجتمع", result: "حاسم للسياسة والفهم البشري. نوّع مهاراتك بالبيانات." },
              { id: "biz", label: "الأعمال", description: "ديناميكيات السوق", result: "ركز على بناء الشبكات والخبرة العملية أكثر من الدرجات النظرية." },
              { id: "fine", label: "الفنون الجميلة", description: "التعبير", result: "أتقن حرفتك وافهم جانب الأعمال في الفن لتزدهر." }
            ]
          }
        ],
        personal: [
          {
            id: "root",
            question: "أي تغيير حياتي تفكر فيه؟",
            options: [
              { id: "move", label: "الانتقال لمدينة جديدة", description: "بداية جديدة", result: "ابحث في تكلفة المعيشة مقابل فرص التواصل أولاً." },
              { id: "social", label: "توسيع الدائرة الاجتماعية", description: "اتصالات جديدة", result: "احضر لقاءات متخصصة. جودة الاتصال أهم من كميته." },
              { id: "remote", label: "العمل عن بعد بالكامل", description: "العمل من أي مكان", result: "ضع حدوداً صارمة بين الحياة المنزلية والعملية لتجنب الاحتراق." },
              { id: "learn", label: "مهارة/هواية جديدة", description: "نمو ذاتي", result: "خصص 20 ساعة من الممارسة المركزة لرؤية نتائج فورية." },
              { id: "invest", label: "الاستثمار الأول", description: "بناء الثروة", result: "نوّع استثماراتك. لا تستثمر أبداً أكثر مما يمكنك تحمل خسارته." }
            ]
          }
        ]
      }
    },
    lifeSimulation: {
      title: "محاكاة الحياة",
      subtitle: "عش من خلال قرارات شخصياتنا المتنوعة.",
      personas: [
        {
          id: "p1",
          name: "سامي",
          title: "المحترف التقني",
          description: "مطور مبتدئ يبلغ من العمر 24 عاماً يواجه خيارات مهنية.",
          image: "https://picsum.photos/400/300?random=1",
          steps: [
            {
              id: "s1",
              question: "وصلك عرض عمل مؤسسي ممل ولكن براتب مرتفع. ماذا تفعل؟",
              options: [
                { id: "o1", label: "قبول", description: "الاستقرار أولاً", result: "تحصل على حرية مالية ولكن تشعر بالركود بعد 12 شهراً." },
                { id: "o2", label: "تفاوض", description: "طلب أيام عمل عن بعد", result: "لقد وافقوا! تحصل على توازن أفضل وتبدأ مشروعاً جانبياً." },
                { id: "o3", label: "رفض", description: "انتظار شركة ناشئة", result: "3 أشهر من التوتر، لكنك تجد أخيراً الدور الذي تحلم به." },
                { id: "o4", label: "البقاء في الحالي", description: "الولاء", result: "تغير الشركة مسارها. تمت ترقيتك ولكن مع عمل مفرط." },
                { id: "o5", label: "العمل الحر", description: "العمل منفرداً", result: "الدخل غير مستقر، لكن مهاراتك تنمو بشكل هائل." }
              ]
            }
          ]
        },
        {
          id: "p2",
          name: "لينا",
          title: "طالبة جامعة",
          description: "تبحث عن طريقها في سنتها الدراسية الثالثة.",
          image: "https://picsum.photos/400/300?random=2",
          steps: [
            {
              id: "s1",
              question: "خيار مشروع السنة النهائية:",
              options: [
                { id: "o1", label: "أطروحة بحثية", description: "تركيز أكاديمي", result: "تمهد الطريق للحصول على درجة الماجستير في الخارج." },
                { id: "o2", label: "مشروع صناعي", description: "تركيز عملي", result: "يأتيك عرض عمل قبل أن تتخرج." },
                { id: "o3", label: "شركة ناشئة جماعية", description: "مخاطرة", result: "يفشل المشروع كعمل تجاري ولكنه يصبح قطعة قوية في معرض أعمالك." },
                { id: "o4", label: "الدراسة بالخارج", description: "منظور جديد", result: "تتعلم عن نفسك أكثر مما تتعلم عن المادة." },
                { id: "o5", label: "عمل جزئي", description: "تركيز مالي", result: "تتأثر الدرجات قليلاً، لكن الحساب البنكي بصحة جيدة." }
              ]
            }
          ]
        },
        {
          id: "p3",
          name: "عمر",
          title: "رائد أعمال",
          description: "يحاول توسيع علامة تجارية صغيرة للتجارة الإلكترونية.",
          image: "https://picsum.photos/400/300?random=3",
          steps: [
            {
              id: "s1",
              question: "كيف تمول مرحلة نموك التالية؟",
              options: [
                { id: "o1", label: "التمويل الذاتي", description: "استخدام أرباحك", result: "نمو بطيء، لكنك تمتلك الحلم بنسبة 100%." },
                { id: "o2", label: "مستثمر ملائكي", description: "رأس مال خارجي", result: "نمو سريع، ولكن الآن لديك رئيس عمل مرة أخرى." },
                { id: "o3", label: "التمويل الجماعي", description: "قوة المجتمع", result: "تسويق رائع، لكن لوجستيات التوصيل كابوس." },
                { id: "o4", label: "قرض بنكي", description: "تمويل بالديون", result: "الضغط مرتفع. تعمل 80 ساعة في الأسبوع للسداد." },
                { id: "o5", label: "تغيير المسار", description: "تغيير المنتج", result: "تجد سوقاً بكر وتسيطر عليه بسرعة." }
              ]
            }
          ]
        }
      ]
    },
    unwrittenRules: {
      title: "القواعد غير المكتوبة",
      subtitle: "قاعدة بيانات الفطرة السليمة والاستراتيجية الاجتماعية.",
      rules: [
        { id: 1, category: 'work', title: "وضح التوقعات مبكراً", explanation: "الغموض هو عدو الأداء. اسأل دائماً: 'كيف يبدو النجاح لهذه المهمة؟'", examples: ["طلب موعد نهائي قبل البدء.", "توضيح الأولويات مع المدير."] },
        { id: 2, category: 'money', title: "الادخار قبل الإنفاق", explanation: "عامل الادخار كأول فاتورة شهرية إلزامية. ما يتبقى هو ميزانيتك.", examples: ["تحويلات تلقائية للادخار.", "قاعدة 50/30/20."] },
        { id: 3, category: 'relationships', title: "الاستماع أكثر مما تتحدث", explanation: "الاستماع يبني التأثير والثقة بشكل أسرع من أي حديث منفرد.", examples: ["انتظر ثانيتين بعد انتهاء الشخص قبل الرد.", "كرر ما سمعته للتأكيد."] },
        { id: 4, category: 'growth', title: "قاعدة الـ 5 دقائق", explanation: "إذا كانت المهمة تستغرق أقل من 5 دقائق، افعلها الآن. إذا كانت أكثر، جدولها.", examples: ["الرد على بريد سريع.", "ترتيب الملابس."] },
        { id: 5, category: 'work', title: "الالتزام بالمواعيد رسالة", explanation: "الوصول في الوقت المحدد يعني أنك تحترم أغلى أصول الآخرين: وقتهم.", examples: ["الانضمام للاجتماع قبل دقيقتين.", "الاتصال مسبقاً إذا تأخرت 5 دقائق."] },
        { id: 6, category: 'money', title: "تجنب ديون الاستهلاك", explanation: "لا تقترض أبداً لأشياء تفقد قيمتها (سيارات، إلكترونيات) ما لم تكن ضرورية.", examples: ["سداد بطاقات الائتمان بالكامل.", "شراء المستعمل بدلاً من الجديد."] },
        { id: 7, category: 'growth', title: "الفائدة المركبة للمهارات", explanation: "تحسن بنسبة 1% كل يوم يؤدي إلى تحول هائل خلال عام.", examples: ["قراءة 10 صفحات يومياً.", "تعلم كلمة جديدة يومياً."] },
        { id: 8, category: 'relationships', title: "لا تنتقد في العلن", explanation: "صحح خطأ شخص ما على انفراد للحفاظ على كرامته وعلاقتك المهنية.", examples: ["أخذ الزميل جانباً.", "إرسال رسالة خاصة بدلاً من رد جماعي."] },
        { id: 9, category: 'work', title: "شبكتك هي ثروتك", explanation: "العلاقات تفتح أبواباً لا يمكن للاستحقاق وحده فتحها.", examples: ["بناء العلاقات دون الحاجة لشيء.", "توصيل شخصين ببعضهما للفائدة."] },
        { id: 10, category: 'growth', title: "تعلم أن تقول لا", explanation: "كل 'نعم' هي 'لا' لشيء آخر. احمِ تركيزك.", examples: ["رفض المناسبات الاجتماعية في أسابيع العمل المزدحمة.", "رفض المشاريع ذات القيمة المنخفض."] }
      ]
    }
  }
};
