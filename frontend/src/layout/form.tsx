import { Box, Button, Checkbox, Group, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { send } from "emailjs-com"
import Notiflix from 'notiflix';

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

export default function Form({}) {
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
            reply_to: 'me'},
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
        <Box>
            <form onSubmit={(event)=>(handleSubmit(event))} className="flex flex-wrap gap-10 w-full justify-center ">
                <TextInput  withAsterisk label={'Email'} placeholder={'Email'} {...form.getInputProps('email')}/>
                <TextInput withAsterisk label={'Full Name'} placeholder={'Full name'} {...form.getInputProps('fullName')}/>
                <Checkbox mt="md" label="By ticking this box I consent to the given information being used by A5 Solution to email me" {...form.getInputProps('termsOfService', { type: 'checkbox' })} />
                <Group position="right" mt="md">
                    <Button color={'orange'} className="w-full bg-orange-500 py-1 rounded-xl border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-orange-500" type="submit">Get Consultation</Button>
                </Group>
          </form>
        </Box>
    )
}