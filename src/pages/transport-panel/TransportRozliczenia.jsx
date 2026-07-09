import { useEffect, useRef, useState } from 'react';
import { Loader2, Receipt, UploadCloud, Play, FolderOpen, FileSpreadsheet, RefreshCw, Droplets } from 'lucide-react';
import TransportLayout from './TransportLayout';
import { apiGet, apiPost } from '../../lib/gasApi';

const MIESIACE = ['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień'];

function pln(v) { return (Number(v) || 0).toLocaleString('pl-PL', { minimumFractionDigits: 2 }) + ' zł'; }

export default function TransportRozliczenia() {
  const teraz = new Date();
  const [rok, setRok] = useState(String(teraz.getFullYear()));
  const [mm, setMm] = useState(String(teraz.getMonth() + 1).padStart(2, '0'));
  const [dane, setDane] = useState(null);
  const [aktywny, setAktywny] = useState('');
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [info, setInfo] = useState('');
  const [error, setError] = useState('');
  const fileRef = useRef(null);

  async function zaladuj() {
    setLoading(true); setError('');
    try {
      const d = await apiGet('getRozliczenia', { rok, mm });
      setDane(d);
      if (d?.kontrahenci?.length && !d.kontrahenci.find(k => k.kontrahent === aktywny)) {
        setAktywny(d.kontrahenci[0].kontrahent);
      }
    } catch (e) { setError(e.message || 'Błąd pobierania'); }
    setLoading(false);
  }

  useEffect(() => { zaladuj(); /* eslint-disable-next-line */ }, [rok, mm]);

  async function wyslijPliki(files) {
    if (!files?.length) return;
    setUploading(true); setError(''); setInfo('');
    let ok = 0;
    for (const f of files) {
      try {
        const b64 = await new Promise((res, rej) => {
          const r = new FileReader();
          r.onload = () => res(String(r.result).split(',')[1]);
          r.onerror = rej;
          r.readAsDataURL(f);
        });
        await apiPost('uploadScan', { rok, mm, filename: f.name, mimeType: f.type, dataB64: b64 });
        ok++;
      } catch (e) { setError(`Błąd wysyłki ${f.name}: ${e.message}`); }
    }
    setInfo(`Wgrano ${ok}/${files.length} plików do folderu ${MIESIACE[Number(mm) - 1]}.`);
    setUploading(false);
    zaladuj();
  }

  async function przetworz() {
    setProcessing(true); setError(''); setInfo('Przetwarzanie: OCR → GPS → rozliczenia… (może potrwać 2–4 min)');
    try {
      const w = await apiGet('przetworzMiesiac', { rok, mm });
      const z = w?.ocr?.zlecen ?? 0;
      setInfo(`Gotowe! OCR: ${z} zleceń · GPS: ${w?.automat?.gps?.dopasowano ?? 0} misji · rozliczenia odświeżone.`);
    } catch (e) { setError(e.message || 'Błąd przetwarzania'); }
    setProcessing(false);
    zaladuj();
  }

  const k = dane?.kontrahenci?.find(x => x.kontrahent === aktywny);

  return (
    <TransportLayout title="Rozliczenia">
      {/* Pasek: okres + akcje */}
      <div className="bg-white rounded-2xl border border-[#e5eaf0] p-4 mb-4 flex flex-wrap items-center gap-3">
        <select value={mm} onChange={e => setMm(e.target.value)} className="border border-[#e5eaf0] rounded-xl px-3 py-2 text-sm font-bold text-navy-blue">
          {MIESIACE.map((n, i) => <option key={n} value={String(i + 1).padStart(2, '0')}>{n}</option>)}
        </select>
        <select value={rok} onChange={e => setRok(e.target.value)} className="border border-[#e5eaf0] rounded-xl px-3 py-2 text-sm font-bold text-navy-blue">
          {['2025', '2026', '2027'].map(r => <option key={r} value={r}>{r}</option>)}
        </select>

        <div className="flex-1" />

        <input ref={fileRef} type="file" multiple accept="image/*,.pdf" className="hidden"
          onChange={e => { wyslijPliki([...e.target.files]); e.target.value = ''; }} />
        <button onClick={() => fileRef.current?.click()} disabled={uploading}
          className="flex items-center gap-2 bg-navy-blue text-white rounded-xl px-4 py-2 text-sm font-bold disabled:opacity-50">
          {uploading ? <Loader2 size={16} className="animate-spin" /> : <UploadCloud size={16} />}
          Wrzuć zdjęcia zleceń
        </button>
        <button onClick={przetworz} disabled={processing || uploading}
          className="flex items-center gap-2 bg-primary-red text-white rounded-xl px-4 py-2 text-sm font-bold disabled:opacity-50">
          {processing ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} />}
          Przetwórz miesiąc
        </button>
        <button onClick={zaladuj} title="Odśwież" className="p-2 text-[#9CA3AF] hover:text-navy-blue">
          <RefreshCw size={17} />
        </button>
      </div>

      {info && <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-3 text-sm mb-4">{info}</div>}
      {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl p-3 text-sm mb-4">{error}</div>}

      {loading ? (
        <div className="flex justify-center py-20 text-[#9CA3AF]"><Loader2 className="animate-spin" /></div>
      ) : (
        <>
          {/* Podsumowanie miesiąca */}
          <div className="bg-white rounded-2xl border border-[#e5eaf0] p-4 mb-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <div className="font-black text-navy-blue text-lg flex items-center gap-2">
              <Receipt size={18} /> {MIESIACE[Number(mm) - 1]} {rok}: {pln(dane?.razem)}
            </div>
            {dane?.plikowWFolderze > 0 && (
              <div className="text-amber-600 font-bold">📄 {dane.plikowWFolderze} plik(ów) czeka na przetworzenie</div>
            )}
            <div className="flex-1" />
            {dane?.folderUrl && (
              <a href={dane.folderUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-navy-blue underline">
                <FolderOpen size={15} /> Folder skanów
              </a>
            )}
            {dane?.arkuszUrl && (
              <a href={dane.arkuszUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-navy-blue underline">
                <FileSpreadsheet size={15} /> Arkusz rozliczeń
              </a>
            )}
          </div>

          {/* Zakładki kontrahentów */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(dane?.kontrahenci || []).map(g => (
              <button key={g.kontrahent} onClick={() => setAktywny(g.kontrahent)}
                className={`px-4 py-2 rounded-xl text-sm font-bold border ${aktywny === g.kontrahent
                  ? 'bg-navy-blue text-white border-navy-blue'
                  : 'bg-white text-navy-blue border-[#e5eaf0] hover:border-navy-blue'}`}>
                {g.kontrahent} · {pln(g.sumaZl)}
              </button>
            ))}
            {(!dane?.kontrahenci || dane.kontrahenci.length === 0) && (
              <div className="text-sm text-[#9CA3AF] py-4">Brak rozliczeń w tym miesiącu — wrzuć zdjęcia zleceń i kliknij „Przetwórz miesiąc".</div>
            )}
          </div>

          {/* Tabela aktywnego kontrahenta */}
          {k && (
            <div className="bg-white rounded-2xl border border-[#e5eaf0] p-4 overflow-x-auto">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-3 text-sm">
                <span className="font-black text-navy-blue">{k.kontrahent}</span>
                <span>{k.zlecen} zleceń</span>
                <span>{k.sumaKm} km</span>
                {k.krewSuma > 0 && (
                  <span className="flex items-center gap-1 text-red-600 font-bold">
                    <Droplets size={15} /> krew: {k.krewKursy} kursów = {pln(k.krewSuma)}
                  </span>
                )}
                <span className="font-black">{pln(k.sumaZl)}</span>
              </div>
              <table className="w-full text-sm min-w-[720px]">
                <thead>
                  <tr className="text-left text-[#9CA3AF] border-b border-[#e5eaf0]">
                    <th className="py-2 pr-3">Data</th>
                    <th className="py-2 pr-3">Pacjent</th>
                    <th className="py-2 pr-3">Cel</th>
                    <th className="py-2 pr-3 text-right">Czas [h]</th>
                    <th className="py-2 pr-3 text-right">Km</th>
                    <th className="py-2 pr-3 text-right">Kwota</th>
                    <th className="py-2">Źródło</th>
                  </tr>
                </thead>
                <tbody>
                  {k.pozycje.map(p => (
                    <tr key={p.id} className="border-b border-[#f1f4f8]">
                      <td className="py-2 pr-3 whitespace-nowrap">{p.data}</td>
                      <td className="py-2 pr-3 font-semibold text-navy-blue">{p.pacjent || <span className="text-amber-600">brak nazwiska!</span>}</td>
                      <td className="py-2 pr-3 text-[#6B7280]">{p.cel}</td>
                      <td className="py-2 pr-3 text-right">{p.godziny}</td>
                      <td className="py-2 pr-3 text-right">{p.km}</td>
                      <td className="py-2 pr-3 text-right font-bold">{pln(p.kwota)}</td>
                      <td className="py-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${p.zrodlo === 'GPS' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                          {p.zrodlo}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </TransportLayout>
  );
}
