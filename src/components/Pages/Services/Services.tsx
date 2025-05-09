import React, { useState } from 'react';
import { MdDone, MdOutlineClose } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GiCutDiamond } from "react-icons/gi";
import { IoRocketOutline } from "react-icons/io5";
import { FaStore, FaDesktop } from "react-icons/fa";
import './Services.css';

const Services: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan === selectedPlan ? null : plan); // Toggle selection
  };

  const plans = [
    {
      id: 'starter',
      name: 'Local Starter',
      price: 799,
      period: 'one-time',
      icon: <FaStore className="service-icon" />,
      color: 'blue',
      features: [
        { name: 'Custom Web Application', included: true },
        { name: 'Mobile optimization', included: true },
        { name: 'Github Code repositorty', included: true },
        { name: 'New Business start-up', included: true },
        { name: 'SEO', included: true },
        { name: 'Contact form', included: true },
        { name: 'E-commerce features', included: false },
        { name: 'Booking system', included: false },
      ],
    },
    {
      id: 'business',
      name: 'RP Business',
      price: 149,
      period: 'month',
      icon: <FaRegCircleCheck className="service-icon" />,
      color: 'green',
      popular: true,
      features: [
        { name: 'Everything in Starter', included: true },
        { name: 'Booking integration', included: true },
        { name: 'Multilingual options', included: true },
        { name: 'Monthly content updates', included: true },
        { name: 'SEO Updates', included: true },
        { name: 'Monthly reports', included: true },
        { name: 'Maintenance', included: true },
        { name: 'E-commerce', included: false },
      ],
    },
    {
      id: 'premium',
      name: '60626 Premium',
      price: 299,
      period: 'month',
      icon: <IoRocketOutline className="service-icon" />,
      color: 'purple',
      features: [
        { name: 'Everything in Business', included: true },
        { name: 'E-commerce functionality', included: true },
        { name: 'Database backups', included: true },
        { name: 'Local delivery integration', included: true },
        { name: 'Weekly content updates', included: true },
        { name: 'Weekly reports', included: true },
      ],
    },
    {
      id: 'custom',
      name: 'Custom',
      price: null,
      customPrice: 'Special',
      period: '',
      icon: <GiCutDiamond className="service-icon" />,
      color: 'gold',
      features: [
        { name: 'Custom web application', included: true },
        { name: 'AI integration capabilities', included: true },
        { name: 'Process automation', included: true },
        { name: 'Custom CRM development', included: true },
        { name: 'Staff training & support', included: true },
        { name: 'Project manager', included: true },
        { name: 'Unlimited revisions', included: true },
        { name: '24/7 priority support', included: true },
      ],
    },
  ];

  return (
    <div className='services-container' id="services">
      <div className="services-wrapper">
        <div className="services-header">
          <h1>Web Solutions for Rogers Park Businesses <FaDesktop /></h1>
          <p>Tailored web development services designed specifically for businesses in the 60626 neighborhood. From basic websites to full custom applications, I offer affordable solutions to help your Rogers Park business thrive online.</p>
      </div>  
        <div className="services-cards">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`service-card ${plan.color} ${plan.popular ? 'popular' : ''} ${selectedPlan === plan.id ? 'selected' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="service-card-header">
                {plan.icon}
                <h2>{plan.name}</h2>
              </div>
              <div className="service-price">
                {plan.price ? (
                  <>
                    <span className="currency">$</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">/{plan.period}</span>
                  </>
                ) : (
                  <span className="custom-price">{plan.customPrice}</span>
                )}
              </div>
              <ul className="service-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className={feature.included ? 'included' : 'excluded'}>
                    {feature.included ? 
                      <MdDone className="feature-icon included" /> : 
                      <MdOutlineClose className="feature-icon excluded" />
                    }
                    {feature.name}
                  </li>
                ))}
              </ul>
              <button 
                className="service-button"
                onClick={() => handleSelectPlan(plan.id)}
              >
                {selectedPlan === plan.id ? 'Selected' : plan.price ? 'Select Plan' : 'Request Quote'}
              </button>
            </div>
          ))}
        </div>
        <div className="services-note">
          <p>All plans include a free initial consultation and are designed specifically for Rogers Park businesses. Coffee chat consultations available at local cafés throughout the 60626 area.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
