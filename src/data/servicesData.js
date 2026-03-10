export const services = [
    {
        id: 1,
        icon: 'Ambulance',
        title: 'Transport sanitarny leżący',
        shortDesc: 'Profesjonalny przewóz pacjentów leżących z pełnym wyposażeniem medycznym i wykwalifikowaną załogą.',
        description: 'Zapewniamy bezpieczny transport pacjentów leżących w specjalistycznie wyposażonych ambulansach. Każdy pojazd posiada nosze transportowe, sprzęt do monitorowania parametrów życiowych oraz wykwalifikowany personel medyczny. Realizujemy transporty między szpitalami, z domu do placówki medycznej i z powrotem.',
        features: ['Nosze transportowe', 'Monitoring parametrów życiowych', 'Wykwalifikowany personel', 'Transport 24/7']
    },
    {
        id: 2,
        icon: 'Accessibility',
        title: 'Transport sanitarny siedzący',
        shortDesc: 'Komfortowy przewóz pacjentów siedzących z pomocą przy wsiadaniu i wysiadaniu.',
        description: 'Transport pacjentów siedzących z profesjonalną asystą. Nasz personel pomoże pacjentowi przy wsiadaniu i wysiadaniu z pojazdu, a w razie potrzeby zapewni krzesło transportowe do pokonywania schodów. Idealne rozwiązanie na wizyty lekarskie, zabiegi czy rehabilitację.',
        features: ['Krzesło transportowe', 'Pomoc przy wsiadaniu', 'Klimatyzowane pojazdy', 'Punktualność']
    },
    {
        id: 3,
        icon: 'ShieldCheck',
        title: 'Przewozy NFZ',
        shortDesc: 'Transport medyczny realizowany w ramach umów z Narodowym Funduszem Zdrowia.',
        description: 'Realizujemy transporty medyczne w ramach kontraktów z NFZ. Współpracujemy z przychodniami POZ, szpitalami i placówkami specjalistycznymi w regionie. Pacjenci korzystający z transportu NFZ nie ponoszą dodatkowych kosztów - wystarczy skierowanie od lekarza.',
        features: ['Bez dodatkowych kosztów', 'Skierowanie od lekarza', 'Współpraca z POZ', 'Regularne trasy']
    },
    {
        id: 4,
        icon: 'Building2',
        title: 'Transport szpitalny',
        shortDesc: 'Niezawodny transport między placówkami medycznymi w regionie i poza nim.',
        description: 'Specjalizujemy się w transporcie międzyszpitalnym na terenie województwa śląskiego i opolskiego. Współpracujemy ze Szpitalem w Raciborzu, ScanMed Racibórz oraz innymi placówkami medycznymi. Zapewniamy szybki i bezpieczny transport pacjentów między oddziałami i placówkami.',
        features: ['Transport międzyszpitalny', 'Współpraca ze szpitalami', 'Szybka realizacja', 'Pełne wyposażenie']
    },
    {
        id: 5,
        icon: 'Car',
        title: 'Transport prywatny',
        shortDesc: 'Indywidualne zlecenia transportu medycznego dla pacjentów prywatnych.',
        description: 'Oferujemy transport medyczny na indywidualne zlecenia. Niezależnie czy potrzebujesz przewozu na wizytę lekarską, rehabilitację czy do sanatorium - zapewnimy bezpieczny i komfortowy transport. Realizujemy również transporty dalekobieżne na terenie całej Polski.',
        features: ['Indywidualne podejście', 'Elastyczne terminy', 'Konkurencyjne ceny', 'Cała Polska']
    },
    {
        id: 6,
        icon: 'MapPin',
        title: 'Transport międzymiastowy',
        shortDesc: 'Dalekobieżny transport medyczny poza region Raciborza i województwo śląskie.',
        description: 'Realizujemy transporty medyczne na dłuższych trasach - zarówno w obrębie województwa śląskiego i opolskiego, jak i na terenie całej Polski. Transport międzymiastowy obejmuje przewóz pacjentów do specjalistycznych ośrodków medycznych, sanatoriów i klinik.',
        features: ['Trasy ogólnopolskie', 'Komfort na długich trasach', 'GPS monitoring', 'Doświadczona załoga']
    }
];

export const teamMembers = [
    { id: 1, name: 'Mariusz', role: 'Dyspozytor / Współwłaściciel', initials: 'M', description: 'Koordynacja zleceń i zarządzanie flotą. Ponad 10 lat doświadczenia w branży transportu medycznego.' },
    { id: 2, name: 'Natka', role: 'Dyspozytor', initials: 'N', description: 'Obsługa zleceń i kontakt z pacjentami. Dbałość o najwyższy standard obsługi.' },
    { id: 3, name: 'Krzysztof', role: 'Ratownik medyczny', initials: 'K', description: 'Wykwalifikowany ratownik medyczny z wieloletnim doświadczeniem w transporcie sanitarnym.' },
    { id: 4, name: 'Aleks', role: 'Ratownik medyczny', initials: 'A', description: 'Specjalista ds. transportu pacjentów leżących. Certyfikowany ratownik medyczny.' },
    { id: 5, name: 'Waldemar', role: 'Kierowca / Ratownik', initials: 'W', description: 'Doświadczony kierowca ambulansu z uprawnieniami ratownika medycznego.' },
    { id: 6, name: 'Dawid', role: 'Kierowca / Ratownik', initials: 'D', description: 'Profesjonalny kierowca z doskonałą znajomością regionu i umiejętnościami ratowniczymi.' },
    { id: 7, name: 'Piotrek', role: 'Kierowca / Ratownik', initials: 'P', description: 'Niezawodny członek zespołu z pasją do niesienia pomocy i wieloletnim doświadczeniem.' },
];

export const fleet = [
    {
        id: 1,
        name: 'Ambulans 1',
        type: 'Transport sanitarny',
        features: ['Nosze transportowe', 'Krzesło kardiologiczne', 'Tlen medyczny', 'Defibrylator AED', 'Klimatyzacja', 'GPS Tracking'],
    },
    {
        id: 2,
        name: 'Ambulans 2',
        type: 'Transport sanitarny',
        features: ['Nosze transportowe', 'Krzesło schodowe', 'Tlen medyczny', 'Zestaw pierwszej pomocy', 'Klimatyzacja', 'GPS Tracking'],
    },
    {
        id: 3,
        name: 'Ambulans 3',
        type: 'Transport medyczny',
        features: ['Nosze transportowe', 'Krzesło transportowe', 'Tlen medyczny', 'Monitor parametrów', 'Klimatyzacja', 'GPS Tracking'],
    },
];
