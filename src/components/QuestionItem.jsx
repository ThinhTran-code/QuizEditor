import OptionList from "./OptionList";

export default function QuestionItem({ question, index, quiz, setQuiz }) {

    /**
     * Hàm update name question
     */
    const handleQuestionNameChange = (e) => {
        const updateQuestions = [...quiz.questions];
        updateQuestions[index].name = e.target.value;
        setQuiz({ ...quiz, questions: updateQuestions });
    }

    /**
     * Hàm update description question
     */
    const handleQuestionDescriptionChange = (e) => {
        const updateQuestions = [...quiz.questions];
        updateQuestions[index].description = e.target.value;
        setQuiz({ ...quiz, questions: updateQuestions });
    }
    
    /**
     * Hàm thay đổi thứ tự hiển thị của question
     */
    const handleSortOrderChange = (e) => {
        const updateQuestions = [...quiz.questions];
        updateQuestions[index].sortOrder = Number(e.target.value);
        setQuiz({ ...quiz, questions: updateQuestions });
    }

    /**
     * Hàm xoá các question
     */
    const handleDeleteQuestion = () => {
        const updateQuestions = quiz.questions.filter((_, i) => i !== index);
        setQuiz({ ...quiz, questions: updateQuestions });
    }
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginTop: "15px"
        }}>

            <h3>Question {index + 1}</h3>

            <div>
                <label>Question Name:</label>
                <br />
                <input
                    type="text"
                    value={question.name}
                    onChange={handleQuestionNameChange}
                />
            </div>

            <div style={{ marginTop: "10px" }}>
                <label>Question Description:</label>
                <br />
                <textarea
                    value={question.description}
                    onChange={handleQuestionDescriptionChange}
                />
            </div>

            <div style={{ marginTop: "10px" }}>
                <label>Sort Order:</label>
                <br />
                <input
                    type="number"
                    value={question.sortOrder}
                    onChange={handleSortOrderChange}
                />
            </div>

            <button
                onClick={handleDeleteQuestion}
                style={{ marginTop: "10px" }}
            >
                Delete Question
            </button>
            <OptionList
                question={question}
                questionIndex={index}
                quiz={quiz}
                setQuiz={setQuiz}
            />
        </div>
    );
}