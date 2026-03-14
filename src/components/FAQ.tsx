import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ease = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease },
};

const faqs = [
  {
    q: "O que é o Ozempic Natural?",
    a: "É um suplemento natural desenvolvido para auxiliar no controle do apetite, equilíbrio da glicose e aceleração do metabolismo, sem efeitos colaterais químicos.",
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "A maioria dos clientes relata redução da fome e mais controle alimentar já nas primeiras semanas de uso contínuo.",
  },
  {
    q: "Tem efeitos colaterais?",
    a: "Não. A fórmula é 100% natural e segura para uso diário. Sempre consulte seu médico em caso de dúvidas.",
  },
  {
    q: "Como devo tomar?",
    a: "Tome 2 cápsulas por dia, preferencialmente antes das principais refeições, com um copo de água.",
  },
  {
    q: "Qual a política de devolução?",
    a: "Oferecemos garantia de satisfação. Se não estiver satisfeito, entre em contato conosco para iniciar o processo de devolução.",
  },
  {
    q: "O frete é realmente grátis?",
    a: "Sim! Frete grátis para todo o Brasil, sem nenhum custo adicional.",
  },
];

const FAQ = () => (
  <section className="py-20 md:py-32 px-6 bg-card">
    <div className="max-w-3xl mx-auto">
      <motion.h2
        {...fadeUp}
        className="text-3xl md:text-4xl font-semibold text-center mb-16"
      >
        Perguntas Frequentes
      </motion.h2>
      <motion.div {...fadeUp}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background rounded-outer px-6 border border-border shadow-elegant"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQ;
