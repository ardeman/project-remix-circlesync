import { z } from 'zod'

import { shareSchema } from '~/lib/validations'

export type TTime = {
  seconds: number
  nanoseconds: number
}

export type TShareForm = z.infer<ReturnType<typeof shareSchema>>

export type TPermissions = {
  read: string[]
  write: string[]
}
