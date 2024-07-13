import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function seed() {
  await prisma.user.deleteMany({})
  const passwordHash = await hash('123456', 1)

  await prisma.user.createMany({
    data: [
      {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatarUrl: faker.image.avatarGitHub(),
        age: faker.number.int({
          min: 3,
          max: 90,
        }),
        gender: faker.helpers.arrayElement(['FEMALE', 'MALE']),
        passwordHash,
      },
      {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatarUrl: faker.image.avatarGitHub(),
        age: faker.number.int({
          min: 3,
          max: 90,
        }),
        gender: faker.helpers.arrayElement(['FEMALE', 'MALE']),
        passwordHash,
      },
      {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatarUrl: faker.image.avatarGitHub(),
        age: faker.number.int({
          min: 3,
          max: 90,
        }),
        gender: faker.helpers.arrayElement(['FEMALE', 'MALE']),
        passwordHash,
      },
      {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatarUrl: faker.image.avatarGitHub(),
        age: faker.number.int({
          min: 3,
          max: 90,
        }),
        gender: faker.helpers.arrayElement(['FEMALE', 'MALE']),
        passwordHash,
      },
    ],
  })

  await prisma.user.create({
    data: {
      name: 'Rafael Matos',
      email: 'rafael@email.com',
      avatarUrl: 'https://github.com/RafaelMatos.png',
      age: 34,
      gender: 'MALE',
      passwordHash,
      role: 'ADMIN',
    },
  })
}

seed().then(() => {
  console.log('Database seeded')
})
