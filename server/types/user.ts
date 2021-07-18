import { Prisma } from '@prisma/client'

// 1: Define a type that includes the relation to `Organization`
const userWithOrganizations = Prisma.validator<Prisma.UserArgs>()({
  include: {
    memberships: { include: { organization: true } }
  }
})

export type UserWithOrganizations = Prisma.UserGetPayload<typeof userWithOrganizations>
