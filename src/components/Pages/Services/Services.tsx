import React, { useState } from 'react';
import { MdMiscellaneousServices, MdDone, MdOutlineClose } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { GiCutDiamond } from "react-icons/gi";
import { IoRocketOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import './Services.css';

const Services: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan === selectedPlan ? null : plan); // Toggle selection
  };

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 49,
      period: 'month',
      icon: <FiBox className="service-icon" />,
      color: 'blue',
      features: [
        { name: 'Up to 5 projects', included: true },
        { name: '20 GB storage', included: true },
        { name: 'Basic support', included: true },
        { name: 'Monthly reports', included: false },
        { name: 'Custom domain', included: false },
        { name: 'Premium plugins', included: false },
      ],
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 99,
      period: 'month',
      icon: <FaRegCircleCheck className="service-icon" />,
      color: 'green',
      popular: true,
      features: [
        { name: 'Up to 15 projects', included: true },
        { name: '50 GB storage', included: true },
        { name: 'Priority support', included: true },
        { name: 'Monthly reports', included: true },
        { name: 'Custom domain', included: true },
        { name: 'Premium plugins', included: false },
      ],
    },
    {
      id: 'business',
      name: 'Business',
      price: 199,
      period: 'month',
      icon: <IoRocketOutline className="service-icon" />,
      color: 'purple',
      features: [
        { name: 'Up to 50 projects', included: true },
        { name: '100 GB storage', included: true },
        { name: 'Premium support', included: true },
        { name: 'Weekly reports', included: true },
        { name: 'Custom domain', included: true },
        { name: 'Premium plugins', included: true },
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 499,
      period: 'month',
      icon: <GiCutDiamond className="service-icon" />,
      color: 'gold',
      features: [
        { name: 'Unlimited projects', included: true },
        { name: 'Unlimited storage', included: true },
        { name: '24/7 dedicated support', included: true },
        { name: 'Daily reports', included: true },
        { name: 'Multiple custom domains', included: true },
        { name: 'All premium plugins', included: true },
      ],
    },
  ];

  return (
    <div className='services-container' id="services">
      <div className="services-wrapper">
        <div className="services-header">
          <h1>My Software Services <MdMiscellaneousServices /></h1>
          <p>Still working out the service offerings. Whether it's SASS or consulting, plans TBD so this is more of a placeholder for that... Also there is the bit of working out Stripe payment gateway within Github pages to figure out.</p>
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
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/{plan.period}</span>
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
                {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
