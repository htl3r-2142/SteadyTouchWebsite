export function createRuntimeError(error, info) {
  const cause = error instanceof Error
    ? error
    : new Error(typeof error === 'string' ? error : 'A non-Error value was thrown', {
        cause: error,
      })

  return new Error(`Unhandled Vue error${info ? ` (${info})` : ''}`, { cause })
}

export function propagateError(error) {
  if (typeof globalThis.reportError === 'function') {
    globalThis.reportError(error)
    return
  }

  queueMicrotask(() => {
    throw error
  })
}
