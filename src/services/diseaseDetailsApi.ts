import type { Disease } from '../types/Disease';

interface ParsedDiseaseInfo {
  name: string;
  summary: string;
  sections: {
    symptoms?: string[];
    causes?: string[];
    diagnosis?: string[];
    treatment?: string[];
    prevention?: string[];
  };
}

function generateId(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function categorizeDisease(name: string): { category: string; bodySystem: string } {
  const nameLower = name.toLowerCase();

  if (nameLower.includes('heart') || nameLower.includes('cardio') || nameLower.includes('blood pressure')) {
    return { category: 'Cardiovascular Disease', bodySystem: 'cardiovascular' };
  }
  if (nameLower.includes('brain') || nameLower.includes('neuro') || nameLower.includes('mental') || nameLower.includes('depression') || nameLower.includes('anxiety')) {
    return { category: 'Neurological Disorder', bodySystem: 'nervous' };
  }
  if (nameLower.includes('lung') || nameLower.includes('respiratory') || nameLower.includes('asthma') || nameLower.includes('breathing')) {
    return { category: 'Respiratory Condition', bodySystem: 'respiratory' };
  }
  if (nameLower.includes('stomach') || nameLower.includes('digestive') || nameLower.includes('intestin')) {
    return { category: 'Digestive Disorder', bodySystem: 'digestive' };
  }
  if (nameLower.includes('bone') || nameLower.includes('joint') || nameLower.includes('arthritis') || nameLower.includes('muscle')) {
    return { category: 'Musculoskeletal Condition', bodySystem: 'musculoskeletal' };
  }
  if (nameLower.includes('diabetes') || nameLower.includes('thyroid') || nameLower.includes('hormone')) {
    return { category: 'Endocrine Disorder', bodySystem: 'endocrine' };
  }
  if (nameLower.includes('immune') || nameLower.includes('hiv') || nameLower.includes('aids')) {
    return { category: 'Immune System Disorder', bodySystem: 'immune' };
  }
  if (nameLower.includes('skin') || nameLower.includes('derma')) {
    return { category: 'Skin Condition', bodySystem: 'integumentary' };
  }
  if (nameLower.includes('kidney') || nameLower.includes('bladder') || nameLower.includes('urinary')) {
    return { category: 'Urinary System Disorder', bodySystem: 'urinary' };
  }

  return { category: 'General Medical Condition', bodySystem: 'cardiovascular' };
}

function determineSeverity(name: string, symptoms: string[]): 'mild' | 'moderate' | 'severe' {
  const nameLower = name.toLowerCase();
  const symptomsText = symptoms.join(' ').toLowerCase();

  if (nameLower.includes('cancer') || nameLower.includes('heart attack') || nameLower.includes('stroke')) {
    return 'severe';
  }
  if (symptomsText.includes('severe') || symptomsText.includes('emergency') || symptomsText.includes('life-threatening')) {
    return 'severe';
  }
  if (symptomsText.includes('chronic') || symptomsText.includes('persistent')) {
    return 'moderate';
  }

  return 'moderate';
}

function determineCommonness(name: string): 'rare' | 'uncommon' | 'common' | 'very-common' {
  const nameLower = name.toLowerCase();

  const veryCommon = ['diabetes', 'hypertension', 'high blood pressure', 'common cold', 'flu', 'allergy', 'asthma', 'depression', 'anxiety'];
  const common = ['arthritis', 'migraine', 'bronchitis', 'pneumonia', 'gastritis'];

  if (veryCommon.some(condition => nameLower.includes(condition))) {
    return 'very-common';
  }
  if (common.some(condition => nameLower.includes(condition))) {
    return 'common';
  }

  return 'uncommon';
}

export async function fetchDiseaseDetails(name: string, medlinePlusUrl: string): Promise<Disease | null> {
  try {
    const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/parse-medlineplus`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: medlinePlusUrl, name }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: ParsedDiseaseInfo = await response.json();

    const { category, bodySystem } = categorizeDisease(name);
    const severity = determineSeverity(name, data.sections.symptoms || []);
    const commonness = determineCommonness(name);

    const disease: Disease = {
      id: generateId(name),
      name: data.name,
      category,
      bodySystem,
      summary: data.summary,
      symptoms: data.sections.symptoms || [],
      causes: data.sections.causes || [],
      diagnosis: data.sections.diagnosis || [],
      treatment: data.sections.treatment || [],
      prevention: data.sections.prevention || [],
      simpleExplanation: {
        whatIs: `${data.name} is a health condition that affects your body. ${data.summary.split('.')[0]}.`,
        howYouGet: data.sections.causes?.[0] || `The causes can vary from person to person.`,
        howToFeel: data.sections.symptoms?.[0] || `You might feel different symptoms.`,
        howToGetBetter: data.sections.treatment?.[0] || `A doctor can help you feel better with the right treatment.`
      },
      severity,
      commonness,
    };

    return disease;
  } catch (error) {
    console.error('Error fetching disease details:', error);
    return null;
  }
}
