'use client'
import { Field, Form, InputCheckbox, Modal } from '@/components/shared'
// import { shedDataFormContent } from '@/data/data'
import { IModal } from '@/data/interfaces'
import { shedDataSchema as schema } from '@/data/validations'
import { useAuthStore } from '@/store/auth'
import { IShedDetail, useShedStore } from '@/store/shed'
import { useState } from 'react'

export default function AddShedDataForm(props: IModal) {
  const { isOpen, closeModal } = props
  const { user } = useAuthStore()
  const { shedDetail, addShedDetail } = useShedStore()
  const [categories, setCategories] = useState<any>({ feed: true })

  const onSubmit = async (values: IShedDetail) => {
    // try {
    //   const res = await addShedDetail({
    //     ...values,
    //     uid: user.id!,
    //   })
    //   if (res.status === 201) {
    //     toast.success(res.message)
    //     router.replace(`/${animal_type}`)
    //   } else {
    //     toast.error(res.errors[0].msg)
    //   }
    // } catch (e: any) {
    //   toast.error(e.message)
    // }
  }

  return (
    <Modal isOpen={isOpen!} closeModal={closeModal}>
      <h1 className="mb-6 text-xl font-semibold">Tambah Data</h1>
      <Form schema={schema} onSubmit={onSubmit}>
        <div className="mb-8 space-y-5">
          {/* category radio options */}
          <div className="flex justify-between">
            {shedDataFormContent.options.map(({ name, label }, idx) => (
              <InputCheckbox
                key={idx}
                label={label}
                defaultChecked={categories[name]}
                onChange={({ target: { checked } }: any) =>
                  setCategories((s: any) => ({ ...s, [name]: checked }))
                }
              />
            ))}
          </div>
          {/* form fields */}
          {shedDataFormContent.content.map(({ fields, name, title }, idx) => (
            <div key={idx} className={categories[name] ? 'block' : 'hidden'}>
              <h3 className="mb-4 text-base font-medium">{title}</h3>
              <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                {fields.map(({ name, label, type }, idx) =>
                  type === 'date' ? (
                    <Field type="date" key={idx} name={name} label={label} />
                  ) : (
                    <Field type="input" key={idx} name={name} label={label} />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-3">
          <Field type="submit" cancelHandler={() => closeModal(false)} />
        </div>
      </Form>
    </Modal>
  )
}

const shedDataFormContent = {
  options: [
    { label: 'Pakan', name: 'feed' },
    { label: 'Vitamin', name: 'vitamin' },
    { label: 'Vaksin', name: 'vaccine' },
    { label: 'Obat Cacing', name: 'anthelmintic' },
  ],
  content: [
    {
      name: 'feed',
      title: 'Pakan',
      fields: [
        { type: 'date', label: 'Tanggal', name: 'feed_date' },
        { type: 'text', label: 'Jenis Pakan', name: 'feed_type' },
        { type: 'number', label: 'Harga', name: 'feed_price' },
        { type: 'number', label: 'Stok', name: 'feed_stock' },
      ],
    },
    {
      name: 'vitamin',
      title: 'Vitamin',
      fields: [
        { type: 'date', label: 'Tanggal', name: 'vitamin_date' },
        { type: 'text', label: 'Jenis vitamin', name: 'vitamin_type' },
        { type: 'number', label: 'Harga', name: 'vitamin_price' },
      ],
    },
    {
      name: 'vaccine',
      title: 'Vaksin',
      fields: [
        { type: 'date', label: 'Tanggal', name: 'vaccine_date' },
        { type: 'text', label: 'Jenis Vaksin', name: 'vaccine_type' },
        { type: 'number', label: 'Harga', name: 'vaccine_price' },
      ],
    },
    {
      name: 'anthelmintic',
      title: 'Obat Cacing',
      fields: [
        { type: 'date', label: 'Tanggal', name: 'anthelmintic_date' },
        {
          type: 'text',
          label: 'Jenis Obat Cacing',
          name: 'anthelmintic_type',
        },
        { type: 'number', label: 'Harga', name: 'anthelmintic_price' },
      ],
    },
  ],
}
