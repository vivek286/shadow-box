// import { post } from "jquery";
import { MongoClient } from "mongodb";

/* This example requires Tailwind CSS v2.0+ */

  export default function Example(props) {
    const posts=props.postt;
    console.log(posts);
    return (
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <title>BLOGS</title>
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
            <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                 <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                 </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
    <div className="flex-1">
      <p className="text-sm font-medium text-indigo-600">
        <a href={post.category.href} className="hover:underline">
          {post.category.name}
        </a>
      </p>
      <a href={post.href} className="block mt-2">
        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
        <p className="mt-3 text-base text-gray-500">Stringfy(post.description)</p>
      </a>
    </div>
    <div className="mt-6 flex items-center">
      <div className="flex-shrink-0">
        <a href={post.author.href}>
          <span className="sr-only">{post.author.name}</span>
         
        </a>
        <a
              href="#"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
           
            >
             DELETE
            </a>
            <a
              href="#"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
        
            >
             UPDATE
            </a>
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">
          <a href={post.author.href} className="hover:underline">
            {post.author.name}
          </a>
        </p>
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime={post.datetime}>{post.date}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingTime} read</span>
        </div>
      </div>
    </div>
  </div>




            </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  export async function getServerSideProps (context){

    const client=await MongoClient.connect('mongodb+srv://Vivek:TeNzP6QPWszrWcKX@cluster0.hmbhl.mongodb.net/Blog?retryWrites=true&w=majority');
const db=client.db();
const collection=db.collection('post');
    const All_post=await collection.find().toArray();
    return {
      props:{
        postt:All_post.map(post=>({
          id:String(post._id),
          title:post.title,
          href:post.href||"https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1",
          category: { name: post.category.name, href: null },
          description:post.description,
          date: 'Mar 10, 2020',
          datetime: '2020-03-10',
          imageUrl: post.imageUrl||null,
          readingTime:post.readingTime||'5 min',
          author: {
          name: post.author.name,
          href: post.author.name||null,
          
          },

        }))
      }
    }    
  }
  // {
  //   title: 'How to use search engine optimization to drive sales',
  //   href: '#',
  //   category: { name: 'Video', href: '#' },
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
  //   date: 'Mar 10, 2020',
  //   datetime: '2020-03-10',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  //   readingTime: '4 min',
  //   author: {
  //     name: 'Brenna Goyette',
  //     href: '#',
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   },
  // },



//   <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
//   <div className="flex-shrink-0">
//     <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
//   </div>
  // <div className="flex-1 bg-white p-6 flex flex-col justify-between">
  //   <div className="flex-1">
  //     <p className="text-sm font-medium text-indigo-600">
  //       <a href={post.category.href} className="hover:underline">
  //         {post.category.name}
  //       </a>
  //     </p>
  //     <a href={post.href} className="block mt-2">
  //       <p className="text-xl font-semibold text-gray-900">{post.title}</p>
  //       <p className="mt-3 text-base text-gray-500">{post.description}</p>
  //     </a>
  //   </div>
  //   <div className="mt-6 flex items-center">
  //     <div className="flex-shrink-0">
  //       <a href={post.author.href}>
  //         <span className="sr-only">{post.author.name}</span>
  //         <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
  //       </a>
  //     </div>
  //     <div className="ml-3">
  //       <p className="text-sm font-medium text-gray-900">
  //         <a href={post.author.href} className="hover:underline">
  //           {post.author.name}
  //         </a>
  //       </p>
  //       <div className="flex space-x-1 text-sm text-gray-500">
  //         <time dateTime={post.datetime}>{post.date}</time>
  //         <span aria-hidden="true">&middot;</span>
  //         <span>{post.readingTime} read</span>
  //       </div>
  //     </div>
  //   </div>
  // </div>
// </div>