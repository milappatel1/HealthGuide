import { Disease, BodySystem } from '../types/Disease';

export const bodySystems: BodySystem[] = [
  {
    id: 'cardiovascular',
    name: 'Cardiovascular System',
    description: 'Your heart and blood vessels work together like a delivery system, pumping blood with oxygen and nutrients to every part of your body.',
    icon: 'Heart',
    diseases: ['hypertension']
  },
  {
    id: 'nervous',
    name: 'Nervous System',
    description: 'Your brain, spinal cord, and nerves act as your body\'s command center, controlling everything you think, feel, and do.',
    icon: 'Brain',
    diseases: ['migraine']
  },
  {
    id: 'digestive',
    name: 'Digestive System',
    description: 'Your stomach, intestines, and other organs break down food into nutrients your body can use for energy and growth.',
    icon: 'Apple',
    diseases: ['gastritis', 'ibs']
  },
  {
    id: 'respiratory',
    name: 'Respiratory System',
    description: 'Your lungs and airways bring fresh oxygen into your body and remove waste gases like carbon dioxide.',
    icon: 'Lung',
    diseases: ['asthma', 'pneumonia', 'common-cold']
  },
  {
    id: 'musculoskeletal',
    name: 'Musculoskeletal System',
    description: 'Your bones, muscles, and joints work together to give your body structure, support, and the ability to move.',
    icon: 'Bone',
    diseases: ['arthritis', 'osteoporosis']
  },
  {
    id: 'endocrine',
    name: 'Endocrine System',
    description: 'Your glands produce hormones that act like chemical messengers, controlling growth, metabolism, and many body functions.',
    icon: 'Zap',
    diseases: ['diabetes-type-2']
  },
  {
    id: 'immune',
    name: 'Immune System',
    description: 'Your body\'s defense system that protects you from germs, viruses, and other harmful substances that could make you sick.',
    icon: 'Shield',
    diseases: ['allergies', 'autoimmune-disorders']
  },
  {
    id: 'integumentary',
    name: 'Integumentary System',
    description: 'Your skin, hair, and nails form a protective barrier that keeps harmful things out and helps regulate your body temperature.',
    icon: 'Sun',
    diseases: ['eczema', 'psoriasis']
  },
  {
    id: 'urinary',
    name: 'Urinary System',
    description: 'Your kidneys and bladder filter waste from your blood and remove it from your body through urine.',
    icon: 'Droplets',
    diseases: ['kidney-stones', 'uti']
  },
  {
    id: 'reproductive',
    name: 'Reproductive System',
    description: 'The organs that allow humans to create new life and continue the human species.',
    icon: 'Baby',
    diseases: ['pcos', 'endometriosis']
  },
  {
    id: 'lymphatic',
    name: 'Lymphatic System',
    description: 'A network of vessels and organs that helps your immune system fight infections and maintains fluid balance in your body.',
    icon: 'Activity',
    diseases: ['lymphedema', 'swollen-lymph-nodes']
  },
  {
    id: 'sensory',
    name: 'Sensory System',
    description: 'Your eyes, ears, nose, tongue, and skin help you see, hear, smell, taste, and feel the world around you.',
    icon: 'Eye',
    diseases: ['vision-problems', 'hearing-loss']
  }
];

export const diseases: Disease[] = [
  {
    id: 'common-cold',
    name: 'Common Cold',
    category: 'Viral Infection',
    bodySystem: 'respiratory',
    summary: 'A mild viral infection of the nose and throat that usually resolves on its own within a week.',
    symptoms: [
      'Runny or stuffy nose',
      'Sneezing',
      'Sore throat',
      'Mild cough',
      'Low-grade fever',
      'Body aches',
      'Fatigue'
    ],
    causes: [
      'Rhinoviruses (most common)',
      'Coronaviruses',
      'Respiratory syncytial virus (RSV)',
      'Parainfluenza viruses',
      'Close contact with infected person',
      'Touching contaminated surfaces'
    ],
    diagnosis: [
      'Usually diagnosed based on symptoms',
      'Physical examination',
      'No specific tests needed for typical cases',
      'Throat swab if bacterial infection suspected'
    ],
    treatment: [
      'Rest and plenty of fluids',
      'Over-the-counter pain relievers',
      'Throat lozenges or warm salt water gargles',
      'Humidifier or steam inhalation',
      'Decongestants for nasal congestion',
      'Antibiotics are not effective (viral infection)'
    ],
    prevention: [
      'Wash hands frequently',
      'Avoid touching face with unwashed hands',
      'Stay away from sick people',
      'Don\'t share personal items',
      'Maintain good overall health',
      'Get adequate sleep'
    ],
    simpleExplanation: {
      whatIs: 'A cold is when tiny germs called viruses get into your nose and throat, making you feel sick for a few days.',
      howYouGet: 'You can catch a cold when someone who is sick coughs or sneezes near you, or when you touch something they touched and then touch your face.',
      howToFeel: 'You might have a runny nose, sneeze a lot, have a scratchy throat, and feel tired. It\'s like your body is fighting off the bad germs.',
      howToGetBetter: 'Rest in bed, drink lots of water, and your body will fight off the germs in about a week. Medicine can help you feel better while you heal.'
    },
    severity: 'mild',
    commonness: 'very-common'
  },
  {
    id: 'diabetes-type-2',
    name: 'Type 2 Diabetes',
    category: 'Metabolic Disorder',
    bodySystem: 'endocrine',
    summary: 'A condition where the body cannot properly use insulin to control blood sugar levels.',
    symptoms: [
      'Increased thirst and urination',
      'Unexplained weight loss',
      'Fatigue',
      'Blurred vision',
      'Slow-healing wounds',
      'Frequent infections',
      'Tingling in hands or feet'
    ],
    causes: [
      'Insulin resistance',
      'Genetics and family history',
      'Being overweight or obese',
      'Physical inactivity',
      'Age (over 45)',
      'High blood pressure',
      'Abnormal cholesterol levels'
    ],
    diagnosis: [
      'Fasting blood glucose test',
      'Oral glucose tolerance test',
      'Hemoglobin A1C test',
      'Random blood glucose test',
      'Regular screening for at-risk individuals'
    ],
    treatment: [
      'Healthy diet and meal planning',
      'Regular physical exercise',
      'Blood glucose monitoring',
      'Oral diabetes medications',
      'Insulin therapy if needed',
      'Regular medical check-ups'
    ],
    prevention: [
      'Maintain healthy weight',
      'Exercise regularly',
      'Eat a balanced diet',
      'Limit processed foods and sugar',
      'Don\'t smoke',
      'Regular health screenings'
    ],
    simpleExplanation: {
      whatIs: 'Diabetes is when your body has trouble using sugar from food for energy, so the sugar stays in your blood instead of going into your cells.',
      howYouGet: 'It usually happens when you get older, don\'t exercise much, or eat too much unhealthy food. Sometimes it runs in families.',
      howToFeel: 'You might feel very thirsty, need to go to the bathroom a lot, feel tired, or have blurry vision because there\'s too much sugar in your blood.',
      howToGetBetter: 'You need to eat healthy foods, exercise, and sometimes take medicine to help your body use sugar better. A doctor will help you learn how to take care of yourself.'
    },
    severity: 'moderate',
    commonness: 'common'
  },
  {
    id: 'hypertension',
    name: 'High Blood Pressure (Hypertension)',
    category: 'Cardiovascular Disorder',
    bodySystem: 'cardiovascular',
    summary: 'A condition where blood pushes against artery walls with too much force, potentially damaging blood vessels and organs.',
    symptoms: [
      'Often no symptoms (silent killer)',
      'Headaches',
      'Shortness of breath',
      'Nosebleeds',
      'Chest pain',
      'Dizziness',
      'Vision problems'
    ],
    causes: [
      'Unknown cause (primary hypertension)',
      'Kidney disease',
      'Sleep apnea',
      'Thyroid problems',
      'Certain medications',
      'Excessive salt intake',
      'Lack of physical activity'
    ],
    diagnosis: [
      'Blood pressure measurements',
      'Multiple readings over time',
      'Ambulatory blood pressure monitoring',
      'Home blood pressure monitoring',
      'Tests to check for organ damage'
    ],
    treatment: [
      'Lifestyle changes (diet, exercise)',
      'Reduce sodium intake',
      'Limit alcohol consumption',
      'Blood pressure medications',
      'Regular monitoring',
      'Stress management'
    ],
    prevention: [
      'Maintain healthy weight',
      'Exercise regularly',
      'Eat less salt',
      'Limit alcohol',
      'Don\'t smoke',
      'Manage stress'
    ],
    simpleExplanation: {
      whatIs: 'High blood pressure means your heart is pushing blood through your body too hard, like water flowing through a hose with too much pressure.',
      howYouGet: 'It can happen from eating too much salty food, not exercising, being stressed, or sometimes it just happens as you get older.',
      howToFeel: 'Most people don\'t feel anything at first, which is why it\'s called the "silent killer." Sometimes you might get headaches or feel dizzy.',
      howToGetBetter: 'Eat healthier foods with less salt, exercise more, and take medicine if your doctor says you need it. Check your blood pressure regularly.'
    },
    severity: 'moderate',
    commonness: 'very-common'
  },
  {
    id: 'asthma',
    name: 'Asthma',
    category: 'Respiratory Disorder',
    bodySystem: 'respiratory',
    summary: 'A condition where airways become inflamed and narrow, making it difficult to breathe.',
    symptoms: [
      'Wheezing',
      'Shortness of breath',
      'Chest tightness',
      'Coughing (especially at night)',
      'Difficulty speaking',
      'Fatigue during physical activity',
      'Trouble sleeping due to breathing problems'
    ],
    causes: [
      'Allergens (pollen, dust mites, pet dander)',
      'Respiratory infections',
      'Physical activity',
      'Cold air',
      'Air pollutants and irritants',
      'Strong emotions and stress',
      'Certain medications'
    ],
    diagnosis: [
      'Medical history and physical exam',
      'Lung function tests (spirometry)',
      'Peak flow measurement',
      'Allergy testing',
      'Chest X-ray',
      'Response to bronchodilator medication'
    ],
    treatment: [
      'Quick-relief inhalers (rescue medications)',
      'Long-term control medications',
      'Allergy medications',
      'Avoiding known triggers',
      'Asthma action plan',
      'Regular monitoring'
    ],
    prevention: [
      'Identify and avoid triggers',
      'Take medications as prescribed',
      'Get vaccinated against flu and pneumonia',
      'Maintain good indoor air quality',
      'Exercise regularly (with proper precautions)',
      'Manage stress'
    ],
    simpleExplanation: {
      whatIs: 'Asthma makes the tubes in your lungs get swollen and tight, making it hard to breathe, like trying to breathe through a narrow straw.',
      howYouGet: 'Some people are born with it, and it can be triggered by things like dust, pets, exercise, or getting sick.',
      howToFeel: 'You might wheeze, cough, feel like you can\'t catch your breath, or feel like someone is squeezing your chest.',
      howToGetBetter: 'Use special medicines called inhalers that help open up your breathing tubes, and try to stay away from things that make it worse.'
    },
    severity: 'moderate',
    commonness: 'common'
  },
  {
    id: 'migraine',
    name: 'Migraine Headaches',
    category: 'Neurological Disorder',
    bodySystem: 'nervous',
    summary: 'Severe headaches often accompanied by nausea, vomiting, and sensitivity to light and sound.',
    symptoms: [
      'Intense throbbing headache',
      'Nausea and vomiting',
      'Sensitivity to light and sound',
      'Visual disturbances (aura)',
      'Dizziness',
      'Fatigue',
      'Mood changes'
    ],
    causes: [
      'Hormonal changes',
      'Certain foods and drinks',
      'Stress',
      'Changes in sleep patterns',
      'Physical factors (bright lights, loud sounds)',
      'Weather changes',
      'Medications'
    ],
    diagnosis: [
      'Medical history',
      'Physical and neurological examination',
      'Headache diary',
      'MRI or CT scan (if needed)',
      'Blood tests to rule out other conditions'
    ],
    treatment: [
      'Pain-relieving medications',
      'Preventive medications',
      'Lifestyle changes',
      'Stress management',
      'Regular sleep schedule',
      'Avoiding known triggers'
    ],
    prevention: [
      'Identify and avoid triggers',
      'Maintain regular sleep schedule',
      'Manage stress',
      'Stay hydrated',
      'Exercise regularly',
      'Eat regular meals'
    ],
    simpleExplanation: {
      whatIs: 'A migraine is a really bad headache that can make you feel sick to your stomach and make lights and sounds hurt your head.',
      howYouGet: 'They can be caused by stress, certain foods, not getting enough sleep, or sometimes they just happen.',
      howToFeel: 'Your head will hurt really badly, usually on one side, and you might feel like throwing up or want to hide in a dark, quiet room.',
      howToGetBetter: 'Take medicine your doctor gives you, rest in a dark room, and try to figure out what triggers your migraines so you can avoid them.'
    },
    severity: 'moderate',
    commonness: 'common'
  },
  {
    id: 'arthritis',
    name: 'Arthritis',
    category: 'Joint Disorder',
    bodySystem: 'musculoskeletal',
    summary: 'Inflammation of one or more joints causing pain, stiffness, and reduced range of motion.',
    symptoms: [
      'Joint pain and stiffness',
      'Swelling around joints',
      'Reduced range of motion',
      'Morning stiffness',
      'Fatigue',
      'Joint deformity (in severe cases)',
      'Warmth and redness around joints'
    ],
    causes: [
      'Age-related wear and tear',
      'Autoimmune disorders',
      'Genetics',
      'Previous joint injuries',
      'Obesity',
      'Infections',
      'Repetitive joint use'
    ],
    diagnosis: [
      'Physical examination',
      'X-rays or MRI scans',
      'Blood tests for inflammation',
      'Joint fluid analysis',
      'Medical history review'
    ],
    treatment: [
      'Anti-inflammatory medications',
      'Physical therapy',
      'Regular exercise',
      'Hot and cold therapy',
      'Joint injections',
      'Surgery (in severe cases)'
    ],
    prevention: [
      'Maintain healthy weight',
      'Exercise regularly',
      'Protect joints from injury',
      'Eat anti-inflammatory foods',
      'Avoid repetitive stress on joints',
      'Stay active but don\'t overdo it'
    ],
    simpleExplanation: {
      whatIs: 'Arthritis is when the joints in your body (like your knees, hands, or hips) become swollen and painful, making it hard to move them.',
      howYouGet: 'It can happen as you get older, from injuries, or sometimes your body\'s defense system attacks your own joints by mistake.',
      howToFeel: 'Your joints might hurt, feel stiff (especially in the morning), and be hard to move. Sometimes they might look swollen or feel warm.',
      howToGetBetter: 'Take medicine to reduce pain and swelling, do gentle exercises to keep joints moving, and use heat or cold packs to feel better.'
    },
    severity: 'moderate',
    commonness: 'common'
  },
  {
    id: 'osteoporosis',
    name: 'Osteoporosis',
    category: 'Bone Disorder',
    bodySystem: 'musculoskeletal',
    summary: 'A condition where bones become weak and brittle, increasing the risk of fractures.',
    symptoms: [
      'Often no symptoms until fracture occurs',
      'Back pain',
      'Loss of height over time',
      'Stooped posture',
      'Bone fractures from minor falls',
      'Brittle fingernails',
      'Receding gums'
    ],
    causes: [
      'Aging process',
      'Hormonal changes (especially menopause)',
      'Lack of calcium and vitamin D',
      'Sedentary lifestyle',
      'Smoking and excessive alcohol',
      'Certain medications',
      'Family history'
    ],
    diagnosis: [
      'Bone density scan (DEXA)',
      'X-rays',
      'Blood tests for calcium and vitamin D',
      'Medical history and physical exam',
      'Fracture risk assessment'
    ],
    treatment: [
      'Calcium and vitamin D supplements',
      'Bone-strengthening medications',
      'Weight-bearing exercises',
      'Fall prevention measures',
      'Hormone therapy (in some cases)',
      'Lifestyle modifications'
    ],
    prevention: [
      'Get enough calcium and vitamin D',
      'Exercise regularly (weight-bearing)',
      'Don\'t smoke',
      'Limit alcohol consumption',
      'Maintain healthy weight',
      'Prevent falls at home'
    ],
    simpleExplanation: {
      whatIs: 'Osteoporosis makes your bones weak and fragile, like chalk instead of strong wood, so they can break easily.',
      howYouGet: 'It usually happens as you get older, especially if you don\'t get enough calcium, don\'t exercise, or have hormone changes.',
      howToFeel: 'You might not feel anything at first, but later you could have back pain, get shorter, or break bones from small falls.',
      howToGetBetter: 'Take calcium and vitamin D, do exercises that make your bones work (like walking), and be careful not to fall.'
    },
    severity: 'moderate',
    commonness: 'common'
  },
  {
    id: 'allergies',
    name: 'Allergies',
    category: 'Immune Disorder',
    bodySystem: 'immune',
    summary: 'An overreaction of the immune system to normally harmless substances.',
    symptoms: [
      'Sneezing and runny nose',
      'Itchy, watery eyes',
      'Skin rashes or hives',
      'Swelling',
      'Difficulty breathing',
      'Digestive problems',
      'Anaphylaxis (severe cases)'
    ],
    causes: [
      'Pollen from trees, grass, weeds',
      'Dust mites',
      'Pet dander',
      'Certain foods',
      'Insect stings',
      'Medications',
      'Mold spores'
    ],
    diagnosis: [
      'Allergy skin tests',
      'Blood tests for specific antibodies',
      'Elimination diets',
      'Medical history',
      'Physical examination',
      'Challenge tests (under medical supervision)'
    ],
    treatment: [
      'Avoid known allergens',
      'Antihistamine medications',
      'Nasal sprays',
      'Eye drops',
      'Allergy shots (immunotherapy)',
      'Emergency epinephrine (for severe allergies)'
    ],
    prevention: [
      'Identify and avoid triggers',
      'Keep home clean and dust-free',
      'Use air purifiers',
      'Check pollen counts',
      'Read food labels carefully',
      'Carry emergency medications if needed'
    ],
    simpleExplanation: {
      whatIs: 'Allergies happen when your body\'s defense system thinks something harmless (like pollen or peanuts) is dangerous and tries to fight it.',
      howYouGet: 'You can be born with allergies, or they can develop as you grow up. They often run in families.',
      howToFeel: 'You might sneeze, get itchy eyes, have a runny nose, get rashes, or feel sick when you\'re around things you\'re allergic to.',
      howToGetBetter: 'Stay away from things that make you allergic, take medicines that help with symptoms, and always carry emergency medicine if you have severe allergies.'
    },
    severity: 'mild',
    commonness: 'very-common'
  },
  {
    id: 'autoimmune-disorders',
    name: 'Autoimmune Disorders',
    category: 'Immune Disorder',
    bodySystem: 'immune',
    summary: 'Conditions where the immune system mistakenly attacks the body\'s own healthy tissues.',
    symptoms: [
      'Fatigue and weakness',
      'Joint pain and swelling',
      'Skin problems',
      'Digestive issues',
      'Recurring fever',
      'Swollen glands',
      'Muscle aches'
    ],
    causes: [
      'Genetic predisposition',
      'Environmental triggers',
      'Infections',
      'Stress',
      'Hormonal factors',
      'Certain medications',
      'Unknown factors'
    ],
    diagnosis: [
      'Blood tests for autoantibodies',
      'Inflammatory markers',
      'Tissue biopsies',
      'Imaging studies',
      'Physical examination',
      'Medical history review'
    ],
    treatment: [
      'Immunosuppressive medications',
      'Anti-inflammatory drugs',
      'Targeted therapies',
      'Physical therapy',
      'Lifestyle modifications',
      'Regular monitoring'
    ],
    prevention: [
      'Manage stress effectively',
      'Maintain healthy lifestyle',
      'Get adequate sleep',
      'Exercise regularly',
      'Avoid known triggers',
      'Follow medical treatment plans'
    ],
    simpleExplanation: {
      whatIs: 'Autoimmune disorders happen when your body\'s defense system gets confused and starts attacking your own healthy body parts instead of just germs.',
      howYouGet: 'It can be something you\'re born with, or it can be triggered by stress, infections, or other things in your environment.',
      howToFeel: 'You might feel very tired, have achy joints, get rashes, or have other symptoms depending on which part of your body is being attacked.',
      howToGetBetter: 'Take special medicines that help calm down your immune system, rest when you need to, and work closely with your doctor to manage symptoms.'
    },
    severity: 'moderate',
    commonness: 'uncommon'
  },
  {
    id: 'eczema',
    name: 'Eczema (Atopic Dermatitis)',
    category: 'Skin Disorder',
    bodySystem: 'integumentary',
    summary: 'A chronic skin condition that causes red, itchy, and inflamed patches of skin.',
    symptoms: [
      'Red, inflamed skin',
      'Intense itching',
      'Dry, scaly patches',
      'Small bumps that may leak fluid',
      'Thickened, cracked skin',
      'Raw, sensitive skin from scratching',
      'Sleep problems due to itching'
    ],
    causes: [
      'Genetic factors',
      'Immune system dysfunction',
      'Environmental triggers',
      'Allergens',
      'Stress',
      'Hormonal changes',
      'Skin barrier problems'
    ],
    diagnosis: [
      'Physical examination',
      'Medical history',
      'Allergy testing',
      'Patch testing',
      'Skin biopsy (rarely needed)',
      'Family history review'
    ],
    treatment: [
      'Moisturizers and emollients',
      'Topical corticosteroids',
      'Antihistamines for itching',
      'Avoiding triggers',
      'Cool compresses',
      'Prescription medications for severe cases'
    ],
    prevention: [
      'Keep skin moisturized',
      'Avoid known triggers',
      'Use gentle, fragrance-free products',
      'Manage stress',
      'Maintain cool, humid environment',
      'Wear soft, breathable fabrics'
    ],
    simpleExplanation: {
      whatIs: 'Eczema makes your skin red, itchy, and bumpy. It\'s like your skin gets angry and inflamed for no good reason.',
      howYouGet: 'Some people are born with skin that\'s more sensitive, and things like soap, stress, or allergens can make it flare up.',
      howToFeel: 'Your skin will be very itchy and you\'ll want to scratch it, but scratching makes it worse. The itchy patches might be red and scaly.',
      howToGetBetter: 'Use gentle moisturizers every day, avoid things that irritate your skin, and use special creams your doctor gives you when it gets bad.'
    },
    severity: 'mild',
    commonness: 'common'
  },
  {
    id: 'psoriasis',
    name: 'Psoriasis',
    category: 'Skin Disorder',
    bodySystem: 'integumentary',
    summary: 'A chronic autoimmune condition that causes rapid skin cell buildup, resulting in thick, scaly patches.',
    symptoms: [
      'Red patches covered with silvery scales',
      'Dry, cracked skin that may bleed',
      'Itching and burning',
      'Thickened or ridged nails',
      'Swollen and stiff joints',
      'Patches on scalp, elbows, knees',
      'Skin that cycles through flare-ups and remission'
    ],
    causes: [
      'Autoimmune disorder',
      'Genetic predisposition',
      'Stress',
      'Infections',
      'Skin injuries',
      'Certain medications',
      'Weather changes'
    ],
    diagnosis: [
      'Physical examination',
      'Medical history',
      'Skin biopsy',
      'Family history review',
      'Assessment of affected areas',
      'Rule out other skin conditions'
    ],
    treatment: [
      'Topical treatments (corticosteroids, vitamin D)',
      'Light therapy',
      'Systemic medications',
      'Biologic drugs',
      'Moisturizers',
      'Stress management'
    ],
    prevention: [
      'Manage stress effectively',
      'Avoid skin injuries',
      'Moisturize regularly',
      'Avoid triggers',
      'Maintain healthy lifestyle',
      'Follow treatment plan consistently'
    ],
    simpleExplanation: {
      whatIs: 'Psoriasis makes your skin grow too fast, creating thick, scaly patches that look like fish scales, usually on your elbows, knees, or scalp.',
      howYouGet: 'It\'s an autoimmune condition you can inherit from your family, and it can be triggered by stress, infections, or injuries to your skin.',
      howToFeel: 'You\'ll have thick, scaly patches that might itch or burn. They can be embarrassing, but they\'re not contagious.',
      howToGetBetter: 'Use special creams and treatments your doctor prescribes, manage stress, keep your skin moisturized, and be patient as treatments take time to work.'
    },
    severity: 'moderate',
    commonness: 'uncommon'
  },
  {
    id: 'kidney-stones',
    name: 'Kidney Stones',
    category: 'Urological Disorder',
    bodySystem: 'urinary',
    summary: 'Hard deposits of minerals and salts that form inside the kidneys and can cause severe pain when passing.',
    symptoms: [
      'Severe pain in side and back',
      'Pain that radiates to lower abdomen and groin',
      'Painful urination',
      'Pink, red, or brown urine',
      'Nausea and vomiting',
      'Frequent urination',
      'Fever and chills (if infection present)'
    ],
    causes: [
      'Dehydration',
      'High sodium diet',
      'Excessive protein intake',
      'Family history',
      'Certain medical conditions',
      'Some medications',
      'Obesity'
    ],
    diagnosis: [
      'CT scan or ultrasound',
      'Urine tests',
      'Blood tests',
      'X-rays',
      'Analysis of passed stones',
      'Medical history and physical exam'
    ],
    treatment: [
      'Drink plenty of water',
      'Pain medications',
      'Medications to help pass stones',
      'Shock wave lithotripsy',
      'Ureteroscopy',
      'Surgery (for large stones)'
    ],
    prevention: [
      'Drink plenty of water',
      'Limit sodium intake',
      'Eat less animal protein',
      'Avoid foods high in oxalates',
      'Maintain healthy weight',
      'Take prescribed medications'
    ],
    simpleExplanation: {
      whatIs: 'Kidney stones are like small rocks that form in your kidneys when there are too many minerals in your urine and not enough water.',
      howYouGet: 'They form when you don\'t drink enough water, eat too much salt, or have certain foods that can create crystals in your kidneys.',
      howToFeel: 'You\'ll have very bad pain in your back or side that might move to your belly. It can hurt so much that you feel sick to your stomach.',
      howToGetBetter: 'Drink lots of water to help flush out the stones, take pain medicine, and sometimes doctors use special treatments to break up big stones.'
    },
    severity: 'moderate',
    commonness: 'common'
  },
  {
    id: 'uti',
    name: 'Urinary Tract Infection (UTI)',
    category: 'Bacterial Infection',
    bodySystem: 'urinary',
    summary: 'An infection in any part of the urinary system, most commonly affecting the bladder and urethra.',
    symptoms: [
      'Burning sensation when urinating',
      'Frequent, urgent need to urinate',
      'Cloudy or strong-smelling urine',
      'Pelvic pain (in women)',
      'Blood in urine',
      'Feeling like bladder doesn\'t empty completely',
      'Fever and chills (if kidney infection)'
    ],
    causes: [
      'Bacterial infection (usually E. coli)',
      'Poor bathroom hygiene',
      'Sexual activity',
      'Holding urine too long',
      'Certain birth control methods',
      'Menopause',
      'Kidney stones or enlarged prostate'
    ],
    diagnosis: [
      'Urine test (urinalysis)',
      'Urine culture',
      'Physical examination',
      'Medical history',
      'Imaging tests (if recurrent)',
      'Cystoscopy (in some cases)'
    ],
    treatment: [
      'Antibiotics',
      'Drink plenty of water',
      'Pain relievers',
      'Urinary analgesics',
      'Avoid irritating substances',
      'Complete full course of antibiotics'
    ],
    prevention: [
      'Drink plenty of water',
      'Urinate frequently',
      'Wipe front to back',
      'Urinate after sexual activity',
      'Avoid irritating feminine products',
      'Wear breathable underwear'
    ],
    simpleExplanation: {
      whatIs: 'A UTI is when germs get into your urinary system (the parts that make and store urine) and cause an infection.',
      howYouGet: 'Germs can get in through the opening where urine comes out, especially if you don\'t wipe properly or hold your urine too long.',
      howToFeel: 'It will burn or hurt when you pee, you\'ll need to go to the bathroom a lot, and your urine might look cloudy or smell bad.',
      howToGetBetter: 'Take antibiotics that your doctor gives you, drink lots of water to flush out the germs, and always finish all your medicine even if you feel better.'
    },
    severity: 'mild',
    commonness: 'very-common'
  },
  {
    id: 'pcos',
    name: 'Polycystic Ovary Syndrome (PCOS)',
    category: 'Hormonal Disorder',
    bodySystem: 'reproductive',
    summary: 'A hormonal disorder affecting women of reproductive age, causing irregular periods and other symptoms.',
    symptoms: [
      'Irregular or missed periods',
      'Excess hair growth on face and body',
      'Acne',
      'Weight gain or difficulty losing weight',
      'Hair thinning or male-pattern baldness',
      'Skin darkening',
      'Difficulty getting pregnant'
    ],
    causes: [
      'Insulin resistance',
      'Hormonal imbalances',
      'Genetics',
      'Inflammation',
      'Unknown factors',
      'Environmental influences',
      'Lifestyle factors'
    ],
    diagnosis: [
      'Medical history and physical exam',
      'Blood tests for hormones',
      'Pelvic ultrasound',
      'Glucose tolerance test',
      'Lipid profile',
      'Assessment of symptoms'
    ],
    treatment: [
      'Lifestyle changes (diet, exercise)',
      'Birth control pills',
      'Diabetes medications',
      'Fertility treatments',
      'Hair removal treatments',
      'Medications for specific symptoms'
    ],
    prevention: [
      'Maintain healthy weight',
      'Exercise regularly',
      'Eat balanced diet',
      'Manage insulin levels',
      'Regular medical check-ups',
      'Manage stress'
    ],
    simpleExplanation: {
      whatIs: 'PCOS is when a woman\'s hormones are out of balance, causing problems with periods, weight, and sometimes making it hard to have babies.',
      howYouGet: 'It\'s something you can inherit from your family, and it\'s related to how your body uses insulin (the hormone that controls sugar).',
      howToFeel: 'You might have irregular periods, gain weight easily, grow extra hair on your face or body, or have trouble with acne.',
      howToGetBetter: 'Eat healthy foods, exercise regularly, and take medicines your doctor prescribes to help balance your hormones and manage symptoms.'
    },
    severity: 'moderate',
    commonness: 'common'
  },
  {
    id: 'endometriosis',
    name: 'Endometriosis',
    category: 'Reproductive Disorder',
    bodySystem: 'reproductive',
    summary: 'A condition where tissue similar to the uterine lining grows outside the uterus, causing pain and other symptoms.',
    symptoms: [
      'Severe menstrual cramps',
      'Chronic pelvic pain',
      'Pain during intercourse',
      'Heavy menstrual bleeding',
      'Pain with bowel movements or urination',
      'Fatigue',
      'Difficulty getting pregnant'
    ],
    causes: [
      'Retrograde menstruation',
      'Immune system disorders',
      'Hormonal factors',
      'Genetics',
      'Surgical complications',
      'Environmental factors',
      'Unknown causes'
    ],
    diagnosis: [
      'Pelvic examination',
      'Ultrasound or MRI',
      'Laparoscopy',
      'Medical history',
      'Symptom assessment',
      'Blood tests (sometimes)'
    ],
    treatment: [
      'Pain medications',
      'Hormone therapy',
      'Birth control pills',
      'Surgery (laparoscopy)',
      'Fertility treatments',
      'Alternative therapies'
    ],
    prevention: [
      'No known prevention',
      'Early diagnosis and treatment',
      'Regular exercise',
      'Healthy diet',
      'Stress management',
      'Regular medical care'
    ],
    simpleExplanation: {
      whatIs: 'Endometriosis is when the tissue that normally lines the inside of the uterus grows in other places where it shouldn\'t be.',
      howYouGet: 'Doctors aren\'t sure exactly why it happens, but it might be related to genetics or problems with menstrual flow.',
      howToFeel: 'You\'ll have very painful periods, pelvic pain that doesn\'t go away, and it might hurt during other times too.',
      howToGetBetter: 'Take pain medicines, use hormone treatments to control symptoms, and sometimes surgery can help remove the misplaced tissue.'
    },
    severity: 'moderate',
    commonness: 'uncommon'
  },
  {
    id: 'lymphedema',
    name: 'Lymphedema',
    category: 'Lymphatic Disorder',
    bodySystem: 'lymphatic',
    summary: 'Swelling caused by a blockage in the lymphatic system, which prevents lymph fluid from draining properly.',
    symptoms: [
      'Swelling in arms or legs',
      'Feeling of heaviness or tightness',
      'Restricted range of motion',
      'Aching or discomfort',
      'Recurring infections',
      'Hardening and thickening of skin',
      'Difficulty fitting into clothing'
    ],
    causes: [
      'Cancer treatment (surgery, radiation)',
      'Infection',
      'Inherited conditions',
      'Trauma or injury',
      'Parasitic infections',
      'Inflammatory conditions',
      'Venous insufficiency'
    ],
    diagnosis: [
      'Physical examination',
      'Medical history',
      'Lymphoscintigraphy',
      'MRI or CT scan',
      'Ultrasound',
      'Measurement of limb circumference'
    ],
    treatment: [
      'Compression therapy',
      'Manual lymphatic drainage',
      'Exercise therapy',
      'Skin care',
      'Compression garments',
      'Surgery (in severe cases)'
    ],
    prevention: [
      'Protect affected limb from injury',
      'Maintain good hygiene',
      'Avoid tight clothing or jewelry',
      'Exercise regularly',
      'Maintain healthy weight',
      'Seek prompt treatment for infections'
    ],
    simpleExplanation: {
      whatIs: 'Lymphedema is when fluid builds up in your body because your lymphatic system (which helps fight infections) isn\'t draining properly.',
      howYouGet: 'It can happen after cancer treatment, from infections, injuries, or sometimes you\'re born with a lymphatic system that doesn\'t work well.',
      howToFeel: 'Your arm or leg will swell up and feel heavy, tight, or uncomfortable. It might be hard to move or fit into your clothes.',
      howToGetBetter: 'Wear special compression garments, do exercises to help drainage, get special massages, and take good care of your skin to prevent infections.'
    },
    severity: 'moderate',
    commonness: 'uncommon'
  },
  {
    id: 'swollen-lymph-nodes',
    name: 'Swollen Lymph Nodes',
    category: 'Lymphatic Disorder',
    bodySystem: 'lymphatic',
    summary: 'Enlarged lymph nodes, usually indicating that the immune system is fighting an infection or other condition.',
    symptoms: [
      'Tender, swollen lumps under skin',
      'Pain when touching affected area',
      'Swelling in neck, armpits, or groin',
      'Fever',
      'Night sweats',
      'Runny nose or sore throat',
      'General feeling of illness'
    ],
    causes: [
      'Viral infections (cold, flu)',
      'Bacterial infections',
      'Immune system disorders',
      'Cancer',
      'Certain medications',
      'Vaccinations',
      'Dental problems'
    ],
    diagnosis: [
      'Physical examination',
      'Medical history',
      'Blood tests',
      'Imaging studies',
      'Lymph node biopsy (if needed)',
      'Culture tests'
    ],
    treatment: [
      'Treat underlying cause',
      'Rest and fluids',
      'Pain relievers',
      'Warm compresses',
      'Antibiotics (if bacterial)',
      'Monitor for changes'
    ],
    prevention: [
      'Practice good hygiene',
      'Avoid sick people when possible',
      'Get recommended vaccinations',
      'Maintain healthy immune system',
      'Seek prompt treatment for infections',
      'Regular dental care'
    ],
    simpleExplanation: {
      whatIs: 'Swollen lymph nodes are like little bumps under your skin that get bigger when your body is fighting off germs or sickness.',
      howYouGet: 'They swell up when you have infections like colds, flu, or other illnesses because they\'re working hard to fight the germs.',
      howToFeel: 'You\'ll feel tender lumps under your skin, usually in your neck, armpits, or groin. They might hurt when you touch them.',
      howToGetBetter: 'Usually they go back to normal size when your body fights off the infection. Rest, drink fluids, and see a doctor if they stay swollen for a long time.'
    },
    severity: 'mild',
    commonness: 'common'
  },
  {
    id: 'vision-problems',
    name: 'Vision Problems',
    category: 'Sensory Disorder',
    bodySystem: 'sensory',
    summary: 'Various conditions that affect the ability to see clearly, including nearsightedness, farsightedness, and astigmatism.',
    symptoms: [
      'Blurry or fuzzy vision',
      'Difficulty seeing far or near objects',
      'Eye strain and fatigue',
      'Headaches',
      'Squinting',
      'Double vision',
      'Difficulty seeing at night'
    ],
    causes: [
      'Genetics',
      'Aging',
      'Eye shape abnormalities',
      'Excessive screen time',
      'Eye injuries',
      'Certain diseases',
      'Environmental factors'
    ],
    diagnosis: [
      'Comprehensive eye exam',
      'Visual acuity test',
      'Refraction test',
      'Eye pressure measurement',
      'Dilated eye exam',
      'Visual field test'
    ],
    treatment: [
      'Eyeglasses',
      'Contact lenses',
      'Refractive surgery (LASIK)',
      'Vision therapy',
      'Treatment of underlying conditions',
      'Regular eye exams'
    ],
    prevention: [
      'Regular eye exams',
      'Protect eyes from UV light',
      'Take breaks from screen time',
      'Eat foods rich in vitamins A, C, E',
      'Don\'t smoke',
      'Maintain healthy blood pressure and cholesterol'
    ],
    simpleExplanation: {
      whatIs: 'Vision problems mean your eyes don\'t focus light properly, so things look blurry, fuzzy, or hard to see clearly.',
      howYouGet: 'Sometimes you\'re born with eyes that are shaped differently, or your vision can change as you grow up or get older.',
      howToFeel: 'Things might look blurry when they\'re far away or close up, you might get headaches, or have to squint to see better.',
      howToGetBetter: 'Wear glasses or contact lenses to help your eyes focus properly, and get regular eye checkups to make sure your prescription is right.'
    },
    severity: 'mild',
    commonness: 'very-common'
  },
  {
    id: 'hearing-loss',
    name: 'Hearing Loss',
    category: 'Sensory Disorder',
    bodySystem: 'sensory',
    summary: 'Partial or complete inability to hear sounds, which can affect one or both ears.',
    symptoms: [
      'Difficulty hearing conversations',
      'Asking people to repeat themselves',
      'Turning up TV or radio volume',
      'Muffled hearing',
      'Difficulty hearing high-pitched sounds',
      'Ringing in ears (tinnitus)',
      'Feeling of fullness in ears'
    ],
    causes: [
      'Age-related changes',
      'Loud noise exposure',
      'Ear infections',
      'Earwax buildup',
      'Genetics',
      'Certain medications',
      'Head or ear injuries'
    ],
    diagnosis: [
      'Physical examination of ears',
      'Hearing tests (audiometry)',
      'Tuning fork tests',
      'Medical history',
      'Imaging studies (if needed)',
      'Specialized hearing evaluations'
    ],
    treatment: [
      'Hearing aids',
      'Cochlear implants',
      'Earwax removal',
      'Treatment of infections',
      'Surgery (in some cases)',
      'Assistive listening devices'
    ],
    prevention: [
      'Protect ears from loud noises',
      'Use ear protection in noisy environments',
      'Keep ears clean and dry',
      'Treat ear infections promptly',
      'Avoid inserting objects in ears',
      'Regular hearing checkups'
    ],
    simpleExplanation: {
      whatIs: 'Hearing loss means your ears don\'t pick up sounds as well as they should, making it hard to hear people talking or other sounds.',
      howYouGet: 'It can happen from being around loud noises too much, getting older, having ear infections, or sometimes you\'re born with it.',
      howToFeel: 'Sounds will seem quieter or muffled, you might have trouble understanding what people are saying, or you might hear ringing in your ears.',
      howToGetBetter: 'Use hearing aids to make sounds louder and clearer, protect your ears from loud noises, and get regular hearing tests.'
    },
    severity: 'moderate',
    commonness: 'common'
  },
  {
    id: 'pneumonia',
    name: 'Pneumonia',
    category: 'Respiratory Infection',
    bodySystem: 'respiratory',
    summary: 'An infection that inflames air sacs in one or both lungs, which may fill with fluid or pus.',
    symptoms: [
      'Cough with phlegm or pus',
      'Fever and chills',
      'Shortness of breath',
      'Chest pain when breathing or coughing',
      'Fatigue',
      'Nausea and vomiting',
      'Confusion (especially in older adults)'
    ],
    causes: [
      'Bacterial infections',
      'Viral infections',
      'Fungal infections',
      'Aspiration of foreign substances',
      'Weakened immune system',
      'Chronic diseases',
      'Smoking'
    ],
    diagnosis: [
      'Chest X-ray',
      'Blood tests',
      'Sputum culture',
      'Physical examination',
      'CT scan (if needed)',
      'Pulse oximetry'
    ],
    treatment: [
      'Antibiotics (for bacterial pneumonia)',
      'Antiviral medications (for viral pneumonia)',
      'Rest and fluids',
      'Oxygen therapy',
      'Hospitalization (for severe cases)',
      'Pain and fever reducers'
    ],
    prevention: [
      'Get vaccinated (pneumonia, flu)',
      'Practice good hygiene',
      'Don\'t smoke',
      'Maintain healthy lifestyle',
      'Avoid sick people when possible',
      'Manage chronic conditions'
    ],
    simpleExplanation: {
      whatIs: 'Pneumonia is when the tiny air sacs in your lungs get infected and filled with fluid or pus, making it hard to breathe.',
      howYouGet: 'You can catch it from germs (bacteria, viruses, or fungi) that get into your lungs when you breathe them in.',
      howToFeel: 'You\'ll have a bad cough, fever, chills, and trouble breathing. Your chest might hurt when you cough or take deep breaths.',
      howToGetBetter: 'Take antibiotics if it\'s caused by bacteria, rest in bed, drink lots of fluids, and sometimes you might need to go to the hospital for oxygen.'
    },
    severity: 'moderate',
    commonness: 'common'
  },
  {
    id: 'gastritis',
    name: 'Gastritis',
    category: 'Digestive Disorder',
    bodySystem: 'digestive',
    summary: 'Inflammation of the stomach lining that can cause pain, nausea, and digestive problems.',
    symptoms: [
      'Stomach pain or burning',
      'Nausea and vomiting',
      'Feeling full quickly when eating',
      'Loss of appetite',
      'Bloating',
      'Indigestion',
      'Black or bloody stools (if severe)'
    ],
    causes: [
      'H. pylori bacterial infection',
      'Long-term use of pain relievers (NSAIDs)',
      'Excessive alcohol consumption',
      'Stress',
      'Spicy foods',
      'Autoimmune disorders',
      'Other infections'
    ],
    diagnosis: [
      'Medical history and physical exam',
      'Blood tests for H. pylori',
      'Stool tests',
      'Endoscopy',
      'Upper GI series',
      'Breath test for H. pylori'
    ],
    treatment: [
      'Antibiotics (for H. pylori)',
      'Acid-blocking medications',
      'Antacids',
      'Avoid irritating substances',
      'Dietary changes',
      'Stress management'
    ],
    prevention: [
      'Avoid excessive alcohol',
      'Don\'t overuse pain relievers',
      'Manage stress',
      'Eat regular, balanced meals',
      'Avoid spicy or acidic foods',
      'Practice good hygiene'
    ],
    simpleExplanation: {
      whatIs: 'Gastritis is when the inside lining of your stomach gets red, swollen, and irritated, like when you get a cut and it gets inflamed.',
      howYouGet: 'It can happen from bacteria, taking too many pain pills, drinking too much alcohol, eating spicy foods, or being very stressed.',
      howToFeel: 'Your stomach will hurt or burn, you might feel sick to your stomach, not want to eat, or feel full really quickly.',
      howToGetBetter: 'Take medicines to reduce stomach acid, avoid things that irritate your stomach, eat bland foods, and treat any bacterial infections.'
    },
    severity: 'mild',
    commonness: 'common'
  },
  {
    id: 'ibs',
    name: 'Irritable Bowel Syndrome (IBS)',
    category: 'Digestive Disorder',
    bodySystem: 'digestive',
    summary: 'A common disorder affecting the large intestine, causing cramping, abdominal pain, bloating, gas, and changes in bowel habits.',
    symptoms: [
      'Abdominal pain and cramping',
      'Bloating and gas',
      'Diarrhea or constipation (or both)',
      'Changes in bowel movement appearance',
      'Mucus in stool',
      'Feeling of incomplete evacuation',
      'Symptoms worsen with stress'
    ],
    causes: [
      'Unknown exact cause',
      'Abnormal gut muscle contractions',
      'Nervous system abnormalities',
      'Inflammation in intestines',
      'Severe infection',
      'Changes in gut bacteria',
      'Food sensitivities'
    ],
    diagnosis: [
      'Medical history and symptom assessment',
      'Physical examination',
      'Rome criteria for IBS',
      'Blood tests to rule out other conditions',
      'Stool tests',
      'Colonoscopy (if needed)'
    ],
    treatment: [
      'Dietary changes (low FODMAP diet)',
      'Fiber supplements',
      'Anti-diarrheal medications',
      'Laxatives for constipation',
      'Antispasmodic medications',
      'Stress management'
    ],
    prevention: [
      'Identify and avoid trigger foods',
      'Manage stress effectively',
      'Exercise regularly',
      'Eat regular meals',
      'Stay hydrated',
      'Get adequate sleep'
    ],
    simpleExplanation: {
      whatIs: 'IBS is when your large intestine (colon) doesn\'t work properly, causing stomach pain, bloating, and problems with bowel movements.',
      howYouGet: 'Doctors don\'t know exactly why it happens, but it might be related to how your gut muscles work, stress, or certain foods.',
      howToFeel: 'Your stomach will hurt and cramp, you\'ll feel bloated with gas, and you might have diarrhea, constipation, or both at different times.',
      howToGetBetter: 'Figure out which foods make it worse and avoid them, manage stress, exercise regularly, and take medicines to help with specific symptoms.'
    },
    severity: 'mild',
    commonness: 'common'
  }
];