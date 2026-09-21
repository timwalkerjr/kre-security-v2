import { SITE } from '@/config/site';
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `# ${SITE.name}

> ${SITE.description}

## Pages

- [Home](${SITE.url}): Licensed security guard services for 22+ Pennsylvania counties
- [Contact](${SITE.url}/contact/): 24-hour dispatch ${SITE.phone.primary}
- [Employment](${SITE.url}/employment/): KRE job openings
- [Employee Application](${SITE.url}/employee-application/): KRE employment application
- [ACT 67 Training](${SITE.url}/act-67-certified-services/): ACT 67 certified services
- [First Aid Training](${SITE.url}/first-aid-training/): First Aid training services
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
