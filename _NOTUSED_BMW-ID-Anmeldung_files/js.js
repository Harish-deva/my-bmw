const defaultLanguage = "en";
const unsupportedBrowsersLabel = {
    bg:{
        title: "УСТАНОВИХМЕ, ЧЕ ИЗПОЛЗВАТЕ СТАРА ВЕРСИЯ НА БРАУЗЪРА. ЗА ПРАВИЛНА РАБОТА СЕ ИЗИСКВА АКТУАЛИЗАЦИЯ.",
        subtitle: "За най-добро онлайн изживяване, моля, актуализирайте браузъра си. След като актуализирате браузъра си, можете да използвате тази страница по обичайния начин.",
        chrome_label: "Актуализация на Chrome",
        firefox_label: "Актуализация на FireFox",
        edge_label: "Актуализация на Edge",
        safari_label: "Актуализация на Safari"
    },
    cs: {
        title: "ZJISTILI JSME, ŽE VÁŠ PROHLÍŽEČ NENÍ AKTUÁLNÍ A PRO SPRÁVNÉ FUNGOVÁNÍ VYŽADUJE AKTUALIZACI.",
        subtitle: "Pro nejlepší online zážitek aktualizujte prosím svůj prohlížeč. Po aktualizaci prohlížeče můžete tuto stránku používat jako obvykle.",
        chrome_label: "Aktualizovat Chrome",
        firefox_label: "Aktualizovat FireFox",
        edge_label: "Aktualizovat Edge",
        safari_label: "Aktualizovat Safari"
    },
    da: {
        title: "VI HAR REGISTRERET, AT DIN BROWSER ER FORÆLDET OG KRÆVER EN OPDATERING FOR AT FUNGERE KORREKT.",
        subtitle: "Opdater din BROWSER for at få den bedste onlineoplevelse. Når du har opdateret din browser, kan du bruge denne side som normalt.",
        chrome_label: "Opdater Chrome",
        firefox_label: "Updater FireFox",
        edge_label: "Updater Edge",
        safari_label: "Updater Safari"
    },
    de: {
        title: "WIR HABEN ERKANNT, DASS IHR BROWSER NICHT AUF DEM NEUESTEN STAND IST UND AKTUALISIERT WERDEN MUSS, DAMIT ER ORDNUNGSGEMÄSS FUNKTIONIERT.",
        subtitle: "Um das beste Online-Erlebnis zu erhalten, aktualisieren Sie bitte Ihren Browser. Sobald Sie Ihren Browser aktualisiert haben, können Sie diese Seite wie gewohnt nutzen.",
        chrome_label: "Chrome aktualisieren",
        firefox_label: "FireFox aktualisieren",
        edge_label: "Edge aktualisieren",
        safari_label: "Safari aktualisieren"
    },
    el:{
        title: "ΤΟ ΠΡΟΓΡΑΜΜΑ ΠΕΡΙΗΓΗΣΗΣ ΣΑΣ ΕΧΕΙ ΛΗΞΕΙ ΚΑΙ ΑΠΑΙΤΕΙΤΑΙ ΕΝΗΜΕΡΩΣΗ ΓΙΑ ΤΗ ΣΩΣΤΗ ΛΕΙΤΟΥΡΓΙΑ ΤΟΥ.",
        subtitle: "Για καλύτερη διαδικτυακή εμπειρία, ενημερώστε το πρόγραμμα περιήγησής σας. Μόλις ενημερώσετε το πρόγραμμα περιήγησής σας, μπορείτε να χρησιμοποιήσετε αυτήν τη σελίδα ως συνήθως.",
        chrome_label: "Ενημέρωση Chrome",
        firefox_label: "Ενημέρωση FireFox",
        edge_label: "Ενημέρωση Edge",
        safari_label: "Ενημέρωση Safari"
    },
    en: {
        title: "We've detected your browser is out of date and requires an update to work properly.",
        subtitle: "For the best online experience, please update your browser. Once you have updated your browser, you can use this page as normal.",
        chrome_label: "Update Chrome",
        firefox_label: "Update FireFox",
        edge_label: "Update Edge",
        safari_label: "Update Safari"
    },
    es: {
        title: "HEMOS DETECTADO QUE TU NAVEGADOR ESTÁ OBSOLETO Y NECESITA UNA ACTUALIZACIÓN PARA FUNCIONAR CORRECTAMENTE.",
        subtitle: "Para disfrutar de la mejor experiencia en línea, actualiza tu navegador. Una vez hayas actualizado tu navegador, podrás usar esta página de la forma habitual.",
        chrome_label: "Actualizar Chrome",
        firefox_label: "Actualizar FireFox",
        edge_label: "Actualizar Edge",
        safari_label: "Actualizar Safari"
    },
    et:{
        title: "TUVASTASIME, ET TEIE BRAUSER ON AEGUNUD NING VAJAB ÕIGESTI TÖÖTAMISEKS UUENDAMIST.",
        subtitle: "Parima veebikogemuse saamiseks uuendage oma brauserit. Kui olete oma brauserit uuendanud, võite seda lehekülge kasutada nagu tavaliselt.",
        chrome_label: " Uuenda Chrome'i",
        firefox_label: "Uuenda FireFoxi",
        edge_label: "Uuenda Edge'it",
        safari_label: "Uuenda Safarit"
    },
    fi: {
        title: "SELAIMESI ON VANHENTUNUT JA SE ON PÄIVITETTÄVÄ, JOTTA KAIKKI TOIMII KUNNOLLA.",
        subtitle: "Päivitä selaimesi, jotta voit nauttia parhaasta mahdollisesta verkkokokemuksesta. Kun olet päivittänyt selaimesi, voit käyttää tätä sivua tavalliseen tapaan.",
        chrome_label: "Päivitä Chrome",
        firefox_label: "Päivitä FireFox",
        edge_label: "Päivitä Edge",
        safari_label: "Päivitä Safari"
    },
    fr: {
        title: "NOUS AVONS DÉTECTÉ QUE VOTRE NAVIGATEUR EST OBSOLÈTE ET QU’IL NÉCESSITE UNE MISE À JOUR POUR FONCTIONNER CORRECTEMENT.",
        subtitle: "Pour une meilleure expérience en ligne, veuillez mettre à jour votre navigateur. Une fois que vous aurez mis à jour votre navigateur, vous pourrez utiliser cette page normalement.",
        chrome_label: "Mettre à jour Chrome",
        firefox_label: "Mettre à jour FireFox",
        edge_label: "Mettre à jour Edge",
        safari_label: "Mettre à jour Safari"
    },
    hi:{
        title: "हमने पाया है कि आपका ब्राउज़र पुराना हो गया है और ठीक से काम करने के लिए एक अपडेट की आवश्यकता है।",
        subtitle: "सर्वोत्तम ऑनलाइन अनुभव के लिए, कृपया अपना ब्राउज़र अपडेट करें। एक बार जब आप अपना ब्राउज़र अपडेट कर लेते हैं, तो आप सामान्य रूप से इस पृष्ठ का उपयोग कर सकते हैं",
        chrome_label: "क्रोम अपडेट करें",
        firefox_label: "फायरफॉक्स अपडेट करें",
        edge_label: "एज अपडेट करें",
        safari_label: "सफारी अपडेट करें"
    },
    hr:{
        title: "OTKRILI SMO DA JE VAŠ PREGLEDNIK ZASTARIO I POTREBNO GA JE AŽURIRATI KAKO BI ISPRAVNO RADIO.",
        subtitle: "Ažurirajte svoj preglednik za najbolji online doživljaj. Nakon ažuriranja preglednika ovu stranicu možete koristiti kao i obično.",
        chrome_label: "Ažurirajte Chrome",
        firefox_label: "Ažurirajte FireFox",
        edge_label: "Ažurirajte Edge",
        safari_label: "Ažurirajte Safari"
    },
    hu:{
        title: "ÉSZLELTÜK, HOGY BÖNGÉSZŐJE ELAVULT, ÉS MEGFELELŐ MŰKÖDÉSÉHEZ FRISSÍTÉS SZÜKSÉGES.",
        subtitle: "A legjobb online élmény érdekében, kérjük, frissítse a böngészőjét. A böngésző frissítését követően a szokott módon használhatja ezt az oldalt.",
        chrome_label: "A Chrome frissítése",
        firefox_label: "A FireFox frissítése",
        edge_label: "A Edge frissítése",
        safari_label: "A Safari frissítése"

    },
    it: {
        title: "IL BROWSER NON È AGGIORNATO E RICHIEDE UN AGGIORNAMENTO PER FUNZIONARE CORRETTAMENTE.",
        subtitle: "Si prega di aggiornare il browser per ottimizzare l’esperienza online. Una volta aggiornato il browser, questa pagina potrà essere utilizzata come di consueto.",
        chrome_label: "Aggiorna Chrome",
        firefox_label: "Aggiorna FireFox",
        edge_label: "Aggiorna Edge",
        safari_label: "Aggiorna Safari"
    },
    ja: {
        title: "お使いのブラウザが最新版ではありません。正常な動作には更新が必要です。",
        subtitle: "オンライン機能を快適にご利用いただくため、ブラウザを更新してください。 ブラウザを更新すると本ページを通常通り使用できます。",
        chrome_label: "Chromeを更新",
        firefox_label: "FireFoxを更新",
        edge_label: "Edgeを更新",
        safari_label: "Safariを更新"
    },
    ko:{
        title: "고객님이 사용하시는 브라우저의 버전이 오래된 버전입니다. 브라우저가 올바르게 작동하려면 업데이트를 해야 합니다. 최고의",
        subtitle: "온라인 경험을 위해 브라우저를 업데이트해 주십시오. 브라우저를 업데이트하면 이 페이지를 기존과 마찬가지로 사용할 수 있습니다.",
        chrome_label: "Chrome 업데이트",
        firefox_label: "FireFox 업데이트",
        edge_label: "Edge 업데이트",
        safari_label: "Safari 업데이트"
    },
    lt:{
        title: "APTIKOME, KAD JŪSŲ NARŠYKLĖ YRA PASENUSI IR, KAD VEIKTŲ TINKAMAI, REIKALAUJA ATNAUJINIMO.",
        subtitle: "Norėdami optimaliai išnaudoti interneto galimybes, atnaujinkite naršyklę. Atnaujinę naršyklę, galite naudoti šį puslapį kaip įprastai.",
        chrome_label: "Atnaujinti „Chrome“",
        firefox_label: "Atnaujinti „FireFox“",
        edge_label: "Atnaujinti „Edge“",
        safari_label: "Atnaujinti „Safari“"
    },
    lv:{
        title: "ESAM KONSTATĒJUŠI, KA JŪSU PĀRLŪKS IR NOVECOJIS, TĀPĒC NEPIECIEŠAMS TO ATJAUNINĀT, LAI LAPA DARBOTOS PAREIZI.",
        subtitle: "Lai garantētu vislabāko tiešsaistes pieredzi, lūdzu, atjauniniet pārlūku. Tiklīdz būs atjaunināts pārlūks, varēsit izmantot lapu, kā ierasts.",
        chrome_label: "Atjaunināt Chrome",
        firefox_label: "Atjaunināt FireFox",
        edge_label: "Atjaunināt Edge",
        safari_label: "Atjaunināt Safari"
    },
    nl: {
        title: "WIJ HEBBEN GEMERKT DAT UW BROWSER VEROUDERD IS EN EEN UPDATE NODIG HEEFT OM CORRECT TE WERKEN.",
        subtitle: "Voor de beste online ervaring is dus een update van uw browser nodig. Zodra u een update van uw browser hebt uitgevoerd, kunt u deze pagina weer zoals gewoonlijk gebruiken.",
        chrome_label: "Update Chrome",
        firefox_label: "Update FireFox",
        edge_label: "Update Edge",
        safari_label: "Update Safari"
    },
    no: {
        title: "VI HAR REGISTRERT AT NETTLESEREN DIN ER UTDATERT OG KREVER EN OPPDATERING FOR Å FUNGERE KORREKT.",
        subtitle: "Oppdater nettleseren din for å få den beste Internett-opplevelsen. Når du har oppdatert nettleseren din, kan du bruke denne siden som normalt.",
        chrome_label: "Oppdater Chrome",
        firefox_label: "Oppdater FireFox",
        edge_label: "Oppdater Edge",
        safari_label: "Oppdater Safari"
    },
    pl: {
        title: "WYKRYLIŚMY, ŻE TWOJA PRZEGLĄDARKA JEST NIEAKTUALNA I WYMAGA AKTUALIZACJI, ABY PRACOWAĆ PRAWIDŁOWO.",
        subtitle: "Zaktualizuj swoją przeglądarkę, aby usprawnić korzystanie ze strony. Po zaktualizowaniu przeglądarki możesz korzystać z tej strony w normalny sposób.",
        chrome_label: "Aktualizacja Chrome",
        firefox_label: "Aktualizacja FireFox",
        edge_label: "Aktualizacja Edge",
        safari_label: "Aktualizacja Safari"
    },
    pt: {
        title: "DETETÁMOS QUE O SEU BROWSER ESTÁ DESATUALIZADO E NECESSITA DE UMA ATUALIZAÇÃO PARA FUNCIONAR CORRETAMENTE.",
        subtitle: "Para ter uma experiência online melhor, atualize o seu browser. Depois de ter atualizado o seu browser, poderá utilizar esta página como normalmente.",
        chrome_label: "Atualizar o Chrome",
        firefox_label: "Atualizar o FireFox",
        edge_label: "Atualizar o Edge",
        safari_label: "Atualizar o Safari"
    },
    ro:{
        title: "AM DETECTAT FAPTUL CĂ BROWSERUL DUMNEAVOASTRĂ ESTE NEACTUALIZAT ȘI NECESITĂ O ACTUALIZARE PENTRU A FUNCȚIONA CORESPUNZĂTOR.",
        subtitle: "Pentru cea mai bună experiență online, vă rugăm să vă actualizați browser-ul. După ce v-ați actualizat browser-ul, puteți utiliza această pagină ca de obicei.",
        chrome_label: "Actualizați Chrome",
        firefox_label: "Actualizați FireFox",
        edge_label: "Actualizați FireFox",
        safari_label: "Actualizați Safari"
    },
    ru:{
        title: "МЫ ОБНАРУЖИЛИ, ЧТО ВАШ БРАУЗЕР УСТАРЕЛ И ДЛЯ НАДЛЕЖАЩЕЙ РАБОТЫ ТРЕБУЕТ ОБНОВЛЕНИЯ.",
        subtitle: "Для максимального удобства работы онлайн обновите браузер. После обновления браузера эту страницу можно использовать в обычном режиме.",
        chrome_label: "Обновить Chrome",
        firefox_label: "Обновить FireFox",
        edge_label: "Обновить Edge",
        safari_label: "Обновить Safari"
    },
    se: {
        title: "Vi har fastställt att din webbläsare är för gammal och behöver uppdateras.",
        subtitle: "För optimal visning, uppdatera din webbläsare. När din webbläsare har uppdaterats till den senaste versionen kan du använda sidan som vanligt.",
        chrome_label: "Update Chrome",
        firefox_label: "Update FireFox",
        edge_label: "Update Edge",
        safari_label: "Update Safari"
    },
    sk:{
        title: "ZISTILI SME, ŽE VÁŠ PREHLIADAČ JE ZASTARANÝ A PRE ZAISTENIE SPRÁVNEJ FUNKČNOSTI JE NEVYHNUTNÉ VYKONAŤ JEHO AKTUALIZÁCIU.",
        subtitle: "Pre zaistenie správnej funkčnosti on-line nástrojov aktualizujte svoj prehliadač. Po aktualizácii prehliadača môžete túto stránku používať ako zvyčajne.",
        chrome_label: "Aktualizovať Chrome",
        firefox_label: "Aktualizovať FireFox",
        edge_label: "Aktualizovať Edge",
        safari_label: "Aktualizovať Safari"
    },
    sl: {
        title: "ZAZNALI SMO, DA JE VAŠ BRSKALNIK ZASTAREL In ZAHTEVA POSODOBITEV ZA USTREZNODELOVANJE.",
        subtitle: "Za najboljšo spletno izkušnjo posodobite svoj brskalnik. Ko posodobite brskalnik, lahko to stran normalno uporabljate.",
        chrome_label: "Posodobitev brskalnika Chrome",
        firefox_label: "Posodobitev brskalnika FireFox",
        edge_label: "Posodobitev brskalnika Edge",
        safari_label: "Posodobitev brskalnika Safari"
    },
    sv: {
        title: "VI HAR UPPTÄCKT ATT DIN WEBBLÄSARE ÄR INAKTUELL OCH KRÄVER EN UPPDATERING FÖR ATT FUNGERA KORREKT.",
        subtitle: "För bästa onlineupplevelse, uppdatera din webbläsare. När du har uppdaterat din webbläsare kan du använda den här sidan som vanligt.",
        chrome_label: "Uppdatera Chrome",
        firefox_label: "Uppdatera FireFox",
        edge_label: "Uppdatera Edge",
        safari_label: "Uppdatera Safari"
    },
    th:{
        title: "เราได้ตรวจพบว่าเบราเซอร์ของคุณล้าสมัยแล้วและต้องมีการอัพเดทเพื่อให้ทำงานได้ตามปกติ",
        subtitle: "โปรดอัพเดทเบราเซอร์ของคุณเพื่อสัมผัสประสบการณ์ออนไลน์ที่ดีที่สุด เมื่อคุณอัพเดทเบราว์เซอร์ของคุณแล้ว คุณจะสามารถใช้หน้านี้ได้ตามปกติ",
        chrome_label: "อัพเดท Chrome",
        firefox_label: "อัพเดท FireFox",
        edge_label: "อัพเดท Edge",
        safari_label: "อัพเดท Safari"
    },
    tr:{
        title: "TARAYICINIZIN GÜNCEL OLMADIĞINI VE DÜZGÜN ŞEKİLDE ÇALIŞMASI İÇİN GÜNCELLENMESİ GEREKTİĞİNİ TESPİT ETTİK.",
        subtitle: "En iyi çevrimiçi deneyimden yararlanmak için lütfen tarayıcınızı güncelleyin. Tarayıcınızı güncelledikten sonra, bu sayfayı normal şekilde kullanabilirsiniz.",
        chrome_label: "Chrome’u güncelle",
        firefox_label: "FireFox’u güncelle",
        edge_label: "Edge’u güncelle",
        safari_label: "Safari’u güncelle"
    },
    zh:{
        title: "我们检测到您的浏览器已过期，需要更新才能正确工作。",
        subtitle: "为获得最佳的在线体验，请更新您的浏览器。 更新浏览器后，您可以正常使用此页面。",
        chrome_label: "更新 Chrome",
        firefox_label: "更新 FireFox",
        edge_label: "更新 Edge",
        safari_label: "更新 Safari"
    }   
};

const enableCookieLabel = {
    en: {
        title: "Please enable cookies to continue",
        subtitle: "To continue using our services, please enable the cookies in your web browser. Once you have enabled the cookies in your browser, please either open a new browser window or restart your App."
    },
    hi:{
        title: "कृपया आगे बढ़ने के लिए कुकीज़ को सक्षम करें",
        subtitle: "हमारी सेवाओं का उपयोग जारी रखने के लिए, कृपया अपने वेब ब्राउज़र में कुकीज़ सक्षम करें। एक बार जब आप अपने ब्राउज़र में कुकीज़ सक्षम कर लेते हैं, तो कृपया या तो एक नई ब्राउज़र विंडो खोलें या अपने ऐप को दोबारा ऑन करें।"
    },
    de: {
        title: "Bitte aktivieren Sie die Cookies, um fortzufahren",
        subtitle: "Um unsere Dienste weiterhin nutzen zu können, aktivieren Sie bitte die Cookies in Ihrem Browser. Sobald Sie die Cookies in Ihrem Browser aktiviert haben, öffnen Sie bitte entweder ein neues Browserfenster oder starten Sie Ihre App neu."
    },
    it: {
        title: "Abilita i cookie per continuare",
        subtitle: "Per continuare ad utilizzare i nostri servizi, abilita i cookie nel tuo browser Web. Dopo aver attivato i cookie nel tuo browser, per favore apri una nuova finestra del browser o riavvia la tua app."
    },
    fr: {
        title: "VEUILLEZ ACTIVER LES COOKIES POUR CONTINUER",
        subtitle: "Pour continuer à utiliser nos services, veuillez activer les cookies dans votre navigateur. Une fois que vous avez activé les cookies dans votre navigateur, veuillez ouvrir une nouvelle fenêtre de navigateur ou redémarrer votre application."
    },
    cs: {
        title: "Chcete-li pokračovat, aktivujte prosím soubory cookie",
        subtitle: "Chcete-li i nadále používat naše služby, aktivujte ve svém prohlížeči soubory cookie. Po aktivaci souborů cookie ve vašem prohlížeči otevřete nové okno prohlížeče nebo restartujte aplikaci."
    },
    bg: {
        title: "Моля, разрешете бисквитките, за да продължите",
        subtitle: "Моля, разрешете бисквитките във Вашия браузър, за да продължите да използвате нашите услуги. След като разрешите бисквитките в браузъра си, отворете нов прозорец на браузъра или рестартирайте приложението си."
    },
    sv:{
        title:"Aktivera cookies för att fortsätta",
        subtitle: "För att fortsätta använda våra tjänster måste du aktivera cookies i din webbläsare. När du har aktiverat cookies i din webbläsare ska du antingen öppna ett nytt webbläsarfönster eller starta om appen."
    },
    fi: {
        title: "Ota evästeet käyttöön jatkaaksesi",
        subtitle: "Ota evästeet käyttöön selaimessasi, jos haluat jatkaa palveluidemme käyttöä. Kun evästeet on otettu käyttöön selaimessasi, avaa joko uusi selainikkuna tai käynnistä sovellus uudelleen."
    },
    hu:{        
        title:"A folytatáshoz, kérjük, aktiválja a sütiket.",
        subtitle:"Fogadja el a sütiket a böngészőjében, hogy továbbra is használni tudja a szolgáltatásainkat. Aktiválás után nyisson új ablakot vagy indítsa újra az alkalmazást."
    },
    el:{
        title:"Ενεργοποιήστε τα cookies για να συνεχίσετε",
        subtitle: "Για να μπορέσετε να συνεχίσετε να χρησιμοποιείτε τις υπηρεσίες μας, ενεργοποιήστε τα cookies στο πρόγραμμα περιήγησης που χρησιμοποιείτε. Αφού ενεργοποιήσετε τα cookies στο πρόγραμμα περιήγησης, είτε ανοίξτε ένα νέο παράθυρο περιήγησης είτε επανεκκινήστε την εφαρμογή σας."
    },
    ro:{
        title:"Activați cookie-urile pentru a continua",
        subtitle: "Pentru a putea folosi în continuare serviciile, activați cookie-urile în browser-ul dumneavoastră. Imediat ce ați activat cookie-urile în browser-ul dumneavoastră, deschideți o fereastră de browser nouă sau reporniți aplicația."
    },
    sl:{
        title:"Prosimo, aktivirajte piškotke, če želite nadaljevati",
        subtitle: "Če želite naše storitve uporabljati še naprej, aktivirajte piškotke v svojem brskalniku. Ko aktivirate piškotke v svojem brskalniku, odprite novo okno brskalnika ali ponovno zaženite aplikacijo."
    },
    sk:{
        title:"Na pokračovanie aktivujte cookies",
        subtitle: "Aby ste mohli naďalej používať naše služby, aktivujte cookies vo svojom prehliadači. Keď ste vo svojom prehliadači aktivovali cookies, otvorte buď nové okno prehliadača alebo reštartujte aplikáciu."

    },
    th:{
        title:"โปรดเปิดใช้งานคุกกี",
        subtitle: "เพื่อใช้บริการของเราต่อไป โปรดเปิดใช้งานคุกกี้ในเบราว์เซอร์ของคุณ ทันทีที่คุณเปิดใช้งานคุกกี้ในเบราว์เซอร์ของคุณ โปรดเปิดหน้าต่างเบราว์เซอร์ใหม่ หรือรีสตาร์ทแอปของคุณ"
    },
    lv:{
        title:"Lūdzu, aktivizējiet sīkdatnes, lai turpinātu",
        subtitle:"Lai turpinātu izmantot mūsu pakalpojumus, lūdzu, aktivizējiet sīkdatnes savā pārlūkprogrammā. Tiklīdz pārlūkprogrammā esat aktivizējis sīkdatnes, lūdzu, atveriet jaunu pārlūkprogrammas logu vai restartējiet lietotni."
    },
    lt:{
        title:"Norėdami tęsti, aktyvinkite slapukus.",
        subtitle: "Norėdami toliau naudotis mūsų paslaugomis, savo naršyklėje aktyvinkite slapukus. Naršyklėje aktyvinę slapukus, atverkite naują naršyklės langą arba iš naujo paleiskite programą."
    },
    et:{
        title:"Jätkamiseks aktiveerige küpsised",
        subtitle: "Selleks et saaksite meie teenuseid edasi kasutada, aktiveerige oma brauseris küpsised. Niipea kui olete oma brauseris küpsised aktiveerinud, avage uus brauseriaken või taaskäivitage rakendus."
    },
    hr:{
        title:"Aktivirajte kolačiće kako biste nastavili",
        subtitle:"Kako biste se i dalje mogli koristiti našim uslugama, aktivirajte kolačiće u vašem pregledniku. Nakon aktivacije kolačića u vašem pregledniku otvorite novi prozor preglednika ili ponovno pokrenite aplikaciju."
    },
    ja:{
        title:"クッキーを有効にして、続行して下さい",
        subtitle: "当社サービスを引き続きご利用いただくためには、ブラウザでクッキーを有効にして下さい。 ブラウザでクッキーを有効にしたら、新しいブラウザウィンドウを開くか、アプリを再起動して下さい。"
    },
    ko:{
        title:"계속 진행하려면 쿠키를 활성화하십시오.",
        subtitle: "이 서비스를 계속 이용하려면 브라우저에서 쿠키를 활성화해야 합니다. 브라우저에서 쿠키를 활성화한 후 바로 새로운 브라우저 창을 열거나 앱을 다시 시작하십시오."
    },
    zh:{
        title:"请激活 Cookie 以继续",
        subtitle: "如需继续使用我们的服务，请在您的浏览器中激活 Cookie。 如果您的浏览器激活了 Cookie，请打开一个新的浏览器窗口或重新启动应用。"
    },
    ru:{
        title:"Для продолжения активируйте файлы cookie",
        subtitle: "Чтобы продолжить использование наших служб, активируйте файлы cookie в своем браузере. Как только в вашем браузере будут активированы файлы cookie, откройте новое окно браузера или перезапустите приложение."
    },
    da:{
        title:"Aktivér cookies for at fortsætte.",
        subtitle: "For at fortsætte med at bruge vores tjenester skal De aktivere cookies i Deres browser. Når De har aktiveret cookies i Deres browser, skal De enten åbne et nyt browservindue eller genstarte Deres app."
    }
};
function getQueryParams(url) {
    const queryParams = {};
    if (url.indexOf("?") >= 0) {
        const params = url.substr(url.indexOf("?") + 1).split("&");
        for (var i = 0; i < params.length; i++ ) {
          const elem = params[i];
          const pair = elem.split("=");
          let toAdd = "";
          if(pair.length>2){
            for (let index = 2; index < pair.length; index++) {
              const element = '='+pair[index];
              toAdd = toAdd+element;
            }
          }
          queryParams[pair[0]] = decodeURIComponent(pair[1])
            ? decodeURIComponent(pair[1])+toAdd
            : "";
        }
      }
    return queryParams;
}



function getChromeVersion () {     
    var raw = navigator.userAgent.match(/C(hrome|hromium|riOS)\/([0-9]+)\./);

    return( raw ? parseInt(raw[2], 10) : false);
}

function isNotSupported() {
    const ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
    const msie = ua.indexOf('MSIE '); // IE 10 or older
    const trident = ua.indexOf('Trident/'); //IE 11
    const isIE = (msie > 0 || trident > 0);
    const version = getChromeVersion();
    return !isES6() || (version && getChromeVersion()<65);
}

function getLanguage() {
    const params = getQueryParams(location.href);
    const lang = params.language ? params.language : defaultLanguage;
    return lang;
}

function getDarkmode(params){
    if(params){
        return (params.isDarkmode && params.isDarkmode=="true") || (params.isDarkmode!="false" && window.localStorage.getItem("oneid_darkmode_selected_")=="true");   
    }else{
       return window.localStorage.getItem("oneid_darkmode_selected_"+params.brand)=="true"; 
    }
}

function startLoader() {
    const params = getQueryParams(location.href);
    var brand = params.brand ? params.brand : null;
    if(!brand){
        const lparams=window.localStorage.getItem('storedParameters');
        const jsonParams = JSON.parse(lparams);
        brand=jsonParams ? jsonParams.brand : null;
    }
    var darkmode = getDarkmode(params);

    
    if(darkmode){
        document.getElementById('global-loader-overlay').style['background-color']='#242527';
        document.body.style['background-color']='#242527';
        document.body.style['background']='#242527';
    }
    
    if(brand=="mini"){
        if(darkmode){
            document.getElementById('global-loader-overlay').style['background-color']='#333333';
            document.body.style['background-color']='#333333';
            document.body.style['background']='#333333';
        }
        document.getElementById('global-loader-two').style.display='block';
    }else if(brand=="toyota"){
        document.getElementById('global-loader-three').style.display='block';
    }else if (brand=="rr"){
        document.getElementById('global-loader-four').style.display='block';
        document.getElementById('global-loader-overlay').style['background']='rgb(0,0,0)';
        document.getElementById('global-loader-overlay').style['background']='linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(40,20,50,1) 100%)';  
        document.body.style['background-color']='#000000';  
    }else if (brand=="alphabet"){
        document.getElementById('global-loader-five').style.display='block';
    }else{
        document.getElementById('global-loader').style.display='block';
    }  
}

function insertMessageBrowser(lang) {
    document.getElementById('app').style.display='flex';
    const unsupportedBrowserMessage = unsupportedBrowsersLabel[lang] ? unsupportedBrowsersLabel[lang] : unsupportedBrowsersLabel[defaultLanguage];
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');
    const chromeLabel = document.getElementById('chrome-label');
    const firefoxLabel = document.getElementById('firefox-label');
    const safariLabel = document.getElementById('safari-label');
    const edgeLabel = document.getElementById('edge-label');
    title.innerText = unsupportedBrowserMessage.title;
    subtitle.innerText = unsupportedBrowserMessage.subtitle;
    chromeLabel.innerText = unsupportedBrowserMessage.chrome_label;
    firefoxLabel.innerText = unsupportedBrowserMessage.firefox_label;
    safariLabel.innerText = unsupportedBrowserMessage.safari_label;
    edgeLabel.innerText = unsupportedBrowserMessage.edge_label;
}

function checkIsNotSupported(){
    if(isNotSupported()){
        window.location.href = 'unsupported/unsupported.html?language='+getLanguage();
    }
}

function isES6() {
    try {
        Function("() => {};"); return true;
    }
    catch(exception) {
        return false;
    }
}

function checkCookie(){
    if (navigator.cookieEnabled){
    // Create cookie
        document.cookie = "cookietest=1";
        var ret = document.cookie.indexOf("cookietest=") != -1;
        // Delete cookie
        document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
        if(!ret){
            window.location.href = 'enablecookie/enablecookie.html?language='+getLanguage();
        }
    }else{
        window.location.href = 'enablecookie/enablecookie.html?language='+getLanguage();
    }



    

}


function doBack(){
   // If no override needed, call history.back()
   window.history.go(-1);
   return false;
}

function insertMessageCookie(lang) {
    document.getElementById('app').style.display='flex';
    const enableCookieMessage = enableCookieLabel[lang] ? enableCookieLabel[lang] : enableCookieLabel[defaultLanguage];
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');
    title.innerText = enableCookieMessage.title;
    subtitle.innerText = enableCookieMessage.subtitle;
}


