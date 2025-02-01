//'use client';
// import TextInput from '@/components/shared/TextInput';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';

// export default function FormWizard() {
//   const { register } = useForm();

//   const [active, setActive] = useState(false);

//   const handleSeperator = () => {
//     setActive(!active);
//   };
//   return (
//     <div className="flex gap-2">
//       <div className="bg-white shadow rounded-lg p-4 w-full">
        
//         <form>
//           <Tabs
//             onValueChange={handleSeperator}
//             defaultValue="first-step"
//             value={`${active ? 'second-step' : 'first-step'}`}
//           >
//             <TabsList className="w-full flex justify-between items-center bg-transparent border-b py-8 mb-8 rounded-none">
//               <TabsTrigger
//                 value="first-step"
//                 className={`text-lg font-bold size-10 bg-none shadow-none rounded-sm bg-primary/20 data-[state=active]:bg-primary data-[state=active]:text-white`}
//               >
//                 1
//               </TabsTrigger>
//               <div
//                 id="seperator"
//                 className={`h-1 border-b-4 border-dashed mx-2 grow ${active && 'border-b-primary'}`}
//               ></div>
//               <TabsTrigger
//                 value="second-step"
//                 className={`text-lg font-bold size-10 bg-none shadow-none rounded-sm bg-primary/20 data-[state=active]:bg-primary data-[state=active]:text-white`}
//               >
//                 2
//               </TabsTrigger>
//             </TabsList>
//             <TabsContent value="first-step">
//               <div className="flex gap-4">
//                 <div className='w-1/2'>
//                   <div className="flex gap-4 mb-2">
//                     <TextInput name="first_name" label="نام" register={register} />
//                     <TextInput name="last_name" label="نام خانوادگی" register={register} />
//                   </div>
//                   <div className="flex gap-4 mb-2">
//                     <TextInput name="phone" label="شماره تماس" register={register} />
//                     <TextInput name="email" label="ایمیل" register={register} />
//                   </div>
//                   <div className="flex gap-4 mb-2">
//                     <TextInput name="national_id" label="کد ملی" register={register} />
//                     <TextInput name="national_id" label="کد ملی" register={register} />
//                   </div>
//                   <div className="flex gap-4 mb-2">
//                     <TextInput name="national_id" label="کد ملی" register={register} />
//                     <TextInput name="national_id" label="کد ملی" register={register} />
//                   </div>
//                 </div>
//                 <div className='w-1/2'>
//                   left
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 className="border px-2 py-1 bg-primary text-white"
//                 onClick={handleSeperator}
//               >
//                 next
//               </button>
//             </TabsContent>
//             <TabsContent value="second-step">
//               <div className="flex gap-4 mb-2">
//                 <TextInput name="first_name" label="نام" register={register} />
//                 <TextInput name="last_name" label="نام خانوادگی" register={register} />
//               </div>
//               <div className="flex gap-4 mb-2">
//                 <TextInput name="phone" label="شماره تماس" register={register} />
//                 <TextInput name="email" label="ایمیل" register={register} />
//               </div>

//               <button
//                 type="button"
//                 className="border px-2 py-1 bg-primary text-white"
//                 onClick={handleSeperator}
//               >
//                 back
//               </button>
//             </TabsContent>
//           </Tabs>
//         </form>

//         {/* <form className="mt-4">
          
//         </form> */}
//       </div>
//     </div>
//   );
// }
