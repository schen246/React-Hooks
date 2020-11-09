import React from 'react';

const App = () => (
  <Amount
    myChildren = {amount => (
      <div>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
  />
);

const Amount = ({myChildren}) => {
  const [amount, setAmount] = React.useState(0);

  const handleIncrement = () => {
    setAmount(amount + 1);
  };

  const handleDecrement = () => {
    setAmount(amount - 1);
  }

  return (
    <div>
      <span>US Dollar: {amount}</span>
      <button type="button" onClick={handleIncrement}>+</button>
      <button type="button" onClick={handleDecrement}>-</button>
      {myChildren(amount)}
    </div>
  );
};

const Pound = ({amount}) => <p>Pound: {amount * 0.76}</p>;

const Euro = ({amount}) => <p>Euro: {amount * 0.86}</p>;

export default App;