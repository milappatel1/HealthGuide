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
  id: 'coronary-artery-disease',
  name: 'Coronary Artery Disease (CAD)',
  category: 'Cardiovascular',
  bodySystem: 'cardiovascular',
  summary: 'A condition where the coronary arteries become narrowed or blocked due to plaque buildup, reducing blood flow to the heart.',
  symptoms: [
    'Chest pain or pressure (angina)',
    'Shortness of breath',
    'Fatigue with exertion',
    'Heart palpitations',
    'Nausea or sweating during chest discomfort',
    'Dizziness or fainting',
    'Silent heart attacks (sometimes no symptoms)'
  ],
  causes: [
    'Atherosclerosis (plaque buildup in arteries)',
    'High blood pressure',
    'High cholesterol',
    'Smoking',
    'Diabetes',
    'Obesity',
    'Sedentary lifestyle',
    'Family history of heart disease'
  ],
  diagnosis: [
    'Electrocardiogram (ECG)',
    'Exercise stress test',
    'Echocardiogram',
    'Cardiac catheterization and angiogram',
    'CT coronary angiography',
    'Blood tests (cholesterol, triglycerides)'
  ],
  treatment: [
    'Lifestyle modifications (diet, exercise, stop smoking)',
    'Medications (statins, beta-blockers, aspirin, nitrates)',
    'Angioplasty and stent placement',
    'Coronary artery bypass surgery (CABG)',
    'Cardiac rehabilitation programs'
  ],
  prevention: [
    'Maintain healthy blood pressure and cholesterol',
    'Exercise regularly',
    'Eat a heart-healthy diet',
    'Avoid smoking',
    'Maintain healthy weight',
    'Manage stress',
    'Control diabetes if present'
  ],
  simpleExplanation: {
    whatIs: 'Your heart needs blood through special tubes called arteries. In CAD, those tubes get clogged with fatty “gunk” called plaque, so less blood gets to the heart.',
    howYouGet: 'It builds up over time if you eat unhealthy foods, smoke, or have high blood pressure or cholesterol. Family history can also make it more likely.',
    howToFeel: 'You may feel chest pain, like someone is squeezing your chest, or get tired easily. Sometimes there are no symptoms until a heart attack happens.',
    howToGetBetter: 'Doctors give medicine to lower cholesterol and blood pressure, and sometimes do procedures to open or bypass the clogged arteries.'
  },
  severity: 'severe',
  commonness: 'very-common'
},

  {
  id: 'heart-failure',
  name: 'Heart Failure',
  category: 'Cardiovascular',
  bodySystem: 'cardiovascular',
  summary: 'A chronic condition where the heart cannot pump blood effectively enough to meet the body’s needs.',
  symptoms: [
    'Shortness of breath (especially lying down)',
    'Swelling in legs, ankles, or abdomen',
    'Fatigue and weakness',
    'Rapid or irregular heartbeat',
    'Persistent cough or wheezing',
    'Sudden weight gain from fluid buildup'
  ],
  causes: [
    'Coronary artery disease',
    'High blood pressure',
    'Heart attack damage',
    'Valve disease',
    'Cardiomyopathy',
    'Diabetes',
    'Obesity'
  ],
  diagnosis: [
    'Physical exam and history',
    'Echocardiogram',
    'Electrocardiogram (ECG)',
    'Chest X-ray',
    'Blood tests (BNP/NT-proBNP)',
    'Cardiac MRI or CT'
  ],
  treatment: [
    'Medications (ACE inhibitors, beta-blockers, diuretics)',
    'Lifestyle modifications',
    'Implantable devices (pacemaker, defibrillator)',
    'Surgery (valve repair, bypass)',
    'Heart transplant (severe cases)'
  ],
  prevention: [
    'Manage blood pressure and cholesterol',
    'Exercise regularly',
    'Eat a heart-healthy diet',
    'Quit smoking',
    'Control diabetes',
    'Limit alcohol'
  ],
  simpleExplanation: {
    whatIs: 'Heart failure means the heart is weak and can not pump blood well enough, like a pump that is losing power.',
    howYouGet: 'It usually happens after years of heart damage from things like high blood pressure, heart attacks, or clogged arteries.',
    howToFeel: 'You may feel short of breath, swollen in your legs, and tired all the time.',
    howToGetBetter: 'Medicines, lifestyle changes, and sometimes devices or surgery can help your heart work better.'
  },
  severity: 'severe',
  commonness: 'common'
},

{
  id: 'hypertension',
  name: 'Hypertension (High Blood Pressure)',
  category: 'Cardiovascular',
  bodySystem: 'cardiovascular',
  summary: 'A chronic condition where the force of the blood against artery walls is consistently too high, increasing the risk of heart disease and stroke.',
  symptoms: [
    'Often none (silent condition)',
    'Headaches (sometimes)',
    'Dizziness',
    'Blurred vision',
    'Nosebleeds (rare, in severe cases)'
  ],
  causes: [
    'Genetics and family history',
    'Obesity',
    'High salt diet',
    'Lack of physical activity',
    'Stress',
    'Excessive alcohol use',
    'Chronic kidney disease'
  ],
  diagnosis: [
    'Blood pressure measurement',
    'Ambulatory blood pressure monitoring',
    'Blood and urine tests',
    'Electrocardiogram (ECG)',
    'Echocardiogram (if complications suspected)'
  ],
  treatment: [
    'Lifestyle changes (diet, exercise, stress management)',
    'Medications (diuretics, ACE inhibitors, beta-blockers, calcium channel blockers)',
    'Regular monitoring'
  ],
  prevention: [
    'Maintain healthy weight',
    'Eat low-salt, balanced diet',
    'Exercise regularly',
    'Limit alcohol and avoid smoking',
    'Manage stress'
  ],
  simpleExplanation: {
    whatIs: 'High blood pressure means your blood pushes too hard on your blood vessels, like too much water pressure in a hose.',
    howYouGet: 'It comes from eating too much salt, being overweight, stress, or family history. It often sneaks up without symptoms.',
    howToFeel: 'Usually you won’t feel it, but sometimes you may get headaches or dizziness.',
    howToGetBetter: 'Healthy lifestyle and medicines help keep blood pressure normal and protect your heart, kidneys, and brain.'
  },
  severity: 'moderate',
  commonness: 'very-common'
},

  {
  id: 'stroke',
  name: 'Stroke',
  category: 'Cardiovascular',
  bodySystem: 'cardiovascular',
  summary: 'A medical emergency that occurs when blood flow to part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients.',
  symptoms: [
    'Sudden numbness or weakness in face, arm, or leg',
    'Sudden confusion or trouble speaking',
    'Sudden trouble seeing in one or both eyes',
    'Sudden trouble walking or loss of balance',
    'Sudden severe headache',
    'Drooping face on one side',
    'Difficulty understanding speech'
  ],
  causes: [
    'Blood clot blocking brain artery (ischemic stroke)',
    'Bleeding in the brain (hemorrhagic stroke)',
    'High blood pressure',
    'Atrial fibrillation',
    'Diabetes',
    'High cholesterol',
    'Smoking'
  ],
  diagnosis: [
    'CT scan or MRI of brain',
    'Blood tests',
    'Electrocardiogram (ECG)',
    'Carotid ultrasound',
    'Echocardiogram',
    'Neurological examination'
  ],
  treatment: [
    'Clot-busting medications (if ischemic)',
    'Emergency surgery (if hemorrhagic)',
    'Blood pressure management',
    'Physical and speech therapy',
    'Occupational therapy',
    'Long-term rehabilitation'
  ],
  prevention: [
    'Control blood pressure and cholesterol',
    'Do not smoke',
    'Limit alcohol',
    'Exercise regularly',
    'Eat healthy diet',
    'Manage diabetes',
    'Treat atrial fibrillation'
  ],
  simpleExplanation: {
    whatIs: 'A stroke happens when blood can not get to part of your brain, either because a blood vessel gets blocked or bursts. Without blood, brain cells start to die.',
    howYouGet: 'It usually happens when you have high blood pressure, irregular heartbeat, or clogged arteries for a long time.',
    howToFeel: 'You might suddenly feel weak on one side, have trouble speaking, or feel confused. Your face might droop on one side.',
    howToGetBetter: 'Getting to the hospital fast is crucial. Doctors can use medicines or surgery to restore blood flow and prevent more damage.'
  },
  severity: 'severe',
  commonness: 'common'
},

{
  id: 'peripheral-artery-disease',
  name: 'Peripheral Artery Disease (PAD)',
  category: 'Cardiovascular',
  bodySystem: 'cardiovascular',
  summary: 'A condition where narrowed arteries reduce blood flow to the limbs, usually the legs, causing pain and increasing risk of infection.',
  symptoms: [
    'Leg pain when walking (claudication)',
    'Coldness in lower leg or foot',
    'Numbness or weakness in legs',
    'Slow-healing sores on legs or feet',
    'Shiny skin on legs',
    'Hair loss on legs',
    'Weak pulse in legs or feet'
  ],
  causes: [
    'Atherosclerosis (plaque buildup in arteries)',
    'Smoking',
    'Diabetes',
    'High blood pressure',
    'High cholesterol',
    'Age over 65',
    'Family history'
  ],
  diagnosis: [
    'Ankle-brachial index (ABI) test',
    'Ultrasound',
    'Angiography',
    'Blood tests',
    'Physical examination'
  ],
  treatment: [
    'Lifestyle changes (exercise, quit smoking)',
    'Medications (blood thinners, cholesterol drugs)',
    'Angioplasty and stenting',
    'Bypass surgery',
    'Wound care for ulcers'
  ],
  prevention: [
    'Do not smoke',
    'Exercise regularly',
    'Eat heart-healthy diet',
    'Control diabetes and blood pressure',
    'Manage cholesterol'
  ],
  simpleExplanation: {
    whatIs: 'PAD is when the blood vessels in your legs get clogged, so less blood flows to your leg muscles and feet.',
    howYouGet: 'It happens the same way heart disease does - from smoking, diabetes, high blood pressure, or high cholesterol over time.',
    howToFeel: 'Your legs will hurt when you walk, and they might feel cold or numb. Cuts on your legs may heal slowly.',
    howToGetBetter: 'Doctors help open the blocked arteries and give medicines to improve blood flow. Exercise and quitting smoking are very important.'
  },
  severity: 'moderate',
  commonness: 'common'
},

{
  id: 'deep-vein-thrombosis',
  name: 'Deep Vein Thrombosis (DVT)',
  category: 'Cardiovascular',
  bodySystem: 'cardiovascular',
  summary: 'A blood clot that forms in a deep vein, usually in the legs, which can be life-threatening if it travels to the lungs.',
  symptoms: [
    'Swelling in affected leg',
    'Pain or tenderness in leg',
    'Red or discolored skin',
    'Warm feeling in affected area',
    'Enlarged veins',
    'Sometimes no symptoms'
  ],
  causes: [
    'Prolonged sitting or bed rest',
    'Surgery or injury',
    'Pregnancy',
    'Birth control pills or hormone therapy',
    'Cancer',
    'Inherited blood clotting disorders',
    'Obesity'
  ],
  diagnosis: [
    'Ultrasound of veins',
    'D-dimer blood test',
    'CT or MRI scan',
    'Venography (contrast dye X-ray)'
  ],
  treatment: [
    'Blood thinners (anticoagulants)',
    'Clot-busting drugs (severe cases)',
    'Compression stockings',
    'Vena cava filter (if you can not take blood thinners)',
    'Thrombectomy (surgical clot removal)'
  ],
  prevention: [
    'Move regularly during long trips',
    'Exercise regularly',
    'Maintain healthy weight',
    'Wear compression stockings if at risk',
    'Stay hydrated'
  ],
  simpleExplanation: {
    whatIs: 'DVT is when your blood forms a clot in a deep vein, usually in your leg, like thick jelly blocking a straw.',
    howYouGet: 'It happens when blood moves too slowly, often from sitting too long, after surgery, or from certain medications.',
    howToFeel: 'Your leg might swell up, hurt, and feel warm. The dangerous part is if the clot breaks off and goes to your lungs.',
    howToGetBetter: 'Doctors give blood-thinning medicines to dissolve the clot and prevent new ones. Moving around helps prevent it.'
  },
  severity: 'severe',
  commonness: 'uncommon'
},

{
  id: 'varicose-veins',
  name: 'Varicose Veins',
  category: 'Cardiovascular',
  bodySystem: 'cardiovascular',
  summary: 'Enlarged, twisted veins that are visible under the skin, most commonly in the legs, caused by weakened vein walls and valves.',
  symptoms: [
    'Bulging, twisted veins visible under skin',
    'Aching or heavy feeling in legs',
    'Burning or throbbing in legs',
    'Muscle cramping and swelling',
    'Worsened pain after sitting or standing',
    'Itching around veins',
    'Skin discoloration around veins'
  ],
  causes: [
    'Weakened vein valves',
    'Age (weakened vein walls)',
    'Pregnancy (increased blood volume)',
    'Family history',
    'Prolonged standing',
    'Obesity',
    'Female hormones'
  ],
  diagnosis: [
    'Physical examination',
    'Ultrasound to check blood flow',
    'Medical history review'
  ],
  treatment: [
    'Compression stockings',
    'Exercise and leg elevation',
    'Sclerotherapy (injection treatment)',
    'Laser treatment',
    'Radiofrequency treatment',
    'Surgery (vein stripping, phlebectomy)'
  ],
  prevention: [
    'Exercise regularly',
    'Maintain healthy weight',
    'Avoid prolonged standing or sitting',
    'Elevate legs when resting',
    'Wear compression stockings'
  ],
  simpleExplanation: {
    whatIs: 'Varicose veins are when the veins in your legs get stretched out and twisted because the little doors (valves) inside them do not close properly.',
    howYouGet: 'It happens when you stand a lot, are pregnant, or have family members with the same problem. Age makes vein walls weaker.',
    howToFeel: 'Your legs might ache, feel heavy, or cramp. You can see the twisted, bulging veins under your skin.',
    howToGetBetter: 'Doctors can close off the bad veins with injections, lasers, or surgery. Wearing special stockings and elevating your legs helps too.'
  },
  severity: 'mild',
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
  id: 'copd',
  name: 'Chronic Obstructive Pulmonary Disease (COPD)',
  category: 'Respiratory',
  bodySystem: 'respiratory',
  summary: 'A group of progressive lung diseases, including emphysema and chronic bronchitis, that make it hard to breathe.',
  symptoms: [
    'Chronic cough with mucus',
    'Shortness of breath (especially during activity)',
    'Wheezing',
    'Chest tightness',
    'Frequent respiratory infections',
    'Fatigue',
    'Blue lips or fingernails in severe cases'
  ],
  causes: [
    'Long-term smoking',
    'Exposure to air pollutants',
    'Chronic exposure to dust or chemicals',
    'Genetic factors (alpha-1 antitrypsin deficiency)',
    'History of frequent lung infections'
  ],
  diagnosis: [
    'Medical history and physical exam',
    'Spirometry (lung function test)',
    'Chest X-ray',
    'CT scan',
    'Arterial blood gas test',
    'Pulse oximetry'
  ],
  treatment: [
    'Quitting smoking (most important step)',
    'Bronchodilator inhalers',
    'Steroid inhalers',
    'Pulmonary rehabilitation',
    'Oxygen therapy',
    'Surgery in severe cases (lung volume reduction, transplant)'
  ],
  prevention: [
    'Don’t smoke or quit if you do',
    'Avoid secondhand smoke',
    'Limit exposure to lung irritants',
    'Get flu and pneumonia vaccines',
    'Exercise regularly to strengthen lungs'
  ],
  simpleExplanation: {
    whatIs: 'COPD makes your airways and lungs damaged, like old, stiff balloons that can’t fill and empty properly.',
    howYouGet: 'It usually happens after years of smoking, breathing dirty air, or being exposed to harmful chemicals.',
    howToFeel: 'You’ll have trouble catching your breath, cough a lot with mucus, and feel tired even after small activities.',
    howToGetBetter: 'There’s no cure, but medicines, oxygen, and quitting smoking can help you breathe easier and live longer.'
  },
  severity: 'severe',
  commonness: 'common'
},

  {
  id: 'pneumonia',
  name: 'Pneumonia',
  category: 'Respiratory',
  bodySystem: 'respiratory',
  summary: 'An infection that inflames the air sacs in one or both lungs, which may fill with fluid or pus.',
  symptoms: [
    'Cough with phlegm or pus',
    'Fever and chills',
    'Shortness of breath',
    'Chest pain when breathing or coughing',
    'Fatigue',
    'Nausea, vomiting, or diarrhea'
  ],
  causes: [
    'Bacterial infection (Streptococcus pneumoniae most common)',
    'Viral infections (influenza, RSV, COVID-19)',
    'Fungal infections (rare, in immunocompromised)',
    'Aspiration of food or liquids'
  ],
  diagnosis: [
    'Medical history and physical exam',
    'Chest X-ray',
    'Blood tests',
    'Sputum culture',
    'Pulse oximetry',
    'CT scan (if needed)'
  ],
  treatment: [
    'Antibiotics (for bacterial)',
    'Antiviral or antifungal drugs (if indicated)',
    'Fever reducers and pain relievers',
    'Rest and fluids',
    'Hospitalization with oxygen (severe cases)'
  ],
  prevention: [
    'Vaccination (pneumococcal, flu, COVID-19)',
    'Good hygiene',
    'Avoid smoking',
    'Strengthen immune system with healthy lifestyle'
  ],
  simpleExplanation: {
    whatIs: 'Pneumonia is a lung infection that fills your air sacs with fluid, making it hard to breathe.',
    howYouGet: 'It comes from bacteria, viruses, or fungi getting into your lungs, especially if your immune system is weak.',
    howToFeel: 'You’ll cough, have fever, chest pain, and feel very tired. Breathing will be harder.',
    howToGetBetter: 'Doctors use antibiotics or other medicines, plus rest and fluids. Sometimes you need hospital care with oxygen.'
  },
  severity: 'moderate',
  commonness: 'common'
},

{
  id: 'tuberculosis',
  name: 'Tuberculosis (TB)',
  category: 'Respiratory',
  bodySystem: 'respiratory',
  summary: 'A serious infectious disease caused by Mycobacterium tuberculosis bacteria, primarily affecting the lungs but can spread to other organs.',
  symptoms: [
    'Persistent cough (3+ weeks)',
    'Coughing up blood or sputum',
    'Chest pain',
    'Unintentional weight loss',
    'Night sweats',
    'Fever and chills',
    'Fatigue'
  ],
  causes: [
    'Infection with Mycobacterium tuberculosis',
    'Spread through airborne droplets when an infected person coughs or sneezes'
  ],
  diagnosis: [
    'Tuberculin skin test (Mantoux test)',
    'Blood tests (IGRA)',
    'Chest X-ray',
    'Sputum smear and culture'
  ],
  treatment: [
    'Combination antibiotic therapy (isoniazid, rifampin, ethambutol, pyrazinamide)',
    '6–9 months treatment duration',
    'Directly observed therapy (DOT) for adherence'
  ],
  prevention: [
    'BCG vaccination (in high-risk areas)',
    'Good ventilation in crowded spaces',
    'Early detection and treatment of active cases'
  ],
  simpleExplanation: {
    whatIs: 'TB is a lung infection that spreads through the air when someone sick coughs or sneezes.',
    howYouGet: 'You can catch it if you spend time with someone who has active TB and you breathe in the bacteria.',
    howToFeel: 'You’ll cough a lot, maybe cough up blood, lose weight, sweat at night, and feel weak.',
    howToGetBetter: 'Doctors use a mix of antibiotics for many months to kill the bacteria and stop it from spreading.'
  },
  severity: 'severe',
  commonness: 'uncommon'
},

{
  id: 'bronchitis-acute',
  name: 'Acute Bronchitis',
  category: 'Respiratory',
  bodySystem: 'respiratory',
  summary: 'A temporary inflammation of the lining of bronchial tubes that carry air to the lungs, usually caused by viral infections.',
  symptoms: [
    'Cough (may produce mucus)',
    'Fatigue',
    'Shortness of breath',
    'Slight fever and chills',
    'Chest discomfort',
    'Sore throat',
    'Body aches'
  ],
  causes: [
    'Viral infections (cold or flu viruses)',
    'Bacterial infections (less common)',
    'Exposure to irritants (smoke, dust, fumes)',
    'Air pollution'
  ],
  diagnosis: [
    'Physical examination',
    'Medical history',
    'Chest X-ray (to rule out pneumonia)',
    'Sputum test (if bacterial suspected)'
  ],
  treatment: [
    'Rest and fluids',
    'Cough suppressants',
    'Pain relievers',
    'Humidifier use',
    'Antibiotics (only if bacterial)',
    'Bronchodilators (if wheezing present)'
  ],
  prevention: [
    'Wash hands frequently',
    'Avoid smoking and secondhand smoke',
    'Get flu vaccination',
    'Wear mask around sick people',
    'Avoid air pollutants'
  ],
  simpleExplanation: {
    whatIs: 'Acute bronchitis is when the tubes that carry air to your lungs get irritated and swollen, usually from a cold or flu.',
    howYouGet: 'Most of the time it comes from the same viruses that cause colds, or from breathing in irritating things like smoke.',
    howToFeel: 'You will have a nagging cough that may bring up mucus, feel tired, and have some chest discomfort.',
    howToGetBetter: 'It usually goes away on its own with rest, fluids, and time. Cough medicine can help you feel more comfortable.'
  },
  severity: 'mild',
  commonness: 'very-common'
},

{
  id: 'sleep-apnea',
  name: 'Sleep Apnea',
  category: 'Respiratory',
  bodySystem: 'respiratory',
  summary: 'A serious sleep disorder where breathing repeatedly stops and starts during sleep, disrupting rest and oxygen levels.',
  symptoms: [
    'Loud snoring',
    'Gasping for air during sleep',
    'Morning headaches',
    'Excessive daytime sleepiness',
    'Difficulty concentrating',
    'Irritability',
    'High blood pressure'
  ],
  causes: [
    'Throat muscles relaxing too much',
    'Obesity (extra tissue blocking airways)',
    'Large neck circumference',
    'Narrowed airways',
    'Family history',
    'Age (more common in older adults)',
    'Male gender'
  ],
  diagnosis: [
    'Sleep study (polysomnography)',
    'Home sleep test',
    'Medical history and physical exam',
    'Assessment of daytime sleepiness'
  ],
  treatment: [
    'CPAP (continuous positive airway pressure) machine',
    'Weight loss',
    'Oral appliances',
    'Positional therapy',
    'Surgery (severe cases)',
    'Lifestyle changes'
  ],
  prevention: [
    'Maintain healthy weight',
    'Exercise regularly',
    'Avoid alcohol and sedatives',
    'Sleep on your side',
    'Quit smoking'
  ],
  simpleExplanation: {
    whatIs: 'Sleep apnea is when you stop breathing many times during sleep because your throat closes up, then you wake up gasping for air.',
    howYouGet: 'It usually happens when you are overweight, have a thick neck, or your throat muscles are too relaxed during sleep.',
    howToFeel: 'You will snore loudly, feel very tired during the day even after sleeping, and may wake up with headaches.',
    howToGetBetter: 'Doctors often prescribe a CPAP machine that keeps your airways open while you sleep. Losing weight also helps a lot.'
  },
  severity: 'severe',
  commonness: 'common'
},

{
  id: 'pulmonary-embolism',
  name: 'Pulmonary Embolism (PE)',
  category: 'Respiratory',
  bodySystem: 'respiratory',
  summary: 'A life-threatening condition where a blood clot blocks an artery in the lungs, preventing blood flow and oxygen exchange.',
  symptoms: [
    'Sudden shortness of breath',
    'Sharp chest pain (worse with breathing)',
    'Coughing up blood',
    'Rapid heart rate',
    'Dizziness or fainting',
    'Leg pain or swelling',
    'Excessive sweating'
  ],
  causes: [
    'Blood clot from deep vein thrombosis (DVT)',
    'Prolonged immobility',
    'Surgery or trauma',
    'Cancer',
    'Pregnancy',
    'Birth control pills',
    'Inherited clotting disorders'
  ],
  diagnosis: [
    'CT pulmonary angiogram (CTPA)',
    'D-dimer blood test',
    'Chest X-ray',
    'Echocardiogram',
    'Arterial blood gas test',
    'Ultrasound of legs'
  ],
  treatment: [
    'Anticoagulant medications (blood thinners)',
    'Thrombolytic therapy (clot-busting drugs)',
    'Embolectomy (surgical clot removal)',
    'Vena cava filter',
    'Oxygen therapy',
    'Hospitalization for monitoring'
  ],
  prevention: [
    'Move regularly during long trips',
    'Exercise regularly',
    'Wear compression stockings',
    'Stay hydrated',
    'Take prescribed blood thinners if at risk'
  ],
  simpleExplanation: {
    whatIs: 'A pulmonary embolism is when a blood clot travels to your lungs and blocks blood flow, like a cork stuck in a bottle.',
    howYouGet: 'It usually starts as a clot in your leg that breaks off and travels through your blood to your lungs.',
    howToFeel: 'You will suddenly have trouble breathing, sharp chest pain, and may cough up blood. It can be life-threatening.',
    howToGetBetter: 'This is a medical emergency requiring immediate hospital treatment with blood-thinning medicines or procedures to remove the clot.'
  },
  severity: 'severe',
  commonness: 'uncommon'
},

{
  id: 'lung-cancer',
  name: 'Lung Cancer',
  category: 'Respiratory',
  bodySystem: 'respiratory',
  summary: 'A type of cancer that begins in the lungs, most commonly caused by smoking, and can spread to other parts of the body.',
  symptoms: [
    'Persistent cough that worsens',
    'Coughing up blood',
    'Chest pain',
    'Shortness of breath',
    'Hoarseness',
    'Unexplained weight loss',
    'Bone pain',
    'Fatigue'
  ],
  causes: [
    'Smoking (leading cause)',
    'Secondhand smoke exposure',
    'Radon gas exposure',
    'Asbestos exposure',
    'Air pollution',
    'Family history',
    'Previous radiation therapy'
  ],
  diagnosis: [
    'Chest X-ray',
    'CT scan of chest',
    'Sputum cytology',
    'Tissue biopsy',
    'PET scan',
    'Molecular testing of tumor'
  ],
  treatment: [
    'Surgery (if early stage)',
    'Chemotherapy',
    'Radiation therapy',
    'Targeted therapy',
    'Immunotherapy',
    'Palliative care'
  ],
  prevention: [
    'Do not smoke or quit if you smoke',
    'Avoid secondhand smoke',
    'Test home for radon',
    'Avoid carcinogens at work',
    'Eat healthy diet with fruits and vegetables'
  ],
  simpleExplanation: {
    whatIs: 'Lung cancer is when cells in your lungs grow out of control and form tumors that can spread to other parts of your body.',
    howYouGet: 'Smoking is the main cause, but you can also get it from breathing in other harmful things like radon gas or asbestos.',
    howToFeel: 'You may have a cough that will not go away, cough up blood, lose weight without trying, and feel very tired.',
    howToGetBetter: 'Treatment depends on the type and stage, and may include surgery, chemotherapy, or radiation. Quitting smoking improves outcomes.'
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
  summary: 'A chronic condition where the body becomes resistant to insulin or doesn’t make enough, leading to high blood sugar levels.',
  symptoms: [
    'Increased thirst and urination',
    'Fatigue',
    'Blurred vision',
    'Slow-healing sores',
    'Frequent infections',
    'Numbness or tingling in hands/feet',
    'Unintended weight loss (less common)'
  ],
  causes: [
    'Insulin resistance',
    'Obesity',
    'Sedentary lifestyle',
    'Unhealthy diet',
    'Genetics and family history',
    'Older age',
    'History of gestational diabetes'
  ],
  diagnosis: [
    'Fasting blood glucose test',
    'A1C test',
    'Oral glucose tolerance test',
    'Random plasma glucose test'
  ],
  treatment: [
    'Lifestyle modifications (diet, exercise)',
    'Oral medications (metformin, sulfonylureas)',
    'Injectable medications (GLP-1 agonists, insulin if needed)',
    'Weight management',
    'Regular blood sugar monitoring'
  ],
  prevention: [
    'Maintain healthy weight',
    'Exercise regularly',
    'Eat a balanced, low-sugar diet',
    'Avoid smoking and excessive alcohol',
    'Regular blood sugar checks if at risk'
  ],
  simpleExplanation: {
    whatIs: 'In type 2 diabetes, your body doesn’t use insulin properly. Insulin is the “key” that lets sugar from food into your cells. Without it working well, sugar builds up in your blood.',
    howYouGet: 'It usually happens slowly from being overweight, not active enough, or having a family history of diabetes.',
    howToFeel: 'You may feel thirsty all the time, pee a lot, feel tired, and get sick more often. Cuts may take longer to heal.',
    howToGetBetter: 'Doctors help with healthy eating, exercise, and medicines to lower blood sugar. Sometimes insulin is needed if pills don’t work well enough.'
  },
  severity: 'moderate',
  commonness: 'very-common'
},

{
  id: 'hypothyroidism',
  name: 'Hypothyroidism',
  category: 'Metabolic Disorders',
  bodySystem: 'endocrine',
  summary: 'A condition where the thyroid gland doesn\'t produce enough thyroid hormones, slowing down the body\'s metabolism.',
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
    'Hashimoto\'s disease (autoimmune)',
    'Thyroid surgery',
    'Radiation treatment',
    'Medications',
    'Iodine deficiency',
    'Congenital thyroid problems',
    'Pituitary disorders'
  ],
  diagnosis: [
    'TSH (thyroid-stimulating hormone) blood test',
    'Free T4 blood test',
    'Thyroid antibody tests',
    'Physical examination',
    'Medical history review'
  ],
  treatment: [
    'Thyroid hormone replacement therapy (levothyroxine)',
    'Regular monitoring and dose adjustment',
    'Lifelong medication in most cases'
  ],
  prevention: [
    'Ensure adequate iodine intake',
    'Regular thyroid screening if at risk',
    'No specific prevention for autoimmune causes'
  ],
  simpleExplanation: {
    whatIs: 'Your thyroid is like your body\'s gas pedal - it controls how fast your body works. In hypothyroidism, it doesn\'t make enough hormone, so everything slows down.',
    howYouGet: 'Sometimes your immune system attacks your thyroid by mistake, or it gets damaged by surgery or radiation. Some people are born with thyroid problems.',
    howToFeel: 'You\'ll feel very tired, gain weight easily, feel cold all the time, and everything seems to move slower - even your thinking.',
    howToGetBetter: 'Doctors give you thyroid hormone pills to replace what your thyroid can\'t make. You\'ll probably need to take them for life, but they work very well.'
  },
  severity: 'moderate',
  commonness: 'common'
},

{
  id: 'hyperthyroidism',
  name: 'Hyperthyroidism',
  category: 'Metabolic Disorders',
  bodySystem: 'endocrine',
  summary: 'A condition where the thyroid gland produces too much thyroid hormone, speeding up the body\'s metabolism.',
  symptoms: [
    'Rapid heartbeat',
    'Unintentional weight loss',
    'Increased appetite',
    'Nervousness and anxiety',
    'Trembling hands',
    'Heat intolerance and sweating',
    'Changes in bowel patterns',
    'Fatigue',
    'Difficulty sleeping',
    'Bulging eyes (in Graves\' disease)'
  ],
  causes: [
    'Graves\' disease (autoimmune)',
    'Toxic multinodular goiter',
    'Toxic adenoma',
    'Thyroiditis (inflammation)',
    'Too much iodine',
    'Too much thyroid medication'
  ],
  diagnosis: [
    'TSH blood test (will be low)',
    'Free T3 and T4 blood tests',
    'Thyroid antibody tests',
    'Radioactive iodine uptake test',
    'Thyroid ultrasound'
  ],
  treatment: [
    'Anti-thyroid medications',
    'Radioactive iodine therapy',
    'Thyroid surgery',
    'Beta-blockers for symptoms',
    'Eye treatment (for Graves\' disease)'
  ],
  prevention: [
    'No specific prevention',
    'Avoid excessive iodine intake',
    'Manage stress',
    'Don\'t smoke (worsens eye problems)'
  ],
  simpleExplanation: {
    whatIs: 'Hyperthyroidism is when your thyroid gland is like a car with the gas pedal stuck down - it makes too much hormone and speeds everything up.',
    howYouGet: 'Usually your immune system makes your thyroid work too hard, or you have lumps in your thyroid that produce extra hormone.',
    howToFeel: 'Your heart races, you lose weight even though you eat more, feel hot and sweaty, anxious, and your hands might shake.',
    howToGetBetter: 'Doctors can give medicine to slow down your thyroid, use radioactive treatment to shrink it, or sometimes remove part of it with surgery.'
  },
  severity: 'moderate',
  commonness: 'uncommon'
},

{
  id: 'obesity',
  name: 'Obesity',
  category: 'Metabolic Disorders',
  bodySystem: 'endocrine',
  summary: 'A complex disorder involving excessive body fat that increases the risk of health problems like heart disease, diabetes, and high blood pressure.',
  symptoms: [
    'Excess body weight',
    'Difficulty with physical activity',
    'Shortness of breath',
    'Increased sweating',
    'Snoring or sleep apnea',
    'Joint and back pain',
    'Feeling tired easily',
    'Depression or low self-esteem'
  ],
  causes: [
    'Consuming more calories than burned',
    'Genetics and family history',
    'Sedentary lifestyle',
    'Poor diet (high-calorie, processed foods)',
    'Medical conditions (hypothyroidism, PCOS)',
    'Medications (antidepressants, steroids)',
    'Psychological factors',
    'Socioeconomic factors'
  ],
  diagnosis: [
    'Body Mass Index (BMI) calculation',
    'Waist circumference measurement',
    'Medical history and physical exam',
    'Blood tests (diabetes, cholesterol, thyroid)',
    'Assessment of related health conditions'
  ],
  treatment: [
    'Dietary changes and calorie reduction',
    'Increased physical activity',
    'Behavioral therapy and counseling',
    'Weight-loss medications (if appropriate)',
    'Bariatric surgery (severe cases)',
    'Long-term lifestyle modification'
  ],
  prevention: [
    'Eat a balanced, portion-controlled diet',
    'Exercise regularly',
    'Limit processed and high-calorie foods',
    'Monitor weight regularly',
    'Get adequate sleep',
    'Manage stress'
  ],
  simpleExplanation: {
    whatIs: 'Obesity is when your body stores too much fat, which can make it harder for your body to work properly and stay healthy.',
    howYouGet: 'It happens when you eat more calories than your body burns over a long time. Your genes, lifestyle, and environment all play a role.',
    howToFeel: 'You might feel tired easily, have trouble moving around, and be at higher risk for other health problems like diabetes or heart disease.',
    howToGetBetter: 'The key is eating healthier foods in smaller portions and being more active. Sometimes doctors can help with medicines or surgery for severe cases.'
  },
  severity: 'moderate',
  commonness: 'very-common'
}

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
  summary: 'A common disorder affecting the large intestine, causing abdominal pain, cramping, bloating, and changes in bowel habits.',
  symptoms: [
    'Abdominal pain or cramping',
    'Bloating and gas',
    'Diarrhea, constipation, or both',
    'Mucus in stool',
    'Changes in bowel movement frequency',
    'Relief of pain after a bowel movement'
  ],
  causes: [
    'Exact cause unknown',
    'Abnormal gut muscle contractions',
    'Increased sensitivity in intestines',
    'Gut-brain interaction problems',
    'Stress or anxiety',
    'Certain foods (dairy, caffeine, fatty foods)',
    'Hormonal changes (worse during menstruation)'
  ],
  diagnosis: [
    'Medical history and symptom review',
    'Physical exam',
    'Blood tests (to rule out other conditions)',
    'Stool tests',
    'Colonoscopy (if needed)'
  ],
  treatment: [
    'Dietary changes (low FODMAP diet)',
    'Fiber supplements',
    'Antidiarrheal medications',
    'Laxatives for constipation',
    'Antispasmodic medications',
    'Stress management and therapy'
  ],
  prevention: [
    'Identify and avoid trigger foods',
    'Eat smaller, regular meals',
    'Manage stress',
    'Stay physically active',
    'Get adequate sleep'
  ],
  simpleExplanation: {
    whatIs: 'IBS is when your stomach and intestines get “out of sync,” causing tummy pain, gas, and changes in bathroom habits.',
    howYouGet: 'Doctors aren’t sure exactly, but it’s linked to stress, sensitive guts, and certain foods. It’s not caused by infection or cancer.',
    howToFeel: 'You may have stomach aches, diarrhea, constipation, or feel bloated like a balloon.',
    howToGetBetter: 'Doctors suggest diet changes, stress control, and sometimes medicine to calm your intestines so they behave better.'
  },
  severity: 'mild',
  commonness: 'very-common'
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
  summary: 'A neurological disorder characterized by recurrent headaches that are moderate to severe, often with nausea and sensitivity to light or sound.',
  symptoms: [
    'Intense, throbbing headache (often one side of head)',
    'Nausea and vomiting',
    'Sensitivity to light, sound, or smells',
    'Visual disturbances (aura)',
    'Tingling in arms or face',
    'Difficulty speaking',
    'Fatigue after headache'
  ],
  causes: [
    'Genetics and family history',
    'Abnormal brain activity affecting nerve signals',
    'Hormonal changes',
    'Stress',
    'Certain foods (chocolate, cheese, caffeine)',
    'Sleep disturbances',
    'Environmental triggers (bright lights, strong smells)'
  ],
  diagnosis: [
    'Medical history and symptom review',
    'Neurological exam',
    'MRI or CT scan (to rule out other causes)',
    'Headache diary tracking triggers and frequency'
  ],
  treatment: [
    'Pain relievers (NSAIDs, triptans)',
    'Anti-nausea medications',
    'Preventive medications (beta-blockers, anticonvulsants)',
    'Lifestyle changes (stress management, sleep hygiene)',
    'Avoiding known triggers'
  ],
  prevention: [
    'Identify and avoid triggers',
    'Maintain regular sleep schedule',
    'Eat regular, balanced meals',
    'Stay hydrated',
    'Exercise regularly',
    'Stress reduction techniques'
  ],
  simpleExplanation: {
    whatIs: 'Migraines are super strong headaches that feel like pounding or throbbing, often making you sick and sensitive to light and sound.',
    howYouGet: 'They run in families and can be triggered by stress, certain foods, or changes in hormones or sleep.',
    howToFeel: 'Your head will hurt a lot, sometimes only on one side, and you may feel nauseous or see flashing lights.',
    howToGetBetter: 'Doctors give medicine to stop the pain and sometimes medicine to prevent future attacks. Avoiding triggers also helps.'
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
  name: 'Rheumatoid Arthritis (RA)',
  category: 'Musculoskeletal',
  bodySystem: 'musculoskeletal',
  summary: 'An autoimmune disorder where the immune system attacks the joints, causing inflammation, pain, and eventual joint damage.',
  symptoms: [
    'Tender, warm, swollen joints',
    'Joint stiffness (worse in morning)',
    'Fatigue',
    'Fever',
    'Loss of appetite',
    'Joint deformities in advanced stages'
  ],
  causes: [
    'Autoimmune reaction',
    'Genetic predisposition',
    'Hormonal factors',
    'Smoking (risk factor)',
    'Environmental triggers (infections)'
  ],
  diagnosis: [
    'Physical exam of joints',
    'Blood tests (rheumatoid factor, anti-CCP antibodies)',
    'Erythrocyte sedimentation rate (ESR)',
    'C-reactive protein (CRP)',
    'X-rays or MRI of joints'
  ],
  treatment: [
    'Disease-modifying antirheumatic drugs (DMARDs)',
    'Biologic agents',
    'NSAIDs for pain',
    'Steroids',
    'Physical therapy',
    'Surgery for severe joint damage'
  ],
  prevention: [
    'No known prevention (autoimmune)',
    'Stop smoking',
    'Maintain healthy weight',
    'Early diagnosis and treatment to prevent damage'
  ],
  simpleExplanation: {
    whatIs: 'RA is when your body’s defense system attacks your joints by mistake, making them swollen, stiff, and painful.',
    howYouGet: 'Doctors don’t know exactly why, but it’s linked to genetics, smoking, and immune system problems.',
    howToFeel: 'Your joints will ache, feel stiff, and swell, especially in the morning. Over time, they may even change shape.',
    howToGetBetter: 'Doctors use strong medicines to calm your immune system, reduce swelling, and protect your joints.'
  },
  severity: 'severe',
  commonness: 'uncommon'
},

  // =============================================================================
  // MENTAL HEALTH CONDITIONS
  // =============================================================================
{
  id: 'depression-major',
  name: 'Major Depressive Disorder (Depression)',
  category: 'Mental Health',
  bodySystem: 'nervous',
  summary: 'A serious mood disorder that causes persistent feelings of sadness, loss of interest, and difficulty with daily functioning.',
  symptoms: [
    'Persistent sadness or low mood',
    'Loss of interest in hobbies or activities',
    'Changes in appetite and weight',
    'Sleep problems (insomnia or oversleeping)',
    'Fatigue and low energy',
    'Feelings of worthlessness or guilt',
    'Difficulty concentrating',
    'Thoughts of death or suicide'
  ],
  causes: [
    'Imbalance of brain chemicals',
    'Genetics and family history',
    'Trauma or stressful life events',
    'Chronic illness or pain',
    'Substance abuse',
    'Hormonal changes'
  ],
  diagnosis: [
    'Psychiatric evaluation',
    'Patient interview and history',
    'Standardized depression screening tools (PHQ-9)',
    'Rule out medical causes with blood tests',
    'Symptom duration (2+ weeks)'
  ],
  treatment: [
    'Antidepressant medications (SSRIs, SNRIs, etc.)',
    'Psychotherapy (CBT, interpersonal therapy)',
    'Lifestyle changes (exercise, sleep, nutrition)',
    'Support groups',
    'Severe cases: hospitalization or ECT'
  ],
  prevention: [
    'Manage stress effectively',
    'Stay physically active',
    'Maintain strong social connections',
    'Seek help early when symptoms start',
    'Avoid alcohol and drugs'
  ],
  simpleExplanation: {
    whatIs: 'Depression is when your brain’s “happiness switch” doesn’t work properly, leaving you stuck in sadness and low energy.',
    howYouGet: 'It can come from brain chemistry, tough life events, or sometimes run in families. Anyone can get it.',
    howToFeel: 'You’ll feel sad most of the time, lose interest in things you once enjoyed, and may struggle to eat, sleep, or focus.',
    howToGetBetter: 'Doctors help with medicines and therapy to lift your mood. Talking to loved ones, exercising, and staying connected can also make a big difference.'
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
