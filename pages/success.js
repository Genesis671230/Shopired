import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';
const success = () => {
  const { settotalQuantities, settotalPrice, setcartItems } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setcartItems([]);
    settotalQuantities(0);
    settotalPrice(0);

    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the reciept.</p>
        <p className="description">
          if you have any questions, please email.
          <a href="mailto:stashcloud671230@gmail.com" className="email">
            stashcloud671230@gmail
          </a>
        </p>

        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continoue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default success;
