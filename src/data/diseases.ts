import { Disease, BodySystem } from '../types/Disease';

export const bodySystems: BodySystem[] = [
  {
    id: 'cardiovascular',
    name: 'Cardiovascular System',
    description: 'Your heart and blood vessels work together like a delivery system, pumping blood with oxygen and nutrients to every part of your body.',
    icon: 'Heart',
    diseases: ['hypertension', 'heart-disease']
  },
  {
    id: 'nervous',
    name: 'Nervous System',
    description: 'Your brain, spinal cord, and nerves act as your body\'s command center, controlling everything you think, feel, and do.',
    icon: 'Brain',
    diseases: ['migraine', 'epilepsy']
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
    diseases: ['asthma', 'pneumonia']
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
    diseases: ['diabetes', 'thyroid-disorders']
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
  }
];