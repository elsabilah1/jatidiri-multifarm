'use client'
import { memberSchema } from '@/data/validations'
import { IUser, useAuthStore } from '@/store/auth'
import clsx from 'clsx'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import { Button, InputSelect, InputText, Modal } from '../shared'
import { Close } from '../shared/Icons'

export default function EditMemberForm({ isOpen, closeModal }: any) {
  const router = useRouter()
  const { user, editMember } = useAuthStore()

  const editMemberHandler = async (values: IUser) => {
    try {
      await editMember(values)
      router.refresh()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Edit Member</h1>
        <button onClick={() => closeModal(false)}>
          <Close />
        </button>
      </div>
      <Formik
        initialValues={user}
        validationSchema={memberSchema}
        onSubmit={(values) => editMemberHandler(values)}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <InputText
              name="name"
              label="Nama"
              defaultValue={values.name}
              onChange={handleChange}
              disabled={isSubmitting}
              errorMsg={errors.name}
            />
            <InputText
              name="email"
              label="Email"
              defaultValue={values.email}
              onChange={handleChange}
              disabled={isSubmitting}
              errorMsg={errors.email}
            />
            <InputText
              name="phone_number"
              label="No Whatsapp"
              defaultValue={values.phone_number}
              onChange={handleChange}
              disabled={isSubmitting}
              errorMsg={errors.phone_number}
            />
            <InputSelect
              name="role"
              label="Role"
              options={['Admin', 'Super Admin']}
              value={values.role!}
              errorMsg={errors.role}
              disabled={isSubmitting}
            />

            <InputText
              isSecured
              name="password"
              label="Password"
              defaultValue={values.password}
              onChange={handleChange}
              disabled={isSubmitting}
              errorMsg={errors.password}
            />
            <Button
              type="submit"
              className={clsx(
                'w-full rounded-lg py-2',
                isSubmitting && 'animate-pulse'
              )}
              disabled={isSubmitting}
            >
              save
            </Button>
          </form>
        )}
      </Formik>
    </Modal>
  )
}
