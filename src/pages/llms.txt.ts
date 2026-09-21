import { SITE } from '@/config/site';
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `# ${SITE.name}

> ${SITE.description}

## Pages

- [Home](${SITE.url}): Single-source Michigan business phone (Hosted VoIP), fiber internet, and IT solutions
- [FaxBridge](${SITE.url}/faxbridge): Internet-enable your existing physical fax machine with secure cloud storage
- [Articles](${SITE.url}/articles): Expert telecom insights, hosted VoIP guides, and IT knowledge hub
- [The Complete Guide to Integrated Phone and Internet](${SITE.url}/articles/the-complete-guide-to-integrated-phone-and-internet): How combining voice and data creates cost savings, reliability, and scalability
- [FAX Bridge Done Right: Our Process Explained](${SITE.url}/articles/fax-bridge-done-right-our-process-explained): Step-by-step process of transitioning fax machines to internet-based transmission
- [How to Choose the Right Hosted VOIP Company](${SITE.url}/articles/how-to-choose-the-right-hosted-voip-company): Key considerations for selecting a reliable business hosted VoIP provider
- [What Does Fiber Connectivity Really Cost?](${SITE.url}/articles/what-does-fiber-connectivity-really-cost): Understanding the true investment and TCO of dedicated fiber optic connectivity
- [5 Signs Your Business Needs Virtual Fax](${SITE.url}/articles/5-signs-you-need-virtual-fax): Discover when to eliminate analog phone lines and switch to secure cloud fax
- [How SIP Trunking Reduces Phone Costs for Multi-Location Businesses](${SITE.url}/articles/sip-trunking-what-every-homeowner-should-know): Centralizing voice infrastructure to eliminate redundant phone lines
- [Service Areas](${SITE.url}/service-areas): Service coverage directory across Michigan and in Reading, Pennsylvania
- [Reading, PA](${SITE.url}/service-areas/reading/): Business phone, internet, FaxBridge, and IT services for Reading businesses
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
