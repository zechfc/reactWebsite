import './Animal.css';

const Animal = () => {
  return (
  <section className = {Animal.className}>
    <h3>(animal.name)</h3>
    <p>Pandas are great</p>
    <img src={Animal.image} alt={Animal.name} />

  </section>
  );
}

export default Animal;