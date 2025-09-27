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
    diseases: ["arthritis", "tendinitis"],
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
    diseases: ["melanoma"],
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
    category: "Viral Upper Respiratory Tract Infection",
    bodySystem: "respiratory",
    summary: "A very common and mild viral infection that affects the nose and throat. It is self-limiting, meaning it typically resolves on its own without specific treatment, usually within 7 to 10 days",
    symptoms: [
      "Runny or stuffy nose (congestion)",
      "Sore or scratchy throat",
      "Sneezing",
      "Cough",
      "Post-nasal drip (the feeling of mucus dripping down your throat)",
      "Watery eyes",
      "Mild headache or body aches",
      "Low-grade fever (more common in children)",
      "General feeling of being unwell (malaise)",
    ],
    causes: [
      "Rhinoviruses (the most frequent cause, responsible for 30-50% of colds)",
      "Seasonal Coronaviruses (Note: these are different from the virus that causes COVID-19)",
      "Respiratory syncytial virus (RSV)",
      "Parainfluenza viruses",
      "Adenoviruses",
      "Close contact with infected person",
      "Touching contaminated surfaces"
    ],
    diagnosis: [
      "Diagnosis is almost always based on the classic signs and symptoms.",
      "A doctor may perform a physical exam, looking at the nose, throat, and ears, and listening to the lungs.",
      "Lab tests are rarely needed but may be used to rule out other conditions like the flu, COVID-19, or strep throat if symptoms are severe or unusual.",
      "Throat swab if bacterial infection suspected"
    ],
    treatment: [
      "There is no cure for the common cold; treatment focuses on relieving symptoms while your body's immune system fights off the virus.",
      "Rest: Get plenty of sleep to help your body recover.",
      "Hydration: Drink lots of fluids like water, juice, or warm broth to prevent dehydration.",
      "Symptom Relief: Use over-the-counter medications like pain relievers (acetaminophen, ibuprofen), decongestants, or cough syrups as needed.",
      "Sore Throat Soothers: Gargle with warm salt water or use throat lozenges.",
      "Ease Congestion: Use a humidifier or saline nasal spray to help clear a stuffy nose.",
      "Important: Antibiotics are completely ineffective against viruses and should not be used to treat a common cold.",
    ],
    prevention: [
      "Frequent handwashing with soap and water is the single most effective preventive measure. 🧼",
      "Avoid touching your eyes, nose, and mouth with unwashed hands.",
      "Keep your distance from people who are actively sick.",
      "Cover your mouth and nose with a tissue or your elbow when you cough or sneeze.",
      "Clean and disinfect frequently touched surfaces.",
      "Support your immune system by getting enough sleep, eating a healthy diet, and staying active.",
    ],
    simpleExplanation: {
      whatIs:
        "A cold is when tiny, invisible germs called viruses have a little party in your nose and throat. It's not dangerous, but it can make you feel tired and yucky for about a week while your body works to kick them out.",
      howYouGet:
        "You can catch it if you're near a sick person when they cough or sneeze, sending tiny virus droplets into the air. You can also get it by touching something they touched (like a toy or phone) and then touching your own eyes, nose, or mouth.",
      howToFeel:
        "It often starts with a prickly throat. Soon, you might get a runny or stuffy nose, start sneezing a lot, and feel sleepy. This is your body telling you it's busy fighting off the virus germs! 🤺",
      howToGetBetter:
        "Your body is the hero and will fight off the cold on its own! To help your body win, you should rest a lot, drink plenty of water or juice, and eat healthy foods. Medicine from the store can't cure the cold, but it can help your stuffy nose or sore throat feel better while your body does all the hard work.",
    },
    severity: "mild",
    commonness: "very-common",
  },
   {
    id: "depression",
    name: "Depression",
    category: "Mental Health Disorder",
    bodySystem: "nervous",
    summary: "A serious medical illness that negatively affects how you feel, the way you think, and how you act. It's more than just feeling sad; it's a persistent mood disorder that causes a loss of interest in activities you once enjoyed and can lead to a variety of emotional and physical problems.",
    symptoms: [
      "Persistent sad, anxious, or 'empty' mood for most of the day, nearly every day.",
      "Loss of interest or pleasure in hobbies and activities (anhedonia).",
      "Significant changes in appetite or weight (either loss or gain).",
      "Changes in sleep patterns, such as insomnia (trouble sleeping) or hypersomnia (sleeping too much).",
      "Fatigue or a profound lack of energy.",
      "Feelings of worthlessness, excessive guilt, or hopelessness.",
      "Difficulty thinking, concentrating, or making decisions.",
      "Unexplained physical problems, such as headaches or back pain.",
      "Thoughts of death or suicide (If you are having these thoughts, please seek help immediately).",
    ],
    causes: [
      "Changes in the levels of brain chemicals called neurotransmitters (like serotonin and dopamine), which help regulate mood.",
      "Having a close family member with depression increases the risk, suggesting a genetic link.",
      "Stressful or traumatic life events, like the loss of a loved one, financial problems, or abuse.",
      "Chronic illness or pain can contribute to the development of depression.",
      "Major life changes, even positive ones like graduating or starting a new job.",      
    ],
    diagnosis: [
      "A thorough psychological evaluation by a mental health professional is the primary method.",
      "The professional will use the diagnostic criteria from the DSM-5 (Diagnostic and Statistical Manual of Mental Disorders).",
      "A physical exam and blood tests may be ordered to rule out other medical conditions that can mimic depression symptoms (e.g., thyroid problems).",
      "Discussion of your personal and family medical history.",
    ],
    treatment: [
      "Psychotherapy (Talk Therapy): Cognitive Behavioral Therapy (CBT) and Interpersonal Therapy (IPT) are highly effective in teaching new ways of thinking and coping.",
      "Medication: Antidepressants like SSRIs (Selective Serotonin Reuptake Inhibitors) can help rebalance brain chemistry. It may take several weeks to find the right one.",
      "Lifestyle Adjustments: Regular exercise, a balanced diet, and a consistent sleep schedule are proven to significantly help.",
      "Support Systems: Connecting with friends, family, or support groups can reduce feelings of isolation.",
      "Brain Stimulation Therapies: For severe, treatment-resistant cases, options like ECT (Electroconvulsive Therapy) may be considered.",
    ],
    prevention: [
      "Build Resilience: Learn healthy coping mechanisms and stress management techniques (like mindfulness or meditation). 🧘",
      "Stay Connected: Nurture strong relationships with friends and family to create a reliable support network.",
      "Seek Early Intervention: Talk to a professional at the first sign of symptoms, before they become severe.",
      "Maintain a Healthy Lifestyle: Regular physical activity and a nutritious diet support overall brain health.",
      "Limit Alcohol and Avoid Drugs: These substances can worsen depression symptoms and interfere with treatment.",
    ],
    simpleExplanation: {
      whatIs:
        "Depression is like when the 'sad' button in your brain gets stuck on. It's not just feeling down for a day or two; it's a long-lasting feeling of deep sadness and emptiness that makes it hard to enjoy anything, even things you used to love.",
      howYouGet:
        "It's not your fault. It can happen because the communication chemicals in the brain are a bit out of balance. It can also be triggered by very stressful life events, or it can run in families, like hair color.",
      howToFeel:
        "It can feel like you're carrying a very heavy weight all the time. You might feel exhausted but unable to sleep, or hungry but with no desire to eat. It can make it hard to focus, and you might feel lonely and believe that things will never get better.",
      howToGetBetter:
        "Getting better is a team effort. Talking to a therapist is like having a coach who can teach you skills to manage your thoughts and feelings. Sometimes, a doctor might prescribe medicine like SSRIs that promotes neuroplasticity, which is the brain's ability to change and form new connections. Taking care of your body by exercising and eating well is also a huge help. The most important step is reaching out and asking for help. ❤️",
    },
    severity: "moderate",
    commonness: "common",
  },
 {
    id: "tendinitis",
    name: "Tendinitis (Tendinopathy)",
    category: "Musculoskeletal Condition",
    bodySystem: "musculoskeletal",
    summary: "An overuse condition causing pain, swelling, and irritation in a tendon, which is the thick, flexible cord that attaches muscle to bone. While 'itis' means inflammation, modern understanding suggests it's often due to a series of tiny tears (microtears) in the tendon tissue which lead to the inflammation.",
    symptoms: [
      "A dull, aching pain that gets worse with movement, often centered around a joint.",
      "Tenderness to the touch over the affected tendon.",
      "Mild swelling, warmth, or redness in the area.",
      "Stiffness and reduced range of motion, especially in the morning.",
      "A crackling or grating sensation (crepitus) when moving the joint.",
      "Weakness in the affected limb or a lump that can be felt along the tendon.",
    ],
    causes: [
      "Repetitive motions from sports (like tennis elbow, golfer's elbow, pitcher's shoulder) or work (like typing or using tools). 🛠️",
      "A sudden increase in the amount or intensity of physical activity without proper conditioning.",
      "Sudden, acute injury or trauma to the tendon.",
      "Poor posture or body mechanics, which places extra stress on certain tendons.",
      "Aging, as tendons become less flexible and more prone to injury over time.",
      "Underlying medical conditions like rheumatoid arthritis or diabetes.",
    ],
    diagnosis: [
      "Physical Exam: A doctor will check for pain, swelling, and tenderness and assess your range of motion.",
      "Medical History: Discussing your symptoms, activity levels, and past injuries.",
      "Imaging Tests: While not always needed, they can rule out other issues.",
      "An ultrasound can show tendon thickening or tears in real time.",
      "An MRI provides a highly detailed image of the tendon and surrounding soft tissues.",],
    treatment: [
      "The RICE Method (Initial Care):",
      "Rest: Stop the activity that is causing the pain.",
      "Ice: Apply a cold pack for 15-20 minutes several times a day to reduce pain and swelling. 🧊",
      "Compression: Use an elastic bandage to wrap the area, which can help minimize swelling.",
      "Elevation: Keep the injured area raised above the level of your heart.",
      "Medication: Over-the-counter anti-inflammatory drugs (NSAIDs) like ibuprofen or naproxen can help manage pain.",
      "Physical Therapy: A therapist can guide you through specific exercises to strengthen the muscles and improve flexibility, which is key for long-term recovery.",
      "Medical Procedures: For persistent cases, a doctor might suggest corticosteroid injections to reduce inflammation or other treatments like platelet-rich plasma (PRP) therapy to promote healing.",
    ],
    prevention: [
      "Warm-up and Cool-down: Always perform gentle dynamic stretches before activity and static stretches after.",
      "Gradual Progression: Avoid doing too much, too soon. Increase the intensity and duration of exercise slowly.",
      "Use Proper Form: Whether at the gym or at work, ensure your technique is correct to avoid unnecessary strain.",
      "Cross-Train: Mix up your activities to avoid overworking the same set of tendons repeatedly.",
      "Ergonomics: Adjust your workspace to ensure it's set up to support good posture and reduce repetitive strain.",
    ],
    simpleExplanation: {
      whatIs:
        "Imagine the strong, rubber-band-like cords that connect your muscles to your bones—those are tendons. Tendinitis is when one of those 'rubber bands' gets irritated, frayed, and painful from being used too much or in the wrong way.",
      howYouGet:
        "It usually happens from doing the same motion over and over, like playing a sport, typing, or lifting. It can also happen if you suddenly start a new, intense activity your body isn't used to, or simply as tendons get older and less stretchy.",
      howToFeel:
        "It feels like a nagging ache right near a joint, like your elbow, shoulder, or heel. It hurts more when you move it, and the spot might feel sore if you press on it. Sometimes it can feel stiff and a bit swollen, too.",
      howToGetBetter:
        "The first step is to give it a break from whatever activity caused the pain. Using ice packs helps calm it down. Later, a physical therapist can show you special stretches and exercises to make the tendon strong and healthy again. Healing takes time, so patience is important! 💪",
    },
    severity: "moderate",
    commonness: "common",
  },
  {
    id: "stroke",
    name: "Stroke (Cerebrovascular Accident)",
    category: "Cardiovascular Emergency",
    bodySystem: "cardiovascular",
    summary: "A life-threatening medical emergency that happens when blood flow to part of the brain is interrupted, depriving brain cells of oxygen and nutrients. Without oxygen, brain cells begin to die within minutes, which can cause permanent damage or death if not treated immediately. There are two main types: ischemic (caused by a blockage) and hemorrhagic (caused by bleeding).",
    symptoms: [
      "Sudden numbness or weakness, especially on one side of the body (face, arm, or leg).",
      "Sudden confusion, trouble speaking, or difficulty understanding speech.",
      "Sudden vision problems in one or both eyes (blurred or loss of vision).",
      "Sudden severe headache with no known cause, often described as the 'worst headache of your life.'",
      "Sudden trouble walking, dizziness, or loss of balance and coordination.",
      "Facial drooping — one side of the face may appear uneven or droop when smiling.",
      "Difficulty swallowing or slurred speech.",
      "Loss of consciousness or altered awareness in severe cases.",
    ],
    causes: [
      "Ischemic Stroke (🧠🩸): The most common type, caused by a blood clot blocking an artery that supplies the brain.",
      "Hemorrhagic Stroke (🧠💧): Caused by a blood vessel bursting inside the brain, leading to bleeding and pressure buildup.",
      "Transient Ischemic Attack (TIA or ‘mini-stroke’): A temporary blockage that resolves on its own but is a warning sign of a major stroke.",
      "High blood pressure (the leading risk factor).",
      "Atrial fibrillation (irregular heartbeat that can cause blood clots).",
      "High cholesterol, which contributes to fatty plaque buildup in arteries.",
      "Diabetes, which damages blood vessels over time.",
      "Smoking, which thickens blood and narrows arteries.",
      "Obesity, physical inactivity, and excessive alcohol intake.",
      "Family history of stroke or heart disease.",
    ],
    diagnosis: [
      "Physical and Neurological Exam: A doctor checks for weakness, speech difficulty, facial drooping, and reflex changes.",
      "CT Scan (Computed Tomography): Quickly shows bleeding or blockage in the brain.",
      "MRI (Magnetic Resonance Imaging): Provides a detailed image to identify brain damage and affected areas.",
      "Blood Tests: To check for clotting problems, blood sugar levels, and cholesterol.",
      "Carotid Ultrasound: Looks for blockages or narrowing in the arteries of the neck.",
      "Echocardiogram: Checks for blood clots or abnormalities in the heart that could lead to stroke.",
      "Cerebral Angiography: Uses dye and X-rays to see blood flow in the brain.",
    ],
    treatment: [
      "Emergency Care (🏥 Immediate Action): Time is critical — ‘Time is Brain.’ Get emergency medical help right away.",
      "Ischemic Stroke Treatment: Clot-Busting Medication (tPA) given within 3–4.5 hours to dissolve the clot and restore blood flow and/or Mechanical Thrombectomy, a minimally invasive procedure to physically remove the clot from a brain artery.",
      "Hemorrhagic Stroke Treatment: Surgery to repair the ruptured blood vessel, remove pooled blood, or relieve pressure on the brain.",
      "Rehabilitation Therapy (after stabilization): Physical, occupational, and speech therapy to help regain movement, coordination, and communication skills.",
      "Medication Management: Blood thinners, cholesterol-lowering drugs, or medications to manage blood pressure and prevent future strokes.",
      "Lifestyle and Supportive Care: Long-term management includes diet, exercise, and regular check-ups.",
    ],
    prevention: [
      "Control Blood Pressure: Keep it within normal range through diet, medication, and monitoring.",
      "Manage Cholesterol: Eat heart-healthy foods and take prescribed medications.",
      "Don’t Smoke: Quitting smoking greatly lowers stroke risk.",
      "Exercise Regularly: Aim for at least 30 minutes most days of the week.",
      "Eat a Balanced Diet: Focus on fruits, vegetables, whole grains, and lean proteins.",
      "Limit Alcohol: Excessive drinking increases blood pressure and stroke risk.",
      "Manage Chronic Conditions: Keep diabetes and heart disease well controlled.",
      "Know the Warning Signs (FAST): Face drooping, Arm weakness, Speech difficulty, Time to call 911 ⏱️.",
    ],
    simpleExplanation: {
      whatIs:
        "A stroke is like a 'brain attack.' It happens when blood can’t reach a part of your brain — either because something’s blocking the flow (a clot) or because a blood vessel bursts and causes bleeding. Without blood, brain cells start to die.",
      howYouGet:
        "It usually happens from clogged or weak blood vessels in your brain. Things like high blood pressure, smoking, or high cholesterol can damage those vessels, making a stroke more likely. Sometimes it’s caused by an irregular heartbeat that sends a clot to the brain.",
      howToFeel:
        "It often comes on suddenly. You might feel your face droop on one side, your arm or leg become weak, or your words come out jumbled. You might also have trouble seeing, walking, or get a sudden, very bad headache. These are warning signs to call 911 right away.",
      howToGetBetter:
        "You need to get to the hospital immediately so doctors can restore blood flow or stop bleeding. The faster you’re treated, the better your chances of recovery. Afterward, you’ll do therapies (like physical and speech therapy) to relearn skills and take medicines to prevent another stroke. ⏳💊",
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
    "A chronic autoimmune condition where the body’s immune system mistakenly attacks and destroys the insulin-producing beta cells in the pancreas. Without insulin, the body can’t properly regulate blood sugar (glucose) levels, leading to dangerously high blood sugar. People with Type 1 diabetes must take insulin for life to survive.",
  symptoms: [
    "Frequent urination (especially at night) and excessive thirst (polydipsia).",
    "Extreme hunger, even after eating.",
    "Unexplained weight loss, despite normal or increased appetite.",
    "Constant fatigue, weakness, or low energy.",
    "Blurred vision caused by high blood sugar affecting the eyes.",
    "Irritability, mood changes, or difficulty concentrating.",
    "Fruity-smelling breath (from ketones in the blood).",
    "Nausea, vomiting, or abdominal pain (especially if diabetic ketoacidosis develops).",
    "Slow healing of cuts and frequent infections.",
  ],
  causes: [
    "Autoimmune Reaction: The immune system attacks and destroys insulin-producing beta cells in the pancreas.",
    "Genetic Factors: Certain genes increase the risk of developing Type 1 diabetes.",
    "Environmental Triggers: Possible triggers include viral infections or toxins that activate the immune response.",
    "Family History: Having a parent or sibling with Type 1 diabetes increases risk.",
    "Age: Most often diagnosed in children, teens, or young adults, though it can occur at any age.",
    "Unknown Factors: The exact cause is not fully understood.",
  ],
  diagnosis: [
    "Blood Glucose Tests: Measures blood sugar levels; a fasting glucose ≥126 mg/dL or random glucose ≥200 mg/dL may indicate diabetes.",
    "Hemoglobin A1C Test: Shows the average blood sugar level over the past 2–3 months; an A1C of 6.5% or higher suggests diabetes.",
    "Autoantibody Tests: Detect specific antibodies that signal an autoimmune attack on the pancreas.",
    "C-Peptide Test: Low levels indicate little or no insulin production.",
    "Ketone Testing: Checks for ketones in blood or urine, which can signal diabetic ketoacidosis (DKA).",
    "Medical History and Symptoms: A doctor will review symptoms like excessive thirst, urination, and weight loss.",
  ],
  treatment: [
    "Insulin Therapy 💉: Lifelong insulin replacement through injections or an insulin pump to control blood sugar.",
    "Blood Glucose Monitoring: Frequent checks using a glucometer or continuous glucose monitor (CGM) to keep blood sugar within target range.",
    "Carbohydrate Counting: Tracking carbs to adjust insulin doses accurately.",
    "Healthy, Balanced Diet: Focus on whole grains, lean proteins, fruits, and vegetables while managing carb intake.",
    "Regular Exercise: Helps improve insulin sensitivity and blood sugar control.",
    "Education and Support: Diabetes self-management education is key for long-term success.",
    "Regular Medical Check-ups: Ongoing care from a diabetes care team to monitor complications and adjust treatment.",
    "Emergency Awareness: Recognizing and treating hypoglycemia (low blood sugar) or hyperglycemia (high blood sugar) promptly.",
  ],
  prevention: [
    "Currently, there is no known way to prevent Type 1 diabetes.",
    "Early Detection: Monitoring at-risk individuals (with family history) may help catch symptoms early.",
    "Healthy Lifestyle: While it can’t prevent Type 1 diabetes, maintaining overall health supports better blood sugar control.",
    "Manage Other Conditions: Treating autoimmune diseases or infections promptly may reduce complications.",
    "Stay Up-to-Date with Care: Regular screenings for eye, kidney, and nerve health help prevent long-term complications.",
  ],
  simpleExplanation: {
    whatIs:
      "Type 1 diabetes is when your body’s defense system attacks the part of your pancreas that makes insulin — the hormone that helps control your blood sugar. Without insulin, sugar builds up in your blood instead of going into your cells for energy.",
    howYouGet:
      "You don’t get it from eating sugar or being unhealthy. It happens because of your genes and your immune system. It often starts in kids or teens, but adults can get it too.",
    howToFeel:
      "You’ll feel very thirsty, need to pee a lot, and might lose weight even though you’re hungry. You may feel weak, tired, and your breath could smell fruity. If it gets really bad, you can feel sick and need emergency care.",
    howToGetBetter:
      "Since your body can’t make insulin anymore, you’ll need to take insulin every day — either with shots or a pump. You’ll check your blood sugar, eat healthy foods, and exercise. With good care, you can live a full, healthy life! 💉🍎🏃‍♂️",
  },
  severity: "severe",
  commonness: "uncommon",
},
{
  id: "melanoma",
  name: "Melanoma",
  category: "Cancer",
  bodySystem: "integumentary",
  summary:
    "The most serious type of skin cancer, melanoma begins in melanocytes — the cells that produce melanin, the pigment that gives skin its color. It can develop in existing moles or appear as a new dark spot on the skin. Melanoma grows quickly and can spread (metastasize) to other parts of the body if not detected early, but when caught early, it’s highly treatable.",
  symptoms: [
    "A new mole or dark spot that looks unusual or changes over time.",
    "An existing mole that changes in size, shape, or color.",
    "Asymmetrical moles — one half looks different from the other.",
    "Irregular, blurry, or uneven borders.",
    "Multiple or uneven colors (brown, black, red, white, or blue) within the same spot.",
    "A mole larger than 6 mm (about the size of a pencil eraser).",
    "Itching, tenderness, or pain in a mole or spot.",
    "Bleeding, oozing, or crusting lesions.",
    "Dark streaks under nails or spots on palms or soles.",
  ],
  causes: [
    "Ultraviolet (UV) radiation from sunlight ☀️.",
    "Tanning bed use (artificial UV exposure).",
    "Fair skin, light hair, and light eyes (less natural protection from UV rays).",
    "History of frequent or severe sunburns, especially in childhood.",
    "Having many moles or atypical (irregular) moles.",
    "Family history of melanoma.",
    "Weakened immune system.",
    "Genetic mutations in certain genes (like BRAF or CDKN2A).",
  ],
  diagnosis: [
    "Skin Examination: A dermatologist checks for suspicious moles or spots using the ABCDE rule (Asymmetry, Border, Color, Diameter, Evolving).",
    "Dermoscopy: A magnified lighted tool that helps visualize deeper skin layers.",
    "Skin Biopsy: A small sample is taken from the lesion and examined under a microscope to confirm melanoma.",
    "Lymph Node Biopsy: Checks if cancer has spread to nearby lymph nodes.",
    "Imaging Tests: CT, MRI, or PET scans may be used for advanced cases to see if it has spread.",
    "Staging: Determines how deep the melanoma is and whether it has spread, which guides treatment.",
  ],
  treatment: [
    "Surgical Excision ✂️: The main treatment — removing the melanoma and some surrounding healthy tissue.",
    "Sentinel Lymph Node Biopsy: Done for deeper melanomas to check if cancer has spread.",
    "Immunotherapy: Boosts the body’s immune system to attack cancer cells (often used in advanced melanoma).",
    "Targeted Therapy: Medications that target specific genetic changes (like BRAF mutations).",
    "Radiation Therapy: Used to destroy remaining cancer cells or treat areas where melanoma has spread.",
    "Chemotherapy: Less common now, but may be used for widespread melanoma.",
    "Ongoing Follow-up: Regular skin checks and imaging for recurrence.",
  ],
  prevention: [
    "Use Broad-Spectrum Sunscreen 🧴: SPF 30 or higher every day, reapply every 2 hours.",
    "Avoid Peak Sun: Stay out of direct sunlight between 10 a.m. and 4 p.m.",
    "Wear Protective Gear: Hats, sunglasses, and long sleeves when outdoors.",
    "Skip Tanning Beds: Artificial UV rays are just as harmful as the sun.",
    "Check Your Skin Monthly: Look for new or changing moles — use mirrors or ask for help.",
    "See a Dermatologist Annually: Especially if you have risk factors like fair skin or family history.",
    "Follow the ABCDE Rule: Asymmetry, Border, Color, Diameter, Evolving — if any apply, get it checked.",
  ],
  simpleExplanation: {
    whatIs:
      "Melanoma is a serious type of skin cancer that starts in the cells that give your skin its color. It’s dangerous because it can grow quickly and spread to other parts of the body if not treated early.",
    howYouGet:
      "It usually happens after years of sun exposure or using tanning beds. People with fair skin, lots of moles, or a family history are more at risk.",
    howToFeel:
      "You might notice a mole that looks different from others — it could change shape, color, or size, or start bleeding or itching. It might not hurt, which is why checking your skin is so important.",
    howToGetBetter:
      "A doctor can remove it with surgery, and if it’s caught early, that’s often enough. If it spreads, treatments like immunotherapy or targeted drugs can help fight it. The key is catching it early and protecting your skin from the sun. ☀️🧴",
  },
  severity: "severe",
  commonness: "uncommon",
},
  {
  id: "arthritis",
  name: "Arthritis (general)",
  category: "Joint and Musculoskeletal Disorder",
  bodySystem: "musculoskeletal",
  summary: "A group of conditions involving inflammation of one or more joints, causing pain, swelling, stiffness, and reduced range of motion. There are over 100 different types of arthritis, with osteoarthritis and rheumatoid arthritis being the most common forms.",
  symptoms: [
    "Joint pain that may be constant or come and go",
    "Joint stiffness, especially in the morning or after periods of inactivity",
    "Swelling in and around joints",
    "Reduced range of motion in affected joints",
    "Warmth and redness around joints",
    "Fatigue and general feeling of being unwell",
    "Joint deformity in advanced cases",
    "Muscle weakness around affected joints",
    "Grinding or crackling sounds when moving joints (crepitus)",
    "Difficulty performing daily activities like opening jars or climbing stairs",
  ],
  causes: [
    "Age-related wear and tear of joint cartilage (osteoarthritis)",
    "Autoimmune system attacking joint tissues (rheumatoid arthritis)",
    "Genetic predisposition and family history",
    "Previous joint injuries or trauma",
    "Infections that affect joints (septic arthritis)",
    "Metabolic disorders like gout (uric acid crystal buildup)",
    "Obesity putting extra stress on weight-bearing joints",
    "Repetitive joint use from occupation or sports",
    "Autoimmune conditions like lupus or psoriasis",
  ],
  diagnosis: [
    "Physical examination to check for joint swelling, tenderness, and range of motion.",
    "Medical history review including family history and symptom timeline.",
    "Blood tests to check for inflammatory markers (ESR, CRP), rheumatoid factor, and other autoimmune markers.",
    "X-rays to show joint damage, bone spurs, or cartilage loss.",
    "MRI or CT scans for detailed images of soft tissues and cartilage.",
    "Joint fluid analysis (arthrocentesis) to check for infection, crystals, or inflammatory cells.",
    "Ultrasound to visualize joint inflammation and fluid buildup.",
  ],
  treatment: [
    "Medications: NSAIDs (ibuprofen, naproxen) for pain and inflammation, disease-modifying antirheumatic drugs (DMARDs) for autoimmune types, corticosteroid injections for severe flares.",
    "Physical Therapy: Exercises to maintain joint flexibility, strengthen supporting muscles, and improve range of motion.",
    "Occupational Therapy: Learning joint protection techniques and using adaptive tools for daily activities.",
    "Weight Management: Maintaining healthy weight to reduce stress on joints, especially knees and hips.",
    "Hot and Cold Therapy: Heat to relax muscles and improve circulation, cold to reduce inflammation and numb pain.",
    "Low-Impact Exercise: Swimming, cycling, or walking to maintain joint mobility without excessive stress.",
    "Surgical Options: Joint replacement, arthroscopy, or joint fusion for severe cases that don't respond to conservative treatment.",
    "Alternative Therapies: Acupuncture, massage, or supplements like glucosamine (though evidence varies).",
  ],
  prevention: [
    "Maintain a healthy weight to reduce stress on weight-bearing joints. ⚖️",
    "Stay physically active with low-impact exercises to keep joints flexible and muscles strong.",
    "Use proper body mechanics when lifting, bending, or performing repetitive tasks.",
    "Protect joints during sports and physical activities with appropriate gear.",
    "Eat an anti-inflammatory diet rich in omega-3 fatty acids, fruits, and vegetables.",
    "Don't ignore joint injuries – seek prompt treatment to prevent long-term damage.",
    "Avoid smoking, which can worsen inflammation and slow healing.",
    "Get regular check-ups, especially if you have family history of arthritis.",
  ],
  simpleExplanation: {
    whatIs:
      "Arthritis is like rust forming in the hinges of a door – except it's happening in your joints where bones meet. The smooth, slippery cartilage that normally helps your joints move easily gets damaged or inflamed, making movement painful and stiff.",
    howYouGet:
      "Sometimes it happens because your joints have been working hard for many years and the cartilage just wears down (like tires on a car). Other times, your body's immune system gets confused and starts attacking your own joint tissues, thinking they're harmful invaders.",
    howToFeel:
      "It often feels like your joints are rusty and creaky, especially when you first wake up or after sitting still for a while. You might feel like you need to 'warm up' your joints before they move smoothly. Some days are worse than others, and weather changes might make your joints feel more achy.",
    howToGetBetter:
      "While there's no cure for most types of arthritis, you can definitely feel better! Think of managing arthritis like taking care of a garden – it needs regular attention. Gentle exercise keeps your joints moving like oil on hinges, medicines can calm down inflammation, and physical therapy teaches you the best ways to move without causing more pain. The key is working with your healthcare team to find the right combination of treatments that work for you. 🌱",
  },
  severity: "moderate",
  commonness: "very-common",
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
