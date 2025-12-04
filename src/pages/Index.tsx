import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration:", { name, email });
    alert("Спасибо за регистрацию!");
    setName("");
    setEmail("");
  };

  const testimonials = [
    {
      id: 1,
      name: "Анна Петрова",
      text: "Консультация помогла мне обрести внутреннюю гармонию и решить проблемы со здоровьем.",
      rating: 5
    },
    {
      id: 2,
      name: "Мария Иванова",
      text: "Удивительный подход к исцелению! Рекомендую всем, кто ищет путь к себе.",
      rating: 5
    }
  ];

  const articles = [
    {
      id: 1,
      title: "Путь к внутренней гармонии",
      excerpt: "Как найти баланс между телом и духом через практики осознанности...",
      date: "15 ноября 2024"
    },
    {
      id: 2,
      title: "Энергия исцеления",
      excerpt: "Раскрываем секреты работы с энергетическими потоками для здоровья...",
      date: "10 ноября 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Алхимия Исцеления
        </h1>
        
        <div className="flex justify-center mb-8">
          <img 
            src="https://cdn.poehali.dev/projects/6f1a5806-022e-4449-aba9-77b42a2763f9/files/0c0ede43-2939-49ba-a9da-f690cf14fdce.jpg" 
            alt="Фото специалиста" 
            className="w-64 h-64 rounded-full object-cover border-4 border-secondary shadow-2xl"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.open('https://t.me/your_channel', '_blank')}
          >
            <Icon name="Send" className="mr-2" size={20} />
            Телеграм канал
          </Button>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            onClick={() => window.open('https://wa.me/your_number', '_blank')}
          >
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="bg-card/80 backdrop-blur border-2 border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary">О практике</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Алхимия Исцеления — это уникальный подход к восстановлению гармонии тела, 
              разума и духа. Через древние практики и современные методики я помогаю людям 
              обрести внутренний баланс, раскрыть свой потенциал и исцелить глубинные 
              травмы. Каждая консультация — это путешествие к истинному себе.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Отзывы</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card hover:shadow-xl transition-shadow border-2 border-secondary/20">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-secondary fill-secondary" size={20} />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="text-sm font-semibold text-primary">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Статьи</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="bg-card hover:shadow-xl transition-shadow border-2 border-primary/20 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Icon name="Calendar" size={16} />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{article.title}</h3>
                <p className="text-card-foreground">{article.excerpt}</p>
                <Button variant="link" className="p-0 mt-4 text-secondary">
                  Читать далее <Icon name="ArrowRight" className="ml-1" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
          <CardContent className="p-8">
            <h2 className="text-4xl font-bold mb-8 text-center text-primary">Регистрация</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Введите ваше имя"
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Электронная почта
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@mail.com"
                  required
                  className="bg-background"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Зарегистрироваться
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>© 2024 Алхимия Исцеления. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;
