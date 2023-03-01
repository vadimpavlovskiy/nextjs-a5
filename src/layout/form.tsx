import { Box, Button, Checkbox, Group, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"

export default function Form({}) {
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
            <div className="flex flex-wrap gap-10 w-full justify-center ">
                <TextInput withAsterisk label={'Email'} placeholder={'Email'} {...form.getInputProps('email')}/>
                <TextInput withAsterisk label={'Full Name'} placeholder={'Full name'} {...form.getInputProps('fullName')}/>
                <Checkbox mt="md" label="By ticking this box I consent to the given information being used by A5 Solution to email me" {...form.getInputProps('termsOfService', { type: 'checkbox' })} />
                <Group position="right" mt="md">
                    <Button color={'orange'} className="w-full bg-orange-500 py-1 rounded-xl border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-orange-500" type="submit">Get Consultation</Button>
                </Group>
              {/* <input type="email" className="
                  mt-0
                  block
                  w-full
                  px-0.5
                  border-0 border-b-2 border-gray-200
                  focus:ring-0 focus:border-orange-500
                " placeholder="" /> */}
          </div>
        </Box>
    )
}