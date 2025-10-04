interface ClinicalTablesResponse {
  [0]: number;
  [1]: string[];
  [2]: never[];
  [3]: Array<[string, string]>;
}

interface ConditionSearchResult {
  name: string;
  medlinePlusUrl: string;
}

export async function searchConditions(query: string): Promise<ConditionSearchResult[]> {
  if (!query.trim()) return [];

  try {
    const url = `https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${encodeURIComponent(query)}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: ClinicalTablesResponse = await response.json();

    const names = data[1];
    const details = data[3];

    const results: ConditionSearchResult[] = names.map((name, index) => ({
      name,
      medlinePlusUrl: details[index]?.[1] || ''
    })).filter(result => result.medlinePlusUrl);

    return results;
  } catch (error) {
    console.error('Error fetching conditions:', error);
    return [];
  }
}

export async function getAllConditions(limit: number = 50): Promise<ConditionSearchResult[]> {
  try {
    const url = `https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=&maxList=${limit}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: ClinicalTablesResponse = await response.json();

    const names = data[1];
    const details = data[3];

    const results: ConditionSearchResult[] = names.map((name, index) => ({
      name,
      medlinePlusUrl: details[index]?.[1] || ''
    })).filter(result => result.medlinePlusUrl);

    return results;
  } catch (error) {
    console.error('Error fetching all conditions:', error);
    return [];
  }
}
