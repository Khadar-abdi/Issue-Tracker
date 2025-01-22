import { PrismaClient, Status } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 20 Sample Issues with Long Descriptions
  const issues = [
    {
      title: 'Fix login issue',
      description:
        'Users are encountering errors when attempting to log in using their email addresses. Specifically, the login endpoint returns a 500 status code for certain accounts. This issue appears to be caused by incorrect handling of null values in the database. Additionally, the frontend error message does not provide adequate information to the user, leading to confusion.',
      status: Status.OPEN,
      createdAt: new Date('2025-01-01T09:00:00Z'),
      updatedAt: new Date('2025-01-01T09:00:00Z'),
    },
    {
      title: 'Implement dark mode',
      description:
        'The application lacks a dark mode feature, which has been a highly requested functionality from users. This task involves adding a dark mode toggle in user settings and ensuring all components, including buttons, headers, and forms, adapt their styles appropriately. Comprehensive testing is required to ensure consistent behavior across different devices and browsers.',
      status: Status.IN_PROGRESS,
      createdAt: new Date('2025-01-02T10:00:00Z'),
      updatedAt: new Date('2025-01-03T12:00:00Z'),
    },
    {
      title: 'Update user dashboard',
      description:
        'The current user dashboard is cluttered and does not provide a clear overview of key metrics. Redesigning the dashboard involves simplifying the layout, improving the visual hierarchy, and incorporating interactive charts. Feedback from user interviews should be taken into account to ensure the new design meets user expectations.',
      status: Status.DONE,
      createdAt: new Date('2025-01-03T11:30:00Z'),
      updatedAt: new Date('2025-01-04T08:15:00Z'),
    },
    {
      title: 'Fix API timeout issue',
      description:
        'Several API endpoints are timing out when processing requests with large payloads. This is causing significant disruptions for users who rely on bulk data uploads. The issue seems to be related to inefficient database queries and inadequate server resources. Optimizing these queries and increasing server capacity should resolve the problem.',
      status: Status.IN_PROGRESS,
      createdAt: new Date('2025-01-04T09:00:00Z'),
      updatedAt: new Date('2025-01-04T09:00:00Z'),
    },
    {
      title: 'Create onboarding flow',
      description:
        'New users often struggle to navigate the application due to the lack of an onboarding process. This task involves designing a step-by-step walkthrough that highlights key features of the app. The onboarding flow should be visually appealing and provide users with the option to skip or revisit it later.',
      status: Status.DONE,
      createdAt: new Date('2025-01-05T13:00:00Z'),
      updatedAt: new Date('2025-01-06T10:00:00Z'),
    },
    {
      title: 'Fix password reset email',
      description:
        'Password reset emails are not being delivered to users due to a misconfiguration in the email service provider settings. Additionally, the email template lacks proper branding and instructions, which leads to confusion. Fixing this issue requires updating the SMTP settings and improving the email content.',
      status: Status.OPEN,
      createdAt: new Date('2025-01-06T08:00:00Z'),
      updatedAt: new Date('2025-01-06T08:00:00Z'),
    },
    {
      title: 'Add multi-language support',
      description:
        'Currently, the application only supports English, which limits its usability for non-English speaking users. Implementing multi-language support involves translating all user-facing text into multiple languages and adding a language switcher to the settings page. This task also includes ensuring that the translations are accurate and context-appropriate.',
      status: Status.IN_PROGRESS,
      createdAt: new Date('2025-01-07T10:00:00Z'),
      updatedAt: new Date('2025-01-08T14:00:00Z'),
    },
    {
      title: 'Optimize image loading',
      description:
        'Homepage images take a long time to load, negatively impacting user experience and search engine rankings. This issue can be addressed by implementing lazy loading, compressing images, and using a content delivery network (CDN). Performance metrics should be monitored to ensure significant improvement.',
      status: Status.DONE,
      createdAt: new Date('2025-01-08T09:00:00Z'),
      updatedAt: new Date('2025-01-09T11:00:00Z'),
    },
    {
      title: 'Fix CSS layout issue',
      description:
        'The header layout is broken on small screens, causing overlapping elements and unreadable text. The CSS media queries need to be updated to ensure proper alignment and spacing. Additionally, the overall responsiveness of the header design should be tested on a variety of devices and screen sizes.',
      status: Status.OPEN,
      createdAt: new Date('2025-01-09T08:00:00Z'),
      updatedAt: new Date('2025-01-09T15:00:00Z'),
    },
    {
      title: 'Upgrade database version',
      description:
        'The application is running on an outdated database version, which lacks several performance enhancements and security features. Upgrading the database involves migrating to the latest version, updating connection strings, and testing all database queries for compatibility.',
      status: Status.IN_PROGRESS,
      createdAt: new Date('2025-01-10T07:00:00Z'),
      updatedAt: new Date('2025-01-10T07:00:00Z'),
    },
    // Add 10 more entries as needed
  ];

  // Upsert data to avoid duplication
  for (const issue of issues) {
    await prisma.issue.create({
        data: issue,
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
