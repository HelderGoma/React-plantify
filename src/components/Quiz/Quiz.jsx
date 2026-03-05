import { useMemo, useState } from "react";
import "./Quiz.css";

const initialAnswers = {
  light: "",
  care: "",
  pets: "",
};

const Quiz = ({ products }) => {
  const [answers, setAnswers] = useState(initialAnswers);

  const result = useMemo(() => {
    if (!answers.light || !answers.care || !answers.pets) {
      return null;
    }
    const filtered = products.filter((product) => {
      const lightMatch = product.light === answers.light;
      const careMatch = answers.care === "easy" ? product.beginner : true;
      const petMatch = answers.pets === "yes" ? product.petFriendly : true;
      return lightMatch && careMatch && petMatch;
    });
    return filtered[0] ?? null;
  }, [answers, products]);

  return (
    <section className="section quiz-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section__title">Plant matcher quiz</h2>
        </div>
        <div className="quiz-grid">
          <label>
            What light do you have?
            <select
              value={answers.light}
              onChange={(event) => setAnswers((prev) => ({ ...prev, light: event.target.value }))}
            >
              <option value="">Select</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="bright">Bright</option>
            </select>
          </label>
          <label>
            Experience level?
            <select
              value={answers.care}
              onChange={(event) => setAnswers((prev) => ({ ...prev, care: event.target.value }))}
            >
              <option value="">Select</option>
              <option value="easy">Beginner</option>
              <option value="any">Any</option>
            </select>
          </label>
          <label>
            Pets at home?
            <select
              value={answers.pets}
              onChange={(event) => setAnswers((prev) => ({ ...prev, pets: event.target.value }))}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No preference</option>
            </select>
          </label>
        </div>
        <div className="quiz-result">
          {result ? (
            <article className="quiz-card">
              <img src={result.image} alt={result.name} />
              <div>
                <h3>Your match: {result.name}</h3>
                <p>
                  ${result.price} - {result.light} light - {result.size}
                </p>
              </div>
            </article>
          ) : (
            <p>Answer all questions to get a recommendation.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
