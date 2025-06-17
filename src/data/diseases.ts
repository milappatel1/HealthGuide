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
  
  {
    id: 'coronary-artery-disease',
    name: 'Coronary Artery Disease',
    category: 'Cardiovascular',
    bodySystem: 'cardiovascular',
    summary: 'A condition where the major blood vessels that supply the heart become damaged or diseased, usually due to plaque buildup.',
    symptoms: [
      'Chest pain (angina)',
      'Shortness of breath',
      'Pain in neck, jaw, throat, or back',
      'Pain or weakness in legs or arms',
      'Fatigue',
      'Heart palpitations',
      'Nausea (especially in women)'
    ],
    causes: [
      'High cholesterol',
      'High blood pressure',
      'Smoking',
      'Diabetes',
      'Obesity',
      'Physical inactivity',
      'Family history',
      'Age and gender'
    ],
    diagnosis: [
      'Electrocardiogram (ECG)',
      'Stress testing',
      'Cardiac catheterization',
      'CT coronary angiogram',
      'Blood tests (cholesterol, cardiac enzymes)',
      'Echocardiogram'
    ],
    treatment: [
      'Lifestyle changes',
      'Cholesterol-lowering medications',
      'Blood pressure medications',
      'Blood thinners',
      'Angioplasty and stenting',
      'Coronary artery bypass surgery'
    ],
    prevention: [
      'Don\'t smoke',
      'Exercise regularly',
      'Eat a heart-healthy diet',
      'Maintain healthy weight',
      'Control blood pressure',
      'Manage cholesterol levels',
      'Control diabetes'
    ],
    simpleExplanation: {
      whatIs: 'Your heart is like a muscle that needs its own blood supply to work properly. Coronary artery disease happens when the tubes (arteries) that bring blood to your heart muscle get clogged with fatty deposits, like pipes getting clogged.',
      howYouGet: 'It develops slowly over many years when you eat too much fatty food, don\'t exercise, smoke, or have high blood pressure. These things cause sticky plaque to build up in your heart\'s blood vessels.',
      howToFeel: 'You might feel chest pain, especially when you\'re active or stressed. It can feel like pressure, squeezing, or burning in your chest. You might also feel tired or short of breath.',
      howToGetBetter: 'Doctors can help by giving you medicines to improve blood flow and lower cholesterol. Sometimes they need to open up the blocked arteries with special procedures or surgery.'
    },
    severity: 'severe',
    commonness: 'common'
  },

  {
    id: 'hypertension',
    name: 'High Blood Pressure (Hypertension)',
    category: 'Cardiovascular',
    bodySystem: 'cardiovascular',
    summary: 'A condition where blood pushes against artery walls with too much force, potentially damaging your heart and blood vessels.',
    symptoms: [
      'Often no symptoms (silent killer)',
      'Headaches',
      'Nosebleeds',
      'Shortness of breath',
      'Chest pain',
      'Vision problems',
      'Fatigue'
    ],
    causes: [
      'Family history',
      'Age',
      'Being overweight',
      'Too much salt in diet',
      'Lack of physical activity',
      'Smoking',
      'Stress',
      'Kidney disease'
    ],
    diagnosis: [
      'Regular blood pressure readings',
      'Multiple measurements over time',
      '24-hour ambulatory monitoring',
      'Home blood pressure monitoring',
      'Physical examination'
    ],
    treatment: [
      'Lifestyle changes',
      'Low-sodium diet',
      'Regular exercise',
      'Weight management',
      'Stress reduction',
      'Medications (ACE inhibitors, diuretics)',
      'Regular monitoring'
    ],
    prevention: [
      'Maintain healthy weight',
      'Exercise regularly',
      'Eat less salt',
      'Limit alcohol',
      'Don\'t smoke',
      'Manage stress',
      'Get regular check-ups'
    ],
    simpleExplanation: {
      whatIs: 'Your blood flows through tubes called arteries. High blood pressure means your blood is pushing too hard against these tubes, like water flowing too fast through a garden hose.',
      howYouGet: 'It can happen if you eat too much salty food, don\'t exercise, or if it runs in your family. Sometimes your arteries get narrower, making your heart work harder.',
      howToFeel: 'Most people don\'t feel anything at first, which is why doctors call it the "silent killer." That\'s why it\'s important to check your blood pressure regularly.',
      howToGetBetter: 'Eat healthy foods with less salt, exercise like taking walks, and take medicine if your doctor says you need it. It\'s like teaching your heart to relax and not work so hard.'
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

  {
    id: 'bronchitis',
    name: 'Bronchitis',
    category: 'Respiratory',
    bodySystem: 'respiratory',
    summary: 'Inflammation of the lining of your bronchial tubes, which carry air to and from your lungs.',
    symptoms: [
      'Persistent cough with mucus',
      'Fatigue',
      'Shortness of breath',
      'Slight fever and chills',
      'Chest discomfort',
      'Sore throat',
      'Body aches'
    ],
    causes: [
      'Viral infections (most common)',
      'Bacterial infections',
      'Smoking',
      'Air pollution',
      'Chemical fumes',
      'Dust exposure',
      'Weakened immune system'
    ],
    diagnosis: [
      'Physical examination',
      'Medical history',
      'Chest X-ray',
      'Sputum culture',
      'Pulmonary function tests',
      'Blood tests (if bacterial infection suspected)'
    ],
    treatment: [
      'Rest and fluids',
      'Cough suppressants',
      'Expectorants',
      'Bronchodilators',
      'Antibiotics (if bacterial)',
      'Humidifier use',
      'Avoiding irritants'
    ],
    prevention: [
      'Don\'t smoke',
      'Avoid secondhand smoke',
      'Get vaccinated (flu, pneumonia)',
      'Wash hands frequently',
      'Wear mask in dusty environments',
      'Avoid air pollutants',
      'Maintain good overall health'
    ],
    simpleExplanation: {
      whatIs: 'Bronchitis is when the tubes that carry air to your lungs get irritated and swollen, like when your throat gets sore. This makes you cough a lot and feel tired.',
      howYouGet: 'You usually get it from a cold or flu virus, or from breathing in things that irritate your lungs like smoke or dust. It\'s like your lung tubes getting angry at these irritants.',
      howToFeel: 'You\'ll have a cough that won\'t go away, and you might cough up thick mucus. You\'ll feel tired and your chest might feel uncomfortable or tight.',
      howToGetBetter: 'Rest a lot, drink plenty of water, and use a humidifier to make the air moist. Your doctor might give you medicine to help you cough up the mucus or to open up your airways.'
    },
    severity: 'mild',
    commonness: 'common'
  },

  {
    id: 'common-cold',
    name: 'Common Cold',
    category: 'Respiratory Infections',
    bodySystem: 'respiratory',
    summary: 'A viral infection of your nose and throat that is usually harmless but can make you feel unwell.',
    symptoms: [
      'Runny or stuffy nose',
      'Sore throat',
      'Cough',
      'Sneezing',
      'Mild headache',
      'Low-grade fever',
      'Body aches'
    ],
    causes: [
      'Rhinoviruses (most common)',
      'Coronaviruses',
      'Respiratory syncytial virus (RSV)',
      'Close contact with infected people',
      'Touching contaminated surfaces',
      'Weakened immune system'
    ],
    diagnosis: [
      'Symptom evaluation by healthcare provider',
      'Physical examination',
      'Usually no tests needed',
      'Throat swab (if complications suspected)'
    ],
    treatment: [
      'Rest and sleep',
      'Drink plenty of fluids',
      'Use a humidifier',
      'Gargle with salt water',
      'Over-the-counter pain relievers',
      'Throat lozenges'
    ],
    prevention: [
      'Wash hands frequently',
      'Avoid touching face',
      'Stay away from sick people',
      'Don\'t share personal items',
      'Keep immune system strong',
      'Get enough sleep'
    ],
    simpleExplanation: {
      whatIs: 'A cold is when tiny germs called viruses get into your nose and throat and make them feel yucky. It\'s like having unwanted visitors in your body.',
      howYouGet: 'You catch a cold when someone who is sick coughs or sneezes near you, or when you touch something with germs and then touch your face.',
      howToFeel: 'Your nose gets stuffy and runny, your throat might hurt, and you might cough or sneeze a lot. You feel tired because your body is working hard to fight the germs.',
      howToGetBetter: 'Rest a lot, drink warm soup or tea, and wash your hands often. Your body will fight off the germs in about a week, just like superheroes fighting bad guys!'
    },
    severity: 'mild',
    commonness: 'very-common'
  },

  {
    id: 'copd',
    name: 'Chronic Obstructive Pulmonary Disease (COPD)',
    category: 'Respiratory',
    bodySystem: 'respiratory',
    summary: 'A group of lung diseases that block airflow and make it difficult to breathe, usually caused by long-term exposure to irritating gases or particles.',
    symptoms: [
      'Chronic cough with mucus',
      'Shortness of breath during activities',
      'Wheezing',
      'Chest tightness',
      'Frequent respiratory infections',
      'Fatigue',
      'Unintended weight loss'
    ],
    causes: [
      'Smoking (most common cause)',
      'Long-term exposure to air pollution',
      'Occupational dust and chemicals',
      'Secondhand smoke',
      'Genetic factors (Alpha-1 deficiency)',
      'Frequent childhood respiratory infections'
    ],
    diagnosis: [
      'Spirometry (lung function test)',
      'Chest X-ray',
      'CT scan of chest',
      'Arterial blood gas test',
      'Sputum examination',
      'Alpha-1 antitrypsin test'
    ],
    treatment: [
      'Smoking cessation',
      'Bronchodilator medications',
      'Inhaled corticosteroids',
      'Oxygen therapy',
      'Pulmonary rehabilitation',
      'Lung volume reduction surgery',
      'Lung transplant (severe cases)'
    ],
    prevention: [
      'Don\'t smoke or quit smoking',
      'Avoid secondhand smoke',
      'Avoid air pollution and dust',
      'Use protective equipment at work',
      'Get vaccinated (flu, pneumonia)',
      'Exercise regularly'
    ],
    simpleExplanation: {
      whatIs: 'COPD is when your lungs get damaged and can\'t work as well as they should. It\'s like having airways that are partly blocked, making it hard to breathe in and out.',
      howYouGet: 'Most people get COPD from smoking cigarettes for many years, but you can also get it from breathing in harmful dust, chemicals, or air pollution for a long time.',
      howToFeel: 'You\'ll feel short of breath, especially when you\'re active. You might cough a lot and feel tired easily. Simple activities like walking up stairs might make you feel winded.',
      howToGetBetter: 'The most important thing is to stop smoking if you smoke. Doctors can give you inhalers to help you breathe better and teach you exercises to strengthen your lungs.'
    },
    severity: 'severe',
    commonness: 'common'
  },

  {
    id: 'pneumonia',
    name: 'Pneumonia',
    category: 'Respiratory Infections',
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
      'Bacterial infections (Streptococcus pneumoniae)',
      'Viral infections (influenza, COVID-19)',
      'Fungal infections',
      'Aspiration (inhaling food or liquid)',
      'Hospital-acquired infections',
      'Weakened immune system'
    ],
    diagnosis: [
      'Chest X-ray',
      'Blood tests',
      'Sputum culture',
      'CT scan (if needed)',
      'Pulse oximetry',
      'Pleural fluid culture'
    ],
    treatment: [
      'Antibiotics (for bacterial pneumonia)',
      'Antiviral medications (for viral pneumonia)',
      'Rest and fluids',
      'Oxygen therapy',
      'Hospitalization (severe cases)',
      'Pain relievers and fever reducers'
    ],
    prevention: [
      'Get vaccinated (pneumonia, flu)',
      'Practice good hygiene',
      'Don\'t smoke',
      'Maintain a healthy lifestyle',
      'Avoid people who are sick',
      'Manage chronic conditions'
    ],
    simpleExplanation: {
      whatIs: 'Pneumonia is when the tiny air sacs in your lungs get infected and fill up with fluid or pus, like little balloons filling up with water instead of air.',
      howYouGet: 'You can get it from breathing in germs like bacteria or viruses, especially when you\'re already sick with a cold or flu, or if your body\'s defenses are weak.',
      howToFeel: 'You\'ll feel very sick with a high fever, chills, and a bad cough that might bring up thick mucus. Breathing will be hard and your chest will hurt.',
      howToGetBetter: 'Doctors will give you strong medicines called antibiotics to fight the infection. You need lots of rest, fluids, and sometimes oxygen to help you breathe better.'
    },
    severity: 'severe',
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

  {
    id: 'diabetes-type-2',
    name: 'Type 2 Diabetes',
    category: 'Metabolic Disorders',
    bodySystem: 'endocrine',
    summary: 'A condition where your body cannot properly use insulin, causing high blood sugar levels.',
    symptoms: [
      'Increased thirst and urination',
      'Unexplained weight loss',
      'Fatigue and weakness',
      'Blurred vision',
      'Slow-healing cuts or bruises',
      'Frequent infections'
    ],
    causes: [
      'Genetics and family history',
      'Being overweight or obese',
      'Physical inactivity',
      'Age (over 45)',
      'High blood pressure',
      'Abnormal cholesterol levels'
    ],
    diagnosis: [
      'Fasting blood sugar test',
      'A1C test (average blood sugar over 2-3 months)',
      'Oral glucose tolerance test',
      'Random blood sugar test'
    ],
    treatment: [
      'Healthy diet and meal planning',
      'Regular physical activity',
      'Blood sugar monitoring',
      'Medications (metformin, insulin)',
      'Regular check-ups with healthcare team'
    ],
    prevention: [
      'Maintain a healthy weight',
      'Exercise regularly (150 minutes per week)',
      'Eat a balanced diet with whole grains',
      'Limit processed foods and sugary drinks',
      'Get regular health screenings'
    ],
    simpleExplanation: {
      whatIs: 'Think of your body like a car that needs fuel (sugar) to run. Diabetes happens when your body has trouble using that fuel properly, so sugar builds up in your blood instead of going to your muscles.',
      howYouGet: 'You can get diabetes if it runs in your family, if you eat too much unhealthy food, or if you don\'t exercise enough. It\'s like your body\'s fuel system gets worn out.',
      howToFeel: 'You might feel very thirsty, tired, or need to go to the bathroom a lot. It\'s your body\'s way of trying to get rid of the extra sugar.',
      howToGetBetter: 'Doctors can help with special medicines, and you can help by eating healthy foods, exercising, and checking your blood sugar like checking the fuel gauge in a car.'
    },
    severity: 'moderate',
    commonness: 'common'
  },

  {
    id: 'hypothyroidism',
    name: 'Hypothyroidism',
    category: 'Endocrine Disorders',
    bodySystem: 'endocrine',
    summary: 'A condition where your thyroid gland doesn\'t produce enough thyroid hormones, slowing down your body\'s metabolism.',
    symptoms: [
      'Fatigue and weakness',
      'Weight gain',
      'Cold intolerance',
      'Dry skin and hair',
      'Hair loss',
      'Constipation',
      'Depression or mood changes',
      'Memory problems',
      'Slow heart rate'
    ],
    causes: [
      'Hashimoto\'s thyroiditis (autoimmune)',
      'Thyroid surgery',
      'Radiation therapy',
      'Certain medications',
      'Iodine deficiency',
      'Pituitary gland problems',
      'Congenital thyroid disorders'
    ],
    diagnosis: [
      'TSH (thyroid stimulating hormone) test',
      'Free T4 test',
      'Free T3 test',
      'Thyroid antibody tests',
      'Physical examination',
      'Medical history review'
    ],
    treatment: [
      'Thyroid hormone replacement (levothyroxine)',
      'Regular blood tests to monitor levels',
      'Dosage adjustments as needed',
      'Lifelong treatment usually required',
      'Consistent medication timing'
    ],
    prevention: [
      'Ensure adequate iodine intake',
      'Regular thyroid screening',
      'Manage autoimmune conditions',
      'Avoid excessive soy consumption',
      'Monitor medication interactions'
    ],
    simpleExplanation: {
      whatIs: 'Your thyroid is like your body\'s engine control center. When it doesn\'t make enough hormones, it\'s like your engine running too slowly, making everything in your body work slower.',
      howYouGet: 'Sometimes your body\'s defense system attacks your thyroid by mistake, or it can be damaged by surgery or medicine. Some people are born with thyroid problems.',
      howToFeel: 'You\'ll feel very tired all the time, like you\'re moving through thick mud. You might gain weight, feel cold, and have trouble thinking clearly.',
      howToGetBetter: 'Doctors give you thyroid hormone pills that replace what your thyroid can\'t make. It\'s like giving your body\'s engine the right fuel to run properly again.'
    },
    severity: 'moderate',
    commonness: 'common'
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

  {
    id: 'irritable-bowel-syndrome',
    name: 'Irritable Bowel Syndrome (IBS)',
    category: 'Gastrointestinal',
    bodySystem: 'digestive',
    summary: 'A common disorder affecting the large intestine, causing cramping, abdominal pain, bloating, gas, and changes in bowel habits.',
    symptoms: [
      'Abdominal pain and cramping',
      'Bloating and gas',
      'Diarrhea or constipation (or both)',
      'Changes in bowel movement appearance',
      'Mucus in stool',
      'Feeling of incomplete evacuation',
      'Urgency to have bowel movements'
    ],
    causes: [
      'Abnormal gut muscle contractions',
      'Nervous system abnormalities',
      'Inflammation in intestines',
      'Severe infection',
      'Changes in gut bacteria',
      'Food sensitivities',
      'Stress and mental health factors'
    ],
    diagnosis: [
      'Rome criteria for IBS symptoms',
      'Medical history and physical exam',
      'Blood tests (to rule out other conditions)',
      'Stool tests',
      'Colonoscopy (if needed)',
      'Food intolerance tests'
    ],
    treatment: [
      'Dietary changes (low FODMAP diet)',
      'Fiber supplements',
      'Anti-diarrheal medications',
      'Laxatives for constipation',
      'Antispasmodic medications',
      'Probiotics',
      'Stress management',
      'Psychological therapy'
    ],
    prevention: [
      'Identify and avoid trigger foods',
      'Manage stress effectively',
      'Exercise regularly',
      'Eat regular meals',
      'Stay hydrated',
      'Get adequate sleep',
      'Consider probiotics'
    ],
    simpleExplanation: {
      whatIs: 'IBS is when your intestines (the long tube that processes food) become very sensitive and don\'t work smoothly. It\'s like having a temperamental digestive system that gets upset easily.',
      howYouGet: 'Nobody knows exactly why it happens, but it might be because your gut is extra sensitive to certain foods, stress, or changes in the good bacteria that live in your intestines.',
      howToFeel: 'Your belly will hurt and feel bloated, like a balloon that\'s too full. You might have diarrhea sometimes and constipation other times, and you\'ll feel like you need to go to the bathroom urgently.',
      howToGetBetter: 'You\'ll need to figure out which foods upset your stomach and avoid them. Managing stress, exercising, and sometimes taking medicine can help your digestive system calm down.'
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

  {
    id: 'migraine',
    name: 'Migraine',
    category: 'Neurological',
    bodySystem: 'nervous',
    summary: 'A neurological condition characterized by intense, debilitating headaches often accompanied by nausea, vomiting, and sensitivity to light and sound.',
    symptoms: [
      'Severe throbbing headache (usually one-sided)',
      'Nausea and vomiting',
      'Sensitivity to light and sound',
      'Visual disturbances (aura)',
      'Dizziness',
      'Fatigue',
      'Mood changes',
      'Neck stiffness'
    ],
    causes: [
      'Genetics and family history',
      'Hormonal changes',
      'Certain foods (chocolate, cheese, wine)',
      'Stress',
      'Sleep changes',
      'Weather changes',
      'Strong smells',
      'Bright lights'
    ],
    diagnosis: [
      'Medical history and symptom description',
      'Physical and neurological examination',
      'Headache diary',
      'MRI or CT scan (to rule out other causes)',
      'Blood tests'
    ],
    treatment: [
      'Pain relief medications (triptans)',
      'Preventive medications',
      'Anti-nausea medications',
      'Rest in dark, quiet room',
      'Cold or warm compresses',
      'Lifestyle modifications',
      'Stress management'
    ],
    prevention: [
      'Identify and avoid triggers',
      'Maintain regular sleep schedule',
      'Manage stress',
      'Stay hydrated',
      'Exercise regularly',
      'Eat regular meals',
      'Limit caffeine and alcohol'
    ],
    simpleExplanation: {
      whatIs: 'A migraine is a really bad headache that\'s much worse than a regular headache. It\'s like having a thunderstorm in your head that makes you feel sick and want to hide in a dark, quiet place.',
      howYouGet: 'Migraines can be triggered by things like certain foods, stress, not getting enough sleep, or changes in weather. Some people inherit the tendency to get migraines from their parents.',
      howToFeel: 'Your head will hurt really badly, usually on one side, and you might feel sick to your stomach. Lights and sounds will seem too bright and loud, and you\'ll want to lie down in a dark room.',
      howToGetBetter: 'Doctors can give you special medicines to stop the migraine or prevent them from happening. You can also help by figuring out what triggers your migraines and avoiding those things.'
    },
    severity: 'moderate',
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

  {
    id: 'arthritis-rheumatoid',
    name: 'Rheumatoid Arthritis',
    category: 'Autoimmune/Musculoskeletal',
    bodySystem: 'musculoskeletal',
    summary: 'An autoimmune disorder where the immune system attacks the joints, causing inflammation, pain, and potential joint damage.',
    symptoms: [
      'Joint pain and swelling',
      'Morning stiffness lasting hours',
      'Fatigue',
      'Fever',
      'Loss of appetite',
      'Symmetrical joint involvement',
      'Joint deformity (advanced cases)',
      'Rheumatoid nodules'
    ],
    causes: [
      'Autoimmune system malfunction',
      'Genetic predisposition',
      'Environmental triggers',
      'Hormonal factors',
      'Smoking',
      'Infections (possible triggers)'
    ],
    diagnosis: [
      'Blood tests (RF, anti-CCP antibodies)',
      'Inflammatory markers (ESR, CRP)',
      'X-rays',
      'Ultrasound or MRI',
      'Physical examination',
      'Joint fluid analysis'
    ],
    treatment: [
      'Disease-modifying antirheumatic drugs (DMARDs)',
      'Biologic medications',
      'Corticosteroids',
      'NSAIDs',
      'Physical therapy',
      'Occupational therapy',
      'Surgery (if needed)'
    ],
    prevention: [
      'Cannot be prevented (autoimmune)',
      'Early treatment prevents damage',
      'Don\'t smoke',
      'Maintain healthy weight',
      'Regular exercise',
      'Stress management'
    ],
    simpleExplanation: {
      whatIs: 'Rheumatoid arthritis happens when your body\'s defense system gets confused and attacks your own joints by mistake, like friendly fire. This makes your joints swollen, painful, and stiff.',
      howYouGet: 'It\'s an autoimmune disease, which means your immune system makes a mistake. You might be born with genes that make this more likely, and things like smoking or infections might trigger it.',
      howToFeel: 'Your joints will be very stiff in the morning and might stay that way for hours. They\'ll be swollen, warm, and painful, usually the same joints on both sides of your body.',
      howToGetBetter: 'Doctors have special medicines that can stop your immune system from attacking your joints. The sooner you start treatment, the better you can prevent damage to your joints.'
    },
    severity: 'severe',
    commonness: 'uncommon'
  },

  // =============================================================================
  // MENTAL HEALTH CONDITIONS
  // =============================================================================

  {
    id: 'depression-major',
    name: 'Major Depressive Disorder',
    category: 'Mental Health',
    bodySystem: 'nervous',
    summary: 'A serious mental health condition characterized by persistent feelings of sadness, hopelessness, and loss of interest in activities.',
    symptoms: [
      'Persistent sad or empty mood',
      'Loss of interest in activities',
      'Significant weight loss or gain',
      'Sleep disturbances',
      'Fatigue or loss of energy',
      'Feelings of worthlessness or guilt',
      'Difficulty concentrating',
      'Thoughts of death or suicide'
    ],
    causes: [
      'Brain chemistry imbalances',
      'Genetics and family history',
      'Life events and trauma',
      'Medical conditions',
      'Certain medications',
      'Substance abuse',
      'Hormonal changes'
    ],
    diagnosis: [
      'Clinical interview',
      'Mental health assessment',
      'Depression screening questionnaires',
      'Medical examination',
      'Blood tests (to rule out medical causes)',
      'Psychological evaluation'
    ],
    treatment: [
      'Antidepressant medications',
      'Psychotherapy (talk therapy)',
      'Cognitive behavioral therapy (CBT)',
      'Lifestyle changes',
      'Support groups',
      'Electroconvulsive therapy (severe cases)',
      'Light therapy'
    ],
    prevention: [
      'Maintain social connections',
      'Regular exercise',
      'Adequate sleep',
      'Stress management',
      'Avoid alcohol and drugs',
      'Seek help early',
      'Practice self-care'
    ],
    simpleExplanation: {
      whatIs: 'Depression is like having a dark cloud over your mind that makes everything seem sad, hopeless, and difficult. It\'s not just feeling sad for a day - it\'s a real illness that affects how you think and feel.',
      howYouGet: 'It can happen because of changes in brain chemicals, stressful life events, or it might run in families. Sometimes it happens even when everything in your life seems fine.',
      howToFeel: 'You\'ll feel very sad most of the time and won\'t enjoy things you used to love. You might feel tired all the time, have trouble sleeping, or feel like you\'re not worth anything.',
      howToGetBetter: 'Doctors can help with medicines that balance brain chemicals and therapy where you talk about your feelings. With treatment, most people with depression get much better.'
    },
    severity: 'severe',
    commonness: 'common'
  },

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