
const contEl1=document.querySelector("#c1");
const contEl2=document.querySelector("#c2");
const contEl3=document.querySelector("#c3");
const inputEl=document.querySelector("#name");
const btnEl=document.querySelector("#enter");
const optionEl1=document.querySelector("#p1");
const optionEl2=document.querySelector("#p2");
const optionEl3=document.querySelector("#p3");
const optionEl4=document.querySelector("#p4");
const optQuizEl1=document.querySelector("#qp1");
const optQuizEl2=document.querySelector("#qp2");
const optQuizEl3=document.querySelector("#qp3");
const optQuizEl4=document.querySelector("#qp4");
const questionEl=document.querySelector("#quizQuestion");
const questionNoEl=document.querySelector("#questionNo");
const chooseEl=document.querySelector("#choose");
const nextEl=document.querySelector("#next");
const disScoreEl=document.querySelector("#score");
const timerEl=document.querySelector("#timer");
const correctEl=document.querySelector("#r");
const wrongEl=document.querySelector("#w");
const perEl=document.querySelector("#p");
const nameEl=document.querySelector("#nameDis");
const startEl=document.querySelector("#start");
const homeEl=document.querySelector("#home");
console.log(nameEl);
const timeEl=document.querySelector("#time");
console.log(timeEl);
var arr1=[optionEl1,optionEl2,optionEl3,optionEl4];
var arr2=[optQuizEl1,optQuizEl2,optQuizEl3,optQuizEl4];
var optionSelected=" ";
var quizData;
var questionNo=0;
var score=0;
var question=" ";
var options=[];
var timer=301;
var inputName=" ";
var interval;
var timeTake;
var percenatge;
var wrong;
var correct;
async function fetchData(qn){
    try {
    quizData=await fetch("quiz.json").then((res) => res.json());
    console.log(typeof(quizData));
    if(optionSelected=="Pipes And Cisterns"){
        arr2.forEach(element=>{
            element.disabled=false;
        })
        question=`${quizData.Pipes_And_Cisterns.problems[qn].question}`;
        options=quizData.Pipes_And_Cisterns.problems[qn].answers;
        display();
        arr2.forEach(element=>{
            element.addEventListener('click',()=>{
                nextEl.disabled=false;
                arr2.forEach(element=>{
                    element.disabled="true";
                })
                if(element.innerText==quizData.Pipes_And_Cisterns.problems[qn].answers[quizData.Pipes_And_Cisterns.problems[qn].answerIndex]){
                    element.style.backgroundColor="blue";
                    ++score;
                }else{
                    element.style.backgroundColor="red";
                }
        });
        })
    }else if(optionSelected=="Probability"){
        question=`${quizData.Probability.problems[qn].question}`;
        options=quizData.Probability.problems[qn].answers;
        arr2.forEach(element=>{
            element.disabled=false;
        })
        display();
        arr2.forEach(element=>{
            element.addEventListener('click',()=>{
                console.log(element.innerText);
                console.log(quizData.Probability.problems[qn].answers[quizData.Probability.problems[qn].answerIndex]);
                nextEl.disabled=false;
                arr2.forEach(element=>{
                    element.disabled="true";
                })
                if(element.innerText==quizData.Probability.problems[qn].answers[quizData.Probability.problems[qn].answerIndex]){
                    element.style.backgroundColor="blue";
                    score=score+1;
                }else{
                    element.style.backgroundColor="red";
                }
        });
        });
    }else if(optionSelected=="Problem on Ages"){
        question=`${quizData.Ages.problems[qn].question}`;
        options=quizData.Ages.problems[qn].answers;
        arr2.forEach(element=>{
            element.disabled=false;
        })
        display();
        arr2.forEach(element=>{
            element.addEventListener('click',()=>{
                console.log(element.innerText);
                console.log(quizData.Ages.problems[qn].answers[quizData.Ages.problems[qn].answerIndex]);
                nextEl.disabled=false;
                arr2.forEach(element=>{
                    element.disabled="true";
                })
                if(element.innerText==quizData.Ages.problems[qn].answers[quizData.Ages.problems[qn].answerIndex]){
                    element.style.backgroundColor="blue";
                    score=score+1;
                }else{
                    element.style.backgroundColor="red";
                }
        });
        })
        
    }else if(optionSelected=="Profit and Loss"){
        question=`${quizData.Profit_Loss.problems[qn].question}`;
        options=quizData.Profit_Loss.problems[qn].answers;
        arr2.forEach(element=>{
            element.disabled=false;
        })
        display();
        arr2.forEach(element=>{
            element.addEventListener('click',()=>{
                console.log(element.innerText);
                console.log(quizData.Profit_Loss.problems[qn].answers[quizData.Ages.problems[qn].answerIndex]);
                nextEl.disabled=false;
                arr2.forEach(element=>{
                    element.disabled="true";
                })
                if(element.innerText==quizData.Ages.problems[qn].answers[quizData.Ages.problems[qn].answerIndex]){
                    element.style.backgroundColor="blue";
                    score=score+1;
                }else{
                    element.style.backgroundColor="red";
                }
        });
        })
    }
    if(questionNo<10){
        contEl3.style.display="none";
        timeTake=0;
        percenatge=0;
        wrong=0;
        correct=0;
    }
    }
    catch (error) {
        console.log(error);
    }
}
function option(e){
    if(inputEl.value=="Enter Your Name" || inputEl.value==" "){
        alert("Please Enter Your Name");
    }else{
        arr1.forEach(element=>{element.style.backgroundColor="#D7FFFF"})
        e.style.backgroundColor="#00BFFF";
        optionSelected=e.innerText;
        console.log(optionSelected);
    }
    
}
arr1.forEach(element => {element.addEventListener("click",()=>{option(element)})
    
});
inputEl.addEventListener("click",(e)=>{
    e.target.value=" ";
})
btnEl.addEventListener("click",()=>{
    if(inputEl.value=="Enter Your Name" || inputEl.value==" "){
        alert("Please Enter Your Name");
    }else{
        if(optionSelected==" "){
            alert("Enter your option")
        }else{
            fetchData(questionNo);
            inputName=inputEl.value;
            inputEl.value="Enter Your Name";
            interval = setInterval(function(){
                timer--;
                timerEl.innerHTML=timer;
                if (timer === 0){
                  timerEl.style.color="red";
                  console.log(timer);
                  clearInterval(interval);
                }
              }, 1000);
        }

    }
})
console.log(questionNo);
function display(){
    nextEl.disabled="true";
    contEl1.style.display="none";
    contEl2.style.display="flex";
    disScoreEl.innerText=`Score:${score}`;
    chooseEl.innerText=`${optionSelected}`;
    questionEl.innerText=`${question}`;
    questionNoEl.innerText=`${questionNo+1}/10`;
    arr2.forEach(element1=>{
        element1.style.backgroundColor="#D7FFFF";
        element1.innerText=`${options[arr2.indexOf(element1)]}`;
    });
}
nextEl.addEventListener('click',()=>{
    console.log(questionNo);
    questionNo=questionNo+1;
    if(questionNo<10){
        console.log(typeof(questionNo));
        arr2.forEach(element1=>{
            element1.innerText= " ";
        });
        fetchData(questionNo);
    }else if(questionNo>=9){
        nextEl.innerText="See Your Result";
        nextEl.addEventListener('click',()=>{
            timeTake=300-timer;
            percenatge=(score/10)*100;
            wrong=10-score;
            correct=10-wrong;
            contEl2.style.display="none";
            contEl3.style.display="flex";
            correctEl.innerText=correct;
            wrongEl.innerText=wrong;
            perEl.innerText=percenatge;
            nameEl.innerText=inputName;
            timeEl.innerText=timeTake;
           nextEl.innerText="Next Question";
        })
    }
 
    });
startEl.addEventListener('click',()=>{
        clearInterval(interval);
        timer=301;
        contEl3.style.display="none";
        contEl2.style.display="flex";
        questionNo=0;
        score=undefined;
        question=" ";
        options=[];
        quizData={};
        timer=301;
        inputName=" ";
        timeTake=0;
        percenatge=0;
        wrong=0;
        correct=0;
        console.log(questionNo);
        fetchData(questionNo);
        interval = setInterval(function(){
            timer--;
            timerEl.innerHTML=timer;
            if (timer === 0){
              timerEl.style.color="red";
              console.log(timer);
              clearInterval(interval);
            }
          }, 1000);
        });
homeEl.addEventListener('click',()=>{
    questionNo=0;
    contEl3.style.display="none";
    contEl1.style.display="flex";
    arr1.forEach(element=>{element.style.backgroundColor="#D7FFFF";});
    clearInterval(interval);
    score=0;
    optionSelected=" ";
    quizData;
    questionNo=0;
    question=" ";
    options=[];
    timer=301;
    inputName=" ";
    timeTake=0;
    percenatge=0;
    wrong=0;
    correct=0;
})