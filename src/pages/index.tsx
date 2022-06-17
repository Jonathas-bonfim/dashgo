import { Button, Flex, Stack } from "@chakra-ui/react"
import { Input } from "../components/Form/input"
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const signInFormSchema = yup.object().shape({
    email: yup.string().required('Email Obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha Obrigatória'),
  });
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors } = formState;


  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            {...register}
            error={errors.email}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            {...register}
            error={errors.password}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}