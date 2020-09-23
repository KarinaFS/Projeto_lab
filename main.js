const name = prompt ("Coloque o seu nome");

const startTest = prompt ("Quer iniciar o teste? \n(Digite o número correspondente a sua resposta) \n 1. Sim \n 2. Não");

let rightAnswer = 0;
let wrongAnswer = 0;
let resposta1 = ""

if (startTest === "1") {
    const question1 = prompt ("1-Quantos estados existem no Brasil? \n(Digite o número correspondente a sua resposta) \n 1. 29 \n 2. 23 \n 3. 26");
        if (question1 === "3") {
            rightAnswer++;
            resposta1 = "question1";
            rightAnswer;
        } else {
            wrongAnswer++;
            wrongAnswer;
        }
    const question2 = prompt ("2-Qual é o bioma que só existe no Brasil? \n(Digite o número correspondente a sua resposta) \n 1. Caatinga \n 2. Serrado \n 3. Pantanal");
        if (question2 === "1") {
            rightAnswer++;
            rightAnswer;
        } else {
            wrongAnswer++;
            wrongAnswer;
        }
    const question3 = prompt ("3-Qual é a capital do Acre? \n(Digite o número correspondente a sua resposta) \n 1. Palmas \n 2. Rio Branco \n 3. Cuiabá");
        if (question3 === "2") {
            rightAnswer++;
            rightAnswer;
        } else {
            wrongAnswer++;
            wrongAnswer;
        }
    const question4 = prompt ("4-Qual país não faz fronteira com o Brasil? \n(Digite o número correspondente a sua resposta) \n 1. Argentina \n 2. Chile \n 3. Uruguay");
        if (question4 === "2") {
            rightAnswer++;
            rightAnswer;
        } else {
            wrongAnswer++;
            wrongAnswer;
        }
} else {    
}

document.write("Olá, " + name +"!")

document.getElementById("demo").innerHTML = "Respostas certas: " + rightAnswer;

document.getElementById("demo2").innerHTML = "Respostas erradas: " + wrongAnswer;

