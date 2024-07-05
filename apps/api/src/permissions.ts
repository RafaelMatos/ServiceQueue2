import {
  AbilityBuilder,
} from '@casl/ability'
type PermissionsByRole = (user : any, builder: AppAbilities )

export const permissions = {
  ADMIN: (user, builder) => {},
  MEMBER: (user, builder) => {},
}
