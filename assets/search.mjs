// Preserve the earlier public helper; the archive controller owns the current UI.
import './archive-search.mjs?v=0ecaccf51d65';

export function findPassages(rows,query,work='') {
  const terms=query.normalize('NFC').trim().split(/\s+/).filter(Boolean);
  if(!terms.length)return [];
  return rows.filter(row=>(!work||row.work_id===work)&&terms.every(term=>row.text.normalize('NFC').includes(term)));
}
