# Yasin Karaman Nakliyat

Een lichte, responsieve website in HTML, CSS en JavaScript. Geen buildstap nodig.

## 📁 Bestanden

| Bestand | Functie |
|---------|---------|
| `index.html` | Lange startpagina met diensten, video's en FAQ |
| `hizmetler.html` | Diensten met video's uit de praktijk |
| `hakkimizda.html` | Over ons, werkwijze en video's |
| `iletisim.html` | Contact, offerteformulier en veelgestelde vragen |
| `style.css` | Licht en fris responsief ontwerp |
| `script.js` | Menu, FAQ, AOS-scrollanimaties en contactformulier |
| `contact.php` | PHP handler voor het contactformulier (stuurt e-mail) |
| `videos/` | Benoemde transport- en verhuisvideo's |

## 🚀 Gebruik

### Zonder PHP (alleen HTML/CSS/JS)
Plaats de bestanden op elke webserver of open `index.html` direct in je browser. Het formulier werkt dan niet (heeft PHP nodig), maar de hele website is volledig functioneel.

### Met PHP (volledig functioneel)
1. Plaats alle bestanden op een PHP-server (Apache/Nginx met PHP).
2. Zorg dat de server e-mail kan versturen (`mail()` functie).
3. Pas in `contact.php` het e-mailadres aan indien nodig (standaard: `Yasin42karaman@gmail.com`).
4. Open de website in je browser — het contactformulier stuurt nu e-mails.

### Lokaal testen
Gebruik een lokale server zoals XAMPP, MAMP of de ingebouwde PHP server:
```bash
cd public/site
php -S localhost:8000
```
Open dan `http://localhost:8000` in je browser.

Voer `npm install` eenmalig uit en gebruik daarna `npm test` om de videoweergave te controleren.

## 🎨 Design

- **Kleuren**: Warm wit, houtskool en een gedempte saliegroene accentkleur
- **Fonts**: Manrope (koppen) + DM Sans (tekst)
- **Iconen**: Font Awesome Free 6.7.2 via CDN
- **Animaties**: AOS voor scroll-reveals; GSAP voor subtiele hero-animaties
- **Video's**: inline spelers zonder afspeelkaart of overlay
- **Responsive**: Mobiel, tablet en desktop

## 📞 Contact

- Telefoon: +90 552 884 86 91
- E-posta: Yasin42karaman@gmail.com
- Instagram: @yasinkaraman86
