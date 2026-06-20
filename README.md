# Karjeras kompass — izvietošana un datu vākšana

## Faili
- `index.html` — pati lietotne (dati iešūti iekšā, viens fails).
- `data-editor.html` — programmu datu redaktors (ikdienas papildināšanai).
- `apps-script.gs` — Google Sheet aizmugursistēmas kods (datu vākšanai).
- `programs.json` — datu kopija (rezerves / serverless versijai).

## 1. Izvietošana GitHub Pages
1. Izveido jaunu repozitoriju, piem. `karjeras-kompass`.
2. Augšupielādē `index.html` (saknē) un `data-editor.html`.
3. Settings → Pages → Source: `main` branch, mape `/root` → Save.
4. Pēc minūtes lapa būs pieejama: `https://<lietotajvards>.github.io/karjeras-kompass/`
   - tests:  `.../index.html`
   - redaktors:  `.../data-editor.html`
   - administrācija (lokālie dati):  `.../index.html#admin`

## 2. Datu vākšana vienuviet (telefons / jebkura ierīce → tava tabula)
Statisks GitHub Pages dati saglabāt nevar. Risinājums — Google Sheet ar Apps Script:

1. Izveido jaunu Google Sheet: atver https://sheets.new
2. Extensions → Apps Script. Izdzēs visu, ielīmē `apps-script.gs` saturu, saglabā.
3. Deploy → New deployment → Web app:
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Deploy → autorizē kontu → nokopē **Web app URL**.
4. Atver `index.html`, atrodi rindu:  `const SHEET_ENDPOINT='';`
   ielīmē URL:  `const SHEET_ENDPOINT='https://script.google.com/macros/s/.../exec';`
5. Saglabā un push uz GitHub.

Tagad katrs pabeigts tests (arī no telefona) automātiski pievieno rindu tavā Sheet.
Dati paliek arī lokāli (`#admin` → eksports CSV/JSON) kā rezerve.

## 3. Datu papildināšana ikdienā
1. Atver `data-editor.html`.
2. Importē pašreizējo `programs.json` (poga “Importēt JSON”), ja sāc no jauna.
3. Pievieno/labo programmas, ievadi €/h un kritērijus 1–5.
4. “Eksportēt programs.json” → lejupielādē failu.
5. Aizvieto datus `index.html` (vai ārējo `programs.json`, ja pārslēgts uz fetch).

## Piezīme par privātumu
Vāktie dati ir anonīmi: nav vārda, e-pasta, grupas. `run_id` ir nejaušs.
Sākumekrānā ir piekrišanas paziņojums. Apstiprini precīzas prasības savā katedrā.
