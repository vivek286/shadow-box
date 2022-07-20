import Link from 'next/link'
// import practise from './practise'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {

  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function display(props:any){
    let op1=(props.ind*10)+1;
    
    return (<div className="max-w-2/4 labley-1 px-8 bg-gray-100 shadow-lg rounded-lg m-20">
        
        {/* <div className="max-w-full py-4 px-8 bg-white shadow-lg rounded-lg my-20 ml-2/4 text-left"> */}
  
  <div className="questions" >
  {/* <fieldset> */}
                    <div>
                      <legend className="text-base font-medium text-gray-900 font-bold whitespace-pre-line">{props.question}</legend>
                      
                    </div>
                    {/* <div className="mt-4 space-y-4">
                    <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                        {props.opA}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                        {props.opB}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                        {props.opC}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                        {props.opD}
                        </label>
                      </div>
                    </div> */}
                  {/* </fieldset> */}
                      
    <p className="mt-2 text-gray-600 text-xl font-medium whitespace-pre-line"> <input type="checkbox" id={String(op1)} value='A'/> {props.opA}</p>
    
    <p className="mt-2 text-gray-600 text-xl font-medium whitespace-pre-line"> <input type="checkbox" id={String(op1)} value='B'/> {props.opB}</p>
    
    <p className="font-medium mt-2 text-gray-600 text-xl whitespace-pre-line"> <input type="checkbox"  id={String(op1)} value='C'/>{props.opC}</p>
    
    <p className="mt-2 font-medium text-gray-600 text-xl whitespace-pre-line"> <input type="checkbox" id={String(op1)} value='D' /> {props.opD}</p>
    
    
    
    
   
    
  {/* </div> */}
  
  
            
  
</div>


    </div>);
}