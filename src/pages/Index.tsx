import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Мария Смирнова</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="hidden md:inline-flex">Записаться</Button>
        </div>
      </header>

      <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://cdn.poehali.dev/projects/ac0d6d38-1bef-4310-874d-a528daa6d793/files/da009d44-f396-47a0-a2a9-f23d6f7da78d.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                Путь к здоровью через питание
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Нутрициолог с 8-летним опытом. Помогаю восстановить здоровье ЖКТ, 
                наладить гормональный баланс и обрести гармонию с телом через правильное питание
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/ac0d6d38-1bef-4310-874d-a528daa6d793/files/d8d63af1-c49d-4dd7-9ee7-be47915843ab.jpg" 
                  alt="Мария Смирнова" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-full blur-3xl opacity-50" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Мои услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Индивидуальный подход к каждому клиенту с учетом особенностей организма
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Apple" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Правильное питание</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Разработка индивидуального плана питания с учетом ваших целей, 
                  образа жизни и пищевых предпочтений
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Восстановление ЖКТ</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Комплексный подход к решению проблем пищеварения, 
                  устранение дискомфорта и нормализация работы кишечника
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Activity" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Гормональный баланс</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Коррекция питания при гормональных и метаболических нарушениях, 
                  восстановление баланса организма
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 p-8 bg-background rounded-3xl border-2 border-secondary">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-4">Дополнительные услуги</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-secondary mt-1" size={20} />
                    <span className="text-muted-foreground">Составление меню на неделю/месяц</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-secondary mt-1" size={20} />
                    <span className="text-muted-foreground">Подбор БАДов и витаминов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-secondary mt-1" size={20} />
                    <span className="text-muted-foreground">Сопровождение в течение курса</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-secondary mt-1" size={20} />
                    <span className="text-muted-foreground">Анализ пищевого дневника</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/ac0d6d38-1bef-4310-874d-a528daa6d793/files/7a14417a-38be-4666-bc09-1adb9fd474b3.jpg" 
                  alt="Workspace" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">
              Реальные истории людей, которые изменили свою жизнь
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">А</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Анна</p>
                    <p className="text-sm text-muted-foreground">32 года</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Спасибо Марии за профессионализм! За 3 месяца работы удалось полностью 
                  наладить пищеварение и избавиться от постоянного дискомфорта"
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">Е</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Елена</p>
                    <p className="text-sm text-muted-foreground">28 лет</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Наконец-то нашла специалиста, который помог разобраться с гормональными 
                  проблемами. Индивидуальный подход и постоянная поддержка - это важно!"
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">М</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Мария</p>
                    <p className="text-sm text-muted-foreground">35 лет</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "Программа питания составлена с учетом всех моих особенностей. 
                  Результат превзошел ожидания - чувствую легкость и энергию каждый день!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Свяжитесь со мной</h2>
              <p className="text-lg text-muted-foreground">
                Запишитесь на консультацию и начните путь к здоровью
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-primary">Контактная информация</h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Телефон</p>
                    <a href="tel:+79001234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (900) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:maria@nutrition.ru" className="text-muted-foreground hover:text-primary transition-colors">
                      maria@nutrition.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Telegram</p>
                    <a href="https://t.me/mariasmirnova" className="text-muted-foreground hover:text-primary transition-colors">
                      @mariasmirnova
                    </a>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-sm text-muted-foreground mb-3">Следите за мной в соцсетях:</p>
                  <div className="flex gap-3">
                    <Button size="icon" variant="outline" className="rounded-full">
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full">
                      <Icon name="Facebook" size={20} />
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full">
                      <Icon name="Youtube" size={20} />
                    </Button>
                  </div>
                </div>
              </div>

              <Card className="animate-scale-in">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Ваше имя
                      </label>
                      <Input placeholder="Как вас зовут?" className="border-2" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Телефон или Email
                      </label>
                      <Input placeholder="Как с вами связаться?" className="border-2" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Сообщение
                      </label>
                      <Textarea 
                        placeholder="Расскажите о вашей ситуации..." 
                        rows={5}
                        className="border-2"
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground">
            © 2024 Мария Смирнова. Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}
