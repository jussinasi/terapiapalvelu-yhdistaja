import { createContext, useCallback, useContext, useMemo, useState } from 'react'

export type ToastProps = {
  id?: string
  title?: string
  description?: string
  action?: React.ReactNode
  duration?: number
  variant?: 'default' | 'destructive'
}

type ToastContextValue = {
  toasts: Required<ToastProps>[]
  toast: (t: ToastProps) => void
  dismiss: (id: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

let idCounter = 0
const genId = () => `toast-${++idCounter}`

export function ToastProviderInternal({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Required<ToastProps>[]>([])

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const toast = useCallback((t: ToastProps) => {
    const id = t.id ?? genId()
    const duration = t.duration ?? 3500
    const full: Required<ToastProps> = {
      id,
      title: t.title ?? '',
      description: t.description ?? '',
      action: t.action ?? null,
      duration,
      variant: t.variant ?? 'default',
    }
    setToasts((prev) => [...prev, full])
    // auto dismiss
    window.setTimeout(() => dismiss(id), duration)
  }, [dismiss])

  const value = useMemo(() => ({ toasts, toast, dismiss }), [toasts, toast, dismiss])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    // Palautetaan tyhjä toteutus ettei kaadu, jos Provider puuttuu.
    return {
      toasts: [] as Required<ToastProps>[],
      toast: (_t: ToastProps) => {},
      dismiss: (_id: string) => {},
    }
  }
  return ctx
}
