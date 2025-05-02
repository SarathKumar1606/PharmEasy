import React from 'react';
import { Accordion } from 'react-bootstrap';
import './FAQ.css'; 

const FAQ = () => {
  const faqs = [
    {
      question: 'How can I order medicines online?',
      answer: 'You can order medicines online by searching for the required medicine, adding it to your cart, and proceeding to checkout. Uploading a valid prescription may be required for certain medicines.',
    },
    {
      question: 'Is it safe to buy medicines online?',
      answer: 'Yes, it is safe to buy medicines online from trusted platforms like PharmaCare. We ensure that all medicines are sourced from licensed pharmacies and manufacturers.',
    },
    {
      question: 'Do I need a prescription to order medicines?',
      answer: 'For prescription medicines, you need to upload a valid prescription from a registered medical practitioner. Over-the-counter (OTC) medicines can be purchased without a prescription.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept various payment methods, including credit/debit cards, net banking, UPI, and cash on delivery (COD) for eligible orders.',
    },
    {
      question: 'How long does delivery take?',
      answer: 'Delivery times vary depending on your location. Typically, orders are delivered within 1-3 business days.',
    },
    {
      question: 'Can I return or exchange medicines?',
      answer: 'Returns or exchanges are allowed only for damaged or incorrect products. Please contact our support team within 48 hours of delivery for assistance.',
    },
    {
      question: 'Are there any discounts or offers available?',
      answer: 'Yes, we frequently offer discounts and promotional deals. Check our "Offers" section for the latest deals.',
    },
    {
      question: 'How can I track my order?',
      answer: 'You can track your order by logging into your account and visiting the "My Orders" section. You will also receive updates via email and SMS.',
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0" className="faq-accordion">
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;