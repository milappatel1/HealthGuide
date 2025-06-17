import { Disease, BodySystem } from '../types/Disease';

// =============================================================================
// COMPREHENSIVE DISEASE DATABASE
// =============================================================================
// Last Updated: January 2025
// Total Conditions: 25+
// Organization: Alphabetical within categories
// Format: Consistent structure for easy expansion
// =============================================================================

export const diseases: Disease[] = [
  
  // =============================================================================
  // CARDIOVASCULAR DISEASES
  // =============================================================================
  
  {
    id: 'atrial-fibrillation',
    name: 'Atrial Fibrillation',
    category: 'Cardiovascular',
    bodySystem: 'cardiovascular',
    summary: 'An irregular and often rapid heart rhythm that can lead to blood clots, stroke, and other complications.',
    symptoms: [
      'Irregular heartbeat or palpitations',
      'Rapid heartbeat',
      'Chest pain or discomfort',
      'Shortness of breath',
      'Fatigue and weakness',
      'Dizziness or lightheadedness',
      'Reduced exercise tolerance'
    ],
    causes: [
      'High blood pressure',
      'Heart disease or heart defects',
      'Overactive thyroid',
      'Sleep apnea',
      'Excessive alcohol consumption',
      'Age (more common after 60)',
      'Family history of atrial fibrillation'
    ],
    diagnosis: [
      'Electrocardiogram (ECG)',
      'Holter monitor (24-hour ECG)',
      'Event monitor',
      'Echocardiogram',
      'Blood tests (thyroid function)',
      'Chest X-ray'
    ],
    treatment: [
      'Blood thinners (anticoagulants)',
      'Heart rate control medications',
      'Heart rhythm control medications',
      'Cardioversion (electrical shock therapy)',
      'Catheter ablation',
      'Lifestyle modifications'
    ],
    prevention: [
      'Maintain healthy blood pressure',
      'Exercise regularly',
      'Eat a heart-healthy diet',
      'Maintain healthy weight',
      'Limit alcohol consumption',
      'Don\'t smoke',
      'Manage stress'
    ],
    simpleExplanation: {
      whatIs: 'Your heart has four rooms, and the top two rooms (atria) are supposed to beat in a steady rhythm. In atrial fibrillation, these rooms beat very fast and irregularly, like a drum that\'s out of rhythm.',
      howYouGet: 'It can happen when your heart gets damaged from high blood pressure, heart disease, or other conditions. Sometimes it runs in families, and it becomes more common as people get older.',
      howToFeel: 'You might feel like your heart is racing, fluttering, or skipping beats. You could feel tired, dizzy, or have trouble breathing, especially when you\'re active.',
      howToGetBetter: 'Doctors can give you medicines to help control your heart rhythm and prevent blood clots. Sometimes they use special procedures to help your heart beat normally again.'
    },
    severity: 'moderate',
    commonness: 'common'
  },
  

  // =============================================================================
  // RESPIRATORY DISEASES
  // =============================================================================

  {
    id: 'asthma',
    name: 'Asthma',
    category: 'Respiratory',
    bodySystem: 'respiratory',
    summary: 'A condition where your airways become narrow, swollen, and produce extra mucus, making breathing difficult.',
    symptoms: [
      'Shortness of breath',
      'Chest tightness or pain',
      'Wheezing when exhaling',
      'Coughing attacks',
      'Trouble sleeping due to breathing',
      'Fatigue during physical activity'
    ],
    causes: [
      'Genetics',
      'Environmental allergens (pollen, dust mites)',
      'Respiratory infections',
      'Physical activity',
      'Cold air',
      'Air pollutants and irritants',
      'Stress and strong emotions'
    ],
    diagnosis: [
      'Medical history and physical exam',
      'Lung function tests (spirometry)',
      'Peak flow measurement',
      'Allergy tests',
      'Chest X-ray',
      'Response to bronchodilator medication'
    ],
    treatment: [
      'Quick-relief inhalers (albuterol)',
      'Long-term control medications',
      'Allergy medications',
      'Avoiding triggers',
      'Creating an asthma action plan',
      'Regular monitoring'
    ],
    prevention: [
      'Identify and avoid triggers',
      'Take medications as prescribed',
      'Monitor breathing daily',
      'Get vaccinated for flu and pneumonia',
      'Exercise regularly (with doctor\'s guidance)',
      'Maintain a clean living environment'
    ],
    simpleExplanation: {
      whatIs: 'Asthma makes the tubes in your lungs get narrow and swollen, like drinking through a straw that gets squeezed. This makes it hard to breathe.',
      howYouGet: 'Some people are born with lungs that are extra sensitive to things like dust, pets, or cold air. When they breathe these things in, their lungs get upset.',
      howToFeel: 'It feels like you can\'t get enough air, your chest might feel tight, and you might make a whistling sound when you breathe out. It can be scary, but it\'s treatable.',
      howToGetBetter: 'Doctors give you special inhalers that are like medicine you breathe in. You also learn what things make your asthma worse and try to avoid them, like staying away from things you\'re allergic to.'
    },
    severity: 'moderate',
    commonness: 'common'
  },


  // =============================================================================
  // ENDOCRINE/METABOLIC DISEASES
  // =============================================================================

  {
    id: 'diabetes-type-1',
    name: 'Type 1 Diabetes',
    category: 'Metabolic Disorders',
    bodySystem: 'endocrine',
    summary: 'An autoimmune condition where the body attacks insulin-producing cells in the pancreas, requiring lifelong insulin therapy.',
    symptoms: [
      'Excessive thirst and urination',
      'Extreme hunger',
      'Rapid weight loss',
      'Fatigue and weakness',
      'Blurred vision',
      'Mood changes and irritability',
      'Fruity-smelling breath'
    ],
    causes: [
      'Autoimmune destruction of pancreatic cells',
      'Genetic predisposition',
      'Environmental triggers (viruses)',
      'Family history',
      'Usually develops in childhood or adolescence'
    ],
    diagnosis: [
      'Blood glucose tests',
      'A1C test',
      'Autoantibody tests',
      'C-peptide test',
      'Ketone testing',
      'Random plasma glucose test'
    ],
    treatment: [
      'Insulin therapy (multiple daily injections)',
      'Continuous glucose monitoring',
      'Insulin pumps',
      'Carbohydrate counting',
      'Regular blood sugar monitoring',
      'Healthy diet and exercise'
    ],
    prevention: [
      'Cannot be prevented (autoimmune)',
      'Early detection important',
      'Family screening recommended',
      'Healthy lifestyle to prevent complications'
    ],
    simpleExplanation: {
      whatIs: 'Type 1 diabetes happens when your body\'s defense system accidentally attacks the part of your pancreas that makes insulin. Insulin is like a key that helps sugar get into your cells for energy.',
      howYouGet: 'You\'re usually born with genes that make this more likely to happen, and something like a virus might trigger it. It\'s not caused by eating too much sugar or being overweight.',
      howToFeel: 'You\'ll feel very thirsty and need to go to the bathroom a lot. You might lose weight even though you\'re eating more, and you\'ll feel very tired and weak.',
      howToGetBetter: 'You\'ll need to take insulin shots or use an insulin pump every day for the rest of your life. You\'ll also learn to check your blood sugar and count carbohydrates in your food.'
    },
    severity: 'severe',
    commonness: 'uncommon'
  },

  // =============================================================================
  // GASTROINTESTINAL DISEASES
  // =============================================================================

  {
    id: 'gastroesophageal-reflux',
    name: 'Gastroesophageal Reflux Disease (GERD)',
    category: 'Gastrointestinal',
    bodySystem: 'digestive',
    summary: 'A chronic condition where stomach acid frequently flows back into the esophagus, causing irritation and symptoms.',
    symptoms: [
      'Heartburn (burning chest pain)',
      'Acid regurgitation',
      'Difficulty swallowing',
      'Chronic cough',
      'Hoarse voice',
      'Feeling of lump in throat',
      'Chest pain',
      'Bad breath'
    ],
    causes: [
      'Weak lower esophageal sphincter',
      'Hiatal hernia',
      'Obesity',
      'Pregnancy',
      'Smoking',
      'Certain foods (spicy, fatty, acidic)',
      'Large meals',
      'Lying down after eating'
    ],
    diagnosis: [
      'Medical history and symptoms',
      'Upper endoscopy',
      'Barium swallow X-ray',
      '24-hour acid probe test',
      'Esophageal manometry',
      'Response to acid-suppressing medication'
    ],
    treatment: [
      'Proton pump inhibitors (PPIs)',
      'H2 receptor blockers',
      'Antacids',
      'Lifestyle modifications',
      'Weight loss',
      'Dietary changes',
      'Surgery (severe cases)'
    ],
    prevention: [
      'Maintain healthy weight',
      'Avoid trigger foods',
      'Eat smaller, frequent meals',
      'Don\'t lie down after eating',
      'Elevate head of bed',
      'Quit smoking',
      'Limit alcohol'
    ],
    simpleExplanation: {
      whatIs: 'GERD is when the acid from your stomach goes back up into your food tube (esophagus), like when you burp but the acid stays and burns. There\'s supposed to be a door that keeps the acid in your stomach.',
      howYouGet: 'The door between your stomach and food tube gets weak or doesn\'t close properly. This can happen from eating too much, being overweight, or eating foods that make more acid.',
      howToFeel: 'You\'ll feel a burning pain in your chest, especially after eating or when lying down. You might taste sour liquid in your mouth or have a cough that won\'t go away.',
      howToGetBetter: 'Doctors can give you medicine to reduce the acid in your stomach. You can also help by eating smaller meals, avoiding spicy foods, and not lying down right after eating.'
    },
    severity: 'moderate',
    commonness: 'common'
  },


  // =============================================================================
  // NEUROLOGICAL DISEASES
  // =============================================================================

  {
    id: 'alzheimers-disease',
    name: 'Alzheimer\'s Disease',
    category: 'Neurological',
    bodySystem: 'nervous',
    summary: 'A progressive brain disorder that slowly destroys memory and thinking skills, and eventually the ability to carry out simple tasks.',
    symptoms: [
      'Memory loss affecting daily activities',
      'Difficulty planning or solving problems',
      'Confusion with time or place',
      'Trouble understanding visual images',
      'Problems with speaking or writing',
      'Misplacing things',
      'Poor judgment',
      'Withdrawal from activities',
      'Changes in mood and personality'
    ],
    causes: [
      'Age (primary risk factor)',
      'Genetics and family history',
      'Brain protein abnormalities (amyloid, tau)',
      'Head trauma',
      'Cardiovascular disease',
      'Diabetes',
      'Smoking',
      'Lack of exercise'
    ],
    diagnosis: [
      'Comprehensive medical evaluation',
      'Cognitive and memory tests',
      'Brain imaging (MRI, PET scans)',
      'Blood tests',
      'Neuropsychological testing',
      'Ruling out other conditions'
    ],
    treatment: [
      'Cholinesterase inhibitors',
      'NMDA receptor antagonist',
      'Managing behavioral symptoms',
      'Creating safe environment',
      'Maintaining routines',
      'Social engagement',
      'Physical activity'
    ],
    prevention: [
      'Regular physical exercise',
      'Mental stimulation',
      'Social engagement',
      'Healthy diet (Mediterranean)',
      'Quality sleep',
      'Managing cardiovascular risk factors',
      'Avoiding head injuries'
    ],
    simpleExplanation: {
      whatIs: 'Alzheimer\'s is a disease that affects the brain, making it hard to remember things, think clearly, and do everyday tasks. It\'s like the brain\'s filing system gets mixed up and damaged.',
      howYouGet: 'It usually happens to older people, and sometimes it runs in families. Harmful proteins build up in the brain over many years, damaging the brain cells that help with memory and thinking.',
      howToFeel: 'At first, you might forget recent things or get confused about where you are. As it gets worse, it becomes harder to recognize people, speak clearly, or take care of yourself.',
      howToGetBetter: 'There\'s no cure yet, but doctors have medicines that can slow it down for a while. Staying active, eating healthy, and spending time with family and friends can help keep the brain working better for longer.'
    },
    severity: 'severe',
    commonness: 'common'
  },


  // =============================================================================
  // MUSCULOSKELETAL DISEASES
  // =============================================================================

  {
    id: 'arthritis-osteo',
    name: 'Osteoarthritis',
    category: 'Musculoskeletal',
    bodySystem: 'musculoskeletal',
    summary: 'The most common form of arthritis, occurring when the protective cartilage that cushions the ends of bones wears down over time.',
    symptoms: [
      'Joint pain during or after movement',
      'Joint stiffness, especially in morning',
      'Loss of flexibility',
      'Grating sensation in joints',
      'Bone spurs around affected joints',
      'Swelling in some cases',
      'Tenderness when pressure applied'
    ],
    causes: [
      'Age-related wear and tear',
      'Joint injury or overuse',
      'Obesity (extra stress on joints)',
      'Genetics',
      'Bone deformities',
      'Other diseases (diabetes, rheumatoid arthritis)'
    ],
    diagnosis: [
      'Physical examination',
      'X-rays',
      'MRI (if needed)',
      'Joint fluid analysis',
      'Blood tests (to rule out other types)',
      'Medical history'
    ],
    treatment: [
      'Pain medications (acetaminophen, NSAIDs)',
      'Physical therapy',
      'Occupational therapy',
      'Weight management',
      'Joint injections (corticosteroids)',
      'Assistive devices',
      'Surgery (severe cases)'
    ],
    prevention: [
      'Maintain healthy weight',
      'Exercise regularly (low-impact)',
      'Protect joints from injury',
      'Use proper body mechanics',
      'Strengthen muscles around joints',
      'Eat anti-inflammatory foods'
    ],
    simpleExplanation: {
      whatIs: 'Osteoarthritis is when the smooth, slippery coating (cartilage) on the ends of your bones wears away, like the tread wearing off a tire. This makes your bones rub together, which hurts.',
      howYouGet: 'It usually happens as you get older because your joints have been used for many years. Being overweight, injuring a joint, or having it run in your family can make it more likely.',
      howToFeel: 'Your joints will feel stiff and sore, especially when you first wake up or after sitting for a long time. Moving around usually helps, but too much activity can make it hurt more.',
      howToGetBetter: 'Doctors can give you medicine for pain and suggest exercises to keep your joints moving. Losing weight if needed and using heat or cold packs can also help you feel better.'
    },
    severity: 'moderate',
    commonness: 'common'
  },


  // =============================================================================
  // MENTAL HEALTH CONDITIONS
  // =============================================================================

  {
    id: 'anxiety-generalized',
    name: 'Generalized Anxiety Disorder',
    category: 'Mental Health',
    bodySystem: 'nervous',
    summary: 'A mental health condition characterized by excessive, persistent worry and anxiety about various aspects of daily life.',
    symptoms: [
      'Excessive worry about everyday situations',
      'Restlessness or feeling on edge',
      'Fatigue',
      'Difficulty concentrating',
      'Irritability',
      'Muscle tension',
      'Sleep disturbances',
      'Physical symptoms (sweating, nausea)'
    ],
    causes: [
      'Brain chemistry and genetics',
      'Personality factors',
      'Life experiences and trauma',
      'Medical conditions',
      'Substance use',
      'Stress and major life changes'
    ],
    diagnosis: [
      'Clinical interview',
      'Anxiety assessment scales',
      'Medical examination',
      'Blood tests (to rule out medical causes)',
      'Psychological evaluation',
      'Symptom duration and severity assessment'
    ],
    treatment: [
      'Anti-anxiety medications',
      'Antidepressants',
      'Cognitive behavioral therapy (CBT)',
      'Relaxation techniques',
      'Mindfulness and meditation',
      'Lifestyle modifications',
      'Support groups'
    ],
    prevention: [
      'Stress management techniques',
      'Regular exercise',
      'Adequate sleep',
      'Limit caffeine and alcohol',
      'Practice relaxation',
      'Maintain social connections',
      'Seek help early'
    ],
    simpleExplanation: {
      whatIs: 'Generalized anxiety disorder is when your brain\'s worry system gets stuck in the "on" position, making you feel anxious and scared about many different things, even when there\'s no real danger.',
      howYouGet: 'Some people are born with brains that worry more easily, and stressful events or changes in life can trigger it. It\'s like having an overactive alarm system in your mind.',
      howToFeel: 'You\'ll worry constantly about many things - work, family, health, money - and feel restless, tired, and tense. Your mind might race with "what if" thoughts that are hard to stop.',
      howToGetBetter: 'Doctors can give you medicine to calm your anxiety and teach you techniques to manage worry thoughts. Learning relaxation skills and talking to a therapist can help you feel much calmer.'
    },
    severity: 'moderate',
    commonness: 'common'
  }
];

// =============================================================================
// BODY SYSTEMS CLASSIFICATION
// =============================================================================

export const bodySystems: BodySystem[] = [
  {
    id: 'cardiovascular',
    name: 'Heart & Blood',
    description: 'Your heart, blood vessels, and blood that carry oxygen and nutrients throughout your body.',
    icon: 'Heart',
    diseases: ['atrial-fibrillation', 'coronary-artery-disease', 'hypertension']
  },
  {
    id: 'respiratory',
    name: 'Breathing System',
    description: 'Your lungs, airways, and breathing muscles that help you get oxygen.',
    icon: 'Lung',
    diseases: ['asthma', 'bronchitis', 'common-cold', 'copd', 'pneumonia']
  },
  {
    id: 'endocrine',
    name: 'Hormones & Metabolism',
    description: 'Glands that make hormones to control growth, metabolism, and other body functions.',
    icon: 'Zap',
    diseases: ['diabetes-type-1', 'diabetes-type-2', 'hypothyroidism']
  },
  {
    id: 'digestive',
    name: 'Digestive System',
    description: 'Your stomach, intestines, and other organs that break down and absorb food.',
    icon: 'Apple',
    diseases: ['gastroesophageal-reflux', 'irritable-bowel-syndrome']
  },
  {
    id: 'nervous',
    name: 'Brain & Nerves',
    description: 'Your brain, spinal cord, and nerves that control everything in your body.',
    icon: 'Brain',
    diseases: ['alzheimers-disease', 'migraine', 'depression-major', 'anxiety-generalized']
  },
  {
    id: 'musculoskeletal',
    name: 'Bones & Muscles',
    description: 'Your bones, muscles, and joints that help you move and support your body.',
    icon: 'Bone',
    diseases: ['arthritis-osteo', 'arthritis-rheumatoid']
  }
];

// =============================================================================
// EXPANSION TEMPLATE FOR NEW DISEASES
// =============================================================================
/*
TEMPLATE FOR ADDING NEW DISEASES:

{
  id: 'disease-name-kebab-case',
  name: 'Disease Name',
  category: 'Medical Category',
  bodySystem: 'system-id',
  summary: 'Brief, clear summary of the condition in one sentence.',
  symptoms: [
    'List of common symptoms',
    'Each symptom on separate line',
    'Use clear, understandable language'
  ],
  causes: [
    'List of known causes',
    'Risk factors',
    'Contributing factors'
  ],
  diagnosis: [
    'Diagnostic tests',
    'Examination procedures',
    'Medical assessments'
  ],
  treatment: [
    'Treatment options',
    'Medications',
    'Therapies and procedures'
  ],
  prevention: [
    'Prevention strategies',
    'Lifestyle modifications',
    'Risk reduction methods'
  ],
  simpleExplanation: {
    whatIs: 'Simple explanation using analogies and everyday language',
    howYouGet: 'How the condition develops or is acquired',
    howToFeel: 'What symptoms feel like in simple terms',
    howToGetBetter: 'Treatment approach in simple language'
  },
  severity: 'mild' | 'moderate' | 'severe',
  commonness: 'rare' | 'uncommon' | 'common' | 'very-common'
}

CATEGORIES TO EXPAND:
- Dermatological (Skin conditions)
- Infectious Diseases
- Oncological (Cancer-related)
- Pediatric Conditions
- Women's Health
- Men's Health
- Genetic Disorders
- Eye and Vision
- Ear, Nose, and Throat
- Urological
- Hematological (Blood disorders)

DATE NEW ADDITIONS FOR TRACKING:
// Added [Date]: [Disease Name] - [Brief reason for addition]
*/
