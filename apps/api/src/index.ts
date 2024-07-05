import { ability } from '@sq/auth'
const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteOtherUser = ability.can('delete', 'User')
const userCanNotDeleteOtherUser = ability.cannot('delete', 'User')
console.log('userCanInviteSomeoneElse:', userCanInviteSomeoneElse)
console.log('userCanDeleteOtherUser:', userCanDeleteOtherUser)
console.log('userCanNotDeleteOtherUser:', userCanNotDeleteOtherUser)
