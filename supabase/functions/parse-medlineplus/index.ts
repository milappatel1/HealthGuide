import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface DiseaseInfo {
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

function parseHtmlToText(html: string): string {
  return html
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/<style[^>]*>.*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractListItems(html: string, sectionPattern: RegExp): string[] {
  const match = html.match(sectionPattern);
  if (!match) return [];

  const sectionHtml = match[0];
  const items: string[] = [];
  const liRegex = /<li[^>]*>(.*?)<\/li>/gi;
  let liMatch;

  while ((liMatch = liRegex.exec(sectionHtml)) !== null) {
    const text = parseHtmlToText(liMatch[1]);
    if (text && text.length > 5) {
      items.push(text);
    }
  }

  return items.slice(0, 6);
}

function parseDiseasePage(html: string, name: string): DiseaseInfo {
  let summary = '';
  const summaryMatch = html.match(/<div[^>]*id="summary"[^>]*>(.*?)<\/div>/is);
  if (summaryMatch) {
    const summaryText = parseHtmlToText(summaryMatch[1]);
    const sentences = summaryText.split(/[.!?]+/);
    summary = sentences.slice(0, 2).join('.').trim();
    if (summary && !summary.endsWith('.')) summary += '.';
  }

  if (!summary) {
    const firstPMatch = html.match(/<p[^>]*>(.*?)<\/p>/is);
    if (firstPMatch) {
      summary = parseHtmlToText(firstPMatch[1]).substring(0, 200);
      if (summary && !summary.endsWith('.')) summary += '.';
    }
  }

  const sections = {
    symptoms: extractListItems(html, /<div[^>]*id=["']?symptoms["']?[^>]*>.*?<\/div>/is),
    causes: extractListItems(html, /<div[^>]*id=["']?causes["']?[^>]*>.*?<\/div>/is),
    diagnosis: extractListItems(html, /<div[^>]*id=["']?diagnosis["']?[^>]*>.*?<\/div>/is),
    treatment: extractListItems(html, /<div[^>]*id=["']?treatment["']?[^>]*>.*?<\/div>/is),
    prevention: extractListItems(html, /<div[^>]*id=["']?prevention["']?[^>]*>.*?<\/div>/is),
  };

  if (sections.symptoms.length === 0) {
    sections.symptoms = [`Common symptoms of ${name} may vary. Consult a healthcare provider for specific symptoms.`];
  }
  if (sections.causes.length === 0) {
    sections.causes = [`The causes of ${name} can vary. Medical evaluation is recommended for proper diagnosis.`];
  }
  if (sections.diagnosis.length === 0) {
    sections.diagnosis = [`Diagnosis typically involves medical history review and physical examination.`, `Additional tests may be ordered by your healthcare provider.`];
  }
  if (sections.treatment.length === 0) {
    sections.treatment = [`Treatment options vary depending on severity and individual factors.`, `Consult with a healthcare provider for appropriate treatment.`];
  }
  if (sections.prevention.length === 0) {
    sections.prevention = [`Prevention strategies may vary. Consult a healthcare provider for personalized advice.`];
  }

  return {
    name,
    summary: summary || `${name} is a medical condition. Consult a healthcare provider for detailed information.`,
    sections,
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { url, name } = await req.json();

    if (!url || !name) {
      return new Response(
        JSON.stringify({ error: 'URL and name are required' }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const html = await response.text();
    const diseaseInfo = parseDiseasePage(html, name);

    return new Response(
      JSON.stringify(diseaseInfo),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});