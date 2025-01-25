import { PrismaClient, Status } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 20 Sample Issues with Long Descriptions
  const Comments = [
    {
      content: 'This is a comment on issue one by user one',
      issueId: 14,
      userId: 'cm60jkpsa00005vgkcscw6r5b',
    },
    // Add 10 more entries as needed
  ];

  // Upsert data to avoid duplication
  for (const comment of Comments) {
    await prisma.comment.create({
        data: comment,
    });
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
