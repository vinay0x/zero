import { Prisma } from '@prisma/client'

const userWithOrganizations = Prisma.validator<Prisma.UserArgs>()({
  include: {
    memberships: { include: { organization: true } }
  }
})

export type UserWithOrganizations = Prisma.UserGetPayload<typeof userWithOrganizations>
