'use client';

import dynamic from 'next/dynamic';
import BubbleMenu from '@/components/BubbleMenu';
import Folder from '@/components/Folder';

const ASCIIText = dynamic(() => import('@/components/ASCIIText'), { ssr: false });
const Dock = dynamic(() => import('@/components/Dock'), { ssr: false });

const menuItems = [
  { label: 'Главная', href: '#', ariaLabel: 'Home', rotation: -8, hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' } },
  { label: 'Возможности', href: '#features', ariaLabel: 'Features', rotation: 8, hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' } },
  { label: 'Галерея', href: '#gallery', ariaLabel: 'Gallery', rotation: 8, hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' } },
  { label: 'Тарифы', href: '#pricing', ariaLabel: 'Pricing', rotation: -8, hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' } },
  { label: 'Контакты', href: '#', ariaLabel: 'Contact', rotation: 8, hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' } },
];

const dockItems = [
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, label: 'Главная', onClick: () => window.scrollTo({top:0,behavior:'smooth'}) },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>, label: 'Галерея', onClick: () => document.getElementById('gallery')?.scrollIntoView({behavior:'smooth'}) },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>, label: 'Тарифы', onClick: () => document.getElementById('pricing')?.scrollIntoView({behavior:'smooth'}) },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polyline points="18 15 12 9 6 15"/></svg>, label: 'Наверх', onClick: () => window.scrollTo({top:0,behavior:'smooth'}) },
];

const features = [
  { n: '01', title: 'Генерация изображений', desc: 'Создавайте уникальные изображения по текстовому описанию.', icon: <><rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/><path d="M6,26 L14,18 L18,22 L26,12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></> },
  { n: '02', title: 'Стилизация', desc: 'Переносите стиль одного изображения на другое.', icon: <><path d="M5,24 L10,12 L17,19 L24,8 L28,14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/><circle cx="28" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none"/></> },
  { n: '03', title: 'Вариативность', desc: 'Получайте множество вариантов на один запрос.', icon: <><rect x="5" y="5" width="10" height="10" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="17" y="5" width="10" height="10" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="5" y="17" width="10" height="10" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="17" y="17" width="10" height="10" stroke="currentColor" strokeWidth="1.5" fill="none"/></> },
  { n: '04', title: 'Быстрая генерация', desc: 'Результат за секунды.', icon: <><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M16,10 L16,16 L20,20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></> },
  { n: '05', title: 'Точный контроль', desc: 'Настройки глубины, детализации и стиля.', icon: <><path d="M16,4 L16,16 L4,16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/><path d="M16,16 L28,28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></> },
  { n: '06', title: 'Высокое качество', desc: 'Разрешение до 4K.', icon: <><path d="M8,26 L12,18 L17,22 L23,10 L27,14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/></> },
];

const Check = ({ color = '#0a0a0a' }: { color?: string }) => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" fill="none"/><path d="M8,12 L11,15 L16,9" stroke={color} strokeWidth="1.5" fill="none"/></svg>
);

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Bubble Menu */}
      <BubbleMenu
        logo={<span style={{ fontWeight: 700, fontFamily: 'Syne, sans-serif', fontSize: '1.2rem' }}>obty</span>}
        items={menuItems}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />

      {/* Hero with ASCIIText */}
      <section className="min-h-screen relative flex items-center justify-center pt-24 pb-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-28 left-8 md:left-16 w-20 h-20 float opacity-20" viewBox="0 0 80 80">
            <path d="M40,8 Q70,25 60,55 Q50,75 25,70 Q5,60 12,35 Q20,10 40,8" stroke="#0a0a0a" strokeWidth="1" fill="none"/>
          </svg>
          <svg className="absolute top-40 right-12 md:right-24 w-14 h-14 float-alt opacity-15" viewBox="0 0 50 50">
            <polygon points="25,4 46,42 4,42" stroke="#0a0a0a" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-10 px-5 py-2.5 border-2 border-ink/10 rounded-full bg-white/60">
            <svg className="w-5 h-5 float" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="7" stroke="#0a0a0a" strokeWidth="1.2" fill="none"/>
              <circle cx="10" cy="10" r="2.5" fill="#0a0a0a"/>
            </svg>
            <span className="font-[Caveat] text-lg tracking-wide">Нейросеть нового поколения</span>
          </div>

          {/* ASCII Text Component */}
          <div className="relative mb-8" style={{ height: '220px', maxWidth: '700px', margin: '0 auto' }}>
            <ASCIIText
              text="obty.ai"
              enableWaves={true}
              asciiFontSize={8}
            />
          </div>

          <p className="font-[Caveat] text-2xl sm:text-3xl md:text-4xl text-ink/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Превращаем мысли в реальность.<br/>
            <span className="text-ink font-medium">Создавайте искусство словами.</span>
          </p>

          <div className="relative max-w-2xl mx-auto mb-10">
            <div className="sketch-box bg-white rounded-3xl p-3 shadow-[6px_6px_0_#0a0a0a]">
              <div className="flex flex-col sm:flex-row items-stretch gap-2">
                <div className="flex-1 flex items-center gap-3 px-5 py-4">
                  <svg className="w-6 h-6 text-ink/30 flex-shrink-0 wiggle" viewBox="0 0 28 28">
                    <path d="M14,3 L17,10 L25,11 L19,17 L20,25 L14,21 L8,25 L9,17 L3,11 L11,10 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                  <input type="text" placeholder="Опишите, что хотите создать..." className="input-sketch w-full font-[Caveat] text-xl sm:text-2xl"/>
                </div>
                <button className="bg-ink text-white px-8 py-4 font-[Syne] font-semibold rounded-2xl hover:bg-ink/90 transition-all flex items-center justify-center gap-2 group cursor-pointer">
                  <span>Создать</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24">
                    <path d="M5,12 L19,12 M12,5 L19,12 L12,19" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {['Космический пейзаж', 'Портрет в стиле ренессанс', 'Абстрактная композиция'].map(t => (
              <button key={t} className="px-5 py-2.5 border border-ink/20 rounded-full font-[Caveat] text-lg hover:border-ink hover:bg-ink hover:text-white transition-all bg-white/50 cursor-pointer">
                &#10022; {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="font-[Caveat] text-xl text-ink/50">&mdash;</span>
              <span className="font-[Syne] text-sm font-semibold tracking-widest uppercase text-ink/50">Возможности</span>
              <span className="font-[Caveat] text-xl text-ink/50">&mdash;</span>
            </div>
            <h2 className="font-[Syne] text-5xl sm:text-6xl md:text-7xl font-bold mb-8">Что умеет obty</h2>
            <p className="font-[Caveat] text-2xl text-ink/60 max-w-2xl mx-auto">Творческие возможности без границ</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.n} className="group relative bg-white border-2 border-ink/10 rounded-3xl p-8 hover:border-ink transition-all duration-300 hover-lift">
                <div className="absolute -top-5 -left-3">
                  <svg className="w-20 h-20" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="35" stroke="#0a0a0a" strokeWidth="1.2" fill="white" strokeDasharray="6 3"/>
                    <text x="40" y="48" textAnchor="middle" fontFamily="Syne" fontSize="24" fontWeight="700">{f.n}</text>
                  </svg>
                </div>
                <div className="pt-10">
                  <div className="w-16 h-16 mb-6 border-2 border-ink/20 rounded-2xl flex items-center justify-center group-hover:border-ink group-hover:bg-ink group-hover:text-white transition-all">
                    <svg className="w-8 h-8" viewBox="0 0 32 32">{f.icon}</svg>
                  </div>
                  <h3 className="font-[Syne] text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-ink/60 leading-relaxed font-[EB_Garamond] text-lg">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery with Folders */}
      <section id="gallery" className="py-28 relative bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="font-[Caveat] text-xl text-ink/50">&mdash;</span>
              <span className="font-[Syne] text-sm font-semibold tracking-widest uppercase text-ink/50">Портфолио</span>
              <span className="font-[Caveat] text-xl text-ink/50">&mdash;</span>
            </div>
            <h2 className="font-[Syne] text-5xl sm:text-6xl md:text-7xl font-bold mb-6">Галерея работ</h2>
            <p className="font-[Caveat] text-2xl text-ink/60">Что создаёт наше сообщество</p>
          </div>

          {/* Folder Components */}
          <div className="flex flex-wrap justify-center gap-16 mb-16">
            <div className="text-center">
              <div style={{ height: 200, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Folder color="#5227FF" size={2} />
              </div>
              <p className="font-[Caveat] text-xl mt-6">Космос</p>
            </div>
            <div className="text-center">
              <div style={{ height: 200, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Folder color="#f59e0b" size={2} />
              </div>
              <p className="font-[Caveat] text-xl mt-6">Пейзажи</p>
            </div>
            <div className="text-center">
              <div style={{ height: 200, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Folder color="#10b981" size={2} />
              </div>
              <p className="font-[Caveat] text-xl mt-6">Портреты</p>
            </div>
          </div>

          <div className="text-center mt-14">
            <button className="sketch-box bg-white border-2 border-ink px-10 py-4 font-[Syne] font-semibold rounded-2xl hover:bg-ink hover:text-white transition-all cursor-pointer">
              Показать ещё
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="font-[Caveat] text-xl text-ink/50">&mdash;</span>
              <span className="font-[Syne] text-sm font-semibold tracking-widest uppercase text-ink/50">Тарифы</span>
              <span className="font-[Caveat] text-xl text-ink/50">&mdash;</span>
            </div>
            <h2 className="font-[Syne] text-5xl sm:text-6xl md:text-7xl font-bold mb-6">Тарифные планы</h2>
            <p className="font-[Caveat] text-2xl text-ink/60">Выберите подходящий вариант</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative bg-white border-2 border-ink/10 rounded-3xl p-8 hover:border-ink transition-all hover-lift">
              <div className="mb-8">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-[Syne] font-semibold tracking-wider uppercase bg-ink/5 rounded-full">Базовый</div>
                <h3 className="font-[Syne] text-2xl font-bold mb-2">Начальный</h3>
                <p className="text-ink/60">Для знакомства</p>
              </div>
              <div className="mb-8"><span className="font-[Syne] text-5xl font-bold">0&#8381;</span><span className="text-ink/60 font-[Caveat] text-xl">/месяц</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><Check /><span className="font-[EB_Garamond] text-lg">50 генераций</span></li>
                <li className="flex items-center gap-3"><Check /><span className="font-[EB_Garamond] text-lg">Базовое качество</span></li>
                <li className="flex items-center gap-3"><Check /><span className="font-[EB_Garamond] text-lg">Сообщество</span></li>
              </ul>
              <button className="w-full py-4 border-2 border-ink font-[Syne] font-semibold rounded-2xl hover:bg-ink hover:text-white transition-all cursor-pointer">Начать бесплатно</button>
            </div>
            <div className="relative bg-ink text-white rounded-3xl p-8 transform md:-translate-y-4 shadow-[8px_8px_0_rgba(0,0,0,0.2)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-white text-ink px-5 py-2 rounded-full font-[Syne] font-semibold text-sm border-2 border-ink">Популярный</div>
              </div>
              <div className="mb-8 pt-2">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-[Syne] font-semibold tracking-wider uppercase bg-white/10 rounded-full">Оптимальный</div>
                <h3 className="font-[Syne] text-2xl font-bold mb-2">Профи</h3>
                <p className="text-white/60">Для творческих людей</p>
              </div>
              <div className="mb-8"><span className="font-[Syne] text-5xl font-bold">999&#8381;</span><span className="text-white/60 font-[Caveat] text-xl">/месяц</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><Check color="white" /><span className="font-[EB_Garamond] text-lg">1000 генераций</span></li>
                <li className="flex items-center gap-3"><Check color="white" /><span className="font-[EB_Garamond] text-lg">Качество 2K</span></li>
                <li className="flex items-center gap-3"><Check color="white" /><span className="font-[EB_Garamond] text-lg">Все стили</span></li>
              </ul>
              <button className="w-full py-4 bg-white text-ink font-[Syne] font-semibold rounded-2xl hover:bg-white/90 transition-all cursor-pointer">Выбрать план</button>
            </div>
            <div className="relative bg-white border-2 border-ink/10 rounded-3xl p-8 hover:border-ink transition-all hover-lift">
              <div className="mb-8">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-[Syne] font-semibold tracking-wider uppercase bg-ink/5 rounded-full">Максимум</div>
                <h3 className="font-[Syne] text-2xl font-bold mb-2">Бизнес</h3>
                <p className="text-ink/60">Для команд и студий</p>
              </div>
              <div className="mb-8"><span className="font-[Syne] text-5xl font-bold">4999&#8381;</span><span className="text-ink/60 font-[Caveat] text-xl">/месяц</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><Check /><span className="font-[EB_Garamond] text-lg">Безлимит</span></li>
                <li className="flex items-center gap-3"><Check /><span className="font-[EB_Garamond] text-lg">Качество 4K</span></li>
                <li className="flex items-center gap-3"><Check /><span className="font-[EB_Garamond] text-lg">API доступ</span></li>
              </ul>
              <button className="w-full py-4 border-2 border-ink font-[Syne] font-semibold rounded-2xl hover:bg-ink hover:text-white transition-all cursor-pointer">Связаться с нами</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-[Syne] text-5xl sm:text-6xl md:text-7xl font-bold mb-8">Готовы творить?</h2>
          <p className="font-[Caveat] text-2xl text-ink/60 mb-12 max-w-2xl mx-auto">Присоединяйтесь к тысячам творцов</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="sketch-box bg-ink text-white px-10 py-5 font-[Syne] font-bold text-lg rounded-2xl hover:bg-ink/90 transition-all inline-flex items-center justify-center gap-3 cursor-pointer">
              Начать бесплатно
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M5,12 L19,12 M12,5 L19,12 L12,19" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
            </button>
            <button className="sketch-box bg-white border-2 border-ink px-10 py-5 font-[Syne] font-bold text-lg rounded-2xl hover:bg-ink hover:text-white transition-all cursor-pointer">Демо-версия</button>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-20 pt-16 border-t-2 border-ink/10">
            <div><div className="font-[Syne] text-4xl sm:text-5xl font-bold mb-2">50K+</div><div className="text-ink/60 font-[Caveat] text-xl">Пользователей</div></div>
            <div><div className="font-[Syne] text-4xl sm:text-5xl font-bold mb-2">2M+</div><div className="text-ink/60 font-[Caveat] text-xl">Генераций</div></div>
            <div><div className="font-[Syne] text-4xl sm:text-5xl font-bold mb-2">4.9</div><div className="text-ink/60 font-[Caveat] text-xl">Рейтинг</div></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t-2 border-ink/10 mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <a href="#" className="inline-flex items-center gap-3 mb-5">
                <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="17" stroke="#0a0a0a" strokeWidth="1.5" strokeDasharray="6 3"/>
                  <circle cx="20" cy="20" r="10" stroke="#0a0a0a" strokeWidth="1.5"/>
                  <circle cx="20" cy="20" r="4" fill="#0a0a0a"/>
                </svg>
                <span className="font-[Syne] text-2xl font-bold">obty</span>
              </a>
              <p className="text-ink/60 font-[Caveat] text-xl">Нейросеть для творчества</p>
            </div>
            <div>
              <h4 className="font-[Syne] text-sm font-bold uppercase tracking-wider mb-5">Продукт</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-ink/60 hover:text-ink transition-colors font-[Caveat] text-lg squiggle-link">Возможности</a></li>
                <li><a href="#" className="text-ink/60 hover:text-ink transition-colors font-[Caveat] text-lg squiggle-link">Тарифы</a></li>
                <li><a href="#" className="text-ink/60 hover:text-ink transition-colors font-[Caveat] text-lg squiggle-link">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-[Syne] text-sm font-bold uppercase tracking-wider mb-5">Компания</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-ink/60 hover:text-ink transition-colors font-[Caveat] text-lg squiggle-link">О нас</a></li>
                <li><a href="#" className="text-ink/60 hover:text-ink transition-colors font-[Caveat] text-lg squiggle-link">Блог</a></li>
                <li><a href="#" className="text-ink/60 hover:text-ink transition-colors font-[Caveat] text-lg squiggle-link">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-[Syne] text-sm font-bold uppercase tracking-wider mb-5">Правовая</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-ink/60 hover:text-ink transition-colors font-[Caveat] text-lg squiggle-link">Условия</a></li>
                <li><a href="#" className="text-ink/60 hover:text-ink transition-colors font-[Caveat] text-lg squiggle-link">Политика</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-ink/10 gap-4">
            <p className="text-ink/60 font-[Caveat] text-lg">&copy; 2024 obty. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Dock Component */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 pb-2">
        <Dock
          items={dockItems}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
    </div>
  );
}
