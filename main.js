 function submitQuiz() {
            const options = document.getElementsByName('arabicQuiz');
            const resultDiv = document.getElementById('result');
            let selectedValue = "";

            for (let i = 0; i < options.length; i++) {
                if (options[i].checked) {
                    selectedValue = options[i].value;
                    break;
                }
            }

            if (selectedValue === "") {
                resultDiv.innerText = "الرجاء اختيار إجابة أولاً!";
                resultDiv.style.color = "orange";
            } else if (selectedValue === "correct") {
                resultDiv.innerText = "إجابة صحيحة! أحسنت يا بطل 🌟 (الدرجة: 1/1)";
                resultDiv.style.color = "green";
            } else {
                resultDiv.innerText = "إجابة خاطئة. الخبر هو الذي يكمل المعنى، حاول مرة أخرى!";
                resultDiv.style.color = "red";
            }
        }