import React from 'react';

const Table = () => (
  <div className="pricing-table">
    <div className="pricing-plan is-primary is-active">
      <div className="plan-header">房屋翻新</div>
      <div className="plan-price"><span className="plan-price-amount"><span className="plan-price-currency">$</span>20</span>/month</div>
      <div className="plan-items">
        <div className="plan-item">20GB Storage</div>
        <div className="plan-item">100 Domains</div>
        <div className="plan-item">-</div>
        <div className="plan-item">-</div>
      </div>
      <div className="plan-footer">
        <button className="button is-fullwidth">Current plan</button>
      </div>
    </div>

    <div className="pricing-plan is-primary is-active">
      <div className="plan-header">室内装修</div>
      <div className="plan-price"><span className="plan-price-amount"><span className="plan-price-currency">$</span>40</span>/month</div>
      <div className="plan-items">
        <div className="plan-item">20GB Storage</div>
        <div className="plan-item">25 Domains</div>
        <div className="plan-item">1TB Bandwidth</div>
        <div className="plan-item">-</div>
      </div>
      <div className="plan-footer">
        <button className="button is-fullwidth">Choose</button>
      </div>
    </div>

    <div className="pricing-plan is-primary is-active">
      <div className="plan-header">装潢风水咨询</div>
      <div className="plan-price"><span className="plan-price-amount"><span className="plan-price-currency">$</span>60</span>/month</div>
      <div className="plan-items">
        <div className="plan-item">200GB Storage</div>
        <div className="plan-item">50 Domains</div>
        <div className="plan-item">1TB Bandwidth</div>
        <div className="plan-item">100 Email Boxes</div>
      </div>
      <div className="plan-footer">
        <button className="button is-fullwidth">Choose</button>
      </div>
    </div>

    <div className="pricing-plan is-primary is-active">
      <div className="plan-header">买房风水咨询</div>
      <div className="plan-price"><span className="plan-price-amount"><span className="plan-price-currency">$</span>100</span>/month</div>
      <div className="plan-items">
        <div className="plan-item">2TB Storage</div>
        <div className="plan-item">100 Domains</div>
        <div className="plan-item">1TB Bandwidth</div>
        <div className="plan-item">1000 Email Boxes</div>
      </div>
      <div className="plan-footer">
        <button className="button is-fullwidth">Choose</button>
      </div>
    </div>
  </div>
);

export default Table;
