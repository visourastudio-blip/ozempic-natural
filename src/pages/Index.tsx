import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Star,
  AlertCircle,
  ArrowRight,
  Package,
  ShieldCheck,
  Zap,
  Leaf,
} from "lucide-react";

import WhatsAppIcon from "@/components/WhatsAppIcon";
import FAQ from "@/components/FAQ";

import productBottles from "@/assets/product-bottles.jpeg";
import productSingle from "@/assets/product-single.png";
import productCapsules from "@/assets/product-capsules.jpg";
import productLifestyle from "@/assets/product-lifestyle.jpg";
import beforeAfter from "@/assets/before-after.jpeg";
import productBottleNew from "@/assets/product-bottle-new.jpeg";
import productBottleFront from "@/assets/product-bottle-front.jpeg";
import productBottleLifestyle from "@/assets/product-bottle-lifestyle.jpeg";
import productBottlesDuo from "@/assets/product-bottles-duo.jpeg";
import productBottlesTrio from "@/assets/product-bottles-trio.jpeg";
import avatarCarla from "@/assets/avatar-carla.jpg";
import avatarRoberto from "@/assets/avatar-roberto.jpg";
import avatarAna from "@/assets/avatar-ana.webp";

/* ── Shared animation config ── */
const ease = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease },
};

/* ── Toast ── */
const Toast = ({ show, message }: { show: boolean; message: string }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-surface-dark px-6 py-3 rounded-pill shadow-elevated flex items-center gap-3"
      >
        <div className="bg-primary rounded-full p-1">
          <CheckCircle2 size={16} className="text-primary-foreground" />
        </div>
        <span className="text-sm font-medium text-primary-foreground">
          {message}
        </span>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ── Main Page ── */
const Index = () => {
  const [showToast, setShowToast] = useState(false);
  const offerRef = useRef<HTMLDivElement>(null);

  const scrollToOffer = () =>
    offerRef.current?.scrollIntoView({ behavior: "smooth" });

  const handlePurchase = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const whatsappUrl = "https://wa.me/5544988093519";

  return (
    <div className="bg-background text-foreground font-sans selection:bg-accent/30">
      <Toast show={showToast} message="Produto adicionado ao carrinho!" />

      {/* ─── NAV ─── */}
      <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">
            Ozempic<span className="text-primary">Natural</span>
          </span>
          <div />

        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="pt-32 pb-20 px-6 md:pt-40 md:pb-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.12] tracking-tight text-balance mb-8">
              Imagine acordar e sentir que seu corpo{" "}
              <span className="text-primary">voltou ao controle.</span>
            </h1>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground mb-6 text-pretty">
              <p>Sem aquela fome descontrolada.</p>
              <p>Sem aquela ansiedade por comida o tempo todo.</p>
              <p>
                Com <strong className="text-foreground">Ozempic Natural</strong>
                , cada cápsula começa a trabalhar silenciosamente no seu
                organismo, ajudando a equilibrar o metabolismo e trazendo uma
                sensação natural de saciedade.
              </p>
            </div>
            <ul className="space-y-2 text-muted-foreground mb-10">
              {[
                "menos vontade de beliscar o dia inteiro",
                "mais leveza após as refeições",
                "mais controle sobre o que come",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2
                    size={18}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mb-10 italic">
              É como se seu corpo finalmente voltasse a cooperar com você.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                onClick={scrollToOffer}
                className="px-8 py-4 rounded-pill bg-primary text-primary-foreground font-semibold shadow-elevated hover:shadow-primary/20 transition-all active:scale-95 will-change-transform text-lg"
              >
                Quero Começar Minha Transformação
              </button>
              <div>
                <div className="text-2xl font-bold">R$ 97,00</div>
                <div className="text-sm text-primary font-medium mt-1">
                  Frete Grátis para todo Brasil — entrega em 5 a 10 dias úteis
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/20 rounded-[3rem] overflow-hidden flex items-center justify-center p-8">
              <motion.img
                src={productBottles}
                alt="Ozempic Natural - 3 frascos do suplemento"
                className="w-full h-full object-contain drop-shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease }}
              />
            </div>
            <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-card p-5 md:p-6 rounded-outer shadow-elevated border border-border max-w-[200px]">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="hsl(var(--primary))"
                    className="text-primary"
                  />
                ))}
              </div>
              <p className="text-xs font-medium text-muted-foreground italic">
                "Finalmente consegui parar de beliscar toda hora."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROBLEM / SOLUTION ─── */}
      <section className="py-20 md:py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Não é falta de força de vontade.
            </h2>
            <p className="text-lg text-muted-foreground">
              O verdadeiro problema muitas vezes é o desequilíbrio do
              metabolismo e da saciedade.
            </p>
          </motion.div>

          {/* Fitness results gallery */}
          <motion.div {...fadeUp} className="max-w-2xl mx-auto mb-16">
            <div className="text-center mb-4">
              <p className="text-xl font-semibold">Jaqueline</p>
              <p className="text-muted-foreground">92kg → 66kg</p>
            </div>
            <div className="rounded-outer overflow-hidden group">
              <img
                src={beforeAfter}
                alt="Resultado real - antes e depois da transformação"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Problem list */}
          <motion.div {...fadeUp} className="max-w-2xl mx-auto mb-16">
            <p className="text-muted-foreground mb-6 text-center">
              Milhares de pessoas vivem presas no mesmo ciclo:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground mb-10">
              {[
                "dietas que duram poucos dias",
                "fome constante",
                "efeito sanfona",
                "metabolismo lento",
                "dificuldade para perder gordura",
                "ciclo sem fim",
              ].map((t) => (
                <div
                  key={t}
                  className="bg-muted rounded-inner px-4 py-3 text-center"
                >
                  {t}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap size={22} />,
                title: "Metabolismo Ativo",
                desc: "Contribui para um metabolismo mais ativo e queima natural.",
              },
              {
                icon: <ShieldCheck size={22} />,
                title: "Controle Glicêmico",
                desc: "Ajuda no equilíbrio da glicose no sangue.",
              },
              {
                icon: <Leaf size={22} />,
                title: "Saciedade Real",
                desc: "Auxilia no controle do apetite de forma natural.",
              },
              {
                icon: <CheckCircle2 size={22} />,
                title: "Fórmula Natural",
                desc: "Sem efeitos colaterais químicos, seguro para uso diário.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="p-8 rounded-outer bg-background shadow-elegant hover:shadow-elevated transition-shadow"
              >
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-inner flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-semibold text-center mb-16"
          >
            Conheça o Produto
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: productBottles, alt: "3 frascos Ozempic Natural" },
              { src: productSingle, alt: "Frasco individual" },
              { src: productCapsules, alt: "Cápsulas do suplemento" },
              { src: productBottleNew, alt: "Frasco Ozempic Natural" },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="aspect-square rounded-outer overflow-hidden bg-muted group"
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}

          </div>

          {/* Ingredients */}
          <motion.div {...fadeUp} className="mt-20">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4">
              🧪 Ingredientes Naturais
            </h3>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Cada cápsula combina ingredientes selecionados pela ciência para auxiliar no controle do apetite e do metabolismo.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Psyllium",
                  emoji: "🌾",
                  points: [
                    "Fibra vegetal que absorve água no estômago",
                    "Aumenta a sensação de saciedade",
                    "Ajuda no funcionamento do intestino",
                  ],
                },
                {
                  name: "Glucomanano",
                  emoji: "🌿",
                  points: [
                    "Fibra extraída da raiz konjac",
                    "Forma um gel no estômago",
                    "Pode ajudar a reduzir a fome",
                  ],
                },
                {
                  name: "Berberina",
                  emoji: "🧬",
                  points: [
                    "Composto vegetal usado em suplementos metabólicos",
                    "Estudada por ajudar no controle da glicose",
                  ],
                },
                {
                  name: "Feno-grego",
                  emoji: "🍃",
                  points: [
                    "Planta rica em fibras e compostos bioativos",
                    "Pode ajudar na saciedade e metabolismo",
                  ],
                },
                {
                  name: "Chá Verde",
                  emoji: "🍵",
                  points: [
                    "Fonte de cafeína natural",
                    "Estimula levemente o metabolismo",
                  ],
                },
                {
                  name: "Cromo",
                  emoji: "⚡",
                  points: [
                    "Mineral (picolinato de cromo)",
                    "Auxilia no metabolismo de carboidratos",
                  ],
                },
              ].map((ing, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease }}
                  className="p-6 rounded-outer bg-card border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {ing.emoji}
                  </div>
                  <h4 className="font-bold text-base mb-3">{ing.name}</h4>
                  <ul className="space-y-2">
                    {ing.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SOCIAL PROOF ─── */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Histórias Reais de Resultados Reais
            </h2>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              {[
                { num: "5.000+", label: "Clientes satisfeitos" },
                { num: "4,8/5", label: "Avaliação média" },
                { num: "93%", label: "Recomendam" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {s.num}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Finalmente consegui parar de beliscar toda hora. Minha relação com a comida mudou completamente.",
                name: "Carla M.",
                stars: 5,
                avatar: avatarCarla,
              },
              {
                text: "Minha fome diminuiu muito. Já nas primeiras semanas senti diferença no apetite e na disposição.",
                name: "Roberto S.",
                stars: 5,
                avatar: avatarRoberto,
              },
              {
                text: "Estou conseguindo seguir minha dieta sem sofrimento. Recomendo demais para quem luta com a fome.",
                name: "Ana P.",
                stars: 5,
                avatar: avatarAna,
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="bg-card p-8 rounded-outer shadow-elegant"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      fill="hsl(var(--primary))"
                      className="text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover object-top" />
                  <p className="font-semibold text-sm">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GUARANTEE ─── */}
      <section className="py-16 md:py-20 px-6 bg-card">
        <motion.div
          {...fadeUp}
          className="max-w-2xl mx-auto text-center bg-background rounded-outer p-10 md:p-14 border border-border shadow-elegant"
        >
          <div className="text-5xl mb-6">🛡️</div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Garantia de 30 dias
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Se você não ficar satisfeito por qualquer motivo, devolvemos{" "}
            <strong className="text-foreground">100% do seu dinheiro</strong>.
            Sem burocracia, sem perguntas.
          </p>
        </motion.div>
      </section>

      {/* ─── SCARCITY ─── */}
      <section className="py-20 md:py-32 px-6 bg-surface-dark text-primary-foreground overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-[0.05] pointer-events-none">
          <Package size={400} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div {...fadeUp} className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-pill bg-accent/20 text-accent text-sm font-bold mb-6">
              <AlertCircle size={14} /> ESTOQUE LIMITADO
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
              Lotes limitados devido à alta demanda.
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-4 max-w-xl">
              Devido à alta demanda, a produção é feita em lotes limitados. Nos
              últimos meses, diversos estoques se esgotaram rapidamente.
            </p>
            <p className="text-primary-foreground/60 text-lg mb-8 max-w-xl">
              Quando o lote atual acabar, o próximo pode levar semanas para ser
              liberado. Aproveite enquanto ainda há unidades disponíveis.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-2 w-48 bg-primary-foreground/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "100%" }}
                  whileInView={{ width: "15%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="h-full bg-accent rounded-full"
                />
              </div>
              <span className="text-sm font-bold text-accent">
                Apenas 12 unidades restando
              </span>
            </div>
          </motion.div>
          <button
            onClick={scrollToOffer}
            className="px-8 py-4 rounded-pill bg-accent text-accent-foreground font-semibold shadow-elevated hover:brightness-110 transition-all active:scale-95 will-change-transform text-lg shrink-0"
          >
            Garantir Meu Kit
          </button>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ />

      {/* ─── FINAL OFFER ─── */}
      <section id="offer" className="py-20 md:py-32 px-6">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
        >
          Escolha Seu Kit
        </motion.h2>
        <div
          ref={offerRef}
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8"
        >
          {[
            {
              img: productSingle,
              title: "1 Ozempic Natural",
              days: "30 dias",
              originalPrice: "R$ 197,00",
              price: "R$ 97,00",
              highlight: false,
            },
            {
              img: productBottles,
              title: "2 Ozempic Natural",
              days: "60 dias",
              originalPrice: "R$ 394,00",
              price: "R$ 179,00",
              highlight: true,
            },
            {
              img: productCapsules,
              title: "3 Ozempic Natural",
              days: "90 dias",
              originalPrice: "R$ 591,00",
              price: "R$ 270,00",
              highlight: false,
            },
          ].map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className={`bg-card rounded-[2.5rem] p-8 md:p-10 shadow-elevated border text-center relative ${
                offer.highlight
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border"
              }`}
            >
              {offer.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-pill uppercase tracking-wider">
                  Mais Popular
                </div>
              )}
              <div className="mb-8">
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="w-32 h-32 object-contain mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-muted-foreground">Tratamento para {offer.days}</p>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Preço Original</span>
                  <span className="line-through text-muted-foreground">
                    {offer.originalPrice}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-bold text-lg">Preço Promocional</span>
                  <span className="text-3xl font-bold text-primary">
                    {offer.price}
                  </span>
                </div>
              </div>

              <button
                onClick={handlePurchase}
                className="w-full py-5 rounded-pill bg-primary text-primary-foreground font-semibold shadow-elevated hover:shadow-primary/20 transition-all active:scale-95 will-change-transform text-lg flex items-center justify-center gap-3"
              >
                Comprar Agora <ArrowRight size={20} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* ─── PAYMENT TRUST ICONS ─── */}
        <motion.div
          {...fadeUp}
          className="max-w-3xl mx-auto mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-muted-foreground"
        >
          {[
            { emoji: "🔒", label: "Compra Segura" },
            { emoji: "💳", label: "Visa" },
            { emoji: "💳", label: "Mastercard" },
            { emoji: "⚡", label: "Pix" },
            { emoji: "🏦", label: "Boleto" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <span className="text-xl">{item.emoji}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* WhatsApp Button */}
        <motion.div {...fadeUp} className="flex justify-center mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-pill bg-[#25D366] text-white font-semibold text-lg hover:brightness-110 transition-all active:scale-95 shadow-elevated"
          >
            <WhatsAppIcon size={24} />
            WhatsApp
          </a>
        </motion.div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-16 md:py-20 px-6 border-t border-border bg-card text-muted-foreground text-sm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <span className="font-bold text-lg tracking-tight text-foreground block mb-6">
              Ozempic<span className="text-primary">Natural</span>
            </span>
            <p>© 2024 Todos os direitos reservados.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-foreground uppercase text-xs tracking-widest">
              Políticas
            </h4>
            <p className="hover:text-primary cursor-pointer transition-colors">
              Termos de Uso
            </p>
            <p className="hover:text-primary cursor-pointer transition-colors">
              Privacidade
            </p>
            <p className="hover:text-primary cursor-pointer transition-colors">
              Devolução
            </p>
          </div>
          <div>
            <h4 className="font-bold text-foreground uppercase text-xs tracking-widest mb-4">
              Aviso Legal
            </h4>
            <p className="leading-relaxed">
              Este produto não substitui orientações médicas. Os resultados
              podem variar de pessoa para pessoa.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
