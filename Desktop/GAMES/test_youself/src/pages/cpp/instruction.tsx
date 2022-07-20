import Senddata from './index'
import { useState } from 'react';
const { mongoose } = require('mongoose');
let question_paper=[];
let loading=true;
  function load_paper(){
   //Connect to db and load all questions
// question_paper=result;

}
let display_que=[];
function make_paper(){
    const n=question_paper.length;
    while(display_que.length!=10){
        let k=(Math.random())%n;
        display_que.push(question_paper[k]);
}
    
    loading=true;
}
function directtest(){
return <Senddata displ={{name:"vivek"}} ></Senddata>
}
export default  function instruction(){
    //  load_paper();
    // make_paper();
    return (
        <div className="bg-gray-200 h-full">
          <title>CPP TEST</title>
          <header className="bg-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">TEST YOURSELF</span>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              <p className="text-base font-medium text-white hover:text-indigo-50 text-3xl ">CPP Test</p>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            
            
            <a
              href="/"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
           
            >
             HOME
            </a>
          </div>
        </div>
        
      </nav>
    </header>
            <div className="max-w-full py-4 px-8 bg-white shadow-lg rounded-lg my-20 ml-2/4 text-center">
  
  <div >
    <h2 className="text-gray-800 text-3xl font-semibold "> Instruction For Test</h2>
    <p className="mt-2 text-gray-600">1. You will be directed to a full screen mode for test.</p>
    <p className="mt-2 text-gray-600">2. There are 10 MCQ questions from CPP to solve with no restriction on time.</p>
    <p className="mt-2 text-gray-600">3. Exiting full screen will result in termination of test and your score will not be evaluated. </p>
    <p className="mt-2 text-gray-600">4. At end of test you will be provided with you score and your last selected option will be considered.</p>
    <p className="mt-2 text-gray-600">5. Only two attempts will be provided for each question, in third attempt ans will be visible and score won't add.</p>
  </div>
  <div className="flex justify-end mt-4">
  <a
              href="/cpp"
              onClick={directtest}
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
           
            >
             CONTINUE
            </a>

  
            
  </div>
</div>
        </div>
    )
}