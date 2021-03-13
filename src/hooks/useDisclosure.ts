import React from 'react'

interface UseDisclosureResult {
  open: boolean
  onClose(): void
  onOpen(): void
}

export default function useDisclosure(): UseDisclosureResult {
  const [open, setOpen] = React.useState(false)

  const onClose = React.useCallback(() => {
    setOpen(false)
  }, [])

  const onOpen = React.useCallback(() => {
    setOpen(true)
  }, [])

  return {
    open,
    onOpen,
    onClose
  }
}
