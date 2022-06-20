
import axios from "axios";
import { QuizApi, ReturnApi } from "../Types/ApiType";
const sufflearray=(array:any)=>{
  return(  array.sort())
  }
export const Api = async (amount:number):Promise<ReturnApi[]>=> {
  const Response = await axios(
    `https://opentdb.com/api.php?amount=${amount}&difficulty=easy&type=multiple`
  );
  const data: QuizApi[] = Response.data.results;

  const quiz:ReturnApi[] = data.map((Quiz: QuizApi) => {
    const { correct_answer, incorrect_answers, question } = Quiz;
    const optionsarray= sufflearray([...incorrect_answers,correct_answer])
    return {
      answer: correct_answer,
      option:  optionsarray ,
      question: question
    };
  });
  return quiz
};
