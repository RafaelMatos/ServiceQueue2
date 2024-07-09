import { defineAbilityFor, projectSchema } from '@sq/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user-id' })

const project = projectSchema.parse({ id: 'project-id', ownerId: 'user2-id' })

const memberCanGetBilling = ability.can('get', 'Billing')
const memberCanCreateInvite = ability.can('create', 'Invite')
const memberCanDeleteAProject = ability.can('delete', 'Project')
const memberCanDeleteThisProject = ability.can('delete', project)
console.log('memberCanGetBilling:', memberCanGetBilling)
console.log('memberCanCreateInvite:', memberCanCreateInvite)
console.log('memberCanDeleteAProject:', memberCanDeleteAProject)
console.log('memberCanDeleteThisProject:', memberCanDeleteThisProject)
