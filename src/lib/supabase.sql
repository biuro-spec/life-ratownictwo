-- ============================================================
-- LIFE Ratownictwo – Panel KPP  |  Supabase SQL schema
-- Uruchom w: Supabase Dashboard → SQL Editor
-- ============================================================

-- Tabela terminów kursów
create table if not exists public.kpp_courses (
  id          uuid primary key default gen_random_uuid(),
  title       text not null default 'Kurs KPP – Kwalifikowana Pierwsza Pomoc',
  date_start  date not null,
  date_end    date not null,
  location    text not null default 'Racibórz',
  max_seats   int  not null default 20,
  price       int  not null default 1499,  -- grosze → 1499 = 14.99 zł, tu jako złote
  description text,
  is_active   boolean not null default true,
  created_at  timestamptz default now()
);

-- Tabela zgłoszeń uczestników
create table if not exists public.kpp_enrollments (
  id              uuid primary key default gen_random_uuid(),
  course_id       uuid references public.kpp_courses(id),
  first_name      text not null,
  last_name       text not null,
  email           text not null,
  phone           text not null,
  pesel           text,
  organization    text,
  notes           text,
  status          text not null default 'pending'
                  check (status in ('pending','paid','confirmed','cancelled')),
  payment_ref     text,
  created_at      timestamptz default now()
);

-- Tabela kont uczestników (powiązana z Supabase Auth)
create table if not exists public.kpp_participants (
  id              uuid primary key references auth.users(id) on delete cascade,
  enrollment_id   uuid references public.kpp_enrollments(id),
  first_name      text,
  last_name       text,
  email           text,
  course_id       uuid references public.kpp_courses(id),
  access_granted  boolean not null default false,
  created_at      timestamptz default now()
);

-- Tabela materiałów szkoleniowych
create table if not exists public.kpp_materials (
  id          uuid primary key default gen_random_uuid(),
  course_id   uuid references public.kpp_courses(id),
  title       text not null,
  description text,
  type        text not null check (type in ('pdf','video','link','test')),
  url         text,
  sort_order  int default 0,
  is_active   boolean default true,
  created_at  timestamptz default now()
);

-- RLS: tylko zalogowani uczestnicy widzą swoje dane
alter table public.kpp_participants enable row level security;
alter table public.kpp_materials    enable row level security;
alter table public.kpp_enrollments  enable row level security;
alter table public.kpp_courses      enable row level security;

-- Kursy widoczne dla wszystkich (publiczne)
create policy "Kursy publiczne" on public.kpp_courses
  for select using (is_active = true);

-- Zgłoszenia: każdy może dodać swoje, tylko właściciel widzi
create policy "Dodaj zgloszenie" on public.kpp_enrollments
  for insert with check (true);

-- Uczestnik widzi tylko swój rekord
create policy "Uczestnik widzi siebie" on public.kpp_participants
  for select using (auth.uid() = id);

create policy "Uczestnik aktualizuje siebie" on public.kpp_participants
  for update using (auth.uid() = id);

-- Materiały widoczne dla uczestników z dostępem
create policy "Materialy dla uczestnikow" on public.kpp_materials
  for select using (
    exists (
      select 1 from public.kpp_participants p
      where p.id = auth.uid()
        and p.course_id = kpp_materials.course_id
        and p.access_granted = true
    )
  );

-- Przykładowe dane testowe
insert into public.kpp_courses (title, date_start, date_end, location, max_seats, price, description) values
(
  'Kurs KPP – Kwalifikowana Pierwsza Pomoc',
  '2026-06-14',
  '2026-06-22',
  'Racibórz, ul. Rudzka 14',
  20,
  1499,
  'Kurs realizowany zgodnie z Rozporządzeniem MZ. 66 godzin (25h teoria online + 41h zajęcia praktyczne). Certyfikat MZ.'
),
(
  'Kurs KPP – Kwalifikowana Pierwsza Pomoc',
  '2026-07-12',
  '2026-07-20',
  'Racibórz, ul. Rudzka 14',
  20,
  1499,
  'Kurs realizowany zgodnie z Rozporządzeniem MZ. 66 godzin (25h teoria online + 41h zajęcia praktyczne). Certyfikat MZ.'
);
