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
    
    return (<div className="max-w-2/4 labley-1 px-8 bg-gray-700 shadow-lg rounded-lg mx-16 my-8">
    
  <div className="questions" >
  <body className="text-center"> 
<div>
    <div className="text-green-400 text-5xl font-bold whitespace-pre-line ">
      Question {props.ind}
    </div> 
    <div className='text-left'>
    <div className="whitespace-pre-line text-xl font-bold text-white">{props.question}</div> 
    </div>
    
    <div className="bg-gray-700 p-4 mx-16 space-y-6 ">
        <div className="block h-12 text-left  bg-gray-600 text-white text-3xl font-bold rounded-lg"><input type="checkbox" id={String(op1)} value='A'/> {props.opA}</div>
        <div className="block h-12 text-left  bg-gray-600 text-white rounded-lg"><input type="checkbox"  id={String(op1)} value='A'/> {props.opB}</div>
        <div className="block h-12 text-left  bg-gray-600 text-white rounded-lg"><input type="checkbox"  id={String(op1)} value='A'/> {props.opC}</div>
        <div className="block h-12 text-left  bg-gray-600 text-white rounded-lg"><input type="checkbox"  id={String(op1)} value='A'/> {props.opD}</div>
    </div> 
</div>
</body> 
</div>


    </div>);
}