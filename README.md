# Yasin Karaman Nakliyat — Standalone Website

Een complete HTML/CSS/JS (met optioneel PHP) versie van de Yasin Karaman Nakliyat website. Geen framework, geen build-step nodig.

## 📁 Bestanden

| Bestand | Functie |
|---------|---------|
| `index.html` | Volledige single-page website (alle secties) |
| `styles.css` | Alle styling (zwart-goud luxe thema) |
| `script.js` | Interacties (navbar, FAQ accordeon, scroll animaties, formulier) |
| `contact.php` | PHP handler voor het contactformulier (stuurt e-mail) |

## 🚀 Gebruik

### Zonder PHP (alleen HTML/CSS/JS)
Plaats de bestanden op elke webserver of open `index.html` direct in je browser. Het formulier werkt dan niet (heeft PHP nodig), maar de hele website is volledig functioneel.

### Met PHP (volledig functioneel)
1. Plaats alle bestanden op een PHP-server (Apache/Nginx met PHP).
2. Zorg dat de server e-mail kan versturen (`mail()` functie).
3. Pas in `contact.php` het e-mailadres aan indien nodig (standaard: `taha2006@live.nl`).
4. Open de website in je browser — het contactformulier stuurt nu e-mails.

### Lokaal testen
Gebruik een lokale server zoals XAMPP, MAMP of de ingebouwde PHP server:
```bash
cd public/site
php -S localhost:8000
```
Open dan `http://localhost:8000` in je browser.

## 🎨 Design

- **Kleuren**: Zwart (#0a0a0a) + Goud (#c9a84c)
- **Fonts**: Playfair Display (headings) + Inter (body)
- **Animaties**: Scroll-reveal (Intersection Observer), hover effecten
- **Responsive**: Mobiel, tablet en desktop

## 📞 Contact

- Telefoon: +90 552 884 86 91
- E-posta: taha2006@live.nl
- Instagram: @yasinkaraman86
