export const CATEGORIES = [
  { key: 'all',         label: 'All Medications',            icon: '📦' },
  { key: 'antacid',    label: 'Antacids & Ulcer Care',       icon: '🫁' },
  { key: 'antibiotic', label: 'Antibiotics',                 icon: '💊' },
  { key: 'antiallergy',label: 'Antiallergies',               icon: '🌿' },
  { key: 'analgesic',  label: 'Analgesics & Pain',           icon: '🩹' },
  { key: 'multivite',  label: 'Multivites & Haematinics',    icon: '🩸' },
  { key: 'malaria',    label: 'Malaria & Fever',             icon: '🦟' },
  { key: 'chronic',    label: 'BP & Diabetes',               icon: '❤️' },
  { key: 'respiratory',label: 'Cough & Respiratory',         icon: '💨' },
  { key: 'vitamins',   label: 'Vitamins & Immunity',         icon: '⚡' },
  { key: 'derma',      label: 'Skin & Dermatology',          icon: '🧴' },
  { key: 'eye',        label: 'Eye, Ear & ENT',              icon: '👁️' },
  { key: 'mother',     label: 'Mother & Baby',               icon: '🤱' },
  { key: 'sexual',     label: 'Sexual Health',               icon: '💙' },
  { key: 'firstaid',   label: 'First Aid & Antiseptics',     icon: '🩺' },
];

export const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map(c => [c.key, c]));
