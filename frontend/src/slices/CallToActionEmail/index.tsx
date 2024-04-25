import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Box, Button, Checkbox, Group, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { send } from "emailjs-com"
import Notiflix from 'notiflix';
/**
 * Props for `CallToActionEmail`.
 */
export type CallToActionEmailProps =
  SliceComponentProps<Content.CallToActionEmailSlice>;

/**
 * Component for "CallToActionEmail" Slices.
 */

/**
 * Functions To Validate Input Data
 */
function ValidateEmail(mail:string) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true
  }
    Notiflix.Notify.failure("Please, provide a valid email adress!")
    return false
}
function ValidateName(name:string) 
{
 if(name.length <= 0)
  {
    Notiflix.Notify.failure("Please, provide us your username!")
    return false
  }
    return true
}
function ValidateTerms(terms:boolean) 
{
 if(!terms)
  {
    Notiflix.Notify.failure("Please, provide us your acception to collect your email and name")
    return false
  }
    return true
}
/**
 * End of Functions To Validate Input Data
*/

const CallToActionEmail = ({ slice }: CallToActionEmailProps): JSX.Element => {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    const serviceId:string = process.env.service_id as string;
    const templateId:string = process.env.template_id as string;
    const userId:string = process.env.user_id as string;
    if(ValidateEmail(form.values.email) && ValidateName(form.values.fullName) && ValidateTerms(form.values.termsOfService)) {
        send(
            serviceId,
            templateId,
            {from_name: form.values.email,
            to_name: 'a5dynamics365@gmail.com',
            message: `Hello from ${form.values.fullName}! I would like to work with you`,
            client_name: form.values.fullName, 
            reply_to: 'Cooperation Request'},
            userId
        ) .then((response) => {
            form.values.email = '';
            form.values.fullName = '';
            Notiflix.Notify.success('You successfully sent a message! ');
          })
          .catch((err) => {
            Notiflix.Notify.failure('Oooops! Something get wrong. Please, try again!');
          });
    }
    form.values.email = '';
            form.values.fullName = '';
   }
    const form = useForm({
        initialValues: {
            email: '',
            fullName: '',
            termsOfService: false,
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          },
    })
    
    
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full p-10 flex gap-10 justify-between bg-gray-100 font-raleway max-sm:flex-wrap max-lg:flex-nowrap max-xl:flex-nowrap"
    >
      <div className="w-1/2 grid gap-y-4 content-around max-sm:w-full max-md:w-full max-lg:w-1/2 max-xl:w-1/2">
        <h2 className={`font-bold text-6xl font-nunito max-sm:text-4xl`}>{`${slice.primary.headercalltoaction}`}</h2>
        <p className="text-xl">{`${slice.primary.paragraphcalltoaction}`}</p>
      </div>
      <div className="w-1/2 flex flex-col items-center gap-5 rounded-xl bg-white text-black drop-shadow-2xl p-12 max-sm:w-full max-md:w-full max-lg:w-1/2 max-xl:w-1/2" >
        <Box>
            <form onSubmit={(event)=>(handleSubmit(event))} className="flex flex-wrap gap-10 w-full justify-center ">
                <TextInput withAsterisk label={String(slice.primary.emailformplaceholder)} placeholder={String(slice.primary.emailformplaceholder)} {...form.getInputProps('email')}/>
                <TextInput withAsterisk label={String(slice.primary.fullnameformplaceholder)} placeholder={String(slice.primary.fullnameformplaceholder)} {...form.getInputProps('fullName')}/>
                <Checkbox mt="md" label="By ticking this box I consent to the given information being used by A5 Solution to email me" {...form.getInputProps('termsOfService', { type: 'checkbox' })} />
                <Group position="right" mt="md">
                    <Button color={'orange'} className="w-full bg-orange-500 py-1 rounded-xl border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-orange-500" type="submit">{slice.primary.buttoncalltoaction}</Button>
                </Group>
          </form>
        </Box>
        </div>
    </section>
  );
};



export default CallToActionEmail;
