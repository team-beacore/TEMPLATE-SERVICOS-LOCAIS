import { useState } from 'react'
import type { ChangeEvent, FormEvent, ReactNode } from 'react'
import { services } from '../data/services'
import { cn } from '../lib/utils'
import { Button } from './Button'
import { Icon } from './Icon'

type FormValues = {
  name: string
  phone: string
  service: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  name: '',
  phone: '',
  service: '',
  message: '',
}

const inputClasses =
  'w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20'

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Informe seu nome completo.'
  }

  const digits = values.phone.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 11) {
    errors.phone = 'Informe um telefone válido com DDD.'
  }

  if (!values.service) {
    errors.service = 'Selecione o serviço desejado.'
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Descreva o problema (mínimo de 10 caracteres).'
  }

  return errors
}

type FieldProps = {
  id: string
  label: string
  error?: string
  children: ReactNode
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-brand-100 bg-brand-50/60 px-6 py-16 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white shadow-sm shadow-brand-600/30">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-slate-900">Solicitação enviada!</h3>
        <p className="mt-2 max-w-sm leading-relaxed text-slate-600">
          Recebemos seu pedido de orçamento. Nossa equipe entrará em contato em breve.
        </p>
        <p className="mt-3 text-xs text-slate-400">
          Demonstração: nenhum dado foi enviado ou armazenado.
        </p>
        <Button variant="outline" size="sm" className="mt-6" onClick={reset}>
          Enviar nova solicitação
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field id="name" label="Nome" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Seu nome completo"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={cn(inputClasses, errors.name ? 'border-red-400' : 'border-slate-300')}
        />
      </Field>

      <Field id="phone" label="Telefone" error={errors.phone}>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(11) 99999-9999"
          value={values.phone}
          onChange={handleChange}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className={cn(inputClasses, errors.phone ? 'border-red-400' : 'border-slate-300')}
        />
      </Field>

      <Field id="service" label="Serviço desejado" error={errors.service}>
        <div className="relative">
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'service-error' : undefined}
            className={cn(
              inputClasses,
              'appearance-none pr-10',
              errors.service ? 'border-red-400' : 'border-slate-300',
            )}
          >
            <option value="">Selecione um serviço</option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Outro serviço">Outro serviço</option>
          </select>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          >
            <Icon name="chevronDown" className="h-4 w-4" />
          </span>
        </div>
      </Field>

      <Field id="message" label="Mensagem" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Descreva o problema ou o que você precisa"
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(inputClasses, 'resize-none', errors.message ? 'border-red-400' : 'border-slate-300')}
        />
      </Field>

      <Button type="submit" size="lg" className="w-full">
        Solicitar orçamento
      </Button>
      <p className="text-center text-xs text-slate-400">
        Orçamento gratuito e sem compromisso.
      </p>
    </form>
  )
}