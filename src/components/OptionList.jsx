import OptionItem from "./OptionItem";

export default function OptionList({ question, questionIndex, quiz, setQuiz }) {

  /**
   * Hàm thêm các câu trả lời của question
   */
  const addOption = () => {
    const newOption = {
      value: "",
      label: "",
      sortOrder: question.options.length + 1
    };
    const updateQuestions = [...quiz.questions];
    updateQuestions[questionIndex].options = [
      ...updateQuestions[questionIndex].options, newOption
    ];
    setQuiz({ ...quiz, questions: updateQuestions })
  }
  return (
    <div style={{ marginTop: "15px" }}>

      <h4>Options</h4>

      <button onClick={addOption}>Add Option</button>

      {question.options.length === 0 && (
        <p>No options yet</p>
      )}

      {question.options.map((option, index) => (
        <OptionItem
          key={index}
          option={option}
          optionIndex={index}
          questionIndex={questionIndex}
          quiz={quiz}
          setQuiz={setQuiz}
        />
      ))}

    </div>
  );
}