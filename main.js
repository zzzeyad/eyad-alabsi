 function submitQuiz() {
            const options2 = document.getElementsByName('arabicQuiz2');
            const options = document.getElementsByName('arabicQuiz');
            const resultDiv = document.getElementById('result');
            const resultDiv2 = document.getElementById('result2');
            const resultDivs = document.getElementById('results');
            let selectedValue = "";
            let selectedValue2 = "";
            for (let i = 0; i < options.length; i++) {
                if (options[i].checked) {
                    selectedValue = options[i].value;
                    break;
                }
            }
            for (let i = 0; i < options2.length; i++) {
                if(options2[i].checked){
                    selectedValue2 = options2[i].value;
                    break;
                }
            }
        if (selectedValue === "" || selectedValue2 === ""){
        resultDiv.innerText ="نرجو منك حل السؤال";
        resultDiv2.innerText ="نرجو منك حل السؤال";
        resultDiv.style.color ="orange";
        resultDiv2.style.color ="orange";
        resultDivs.innerText="نرجو منك حل الاسئلة" ;
        resultDivs.style.color= "orange";
        return;
        }
        let score = 0;

        if(selectedValue === "correct"){
            score++;
            resultDiv.innerText ="الاجابة صحيحة";
            resultDiv.style.color= "green";
        }
        else{
        resultDiv.innerText ="الاجابة خاطئة";
            resultDiv.style.color= "red";

        }
        if(selectedValue2 === "correct"){
            score++;
             resultDiv2.innerText ="الاجابة صحيحة";
             resultDiv2.style.color ="green";
        }
        else{
             resultDiv2.innerText ="الاجابة خاطئة";
             resultDiv2.style.color ="red";

        }
        resultDivs.innerText =`لقد حصلت على ${score} من 2`;
        resultDivs.style.color ="red"
       if(score === 2){
        resultDivs.style.color = "green"
       }
       if(score === 1){
         resultDivs.style.color = "orange"
       }
    
    
    }