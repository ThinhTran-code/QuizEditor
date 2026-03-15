export default function OptionItem({ option, optionIndex, questionIndex, quiz, setQuiz }) {

    /**
     * Hàm update value của option
     */
    const handleValueChange = (e) => {
        const updatedQuestions = [...quiz.questions];
        updatedQuestions[questionIndex].options[optionIndex].value = e.target.value;

        setQuiz({ ...quiz, questions: updatedQuestions });
    };

    /**
     * Hàm update kết quả của option
     */
    const handleLabelChange = (e) => {
        const updatedQuestions = [...quiz.questions];
        updatedQuestions[questionIndex].options[optionIndex].label = e.target.value;

        setQuiz({ ...quiz, questions: updatedQuestions });
    };

    /**
     * Hàm thay đổi thứ tự hiển thị của option
     */
    const handleSortOrderChange = (e) => {
        const updatedQuestions = [...quiz.questions];
        updatedQuestions[questionIndex].options[optionIndex].sortOrder = Number(e.target.value);

        setQuiz({ ...quiz, questions: updatedQuestions });
    };

    /**
     * Hàm chọn đáp án đúng
     */
    const handleCorrectChange = (e) => {
        const updatedQuestions = [...quiz.questions];

        const question = updatedQuestions[questionIndex];
        const value = option.value;

        if (e.target.checked) {
            question.correctOptionValue.push(value);
        } else {
            question.correctOptionValue =
                question.correctOptionValue.filter(v => v !== value);
        }

        setQuiz({ ...quiz, questions: updatedQuestions });
    };

    /**
     * Hàm xoá lựa chọn option
     */
    const deleteOption = () => {
        const updatedQuestions = [...quiz.questions];

        updatedQuestions[questionIndex].options =
            updatedQuestions[questionIndex].options.filter((_, i) => i !== optionIndex);

        setQuiz({ ...quiz, questions: updatedQuestions });
    };


    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginTop: "10px"
            }}
        >
            <h5>Option {optionIndex + 1}</h5>

            <div>
                <label>Value:</label>
                <br />
                <input
                    type="text"
                    value={option.value}
                    onChange={handleValueChange}
                />
            </div>

            <div style={{ marginTop: "5px" }}>
                <label>Label:</label>
                <br />
                <input
                    type="text"
                    value={option.label}
                    onChange={handleLabelChange}
                />
            </div>

            <div style={{ marginTop: "5px" }}>
                <label>Sort Order:</label>
                <br />
                <input
                    type="number"
                    value={option.sortOrder}
                    onChange={handleSortOrderChange}
                />
            </div>
            <div style={{ marginTop: "5px" }}>
                <label>
                    <input
                        type="checkbox"
                        checked={quiz.questions[questionIndex].correctOptionValue.includes(option.value)}
                        onChange={handleCorrectChange}
                    />
                    Correct Answer
                </label>
            </div>

            <button
                onClick={deleteOption}
                style={{ marginTop: "5px" }}
            >
                Delete Option
            </button>

        </div>
    );
}