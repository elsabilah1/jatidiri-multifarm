'use client'
import { signinSchema } from '@/data/validations'
import { IUser } from '@/store/auth'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { Field } from '../shared'
import Form from '../shared/Form'

export default function SignInForm() {
  const router = useRouter()

  const onSubmit = async (values: IUser) => {
    try {
      await fetch('/api/signin', {
        method: 'post',
        body: JSON.stringify(values),
      })

      router.push('/home')
    } catch (e) {
      toast.error('credentials error')
    }
  }

  return (
    <Form schema={signinSchema} onSubmit={onSubmit} className="space-y-4">
      <Field type="input" name="email" label="Email" />
      <Field type="input" name="password" label="Password" isSecured />
      <div className="grid gap-8">
        <button
          className="ml-auto text-base font-medium"
          onClick={() => router.replace('/signin')}
        >
          Forgot Password?
        </button>
        <Field type="submit" label="signin" className="min-w-full" />
      </div>
    </Form>
  )
}
