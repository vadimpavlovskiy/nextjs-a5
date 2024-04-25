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
   
}