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
            resultDiv.innerText ="الاجابة صحيحة لانه هو ما يخبرنا عن المبتدا";
            resultDiv.style.color= "green";
        }
        else{
        resultDiv.innerText ="الاجابة خاطئة الاجابة الصحيحة هي:خبر";
            resultDiv.style.color= "red";

        }
        if(selectedValue2 === "correct"){
            score++;
             resultDiv2.innerText =" الاجابة صحيحة لانه مثنى";
             resultDiv2.style.color ="green";
        }
        else{
             resultDiv2.innerText ="الاجابة خاطئة الاجابة الصحيحة هي:مبتدا مرفوع وعلامة رفعه الالف";
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

    function submitQuiz2() {
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
            resultDiv.innerText ="الاجابة صحيحة لانها كتبت بالعلامات الاعرابية الصحيحة";
            resultDiv.style.color= "green";
        }
        else{
        resultDiv.innerText ="الاجابة خاطئة الاجابة الصحيحة هي:السماءُ جميلةٌ";
            resultDiv.style.color= "red";

        }
        if(selectedValue2 === "correct"){
            score++;
             resultDiv2.innerText ="الاجابة صحيحة";
             resultDiv2.style.color ="green";
        }
        else{
             resultDiv2.innerText ="الاجابة خاطئة الاجابة الصحيحة هي:الفاعل";
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

    function submitQuiz3() {
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
        resultDiv.innerText ="الاجابة خاطئة الاجابة الصحيحة هي:ان-لن-كي";
            resultDiv.style.color= "red";

        }
        if(selectedValue2 === "correct"){
            score++;
             resultDiv2.innerText ="الاجابة صحيحة";
             resultDiv2.style.color ="green";
        }
        else{
             resultDiv2.innerText ="الاجابة خاطئة الاجابة الصحيحة هي:معتل الاخر بالالف";
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

    function submitQuiz4() {
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
        resultDiv.innerText ="الاجابة خاطئة الاجابة الصحيحة هي:أمسى";
            resultDiv.style.color= "red";

        }
        if(selectedValue2 === "correct"){
            score++;
             resultDiv2.innerText =" الاجابة صحيحة لان الحروف الناسخة تنصب المبتدا وترفع الخبر";
             resultDiv2.style.color ="green";
        }
        else{
             resultDiv2.innerText ="الاجابة خاطئة الاجابة الصحيحة هي:خطا";
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

     function submitQuiz5() {
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
        resultDiv.innerText ="الاجابة خاطئة الاجابة الصحيحة هي:نضم اوله ونكسر ما قبل آخره";
            resultDiv.style.color= "red";

        }
        if(selectedValue2 === "correct"){
            score++;
             resultDiv2.innerText =" الاجابة صحيحة لانه يجب ان نضم الحرف الاول ونفتح ما قبل آخره";
             resultDiv2.style.color ="green";
        }
        else{
             resultDiv2.innerText ="الاجابة خاطئة الاجابة الصحيحة هي:يُكتَبُ الدرسُ";
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

    function submitQuiz6() {
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
            resultDiv.innerText ="الاجابة صحيحة لانه نكرة بعده معرفة";
            resultDiv.style.color= "green";
        }
        else{
        resultDiv.innerText ="الاجابة خاطئة الاجابة الصحيحة هي:كتابُ ";
            resultDiv.style.color= "red";

        }
        if(selectedValue2 === "correct"){
            score++;
             resultDiv2.innerText =" الاجابة صحيحة لانه علم مختومان بألف ونون زائدتين";
             resultDiv2.style.color ="green";
        }
        else{
             resultDiv2.innerText ="الاجابة خاطئة الاجابة الصحيحة هي:عثمان";
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

    function submitQuizm() {
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
            resultDiv.innerText ="الاجابة صحيحة لان (8-2)×180=°1080";
            resultDiv.style.color= "green";
        }
        else{
        resultDiv.innerText ="الاجابة خاطئة الاجابة الصحيحة هي:°1080 ";
            resultDiv.style.color= "red";

        }
        if(selectedValue2 === "correct"){
            score++;
             resultDiv2.innerText =" الاجابة صحيحة لان 360÷8=°45";
             resultDiv2.style.color ="green";
        }
        else{
             resultDiv2.innerText ="الاجابة خاطئة الاجابة الصحيحة هي:°45";
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