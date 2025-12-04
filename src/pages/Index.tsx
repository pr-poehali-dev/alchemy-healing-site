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
            className="w-full sm:w-auto text-lg gap-2 hover-scale"
            onClick={() => window.open('https://t.me/your_channel', '_blank')}
          >
            <Icon name="Send" size={20} />
            Telegram канал
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto text-lg gap-2 hover-scale border-2"
            onClick={() => window.open('https://wa.me/your_number', '_blank')}
          >
            <Icon name="MessageCircle" size={20} />
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-3xl animate-fade-in">
        <Card className="border-2 border-primary/10 shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 font-heading">О практике</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Добро пожаловать в пространство трансформации и исцеления. Я помогаю людям обрести внутреннюю гармонию, 
              восстановить энергетический баланс и раскрыть свой истинный потенциал.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Используя древние техники и современные подходы, мы вместе создадим путь к вашему обновлению и 
              глубинным изменениям на всех уровнях бытия.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 py-16 animate-fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 font-heading">Отзывы</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover-scale border-primary/10 shadow-md">
              <CardContent className="p-6">
                <div className="flex mb-3 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-sm font-semibold text-primary">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 animate-fade-in">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 font-heading">Статьи и материалы</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {articles.map((article) => (
            <Card key={article.id} className="hover-scale border-primary/10 shadow-md text-left cursor-pointer transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Icon name="Calendar" size={16} />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 font-heading">{article.title}</h3>
                <p className="text-gray-700 mb-4">{article.excerpt}</p>
                <div className="flex items-center text-primary font-semibold">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-1" size={18} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-md animate-fade-in">
        <Card className="border-2 border-primary/20 shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 font-heading">Оставьте заявку</h2>
            <p className="text-gray-600 mb-6 text-center">
              Заполните форму, и я свяжусь с вами для записи на консультацию
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  required
                  className="border-2"
                />
              </div>
              <div>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Электронная почта"
                  required
                  className="border-2"
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg hover-scale">
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-heading mb-2">Алхимия Исцеления</p>
          <p className="text-gray-400">Трансформация • Исцеление • Гармония</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;