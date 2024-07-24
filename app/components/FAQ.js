"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the FAQ if it's already open
    } else {
      setOpenIndex(index); // Open the clicked FAQ and close others
    }
  };

  const faqs = [
    {
      question: 'Pourquoi acheter sur Neolli plutôt qu\'en direct auprès de la marque ?',
      answer: 'Pourquoi acheter sur Neolli plutôt qu\'en direct auprès de la marque ?'
    },
    {
      question: 'Qui peut acheter sur Neolli ?',
      answer: 'Qui peut acheter sur Neolli ?'
    },
    {
      question: 'Combien coûte Neolli à un commerçant ?',
      answer: 'Combien coûte Neolli à un commerçant ?'
    },
    {
      question: 'Quels sont les pays autorisés à acheter sur Neolli ?',
      answer: 'Quels sont les pays autorisés à acheter sur Neolli ?'
    }
  ];

  return (
    <div className='bg-[#FFEDD8] w-full py-12 px-3 sm:px-7'>
      <h2 className='text-[30px] sm:text-[39px] text-[#7E5728] leading-[45.67px] font-medium text-center'>Questions fréquentes</h2>
      <div className='mt-12 max-w-[1166px] mx-auto w-full'>
        {faqs.map((faq, index) => (
          <div key={index} className='border-t-[0.5px] border-[#7E5728] flex flex-col gap-4 py-7 sm:py-10'>
            <div className='flex items-start justify-between gap-3'>
              <h2 className='text-[#7E5728] text-[22px] leading-[25.75px] font-normal text-left'>{faq.question}</h2>
              <button onClick={() => toggleFAQ(index)}>
                <Image src='/assets/arrow.svg' alt='Arrow' width={30} height={19}   className={`transition-all duration-200 min-h-[19px] min-w-[30px] ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {openIndex === index && <p className='text-[#7E5728] text-[22px] leading-[25.75px] font-normal text-left'>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
