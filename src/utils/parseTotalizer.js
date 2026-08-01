export function parseTotalizer(text) {
  const nozzles = {};

  // Normalize OCR text
  text = text.replace(/\r/g, "");

  // Find every nozzle block
  const nozzleRegex = /Nozzle\s*No\.?\s*:?\s*0?(\d+)/gi;

  const matches = [...text.matchAll(nozzleRegex)];

  for (let i = 0; i < matches.length; i++) {
    const nozzle = Number(matches[i][1]);

    const start = matches[i].index;
    const end =
      i + 1 < matches.length
        ? matches[i + 1].index
        : text.length;

    const block = text.slice(start, end);

    // Find Vtot inside this nozzle block
    const vtotMatch = block.match(/Vtot\s*:?\s*([0-9.\s]+)/i);

    if (!vtotMatch) continue;

    // Remove spaces and keep only digits + decimal
    let value = vtotMatch[1]
      .replace(/\s/g, "")
      .replace(/[^\d.]/g, "");

    const vtot = parseFloat(value);

    if (!isNaN(vtot)) {
      nozzles[nozzle] = vtot;
    }
  }

  return nozzles;
}
