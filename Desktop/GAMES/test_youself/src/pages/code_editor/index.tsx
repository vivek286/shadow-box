import React, { useRef, useState } from 'react';
import axios from 'axios'
  let rows=30;
  let colu=25;
  const navigation = {
    main: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Accessibility', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'GitHub',
        href: '#',
        icon: (props:any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Dribbble',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  }
  /////////////////////////////////////Making AXIOS REQUEST ///////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
export default function codeeditor(){
  // const codea = useRef();
  // const input = useRef();
  // const lang = useRef();
  // function submitHandler(event:any) {
  //   event.preventDefault();

  //   const coder = "";
  //   // const inputr = input.current.value;
  //   // const langr = lang.current.value;
  //   const inputr = "";
  //   const langr = "java";
   

  //   const data = {
  //     code: "public class program{ public static void main(String [] args){ System.out.println(5+5+6); }        }",
  //     input: "",
  //     language: "java",
  //     // description: enteredDescription,
  //   };


   
  // }
 const [code, setCode] =useState("cpp");
 const [Lang, setLang] = useState("C++");
 const [dropdown, setDropDown]=useState(false);
 const [loading,setLoading]=useState(true);
 const [output,setOutput]=useState("");
 function setlanguage(name,sym){
    setLang(name);
    setDropDown(false);
    setCode(sym);
}
function toggledrop(){
  if(dropdown){
    setDropDown(false);
  }else{
    setDropDown(true);
  }
}
  async function submitcode(){
    setLoading(false);
    setOutput("Running...")
    console.log(code);
    let ccc = (document.getElementById("CODE") as HTMLInputElement).value;
    let gdata = code;
    let ginput = (document.getElementById("give_input") as HTMLInputElement).value;
    let cccc=`${ccc}`;
    var data1 = JSON.stringify({
      "code":ccc,
      "language":gdata,
      "input":ginput
      });
      
  try{
    const response=await fetch('../api/output',{
      method: 'post',
      body:data1,
      headers: { 
       'Content-Type': 'application/json'
      }
    });
    const ans=(await await response.json());
    // console.log(ans);
    // (document.getElementById("OUTPUT") as HTMLInputElement).value="";
    // (document.getElementById("OUTPUT") as HTMLInputElement).value=ans.output;
    setOutput(ans.output);
    setLoading(true);
  }catch(error){
  console.log(error);
  
  }
  
    
  }
    return (<div className=" border-transparent  bg-gray-900 " >
              <title>TY Code</title>
        <header className=" border-transparent  bg-gray-700">
      <nav className=" border-transparent  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className=" border-transparent  w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className=" border-transparent  flex items-center">
            <a href="#">
              <span className=" border-transparent  sr-only">TEST YOURSELF</span>
              <img
                className=" border-transparent  h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </a>
            <div className=" border-transparent  hidden ml-10 space-x-8 lg:block">
              <p className=" border-transparent  text-base font-medium text-white hover:text-indigo-50 text-3xl ">CODE EDITOR</p>
            </div>
          </div>
          <div className=" border-transparent  ml-8 space-x-4">
            
            
            <a
              href="/"
              className=" border-transparent  inline-block bg-white p-2 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
           
            >
             HOME
            </a>
            <a
              // href="/"
              className=" border-transparent  inline-block bg-white p-2 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
           onClick={submitcode}
            >
             submit
            </a>
            <div className="relative inline-block text-left">
  <div>
    <button type="button" className=" border-transparent  inline-block bg-white p-2 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            id="menu-button" aria-expanded="true" aria-haspopup="true"
            onClick={()=>toggledrop()}
            >
      {Lang}
      <div className='inline-block'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6" fill="none" viewBox="0 0 17 17" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
      </div>
      
    
     
    </button>
  </div>

 {dropdown ?
  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
    <div className="py-1" role="none">
    
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" onClick={()=>setlanguage("C++","cpp")}  id="menu-item-0">C++</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" onClick={()=>setlanguage("Java","java")} id="menu-item-1">Java</a>
    </div>
    <div className="py-1" role="none">
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" onClick={()=>setlanguage("Python3","py")} id="menu-item-2">Python3</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" onClick={()=>setlanguage("C#","cs")} id="menu-item-3">C#</a>
    </div>
    <div className="py-1" role="none">
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" onClick={()=>setlanguage("C","c")} id="menu-item-4">C</a>
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" onClick={()=>setlanguage("Golang","go")} id="menu-item-5">Golang</a>
    </div>
    <div className="py-1" role="none">
      <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" onClick={()=>setlanguage("NodeJS","js")} id="menu-item-6">NodeJS</a>
    </div>
  </div>
  :<div></div>
}
</div>
            
          </div>
        </div>
        
      </nav>
    </header>
        <div className=" border-transparent  grid grid-cols-2 divide-x ">
         
        <div className=" border-transparent  mr-1  rounded-xl h-full w-full p-8">
        <div className='text-white font-weight-400 text-2xl'>Code Here</div>
                <textarea
                  id="CODE"
                  name="about"
                 rows={20}
                //  ref={codea}
                placeholder={'Write Your Code Here...'}
                  className=" border-transparent   shadow-sm block w-full text-xl p-4  border-none rounded-md border-hidden bg-gray-800 text-white" 
                  // defaultValue={'Write Code Here'}
                  
                />
               
             
            </div>
            <div className=" border-transparent  grid grid-rows-2 divide-y">
            <div className=" border-transparent  bg-gray-900 h-full  pt-6">
            <div className='text-white font-weight-400 text-2xl'>Output Here</div>
            <textarea
                  id="give_input"
                  name="about"
                 rows={8}
                 placeholder='Write Custom Test Cases Here...'
                className=" border-transparent p-4  shadow-sm block w-full sm:w-11/12 sm:text-lg  border-gray-300 bg-gray-800 text-white rounded-md "
                  // defaultValue={'Write Code Here'}
                  disabled
                  value={output}
                />
        
        </div>
        <div className=" border-transparent  ">
           <div className=" border-transparent  bg-gray-900 h-full  pt-2  rounded-xl">
           <div className='text-white font-weight-400 text-2xl'>Custom Test Case</div>
           <textarea
                  id="give_input"
                  name="about"
                 rows={8}
                 placeholder='Write Custom Test Cases Here...'
                className=" border-transparent p-4  shadow-sm block w-full sm:w-11/12 sm:text-lg  border-gray-300 bg-gray-800 text-white rounded-md "
                  // defaultValue={'Write Code Here'}
                  
                />
           </div>
           
        </div>
            </div>
        
        </div>
               
        <footer className=" border-transparent  bg-gray-700">
      <div className=" border-transparent  max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        
        <div className=" border-transparent  mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className=" border-transparent  text-white">
              <span className=" border-transparent  sr-only">{item.name}</span>
              <item.icon className=" border-transparent  h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className=" border-transparent  mt-8 text-center text-base text-white">&copy; 2021 Vivek Solanki. All rights reserved.</p>
      </div>
    </footer>
    </div>)
}