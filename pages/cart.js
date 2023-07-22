function Cart() {
  return (
    <div className='flex flex-1 max-w-5xl w-full mx-auto bg-stone-100 max-h-screen'>
      <h1 className='flex-grow text-3xl font-bold text-center underline text-red-400 '>
        Cart Page
      </h1>
    </div>
  );
}

export default Cart;

// function Cart() {
//   return (
//     <html lang='en'>
//       <head>
//         <meta charset='UTF-8' />
//         <meta http-equiv='X-UA-Compatible' content='IE=edge' />
//         <meta name='viewport' content='width=device-width, initial-scale=1.0' />
//         <title>Tailwind CSS simple shopping cart ui</title>
//         <link
//           href='https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'
//           rel='stylesheet'
//         />
//       </head>
//       <body>
//         <div class='container p-8 mx-auto mt-12 bg-white'>
//           <div class='w-full overflow-x-auto'>
//             <div class='my-2'>
//               <h3 class='text-xl font-bold tracking-wider'>
//                 Shopping Cart 3 item
//               </h3>
//             </div>
//             <table class='w-full shadow-inner'>
//               <thead>
//                 <tr class='bg-gray-100'>
//                   <th class='px-6 py-3 font-bold whitespace-nowrap'>Product</th>
//                   <th class='px-6 py-3 font-bold whitespace-nowrap'>Qty</th>
//                   <th class='px-6 py-3 font-bold whitespace-nowrap'>Price</th>
//                   <th class='px-6 py-3 font-bold whitespace-nowrap'>Remove</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     Iphone 11
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     <div>
//                       <button class='px-2 py-0 shadow'>-</button>
//                       <input
//                         type='text'
//                         name='qty'
//                         value='2'
//                         class='w-12 text-center bg-gray-100 outline-none'
//                       />
//                       <button class='px-2 py-0 shadow'>+</button>
//                     </div>
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>$1,000</td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     <button class='px-2 py-0 text-red-100 bg-red-600 rounded'>
//                       x
//                     </button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     Iphone 12
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     <div>
//                       <button class='px-2 py-0 shadow'>-</button>
//                       <input
//                         type='text'
//                         name='qty'
//                         value='1'
//                         class='w-12 text-center bg-gray-100 outline-none'
//                       />
//                       <button class='px-2 py-0 shadow'>+</button>
//                     </div>
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>$12,00</td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     <button class='px-2 py-0 text-red-100 bg-red-600 rounded'>
//                       x
//                     </button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     Iphone 13
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     <div>
//                       <button class='px-2 py-0 shadow'>-</button>
//                       <input
//                         type='text'
//                         name='qty'
//                         value='1'
//                         class='w-12 text-center bg-gray-100 outline-none'
//                       />
//                       <button class='px-2 py-0 shadow'>+</button>
//                     </div>
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>$1,300</td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     <button class='px-2 py-0 text-red-100 bg-red-600 rounded'>
//                       x
//                     </button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'></td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     <div class='font-bold'>Total Qty - 4</div>
//                   </td>
//                   <td class='p-4 px-6 font-extrabold text-center whitespace-nowrap'>
//                     Total - 40,00 (include tax)
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     <button class='px-4 py-1 text-red-600 bg-red-100'>
//                       Clear All
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <div class='flex justify-end mt-4 space-x-2'>
//               <button
//                 class='
//               px-6
//               py-3
//               text-sm text-gray-800
//               bg-gray-200
//               hover:bg-gray-400
//             '
//               >
//                 Cannel
//               </button>
//               <button
//                 class='
//               px-6
//               py-3
//               text-sm text-white
//               bg-indigo-500
//               hover:bg-indigo-600
//             '
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }
// export default Cart;

// function Cart() {
//   return (
//     <html lang='en'>
//       <head>
//         <meta charset='UTF-8' />
//         <meta http-equiv='X-UA-Compatible' content='IE=edge' />
//         <meta name='viewport' content='width=device-width, initial-scale=1.0' />
//         <title>
//           Tailwind CSS shopping cart list with coupon, order summary using
//           heroicons
//         </title>
//         <link
//           href='https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'
//           rel='stylesheet'
//         />
//       </head>

//       <body>
//         <div class='container p-8 mx-auto mt-12'>
//           <div class='w-full overflow-x-auto'>
//             <div class='my-2'>
//               <h3 class='text-xl font-bold tracking-wider'>
//                 Shopping Cart 3 item
//               </h3>
//             </div>
//             <table class='w-full shadow-inner'>
//               <thead>
//                 <tr class='bg-gray-100'>
//                   <th class='px-6 py-3 font-bold whitespace-nowrap'>Image</th>
//                   <th class='px-6 py-3 font-bold whitespace-nowrap'>Product</th>
//                   <th class='px-6 py-3 font-bold whitespace-nowrap'>Qty</th>
//                   <th class='px-6 py-3 font-bold whitespace-nowrap'>Price</th>
//                   <th class='px-6 py-3 font-bold whitespace-nowrap'>Remove</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>
//                     <div class='flex justify-center'>
//                       <img
//                         src='https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
//                         class='object-cover h-28 w-28 rounded-2xl'
//                         alt='image'
//                       />
//                     </div>
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     <div class='flex flex-col items-center justify-center'>
//                       <h3>Iphone 11</h3>
//                     </div>
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     <div>
//                       <button>
//                         <svg
//                           xmlns='http://www.w3.org/2000/svg'
//                           class='inline-flex w-6 h-6 text-red-600'
//                           fill='none'
//                           viewBox='0 0 24 24'
//                           stroke='currentColor'
//                         >
//                           <path
//                             stroke-linecap='round'
//                             stroke-linejoin='round'
//                             stroke-width='2'
//                             d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
//                           />
//                         </svg>
//                       </button>
//                       <input
//                         type='text'
//                         name='qty'
//                         value='2'
//                         class='w-12 text-center bg-gray-100 outline-none'
//                       />
//                       <button>
//                         <svg
//                           xmlns='http://www.w3.org/2000/svg'
//                           class='inline-flex w-6 h-6 text-green-600'
//                           fill='none'
//                           viewBox='0 0 24 24'
//                           stroke='currentColor'
//                         >
//                           <path
//                             stroke-linecap='round'
//                             stroke-linejoin='round'
//                             stroke-width='2'
//                             d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>$1,000</td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     <button>
//                       <svg
//                         xmlns='http://www.w3.org/2000/svg'
//                         class='w-6 h-6 text-red-400'
//                         fill='none'
//                         viewBox='0 0 24 24'
//                         stroke='currentColor'
//                       >
//                         <path
//                           stroke-linecap='round'
//                           stroke-linejoin='round'
//                           stroke-width='2'
//                           d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
//                         />
//                       </svg>
//                     </button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div class='flex justify-center'>
//                       <img
//                         src='https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
//                         class='object-cover h-28 w-28 rounded-2xl'
//                         alt='image'
//                       />
//                     </div>
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     Iphone 12
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     <div>
//                       <button>
//                         <svg
//                           xmlns='http://www.w3.org/2000/svg'
//                           class='inline-flex w-6 h-6 text-red-600'
//                           fill='none'
//                           viewBox='0 0 24 24'
//                           stroke='currentColor'
//                         >
//                           <path
//                             stroke-linecap='round'
//                             stroke-linejoin='round'
//                             stroke-width='2'
//                             d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
//                           />
//                         </svg>
//                       </button>
//                       <input
//                         type='text'
//                         name='qty'
//                         value='1'
//                         class='w-12 text-center bg-gray-100 outline-none'
//                       />
//                       <button>
//                         <svg
//                           xmlns='http://www.w3.org/2000/svg'
//                           class='inline-flex w-6 h-6 text-green-600'
//                           fill='none'
//                           viewBox='0 0 24 24'
//                           stroke='currentColor'
//                         >
//                           <path
//                             stroke-linecap='round'
//                             stroke-linejoin='round'
//                             stroke-width='2'
//                             d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>$12,00</td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     <button>
//                       <svg
//                         xmlns='http://www.w3.org/2000/svg'
//                         class='w-6 h-6 text-red-400'
//                         fill='none'
//                         viewBox='0 0 24 24'
//                         stroke='currentColor'
//                       >
//                         <path
//                           stroke-linecap='round'
//                           stroke-linejoin='round'
//                           stroke-width='2'
//                           d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
//                         />
//                       </svg>
//                     </button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>
//                     <div class='flex justify-center'>
//                       <img
//                         src='https://media.istockphoto.com/photos/woman-hand-holding-cellphone-with-empty-screen-on-white-background-picture-id1294325965?b=1&k=20&m=1294325965&s=170667a&w=0&h=rQWe3BR4tCNbhkuiR-zGa0tsFUv0OYd70Y_mZvIpV-w='
//                         class='object-cover h-28 w-28 rounded-2xl'
//                         alt='image'
//                       />
//                     </div>
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     Iphone 13
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     <div>
//                       <button>
//                         <svg
//                           xmlns='http://www.w3.org/2000/svg'
//                           class='inline-flex w-6 h-6 text-red-600'
//                           fill='none'
//                           viewBox='0 0 24 24'
//                           stroke='currentColor'
//                         >
//                           <path
//                             stroke-linecap='round'
//                             stroke-linejoin='round'
//                             stroke-width='2'
//                             d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
//                           />
//                         </svg>
//                       </button>
//                       <input
//                         type='text'
//                         name='qty'
//                         value='1'
//                         class='w-12 text-center bg-gray-100 outline-none'
//                       />
//                       <button>
//                         <svg
//                           xmlns='http://www.w3.org/2000/svg'
//                           class='inline-flex w-6 h-6 text-green-600'
//                           fill='none'
//                           viewBox='0 0 24 24'
//                           stroke='currentColor'
//                         >
//                           <path
//                             stroke-linecap='round'
//                             stroke-linejoin='round'
//                             stroke-width='2'
//                             d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>$1,300</td>
//                   <td class='p-4 px-6 text-center whitespace-nowrap'>
//                     <button>
//                       <svg
//                         xmlns='http://www.w3.org/2000/svg'
//                         class='w-6 h-6 text-red-400'
//                         fill='none'
//                         viewBox='0 0 24 24'
//                         stroke='currentColor'
//                       >
//                         <path
//                           stroke-linecap='round'
//                           stroke-linejoin='round'
//                           stroke-width='2'
//                           d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
//                         />
//                       </svg>
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <div class='lg:w-2/4'>
//               <div class='mt-4'>
//                 <div class='px-4 py-4 rounded-md'>
//                   <label for='coupon code' class='font-semibold text-gray-600'>
//                     Coupon Code
//                   </label>
//                   <input
//                     type='text'
//                     placeholder='coupon code'
//                     value='LARA#234'
//                     class='
//                   w-full
//                   px-2
//                   py-2
//                   border border-blue-600
//                   rounded-md
//                   outline-none
//                 '
//                   />
//                   <span class='block text-green-600'>
//                     Coupon code applied successfully
//                   </span>
//                   <button
//                     class='
//                   px-6
//                   py-2
//                   mt-2
//                   text-sm text-indigo-100
//                   bg-indigo-600
//                   rounded-md
//                   hover:bg-indigo-700
//                 '
//                   >
//                     Apply
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div class='mt-4'>
//               <div class='py-4 rounded-md shadow'>
//                 <h3 class='text-xl font-bold text-blue-600'>Order Summary</h3>
//                 <div class='flex justify-between px-4'>
//                   <span class='font-bold'>Subtotal</span>
//                   <span class='font-bold'>$35.25</span>
//                 </div>
//                 <div class='flex justify-between px-4'>
//                   <span class='font-bold'>Discount</span>
//                   <span class='font-bold text-red-600'>- $5.00</span>
//                 </div>
//                 <div class='flex justify-between px-4'>
//                   <span class='font-bold'>Sales Tax</span>
//                   <span class='font-bold'>$2.25</span>
//                 </div>
//                 <div
//                   class='
//                 flex
//                 items-center
//                 justify-between
//                 px-4
//                 py-2
//                 mt-3
//                 border-t-2
//               '
//                 >
//                   <span class='text-xl font-bold'>Total</span>
//                   <span class='text-2xl font-bold'>$37.50</span>
//                 </div>
//               </div>
//             </div>
//             <div class='mt-4'>
//               <button
//                 class='
//               w-full
//               py-2
//               text-center text-white
//               bg-blue-500
//               rounded-md
//               shadow
//               hover:bg-blue-600
//             '
//               >
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }
// export default Cart;
