import type { Disease, BodySystem } from "../types/Disease"

export const bodySystems: BodySystem[] = [
  {
    id: "cardiovascular",
    name: "Cardiovascular System",
    description:
      "Your heart and blood vessels work together like a delivery system, pumping blood with oxygen and nutrients to every part of your body.",
    icon: "Heart",
    diseases: ["stroke"],
  },
  {
    id: "nervous",
    name: "Nervous System",
    description:
      "Your brain, spinal cord, and nerves act as your body's command center, controlling everything you think, feel, and do.",
    icon: "Brain",
    diseases: ["depression"],
  },
  {
    id: "digestive",
    name: "Digestive System",
    description:
      "Your stomach, intestines, and other organs break down food into nutrients your body can use for energy and growth.",
    icon: "Apple",
    diseases: ["gastritis"],
  },
  {
    id: "respiratory",
    name: "Respiratory System",
    description: "Your lungs and airways bring fresh oxygen into your body and remove waste gases like carbon dioxide.",
    icon: "Lung",
    diseases: ["common-cold"],
  },
  {
    id: "musculoskeletal",
    name: "Musculoskeletal System",
    description:
      "Your bones, muscles, and joints work together to give your body structure, support, and the ability to move.",
    icon: "Bone",
    diseases: ["arthritis"],
  },
  {
    id: "endocrine",
    name: "Endocrine System",
    description:
      "Your glands produce hormones that act like chemical messengers, controlling growth, metabolism, and many body functions.",
    icon: "Zap",
    diseases: ["diabetes-type-1"],
  },
  {
    id: "immune",
    name: "Immune System",
    description:
      "Your body's defense system that protects you from germs, viruses, and other harmful substances that could make you sick.",
    icon: "Shield",
    diseases: ["hiv/aids"],
  },
  {
    id: "integumentary",
    name: "Integumentary System",
    description:
      "Your skin, hair, and nails form a protective barrier that keeps harmful things out and helps regulate your body temperature.",
    icon: "Sun",
    diseases: ["skin-cancer"],
  },
  {
    id: "urinary",
    name: "Urinary System",
    description: "Your kidneys and bladder filter waste from your blood and remove it from your body through urine.",
    icon: "Droplets",
    diseases: ["kidney-stones"],
  },
  {
    id: "reproductive",
    name: "Reproductive System",
    description: "The organs that allow humans to create new life and continue the human species.",
    icon: "Baby",
    diseases: ["pcos"],
  },
  {
    id: "lymphatic",
    name: "Lymphatic System",
    description:
      "A network of vessels and organs that helps your immune system fight infections and maintains fluid balance in your body.",
    icon: "Activity",
    diseases: ["lymphedema"],
  },
  {
    id: "sensory",
    name: "Sensory System",
    description:
      "Your eyes, ears, nose, tongue, and skin help you see, hear, smell, taste, and feel the world around you.",
    icon: "Eye",
    diseases: ["tinnitus"],
  },
]

export const diseases: Disease[] = [
  {
    id: "common-cold",
    name: "Common Cold",
    category: "Viral Infection",
    bodySystem: "respiratory",
    summary: "A mild viral infection of the nose and throat that usually resolves on its own within a week.",
    symptoms: [
      "Runny or stuffy nose",
      "Sneezing",
      "Sore throat",
      "Mild cough",
      "Low-grade fever",
      "Body aches",
      "Fatigue",
    ],
    causes: [
      "Rhinoviruses (most common)",
      "Coronaviruses",
      "Respiratory syncytial virus (RSV)",
      "Parainfluenza viruses",
      "Close contact with infected person",
      "Touching contaminated surfaces",
    ],
    diagnosis: [
      "Usually diagnosed based on symptoms",
      "Physical examination",
      "No specific tests needed for typical cases",
      "Throat swab if bacterial infection suspected",
    ],
    treatment: [
      "Rest and plenty of fluids",
      "Over-the-counter pain relievers",
      "Throat lozenges or warm salt water gargles",
      "Humidifier or steam inhalation",
      "Decongestants for nasal congestion",
      "Antibiotics are not effective (viral infection)",
    ],
    prevention: [
      "Wash hands frequently",
      "Avoid touching face with unwashed hands",
      "Stay away from sick people",
      "Don't share personal items",
      "Maintain good overall health",
      "Get adequate sleep",
    ],
    simpleExplanation: {
      whatIs:
        "A cold is when tiny germs called viruses get into your nose and throat, making you feel sick for a few days.",
      howYouGet:
        "You can catch a cold when someone who is sick coughs or sneezes near you, or when you touch something they touched and then touch your face.",
      howToFeel:
        "You might have a runny nose, sneeze a lot, have a scratchy throat, and feel tired. It's like your body is fighting off the bad germs.",
      howToGetBetter:
        "Rest in bed, drink lots of water, and your body will fight off the germs in about a week. Medicine can help you feel better while you heal.",
    },
    severity: "mild",
    commonness: "very-common",
  },
  {
    id: "depression",
    name: "Depression",
    category: "Mental Health Disorder",
    bodySystem: "nervous",
    summary: "A mood disorder that causes persistent feelings of sadness and loss of interest in activities.",
    symptoms: [
      "Persistent sad or empty mood",
      "Loss of interest in activities",
      "Fatigue and decreased energy",
      "Difficulty concentrating",
      "Changes in appetite or weight",
      "Sleep problems",
      "Feelings of worthlessness or guilt",
    ],
    causes: [
      "Chemical imbalances in brain",
      "Genetics and family history",
      "Traumatic life events",
      "Chronic stress",
      "Medical conditions",
      "Certain medications",
      "Substance abuse",
    ],
    diagnosis: [
      "Mental health evaluation",
      "Physical examination",
      "Blood tests to rule out medical causes",
      "Psychological questionnaires",
      "DSM-5 criteria assessment",
      "Medical history review",
    ],
    treatment: [
      "Psychotherapy (talk therapy)",
      "Antidepressant medications",
      "Combination therapy",
      "Lifestyle changes",
      "Support groups",
      "Electroconvulsive therapy (severe cases)",
    ],
    prevention: [
      "Maintain social connections",
      "Exercise regularly",
      "Get adequate sleep",
      "Manage stress effectively",
      "Avoid alcohol and drugs",
      "Seek help early for symptoms",
    ],
    simpleExplanation: {
      whatIs:
        "Depression is when you feel very sad, hopeless, and lose interest in things you used to enjoy for a long time.",
      howYouGet:
        "It can be caused by changes in brain chemicals, stressful events, genetics, or sometimes it just happens without a clear reason.",
      howToFeel:
        "You'll feel sad most of the time, very tired, have trouble concentrating, and might not want to do things you usually like.",
      howToGetBetter:
        "Talk to a counselor or therapist, sometimes take medicine that helps balance brain chemicals, exercise, and get support from family and friends.",
    },
    severity: "moderate",
    commonness: "common",
  },
  {
    id: "stroke",
    name: "Stroke",
    category: "Cardiovascular Emergency",
    bodySystem: "cardiovascular",
    summary: "A medical emergency that occurs when blood flow to part of the brain is interrupted or reduced.",
    symptoms: [
      "Sudden numbness or weakness",
      "Confusion or trouble speaking",
      "Vision problems",
      "Severe headache",
      "Trouble walking or dizziness",
      "Loss of balance or coordination",
      "Facial drooping",
    ],
    causes: [
      "Blood clot blocking artery (ischemic)",
      "Bleeding in brain (hemorrhagic)",
      "High blood pressure",
      "Atrial fibrillation",
      "Diabetes",
      "High cholesterol",
      "Smoking",
    ],
    diagnosis: [
      "CT scan or MRI",
      "Blood tests",
      "Carotid ultrasound",
      "Echocardiogram",
      "Angiography",
      "Physical and neurological exam",
    ],
    treatment: [
      "Emergency clot-busting drugs",
      "Mechanical clot removal",
      "Surgery (for hemorrhagic stroke)",
      "Rehabilitation therapy",
      "Medications to prevent recurrence",
      "Supportive care",
    ],
    prevention: [
      "Control blood pressure",
      "Don't smoke",
      "Exercise regularly",
      "Eat healthy diet",
      "Limit alcohol",
      "Manage diabetes and cholesterol",
    ],
    simpleExplanation: {
      whatIs:
        "A stroke is when part of your brain doesn't get enough blood, either because a blood vessel is blocked or bleeding.",
      howYouGet:
        "It can happen from blood clots, high blood pressure, or when blood vessels in the brain burst or get blocked.",
      howToFeel:
        "You might suddenly feel weak on one side, have trouble talking, see double, or have a terrible headache.",
      howToGetBetter:
        "Get to the hospital immediately for emergency treatment, then do rehabilitation therapy to relearn skills and take medicines to prevent another stroke.",
    },
    severity: "severe",
    commonness: "common",
  },
  {
    id: "diabetes-type-1",
    name: "Type 1 Diabetes",
    category: "Autoimmune Disorder",
    bodySystem: "endocrine",
    summary:
      "An autoimmune condition where the body attacks insulin-producing cells, requiring lifelong insulin therapy.",
    symptoms: [
      "Excessive thirst and urination",
      "Extreme hunger",
      "Unexplained weight loss",
      "Fatigue and weakness",
      "Blurred vision",
      "Irritability and mood changes",
      "Fruity-smelling breath",
    ],
    causes: [
      "Autoimmune destruction of beta cells",
      "Genetic predisposition",
      "Environmental triggers",
      "Viral infections",
      "Unknown factors",
      "Family history",
      "Age (often diagnosed in childhood)",
    ],
    diagnosis: [
      "Blood glucose tests",
      "Hemoglobin A1C test",
      "Autoantibody tests",
      "C-peptide test",
      "Ketone testing",
      "Medical history and symptoms",
    ],
    treatment: [
      "Insulin therapy (lifelong)",
      "Blood glucose monitoring",
      "Carbohydrate counting",
      "Regular exercise",
      "Healthy diet",
      "Regular medical check-ups",
    ],
    prevention: [
      "No known prevention",
      "Early detection important",
      "Maintain healthy lifestyle",
      "Regular screening for at-risk individuals",
      "Manage other health conditions",
      "Stay up-to-date with medical care",
    ],
    simpleExplanation: {
      whatIs:
        "Type 1 diabetes is when your body's defense system destroys the cells that make insulin, so your body can't control blood sugar.",
      howYouGet:
        "It's an autoimmune disease that you're usually born with, and it often starts when you're a child or teenager.",
      howToFeel:
        "You'll be very thirsty, need to pee a lot, lose weight even though you're hungry, and feel very tired.",
      howToGetBetter:
        "You need to take insulin shots or use an insulin pump every day, check your blood sugar, eat healthy, and exercise regularly.",
    },
    severity: "severe",
    commonness: "uncommon",
  },
  {
    id: "tendinitis",
    name: "Tendinitis",
    category: "Musculoskeletal Disorder",
    bodySystem: "musculoskeletal",
    summary: "Inflammation of tendons, the thick cords that attach muscles to bones, causing pain and tenderness.",
    symptoms: [
      "Pain and tenderness near joints",
      "Stiffness",
      "Swelling",
      "Pain worsens with movement",
      "Weakness in affected area",
      "Crackling sensation when moving",
      "Reduced range of motion",
    ],
    causes: [
      "Repetitive motions",
      "Sudden injury",
      "Age-related wear",
      "Sports activities",
      "Poor posture",
      "Overuse of joints",
      "Certain medical conditions",
    ],
    diagnosis: ["Physical examination", "Medical history", "X-rays", "Ultrasound", "MRI scan", "Movement tests"],
    treatment: [
      "Rest and avoid aggravating activities",
      "Ice therapy",
      "Anti-inflammatory medications",
      "Physical therapy",
      "Stretching exercises",
      "Corticosteroid injections",
    ],
    prevention: [
      "Warm up before exercise",
      "Use proper technique in sports",
      "Take breaks during repetitive activities",
      "Strengthen muscles around joints",
      "Maintain good posture",
      "Gradually increase activity intensity",
    ],
    simpleExplanation: {
      whatIs:
        "Tendinitis is when the strong cords (tendons) that connect your muscles to your bones get swollen and painful.",
      howYouGet:
        "It happens from doing the same motion over and over, like throwing a ball, or from suddenly injuring a tendon.",
      howToFeel:
        "The area around your joint will hurt and feel tender, especially when you move it, and it might be swollen.",
      howToGetBetter:
        "Rest the sore area, put ice on it, take anti-inflammatory medicine, and do gentle stretches to help it heal.",
    },
    severity: "mild",
    commonness: "common",
  },
  {
    id: "skin-cancer",
    name: "Skin Cancer",
    category: "Cancer",
    bodySystem: "integumentary",
    summary: "Abnormal growth of skin cells, most commonly caused by UV radiation from sun exposure.",
    symptoms: [
      "New growths or moles",
      "Changes in existing moles",
      "Sores that don't heal",
      "Rough, scaly patches",
      "Asymmetrical or irregular borders",
      "Color changes in moles",
      "Bleeding or itching lesions",
    ],
    causes: [
      "UV radiation from sun",
      "Tanning beds",
      "Fair skin",
      "Family history",
      "Multiple moles",
      "Weakened immune system",
      "Previous skin cancer",
    ],
    diagnosis: [
      "Skin examination",
      "Dermoscopy",
      "Skin biopsy",
      "Imaging studies",
      "Lymph node examination",
      "Medical history",
    ],
    treatment: [
      "Surgical excision",
      "Mohs surgery",
      "Radiation therapy",
      "Chemotherapy",
      "Immunotherapy",
      "Targeted therapy",
    ],
    prevention: [
      "Use sunscreen (SPF 30+)",
      "Seek shade during peak hours",
      "Wear protective clothing",
      "Avoid tanning beds",
      "Regular skin self-exams",
      "Annual dermatologist visits",
    ],
    simpleExplanation: {
      whatIs:
        "Skin cancer is when skin cells grow abnormally and form tumors, usually because of too much sun exposure over time.",
      howYouGet:
        "It develops from UV rays from the sun or tanning beds that damage skin cells, especially if you have fair skin or burn easily.",
      howToFeel:
        "You might notice new spots, moles that change shape or color, sores that don't heal, or rough patches on your skin.",
      howToGetBetter:
        "See a dermatologist right away for suspicious spots. Treatment usually involves removing the cancer, and early detection is very important.",
    },
    severity: "severe",
    commonness: "common",
  },
  {
    id: "hiv/aids",
    name: "HIV/AIDS",
    category: "Immune Deficiency",
    bodySystem: "immune",
    summary: "A virus that attacks the immune system, potentially leading to AIDS if untreated.",
    symptoms: [
      "Flu-like symptoms (early stage)",
      "Persistent fatigue",
      "Swollen lymph nodes",
      "Recurring infections",
      "Unexplained weight loss",
      "Night sweats",
      "Skin rashes",
    ],
    causes: [
      "HIV virus transmission",
      "Unprotected sexual contact",
      "Sharing needles",
      "Mother-to-child transmission",
      "Contaminated blood transfusions",
      "Occupational exposure",
      "Organ transplantation",
    ],
    diagnosis: [
      "HIV antibody tests",
      "HIV antigen tests",
      "Viral load tests",
      "CD4 cell count",
      "Rapid HIV tests",
      "Home testing kits",
    ],
    treatment: [
      "Antiretroviral therapy (ART)",
      "Regular monitoring",
      "Treatment of opportunistic infections",
      "Preventive medications",
      "Lifestyle modifications",
      "Psychological support",
    ],
    prevention: [
      "Practice safe sex",
      "Don't share needles",
      "Get tested regularly",
      "Pre-exposure prophylaxis (PrEP)",
      "Post-exposure prophylaxis (PEP)",
      "Screen blood donations",
    ],
    simpleExplanation: {
      whatIs:
        "HIV is a virus that attacks your body's defense system, making it hard to fight off infections and diseases.",
      howYouGet:
        "It spreads through certain body fluids during unprotected sex, sharing needles, or from mother to baby during birth.",
      howToFeel:
        "At first you might feel like you have the flu, then feel fine for years, but without treatment, you'll get sick more often.",
      howToGetBetter:
        "Take HIV medicines every day as prescribed, which can keep you healthy and prevent spreading it to others. Early treatment is very important.",
    },
    severity: "severe",
    commonness: "uncommon",
  },
  {
    id: "tinnitus",
    name: "Tinnitus",
    category: "Hearing Disorder",
    bodySystem: "sensory",
    summary: "The perception of ringing, buzzing, or other sounds in the ears when no external sound is present.",
    symptoms: [
      "Ringing in ears",
      "Buzzing or humming sounds",
      "Clicking or hissing",
      "Sounds may be constant or intermittent",
      "May affect one or both ears",
      "Difficulty concentrating",
      "Sleep problems",
    ],
    causes: [
      "Hearing loss",
      "Loud noise exposure",
      "Ear infections",
      "Earwax buildup",
      "Certain medications",
      "Head or neck injuries",
      "Blood pressure problems",
    ],
    diagnosis: [
      "Hearing examination",
      "Medical history",
      "Physical examination of ears",
      "Audiometry tests",
      "Tinnitus matching",
      "Imaging studies (if needed)",
    ],
    treatment: [
      "Treat underlying conditions",
      "Hearing aids",
      "Sound therapy",
      "Tinnitus retraining therapy",
      "Counseling",
      "Relaxation techniques",
    ],
    prevention: [
      "Protect ears from loud noises",
      "Use ear protection",
      "Keep ears clean",
      "Manage stress",
      "Limit caffeine and alcohol",
      "Regular hearing check-ups",
    ],
    simpleExplanation: {
      whatIs:
        "Tinnitus is when you hear ringing, buzzing, or other sounds in your ears even when it's quiet around you.",
      howYouGet:
        "It can happen from loud noises, ear infections, earwax, some medicines, or sometimes just from getting older.",
      howToFeel:
        "You'll hear sounds that aren't really there, which can be annoying, make it hard to concentrate, or keep you awake at night.",
      howToGetBetter:
        "Treat any ear problems, use hearing aids if needed, try sound therapy or relaxation techniques, and protect your ears from loud noises.",
    },
    severity: "mild",
    commonness: "common",
  },
]
